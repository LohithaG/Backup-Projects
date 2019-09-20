package com.mss.pmj.svcs.impl;

import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Date;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.web.bind.annotation.RestController;

import com.mss.pmj.common.EnumTypeForErrorCodes;
import com.mss.pmj.common.Utils;
import com.mss.pmj.domain.Channel;
import com.mss.pmj.domain.EmpDailyActuals;
import com.mss.pmj.domain.Employee;
import com.mss.pmj.model.ServiceResponse;
import com.mss.pmj.repos.ChannelRepository;
import com.mss.pmj.repos.EmpDailyActualsRepository;
import com.mss.pmj.repos.EmployeeRepository;
import com.mss.pmj.svcs.D2HEmpActualsService;
import com.opencsv.CSVReader;
import com.opencsv.CSVWriter;

@RestController
public class D2HEmpActualsServiceImpl implements D2HEmpActualsService {
	private static Logger log = LoggerFactory.getLogger(LocationServiceImpl.class);

	@Autowired
	private Utils utils;

	@Autowired
	private ChannelRepository channelRepo;

	@Autowired
	private EmployeeRepository empRepo;

	@Autowired
	private EmpDailyActualsRepository empDailyActualsRepo;

	@Value("${backupfilesPath}")
	private String backupfiles;

	@Value("${systemFileUploadPath}")
	private String systemFileUploadPath;

	@Value("${logFileUploadPath}")
	private String logFileUploadPath;

	@Value("${sampleFilesPath}")
	private String sampleFilesPath;

	@Value("${files.url}")
	public String filesUrl;

	private static String targetDateFormat = "yyyy-MM-dd";

	private static String sourceDateFormat = "dd/MM/yyyy";

	@Override
	@Scheduled(cron = "${d2hempactuals.cron}")
	public void processFileFromFolder() {

		ServiceResponse<UploadErrors> response = new ServiceResponse<>();

		String fileName = "empactmnthly_D2H.csv";

		File file = new File(systemFileUploadPath + fileName);
		String filePath = filesUrl + fileName + "-"
				+ LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyyMMddHHmmss"));
		try {
			if (file.exists()) {
				Files.copy(file.toPath(), Paths.get(filePath), StandardCopyOption.REPLACE_EXISTING);
				addD2HEmpActuals(filePath);
			}
		} catch (Exception e) {
			response.setCode(-1);
			log.error("processing " + filePath + " raised errors", e);
		}

	}

	@Override
	public ServiceResponse<UploadErrors> addD2HEmpActuals(String filePath) throws IOException {
		log.info("Adding d2h employee actuals service implementation");
		ServiceResponse<UploadErrors> response = new ServiceResponse<>();
		ArrayList<String[]> errorList = new ArrayList<>();
		String[] record = null;
		String[] header = null;
		CSVReader reader = null;
		try {
			File file = new File(filePath);
			reader = new CSVReader(new FileReader(file), ',');
			CSVWriter exceptionFile = new CSVWriter(
					new FileWriter(logFileUploadPath + file.getName() + "-errors.csv", true));
			header = reader.readNext();
			while ((record = reader.readNext()) != null) {
				StringBuilder exceptions = new StringBuilder();
				EmpDailyActuals empDailyActuals = null;

				EmpDailyActuals empAtualsExists = empDailyActualsRepo.findByVisitDateAndMobileNumber(record[0],
						record[7]);
				if (empAtualsExists != null) {
					empDailyActuals = empAtualsExists;
				} else {
					empDailyActuals = new EmpDailyActuals();
				}
				if (!record[0].isEmpty()) {
					String visitDate = record[0];
					Date initialDate = new SimpleDateFormat(sourceDateFormat).parse(visitDate);
					SimpleDateFormat formatter = new SimpleDateFormat(targetDateFormat);
					String parsedDate = formatter.format(initialDate);
					empDailyActuals.setVisitDate(parsedDate);
					Channel channel = channelRepo.findByChannelName("D2H");
					empDailyActuals.setChannel(channel);

					if (!record[4].isEmpty()) {
						Employee emp = empRepo.findByEmpCode(record[4]);
						if (emp != null) {

							if (emp.getLocation().getChannel().getId() == 2) {
								empDailyActuals.setEmp(emp);

								if (!record[7].isEmpty()) {
									empDailyActuals.setMobileNumber(record[7]);
									if (!record[9].isEmpty() && !record[10].isEmpty()) {
										if (!record[9].contains("Phone Call") && !record[9].contains("Video Call")
												&& !record[9].contains("Whatsapp")) {
											if (record[10].contains("Preferred") || record[10].contains("Blocked")
													|| record[10].contains("Ordered")) {

												if (record[10].equals("Preferred")) {
													empDailyActuals.setSale(true);
												}
												if (record[10].contains("Blocked") || record[10].contains("Ordered")) {
													empDailyActuals.setSale(false);
												}
												if (!record[11].isEmpty()) {
													if (record[11].contains("Diamond")) {
														empDailyActuals.setItemType("Diamond");
													} else {
														empDailyActuals.setItemType("Gold");
													}

													empDailyActualsRepo.save(empDailyActuals);
												} else {
													exceptions.append("Product type can't be empty");
													exceptions.append(System.lineSeparator());
												}
											}
										}
									} else {
										exceptions.append("Record type can't be empty");
										exceptions.append(System.lineSeparator());
									}

								} else {
									exceptions.append("Mobile number can't be empty");
									exceptions.append(System.lineSeparator());
								}
							} else {
								exceptions.append(" This Employee doesn't belongs to D2H channel" + record[1]);
								exceptions.append(System.lineSeparator());
							}
						} else {
							exceptions.append("Employee doesn't exists with this emp code");
							exceptions.append(System.lineSeparator());
						}
					} else {
						exceptions.append(" emp code can't be empty");
						exceptions.append(System.lineSeparator());
					}
				} else {
					exceptions.append(" visit date can't be empty");
					exceptions.append(System.lineSeparator());
				}
				if (exceptions.length() != 0) {

					String[] record1 = new String[19];
					for (int i = 0; i < record.length; i++) {
						record1[i] = record[i];
					}
					record1[18] = exceptions.toString();
					errorList.add(record1);
					exceptionFile.writeNext(record1);
				}
			}
			exceptionFile.flush();
			exceptionFile.close();
			if (!errorList.isEmpty()) {
				UploadErrors errors = new UploadErrors();
				errors.setHeaders(header);
				errors.setRecords(errorList);
				response.setCode(-1);
				response.setData(errors);
			}
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS012.name(), EnumTypeForErrorCodes.SCUS012.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		} finally {
			reader.close();
		}
		return response;
	}

}

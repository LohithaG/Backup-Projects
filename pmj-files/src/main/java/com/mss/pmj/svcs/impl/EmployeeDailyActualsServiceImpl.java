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
import org.springframework.stereotype.Service;

import com.mss.pmj.common.EnumTypeForErrorCodes;
import com.mss.pmj.common.Utils;
import com.mss.pmj.domain.Channel;
import com.mss.pmj.domain.EmpDailyActuals;
import com.mss.pmj.domain.Employee;
import com.mss.pmj.model.ServiceResponse;
import com.mss.pmj.repos.ChannelRepository;
import com.mss.pmj.repos.EmpDailyActualsRepository;
import com.mss.pmj.repos.EmployeeRepository;
import com.mss.pmj.svcs.EmpDailyActualsService;
import com.opencsv.CSVReader;
import com.opencsv.CSVWriter;

@Service
public class EmployeeDailyActualsServiceImpl implements EmpDailyActualsService {

	private static Logger log = LoggerFactory.getLogger(EmployeeDailyActualsServiceImpl.class);

	@Autowired
	private Utils utils;

	@Autowired
	private EmployeeRepository employeeRepo;

	@Autowired
	private EmpDailyActualsRepository empDailyActualsRepo;

	@Autowired
	private ChannelRepository channelRepo;

	@Value("${logFileUploadPath}")
	private String logFileUploadPath;

	@Value("${backupfilesPath}")
	private String backupfiles;

	@Value("${systemFileUploadPath}")
	private String systemFileUploadPath;

	@Value("${sampleFilesPath}")
	private String sampleFilesPath;

	@Value("${files.url}")
	public String filesUrl;

	private static String targetDateFormat = "yyyy-MM-dd";

	private static String sourceDateFormat = "dd/MM/yyyy";

	@Override
	@Scheduled(cron = "${shwempactuals.cron}")
	public void processFileFromFolder() {

		ServiceResponse<UploadErrors> response = new ServiceResponse<>();

		String fileName = "empactmnthly_SHW.csv";

		File file = new File(systemFileUploadPath + fileName);
		String filePath = filesUrl + fileName + "-"
				+ LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyyMMddHHmmss"));
		try {
			if (file.exists()) {
				Files.copy(file.toPath(), Paths.get(filePath), StandardCopyOption.REPLACE_EXISTING);
				addEmployeeShwDailyData(filePath);
			}
		} catch (Exception e) {
			response.setCode(-1);
			log.error("processing " + filePath + " raised errors", e);
		}

	}

	@Override
	public ServiceResponse<UploadErrors> addEmployeeShwDailyData(String filePath) throws IOException {
		log.info("Add Employee Daily Actuals service implementation");
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
				String visitDate = record[0];
				Date initialDate = new SimpleDateFormat(sourceDateFormat).parse(visitDate);
				SimpleDateFormat formatter = new SimpleDateFormat(targetDateFormat);
				String parsedDate = formatter.format(initialDate);
				EmpDailyActuals empAtualsExists = empDailyActualsRepo.findByVisitDateAndMobileNumber(parsedDate,
						record[6]);
				if (empAtualsExists == null) {
					empDailyActuals = new EmpDailyActuals();
				} else {
					empDailyActuals = empAtualsExists;
				}

				empDailyActuals = new EmpDailyActuals();
				if (!record[0].isEmpty()) {
					empDailyActuals.setVisitDate(parsedDate);
					Channel channel = channelRepo.findByChannelName("SHW");
					empDailyActuals.setChannel(channel);
					if (!record[4].isEmpty()) {
						Employee emp = employeeRepo.findByEmpCode(record[7]);
						if (emp != null) {
							empDailyActuals.setEmp(emp);
							if (!record[6].isEmpty()) {
								empDailyActuals.setMobileNumber(record[6]);
								if (!record[10].isEmpty()) {
									String itemType = record[10];
									if (itemType.contains("Full Diamond") || itemType.contains("Color Diamond")) {
										empDailyActuals.setItemType("Diamond");
									} else {
										empDailyActuals.setItemType("Gold");
									}

									if (!record[15].isEmpty()) {
										String sale = record[15];
										if (sale.contains("Glance") || sale.contains("Preferred")
												|| sale.contains("Price Issue")) {
											if (sale.contains("Preferred")) {
												empDailyActuals.setSale(true);
											} else {
												empDailyActuals.setSale(false);
											}
											empDailyActualsRepo.save(empDailyActuals);
										} else {
											exceptions.append(
													"record Type is other Than Glance/Preferred/PriceIssue for with type ");
										}
									} else {
										exceptions.append("Record type can't be empty and Mobile number");
									}
								} else {
									exceptions.append("Product Type can't be empty");
								}

							} else {
								exceptions.append("Mobile number can't be empty");
							}
						} else {
							exceptions.append("Employee doesn't exists with this emp code ");
						}
					} else {
						exceptions.append(" emp code can't be empty");
					}

				} else {
					exceptions.append(" visit date can't be empty");
				}

				if (exceptions.length() != 0) {
					String[] record1 = new String[18];

					for (int i = 0; i < record.length; i++) {
						record1[i] = record[i];
					}
					record1[17] = exceptions.toString();
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
			response.setError(EnumTypeForErrorCodes.SCUS010.name(), EnumTypeForErrorCodes.SCUS010.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		} finally {
			reader.close();
		}

		return response;
	}

}

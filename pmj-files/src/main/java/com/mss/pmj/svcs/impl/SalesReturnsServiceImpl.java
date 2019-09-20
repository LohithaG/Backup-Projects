package com.mss.pmj.svcs.impl;

import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import com.mss.pmj.common.EnumTypeForErrorCodes;
import com.mss.pmj.common.Utils;
import com.mss.pmj.domain.Employee;
import com.mss.pmj.domain.Location;
import com.mss.pmj.domain.SalesReturns;
import com.mss.pmj.model.ServiceResponse;
import com.mss.pmj.repos.EmployeeRepository;
import com.mss.pmj.repos.LocationRepository;
import com.mss.pmj.repos.SalesReturnsRepository;
import com.mss.pmj.svcs.SalesReturnsService;
import com.opencsv.CSVReader;
import com.opencsv.CSVWriter;

@Service
public class SalesReturnsServiceImpl implements SalesReturnsService {

	private static Logger log = LoggerFactory.getLogger(SalesReturnsServiceImpl.class);

	@Autowired
	private Utils utils;

	@Autowired
	private EmployeeRepository employeeRepo;

	@Autowired
	private LocationRepository locationRepo;

	@Autowired
	private SalesReturnsRepository salesReturnsRepo;

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

	@Override
	@Scheduled(cron = "${salesReturn.cron}")
	public void processFileFromFolder() {

		ServiceResponse<UploadErrors> response = new ServiceResponse<>();

		String fileName = "salesreturn.csv";

		File file = new File(systemFileUploadPath + fileName);
		String filePath = filesUrl + fileName + "-"
				+ LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyyMMddHHmmss"));
		try {
			if (file.exists()) {
				Files.copy(file.toPath(), Paths.get(filePath), StandardCopyOption.REPLACE_EXISTING);
				addSalesReturn(filePath);
			}
		} catch (Exception e) {
			response.setCode(-1);
			log.error("processing " + filePath + " raised errors", e);
		}

	}

	@Override
	public ServiceResponse<UploadErrors> addSalesReturn(String filePath) throws IOException {
		log.info("save Sales Return service implementation");
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
				SalesReturns saleReturn = salesReturnsRepo.findByDocNoAndStockCodeAndVariantNameAndTransactionDate(
						record[1], record[4], record[5], record[0]);

				if (saleReturn != null) {
					saleReturn = salesReturnsRepo.findByDocNoAndStockCodeAndVariantNameAndTransactionDate(record[1],
							record[4], record[5], record[0]);
				} else {
					saleReturn = new SalesReturns();
				}

				if (!record[4].isEmpty()) {
					saleReturn.setStockCode(record[4]);

					if (!record[1].isEmpty()) {
						saleReturn.setDocNo(record[1]);
						if (!record[0].isEmpty()) {
							saleReturn.setTransactionDate(record[0]);
							if (!record[5].isEmpty()) {
								saleReturn.setVariantName(record[5]);

								if (!record[11].isEmpty()) {
									saleReturn.setAmountPayable(Double.parseDouble(record[11]));
									if (!record[21].isEmpty()) {
										saleReturn.setPieces(Integer.parseInt(record[21]));
									}
									if (!record[6].isEmpty()) {
										saleReturn.setGrossWeight(Double.parseDouble(record[6]));

										if (!record[7].isEmpty()) {
											saleReturn.setNetWeight(Double.parseDouble(record[6]));
										}
										if (!record[8].isEmpty()) {
											saleReturn.setDiamondWeight(Double.parseDouble(record[6]));
										}

										if (!record[19].isEmpty()) {
											Location location = locationRepo.findByLocationName(record[19]);
											if (location != null) {
												saleReturn.setReturnLocation(location);

												if (!record[9].isEmpty()) {
													Employee employee = employeeRepo.findByEmpCode(record[9]);
													if (employee != null) {
														saleReturn.setEmpId(employee);

														if (!record[22].isEmpty()) {
															saleReturn.setPurity(record[22]);
														}
														salesReturnsRepo.save(saleReturn);
													} else {

														exceptions.append("Employee doesn't exists with this emp code");
													}
												} else {
													exceptions.append("Employee code can't be empty");
												}
											} else {
												exceptions.append("Location doesn't exists with this location name");
											}
										} else {
											exceptions.append("Return location name can't be empty");
										}

									} else {
										exceptions.append("Gross weight can't be empty");
									}
								} else {
									exceptions.append("Payable amount can't be empty");
								}

							} else {
								exceptions.append("Variant id can't be empty");
							}
						} else {
							exceptions.append("Transaction date can't be empty");
						}
					} else {
						exceptions.append("Doc Number can't be empty");
					}

				} else {
					exceptions.append("stock code can't be empty");
				}
				if (exceptions.length() != 0) {
					String[] record1 = new String[24];
					for (int i = 0; i < record.length; i++) {
						record1[i] = record[i];
					}
					record1[23] = exceptions.toString();
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

			response.setError(EnumTypeForErrorCodes.SCUS005.name(), EnumTypeForErrorCodes.SCUS005.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		} finally {
			reader.close();
		}
		return response;
	}
}

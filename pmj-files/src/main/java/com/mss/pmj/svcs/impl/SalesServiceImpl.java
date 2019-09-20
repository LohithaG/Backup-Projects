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
import com.mss.pmj.domain.ItemClassification;
import com.mss.pmj.domain.Location;
import com.mss.pmj.domain.Sales;
import com.mss.pmj.model.ServiceResponse;
import com.mss.pmj.repos.EmployeeRepository;
import com.mss.pmj.repos.ItemClassificationRepository;
import com.mss.pmj.repos.LocationRepository;
import com.mss.pmj.repos.SalesRepository;
import com.mss.pmj.svcs.SalesService;
import com.opencsv.CSVReader;
import com.opencsv.CSVWriter;

@Service
public class SalesServiceImpl implements SalesService {

	private static Logger log = LoggerFactory.getLogger(SalesServiceImpl.class);

	@Autowired
	private Utils utils;

	@Autowired
	private EmployeeRepository employeeRepo;

	@Autowired
	private LocationRepository locationRepo;

	@Autowired
	private ItemClassificationRepository itemClassRepo;

	@Autowired
	private SalesRepository salesRepo;

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

	public static final String PATTERN = "yyyy-MM-dd HH:mm:ss";

	@Override
	@Scheduled(cron = "${salesData.cron}")
	public void processFileFromFolder() {

		ServiceResponse<UploadErrors> response = new ServiceResponse<>();

		String fileName = "salesdata.csv";

		File file = new File(systemFileUploadPath + fileName);
		String filePath = filesUrl + fileName + "-"
				+ LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyyMMddHHmmss"));
		try {
			if (file.exists()) {
				Files.copy(file.toPath(), Paths.get(filePath), StandardCopyOption.REPLACE_EXISTING);
				addSales(filePath);
			}
		} catch (Exception e) {
			response.setCode(-1);
			log.error("processing " + filePath + " raised errors", e);
		}

	}

	@Override
	public ServiceResponse<UploadErrors> addSales(String filePath) throws IOException {

		log.info("save SalesData service implementation");
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
				String labelNo = record[5];
				String docNo = record[0];
				Long variandId = Long.parseLong(record[1]);
				String transDate = record[2];
				Sales sale = salesRepo.findByDocNumberAndLabelNoAndVariantIdAndTransactionDate(docNo, labelNo,
						variandId, transDate);

				if (sale != null) {
					sale = salesRepo.findByDocNumberAndLabelNoAndVariantIdAndTransactionDate(docNo, labelNo, variandId,
							transDate);
				} else {
					sale = new Sales();
				}

				if (!record[5].isEmpty()) {
					sale.setLabelNo(labelNo);
					if (!record[0].isEmpty()) {
						sale.setDocNumber(docNo);
						if (!record[1].isEmpty()) {
							sale.setVariantId(variandId);
							if (!record[2].isEmpty()) {
								sale.setTransactionDate(transDate);

								if (!record[6].isEmpty()) {
									Employee employee = employeeRepo.findByEmpCode(record[6]);
									if (employee != null) {
										sale.setEmpId(employee);

										if (!record[8].isEmpty()) {
											sale.setCustomerName(record[8]);

											if (!record[10].isEmpty()) {
												sale.setItemName(record[10]);
												String itemCode = record[10].substring(0, 3);
												ItemClassification itemClass = itemClassRepo.findByItemCode(itemCode);
												if (itemClass != null) {
													if (itemClass.getItemType().equals("Gold")) {
														sale.setItemType("Gold");
													} else if (itemClass.getItemType().equals("Diamond")) {
														sale.setItemType("Diamond");
													} else if (itemClass.getItemType().equals("Exceptions")) {

														if (!record[18].isEmpty()) {
															Double diaWt = Double.parseDouble(record[18]);
															if (diaWt == 0) {
																sale.setItemType("Gold");
															} else {
																sale.setItemType("Diamond");
															}

														} else {
															exceptions.append("Diamond weight can't be empty");
														}
													}
													if (!record[11].isEmpty()) {
														sale.setPurity(record[11]);
													}
													if (!record[12].isEmpty()) {
														sale.setGrossWeight(Double.parseDouble(record[12]));

														if (!record[13].isEmpty()) {
															sale.setPieces(Integer.parseInt(record[13]));
														}
														if (!record[14].isEmpty()) {
															sale.setNetWeight(Double.parseDouble(record[14]));
														}
														if (!record[15].isEmpty()) {
															sale.setStoneWeight(Double.parseDouble(record[15]));
														}
														if (!record[16].isEmpty()) {
															sale.setStonePieces(Integer.parseInt(record[16]));
														}
														if (!record[18].isEmpty()) {
															sale.setDiamondWeight(Double.parseDouble(record[18]));
															if (!record[26].isEmpty()) {
																sale.setGoldRate(Double.parseDouble(record[26]));
															}
															if (!record[27].isEmpty()) {
																sale.setTotalSoldAmount(Double.parseDouble(record[27]));
																if (!record[29].isEmpty()) {
																	sale.setMakingRate(Double.parseDouble(record[29]));
																}
																if (!record[33].isEmpty()) {
																	sale.setCostPrice(Double.parseDouble(record[33]));

																	if (!record[36].isEmpty()) {
																		sale.setTagPrice(
																				Double.parseDouble(record[36]));
																		if (!record[32].isEmpty()) {
																			Location location = locationRepo
																					.findByLocationCode(record[32]);
																			if (location != null) {
																				sale.setLocation(location);
																				salesRepo.save(sale);
																			} else {
																				exceptions.append(
																						"Location doesn't exists which this location code");
																			}
																		} else {
																			exceptions.append(
																					"Location code can't be empty");
																		}

																	} else {
																		exceptions.append("Tag price can't be empty");
																	}

																} else {
																	exceptions.append("Cost price can't be empty");
																}

															} else {
																exceptions.append("Total sold amount can't be empty");
															}
														} else {
															exceptions.append("Diamond weight can't be empty");
														}
													} else {
														exceptions.append("Gross weight can't be empty");
													}
												} else {
													exceptions.append("Provide the correct item name");
												}

											} else {
												exceptions.append("item name can't be empty");
											}

										} else {
											exceptions.append("Customer name can't be empty");
										}

									} else {
										exceptions.append("Employee doesn't exists with this emp code");
									}
								} else {
									exceptions.append("Emp code can't be empty");
								}

							} else {
								exceptions.append("transaction date can't be empty");
							}
						} else {
							exceptions.append("variant id can't be empty");
						}
					} else {
						exceptions.append("doc number can't be empty");
					}
				} else {
					exceptions.append("lable number can't be empty");
				}

				if (exceptions.length() != 0) {
					String[] record1 = new String[38];
					for (int i = 0; i < record.length; i++) {
						record1[i] = record[i];
					}
					record1[37] = exceptions.toString();
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
			response.setError(EnumTypeForErrorCodes.SCUS004.name(), EnumTypeForErrorCodes.SCUS004.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		} finally {
			reader.close();
		}
		return response;
	}

}

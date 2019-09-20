package com.mss.pmj.svcs.impl;

import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.text.DecimalFormat;
import java.text.SimpleDateFormat;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;
import java.time.temporal.ChronoField;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.mss.pmj.common.EnumTypeForErrorCodes;
import com.mss.pmj.common.Utils;
import com.mss.pmj.domain.Employee;
import com.mss.pmj.domain.EmployeeItemMonthlyTarget;
import com.mss.pmj.model.ServiceResponse;
import com.mss.pmj.repos.EmployeeItemMonthlyTargetRepository;
import com.mss.pmj.repos.EmployeeRepository;
import com.mss.pmj.svcs.EmployeeItemMonthlyTargetService;
import com.opencsv.CSVReader;
import com.opencsv.CSVWriter;

@Service
public class EmployeeItemMonthlyTargetServiceImpl implements EmployeeItemMonthlyTargetService {

	private static Logger log = LoggerFactory.getLogger(EmployeeItemMonthlyTargetServiceImpl.class);

	@Autowired
	private Utils utils;

	@Autowired
	private EmployeeRepository employeeRepo;

	@Autowired
	private EmployeeItemMonthlyTargetRepository employeeItemMonthlyTargetRepo;

	@Value("${logFileUploadPath}")
	private String logFileUploadPath;

	@Override
	public ServiceResponse<UploadErrors> addEmployeeMonthlyData(@PathVariable String sheetName) throws IOException {
		log.info("Employee Item Monthly Target service implementation");
		ServiceResponse<UploadErrors> response =null;
		if (sheetName.contains("Diamond")) {
			response = this.empItemMonthlyDiamond(sheetName);
		} else {
			response = this.empItemMonthlyGold(sheetName);
		}
		return response;

	}

	public ServiceResponse<UploadErrors> empItemMonthlyDiamond(@PathVariable String filePath) throws IOException {
		log.info("save employee monthly diamond Data service implementation");
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
			
			int sheetNameLength = filePath.length();
			String monthAndYear = filePath.substring(sheetNameLength - 12, sheetNameLength - 4);
			String monthName = monthAndYear.substring(0, 3).toUpperCase();
			String yearOfMonth = monthAndYear.substring(4, monthAndYear.length());
			DateTimeFormatter yearFormat = DateTimeFormatter.ofPattern("yyyy");
			int completeYear = yearFormat.parse(yearOfMonth).get(ChronoField.YEAR);
			String targetMonth = monthName + "-" + completeYear;
			while ((record = reader.readNext()) != null) {
				StringBuilder exceptions = new StringBuilder();

				EmployeeItemMonthlyTarget empItemMonthlyDiamond = new EmployeeItemMonthlyTarget();
				if (!record[1].isEmpty()) {
					Employee employeeExists = employeeRepo.findByEmpCode(record[1]);
					if (employeeExists != null) {
						EmployeeItemMonthlyTarget employeeItemMonthlyTargetExists = employeeItemMonthlyTargetRepo
								.findByEmpAndTgtMonthAndItemType(employeeExists.getId(), targetMonth, "Diamond");
						if (employeeItemMonthlyTargetExists == null) {
							ZonedDateTime now = ZonedDateTime.now();
							empItemMonthlyDiamond.setEmp(employeeExists);
							empItemMonthlyDiamond.setCreatedTime(now);
							empItemMonthlyDiamond.setUpdatedTime(now);
							empItemMonthlyDiamond.setItemType("Diamond");
							String conversionPercentage = record[16];
							Double conversion = Double.parseDouble(conversionPercentage.replace("%", ""));
							empItemMonthlyDiamond.setConversion(conversion);

							String walkinValue = record[15];
							if (!walkinValue.contains("-")) {
								if (!walkinValue.contains("#")) {
									Double walkins = Double.parseDouble(record[15]);
									empItemMonthlyDiamond.setWalkins(walkins.intValue());

								} else {
									empItemMonthlyDiamond.setWalkins(0);
								}
							} else {
								empItemMonthlyDiamond.setWalkins(0);
							}
							DecimalFormat newFormat = new DecimalFormat("#.###");
							if (record[13] != null || !record[13].isEmpty()) {
								if (!record[13].contains("#DIV/0!")) {
									Double tgtInCts = Double.parseDouble(record[13]);
									if (tgtInCts > 0) {
										// Double qty = Double.parseDouble(record[4]);

										empItemMonthlyDiamond.setQuantity(tgtInCts);
										Double value = (tgtInCts * 85000);
										Double valueInLakhs = value / 100000;

										Double threeDecimal = Double.valueOf(newFormat.format(valueInLakhs));
										empItemMonthlyDiamond.setValue(threeDecimal);
									} else {
										empItemMonthlyDiamond.setValue(0.0d);
										empItemMonthlyDiamond.setQuantity(0.0d);
									}
									if (!record[13].contains("-")) {
										if (!record[13].contains("#")) {

											String netWalkinRecord = record[17];
											if (!netWalkinRecord.contains("-")) {
												if (!netWalkinRecord.contains("0")) {
													Double netWalkins = Double.parseDouble(record[17]);
													Double ticketSize = (tgtInCts * 85000) / netWalkins;
													Double ticketSizeInLakhs = ticketSize / 100000;
													// DecimalFormat newFormat = new DecimalFormat("#.###");
													Double threeDecimalticket = Double
															.valueOf(newFormat.format(ticketSizeInLakhs));
													empItemMonthlyDiamond.setTicketSize(threeDecimalticket);
												} else {
													empItemMonthlyDiamond.setTicketSize(0.0);
												}
											} else {
												empItemMonthlyDiamond.setTicketSize(0.0);
											}
										} else {
											empItemMonthlyDiamond.setTicketSize(0.0);
										}
									} else {
										empItemMonthlyDiamond.setTicketSize(0.0);
									}
								} else {
									empItemMonthlyDiamond.setValue(0.0d);
									empItemMonthlyDiamond.setTicketSize(0.0);
									empItemMonthlyDiamond.setQuantity(0.0d);

								}

								String empClass = record[8];
								String employeeClass = empClass.trim();
								if (!empClass.isEmpty()) {
									if (empClass.length() > 0) {
										empItemMonthlyDiamond.setEmpClass(employeeClass.charAt(0));
									}
								} else {
									empItemMonthlyDiamond.setEmpClass('D');
								}

								empItemMonthlyDiamond.setTgtMonth(targetMonth);
								/*
								 * if (!record[4].isEmpty()) { Double qE://pmjData/ty = Double.parseDouble(record[4]);
								 * empItemMonthlyDiamond.setQuantity(qty); Double value = (qty * 85000); Double
								 * valueInLakhs = value / 100000; DecimalFormat newFormat = new
								 * DecimalFormat("#.###"); Double threeDecimal =
								 * Double.valueOf(newFormat.format(valueInLakhs));
								 * empItemMonthlyDiamond.setValue(threeDecimal); }
								 */
								Date date = new SimpleDateFormat("MMM-yyyy").parse(targetMonth);
								Calendar cal = Calendar.getInstance();
								cal.setTime(date);
								cal.get(Calendar.MONTH);
								int monthOfYear = cal.get(Calendar.MONTH) + 1;
								int lastDate = cal.getActualMaximum(Calendar.DATE);
								cal.set(Calendar.DATE, lastDate);
								int lastDay = cal.get(Calendar.DAY_OF_MONTH);
								empItemMonthlyDiamond.setWorkingDays(lastDay);
								employeeItemMonthlyTargetRepo.save(empItemMonthlyDiamond);
							}
						}
						// update logic.
						else {

							ZonedDateTime now = ZonedDateTime.now();
							employeeItemMonthlyTargetExists.setEmp(employeeExists);
							employeeItemMonthlyTargetExists.setCreatedTime(now);
							employeeItemMonthlyTargetExists.setUpdatedTime(now);
							employeeItemMonthlyTargetExists.setItemType("Diamond");
							String conversionPercentage = record[16];
							Double conversion = Double.parseDouble(conversionPercentage.replace("%", ""));
							employeeItemMonthlyTargetExists.setConversion(conversion);

							String walkinValue = record[15];
							if (!walkinValue.contains("-")) {
								if (!walkinValue.contains("#")) {
									Double walkins = Double.parseDouble(record[15]);
									employeeItemMonthlyTargetExists.setWalkins(walkins.intValue());

								} else {
									employeeItemMonthlyTargetExists.setWalkins(0);
								}
							} else {
								employeeItemMonthlyTargetExists.setWalkins(0);
							}
							DecimalFormat newFormat = new DecimalFormat("#.###");
							if (record[13] != null || !record[13].isEmpty()) {
								Double tgtInCts = Double.parseDouble(record[13]);
								if (tgtInCts > 0) {
									// Double qty = Double.parseDouble(record[4]);

									employeeItemMonthlyTargetExists.setQuantity(tgtInCts);
									Double value = (tgtInCts * 85000);
									Double valueInLakhs = value / 100000;

									Double threeDecimal = Double.valueOf(newFormat.format(valueInLakhs));
									employeeItemMonthlyTargetExists.setValue(threeDecimal);
								} else {
									employeeItemMonthlyTargetExists.setValue(0.0d);
									employeeItemMonthlyTargetExists.setQuantity(0.0d);
								}
								if (!record[13].contains("-")) {
									if (!record[13].contains("#")) {

										String netWalkinRecord = record[17];
										if (!netWalkinRecord.contains("-")) {
											if (!netWalkinRecord.contains("0")) {
												Double netWalkins = Double.parseDouble(record[17]);
												Double ticketSize = (tgtInCts * 85000) / netWalkins;
												Double ticketSizeInLakhs = ticketSize / 100000;
												// DecimalFormat newFormat = new DecimalFormat("#.###");
												Double threeDecimalticket = Double
														.valueOf(newFormat.format(ticketSizeInLakhs));
												employeeItemMonthlyTargetExists.setTicketSize(threeDecimalticket);
											} else {
												employeeItemMonthlyTargetExists.setTicketSize(0.0);
											}
										} else {
											employeeItemMonthlyTargetExists.setTicketSize(0.0);
										}
									} else {
										employeeItemMonthlyTargetExists.setTicketSize(0.0);
									}
								} else {
									employeeItemMonthlyTargetExists.setTicketSize(0.0);
								}
							} else {
								employeeItemMonthlyTargetExists.setValue(0.0d);
								employeeItemMonthlyTargetExists.setTicketSize(0.0);
							}

							String empClass = record[8];
							String employeeClass = empClass.trim();
							if (!empClass.isEmpty()) {
								if (empClass.length() > 0) {
									empItemMonthlyDiamond.setEmpClass(employeeClass.charAt(0));
								}
							} else {
								empItemMonthlyDiamond.setEmpClass('D');
							}

							employeeItemMonthlyTargetExists.setTgtMonth(targetMonth);
							/*
							 * if (!record[4].isEmpty()) { Double qty = Double.parseDouble(record[4]);
							 * empItemMonthlyDiamond.setQuantity(qty); Double value = (qty * 85000); Double
							 * valueInLakhs = value / 100000; DecimalFormat newFormat = new
							 * DecimalFormat("#.###"); Double threeDecimal =
							 * Double.valueOf(newFormat.format(valueInLakhs));
							 * empItemMonthlyDiamond.setValue(threeDecimal); }
							 */
							Date date = new SimpleDateFormat("MMM-yyyy").parse(targetMonth);
							Calendar cal = Calendar.getInstance();
							cal.setTime(date);
							cal.get(Calendar.MONTH);
							int monthOfYear = cal.get(Calendar.MONTH) + 1;
							int lastDate = cal.getActualMaximum(Calendar.DATE);
							cal.set(Calendar.DATE, lastDate);
							int lastDay = cal.get(Calendar.DAY_OF_MONTH);
							employeeItemMonthlyTargetExists.setWorkingDays(lastDay);
							employeeItemMonthlyTargetRepo.save(employeeItemMonthlyTargetExists);

						}

					} else {
						exceptions.append("Employee not found with given employee code");
					}
				} else {
					exceptions.append("Employee code can't be empty");
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
			response.setError(EnumTypeForErrorCodes.SCUS008.name(), EnumTypeForErrorCodes.SCUS008.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		} finally {
			reader.close();
		}
		return response;
	}

	public ServiceResponse<UploadErrors> empItemMonthlyGold(@PathVariable String filePath) throws IOException {
		log.info("save employee monthly  gold Data service implementation");
		ServiceResponse<UploadErrors> response = new ServiceResponse<>();
		ArrayList<String[]> errorList = new ArrayList<>();
		String[] record = null;
		String[] header = null;
		CSVReader reader = null;
		List<EmployeeItemMonthlyTarget> employeeItemMonthlyTargetList = new ArrayList<>();
		try {
			File file = new File(filePath);
			reader = new CSVReader(new FileReader(file), ',');
			CSVWriter exceptionFile = new CSVWriter(
					new FileWriter(logFileUploadPath + file.getName() + "-errors.csv", true));
			header = reader.readNext();
			String targetMonth = null;
			int sheetNameLength = filePath.length();
			String monthAndYear = filePath.substring(sheetNameLength - 12, sheetNameLength - 4);
			String monthName = monthAndYear.substring(0, 3).toUpperCase();
			String yearOfMonth = monthAndYear.substring(4, monthAndYear.length());
			DateTimeFormatter yearFormat = DateTimeFormatter.ofPattern("yyyy");
			int completeYear = yearFormat.parse(yearOfMonth).get(ChronoField.YEAR);
			targetMonth = monthName + "-" + completeYear;
			while ((record = reader.readNext()) != null) {
				StringBuilder exceptions = new StringBuilder();
				EmployeeItemMonthlyTarget empItemMonthlyGold = new EmployeeItemMonthlyTarget();
				if (!record[1].isEmpty()) {
					Employee employeeExists = employeeRepo.findByEmpCode(record[1]);
					if (employeeExists != null) {
						EmployeeItemMonthlyTarget employeeItemMonthlyTarget = employeeItemMonthlyTargetRepo
								.findByEmpAndTgtMonthAndItemType(employeeExists.getId(), targetMonth, "Gold");
						if (employeeItemMonthlyTarget == null) {
							ZonedDateTime now = ZonedDateTime.now();
							empItemMonthlyGold.setEmp(employeeExists);
							empItemMonthlyGold.setCreatedTime(now);
							empItemMonthlyGold.setUpdatedTime(now);
							empItemMonthlyGold.setItemType("Gold");
							String conversionPercentage = record[16];
							Double conversion = 0.0d;
							if (!conversionPercentage.isEmpty()) {
								conversion = Double.parseDouble(conversionPercentage.replace("%", ""));
								empItemMonthlyGold.setConversion(conversion);
							} else {
								empItemMonthlyGold.setConversion(conversion);
							}
							String walkinValue = record[15];
							if (!walkinValue.contains("-")) {
								if (!walkinValue.contains("0")) {
									Double walkins = Double.parseDouble(record[15]);
									empItemMonthlyGold.setWalkins(walkins.intValue());
								} else {
									empItemMonthlyGold.setWalkins(0);
								}
							} else {
								empItemMonthlyGold.setWalkins(0);
							}
							if (!record[13].isEmpty()) {
								if (record[13] != null) {
									DecimalFormat newFormat = new DecimalFormat("#.###");
									if (!record[13].contains("-")) {
										Double tgtInGrams = Double.parseDouble(record[13]);
										// setting target quantity

										if (tgtInGrams > 0) {
											// Double qty = Double.parseDouble(record[4]);
											Double goldValue = (tgtInGrams / 1000) * 3600000;
											Double goldValueInLakhs = goldValue / 100000;
											Double threeDecimal = Double.valueOf(newFormat.format(goldValueInLakhs));
											empItemMonthlyGold.setValue(threeDecimal);
											empItemMonthlyGold.setQuantity(tgtInGrams / 1000);
										} else {
											empItemMonthlyGold.setQuantity(0.0d);
											empItemMonthlyGold.setValue(0.0d);
										}
										// setting ticket size
										String netWalkinsRecord = record[17];
										if (!netWalkinsRecord.isEmpty()) {
											if (!netWalkinsRecord.contains("-")) {
												if (!netWalkinsRecord.contains("0")) {
													Double netWalkins = Double.parseDouble(record[17]);
													Double goldInKgs = (tgtInGrams / 1000) * 3600000;
													Double ticketSize = goldInKgs / netWalkins;
													Double ticketSizeInLakhs = ticketSize / 100000;
													// DecimalFormat newFormat = new DecimalFormat("#.###");
													Double threeDecimalticket = Double
															.valueOf(newFormat.format(ticketSizeInLakhs));

													empItemMonthlyGold.setTicketSize(threeDecimalticket);

												} else {
													empItemMonthlyGold.setTicketSize(0.0d);
												}
											} else {
												empItemMonthlyGold.setTicketSize(0.0d);
											}
										}
									} else {
										empItemMonthlyGold.setTicketSize(0.0d);
									}
								} else {
									empItemMonthlyGold.setQuantity(0.0d);
									empItemMonthlyGold.setTicketSize(0.0d);
								}
								String empClass = record[8];
								String employeeClass = empClass.trim();
								if (!empClass.isEmpty()) {
									if (empClass.length() > 0) {
										empItemMonthlyGold.setEmpClass(employeeClass.charAt(0));
									}
								} else {
									empItemMonthlyGold.setEmpClass('D');
								}

								empItemMonthlyGold.setTgtMonth(targetMonth);
								/*
								 * if (!record[4].isEmpty()) { Double qty = Double.parseDouble(record[4]);
								 * Double goldValue = (qty / 1000) * 3600000; Double goldValueInLakhs =
								 * goldValue / 100000; DecimalFormat newFormat = new DecimalFormat("#.###");
								 * Double threeDecimal = Double.valueOf(newFormat.format(goldValueInLakhs));
								 * 
								 * empItemMonthlyGold.setValue(threeDecimal);
								 * empItemMonthlyGold.setQuantity(qty);
								 * 
								 * }
								 */
								Date date = new SimpleDateFormat("MMM-yyyy").parse(targetMonth);
								Calendar cal = Calendar.getInstance();
								cal.setTime(date);
								cal.get(Calendar.MONTH);
								int monthOfYear = cal.get(Calendar.MONTH) + 1;
								int lastDate = cal.getActualMaximum(Calendar.DATE);
								cal.set(Calendar.DATE, lastDate);
								int lastDay = cal.get(Calendar.DAY_OF_MONTH);

								empItemMonthlyGold.setWorkingDays(lastDay);

								employeeItemMonthlyTargetRepo.save(empItemMonthlyGold);

								employeeItemMonthlyTargetList.add(empItemMonthlyGold);
							}
						}
						// update logic
						else {

							ZonedDateTime now = ZonedDateTime.now();
							employeeItemMonthlyTarget.setEmp(employeeExists);
							employeeItemMonthlyTarget.setCreatedTime(now);
							employeeItemMonthlyTarget.setUpdatedTime(now);
							employeeItemMonthlyTarget.setItemType("Gold");
							String conversionPercentage = record[16];
							Double conversion = 0.0d;
							if (!conversionPercentage.isEmpty()) {
								conversion = Double.parseDouble(conversionPercentage.replace("%", ""));
								employeeItemMonthlyTarget.setConversion(conversion);
							} else {
								employeeItemMonthlyTarget.setConversion(conversion);
							}
							String walkinValue = record[15];
							if (!walkinValue.contains("-")) {
								if (!walkinValue.contains("0")) {
									Double walkins = Double.parseDouble(record[15]);
									employeeItemMonthlyTarget.setWalkins(walkins.intValue());
								} else {
									employeeItemMonthlyTarget.setWalkins(0);
								}
							} else {
								employeeItemMonthlyTarget.setWalkins(0);
							}
							if (!record[13].isEmpty()
							// || record[13]!= null
							) {
								if (record[13] != null) {
									DecimalFormat newFormat = new DecimalFormat("#.###");
									if (!record[13].contains("-")) {
										Double tgtInGrams = Double.parseDouble(record[13]);
										// setting target quantity

										if (tgtInGrams > 0) {
											// Double qty = Double.parseDouble(record[4]);
											Double goldValue = (tgtInGrams / 1000) * 3600000;
											Double goldValueInLakhs = goldValue / 100000;
											Double threeDecimal = Double.valueOf(newFormat.format(goldValueInLakhs));
											employeeItemMonthlyTarget.setValue(threeDecimal);
											employeeItemMonthlyTarget.setQuantity(tgtInGrams / 1000);
										} else {
											employeeItemMonthlyTarget.setValue(0.0d);
											employeeItemMonthlyTarget.setQuantity(0.0d);
										}
										// setting ticket size
										String netWalkinsRecord = record[17];
										if (!netWalkinsRecord.isEmpty()) {
											if (!netWalkinsRecord.contains("-")) {
												if (!netWalkinsRecord.contains("0")) {
													Double netWalkins = Double.parseDouble(record[17]);
													Double goldInKgs = (tgtInGrams / 1000) * 3600000;
													Double ticketSize = goldInKgs / netWalkins;
													Double ticketSizeInLakhs = ticketSize / 100000;
													// DecimalFormat newFormat = new DecimalFormat("#.###");
													Double threeDecimalticket = Double
															.valueOf(newFormat.format(ticketSizeInLakhs));

													employeeItemMonthlyTarget.setTicketSize(threeDecimalticket);

												} else {
													employeeItemMonthlyTarget.setTicketSize(0.0d);
												}
											} else {
												employeeItemMonthlyTarget.setTicketSize(0.0d);
											}
										}
									} else {
										employeeItemMonthlyTarget.setTicketSize(0.0d);
									}
								} else {
									employeeItemMonthlyTarget.setQuantity(0.0d);
									employeeItemMonthlyTarget.setTicketSize(0.0d);
								}
								String empClass = record[8];
								String employeeClass = empClass.trim();
								if (!empClass.isEmpty()) {
									if (empClass.length() > 0) {
										empItemMonthlyGold.setEmpClass(employeeClass.charAt(0));
									}
								} else {
									empItemMonthlyGold.setEmpClass('D');
								}
								employeeItemMonthlyTarget.setTgtMonth(targetMonth);
								/*
								 * if (!record[4].isEmpty()) { Double qty = Double.parseDouble(record[4]);
								 * Double goldValue = (qty / 1000) * 3600000; Double goldValueInLakhs =
								 * goldValue / 100000; DecimalFormat newFormat = new DecimalFormat("#.###");
								 * Double threeDecimal = Double.valueOf(newFormat.format(goldValueInLakhs));
								 * 
								 * empItemMonthlyGold.setValue(threeDecimal);
								 * empItemMonthlyGold.setQuantity(qty);
								 * 
								 * }
								 */
								Date date = new SimpleDateFormat("MMM-yyyy").parse(targetMonth);
								Calendar cal = Calendar.getInstance();
								cal.setTime(date);
								cal.get(Calendar.MONTH);
								int monthOfYear = cal.get(Calendar.MONTH) + 1;
								int lastDate = cal.getActualMaximum(Calendar.DATE);
								cal.set(Calendar.DATE, lastDate);
								int lastDay = cal.get(Calendar.DAY_OF_MONTH);

								employeeItemMonthlyTarget.setWorkingDays(lastDay);

								employeeItemMonthlyTargetRepo.save(employeeItemMonthlyTarget);

								employeeItemMonthlyTargetList.add(employeeItemMonthlyTarget);
							}
						}
					} else {
						exceptions.append("Employee not found with given employee code");
					}
				} else {
					exceptions.append("Employee code can't be Empty  ");
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
			response.setError(EnumTypeForErrorCodes.SCUS008.name(), EnumTypeForErrorCodes.SCUS008.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		} finally {
			reader.close();
		}
		return response;
	}

}

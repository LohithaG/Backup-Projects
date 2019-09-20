package com.mss.pmj.svcs.impl;

import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.RestController;

import com.mss.pmj.common.EnumTypeForErrorCodes;
import com.mss.pmj.common.Utils;
import com.mss.pmj.domain.Employee;
import com.mss.pmj.domain.Location;
import com.mss.pmj.domain.Team;
import com.mss.pmj.domain.TeamItemMonthlyTarget;
import com.mss.pmj.model.ServiceResponse;
import com.mss.pmj.repos.EmployeeRepository;
import com.mss.pmj.repos.LocationRepository;
import com.mss.pmj.repos.TeamItemMonthlyTargetRepository;
import com.mss.pmj.repos.TeamRepository;
import com.mss.pmj.svcs.D2hTeamItemMonthlyTargetService;
import com.opencsv.CSVReader;
import com.opencsv.CSVWriter;

@RestController
public class D2hTeamItemMonthlyTargetServiceImpl implements D2hTeamItemMonthlyTargetService {
	private static Logger log = LoggerFactory.getLogger(LocationServiceImpl.class);

	@Autowired
	private Utils utils;

	@Autowired
	private LocationRepository locationRepo;

	@Autowired
	private EmployeeRepository empRepo;

	@Autowired
	private TeamRepository teamRepo;

	@Value("${logFileUploadPath}")
	private String logFileUploadPath;

	@Value("${sampleFilesPath}")
	private String sampleFilesPath;

	@Autowired
	private TeamItemMonthlyTargetRepository teamItemMonthlyTgtRepo;

	@Override
	public ServiceResponse<UploadErrors> addTeamsMonthlyTargets(String filePath) throws IOException {
		log.info("adding teams service implementation");
		ServiceResponse<UploadErrors> response = new ServiceResponse<>();
		ArrayList<String[]> errorList = new ArrayList<>();
		String[] header = null;
		String[] record = null;
		CSVReader reader = null;
		try {
			File file = new File(filePath);
			reader = new CSVReader(new FileReader(file), ',');
			CSVWriter exceptionFile = new CSVWriter(
					new FileWriter(logFileUploadPath + file.getName() + "-errors.csv", true));
			header = reader.readNext();
			String tgtMonth = filePath.substring(filePath.length() - 12, filePath.length() - 4);
			while ((record = reader.readNext()) != null) {
				List<String[]> data = new ArrayList<String[]>();
				StringBuilder exceptions = new StringBuilder();
				TeamItemMonthlyTarget teamGold = new TeamItemMonthlyTarget();
				TeamItemMonthlyTarget teamDia = new TeamItemMonthlyTarget();

				if (!record[4].isEmpty() && !record[6].isEmpty()) {
					Location location = locationRepo.findByLocationCode(record[4]);
					Employee employee = empRepo.findByEmpCode(record[7]);
					Team teamExists = teamRepo.findByLocationAndTeamNumAndEmp(location, Integer.parseInt(record[6]),
							employee);

					if (teamExists != null) {
						if (record.length > 9) {
							TeamItemMonthlyTarget teamTgtGoldExists = teamItemMonthlyTgtRepo
									.findByTeamAndItemTypeAndMonthAndYear(teamExists, "Gold", tgtMonth.substring(0, 3),
											tgtMonth.substring(4, 8));
							TeamItemMonthlyTarget teamTgtDiaExists = teamItemMonthlyTgtRepo
									.findByTeamAndItemTypeAndMonthAndYear(teamExists, "Diamond",
											tgtMonth.substring(0, 3), tgtMonth.substring(4, 8));
							teamGold.setMonth(tgtMonth.substring(0, 3));
							teamDia.setMonth(tgtMonth.substring(0, 3));
							teamGold.setYear(tgtMonth.substring(4, 8));
							teamDia.setYear(tgtMonth.substring(4, 8));
							if (teamTgtGoldExists == null || teamTgtDiaExists == null) {
								teamDia.setTeam(teamExists);
								teamGold.setTeam(teamExists);
								teamGold.setItemType("Gold");
								teamDia.setItemType("Diamond");

								if (!record[15].isEmpty() && !record[16].isEmpty()) {
									teamDia.setValue(Double.parseDouble(record[15]));
									teamGold.setValue(Double.parseDouble(record[16]));

									if (!record[17].isEmpty() && !record[18].isEmpty()) {
										teamDia.setQuantity(Double.parseDouble(record[17]));
										Double wt = Double.parseDouble(record[18]);
										teamGold.setQuantity(wt / 1000);

										if (!record[9].isEmpty() && !record[14].isEmpty()) {
											Double homeVisits = Double.parseDouble(record[9]);
											Double diamondSales = Double.parseDouble(record[15]);
											Double billingTarget = Double.parseDouble(record[14]);
											Double diaHomeVists = (diamondSales / billingTarget) * homeVisits;
											teamDia.setHomeVisits(diaHomeVists);

											teamGold.setHomeVisits(homeVisits - diaHomeVists);
											if (!record[10].isEmpty()) {
												String conversionPer = record[10];
												Double totalConv = Double.parseDouble(
														conversionPer.substring(0, conversionPer.length() - 1));
												Double diaConversion = (diamondSales / billingTarget) * totalConv;
												teamDia.setConversion(diaConversion);
												teamGold.setConversion(totalConv - diaConversion);

												if (!record[11].isEmpty()) {

													Double totalBuyers = Double.parseDouble(record[11]);
													Double diaBuyers = (diamondSales / billingTarget) * totalBuyers;
													teamDia.setBuyers(diaBuyers);
													teamGold.setBuyers(totalBuyers - diaBuyers);

													if (!record[12].isEmpty()) {

														Double totalTicketSize = Double.parseDouble(record[12]);
														Double diaTicketSize = (diamondSales / billingTarget)
																* totalTicketSize;
														teamDia.setTicketSize(diaTicketSize);
														teamGold.setTicketSize(totalTicketSize - diaTicketSize);

														teamItemMonthlyTgtRepo.save(teamGold);
														teamItemMonthlyTgtRepo.save(teamDia);

													} else {
														exceptions.append("Ticket size can't be empty");
													}
												} else {
													exceptions.append("Buyers can't be empty");
												}

											} else {
												exceptions.append("Conversion percentage can't be empty");
											}

										} else {
											exceptions.append("Home visits can't be empty");
										}

									} else {
										exceptions.append("Diamond weight and gold weight can't be empty");
									}

								} else {
									exceptions.append("Diamond sales and gold sales can't be empty");
								}
							} else {
								exceptions.append("Duplicate targets for this team in that location " + location.getLocationCode());
							}
						}

					} else {
						exceptions.append("Location doesn't have this team number" + location.getLocationCode());
					}

				} else {
					exceptions.append("Location and team number can't be empty ");
				}

				if (exceptions.length() != 0) {
					
					String[] record1 = new String[20];
					for (int i = 0; i < record.length; i++) {
						record1[i] = record[i];
					}
					record1[19] = exceptions.toString();
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

			response.setError(EnumTypeForErrorCodes.SCUS013.name(), EnumTypeForErrorCodes.SCUS013.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		} finally {
			reader.close();
		}
		return response;

	}

}

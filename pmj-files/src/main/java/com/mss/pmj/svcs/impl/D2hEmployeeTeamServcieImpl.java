package com.mss.pmj.svcs.impl;

import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.Set;

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
import com.mss.pmj.model.ServiceResponse;
import com.mss.pmj.repos.EmployeeRepository;
import com.mss.pmj.repos.LocationRepository;
import com.mss.pmj.repos.TeamRepository;
import com.mss.pmj.svcs.D2hEmployeeTeamServcie;
import com.opencsv.CSVReader;
import com.opencsv.CSVWriter;

@RestController
public class D2hEmployeeTeamServcieImpl implements D2hEmployeeTeamServcie {
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

	@Override
	public ServiceResponse<UploadErrors> addTeams(String filePath) throws IOException {
		log.info("adding teams service implementation");
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
				Team team = new Team();
				if (!record[4].isEmpty() && !record[6].isEmpty()) {
					Location location = locationRepo.findByLocationCode(record[4]);

					Team teamListExists = teamRepo.findByLocationAndTeamNum(location, Integer.parseInt(record[6]));

					Set<Employee> empSet = new HashSet<>();
					if (teamListExists == null) {
						if (location != null) {
							team.setLocation(location);

							team.setTeamNum(Integer.parseInt(record[6]));
							if (record[7] != null) {
								Employee employee = empRepo.findByEmpCode(record[7]);
								if (employee != null) {
									if (employee.getLocation().getChannel().getId() == 2) {
										empSet.add(employee);
										team.setEmp(empSet);
										teamRepo.save(team);
									} else {
										exceptions.append("Employee is not assigned to D2H location");
									}
								} else {
									exceptions.append("Employee not found with employee code.");
								}
							} else {
								exceptions.append("Employee code can't be empty");
							}

						} else {
							exceptions.append("Loction not found with the location code " + record[4]);
						}
					} else {

						if (!record[3].isEmpty()) {

							Employee employee = empRepo.findByEmpCode(record[7]);
							if (employee != null) {
								if (employee.getLocation().getChannel().getId() == 2) {
									Set<Employee> empList1 = teamListExists.getEmp();
									empList1.add(employee);
									teamListExists.setEmp(empList1);
									teamRepo.save(teamListExists);
								} else {
									exceptions.append("Employee is not assigned to D2H location");
								}
							} else {
								exceptions.append("Employee not found with employee code.");
							}

						} else {
							exceptions.append("Employee code can't be empty ");
						}

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
			response.setError(EnumTypeForErrorCodes.SCUS011.name(), EnumTypeForErrorCodes.SCUS011.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		} finally {
			reader.close();
		}
		return response;
	}

}

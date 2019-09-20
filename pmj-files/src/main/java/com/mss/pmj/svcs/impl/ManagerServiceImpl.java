package com.mss.pmj.svcs.impl;

import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.mss.pmj.common.EnumTypeForErrorCodes;
import com.mss.pmj.common.Utils;
import com.mss.pmj.domain.Employee;
import com.mss.pmj.domain.Location;
import com.mss.pmj.domain.Manager;
import com.mss.pmj.model.ServiceResponse;
import com.mss.pmj.repos.EmployeeRepository;
import com.mss.pmj.repos.LocationRepository;
import com.mss.pmj.repos.ManagerRepository;
import com.mss.pmj.svcs.ManagerService;
import com.opencsv.CSVReader;
import com.opencsv.CSVWriter;

@Service
public class ManagerServiceImpl implements ManagerService {

	private static Logger log = LoggerFactory.getLogger(ManagerServiceImpl.class);

	@Autowired
	private Utils utils;

	@Autowired
	private EmployeeRepository employeeRepo;

	@Autowired
	private LocationRepository locationRepo;

	@Value("${logFileUploadPath}")
	private String logFileUploadPath;

	@Autowired
	private ManagerRepository managerRepo;

	@Override
	public ServiceResponse<UploadErrors> addManager(String filePath) {
		log.info("save managerData service implementation");

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
			List<Manager> managerDataList = new ArrayList<>();
			while ((record = reader.readNext()) != null) {
				StringBuilder exceptions = new StringBuilder();
				Manager manager = null;
				String employeeCode = record[1];
				if (employeeCode.isEmpty() || employeeCode.isBlank()) {
					if (managerDataList.size() >= 1) {
						manager = managerDataList.get(managerDataList.size() - 1);
					} else {
						exceptions.append("Manager employee code is null or empty");
					}
				} else {
					Employee employee = employeeRepo.findByEmpCode(employeeCode);
					if (employee != null) {
						manager = managerRepo.findByEmpId(employee);
						if (manager == null) {
							manager = new Manager();
							manager.setEmpId(employee);
						}
						managerDataList.add(manager);
					} else {
						exceptions.append("Manager employee code is not found " + employeeCode);
					}

				}
				if (manager != null) {
					Location location = locationRepo.findByLocationCode(record[5]);
					if (location != null) {
						if(manager.getLocation() == null) {
						Set<Location> locationList = new HashSet<>();

						manager.setLocation(locationList);
						}
						manager.getLocation().add(location);
						
						String managerType = record[3];
						if (manager.getManagerType() == null) {
							if (managerType != null && !managerType.isBlank()) {
								manager.setManagerType(managerType);
							} else {
								exceptions.append("Manager Designation is null or empty.");
							}
						} else {
							//do nothing
						}
					} else {
						exceptions.append("Location not found with code " + record[5]);
					}

				}

				if (exceptions.length() == 0) {
					// no exceptions save
					managerRepo.save(manager);
				} else {
					String[] record1 = new String[7];
					for (int i = 0; i < record.length; i++) {
						record1[i] = record[i];
					}
					record1[6] = exceptions.toString();
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
			response.setError(EnumTypeForErrorCodes.SCUS015.name(), EnumTypeForErrorCodes.SCUS015.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}
		return response;
	}

}

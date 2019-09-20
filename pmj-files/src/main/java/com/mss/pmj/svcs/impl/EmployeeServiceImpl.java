package com.mss.pmj.svcs.impl;

import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.mss.pmj.common.EnumTypeForErrorCodes;
import com.mss.pmj.common.Utils;
import com.mss.pmj.domain.Employee;
import com.mss.pmj.domain.Location;
import com.mss.pmj.model.ServiceResponse;
import com.mss.pmj.repos.EmployeeRepository;
import com.mss.pmj.repos.LocationRepository;
import com.mss.pmj.svcs.EmployeeService;
import com.opencsv.CSVReader;
import com.opencsv.CSVWriter;

@Service
public class EmployeeServiceImpl implements EmployeeService {

	private static Logger log = LoggerFactory.getLogger(EmployeeServiceImpl.class);

	@Autowired
	private Utils utils;

	@Autowired
	private EmployeeRepository employeeRepo;

	@Autowired
	private LocationRepository locationRepo;

	@Value("${logFileUploadPath}")
	private String logFileUploadPath;

	@Value("${sampleFilesPath}")
	private String sampleFilesPath;

	@Override
	public ServiceResponse<UploadErrors> addEmployee(String filePath) throws IOException {
		log.info("save employeeData service implementation");
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
				Employee emp = null;
				if (!record[0].isEmpty()) {
					Employee employeeObject = employeeRepo.findByEmpCode(record[0]);
					if (employeeObject != null) {
						emp = employeeRepo.findByEmpCode(record[0]);
					} else {
						emp = new Employee();
					}
					emp.setEmpCode(record[0]);
					if (!record[1].isEmpty()) {
						emp.setEmpName(record[1]);
//						if (!record[2].isEmpty()) {
						emp.setEmpCategory(record[2]);

						if (!record[4].isEmpty()) {
							Location location = locationRepo.findByLocationCode(record[4]);
							if (location != null) {
								emp.setLocation(location);
								employeeRepo.save(emp);

							} else {
								exceptions.append("Location code Doesn't exists in locations");
							}

						} else {
							exceptions.append("Location code can't be empty");
						}

//						} else {
//							exceptions.append("Employee designation can't be empty");
//						}
					} else {
						exceptions.append("Employee name can't be empty");
					}

				} else {
					exceptions.append("Employee code can't be empty");
				}

				if (exceptions.length() != 0) {
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
			response.setError(EnumTypeForErrorCodes.SCUS002.name(), EnumTypeForErrorCodes.SCUS002.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		} finally {
			reader.close();
		}
		return response;
	}

}

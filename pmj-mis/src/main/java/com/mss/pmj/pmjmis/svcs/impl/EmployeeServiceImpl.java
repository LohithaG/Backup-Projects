package com.mss.pmj.pmjmis.svcs.impl;

import java.io.File;
import java.io.FileInputStream;
import java.time.ZonedDateTime;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.mss.pmj.pmjmis.common.EnumTypeForErrorCodes;
import com.mss.pmj.pmjmis.common.Utils;
import com.mss.pmj.pmjmis.domain.Employee;
import com.mss.pmj.pmjmis.domain.Location;
import com.mss.pmj.pmjmis.model.ServiceResponse;
import com.mss.pmj.pmjmis.repos.EmployeeRepository;
import com.mss.pmj.pmjmis.repos.LocationRepository;
import com.mss.pmj.pmjmis.svcs.EmployeeService;

@Service
public class EmployeeServiceImpl implements EmployeeService {

	private static Logger log = LoggerFactory.getLogger(EmployeeServiceImpl.class);

	@Autowired
	private Utils utils;

	@Autowired
	private EmployeeRepository employeeRepo;

	@Autowired
	private LocationRepository locationRepo;

	@Override
	public ServiceResponse<List<Employee>> addEmployee(@PathVariable String path) {
		log.info("save employeeData service implementation");

		ServiceResponse<List<Employee>> response = new ServiceResponse<>();

		List<Employee> employeeDataList = new ArrayList<>();

		try {
			FileInputStream file = new FileInputStream(new File(path));

			XSSFWorkbook workbook = new XSSFWorkbook(file);

			XSSFSheet sheet = workbook.getSheetAt(0);

			Iterator<Row> rowIterator = sheet.iterator();
			rowIterator.next();

			while (rowIterator.hasNext()) {
				Employee employee = new Employee();
				Row row = rowIterator.next();
				Iterator<Cell> cellIterator = row.cellIterator();
				while (cellIterator.hasNext()) {
					Cell cell = cellIterator.next();
					if (cell.getColumnIndex() == 0) {
						String km = cell.getNumericCellValue() + "";
						int index = km.indexOf('.');
						String employeeId = km.substring(0, index);
						employee.setEmpId(Long.parseLong(employeeId));
					} else if (cell.getColumnIndex() == 1) {
						switch (cell.getCellType()) {
						case Cell.CELL_TYPE_STRING:
							employee.setEmpCode(cell.getStringCellValue());
							break;
						case Cell.CELL_TYPE_NUMERIC:
							String km = cell.getNumericCellValue() + "";
							int index = km.indexOf('.');
							String employeeCode = km.substring(0, index);
							employee.setEmpCode(employeeCode);
							break;
						}
					} else if (cell.getColumnIndex() == 2) {
						employee.setEmpName(cell.getStringCellValue());
					} else if (cell.getColumnIndex() == 4) {
						String locationname = cell.getStringCellValue();
						Location location = locationRepo.findByLocationName(locationname);
						employee.setLocation(location);
					} else if (cell.getColumnIndex() == 8) {
						employee.setEmpCategory(cell.getStringCellValue());
					}

					else if (cell.getColumnIndex() == 15) {
						String status = cell.getStringCellValue();
						employee.setEmpStatus(Boolean.parseBoolean(status));
					}
					ZonedDateTime now = ZonedDateTime.now();
					employee.setCreatedTime(now);
					employee.setUpdatedTime(now);
					employeeDataList.add(employee);

				}
			}
			employeeRepo.saveAll(employeeDataList);
			response.setData(employeeDataList);
			file.close();
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS002.name(), EnumTypeForErrorCodes.SCUS002.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}
		return response;
	}

	@Override
	public ServiceResponse<List<Employee>> getEmployeeByLocation(Long locationId) {
		log.info("Getting employee details by location");
		ServiceResponse<List<Employee>> response = new ServiceResponse<>();
		try {
			Optional<Location> location = locationRepo.findById(locationId);
			if (location.isPresent()) {
				List<Employee> employeeByLocation = employeeRepo.findByLocation(location.get());
				if (!employeeByLocation.isEmpty()) {

					response.setData(employeeByLocation);
				}
			}

		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS215.name(), EnumTypeForErrorCodes.SCUS215.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}
		return response;
	}

	@Override
	public ServiceResponse<List<Employee>> getEmployeeByName(String employeeName) {
		log.info("Getting employee by name");

		ServiceResponse<List<Employee>> response = new ServiceResponse<>();

		try {

			List<Employee> employees = employeeRepo.findByEmpName(employeeName);
			if (!employees.isEmpty()) {

				response.setData(employees);
			} else {

				response.setError(EnumTypeForErrorCodes.ECUS217.name(), EnumTypeForErrorCodes.ECUS217.errorMsg());
			}

		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.ECUS216.name(), EnumTypeForErrorCodes.ECUS216.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}
		return response;
	}
}

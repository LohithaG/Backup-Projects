package com.mss.pmj.svcs.impl;

import java.io.File;
import java.io.FileInputStream;
import java.io.OutputStream;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.mss.pmj.common.EnumTypeForErrorCodes;
import com.mss.pmj.common.Utils;
import com.mss.pmj.model.ServiceResponse;
import com.mss.pmj.svcs.D2HEmpActualsService;
import com.mss.pmj.svcs.D2hEmployeeTeamServcie;
import com.mss.pmj.svcs.D2hTeamItemMonthlyTargetService;
import com.mss.pmj.svcs.EmpDailyActualsService;
import com.mss.pmj.svcs.EmployeeItemMonthlyTargetService;
import com.mss.pmj.svcs.EmployeeService;
import com.mss.pmj.svcs.FileUploadService;
import com.mss.pmj.svcs.ItemClassificationService;
import com.mss.pmj.svcs.LocationService;
import com.mss.pmj.svcs.ManagerService;
import com.mss.pmj.svcs.SalesReturnsService;
import com.mss.pmj.svcs.SalesService;

@RestController
public class FileUploadSvcImpl implements FileUploadService {
	private static Logger log = LoggerFactory.getLogger(FileUploadSvcImpl.class);

	@Autowired
	private Utils utils;

	@Autowired
	private LocationService locationService;

	@Autowired
	private EmployeeService employeeService;

	@Autowired
	private EmployeeDailyActualsServiceImpl employeeDailyActualsServiceImpl;

	@Autowired
	private SalesService salesService;

	@Autowired
	private SalesReturnsService salesReturnsService;

	@Value("${files.url}")
	public String filesUrl;

	@Value("${backupfilesPath}")
	private String backupfiles;

	@Value("${systemFileUploadPath}")
	private String systemFileUploadPath;

	@Value("${sampleFilesPath}")
	private String sampleFilesPath;

	@Autowired
	private D2hTeamItemMonthlyTargetService d2hTeamItemMonthlyTgt;

	@Autowired
	private D2HEmpActualsService d2hEmpActualSvc;

	@Autowired
	private D2hEmployeeTeamServcie d2hEmpTeamSvc;

	@Autowired
	private ItemClassificationService itemClassificationService;

	@Autowired
	private EmpDailyActualsService empDailyActualsService;

	@Autowired
	private EmployeeItemMonthlyTargetService employeeItemMonthlyTargetService;

	@Autowired
	private ManagerService managerService;

	@Override
	public ServiceResponse<UploadErrors> fileUpload(MultipartFile file) {
		ServiceResponse<UploadErrors> response = new ServiceResponse<>();
		try {

			var fileName = file.getOriginalFilename();
			if (file.getOriginalFilename().endsWith(".csv")) {
				String filePath = filesUrl + fileName;
				Files.copy(file.getInputStream(), Paths.get(filePath), StandardCopyOption.REPLACE_EXISTING);
				// backup
				String backupPath = backupfiles + fileName + "-" + LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyyMMddHHmmss"));
				Files.copy(file.getInputStream(), Paths.get(backupPath), StandardCopyOption.REPLACE_EXISTING);
				if (fileName.contains("LocationMaster")) {
					response = locationService.addLocation(filePath);
				} else if (fileName.contains("EmployeeMaster")) {
					response = employeeService.addEmployee(filePath);
				} else if (fileName.contains("emptrgtmnthly-shw")) {
					response = employeeItemMonthlyTargetService.addEmployeeMonthlyData(filePath);
				} else if (fileName.contains("teamtrgtmnthly-d2h")) {
					response = d2hEmpTeamSvc.addTeams(filePath);
					response = d2hTeamItemMonthlyTgt.addTeamsMonthlyTargets(filePath);
				} else if (fileName.contains("Classification")) {
					//TODO need to work on the uploaderrors
					itemClassificationService.addItemClassification(filePath);
				} else if (fileName.contains("managerdata")) {
					response = managerService.addManager(filePath);
				}

				else {

					response.setError(EnumTypeForErrorCodes.SCUS205.name(), EnumTypeForErrorCodes.SCUS205.errorMsg());
				}

			} else {
				response.setError(EnumTypeForErrorCodes.SCUS201.name(), EnumTypeForErrorCodes.SCUS201.errorMsg());
			}

		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS202.name(), EnumTypeForErrorCodes.SCUS202.errorMsg());
			log.error(utils.toJson(response.getError()), exception);

		}
		return response;

	}

	@Override
	public ServiceResponse<String> downloadSample(String fileName, HttpServletRequest request,
			HttpServletResponse response) {
		ServiceResponse<String> response1 = new ServiceResponse<>();
		FileInputStream inStream = null;
		String filePath = null;
		OutputStream outStream = null;
		byte[] buffer = null;
		try {
			filePath = sampleFilesPath + fileName + ".csv";
			System.out.println(filePath);
			File downloadFile = new File(filePath);
			inStream = new FileInputStream(downloadFile);
			ServletContext context = request.getSession().getServletContext();
			String mimeType = context.getMimeType(filePath);
			if (mimeType == null) {
				// set to binary type if MIME mapping not found
				mimeType = "application/csv";
			}
			response.setContentType(mimeType);
			response.setContentLength((int) downloadFile.length()); // forces download
			String headerKey = "Content-Disposition";
			String headerValue = String.format("inline; filename=\"%s\"", downloadFile.getName());
			System.out.println(headerValue);
			response.setHeader(headerKey, headerValue);
			response.setContentType("application/csv");
			outStream = response.getOutputStream();
			buffer = new byte[4096];
			int bytesRead = -1;

			while ((bytesRead = inStream.read(buffer)) != -1) {
				outStream.write(buffer, 0, bytesRead);
			}

		} catch (

		Exception exception) {
			response1.setError(EnumTypeForErrorCodes.SCUS202.name(), EnumTypeForErrorCodes.SCUS202.errorMsg());
			log.error(utils.toJson(response1.getError()), exception);

		}

		return null;
	}

}
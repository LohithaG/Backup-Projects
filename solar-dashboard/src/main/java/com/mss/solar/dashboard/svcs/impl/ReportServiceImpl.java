package com.mss.solar.dashboard.svcs.impl;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Set;

import javax.mail.internet.MimeMessage;
import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.cloud.client.ServiceInstance;
import org.springframework.cloud.client.discovery.DiscoveryClient;
import org.springframework.core.io.FileSystemResource;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.mss.solar.dashboard.common.EnumTypeForErrorCodes;
import com.mss.solar.dashboard.common.Utils;
import com.mss.solar.dashboard.domain.LoadDetails;
import com.mss.solar.dashboard.domain.Location;
import com.mss.solar.dashboard.domain.Role;
import com.mss.solar.dashboard.domain.User;
import com.mss.solar.dashboard.model.ServiceResponse;
import com.mss.solar.dashboard.repos.LoadDetailsRepository;
import com.mss.solar.dashboard.repos.LocationRepository;
import com.mss.solar.dashboard.repos.RoleRepository;
import com.mss.solar.dashboard.svcs.ReportService;

@Service
@RestController
public class ReportServiceImpl implements ReportService {

	private static Logger log = LoggerFactory.getLogger(ReportServiceImpl.class);

	@Autowired
	private Utils utils;

	@Autowired
	private DiscoveryClient discoveryClient;

	@Autowired
	private LoadDetailsRepository loadDetailsRepo;

	@Autowired
	private LocationRepository locationRepo;

	@Autowired
	public JavaMailSender emailSender;

	@Autowired
	private RoleRepository roleRepo;

	@Value("${reports.url}")
	public String reportsUrl;

	private ResponseEntity<Map> generateReport(Map<String, String> dataMap, String templateName) {

		ResponseEntity<Map> responseEntity = null;
		try {

			List<ServiceInstance> instances = discoveryClient.getInstances("solar-reports");

			String baseURL = instances.get(0).getUri().toString();

			HttpEntity<Map<String, String>> request = new HttpEntity<>(dataMap);
			RestTemplate restTemplate = new RestTemplate();

			String url = baseURL + "/api/reports/" + templateName;

			responseEntity = restTemplate.exchange(url, HttpMethod.POST, request, Map.class);
		} catch (Exception e) {
			log.error("Error in  Document", e);
		}

		return responseEntity;

	}

	/**
	 * analyticsReport Service Implementation
	 * 
	 * @return byte[]
	 *
	 */
	public byte[] analyticsReport(@PathVariable("templateName") String templateName,
			@RequestBody Map<String, String> dataMap, HttpServletRequest request, HttpServletResponse response) {

		ServiceResponse responseData = new ServiceResponse();
		byte[] buffer = null;
		ResponseEntity<Map> responseEntity = null;

		try {

			responseEntity = generateReport(dataMap, templateName);

			Map<String, String> resp = responseEntity.getBody();
			buffer = sendBuffer(request, response, dataMap, templateName);
		} catch (Exception exception) {
			responseData.setError(EnumTypeForErrorCodes.SCUS701.name(), EnumTypeForErrorCodes.SCUS701.errorMsg());
			log.error(utils.toJson(responseData.getError()), exception);
		}
		return buffer;

	}

	private byte[] sendBuffer(HttpServletRequest request, HttpServletResponse response, Map<String, String> dataMap,
			String templateName) throws IOException {

		FileInputStream inStream = null;
		String filePath = null;
		OutputStream outStream = null;
		byte[] buffer = null;
		try {
			String outputDocPath = "";
			String str = "";
			for (Entry<String, String> entry : dataMap.entrySet()) {
				str = entry.getValue();
				outputDocPath += str + "_";
			}
			outputDocPath += templateName + ".pdf";
			// Pdf File Path
			filePath = reportsUrl + "/" + outputDocPath;
			File downloadFile = new File(filePath);
			inStream = new FileInputStream(downloadFile);
			ServletContext context = request.getSession().getServletContext();
			String mimeType = context.getMimeType(filePath);
			if (mimeType == null) {
				// set to binary type if MIME mapping not found
				mimeType = "application/pdf";
			}
			response.setContentType(mimeType);
			response.setContentLength((int) downloadFile.length());
			// forces download
			String headerKey = "Content-Disposition";
			String headerValue = String.format("inline; filename=\"%s\"", downloadFile.getName());
			response.setHeader(headerKey, headerValue);
			response.setContentType("application/pdf");
			outStream = response.getOutputStream();
			buffer = new byte[4096];
			int bytesRead = -1;
			while ((bytesRead = inStream.read(buffer)) != -1) {
				outStream.write(buffer, 0, bytesRead);
			}
		} catch (Exception e) {
			log.error("Error in Document", e);
		} finally {
			try {
				inStream.close();
				outStream.close();
			} catch (Exception ex) {
				log.error("Error in Streams while Generating Document", ex);
			}
		}
		return buffer;
	}

	@Override
	public String expensesReport(@PathVariable("templateName") String templateName,
			@RequestBody Map<String, String> dataMap) {
		ResponseEntity<Map> responseEntity = null;
		try {
			JSONObject jsonObj = new JSONObject(dataMap);
			String loadNumber = jsonObj.getString("RP_loadnum");
			LoadDetails loadAppointmentExists = loadDetailsRepo.findByLoadNumber(loadNumber);
			Location locationNbr = loadAppointmentExists.getOriginLocNbr();
			Location locationExists = locationRepo.findByLocNbr(locationNbr.getLocNbr());
			String emailExists = locationExists.getEmail();

			List<ServiceInstance> instances = discoveryClient.getInstances("solar-reports");

			String baseURL = instances.get(0).getUri().toString();

			HttpEntity<Map<String, String>> request = new HttpEntity<>(dataMap);
			RestTemplate restTemplate = new RestTemplate();

			String url = baseURL + "/api/reports/" + templateName;

			responseEntity = restTemplate.exchange(url, HttpMethod.POST, request, Map.class);

			MimeMessage message = emailSender.createMimeMessage();

			MimeMessageHelper helper = new MimeMessageHelper(message, true);

			helper.setTo(emailExists);
			helper.setSubject("Expenses reports");
			helper.setText("Hello" + locationExists.getContactPerson() + " "
					+ "Please find the below attachment expenses report for load" + " " + loadNumber);

			FileSystemResource file = new FileSystemResource(
					new File(reportsUrl + loadNumber + "_" + templateName + ".pdf"));
			helper.addAttachment(file.getFilename(), file);

			emailSender.send(message);

			Role role = roleRepo.findByName("ADMIN");
			Set<User> listUser = role.getUsers();

			for (User user : listUser) {
				String email = user.getEmail();
				helper.setTo(email);
				helper.setSubject("Expenses reports");
				helper.setText("Hello" + " " + user.getName() + " "
						+ "Please find the below attachment expenses report for load" + " " + loadNumber);

				FileSystemResource file1 = new FileSystemResource(
						new File(reportsUrl + loadNumber + "_" + templateName + ".pdf"));
				helper.addAttachment(file.getFilename(), file1);

				emailSender.send(message);
			}

		} catch (Exception e) {
			log.error("Error in  Document", e);
		}

		return "Expenses Details Sent Successfully";
	}

	@Override
	public String tripConsolidatedReport(@PathVariable("templateName") String templateName,
			@RequestBody Map<String, String> dataMap) {
		ResponseEntity<Map> responseEntity = null;
		try {
			JSONObject jsonObj = new JSONObject(dataMap);
			String loadNumber = jsonObj.getString("RP_loadnum");
			LoadDetails loadAppointmentExists = loadDetailsRepo.findByLoadNumber(loadNumber);
			Location locationNbr = loadAppointmentExists.getOriginLocNbr();
			Location locationExists = locationRepo.findByLocNbr(locationNbr.getLocNbr());
			String emailExists = locationExists.getEmail();

			List<ServiceInstance> instances = discoveryClient.getInstances("solar-reports");

			String baseURL = instances.get(0).getUri().toString();

			HttpEntity<Map<String, String>> request = new HttpEntity<>(dataMap);
			RestTemplate restTemplate = new RestTemplate();

			String url = baseURL + "/api/reports/" + templateName;

			responseEntity = restTemplate.exchange(url, HttpMethod.POST, request, Map.class);

			MimeMessage message = emailSender.createMimeMessage();

			MimeMessageHelper helper = new MimeMessageHelper(message, true);

			helper.setTo(emailExists);
			helper.setSubject("Tripconsolidate Report");
			helper.setText("Hello  " + locationExists.getContactPerson() + " "
					+ "Please find the below attachment for tripconsolidate report for load" + " " + loadNumber);

			FileSystemResource file = new FileSystemResource(
					new File(reportsUrl + loadNumber + "_" + templateName + ".pdf"));
			helper.addAttachment(file.getFilename(), file);

			emailSender.send(message);

			Role role = roleRepo.findByName("ADMIN");
			Set<User> listUser = role.getUsers();

			for (User user : listUser) {
				String email = user.getEmail();
				helper.setTo(email);
				helper.setSubject("Trip Consolidated reports");
				helper.setText("Hello  " + user.getName() + " "
						+ "Please find the below attachment for tripconsolidate report for load" + " " + loadNumber);

				FileSystemResource file1 = new FileSystemResource(
						new File(reportsUrl + loadNumber + "_" + templateName + ".pdf"));
				helper.addAttachment(file.getFilename(), file1);

				emailSender.send(message);
			}

		} catch (Exception e) {
			log.error("Error in  Document", e);
		}

		return "TripConsolidated Report Sent Successfully";
	}

	@Override
	public String deliveryReport(@PathVariable("templateName") String templateName,
			@RequestBody Map<String, String> dataMap) {
		ResponseEntity<Map> responseEntity = null;
		try {
			JSONObject jsonObj = new JSONObject(dataMap);
			String loadNumber = jsonObj.getString("RP_loadnum");
			String locationNum = jsonObj.getString("RP_location");
			LoadDetails loadAppointmentExists = loadDetailsRepo.findByLoadNumber(loadNumber);
			Location locationExists = locationRepo.findByLocNbr(locationNum);
			String emailExists = locationExists.getEmail();
			List<ServiceInstance> instances = discoveryClient.getInstances("solar-reports");

			String baseURL = instances.get(0).getUri().toString();

			HttpEntity<Map<String, String>> request = new HttpEntity<>(dataMap);
			RestTemplate restTemplate = new RestTemplate();

			String url = baseURL + "/api/reports/" + templateName;

			responseEntity = restTemplate.exchange(url, HttpMethod.POST, request, Map.class);

			MimeMessage message = emailSender.createMimeMessage();

			MimeMessageHelper helper = new MimeMessageHelper(message, true);

			helper.setTo(emailExists);
			helper.setSubject("Delivery receipt");
			helper.setText("Hello  " + locationExists.getContactPerson() + " "
					+ "Please find the below attachment for delivery receipt for load" + " " + loadNumber);

			FileSystemResource file = new FileSystemResource(new File(
					reportsUrl + loadNumber + "_" + locationNum + "_" + templateName + ".pdf"));
			helper.addAttachment(file.getFilename(), file);

			emailSender.send(message);

		} catch (Exception e) {
			log.error("Error in  Document", e);
		}

		return "Delivery Receipt Sent Successfully";
	}
}

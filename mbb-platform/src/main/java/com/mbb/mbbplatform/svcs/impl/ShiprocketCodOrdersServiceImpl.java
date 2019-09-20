package com.mbb.mbbplatform.svcs.impl;

import java.io.File;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.io.IOException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.apache.http.conn.ssl.NoopHostnameVerifier;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.json.JSONException;
import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.http.client.HttpComponentsClientHttpRequestFactory;
import org.springframework.http.converter.ByteArrayHttpMessageConverter;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

import com.mbb.mbbplatform.common.EnumTypeForErrorCodes;
import com.mbb.mbbplatform.domain.ShiprocketCodOrders;
import com.mbb.mbbplatform.model.ServiceResponse;
import com.mbb.mbbplatform.model.Utils;
import com.mbb.mbbplatform.repos.ShiprocketCodOrdersRepository;
import com.mbb.mbbplatform.svcs.ShiprocketCodOrdersService;
import com.opencsv.CSVReader;

@Service
public class ShiprocketCodOrdersServiceImpl implements ShiprocketCodOrdersService {

	private static Logger log = LoggerFactory.getLogger(ShiprocketCodOrdersServiceImpl.class);

	public static final String TOKEN = "token";
	boolean bool = false;

	@Autowired
	private Utils utils;

	@Value("${password}")
	private String password;

	@Value("${email}")
	private String email;

	@Value("${sr.api}")
	private String srApi;
	
	@Value("${sr.tokenapi}")
	private String loginApi;
	@Autowired
	private ShiprocketCodOrdersRepository shiprocketCodOrdersRepo;

	public static final String PATTERN = "yyyy-MM-dd HH:mm:ss";

	public String getShiprocketCod() throws JSONException {
		log.info("get shiprocket external orders");
		String result = "";
		String downloadUrl = "";
		ServiceResponse<String> response = new ServiceResponse<>();

		try {
			RestTemplate restTemplate = new RestTemplate();
			HttpHeaders headers = new HttpHeaders();
			String acesstoken = getToken();
			headers.set("Authorization", "Bearer " + acesstoken);
			headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
			HttpEntity<String> entity = new HttpEntity<>(headers);
			result = restTemplate.exchange(srApi,
					HttpMethod.GET, entity, String.class).getBody();
			JSONObject jsonObject = new JSONObject(result);
			downloadUrl = jsonObject.getString("download_url");
			response.setData(downloadUrl);
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS2580.name(), EnumTypeForErrorCodes.SCUS2580.errorMsg());
			log.error("shiprocket errors");
		}
		return downloadUrl;
	}

	public String getToken() throws JSONException {
		log.info("Authentication token for shiprocket");

		RestTemplate restTemplate = new RestTemplate();
		HttpHeaders headers = new HttpHeaders();
		headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
		MultiValueMap<String, String> map = new LinkedMultiValueMap<>();
		map.add("email", email);
		map.add("password", password);
		HttpEntity<MultiValueMap<String, String>> request = new HttpEntity<>(map, headers);
		String result = restTemplate
				.exchange(loginApi, HttpMethod.POST, request, String.class)
				.getBody();
		JSONObject jsonObj = new JSONObject(result);
		return jsonObj.getString(TOKEN);
	

	}

	@Override
	@Scheduled(cron = "${srcodorders.getshiprocketReport}")
	public String getshiprocketReport() throws IOException {
		log.info("get shiprocket report");

		ServiceResponse<String> responses = new ServiceResponse<>();

		CloseableHttpClient httpClient = HttpClients.custom().setSSLHostnameVerifier(new NoopHostnameVerifier())
				.build();
		HttpComponentsClientHttpRequestFactory requestFactory = new HttpComponentsClientHttpRequestFactory();
		requestFactory.setHttpClient(httpClient);
		RestTemplate restTemplate = new RestTemplate(requestFactory);
		restTemplate.getMessageConverters().add(new ByteArrayHttpMessageConverter());
		HttpHeaders headers = new HttpHeaders();
		HttpEntity<String> entity = new HttpEntity<>(headers);
		ResponseEntity<byte[]> response;

		try {
			String url = getShiprocketCod();
			String fileNames = url.substring(url.lastIndexOf('/'), url.indexOf(".csv") + 4);
			String fileName = fileNames.substring(0, 11);

			fileName = "shiprocket-cod" + fileName + ".csv";
			response = restTemplate.exchange(url, HttpMethod.GET, entity, byte[].class);
			if (response.getStatusCode().equals(HttpStatus.OK)) {
				File f = new File(fileName);
				bool = f.createNewFile();
				try (FileOutputStream output = new FileOutputStream(f);) {
					output.write(response.getBody());

				}
				responses.setData("success");
			}

		} catch (JSONException e) {
			responses.setError(EnumTypeForErrorCodes.SCUS2579.name(), EnumTypeForErrorCodes.SCUS2579.errorMsg());
			log.info("error in getting shiprocket report");
		}
		return "success";

	}
	@Scheduled(cron = "${srcodorders.addShiprocketCodOrders}")
	@Override
	public ServiceResponse<List<ShiprocketCodOrders>> addShiprocketCodOrders() {
		log.info("adding ShiprocketCodOrders report");
		ServiceResponse<List<ShiprocketCodOrders>> response = new ServiceResponse<>();
		try {

			CSVReader reader = new CSVReader(new FileReader("shiprocket-cod/remmitance.csv"), ',');
			List<ShiprocketCodOrders> listShiprocketCodOrders = new ArrayList<>();
			String[] record = null;
			Iterator<String[]> rowIterator = reader.iterator();
			rowIterator.toString();

			DateTimeFormatter dtf = null;
			LocalDateTime updatedDate = null;

			while ((record = reader.readNext()) != null) {
				ShiprocketCodOrders shiprocketCodOrders = new ShiprocketCodOrders();
				String awb = record[1];
				ShiprocketCodOrders listshiprocketcod = shiprocketCodOrdersRepo.findByAWB(awb);
				if (listshiprocketcod != null) {
					if (record[0] != null && record[0].length() > 0) {
						listshiprocketcod.setcRFID(Long.parseLong(record[0]));
					}
					if (record[1] != null && record[1].length() > 0) {
						listshiprocketcod.setaWB((record[1]));
					}
					String deliveredDate = record[2];
					dtf = DateTimeFormatter.ofPattern(PATTERN);
					updatedDate = LocalDateTime.parse(deliveredDate, dtf);
					listshiprocketcod.setDeliveredDate(updatedDate);
					if (record[3] != null && record[3].length() > 0) {
						listshiprocketcod.setOrderId((record[3]));
					}
					listshiprocketcod.setCourier(record[4]);
					if (record[5] != null && record[5].length() > 0) {
						listshiprocketcod.setOrderValue(Double.parseDouble(record[5]));
					}
					String remittanceDate = record[6];
					dtf = DateTimeFormatter.ofPattern(PATTERN);
					updatedDate = LocalDateTime.parse(remittanceDate, dtf);
					listshiprocketcod.setRemittanceDate(updatedDate);
					listshiprocketcod.setuTR(record[7]);
					listShiprocketCodOrders.add(listshiprocketcod);
					shiprocketCodOrdersRepo.saveAll(listShiprocketCodOrders);
					response.setData(listShiprocketCodOrders);
				} else {
					if (record[0] != null && record[0].length() > 0) {
						shiprocketCodOrders.setcRFID(Long.parseLong(record[0]));
					}
					if (record[1] != null && record[1].length() > 0) {
						shiprocketCodOrders.setaWB((record[1]));
					}
					String deliveredDate = record[2];
					dtf = DateTimeFormatter.ofPattern(PATTERN);
					updatedDate = LocalDateTime.parse(deliveredDate, dtf);
					shiprocketCodOrders.setDeliveredDate(updatedDate);
					if (record[3] != null && record[3].length() > 0) {
						shiprocketCodOrders.setOrderId((record[3]));
					}
					shiprocketCodOrders.setCourier(record[4]);
					if (record[5] != null && record[5].length() > 0) {
						shiprocketCodOrders.setOrderValue(Double.parseDouble(record[5]));
					}
					String remittanceDate = record[6];
					dtf = DateTimeFormatter.ofPattern(PATTERN);
					updatedDate = LocalDateTime.parse(remittanceDate, dtf);
					shiprocketCodOrders.setRemittanceDate(updatedDate);
					shiprocketCodOrders.setuTR(record[7]);

					listShiprocketCodOrders.add(shiprocketCodOrders);

				}
			}

			shiprocketCodOrdersRepo.saveAll(listShiprocketCodOrders);
			response.setData(listShiprocketCodOrders);

		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS223.name(), EnumTypeForErrorCodes.SCUS223.errorMsg());
			log.error(utils.toJson(response.getError()), e);

		}
		return response;

	}

}

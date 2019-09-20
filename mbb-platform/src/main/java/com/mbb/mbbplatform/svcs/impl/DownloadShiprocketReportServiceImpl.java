package com.mbb.mbbplatform.svcs.impl;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import org.apache.http.conn.ssl.NoopHostnameVerifier;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.json.JSONException;
import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.http.client.HttpComponentsClientHttpRequestFactory;
import org.springframework.http.converter.ByteArrayHttpMessageConverter;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;

import com.mbb.mbbplatform.svcs.DownloadShiprocketReportService;

@Service
public class DownloadShiprocketReportServiceImpl implements DownloadShiprocketReportService {

	private static Logger log = LoggerFactory.getLogger(DownloadShiprocketReportServiceImpl.class);

	boolean bool = false;

	@Value("${email}")
	public String email;

	@Value("${password}")
	public String password;
	
	@Value("${sr.tokenapi}")
	private String loginApi;
	
	@Value("${sr.ordersexport.api}")
	private String orderExportApi;

	@Override
	public String getdownloadReport() throws IOException {

		log.info("get shiprocket order details");
		String result = "";
		String downloadUrl = "";
		try {
			RestTemplate restTemplate = new RestTemplate();
			HttpHeaders headers = new HttpHeaders();
			String acesstoken = getToken();
			headers.set("Authorization", "Bearer " + acesstoken);
			headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
			HttpEntity<String> entity = new HttpEntity<>(headers);
			result = restTemplate
					.exchange(orderExportApi, HttpMethod.POST, entity, String.class)
					.getBody();
			JSONObject jsonObject = new JSONObject(result);
			downloadUrl = jsonObject.getString("download_url");
		} catch (Exception e) {
			log.error("getting error shiprocket order details");
		}
		return downloadUrl;
	}

	public String getToken() throws JSONException {

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

		return jsonObj.getString("token");

	}

	@Override
	public String getshiprocketReport() throws IOException {

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
			String url = getdownloadReport();
			String fileName = url.substring(url.lastIndexOf('/'), url.indexOf(".csv") + 4);
			fileName = "SR-shipments" + fileName;
			response = restTemplate.exchange(url, HttpMethod.GET, entity, byte[].class);
			if (response.getStatusCode().equals(HttpStatus.OK)) {
				File f = new File(fileName);
				bool = f.createNewFile();
				try (FileOutputStream output = new FileOutputStream(f);) {
					output.write(response.getBody());

				}
			}

		} catch (RestClientException e) {

			log.error("error in getting shiprocket Report");
		}
		return "success";

	}

}

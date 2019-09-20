package com.mbb.mbbplatform.svcs.impl;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Properties;

import javax.mail.BodyPart;
import javax.mail.Folder;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.Multipart;
import javax.mail.NoSuchProviderException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Store;
import javax.mail.search.SearchTerm;

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

import com.mbb.mbbplatform.common.EnumTypeForErrorCodes;
import com.mbb.mbbplatform.model.ServiceResponse;
import com.mbb.mbbplatform.svcs.SRShippingChargeReportsService;

@Service
public class SRShippingChargeReportsServiceImpl implements SRShippingChargeReportsService {

	private static Logger log = LoggerFactory.getLogger(SRShippingChargeReportsServiceImpl.class);
	@Value("${email}")
	public String email;

	@Value("${password}")
	public String password1;
	@Value("${email2}")
	public String mail;

	@Value("${password2}")
	public String password;
	
	@Value("${sr.tokenapi}")
	public String loginApi;
	
	
	@Value("${sr.shippingcharges.api}")
	public String srShippingChargesApi;
	
	@Value("${mail.host}")
	private String mailHost;

	@Value("${mail.port}")
	private String mailPort;

	@Value("${mail.transport.protocol")
	private String mailProtocol;
	
	Properties properties = null;
	private Store store = null;
	private Folder inbox = null;
	private String keyword = "Shipping Charges";
	public static final String TOKEN = "token";

	static List<String> allURLs = new ArrayList<>();
	static List<String> allFilepaths = new ArrayList<>();

	String url = "";
	boolean bool = false;

	public SRShippingChargeReportsServiceImpl() {
		// zero Argument
	}

	public List<String> readMails(String mail,String password,String mailHost,String mailPort,String mailProtocol) throws IOException {
		log.info("read Mails");

		properties = new Properties();
		properties.setProperty("mail.host", mailHost);
		properties.setProperty("mail.port", mailPort);
		properties.setProperty("mail.transport.protocol", mailProtocol);
		Session session = Session.getInstance(properties, new javax.mail.Authenticator() {
			@Override
			protected PasswordAuthentication getPasswordAuthentication() {
				return new PasswordAuthentication(mail, password);
			}
		});
		try {
			store = session.getStore("imaps");
			store.connect();
			inbox = store.getFolder("INBOX");
			inbox.open(Folder.READ_WRITE);
			SearchTerm searchCondition = new SearchTerm() {
				@Override
				public boolean match(Message message) {
					try {
						if (message.getSubject().contains(keyword)) {
							return true;
						}
					} catch (MessagingException ex) {
						log.info("fail", ex);
					}
					return false;
				}
			};
			Message[] messages = inbox.search(searchCondition);
			for (int i = 0; i < messages.length; i++) {
				Message message = messages[i];
				Object object = message.getContent();
				String sample = object.toString();
				if (object instanceof String) {
					url = sample.substring(sample.indexOf("https"), sample.indexOf(".csv") + 4);
					String sample1 = url.substring(url.lastIndexOf('/'), url.indexOf(".csv") + 4);
					String reportsUrl = sample1.substring(0, sample1.length() - 25);

					String reports = reportsUrl.concat(".csv");
					allURLs.add(url);

					String fname = "SR-shipments" + reports;
					allFilepaths.add(fname);
					File f = new File(fname);
					bool = f.createNewFile();
					try (FileOutputStream output = new FileOutputStream(f);) {
						output.write(sample.getBytes());
					}

				} else if (object instanceof Multipart) {
					processMultiPart((Multipart) object);
				}
			}
		} catch (NoSuchProviderException e) {
			log.info("  getting errors  ");
		} catch (MessagingException e) {
			log.info(" error  ");
		} finally {
			try {
				inbox.close(true);
				store.close();
			} catch (MessagingException e) {
				log.info(" errors  ");
			}
		}
		return allURLs;
	}

	public void processMultiPart(Multipart content) {
		log.info("process MultiPart");
		try {
			int i = 0;
			BodyPart bodyPart = content.getBodyPart(i);
			Object o;
			o = bodyPart.getContent();
			String sample = o.toString();
			if (o instanceof String) {
				url = sample.substring(sample.indexOf("https"), sample.indexOf(".csv") + 4);
				String sample1 = url.substring(url.lastIndexOf('/'), url.indexOf(".csv") + 4);
				String reportsUrl = sample1.substring(0, sample1.length() - 25);

				String reports = reportsUrl.concat(".csv");
				allURLs.add(url);

				String fname = "SR-shipments" + reports;
				allFilepaths.add(fname);
				File f = new File(fname);
				bool = f.createNewFile();
				try (FileOutputStream output = new FileOutputStream(f);) {
					output.write(sample.getBytes());

				}
			} else if (o instanceof Multipart) {
				processMultiPart((Multipart) o);
			}
		} catch (IOException e) {
			log.info("error");
		} catch (MessagingException e) {
			log.info("fail");

		}

	}

	
	@Override
	public String getReports() throws IOException {
		log.info("get reports ");
		ServiceResponse<String> responses = new ServiceResponse<>();

		SRShippingChargeReportsServiceImpl sample = new SRShippingChargeReportsServiceImpl();
		sample.readMails(mail,password,mailHost,mailPort,mailProtocol);
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
			for (int i = 0; i < allURLs.size(); i++) {
				String urls = allURLs.get(i);
				response = restTemplate.exchange(urls, HttpMethod.GET, entity, byte[].class);
				if (response.getStatusCode().equals(HttpStatus.OK)) {
					File f = new File(allFilepaths.get(i));
					bool = f.createNewFile();
					try (FileOutputStream output = new FileOutputStream(f);) {
						output.write(response.getBody());
					}
				}
			}
			 responses.setData("success");
		} catch (RestClientException e) {
			responses.setError(EnumTypeForErrorCodes.SCUS2585.name(), EnumTypeForErrorCodes.SCUS2585.errorMsg());
			log.info(" errors  ");
		}
		return "success";
	}

	
	@Override
	public String getShippingReports() throws JSONException {
		log.info("get shiprocket shipping charge orders");
		ServiceResponse<String> response = new ServiceResponse<>();

		String result = "";
		try {
			RestTemplate restTemplate = new RestTemplate();
			HttpHeaders headers = new HttpHeaders();
			String acesstoken = getToken();
			headers.set("Authorization", "Bearer " + acesstoken);
			headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
			HttpEntity<String> entity = new HttpEntity<>(headers);
			result = restTemplate.exchange(
					srShippingChargesApi,
					HttpMethod.GET, entity, String.class).getBody();
			response.setData(result);
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS2584.name(), EnumTypeForErrorCodes.SCUS2584.errorMsg());
			log.error("error in getting shiprocket shipping charge orders");
		}
		return result;

	}

	public String getToken() {
		log.info("Authentication token for shiprocket");
		RestTemplate restTemplate = new RestTemplate();
		HttpHeaders headers = new HttpHeaders();
		headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
		MultiValueMap<String, String> map = new LinkedMultiValueMap<>();
		map.add("email", email);
		map.add("password", password1);
		HttpEntity<MultiValueMap<String, String>> request = new HttpEntity<>(map, headers);
		String result = restTemplate
				.exchange(loginApi, HttpMethod.POST, request, String.class)
				.getBody();
		JSONObject jsonObj = new JSONObject(result);
		return jsonObj.getString(TOKEN);

	}

}

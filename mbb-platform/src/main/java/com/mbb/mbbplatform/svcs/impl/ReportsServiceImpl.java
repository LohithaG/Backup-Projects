package com.mbb.mbbplatform.svcs.impl;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Properties;

import javax.mail.BodyPart;
import javax.mail.Flags;
import javax.mail.Flags.Flag;
import javax.mail.Folder;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.Multipart;
import javax.mail.NoSuchProviderException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Store;
import javax.mail.search.FlagTerm;

import org.apache.http.conn.ssl.NoopHostnameVerifier;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.client.HttpComponentsClientHttpRequestFactory;
import org.springframework.http.converter.ByteArrayHttpMessageConverter;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;

import com.mbb.mbbplatform.common.EnumTypeForErrorCodes;
import com.mbb.mbbplatform.model.ServiceResponse;
import com.mbb.mbbplatform.svcs.ReportsService;

@RestController
@Validated
public class ReportsServiceImpl implements ReportsService {
	private static Logger log = LoggerFactory.getLogger(ReportsServiceImpl.class);

	

	@Value("${email1}")
	private String emailId;
	
	@Value("${password1}")
	private String password;

	@Value("${mail.host}")
	private String mailHost;

	@Value("${mail.port}")
	private String mailPort;

	@Value("${mail.transport.protocol")
	private String mailProtocol;

	Properties properties = null;
	private Store store = null;
	private Folder inbox = null;

	String url = "";
	boolean bool = false;
	static List<String> allURLs = new ArrayList<>();
	static List<String> allFilepaths = new ArrayList<>();

	public ReportsServiceImpl() {
//no arg constructor
	}

	/**
	 * readMails service implementation
	 * 
	 * @return List<String>
	 */
	public List<String> readMails(String emailId, String password, String mailHost, String mailPort,
			String mailProtocol) throws IOException {
		log.info("reading Mails");
		 Session session = null;

		properties = new Properties();
		properties.setProperty("mail.host", mailHost);
		properties.setProperty("mail.port", mailPort);
		properties.setProperty("mail.transport.protocol", mailProtocol);
		session = Session.getInstance(properties, new javax.mail.Authenticator() {
			@Override
			protected PasswordAuthentication getPasswordAuthentication() {
				return new PasswordAuthentication(emailId, password);
			}
		});
		try {
			store = session.getStore("imaps");
			store.connect();
			inbox = store.getFolder("INBOX");
			inbox.open(Folder.READ_WRITE);
			Message[] messages = inbox.search(new FlagTerm(new Flags(Flag.SEEN), false));
			for (int i = 0; i < messages.length; i++) {
				Message message = messages[i];
				Object object = message.getContent();
				String sample = object.toString();
				if (object instanceof String) {
					url = sample.substring(sample.indexOf("https"), sample.indexOf(".csv") + 4);
					url = url.replace("%20", "+");
					allURLs.add(url);

				} else if (object instanceof Multipart) {
					processMultiPart((Multipart) object);
				}
			}
		} catch (NoSuchProviderException e) {
			log.info("errors");
		} catch (MessagingException e) {
			log.info("error");
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

	/**
	 * processMultiPart service implementation
	 * 
	 * @RequestBody content
	 * @return ServiceResponse<String>
	 */
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
				url = url.replaceAll("%20", "+");
				String sample1 = url.substring(url.lastIndexOf('/'), url.indexOf(".csv") + 4);
				String reportsUrl = sample1.substring(0, sample1.length() - 10);
				String reports = reportsUrl.concat(".csv");

				allURLs.add(url);

				String fname = "mbb-reports" + reports;

				allFilepaths.add(fname);
				File f = new File(fname);
				Boolean file = f.createNewFile();
				if (file) {
					try (FileOutputStream output = new FileOutputStream(f);) {
						output.write(sample.getBytes());

					}
				}

			} else if (o instanceof Multipart) {
				processMultiPart((Multipart) o);
			}
		} catch (IOException e) {
			log.info("IO Exception");

		} catch (MessagingException e) {
			log.info("messaging exception");
		}

	}

	@Scheduled(cron = "${report.getreport}")
	@Override
	public String getReports() throws IOException {
		log.info("get reports ");
		ServiceResponse<String> responses = new ServiceResponse<>();

		ReportsServiceImpl sample = new ReportsServiceImpl();
		sample.readMails(emailId,password,mailHost,mailPort,mailProtocol);
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
					if (f.exists()) {
						bool = f.createNewFile();
						try (FileOutputStream output = new FileOutputStream(f);) {
							output.write(response.getBody());
						}
					}
				}
			}
			responses.setData("success");
		} catch (RestClientException e) {
			responses.setError(EnumTypeForErrorCodes.SCUS2578.name(), EnumTypeForErrorCodes.SCUS2578.errorMsg());
			log.error(" errors  ", e);
		}
		return "success";
	}
}

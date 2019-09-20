package com.mbb.mbbplatform.svcs.impl;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Properties;
import javax.mail.Flags;
import javax.mail.Folder;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.Multipart;
import javax.mail.NoSuchProviderException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Store;
import javax.mail.Flags.Flag;
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
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;

import com.mbb.mbbplatform.common.EnumTypeForErrorCodes;
import com.mbb.mbbplatform.model.ServiceResponse;
import com.mbb.mbbplatform.svcs.ZepoReportsService;

@Service
public class ZepoReportsServiceImpl implements ZepoReportsService {

	
	@Value("${email3}")
	public String email;

	private Folder inbox = null;

	@Value("${password3}")
	public String password;
	
	private Store store = null;

	@Value("${mail.host}")
	private String mailHost;

	Properties properties = null;
	static List<String> allURLs = new ArrayList<>();
	@Value("${mail.port}")
	private String mailPort;

	private static Logger log = LoggerFactory.getLogger(ZepoReportsServiceImpl.class);

	@Value("${mail.transport.protocol")
	private String mailProtocol;

	static List<String> allFilepaths = new ArrayList<>();

	String url = "";
	boolean bool = false;

	public ZepoReportsServiceImpl() {
		// zero Argument
	}

	public List<String> readMails(String email,String password,String mailHost ,String mailPort,String mailProtocol) throws IOException {
		properties = new Properties();
		properties.setProperty("mail.host", mailHost);
		properties.setProperty("mail.port", mailPort);
		properties.setProperty("mail.transport.protocol", mailProtocol);
		Session	session = Session.getInstance(properties, new javax.mail.Authenticator() {
			@Override
			protected PasswordAuthentication getPasswordAuthentication() {
				return new PasswordAuthentication(email, password);
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
					url = sample.substring(sample.indexOf("http"), sample.indexOf(".xls") + 4);
					String zeporeport = url.substring(url.lastIndexOf('/'), url.indexOf(".xls") + 4);
					String report = zeporeport.substring(0, 7);
					allURLs.add(url);

					String fname = "zepo/zepo-shipments" + report + ".xls";
					allFilepaths.add(fname);
					File f = new File(fname);
					bool = f.createNewFile();
					try (FileOutputStream output = new FileOutputStream(f);) {
						output.write(sample.getBytes());
					} 

				} else if (object instanceof Multipart) {
					// no body
				}
			}
		} catch (NoSuchProviderException e) {
			log.error("  getting errors  ");
		} catch (MessagingException e) {
			log.error(" error  ",e);
		} finally {
			try {
				inbox.close(true);
				store.close();
			} catch (MessagingException e) {
				log.info(" errors  ",e);
			}
		}
		return allURLs;
	}
	@Scheduled(cron = "${zeporeport.getreport}")
	@Override
	public String getReports() throws IOException {
		log.info("get zeporeports ");
		ServiceResponse<String> responses = new ServiceResponse<>();
		ZepoReportsServiceImpl sample = new ZepoReportsServiceImpl();
		sample.readMails(email,password,mailHost,mailPort,mailProtocol);
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
				responses.setData("success");
			}
		} catch (RestClientException e) {
			responses.setError(EnumTypeForErrorCodes.SCUS2586.name(), EnumTypeForErrorCodes.SCUS2586.errorMsg());
			log.error(" errors  ",e);
		}
		return "success";
	}
}

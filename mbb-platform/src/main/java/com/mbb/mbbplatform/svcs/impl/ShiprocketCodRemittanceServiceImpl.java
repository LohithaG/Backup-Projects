package com.mbb.mbbplatform.svcs.impl;

import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;
import java.util.List;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.mbb.mbbplatform.common.EnumTypeForErrorCodes;
import com.mbb.mbbplatform.domain.ShiprocketCodRemittance;
import com.mbb.mbbplatform.model.ServiceResponse;
import com.mbb.mbbplatform.repos.ShiprocketCodRemittanceRepository;
import com.mbb.mbbplatform.svcs.ShiprocketCodRemittanceService;

@RestController
public class ShiprocketCodRemittanceServiceImpl implements ShiprocketCodRemittanceService {

	private static Logger log = LoggerFactory.getLogger(ShiprocketCodRemittanceServiceImpl.class);
	

	 String utrString = null;

	@Value("${email}")
	public String email;
	
	public static final String AUTHORIZATION ="Authorization";

	@Value("${password}")
	public String password;
	
	public static final String BEARER ="Bearer";

	@Value("${sr.codremittance.api}")
	public String remittanceApi;
	
	public static final String TOKEN = "token";

	@Value("${sr.externalorders.api}")
	public String externalOrdersApi;
	
	@Value("${sr.api}")
	public String srApi;
	
	@Value("${sr.coddetails.api}")
	public String codDetailsApi;

	@Value("${sr.order.api}")
	public String srOrderApi;
	
	@Value("${sr.tokenapi}")
	public String loginApi;
	
	@Autowired
	private ShiprocketCodRemittanceRepository shiprocketrepo;


	@Override
	public String getExternalOrders() throws JSONException {
		log.info("get shiprocket external orders");
		String result = "";
		ServiceResponse<String> response = new ServiceResponse<>();

		try {
			RestTemplate restTemplate = new RestTemplate();
			HttpHeaders headers = new HttpHeaders();
			String acesstoken = getToken();
			headers.set(AUTHORIZATION, BEARER + acesstoken);
			headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
			HttpEntity<String> entity = new HttpEntity<>(headers);
			result = restTemplate
					.exchange(externalOrdersApi, HttpMethod.GET, entity, String.class)
					.getBody();
			response.setData(result);
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS2580.name(), EnumTypeForErrorCodes.SCUS2580.errorMsg());
			log.error("shiprocket errors");
		}
		return result;

	}

	@Override
	public String getCodRemittance() throws JSONException {
		log.info("get shiprocket codremittance amount");
		ServiceResponse<String> response = new ServiceResponse<>();

		String result = "";
		try {
			RestTemplate restTemplate = new RestTemplate();
			HttpHeaders headers = new HttpHeaders();
			String acesstoken = getToken();
			headers.set(AUTHORIZATION, BEARER + acesstoken);
			headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
			HttpEntity<String> entity = new HttpEntity<>(headers);
			result = restTemplate.exchange(remittanceApi,
					HttpMethod.GET, entity, String.class).getBody();
			response.setData(result);
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS2581.name(), EnumTypeForErrorCodes.SCUS2581.errorMsg());
			log.error("shiprocket codremittance errors");
		}
		return result;
	}

	@Scheduled(cron = "${srcodemittance.getCodRemittanceDetails}")
	@Override
	public List<String> getCodRemittanceDetails() throws JSONException {
		log.info("get shiprocket codremittance  details");
		String result = "";
		List<String> response = new ArrayList<>();
		ServiceResponse<String> responses = new ServiceResponse<>();

		try {
			RestTemplate restTemplate = new RestTemplate();
			HttpHeaders headers = new HttpHeaders();
			String acesstoken = getToken();
			headers.set(AUTHORIZATION, BEARER + acesstoken);
			headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
			HttpEntity<String> entity = new HttpEntity<>(headers);
			result = restTemplate
					.exchange(codDetailsApi,
							HttpMethod.GET, entity, String.class)
					.getBody();
			response.add(result);
			List<String> responseList = new ArrayList<>();
			responseList.add(result);
			List<ShiprocketCodRemittance> salesList = new ArrayList<>();
			for (String codremittanceData : responseList) {
				JSONObject jsonObject = new JSONObject(codremittanceData);
				JSONArray shiprocketawb = jsonObject.getJSONArray("data");
				for (int i = 0; i < shiprocketawb.length(); i++) {
					ShiprocketCodRemittance shiprocketcoddata = new ShiprocketCodRemittance();
					JSONObject jsonobject = shiprocketawb.getJSONObject(i);
					Long crfid = jsonobject.getLong("crf_id");
					String codpayable = jsonobject.getString("cod_payble");
					String status = jsonobject.getString("status");
					String remarks = jsonobject.getString("remarks");
					Boolean utr = false;
					if (jsonobject.isNull("utr")) {
						utr = jsonobject.isNull("utr");
					} else {
						utrString = jsonobject.getString("utr");
					}
					String remittedValue = jsonobject.getString("remitted_value");
					String accountType = jsonobject.getString("account_type");
					Long createdAt = jsonobject.getLong("created_at");
					long timeStamp = createdAt * 1000;
					Date d = new Date(timeStamp);
					SimpleDateFormat sdf = new java.text.SimpleDateFormat("dd/MM/yyyy HH:mm:ss z");
					String formattedDate = sdf.format(d);
					String longDate = formattedDate.substring(0, 10);
					String rechargeValue = jsonobject.getString("recharge_value");
					String reversalValue = jsonobject.getString("reversal_value");
					ShiprocketCodRemittance listCrfId = shiprocketrepo.findByCrfid(crfid);
					if (listCrfId != null) {
						listCrfId.setCrfid(crfid);
						listCrfId.setCodpayable((codpayable));
						listCrfId.setRemarks(remarks);
						
						if (utr) {
							utrString = Boolean.toString(utr);
							listCrfId.setUtr(utrString);
						} else {
							listCrfId.setUtr(utrString);
						}
                                       if (status.equals("Remittance success")) {

							listCrfId.setStatus("Complete");
						} else {
							listCrfId.setStatus("Payment Pending");
						}
						listCrfId.setRemittedValue(remittedValue);
						listCrfId.setAccountType(accountType);
						listCrfId.setCreatedAt(longDate);
						listCrfId.setRechargeValue(rechargeValue);
						listCrfId.setReversalValue(reversalValue);
						listCrfId.setShippingAggregator("SHIPROCKET");
						LocalDateTime dateTime = LocalDateTime.now();
						listCrfId.setUpdatedDate(dateTime);

						shiprocketrepo.save(listCrfId);
					} else {
						shiprocketcoddata.setCrfid(crfid);
						shiprocketcoddata.setCodpayable(codpayable);
						shiprocketcoddata.setRemarks(remarks);
                                                if (status.equals("Remittance success")) {

							shiprocketcoddata.setStatus("Complete");
						} else {
							shiprocketcoddata.setStatus("Payment Pending");
						}
						

						if (utr) {
							utrString = Boolean.toString(utr);
							shiprocketcoddata.setUtr("null");
						} else {
							shiprocketcoddata.setUtr(utrString);
						}
						shiprocketcoddata.setRemittedValue(remittedValue);
						shiprocketcoddata.setAccountType(accountType);
						shiprocketcoddata.setCreatedAt(longDate);
						shiprocketcoddata.setRechargeValue(rechargeValue);
						shiprocketcoddata.setReversalValue(reversalValue);
						shiprocketcoddata.setShippingAggregator("SHIPROCKET");
						LocalDateTime dateTime = LocalDateTime.now();
						shiprocketcoddata.setCreatedDate(dateTime);
						shiprocketcoddata.setUpdatedDate(dateTime);
						salesList.add(shiprocketcoddata);
					}
				}
			}
			shiprocketrepo.saveAll(salesList);
		} catch (Exception e) {
			responses.setError(EnumTypeForErrorCodes.SCUS2582.name(), EnumTypeForErrorCodes.SCUS2582.errorMsg());
			log.error("shiprocket codremittanceData errors");
		}
		return response;
	}

	@Override
	public String getRemittanceReport() throws JSONException {
		log.info("get shiprocket codremittance amount details");
		String result = "";
		ServiceResponse<String> response = new ServiceResponse<>();

		try {

			RestTemplate restTemplate = new RestTemplate();
			HttpHeaders headers = new HttpHeaders();
			String acesstoken = getToken();
			headers.set(AUTHORIZATION, BEARER + acesstoken);
			headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
			HttpEntity<String> entity = new HttpEntity<>(headers);
			result = restTemplate.exchange(srApi,
					HttpMethod.GET, entity, String.class).getBody();
			response.setData(result);
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS2582.name(), EnumTypeForErrorCodes.SCUS2582.errorMsg());
			log.error("shiprocket codremittance amount details");
		}
		return result;
	}

	@Override
	public List<String> getOrderId(Long crfid) throws JSONException {
		log.info("get orderid and awb no");
		List<String> finalResult = new ArrayList<>();
		ServiceResponse<String> response = new ServiceResponse<>();
		try {
			ShiprocketCodRemittance shiprocketcrfId = shiprocketrepo.findByCrfid(crfid);
			if (shiprocketcrfId != null) {
				RestTemplate restTemplate = new RestTemplate();
				HttpHeaders headers = new HttpHeaders();
				String acesstoken = getToken();
				headers.set(AUTHORIZATION, BEARER + acesstoken);
				headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
				HttpEntity<String> entity = new HttpEntity<>(headers);
				String result = restTemplate
						.exchange(srOrderApi + crfid + " /awbs",
								HttpMethod.GET, entity, String.class)
						.getBody();
				finalResult.add(result);
				response.setData(result);
			}

		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS2583.name(), EnumTypeForErrorCodes.SCUS2583.errorMsg());
			log.error("get all shiprocket crfId errors ");
		}
		return finalResult;
	}

	@Override
	public ServiceResponse<Collection<ShiprocketCodRemittance>> getAllCod() {
		log.info("getting all shiprocket cod remittance");
		ServiceResponse<Collection<ShiprocketCodRemittance>> response = new ServiceResponse<>();
		try {
			Collection<ShiprocketCodRemittance> listShip = shiprocketrepo.findAll();
			response.setData(listShip);
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS10001.name(), EnumTypeForErrorCodes.SCUS10001.errorMsg());
			log.error("getting all shiprocket errors ");
		}
		return response;
	}

	@Override
	public String getCod() throws JSONException {
		log.info("get shiprocket codremittance amount");
		String result = "";
		ServiceResponse<String> response = new ServiceResponse<>();
		try {
			RestTemplate restTemplate = new RestTemplate();
			HttpHeaders headers = new HttpHeaders();
			String acesstoken = getToken();
			headers.set(AUTHORIZATION, BEARER + acesstoken);
			headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
			HttpEntity<String> entity = new HttpEntity<>(headers);
			result = restTemplate
					.exchange(codDetailsApi,
							HttpMethod.GET, entity, String.class)
					.getBody();
			response.setData(result);
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS2581.name(), EnumTypeForErrorCodes.SCUS2581.errorMsg());
			log.error("shiprocket codremittance errors");
		}
		return result;
	}

	public String getToken() throws JSONException  {
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
	
}

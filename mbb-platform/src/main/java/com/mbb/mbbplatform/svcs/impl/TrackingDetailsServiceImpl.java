package com.mbb.mbbplatform.svcs.impl;

import javax.validation.constraints.NotNull;

import org.json.JSONException;
import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

import com.mbb.mbbplatform.svcs.TrackingDetailsService;
@Service
public class TrackingDetailsServiceImpl implements TrackingDetailsService {
	
	@Value("${email}")
	public String email;
	
	private static Logger log = LoggerFactory.getLogger(TrackingDetailsServiceImpl.class);
	
	@Value("${password}")
	public String password;

	@Override
	public String getTrackingDetailsByTrackingId(@NotNull String trackingNo) {
		
		log.info("get tracking details service");

		String result = "";
		try {

			RestTemplate restTemplate = new RestTemplate();
			HttpHeaders headers = new HttpHeaders();
			String acesstoken = getToken();
			headers.set("Authorization", "Bearer " + acesstoken);
			headers.setContentType(MediaType.APPLICATION_JSON);
			HttpEntity<String> entity = new HttpEntity<>(headers);
			result = restTemplate.exchange("https://apiv2.shiprocket.in/v1/external/courier/track/awb/" + trackingNo,
					HttpMethod.GET, entity, String.class).getBody();

			JSONObject jsonObj = new JSONObject(result);
			JSONObject obj = jsonObj.getJSONObject("tracking_data");

			int status = obj.getInt("track_status");

			if (status == 0) {
				
				result=getZepoTrackingDetails(trackingNo);
			}

		} catch (Exception e) {
			log.error("failed to get shipment tracking",e);

		}
		return result;

	}

	private String getZepoTrackingDetails(@NotNull String trackingNo) {
		String result="";
		String response="Resource not found.";
		try {

		RestTemplate restTemplate = new RestTemplate();

		HttpHeaders headers = new HttpHeaders();

		headers.setContentType(MediaType.APPLICATION_JSON);
		HttpEntity<String> entity = new HttpEntity<>(headers);
		 result = restTemplate.exchange("https://couriers.zepo.in/api/open/couriers/1/track/" + trackingNo,
				HttpMethod.GET, entity, String.class).getBody();

		 if(result.equals(response))
		 {
			 result = restTemplate.exchange("https://couriers.zepo.in/api/open/couriers/2/track/" + trackingNo,
						HttpMethod.GET, entity, String.class).getBody();
			 if(result.equals(response))
			 {
				 result = restTemplate.exchange("https://couriers.zepo.in/api/open/couriers/3/track/" + trackingNo,
							HttpMethod.GET, entity, String.class).getBody(); 
				 if(result.equals(response))
				 {
					 result = restTemplate.exchange("https://couriers.zepo.in/api/open/couriers/4/track/" + trackingNo,
								HttpMethod.GET, entity, String.class).getBody(); 
					 if(result.equals(response))
					 {
						 result = restTemplate.exchange("https://couriers.zepo.in/api/open/couriers/8/track/" + trackingNo,
									HttpMethod.GET, entity, String.class).getBody(); 
					 }
				 }
			 }
		 }
		}
		catch(Exception e)
		{
			log.error("failed to get shipment tracking",e);

		}
		return result;
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
				.exchange("https://apiv2.shiprocket.in/v1/external/auth/login", HttpMethod.POST, request, String.class)
				.getBody();
		JSONObject jsonObj = new JSONObject(result);
		return jsonObj.getString("token");
		 

	}
}

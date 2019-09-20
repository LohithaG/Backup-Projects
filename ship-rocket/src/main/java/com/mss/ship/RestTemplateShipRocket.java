package com.mss.ship;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
public class RestTemplateShipRocket {
	static final String SALE_ORDERS = "https://apiv2.shiprocket.in/v1/external/orders";
	RestTemplate restTemplate = new RestTemplate();

	@RequestMapping(value = "/api/externalorders", method = RequestMethod.GET)

	public String getExternalOrders() throws JSONException {
		HttpHeaders headers = new HttpHeaders();

		String acesstoken = getToken();
		headers.set("Authorization", "Bearer " + acesstoken);
		headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
		HttpEntity<String> entity = new HttpEntity<String>(headers);
		return restTemplate
				.exchange("https://apiv2.shiprocket.in/v1/external/orders", HttpMethod.GET, entity, String.class)
				.getBody();

	}

	@RequestMapping(value = "/api/codremittance", method = RequestMethod.GET)

	public String getCodRemittance() throws JSONException {

		HttpHeaders headers = new HttpHeaders();
		// headers.set("Authorization", "Bearer
		// eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjI2ODE5LCJpc3MiOiJodHRwczpcL1wvYXBpdjIuc2hpcHJvY2tldC5pblwvdjFcL2V4dGVybmFsXC9hdXRoXC9sb2dpbiIsImlhdCI6MTU0MjYwMTgwOCwiZXhwIjoxNTQyNjg4MjA4LCJuYmYiOjE1NDI2MDE4MDgsImp0aSI6ImExNDA3M2E0MTRmYTJjZDYyMTc5NDhmNTQzZWRmM2Q1In0.h4a1Em_ZHGAvp9yaOirWZXKwQUmRoq-JXsn9Mu_XTd0");
		// headers.setContentType(MediaType.APPLICATION_JSON);
		String acesstoken = getToken();
		headers.set("Authorization", "Bearer " + acesstoken);
		headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
		HttpEntity<String> entity = new HttpEntity<String>(headers);
		return restTemplate.exchange("https://apiv2.shiprocket.in/v1/account/details/remittance_summary",
				HttpMethod.GET, entity, String.class).getBody();

	}

	@RequestMapping(value = "/api/codremittancedetails", method = RequestMethod.GET)

	public String getCodRemittanceDetails() throws JSONException {
		HttpHeaders headers = new HttpHeaders();
		String acesstoken = getToken();
		headers.set("Authorization", "Bearer " + acesstoken);
		headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
		HttpEntity<String> entity = new HttpEntity<String>(headers);
		return restTemplate.exchange(
				"https://apiv2.shiprocket.in/v1/account/details/remittance",
				HttpMethod.GET, entity, String.class).getBody();

	}

	@RequestMapping(value = "/api/create", method = RequestMethod.POST)
	public String getToken() throws JSONException {

		HttpHeaders headers = new HttpHeaders();

		headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);

		MultiValueMap<String, String> map = new LinkedMultiValueMap<String, String>();
		map.add("email", "info@medicalbulkbuy.com");
		map.add("password", "medicalbulkbuy123");

		HttpEntity<MultiValueMap<String, String>> request = new HttpEntity<MultiValueMap<String, String>>(map, headers);
		String result = restTemplate
				.exchange("https://apiv2.shiprocket.in/v1/external/auth/login", HttpMethod.POST, request, String.class)
				.getBody();

		JSONObject jsonObj = new JSONObject(result);

		String acesstoken = jsonObj.getString("token");

		System.out.println(acesstoken);
		return acesstoken;

	}

}

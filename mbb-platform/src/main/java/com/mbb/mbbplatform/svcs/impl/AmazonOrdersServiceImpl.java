package com.mbb.mbbplatform.svcs.impl;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import org.json.JSONArray;
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
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import com.mbb.mbbplatform.common.EnumTypeForErrorCodes;
import com.mbb.mbbplatform.domain.AmazonOrders;
import com.mbb.mbbplatform.model.ServiceResponse;
import com.mbb.mbbplatform.model.Utils;
import com.mbb.mbbplatform.repos.AmazonOrdersRepository;
import com.mbb.mbbplatform.svcs.AmazonOrdersService;

@Service
public class AmazonOrdersServiceImpl implements AmazonOrdersService {

	private static Logger log = LoggerFactory.getLogger(AmazonOrdersServiceImpl.class);

	@Value("${amazonapi1}")
	private String amazonApi;

	@Value("${amazonapi2}")
	private String amazonNextApi;
	
	@Autowired
	private AmazonOrdersRepository amazonOrdersRepo;

	@Autowired
	private Utils utils;
	
	public static final String NEXTTOKEN="nextToken";
	public static final String LATESTDELIVERYDATE = "latestDeliveryDate";
	
//	@Scheduled(cron = "${amazon.api}")
	@Override
	public ServiceResponse<Collection<AmazonOrders>> getamazonOrders() {
		log.info("getting amazon orders");
	

		ServiceResponse<Collection<AmazonOrders>> response = new ServiceResponse<>();
		String result = "";
		try {
			RestTemplate restTemplate = new RestTemplate();
			HttpHeaders headers = new HttpHeaders();
			headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
			HttpEntity<String> entity = new HttpEntity<>(headers);
			result = restTemplate.exchange(amazonApi, HttpMethod.GET,
					entity, String.class).getBody();

			List<AmazonOrders> listAmazonOrders = new ArrayList<>();

			JSONObject jsonObject = new JSONObject(result);
			JSONObject listOrdersResult = jsonObject.getJSONObject("listOrdersResult");

			Boolean setNextToken = listOrdersResult.getBoolean("setNextToken");
			JSONArray orders = listOrdersResult.getJSONArray("orders");
			for (int i = 0; i < orders.length(); i++) {
				AmazonOrders amazonOrders = new AmazonOrders();
				JSONObject jsonobject = orders.getJSONObject(i);
				amazonOrders.setAmazonOrderId(jsonobject.getString("amazonOrderId"));
				amazonOrders.setPurchaseDate(jsonobject.getString("purchaseDate"));
				amazonOrders.setLastUpdateDate(jsonobject.getString("lastUpdateDate"));
				amazonOrders.setOrderStatus(jsonobject.getString("orderStatus"));
				amazonOrders.setFulfillmentChannel(jsonobject.getString("fulfillmentChannel"));
				amazonOrders.setSalesChannel(jsonobject.getString("salesChannel"));
				amazonOrders.setMarketplaceId(jsonobject.getString("marketplaceId"));

				if (jsonobject.isNull(LATESTDELIVERYDATE)) {
					amazonOrders.setDeliveryDate("NA");
				} else {
					amazonOrders.setDeliveryDate(jsonobject.getString(LATESTDELIVERYDATE));
				}

				listAmazonOrders.add(amazonOrders);
			}
			String nextToken = listOrdersResult.getString(NEXTTOKEN);
			while (setNextToken) {
				RestTemplate restTemplate1 = new RestTemplate();
				final String templateURL = amazonNextApi;
				JSONObject jo = new JSONObject();
				jo.put(NEXTTOKEN, nextToken);
				HttpHeaders headers1 = new HttpHeaders();
				headers.setContentType(MediaType.APPLICATION_JSON);
				HttpEntity<String> entity1 = new HttpEntity<>(jo.toString(), headers1);
				result = restTemplate1.postForObject(templateURL, entity1, String.class);
				JSONObject json = new JSONObject(result);
				JSONObject listOrders = json.getJSONObject("listOrdersByNextTokenResult");
				String token = null;
				if (listOrders.isNull(NEXTTOKEN)) {
					//nothing
				} else {
					token = listOrders.getString(NEXTTOKEN);
				}
				Boolean setNextToken1 = listOrders.getBoolean("setNextToken");
				JSONArray ordersList = listOrders.getJSONArray("orders");
				for (int i = 0; i < ordersList.length(); i++) {
					AmazonOrders amazonOrders = new AmazonOrders();
					JSONObject jsonobject = ordersList.getJSONObject(i);
					amazonOrders.setAmazonOrderId(jsonobject.getString("amazonOrderId"));
					amazonOrders.setPurchaseDate(jsonobject.getString("purchaseDate"));
					amazonOrders.setLastUpdateDate(jsonobject.getString("lastUpdateDate"));
					amazonOrders.setOrderStatus(jsonobject.getString("orderStatus"));
					amazonOrders.setFulfillmentChannel(jsonobject.getString("fulfillmentChannel"));
					amazonOrders.setSalesChannel(jsonobject.getString("salesChannel"));
					amazonOrders.setMarketplaceId(jsonobject.getString("marketplaceId"));
					if (jsonobject.isNull(LATESTDELIVERYDATE)) {
						amazonOrders.setDeliveryDate("NA");
					} else {
						amazonOrders.setDeliveryDate(jsonobject.getString(LATESTDELIVERYDATE));
					}

					listAmazonOrders.add(amazonOrders);
					nextToken = token;
					setNextToken = setNextToken1;

				}
			}

			 amazonOrdersRepo.saveAll(listAmazonOrders);
			response.setData(listAmazonOrders);
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS238.name(), EnumTypeForErrorCodes.SCUS238.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}
		return response;
	}

}

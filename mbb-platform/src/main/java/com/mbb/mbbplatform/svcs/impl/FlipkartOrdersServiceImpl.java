package com.mbb.mbbplatform.svcs.impl;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Collection;
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
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.mbb.mbbplatform.common.EnumTypeForErrorCodes;
import com.mbb.mbbplatform.domain.FlipkartOrders;
import com.mbb.mbbplatform.domain.SaleOrders;
import com.mbb.mbbplatform.model.ServiceResponse;
import com.mbb.mbbplatform.repos.FlipkartOrdersRepository;
import com.mbb.mbbplatform.repos.SaleOrdersRepository;
import com.mbb.mbbplatform.svcs.FlipkartOrdersService;

@RestController
public class FlipkartOrdersServiceImpl implements FlipkartOrdersService {
	
	private static Logger log = LoggerFactory.getLogger(FlipkartOrdersServiceImpl.class);

	@Autowired
	private FlipkartOrdersRepository flipkartorderRepo;

	@Autowired
	private SaleOrdersRepository saleOrdersRepo;

	@Value("${flipkart.authorization}")
	private String authorization;

	@Value("${flipkart.access_token}")
	private String accessToken;
	
	@Value("${flipkart.api}")
	private String flipkartApi;
	
	@Scheduled(cron = "${flipkartorders.api}")
	@Override
	public String getFlipkartOrders() throws JSONException {

		log.info("get flipkart orders");
		String result = "";
		List<SaleOrders> saleorderList = saleOrdersRepo.findByChannelName();
		List<String> response = new ArrayList<>();
		ServiceResponse<Collection<FlipkartOrders>> response1 = new ServiceResponse<>();

		try {

			for (SaleOrders saleorder : saleorderList) {
				String displayOrderCode = saleorder.getDisplayOrderCode();
				RestTemplate restTemplate = new RestTemplate();
				HttpHeaders headers = new HttpHeaders();
				headers.set("Authorization", authorization);
				headers.set("access_token", accessToken);

				HttpEntity<String> entity = new HttpEntity<>(headers);
				result = restTemplate
						.exchange(flipkartApi+ displayOrderCode,
								HttpMethod.GET, entity, String.class)
						.getBody();

				response.add(result);

				List<String> responseList = new ArrayList<>();
				responseList.add(result);
				List<FlipkartOrders> flipkartList = new ArrayList<>();
				for (String flipkartorderdata : responseList) {
					JSONObject jsonObject = new JSONObject(flipkartorderdata);
					JSONArray flipkartorder = jsonObject.getJSONArray("shipments");
					for (int i = 0; i < flipkartorder.length(); i++) {
						FlipkartOrders flipkartdata = new FlipkartOrders();
						JSONObject jsonobject = flipkartorder.getJSONObject(i);
						String shipmentId = jsonobject.getString("shipmentId");

						JSONArray orderItem = jsonobject.getJSONArray("orderItems");
						for (int j = 0; j < orderItem.length(); j++) {
							JSONObject jsonobject1 = orderItem.getJSONObject(j);
							String orderId = jsonobject1.getString("orderId");
							String status = jsonobject1.getString("status");
							String paymentType = jsonobject1.getString("paymentType");
							String sku = jsonobject1.getString("sku");
							Long quantity = jsonobject1.getLong("quantity");
							FlipkartOrders shipmentIdList = flipkartorderRepo.findByShipmentId(shipmentId);
							if (shipmentIdList != null) {
								shipmentIdList.setShipmentId(shipmentId);
								shipmentIdList.setOrderId(orderId);
								shipmentIdList.setStatus(status);
								shipmentIdList.setPaymentType(paymentType);
								shipmentIdList.setSku(sku);
								shipmentIdList.setQuantity(quantity);
								LocalDateTime dateTime=LocalDateTime.now();
								shipmentIdList.setCreatedDate(dateTime);
								shipmentIdList.setUpdatedDate(dateTime);
								flipkartorderRepo.save(shipmentIdList);
							} else {
								flipkartdata.setShipmentId(shipmentId);
								flipkartdata.setOrderId(orderId);
								flipkartdata.setStatus(status);
								flipkartdata.setPaymentType(paymentType);
								flipkartdata.setSku(sku);
								flipkartdata.setQuantity(quantity);
								LocalDateTime dateTime=LocalDateTime.now();
								flipkartdata.setUpdatedDate(dateTime);
								flipkartList.add(flipkartdata);
							}

						}

					}
				}

				flipkartorderRepo.saveAll(flipkartList);
				response1.setData(flipkartList);
			}

		} catch (Exception e) {
			response1.setError(EnumTypeForErrorCodes.SCUS20001.name(), EnumTypeForErrorCodes.SCUS20001.errorMsg());
			log.error("failed to get all flipkart orders",e);

		}

		return result;
	}

}

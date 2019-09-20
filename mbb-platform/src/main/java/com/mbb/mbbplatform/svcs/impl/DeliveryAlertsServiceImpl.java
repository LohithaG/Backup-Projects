package com.mbb.mbbplatform.svcs.impl;

import java.time.Instant;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
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
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.mbb.mbbplatform.common.EnumTypeForErrorCodes;
import com.mbb.mbbplatform.domain.DeliveryAlerts;
import com.mbb.mbbplatform.domain.SaleOrders;
import com.mbb.mbbplatform.domain.Sales;
import com.mbb.mbbplatform.model.ServiceResponse;
import com.mbb.mbbplatform.repos.DeliveryAlertsRepository;
import com.mbb.mbbplatform.repos.SaleOrdersRepository;
import com.mbb.mbbplatform.repos.SalesRepository;
import com.mbb.mbbplatform.svcs.DeliveryAlertsService;
import com.mbb.mbbplatform.svcs.EmailService;

@RestController
@Validated
public class DeliveryAlertsServiceImpl implements DeliveryAlertsService {

	private static Logger log = LoggerFactory.getLogger(DeliveryAlertsServiceImpl.class);
	public static final String CURRENTSTATUS = "current_status";
	public static final String DELIVEREDDATE = "delivered_date";
	public static final String STATUS = "status";
	public static final String ORDERID = "order_id";
	public static final String STATUSDATETIME = "status_date_time";
	public static final String EMAIL = "gkulkarni@metanoiasolutions.net";
	public static final String TITLE = "Please find the below list for products with Delivery shipping Package Status  \n";

	@Autowired
	private SaleOrdersRepository saleOrdersRepo;

	@Autowired
	private EmailService emailsvc;

	@Autowired
	private DeliveryAlertsRepository deliveryAlertsRep;

	@Autowired
	private SalesRepository salesRepo;

	@Value("${password}")
	private String password;

	@Value("${email}")
	private String email1;
	
	

	@Override
	public ServiceResponse<List<SaleOrders>> getDeliveryAlertsOrdersList() {
		log.info("get delivery alerts orders list");
		ServiceResponse<List<SaleOrders>> response = new ServiceResponse<>();
		try {
			LocalDate todayDate = LocalDate.now();
			LocalDateTime startDate = LocalDateTime
					.of(todayDate.getYear(), todayDate.getMonth(), todayDate.getDayOfMonth(), 0, 0, 0).minusDays(10);

			List<SaleOrders> saleOrderslist = saleOrdersRepo
					.findByShippingPackageStatusCodeAndDispatchDate("DISPATCHED", startDate);

			List<DeliveryAlerts> salesList = new ArrayList<>();

			for (SaleOrders saleOrders : saleOrderslist) {
				DeliveryAlerts deliveryAlerts = new DeliveryAlerts();
				deliveryAlerts.setSaleOrderCode(saleOrders.getSaleOrderCode());
				deliveryAlerts.setTrackingNumber(saleOrders.getTrackingNumber());
				deliveryAlerts.setDisplayOrderCode(saleOrders.getDisplayOrderCode());
				deliveryAlerts.setStatusCode(saleOrders.getShippingPackageStatusCode());
				LocalDateTime datetime = LocalDateTime.now();
				deliveryAlerts.setCreatedDate(datetime);
				deliveryAlerts.setUpdatedDate(datetime);
				salesList.add(deliveryAlerts);
			}
			deliveryAlertsRep.saveAll(salesList);
			response.setData(saleOrderslist);
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS021.name(), EnumTypeForErrorCodes.SCUS021.errorMsg());
		}
		return response;

	}

	@Override
	public List<String> getExternalOrders() throws JSONException {
		log.info("get all external orders");

		String saleOrder = "";
		List<DeliveryAlerts> deliveryAlerts = deliveryAlertsRep.findAll();

		List<String> response = new ArrayList<>();

		for (DeliveryAlerts deliveryAlerts2 : deliveryAlerts) {
			String displayOrderCode = deliveryAlerts2.getDisplayOrderCode();
			String trackingNumber = deliveryAlerts2.getTrackingNumber();
			RestTemplate restTemplate = new RestTemplate();
			HttpHeaders headers = new HttpHeaders();
			headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
			String token = getToken();
			headers.set("Authorization", "Bearer" + token);
			HttpEntity<String> request = new HttpEntity<>(headers);

			String result = restTemplate
					.exchange("https://apiv2.shiprocket.in/v1/external/courier/track/shipment/" + displayOrderCode,
							HttpMethod.GET, request, String.class)
					.getBody();

			response.add(result);

			List<String> responseList = new ArrayList<>();
			responseList.add(result);

			JSONObject jsonObject = new JSONObject(result);
			JSONObject trackingdata = jsonObject.getJSONObject("tracking_data");
			int trackStatus = trackingdata.getInt("track_status");

			if (trackStatus == 1) {
				List<Sales> salesList = new ArrayList<>();
				List<String> mailList = new ArrayList<>();

				for (String shiprocket : responseList) {
					JSONObject json = new JSONObject(shiprocket);
					JSONObject trackingData = json.getJSONObject("tracking_data");
					JSONArray shipmentTrack = trackingData.getJSONArray("shipment_track");
					for (int i = 0; i < shipmentTrack.length(); i++) {
						Sales sales = new Sales();
						JSONObject jsonobject = shipmentTrack.getJSONObject(i);
						String currentStatus = jsonobject.getString(CURRENTSTATUS);
						String deliveredDate = jsonobject.getString(DELIVEREDDATE);
						int orderId = jsonobject.getInt(ORDERID);
						DateTimeFormatter formatter = null;
						LocalDateTime dateTimes = null;
						if (deliveredDate.contains("+")) {
							String date = deliveredDate.substring(0, 19);
							formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss");
							dateTimes = LocalDateTime.parse(date, formatter);
						} else if (deliveredDate.contains("T")) {
							dateTimes = LocalDateTime.parse(deliveredDate);
						} else if (deliveredDate.contains("NA")) {
							// no stmt

						} else {
							formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
							dateTimes = LocalDateTime.parse(deliveredDate, formatter);
						}

						if (currentStatus.contains("Delivered") || currentStatus.contains("Delivery exception")) {
							sales.setCurrentStatus(currentStatus);
							sales.setDeliveredDateTime(dateTimes);
							sales.setDisplayOrderId(orderId);
							LocalDateTime datetime = LocalDateTime.now();
							sales.setCreatedDate(datetime);
							sales.setUpdatedDate(datetime);
							salesList.add(sales);

						} else if (currentStatus.contains("RTO")) {
							sales.setCurrentStatus(currentStatus);
							sales.setDeliveredDateTime(dateTimes);
							sales.setDisplayOrderId(orderId);
							LocalDateTime todayDatetime = LocalDateTime.now();
							sales.setCreatedDate(todayDatetime);
							sales.setUpdatedDate(todayDatetime);
							salesList.add(sales);
							Long orderCode = jsonobject.getLong(ORDERID);
							String currentstatus = jsonobject.getString(CURRENTSTATUS);
							String delivereddate = jsonobject.getString(DELIVEREDDATE);

							String mail = "\n" + "Order Code :" + orderCode + "  " + "Current Status :" + currentstatus
									+ "  " + "Deliverd Date :" + delivereddate;
							mailList.add(mail);
							saleOrder = mailList.toString();
							emailsvc.notifyUserByEmail(EMAIL, saleOrder, TITLE);
						} else {
							Long orderCode = jsonobject.getLong(ORDERID);
							String currentstatus = jsonobject.getString(CURRENTSTATUS);
							String delivereddate = jsonobject.getString(DELIVEREDDATE);

							String mail = "\n" + "Order Code :" + orderCode + "  " + "Current Status :" + currentstatus
									+ "  " + "Deliverd Date :" + delivereddate;
							mailList.add(mail);
							saleOrder = mailList.toString();
							emailsvc.notifyUserByEmail(EMAIL, saleOrder, TITLE);
						}
					}
				}
				salesRepo.saveAll(salesList);
			} else {
				result = restTemplate.exchange("https://couriers.zepo.in/api/open/couriers/1/track/" + trackingNumber,
						HttpMethod.GET, request, String.class).getBody();

				if (result.contains("Resource not found.")) {
					result = restTemplate
							.exchange("https://couriers.zepo.in/api/open/couriers/4/track/" + trackingNumber,
									HttpMethod.GET, request, String.class)
							.getBody();
				}

				if (result.contains("Resource not found.")) {

					continue;

				}

				response.add(result);

				List<Sales> salesList = new ArrayList<>();
				List<String> mailList = new ArrayList<>();

				JSONObject object = new JSONObject(result);
				JSONArray trackingStatus = object.getJSONArray("trackingStatus");
				for (int i = 0; i < trackingStatus.length(); i++) {
					Sales sales = new Sales();
					JSONObject jsonStatus = trackingStatus.getJSONObject(i);
					JSONObject currenttrackingstatus = jsonStatus.getJSONObject("current_tracking_status");
					String status = currenttrackingstatus.getString(STATUS);
					long statusDateTime = currenttrackingstatus.getLong(STATUSDATETIME);
					LocalDateTime date = LocalDateTime.ofInstant(Instant.ofEpochMilli(statusDateTime),
							ZoneId.systemDefault());

					if (status.contains("Delivered") || status.contains("Delivery exception")) {
						sales.setCurrentStatus(status);
						sales.setDeliveredDateTime(date);
						sales.setTrackingNumber(trackingNumber);
						LocalDateTime datetime = LocalDateTime.now();
						sales.setCreatedDate(datetime);
						sales.setUpdatedDate(datetime);
						salesList.add(sales);

					} else if (status.contains("In Transit")) {
						sales.setCurrentStatus(status);
						sales.setDeliveredDateTime(date);
						sales.setTrackingNumber(trackingNumber);
						LocalDateTime datetime = LocalDateTime.now();
						sales.setCreatedDate(datetime);
						sales.setUpdatedDate(datetime);
						salesList.add(sales);

						String trakingNumber = object.getString("tracking_number");
						String currentstatus = currenttrackingstatus.getString(STATUS);
						long delivereddate = currenttrackingstatus.getLong(STATUSDATETIME);
						LocalDateTime date1 = LocalDateTime.ofInstant(Instant.ofEpochMilli(delivereddate),
								ZoneId.systemDefault());
						String mail = "\n" + "Current Status:" + currentstatus + "  " + "Delivered Date:" + date1 + "  "
								+ "Traking Number:" + trakingNumber;

						mailList.add(mail);

						saleOrder = mailList.toString();
						emailsvc.notifyUserByEmail(EMAIL, saleOrder, TITLE);
					} else {
						String trakingNumber = object.getString("tracking_number");
						String currentstatus = currenttrackingstatus.getString(STATUS);
						long delivereddate = currenttrackingstatus.getLong(STATUSDATETIME);
						LocalDateTime date1 = LocalDateTime.ofInstant(Instant.ofEpochMilli(delivereddate),
								ZoneId.systemDefault());
						String mail = "\n" + "Current Status:" + currentstatus + "  " + "Delivered Date:" + date1 + "  "
								+ "Traking Number:" + trakingNumber;

						mailList.add(mail);

						saleOrder = mailList.toString();
						emailsvc.notifyUserByEmail(EMAIL, saleOrder, TITLE);
					}

				}
				salesRepo.saveAll(salesList);

			}
		}

		return response;

	}

	public String getToken() throws JSONException {

		RestTemplate restTemplate = new RestTemplate();

		HttpHeaders headers = new HttpHeaders();

		headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);

		MultiValueMap<String, String> map = new LinkedMultiValueMap<>();

		map.add("email", email1);
		map.add("password", password);

		HttpEntity<MultiValueMap<String, String>> request = new HttpEntity<>(map, headers);
		String result = restTemplate
				.exchange("https://apiv2.shiprocket.in/v1/external/auth/login", HttpMethod.POST, request, String.class)
				.getBody();

		JSONObject jsonObj = new JSONObject(result);

		return jsonObj.getString("token");

	}

	@Override
	public ServiceResponse<String> deleteAlldeliveryAlerts() {
		log.info("delete delivery alerts orers list");
		ServiceResponse<String> response = new ServiceResponse<>();
		try {
			List<DeliveryAlerts> delivery = deliveryAlertsRep.findAll();

			deliveryAlertsRep.deleteAll(delivery);

		} catch (Exception e) {
			log.info("delete delivery alerts errors");
		}
		return response;

	}
}

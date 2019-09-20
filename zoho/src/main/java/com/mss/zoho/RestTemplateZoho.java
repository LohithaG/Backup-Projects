package com.mss.zoho;


import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.apache.commons.lang.time.DateUtils;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.mss.zoho.repos.SaleorderRepository;

@RestController
public class RestTemplateZoho {
	
	

	static final String SALE_ORDERS = "https://www.zohoapis.in/crm/v2/Sales_Orders";
	RestTemplate restTemplate = new RestTemplate();
	@Autowired
	private SaleorderRepository saleorderRepository;

	@RequestMapping(value = "/api/records", method = RequestMethod.GET)
	public String getRecordsByTemplate() {
		HttpHeaders headers = new HttpHeaders();
		headers.set("Authorization", "d312c53f04ee1622427eab38070354a6");
		
		//headers.set("Authorization", "34857253372d7470f1ddaaddbbeeac4d"); 
		
		
		
		headers.setContentType(MediaType.APPLICATION_JSON);
		HttpEntity<String> entity = new HttpEntity<String>(headers);
		return restTemplate
				.exchange("https://www.zohoapis.in/crm/v2/Sales_Orders", HttpMethod.GET, entity, String.class)
				.getBody();

	}
	
	
	

	@RequestMapping(value = "/api/records", method = RequestMethod.POST)
	//@Scheduled(cron = "* * * ? * *")  for every second
	@Scheduled(cron = "0 0 10 * * ?") /*everyday at 10am */
	public String CreateSale() {
		String result = "";
		
		LocalDate Created = LocalDate.now();
	//	Date date = Date.from( Created.atZone( ZoneId.systemDefault()).toInstant());
	//	LocalDate localDate = Created.toLocalDate();
		 
		List<Saleorder> dBsalesOrderList = saleorderRepository.findByCreated(Created);
	//	List<Saleorder> dBsalesOrderList = saleorderRepository.findAll();
		
		JSONObject mainObj = new JSONObject();
		List<JSONObject> listJSONObj = new ArrayList<>();
		try {
			
			for (Saleorder sOrder : dBsalesOrderList) {
				JSONObject sale = new JSONObject();
				
				sale.put("Display_Order_Code", sOrder.getDisplay_Order_Code());
				sale.put("Item_Type_Name", sOrder.getItem_Type_Name());
				
				sale.put("Channel_Name", sOrder.getChannel_Name());
				sale.put("Sale_Order_Status", sOrder.getSale_Order_Status());
				sale.put("Shipping_Package_Status_Code", sOrder.getShipping_Package_Status_Code());
				
				sale.put("Total_Price", sOrder.getTotal_Price());
				sale.put("Selling_Price", sOrder.getSelling_Price());
				
				sale.put("Shipping_Address_Line_1", sOrder.getShipping_Address_Line_1());
				sale.put("Shipping_Address_Line_2", sOrder.getShipping_Address_Line_2());
				sale.put("Shipping_Address_City", sOrder.getShipping_Address_City());
				sale.put("Shipping_Address_State", sOrder.getShipping_Address_State());
				sale.put("Shipping_Address_Country", sOrder.getShipping_Address_Country());
				sale.put("Shipping_Address_Pincode", sOrder.getShipping_Address_Pincode());
				
				
				sale.put("Billing_Address_Line_1", sOrder.getBilling_Address_Line_1());
				sale.put("Billing_Address_Line_2", sOrder.getBilling_Address_Line_2());
				sale.put("Billing_Address_City", sOrder.getBilling_Address_City());
				sale.put("Billing_Address_State", sOrder.getBilling_Address_State());
				sale.put("Billing_Address_Country", sOrder.getBilling_Address_Country());
				sale.put("Billing_Address_Pincode", sOrder.getBilling_Address_Pincode());
				
				sale.put("Shipping_Address_Name", sOrder.getShipping_Address_Name());
				sale.put("Billing_Address_Name", sOrder.getBilling_Address_Name());
				sale.put("Item_SKU_Code", sOrder.getItem_SKU_Code());
				
				sale.put("Subtotal", sOrder.getSubtotal());
				sale.put("GST_Tax_Type_Code", sOrder.getgST_Tax_Type_Code());
				sale.put("CGST", sOrder.getcGST());
				sale.put("IGST", sOrder.getiGST());
				sale.put("SGST", sOrder.getsGST());
				sale.put("Sale_Order_Code", sOrder.getSale_Order_Code());
				
				sale.put("Notification_Mobile", sOrder.getNotification_Mobile());
				sale.put("Notification_Email", sOrder.getNotification_Email());
			//	sale.put("Created", sOrder.getCreated());
				sale.put("Tracking_Number", sOrder.getTracking_Number());
				
				sale.put("Subject", sOrder.getSubject());
				
				sale.put("Created", sOrder.getCreated());
				
				listJSONObj.add(sale);
			}
			
			mainObj.put("data", listJSONObj);
			
			HttpHeaders headers = new HttpHeaders();
			headers.set("Authorization", "d312c53f04ee1622427eab38070354a6");
			headers.setContentType(MediaType.APPLICATION_JSON);

			HttpEntity<String> entity = new HttpEntity<String>(mainObj.toString(), headers);
			restTemplate.getMessageConverters().add(new MappingJackson2HttpMessageConverter());
			
			result = restTemplate
					.exchange("https://www.zohoapis.in/crm/v2/Sales_Orders", HttpMethod.POST, entity, String.class)
					.getBody();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return result;
	}

}

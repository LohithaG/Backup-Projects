package com.mbb.mbbplatform.svcs;

import java.util.List;

import org.json.JSONException;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mbb.mbbplatform.domain.SaleOrders;
import com.mbb.mbbplatform.model.ServiceResponse;

@RequestMapping(value = "/mbb/deliveryAlerts")
public interface DeliveryAlertsService {

	@GetMapping("/getdeliveryAlertsList")
	@ResponseBody
	public ServiceResponse<List<SaleOrders>> getDeliveryAlertsOrdersList();

	@GetMapping("/getExternalOrdersList")
	@ResponseBody
	public List<String> getExternalOrders() throws JSONException;

	@DeleteMapping("/deleteAlldeliveryAlerts")
	@ResponseBody
	public ServiceResponse<String> deleteAlldeliveryAlerts();
}

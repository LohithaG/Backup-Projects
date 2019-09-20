package com.mbb.mbbplatform.svcs;

import org.json.JSONException;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mbb.mbbplatform.common.RestApiUrlConstants;

@RequestMapping(value = "/api/flipkart")
public interface FlipkartOrdersService {
	@GetMapping(RestApiUrlConstants.GET_FLIPKART_ORDERS)
	@ResponseBody
	public String getFlipkartOrders() throws JSONException;
}

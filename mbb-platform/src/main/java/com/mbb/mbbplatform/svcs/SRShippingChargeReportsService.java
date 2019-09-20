package com.mbb.mbbplatform.svcs;



import java.io.IOException;

import org.json.JSONException;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mbb.mbbplatform.common.RestApiUrlConstants;

@RequestMapping(value="/mbb/srshippingreport")
public interface SRShippingChargeReportsService {

	
	@GetMapping(RestApiUrlConstants.GET_REPORT)
	@ResponseBody
	String getReports() throws IOException;
	
	
	@GetMapping(RestApiUrlConstants.GET_SHIPPING_REPORT)
	@ResponseBody
	public String getShippingReports() throws JSONException;

	
	
}

package com.mbb.mbbplatform.svcs;

import java.io.IOException;
import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mbb.mbbplatform.common.RestApiUrlConstants;
import com.mbb.mbbplatform.domain.ShiprocketCodOrders;
import com.mbb.mbbplatform.model.ServiceResponse;

@RequestMapping(value = "/api/shiprocketcod")
public interface ShiprocketCodOrdersService {
	
	@GetMapping(RestApiUrlConstants.GET_SHIPROCKET_REPORT)
	@ResponseBody
	public String getshiprocketReport() throws IOException ;
	
	
	@PostMapping(RestApiUrlConstants.ADD_SHIPROCKET_COD_ORDERS)
	@ResponseBody
	ServiceResponse<List<ShiprocketCodOrders>> addShiprocketCodOrders();

}

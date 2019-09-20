package com.mbb.mbbplatform.svcs;


import java.util.Collection;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mbb.mbbplatform.domain.AmazonOrders;
import com.mbb.mbbplatform.model.ServiceResponse;
import com.mbb.mbbplatform.common.RestApiUrlConstants;


@RequestMapping(value = "/mbb/amazonOrders")
public interface AmazonOrdersService {

	@GetMapping(RestApiUrlConstants.GET_AMAZON_ORDERS)
	@ResponseBody
	ServiceResponse<Collection<AmazonOrders>> getamazonOrders();
}

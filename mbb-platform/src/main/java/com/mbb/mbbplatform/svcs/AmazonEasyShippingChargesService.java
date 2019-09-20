package com.mbb.mbbplatform.svcs;

import java.util.List;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mbb.mbbplatform.domain.AmazonEasyShippingCharges;
import com.mbb.mbbplatform.common.RestApiUrlConstants;
import com.mbb.mbbplatform.model.ServiceResponse;
@RequestMapping(value = "/mbb/easyship")

public interface AmazonEasyShippingChargesService {
	@PostMapping(RestApiUrlConstants.ADD_AMAZON_EASY_SHIPPING_CHARGES)
	@ResponseBody
	ServiceResponse<List<AmazonEasyShippingCharges>> addAmazonEasyShipping();

}

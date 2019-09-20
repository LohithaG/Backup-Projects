package com.mbb.mbbplatform.svcs;

import java.util.Collection;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mbb.mbbplatform.domain.AmazonFlipkartShipments;
import com.mbb.mbbplatform.model.ServiceResponse;
import com.mbb.mbbplatform.common.RestApiUrlConstants;

@RequestMapping(value = "/api/shipments")
public interface AmazonFlipkartShipmentsService {
	@GetMapping(RestApiUrlConstants.GET_AMAZON_FLIPKART_CHANNELS)
	@ResponseBody
	ServiceResponse<Collection<AmazonFlipkartShipments>> getAllAmazonFlipkartchannels();
	
}

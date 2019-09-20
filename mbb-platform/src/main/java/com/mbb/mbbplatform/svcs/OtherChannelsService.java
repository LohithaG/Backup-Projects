package com.mbb.mbbplatform.svcs;

import java.util.Collection;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mbb.mbbplatform.domain.OtherChannels;
import com.mbb.mbbplatform.model.ServiceResponse;
import com.mbb.mbbplatform.common.RestApiUrlConstants;

@RequestMapping(value = "/mbb/channels")
public interface OtherChannelsService {

	@GetMapping(RestApiUrlConstants.GET_ALL_AMAZON_CHANNELS)
	@ResponseBody
	ServiceResponse<Collection<OtherChannels>> getAllAmazonchannels();
	
	
	@GetMapping(RestApiUrlConstants.GET_ALL_FLIPKART_CHANNELS)
	@ResponseBody
	ServiceResponse<Collection<OtherChannels>> getAllFlipkartchannels();

}

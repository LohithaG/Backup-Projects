package com.mbb.mbbplatform.svcs;

import java.util.List;

import javax.validation.Valid;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mbb.mbbplatform.common.RestApiUrlConstants;
import com.mbb.mbbplatform.domain.Channel;
import com.mbb.mbbplatform.domain.ReturnDetails;
import com.mbb.mbbplatform.domain.ReturnReasons;
import com.mbb.mbbplatform.domain.TypeOfReturn;
import com.mbb.mbbplatform.model.ServiceResponse;

@RequestMapping("mbb/returnDetails")
public interface ReturnDetailsService {
	@PostMapping(RestApiUrlConstants.ADD_RETURN_DETAILS)
	@ResponseBody
	public ServiceResponse<ReturnDetails> addReturnDetails(@Valid @RequestBody ReturnDetails returnDetails);
	
	@GetMapping(RestApiUrlConstants.GET_DETAILS_BY_ID)
	@ResponseBody
	public ServiceResponse<ReturnDetails> getByDispatchId(@PathVariable Long id);
	
	@GetMapping(RestApiUrlConstants.GET_ALL_CHANNELS)
	@ResponseBody
	public ServiceResponse<List<Channel>> getAllChannels();
	
	@GetMapping(RestApiUrlConstants.GET_ALL_TYPE_OF_RETURNS)
	@ResponseBody
	public ServiceResponse<List<TypeOfReturn>> getAllTypeOfReturns();
	
	@GetMapping(RestApiUrlConstants.GET_ALL_TYPE_OF_REASONS)
	@ResponseBody
	public ServiceResponse<List<ReturnReasons>> getAllReturnReasons();
	
	
}

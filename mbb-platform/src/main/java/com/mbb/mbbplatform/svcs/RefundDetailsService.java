package com.mbb.mbbplatform.svcs;

import javax.validation.Valid;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mbb.mbbplatform.common.RestApiUrlConstants;
import com.mbb.mbbplatform.domain.RefundDetails;
import com.mbb.mbbplatform.model.ServiceResponse;

@RequestMapping("mbb/refundDetails")
public interface RefundDetailsService {
	@PostMapping(RestApiUrlConstants.ADD_REFUND_DETAILS)
	@ResponseBody
	public ServiceResponse<RefundDetails> addRefundDetails(@Valid @RequestBody RefundDetails refundDetails);
	
	@GetMapping(RestApiUrlConstants.GET_DETAILS_BY_ID)
	@ResponseBody
	public ServiceResponse<RefundDetails> getByDispatchId(@PathVariable Long id);
}

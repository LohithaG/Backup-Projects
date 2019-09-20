package com.mbb.mbbplatform.svcs;

import java.util.List;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import com.mbb.mbbplatform.common.RestApiUrlConstants;

import com.mbb.mbbplatform.domain.SRShippingCharge;
import com.mbb.mbbplatform.model.ServiceResponse;

@RequestMapping("mbb/SRShippingCharge")
public interface SRShippingChargeService {

	@PostMapping(RestApiUrlConstants.ADD_SR_SHIPPING_CHARGES)
	@ResponseBody
	ServiceResponse<List<SRShippingCharge>> addSRShippingCharge();

}

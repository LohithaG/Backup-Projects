package com.mbb.mbbplatform.svcs;

import java.util.Collection;
import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mbb.mbbplatform.common.RestApiUrlConstants;
import com.mbb.mbbplatform.domain.OtherPoCharges;
import com.mbb.mbbplatform.model.ServiceResponse;

@RequestMapping("/mbb/otherCharges")
public interface OtherPoChargesService {

	@PostMapping(RestApiUrlConstants.ADD_DETAILS)
	@ResponseBody
	ServiceResponse<List<OtherPoCharges>> addOtherCharges(@RequestBody String otherCharges);

	@DeleteMapping(RestApiUrlConstants.DELETE_BY_POVENDOR)
	@ResponseBody
	ServiceResponse<String> deleteOtherChargesBasedOnPoVendor(@PathVariable Long poVendorId);

	@GetMapping(RestApiUrlConstants.GET_ALL_DETAILS1)
	@ResponseBody
	ServiceResponse<Collection<OtherPoCharges>> getAllOtherCharges();

	@GetMapping(RestApiUrlConstants.GET_DETAILS_BY_POVENDOR)
	@ResponseBody
	ServiceResponse<Collection<OtherPoCharges>> getOtherChargesByPoVendor(@PathVariable Long poVendorId);
	
	@GetMapping(RestApiUrlConstants.GET_TOATL_AMOUNT_BY_PO_VENDOR)
	@ResponseBody
	ServiceResponse<Double> getTotalAmountPerPoVendor(@PathVariable Long poVendorId);
	
}

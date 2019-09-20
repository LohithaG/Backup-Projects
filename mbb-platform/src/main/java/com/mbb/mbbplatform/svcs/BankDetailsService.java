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
import com.mbb.mbbplatform.domain.BankDetails;
import com.mbb.mbbplatform.model.ServiceResponse;

@RequestMapping("/mbb/bankDetails")
public interface BankDetailsService {

	@PostMapping(RestApiUrlConstants.ADD_DETAILS)
	@ResponseBody
	ServiceResponse<List<BankDetails>> addBankDetails(@RequestBody String bankDetails);

	@DeleteMapping(RestApiUrlConstants.DELETE_BY_POVENDOR)
	@ResponseBody
	ServiceResponse<String> deleteBankDetailsBasedOnPoVendor(@PathVariable Long poVendorId);

	@GetMapping(RestApiUrlConstants.GET_ALL_DETAILS1)
	@ResponseBody
	ServiceResponse<Collection<BankDetails>> getAllBankDetails();

	@GetMapping(RestApiUrlConstants.GET_DETAILS_BY_POVENDOR)
	@ResponseBody
	ServiceResponse<Collection<BankDetails>> getBankDetailsByPoVendor(@PathVariable Long poVendorId);
	
	@GetMapping(RestApiUrlConstants.GET_TOATL_AMOUNT_BY_PO_VENDOR)
	@ResponseBody
	ServiceResponse<Double> getTotalAmountPerPoVendor(@PathVariable Long poVendorId);

}

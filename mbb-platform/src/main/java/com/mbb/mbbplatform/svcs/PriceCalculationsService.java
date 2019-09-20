package com.mbb.mbbplatform.svcs;

import java.util.Collection;
import java.util.List;

import javax.validation.Valid;

import org.json.simple.JSONObject;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mbb.mbbplatform.common.RestApiUrlConstants;
import com.mbb.mbbplatform.domain.ProductDetails;
import com.mbb.mbbplatform.domain.TypeOfCurrency;
import com.mbb.mbbplatform.domain.VendorItemDetails;
import com.mbb.mbbplatform.model.ServiceResponse;

@RequestMapping(value = "/mbb/priceDetails")
public interface PriceCalculationsService {

	@PostMapping(RestApiUrlConstants.GET_AMOUNT_WITH_CHARGES)
	@ResponseBody
	public ServiceResponse<List<VendorItemDetails>> getAmountBeforeCharges(
			@Valid @RequestBody List<ProductDetails> skuCodeList, @PathVariable Long currencyTypeId,
			@PathVariable Long poVendorId);

	@GetMapping(RestApiUrlConstants.GET_ALL_PO_DETAILS)
	@ResponseBody
	public ServiceResponse<JSONObject> getAllPoDetails(@PathVariable Long poVendorId);
	
	
	
	@DeleteMapping(RestApiUrlConstants.DELETE_BY_POVENDOR_ID)
	@ResponseBody
	public ServiceResponse<String> deleteAmountDetailsBasedOnPoVendor(@Valid @PathVariable Long poVendorId);
	
	@GetMapping(RestApiUrlConstants.GET_DETAILS_BY_POVENDOR)
	@ResponseBody
	public ServiceResponse<List<JSONObject>> getPriceDetailsetailsByPoVendor(@Valid @PathVariable Long poVendorId);
	
	@GetMapping(RestApiUrlConstants.GET_ALL_DETAILS1)
	@ResponseBody
	public ServiceResponse<Collection<TypeOfCurrency>> getAllCurrencyTypes();
}

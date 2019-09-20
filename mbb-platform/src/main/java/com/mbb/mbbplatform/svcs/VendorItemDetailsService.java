package com.mbb.mbbplatform.svcs;

import java.util.Collection;
import java.util.List;

import javax.validation.Valid;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mbb.mbbplatform.common.RestApiUrlConstants;
import com.mbb.mbbplatform.domain.VendorItemDetails;
import com.mbb.mbbplatform.model.ServiceResponse;

@RequestMapping("/mbb/vendorItemDetails")
public interface VendorItemDetailsService {

	@PostMapping(RestApiUrlConstants.ADD_VENDOR_ITEM_DETAILS)
	@ResponseBody
	public ServiceResponse<List<VendorItemDetails>> addVendorItemDetails(@Valid @RequestBody String vendorItemDetails);

	@GetMapping(RestApiUrlConstants.GET_DETAILS_BY_POVENDOR)
	@ResponseBody
	public ServiceResponse<Collection<VendorItemDetails>> getVendorItemDetailsByPoVendor(@Valid @PathVariable Long poVendorId);

	@GetMapping(RestApiUrlConstants.GETALL_VENDOR_ITEM_DETAILS)
	@ResponseBody
	public ServiceResponse<Collection<VendorItemDetails>> getAllVendorItemDetails();

	@PutMapping(RestApiUrlConstants.UPDATE_VENDOR_ITEM_DETAILS)
	@ResponseBody
	public ServiceResponse<Collection<VendorItemDetails>> updateVendorItemDetails(
			@Valid @RequestBody List<VendorItemDetails> vendorItemDetails);

	@DeleteMapping(RestApiUrlConstants.DELETE_BY_POVENDOR_ID)
	@ResponseBody
	public ServiceResponse<String> deleteVendorItemDetailsBasedOnPoVendor(@Valid @PathVariable Long poVendorId);

	@GetMapping(RestApiUrlConstants.GET_SKUCODES_BY_PO_NUMBER)
	@ResponseBody
	public ServiceResponse<List<org.json.simple.JSONObject>> getSkuCodesByPurchaseOrderNumber(
			@Valid @PathVariable String purchaseOrderNumber);


}

package com.mbb.mbbplatform.svcs;

import java.util.Collection;
import java.util.List;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;

import org.json.simple.JSONObject;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mbb.mbbplatform.common.RestApiUrlConstants;
import com.mbb.mbbplatform.domain.PoVendor;
import com.mbb.mbbplatform.domain.PurchaseInvoiceStatus;
import com.mbb.mbbplatform.domain.Vendor;
import com.mbb.mbbplatform.model.ServiceResponse;

@RequestMapping("mbb/poVendor")
public interface PoVendorService {

	@PostMapping(RestApiUrlConstants.ADD_POVENDOR)
	@ResponseBody
	ServiceResponse<PoVendor> addPoVendor(@Valid @RequestBody PoVendor povendor);

	@PutMapping(RestApiUrlConstants.UPDATE_POVENDOR)
	@ResponseBody
	public ServiceResponse<PoVendor> updatePoVendor(@Valid @PathVariable Long id,
			@Valid @RequestBody PoVendor povendor);

	@GetMapping(RestApiUrlConstants.GET_DETAILS_BY_ID)
	@ResponseBody
	public ServiceResponse<PoVendor> getPoVendorById(@Valid @PathVariable Long id);

	@GetMapping(RestApiUrlConstants.GET_ALL_POVENDORS)
	@ResponseBody
	public ServiceResponse<Collection<PoVendor>> getAllPoVendor();

	@GetMapping(RestApiUrlConstants.GET_POVENDORBY_PURCHASE_ORDER_NUMBER)
	@ResponseBody
	public ServiceResponse<PoVendor> getPoVendorBypurchaseOrderNumber(@Valid @PathVariable String purchaseOrderNumber);

	@GetMapping(RestApiUrlConstants.GET_ALL_VENDORS)
	@ResponseBody
	public ServiceResponse<Collection<Vendor>> getAllVendors();

	@GetMapping(RestApiUrlConstants.GET_ALL_DETAILS)
	@ResponseBody
	public ServiceResponse<Collection<JSONObject>> getAllDetailsOfVendor(@NotNull @PathVariable String startDate,
			@NotNull @PathVariable String endDate, @PathVariable Long vendorId,
			@PathVariable Long purchaseInvoicestatusId);

	@GetMapping(RestApiUrlConstants.GET_POVENDORS_BASED_ON_STATUS)
	@ResponseBody
	public ServiceResponse<Collection<PoVendor>> getPoVendorsBasedOnStatus(@PathVariable Boolean enable);

	@GetMapping(RestApiUrlConstants.GET_INVENTORY_APPROVAL)
	@ResponseBody
	public ServiceResponse<List<JSONObject>> getInventoryApproval(@PathVariable String startDate,
			@PathVariable String endDate, @PathVariable Long statusId);

	@GetMapping(RestApiUrlConstants.GET_UPDATING_POSTATUS)
	@ResponseBody
	public ServiceResponse<PoVendor> updatePOStatus(@PathVariable Long poVendorId, @PathVariable Long poStatusId,
			@PathVariable String stockReceivedDate);

	@GetMapping(RestApiUrlConstants.GETALL_PURCHASEINVOICE_STATUS)
	@ResponseBody
	public ServiceResponse<List<PurchaseInvoiceStatus>> getAllPurchaseInvoiceStatus();

}

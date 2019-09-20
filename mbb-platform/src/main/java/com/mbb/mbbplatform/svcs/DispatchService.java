package com.mbb.mbbplatform.svcs;

import java.util.Collection;
import java.util.List;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;

import org.json.simple.JSONObject;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mbb.mbbplatform.common.RestApiUrlConstants;
import com.mbb.mbbplatform.domain.Dispatch;
import com.mbb.mbbplatform.domain.DispatchPaymentDocuments;
import com.mbb.mbbplatform.domain.InventoryAccessoryChecklist;
import com.mbb.mbbplatform.domain.InventoryItem;
import com.mbb.mbbplatform.domain.PaymentModes;
import com.mbb.mbbplatform.model.ServiceResponse;

@RequestMapping("/mbb/dispatch")
public interface DispatchService {

	@PostMapping(RestApiUrlConstants.ADD_DISPATCH)
	@ResponseBody
	ServiceResponse<List<Dispatch>> addDispatch(@Valid @RequestBody List<Dispatch> dispatchList);

	@GetMapping(RestApiUrlConstants.GET_DETAILS_BY_ID)
	@ResponseBody
	ServiceResponse<Dispatch> getDispatchById(@NotNull @PathVariable Long id);

	@PutMapping(RestApiUrlConstants.UPDATE_DISPATCH)
	@ResponseBody
	ServiceResponse<Dispatch> updateDispatch(@NotNull @PathVariable Long id, @Valid @RequestBody Dispatch dispatch);

	@DeleteMapping(RestApiUrlConstants.GET_DETAILS_BY_ID)
	@ResponseBody
	ServiceResponse<String> deleteDispatch(@NotNull @PathVariable Long id);

	@GetMapping(RestApiUrlConstants.GET_ALL_DISPATCH)
	@ResponseBody
	ServiceResponse<Collection<Dispatch>> findAllDispatches();

	@GetMapping(RestApiUrlConstants.GET_LAST_WEEK_DISPATCHES)
	@ResponseBody
	ServiceResponse<Collection<Dispatch>> findLastweekDispatchItemDetails();

	@GetMapping(RestApiUrlConstants.GET_ACCESSORIES)
	@ResponseBody
	ServiceResponse<Collection<InventoryAccessoryChecklist>> getChecklistBySkuCode(
			@NotNull @PathVariable String skuCode);

	@GetMapping(RestApiUrlConstants.GET_DISPATCH_DETAILS_IN_BETWEEN_DATES)
	@ResponseBody
	ServiceResponse<List<JSONObject>> findDispatchItemDetailsInBetweenDates(@NotNull @PathVariable String startDate,
			@NotNull @PathVariable String endDate, @PathVariable Long facilityId);

	@GetMapping(RestApiUrlConstants.GET_DETAILS_BY_BARCODE)
	@ResponseBody
	ServiceResponse<InventoryItem> getDispatchDetailsBasedonBarcode(@NotNull @PathVariable String barcode,
			@PathVariable Long facilityId);

	@PutMapping(RestApiUrlConstants.UPDATE_STATUS_TO_DISPATCH)
	@ResponseBody
	ServiceResponse<InventoryItem> updateStatusToDispatch(@NotNull @RequestBody Dispatch dispatch,
			@PathVariable Long id);

	@GetMapping(RestApiUrlConstants.GET_BASED_ON_LOCATION)
	@ResponseBody
	ServiceResponse<Collection<Dispatch>> getDispatchBasedOnLocation(@PathVariable Long facilityId);

	@GetMapping(RestApiUrlConstants.GET_CHECKLIST_BY_BARCODE)
	@ResponseBody
	ServiceResponse<Collection<JSONObject>> getChecklistByBarcode(@NotNull @PathVariable String barcode);

	@GetMapping(RestApiUrlConstants.GET_DETAILS_BY_INVOICEID)
	@ResponseBody
	ServiceResponse<String> getDispatchDetailsBasedOnInvoiceNum(@NotNull @PathVariable String invoiceId);

	@GetMapping(RestApiUrlConstants.CHECK_BY_INVOICEID)
	@ResponseBody
	ServiceResponse<String> invoiceCheck(@NotNull @PathVariable String invoiceId);

	@GetMapping(RestApiUrlConstants.GET_RETURN_PRODUCTS)
	@ResponseBody
	ServiceResponse<List<JSONObject>> getReturnProductsOnFilters(@NotNull @PathVariable String startDate,
			@PathVariable String endDate, @PathVariable Long channel, @PathVariable Long returnStatus,
			@PathVariable Long refundStatus, @PathVariable Long typeOfReturnId);

	@GetMapping(RestApiUrlConstants.GET_ALL_DISPATCHED_INVOICES)
	@ResponseBody
	ServiceResponse<List<String>> getAllDispatchedInvoices();

	@GetMapping("getFacilitesForDispatches")
	@ResponseBody
	ServiceResponse<List<Dispatch>> getFacilitesForDispatches();

	@PostMapping("getChannelForDispatches")
	@ResponseBody
	ServiceResponse<List<Dispatch>> getChannelForDispatches();
	
	@GetMapping("getPaymentModesForDispatches")
	@ResponseBody
	ServiceResponse<List<Dispatch>> getPaymentModesForDispatches();

	@GetMapping(RestApiUrlConstants.GET_ALL_PAYMENT_MODES)
	@ResponseBody
	public ServiceResponse<List<PaymentModes>> getAllPaymentModes();

	@PostMapping(RestApiUrlConstants.ADD_PROOFS_FOR_DISPATCH)
	@ResponseBody
	public ServiceResponse<DispatchPaymentDocuments> addDispatchPaymentDocument(
			@Valid @RequestBody DispatchPaymentDocuments dispatchPaymentDocuments);
	
	@GetMapping(RestApiUrlConstants.GET_DISPATCH_PAYMENT_DOCUMENT)
	@ResponseBody
	public ServiceResponse<JSONObject> getDispatchPaymentDocument(@NotNull @PathVariable Long dispatchId);
	
	
	
	public ServiceResponse<Boolean> sentMailForAccountant(  String subject,String body,String email,String docName);

}

package com.mbb.mbbplatform.svcs;

import java.util.List;

import org.json.simple.JSONObject;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mbb.mbbplatform.common.RestApiUrlConstants;
import com.mbb.mbbplatform.domain.Dispatch;
import com.mbb.mbbplatform.domain.InventoryItem;
import com.mbb.mbbplatform.model.ServiceResponse;

@RequestMapping("/mbb/returns")
public interface ReturnService {

	@PutMapping(RestApiUrlConstants.ADD_RETURN_ITEM)
	@ResponseBody
	ServiceResponse<List<InventoryItem>> addReturnItem(@RequestBody List<InventoryItem> inventoryItemList);

	@GetMapping(RestApiUrlConstants.GET_ITEM_DETAILS)
	@ResponseBody
	ServiceResponse<JSONObject> getReturnProductDetailsBasedOnBarcode(@PathVariable String barcode);
	
	@GetMapping(RestApiUrlConstants.GET_DETAILS_BY_INVOICEID)
	@ResponseBody
	ServiceResponse<List<JSONObject>> getItemsBasedOnInvoiceNumber(@PathVariable String invoiceId);
	
	@GetMapping("/getRMSNumbers")
	@ResponseBody
	ServiceResponse<List<Dispatch>> getRMSNumber();

}

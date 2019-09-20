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
import com.mbb.mbbplatform.domain.Facility;
import com.mbb.mbbplatform.domain.InventoryCondition;
import com.mbb.mbbplatform.domain.InventoryItem;
import com.mbb.mbbplatform.domain.InventoryItemStatus;
import com.mbb.mbbplatform.model.ServiceResponse;

@RequestMapping("/mbb/inventoryItem")
public interface InventoryItemService {

	@GetMapping(RestApiUrlConstants.GET_DETAILS_BY_ID)
	@ResponseBody
	ServiceResponse<InventoryItem> getInventoryItemsById(@NotNull @PathVariable Long id);

	@PutMapping(RestApiUrlConstants.UPDATE_INVENTORY_ITEM)
	@ResponseBody
	ServiceResponse<InventoryItem> updateInventoryItem(@NotNull @PathVariable Long id, @Valid @RequestBody InventoryItem inventoryItem);

	@DeleteMapping(RestApiUrlConstants.GET_DETAILS_BY_ID)
	@ResponseBody
	ServiceResponse<String> deleteInventoryItem(@NotNull @PathVariable Long id);

	@GetMapping(RestApiUrlConstants.GET_ALL_INVENTORY_ITEM)
	@ResponseBody
	ServiceResponse<Collection<InventoryItem>> getAllInventoryItems();
	
	@GetMapping(RestApiUrlConstants.GET_ALL_INVENTORY_ITEMS_STATUS)
	@ResponseBody
	ServiceResponse<Collection<InventoryItemStatus>> getAllInventoryItemStatus();
	
	@GetMapping(RestApiUrlConstants.GET_INVENTORY_ITEMS_SKUCODE)
	@ResponseBody
	ServiceResponse<Collection<InventoryItem>> getInventoryItemBySkuCode(@NotNull @PathVariable String skuCode);
	
	@PutMapping(RestApiUrlConstants.UPDATE_INVENTORYITEM_STATUS)
	@ResponseBody
	ServiceResponse<InventoryItem> updateInventoryItemStatus( @Valid @PathVariable Long id,@Valid @PathVariable  Long status);

	@GetMapping(RestApiUrlConstants.GET_DETAILS_BY_BARCODE_FOR_UPDATE)
	@ResponseBody
	ServiceResponse<InventoryItem> getInventoryItemByBarcode(@NotNull @PathVariable String barcode);
	
	@PostMapping(RestApiUrlConstants.ADD_NEW_INVENTORY_ITEM)
	@ResponseBody
	ServiceResponse<List<InventoryItem>> addNewInventoryItem(@Valid @RequestBody List<InventoryItem> inventoryItem);

	@GetMapping(RestApiUrlConstants.GET_ITEMS_BY_STATUS)
	@ResponseBody
	ServiceResponse<Collection<InventoryItem>> getInventoryItemsBasedOnStatus(@NotNull @PathVariable Long status);
	
	@GetMapping(RestApiUrlConstants.GET_ALL_CONDITIONS)
	@ResponseBody
	ServiceResponse<Collection<InventoryCondition>> getAllInventoryConditions();
	
	@GetMapping(RestApiUrlConstants.GET_ALL_FACILITIES)
	@ResponseBody
	ServiceResponse<Collection<Facility>> getAllFacilities();
	
	
	@GetMapping(RestApiUrlConstants.GET_STATUS_BASED_ON_CONDITION)
	@ResponseBody
	ServiceResponse<Collection<InventoryItemStatus>> getStatusBasedOnCondirion(@NotNull @PathVariable Long conditionId);
	
	@GetMapping(RestApiUrlConstants.GET_ALL_BARCODES)
	@ResponseBody
	ServiceResponse<Collection<InventoryItem>> getAllBarcodes(); 

	@GetMapping(RestApiUrlConstants.GET_INVENTORY_ITEM_BY_BARCODE)
	@ResponseBody
	ServiceResponse<InventoryItem> viewInventoryItemByBarcode(@NotNull @PathVariable String barcode);
	
	@PutMapping(RestApiUrlConstants.UPDATE_INVENTORYITEM_CONDITION)
	@ResponseBody
	ServiceResponse<InventoryItem> updateInventoryItemCondition( @Valid @PathVariable Long id,@Valid @PathVariable  Long conditionId);
	
	@GetMapping(RestApiUrlConstants.GET_ITEM_DETAILS_BY_BARCODE)
	@ResponseBody
	ServiceResponse<JSONObject> getItemDetailsByBarcode(@NotNull @PathVariable String barcode);
	
	@PutMapping(RestApiUrlConstants.UPDATE_APPROVAL_STATUS)
	@ResponseBody
	ServiceResponse<List<InventoryItem>> updateApprovalStatus( @Valid @PathVariable Long poVendorId);
	
	@GetMapping(RestApiUrlConstants.GET_PENDING_APPROVAL_STATUS_COUNT)
	@ResponseBody
	ServiceResponse<List<InventoryItem>> getPendingApprovalStatuscount( @Valid @PathVariable Long poVendorId);
	
	@GetMapping(RestApiUrlConstants.VIEW_INVENTORY_APPROVAL)
	@ResponseBody
	ServiceResponse<JSONObject> viewInventoryApproval( @Valid @PathVariable Long poVendorId);
	
	@PutMapping(RestApiUrlConstants.UPDATE_SERIAL_NUMBERS)
	@ResponseBody
	ServiceResponse<List<InventoryItem>> updateSerialNumbers();

	
}


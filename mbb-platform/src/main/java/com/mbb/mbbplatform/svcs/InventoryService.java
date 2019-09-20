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
import org.springframework.web.multipart.MultipartFile;

import com.mbb.mbbplatform.common.RestApiUrlConstants;
import com.mbb.mbbplatform.domain.Barcode;
import com.mbb.mbbplatform.domain.FacilityWiseInventory;
import com.mbb.mbbplatform.domain.Inventory;
import com.mbb.mbbplatform.model.ServiceResponse;

@RequestMapping("/mbb/inventory")
public interface InventoryService {

	@GetMapping(RestApiUrlConstants.GET_DETAILS_BY_ID)
	@ResponseBody
	ServiceResponse<Inventory> getInventoryById(@NotNull @PathVariable Long id);

	@PutMapping(RestApiUrlConstants.UPDATE_INVENTORY)
	@ResponseBody
	ServiceResponse<Inventory> updateInventory(@NotNull @PathVariable Long id, @Valid @RequestBody Inventory inventory);

	@DeleteMapping(RestApiUrlConstants.GET_DETAILS_BY_ID)
	@ResponseBody
	ServiceResponse<String> deleteInventory(@NotNull @PathVariable Long id);

	@PostMapping(RestApiUrlConstants.ADD_INVENTORY)
	@ResponseBody
	ServiceResponse<Inventory> addInventory(@Valid @RequestBody String inventoryWithFacility);

	@GetMapping(RestApiUrlConstants.GET_ALL_INVENTORY)
	@ResponseBody
	ServiceResponse<Collection<Inventory>> findAllInventories();

	@GetMapping(RestApiUrlConstants.GET_DETAILS_BY_SKUCODE)
	@ResponseBody
	ServiceResponse<JSONObject> getInventoryBySku(@NotNull @PathVariable String skuCode);

	@GetMapping(RestApiUrlConstants.GET_DETAILS_BY_SKUCODE_ACTIVESTATUS)
	@ResponseBody
	ServiceResponse<JSONObject> getInventoryBySkuCodeandActiveStatus(@NotNull @PathVariable String skuCode);

	@GetMapping(RestApiUrlConstants.SENDING_MAIL_ALERTS_FOR_INVENTORY_LIST_BASED_ON_FACILITY_WISE_THRESHHOLD)
	@ResponseBody
	ServiceResponse<List<List<FacilityWiseInventory>>> sendingMailAlertsInventoryListBasedOnThreshold(
			@PathVariable Long facilityId);

	@GetMapping(RestApiUrlConstants.GET_ALL_SKUCODES)
	@ResponseBody
	ServiceResponse<List<String>> getAllSkuCodes();

	@PutMapping(RestApiUrlConstants.UPDATE_SKU)
	@ResponseBody
	ServiceResponse<Inventory> updateSku(@Valid @RequestBody String inventoryWithFacility,
			@PathVariable Long inventoryId, @PathVariable Long userId);

	@PostMapping(RestApiUrlConstants.ADD_BARCODEID)
	@ResponseBody
	ServiceResponse<List<Barcode>> addBarcodeIdByInventorySnapshot();

	@GetMapping(RestApiUrlConstants.GET_DETAILS_BY_BARCODE_ID)
	@ResponseBody
	ServiceResponse<Inventory> getInventoryByBarcodeId(@NotNull @PathVariable String barcodeId);

	@GetMapping(RestApiUrlConstants.GET_SKUCODES_BY_SORTING)
	@ResponseBody
	ServiceResponse<JSONObject> getAllSkuCodesBySorting(@PathVariable Long facilityId, @PathVariable Boolean status,
			@PathVariable int pageNo ,@PathVariable int size,
			@PathVariable String columnName, @PathVariable Boolean sortBy, @PathVariable String search);

	@GetMapping(RestApiUrlConstants.GET_ITEMS_BASED_ON_SKUCODE)
	@ResponseBody
	ServiceResponse<Collection<JSONObject>> getInventoryItemsBasedOnSkuCode(@PathVariable String skuCode,
			@PathVariable Long statusId, @PathVariable Long facilityId);

	@GetMapping(RestApiUrlConstants.GET_BASED_ON_LOCATION)
	@ResponseBody
	ServiceResponse<JSONObject> getProductCountBasedOnFacility(@PathVariable Long facilityId,
			@PathVariable Boolean status, @PathVariable int pageNo, @PathVariable int size,
			@PathVariable String columnName, @PathVariable Boolean sortBy, @PathVariable String search);



	@GetMapping(RestApiUrlConstants.GET_INVENTORY_DETAILS)
	@ResponseBody
	ServiceResponse<List<JSONObject>> getInventoryBasedOnFacility();

	@GetMapping(RestApiUrlConstants.GET_ALL_BARCODES)
	@ResponseBody
	ServiceResponse<List<String>> getAllBarcodes();

	@PutMapping(RestApiUrlConstants.UPDATE_FACILITY_WISE_THRESHOLD)
	@ResponseBody
	ServiceResponse<String> updateFacilityWiseThreshold();

	@GetMapping(RestApiUrlConstants.GETTING_INVENTORY_PICTURE_BY_SKUCODE)
	@ResponseBody
	ServiceResponse<Inventory> gettingInventoryPictureBySkuCode(@PathVariable String skuCode);

	@GetMapping(RestApiUrlConstants.GETTING_INVENTORY_LIST_BASED_ON_FACILITY_WISE_THRESHHOLD)
	@ResponseBody
	ServiceResponse<List<List<FacilityWiseInventory>>> listofInventoryBasedOnFaciltyWiseThreshold(Long facilityId);

	@PutMapping(RestApiUrlConstants.UPDATE_INVENTORY_PICTURE_BY_SKUCODE)
	@ResponseBody
	ServiceResponse<Inventory> updatingInventoryPictureBySkuCode(MultipartFile file,
			@Valid @PathVariable String skuCode);

	@GetMapping(RestApiUrlConstants.GET_SCANNEDCOUNT_BASED_ON_SKU_FACILITY)
	@ResponseBody
	ServiceResponse<List<JSONObject>> getScannedQrcodesCount(@PathVariable String skuCode,
			@PathVariable Long facilityId);

	@GetMapping(RestApiUrlConstants.GET_INVENTORY_ONDATES_FACILITY)
	@ResponseBody
	ServiceResponse<List<JSONObject>> getInventoryOnDates(@PathVariable String startDate, @PathVariable String endDate,
			@PathVariable Long facilityId);

	@GetMapping(RestApiUrlConstants.SENDING_MAIL_ALERTS_FOR_INVENTORY_LIST_BASED_ON_FACILITY_WISE_THRESHHOLD_BY_CRON)
	@ResponseBody
	ServiceResponse<String> inventoryAlertsBasedOnFacilityWiseAThresholdLevel();

	@GetMapping(RestApiUrlConstants.OVER_ALL_THRESHOLD_LEVEL_COUNT)
	@ResponseBody
	ServiceResponse<List<FacilityWiseInventory>> inventoryAlertsBasedOnOverAllThresholdLevelCount();

	@GetMapping(RestApiUrlConstants.GET_ITEMS_BASED_ON_SKUCODE_AND_DATES)
	@ResponseBody
	ServiceResponse<Collection<JSONObject>> getInventoryItemsBasedOnSkuCodeAndDates(@PathVariable String startDate,
			@PathVariable String endDate, @PathVariable String skuCode, @PathVariable Long statusId,
			@PathVariable Long facilityId);

	@PutMapping(RestApiUrlConstants.UPDATE_INVENTORY_STATUS)
	ServiceResponse<String> updateInventoryStatus(@PathVariable String skuCode, @PathVariable Boolean skuStatus);
	
	@GetMapping(RestApiUrlConstants.VIEW_ACCESSORIES)
	@ResponseBody
	ServiceResponse<List<JSONObject>> viewAccessories( @PathVariable Long inventoryId);
	
	@GetMapping(RestApiUrlConstants.VIEW_ACCESSORIES_IN_INVENTORY)
	@ResponseBody
	ServiceResponse<List<JSONObject>> viewAccessoriesInInventory( @PathVariable Long inventoryId,@PathVariable Long facilityId,
			@PathVariable Boolean status);

	@GetMapping(RestApiUrlConstants.GET_PRODUCTNAME_BY_SKU)
	@ResponseBody
	ServiceResponse<JSONObject> getProductNameBySku( @PathVariable String skuCode);
	
	@GetMapping(RestApiUrlConstants.GET_BASED_ON_LOCATION_FOR_VIEW_ACCESSORIES)
	@ResponseBody
	ServiceResponse<List<JSONObject>> getProductCountBasedOnFacilityForViewAccessories(@PathVariable Long facilityId,
			@PathVariable Boolean status,@PathVariable List<Inventory> accessoriesList);

}

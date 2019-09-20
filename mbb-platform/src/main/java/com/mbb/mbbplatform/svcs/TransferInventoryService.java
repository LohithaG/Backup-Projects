package com.mbb.mbbplatform.svcs;

import java.util.List;

import javax.validation.Valid;

import org.json.simple.JSONObject;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mbb.mbbplatform.common.RestApiUrlConstants;
import com.mbb.mbbplatform.domain.TransferInventory;
import com.mbb.mbbplatform.model.ServiceResponse;
import com.mbb.mbbplatform.domain.PackageDetails;

@RequestMapping("/mbb/transferInventory")
public interface TransferInventoryService {

	@PostMapping(RestApiUrlConstants.ADD_TRANSFER_INVENTORY)
	@ResponseBody
	public ServiceResponse<TransferInventory> addTransferInventory(
			@Valid @RequestBody List<PackageDetails> listOfpackageDetails, @Valid @PathVariable String fromLocation,
			@Valid @PathVariable String toLocation);

	@PutMapping(RestApiUrlConstants.UPDATE_INVENTORY_MOVING_STATUS)
	@ResponseBody
	public ServiceResponse<TransferInventory> updateInventoryMovingStatus(@Valid @PathVariable Long statusId,
			@Valid @PathVariable Long id);

	@GetMapping(RestApiUrlConstants.GET_TRANSPORT_DETAILS_ON_ID)
	@ResponseBody
	public ServiceResponse<JSONObject> getTransportDetailsBasedOnId(@Valid @PathVariable Long id);

	@GetMapping(RestApiUrlConstants.GET_ALL_BY_FACILITY)
	@ResponseBody
	public ServiceResponse<List<TransferInventory>> getAllTransferInventoryByfacility(@PathVariable Long id);

	@GetMapping(RestApiUrlConstants.GET_PACK_COMPLETED_TRANSFER_INVENTORY)
	@ResponseBody
	public ServiceResponse<List<TransferInventory>> getPackageCompletedTransferInventory();

	@PutMapping(RestApiUrlConstants.UPDATE_INVENTORY_MOVING_STATUS_TO_RECEIVED)
	@ResponseBody
	public ServiceResponse<TransferInventory> updateTransferInventoryToReceived(
			@Valid @PathVariable Long transferInventoryId, @PathVariable String comments,
			@PathVariable String userName);

	@GetMapping(RestApiUrlConstants.GET_ALL_PACKAGEDETAILS_BY_TRANSFERINVENTORYID)
	@ResponseBody
	ServiceResponse<JSONObject> getAllPackageDetailsByTransferInventoryId(@PathVariable Long id);

	@PutMapping(RestApiUrlConstants.TRANSFERINVENTORY_DISPATCH)
	@ResponseBody
	public ServiceResponse<TransferInventory> dispatchTransferInventory(@Valid @PathVariable Long transferInventoryId);

	@GetMapping(RestApiUrlConstants.VIEW_PACKAGE)
	@ResponseBody
	ServiceResponse<JSONObject> viewPackage(@Valid @PathVariable Long transferInventoryId);

	@GetMapping(RestApiUrlConstants.GET_ALL)
	@ResponseBody
	ServiceResponse<List<TransferInventory>> getScanAndPackageCreatedTransferInventory();

	@GetMapping(RestApiUrlConstants.GET_PACKAGES_ON_ROUTE_DATES)
	@ResponseBody
	ServiceResponse<List<JSONObject>> getPackageOnRouteAndDateFilters(@PathVariable Long fromId,
			@PathVariable Long toId, @PathVariable String startDate, @PathVariable String endDate,
			@PathVariable Long statusId);

	@GetMapping(RestApiUrlConstants.GET_SCAN_FOR_REMOVE)
	@ResponseBody
	ServiceResponse<String> getScanForRemove(@PathVariable Long transferInvId, @PathVariable String barCode,
			@PathVariable String updatedUser, @PathVariable Long facilityId);

}

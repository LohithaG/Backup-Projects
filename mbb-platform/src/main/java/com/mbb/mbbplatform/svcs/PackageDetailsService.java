package com.mbb.mbbplatform.svcs;

import java.util.Collection;
import java.util.List;

import javax.validation.Valid;

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
import com.mbb.mbbplatform.domain.InventoryItem;
import com.mbb.mbbplatform.domain.PackageDetails;
import com.mbb.mbbplatform.domain.TransferInventory;
import com.mbb.mbbplatform.model.ServiceResponse;

@RequestMapping("/mbb/packageDetails")
public interface PackageDetailsService {

	@GetMapping(RestApiUrlConstants.GET_COUNT_BASED_ON_SKUCODE_FACILITYID)
	@ResponseBody
	ServiceResponse<JSONObject> getCountBasedOnSKU(@PathVariable String skuCode, @PathVariable Long facilityId);

	@PostMapping(RestApiUrlConstants.ADD_TRANSFER_INVENTORY)
	@ResponseBody
	ServiceResponse<List<PackageDetails>> addPackage(@Valid @RequestBody List<PackageDetails> listOfPackageDetails,
			@Valid @PathVariable Long fromLocation, @Valid @PathVariable Long toLocation);

	@GetMapping(RestApiUrlConstants.GET_COUNT_BASED_ON_PONUMBER_SKUCODE_STATUS)
	@ResponseBody
	ServiceResponse<List<InventoryItem>> getCountBasedOnSkucodeAndstatus(@PathVariable String poNumber,
			@PathVariable String skuCode, @PathVariable Long statusId);

	@GetMapping(RestApiUrlConstants.GET_BASED_ON_BARCODE)
	@ResponseBody
	ServiceResponse<JSONObject> getBasedOnBarcode(@PathVariable String barcode, @PathVariable Long transferInventoryId, @PathVariable Long facilityId);

	@GetMapping(RestApiUrlConstants.GET_ALL_PACKAGE_DETAILS)
	@ResponseBody
	ServiceResponse<List<PackageDetails>> getAllPackageDetails();

	@GetMapping(RestApiUrlConstants.GET_ALL_FACILITIES)
	@ResponseBody
	ServiceResponse<Collection<Facility>> getAllFacilities();

	@GetMapping(RestApiUrlConstants.GET_DETAILS_FOR_UPDATE_PACKAGEDETAILS)
	@ResponseBody
	ServiceResponse<List<JSONObject>> getDetailsForUpdatePackageDetails(@Valid @PathVariable Long transferInventoryId);

	@PutMapping(RestApiUrlConstants.UPDATE_QRCODE_STATUS)
	@ResponseBody
	ServiceResponse<String> updateQrCodeStatus(@PathVariable String barcode, @PathVariable Long transferInventoryId,@PathVariable String updatedUser);

	@PutMapping(RestApiUrlConstants.UPDATE_PACKAGEDETAILS)
	@ResponseBody
	ServiceResponse<TransferInventory> updatePackage(@RequestBody List<PackageDetails> listOfPackageDetails,
			@PathVariable Long transferInventoryId);

	@GetMapping(RestApiUrlConstants.CHECK_PACKAGE_NAME)
	@ResponseBody
	ServiceResponse<String> checkPackageName(@Valid @PathVariable Long fromLocation,
			@Valid @PathVariable Long toLocation);

	@DeleteMapping(RestApiUrlConstants.GET_DETAILS_BY_ID)
	@ResponseBody
	ServiceResponse<String> deletePackageDetails(@PathVariable Long id);

}

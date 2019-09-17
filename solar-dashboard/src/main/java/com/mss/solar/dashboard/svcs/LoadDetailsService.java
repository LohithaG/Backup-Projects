package com.mss.solar.dashboard.svcs;

import java.util.Collection;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;

import org.hibernate.validator.constraints.Email;
import org.json.simple.JSONObject;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mss.solar.dashboard.common.RestApiUrlConstants;
import com.mss.solar.dashboard.domain.LoadDetails;
import com.mss.solar.dashboard.domain.SkidDrops;
import com.mss.solar.dashboard.model.ServiceResponse;

@RequestMapping(value = "/api/loadAppointments")
public interface LoadDetailsService {

	final String MODULE_NAME = "LoadDetailsService";

	@PostMapping(RestApiUrlConstants.ADD_LOADADETAILS)
	@ResponseBody
	ServiceResponse<LoadDetails> addLoadDetails(@Valid @RequestBody LoadDetails loadDetails);

	@PutMapping(RestApiUrlConstants.UPDATE_LOADDETAILS)
	@ResponseBody
	ServiceResponse<LoadDetails> updateLoadDetails(@Valid @RequestBody LoadDetails loadDetails);

	@GetMapping(RestApiUrlConstants.GET_ALL_LOADS)
	@ResponseBody
	ServiceResponse<Collection<LoadDetails>> getAllLoadDetails();

	@GetMapping(RestApiUrlConstants.GET_LOAD_DETAILS_BY_LOAD_NUMBER)
	@ResponseBody
	ServiceResponse<LoadDetails> getLoadDetailsByLoadNumber(@PathVariable String loadNumber);

	@DeleteMapping(RestApiUrlConstants.DELETE_LOAD_DETAILS_BY_LOAD_NUMBER)
	@ResponseBody
	ServiceResponse<String> deleteLoadDetailsByLoadNumber(@PathVariable String loadNumber);

	@GetMapping(RestApiUrlConstants.GET_LOADS_BY_DRIVER)
	@ResponseBody
	ServiceResponse<Collection<LoadDetails>> getLoadDetailsByDriver(@NotNull @PathVariable Long driverId);

	@GetMapping(RestApiUrlConstants.GET_DRIVER_ACCEPTED_LOADS)
	@ResponseBody
	ServiceResponse<Collection<LoadDetails>> getDriverAcceptedLoads(@Valid @PathVariable Long driverId);

	@GetMapping(RestApiUrlConstants.GET_DRIVER_NOT_COMPLETED_LOADS)
	@ResponseBody
	ServiceResponse<Collection<LoadDetails>> getDriverNotCompletedLoads(@Valid @PathVariable Long driverId);
	
	@GetMapping(RestApiUrlConstants.GET_DRIVER_NOT_ASSIGNED_LOADS)
	@ResponseBody
	ServiceResponse<Collection<LoadDetails>> getDriverAssignedLoads(@Valid @PathVariable Long driverId);
	
	@GetMapping(RestApiUrlConstants.GET_LOADS_BASED_ON_DESTINATION_LOCATIONS)
	@ResponseBody
	ServiceResponse<Collection<LoadDetails>> getLoadsBasedOnDestinationLocations(@NotNull @PathVariable String locNbr);

	@PutMapping(RestApiUrlConstants.UPDATE_lOADS_STATUS)
	@ResponseBody
	ServiceResponse<LoadDetails> updateLoadStatus(@Valid @PathVariable String loadNumber,
			@Valid @PathVariable Long status);

	@GetMapping(RestApiUrlConstants.GET_ALL_ACCEPTED_LOADS_DETAILS)
	@ResponseBody
	ServiceResponse<Collection<LoadDetails>> getAcceptedLoadsList();

	@GetMapping(RestApiUrlConstants.UPDATE_HIGH_VALUE_PRIORITY)
	@ResponseBody
	public void updateHighValueAndPriority(@PathVariable String loadNumber, @PathVariable Integer highValueLoad,
			@PathVariable Integer highPriorityLoad);

	@GetMapping(RestApiUrlConstants.GET_LOADS_BASED_DCMANAGER_EMAIL)
	@ResponseBody
	ServiceResponse<Collection<LoadDetails>> getLoadsBasedOnDcManagerEmail(@Email @PathVariable String email);

	@PutMapping(RestApiUrlConstants.UPDATE_LOAD_GEOMILES)
	@ResponseBody
	ServiceResponse<LoadDetails> updateGeofenceMiles(@Valid @PathVariable String loadNumber,
			@Valid @PathVariable Double geomiles);

	@GetMapping(RestApiUrlConstants.GET_ALL_PARTIAL_LOADS)
	@ResponseBody
	ServiceResponse<Collection<LoadDetails>> getAllPartialLoadsByStatus();

	@GetMapping(RestApiUrlConstants.GENERATE_LOAD_SEQUENCE_NUMBER)
	@ResponseBody
	ServiceResponse<String> generateLoadSequenceNumber();

	@GetMapping(RestApiUrlConstants.GET_ACCEPTED_COMPLETED_LOADS_BY_DRIVER)
	@ResponseBody
	ServiceResponse<Collection<LoadDetails>> getAcceptedAndCompletedLoadsByDriver(@Valid @PathVariable Long driverId);

	@GetMapping(RestApiUrlConstants.GET_DRIVER_COMPLETED_AND_PICKUP_INSPECTION_LOADS)
	@ResponseBody
	ServiceResponse<Collection<LoadDetails>> getDriverCompletedAndPickupInspectionLoads(@PathVariable Long driverId);

	@GetMapping(RestApiUrlConstants.GET_LOADS_BY_PICKUP_LOCATION)
	@ResponseBody
	ServiceResponse<Collection<LoadDetails>> getLoadsByPickupLocation(@NotNull @PathVariable String locNbr);
	
	@GetMapping(RestApiUrlConstants.GET_SKIDDROPS_BY_LOAD_NUMBER)
	@ResponseBody
	ServiceResponse<Collection<SkidDrops>> getSkidDropsByLoadNumber(@NotNull @PathVariable String loadNumber);
	
	@GetMapping(RestApiUrlConstants.GET_SKIDDROPS_BY_LOAD_NUMBER_AND_INSPECTIONTYPE)
	@ResponseBody
	ServiceResponse<org.json.simple.JSONObject> getSkidDropsByLoadNumberAndInspectionType(@NotNull @PathVariable String loadNumber,@NotNull @PathVariable Long InspectionTypeId);

	@DeleteMapping(RestApiUrlConstants.DELETE_SKID_DROP_BY_ID)
	@ResponseBody
	ServiceResponse<String> deleteSkidDropById(@PathVariable Long id);
	
	@GetMapping(RestApiUrlConstants.GET_LOAD_OVERALL_DISTANCE)
	@ResponseBody
	ServiceResponse<Double> getLoadWiseDistance(@PathVariable String loadNumber);
	
	@GetMapping(RestApiUrlConstants.GET_DRIVER_ACCEPTED_LOAD_DETAILS)
	@ResponseBody
	ServiceResponse<JSONObject> getDriverAcceptedLoadDetails(@PathVariable String loadNumber);
}

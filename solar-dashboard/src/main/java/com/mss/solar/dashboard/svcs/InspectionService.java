package com.mss.solar.dashboard.svcs;

import java.util.Collection;

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

import com.mss.solar.dashboard.common.RestApiUrlConstants;
import com.mss.solar.dashboard.domain.CartonStatus;
import com.mss.solar.dashboard.domain.ExceptionArea;
import com.mss.solar.dashboard.domain.ExceptionSeverity;
import com.mss.solar.dashboard.domain.ExceptionType;
import com.mss.solar.dashboard.domain.Inspection;
import com.mss.solar.dashboard.domain.InspectionCartonDetails;
import com.mss.solar.dashboard.domain.InspectionType;
import com.mss.solar.dashboard.domain.SkidDrops;
import com.mss.solar.dashboard.model.ServiceResponse;

@RequestMapping(value = "/api/inspection")
public interface InspectionService {

	final String MODULE_NAME = "InspectionService";

	@GetMapping(RestApiUrlConstants.GET_ALL_INSPECTIONS)
	@ResponseBody
	ServiceResponse<Collection<Inspection>> getAllInspectionDetails();

	@PostMapping(RestApiUrlConstants.ADD_CARTONS_FOR_INSPECTION)
	@ResponseBody
	ServiceResponse<InspectionCartonDetails> addCartonsForInspection(@Valid @RequestBody String inspectionDetails);

	@PostMapping(RestApiUrlConstants.ADD_INSPECTION)
	@ResponseBody
	ServiceResponse<Inspection> addInspection(@Valid @RequestBody String inspectionDetails);

	@DeleteMapping(RestApiUrlConstants.DELETE_INSPECTION)
	@ResponseBody
	ServiceResponse<String> deleteInspection(@NotNull @PathVariable Long id);

	@PutMapping(RestApiUrlConstants.UPDATE_EXPENSES)
	@ResponseBody
	ServiceResponse<Inspection> updateInspection(@Valid @RequestBody Inspection inspection);

	@GetMapping(RestApiUrlConstants.GET_INSPECTION_DETAILS_lOAD_NUMBER)
	@ResponseBody
	ServiceResponse<Collection<Inspection>> getInspectionByLoad(@NotNull @PathVariable String loadNumber);

	@GetMapping(RestApiUrlConstants.GET_INSPECTION_BY_ID)
	@ResponseBody
	ServiceResponse<Inspection> getInspectionById(@NotNull @PathVariable Long id);

	@GetMapping(RestApiUrlConstants.GET_ALL_INSPECTION_TYPES)
	@ResponseBody
	ServiceResponse<Collection<InspectionType>> geAllInspectionTypes();

	@GetMapping(RestApiUrlConstants.GET_ALL_CARTON_STATUSES)
	@ResponseBody
	ServiceResponse<Collection<CartonStatus>> geAllCartonStatuses();

	@GetMapping(RestApiUrlConstants.GET_DAMAGE_IMAGES_BY_lOAD_NUMBER)
	@ResponseBody
	ServiceResponse<Collection<JSONObject>> getDamageImagesByLoad(@NotNull @PathVariable String loadNumber,
			@PathVariable Long id);

	@GetMapping(RestApiUrlConstants.GET_DELIVERY_INSPECTION_COMPLETED_CAR_STATUSES)
	@ResponseBody
	ServiceResponse<Collection<InspectionCartonDetails>> getDeliveryInspectionCompledLoadsCartonStatuses(
			@NotNull @PathVariable String loadNumber);

	@GetMapping(RestApiUrlConstants.GET_ALL_EXCEPTION_AREAS)
	@ResponseBody
	ServiceResponse<Collection<ExceptionArea>> geAllExceptionAreas();

	@GetMapping(RestApiUrlConstants.GET_ALL_EXCEPTION_TYPES)
	@ResponseBody
	ServiceResponse<Collection<ExceptionType>> geAllExceptionTypes();

	@GetMapping(RestApiUrlConstants.GET_ALL_EXCEPTION_SEVERITIES)
	@ResponseBody
	ServiceResponse<Collection<ExceptionSeverity>> getAllExceptionSeverities();
	
	@GetMapping(RestApiUrlConstants.GET_DAMAGE_IMAGES_BY_CARTON)
	@ResponseBody
	ServiceResponse<Collection<JSONObject>> getDamageImagesByCarton(@NotNull @PathVariable Long cartonId, @PathVariable Long inspectionypeId);
	
	@GetMapping(RestApiUrlConstants.GET_DRIVER_ACCEPTED_GEOFENCE_ENTERED_LOADS)
	@ResponseBody
	ServiceResponse<Collection<SkidDrops>> getDriverAcceptedAndGeofenceEnteredLoads(@NotNull @PathVariable String loadNumber);
	
	
}

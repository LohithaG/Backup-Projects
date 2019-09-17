package com.mss.solar.dashboard.svcs;

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

import com.mss.solar.dashboard.common.RestApiUrlConstants;
import com.mss.solar.dashboard.domain.CartonDetails;
import com.mss.solar.dashboard.domain.WeightMeasurement;
import com.mss.solar.dashboard.model.ServiceResponse;

@RequestMapping(value = "/api/cartons")
public interface CartonDetailsService {

	final String MODULE_NAME = "CartonDetailsService";

	@PostMapping(RestApiUrlConstants.ADD_CARTONDETAILS)
	@ResponseBody
	ServiceResponse<List<CartonDetails>> addCarton(@Valid @RequestBody List<CartonDetails> cartonsList);

	@PutMapping(RestApiUrlConstants.UPDATE_CARTONDETAILS)
	@ResponseBody
	ServiceResponse<CartonDetails> updateCarton(@Valid @RequestBody CartonDetails carton);

	@DeleteMapping(RestApiUrlConstants.DELETE_CARTONDETAILS)
	@ResponseBody
	ServiceResponse<String> deleteCarton(@NotNull @PathVariable Long id);

	@GetMapping(RestApiUrlConstants.GET_ALL_CARTONDETAILS)
	@ResponseBody
	ServiceResponse<Collection<CartonDetails>> getAllCartons();

	@GetMapping(RestApiUrlConstants.GET_CARTON_DETAILS_BY_ID)
	@ResponseBody
	ServiceResponse<CartonDetails> getCartonById(@PathVariable Long id);

	@GetMapping(RestApiUrlConstants.GET_CARTON_ID_BY_ID)
	@ResponseBody
	ServiceResponse<JSONObject> getCartonIdById(@PathVariable Long id);

	@GetMapping(RestApiUrlConstants.GET_CARTON_BY_CARTON_ID)
	@ResponseBody
	ServiceResponse<CartonDetails> getCartonDetailsByCartonId(@PathVariable String cartonId,
			@PathVariable String loadNumber, @PathVariable Long inspectionTypeId);

	@GetMapping(RestApiUrlConstants.GET_ALL_CARTONS_BY_LOAD_NUMBER)
	@ResponseBody
	ServiceResponse<Collection<CartonDetails>> getCartonDetailsByLoadNumber(@PathVariable String loadNumber);

	@GetMapping(RestApiUrlConstants.GET_CARTON_DETAILS_BY_LOAD_NUMBER)
	@ResponseBody
	ServiceResponse<List<JSONObject>> getCartonByLoadNumberWithStatus(
			@NotNull @PathVariable("loadNumber") String loadNumber, @PathVariable Long inspectionTypeId,
			@PathVariable String locNbr);

	@GetMapping(RestApiUrlConstants.GET_CARTON_DETAILS_BY_SKID_ID)
	@ResponseBody
	ServiceResponse<List<CartonDetails>> getCartonsBySkidId(@NotNull @PathVariable Long skidId);
	
	@GetMapping(RestApiUrlConstants.GET_CARTON_BY_CARTON_ID_FOR_SKID_LEVEL)
	@ResponseBody
	ServiceResponse<CartonDetails> getCartonDetailsByCartonIdForSkidLevel(@PathVariable String cartonId,
			@PathVariable String loadNumber, @PathVariable Long inspectionTypeId,@PathVariable Long skidId);
	
	@GetMapping(RestApiUrlConstants.GET_ALL_WEIGHT_MEASUREMENTS_TYPES)
	@ResponseBody
	ServiceResponse<Collection<WeightMeasurement>> getAllWeightMeasurements();

}

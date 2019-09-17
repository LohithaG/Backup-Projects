package com.mss.solar.dashboard.svcs;

import java.util.Collection;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mss.solar.dashboard.common.RestApiUrlConstants;
import com.mss.solar.dashboard.domain.FuelStation;
import com.mss.solar.dashboard.domain.Vendor;
import com.mss.solar.dashboard.model.ServiceResponse;

@RequestMapping(value = "/api/fuelstation")
public interface FuelStationsService {

	final String MODULE_NAME = "FuelStationService";
	
	@PostMapping(RestApiUrlConstants.ADD_FUELSTATION)
	@ResponseBody
	ServiceResponse<FuelStation> addFuelStation(@Valid @RequestBody FuelStation fuelstation);
	
	@PutMapping(RestApiUrlConstants.UPDATE_FUELSTATION)
	@ResponseBody
	ServiceResponse<FuelStation> updateFuelstation(@Valid @RequestBody FuelStation fuelstation);

	@GetMapping(RestApiUrlConstants.GET_ALL_FUELSTATIONS)
	@ResponseBody
	ServiceResponse<Collection<FuelStation>> getAll();
	
	@GetMapping(RestApiUrlConstants.GET_FUELSTATION_BY_ID)
	@ResponseBody
	ServiceResponse<FuelStation> getFuelStationById(@NotNull @PathVariable("id") long id);

	@DeleteMapping(RestApiUrlConstants.DELETE_FUELSTATION)
	@ResponseBody
	ServiceResponse<String> deleteFuelStation(@NotNull @PathVariable("id") long id);

	

	

}

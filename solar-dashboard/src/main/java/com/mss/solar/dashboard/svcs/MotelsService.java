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
import com.mss.solar.dashboard.domain.Motels;
import com.mss.solar.dashboard.model.ServiceResponse;

@RequestMapping(value = "/api/motels")
public interface MotelsService {
	final String MODULE_NAME = "MotelsService";

	@PostMapping(RestApiUrlConstants.ADD_MOTEL)
	@ResponseBody
	ServiceResponse<Motels> addMotel(@Valid @RequestBody Motels motel);

	@PutMapping(RestApiUrlConstants.UPDATE_MOTEL)
	@ResponseBody
	ServiceResponse<Motels> updateMotel(@Valid @RequestBody Motels motel);

	@GetMapping(RestApiUrlConstants.GET_ALL_MOTELS)
	@ResponseBody
	ServiceResponse<Collection<Motels>> getAllMotels();

	@GetMapping(RestApiUrlConstants.GET_MOTEL_BY_ID)
	@ResponseBody
	ServiceResponse<Motels> getMotelById(@NotNull @PathVariable long id);

	@DeleteMapping(RestApiUrlConstants.DELETE_MOTEL)
	@ResponseBody
	ServiceResponse<String> deleteMotel(@NotNull @PathVariable long id);
	
	@GetMapping(RestApiUrlConstants.GET_FOOSCOURTS_FUELSTATIONS_MOTESLS_BY_FILTER)
	@ResponseBody
	ServiceResponse<JSONObject> getFoodCourtsFuelStationsAndMotelsBasedOnFilters(@NotNull @PathVariable String loadNumber, @NotNull @PathVariable Long id);
	
}

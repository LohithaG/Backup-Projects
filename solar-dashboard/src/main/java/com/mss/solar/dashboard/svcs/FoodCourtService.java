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
import com.mss.solar.dashboard.domain.FoodCourt;
import com.mss.solar.dashboard.model.ServiceResponse;

@RequestMapping(value = "/api/foodcourt")
public interface FoodCourtService {

	final String MODULE_NAME = "FoodCourtService";

	@PostMapping(RestApiUrlConstants.ADD_FOODCOURT)
	@ResponseBody
	ServiceResponse<FoodCourt> addFoodCourt(@Valid @RequestBody FoodCourt foodcourt);

	@PutMapping(RestApiUrlConstants.UPDATE_FOODCOURT)
	@ResponseBody
	ServiceResponse<FoodCourt> updateFoodCourt(@Valid @RequestBody FoodCourt foodcourt);

	@GetMapping(RestApiUrlConstants.GET_ALL_FOODCOURT)
	@ResponseBody
	ServiceResponse<Collection<FoodCourt>> getAll();

	@GetMapping(RestApiUrlConstants.GET_FOODCOURT_BY_ID)
	@ResponseBody
	ServiceResponse<FoodCourt> getFoodCourtById(@NotNull @PathVariable("id") long id);

	@DeleteMapping(RestApiUrlConstants.DELETE_FOODCOURT)
	@ResponseBody
	ServiceResponse<String> deleteFoodCourt(@NotNull @PathVariable("id") long id);

}

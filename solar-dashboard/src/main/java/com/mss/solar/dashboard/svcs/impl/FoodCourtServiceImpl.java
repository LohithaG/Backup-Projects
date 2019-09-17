package com.mss.solar.dashboard.svcs.impl;

import java.util.Collection;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.mss.solar.dashboard.common.EnumTypeForErrorCodes;
import com.mss.solar.dashboard.common.Utils;
import com.mss.solar.dashboard.domain.FoodCourt;
import com.mss.solar.dashboard.model.ServiceResponse;
import com.mss.solar.dashboard.repos.FoodCourtRepository;
import com.mss.solar.dashboard.svcs.FoodCourtService;

@RestController
@Validated
public class FoodCourtServiceImpl implements FoodCourtService {

	private static final Logger log = Logger.getLogger(FoodCourtServiceImpl.class);

	@Autowired
	private FoodCourtRepository foodCourtRepo;

	@Autowired
	private Utils utils;

	/**
	 * Adding foodcourt Service Implementation
	 * 
	 * @return ServiceResponse<FoodCourt>
	 */
	@Override
	public ServiceResponse<FoodCourt> addFoodCourt(@Valid @RequestBody FoodCourt foodcourt) {
		log.debug("Adding foodcourt details");
		ServiceResponse<FoodCourt> response = new ServiceResponse<>();
		try {
			FoodCourt foodCourtExists = foodCourtRepo.findByNameAndAddress(foodcourt.getName(), foodcourt.getAddress());
			if (foodCourtExists == null) {
				FoodCourt foodCourtDetails = foodCourtRepo.save(foodcourt);
				response.setData(foodCourtDetails);
			} else {
				response.setError(EnumTypeForErrorCodes.SCUS901.name(), EnumTypeForErrorCodes.SCUS901.errorMsg());
			}

		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS907.name(), EnumTypeForErrorCodes.SCUS907.errorMsg());
			log.error(utils.toJson(response.getError()), exception);
		}
		return response;
	}

	/**
	 * updating foodcourt Service Implementation
	 * 
	 * @return ServiceResponse<FoodCourt>
	 */
	@Override
	public ServiceResponse<FoodCourt> updateFoodCourt(@Valid @RequestBody FoodCourt foodcourt) {
		log.debug("Updating foodcourt details");
		ServiceResponse<FoodCourt> response = new ServiceResponse<>();
		try {
			FoodCourt foodCourtDetails = foodCourtRepo.findById(foodcourt.getId());

			FoodCourt foodCourtExists = foodCourtRepo.findByNameAndAddress(foodcourt.getName(), foodcourt.getAddress());
			if (foodCourtDetails == null) {
				response.setError(EnumTypeForErrorCodes.SCUS902.name(), EnumTypeForErrorCodes.SCUS902.errorMsg());
			} else {
				if (foodCourtExists == null || foodCourtExists.getId() == foodcourt.getId()) {
					foodCourtDetails.setAddress(foodcourt.getAddress());
					foodCourtDetails.setLatitude(foodcourt.getLatitude());
					foodCourtDetails.setLongitude(foodcourt.getLongitude());
					foodCourtDetails.setName(foodcourt.getName());
					FoodCourt saveDetails = foodCourtRepo.save(foodCourtDetails);
					response.setData(saveDetails);
				} else {
					response.setError(EnumTypeForErrorCodes.SCUS908.name(), EnumTypeForErrorCodes.SCUS908.errorMsg());
				}
			}

		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS903.name(), EnumTypeForErrorCodes.SCUS903.errorMsg());
			log.error(utils.toJson(response.getError()), exception);
		}
		return response;
	}

	/**
	 * get all foodcourts Service Implementation
	 * 
	 * @return ServiceResponse<Collection<FoodCourt>>
	 */
	@Override
	public ServiceResponse<Collection<FoodCourt>> getAll() {

		log.debug("Getting all foodcourts details");
		ServiceResponse<Collection<FoodCourt>> response = new ServiceResponse<>();
		try {
			Collection<FoodCourt> foodCourtDetails = foodCourtRepo.findAll();
			response.setData(foodCourtDetails);
		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS904.name(), EnumTypeForErrorCodes.SCUS904.errorMsg());
			log.error(utils.toJson(response.getError()), exception);
		}
		return response;
	}

	/**
	 * getting foodcourt by id Service Implementation
	 * 
	 * @return ServiceResponse<FoodCourt>
	 */
	@Override
	public ServiceResponse<FoodCourt> getFoodCourtById(@NotNull @PathVariable("id") long id) {

		log.debug("Getting food court by id");
		ServiceResponse<FoodCourt> response = new ServiceResponse<>();
		try {
			FoodCourt foodCourtDetails = foodCourtRepo.findById(id);
			response.setData(foodCourtDetails);
		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS905.name(), EnumTypeForErrorCodes.SCUS905.errorMsg());
			log.error(utils.toJson(response.getError()), exception);
		}
		return response;
	}

	/**
	 * Deleting foodcourt by id Service Implementation
	 * 
	 * @return ServiceResponse<String>
	 */
	@Override
	public ServiceResponse<String> deleteFoodCourt(@NotNull @PathVariable("id") long id) {

		log.debug("Deleting foodcourt details by id ");
		ServiceResponse<String> response = new ServiceResponse<>();
		try {
			FoodCourt foodCourtDetails = foodCourtRepo.findById(id);
			foodCourtRepo.delete(foodCourtDetails);
			response.setData("foodCourt deleted successfully");
		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS906.name(), EnumTypeForErrorCodes.SCUS906.errorMsg());
			log.error(utils.toJson(response.getError()), exception);
		}
		return response;
	}
}

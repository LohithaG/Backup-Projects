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
import com.mss.solar.dashboard.domain.FuelStation;
import com.mss.solar.dashboard.model.ServiceResponse;
import com.mss.solar.dashboard.repos.FuelStationRepository;
import com.mss.solar.dashboard.svcs.FuelStationsService;

@RestController
@Validated
public class FuelStationsServiceImpl implements FuelStationsService {

	private static final Logger log = Logger.getLogger(FuelStationsServiceImpl.class);

	@Autowired
	private FuelStationRepository fuelStationRepo;

	@Autowired
	private Utils utils;

	/**
	 * Adding fuelstations Service Implementation
	 * 
	 * @return ServiceResponse<FuelAndFoodCourt>
	 */
	@Override
	public ServiceResponse<FuelStation> addFuelStation(@Valid @RequestBody FuelStation fuelstation) {
		log.debug("Adding fuelstation details");
		ServiceResponse<FuelStation> response = new ServiceResponse<>();
		try {
			FuelStation fuelStationExists = fuelStationRepo.findByNameAndAddress(fuelstation.getName(),
					fuelstation.getAddress());
			if (fuelStationExists == null) {
				FuelStation fuelStationDetails = fuelStationRepo.save(fuelstation);
				response.setData(fuelStationDetails);
			} else {
				response.setError(EnumTypeForErrorCodes.SCUS807.name(), EnumTypeForErrorCodes.SCUS807.errorMsg());
			}

		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS801.name(), EnumTypeForErrorCodes.SCUS801.errorMsg());
			log.error(utils.toJson(response.getError()), exception);
		}
		return response;
	}

	/**
	 * updating fuelstations Service Implementation
	 * 
	 * @return ServiceResponse<FuelStation>
	 */
	@Override
	public ServiceResponse<FuelStation> updateFuelstation(@Valid @RequestBody FuelStation fuelstation) {
		log.debug("Updating fuel station details");
		ServiceResponse<FuelStation> response = new ServiceResponse<>();
		try {
			FuelStation fuelStationDetails = fuelStationRepo.findById(fuelstation.getId());
			FuelStation fuelStationExists = fuelStationRepo.findByNameAndAddress(fuelstation.getName(),
					fuelstation.getAddress());
			if (fuelStationDetails == null) {
				response.setError(EnumTypeForErrorCodes.SCUS802.name(), EnumTypeForErrorCodes.SCUS802.errorMsg());
			} else {
				if (fuelStationExists == null || fuelStationExists.getId() == fuelstation.getId()) {
					fuelStationDetails.setAddress(fuelstation.getAddress());

					fuelStationDetails.setLatitude(fuelstation.getLatitude());

					fuelStationDetails.setLongitude(fuelstation.getLongitude());

					fuelStationDetails.setName(fuelstation.getName());

					FuelStation saveDetails = fuelStationRepo.save(fuelStationDetails);

					response.setData(saveDetails);
				} else {
					response.setError(EnumTypeForErrorCodes.SCUS808.name(), EnumTypeForErrorCodes.SCUS808.errorMsg());
				}

			}

		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS803.name(), EnumTypeForErrorCodes.SCUS803.errorMsg());
			log.error(utils.toJson(response.getError()), exception);
		}
		return response;
	}

	/**
	 * get all fuelstations Service Implementation
	 * 
	 * @return ServiceResponse<Collection<FuelStation>>
	 */
	@Override
	public ServiceResponse<Collection<FuelStation>> getAll() {

		log.debug("Getting all fuelstation details");
		ServiceResponse<Collection<FuelStation>> response = new ServiceResponse<>();
		try {
			Collection<FuelStation> fuelstationDetails = fuelStationRepo.findAll();
			response.setData(fuelstationDetails);
		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS804.name(), EnumTypeForErrorCodes.SCUS804.errorMsg());
			log.error(utils.toJson(response.getError()), exception);
		}
		return response;
	}

	/**
	 * getting fuelStations by id Service Implementation
	 * 
	 * @return ServiceResponse<FuelStation>
	 */
	@Override
	public ServiceResponse<FuelStation> getFuelStationById(@NotNull @PathVariable("id") long id) {

		log.debug("Getting  fuelstation details by id");
		ServiceResponse<FuelStation> response = new ServiceResponse<>();
		try {
			FuelStation fuelStationDetails = fuelStationRepo.findById(id);
			response.setData(fuelStationDetails);
		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS805.name(), EnumTypeForErrorCodes.SCUS805.errorMsg());
			log.error(utils.toJson(response.getError()), exception);
		}
		return response;
	}

	/**
	 * Deleting fuelStations by id Service Implementation
	 * 
	 * @return ServiceResponse<String>
	 */
	@Override
	public ServiceResponse<String> deleteFuelStation(@NotNull @PathVariable("id") long id) {

		log.debug("Deleting fuelstations details by id ");
		ServiceResponse<String> response = new ServiceResponse<>();
		try {
			FuelStation fuelStationDetails = fuelStationRepo.findById(id);
			fuelStationRepo.delete(fuelStationDetails);
			response.setData("fuelStation deleted successfully");
		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS806.name(), EnumTypeForErrorCodes.SCUS806.errorMsg());
			log.error(utils.toJson(response.getError()), exception);
		}
		return response;
	}
}

package com.mss.solar.dashboard.svcs.impl;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import javax.validation.constraints.NotNull;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.mss.solar.dashboard.common.EnumTypeForErrorCodes;
import com.mss.solar.dashboard.common.Utils;
import com.mss.solar.dashboard.domain.DistanceTime;
import com.mss.solar.dashboard.domain.Driver;
import com.mss.solar.dashboard.domain.FoodCourt;
import com.mss.solar.dashboard.domain.FuelStation;
import com.mss.solar.dashboard.domain.LoadDetails;
import com.mss.solar.dashboard.domain.Motels;
import com.mss.solar.dashboard.model.ServiceResponse;
import com.mss.solar.dashboard.repos.FoodCourtRepository;
import com.mss.solar.dashboard.repos.FuelStationRepository;
import com.mss.solar.dashboard.repos.LoadDetailsRepository;
import com.mss.solar.dashboard.repos.MotelsRepository;
import com.mss.solar.dashboard.svcs.LocationService;
import com.mss.solar.dashboard.svcs.MotelsService;

@RestController
public class MotelsServiceImpl implements MotelsService {
	private static final Logger log = Logger.getLogger(FoodCourtServiceImpl.class);

	@Autowired
	private MotelsRepository motelsRepo;

	@Autowired
	private LoadDetailsRepository loadDetailsRepo;

	@Autowired
	private FoodCourtRepository foodCourtsRepo;

	@Autowired
	private FuelStationRepository fuelStationsRepo;

	@Autowired
	private LocationService locationsService;

	@Autowired
	private Utils utils;

	@Value("${googleApiKey}")
	private String googleApiKey;

	/**
	 * addMotel Service Implementation
	 * 
	 * @RequestBody motel
	 * @return ServiceResponse<Motels>
	 */
	@Override
	public ServiceResponse<Motels> addMotel(@RequestBody Motels motel) {
		ServiceResponse<Motels> response = new ServiceResponse<>();
		try {
			Motels motelExists = motelsRepo.findByNameAndAddress(motel.getName(), motel.getAddress());

			if (motelExists == null) {
				Motels motelDetails = motelsRepo.save(motel);
				response.setData(motelDetails);
			} else {
				response.setError(EnumTypeForErrorCodes.SCUS957.name(), EnumTypeForErrorCodes.SCUS957.errorMsg());
			}

		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS951.name(), EnumTypeForErrorCodes.SCUS951.errorMsg());
			log.error(utils.toJson(response.getError()), exception);
		}
		return response;
	}

	/**
	 * updateMotel Service Implementation
	 * 
	 * @RequestBody motel
	 * @return ServiceResponse<Motels>
	 */
	@Override
	public ServiceResponse<Motels> updateMotel(@RequestBody Motels motel) {
		ServiceResponse<Motels> response = new ServiceResponse<>();
		try {
			Motels motelsDetails = motelsRepo.findById(motel.getId());
			Motels motelExists = motelsRepo.findByNameAndAddress(motel.getName(), motel.getAddress());
			if (motelsDetails == null) {
				response.setError(EnumTypeForErrorCodes.SCUS952.name(), EnumTypeForErrorCodes.SCUS952.errorMsg());
			} else {
				if (motelExists == null || motelExists.getId() == motel.getId()) {
					motelsDetails.setAddress(motel.getAddress());

					motelsDetails.setLatitude(motel.getLatitude());

					motelsDetails.setLongitude(motel.getLongitude());

					motelsDetails.setName(motel.getName());

					Motels saveDetails = motelsRepo.save(motelsDetails);

					response.setData(saveDetails);
				} else {
					response.setError(EnumTypeForErrorCodes.SCUS958.name(), EnumTypeForErrorCodes.SCUS958.errorMsg());
				}

			}

		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS903.name(), EnumTypeForErrorCodes.SCUS903.errorMsg());
			log.error(utils.toJson(response.getError()), exception);
		}
		return response;
	}

	/**
	 * getAllMotels Service Implementation
	 * 
	 * @return ServiceResponse<Collection<Motels>>
	 */
	@Override
	public ServiceResponse<Collection<Motels>> getAllMotels() {
		log.debug("Getting all motel details");
		ServiceResponse<Collection<Motels>> response = new ServiceResponse<>();
		try {
			Collection<Motels> motelsDetails = motelsRepo.findAll();
			response.setData(motelsDetails);
		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS954.name(), EnumTypeForErrorCodes.SCUS954.errorMsg());
			log.error(utils.toJson(response.getError()), exception);
		}
		return response;
	}

	/**
	 * getMotelById Service Implementation
	 * 
	 * @Param id
	 * @return ServiceResponse<Motels>
	 */

	@Override
	public ServiceResponse<Motels> getMotelById(@PathVariable long id) {
		log.debug("Getting  motel details by id");
		ServiceResponse<Motels> response = new ServiceResponse<>();
		try {
			Motels motelsDetails = motelsRepo.findById(id);
			if (motelsDetails != null) {
				response.setData(motelsDetails);
			} else {
				response.setError(EnumTypeForErrorCodes.SCUS952.name(), EnumTypeForErrorCodes.SCUS952.errorMsg());
			}
		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS955.name(), EnumTypeForErrorCodes.SCUS955.errorMsg());
			log.error(utils.toJson(response.getError()), exception);
		}
		return response;
	}

	/**
	 * deleteMotel Service Implementation
	 * 
	 * @Param id
	 * @return ServiceResponse<String>
	 */

	@Override
	public ServiceResponse<String> deleteMotel(@PathVariable long id) {
		log.debug("Deleting motel details by id ");
		ServiceResponse<String> response = new ServiceResponse<>();
		try {
			Motels motelsDetails = motelsRepo.findById(id);
			if (motelsDetails != null) {
				motelsRepo.delete(motelsDetails);
				response.setData("Motel deleted successfully");
			} else {
				response.setError(EnumTypeForErrorCodes.SCUS952.name(), EnumTypeForErrorCodes.SCUS952.errorMsg());
			}

		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS956.name(), EnumTypeForErrorCodes.SCUS956.errorMsg());
			log.error(utils.toJson(response.getError()), exception);
		}
		return response;
	}

	/**
	 * getFoodCourtsFuelStationsAndMotelsBasedOnFilters Service Implementation
	 * 
	 * @Param id,loadNumber
	 * @return ServiceResponse<JSONObject>
	 */
	@Override
	public ServiceResponse<org.json.simple.JSONObject> getFoodCourtsFuelStationsAndMotelsBasedOnFilters(
			@NotNull @PathVariable String loadNumber, @NotNull @PathVariable Long id) {

		log.debug("Getting  FoodCourts FuelStations And Motels Based On Filters");
		ServiceResponse<org.json.simple.JSONObject> response = new ServiceResponse<>();
		try {
			org.json.simple.JSONObject obj = new org.json.simple.JSONObject();
			LoadDetails loadDetails = loadDetailsRepo.findByLoadNumber(loadNumber);
			Driver driver = loadDetails.getDriver();
			Double latitide = driver.getLatitude();
			Double longitude = driver.getLongitude();
			if (id == 0) {
				List<FoodCourt> foodCourtsList = foodCourtsRepo.findAll();
				List<FoodCourt> nearByFoodCourtsList = new ArrayList<>();
				for (FoodCourt foodCourt : foodCourtsList) {
					Double courtLatitide = foodCourt.getLatitude();
					Double courtLongitude = foodCourt.getLongitude();

					ServiceResponse<DistanceTime> distanceTime = locationsService.getDistanceAndTimeInfoBasedOnGoogle(latitide, longitude, courtLatitide,
							courtLongitude);
					if (distanceTime.getData().getDistance() <= 5) {
						nearByFoodCourtsList.add(foodCourt);
					}
				}
				obj.put("nearByStalls", nearByFoodCourtsList);
			} else if (id == 1) {
				List<FuelStation> fuelStationsList = fuelStationsRepo.findAll();
				List<FuelStation> nearByFuelStationsList = new ArrayList<>();
				for (FuelStation fuelStation : fuelStationsList) {
					Double stationLatitide = fuelStation.getLatitude();
					Double stationLongitude = fuelStation.getLongitude();

					ServiceResponse<DistanceTime> distanceTime = locationsService.getDistanceAndTimeInfoBasedOnGoogle(latitide, longitude, stationLatitide,
							stationLongitude);
					if (distanceTime.getData().getDistance() <= 5) {
						nearByFuelStationsList.add(fuelStation);
					}
				}
				obj.put("nearByStalls", nearByFuelStationsList);
			} else {
				List<Motels> motelsList = motelsRepo.findAll();
				List<Motels> nearByMotelsList = new ArrayList<>();
				for (Motels motel : motelsList) {
					Double motelLatitide = motel.getLatitude();
					Double motelLongitude = motel.getLongitude();

					ServiceResponse<DistanceTime> distanceTime = locationsService.getDistanceAndTimeInfoBasedOnGoogle(latitide, longitude, motelLatitide,
							motelLongitude);
					if (distanceTime.getData().getDistance() <= 5) {
						nearByMotelsList.add(motel);
					}
				}
				obj.put("nearByStalls", nearByMotelsList);
			}
			response.setData(obj);
		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS959.name(), EnumTypeForErrorCodes.SCUS959.errorMsg());
			log.error(utils.toJson(response.getError()), exception);
		}
		return response;
	}

}

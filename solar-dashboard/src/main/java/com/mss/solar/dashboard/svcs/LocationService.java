package com.mss.solar.dashboard.svcs;

import java.util.Collection;
import java.util.Map;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;

import org.json.simple.JSONObject;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mss.solar.dashboard.common.RestApiUrlConstants;
import com.mss.solar.dashboard.domain.DistanceTime;
import com.mss.solar.dashboard.domain.Location;
import com.mss.solar.dashboard.domain.LocationType;
import com.mss.solar.dashboard.model.ServiceResponse;
import com.mss.solar.dashboard.model.Weather;

@RequestMapping(value = "/api/locations")
public interface LocationService {

	final String MODULE_NAME = "LocationService";

	@PostMapping(RestApiUrlConstants.ADD_LOCATION)
	@ResponseBody
	ServiceResponse<Location> addLocation(@Valid @RequestBody Location location);

	@PutMapping(RestApiUrlConstants.UPDATE_LOCATION)
	@ResponseBody
	ServiceResponse<Location> updateLocation(@Valid @RequestBody Location location);

	@DeleteMapping(RestApiUrlConstants.DELETE_LOCATION)
	@ResponseBody
	ServiceResponse<String> deleteLocation(@NotNull @PathVariable String locNbr);

	@GetMapping(RestApiUrlConstants.GET_ALL_LOCATIONS)
	@ResponseBody
	ServiceResponse<Collection<Location>> getAllLocations();

	@GetMapping(RestApiUrlConstants.GET_LOCATIONS_BY_LOCNBR)
	@ResponseBody
	ServiceResponse<Location> getLocationsByLocNbr(@NotNull @PathVariable String locNbr);

	@GetMapping(value = RestApiUrlConstants.GET_WEATHER_INFO)
	@ResponseBody
	ServiceResponse<Weather> getWeatherInfo(@PathVariable("latitude") String latitude,
			@PathVariable("longitude") String longitude);

	/*@GetMapping(value = RestApiUrlConstants.GET_DISTANCE_INFO)
	@ResponseBody
	JSONObject getDistanceAndTimeInfo(@PathVariable("sourcelat") double sourcelat,
			@PathVariable("sourcelong") double sourcelong, @PathVariable("destlat") double destlat,
			@PathVariable("destlong") double destlong);*/

	@PostMapping(value = RestApiUrlConstants.NOTIFY_GEOFENCE)
	@ResponseBody
	ServiceResponse<org.json.simple.JSONObject> notifyGeofence(@PathVariable("startLat") double startLat, @PathVariable("startLong") double startLong,
			@PathVariable double geofenceMiles, @PathVariable Long driverId, @RequestBody Map<String, String> dataMap,
			@RequestHeader(value = "Authorization") String authorization);

	@PostMapping(RestApiUrlConstants.NOTIFY_BY_DCMANAGER)
	@ResponseBody
	ServiceResponse<String> sendNotificationByDcManager(@PathVariable("email") Collection<String> email,
			@RequestBody Map<String, String> dataMap);

	@GetMapping(value = RestApiUrlConstants.GET_FOODCOURTS_FUELSTATIONS_IN_BETWEEN_ROUTES)
	@ResponseBody
	ServiceResponse<JSONObject> getFoodcourtsAndFuelStationsInbetweenRoute(@PathVariable("sourcelat") double sourcelat,
			@PathVariable("sourcelong") double sourcelong, @PathVariable("destlat") double destlat,
			@PathVariable("destlong") double destlong);

	@GetMapping(RestApiUrlConstants.GET_ALL_LOCATIONTYPES)
	@ResponseBody
	ServiceResponse<Collection<LocationType>> getAllLocationTypes();

	@GetMapping(RestApiUrlConstants.GET_LOCATIONS_BY_TYPE)
	@ResponseBody
	ServiceResponse<JSONObject> getLocationsByType(@NotNull @PathVariable String pickupType,
			@NotNull @PathVariable String destinationType);

	@GetMapping(RestApiUrlConstants.GET_ALL_DC_LOCATIONS)
	@ResponseBody
	ServiceResponse<Collection<Location>> getAllDcLocations();
	
	@GetMapping(RestApiUrlConstants.GET_LOAD_DETAILS_BY_LOAD_NUMBER)
	@ResponseBody
	ServiceResponse<JSONObject> getLiveTrackingByLoadNumber(@PathVariable String loadNumber);
	
	@GetMapping(value = RestApiUrlConstants.GET_DISTANCE_TIME_INFO)
	@ResponseBody
	ServiceResponse<DistanceTime> getDistanceAndTimeInfoBasedOnGoogle(@PathVariable("originLat") double originLat,
			@PathVariable("originLong") double originLong, @PathVariable("destLat") double destLat,
			@PathVariable("destLong") double destLong);
}

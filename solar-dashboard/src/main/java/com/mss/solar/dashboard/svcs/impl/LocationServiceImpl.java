package com.mss.solar.dashboard.svcs.impl;

import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Calendar;
import java.util.Collection;
import java.util.Date;
import java.util.HashSet;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.TimeUnit;
import java.util.stream.Collectors;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;

import org.apache.log4j.Logger;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.cloud.client.ServiceInstance;
import org.springframework.cloud.client.discovery.DiscoveryClient;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.annotation.Async;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestTemplate;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.mss.solar.dashboard.common.EnumTypeForErrorCodes;
import com.mss.solar.dashboard.common.Utils;
import com.mss.solar.dashboard.domain.CalendarEvent;
import com.mss.solar.dashboard.domain.DistanceCalculation;
import com.mss.solar.dashboard.domain.DistanceTime;
import com.mss.solar.dashboard.domain.Driver;
import com.mss.solar.dashboard.domain.FoodCourt;
import com.mss.solar.dashboard.domain.FuelStation;
import com.mss.solar.dashboard.domain.LoadDetails;
import com.mss.solar.dashboard.domain.Location;
import com.mss.solar.dashboard.domain.LocationType;
import com.mss.solar.dashboard.domain.Role;
import com.mss.solar.dashboard.domain.SkidDrops;
import com.mss.solar.dashboard.domain.User;
import com.mss.solar.dashboard.domain.Vendor;
import com.mss.solar.dashboard.model.CalendarPriorityType;
import com.mss.solar.dashboard.model.ServiceResponse;
import com.mss.solar.dashboard.model.Weather;
import com.mss.solar.dashboard.repos.DriverRepository;
import com.mss.solar.dashboard.repos.FoodCourtRepository;
import com.mss.solar.dashboard.repos.FuelStationRepository;
import com.mss.solar.dashboard.repos.LoadDetailsRepository;
import com.mss.solar.dashboard.repos.LocationRepository;
import com.mss.solar.dashboard.repos.LocationTypeRepository;
import com.mss.solar.dashboard.repos.SkidDropsRepository;
import com.mss.solar.dashboard.repos.UserRepository;
import com.mss.solar.dashboard.repos.VendorRepository;
import com.mss.solar.dashboard.svcs.LocationService;

@RestController
@Validated
public class LocationServiceImpl implements LocationService {

	private static final Logger log = Logger.getLogger(LocationServiceImpl.class);

	@Autowired
	private LocationRepository locationRepo;

	@Autowired
	private LoadDetailsRepository loadDetailsRepo;

	@Autowired
	private UserRepository userRepo;

	@Autowired
	private VendorRepository vendorRepo;

	@Autowired
	private DiscoveryClient discoveryClient;

	@Autowired
	private FoodCourtRepository foodCourtRepo;

	@Autowired
	private FuelStationRepository fuelStationRepo;

	@Autowired
	private LocationTypeRepository locationTypeRepo;

	@Autowired
	private SkidDropsRepository skidDropsRepo;

	@Autowired
	private DriverRepository driverRepo;

	@Autowired
	private Utils utils;

	@Value("${notifyGeofenceEventId}")
	public String notifyGeofenceEventId;

	@Value("${notifyGeofenceEventIdForDriver}")
	public String notifyGeofenceEventIdForDriver;

	@Value("${googleApiKey}")
	private String googleApiKey;

	private static final int EARTH_RADIUS = 3959; // in miles

	/**
	 * addLocation service implementation
	 * 
	 * @param location
	 * @return ServiceResponse<Location>
	 */
	@Override
	public ServiceResponse<Location> addLocation(@Valid @RequestBody Location location) {
		log.debug("Adding  new location");

		ServiceResponse<Location> response = new ServiceResponse<>();
		try {
			Location locationExists = locationRepo.findByLocNbr(location.getLocNbr());
			Location addressExists = locationRepo.findByLatitudeAndLongitude(location.getLatitude(),
					location.getLongitude());
			Vendor vendorEmailExists = vendorRepo.findByEmail(location.getEmail());
			Vendor vendoPhoneNumberExists = vendorRepo.findByPhoneNumber(location.getPhoneNumber());
			User emailExists = userRepo.findByEmail(location.getEmail());
			User phoneExists = userRepo.findByPhone(location.getPhoneNumber());

			if (locationExists != null) {
				response.setError(EnumTypeForErrorCodes.SCUS306.name(), EnumTypeForErrorCodes.SCUS306.errorMsg());
			} else if (addressExists != null) {
				response.setError(EnumTypeForErrorCodes.SCUS312.name(), EnumTypeForErrorCodes.SCUS312.errorMsg());
			} else {
				if (emailExists != null || vendorEmailExists != null) {
					response.setError(EnumTypeForErrorCodes.SCUS310.name(), EnumTypeForErrorCodes.SCUS310.errorMsg());
				} else if (phoneExists != null || vendoPhoneNumberExists != null) {
					response.setError(EnumTypeForErrorCodes.SCUS311.name(), EnumTypeForErrorCodes.SCUS311.errorMsg());
				} else {

					List<ServiceInstance> instances = discoveryClient.getInstances("solar-core");

					String baseURL = instances.get(0).getUri().toString();

					baseURL = baseURL + "api/users/addUser/";

					RestTemplate restTemplate = new RestTemplate();
					User user = new User();

					user.setEmail(location.getEmail());
					user.setActive(true);
					user.setName(location.getContactPerson());
					user.setPhone(location.getPhoneNumber());

					Role role = new Role();
					role.setName("DCMANAGER");
					user.setRoles(new HashSet<Role>(Arrays.asList(role)));

					HttpEntity<User> reqEntity = new HttpEntity<>(user);

					ResponseEntity<String> result = restTemplate.exchange(baseURL, HttpMethod.POST, reqEntity,
							String.class);

					Object obj = result.getBody();

					String stringResult = obj.toString();

					ObjectMapper mapper = new ObjectMapper();

					ServiceResponse userDetails = mapper.readValue(stringResult, ServiceResponse.class);

					User userObj = mapper.convertValue(userDetails.getData(), User.class);

					location.setUser(userObj);

					Location newLocation = locationRepo.save(location);
					response.setData(newLocation);
				}
			}

		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS301.name(), EnumTypeForErrorCodes.SCUS301.errorMsg());
			log.error(utils.toJson(response.getError()), exception);
		}

		return response;
	}

	/**
	 * updateLocation service implementation
	 * 
	 * @param location
	 * @return ServiceResponse<Location>
	 */
	@Override
	public ServiceResponse<Location> updateLocation(@Valid @RequestBody Location location) {

		ServiceResponse<Location> response = new ServiceResponse<>();
		try {
			Location locationExists = locationRepo.findByLocNbr(location.getLocNbr());
			User phoneExists = userRepo.findByPhone(location.getPhoneNumber());
			Vendor vendoPhoneNumberExists = vendorRepo.findByPhoneNumber(location.getPhoneNumber());

			if (locationExists == null) {
				response.setError(EnumTypeForErrorCodes.SCUS302.name(), EnumTypeForErrorCodes.SCUS302.errorMsg());
			} else {
				Collection<LoadDetails> origin = loadDetailsRepo.findByOriginLocNbr(locationExists);
				Collection<SkidDrops> destination = skidDropsRepo.findByDestLocNbr(locationExists);

				if ((origin.isEmpty() && destination.isEmpty())
						&& ((location.getLocNbr()).equals(locationExists.getLocNbr()))) {
					if ((phoneExists == null || phoneExists.getId() == locationExists.getUser().getId())
							&& vendoPhoneNumberExists == null) {

						locationExists.setContactPerson(location.getContactPerson());
						locationExists.setLocAddrName(location.getLocAddrName());
						locationExists.setAddress(location.getAddress());
						locationExists.setCity(location.getCity());
						locationExists.setCountry(location.getCountry());
						locationExists.setState(location.getState());
						locationExists.setZipCode(location.getZipCode());
						locationExists.setEmail(location.getEmail());
						locationExists.setPhoneNumber(location.getPhoneNumber());
						locationExists.setLatitude(location.getLatitude());
						locationExists.setLongitude(location.getLongitude());
						locationExists.setCreatedTS(location.getCreatedTS());
						locationExists.setCreatedUser(location.getCreatedUser());
						locationExists.setLastUpdatedTS(location.getLastUpdatedTS());
						locationExists.setLastUpdatedUser(location.getLastUpdatedUser());
						locationExists.setTimings(location.getTimings());
						locationExists.setHolidays(location.getHolidays());
						locationExists.setLocationType(location.getLocationType());

						List<ServiceInstance> instances = discoveryClient.getInstances("solar-core");

						String baseURL = instances.get(0).getUri().toString();

						baseURL = baseURL + "api/users/updateUser/";

						RestTemplate restTemplate = new RestTemplate();
						User user = new User();
						user.setEmail(location.getEmail());
						user.setActive(true);
						user.setName(location.getContactPerson());
						user.setPhone(location.getPhoneNumber());

						Role role = new Role();
						role.setName("DCMANAGER");
						user.setRoles(new HashSet<Role>(Arrays.asList(role)));

						HttpEntity<User> reqEntity = new HttpEntity<>(user);

						ResponseEntity result = restTemplate.exchange(baseURL, HttpMethod.PUT, reqEntity, String.class);

						Object obj = result.getBody();

						String stringResult = obj.toString();

						ObjectMapper mapper = new ObjectMapper();

						ServiceResponse userDetails = mapper.readValue(stringResult, ServiceResponse.class);

						User userObj = mapper.convertValue(userDetails.getData(), User.class);

						User userResult = new User();
						userResult.setEmail(userObj.getEmail());
						userResult.setId(userObj.getId());
						userResult.setName(userObj.getName());
						userResult.setPhone(userObj.getPhone());

						Role updateRole = new Role();
						updateRole.setName("DCMANAGER");
						userResult.setRoles(new HashSet<Role>(Arrays.asList(updateRole)));

						locationExists.setUser(userResult);

						Location updateLocation = locationRepo.save(locationExists);
						response.setData(updateLocation);

					} else {
						response.setError(EnumTypeForErrorCodes.SCUS311.name(),
								EnumTypeForErrorCodes.SCUS311.errorMsg());
					}
				} else {

					response.setError(EnumTypeForErrorCodes.SCUS313.name(), EnumTypeForErrorCodes.SCUS313.errorMsg());
				}
			}
		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS303.name(), EnumTypeForErrorCodes.SCUS303.errorMsg());
			log.error(utils.toJson(response.getError()), exception);
		}
		return response;
	}

	/**
	 * deleteLocation service implementation
	 * 
	 * @param locNbr
	 * @return ServiceResponse<Location>
	 */
	@Override
	public ServiceResponse<String> deleteLocation(@NotNull @PathVariable String locNbr) {
		ServiceResponse<String> response = new ServiceResponse<>();
		try {

			Location deleteLocation = locationRepo.findByLocNbr(locNbr);
			Long userId = deleteLocation.getUser().getId();
			Collection<LoadDetails> originLocation = loadDetailsRepo.findByOriginLocNbr(deleteLocation);
			Collection<SkidDrops> destinationLocation = skidDropsRepo.findByDestLocNbr(deleteLocation);
			if (originLocation.isEmpty() && destinationLocation.isEmpty()) {

				locationRepo.delete(deleteLocation);

				List<ServiceInstance> instances = discoveryClient.getInstances("solar-core");

				String baseURL = instances.get(0).getUri().toString();
				baseURL = baseURL + "api/users/deleteUser/" + userId;

				RestTemplate restTemplate = new RestTemplate();

				restTemplate.exchange(baseURL, HttpMethod.GET, null, String.class);
				response.setData("Location deleted successfully");
			} else {
				response.setError(EnumTypeForErrorCodes.SCUS309.name(), EnumTypeForErrorCodes.SCUS309.errorMsg());
			}

		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS304.name(), EnumTypeForErrorCodes.SCUS304.errorMsg());
			log.error(utils.toJson(response.getError()), exception);
		}
		return response;
	}

	/**
	 * getAllLocations service implementation
	 * 
	 * @param location
	 * @return ServiceResponse<Collection<Location>>
	 */
	@Override
	public ServiceResponse<Collection<Location>> getAllLocations() {
		ServiceResponse<Collection<Location>> response = new ServiceResponse<>();
		try {
			List<Location> locations = locationRepo.findAll();
			response.setData(locations);

		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS305.name(), EnumTypeForErrorCodes.SCUS305.errorMsg());
			log.error(utils.toJson(response.getError()), exception);
		}
		return response;
	}

	/**
	 * getLocationsById service implementation
	 * 
	 * @param locNbr
	 * @return ServiceResponse<Location>
	 */
	@Override
	public ServiceResponse<Location> getLocationsByLocNbr(@NotNull @PathVariable String locNbr) {

		ServiceResponse<Location> response = new ServiceResponse<>();
		try {

			Location location = locationRepo.findByLocNbr(locNbr);
			response.setData(location);

		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS305.name(), EnumTypeForErrorCodes.SCUS305.errorMsg());
			log.error(utils.toJson(response.getError()), exception);
		}
		return response;
	}

	/**
	 * getDistanceAndTimeInfo service implementation
	 * 
	 * @param sourcelat
	 * @param sourcelong
	 * @param destlat
	 * @param destlong
	 * @return String
	 */
	/*@Override
	public org.json.simple.JSONObject getDistanceAndTimeInfo(@PathVariable("sourcelat") double sourcelat,
			@PathVariable("sourcelong") double sourcelong, @PathVariable("destlat") double destlat,
			@PathVariable("destlong") double destlong) {

		ResponseEntity<String> response = null;
		String googleresp = null;
		org.json.simple.JSONObject obj = null;
		try {

			List<ServiceInstance> instances = discoveryClient.getInstances("solar-maps");
			String baseURL = instances.get(0).getUri().toString();

			HttpHeaders headers = new HttpHeaders();

			HttpEntity<String> request = new HttpEntity<>(headers);

			RestTemplate restTemplate = new RestTemplate();

			String url = baseURL + "api/maps/distanceTime/" + sourcelat + "/" + sourcelong + "/" + destlat + "/"
					+ destlong + "/";
			response = restTemplate.exchange(url, HttpMethod.GET, request, String.class);

			googleresp = response.getBody();

			Double distance1 = distance(sourcelat, sourcelong, destlat, destlong);
			obj = new org.json.simple.JSONObject();
			obj.put("googleData", googleresp);
			obj.put("distance", distance1);

		} catch (HttpClientErrorException e) {
			log.error(e.getStatusCode().toString());
		}

		return obj;
	}*/

	/**
	 * calculating distance between two locations based on given latitude and
	 * longitude
	 * 
	 * @param startLat
	 * @param startLong
	 * @param endLat
	 * @param endLong
	 * @return double
	 */
	/*public double distance(double startLat, double startLong, double endLat, double endLong) {
		log.info("Calculate distance between two latlangs");

		double c = 0;
		try {
			double dLat = Math.toRadians(endLat - startLat);
			double dLong = Math.toRadians(endLong - startLong);

			startLat = Math.toRadians(startLat);
			endLat = Math.toRadians(endLat);

			double a = (Math.pow(Math.sin(dLat / 2), 2))
					+ (Math.cos(startLat) * Math.cos(endLat) * Math.pow(Math.sin(dLong / 2), 2));
			c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

		} catch (Exception exception) {
			log.error("Unable to find the Distance", exception);
		}
		return EARTH_RADIUS * c;
	}*/

	/**
	 * notifyGeofence service implementation
	 * 
	 * @param startLat
	 * @param startLong
	 * @param dataMap,geomiles,driverId
	 * @return String
	 */
	@Override
	public ServiceResponse<org.json.simple.JSONObject> notifyGeofence(@PathVariable("startLat") double startLat,
			@PathVariable("startLong") double startLong, @PathVariable double geofenceMiles,
			@PathVariable Long driverId, @RequestBody Map<String, String> dataMap,
			@RequestHeader(value = "Authorization") String authorization) {
		ResponseEntity<String> response = null;
		String geofenceReponse = null;
		ServiceResponse<org.json.simple.JSONObject> response1 = new ServiceResponse<>();
		try {
			updateDriverLocation(startLat, startLong, driverId);
			String apptNbr = dataMap.get("loadNum");
			LoadDetails load = loadDetailsRepo.findByLoadNumber(apptNbr);
			org.json.simple.JSONObject obj = new org.json.simple.JSONObject();
			Collection<SkidDrops> skidDropsList = skidDropsRepo.findByLoadDetails(load);

			List<DistanceCalculation> distancesList = new ArrayList<>();
			for (SkidDrops skidDrop : skidDropsList) {
				if (skidDrop.getGeoStatus() == 0 || skidDrop.getSkidDropStatus() == false) {
					DistanceCalculation distanceCalculation = new DistanceCalculation();
					Location locationForSkid = skidDrop.getDestLocNbr();

					ServiceResponse<DistanceTime> distanceTime = getDistanceAndTimeInfoBasedOnGoogle(startLat, startLong, locationForSkid.getLatitude(),
							locationForSkid.getLongitude());
					distanceCalculation.setDistance(distanceTime.getData().getDistance());
					distanceCalculation.setLocationForSkid(locationForSkid);
					distanceCalculation.setSkidDrop(skidDrop);
					distancesList.add(distanceCalculation);
				}
			}
			if (distancesList.size() != 0) {
				List<DistanceCalculation> result = distancesList.stream().sorted(
						(d1, d2) -> Double.valueOf(d1.getDistance()).compareTo(Double.valueOf(d2.getDistance())))
						.collect(Collectors.toList());
				DistanceCalculation distance = result.get(0);
				User user = distance.getSkidDrop().getDestLocNbr().getUser();

				SkidDrops skidDrop = distance.getSkidDrop();
				Location locationForSkid = distance.getLocationForSkid();
				Double distance1 = distance.getDistance();
				if (distance1 <= 0.5) {

					geofenceReponse = "driver reached drop location";
					obj.put("response", geofenceReponse);
					obj.put("skidDrop", skidDrop);
					skidDrop.setGeoStatus(1);
					skidDrop.setSkidDropStatus(true);
					response1.setData(obj);
					skidDropsRepo.save(skidDrop);
				} else if (distance1 <= geofenceMiles) {
					if ((distance.getSkidDrop().getGeoStatus()) == 0) {

						List<ServiceInstance> instances = discoveryClient.getInstances("solar-maps");
						String baseURL = instances.get(0).getUri().toString();

						HttpHeaders headers = new HttpHeaders();

						HttpEntity<String> request = new HttpEntity<>(headers);

						RestTemplate restTemplate = new RestTemplate();

						String url = baseURL + "/api/maps/geofence/" + startLat + "/" + startLong + "/"
								+ distance.getLocationForSkid().getLatitude() + "/"
								+ distance.getLocationForSkid().getLongitude() + "/" + geofenceMiles + "/";

						response = restTemplate.exchange(url, HttpMethod.GET, request, String.class);
						String geofenceReponse1 = response.getBody();
						if (geofenceReponse1 != null) {
							dataMap.put("location", distance.getLocationForSkid().getAddress());
							dataMap.put("driver", load.getDriver().getFirstName());
							notifyService(dataMap, user.getId());

							addEventsToCalendar(startLat, startLong, locationForSkid.getLatitude(),
									locationForSkid.getLongitude(), dataMap, authorization);

						}
						skidDrop.setGeoStatus(1);
						skidDropsRepo.save(skidDrop);

					} else {
						String geofenceReponse1 = "Driver_already_in_geofence_area";
					}

				}

			}
		} catch (HttpClientErrorException e) {
			log.error(e.getStatusCode().toString());
		}

		return response1;
	}

	@Async
	public void addEventsToCalendar(double startLat, double startLong, double endLat, double endLong,
			Map<String, String> dataMap, String authorization) {

		JSONObject jsonObj;
		try {

			List<ServiceInstance> instances = discoveryClient.getInstances("solar-maps");
			String baseURL = instances.get(0).getUri().toString();

			HttpHeaders headers = new HttpHeaders();

			HttpEntity<String> request = new HttpEntity<>(headers);

			RestTemplate restTemplate = new RestTemplate();
			String getDistanceTime = baseURL + "/api/maps/distanceTime/" + startLat + "/" + startLong + "/" + endLat
					+ "/" + endLong + "/";

			restTemplate.exchange(getDistanceTime, HttpMethod.GET, request, String.class);

			String distanceTime = restTemplate.getForObject(getDistanceTime, String.class);

			jsonObj = new JSONObject(distanceTime);

			String getRows = jsonObj.get("rows").toString();

			JSONArray rowsArray = new JSONArray(getRows);
			JSONObject rowsobject = null;
			for (int n = 0; n < rowsArray.length(); n++) {
				rowsobject = rowsArray.getJSONObject(n);

			}
			jsonObj = new JSONObject(rowsobject.toString());

			String getElements = jsonObj.get("elements").toString();

			JSONArray elementArray = new JSONArray(getElements);
			JSONObject elementobject = null;
			for (int n = 0; n < elementArray.length(); n++) {
				elementobject = elementArray.getJSONObject(n);

			}

			Integer value = (Integer) elementobject.getJSONObject("duration").get("value");
			int day = (int) TimeUnit.SECONDS.toDays(value);
			long hours = TimeUnit.SECONDS.toHours(value) - (day * 24);
			long minute = TimeUnit.SECONDS.toMinutes(value) - (TimeUnit.SECONDS.toHours(value) * 60);

			Date myDate = new Date();

			Calendar cal = Calendar.getInstance();
			cal.setTime(myDate);
			cal.add(Calendar.DATE, day);
			cal.add(Calendar.HOUR, (int) hours);
			cal.add(Calendar.MINUTE, (int) minute);
			myDate = cal.getTime();

			ZonedDateTime event = ZonedDateTime.ofInstant(myDate.toInstant(), ZoneId.systemDefault());

			String mssg = "Load " + dataMap.get("loadNum") + " will be reached to " + dataMap.get("location");

			CalendarEvent newCalendarEvent = new CalendarEvent();
			newCalendarEvent.setEventType("fa-calendar-o");
			newCalendarEvent.setActive(true);
			newCalendarEvent.setTitle("Arrivals");
			newCalendarEvent.setDescription(mssg);
			newCalendarEvent.setStart(event);
			newCalendarEvent.setEnd(event.plusHours(24));
			newCalendarEvent.setCreateTime(ZonedDateTime.now());
			newCalendarEvent.setLastUpdateTime(ZonedDateTime.now());

			LoadDetails loadDetails = loadDetailsRepo.findByLoadNumber(dataMap.get("loadNum"));

			if (loadDetails.getHighPriorityLoad() == 1 || loadDetails.getHighValueLoad() == 1) {
				CalendarPriorityType priority = CalendarPriorityType.valueOf("HIGH");
				newCalendarEvent.setPriority(priority);
			} else {
				CalendarPriorityType priority = CalendarPriorityType.valueOf("NORMAL");
				newCalendarEvent.setPriority(priority);
			}

			List<ServiceInstance> instance = discoveryClient.getInstances("solar-calendar");
			String url = instance.get(0).getUri().toString();
			HttpHeaders header = new HttpHeaders();

			header.set("Authorization", authorization);

			HttpEntity<CalendarEvent> req = new HttpEntity<>(newCalendarEvent, header);

			String createEvent = url + "/api/calendar/createEvent/";

			restTemplate.exchange(createEvent, HttpMethod.POST, req, String.class);

		} catch (Throwable th) {
			log.error("unable to get time and distace");
		}

	}

	public void notifyService(Map<String, String> dataMap, Long dcManagerId) {

		// Sending email
		try {
			String apptNbr = dataMap.get("loadNum");
			LoadDetails load = loadDetailsRepo.findByLoadNumber(apptNbr);
			Driver driver = load.getDriver();
			User user = driver.getUser();
			Long driverId = user.getId();

			List<ServiceInstance> instances = discoveryClient.getInstances("solar-core");
			String baseURL = instances.get(0).getUri().toString();
			HttpEntity<Map<String, String>> request = new HttpEntity<>(dataMap);
			RestTemplate restTemplate = new RestTemplate();
			String serviceEventId = notifyGeofenceEventId;

			String url = baseURL + "api/notifications/notify/" + serviceEventId + "/ADMIN";

			restTemplate.exchange(url, HttpMethod.POST, request, String.class);

			String url1 = baseURL + "api/notifications/notification/" + dcManagerId + "/" + serviceEventId;

			restTemplate.exchange(url1, HttpMethod.POST, request, String.class);

			String url2 = baseURL + "api/notifications/notification/" + driverId + "/" + notifyGeofenceEventIdForDriver;

			restTemplate.exchange(url2, HttpMethod.POST, request, String.class);

		} catch (HttpClientErrorException e) {
			log.error(e.getStatusCode().toString());
		}
	}

	public void notify(Map<String, String> dataMap) {
		List<ServiceInstance> inst = discoveryClient.getInstances("solar-core");
		String apiURL = inst.get(0).getUri().toString();
		HttpEntity<Map<String, String>> notifyRequest = new HttpEntity<>(dataMap);
		RestTemplate notify = new RestTemplate();
		String serviceEventId = notifyGeofenceEventId;
		String notifyService = apiURL + "api/notifications/notify/roles/" + serviceEventId;
		notify.exchange(notifyService, HttpMethod.POST, notifyRequest, String.class);

	}

	/**
	 * getWeatherInfo service implementation
	 * 
	 * @param latitude,
	 *            longitude
	 * @return ServiceResponse<Weather>
	 */
	@Override
	public ServiceResponse<Weather> getWeatherInfo(@PathVariable("latitude") String latitude,
			@PathVariable("longitude") String longitude) {

		ServiceResponse<Weather> response = new ServiceResponse<>();

		try {

			List<ServiceInstance> instances = discoveryClient.getInstances("solar-maps");
			String baseURL = instances.get(0).getUri().toString();

			HttpHeaders headers = new HttpHeaders();

			HttpEntity<String> request = new HttpEntity<>(headers);

			RestTemplate restTemplate = new RestTemplate();

			String url = baseURL + "/api/maps/weatherinfo/" + latitude + "/" + longitude + "/";

			ResponseEntity<String> result = restTemplate.exchange(url, HttpMethod.GET, request, String.class);

			Object obj = result.getBody();

			String stringResult = obj.toString();

			ObjectMapper mapper = new ObjectMapper();

			ServiceResponse weatherDetails = mapper.readValue(stringResult, ServiceResponse.class);

			Weather weather = mapper.convertValue(weatherDetails.getData(), Weather.class);

			response.setData(weather);

		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS307.name(), EnumTypeForErrorCodes.SCUS307.errorMsg());
			log.error(utils.toJson(response.getError()), exception);
		}

		return response;
	}

	/**
	 * sendNotificationByDcManager service implementation
	 * 
	 * @param email,
	 *            dataMap
	 * @return ServiceResponse<String>
	 */
	@Override
	public ServiceResponse<String> sendNotificationByDcManager(@PathVariable("email") Collection<String> email,
			@RequestBody Map<String, String> dataMap) {
		ServiceResponse<String> response = new ServiceResponse<>();

		try {

			String load = dataMap.get("loadNum");
			LoadDetails loadDetails = loadDetailsRepo.findByLoadNumber(load);

			String mail1 = email.toString();

			String userEmail1 = mail1.substring(1, mail1.length() - 1);
			Location location = locationRepo.findByEmail(userEmail1);

			SkidDrops skidDrops = skidDropsRepo.findByLoadDetailsAndDestLocNbr(loadDetails, location);

			if (skidDrops.getGeoStatus() == 1 && loadDetails.getLoadStatNbr().getId() != 5) {

				String serviceEvntId = notifyGeofenceEventId;
				List<ServiceInstance> instances = discoveryClient.getInstances("solar-core");
				String baseURL = instances.get(0).getUri().toString();

				RestTemplate restTemplate = new RestTemplate();
				HttpEntity<Map<String, String>> reqEntity = new HttpEntity<>(dataMap);

				String mail = email.toString();

				String userEmail = mail.substring(1, mail.length() - 1);

				String url = baseURL + "api/notifications/notifyEmail/" + serviceEvntId + "/" + userEmail + "/";

				restTemplate.exchange(url, HttpMethod.POST, reqEntity, Map.class);
				response.setData("Mail sent successfully");
			} else {
				response.setData("Load status is in transit");
			}
		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS308.name(), EnumTypeForErrorCodes.SCUS308.errorMsg());
			log.error(utils.toJson(response.getError()), exception);
		}

		return response;

	}

	@Override
	public ServiceResponse<org.json.simple.JSONObject> getFoodcourtsAndFuelStationsInbetweenRoute(
			@PathVariable("sourcelat") double sourcelat, @PathVariable("sourcelong") double sourcelong,
			@PathVariable("destlat") double destlat, @PathVariable("destlong") double destlong) {

		ServiceResponse<org.json.simple.JSONObject> response = new ServiceResponse<>();

		try {
			org.json.simple.JSONObject obj = new org.json.simple.JSONObject();
			Collection<FoodCourt> foodCourtsList = foodCourtRepo.findInBetweenRoutes(sourcelat, sourcelong, destlat,
					destlong);

			Collection<FuelStation> fuelStationsList = fuelStationRepo.findInBetweenRoutes(sourcelat, sourcelong,
					destlat, destlong);

			obj.put("foodCourtsList", foodCourtsList);

			obj.put("fuelStationsList", fuelStationsList);

			response.setData(obj);

		} catch (HttpClientErrorException e) {
			log.error(e.getStatusCode().toString());
		}
		return response;

	}

	/**
	 * getAllLocationTypes service implementation
	 * 
	 * 
	 * @return ServiceResponse<Collection<LocationType>>
	 */
	@Override
	public ServiceResponse<Collection<LocationType>> getAllLocationTypes() {
		ServiceResponse<Collection<LocationType>> response = new ServiceResponse<>();
		try {
			List<LocationType> locationTypes = locationTypeRepo.findAll();
			response.setData(locationTypes);

		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS314.name(), EnumTypeForErrorCodes.SCUS314.errorMsg());
			log.error(utils.toJson(response.getError()), exception);
		}
		return response;
	}

	/**
	 * getLocationsByType service implementation
	 * 
	 * 
	 * @return ServiceResponse<Collection<JSONObject>>
	 */
	@Override
	public ServiceResponse<org.json.simple.JSONObject> getLocationsByType(@NotNull @PathVariable String pickupType,
			@NotNull @PathVariable String destinationType) {
		ServiceResponse<org.json.simple.JSONObject> response = new ServiceResponse<>();
		try {
			org.json.simple.JSONObject obj = new org.json.simple.JSONObject();

			LocationType pickup = locationTypeRepo.findByType(pickupType);
			LocationType distination = locationTypeRepo.findByType(destinationType);

			Collection<Location> origin = locationRepo.findByLocationType(pickup);
			Collection<Location> destination = locationRepo.findByLocationType(distination);

			obj.put("pickuplocation", origin);
			obj.put("destinationlocation", destination);

			response.setData(obj);

		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS315.name(), EnumTypeForErrorCodes.SCUS315.errorMsg());
			log.error(utils.toJson(response.getError()), exception);
		}
		return response;
	}

	/**
	 * getAllDcLocations service implementation
	 * 
	 * 
	 * @return ServiceResponse<Collection<LocationType>>
	 */
	@Override
	public ServiceResponse<Collection<Location>> getAllDcLocations() {
		ServiceResponse<Collection<Location>> response = new ServiceResponse<>();
		try {
			LocationType dcLocation = locationTypeRepo.findByType("DC");
			Collection<Location> location = locationRepo.findByLocationType(dcLocation);
			response.setData(location);

		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS316.name(), EnumTypeForErrorCodes.SCUS316.errorMsg());
			log.error(utils.toJson(response.getError()), exception);
		}
		return response;
	}
	/**
	 * updateDriverLocation service implementation
	 * 
	 * @param startLat,startLong,driverId
	 * @return ServiceResponse<Driver>
	 */
	public ServiceResponse<Driver> updateDriverLocation(Double startLat, Double startLong, Long driverId) {

		log.debug("Update driver location");
		ServiceResponse<Driver> response = new ServiceResponse<>();
		try {
			Driver driverExists = driverRepo.findById(driverId);

			if (driverExists == null) {
				response.setError(EnumTypeForErrorCodes.SCUS105.name(), EnumTypeForErrorCodes.SCUS105.errorMsg());
			} else {
				driverExists.setLatitude(startLat);
				driverExists.setLongitude(startLong);
				Driver driverData = driverRepo.save(driverExists);

				response.setData(driverData);
			}

		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS317.name(), EnumTypeForErrorCodes.SCUS317.errorMsg());
			log.error(utils.toJson(response.getError()), exception);

		}
		return response;
	}
	/**
	 * getLiveTrackingByLoadNumber service implementation
	 * 
	 * @param loadNumber
	 * @return ServiceResponse<org.json.simple.JSONObject>
	 */
	@Override
	public ServiceResponse<org.json.simple.JSONObject> getLiveTrackingByLoadNumber(@PathVariable String loadNumber) {
		log.debug("Gettinglive tracking based on load number");
		ServiceResponse<org.json.simple.JSONObject> response = new ServiceResponse<>();
		try {
			LoadDetails loadDetails = loadDetailsRepo.findByLoadNumber(loadNumber);
			Driver driver = loadDetails.getDriver();
			Double driverLatitude = driver.getLatitude();
			Double driverLongitude = driver.getLongitude();
			org.json.simple.JSONObject obj = new org.json.simple.JSONObject();
			Collection<SkidDrops> skidDropsList = skidDropsRepo.findByLoadDetails(loadDetails);
			List<DistanceCalculation> distancesList = new ArrayList<>();

			for (SkidDrops skidDrop : skidDropsList) {
				if (skidDrop.getPostInspectionStatus() == false) {
					Location location = skidDrop.getDestLocNbr();
					Double dropLatitide = location.getLatitude();
					Double dropLongitude = location.getLongitude();
					DistanceCalculation distanceCalculation = new DistanceCalculation();
					ServiceResponse<DistanceTime> distnaceTime = getDistanceAndTimeInfoBasedOnGoogle(driverLatitude,
							driverLongitude, dropLatitide, dropLongitude);

					distanceCalculation.setDistance(distnaceTime.getData().getDistance());
					distanceCalculation.setTime(distnaceTime.getData().getTime());
					distanceCalculation.setLocationForSkid(location);
					distanceCalculation.setSkidDrop(skidDrop);
					distancesList.add(distanceCalculation);

				}
			}

			List<DistanceCalculation> result = distancesList.stream()
					.sorted((d1, d2) -> Double.valueOf(d1.getDistance()).compareTo(Double.valueOf(d2.getDistance())))
					.collect(Collectors.toList());
			DistanceCalculation shortestDistance = result.get(0);
			Set<DistanceCalculation> resultSet = new LinkedHashSet<>(result);

			Integer completedSkidDropsCount = skidDropsList.size() - distancesList.size();
			obj.put("loadDetails", loadDetails);
			obj.put("skidDropDetails", resultSet);
			obj.put("completedSkidDropsCount", completedSkidDropsCount);
			response.setData(obj);

		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS1202.name(), EnumTypeForErrorCodes.SCUS1202.errorMsg());
			log.error(utils.toJson(response.getError()), exception);
		}
		return response;
	}
	/**
	 * getDistanceAndTimeInfoBasedOnGoogle service implementation
	 * 
	 * @param originLat,originLong,destLat,destLong
	 * @return ServiceResponse<org.json.simple.JSONObject>
	 */
	@Override
	public ServiceResponse<DistanceTime> getDistanceAndTimeInfoBasedOnGoogle(
			@PathVariable("originLat") double originLat, @PathVariable("originLong") double originLong,
			@PathVariable("destLat") double destLat, @PathVariable("destLong") double destLong) {

		log.debug("Distance And Time impl");
		String uriResponse = null;
		double distance = 0.0;
		DistanceTime shortestDistance = null;
		ServiceResponse<DistanceTime> response = new ServiceResponse<>();
		try {

			RestTemplate restTemplate = new RestTemplate();
			String url = "https://maps.googleapis.com/maps/api/directions/json?";
			uriResponse = restTemplate
					.getForObject(
							url + "origin=" + originLat + ", " + originLong + "&destination=" + destLat + ", "
									+ destLong + "&sensor=false&mode=driving&alternatives=true&key=" + googleApiKey,
							String.class);

			JSONObject object = new JSONObject(uriResponse);

			JSONArray jsonArray = (JSONArray) object.get("routes");
			List<DistanceTime> distanceTimesList = new ArrayList<>();
			for (int i = 0; i < jsonArray.length(); i++) {

				JSONObject jsonObject = (JSONObject) jsonArray.get(i);

				JSONArray childArray = (JSONArray) jsonObject.get("legs");

				for (int j = 0; j < childArray.length(); j++) {

					JSONObject jsonObject1 = (JSONObject) childArray.get(j);

					JSONObject jsonObject2 = (JSONObject) jsonObject1.get("distance");

					String distance1 = jsonObject2.getString("text");
					distance = Double.parseDouble(distance1.substring(0, (distance1.length() - 2)));
					JSONObject timeJson = (JSONObject) jsonObject1.get("duration");
					String duration = timeJson.getString("text");
					DistanceTime distanceTime = new DistanceTime();
					distanceTime.setDistance(distance);
					distanceTime.setTime(duration);
					distanceTimesList.add(distanceTime);
				}
			}
			List<DistanceTime> result = distanceTimesList.stream()
					.sorted((o1, o2) -> Double.valueOf(o1.getDistance()).compareTo(Double.valueOf(o2.getDistance())))
					.collect(Collectors.toList());
			shortestDistance = result.get(0);
			response.setData(shortestDistance);
		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS1235.name(), EnumTypeForErrorCodes.SCUS1235.errorMsg());
			log.error(utils.toJson(response.getError()), exception);
		}
		return response;

	}
}

package com.mss.solar.dashboard.svcs.impl;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;

import org.hibernate.validator.constraints.Email;
import org.json.simple.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.cloud.client.ServiceInstance;
import org.springframework.cloud.client.discovery.DiscoveryClient;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.scheduling.annotation.Async;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestTemplate;

import com.mss.solar.dashboard.common.EnumTypeForErrorCodes;
import com.mss.solar.dashboard.common.Utils;
import com.mss.solar.dashboard.domain.CartonDetails;
import com.mss.solar.dashboard.domain.DistanceTime;
import com.mss.solar.dashboard.domain.Driver;
import com.mss.solar.dashboard.domain.Inspection;
import com.mss.solar.dashboard.domain.LoadAppointmentStatus;
import com.mss.solar.dashboard.domain.LoadDetails;
import com.mss.solar.dashboard.domain.Location;
import com.mss.solar.dashboard.domain.SkidDrops;
import com.mss.solar.dashboard.model.ServiceResponse;
import com.mss.solar.dashboard.repos.CartonDetailsRepository;
import com.mss.solar.dashboard.repos.DriverRepository;
import com.mss.solar.dashboard.repos.InspectionRepository;
import com.mss.solar.dashboard.repos.LoadAppointmentStatusRepository;
import com.mss.solar.dashboard.repos.LoadDetailsRepository;
import com.mss.solar.dashboard.repos.LocationRepository;
import com.mss.solar.dashboard.repos.SkidDropsRepository;
import com.mss.solar.dashboard.svcs.LoadDetailsService;
import com.mss.solar.dashboard.svcs.ReportService;

@RestController
@Validated
public class LoadDetailsServiceImpl implements LoadDetailsService {

	private static Logger log = LoggerFactory.getLogger(LoadDetailsServiceImpl.class);

	@Autowired
	private LoadDetailsRepository loadDetailsRepo;

	@Autowired
	private LoadAppointmentStatusRepository loadAppointmentStatusRepo;

	@Autowired
	private SkidDropsRepository skidDropsRepo;

	@Autowired
	private LocationRepository locationRepo;

	@Autowired
	private CartonDetailsRepository cartonsRepo;

	@Autowired
	private DriverRepository driverRepo;

	@Autowired
	private DiscoveryClient discoveryClient;

	@Autowired
	private LocationServiceImpl locationService;

	@Autowired
	private ReportService reportsService;

	@Autowired
	private Utils utils;

	@Autowired
	private InspectionRepository inspectionRepo;

	@Value("${loadAssignedStatusForAdmin}")
	public String loadAssignedStatusForAdmin;

	@Value("${loadAcceptedStatusForAdmin}")
	public String loadAcceptedStatusForAdmin;

	@Value("${loadCompletedStatusForAdmin}")
	public String loadCompletedStatusForAdmin;

	@Value("${loadAssignedStatusForDriver}")
	public String loadAssignedStatusForDriver;

	@Value("${loadAcceptedStatusForDriver}")
	public String loadAcceptedStatusForDriver;

	@Value("${loadCompletedStatusForDriver}")
	public String loadCompletedStatusForDriver;

	/**
	 * addLoadDetails Service implementation
	 * 
	 * @param LoadDetails
	 * @return ServiceResponse<LoadDetails>
	 */
	@Override
	public ServiceResponse<LoadDetails> addLoadDetails(@Valid @RequestBody LoadDetails loadDetails) {

		log.info("adding load details");
		ServiceResponse<LoadDetails> response = new ServiceResponse<>();
		try {

			LoadDetails loadExists = loadDetailsRepo.findByLoadNumber(loadDetails.getLoadNumber());

			if (loadExists == null) {

				LoadDetails load = new LoadDetails();

				load.setLoadNumber(loadDetails.getLoadNumber());
				load.setCreatedTS(loadDetails.getCreatedTS());
				load.setCreatedUser(loadDetails.getCreatedUser());
				load.setDriver(loadDetails.getDriver());
				load.setGeomiles(loadDetails.getGeomiles());
				load.setHighPriorityLoad(loadDetails.getHighPriorityLoad());
				load.setLastUpdatedTS(loadDetails.getLastUpdatedTS());
				load.setHighValueLoad(loadDetails.getHighValueLoad());
				load.setLastUpdatedUser(loadDetails.getLastUpdatedUser());
				load.setLoadStatNbr(loadDetails.getLoadStatNbr());
				load.setOriginLocNbr(loadDetails.getOriginLocNbr());
				load.setSkidDropsCount(loadDetails.getSkidDropsCount());
				load.setVndNbr(loadDetails.getVndNbr());
				load.setPostInspectionCompletedSkids(0l);
				load.setPreInspectionStatus(false);

				LoadDetails saveLoad = loadDetailsRepo.save(load);
				response.setData(saveLoad);
				long totalCartons = 0;

				List<SkidDrops> dropsList = new ArrayList<>();
				Set<SkidDrops> skidDropsDetails = loadDetails.getSkidDrops();

				for (SkidDrops drop : skidDropsDetails) {
					dropsList.add(drop);
				}

				List<SkidDrops> result = dropsList.stream().sorted(
						(o1, o2) -> Double.valueOf(o1.getTotalMiles()).compareTo(Double.valueOf(o2.getTotalMiles())))
						.collect(Collectors.toList());

				Set<SkidDrops> resultSet = new LinkedHashSet<>(result);

				long skidOrderPerLoad = 0;

				for (SkidDrops skidDrop : resultSet) {

					SkidDrops saveSkidDrops = new SkidDrops();

					saveSkidDrops.setAddedCartons(0);
					saveSkidDrops.setDestLocNbr(skidDrop.getDestLocNbr());
					saveSkidDrops.setGeoStatus(0);
					saveSkidDrops.setLoadDetails(saveLoad);
					saveSkidDrops.setLoadTypNbr(skidDrop.getLoadTypNbr());
					saveSkidDrops.setTotalCartons(skidDrop.getTotalCartons());
					saveSkidDrops.setTotalMiles(skidDrop.getTotalMiles());
					saveSkidDrops.setCartonstatus(0);
					saveSkidDrops.setPostInspectionStatus(false);
					saveSkidDrops.setSkidDropStatus(false);
					skidOrderPerLoad = skidOrderPerLoad + 1;
					saveSkidDrops.setSkidOrderPerLoad(skidOrderPerLoad);

					skidDropsRepo.save(saveSkidDrops);

					totalCartons = totalCartons + saveSkidDrops.getTotalCartons();

				}
				ServiceResponse<Double> totalMiles = getLoadWiseDistance(saveLoad.getLoadNumber());
				saveLoad.setTotalMiles(totalMiles.getData());
				saveLoad.setTotalCartons(totalCartons);
				saveLoad.setDestLocNbr(result.get(result.size() - 1).getDestLocNbr());
				saveLoad.setAddedCartons(0L);
				loadDetailsRepo.save(saveLoad);

			} else {
				response.setError(EnumTypeForErrorCodes.SCUS1206.name(), EnumTypeForErrorCodes.SCUS1206.errorMsg());
			}

		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS1207.name(), EnumTypeForErrorCodes.SCUS1207.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}
		return response;
	}

	/**
	 * updateLoadDetails Service implementation
	 * 
	 * 
	 * @return ServiceResponse<LoadDetails>
	 */
	@Override
	public ServiceResponse<LoadDetails> updateLoadDetails(@Valid @RequestBody LoadDetails loadDetails) {

		log.info("update loadDetails");
		ServiceResponse<LoadDetails> response = new ServiceResponse<>();
		try {
			LoadDetails loadExists = loadDetailsRepo.findByLoadNumber(loadDetails.getLoadNumber());

			if (loadExists == null) {
				response.setError(EnumTypeForErrorCodes.SCUS1208.name(), EnumTypeForErrorCodes.SCUS1208.errorMsg());
			} else if (loadExists.getLoadStatNbr().getId() == 1 || loadExists.getLoadStatNbr().getId() == 0) {

				loadExists.setLoadNumber(loadDetails.getLoadNumber());
				loadExists.setCreatedTS(loadDetails.getCreatedTS());
				loadExists.setCreatedUser(loadDetails.getCreatedUser());
				loadExists.setDriver(loadDetails.getDriver());
				loadExists.setGeomiles(loadDetails.getGeomiles());
				loadExists.setHighPriorityLoad(loadDetails.getHighPriorityLoad());
				loadExists.setLastUpdatedTS(loadDetails.getLastUpdatedTS());
				loadExists.setHighValueLoad(loadDetails.getHighValueLoad());
				loadExists.setLastUpdatedUser(loadDetails.getLastUpdatedUser());
				loadExists.setOriginLocNbr(loadDetails.getOriginLocNbr());
				loadExists.setSkidDropsCount(loadDetails.getSkidDropsCount());
				loadExists.setVndNbr(loadDetails.getVndNbr());

				List<SkidDrops> dropsList = new ArrayList<>();
				Set<SkidDrops> skidDropsDetails = loadDetails.getSkidDrops();

				for (SkidDrops drop : skidDropsDetails) {
					dropsList.add(drop);
				}

				List<SkidDrops> result = dropsList.stream().sorted(
						(o1, o2) -> Double.valueOf(o1.getTotalMiles()).compareTo(Double.valueOf(o2.getTotalMiles())))
						.collect(Collectors.toList());

				Set<SkidDrops> resultSet = new LinkedHashSet<>(result);

				long skidOrderPerLoad = 0;

				long totalCartons = 0;

				List<SkidDrops> drops = new ArrayList<>();

				for (SkidDrops skidDrop : resultSet) {

					Location destination = locationRepo.findByLocNbr(skidDrop.getDestLocNbr().getLocNbr());

					SkidDrops skidDropExists = skidDropsRepo.findByLoadDetailsAndDestLocNbr(loadExists, destination);

					if (skidDropExists == null) {

						skidDrop.setAddedCartons(0);
						skidDrop.setGeoStatus(0);
						skidDrop.setTotalCartons(skidDrop.getTotalCartons());
						skidDrop.setCartonstatus(0);
						skidDrop.setTotalMiles(skidDrop.getTotalMiles());
						skidDrop.setLoadDetails(loadExists);
						skidDrop.setPostInspectionStatus(false);
						skidOrderPerLoad = skidOrderPerLoad + 1;
						skidDrop.setSkidOrderPerLoad(skidOrderPerLoad);
						skidDrop.setSkidDropStatus(false);

						skidDropsRepo.save(skidDrop);

						totalCartons = totalCartons + skidDrop.getTotalCartons();

					} else {
						if (skidDropExists.getAddedCartons() > skidDrop.getTotalCartons()) {

							response.setError(EnumTypeForErrorCodes.SCUS1231.name(),
									EnumTypeForErrorCodes.SCUS1231.errorMsg());

						} else {

							skidDropExists.setAddedCartons(skidDrop.getAddedCartons());
							skidDropExists.setDestLocNbr(skidDrop.getDestLocNbr());
							skidDropExists.setGeoStatus(0);
							skidDropExists.setLoadTypNbr(skidDrop.getLoadTypNbr());
							skidDropExists.setTotalCartons(skidDrop.getTotalCartons());
							skidDropExists.setCartonstatus(skidDrop.getCartonstatus());
							skidDropExists.setTotalMiles(skidDrop.getTotalMiles());
							skidOrderPerLoad = skidOrderPerLoad + 1;
							skidDropExists.setSkidOrderPerLoad(skidOrderPerLoad);
							skidDropExists.setLoadDetails(loadExists);
							skidDropExists.setSkidDropStatus(false);
							skidDropsRepo.save(skidDropExists);

							totalCartons = totalCartons + skidDropExists.getTotalCartons();

						}

					}

					if (skidDrop.getAddedCartons() != skidDrop.getTotalCartons()) {
						drops.add(skidDrop);

					}

				}

				if (!drops.isEmpty()) {

					loadExists.setLoadStatNbr(loadAppointmentStatusRepo.findById(0l));
				}
				ServiceResponse<Double> totalMiles = getLoadWiseDistance(loadExists.getLoadNumber());
				loadExists.setTotalMiles(totalMiles.getData());
				loadExists.setTotalCartons(totalCartons);
				LoadDetails updateLoad = loadDetailsRepo.save(loadExists);
				response.setData(updateLoad);

			} else {
				response.setError(EnumTypeForErrorCodes.SCUS1209.name(), EnumTypeForErrorCodes.SCUS1209.errorMsg());
			}

		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS1210.name(), EnumTypeForErrorCodes.SCUS1210.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}
		return response;

	}

	/**
	 * getAllLoadDetails Service Implementation
	 * 
	 * @return ServiceResponse<Collection<LoadDetails>>
	 */
	@Override
	public ServiceResponse<Collection<LoadDetails>> getAllLoadDetails() {
		log.debug("Getting all load details");
		ServiceResponse<Collection<LoadDetails>> response = new ServiceResponse<>();
		try {
			List<LoadDetails> loadDetails = loadDetailsRepo.findAll();
			response.setData(loadDetails);
		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS1201.name(), EnumTypeForErrorCodes.SCUS1201.errorMsg());
			log.error(utils.toJson(response.getError()), exception);
		}
		return response;
	}

	/**
	 * getLoadDetailsByLoadNumber Service Implementation
	 * 
	 * @param loadNumber
	 * @return ServiceResponse<LoadDetails>
	 */
	@Override
	public ServiceResponse<LoadDetails> getLoadDetailsByLoadNumber(@PathVariable String loadNumber) {
		log.debug("Getting load details by load number");
		ServiceResponse<LoadDetails> response = new ServiceResponse<>();
		try {
			LoadDetails loadDetails = loadDetailsRepo.findByLoadNumber(loadNumber);
			if (loadDetails != null) {
				response.setData(loadDetails);
			} else {
				response.setError(EnumTypeForErrorCodes.SCUS1204.name(), EnumTypeForErrorCodes.SCUS1204.errorMsg());
			}
		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS1202.name(), EnumTypeForErrorCodes.SCUS1202.errorMsg());
			log.error(utils.toJson(response.getError()), exception);
		}
		return response;
	}

	/**
	 * deleteLoadDetailsByLoadNumber Service Implementation
	 * 
	 * @param loadNumber
	 * @return ServiceResponse<String>
	 */
	@Override
	public ServiceResponse<String> deleteLoadDetailsByLoadNumber(@PathVariable String loadNumber) {
		log.debug("Deleting load details by load number");
		ServiceResponse<String> response = new ServiceResponse<>();
		try {
			LoadDetails loadDetails = loadDetailsRepo.findByLoadNumber(loadNumber);
			List<CartonDetails> cartons = cartonsRepo.findByLoadNumber(loadDetails);
			if (loadDetails != null) {
				if (!cartons.isEmpty()) {
					cartonsRepo.delete(cartons);
				}
				loadDetailsRepo.delete(loadDetails);
				response.setData("Load deleted succcessfully");
			} else {
				response.setError(EnumTypeForErrorCodes.SCUS1204.name(), EnumTypeForErrorCodes.SCUS1204.errorMsg());
			}

		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS1203.name(), EnumTypeForErrorCodes.SCUS1203.errorMsg());
			log.error(utils.toJson(response.getError()), exception);
		}
		return response;
	}

	/**
	 * getLoadAppointmentsByDriver Service implementation
	 * 
	 * @param driverId
	 * @return ServiceResponse<Collection<LoadDetails>>
	 */
	@Override
	public ServiceResponse<Collection<LoadDetails>> getLoadDetailsByDriver(@NotNull @PathVariable Long driverId) {

		log.info("getLoadDetails By Driver id");
		ServiceResponse<Collection<LoadDetails>> response = new ServiceResponse<>();
		try {
			Collection<LoadDetails> loadDetails = loadDetailsRepo.findByDriverId(driverId);
			response.setData(loadDetails);
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS1205.name(), EnumTypeForErrorCodes.SCUS1205.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}
		return response;
	}

	/**
	 * getDriverAcceptedLoads Service implementation
	 * 
	 * @param driverId
	 * @return ServiceResponse<LoadDetails>
	 */
	@Override
	public ServiceResponse<Collection<LoadDetails>> getDriverAcceptedLoads(Long driverId) {

		log.info("get load details which are accepted by Driver");
		ServiceResponse<Collection<LoadDetails>> response = new ServiceResponse<>();
		try {
			Collection<LoadDetails> loadDetails = loadDetailsRepo.findByDriverIdAndLoadStatNbrId(driverId, 4l);
			response.setData(loadDetails);
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS1211.name(), EnumTypeForErrorCodes.SCUS1211.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}
		return response;
	}

	/**
	 * getDriverNotCompletedLoads Service implementation
	 * 
	 * @param driverId
	 * @return ServiceResponse<Collection<LoadDetails>>
	 */
	@Override
	public ServiceResponse<Collection<LoadDetails>> getDriverNotCompletedLoads(@Valid @PathVariable Long driverId) {

		ServiceResponse<Collection<LoadDetails>> response = new ServiceResponse<>();

		try {
			Collection<LoadDetails> loadDetails = loadDetailsRepo.getDriverNotCompletedLoads(driverId);

			List<LoadDetails> loadDetailsList = new ArrayList<>();
			List<LoadDetails> loadDetailsList1 = new ArrayList<>();
			for (LoadDetails loadDetails1 : loadDetails) {
				if (loadDetails1.getLoadStatNbr().getId() == 4) {
					loadDetailsList.add(loadDetails1);
				}
			}
			for (LoadDetails loads : loadDetailsList) {
				List<SkidDrops> dropsList = new ArrayList<>();
				Set<SkidDrops> drops = loads.getSkidDrops();

				for (SkidDrops drop : drops) {
					dropsList.add(drop);
				}

				List<SkidDrops> result = dropsList.stream().sorted(
						(o1, o2) -> Double.valueOf(o1.getTotalMiles()).compareTo(Double.valueOf(o2.getTotalMiles())))
						.collect(Collectors.toList());

				Set<SkidDrops> resultSet = new LinkedHashSet<>(result);
				loads.setSkidDrops(resultSet);
				loadDetailsList1.add(loads);

			}
			response.setData(loadDetailsList1);
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS1212.name(), EnumTypeForErrorCodes.SCUS1212.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}

		return response;
	}

	/**
	 * getLoadsBasedOnDestinationLocations Service implementation
	 * 
	 * @param locNbr
	 * @return ServiceResponse<Collection<LoadDetails>>
	 */
	@Override
	public ServiceResponse<Collection<LoadDetails>> getLoadsBasedOnDestinationLocations(
			@NotNull @PathVariable String locNbr) {
		ServiceResponse<Collection<LoadDetails>> response = new ServiceResponse<>();
		try {
			List<LoadDetails> loadDetailsList = new ArrayList<>();
			Collection<SkidDrops> skidDrops = skidDropsRepo.getLoadsByLocations(locNbr);
			for (SkidDrops skidDrop : skidDrops) {
				LoadDetails loadDetails = loadDetailsRepo.findByLoadNumber(skidDrop.getLoadDetails().getLoadNumber());
				loadDetailsList.add(loadDetails);
			}

			response.setData(loadDetailsList);

		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS1213.name(), EnumTypeForErrorCodes.SCUS1213.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}
		return response;
	}

	/**
	 * updateLoadStatus Service implementation
	 * 
	 * @param loadNumber
	 * @param status
	 * @return ServiceResponse<LoadDetails>
	 */
	@Override
	public ServiceResponse<LoadDetails> updateLoadStatus(@Valid @PathVariable String loadNumber,
			@Valid @PathVariable Long status) {
		ServiceResponse<LoadDetails> response = new ServiceResponse<>();
		try {
			LoadDetails loadAppointment = loadDetailsRepo.findOne(loadNumber);

			if (loadAppointment == null) {
				response.setError(EnumTypeForErrorCodes.SCUS1204.name(), EnumTypeForErrorCodes.SCUS1204.errorMsg());
			} else {

				if (loadAppointment.getDriver() == null && loadAppointment.getVndNbr() == null) {

					response.setError(EnumTypeForErrorCodes.SCUS1214.name(), EnumTypeForErrorCodes.SCUS1214.errorMsg());

				} else {

					if (status == 4) {

						Collection<LoadDetails> loadDetailsList = loadDetailsRepo
								.findByDriverId(loadAppointment.getDriver().getId());
						List<LoadDetails> loadDetailsList1 = new ArrayList<>();
						for (LoadDetails loadDetails : loadDetailsList) {
							if (loadDetails.getLoadStatNbr().getId() == 4) {
								loadDetailsList1.add(loadDetails);
							}
						}
						if (loadDetailsList1.isEmpty()) {
							LoadAppointmentStatus appointmentStatus = loadAppointmentStatusRepo.findOne(status);
							loadAppointment.setLoadStatNbr(appointmentStatus);

							LoadDetails load1 = loadDetailsRepo.save(loadAppointment);

							Driver dvr = loadAppointment.getDriver();
							LoadAppointmentStatus loadAppointmentStatus = loadAppointment.getLoadStatNbr();
							updateLoadStatus(loadAppointmentStatus.getStatus(), loadAppointment.getLoadNumber(),
									dvr.getFirstName(), dvr.getUser().getId());

							Location location = loadAppointment.getOriginLocNbr();
							Driver driver = loadAppointment.getDriver();
							driver.setLatitude(location.getLatitude());
							driver.setLongitude(location.getLongitude() + 0.01);
							driverRepo.save(driver);

							response.setData(load1);
						} else {
							response.setError(EnumTypeForErrorCodes.SCUS1227.name(),
									EnumTypeForErrorCodes.SCUS1227.errorMsg());
						}

					} else if (status == 5) {

						Set<SkidDrops> skidDrops = loadAppointment.getSkidDrops();
						List<SkidDrops> skids = new ArrayList<>();
						for (SkidDrops drops : skidDrops) {

							if (drops.getGeoStatus() == 1) {

								skids.add(drops);
							}
						}

						if (skidDrops.size() == skids.size()) {

							LoadAppointmentStatus appointmentStatus = loadAppointmentStatusRepo.findOne(status);
							loadAppointment.setLoadStatNbr(appointmentStatus);

							LoadDetails load1 = loadDetailsRepo.save(loadAppointment);

							Driver dvr = loadAppointment.getDriver();

							LoadAppointmentStatus loadAppointmentStatus = loadAppointment.getLoadStatNbr();
							updateLoadStatus(loadAppointmentStatus.getStatus(), loadAppointment.getLoadNumber(),
									dvr.getFirstName(), dvr.getUser().getId());

							response.setData(load1);

						} else {
							response.setError(EnumTypeForErrorCodes.SCUS1234.name(),
									EnumTypeForErrorCodes.SCUS1234.errorMsg());
						}

					} else {

						LoadAppointmentStatus appointmentStatus = loadAppointmentStatusRepo.findOne(status);
						loadAppointment.setLoadStatNbr(appointmentStatus);

						LoadDetails load1 = loadDetailsRepo.save(loadAppointment);

						Driver dvr = loadAppointment.getDriver();

						LoadAppointmentStatus loadAppointmentStatus = loadAppointment.getLoadStatNbr();

						updateLoadStatus(loadAppointmentStatus.getStatus(), loadAppointment.getLoadNumber(),
								dvr.getFirstName(), dvr.getUser().getId());

						response.setData(load1);
					}

				}
			}

		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS1215.name(), EnumTypeForErrorCodes.SCUS1215.errorMsg());
			log.error(utils.toJson(response.getError()), exception);
		}
		return response;
	}

	/**
	 * updateLoadStatus method
	 * 
	 * @param status
	 * @param loadNum
	 * @param driver
	 * @param userId
	 */

	public void updateLoadStatus(String status, String loadNum, String driver, Long userId) {

		Map<String, String> data = new HashMap<>();
		data.put("loadNum", loadNum);
		data.put("driver", driver);
		switch (status) {
		case "Load Assigned":
			data.put("message", "assigned");
			notifyService(data, loadAssignedStatusForAdmin, userId);
			break;

		case "Load Accepted":
			data.put("message", "accepted");
			notifyService(data, loadAcceptedStatusForAdmin, userId);
			break;

		case "Load Completed":
			data.put("message", "completed");
			notifyService(data, loadCompletedStatusForAdmin, userId);
			break;

		default:
		}

	}

	@Async
	public void notifyService(Map<String, String> data, String serviceEventId, Long userId) {

		// Sending email
		try {
			List<ServiceInstance> instances = discoveryClient.getInstances("solar-core");
			String baseURL = instances.get(0).getUri().toString();
			HttpEntity<Map<String, String>> request = new HttpEntity<>(data);
			RestTemplate restTemplate = new RestTemplate();

			String url = baseURL + "api/notifications/notify/" + serviceEventId + "/ADMIN";
			String url1 = null;
			if (serviceEventId.equals("34")) {
				url1 = baseURL + "api/notifications/notification/" + userId + "/" + loadAssignedStatusForDriver;
			} else if (serviceEventId.equals("35")) {
				url1 = baseURL + "api/notifications/notification/" + userId + "/" + loadAcceptedStatusForDriver;
			} else if (serviceEventId.equals("36")) {
				url1 = baseURL + "api/notifications/notification/" + userId + "/" + loadCompletedStatusForDriver;

			}

			restTemplate.exchange(url1, HttpMethod.POST, request, Map.class);

			restTemplate.exchange(url, HttpMethod.POST, request, Map.class);

		} catch (HttpClientErrorException e) {
			log.error(e.getStatusCode().toString());
		}
	}

	/**
	 * getAcceptedLoadsList Service implementation
	 * 
	 * @return ServiceResponse<Collection<LoadDetails>>
	 */
	@Override
	public ServiceResponse<Collection<LoadDetails>> getAcceptedLoadsList() {

		log.info("getLoadDetails which are accepted by Driver");
		ServiceResponse<Collection<LoadDetails>> response = new ServiceResponse<>();
		try {
			Collection<LoadDetails> acceptedLoads = loadDetailsRepo.findByLoadStatNbrId(4l);
			response.setData(acceptedLoads);
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS1216.name(), EnumTypeForErrorCodes.SCUS1216.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}
		return response;
	}

	/**
	 * updateHighValueAndPriority Service implementation
	 * 
	 * @param loadAppt,
	 *            highValueLoad, highPriorityLoad
	 */
	@Override
	public void updateHighValueAndPriority(@PathVariable String loadNumber, @PathVariable Integer highValueLoad,
			@PathVariable Integer highPriorityLoad) {
		log.debug("updating load high value and priority");

		try {

			LoadDetails loadAppointment = loadDetailsRepo.findOne(loadNumber);

			loadAppointment.setHighValueLoad(highValueLoad);
			loadAppointment.setHighPriorityLoad(highPriorityLoad);

			loadDetailsRepo.save(loadAppointment);

		} catch (Exception e) {
			log.error("Failed to update load high value and priority");

		}
	}

	/**
	 * getLoadsBasedOnDcManagerEmail Service implementation
	 * 
	 * @param email
	 * @return ServiceResponse<Collection<LoadDetails>>
	 */
	@Override
	public ServiceResponse<Collection<LoadDetails>> getLoadsBasedOnDcManagerEmail(@Email @PathVariable String email) {

		ServiceResponse<Collection<LoadDetails>> response = new ServiceResponse<>();
		try {

			Location location = locationRepo.findByEmail(email);
			if (location != null) {

				List<LoadDetails> loadDetailsList = new ArrayList<>();
				Collection<SkidDrops> skidDrops = skidDropsRepo.getLoadsByLocations(location.getLocNbr());
				for (SkidDrops skidDrop : skidDrops) {
					LoadDetails loadDetails = loadDetailsRepo
							.findByLoadNumber(skidDrop.getLoadDetails().getLoadNumber());
					loadDetailsList.add(loadDetails);
				}

				response.setData(loadDetailsList);
			} else {
				response.setError(EnumTypeForErrorCodes.SCUS1217.name(), EnumTypeForErrorCodes.SCUS1217.errorMsg());
			}

		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS1218.name(), EnumTypeForErrorCodes.SCUS1218.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}
		return response;
	}

	/**
	 * updateGeofenceMiles Service implementation
	 * 
	 * @param loadNumber,
	 *            geomiles
	 * @return ServiceResponse<LoadDetails>
	 */
	@Override
	public ServiceResponse<LoadDetails> updateGeofenceMiles(@Valid @PathVariable String loadNumber,
			@Valid @PathVariable Double geomiles) {

		ServiceResponse<LoadDetails> response = new ServiceResponse<>();
		try {
			LoadDetails loadAppointment = loadDetailsRepo.findOne(loadNumber);

			if (loadAppointment == null) {
				response.setError(EnumTypeForErrorCodes.SCUS1208.name(), EnumTypeForErrorCodes.SCUS1208.errorMsg());
			} else {
				if (loadAppointment.getLoadStatNbr().getId() != 5) {

					loadAppointment.setGeomiles(geomiles);
					loadDetailsRepo.save(loadAppointment);
					response.setData(loadAppointment);
				} else {
					response.setError(EnumTypeForErrorCodes.SCUS1219.name(), EnumTypeForErrorCodes.SCUS1219.errorMsg());
				}
			}

		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS1220.name(), EnumTypeForErrorCodes.SCUS1220.errorMsg());
			log.error(utils.toJson(response.getError()), exception);
		}
		return response;
	}

	/**
	 * getAllPartialLoadsByStatus Service implementation
	 * 
	 * 
	 * @return ServiceResponse<Collection<LoadDetails>>
	 */
	@Override
	public ServiceResponse<Collection<LoadDetails>> getAllPartialLoadsByStatus() {
		log.info("getting all partial loads by status");
		ServiceResponse<Collection<LoadDetails>> response = new ServiceResponse<>();
		try {
			LoadAppointmentStatus status = loadAppointmentStatusRepo.findById((long) 0);

			Collection<LoadDetails> loadAppointments = loadDetailsRepo.findByLoadStatNbrId(status.getId());
			response.setData(loadAppointments);

		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS1221.name(), EnumTypeForErrorCodes.SCUS1221.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}
		return response;
	}

	/**
	 * generate load sequence Service implementation
	 * 
	 * @param String
	 * @return ServiceResponse<String>
	 */
	@Override
	public ServiceResponse<String> generateLoadSequenceNumber() {
		log.info("generating a sequence for load number");
		ServiceResponse<String> response = new ServiceResponse<>();
		try {
			String loadsequence;
			LoadDetails loadAppointments = loadDetailsRepo.findBylastRecord();
			if (loadAppointments != null) {

				String loadNumber = loadAppointments.getLoadNumber();

				long number = Long.parseLong(loadNumber) + 1;

				loadsequence = Long.toString(number);

			} else {
				loadsequence = "100001";

			}
			response.setData(loadsequence);

		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS1222.name(), EnumTypeForErrorCodes.SCUS1222.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}
		return response;
	}

	/**
	 * getAcceptedAndCompletedLoadsByDriver Service implementation
	 * 
	 * @param driverId
	 * @return ServiceResponse<Collection<LoadDetails>>
	 */
	@Override
	public ServiceResponse<Collection<LoadDetails>> getAcceptedAndCompletedLoadsByDriver(
			@Valid @PathVariable Long driverId) {
		log.info("getting all accepted and completed loads of a driver");
		ServiceResponse<Collection<LoadDetails>> response = new ServiceResponse<>();
		try {

			Collection<LoadDetails> loadDetails = loadDetailsRepo.getDriverAcceptedAndCompletedLoads(driverId);
			response.setData(loadDetails);
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS1223.name(), EnumTypeForErrorCodes.SCUS1223.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}
		return response;
	}

	/**
	 * getLoadsByPickupLocation Service implementation
	 * 
	 * @param locNbr
	 * @return ServiceResponse<Collection<LoadDetails>>
	 */
	@Override
	public ServiceResponse<Collection<LoadDetails>> getLoadsByPickupLocation(@NotNull @PathVariable String locNbr) {
		ServiceResponse<Collection<LoadDetails>> response = new ServiceResponse<>();
		try {
			Collection<LoadDetails> loadAppointments = loadDetailsRepo.getLoadsByPickUpLocations(locNbr);
			response.setData(loadAppointments);

		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS1225.name(), EnumTypeForErrorCodes.SCUS1225.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}
		return response;
	}

	/**
	 * getDriverCompletedAndPickupInspectionLoads Service implementation
	 * 
	 * @param driverId
	 * @return ServiceResponse<Collection<LoadDetails>>
	 */
	@Override
	public ServiceResponse<Collection<LoadDetails>> getDriverCompletedAndPickupInspectionLoads(
			@PathVariable Long driverId) {
		log.info("get driver completed loads but not completed the delivery inspection");
		ServiceResponse<Collection<LoadDetails>> response = new ServiceResponse<>();
		try {
			List<LoadDetails> loadsList = new ArrayList<>();
			Collection<LoadDetails> loads = loadDetailsRepo.findByDriverId(driverId);
			for (LoadDetails load : loads) {
				if (load.getLoadStatNbr().getId() == 5) {
					Collection<Inspection> inspectionsList = inspectionRepo.findByLoadNumber(load);
					for (Inspection inspection : inspectionsList) {
						if (inspection.getInspectionType().getId() == 1) {
							loadsList.add(load);
						}
					}
				}
			}
			response.setData(loadsList);

		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS1224.name(), EnumTypeForErrorCodes.SCUS1224.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}
		return response;
	}

	/**
	 * getSkidDropsByLoadNumber Service implementation
	 * 
	 * @param loadNumber
	 * @return ServiceResponse<Collection<SkidDrops>>
	 */
	@Override
	public ServiceResponse<Collection<SkidDrops>> getSkidDropsByLoadNumber(@NotNull @PathVariable String loadNumber) {
		ServiceResponse<Collection<SkidDrops>> response = new ServiceResponse<>();
		try {
			LoadDetails loadDetails = loadDetailsRepo.findByLoadNumber(loadNumber);
			Collection<SkidDrops> skidDrops = skidDropsRepo.findByLoadDetails(loadDetails);
			response.setData(skidDrops);

		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS1226.name(), EnumTypeForErrorCodes.SCUS1226.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}
		return response;
	}

	@Override
	public ServiceResponse<org.json.simple.JSONObject> getSkidDropsByLoadNumberAndInspectionType(
			@NotNull @PathVariable String loadNumber, @NotNull @PathVariable Long InspectionTypeId) {
		ServiceResponse<org.json.simple.JSONObject> response = new ServiceResponse<>();
		try {
			LoadDetails loadDetails = loadDetailsRepo.findByLoadNumber(loadNumber);
			Collection<SkidDrops> skidDrops = skidDropsRepo.findByLoadDetails(loadDetails);
			Driver driver = loadDetails.getDriver();
			List<SkidDrops> skidDropsList = new ArrayList<>();
			if (InspectionTypeId == 2) {
				for (SkidDrops skidDrop : skidDrops) {
					ServiceResponse<DistanceTime> distanceTime = locationService.getDistanceAndTimeInfoBasedOnGoogle(
							driver.getLatitude(), driver.getLongitude(), skidDrop.getDestLocNbr().getLatitude(),
							skidDrop.getDestLocNbr().getLongitude());
					if (skidDrop.getGeoStatus() == 1 && skidDrop.getPostInspectionStatus() == false) {
						if (distanceTime.getData().getDistance() <= 0.5) {
							skidDrop.setLoadDetails(loadDetails);
							skidDropsList.add(skidDrop);
						}

					}
				}
			} else {
				for (SkidDrops skidDrop : skidDrops) {
					skidDrop.setLoadDetails(loadDetails);
					skidDropsList.add(skidDrop);
				}
			}
			org.json.simple.JSONObject obj = new org.json.simple.JSONObject();
			obj.put("loadDetails", loadDetails);
			obj.put("skidDropsList", skidDropsList);
			response.setData(obj);
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS1226.name(), EnumTypeForErrorCodes.SCUS1226.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}
		return response;
	}

	/**
	 * deleteSkidDropById Service implementation
	 * 
	 * @param id
	 * @return ServiceResponse<Collection<SkidDrops>>
	 */
	@Override
	public ServiceResponse<String> deleteSkidDropById(@PathVariable Long id) {
		log.info("deleting skidDrop by id");
		ServiceResponse<String> response = new ServiceResponse<>();
		try {

			SkidDrops skidDrop = skidDropsRepo.findOne(id);
			System.out.println(skidDrop);
			if (skidDrop == null) {
				response.setError(EnumTypeForErrorCodes.SCUS1228.name(), EnumTypeForErrorCodes.SCUS1228.errorMsg());

			} else {

				List<CartonDetails> carton = cartonsRepo
						.findByLoadNumberAndDestinationLocation(skidDrop.getLoadDetails(), skidDrop.getDestLocNbr());
				if (!carton.isEmpty()) {
					response.setError(EnumTypeForErrorCodes.SCUS1232.name(), EnumTypeForErrorCodes.SCUS1232.errorMsg());
				} else {
					Integer totalCartons = skidDrop.getTotalCartons();
					LoadDetails loadDetails = skidDrop.getLoadDetails();
					loadDetails.setSkidDropsCount(loadDetails.getSkidDropsCount() - 1);
					loadDetails.setTotalCartons(loadDetails.getTotalCartons() - totalCartons);
					LoadDetails saveLoadDetails = loadDetailsRepo.save(loadDetails);

					skidDropsRepo.delete(skidDrop);

					if (saveLoadDetails.getAddedCartons() == saveLoadDetails.getTotalCartons()) {
						saveLoadDetails.setLoadStatNbr(loadAppointmentStatusRepo.findById(1l));
						loadDetailsRepo.save(saveLoadDetails);
					}

					response.setData("SkidDrop deleted successfully");
				}

			}
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS1229.name(), EnumTypeForErrorCodes.SCUS1229.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}
		return response;
	}

	@Override
	public ServiceResponse<Collection<LoadDetails>> getDriverAssignedLoads(@PathVariable Long driverId) {
		ServiceResponse<Collection<LoadDetails>> response = new ServiceResponse<>();

		try {
			Collection<LoadDetails> loadAppointments = loadDetailsRepo.getDriverNotCompletedLoads(driverId);
			response.setData(loadAppointments);
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS010.name(), EnumTypeForErrorCodes.SCUS010.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}

		return response;
	}

	/**
	 * getLoadWiseDistance service implementation
	 * 
	 * @param loadNumber
	 * @return ServiceResponse<Double>
	 * 
	 */
	@Override
	public ServiceResponse<Double> getLoadWiseDistance(@PathVariable String loadNumber) {

		log.info("calculate overall load wise distance");

		ServiceResponse<Double> response = new ServiceResponse<>();

		try {

			LoadDetails loadDetails = loadDetailsRepo.findByLoadNumber(loadNumber);

			Location origin = locationRepo.findByLocNbr(loadDetails.getOriginLocNbr().getLocNbr());

			List<SkidDrops> dropsList = new ArrayList<>();

			Collection<SkidDrops> skidDropsDetails = skidDropsRepo.findByLoadDetails(loadDetails);

			for (SkidDrops drop : skidDropsDetails) {
				dropsList.add(drop);
			}

			List<SkidDrops> result = dropsList.stream().sorted(
					(o1, o2) -> Double.valueOf(o1.getTotalMiles()).compareTo(Double.valueOf(o2.getTotalMiles())))
					.collect(Collectors.toList());

			Set<SkidDrops> resultSet = new LinkedHashSet<>(result);

			Double totalDistance = 0d;

			Location pickup = origin;

			for (SkidDrops drops : resultSet) {

				Location destination = locationRepo.findByLocNbr(drops.getDestLocNbr().getLocNbr());

				ServiceResponse<DistanceTime> distanceTime = locationService.getDistanceAndTimeInfoBasedOnGoogle(
						pickup.getLatitude(), pickup.getLongitude(), destination.getLatitude(),
						destination.getLongitude());

				totalDistance = totalDistance + distanceTime.getData().getDistance();

				pickup = destination;

			}

			response.setData(totalDistance);

		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS022.name(), EnumTypeForErrorCodes.SCUS022.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}

		return response;
	}

	/**
	 * getDriverAcceptedLoadDetails service implementation
	 * 
	 * @param loadNumber
	 * @return ServiceResponse<JSONObject>
	 * 
	 */
	@Override
	public ServiceResponse<JSONObject> getDriverAcceptedLoadDetails(@PathVariable String loadNumber) {
		log.info("get the driver accepted load details");
		ServiceResponse<JSONObject> response = new ServiceResponse<>();

		try {
			LoadDetails loadDetails = loadDetailsRepo.findByLoadNumber(loadNumber);
			Driver driver = loadDetails.getDriver();
			Double totalMiles = loadDetails.getTotalMiles();
			JSONObject obj = new JSONObject();
			if (loadDetails.getLoadStatNbr().getId() == 4 && loadDetails.getPreInspectionStatus() == true) {
				Collection<SkidDrops> skids = skidDropsRepo.findByLoadDetails(loadDetails);
				Integer completedCartons = 0;
				Integer totalCompletedCartons = 0;
				Double completedDistance = 0.0;
				List<SkidDrops> result = skids.stream().sorted((o1, o2) -> Double.valueOf(o1.getSkidOrderPerLoad())
						.compareTo(Double.valueOf(o2.getSkidOrderPerLoad()))).collect(Collectors.toList());
				Long skidOrder = 0l;
				Long value = 1l;
				for (SkidDrops skid : result) {
					if (skid.getSkidDropStatus() == true && skid.getPostInspectionStatus() == true) {
						value = value + 1;
						skidOrder = skid.getSkidOrderPerLoad();
						completedCartons = skid.getTotalCartons();
						totalCompletedCartons = totalCompletedCartons + completedCartons;
						Double distance = 0.0;
						if (value == 2) {
							ServiceResponse<DistanceTime> distanceTime = locationService
									.getDistanceAndTimeInfoBasedOnGoogle(loadDetails.getOriginLocNbr().getLatitude(),
											loadDetails.getOriginLocNbr().getLongitude(),
											skid.getDestLocNbr().getLatitude(), skid.getDestLocNbr().getLongitude());
							distance = distanceTime.getData().getDistance();

						} else {
							SkidDrops skidDrop = skidDropsRepo.findBySkidOrderPerLoadAndLoadDetails(skidOrder - 1,
									loadDetails);
							ServiceResponse<DistanceTime> distanceTime = locationService
									.getDistanceAndTimeInfoBasedOnGoogle(skidDrop.getDestLocNbr().getLatitude(),
											skidDrop.getDestLocNbr().getLongitude(), skid.getDestLocNbr().getLatitude(),
											skid.getDestLocNbr().getLongitude());
							distance = distanceTime.getData().getDistance();
						}
						completedDistance = completedDistance + distance;
					}
				}
				SkidDrops skidDrop = skidDropsRepo.findBySkidOrderPerLoadAndLoadDetails(skidOrder, loadDetails);
				Double totalCompletedMiles = 0.0;
				if (skidOrder == 0) {

					ServiceResponse<DistanceTime> distanceTime = locationService.getDistanceAndTimeInfoBasedOnGoogle(
							loadDetails.getOriginLocNbr().getLatitude(), loadDetails.getOriginLocNbr().getLongitude(),
							driver.getLatitude(), driver.getLongitude());

					totalCompletedMiles = completedDistance + distanceTime.getData().getDistance();
				} else {

					ServiceResponse<DistanceTime> distanceTime = locationService.getDistanceAndTimeInfoBasedOnGoogle(
							skidDrop.getDestLocNbr().getLatitude(), skidDrop.getDestLocNbr().getLongitude(),
							driver.getLatitude(), driver.getLongitude());

					totalCompletedMiles = completedDistance + distanceTime.getData().getDistance();
				}

				if (totalMiles < totalMiles - totalCompletedMiles) {
					obj.put("remainingMiles", totalMiles);
				} else {
					obj.put("remainingMiles", totalMiles - totalCompletedMiles);
				}
				obj.put("loadDetails", loadDetails);
				obj.put("remainingCartons", (loadDetails.getTotalCartons()) - totalCompletedCartons);
				obj.put("remainingSkids", (loadDetails.getSkidDrops().size()) - skidOrder);

			} else if (loadDetails.getLoadStatNbr().getId() == 2 || loadDetails.getLoadStatNbr().getId() == 4) {
				obj.put("loadDetails", loadDetails);
				obj.put("remainingCartons", loadDetails.getTotalCartons());
				obj.put("remainingSkids", loadDetails.getSkidDrops().size());
				obj.put("remainingMiles", totalMiles);
			}

			response.setData(obj);
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS023.name(), EnumTypeForErrorCodes.SCUS023.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}

		return response;
	}

}

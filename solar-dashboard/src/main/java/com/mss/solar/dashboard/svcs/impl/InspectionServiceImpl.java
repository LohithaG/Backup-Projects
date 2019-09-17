package com.mss.solar.dashboard.svcs.impl;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.apache.log4j.Logger;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.mss.solar.dashboard.common.EnumTypeForErrorCodes;
import com.mss.solar.dashboard.common.Utils;
import com.mss.solar.dashboard.domain.CartonDetails;
import com.mss.solar.dashboard.domain.CartonException;
import com.mss.solar.dashboard.domain.CartonStatus;
import com.mss.solar.dashboard.domain.DamageImages;
import com.mss.solar.dashboard.domain.Driver;
import com.mss.solar.dashboard.domain.ExceptionArea;
import com.mss.solar.dashboard.domain.ExceptionSeverity;
import com.mss.solar.dashboard.domain.ExceptionType;
import com.mss.solar.dashboard.domain.Inspection;
import com.mss.solar.dashboard.domain.InspectionCartonDetails;
import com.mss.solar.dashboard.domain.InspectionType;
import com.mss.solar.dashboard.domain.LoadDetails;
import com.mss.solar.dashboard.domain.Location;
import com.mss.solar.dashboard.domain.SkidDrops;
import com.mss.solar.dashboard.model.ServiceResponse;
import com.mss.solar.dashboard.repos.CartonDetailsRepository;
import com.mss.solar.dashboard.repos.CartonExceptionRepositoty;
import com.mss.solar.dashboard.repos.CartonStatusRepository;
import com.mss.solar.dashboard.repos.DamageImagesRepository;
import com.mss.solar.dashboard.repos.DriverRepository;
import com.mss.solar.dashboard.repos.ExceptionAreaRepository;
import com.mss.solar.dashboard.repos.ExceptionTypeRepository;
import com.mss.solar.dashboard.repos.ExpetionSeverityRepository;
import com.mss.solar.dashboard.repos.InspectionCartonDetailsRepository;
import com.mss.solar.dashboard.repos.InspectionRepository;
import com.mss.solar.dashboard.repos.InspectionTypeRepository;
import com.mss.solar.dashboard.repos.LoadDetailsRepository;
import com.mss.solar.dashboard.repos.LocationRepository;
import com.mss.solar.dashboard.repos.SkidDropsRepository;
import com.mss.solar.dashboard.svcs.InspectionService;
import com.mss.solar.dashboard.svcs.ReportService;

@RestController
@Validated
public class InspectionServiceImpl implements InspectionService {

	private static final Logger log = Logger.getLogger(InspectionServiceImpl.class);

	@Autowired
	private InspectionRepository inspectionRepo;

	@Autowired
	private InspectionTypeRepository inspectionTypeRepo;

	@Autowired
	private CartonStatusRepository cartonStatusRepo;

	@Autowired
	private LoadDetailsRepository loadRepo;

	@Autowired
	private DriverRepository driverRepo;

	@Autowired
	private CartonDetailsRepository cartonRepo;

	@Autowired
	private DamageImagesRepository damageImagesRepo;

	@Autowired
	private InspectionCartonDetailsRepository inspectionCartonDetailsRepo;

	@Autowired
	private ExceptionTypeRepository exceptionTypeRepo;

	@Autowired
	private ExceptionAreaRepository exceptionAreaRepo;

	@Autowired
	private ExpetionSeverityRepository expetionSeverityRepo;

	@Autowired
	private CartonExceptionRepositoty cartonExceptionRepo;

	@Autowired
	private LocationRepository locationRepo;

	@Autowired
	private SkidDropsRepository skidDropsRepo;

	@Autowired
	private ReportService reportsService;

	@Autowired
	private Utils utils;

	/**
	 * addInspection Service Implementation
	 * 
	 * @RequestBody inspectionDetails
	 * @return ServiceResponse<Inspection>
	 */
	@Override
	public ServiceResponse<InspectionCartonDetails> addCartonsForInspection(
			@Valid @RequestBody String inspectionDetails) {

		log.info("adding carton inspection details");

		ServiceResponse<InspectionCartonDetails> response = new ServiceResponse<>();
		try {

			Inspection newInspection = new Inspection();

			JSONObject inspectionObj = new JSONObject(inspectionDetails);

			LoadDetails loadObj = loadRepo.findByLoadNumber(inspectionObj.getString("loadNumber"));

			newInspection.setLoadNumber(loadObj);

			InspectionType inspectionTypeObj = inspectionTypeRepo.findById(inspectionObj.getLong("inspectionType"));

			newInspection.setInspectionType(inspectionTypeObj);

			Location location = locationRepo.findByLocNbr(inspectionObj.getString("locNbr"));
			newInspection.setLocation(location);

			Inspection inspectionExists = inspectionRepo.findByLoadNumberAndInspectionTypeAndLocation(loadObj,
					inspectionTypeObj, location);

			InspectionCartonDetails newInspectionCartonDetails = new InspectionCartonDetails();
			JSONObject jsonValue = inspectionObj.getJSONObject("cartonObj");

			CartonDetails cartonObj = cartonRepo.findById(jsonValue.getLong("id"));
			InspectionCartonDetails saveInspectionCartonDetails = null;

			if ((inspectionTypeObj.getId() == 1 && cartonObj.getPreInspectionStatus() == false)
					|| (inspectionTypeObj.getId() == 2 && cartonObj.getPostInspectionStatus() == false)) {

				if (inspectionExists == null) {
					Inspection saveInspectionDetails = inspectionRepo.save(newInspection);
					newInspectionCartonDetails.setInspection(saveInspectionDetails);
				} else {
					newInspectionCartonDetails.setInspection(inspectionExists);

				}

				newInspectionCartonDetails.setCartons(cartonObj);
				CartonStatus statusObj = cartonStatusRepo.findById(jsonValue.getLong("cartonStatus"));
				newInspectionCartonDetails.setCartonstatus(statusObj);

				Long status = jsonValue.getLong("cartonStatus");
				saveInspectionCartonDetails = inspectionCartonDetailsRepo.save(newInspectionCartonDetails);

				if (inspectionTypeObj.getId() == 1) {
					cartonObj.setPreInspectionStatus(true);
				} else {
					cartonObj.setPostInspectionStatus(true);
				}
				String updatedDate = jsonValue.getString("updatedDate");
				cartonObj.setUpdatedDate(updatedDate);
				cartonRepo.save(cartonObj);
				if (status == 2) {
					JSONObject obj = jsonValue.getJSONObject("exceptionObj");
					JSONArray exceptionArray = obj.getJSONArray("exceptionObjects");
					for (int i = 0; i < exceptionArray.length(); i++) {
						JSONObject cartonExceptionObj = exceptionArray.getJSONObject(i);
						CartonException newCartonException = new CartonException();

						ExceptionType exceptionType = exceptionTypeRepo
								.findById(cartonExceptionObj.getLong("exceptionType"));
						newCartonException.setExceptionType(exceptionType);

						ExceptionArea exceptionArea = exceptionAreaRepo
								.findById(cartonExceptionObj.getLong("exceptionArea"));
						newCartonException.setExceptionArea(exceptionArea);

						ExceptionSeverity exceptionSeverity = expetionSeverityRepo
								.findById(cartonExceptionObj.getLong("exceptionSeverity"));
						newCartonException.setExceptionSeverity(exceptionSeverity);

						newCartonException.setInspectionCartonDetails(saveInspectionCartonDetails);
						newCartonException.setComments(cartonExceptionObj.getString("comments"));
						String exceptionMsg = exceptionType.getId() + "-" + exceptionArea.getId() + "-"
								+ exceptionSeverity.getId();
						newCartonException.setExceptionMsg(exceptionMsg);
						CartonException cartonException1 = cartonExceptionRepo.save(newCartonException);

						JSONArray imageArray = cartonExceptionObj.getJSONArray("damageImages");

						for (int j = 0; j < imageArray.length(); j++) {

							JSONObject imageObject = imageArray.getJSONObject(j);

							DamageImages damageImages = new DamageImages();

							damageImages.setCartonException(cartonException1);
							damageImages.setDamageImage(imageObject.getString("image"));

							damageImagesRepo.save(damageImages);

						}

					}

				}
			} else {
				response.setError(EnumTypeForErrorCodes.SCUS1064.name(), EnumTypeForErrorCodes.SCUS1064.errorMsg());
			}
			response.setData(saveInspectionCartonDetails);

		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS1062.name(), EnumTypeForErrorCodes.SCUS1062.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}
		return response;
	}

	@Override
	public ServiceResponse<Inspection> addInspection(@RequestBody String inspectionDetails) {

		log.debug("add inspection details");

		ServiceResponse<Inspection> response = new ServiceResponse<>();
		try {

			JSONObject inspectionObj = new JSONObject(inspectionDetails);

			Long id = inspectionObj.getLong("id");
			Inspection inspectionExists = inspectionRepo.findById(id);
			if (inspectionExists != null) {
				if (inspectionExists.getDriverSignature() == null || inspectionExists.getInspectorSignature() == null) {

					Collection<InspectionCartonDetails> cartonDetailsList = inspectionCartonDetailsRepo
							.findByInspectionId(id);

					for (InspectionCartonDetails cartonDetails : cartonDetailsList) {
						CartonDetails carton = cartonDetails.getCartons();
						if (((inspectionExists.getInspectionType().getId() == 1)
								&& (carton.getPreInspectionStatus() == true))
								|| ((inspectionExists.getInspectionType().getId() == 2)
										&& (carton.getPostInspectionStatus() == true))) {

							inspectionExists.setDriverComment(inspectionObj.getString("driverComment"));

							inspectionExists.setInspectorComment(inspectionObj.getString("inspectorComment"));

							inspectionExists.setDriverSignature(inspectionObj.getString("driverSignature"));

							inspectionExists.setInspectorSignature(inspectionObj.getString("inspectorSignature"));
						}
					}
					if (inspectionExists.getInspectionType().getId() == 1) {
						LoadDetails loadDetais = inspectionExists.getLoadNumber();
						loadDetais.setPreInspectionStatus(true);
						loadRepo.save(loadDetais);

					}
					if (inspectionExists.getInspectionType().getId() == 2) {
						LoadDetails loadDetails = inspectionExists.getLoadNumber();
						loadDetails
								.setPostInspectionCompletedSkids((loadDetails.getPostInspectionCompletedSkids()) + 1);
						loadRepo.save(loadDetails);
						Location location = inspectionExists.getLocation();
						SkidDrops skidDrop = skidDropsRepo.findByLoadDetailsAndDestLocNbr(loadDetails, location);
						skidDrop.setPostInspectionStatus(true);
						skidDropsRepo.save(skidDrop);

						Map<String, String> dataMap = new HashMap<>();
						dataMap.put("RP_loadnum", loadDetails.getLoadNumber());
						dataMap.put("RP_location", location.getLocNbr());

						reportsService.deliveryReport("Delivery_Report", dataMap);

						Collection<SkidDrops> skidDropsList = skidDropsRepo.findByLoadDetails(loadDetails);
						List<SkidDrops> skids = new ArrayList<>();
						for (SkidDrops skid : skidDropsList) {
							if (skid.getPostInspectionStatus() == false) {
								skids.add(skid);
							}
						}
						if (skids.size() == 0) {
							Map<String, String> dataMap1 = new HashMap<>();
							dataMap1.put("RP_loadnum", loadDetails.getLoadNumber());
							reportsService.expensesReport("Expenses_Report", dataMap1);
							reportsService.tripConsolidatedReport("Trip_Consolidated_Report", dataMap1);
						}
					}

				} else {
					response.setError(EnumTypeForErrorCodes.SCUS1068.name(), EnumTypeForErrorCodes.SCUS1068.errorMsg());
				}
			} else {
				response.setError(EnumTypeForErrorCodes.SCUS1063.name(), EnumTypeForErrorCodes.SCUS1063.errorMsg());
			}
			inspectionRepo.save(inspectionExists);
			response.setData(inspectionExists);

		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS1051.name(), EnumTypeForErrorCodes.SCUS1051.errorMsg());
			log.error(utils.toJson(response.getError()), exception);

		}
		return response;
	}

	/**
	 * getAllInspectionDetails Service Implementation
	 * 
	 * @return ServiceResponse<Collection<Inspection>>
	 */
	@Override
	public ServiceResponse<Collection<Inspection>> getAllInspectionDetails() {
		log.debug("get all inspection details");
		ServiceResponse<Collection<Inspection>> response = new ServiceResponse<>();
		try {

			Collection<Inspection> inspectionDetails = inspectionRepo.findAll();
			response.setData(inspectionDetails);

		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS1056.name(), EnumTypeForErrorCodes.SCUS1056.errorMsg());
			log.error(utils.toJson(response.getError()), exception);

		}
		return response;
	}

	/**
	 * deleteInspection Service Implementation
	 * 
	 * @Param id
	 * @return ServiceResponse<String>
	 */
	@Override
	public ServiceResponse<String> deleteInspection(@PathVariable Long id) {

		log.info("delete inspection by id");
		ServiceResponse<String> response = new ServiceResponse<>();
		try {

			Inspection inspection = inspectionRepo.findById(id);

			Collection<InspectionCartonDetails> carDetails = inspectionCartonDetailsRepo.findByInspectionId(id);
			if (carDetails.size() == 0) {
				inspectionRepo.delete(inspection);
				response.setData("inspection deleted successfully");
			} else {
				response.setError(EnumTypeForErrorCodes.SCUS1059.name(), EnumTypeForErrorCodes.SCUS1059.errorMsg());
			}

		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS1053.name(), EnumTypeForErrorCodes.SCUS1053.errorMsg());
			log.error(utils.toJson(response.getError()), exception);

		}
		return response;
	}

	@Override
	public ServiceResponse<Inspection> updateInspection(Inspection inspection) {
		// TODO Auto-generated method stub
		return null;
	}

	/**
	 * getInspectionByLoad Service Implementation
	 * 
	 * @Param loadNumber
	 * @return ServiceResponse<Collection<Inspection>>
	 */
	@Override
	public ServiceResponse<Collection<Inspection>> getInspectionByLoad(@PathVariable String loadNumber) {
		log.debug("get inspection detais based on load number");
		ServiceResponse<Collection<Inspection>> response = new ServiceResponse<>();
		try {
			LoadDetails load = loadRepo.findByLoadNumber(loadNumber);
			if (load != null) {
				Collection<Inspection> inspectionDetails = inspectionRepo.findByLoadNumber(load);
				response.setData(inspectionDetails);
			} else {

			}

		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS1055.name(), EnumTypeForErrorCodes.SCUS1055.errorMsg());
			log.error(utils.toJson(response.getError()), exception);

		}
		return response;
	}

	/**
	 * getInspectionById Service Implementation
	 * 
	 * @Param id
	 * @return ServiceResponse<Inspection>
	 */
	@Override
	public ServiceResponse<Inspection> getInspectionById(@PathVariable Long id) {
		log.debug("get inspection details based on id");
		ServiceResponse<Inspection> response = new ServiceResponse<>();
		try {

			Inspection inspection = inspectionRepo.findById(id);
			response.setData(inspection);

		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS1054.name(), EnumTypeForErrorCodes.SCUS1054.errorMsg());
			log.error(utils.toJson(response.getError()), exception);

		}
		return response;
	}

	/**
	 * geAllInspectionTypes Service Implementation
	 * 
	 * @return ServiceResponse<Collection<InspectionType>>
	 */
	@Override
	public ServiceResponse<Collection<InspectionType>> geAllInspectionTypes() {
		log.info("get all inspection types");
		ServiceResponse<Collection<InspectionType>> response = new ServiceResponse<>();
		try {

			Collection<InspectionType> inspectionTypes = inspectionTypeRepo.findAll();
			response.setData(inspectionTypes);

		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS1057.name(), EnumTypeForErrorCodes.SCUS1057.errorMsg());
			log.error(utils.toJson(response.getError()), exception);

		}
		return response;
	}

	/**
	 * geAllCarStatuses Service Implementation
	 * 
	 * @return ServiceResponse<Collection<CartonStatus>>
	 */
	@Override
	public ServiceResponse<Collection<CartonStatus>> geAllCartonStatuses() {
		log.info("get all car statuses");
		ServiceResponse<Collection<CartonStatus>> response = new ServiceResponse<>();
		try {

			Collection<CartonStatus> carStatuses = cartonStatusRepo.findAll();
			response.setData(carStatuses);

		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS1058.name(), EnumTypeForErrorCodes.SCUS1058.errorMsg());
			log.error(utils.toJson(response.getError()), exception);

		}
		return response;
	}

	/**
	 * getDamageImagesByLoad Service Implementation
	 * 
	 * @param loadNumber,inspectionTypeId
	 * @return ServiceResponse<Collection<org.json.simple.JSONObject>>
	 */
	@Override
	public ServiceResponse<Collection<org.json.simple.JSONObject>> getDamageImagesByLoad(
			@PathVariable String loadNumber, @PathVariable Long id) {
		log.debug("get inspection detais based on load number");
		ServiceResponse<Collection<org.json.simple.JSONObject>> response = new ServiceResponse<>();
		try {

			LoadDetails load = loadRepo.findByLoadNumber(loadNumber);
			InspectionType inspectionType = inspectionTypeRepo.findById(id);
			if (load != null) {
				Collection<Inspection> inspectionList = inspectionRepo.findByLoadNumberAndInspectionType(load,
						inspectionType);
				for (Inspection inspection : inspectionList) {
					Collection<InspectionCartonDetails> carDetails = inspectionCartonDetailsRepo
							.findByInspectionId(inspection.getId());
					List<org.json.simple.JSONObject> damageImagesList2 = new ArrayList<>();
					for (InspectionCartonDetails cartonDetails1 : carDetails) {
						List<org.json.simple.JSONObject> damageImagesList1 = new ArrayList<>();
						org.json.simple.JSONObject obj = new org.json.simple.JSONObject();

						obj.put("cartonId", cartonDetails1.getCartons().getCartonId());
						obj.put("length", cartonDetails1.getCartons().getLength());
						obj.put("width", cartonDetails1.getCartons().getWidth());
						obj.put("height", cartonDetails1.getCartons().getHeight());
						obj.put("weight", cartonDetails1.getCartons().getWeight());

						Collection<CartonException> cartonExceptionsList = cartonExceptionRepo
								.findByInspectionCartonDetails(cartonDetails1);
						for (CartonException cartonException : cartonExceptionsList) {
							Collection<DamageImages> damageImagesList = damageImagesRepo
									.findByCartonException(cartonException);

							for (DamageImages images : damageImagesList) {
								org.json.simple.JSONObject obj1 = new org.json.simple.JSONObject();
								obj1.put("damageImages", images.getDamageImage());
								damageImagesList1.add(obj1);
							}
						}
						obj.put("loadNumber", loadNumber);
						obj.put("damage", damageImagesList1);
						obj.put("driverSignature", inspection.getDriverSignature());
						obj.put("inspectorSignature", inspection.getInspectorSignature());
						obj.put("inspectorComment", inspection.getInspectorComment());
						obj.put("driverComment", inspection.getDriverComment());
						damageImagesList2.add(obj);
					}
					response.setData(damageImagesList2);
				}
			} else {
				response.setError(EnumTypeForErrorCodes.SCUS002.name(), EnumTypeForErrorCodes.SCUS002.errorMsg());
			}

		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS1060.name(), EnumTypeForErrorCodes.SCUS1060.errorMsg());
			log.error(utils.toJson(response.getError()), exception);

		}
		return response;

	}

	/**
	 * getDeliveryInspectionCompledLoadsCarStatuses Service Implementation
	 * 
	 * @param loadNumber
	 * 
	 * @return ServiceResponse<Collection<InspectionCartonDetails>>
	 */
	@Override
	public ServiceResponse<Collection<InspectionCartonDetails>> getDeliveryInspectionCompledLoadsCartonStatuses(
			@PathVariable String loadNumber) {
		log.debug("get delivery inspection completed loads car statuses");
		ServiceResponse<Collection<InspectionCartonDetails>> response = new ServiceResponse<>();
		try {
			LoadDetails load = loadRepo.findByLoadNumber(loadNumber);

			Collection<Inspection> inspectionList = inspectionRepo.findByLoadNumber(load);

			for (Inspection inspection : inspectionList) {
				if (inspection.getInspectionType().getId() == 2) {
					Collection<InspectionCartonDetails> carDetails = inspectionCartonDetailsRepo
							.findByInspectionId(inspection.getId());
					response.setData(carDetails);
				}
			}

		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS1061.name(), EnumTypeForErrorCodes.SCUS1061.errorMsg());
			log.error(utils.toJson(response.getError()), exception);

		}
		return response;
	}

	/**
	 * geAllExceptionAreas Service Implementation
	 * 
	 * 
	 * @return ServiceResponse<Collection<ExceptionArea>>
	 */
	@Override
	public ServiceResponse<Collection<ExceptionArea>> geAllExceptionAreas() {
		log.info("get all exception areas");
		ServiceResponse<Collection<ExceptionArea>> response = new ServiceResponse<>();
		try {

			Collection<ExceptionArea> exceptionAreas = exceptionAreaRepo.findAll();
			response.setData(exceptionAreas);

		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS1065.name(), EnumTypeForErrorCodes.SCUS1065.errorMsg());
			log.error(utils.toJson(response.getError()), exception);

		}
		return response;
	}

	/**
	 * geAllExceptionTypes Service Implementation
	 * 
	 * 
	 * @return ServiceResponse<Collection<ExceptionType>>
	 */
	@Override
	public ServiceResponse<Collection<ExceptionType>> geAllExceptionTypes() {
		log.info("get all exception types");
		ServiceResponse<Collection<ExceptionType>> response = new ServiceResponse<>();
		try {

			Collection<ExceptionType> exceptionTypes = exceptionTypeRepo.findAll();
			response.setData(exceptionTypes);

		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS1066.name(), EnumTypeForErrorCodes.SCUS1066.errorMsg());
			log.error(utils.toJson(response.getError()), exception);

		}
		return response;
	}

	/**
	 * getAllExceptionSeverities Service Implementation
	 * 
	 * 
	 * @return ServiceResponse<Collection<ExceptionSeverity>>
	 */
	@Override
	public ServiceResponse<Collection<ExceptionSeverity>> getAllExceptionSeverities() {
		log.info("get all exception severities");
		ServiceResponse<Collection<ExceptionSeverity>> response = new ServiceResponse<>();
		try {

			Collection<ExceptionSeverity> exceptionSeverities = expetionSeverityRepo.findAll();
			response.setData(exceptionSeverities);

		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS1067.name(), EnumTypeForErrorCodes.SCUS1067.errorMsg());
			log.error(utils.toJson(response.getError()), exception);

		}
		return response;
	}

	@Override
	public ServiceResponse<Collection<org.json.simple.JSONObject>> getDamageImagesByCarton(@PathVariable Long cartonId,
			@PathVariable Long inspectionypeId) {
		log.info("get all exception severities");
		ServiceResponse<Collection<org.json.simple.JSONObject>> response = new ServiceResponse<>();
		try {
			CartonDetails carton = cartonRepo.findById(cartonId);
			InspectionType inspectionType = inspectionTypeRepo.findById(inspectionypeId);
			List<org.json.simple.JSONObject> damageImagesList2 = new ArrayList<>();
			Collection<Inspection> inspectionList = inspectionRepo
					.findByLoadNumberAndInspectionType(carton.getLoadNumber(), inspectionType);

			// Inspection inspection = inspectionRepo.findById(inspectionId);
			for (Inspection inspection : inspectionList) {
				InspectionCartonDetails inspectionCartonDetails = inspectionCartonDetailsRepo
						.findByInspectionIdAndCartons(inspection, carton);

				Collection<CartonException> cartonExceptionsList = cartonExceptionRepo
						.findByInspectionCartonDetails(inspectionCartonDetails);

				for (CartonException cartonException : cartonExceptionsList) {
					List<org.json.simple.JSONObject> damageImagesList1 = new ArrayList<>();
					org.json.simple.JSONObject damageImagesObj = new org.json.simple.JSONObject();
					Collection<DamageImages> damageImagesList = damageImagesRepo.findByCartonException(cartonException);
					org.json.simple.JSONObject obj = new org.json.simple.JSONObject();
					obj.put("exceptionType", cartonException.getExceptionType());
					obj.put("exceptionArea", cartonException.getExceptionArea());
					obj.put("exceptionSeverity", cartonException.getExceptionSeverity());
					obj.put("comments", cartonException.getComments());
					obj.put("exceptionMsg", cartonException.getExceptionMsg());

					for (DamageImages damageImage : damageImagesList) {
						org.json.simple.JSONObject obj1 = new org.json.simple.JSONObject();
						obj1.put("damageImages", damageImage.getDamageImage());
						damageImagesList1.add(obj1);
					}
					damageImagesObj.put("exceptionDetails", obj);
					damageImagesObj.put("damageImages", damageImagesList1);

					damageImagesList2.add(damageImagesObj);
				}

			}
			response.setData(damageImagesList2);
		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS1067.name(), EnumTypeForErrorCodes.SCUS1067.errorMsg());
			log.error(utils.toJson(response.getError()), exception);

		}
		return response;
	}

	@Override
	public ServiceResponse<Collection<SkidDrops>> getDriverAcceptedAndGeofenceEnteredLoads(
			@PathVariable String loadNumber) {
		log.info("get driver accepeted and geofence entered loads");
		ServiceResponse<Collection<SkidDrops>> response = new ServiceResponse<>();
		try {
			List<SkidDrops> skidDropsList1 = new ArrayList<>();
			LoadDetails loadDetails = loadRepo.findByLoadNumber(loadNumber);
			if (loadDetails != null) {
				Collection<SkidDrops> skidDropsList = skidDropsRepo.findByLoadDetails(loadDetails);
				for (SkidDrops skidDrop : skidDropsList) {
					if (skidDrop.getGeoStatus() == 1) {
						List<CartonDetails> cartonsList = new ArrayList<>();
						Collection<CartonDetails> cartonDetailsList = cartonRepo
								.findByDestinationLocation(skidDrop.getDestLocNbr());
						for (CartonDetails cartonDetails : cartonDetailsList) {
							if (cartonDetails.getPostInspectionStatus() == false) {
								cartonsList.add(cartonDetails);
							}
						}
						if (cartonsList.size() != 0) {
							skidDropsList1.add(skidDrop);
						}
					}
				}
				response.setData(skidDropsList1);
			}
		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS1113.name(), EnumTypeForErrorCodes.SCUS1113.errorMsg());
			log.error(utils.toJson(response.getError()), exception);

		}
		return response;
	}
}

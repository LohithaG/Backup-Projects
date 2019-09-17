package com.mss.solar.dashboard.svcs.impl;

import java.awt.Color;
import java.awt.Font;
import java.awt.Graphics2D;
import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.imageio.ImageIO;
import javax.validation.constraints.NotNull;

import org.apache.commons.lang.RandomStringUtils;
import org.apache.log4j.Logger;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.cloud.client.ServiceInstance;
import org.springframework.cloud.client.discovery.DiscoveryClient;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.scheduling.annotation.Async;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestTemplate;

import com.google.zxing.BarcodeFormat;
import com.google.zxing.client.j2se.MatrixToImageWriter;
import com.google.zxing.common.BitMatrix;
import com.google.zxing.qrcode.QRCodeWriter;
import com.mss.solar.dashboard.common.EnumTypeForErrorCodes;
import com.mss.solar.dashboard.common.Utils;
import com.mss.solar.dashboard.domain.CartonDetails;
import com.mss.solar.dashboard.domain.Inspection;
import com.mss.solar.dashboard.domain.InspectionCartonDetails;
import com.mss.solar.dashboard.domain.InspectionType;
import com.mss.solar.dashboard.domain.LoadDetails;
import com.mss.solar.dashboard.domain.Location;
import com.mss.solar.dashboard.domain.SkidDrops;
import com.mss.solar.dashboard.domain.WeightMeasurement;
import com.mss.solar.dashboard.model.ServiceResponse;
import com.mss.solar.dashboard.repos.CartonDetailsRepository;
import com.mss.solar.dashboard.repos.InspectionCartonDetailsRepository;
import com.mss.solar.dashboard.repos.InspectionRepository;
import com.mss.solar.dashboard.repos.InspectionTypeRepository;
import com.mss.solar.dashboard.repos.LoadAppointmentStatusRepository;
import com.mss.solar.dashboard.repos.LoadDetailsRepository;
import com.mss.solar.dashboard.repos.LocationRepository;
import com.mss.solar.dashboard.repos.SkidDropsRepository;
import com.mss.solar.dashboard.repos.WeightMeasurementRepository;
import com.mss.solar.dashboard.svcs.CartonDetailsService;

@RestController
public class CartonDetailsServiceImpl implements CartonDetailsService {

	private static final Logger log = Logger.getLogger(CartonDetailsServiceImpl.class);

	@Autowired
	private DiscoveryClient discoveryClient;

	@Autowired
	private CartonDetailsRepository cartonDetailsRepo;

	@Autowired
	private LoadDetailsRepository loadDetailsRepo;

	@Autowired
	private LoadAppointmentStatusRepository loadStatusRepo;

	@Autowired
	private LocationRepository locationRepo;

	@Autowired
	private SkidDropsRepository skidDropsRepo;

	@Autowired
	private InspectionCartonDetailsRepository inspectionCartonDetailsRepo;

	@Autowired
	private InspectionTypeRepository inspectionTypeRepo;

	@Autowired
	private InspectionRepository inspectionRepo;

	@Autowired
	private WeightMeasurementRepository weightMeasurementRepo;

	@Autowired
	private Utils utils;

	@Value("${addLoadAppointmentEventId}")
	private String addLoadAppointmentEventId;

	@Value("${qrcodesWithoutId}")
	private String qrcodesWithoutId;

	@Value("${qrcodes}")
	private String qrcodes;

	/**
	 * addCarton Service Implementation
	 * 
	 * @RequestBody CartonDetails
	 * @return ServiceResponse<CartonDetails>
	 */
	@Override
	public ServiceResponse<List<CartonDetails>> addCarton(@RequestBody List<CartonDetails> cartonsList) {

		log.debug("Adding cartons details");
		ServiceResponse<List<CartonDetails>> response = new ServiceResponse<>();
		try {
			List<CartonDetails> cartonDetailsList = new ArrayList<>();
			for (CartonDetails carton : cartonsList) {

				LoadDetails loadDetails = loadDetailsRepo.findByLoadNumber(carton.getLoadNumber().getLoadNumber());
				Location destinationLocation = locationRepo.findByLocNbr(carton.getDestinationLocation().getLocNbr());
				SkidDrops skidDrop = skidDropsRepo.findByLoadDetailsAndDestLocNbr(loadDetails, destinationLocation);

				if (skidDrop.getCartonstatus() != 0) {
					response.setError(EnumTypeForErrorCodes.SCUS1301.name(), EnumTypeForErrorCodes.SCUS1301.errorMsg());
				} else {
					String cartonId = RandomStringUtils.randomAlphanumeric(16);
					String cartonId1 = cartonId.toUpperCase();
					carton.setCartonId(cartonId1);
					carton.setPreInspectionStatus(false);
					carton.setPostInspectionStatus(false);
					carton.setDestinationLocation(destinationLocation);
					carton.setPickupLocation(loadDetails.getOriginLocNbr());
					carton.setSkidDrops(skidDrop);
					int imageWidth = 150;
					int imageHeight = 120;

					String imageFormat = "png";

					BitMatrix bitMatrix = new QRCodeWriter().encode(cartonId, BarcodeFormat.QR_CODE, imageWidth,
							imageHeight);
					MatrixToImageWriter.writeToStream(bitMatrix, imageFormat,
							new FileOutputStream(new File(qrcodesWithoutId + cartonId1 + ".png")));

					BufferedImage myPicture = ImageIO.read(new File(qrcodesWithoutId + cartonId1 + ".png"));

					Graphics2D g = (Graphics2D) myPicture.getGraphics();
					g.setColor(Color.BLACK);
					g.setFont(new Font("Calibri", Font.CENTER_BASELINE, 12));
					g.drawString(cartonId1, 25, 115);

					ImageIO.write(myPicture, "png", new File(qrcodes + cartonId1 + ".png"));

					CartonDetails newcartons = cartonDetailsRepo.save(carton);
					addCartonToLoad(loadDetails, destinationLocation);
					cartonDetailsList.add(newcartons);

				}
			}
			response.setData(cartonDetailsList);
		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS1302.name(), EnumTypeForErrorCodes.SCUS1302.errorMsg());
			log.error(utils.toJson(response.getError()), exception);
		}
		return response;
	}

	/**
	 * 
	 * add carton details to skidDrops
	 */
	public ServiceResponse<SkidDrops> addCartonToLoad(LoadDetails loadDetails, Location destinationLocation) {
		log.debug("Adding Carton details to skidDrops ");

		ServiceResponse<SkidDrops> response = new ServiceResponse<>();
		try {

			SkidDrops skidDrop = skidDropsRepo.findByLoadDetailsAndDestLocNbr(loadDetails, destinationLocation);

			skidDrop.setAddedCartons(skidDrop.getAddedCartons() + 1);
			SkidDrops saveSkidDrop = skidDropsRepo.save(skidDrop);

			loadDetails.setAddedCartons(loadDetails.getAddedCartons() + 1);

			loadDetailsRepo.save(loadDetails);

			if (saveSkidDrop.getAddedCartons() == saveSkidDrop.getTotalCartons()) {

				saveSkidDrop.setCartonstatus(1);
				skidDropsRepo.save(saveSkidDrop);
			}

			Collection<SkidDrops> skids = skidDropsRepo.findByLoadDetails(loadDetails);
			List<SkidDrops> dropslist = new ArrayList<>();
			for (SkidDrops drops : skids) {
				if (drops.getCartonstatus() == 0) {
					dropslist.add(drops);
				}
			}
			if (dropslist.isEmpty()) {
				loadDetails.setLoadStatNbr(loadStatusRepo.findById((long) 1));

				loadDetailsRepo.save(loadDetails);

				Map<String, String> data = new HashMap<>();
				// 700-1
				data.put("serviceEventId", addLoadAppointmentEventId);
				data.put("loadNum", loadDetails.getLoadNumber());
				notifyAdminService(data, addLoadAppointmentEventId);
			}

		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS1303.name(), EnumTypeForErrorCodes.SCUS1303.errorMsg());
			log.error(utils.toJson(response.getError()), exception);

		}
		return response;
	}

	@Async
	public void notifyAdminService(Map<String, String> data, String serviceEventId) {

		// Sending email
		try {
			List<ServiceInstance> instances = discoveryClient.getInstances("solar-core");
			String baseURL = instances.get(0).getUri().toString();
			HttpEntity<Map<String, String>> request = new HttpEntity<>(data);
			RestTemplate restTemplate = new RestTemplate();

			String url = baseURL + "api/notifications/notify/" + serviceEventId + "/admins";

			restTemplate.exchange(url, HttpMethod.POST, request, Map.class);

		} catch (HttpClientErrorException e) {
			log.error(e.getStatusCode().toString());
		}
	}

	/**
	 * updateCarton Service Implementation
	 * 
	 * @RequestBody carton
	 * @return ServiceResponse<CartonDetails>
	 */
	@Override
	public ServiceResponse<CartonDetails> updateCarton(@RequestBody CartonDetails carton) {
		log.debug("Updating carton details");

		ServiceResponse<CartonDetails> response = new ServiceResponse<>();
		try {
			CartonDetails cartonExists = cartonDetailsRepo.findById(carton.getId());
			if (cartonExists != null) {

				LoadDetails loadDetails = loadDetailsRepo.findByLoadNumber(carton.getLoadNumber().getLoadNumber());
				if (loadDetails.getLoadStatNbr().getId() == 1 || loadDetails.getLoadStatNbr().getId() == 0) {
					cartonExists.setDestinationLocation(carton.getDestinationLocation());
					cartonExists.setPickupLocation(loadDetails.getOriginLocNbr());
					cartonExists.setLoadNumber(loadDetails);
					cartonExists.setHeight(carton.getHeight());
					cartonExists.setLength(carton.getLength());
					cartonExists.setWidth(carton.getWidth());
					cartonExists.setWeight(carton.getWeight());
					cartonExists.setUpdatedDate(carton.getUpdatedDate());
					cartonExists.setComment(carton.getComment());

					CartonDetails updateCartons = cartonDetailsRepo.save(cartonExists);

					response.setData(updateCartons);
				} else {
					response.setError(EnumTypeForErrorCodes.SCUS1304.name(), EnumTypeForErrorCodes.SCUS1304.errorMsg());
				}
			} else {
				response.setError(EnumTypeForErrorCodes.SCUS1305.name(), EnumTypeForErrorCodes.SCUS1305.errorMsg());
			}

		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS1306.name(), EnumTypeForErrorCodes.SCUS1306.errorMsg());
			log.error(utils.toJson(response.getError()), exception);

		}
		return response;
	}

	/**
	 * deleteCartons Service Implementation
	 * 
	 * @param id
	 * @return ServiceResponse<String>
	 */
	@Override
	public ServiceResponse<String> deleteCarton(@PathVariable Long id) {
		log.debug("Deleting cartons details");
		ServiceResponse<String> response = new ServiceResponse<>();
		try {
			CartonDetails cartons = cartonDetailsRepo.findById(id);

			SkidDrops skidDrop = skidDropsRepo.findByLoadDetailsAndDestLocNbr(cartons.getLoadNumber(),
					cartons.getDestinationLocation());
			LoadDetails loadDetails = loadDetailsRepo.findByLoadNumber(cartons.getLoadNumber().getLoadNumber());
			if (loadDetails.getLoadStatNbr().getId() == 0 || loadDetails.getLoadStatNbr().getId() == 1) {
				if (cartons != null) {
					cartonDetailsRepo.delete(cartons);
					skidDrop.setAddedCartons(skidDrop.getAddedCartons() - 1);
					skidDrop.setCartonstatus(0);
					skidDropsRepo.save(skidDrop);
					loadDetails.setAddedCartons(loadDetails.getAddedCartons() - 1);
					loadDetails.setLoadStatNbr(loadStatusRepo.findById(0L));
					loadDetailsRepo.save(loadDetails);
				}
				response.setData("carton deleted successfully");
			} else {
				response.setError(EnumTypeForErrorCodes.SCUS1314.name(), EnumTypeForErrorCodes.SCUS1314.errorMsg());
			}
		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS1307.name(), EnumTypeForErrorCodes.SCUS1307.errorMsg());
			log.error(utils.toJson(response.getError()), exception);
		}
		return response;
	}

	/**
	 * getAllCartons Service Implementation
	 * 
	 * @return ServiceResponse<Collection<CartonDetails>>
	 */
	@Override
	public ServiceResponse<Collection<CartonDetails>> getAllCartons() {
		log.debug("Getting all cartons details");
		ServiceResponse<Collection<CartonDetails>> response = new ServiceResponse<>();
		try {
			List<CartonDetails> cartonsList = cartonDetailsRepo.findAll();
			response.setData(cartonsList);
		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS1308.name(), EnumTypeForErrorCodes.SCUS1308.errorMsg());
			log.error(utils.toJson(response.getError()), exception);
		}
		return response;
	}

	/**
	 * getCartonById Service Implementation
	 * 
	 * @param id
	 * @return ServiceResponse<CartonDetails>
	 */
	@Override
	public ServiceResponse<CartonDetails> getCartonById(@PathVariable Long id) {
		log.debug("Getting cartons details by id");
		ServiceResponse<CartonDetails> response = new ServiceResponse<>();
		try {
			CartonDetails cartonDetails = cartonDetailsRepo.findById(id);

			if (cartonDetails != null) {
				response.setData(cartonDetails);
			} else {
				response.setError(EnumTypeForErrorCodes.SCUS1305.name(), EnumTypeForErrorCodes.SCUS1305.errorMsg());
			}
		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS1309.name(), EnumTypeForErrorCodes.SCUS1309.errorMsg());
			log.error(utils.toJson(response.getError()), exception);
		}
		return response;
	}

	/**
	 * getCartonIdById Service Implementation
	 * 
	 * @param id
	 * @return ServiceResponse<JSONObject>
	 */
	@Override
	public ServiceResponse<JSONObject> getCartonIdById(@PathVariable Long id) {
		log.debug("Getting cartonId by id");
		ServiceResponse<JSONObject> response = new ServiceResponse<>();
		try {
			CartonDetails cartonDetails = cartonDetailsRepo.findById(id);

			if (cartonDetails != null) {
				String cartonId = cartonDetails.getCartonId();
				File file = new File(qrcodesWithoutId + cartonId + ".png");
				JSONObject obj = new JSONObject();
				if (file.exists()) {
					try (FileInputStream fis = new FileInputStream(file);
							ByteArrayOutputStream bos = new ByteArrayOutputStream()) {

						byte[] buf = new byte[fis.available()];
						for (int readNum; (readNum = fis.read(buf)) != -1;) {
							bos.write(buf, 0, readNum);

							obj.put("imgageLocations", file);
							obj.put("imageName", file.getName());
							obj.put("binaryData", bos.toByteArray());
						}
					} catch (Exception e) {
						e.printStackTrace();

					}
					response.setData(obj);
				} else {
					response.setError(EnumTypeForErrorCodes.SCUS1305.name(), EnumTypeForErrorCodes.SCUS1305.errorMsg());
				}
			}
		} catch (

		Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS1310.name(), EnumTypeForErrorCodes.SCUS1310.errorMsg());
			log.error(utils.toJson(response.getError()), exception);
		}
		return response;
	}

	/**
	 * getCartonDetailsByCartonId Service Implementation
	 * 
	 * @param cartonId,loadNumber
	 * @return ServiceResponse<CartonDetails>
	 */
	@Override
	public ServiceResponse<CartonDetails> getCartonDetailsByCartonId(@PathVariable String cartonId,
			@PathVariable String loadNumber, @PathVariable Long inspectionTypeId) {
		log.debug("Getting cartons details by carton id");
		ServiceResponse<CartonDetails> response = new ServiceResponse<>();
		try {
			CartonDetails cartonDetails = cartonDetailsRepo.findByCartonId(cartonId);
			LoadDetails loadDetails = cartonDetails.getLoadNumber();

			if (loadDetails.getLoadNumber().equals(loadNumber)) {
				if (inspectionTypeId == 1 && cartonDetails.getPreInspectionStatus() == false) {
					response.setData(cartonDetails);
				} else if (inspectionTypeId == 2 && cartonDetails.getPostInspectionStatus() == false) {
					response.setData(cartonDetails);
				} else {
					response.setError(EnumTypeForErrorCodes.SCUS1311.name(), EnumTypeForErrorCodes.SCUS1311.errorMsg());
				}

			} else {
				response.setError(EnumTypeForErrorCodes.SCUS1312.name(), EnumTypeForErrorCodes.SCUS1312.errorMsg());
			}
		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS1313.name(), EnumTypeForErrorCodes.SCUS1313.errorMsg());
			log.error(utils.toJson(response.getError()), exception);
		}
		return response;
	}

	/**
	 * getAllCartonsByLoadNumber Service Implementation
	 * 
	 * @return ServiceResponse<Collection<CartonDetails>>
	 */
	@Override
	public ServiceResponse<Collection<CartonDetails>> getCartonDetailsByLoadNumber(@PathVariable String loadNumber) {
		log.debug("Getting all cartons details by load number");
		ServiceResponse<Collection<CartonDetails>> response = new ServiceResponse<>();
		try {
			LoadDetails loadDetails = loadDetailsRepo.findByLoadNumber(loadNumber);
			List<CartonDetails> cartonsList = cartonDetailsRepo.findByLoadNumber(loadDetails);
			response.setData(cartonsList);
		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS1315.name(), EnumTypeForErrorCodes.SCUS1315.errorMsg());
			log.error(utils.toJson(response.getError()), exception);
		}
		return response;
	}

	/**
	 * getCartonByLoadNumber Service Implementation
	 * 
	 * @param loadNumber
	 * @return ServiceResponse<List<JSONObject>>
	 */
	@Override
	public ServiceResponse<List<JSONObject>> getCartonByLoadNumberWithStatus(@PathVariable String loadNumber,
			@PathVariable Long inspectionTypeId, @PathVariable String locNbr) {
		log.debug("Getting cartons details by load number");
		ServiceResponse<List<JSONObject>> response = new ServiceResponse<>();

		try {
			LoadDetails loadDetails = loadDetailsRepo.findByLoadNumber(loadNumber);

			if (loadDetails != null) {

				InspectionType insepctionType = inspectionTypeRepo.findById(inspectionTypeId);
				Location location = locationRepo.findByLocNbr(locNbr);
				Inspection inspection = inspectionRepo.findByLoadNumberAndInspectionTypeAndLocation(loadDetails,
						insepctionType, location);
				Collection<CartonDetails> cartonDetailsList = null;
				if (inspectionTypeId == 2) {
					cartonDetailsList = cartonDetailsRepo.findByLoadNumberAndDestinationLocation(loadDetails, location);
				} else {
					cartonDetailsList = cartonDetailsRepo.findByLoadNumberAndPickupLocation(loadDetails, location);
				}
				String status = null;
				if (inspection != null) {
					Collection<InspectionCartonDetails> cartonExists = inspectionCartonDetailsRepo
							.findByInspectionId(inspection.getId());
					List<JSONObject> objList = new ArrayList<>();
					List<CartonDetails> cartonsList = new ArrayList<>();
					for (CartonDetails cartonDetails : cartonDetailsList) {
						for (InspectionCartonDetails cartonInspection : cartonExists) {
							if ((cartonDetails.getId()) == (cartonInspection.getCartons().getId())) {
								cartonsList.add(cartonDetails);
							}
						}
					}
					for (CartonDetails cartonDetails : cartonsList) {
						InspectionCartonDetails cartonExists1 = inspectionCartonDetailsRepo
								.findByInspectionIdAndCartons(inspection, cartonDetails);
						JSONObject obj = new JSONObject();
						obj.put("cartons", cartonExists1.getCartons());
						obj.put("status", cartonExists1.getCartonstatus().getStatus());
						obj.put("inspection", inspection);
						objList.add(obj);
						response.setData(objList);
					}
					cartonDetailsList.removeAll(cartonsList);
					for (CartonDetails cartonDetails : cartonDetailsList) {
						JSONObject obj = new JSONObject();
						obj.put("cartons", cartonDetails);
						obj.put("status", "Validate");
						objList.add(obj);
						response.setData(objList);
					}
				} else {
					status = "Validate";
					if (inspectionTypeId == 2) {
						cartonDetailsList = cartonDetailsRepo.findByLoadNumberAndDestinationLocation(loadDetails,
								location);
					} else {
						cartonDetailsList = cartonDetailsRepo.findByLoadNumberAndPickupLocation(loadDetails, location);
					}
					List<JSONObject> objList = new ArrayList<>();
					for (CartonDetails carton : cartonDetailsList) {
						JSONObject obj1 = new JSONObject();
						obj1.put("cartons", carton);
						obj1.put("status", status);
						objList.add(obj1);
						response.setData(objList);
					}

				}
			} else {
				response.setError(EnumTypeForErrorCodes.SCUS1107.name(), EnumTypeForErrorCodes.SCUS1107.errorMsg());
			}
		} catch (

		Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS1106.name(), EnumTypeForErrorCodes.SCUS1106.errorMsg());
			log.error(utils.toJson(response.getError()), exception);
		}
		return response;
	}

	/**
	 * getCartonsBySkidId Service Implementation
	 * 
	 * @return ServiceResponse<Collection<CartonDetails>>
	 */
	@Override
	public ServiceResponse<List<CartonDetails>> getCartonsBySkidId(@NotNull @PathVariable Long skidId) {
		log.debug("Getting all cartons details by skid id");
		ServiceResponse<List<CartonDetails>> response = new ServiceResponse<>();
		try {
			SkidDrops skidDetails = skidDropsRepo.findOne(skidId);
			if (skidDetails.getGeoStatus() == 1) {
				List<CartonDetails> cartonsList = cartonDetailsRepo.findByLoadNumberAndDestinationLocation(
						skidDetails.getLoadDetails(), skidDetails.getDestLocNbr());

				response.setData(cartonsList);
			}
		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS1316.name(), EnumTypeForErrorCodes.SCUS1316.errorMsg());
			log.error(utils.toJson(response.getError()), exception);
		}
		return response;
	}

	@Override
	public ServiceResponse<CartonDetails> getCartonDetailsByCartonIdForSkidLevel(@PathVariable String cartonId,
			@PathVariable String loadNumber, @PathVariable Long inspectionTypeId, @PathVariable Long skidId) {
		log.debug("Getting cartons details by load number");
		ServiceResponse<CartonDetails> response = new ServiceResponse<>();
		try {
			SkidDrops skidDrop = skidDropsRepo.findById(skidId);
			CartonDetails cartonDetails = cartonDetailsRepo.findByCartonId(cartonId);
			LoadDetails loadDetails = cartonDetails.getLoadNumber();
			if (cartonDetails.getSkidDrops().getId() == skidDrop.getId()) {
				if (loadDetails.getLoadNumber().equals(loadNumber)) {
					if (inspectionTypeId == 1 && cartonDetails.getPreInspectionStatus() == false) {
						response.setData(cartonDetails);
					} else if (inspectionTypeId == 2 && cartonDetails.getPostInspectionStatus() == false) {
						response.setData(cartonDetails);
					} else {
						response.setError(EnumTypeForErrorCodes.SCUS1311.name(),
								EnumTypeForErrorCodes.SCUS1311.errorMsg());
					}

				} else {
					response.setError(EnumTypeForErrorCodes.SCUS1312.name(), EnumTypeForErrorCodes.SCUS1312.errorMsg());
				}
			} else {
				response.setError(EnumTypeForErrorCodes.SCUS1317.name(), EnumTypeForErrorCodes.SCUS1317.errorMsg());
			}

		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS1313.name(), EnumTypeForErrorCodes.SCUS1313.errorMsg());
			log.error(utils.toJson(response.getError()), exception);
		}
		return response;
	}

	@Override
	public ServiceResponse<Collection<WeightMeasurement>> getAllWeightMeasurements() {

		log.debug("Getting all weight measurement types");
		ServiceResponse<Collection<WeightMeasurement>> response = new ServiceResponse<>();
		try {
			List<WeightMeasurement> measurementsList = weightMeasurementRepo.findAll();
			response.setData(measurementsList);
		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS1318.name(), EnumTypeForErrorCodes.SCUS1318.errorMsg());
			log.error(utils.toJson(response.getError()), exception);
		}
		return response;

	}

}

package com.mbb.mbbplatform.svcs.impl;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.mbb.mbbplatform.common.EnumTypeForErrorCodes;
import com.mbb.mbbplatform.domain.Facility;
import com.mbb.mbbplatform.domain.Inventory;
import com.mbb.mbbplatform.domain.InventoryItem;
import com.mbb.mbbplatform.domain.InventoryItemStatus;
import com.mbb.mbbplatform.domain.InventoryMovingStatus;
import com.mbb.mbbplatform.domain.PackageDetails;
import com.mbb.mbbplatform.domain.SelfShipment;
import com.mbb.mbbplatform.domain.ShippingAggregator;
import com.mbb.mbbplatform.domain.TransferInventory;
import com.mbb.mbbplatform.domain.TransferLocation;
import com.mbb.mbbplatform.model.ServiceResponse;
import com.mbb.mbbplatform.model.Utils;
import com.mbb.mbbplatform.repos.FacilityRepository;
import com.mbb.mbbplatform.repos.InventoryItemRepository;
import com.mbb.mbbplatform.repos.InventoryItemStatusRepository;
import com.mbb.mbbplatform.repos.InventoryMovingStatusRepository;
import com.mbb.mbbplatform.repos.InventoryRepository;
import com.mbb.mbbplatform.repos.PackageDetailsRepository;
import com.mbb.mbbplatform.repos.SelfShipmentRepository;
import com.mbb.mbbplatform.repos.ShippingAggregatorRepository;
import com.mbb.mbbplatform.repos.TransferInventoryRepository;
import com.mbb.mbbplatform.repos.TransferLocationRepository;
import com.mbb.mbbplatform.svcs.TransferInventoryService;

@RestController
@SuppressWarnings("unchecked")
public class TransferInventoryServiceImpl implements TransferInventoryService {

	private static Logger log = LoggerFactory.getLogger(TransferInventoryServiceImpl.class);

	@Autowired
	private Utils utils;
	@Autowired
	private TransferInventoryRepository transferInventoryRepo;

	@Autowired
	private TransferLocationRepository transferLocationRepo;

	@Autowired
	private InventoryMovingStatusRepository inventoryMovingStatusRepo;

	@Autowired
	private SelfShipmentRepository selfShipmentRepo;

	@Autowired
	private ShippingAggregatorRepository shippingAggregatorRepo;

	@Autowired
	private InventoryItemRepository inventoryItemRepo;

	@Autowired
	private FacilityRepository facilityRepo;

	@Autowired
	private InventoryItemStatusRepository inventoryItemStatusRepo;

	@Autowired
	private PackageDetailsRepository packageDetailsRepo;

	@Autowired
	private InventoryRepository inventoryRepo;

	@Autowired
	private TransferDocumentServiceImpl transferDocumentServiceImpl;

	@Autowired
	private PackageDetailsServiceImpl packageDetailsServiceImpl;

	public static final String SHIPPINGAGGREGATOR = "shippingAggregator";
	public static final String TRANSPORTTYPE = "transportType";
	public static final String TRACKINGNUMBER = "trackingNumber";
	public static final String COURIERNAME = "courierName";
	public static final String FACILITY = "facility";
	public static final String PHONENUMBER = "phoneNumber";
	public static final String DRIVERALTERNATENUMBER = "driverAlternateNumber";
	public static final String VEHICLENUMBER = "VehicleNumber";
	public static final String DRIVERNAME = "driverName";
	public static final String SELFSHIPMENT = "selfShipment";
	public static final String TRANSFERINVENTORY = "transferInventory";
	public static final String SKULIST = "skuList";
	public static final String TOFACILITY = "toFacility";
	public static final String FROMFACILITY = "fromFacility";

	private static final String RECEIVEDDATE = "receivedDate";

	@Override
	public ServiceResponse<TransferInventory> addTransferInventory(
			@Valid @RequestBody List<PackageDetails> listOfpackageDetails, @Valid @PathVariable String fromLocation,
			@Valid @PathVariable String toLocation) {
		log.info("adding transfer Inventory");
		ServiceResponse<TransferInventory> response = new ServiceResponse<>();
		Long totalnumberOfskus = 0l;
		Long totalnumberOfProducts = 0l;
		try {
			for (PackageDetails packageDetails : listOfpackageDetails) {
				totalnumberOfProducts = packageDetails.getQuantityToMove() + totalnumberOfProducts;
				totalnumberOfskus++;
			}
			String packageName = fromLocation + "_" + toLocation;

			TransferLocation transferLocation = transferLocationRepo.findByTransferLocation(packageName);
			if (transferLocation.getCount() == null) {
				transferLocation.setCount(1l);
				transferLocationRepo.save(transferLocation);

			} else {
				transferLocation.setCount(transferLocation.getCount() + 1);
				transferLocationRepo.save(transferLocation);

			}

			String packageName1 = fromLocation + "_" + toLocation + "_" + totalnumberOfskus + "_"
					+ transferLocation.getCount();

			TransferInventory transferInventory = new TransferInventory();
			transferInventory.setInventoryMovingDate(LocalDate.now());
			transferInventory.setNumberOfProducts(totalnumberOfProducts);
			transferInventory.setNumberOfskus(totalnumberOfskus);
			transferInventory.setPackageName(packageName1);
			transferInventoryRepo.save(transferInventory);

			response.setData(transferInventory);
		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS029.name(), EnumTypeForErrorCodes.SCUS029.errorMsg());
			log.error(utils.toJson(response.getError()), exception);
		}
		return response;
	}

	@Override
	public ServiceResponse<TransferInventory> updateInventoryMovingStatus(@Valid Long statusId, @Valid Long id) {

		log.info("update inventory moving status");
		ServiceResponse<TransferInventory> response = new ServiceResponse<>();
		TransferInventory savedRecord = null;

		try {
			Optional<TransferInventory> existTransferInventory = transferInventoryRepo.findById(id);
			Optional<InventoryMovingStatus> existInventoryMovingStatus = inventoryMovingStatusRepo.findById(statusId);
			if (existTransferInventory.isPresent() && existInventoryMovingStatus.isPresent()) {

				existTransferInventory.get().setStatusId(existInventoryMovingStatus.get());
				savedRecord = transferInventoryRepo.save(existTransferInventory.get());

				response.setData(savedRecord);
			} else {
				response.setError(EnumTypeForErrorCodes.SCUS1501.name(), EnumTypeForErrorCodes.SCUS1501.errorMsg());
			}

		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS1502.name(), EnumTypeForErrorCodes.SCUS1502.errorMsg());

			log.error(utils.toJson(response.getError()), e);
		}

		return response;
	}

	@Override
	public ServiceResponse<JSONObject> getTransportDetailsBasedOnId(@Valid Long id) {
		log.info("transport type based on transferInventory id");
		ServiceResponse<JSONObject> response = new ServiceResponse<>();
		JSONObject type = new JSONObject();
		try {
			Optional<TransferInventory> transferInventory = transferInventoryRepo.findById(id);

			if (transferInventory.isPresent()) {

				ShippingAggregator shippingAggregator = shippingAggregatorRepo
						.findByTransferInventoryId(transferInventory.get());

				SelfShipment selfShipping = selfShipmentRepo.findByTransferInventoryId(transferInventory.get());
				String transportType = "";
				String packageName = transferInventory.get().getPackageName();
				String[] splitArray = packageName.split("_", 3);

				String to = splitArray[1];
				Facility facility = facilityRepo.findByFacilityName(to);
				type.put("transferId", transferInventory.get().getTransferId());
				type.put("packageName", transferInventory.get().getPackageName());

				if (shippingAggregator != null) {

					transportType = SHIPPINGAGGREGATOR;
					type.put(TRANSPORTTYPE, transportType);
					type.put(TRACKINGNUMBER, shippingAggregator.getTrackingNumber());
					type.put(COURIERNAME, shippingAggregator.getCourierName());
					type.put(SHIPPINGAGGREGATOR, shippingAggregator.getShippingAggregator());
					type.put(FACILITY, facility.getId());

				} else if (selfShipping != null) {

					transportType = SELFSHIPMENT;
					type.put(TRANSPORTTYPE, transportType);
					type.put(PHONENUMBER, selfShipping.getDriverNumber());
					type.put(DRIVERALTERNATENUMBER, selfShipping.getDriverAlternateNumber());
					type.put(VEHICLENUMBER, selfShipping.getVehicleNumber());
					type.put(DRIVERNAME, selfShipping.getDriverName());
					type.put(FACILITY, facility.getId());

				}

			} else {

				response.setError(EnumTypeForErrorCodes.SCUS1504.name(), EnumTypeForErrorCodes.SCUS1504.errorMsg());

			}
			response.setData(type);
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS1503.name(), EnumTypeForErrorCodes.SCUS1503.errorMsg());

			log.error(utils.toJson(response.getError()), e);
		}
		return response;
	}

	@Override
	public ServiceResponse<List<TransferInventory>> getAllTransferInventoryByfacility(Long id) {
		log.info("getting All TransferInventory By facility");
		ServiceResponse<List<TransferInventory>> response = new ServiceResponse<>();

		try {
			Optional<Facility> existFacility = facilityRepo.findById(id);
			if (existFacility.isPresent()) {
				Facility facility = existFacility.get();
				String location = facility.getFacilityName();
				List<TransferInventory> list = new ArrayList<>();
				List<TransferInventory> transferInventoryList = transferInventoryRepo.findAll();
				for (TransferInventory transferInventory : transferInventoryList) {
					String packageName = transferInventory.getPackageName();
					String[] splitArray = packageName.split("_", 3);
					String from = splitArray[0];
					String to = splitArray[1];
					if (from.contains(location)) {
						list.add(transferInventory);
					} else if (to.contains(location) && (transferInventory.getStatusId().getId() == 4
							|| transferInventory.getStatusId().getId() == 5)) {
						list.add(transferInventory);
					}

				}
				response.setData(list);
			} else {
				response.setError(EnumTypeForErrorCodes.SCUS1042.name(), EnumTypeForErrorCodes.SCUS1042.errorMsg());

			}

		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS1505.name(), EnumTypeForErrorCodes.SCUS1505.errorMsg());
			log.error(utils.toJson(response.getError()), exception);
		}

		return response;

	}

	@Override
	public ServiceResponse<List<TransferInventory>> getPackageCompletedTransferInventory() {

		log.info("get all package created transfer inventory");
		ServiceResponse<List<TransferInventory>> response = new ServiceResponse<>();

		try {

			List<TransferInventory> list = new ArrayList<>();
			List<TransferInventory> transferInventoryList = transferInventoryRepo.findAll();
			for (TransferInventory transferInventory : transferInventoryList) {

				if (transferInventory.getStatusId().getId() == 3 || transferInventory.getStatusId().getId() == 2) {
					list.add(transferInventory);
				}
			}

			response.setData(list);

		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS1506.name(), EnumTypeForErrorCodes.SCUS1506.errorMsg());
			log.error(utils.toJson(response.getError()), exception);
		}

		return response;
	}

	@Override
	public ServiceResponse<JSONObject> getAllPackageDetailsByTransferInventoryId(Long id) {
		log.info("get All PackageDetails By TransferInventoryId");

		ServiceResponse<JSONObject> response = new ServiceResponse<>();

		List<JSONObject> list = new ArrayList<>();
		JSONObject skuDetails = new JSONObject();
		try {
			Optional<TransferInventory> existTransferInventory = transferInventoryRepo.findById(id);
			if (existTransferInventory.isPresent()) {
				TransferInventory transferInventory = existTransferInventory.get();
				Collection<PackageDetails> existPackageDetails = packageDetailsRepo
						.findByTransferInventoryId(transferInventory);
				Long overalScannedCount = 0l;
				Long overalRemainingCount = 0l;
				for (PackageDetails packageDetails : existPackageDetails) {
					Long scanned = packageDetails.getPendingQCScanned() + packageDetails.getAvailableScanned()
							+ packageDetails.getUnAvailableScanned();
					Long remaining = (packageDetails.getAvailable() + packageDetails.getPendingQualityCheck()
							+ packageDetails.getUnAvailable()) - scanned;
					overalScannedCount = overalScannedCount + scanned;
					overalRemainingCount = overalRemainingCount + remaining;
					JSONObject obj = new JSONObject();
					obj.put("skuCode", packageDetails.getSkuCode());
					obj.put("productName", packageDetails.getProductName());
					obj.put("totalQuantity", packageDetails.getQuantityToMove());
					obj.put("scanned", scanned);
					obj.put("remaining", remaining);

					list.add(obj);
				}
				JSONObject obj1 = new JSONObject();
				obj1.put("overalScannedCount", overalScannedCount);
				obj1.put("overalRemainingCount", overalRemainingCount);
				skuDetails.put("skuDetails", list);
				skuDetails.put("scannedDetails", obj1);

				response.setData(skuDetails);
			} else {
				response.setError(EnumTypeForErrorCodes.SCUS1059.name(), EnumTypeForErrorCodes.SCUS1059.errorMsg());

			}

		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS1508.name(), EnumTypeForErrorCodes.SCUS1508.errorMsg());
			log.error(utils.toJson(response.getError()), exception);
		}
		return response;

	}

	@Override
	public ServiceResponse<TransferInventory> updateTransferInventoryToReceived(@Valid Long transferInventoryId,
			String comments, String userName) {

		log.info("updating inventory moving status to package received");
		ServiceResponse<TransferInventory> response = new ServiceResponse<>();
		TransferInventory savedTransferInventory = null;
		try {
			Optional<TransferInventory> existTransferInventory = transferInventoryRepo.findById(transferInventoryId);
			if (existTransferInventory.isPresent()) {
				TransferInventory transferInventory = existTransferInventory.get();
				if (transferInventory.getStatusId().getId() == 5) {
					response.setError(EnumTypeForErrorCodes.SCUS1507.name(), EnumTypeForErrorCodes.SCUS1507.errorMsg());

				}

				else {

					String packageName = transferInventory.getPackageName();
					String[] splitArray = packageName.split("_", 3);
					String toLocation = splitArray[1];
					Facility facility = facilityRepo.findByFacilityName(toLocation);

					Optional<InventoryItemStatus> existInventoryItemStatus = inventoryItemStatusRepo.findById(5l);
					Optional<InventoryMovingStatus> inventoryMovingStatus = inventoryMovingStatusRepo.findById(5l);

					if (existInventoryItemStatus.isPresent() && inventoryMovingStatus.isPresent()) {
						InventoryItemStatus pQCstatus = existInventoryItemStatus.get();
						Optional<InventoryItemStatus> existInventoryItemStatus1 = inventoryItemStatusRepo.findById(6l);

						if (existInventoryItemStatus1.isPresent()) {
							InventoryItemStatus unAvailableStatus = existInventoryItemStatus1.get();
							Collection<InventoryItem> inventoryItemList = inventoryItemRepo
									.findByTransferInventoryId(transferInventory);
							for (InventoryItem inventoryItem : inventoryItemList) {

								inventoryItem.setFacilityId(facility);
								inventoryItem.setScanned(false);

								Optional<Inventory> existInventory = inventoryRepo
										.findById(inventoryItem.getInventoryId().getId());
								if (existInventory.isPresent()) {
									Inventory inventory = existInventory.get();
									if (inventoryItem.getItemStatusId().getId() == 1
											|| inventoryItem.getItemStatusId().getId() == 5) {

										inventoryItem.setItemStatusId(pQCstatus);

										Long pendingQC = inventory.getPendingQcAccessment();
										if (pendingQC != null) {

											inventory.setPendingQcAccessment(pendingQC + 1);

										} else {
											pendingQC = 0l;
											inventory.setPendingQcAccessment(pendingQC + 1);

										}
										inventory.setInTransitCount(inventory.getInTransitCount() - 1);

									} else if (inventoryItem.getItemStatusId().getId() == 6) {
										Long unAvailable = inventory.getBadInventory();
										inventoryItem.setItemStatusId(unAvailableStatus);
										if (unAvailable != null) {

											inventory.setBadInventory(unAvailable + 1);
										} else {
											unAvailable = 0l;
											inventory.setBadInventory(unAvailable + 1);

										}
										inventory.setInTransitCount(inventory.getInTransitCount() - 1);

									}
									inventoryItem.setScanned(false);
									inventoryItem.setUpdatedUser(userName);
									inventoryItemRepo.save(inventoryItem);

									inventoryRepo.save(inventory);

								}

								transferInventory.setStatusId(inventoryMovingStatus.get());

								transferInventory.setComments(comments);
								savedTransferInventory = transferInventoryRepo.save(transferInventory);
								response.setData(savedTransferInventory);
							}

						} else {
							response.setError(EnumTypeForErrorCodes.SCUS1059.name(),
									EnumTypeForErrorCodes.SCUS1059.errorMsg());

						}

					} else {
						response.setError(EnumTypeForErrorCodes.SCUS1059.name(),
								EnumTypeForErrorCodes.SCUS1059.errorMsg());

					}

				}

			} else {
				response.setError(EnumTypeForErrorCodes.SCUS1061.name(), EnumTypeForErrorCodes.SCUS1061.errorMsg());

			}
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS1502.name(), EnumTypeForErrorCodes.SCUS1502.errorMsg());

			log.error(utils.toJson(response.getError()), e);
		}

		return response;

	}

	@Override
	public ServiceResponse<TransferInventory> dispatchTransferInventory(@Valid Long transferInventoryId) {
		log.info("get All PackageDetails By TransferInventoryId");

		ServiceResponse<TransferInventory> response = new ServiceResponse<>();

		try {
			Optional<TransferInventory> existTransferInventory = transferInventoryRepo.findById(transferInventoryId);
			if (existTransferInventory.isPresent()) {
				TransferInventory transferInventory = existTransferInventory.get();

				if (transferInventory.getStatusId().getId() == 3) {

					Collection<PackageDetails> listPackageDetails = packageDetailsRepo
							.findByTransferInventoryId(transferInventory);
					for (PackageDetails packageDetails : listPackageDetails) {
						Inventory inventory = inventoryRepo.findBySkuCode(packageDetails.getSkuCode());

						Long availablePack = packageDetails.getAvailable();
						Long pQCPack = packageDetails.getPendingQualityCheck();
						Long unAvailablePack = packageDetails.getUnAvailable();

						Long available = inventory.getInventory();

						if (available != null) {
							inventory.setInventory(available - availablePack);

						} else {
							available = 0l;
							inventory.setInventory(available - availablePack);

						}

						Long pendingQC = inventory.getPendingQcAccessment();
						if (pendingQC != null) {
							inventory.setPendingQcAccessment(pendingQC - pQCPack);

						} else {
							pendingQC = 0l;
							inventory.setPendingQcAccessment(pendingQC - pQCPack);

						}

						Long unAvailable = inventory.getBadInventory();
						if (unAvailable != null) {
							inventory.setBadInventory(unAvailable - unAvailablePack);

						} else {
							unAvailable = 0l;

							inventory.setBadInventory(unAvailable - unAvailablePack);

						}

						inventory.setBadInventory(inventory.getBadInventory() - unAvailablePack);
						inventoryRepo.save(inventory);

					}
					response.setData(transferInventory);

				} else {
					response.setError(EnumTypeForErrorCodes.SCUS1059.name(), EnumTypeForErrorCodes.SCUS1059.errorMsg());

				}
			} else {

				response.setError(EnumTypeForErrorCodes.SCUS1509.name(), EnumTypeForErrorCodes.SCUS1509.errorMsg());

			}

		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS1510.name(), EnumTypeForErrorCodes.SCUS1510.errorMsg());

			log.error(utils.toJson(response.getError()), e);
		}
		return response;
	}

	@Override
	public ServiceResponse<JSONObject> viewPackage(@Valid Long transferInventoryId) {
		log.info("view package details");
		ServiceResponse<JSONObject> response = new ServiceResponse<>();
		JSONObject obj = new JSONObject();
		List<JSONObject> jsonList = new ArrayList<>();

		try {
			Optional<TransferInventory> transferInventory = transferInventoryRepo.findById(transferInventoryId);
			if (transferInventory.isPresent()) {

				String packageName = transferInventory.get().getPackageName();
				String[] splitArray = packageName.split("_", 3);
				String facilityName = splitArray[0];
				Facility facility = facilityRepo.findByFacilityName(facilityName);

				Collection<PackageDetails> listOfPackageDetails = packageDetailsRepo
						.findByTransferInventoryId(transferInventory.get());

				for (PackageDetails packageDetails : listOfPackageDetails) {
					Inventory inventory = inventoryRepo.findBySkuCode(packageDetails.getSkuCode());

					String productName = inventory.getProductName();
					String skucode = inventory.getSkuCode();
					Collection<InventoryItem> gettingInventoryItem = inventoryItemRepo.findByInventoryId(inventory);

					Long avaliable = (long) 0;
					Long pendingQc = (long) 0;
					Long badInventory = (long) 0;

					String location = "";

					for (InventoryItem inventoryItem : gettingInventoryItem) {

						if (inventoryItem.getFacilityId().getId().equals(facility.getId())) {
							location = inventoryItem.getFacilityId().getFacility();

							if (inventoryItem.getItemStatusId().getId() == 1) {
								avaliable++;

							} else if (inventoryItem.getItemStatusId().getId() == 5) {
								pendingQc++;

							} else if (inventoryItem.getItemStatusId().getId() == 6) {
								badInventory++;

							}
						}
					}

					JSONObject object = new JSONObject();

					object.put("available", packageDetails.getAvailable());
					object.put("pendingQualityCheck", packageDetails.getPendingQualityCheck());
					object.put("unAvailable", packageDetails.getUnAvailable());
					object.put("location", location);
					object.put("count", packageDetails.getQuantityToMove());

					object.put("productName", productName);
					object.put("availableExists", avaliable + packageDetails.getAvailable());
					object.put("pendingQualityCheckExists", pendingQc + packageDetails.getPendingQualityCheck());
					object.put("unAvailableExists", badInventory + packageDetails.getUnAvailable());
					object.put("skucode", skucode);
					if (transferInventory.get().getStatusId().getId() == 5l) {
						object.put("transferInventoryComments", transferInventory.get().getComments());

					} else {
						object.put("transferInventoryComments", "-");

					}
					object.put("packageDetailsComments", packageDetails.getComments());

					jsonList.add(object);

				}
				obj.put("skuDetails", jsonList);

				JSONObject type = new JSONObject();

				ShippingAggregator shippingAggregator = shippingAggregatorRepo
						.findByTransferInventoryId(transferInventory.get());

				SelfShipment selfShipping = selfShipmentRepo.findByTransferInventoryId(transferInventory.get());
				String transportType = "";

				if (shippingAggregator != null) {

					transportType = SHIPPINGAGGREGATOR;
					type.put(TRANSPORTTYPE, transportType);
					type.put(TRACKINGNUMBER, shippingAggregator.getTrackingNumber());
					type.put(COURIERNAME, shippingAggregator.getCourierName());
					type.put("shippingAggregatorName", shippingAggregator.getShippingAggregator());

				} else if (selfShipping != null) {

					transportType = SELFSHIPMENT;
					type.put(TRANSPORTTYPE, transportType);
					type.put(PHONENUMBER, selfShipping.getDriverNumber());
					type.put(VEHICLENUMBER, selfShipping.getVehicleNumber());
					type.put(DRIVERNAME, selfShipping.getDriverName());
					type.put(DRIVERALTERNATENUMBER, selfShipping.getDriverAlternateNumber());

				}

				obj.put("transportDetails", type);

				List<JSONObject> transferDocuments = transferDocumentServiceImpl
						.getTransferDocumentByPackageId(transferInventory.get().getId()).getData();

				obj.put("documents", transferDocuments);

				response.setData(obj);
			} else {
				response.setError(EnumTypeForErrorCodes.SCUS1504.name(), EnumTypeForErrorCodes.SCUS1504.errorMsg());

			}

		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS1511.name(), EnumTypeForErrorCodes.SCUS1511.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}
		return response;

	}

	@Override
	public ServiceResponse<List<TransferInventory>> getScanAndPackageCreatedTransferInventory() {

		log.info("get all scanned and package created transfer inventory");
		ServiceResponse<List<TransferInventory>> response = new ServiceResponse<>();
		List<TransferInventory> list = new ArrayList<>();

		try {

			List<TransferInventory> allTransferInventorys = transferInventoryRepo.findAll();
			for (TransferInventory transferInventory : allTransferInventorys) {

				if (transferInventory.getStatusId().getId() == 1 || transferInventory.getStatusId().getId() == 2) {
					list.add(transferInventory);

				}
				response.setData(list);
			}
		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS1506.name(), EnumTypeForErrorCodes.SCUS1506.errorMsg());
			log.error(utils.toJson(response.getError()), exception);
		}

		return response;
	}

	@Override
	public ServiceResponse<List<JSONObject>> getPackageOnRouteAndDateFilters(Long fromId, Long toId, String startDate,
			String endDate, Long statusId) {
		log.info("getting packages based on source,destination and date filters");
		ServiceResponse<List<JSONObject>> response = new ServiceResponse<>();
		List<JSONObject> list = new ArrayList<>();
		List<TransferInventory> listTransferInventory = new ArrayList<>();

		try {

			String endDate1 = LocalDate.parse(endDate).plusDays(1).toString();

			if (!statusId.equals(0l)) {
				listTransferInventory = transferInventoryRepo.findByStartAndEndDatesAndStatusId(startDate, endDate1,
						statusId);
			} else {
				listTransferInventory = transferInventoryRepo.findByStartAndEndDates(startDate, endDate1);
			}

			if (fromId.equals(0l) && toId.equals(0l)) {

				for (TransferInventory transferInventory : listTransferInventory) {
					JSONArray object = new JSONArray();
					Collection<PackageDetails> listPackagedetails = packageDetailsRepo
							.findByTransferInventoryId(transferInventory);
					for (PackageDetails packageDetails : listPackagedetails) {
						object.add(packageDetails.getSkuCode() + "-" + packageDetails.getProductName());

					}
					String packageName = transferInventory.getPackageName();
					String[] splitArray = packageName.split("_", 3);

					String to = splitArray[1];
					String from = splitArray[0];

					Facility facility = facilityRepo.findByFacilityName(to);
					Facility fromFacility = facilityRepo.findByFacilityName(from);

					JSONObject object1 = new JSONObject();
					object1.put(RECEIVEDDATE, transferInventory.getUpdatedTime());

					object1.put(TRANSFERINVENTORY, transferInventory);
					object1.put(SKULIST, object);
					object1.put(TOFACILITY, facility.getId());
					object1.put(FROMFACILITY, fromFacility.getId());

					list.add(object1);

				}
				response.setData(list);

			} else if ((fromId.equals(0l) && toId.equals(1l)) || (fromId.equals(0l) && toId.equals(2l))
					|| (fromId.equals(0l) && toId.equals(3l)) || (fromId.equals(0l) && toId.equals(4l))) {
				Optional<Facility> existFacility = facilityRepo.findById(toId);
				if (existFacility.isPresent()) {
					Facility toFacility = existFacility.get();
					String toFacilityName = toFacility.getFacilityName();
					for (TransferInventory transferInventory : listTransferInventory) {
						JSONArray object = new JSONArray();
						Collection<PackageDetails> listPackagedetails = packageDetailsRepo
								.findByTransferInventoryId(transferInventory);
						for (PackageDetails packageDetails : listPackagedetails) {
							object.add(packageDetails.getSkuCode() + "-" + packageDetails.getProductName());

						}
						String packageName = transferInventory.getPackageName();
						String[] splitArray = packageName.split("_", 3);

						String to = splitArray[1];
						String from = splitArray[0];

						Facility facility = facilityRepo.findByFacilityName(to);
						JSONObject object1 = new JSONObject();

						Facility fromFacility = facilityRepo.findByFacilityName(from);

						if (to.equals(toFacilityName)) {
							object1.put(TRANSFERINVENTORY, transferInventory);
							object1.put(RECEIVEDDATE, transferInventory.getUpdatedTime());

							object1.put(SKULIST, object);
							object1.put(TOFACILITY, facility.getId());
							object1.put(FROMFACILITY, fromFacility.getId());
							list.add(object1);

						}

					}
					response.setData(list);

				} else {
					response.setError(EnumTypeForErrorCodes.SCU1111.name(), EnumTypeForErrorCodes.SCU1111.errorMsg());

				}

			}

			else if ((fromId.equals(1l) && toId.equals(0l)) || (fromId.equals(2l) && toId.equals(0l))
					|| (fromId.equals(3l) && toId.equals(0l)) || (fromId.equals(4l) && toId.equals(0l))) {
				Optional<Facility> existFacility = facilityRepo.findById(fromId);

				if (existFacility.isPresent()) {
					Facility fromFacility = existFacility.get();

					String fromFacilityName = fromFacility.getFacilityName();
					for (TransferInventory transferInventory : listTransferInventory) {
						JSONArray object = new JSONArray();
						Collection<PackageDetails> listPackagedetails = packageDetailsRepo
								.findByTransferInventoryId(transferInventory);
						for (PackageDetails packageDetails : listPackagedetails) {
							object.add(packageDetails.getSkuCode() + "-" + packageDetails.getProductName());

						}
						JSONObject object1 = new JSONObject();
						String packageName = transferInventory.getPackageName();

						String[] splitArray = packageName.split("_", 3);
						String from = splitArray[0];
						String to = splitArray[1];
						Facility facility = facilityRepo.findByFacilityName(to);
						Facility fromFacility1 = facilityRepo.findByFacilityName(from);

						if (from.equals(fromFacilityName)) {
							object1.put(TRANSFERINVENTORY, transferInventory);
							object1.put(SKULIST, object);
							object1.put(RECEIVEDDATE, transferInventory.getUpdatedTime());

							object1.put(TOFACILITY, facility.getId());
							object1.put(FROMFACILITY, fromFacility1.getId());

							list.add(object1);

						}

					}
					response.setData(list);

				} else {
					response.setError(EnumTypeForErrorCodes.SCUS1042.name(), EnumTypeForErrorCodes.SCUS1042.errorMsg());

				}

			} else {

				Optional<Facility> existFacility = facilityRepo.findById(fromId);

				if (existFacility.isPresent()) {
					Facility fromFacility = existFacility.get();

					Optional<Facility> existFacility1 = facilityRepo.findById(toId);

					if (existFacility1.isPresent()) {
						Facility toFacility = existFacility1.get();
						String fromFacilityName = fromFacility.getFacilityName();
						String toFacilityName = toFacility.getFacilityName();

						for (TransferInventory transferInventory : listTransferInventory) {
							JSONArray object = new JSONArray();
							Collection<PackageDetails> listPackagedetails = packageDetailsRepo
									.findByTransferInventoryId(transferInventory);
							for (PackageDetails packageDetails : listPackagedetails) {
								object.add(packageDetails.getSkuCode() + "-" + packageDetails.getProductName());

							}

							JSONObject object1 = new JSONObject();
							String packageName = transferInventory.getPackageName();

							String[] splitArray = packageName.split("_", 3);
							String from = splitArray[0];
							String to = splitArray[1];
							Facility facility = facilityRepo.findByFacilityName(to);
							Facility fromFacility1 = facilityRepo.findByFacilityName(from);

							if ((from.equals(fromFacilityName) && to.equals(toFacilityName))) {
								object1.put(TRANSFERINVENTORY, transferInventory);
								object1.put(SKULIST, object);
								object1.put(TOFACILITY, facility.getId());
								object1.put(RECEIVEDDATE, transferInventory.getUpdatedTime());

								object1.put(FROMFACILITY, fromFacility1.getId());

								list.add(object1);

							}
						}
						response.setData(list);

					} else {
						response.setError(EnumTypeForErrorCodes.SCUS1042.name(),
								EnumTypeForErrorCodes.SCUS1042.errorMsg());

					}

				} else {
					response.setError(EnumTypeForErrorCodes.SCUS1042.name(), EnumTypeForErrorCodes.SCUS1042.errorMsg());

				}

			}
		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS1513.name(), EnumTypeForErrorCodes.SCUS1513.errorMsg());
			log.error(utils.toJson(response.getError()), exception);
		}

		return response;
	}

	@Override
	public ServiceResponse<String> getScanForRemove(Long transferInvId, String barCode, String updatedUser,
			Long facilityId) {
		log.info(" scanning for remove from package");
		ServiceResponse<String> response = new ServiceResponse<>();
		TransferInventory savedTransferInventory = null;
		try {
			Optional<TransferInventory> transferInventory = transferInventoryRepo.findById(transferInvId);
			if (transferInventory.isPresent()) {
				if (transferInventory.get().getNumberOfProducts() == 1) {

					response.setError(EnumTypeForErrorCodes.SCUS1521.name(), EnumTypeForErrorCodes.SCUS1521.errorMsg());

				} else {
					InventoryItem inventoryItem = inventoryItemRepo.findByBarcode(barCode);

					if (inventoryItem != null) {
						if (inventoryItem.getFacilityId().getId().equals(facilityId)) {

							Collection<InventoryItem> itemList = inventoryItemRepo
									.findByTransferInventoryId(transferInventory.get());
							boolean status = false;
							int count = 0;
							if (itemList.isEmpty()) {
								response.setError(EnumTypeForErrorCodes.SCUS1518.name(),
										EnumTypeForErrorCodes.SCUS1518.errorMsg());

							} else {
								for (InventoryItem inventoryItem2 : itemList) {
									count++;
									if (inventoryItem2.getId().equals(inventoryItem.getId())) {

										if (inventoryItem2.getInventoryId().getSkuCode()
												.equals(inventoryItem.getInventoryId().getSkuCode())) {
											status = true;

											if (inventoryItem.getScanned()) {
												inventoryItem.setScanned(false);
												inventoryItem.setTransferInventoryId(null);

												Inventory inventory = inventoryItem.getInventoryId();

												Long inTransitcount = inventory.getInTransitCount();
												if (inTransitcount == null) {
													inTransitcount = 1l;
													inventory.setInTransitCount(inTransitcount - 1);

												} else {
													inventory.setInTransitCount(inTransitcount - 1);

												}

												if (inventoryItem.getInventoryConditionId().getId() == 1) {
													Long available = inventory.getInventory();
													Long pendingQcCheck = inventory.getPendingQcAccessment();

													if (inventoryItem.getItemStatusId().getId() == 1) {
														if (available != null) {
															inventory.setInventory(available + 1);

														} else {
															inventory.setInventory((long) 0);
															Long inv = inventory.getInventory();
															inventory.setInventory(inv + 1);
														}

													} else if (inventoryItem.getItemStatusId().getId() == 5) {
														if (pendingQcCheck != null) {
															inventory.setPendingQcAccessment(pendingQcCheck + 1);

														} else {
															inventory.setPendingQcAccessment((long) 0);
															Long pendingQc = inventory.getPendingQcAccessment();
															inventory.setPendingQcAccessment(pendingQc + 1);
														}
													}

												} else {
													Long badInventory = inventory.getBadInventory();
													if (badInventory != null) {
														inventory.setBadInventory(badInventory + 1);

													} else {
														inventory.setBadInventory((long) 0);
														Long badInv = inventory.getBadInventory();
														inventory.setBadInventory(badInv + 1);
													}
												}
												inventoryRepo.save(inventory);

												inventoryItem.setUpdatedUser(updatedUser);
												inventoryItemRepo.save(inventoryItem);
												Collection<PackageDetails> listPackageDetails = packageDetailsRepo
														.findByTransferInventoryId(transferInventory.get());
												for (PackageDetails packageDetails : listPackageDetails) {
													if (packageDetails.getSkuCode().equals(inventory.getSkuCode())) {
														if (packageDetails.getQuantityToMove() == 1) {
															packageDetailsRepo.delete(packageDetails);

															String packageName = transferInventory.get()
																	.getPackageName();
															String[] splited = packageName.split("_");
															String skuNo = splited[2];
															int skuNumber = Integer.parseInt(skuNo);
															int newSkuNo = skuNumber - 1;
															String newPackagename = splited[0] + "_" + splited[1] + "_"
																	+ newSkuNo + "_" + splited[3];
															transferInventory.get().setPackageName(newPackagename);
															transferInventory.get().setNumberOfskus(
																	transferInventory.get().getNumberOfskus() - 1);
															transferInventory.get().setNumberOfProducts(
																	transferInventory.get().getNumberOfProducts() - 1);

															transferInventoryRepo.save(transferInventory.get());
														} else {

															if (inventoryItem.getItemStatusId().getId() == 1) {

																packageDetails.setAvailable(
																		packageDetails.getAvailable() - 1);
																packageDetails.setAvailableScanned(
																		packageDetails.getAvailableScanned() - 1);

															} else if (inventoryItem.getItemStatusId().getId() == 5) {

																packageDetails.setPendingQualityCheck(
																		packageDetails.getPendingQualityCheck() - 1);
																packageDetails.setPendingQCScanned(
																		packageDetails.getPendingQCScanned() - 1);

															} else if (inventoryItem.getItemStatusId().getId() == 6) {

																packageDetails.setUnAvailable(
																		packageDetails.getUnAvailable() - 1);
																packageDetails.setAvailableScanned(
																		packageDetails.getUnAvailableScanned() - 1);

															}
															packageDetails.setQuantityToMove(
																	packageDetails.getQuantityToMove() - 1);
															packageDetailsRepo.save(packageDetails);
															transferInventory.get().setNumberOfProducts(
																	transferInventory.get().getNumberOfProducts() - 1);
															savedTransferInventory = transferInventoryRepo
																	.save(transferInventory.get());

														}

													}

												}
												packageDetailsServiceImpl.updatePackageStatus(savedTransferInventory);

												response.setData("Removed from package successfully");
											} else {
												response.setError(EnumTypeForErrorCodes.SCUS1515.name(),
														EnumTypeForErrorCodes.SCUS1515.errorMsg());

											}
										}

									} else if (count == itemList.size()) {

										if (!status) {
											response.setError(EnumTypeForErrorCodes.SCUS1517.name(),
													EnumTypeForErrorCodes.SCUS1517.errorMsg());

										}

									}
								}
							}
						} else {

							response.setError(EnumTypeForErrorCodes.SCUS064.name(),
									EnumTypeForErrorCodes.SCUS064.errorMsg());
						}
					} else {

						response.setError(EnumTypeForErrorCodes.SCUS135.name(),
								EnumTypeForErrorCodes.SCUS135.errorMsg());

					}
				}
			} else {
				response.setError(EnumTypeForErrorCodes.SCUS1504.name(), EnumTypeForErrorCodes.SCUS1504.errorMsg());

			}

		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS1514.name(), EnumTypeForErrorCodes.SCUS1514.errorMsg());
			log.error(utils.toJson(response.getError()), exception);
		}
		return response;
	}

}

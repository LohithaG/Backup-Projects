package com.mbb.mbbplatform.svcs.impl;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.apache.commons.lang.StringUtils;
import org.json.simple.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.mbb.mbbplatform.common.EnumTypeForErrorCodes;
import com.mbb.mbbplatform.domain.Barcode;
import com.mbb.mbbplatform.domain.Facility;
import com.mbb.mbbplatform.domain.Inventory;
import com.mbb.mbbplatform.domain.InventoryItem;
import com.mbb.mbbplatform.domain.InventoryItemStatus;
import com.mbb.mbbplatform.domain.PackageDetails;
import com.mbb.mbbplatform.domain.PoVendor;
import com.mbb.mbbplatform.domain.TransferInventory;
import com.mbb.mbbplatform.domain.TransferLocation;
import com.mbb.mbbplatform.model.ServiceResponse;
import com.mbb.mbbplatform.model.Utils;
import com.mbb.mbbplatform.repos.BarCodeRepository;
import com.mbb.mbbplatform.repos.FacilityRepository;
import com.mbb.mbbplatform.repos.InventoryItemRepository;
import com.mbb.mbbplatform.repos.InventoryMovingStatusRepository;
import com.mbb.mbbplatform.repos.InventoryRepository;
import com.mbb.mbbplatform.repos.PackageDetailsRepository;
import com.mbb.mbbplatform.repos.PoVendorRepository;
import com.mbb.mbbplatform.repos.TransferInventoryRepository;
import com.mbb.mbbplatform.repos.TransferLocationRepository;
import com.mbb.mbbplatform.svcs.PackageDetailsService;

@RestController
@SuppressWarnings("unchecked")
public class PackageDetailsServiceImpl implements PackageDetailsService {
	private static Logger log = LoggerFactory.getLogger(PackageDetailsServiceImpl.class);
	@Autowired
	private InventoryRepository inventoryRepo;

	@Autowired
	private InventoryItemRepository inventoryItemRepo;

	@Autowired
	private PackageDetailsRepository packageDetailsRepo;

	@Autowired
	private Utils utils;

	@Autowired
	private FacilityRepository facilityRepo;

	@Autowired
	private PoVendorRepository povendorRepo;

	@Autowired
	private TransferLocationRepository transferLocationRepo;

	@Autowired
	private TransferInventoryRepository transferInventoryRepo;

	@Autowired
	private TransferInventoryServiceImpl transferInventoryServiceImpl;

	@Autowired
	private BarCodeRepository barCodeRepo;

	@Autowired
	private InventoryMovingStatusRepository inventoryMovingStatusRepo;
	
	
	private static final String PRODUCTNAME = "productName";
	private static final String STATUS = "status";
	private static final String SUCCESS = "success";




	@Override
	public ServiceResponse<JSONObject> getCountBasedOnSKU(String skuCode, Long facilityId) {
		log.info("getting count by skuCode and facility");

		ServiceResponse<JSONObject> response = new ServiceResponse<>();
		try {
			Inventory inventory = inventoryRepo.findBySkuCode(skuCode);
			if (inventory != null) {

				if (inventory.getActive()) {

					String productName = inventory.getProductName();
					String skucode = inventory.getSkuCode();

				Collection<InventoryItem> gettingInventoryItem = inventoryItemRepo.findByInventoryId(inventory);

				Long avaliable = (long) 0;
				Long pendingQc = (long) 0;
				Long badInventory = (long) 0;

				Long packAvaliable = (long) 0;
				Long packPendingQc = (long) 0;
				Long packBadInventory = (long) 0;
				Long scanned = (long) 0;
				String location = " ";

				for (InventoryItem inventoryItem : gettingInventoryItem) {

					if (inventoryItem.getFacilityId().getId().equals(facilityId)) {
						location = inventoryItem.getFacilityId().getFacility();
						if (!inventoryItem.getScanned()) {
							if (inventoryItem.getApprovalstatus()) {
								if (inventoryItem.getItemStatusId().getId() == 1) {
									avaliable++;

								} else if (inventoryItem.getItemStatusId().getId() == 5) {
									pendingQc++;

								} else if (inventoryItem.getItemStatusId().getId() == 6) {
									badInventory++;

								}
							}
						} else {
							scanned++;

						}
					}
				}

				List<TransferInventory> list = transferInventoryServiceImpl
						.getAllTransferInventoryByfacility(facilityId).getData();
				for (TransferInventory transferInventory : list) {
					if (transferInventory.getStatusId().getId() == 1) {
						Collection<PackageDetails> listOfTransferInventory = packageDetailsRepo
								.findByTransferInventoryId(transferInventory);

						for (PackageDetails packageDetails : listOfTransferInventory) {

							if (packageDetails.getSkuCode().equals(skuCode)) {
								packAvaliable = packAvaliable + packageDetails.getAvailable();
								packPendingQc = packPendingQc + packageDetails.getPendingQualityCheck();

								packBadInventory = packBadInventory + packageDetails.getUnAvailable();

							}
						}
					}
				}
				JSONObject object = new JSONObject();

				object.put("available", avaliable - packAvaliable);
				object.put("pendingQualityCheck", pendingQc - packPendingQc);
				object.put("unAvailable", badInventory - packBadInventory);
				object.put("location", location);
				object.put(PRODUCTNAME, productName);
				object.put("scannedCount", scanned);

				object.put("skucode", skucode);

				response.setData(object);

				}

				else {
					response.setError(EnumTypeForErrorCodes.SCUS062.name(), EnumTypeForErrorCodes.SCUS062.errorMsg());

				}
			} else {
				response.setError(EnumTypeForErrorCodes.SCUS044.name(), EnumTypeForErrorCodes.SCUS044.errorMsg());

			}
		} catch (Exception e) {

			response.setError(EnumTypeForErrorCodes.SCUS811.name(), EnumTypeForErrorCodes.SCUS811.errorMsg());
			log.error(utils.toJson(response.getError()), e);

		}
		return response;

	}

	@Override
	public ServiceResponse<List<PackageDetails>> addPackage(
			@Valid @RequestBody List<PackageDetails> listOfPackageDetails, @Valid @PathVariable Long fromLocation,
			@Valid @PathVariable Long toLocation) {
		log.info("Adding package into data base");

		ServiceResponse<List<PackageDetails>> response = new ServiceResponse<>();
		List<PackageDetails> list = new ArrayList<>();

		try {
			Optional<Facility> existFacility = facilityRepo.findById(fromLocation);
			if (existFacility.isPresent()) {
				Facility fromLocation1 = existFacility.get();

				String fromLocation2 = fromLocation1.getFacilityName();
				Optional<Facility> existFacility1 = facilityRepo.findById(toLocation);
				if (existFacility1.isPresent()) {
					Facility toLocation1 = existFacility1.get();
					String toLocation2 = toLocation1.getFacilityName();
					Long totalnumberOfProducts = 0l;
					PackageDetails savedPackageDetails = null;

					TransferInventory savedTransferInventory = null;
					String comments = null;

					Long totalnumberOfskus = (long) listOfPackageDetails.size();
					String packageName = fromLocation2 + "_" + toLocation2;

					TransferLocation transferLocation = transferLocationRepo.findByTransferLocation(packageName);

					if (transferLocation.getCount() == null) {
						transferLocation.setCount(1l);
						transferLocationRepo.save(transferLocation);

					} else {
						transferLocation.setCount(transferLocation.getCount() + 1);
						transferLocationRepo.save(transferLocation);

					}
					for (PackageDetails packageDetails : listOfPackageDetails) {

						totalnumberOfProducts = totalnumberOfProducts + (packageDetails.getAvailable()
								+ packageDetails.getPendingQualityCheck() + packageDetails.getUnAvailable());
						comments = packageDetails.getComments();

					}
					String packageName1 = fromLocation2 + "_" + toLocation2 + "_" + totalnumberOfskus + "_"
							+ transferLocation.getCount();
					TransferInventory transferInventory = new TransferInventory();
					transferInventory.setInventoryMovingDate(LocalDate.now());
					transferInventory.setNumberOfProducts(totalnumberOfProducts);
					transferInventory.setNumberOfskus(totalnumberOfskus);
					transferInventory.setPackageName(packageName1);

					transferInventory.setStatusId(inventoryMovingStatusRepo.findById(1l).get());
					transferInventory.setComments(comments);

					transferInventory.setEnable(true);
					TransferInventory lastTransferInventory = transferInventoryRepo.findBylastRecord();
					if (lastTransferInventory == null) {
						String num = "1";
						String transferId1 = "GVS-" + StringUtils.leftPad(num, 6, "0");

						transferInventory.setTransferId(transferId1);
					} else {
						if (lastTransferInventory.getTransferId() == null) {
							String num = "1";
							String transferId1 = "GVS-" + StringUtils.leftPad(num, 6, "0");

							transferInventory.setTransferId(transferId1);

						} else {
							String str = lastTransferInventory.getTransferId();
							Long transferId = Long.parseLong(str.substring(4));
							Long newTransferId = transferId + 1;
							String num = newTransferId.toString();
							String transferId1 = "GVS-" + StringUtils.leftPad(num, 6, "0");

							transferInventory.setTransferId(transferId1);

						}

					}

					savedTransferInventory = transferInventoryRepo.save(transferInventory);

					for (PackageDetails packageDetails : listOfPackageDetails) {

						packageDetails.setQuantityToMove(packageDetails.getAvailable()
								+ packageDetails.getPendingQualityCheck() + packageDetails.getUnAvailable());
						packageDetails.setAvailableScanned(0l);
						packageDetails.setPendingQCScanned(0l);

						packageDetails.setUnAvailableScanned(0l);
						packageDetails.setTransferInventoryId(savedTransferInventory);
						savedPackageDetails = packageDetailsRepo.save(packageDetails);
						list.add(savedPackageDetails);

					}

					Collection<PackageDetails> existPackageDetails = packageDetailsRepo
							.findByTransferInventoryId(transferInventory);
					if (existPackageDetails.isEmpty()) {
						transferInventoryRepo.delete(transferInventory);

					}

					response.setData(list);

				} else {
					response.setError(EnumTypeForErrorCodes.SCUS1042.name(), EnumTypeForErrorCodes.SCUS1042.errorMsg());

				}

			} else {
				response.setError(EnumTypeForErrorCodes.SCUS1042.name(), EnumTypeForErrorCodes.SCUS1042.errorMsg());

			}

		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS1003.name(), EnumTypeForErrorCodes.SCUS1003.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}
		return response;

	}

	@Override
	public ServiceResponse<List<InventoryItem>> getCountBasedOnSkucodeAndstatus(String poNumber, String skuCode,
			Long statusId) {

		log.info("get inventory item based on ponumber,skucode and status");
		ServiceResponse<List<InventoryItem>> response = new ServiceResponse<>();

		List<InventoryItem> listInventoryItem = new ArrayList<>();

		try {
			PoVendor poVendor = povendorRepo.findByPurchaseOrderNumber(poNumber);

			Collection<InventoryItem> inventoryItemList = inventoryItemRepo.findByPoVendorId(poVendor);

			for (InventoryItem inventoryItem : inventoryItemList) {

				Optional<Inventory> inventory = inventoryRepo.findById(inventoryItem.getInventoryId().getId());

				if (inventory.isPresent()) {
					if (inventory.get().getSkuCode().equals(skuCode)) {

						if (inventoryItem.getItemStatusId().getId().equals(statusId)) {

							listInventoryItem.add(inventoryItem);

						} else if (statusId == 0) {
							listInventoryItem.add(inventoryItem);

						}

					}

				} else {

					response.setError(EnumTypeForErrorCodes.SCUS1004.name(), EnumTypeForErrorCodes.SCUS1004.errorMsg());

				}

			}
			response.setData(listInventoryItem);
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS1005.name(), EnumTypeForErrorCodes.SCUS1005.errorMsg());
			log.error(utils.toJson(response.getError()), e);

		}

		return response;
	}

	@Override
	public ServiceResponse<JSONObject> getBasedOnBarcode(String barcode, Long transferInventoryId,Long facilityId) {

		log.info("barcode checking with transfer inventory id");
		ServiceResponse<JSONObject> response = new ServiceResponse<>();

		try {
			InventoryItem existingInventoryItem = inventoryItemRepo.findByBarcode(barcode);

			if (existingInventoryItem == null) {
				response.setError(EnumTypeForErrorCodes.SCUS1024.name(), EnumTypeForErrorCodes.SCUS1024.errorMsg());

			} else if(!existingInventoryItem.getFacilityId().getId().equals(facilityId)){
				response.setError(EnumTypeForErrorCodes.SCUS064.name(), EnumTypeForErrorCodes.SCUS064.errorMsg());

				
			}else {
				if (existingInventoryItem.getApprovalstatus()) {

					Optional<TransferInventory> transferInventory = transferInventoryRepo.findById(transferInventoryId);

					if (transferInventory.isPresent()) {
						if (transferInventory.get().getStatusId().getId() == 3) {
							response.setError(EnumTypeForErrorCodes.SCUS1042.name(),
									EnumTypeForErrorCodes.SCUS1042.errorMsg());

						} else {
							String packageName = transferInventory.get().getPackageName();

							String[] splited = packageName.split("_");
							String facilityName = splited[0];
							if (existingInventoryItem.getFacilityId().getFacilityName().equals(facilityName)) {
								Collection<PackageDetails> packageDetailsList = packageDetailsRepo
										.findByTransferInventoryId(transferInventory.get());
								Long packAvailable = 0l;
								Long packPendingQc = 0l;
								Long packUnAvailable = 0l;
								for (PackageDetails packageDetails : packageDetailsList) {
									packAvailable = packAvailable + packageDetails.getAvailable();
									packPendingQc = packPendingQc + packageDetails.getPendingQualityCheck();
									packUnAvailable = packUnAvailable + packageDetails.getUnAvailable();
								}

								int count = 0;
								Boolean status = false;
								for (PackageDetails packageDetails : packageDetailsList) {
									count++;
									String barcodeId = barcode.substring(0, 4);
									Long barcodeId1 = Long.parseLong(barcodeId);
									Barcode barcode1 = barCodeRepo.findByNxtInventoryId(barcodeId1);

									if (barcode1.getSku().equals(packageDetails.getSkuCode())) {
										status = true;
										Long selectedcount = packageDetails.getAvailable()
												+ packageDetails.getPendingQualityCheck()
												+ packageDetails.getUnAvailable();
										Long scannedCount = packageDetails.getAvailableScanned()
												+ packageDetails.getPendingQCScanned()
												+ packageDetails.getUnAvailableScanned();
										if (selectedcount.equals(scannedCount)) {

											response.setError(EnumTypeForErrorCodes.SCUS1028.name(),
													EnumTypeForErrorCodes.SCUS1028.errorMsg());
										} else {

											InventoryItemStatus existingstatus = existingInventoryItem
													.getItemStatusId();
											if (existingstatus.getId() == 7) {
												response.setError(EnumTypeForErrorCodes.SCUS1033.name(),
														EnumTypeForErrorCodes.SCUS1033.errorMsg());

											} else if (!existingInventoryItem.getScanned()) {

												JSONObject obj = new JSONObject();
												if (existingstatus.getId() == 1) {
													if (packAvailable == 0) {
														response.setError(EnumTypeForErrorCodes.SCUS1047.name(),
																EnumTypeForErrorCodes.SCUS1047.errorMsg());
													} else {

														if (packageDetails.getAvailable() == 0) {

															response.setError(EnumTypeForErrorCodes.SCUS1044.name(),
																	EnumTypeForErrorCodes.SCUS1044.errorMsg());
														} else {
															if (packageDetails.getAvailable() > packageDetails
																	.getAvailableScanned()) {

																obj.put(PRODUCTNAME, packageDetails.getProductName());
																obj.put(STATUS, existingstatus.getId());
																response.setData(obj);

															} else {

																response.setError(EnumTypeForErrorCodes.SCUS1029.name(),
																		EnumTypeForErrorCodes.SCUS1029.errorMsg());

															}
														}
													}

												} else if (existingstatus.getId() == 5) {
													if (packPendingQc == 0) {
														response.setError(EnumTypeForErrorCodes.SCUS1048.name(),
																EnumTypeForErrorCodes.SCUS1048.errorMsg());
													} else {
														if (packageDetails.getPendingQualityCheck() == 0) {

															response.setError(EnumTypeForErrorCodes.SCUS1045.name(),
																	EnumTypeForErrorCodes.SCUS1045.errorMsg());
														} else {
															if (packageDetails.getPendingQualityCheck() > packageDetails
																	.getPendingQCScanned()) {
																obj.put(PRODUCTNAME, packageDetails.getProductName());
																obj.put(STATUS, existingstatus.getId());
																response.setData(obj);

															} else {

																response.setError(EnumTypeForErrorCodes.SCUS1030.name(),
																		EnumTypeForErrorCodes.SCUS1030.errorMsg());
															}
														}
													}

												} else if (existingstatus.getId() == 6) {
													if (packUnAvailable == 0) {
														response.setError(EnumTypeForErrorCodes.SCUS1049.name(),
																EnumTypeForErrorCodes.SCUS1049.errorMsg());
													} else {
														if (packageDetails.getPendingQualityCheck() == 0) {

															response.setError(EnumTypeForErrorCodes.SCUS1046.name(),
																	EnumTypeForErrorCodes.SCUS1046.errorMsg());
														} else {
															if (packageDetails.getUnAvailable() > packageDetails
																	.getUnAvailableScanned()) {
																obj.put(PRODUCTNAME, packageDetails.getProductName());
																obj.put(STATUS, existingstatus.getId());
																response.setData(obj);

															} else {

																response.setError(EnumTypeForErrorCodes.SCUS1031.name(),
																		EnumTypeForErrorCodes.SCUS1031.errorMsg());

															}

														}
													}
												}

											} else {

												response.setError(EnumTypeForErrorCodes.SCUS1035.name(),
														EnumTypeForErrorCodes.SCUS1035.errorMsg());

											}
										}

									} else if (count == packageDetailsList.size()) {
										if (!status) {

											response.setError(EnumTypeForErrorCodes.SCUS1009.name(),
													EnumTypeForErrorCodes.SCUS1009.errorMsg());

										}
									}
								}
							} else {

								response.setError(EnumTypeForErrorCodes.SCUS1041.name(),
										EnumTypeForErrorCodes.SCUS1041.errorMsg());

							}
						}
					} else {

						response.setError(EnumTypeForErrorCodes.SCUS1032.name(),
								EnumTypeForErrorCodes.SCUS1032.errorMsg());

					}

				} else {
					response.setError(EnumTypeForErrorCodes.SCUS1522.name(), EnumTypeForErrorCodes.SCUS1522.errorMsg());

				}
			}
		} catch (NumberFormatException e) {
			response.setError(EnumTypeForErrorCodes.SCUS1023.name(), EnumTypeForErrorCodes.SCUS1023.errorMsg());

			log.error(utils.toJson(response.getError()), e);
		}

		return response;
	}

	@Override
	public ServiceResponse<List<PackageDetails>> getAllPackageDetails() {
		log.info("get all package details");
		ServiceResponse<List<PackageDetails>> response = new ServiceResponse<>();

		try {
			List<PackageDetails> listPackageDetails = packageDetailsRepo.findAll();
			response.setData(listPackageDetails);
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS1006.name(), EnumTypeForErrorCodes.SCUS1006.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}

		return response;
	}

	@Override
	public ServiceResponse<Collection<Facility>> getAllFacilities() {
		log.info("getting all facilities");
		ServiceResponse<Collection<Facility>> response = new ServiceResponse<>();
		Collection<Facility> finalFacilities = new ArrayList<>();
		try {
			Collection<Facility> facilities = facilityRepo.findAll();
			for (Facility facility : facilities) {

				finalFacilities.add(facility);
			}

			response.setData(finalFacilities);

		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS115.name(), EnumTypeForErrorCodes.SCUS115.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}

		return response;
	}

	@Override
	public ServiceResponse<List<JSONObject>> getDetailsForUpdatePackageDetails(@Valid Long transferInventoryId) {
		log.info("get details for update package details service");
		ServiceResponse<List<JSONObject>> response = new ServiceResponse<>();
		List<JSONObject> jsonList = new ArrayList<>();

		try {
			Optional<TransferInventory> existTransferInventory = transferInventoryRepo.findById(transferInventoryId);
			if (existTransferInventory.isPresent()) {
				
				
				

				TransferInventory transferInventory = existTransferInventory.get();

				if (transferInventory.getStatusId().getId() == 1 || transferInventory.getStatusId().getId() == 2l
						|| transferInventory.getStatusId().getId() == 3l
						|| transferInventory.getStatusId().getId() == 4l) {
					String packageName = transferInventory.getPackageName();
					String[] splitArray = packageName.split("_", 3);
					String facilityName = splitArray[0];
					Facility facility = facilityRepo.findByFacilityName(facilityName);

					Collection<PackageDetails> listOfPackageDetails = packageDetailsRepo
							.findByTransferInventoryId(transferInventory);

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
							if (! inventoryItem.getScanned()) {
								if (inventoryItem.getApprovalstatus()) {
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
							}
						}

						JSONObject object = new JSONObject();

						object.put("available", packageDetails.getAvailable());
						object.put("pendingQualityCheck", packageDetails.getPendingQualityCheck());
						object.put("unAvailable", packageDetails.getUnAvailable());
						object.put("location", location);
						object.put(PRODUCTNAME, productName);
						object.put("availableExists", avaliable + packageDetails.getAvailableScanned());
						object.put("pendingQualityCheckExists", pendingQc + packageDetails.getPendingQCScanned());
						object.put("unAvailableExists", badInventory + packageDetails.getUnAvailableScanned());
						object.put("comments", transferInventory.getComments());
						object.put("id", packageDetails.getId());

						object.put("skucode", skucode);

						jsonList.add(object);

					}
					response.setData(jsonList);
				} else {
					response.setError(EnumTypeForErrorCodes.SCUS1512.name(), EnumTypeForErrorCodes.SCUS1512.errorMsg());

				}
			} else {
				response.setError(EnumTypeForErrorCodes.SCUS1059.name(), EnumTypeForErrorCodes.SCUS1059.errorMsg());

			}
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS1026.name(), EnumTypeForErrorCodes.SCUS1026.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}
		return response;
	}

	@Override
	public ServiceResponse<String> updateQrCodeStatus(String barcode, Long transferInventoryId, String updatedUser) {
		log.info("updating qrcode status as scanned in inventory item");
		ServiceResponse<String> response = new ServiceResponse<>();

		try {
			Optional<TransferInventory> findedTransferInventory = transferInventoryRepo.findById(transferInventoryId);

			if (findedTransferInventory.isPresent()) {
				TransferInventory transferInventory = findedTransferInventory.get();
				InventoryItem inventoryItem = inventoryItemRepo.findByBarcode(barcode);

				Collection<PackageDetails> listPackageDetails = packageDetailsRepo
						.findByTransferInventoryId(transferInventory);
				for (PackageDetails packageDetails : listPackageDetails) {

					String barcodeId = barcode.substring(0, 4);
					Long barcodeId1 = Long.parseLong(barcodeId);
					Barcode barcode1 = barCodeRepo.findByNxtInventoryId(barcodeId1);

					if (barcode1.getSku().equals(packageDetails.getSkuCode())) {
						Inventory inventory = inventoryRepo.findBySkuCode(packageDetails.getSkuCode());

						if (inventoryItem.getItemStatusId().getId() == 1) {
							Long availableScanned = packageDetails.getAvailableScanned();
							packageDetails.setAvailableScanned(availableScanned + 1);
							packageDetailsRepo.save(packageDetails);
							Long available = inventory.getInventory();
							if (available != null) {
								inventory.setInventory(available - 1);

								Long inTransitcount = inventory.getInTransitCount();
								if (inTransitcount == null) {
									inTransitcount = 0l;
									inventory.setInTransitCount(inTransitcount + 1);

								} else {
									inventory.setInTransitCount(inTransitcount + 1);

								}

								inventoryRepo.save(inventory);

							}
						} else if (inventoryItem.getItemStatusId().getId() == 5) {
							Long pendingQcScanned = packageDetails.getPendingQCScanned();
							packageDetails.setPendingQCScanned(pendingQcScanned + 1);
							packageDetailsRepo.save(packageDetails);
							Long pendindQC = inventory.getPendingQcAccessment();
							if (pendindQC != null) {
								inventory.setPendingQcAccessment(pendindQC - 1);
								Long inTransitcount = inventory.getInTransitCount();
								if (inTransitcount == null) {
									inTransitcount = 0l;
									inventory.setInTransitCount(inTransitcount + 1);

								} else {
									inventory.setInTransitCount(inTransitcount + 1);

								}

								inventoryRepo.save(inventory);

							}

						} else if (inventoryItem.getItemStatusId().getId() == 6) {
							Long unAvailableScanned = packageDetails.getUnAvailableScanned();
							packageDetails.setUnAvailableScanned(unAvailableScanned + 1);
							packageDetailsRepo.save(packageDetails);
							Long badInventory = inventory.getBadInventory();
							if (badInventory != null) {
								inventory.setBadInventory(badInventory - 1);
								Long inTransitcount = inventory.getInTransitCount();
								if (inTransitcount == null) {
									inTransitcount = 0l;
									inventory.setInTransitCount(inTransitcount + 1);

								} else {
									inventory.setInTransitCount(inTransitcount + 1);

								}

								inventoryRepo.save(inventory);

							}

						}
						inventoryItem.setScanned(true);

						inventoryItem.setTransferInventoryId(transferInventory);
						inventoryItem.setUpdatedUser(updatedUser);
						inventoryItemRepo.save(inventoryItem);
						response.setData("updated qrcode status to scanned");

					}

				}

				Collection<PackageDetails> listPackageDetailsSaved = packageDetailsRepo
						.findByTransferInventoryId(transferInventory);

				int count = 0;
				for (PackageDetails packageDetails2 : listPackageDetailsSaved) {

					Long selectedcount = packageDetails2.getAvailable() + packageDetails2.getPendingQualityCheck()
							+ packageDetails2.getUnAvailable();
					Long scannedCount = packageDetails2.getAvailableScanned() + packageDetails2.getPendingQCScanned()
							+ packageDetails2.getUnAvailableScanned();
					if (selectedcount.equals(scannedCount)) {
						count++;
					}

				}
				if (count == listPackageDetailsSaved.size()) {

					transferInventory.setStatusId(inventoryMovingStatusRepo.findById(3l).get());
					transferInventoryRepo.save(transferInventory);

				} else {

					transferInventory.setStatusId(inventoryMovingStatusRepo.findById(2l).get());
					transferInventoryRepo.save(transferInventory);

				}

			} else {
				response.setError(EnumTypeForErrorCodes.SCUS1059.name(), EnumTypeForErrorCodes.SCUS1059.errorMsg());

			}

		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS1034.name(), EnumTypeForErrorCodes.SCUS1034.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}

		return response;
	}

	@Override
	public ServiceResponse<TransferInventory> updatePackage(List<PackageDetails> listOfNewPackageDetails,
			Long transferInventoryId) {
		ServiceResponse<TransferInventory> response = new ServiceResponse<>();
		List<PackageDetails> list = new ArrayList<>();

		try {
			Long numberOfProducts = 0l;
			Long numberOfSkus = (long) listOfNewPackageDetails.size();
			ServiceResponse<String> result = checkUpdatePackage(listOfNewPackageDetails, transferInventoryId);
			if (result.getData().equals(SUCCESS)) {
				Optional<TransferInventory> transferInventory = transferInventoryRepo.findById(transferInventoryId);
				if (transferInventory.isPresent()) {
					Collection<PackageDetails> listPackageDetails = packageDetailsRepo
							.findByTransferInventoryId(transferInventory.get());
					int count = listPackageDetails.size();

					String comments = null;
					for (PackageDetails newPackageDetails : listOfNewPackageDetails) {

						for (PackageDetails packageDetails : listPackageDetails) {

							if (packageDetails.getSkuCode().equals(newPackageDetails.getSkuCode())) {

								Long quantityToMove = newPackageDetails.getAvailable()
										+ newPackageDetails.getPendingQualityCheck()
										+ newPackageDetails.getUnAvailable();
								packageDetails.setSkuCode(newPackageDetails.getSkuCode());
								packageDetails.setProductName(newPackageDetails.getProductName());
								packageDetails.setAvailable(newPackageDetails.getAvailable());
								packageDetails.setPendingQualityCheck(newPackageDetails.getPendingQualityCheck());
								packageDetails.setUnAvailable(newPackageDetails.getUnAvailable());
								packageDetails.setQuantityToMove(quantityToMove);
								packageDetails.setTransferInventoryId(transferInventory.get());

								packageDetails.setEnable(true);
								packageDetails.setComments(newPackageDetails.getComments());
								numberOfProducts = numberOfProducts + quantityToMove;
								PackageDetails savedPackageDetails = packageDetailsRepo.save(packageDetails);
								list.add(savedPackageDetails);
								comments = newPackageDetails.getComments();

								listPackageDetails.remove(packageDetails);

								break;
							} else {

								Long quantityToMove = newPackageDetails.getAvailable()
										+ newPackageDetails.getPendingQualityCheck()
										+ newPackageDetails.getUnAvailable();

								newPackageDetails.setQuantityToMove(quantityToMove);
								newPackageDetails.setTransferInventoryId(transferInventory.get());
								newPackageDetails.setPendingQCScanned(0l);
								newPackageDetails.setAvailableScanned(0l);
								newPackageDetails.setUnAvailableScanned(0l);
								newPackageDetails.setEnable(true);
								numberOfProducts = numberOfProducts + quantityToMove;

								PackageDetails savedPackageDetails = packageDetailsRepo.save(newPackageDetails);
								list.add(savedPackageDetails);
								comments = newPackageDetails.getComments();
								break;
							}

						}

					}
					if (listPackageDetails.isEmpty()) {
						if (listOfNewPackageDetails.size() > count) {
							for (int i = count; i < listOfNewPackageDetails.size(); i++) {

								PackageDetails newPackageDetails = listOfNewPackageDetails.get(i);
								Long quantityToMove = newPackageDetails.getAvailable()
										+ newPackageDetails.getPendingQualityCheck()
										+ newPackageDetails.getUnAvailable();

								newPackageDetails.setQuantityToMove(quantityToMove);
								newPackageDetails.setTransferInventoryId(transferInventory.get());
								newPackageDetails.setPendingQCScanned(0l);
								newPackageDetails.setAvailableScanned(0l);
								newPackageDetails.setUnAvailableScanned(0l);
								newPackageDetails.setEnable(true);
								numberOfProducts = numberOfProducts + quantityToMove;
								comments = newPackageDetails.getComments();

								PackageDetails savedPackageDetails = packageDetailsRepo.save(newPackageDetails);
								list.add(savedPackageDetails);

							}
						}
					}
					String packageName = transferInventory.get().getPackageName();
					String[] splittedName = packageName.split("_");
					String skuNumber;
					skuNumber = numberOfSkus.toString();
					splittedName[2] = skuNumber;
					String newPackagename = splittedName[0] + "_" + splittedName[1] + "_" + splittedName[2] + "_"
							+ splittedName[3];
					transferInventory.get().setPackageName(newPackagename);
					transferInventory.get().setNumberOfskus(numberOfSkus);
					transferInventory.get().setNumberOfProducts(numberOfProducts);
					transferInventory.get().setEnable(true);
					transferInventory.get().setComments(comments);
					TransferInventory savedTransferInventory = transferInventoryRepo.save(transferInventory.get());
					updatePackageStatus(savedTransferInventory);
					response.setData(savedTransferInventory);
				} else {
					response.setError(EnumTypeForErrorCodes.SCUS1036.name(), EnumTypeForErrorCodes.SCUS1036.errorMsg());

				}
			} else {

				response.setError(result.getError());
			}
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS1037.name(), EnumTypeForErrorCodes.SCUS1037.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}

		return response;

	}

	@Override
	public ServiceResponse<String> checkPackageName(@Valid Long fromLocation, @Valid Long toLocation) {

		log.info("checking package name");
		ServiceResponse<String> response = new ServiceResponse<>();
		List<TransferInventory> tList = new ArrayList<>();

		try {
			List<TransferInventory> listTransferInventory = transferInventoryRepo.findAll();
			Optional<Facility> existFacility = facilityRepo.findById(fromLocation);

			if (existFacility.isPresent()) {
				Facility fromLocation1 = existFacility.get();
				String fromLocation2 = fromLocation1.getFacilityName();

				Optional<Facility> existFacility1 = facilityRepo.findById(toLocation);
				if (existFacility1.isPresent()) {
					Facility toLocation1 = existFacility1.get();
					String toLocation2 = toLocation1.getFacilityName();
					String packageName = fromLocation2 + "_" + toLocation2;
					for (TransferInventory transferInventory : listTransferInventory) {
						if (transferInventory.getPackageName().contains(packageName)
								&& (transferInventory.getStatusId().getId() == 1
										|| transferInventory.getStatusId().getId() == 2)) {
							tList.add(transferInventory);

						}

					}
					if (tList.isEmpty()) {
						response.setData("create package");

					} else {

						response.setError(EnumTypeForErrorCodes.SCUS1027.name(),
								EnumTypeForErrorCodes.SCUS1027.errorMsg());

					}
				} else {
					response.setError(EnumTypeForErrorCodes.SCUS1042.name(), EnumTypeForErrorCodes.SCUS1042.errorMsg());

				}

			} else {
				response.setError(EnumTypeForErrorCodes.SCUS1042.name(), EnumTypeForErrorCodes.SCUS1042.errorMsg());

			}
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS1038.name(), EnumTypeForErrorCodes.SCUS1038.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}

		return response;
	}

	@Override
	public ServiceResponse<String> deletePackageDetails(Long id) {
		log.info("deleting package details by Id");
		ServiceResponse<String> response = new ServiceResponse<>();

		try {
			Optional<PackageDetails> packageDetails = packageDetailsRepo.findById(id);
			if (packageDetails.isPresent()) {
				TransferInventory transferInventory = transferInventoryRepo
						.findById(packageDetails.get().getTransferInventoryId().getId()).get();
				Collection<PackageDetails> listPackageDetails = packageDetailsRepo
						.findByTransferInventoryId(transferInventory);

				if (listPackageDetails.size() == 1) {

					response.setError(EnumTypeForErrorCodes.SCUS1521.name(), EnumTypeForErrorCodes.SCUS1521.errorMsg());

				} else {

					if (packageDetails.get().getAvailableScanned() == 0
							&& packageDetails.get().getPendingQCScanned() == 0
							&& packageDetails.get().getUnAvailableScanned() == 0) {

						transferInventory.setNumberOfProducts(
								transferInventory.getNumberOfProducts() - packageDetails.get().getQuantityToMove());
						String packageName = transferInventory.getPackageName();
						String[] splited = packageName.split("_");
						String skuNo = splited[2];
						int skuNumber = Integer.parseInt(skuNo);
						int newSkuNo = skuNumber - 1;
						String newPackagename = splited[0] + "_" + splited[1] + "_" + newSkuNo + "_" + splited[3];
						transferInventory.setPackageName(newPackagename);
						transferInventory.setNumberOfskus(transferInventory.getNumberOfskus() - 1);
						TransferInventory savedTransferInventory = transferInventoryRepo.save(transferInventory);
						packageDetailsRepo.deleteById(id);
						updatePackageStatus(savedTransferInventory);
						response.setData("deleted successfully");
					} else {
						response.setError(EnumTypeForErrorCodes.SCUS1519.name(),
								EnumTypeForErrorCodes.SCUS1519.errorMsg());

					}
				}

			} else {
				response.setError(EnumTypeForErrorCodes.SCUS1039.name(), EnumTypeForErrorCodes.SCUS1039.errorMsg());

			}

		} catch (Exception e) {

			response.setError(EnumTypeForErrorCodes.SCUS1040.name(), EnumTypeForErrorCodes.SCUS1040.errorMsg());
			log.error(utils.toJson(response.getError()), e);

		}

		return response;

	}

	public ServiceResponse<String> checkUpdatePackage(List<PackageDetails> listOfPackageDetails,
			Long transferInventoryId) {
		log.info("check for update package");
		ServiceResponse<String> response = new ServiceResponse<>();
		Boolean tracker = false;
		try {

			Optional<TransferInventory> existTransferInventory = transferInventoryRepo.findById(transferInventoryId);
			if (existTransferInventory.isPresent()) {

				TransferInventory transferInventory = existTransferInventory.get();
				if (transferInventory.getStatusId().getId() == 1l || transferInventory.getStatusId().getId() == 2l
						|| transferInventory.getStatusId().getId() == 3l
						|| transferInventory.getStatusId().getId() == 4l) {

					Collection<PackageDetails> listPackageDetails = packageDetailsRepo
							.findByTransferInventoryId(transferInventory);
					for (PackageDetails newPackageDetails : listOfPackageDetails) {
						for (PackageDetails packageDetails : listPackageDetails) {

							if (packageDetails.getSkuCode().equals(newPackageDetails.getSkuCode())) {

								if ((packageDetails.getAvailableScanned() > newPackageDetails.getAvailable())
										|| (packageDetails.getPendingQCScanned() > newPackageDetails
												.getPendingQualityCheck())
										|| (packageDetails.getUnAvailableScanned() > newPackageDetails
												.getUnAvailable())) {

									response.setError(EnumTypeForErrorCodes.SCUS1043.name(),
											EnumTypeForErrorCodes.SCUS1043.errorMsg());
									String s = "fail";
									tracker = true;
									response.setData(s);

								} else {
									String s = SUCCESS;

									response.setData(s);

								}
								listPackageDetails.remove(packageDetails);
								break;
							} else {
								if (packageDetails.getAvailableScanned() > 0 || packageDetails.getPendingQCScanned() > 0
										|| packageDetails.getUnAvailableScanned() > 0) {
									String s = "fail";
									response.setData(s);
									response.setError(EnumTypeForErrorCodes.SCUS1043.name(),
											EnumTypeForErrorCodes.SCUS1043.errorMsg());

								} else {
									String s = SUCCESS;

									response.setData(s);

								}

								break;
							}
						}
					}
				} else {
					response.setError(EnumTypeForErrorCodes.SCUS1036.name(), EnumTypeForErrorCodes.SCUS1036.errorMsg());

				}
				if (tracker) {

					response.setError(EnumTypeForErrorCodes.SCUS1043.name(), EnumTypeForErrorCodes.SCUS1043.errorMsg());
					response.setData("fail");
				}

			} else {

				response.setError(EnumTypeForErrorCodes.SCUS1036.name(), EnumTypeForErrorCodes.SCUS1036.errorMsg());

			}

		} catch (Exception e) {

			response.setError(EnumTypeForErrorCodes.SCUS1037.name(), EnumTypeForErrorCodes.SCUS1037.errorMsg());
			log.error(utils.toJson(response.getError()), e);

		}

		return response;
	}

	public ServiceResponse<TransferInventory> updatePackageStatus(@Valid TransferInventory transferInventory) {
		log.info("update package status");
		ServiceResponse<String> response = new ServiceResponse<>();
		try {
			int count = 0;
			Long totalScannedCount = 0l;
			Collection<PackageDetails> listPackageDetails = packageDetailsRepo
					.findByTransferInventoryId(transferInventory);
			for (PackageDetails packageDetails : listPackageDetails) {

				Long selectedcount = packageDetails.getAvailable() + packageDetails.getPendingQualityCheck()
						+ packageDetails.getUnAvailable();
				Long scannedCount = packageDetails.getAvailableScanned() + packageDetails.getPendingQCScanned()
						+ packageDetails.getUnAvailableScanned();
				totalScannedCount = totalScannedCount + scannedCount;
				if (selectedcount.equals(scannedCount)) {
					count++;
				}

			}
			if (count == listPackageDetails.size()) {

				transferInventory.setStatusId(inventoryMovingStatusRepo.findById(3l).get());
				transferInventoryRepo.save(transferInventory);

			} else if (totalScannedCount == 0) {
				transferInventory.setStatusId(inventoryMovingStatusRepo.findById(1l).get());

				transferInventoryRepo.save(transferInventory);

			}

			else {

				transferInventory.setStatusId(inventoryMovingStatusRepo.findById(2l).get());
				transferInventoryRepo.save(transferInventory);

			}

		} catch (Exception e) {

			response.setError(EnumTypeForErrorCodes.SCUS1520.name(), EnumTypeForErrorCodes.SCUS1520.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}
		return null;
	}

}

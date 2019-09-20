package com.mbb.mbbplatform.svcs.impl;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Optional;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;

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
import com.mbb.mbbplatform.domain.InventoryCondition;
import com.mbb.mbbplatform.domain.InventoryItem;
import com.mbb.mbbplatform.domain.InventoryItemStatus;
import com.mbb.mbbplatform.domain.PoAndBarcode;
import com.mbb.mbbplatform.domain.PoStatus;
import com.mbb.mbbplatform.domain.PoVendor;
import com.mbb.mbbplatform.domain.VendorItemDetails;
import com.mbb.mbbplatform.model.ServiceResponse;
import com.mbb.mbbplatform.model.Utils;
import com.mbb.mbbplatform.repos.FacilityRepository;
import com.mbb.mbbplatform.repos.InventoryConditionRepository;
import com.mbb.mbbplatform.repos.InventoryItemRepository;
import com.mbb.mbbplatform.repos.InventoryItemStatusRepository;
import com.mbb.mbbplatform.repos.InventoryRepository;
import com.mbb.mbbplatform.repos.PoAndBarcodeRepository;
import com.mbb.mbbplatform.repos.PoStatusRepository;
import com.mbb.mbbplatform.repos.PoVendorRepository;
import com.mbb.mbbplatform.repos.VendorItemDetailsRepository;
import com.mbb.mbbplatform.svcs.InventoryItemService;

@RestController
@SuppressWarnings("unchecked")

public class InventoryItemServiceImpl implements InventoryItemService {

	private static Logger log = LoggerFactory.getLogger(InventoryItemServiceImpl.class);

	@Autowired
	private InventoryItemRepository inventoryItemRepo;

	@Autowired
	private PoAndBarcodeRepository poAndBarcodeRepo;

	@Autowired
	private Utils utils;

	@Autowired
	private InventoryItemStatusRepository inventoryItemStatusRepo;

	@Autowired
	private InventoryRepository inventoryRepo;

	@Autowired
	private InventoryConditionRepository inventoryConditionRepo;

	@Autowired
	private FacilityRepository facilityRepo;

	@Autowired
	private PoVendorRepository poVendorRepo;

	@Autowired
	private PoStatusRepository poStatusRepo;

	@Autowired
	private VendorItemDetailsRepository vendorItemDetailsRepo;

	private static final String SKUCODE = "skuCode";

	/**
	 * getInventoryItemsById service implementation
	 * 
	 * @param id
	 * @return ServiceResponse<InventoryItem>
	 */
	@Override
	public ServiceResponse<InventoryItem> getInventoryItemsById(@NotNull @PathVariable Long id) {
		log.info("get inventory item by id");
		ServiceResponse<InventoryItem> response = new ServiceResponse<>();

		try {
			Optional<InventoryItem> inventoryItem = inventoryItemRepo.findById(id);

			if (inventoryItem.isPresent()) {
				response.setData(inventoryItem.get());
			}

		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS105.name(), EnumTypeForErrorCodes.SCUS105.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}

		return response;

	}

	/**
	 * updateInventoryItem service implementation
	 * 
	 * @param id
	 * @RequestBody inventoryItem
	 * @return ServiceResponse<InventoryItem>
	 */
	@Override
	public ServiceResponse<InventoryItem> updateInventoryItem(Long id, InventoryItem inventoryItem) {
		log.info("update inventory item");
		ServiceResponse<InventoryItem> response = new ServiceResponse<>();
		try {
			Optional<InventoryItem> inventoryItemExists = inventoryItemRepo.findById(inventoryItem.getId());
			InventoryItem serialNumberExists = null;
			Optional<Inventory> inventoryExists = inventoryRepo.findById(inventoryItem.getInventoryId().getId());
			if (inventoryItemExists.isPresent() && inventoryExists.isPresent()) {
				if (!inventoryItemExists.get().getScanned()) {
					if (inventoryItem.getFacilityId().getId()
							.equals(inventoryItemExists.get().getFacilityId().getId())) {

						if (inventoryExists.get().getSerialNumberStatus()) {

							serialNumberExists = inventoryItemRepo.findBySerialNumber(inventoryItem.getSerialNumber());
						}

						if (serialNumberExists == null || serialNumberExists.getId().equals(inventoryItem.getId())) {

							if (!inventoryItemExists.get().getApprovalstatus()) {

								inventoryItemExists.get().setFacilityId(inventoryItem.getFacilityId());
								inventoryItemExists.get()
										.setInventoryConditionId(inventoryItem.getInventoryConditionId());
								inventoryItemExists.get().setPoVendorId(inventoryItem.getPoVendorId());
								inventoryItemExists.get().setInventoryId(inventoryItem.getInventoryId());
								inventoryItemExists.get().setBarcode(inventoryItem.getBarcode());
								inventoryItemExists.get().setProductImage(inventoryItem.getProductImage());
								inventoryItemExists.get().setSerialNumber(inventoryItem.getSerialNumber());
								inventoryItemExists.get().setItemStatusId(inventoryItem.getItemStatusId());
								inventoryItemExists.get().setUpdatedUser(inventoryItem.getUpdatedUser());
								inventoryItemExists.get().setApprovalstatus(false);

								InventoryItem updatedInventoryItem = inventoryItemRepo.save(inventoryItemExists.get());

								response.setData(updatedInventoryItem);

							} else {

								inventoryItemExists.get().setFacilityId(inventoryItem.getFacilityId());
								inventoryItemExists.get()
										.setInventoryConditionId(inventoryItem.getInventoryConditionId());
								inventoryItemExists.get().setPoVendorId(inventoryItem.getPoVendorId());
								inventoryItemExists.get().setInventoryId(inventoryItem.getInventoryId());
								inventoryItemExists.get().setBarcode(inventoryItem.getBarcode());
								inventoryItemExists.get().setProductImage(inventoryItem.getProductImage());
								inventoryItemExists.get().setSerialNumber(inventoryItem.getSerialNumber());
								inventoryItemExists.get().setUpdatedUser(inventoryItem.getUpdatedUser());

								String skuCode = inventoryItem.getInventoryId().getSkuCode();
								Inventory inventoryObject = inventoryRepo.findBySkuCode(skuCode);
								Long inventory = inventoryObject.getInventory();
								Long pendingQc = inventoryObject.getPendingQcAccessment();
								Long badInventory = inventoryObject.getBadInventory();

								if ((inventoryItem.getInventoryConditionId().getId() == 1
										|| inventoryItem.getInventoryConditionId().getId() == 2)
										&& inventoryItem.getItemStatusId().getId()
												.equals(inventoryItemExists.get().getItemStatusId().getId())) {

								} else if (inventoryItem.getInventoryConditionId().getId() == 2) {
									if (inventoryItemExists.get().getItemStatusId().getId() == 1) {
										inventoryObject.setInventory(inventory - 1);
									} else if (inventoryItemExists.get().getItemStatusId().getId() == 5) {
										inventoryObject.setPendingQcAccessment(pendingQc - 1);
									}

									if (badInventory != null) {
										inventoryObject.setBadInventory(badInventory + 1);

									} else {
										inventoryObject.setBadInventory((long) 0);
										Long badInv = inventoryObject.getBadInventory();
										inventoryObject.setBadInventory(badInv + 1);
									}

								} else if (inventoryItem.getInventoryConditionId().getId() == 1) {

									if (inventoryItem.getItemStatusId().getId() == 1) {
										if (inventory != null) {
											inventoryObject.setInventory(inventory + 1);
										} else {
											inventoryObject.setInventory((long) 0);
											Long inv = inventoryObject.getInventory();
											inventoryObject.setInventory(inv + 1);
										}
										if (inventoryItemExists.get().getItemStatusId().getId() == 5) {
											inventoryObject.setPendingQcAccessment(pendingQc - 1);
										} else if (inventoryItemExists.get().getItemStatusId().getId() == 6) {
											inventoryObject.setBadInventory(badInventory - 1);
										}

									} else if (inventoryItem.getItemStatusId().getId() == 5) {

										if (pendingQc != null) {
											inventoryObject.setPendingQcAccessment(pendingQc + 1);
										} else {
											inventoryObject.setPendingQcAccessment((long) 0);
											Long pendingqc = inventoryObject.getPendingQcAccessment();
											inventoryObject.setPendingQcAccessment(pendingqc + 1);
										}
										if (inventoryItemExists.get().getItemStatusId().getId() == 1) {
											inventoryObject.setInventory(inventory - 1);
										} else if (inventoryItemExists.get().getItemStatusId().getId() == 6) {
											inventoryObject.setBadInventory(badInventory - 1);
										}
									}

								}

								inventoryItemExists.get().setItemStatusId(inventoryItem.getItemStatusId());

								Inventory dbInventory = inventoryRepo.save(inventoryObject);

								inventoryItemExists.get().setInventoryId(dbInventory);

								InventoryItem updatedInventoryItem = inventoryItemRepo.save(inventoryItemExists.get());

								response.setData(updatedInventoryItem);
							}

						} else {
							response.setError(EnumTypeForErrorCodes.SCUS132.name(),
									EnumTypeForErrorCodes.SCUS132.errorMsg());

						}
					} else {

						response.setError(EnumTypeForErrorCodes.SCUS064.name(),
								EnumTypeForErrorCodes.SCUS064.errorMsg());

					}
				} else {
					response.setError(EnumTypeForErrorCodes.SCUS061.name(), EnumTypeForErrorCodes.SCUS061.errorMsg());

				}

			} else {
				response.setError(EnumTypeForErrorCodes.SCUS044.name(), EnumTypeForErrorCodes.SCUS044.errorMsg());

			}
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS106.name(), EnumTypeForErrorCodes.SCUS106.errorMsg());
			log.error(utils.toJson(response.getError()), e);

		}
		return response;
	}

	/**
	 * deleteInventoryItem service implementation
	 * 
	 * @param id
	 * @return ServiceResponse<String>
	 */
	@Override
	public ServiceResponse<String> deleteInventoryItem(@NotNull @PathVariable Long id) {
		log.info("deleting InventoryItem");

		ServiceResponse<String> response = new ServiceResponse<>();

		try {
			Optional<InventoryItem> inventoryItem = inventoryItemRepo.findById(id);
			if (inventoryItem.isPresent()) {
				inventoryItemRepo.delete(inventoryItem.get());
			}
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS107.name(), EnumTypeForErrorCodes.SCUS107.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}
		return response;

	}

	/**
	 * getAllInventoryItems service implementation
	 * 
	 * @return ServiceResponse<Collection<InventoryItem>>
	 */
	@Override
	public ServiceResponse<Collection<InventoryItem>> getAllInventoryItems() {
		log.info("get All InventoryItems");
		ServiceResponse<Collection<InventoryItem>> response = new ServiceResponse<>();

		try {
			Collection<InventoryItem> inventoryItems = inventoryItemRepo.findAll();
			response.setData(inventoryItems);
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS123.name(), EnumTypeForErrorCodes.SCUS123.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}

		return response;

	}

	/**
	 * getAllInventoryItemStatus service implementation
	 * 
	 * @return ServiceResponse<Collection<InventoryItemStatus>>
	 */
	@Override
	public ServiceResponse<Collection<InventoryItemStatus>> getAllInventoryItemStatus() {
		log.info("get All InventoryItemStatus");
		ServiceResponse<Collection<InventoryItemStatus>> response = new ServiceResponse<>();

		try {
			Collection<InventoryItemStatus> inventoryItemStatus = inventoryItemStatusRepo.findAll();
			response.setData(inventoryItemStatus);

		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS109.name(), EnumTypeForErrorCodes.SCUS109.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}

		return response;

	}

	/**
	 * getInventoryItemBySkuCode service implementation
	 * 
	 * @param skuCode
	 * @return ServiceResponse<Collection<InventoryItem>>
	 */
	@Override
	public ServiceResponse<Collection<InventoryItem>> getInventoryItemBySkuCode(@NotNull @PathVariable String skuCode) {
		log.info("get InventoryItem by skucode");
		ServiceResponse<Collection<InventoryItem>> response = new ServiceResponse<>();
		try {

			Inventory inventory = inventoryRepo.findBySkuCode(skuCode);

			Collection<InventoryItem> inventoryItem = inventoryItemRepo.findByInventoryId(inventory);

			response.setData(inventoryItem);

		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS102.name(), EnumTypeForErrorCodes.SCUS102.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}

		return response;
	}

	/**
	 * updateInventoryItemStatus service implementation
	 * 
	 * @param id
	 * @param status
	 * @return ServiceResponse<InventoryItem>
	 */
	@Override
	public ServiceResponse<InventoryItem> updateInventoryItemStatus(@Valid @PathVariable Long id,
			@Valid @PathVariable Long status) {
		log.info("updating Inventory Item Status");
		ServiceResponse<InventoryItem> response = new ServiceResponse<>();
		try {
			Optional<InventoryItem> inventoryItem = inventoryItemRepo.findById(id);
			if (inventoryItem.isPresent()) {
				Optional<InventoryItemStatus> inventoryItemStatus = inventoryItemStatusRepo.findById(status);
				if (inventoryItemStatus.isPresent()) {
					inventoryItem.get().setItemStatusId(inventoryItemStatus.get());
					InventoryItem inventoryItem1 = inventoryItemRepo.save(inventoryItem.get());
					response.setData(inventoryItem1);
				}
			} else {
				response.setError(EnumTypeForErrorCodes.SCUS103.name(), EnumTypeForErrorCodes.SCUS103.errorMsg());
			}
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS104.name(), EnumTypeForErrorCodes.SCUS104.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}
		return response;
	}

	/**
	 * getInventoryItemByBarcode service implementation
	 * 
	 * @param barcode
	 * @return ServiceResponse<InventoryItem>
	 */
	@Override
	public ServiceResponse<InventoryItem> getInventoryItemByBarcode(@NotNull @PathVariable String barcode) {
		log.info("get InventoryItem By Barcode");
		ServiceResponse<InventoryItem> response = new ServiceResponse<>();
		try {

			InventoryItem inventoryItem = inventoryItemRepo.findByBarcode(barcode);

			if (inventoryItem == null || inventoryItem.getItemStatusId().getId() == 7) {
				response.setError(EnumTypeForErrorCodes.SCUS124.name(), EnumTypeForErrorCodes.SCUS124.errorMsg());
			} else {
				if (!inventoryItem.getScanned()) {
					response.setData(inventoryItem);
				} else {

					response.setError(EnumTypeForErrorCodes.SCUS061.name(), EnumTypeForErrorCodes.SCUS061.errorMsg());

				}
			}

		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS105.name(), EnumTypeForErrorCodes.SCUS105.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}

		return response;
	}

	/**
	 * getInventoryItemsBasedOnStatus service implementation
	 * 
	 * @param status
	 * @return ServiceResponse<Collection<InventoryItem>>
	 */
	@Override
	public ServiceResponse<Collection<InventoryItem>> getInventoryItemsBasedOnStatus(
			@NotNull @PathVariable Long status) {
		log.info("getting InventoryItems Based on status");

		ServiceResponse<Collection<InventoryItem>> response = new ServiceResponse<>();

		try {
			Optional<InventoryItemStatus> inventoryItemStatus = inventoryItemStatusRepo.findById(status);

			Collection<InventoryItem> inventory = inventoryItemRepo.findByItemStatusId(inventoryItemStatus);

			response.setData(inventory);

		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS112.name(), EnumTypeForErrorCodes.SCUS112.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}

		return response;
	}

	/**
	 * newInventoryItem service implementation
	 * 
	 * @RequestBody inventoryItem
	 * @return ServiceResponse<Collection<InventoryItem>>
	 */
	@Override
	public ServiceResponse<List<InventoryItem>> addNewInventoryItem(
			@Valid @RequestBody List<InventoryItem> inventoryItem) {
		log.info("adding new inventory item");
		ServiceResponse<List<InventoryItem>> response = new ServiceResponse<>();

		try {
			List<InventoryItem> inventoryItemList1 = new ArrayList<>();

			for (InventoryItem inventoryItem1 : inventoryItem) {

				InventoryItem barcodeExists = inventoryItemRepo.findByBarcode(inventoryItem1.getBarcode());
				if (barcodeExists == null) {
					InventoryItem serialNumberExists = null;
					Optional<Inventory> inventoryExists = inventoryRepo
							.findById(inventoryItem1.getInventoryId().getId());
					if (inventoryExists.isPresent()) {
						if (inventoryExists.get().getActive()) {
							if (inventoryExists.get().getSerialNumberStatus().booleanValue()) {

								serialNumberExists = inventoryItemRepo
										.findBySerialNumber(inventoryItem1.getSerialNumber());
							}

							if (serialNumberExists == null) {
								Inventory inventoryDetails = inventoryItem1.getInventoryId();
								String skuCode = inventoryDetails.getSkuCode();
								Inventory inventory1 = inventoryRepo.findBySkuCode(skuCode);
								Long approvalcount = inventory1.getPendingApprovalCount();
								if (approvalcount == null) {
									approvalcount = 0l;
									inventory1.setPendingApprovalCount(approvalcount + 1);

								} else {
									inventory1.setPendingApprovalCount(approvalcount + 1);

								}

								inventory1.setEnabled(true);
								inventoryRepo.save(inventory1);
								inventoryItem1.setInventoryId(inventoryDetails);
								inventoryItem1.setReturnProduct(false);
								inventoryItem1.setApprovalstatus(false);
								inventoryItem1.setScanned(false);
								inventoryItemRepo.save(inventoryItem1);
								PoVendor poVendor = poVendorRepo.findById(inventoryItem1.getPoVendorId().getId()).get();
								List<VendorItemDetails> vendorItem = vendorItemDetailsRepo.findByPoVendorId(poVendor);
								Long totalCount = 0l;
								for (VendorItemDetails vendorItemDetails : vendorItem) {

									totalCount = totalCount + vendorItemDetails.getQuantity();
								}

								Collection<InventoryItem> inventoryItemList = inventoryItemRepo
										.findByPoVendorId(inventoryItem1.getPoVendorId());

								if (inventoryItemList.size() < totalCount) {

									PoStatus poStatus = poStatusRepo.findById(2l).get();

									poVendor.setStatus(poStatus);
									poVendorRepo.save(poVendor);
								} else if (inventoryItemList.size() == totalCount) {
									PoStatus poStatus = poStatusRepo.findById(3l).get();

									poVendor.setStatus(poStatus);
									poVendorRepo.save(poVendor);

								}

								inventoryItemList1.add(inventoryItem1);
								response.setData(inventoryItemList1);

							} else {

								response.setError(EnumTypeForErrorCodes.SCUS131.name(),
										EnumTypeForErrorCodes.SCUS131.errorMsg());

							}
						} else {

							response.setError(EnumTypeForErrorCodes.SCUS065.name(),
									EnumTypeForErrorCodes.SCUS065.errorMsg());

						}
					} else {
						response.setError(EnumTypeForErrorCodes.SCUS044.name(),
								EnumTypeForErrorCodes.SCUS044.errorMsg());

					}
				} else {
					response.setError(EnumTypeForErrorCodes.SCUS118.name(), EnumTypeForErrorCodes.SCUS118.errorMsg());
				}
			}

		} catch (

		Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS110.name(), EnumTypeForErrorCodes.SCUS110.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}

		return response;
	}

	/**
	 * getAllInventoryConditions service implementation
	 * 
	 * @return ServiceResponse<Collection<InventoryCondition>>
	 */
	@Override
	public ServiceResponse<Collection<InventoryCondition>> getAllInventoryConditions() {
		log.info("getting all Inventory conditions");
		ServiceResponse<Collection<InventoryCondition>> response = new ServiceResponse<>();

		try {
			Collection<InventoryCondition> inventoryConditions = inventoryConditionRepo.findAll();
			response.setData(inventoryConditions);

		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS114.name(), EnumTypeForErrorCodes.SCUS114.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}

		return response;
	}

	/**
	 * getAllFacilities service implementation
	 * 
	 * @return ServiceResponse<Collection<Facility>>
	 */
	@Override
	public ServiceResponse<Collection<Facility>> getAllFacilities() {
		log.info("getting all facilities");
		ServiceResponse<Collection<Facility>> response = new ServiceResponse<>();

		try {
			Collection<Facility> facilities = facilityRepo.findAll();
			response.setData(facilities);

		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS115.name(), EnumTypeForErrorCodes.SCUS115.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}

		return response;
	}

	/**
	 * getStatusBasedOnCondition service implementation
	 * 
	 * @return ServiceResponse<Collection<Facility>>
	 */
	@Override
	public ServiceResponse<Collection<InventoryItemStatus>> getStatusBasedOnCondirion(
			@NotNull @PathVariable Long conditionId) {
		log.info("get Status Based On Condition");
		ServiceResponse<Collection<InventoryItemStatus>> response = new ServiceResponse<>();
		try {
			Optional<InventoryCondition> invCondition = inventoryConditionRepo.findById(conditionId);
			if (invCondition.isPresent()) {
				Collection<InventoryItemStatus> statusDetails = inventoryItemStatusRepo
						.getStatusByInventoryCondition(invCondition.get().getId());
				response.setData(statusDetails);
			}
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS116.name(), EnumTypeForErrorCodes.SCUS116.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}

		return response;
	}

	/**
	 * getAllBarcodes service implementation
	 * 
	 * @return ServiceResponse<Collection<InventoryItem>>
	 */
	@Override
	public ServiceResponse<Collection<InventoryItem>> getAllBarcodes() {
		log.info("getting all barcodes");
		ServiceResponse<Collection<InventoryItem>> response = new ServiceResponse<>();
		try {
			Collection<InventoryItem> barcodesLsit = inventoryItemRepo.findAll();
			response.setData(barcodesLsit);

		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS119.name(), EnumTypeForErrorCodes.SCUS119.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}

		return response;
	}

	/**
	 * viewInventoryItemByBarcode service implementation
	 * 
	 * @param barcode
	 * @return ServiceResponse<InventoryItem>
	 */
	@Override
	public ServiceResponse<InventoryItem> viewInventoryItemByBarcode(@NotNull String barcode) {
		log.info("getting inventory item details by barcode");
		ServiceResponse<InventoryItem> response = new ServiceResponse<>();
		try {
			InventoryItem inventoryItem = inventoryItemRepo.findByBarcode(barcode);
			if (inventoryItem != null) {
				if (inventoryItem.getInventoryId().getActive()) {
					response.setData(inventoryItem);
				} else {

					response.setError(EnumTypeForErrorCodes.SCUS065.name(), EnumTypeForErrorCodes.SCUS065.errorMsg());

				}
			} else {
				response.setError(EnumTypeForErrorCodes.SCUS044.name(), EnumTypeForErrorCodes.SCUS044.errorMsg());

			}
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS105.name(), EnumTypeForErrorCodes.SCUS105.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}

		return response;
	}

	/**
	 * updateInventoryItemCondition service implementation
	 * 
	 * @param id
	 * @param conditionId
	 * @return ServiceResponse<InventoryItem>
	 */
	@Override
	public ServiceResponse<InventoryItem> updateInventoryItemCondition(@Valid Long id, @Valid Long conditionId) {

		log.info("updating Inventory Item Status");
		ServiceResponse<InventoryItem> response = new ServiceResponse<>();
		try {
			Optional<InventoryItem> inventoryItem = inventoryItemRepo.findById(id);
			if (inventoryItem.isPresent()) {
				Optional<InventoryCondition> inventoryItemCondition = inventoryConditionRepo.findById(conditionId);
				if (inventoryItemCondition.isPresent()) {
					inventoryItem.get().setInventoryConditionId(inventoryItemCondition.get());
					InventoryItem inventoryItem1 = inventoryItemRepo.save(inventoryItem.get());
					response.setData(inventoryItem1);
				}
			} else {
				response.setError(EnumTypeForErrorCodes.SCUS103.name(), EnumTypeForErrorCodes.SCUS103.errorMsg());
			}
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS113.name(), EnumTypeForErrorCodes.SCUS113.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}
		return response;
	}

	/**
	 * getItemDetailsByBarcode service implementation
	 * 
	 * @param barcode
	 * @return ServiceResponse<JSONObject>
	 */
	@Override
	public ServiceResponse<JSONObject> getItemDetailsByBarcode(@NotNull String barcode) {
		log.info("getting inventory item details by barcode");
		ServiceResponse<JSONObject> response = new ServiceResponse<>();
		try {
			String barcodeId = barcode.substring(0, 4);
			JSONObject obj = new JSONObject();
			Inventory inventory = inventoryRepo.findByBarcodeId(barcodeId);
			PoAndBarcode poAndBarcode = poAndBarcodeRepo.findByBarcode(barcode);
			if (poAndBarcode == null) {
				response.setError(EnumTypeForErrorCodes.SCUS130.name(), EnumTypeForErrorCodes.SCUS130.errorMsg());

			} else if (!inventory.getActive()) {
				response.setError(EnumTypeForErrorCodes.SCUS065.name(), EnumTypeForErrorCodes.SCUS065.errorMsg());

			} else {

				obj.put("inventoryId", inventory.getId());
				obj.put(SKUCODE, inventory.getSkuCode());
				obj.put("productName", inventory.getProductName());
				obj.put("poNumber", poAndBarcode.getPoVendorId());
				if (!inventory.getSerialNumberStatus()) {
					obj.put("serial", 0);

				} else {

					obj.put("serial", 1);
				}

				response.setData(obj);

			}

		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS105.name(), EnumTypeForErrorCodes.SCUS105.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}

		return response;
	}

	@Override
	public ServiceResponse<List<InventoryItem>> updateApprovalStatus(@Valid Long poVendorId) {

		log.info("updating approval status");
		ServiceResponse<List<InventoryItem>> response = new ServiceResponse<>();
		List<InventoryItem> list = new ArrayList<>();
		try {
			PoVendor poVendor = poVendorRepo.findById(poVendorId).get();
			if (poVendor.getStatus().getId() == 4) {
				response.setError(EnumTypeForErrorCodes.SCUS127.name(), EnumTypeForErrorCodes.SCUS127.errorMsg());

			} else {

				List<VendorItemDetails> listVendorItem = vendorItemDetailsRepo.findByPoVendorId(poVendor);
				Long quantity = 0l;
				for (VendorItemDetails vendorItemDetails : listVendorItem) {
					quantity = quantity + vendorItemDetails.getQuantity();
				}
				Collection<InventoryItem> listInventoryItem = inventoryItemRepo.findByPoVendorId(poVendor);
				if (quantity == listInventoryItem.size()) {

					for (InventoryItem inventoryItem : listInventoryItem) {
						if (!inventoryItem.getApprovalstatus()) {

							Optional<Inventory> inventory1 = inventoryRepo
									.findById(inventoryItem.getInventoryId().getId());
							if (inventory1.isPresent()) {
								Inventory inventory = inventory1.get();
								Long pendingApproval = inventory.getPendingApprovalCount();

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

								} else if (inventoryItem.getItemStatusId().getId() == 6) {
									Long badInventory = inventory.getBadInventory();
									if (badInventory != null) {
										inventory.setBadInventory(badInventory + 1);

									} else {
										inventory.setBadInventory((long) 0);
										Long badInv = inventory.getBadInventory();
										inventory.setBadInventory(badInv + 1);
									}
								}

								if (pendingApproval == null) {
									pendingApproval = 0l;
									inventory.setPendingApprovalCount(pendingApproval - 1);

								} else {
									inventory.setPendingApprovalCount(pendingApproval - 1);

								}
								inventoryRepo.save(inventory);
								inventoryItem.setApprovalstatus(true);
								inventoryItemRepo.save(inventoryItem);
								list.add(inventoryItem);
							} else {

								response.setError(EnumTypeForErrorCodes.SCUS044.name(),
										EnumTypeForErrorCodes.SCUS044.errorMsg());

							}
						}
					}
					PoStatus poStatus = poStatusRepo.findById(4l).get();

					poVendor.setStatus(poStatus);
					poVendorRepo.save(poVendor);

					response.setData(list);

				} else {
					response.setError(EnumTypeForErrorCodes.SCUS126.name(), EnumTypeForErrorCodes.SCUS126.errorMsg());

				}
			}

		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS129.name(), EnumTypeForErrorCodes.SCUS129.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}

		return response;
	}

	@Override
	public ServiceResponse<List<InventoryItem>> getPendingApprovalStatuscount(@Valid Long poVendorId) {
		log.info("updating approval status");
		ServiceResponse<List<InventoryItem>> response = new ServiceResponse<>();
		List<InventoryItem> list = new ArrayList<>();
		try {
			PoVendor poVendor = poVendorRepo.findById(poVendorId).get();
			Collection<InventoryItem> listInventoryItem = inventoryItemRepo.findByPoVendorId(poVendor);
			for (InventoryItem inventoryItem : listInventoryItem) {

				if (!inventoryItem.getApprovalstatus()) {
					list.add(inventoryItem);

				}
			}

			response.setData(list);

		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS105.name(), EnumTypeForErrorCodes.SCUS105.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}

		return response;
	}

	@Override
	public ServiceResponse<JSONObject> viewInventoryApproval(@Valid Long poVendorId) {
		log.info("view inventory approval ");
		ServiceResponse<JSONObject> response = new ServiceResponse<>();
		List<JSONObject> list = new ArrayList<>();
		List<JSONObject> listVendorItemDetails = new ArrayList<>();

		JSONObject totalList = new JSONObject();

		try {
			PoVendor poVendor = poVendorRepo.findById(poVendorId).get();
			Collection<InventoryItem> listInvItem = inventoryItemRepo.findByPoVendorId(poVendor);
			List<VendorItemDetails> vendorItemList = vendorItemDetailsRepo.findByPoVendorId(poVendor);
			for (InventoryItem inventoryItem : listInvItem) {
				JSONObject obj = new JSONObject();
				Optional<Inventory> inventory = inventoryRepo.findById(inventoryItem.getInventoryId().getId());
				if (inventory.isPresent()) {

					obj.put("productName", inventory.get().getProductName());
					obj.put(SKUCODE, inventory.get().getSkuCode());
					obj.put("barCode", inventoryItem.getBarcode());
					obj.put("facility", inventoryItem.getFacilityId().getFacility());
					obj.put("serialNumber", inventoryItem.getSerialNumber());

				}
				list.add(obj);
			}

			for (VendorItemDetails vendorItemDetails : vendorItemList) {
				JSONObject obj = new JSONObject();
				obj.put("quantity", vendorItemDetails.getQuantity());
				obj.put(SKUCODE, vendorItemDetails.getSkuCode());
				listVendorItemDetails.add(obj);
			}
			totalList.put("barcodeDetails", list);
			totalList.put("vendorItemDetails", listVendorItemDetails);
			response.setData(totalList);
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS128.name(), EnumTypeForErrorCodes.SCUS128.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}
		return response;
	}

	@Override
	public ServiceResponse<List<InventoryItem>> updateSerialNumbers() {
		log.info("updating serial numbers ");
		ServiceResponse<List<InventoryItem>> response = new ServiceResponse<>();
		List<InventoryItem> list = new ArrayList<>();
		try {
			Collection<Inventory> inventoryList = inventoryRepo.findBySerialNumberStatus(true);
			for (Inventory inventory : inventoryList) {

				Collection<InventoryItem> listInventoryItem = inventoryItemRepo.findByInventoryId(inventory);
				for (InventoryItem inventoryItem : listInventoryItem) {
					String serialNumber = "DSN_" + inventoryItem.getId();
					inventoryItem.setSerialNumber(serialNumber);
					inventoryItemRepo.save(inventoryItem);
					list.add(inventoryItem);
				}

			}
			response.setData(list);
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS133.name(), EnumTypeForErrorCodes.SCUS133.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}
		return response;
	}
}

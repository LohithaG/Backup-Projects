package com.mbb.mbbplatform.svcs.impl;

import java.awt.image.BufferedImage;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.time.LocalDate;
import java.time.LocalTime;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

import javax.imageio.ImageIO;
import javax.validation.Valid;
import javax.validation.constraints.NotNull;

import org.apache.commons.lang.StringUtils;
import org.json.JSONArray;
import org.json.simple.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.Context;

import com.mbb.mbbplatform.common.EnumTypeForErrorCodes;
import com.mbb.mbbplatform.domain.Barcode;
import com.mbb.mbbplatform.domain.ChildAccessories;
import com.mbb.mbbplatform.domain.Facility;
import com.mbb.mbbplatform.domain.FacilityWiseInventory;
import com.mbb.mbbplatform.domain.FacilityWiseThreshold;
import com.mbb.mbbplatform.domain.Inventory;
import com.mbb.mbbplatform.domain.InventoryItem;
import com.mbb.mbbplatform.domain.InventorySnapshot;
import com.mbb.mbbplatform.domain.PoVendor;
import com.mbb.mbbplatform.domain.Role;
import com.mbb.mbbplatform.domain.User;
import com.mbb.mbbplatform.domain.VendorItemDetails;
import com.mbb.mbbplatform.model.ServiceResponse;
import com.mbb.mbbplatform.model.Utils;
import com.mbb.mbbplatform.repos.BarCodeRepository;
import com.mbb.mbbplatform.repos.ChildAccessoriesRepository;
import com.mbb.mbbplatform.repos.FacilityRepository;
import com.mbb.mbbplatform.repos.FacilityWiseThresholdRepository;
import com.mbb.mbbplatform.repos.InventoryItemRepository;
import com.mbb.mbbplatform.repos.InventoryRepository;
import com.mbb.mbbplatform.repos.InventorySnapshotRepository;
import com.mbb.mbbplatform.repos.PoVendorRepository;
import com.mbb.mbbplatform.repos.UserRepository;
import com.mbb.mbbplatform.repos.VendorItemDetailsRepository;
import com.mbb.mbbplatform.svcs.EmailService;
import com.mbb.mbbplatform.svcs.InventoryService;
import com.mbb.mbbplatform.svcs.UserService;
import com.mortennobel.imagescaling.ResampleOp;

@RestController
@SuppressWarnings("unchecked")
public class InventoryServiceImpl implements InventoryService {

	private static Logger log = LoggerFactory.getLogger(InventoryServiceImpl.class);

	@Autowired
	private InventoryRepository inventoryRepo;

	@Autowired
	private InventoryItemRepository inventoryItemRepo;

	@Autowired
	private PoVendorRepository poVendorRepo;

	@Autowired
	private VendorItemDetailsRepository vendorItemDetailsRepo;

	@Autowired
	private TemplateEngine templateEngine;
	@Autowired
	private Utils utils;

	@Autowired
	private InventorySnapshotRepository inventorySnapshotRepo;

	@Autowired
	private FacilityWiseThresholdRepository facilityWiseThresholdRepository;

	@Autowired
	private FacilityRepository facilityRepository;

	@Autowired
	private EmailService emailsvc;

	@Autowired
	private BarCodeRepository barCodeRepo;

	@Autowired
	private ChildAccessoriesRepository childAccessoriesRepo;

	@Autowired
	private UserService userSvc;
	@Autowired
	private UserRepository userRepo;

	@Value("${userinventorycount}")
	private Integer userInventoryCount;

	private static final String INVENTORY = "inventory";

	private static final String SKUCODE = "skuCode";

	private static final String PRODUCTNAME = "productName";

	private static final String DESCRIPTION = "description";

	private static final String SERIALNUMBERSTATUS = "serialNumberStatus";

	private static final String FACILITY = "facility";

	private static final String THRESHOLDLEVEL = "thresholdLevel";

	private static final String BADINVENTORY = "badInventory";

	private static final String BARCODEID = "barcodeId";

	private static final String PENDINGQCASSEMENT = "pendingQcAccessment";

	private static final String QRCODE = "qrcode";

	private static final String CREATEDDATE = "createdDate";

	private static final String UPDATEDDATE = "updateDate";

	private static final String SERIALNUMBER = "serialNumber";

	private static final String UPDATEDUSER = "updatedUser";

	private static final String PENDINGAPPROVALCOUNT = "pendingApprovalCount";

	private static final String CREATEDUSER = "createdUser";

	private static final String INTRANSITCOUNT = "inTransitCount";

	private static final String ACTIVE = "active";

	private static final String DISPATCH = "dispatch";

	private static final String ENABLE = "enabled";

	private static final String SKUIMAGE = "SKUImage";

	private static final String PRODUCTIMAGE = "productImage";
	
	private static final String ACCESSORIESSTATUS = "accessoriesStatus";
	
	private static final String ACCESSORYLIST = "accessoriesList";
	
	private static final String INVENTORYLIST = "inventoryList";
	
	private static final String ACCESSORYSTATUS = "accessoryStatus";
	
	private static final String PARENT = "Parent";

	private static final String CHILD = "Child";
	
	private static final String PONUMBER = "poNumber";







	String templateforFacilityWiseThresholdLevel = "email/facilityWiseThresholdlevel";

	String templateforOverAllThresholdLevel = "email/overAllThresholdlevel";

	Context context = new Context();
	Context context1 = new Context();

	/**
	 * getInventoryById service implementation
	 * 
	 * @param id
	 * @return ServiceResponse<Inventory>
	 */
	@Override
	public ServiceResponse<Inventory> getInventoryById(@NotNull @PathVariable Long id) {
		log.info("getting Inventory By Id");
		ServiceResponse<Inventory> response = new ServiceResponse<>();

		try {
			Optional<Inventory> inventory = inventoryRepo.findById(id);
			if (inventory.isPresent()) {
				response.setData(inventory.get());
			}
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS043.name(), EnumTypeForErrorCodes.SCUS043.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}

		return response;
	}

	/**
	 * updateInventory service implementation
	 * 
	 * @param id
	 * @RequestBody inventory
	 * @return ServiceResponse<Inventory>
	 */
	@Override
	public ServiceResponse<Inventory> updateInventory(@NotNull @PathVariable Long id,
			@Valid @RequestBody Inventory inventory) {
		log.info("updating Inventory");
		ServiceResponse<Inventory> response = new ServiceResponse<>();
		try {
			Optional<Inventory> inventoryExists = inventoryRepo.findById(inventory.getId());
			if (inventoryExists.isPresent()) {
				Inventory skuCodeExists = inventoryRepo.findBySkuCode(inventory.getSkuCode());
				if (skuCodeExists == null || skuCodeExists.getId().equals(inventory.getId())) {
					inventoryExists.get().setSkuCode(inventory.getSkuCode());
					inventoryExists.get().setEnabled(inventory.getEnabled());
					inventoryExists.get().setInventory(inventory.getInventory());
					inventoryExists.get().setProductName(inventory.getProductName());
					inventoryExists.get().setCreatedTime(inventory.getCreatedTime());
					inventoryExists.get().setUpdatedTime(inventory.getUpdatedTime());
					inventoryExists.get().setBadInventory(inventory.getBadInventory());
					inventoryExists.get().setPendingQcAccessment(inventory.getPendingQcAccessment());
					inventoryExists.get().setDescription(inventory.getDescription());
					Inventory updatedInventory = inventoryRepo.save(inventoryExists.get());
					response.setData(updatedInventory);
				} else {
					response.setError(EnumTypeForErrorCodes.SCUS046.name(), EnumTypeForErrorCodes.SCUS046.errorMsg());
				}
			} else {
				response.setError(EnumTypeForErrorCodes.SCUS044.name(), EnumTypeForErrorCodes.SCUS044.errorMsg());
			}
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS045.name(), EnumTypeForErrorCodes.SCUS045.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}
		return response;
	}

	/**
	 * deleteInventory service implementation
	 * 
	 * @param id
	 * @return ServiceResponse<String>
	 */
	@Override
	public ServiceResponse<String> deleteInventory(@NotNull @PathVariable Long id) {
		log.info("deleting Inventory");
		ServiceResponse<String> response = new ServiceResponse<>();
		try {
			Optional<Inventory> inventory = inventoryRepo.findById(id);
			if (inventory.isPresent()) {
				inventoryRepo.delete(inventory.get());
			}
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS042.name(), EnumTypeForErrorCodes.SCUS042.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}
		return response;

	}

	/**
	 * addInventory service implementation
	 * 
	 * @RequestBody inventory
	 * @return ServiceResponse<Inventory>
	 */

	@Override
	public ServiceResponse<Inventory> addInventory(@Valid @RequestBody String inventoryWithFacility) {
		log.info("adding Inventory");
		ServiceResponse<Inventory> response = new ServiceResponse<>();
		try {

			org.json.JSONObject obj = new org.json.JSONObject(inventoryWithFacility);

			JSONArray facilitiesThresholdobj = obj.getJSONArray("facilitiesThreshold");

			org.json.JSONObject inventoryObject = obj.getJSONObject(INVENTORY);

			Inventory eventCodeExists = inventoryRepo.findBySkuCode(inventoryObject.getString(SKUCODE));

			if (eventCodeExists != null) {

				response.setError(EnumTypeForErrorCodes.SCUS040.name(), EnumTypeForErrorCodes.SCUS040.errorMsg());
			} else {
				Barcode barcode = new Barcode();
				Barcode code = barCodeRepo.findBylastRecord();
				Long nxtInvId = code.getNxtInventoryId() + 1;
				String barcode1 = nxtInvId.toString();
				String barcodeId = StringUtils.leftPad(barcode1, 4, "0");
				barcode.setNxtInventoryId(nxtInvId);
				barcode.setSku(inventoryObject.getString(SKUCODE));
				barCodeRepo.save(barcode);

				Inventory newinventory = new Inventory();
				newinventory.setSkuCode(inventoryObject.getString(SKUCODE));
				newinventory.setProductName(inventoryObject.getString(PRODUCTNAME));
				newinventory.setDescription(inventoryObject.getString(DESCRIPTION));
				newinventory.setAccessoriesStatus(inventoryObject.getBoolean(ACCESSORIESSTATUS));

				newinventory.setActive(inventoryObject.getBoolean(ACTIVE));
				newinventory.setSerialNumberStatus(inventoryObject.getBoolean(SERIALNUMBERSTATUS));
				newinventory.setBarcodeId(barcodeId);
				newinventory.setInTransitCount(0l);
				newinventory.setPendingApprovalCount(0l);

				Inventory savedInventoryInventory = inventoryRepo.save(newinventory);

				for (int i = 0; i < facilitiesThresholdobj.length(); i++) {
					org.json.JSONObject facilityobj = facilitiesThresholdobj.getJSONObject(i);

					Long facilityId = facilityobj.getJSONObject(FACILITY).getLong("id");
					Optional<Facility> existFacility = facilityRepository.findById(facilityId);
					if (existFacility.isPresent()) {
						FacilityWiseThreshold facilityWiseThreshold = new FacilityWiseThreshold();
						facilityWiseThreshold.setInventoryId(savedInventoryInventory);
						facilityWiseThreshold.setThresholdLevel(facilityobj.getLong(THRESHOLDLEVEL));
						facilityWiseThreshold.setFacilityId(existFacility.get());
						facilityWiseThresholdRepository.save(facilityWiseThreshold);

					} else {
						response.setError(EnumTypeForErrorCodes.SUCS040.name(),
								EnumTypeForErrorCodes.SUCS040.errorMsg());

					}

				}

				JSONArray accessoriesList = obj.getJSONArray(ACCESSORYLIST);

				for (int i = 0; i < accessoriesList.length(); i++) {

					Long accessorieId = accessoriesList.getLong(i);
					ChildAccessories childAccessories = new ChildAccessories();

					childAccessories.setChildId(accessorieId);
					childAccessories.setParentId(savedInventoryInventory.getId());
					if (savedInventoryInventory.getAccessoriesStatus()) {
						childAccessoriesRepo.save(childAccessories);
					} else {
						response.setError(EnumTypeForErrorCodes.SCUS067.name(),
								EnumTypeForErrorCodes.SCUS067.errorMsg());

					}
				}

				response.setData(savedInventoryInventory);
			}

		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SUCS039.name(), EnumTypeForErrorCodes.SUCS039.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}
		return response;
	}

	/**
	 * updateSku service implementation
	 * 
	 * @param id
	 * @RequestBody inventory
	 * @return ServiceResponse<Inventory>
	 */
	@Override
	public ServiceResponse<Inventory> updateSku(@Valid @RequestBody String inventoryWithFacility, Long inventoryId,
			Long userId) {
		log.info("updating skucodes");
		Inventory updatedInventory = null;
		ServiceResponse<Inventory> response = new ServiceResponse<>();
		try {
			org.json.JSONObject obj = new org.json.JSONObject(inventoryWithFacility);

			JSONArray facilityWiseThresholdobj = obj.getJSONArray("facilitiesThreshold");

			org.json.JSONObject inventoryObject = obj.getJSONObject(INVENTORY);

			Optional<Inventory> inventoryExists = inventoryRepo.findById(inventoryId);

			if (inventoryExists.isPresent()) {
				Inventory skuCodeExists = inventoryRepo.findBySkuCode(inventoryObject.getString(SKUCODE));

				Collection<InventoryItem> itemExists = inventoryItemRepo.findByInventoryId(skuCodeExists);

				Optional<User> user = userRepo.findById(userId);

				if (user.isPresent()) {
					Set<Role> userRole = user.get().getRoles();

					for (Role role : userRole) {
						if (role.getName().equals("SUPERADMIN")) {

							if (skuCodeExists != null && skuCodeExists.getId() == inventoryObject.getLong("id")) {

								inventoryExists.get().setSkuCode(inventoryObject.getString(SKUCODE));
								inventoryExists.get().setProductName(inventoryObject.getString(PRODUCTNAME));

								inventoryExists.get().setDescription(inventoryObject.getString(DESCRIPTION));
								inventoryExists.get()
										.setSerialNumberStatus(inventoryObject.getBoolean(SERIALNUMBERSTATUS));
								inventoryExists.get().setActive(inventoryObject.getBoolean(ACTIVE));
								inventoryExists.get()
										.setAccessoriesStatus(inventoryObject.getBoolean(ACCESSORIESSTATUS));

								updatedInventory = inventoryRepo.save(inventoryExists.get());

								List<FacilityWiseThreshold> listofFacilityWiseThreshold = facilityWiseThresholdRepository
										.findByInventoryId(skuCodeExists);

								for (int i = 0; i < listofFacilityWiseThreshold.size(); i++) {
									org.json.JSONObject facilityobj = facilityWiseThresholdobj.getJSONObject(i);

									Long facilityId = facilityobj.getJSONObject(FACILITY).getLong("id");
									Optional<Facility> existFacility = facilityRepository.findById(facilityId);
									FacilityWiseThreshold facilityWiseThreshold = listofFacilityWiseThreshold.get(i);
									if (existFacility.isPresent()) {

										facilityWiseThreshold.setInventoryId(updatedInventory);
										facilityWiseThreshold.setThresholdLevel(facilityobj.getLong(THRESHOLDLEVEL));
										facilityWiseThreshold.setFacilityId(existFacility.get());
										facilityWiseThresholdRepository.save(facilityWiseThreshold);

									} else {
										response.setError(EnumTypeForErrorCodes.SUCS040.name(),
												EnumTypeForErrorCodes.SUCS040.errorMsg());
									}

								}
								response.setData(updatedInventory);
							} else {
								response.setError(EnumTypeForErrorCodes.SCUS046.name(),
										EnumTypeForErrorCodes.SCUS046.errorMsg());
							}

						} else {

						
								if (skuCodeExists == null || skuCodeExists.getId() == inventoryObject.getLong("id")) {
									inventoryExists.get().setSkuCode(inventoryObject.getString(SKUCODE));
									inventoryExists.get().setProductName(inventoryObject.getString(PRODUCTNAME));
									inventoryExists.get().setDescription(inventoryObject.getString(DESCRIPTION));
									inventoryExists.get()
											.setSerialNumberStatus(inventoryObject.getBoolean(SERIALNUMBERSTATUS));
									inventoryExists.get()
											.setAccessoriesStatus(inventoryObject.getBoolean(ACCESSORIESSTATUS));

									inventoryExists.get().setActive(inventoryObject.getBoolean(ACTIVE));

									updatedInventory = inventoryRepo.save(inventoryExists.get());

									List<FacilityWiseThreshold> listofFacilityWiseThreshold = facilityWiseThresholdRepository
											.findByInventoryId(skuCodeExists);

									for (int i = 0; i < listofFacilityWiseThreshold.size(); i++) {
										org.json.JSONObject facilityobj = facilityWiseThresholdobj.getJSONObject(i);

										Long facilityId = facilityobj.getJSONObject(FACILITY).getLong("id");
										Optional<Facility> existFacility = facilityRepository.findById(facilityId);
										FacilityWiseThreshold facilityWiseThreshold = listofFacilityWiseThreshold
												.get(i);
										if (existFacility.isPresent()) {

											facilityWiseThreshold.setInventoryId(updatedInventory);
											facilityWiseThreshold
													.setThresholdLevel(facilityobj.getLong(THRESHOLDLEVEL));
											facilityWiseThreshold.setFacilityId(existFacility.get());
											facilityWiseThresholdRepository.save(facilityWiseThreshold);

										} else {
											response.setError(EnumTypeForErrorCodes.SUCS040.name(),
													EnumTypeForErrorCodes.SUCS040.errorMsg());
										}

									}
									response.setData(updatedInventory);
								} else {
									response.setError(EnumTypeForErrorCodes.SCUS046.name(),
											EnumTypeForErrorCodes.SCUS046.errorMsg());
								}

							
						}
					}
if(updatedInventory!=null) {
					List<ChildAccessories> existingAccessories = childAccessoriesRepo.findByParentId(inventoryId);

					childAccessoriesRepo.deleteAll(existingAccessories);

					JSONArray accessoriesList = obj.getJSONArray(ACCESSORYLIST);

					for (int i = 0; i < accessoriesList.length(); i++) {

						Long accessorieId = accessoriesList.getLong(i);
						ChildAccessories childAccessories = new ChildAccessories();

						childAccessories.setChildId(accessorieId);
						childAccessories.setParentId(updatedInventory.getId());
						if (updatedInventory.getAccessoriesStatus()) {
							childAccessoriesRepo.save(childAccessories);
						} else {
							response.setError(EnumTypeForErrorCodes.SCUS067.name(),
									EnumTypeForErrorCodes.SCUS067.errorMsg());

						}
					}
}
				} else {
					response.setError(EnumTypeForErrorCodes.SCUS519.name(), EnumTypeForErrorCodes.SCUS519.errorMsg());

				}

			} else {
				response.setError(EnumTypeForErrorCodes.SCUS044.name(), EnumTypeForErrorCodes.SCUS044.errorMsg());
			}

		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS048.name(), EnumTypeForErrorCodes.SCUS048.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}
		return response;
	}

	/**
	 * findAllInventories service implementation
	 * 
	 * @return ServiceResponse<CollectionInventory>>
	 */
	@Override
	public ServiceResponse<Collection<Inventory>> findAllInventories() {
		log.info("getting all inventories");
		ServiceResponse<Collection<Inventory>> response = new ServiceResponse<>();

		try {
			Collection<Inventory> inventoried = inventoryRepo.findAll();
			response.setData(inventoried);

		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS041.name(), EnumTypeForErrorCodes.SCUS041.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}

		return response;
	}

	/**
	 * getInventoryBySkuCode service implementation
	 * 
	 * @param skuCode
	 * @return ServiceResponse<Inventory>
	 */

	@Override
	public ServiceResponse<JSONObject> getInventoryBySkuCodeandActiveStatus(@NotNull @PathVariable String skuCode) {
		log.info("getting inventory by sku code");
		ServiceResponse<JSONObject> response = new ServiceResponse<>();

		JSONObject obj = new JSONObject();

		try {

			Inventory inventory = inventoryRepo.findBySkuCode(skuCode);
			List<FacilityWiseThreshold> listOfInventoryBasedOnFacilityWiseThreshold = facilityWiseThresholdRepository
					.findByInventoryId(inventory);
			if (inventory != null) {

				if (inventory.getActive()) {

					JSONObject obj1 = new JSONObject();
					obj1.put(BADINVENTORY, inventory.getBadInventory());
					obj1.put(BARCODEID, inventory.getBarcodeId());
					obj1.put(DESCRIPTION, inventory.getDescription());
					obj1.put(DISPATCH, inventory.getDispatch());
					obj1.put(ENABLE, inventory.getEnabled());
					obj1.put("id", inventory.getId());
					obj1.put(INVENTORY, inventory.getInventory());
					obj1.put(PENDINGQCASSEMENT, inventory.getPendingQcAccessment());
					obj1.put(PRODUCTNAME, inventory.getProductName());
					obj1.put(SERIALNUMBERSTATUS, inventory.getSerialNumberStatus());
					obj1.put(SKUCODE, inventory.getSkuCode());
					obj1.put(ACTIVE, inventory.getActive());

					obj.put(INVENTORY, obj1);

					org.json.simple.JSONArray obj2 = new org.json.simple.JSONArray();
					for (FacilityWiseThreshold facilityWiseThreshold : listOfInventoryBasedOnFacilityWiseThreshold) {
						JSONObject obj3 = new JSONObject();

						obj3.put(THRESHOLDLEVEL, facilityWiseThreshold.getThresholdLevel());
						obj3.put(FACILITY, facilityWiseThreshold.getFacilityId());
						obj2.add(obj3);

					}
					obj.put("facilityWiseThreshold", obj2);

					response.setData(obj);
				} else {
					response.setError(EnumTypeForErrorCodes.SCUS062.name(), EnumTypeForErrorCodes.SCUS062.errorMsg());

				}

			} else {
				response.setError(EnumTypeForErrorCodes.SCUS044.name(), EnumTypeForErrorCodes.SCUS044.errorMsg());

			}

		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS047.name(), EnumTypeForErrorCodes.SCUS047.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}
		return response;
	}

	@Override
	public ServiceResponse<JSONObject> getInventoryBySku(@NotNull @PathVariable String skuCode) {
		log.info("getting inventory by sku code");
		ServiceResponse<JSONObject> response = new ServiceResponse<>();

		JSONObject obj = new JSONObject();

		try {

			Inventory inventory = inventoryRepo.findBySkuCode(skuCode);
			List<FacilityWiseThreshold> listOfInventoryBasedOnFacilityWiseThreshold = facilityWiseThresholdRepository
					.findByInventoryId(inventory);
			if (inventory != null) {

				JSONObject obj1 = new JSONObject();
				obj1.put(BADINVENTORY, inventory.getBadInventory());
				obj1.put(BARCODEID, inventory.getBarcodeId());
				obj1.put(DESCRIPTION, inventory.getDescription());
				obj1.put(DISPATCH, inventory.getDispatch());
				obj1.put(ENABLE, inventory.getEnabled());
				obj1.put("id", inventory.getId());
				obj1.put(INVENTORY, inventory.getInventory());
				obj1.put(PENDINGQCASSEMENT, inventory.getPendingQcAccessment());
				obj1.put(PRODUCTNAME, inventory.getProductName());
				obj1.put(SERIALNUMBERSTATUS, inventory.getSerialNumberStatus());
				obj1.put(SKUCODE, inventory.getSkuCode());
				obj1.put(ACCESSORIESSTATUS, inventory.getAccessoriesStatus());

				obj1.put(ACTIVE, inventory.getActive());

				obj.put(INVENTORY, obj1);

				org.json.simple.JSONArray obj2 = new org.json.simple.JSONArray();
				for (FacilityWiseThreshold facilityWiseThreshold : listOfInventoryBasedOnFacilityWiseThreshold) {
					JSONObject obj3 = new JSONObject();

					obj3.put(THRESHOLDLEVEL, facilityWiseThreshold.getThresholdLevel());
					obj3.put(FACILITY, facilityWiseThreshold.getFacilityId());
					obj2.add(obj3);

				}
				obj.put("facilityWiseThreshold", obj2);

				List<JSONObject> accessories = viewAccessories(inventory.getId()).getData();

				obj.put(ACCESSORYLIST, accessories);

				response.setData(obj);

			} else {
				response.setError(EnumTypeForErrorCodes.SCUS066.name(), EnumTypeForErrorCodes.SCUS066.errorMsg());

			}

		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS047.name(), EnumTypeForErrorCodes.SCUS047.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}
		return response;
	}

	@Override
	public ServiceResponse<List<Barcode>> addBarcodeIdByInventorySnapshot() {
		log.info("adding Barcode id  by inventorySnapShot");

		ServiceResponse<List<Barcode>> response = new ServiceResponse<>();

		try {
			List<Barcode> inventoryList = new ArrayList<>();

			List<InventorySnapshot> inventorySnapshot = inventorySnapshotRepo.findAll();

			for (InventorySnapshot inventorySnapshot1 : inventorySnapshot) {
				Barcode barcode = new Barcode();
				barcode.setSku(inventorySnapshot1.getItemSkuCode());

				barCodeRepo.save(barcode);
				inventoryList.add(barcode);
			}
			response.setData(inventoryList);

		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SUCS039.name(), EnumTypeForErrorCodes.SUCS039.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}

		return response;
	}

	@Scheduled(cron = "${inventoryAlertsBasedOnFacilityWiseAThresholdLevel}")
	@Override
	public ServiceResponse<String> inventoryAlertsBasedOnFacilityWiseAThresholdLevel() {
		log.info("sending Mail Alerts Inventory List Based On Threshold by Cron Scheduling");
		ServiceResponse<String> response = new ServiceResponse<>();

		try {
			List<Facility> listOfFacility = facilityRepository.findAll();

			for (Facility facility : listOfFacility) {

				sendingMailAlertsInventoryListBasedOnThreshold(facility.getId());

			}
			response.setData("Successfully Mail Alerts Are Sended for InventoryList Based On Threshold");
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS060.name(), EnumTypeForErrorCodes.SCUS060.errorMsg());

			log.error(utils.toJson(response.getError()), e);

		}
		return response;

	}

	/**
	 * getInventoryListBasedOnThreshold service implementation
	 * 
	 * @return ServiceResponse<List<Inventory>>
	 */
	@Override
	public ServiceResponse<List<List<FacilityWiseInventory>>> sendingMailAlertsInventoryListBasedOnThreshold(
			@PathVariable Long facilityId) {
		log.info("getting InventoryList BasedOn Threshold");
		ServiceResponse<List<List<FacilityWiseInventory>>> response = new ServiceResponse<>();
		try {

			String subject = " ";
			String body1 = " ";
			String body2 = " ";
			String body3 = " ";

			List<List<FacilityWiseInventory>> inventoryList = listofInventoryBasedOnFaciltyWiseThreshold(facilityId)
					.getData();

			List<FacilityWiseInventory> parentList = inventoryList.get(0);

			List<FacilityWiseInventory> childList = inventoryList.get(1);

			List<FacilityWiseInventory> sortedInventoryListParent = parentList.stream()
					.sorted(Comparator.comparing(FacilityWiseInventory::getFacilityWiseInventoryCount))
					.collect(Collectors.toList());

			List<FacilityWiseInventory> sortedInventoryListChild = childList.stream()
					.sorted(Comparator.comparing(FacilityWiseInventory::getFacilityWiseInventoryCount))
					.collect(Collectors.toList());

			String time = DateTimeFormatter.ofPattern("hh:mm a").format(LocalTime.now());

			if (!sortedInventoryListParent.isEmpty() && !sortedInventoryListChild.isEmpty()) {
				Collection<User> usersData = null;
				context.setVariable(INVENTORYLIST, sortedInventoryListParent);
				context1.setVariable(INVENTORYLIST, sortedInventoryListChild);

				if (facilityId.equals(0l)) {
					subject = "MBB-Platform - Inventory Alert for all facility" + " on " + LocalDate.now() + " at "
							+ time;
					body1 = "Please find the below list for products with low inventory for all Facility";

					body2 = templateEngine.process(templateforFacilityWiseThresholdLevel, context);
					body3 = templateEngine.process(templateforFacilityWiseThresholdLevel, context1);

				} else {
					Optional<Facility> existFacility = facilityRepository.findById(facilityId);

					usersData = userSvc.getAllUsersByFacilityId(facilityId).getData();

					if (existFacility.isPresent()) {

						String facilityname = existFacility.get().getFacility();

						subject = "MBB-Platform -Inventory Alert for " + facilityname + " on " + LocalDate.now()
								+ " at " + time;

						body1 = "Please find the below list for products with low inventory for " + facilityname;

						body2 = templateEngine.process(templateforFacilityWiseThresholdLevel, context);
						body3 = templateEngine.process(templateforFacilityWiseThresholdLevel, context1);

						response.setData(inventoryList);

					}
				}
				for (User user : usersData) {

					if (user.isNotificationStatus()) {
						Set<Role> userRoles = user.getRoles();

						for (Role userRole : userRoles) {
							if (userRole.getId().equals(1l) || userRole.getId().equals(6l)
									|| userRole.getId().equals(11l)) {
								String email = user.getEmail();

								emailsvc.notifyUserByEmail(email, body1 + "\n\n\n" + body2 + body3, subject);
							}

						}
					}

				}
			}

		} catch (

		Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS038.name(), EnumTypeForErrorCodes.SCUS038.errorMsg());
			log.error(utils.toJson(response.getError()), e);

		}
		return response;

	}

	@Override
	public ServiceResponse<List<List<FacilityWiseInventory>>> listofInventoryBasedOnFaciltyWiseThreshold(
			@PathVariable Long facilityId) {
		log.info("list of Inventory Based On Facilty Wise Threshold");
		ServiceResponse<List<List<FacilityWiseInventory>>> response = new ServiceResponse<>();

		try {
			List<List<FacilityWiseInventory>> totalList = new ArrayList<>();
			List<FacilityWiseInventory> listOfFacilityWiseItemCount = new ArrayList<>();
			List<FacilityWiseInventory> listOfFacilityWiseItemCountForChild = new ArrayList<>();

			List<Inventory> allInventory = inventoryRepo.findAll();
			List<Inventory> listOfInventory = new ArrayList<>();
			for (Inventory inventory : allInventory) {

				if (inventory.getInventory() != null && inventory.getActive()) {

					listOfInventory.add(inventory);
				}
			}

			if (facilityId == 0) {

				for (Inventory inventory : listOfInventory) {
					List<InventoryItem> facility1InventoryItems = new ArrayList<>();
					List<InventoryItem> facility2InventoryItems = new ArrayList<>();
					List<InventoryItem> facility3InventoryItems = new ArrayList<>();
					List<InventoryItem> facility4InventoryItems = new ArrayList<>();
					Collection<InventoryItem> listOfInventoryItem = inventoryItemRepo.findByInventoryId(inventory);
					List<FacilityWiseThreshold> listOffacilityWiseThreshold = facilityWiseThresholdRepository
							.findByInventoryId(inventory);

					for (InventoryItem inventoryItem : listOfInventoryItem) {

						if (inventoryItem.getItemStatusId().getId() == 1) {
							if (inventoryItem.getFacilityId().getId() == 1) {
								facility1InventoryItems.add(inventoryItem);
							}

							else if (inventoryItem.getFacilityId().getId() == 2) {
								facility2InventoryItems.add(inventoryItem);

							}

							else if (inventoryItem.getFacilityId().getId() == 3) {
								facility3InventoryItems.add(inventoryItem);

							} else if (inventoryItem.getFacilityId().getId() == 4) {
								facility4InventoryItems.add(inventoryItem);

							}

						}

					}
					for (FacilityWiseThreshold facilityWiseThreshold : listOffacilityWiseThreshold) {
						FacilityWiseInventory facilityWiseItemCount = new FacilityWiseInventory();

						if (facilityWiseThreshold.getFacilityId().getId() == 1) {
							if (!facility1InventoryItems.isEmpty()
									&& facility1InventoryItems.size() <= facilityWiseThreshold.getThresholdLevel()) {
								facilityWiseItemCount.setProductName(inventory.getProductName());
								facilityWiseItemCount.setSkuCode(inventory.getSkuCode());
								facilityWiseItemCount
										.setFacilityWiseInventoryCount((long) facility1InventoryItems.size());
								facilityWiseItemCount.setTotalInventory(inventory.getInventory());

								if (inventory.getAccessoriesStatus()) {
									facilityWiseItemCount.setAccessoriesStatus(PARENT);
									listOfFacilityWiseItemCount.add(facilityWiseItemCount);

								} else {

									facilityWiseItemCount.setAccessoriesStatus(CHILD);
									listOfFacilityWiseItemCountForChild.add(facilityWiseItemCount);
								}

							}
						} else if (facilityWiseThreshold.getFacilityId().getId() == 2) {
							if (!facility2InventoryItems.isEmpty()
									&& facility2InventoryItems.size() <= facilityWiseThreshold.getThresholdLevel()) {
								facilityWiseItemCount.setProductName(inventory.getProductName());
								facilityWiseItemCount.setSkuCode(inventory.getSkuCode());
								facilityWiseItemCount
										.setFacilityWiseInventoryCount((long) facility2InventoryItems.size());
								facilityWiseItemCount.setTotalInventory(inventory.getInventory());

								if (inventory.getAccessoriesStatus()) {
									facilityWiseItemCount.setAccessoriesStatus(PARENT);
									listOfFacilityWiseItemCount.add(facilityWiseItemCount);

								} else {

									facilityWiseItemCount.setAccessoriesStatus(CHILD);
									listOfFacilityWiseItemCountForChild.add(facilityWiseItemCount);

								}

							}
						} else if (facilityWiseThreshold.getFacilityId().getId() == 3) {
							if (!facility3InventoryItems.isEmpty()
									&& facility3InventoryItems.size() <= facilityWiseThreshold.getThresholdLevel()) {
								facilityWiseItemCount.setProductName(inventory.getProductName());
								facilityWiseItemCount.setSkuCode(inventory.getSkuCode());
								facilityWiseItemCount
										.setFacilityWiseInventoryCount((long) facility3InventoryItems.size());
								facilityWiseItemCount.setTotalInventory(inventory.getInventory());
								if (inventory.getAccessoriesStatus()) {
									facilityWiseItemCount.setAccessoriesStatus(PARENT);
									listOfFacilityWiseItemCount.add(facilityWiseItemCount);

								} else {

									facilityWiseItemCount.setAccessoriesStatus(CHILD);
									listOfFacilityWiseItemCountForChild.add(facilityWiseItemCount);

								}

							}
						} else if (facilityWiseThreshold.getFacilityId().getId() == 4
								&& (!facility4InventoryItems.isEmpty() && facility4InventoryItems
										.size() <= facilityWiseThreshold.getThresholdLevel())) {

							facilityWiseItemCount.setProductName(inventory.getProductName());
							facilityWiseItemCount.setSkuCode(inventory.getSkuCode());
							facilityWiseItemCount.setFacilityWiseInventoryCount((long) facility4InventoryItems.size());
							facilityWiseItemCount.setTotalInventory(inventory.getInventory());
							if (inventory.getAccessoriesStatus()) {
								facilityWiseItemCount.setAccessoriesStatus(PARENT);
								listOfFacilityWiseItemCount.add(facilityWiseItemCount);

							} else {

								facilityWiseItemCount.setAccessoriesStatus(CHILD);
								listOfFacilityWiseItemCountForChild.add(facilityWiseItemCount);

							}

						}

					}

				}
				totalList.add(listOfFacilityWiseItemCount);
				totalList.add(listOfFacilityWiseItemCountForChild);
				response.setData(totalList);
			}

			else {
				Optional<Facility> facility = facilityRepository.findById(facilityId);

				if (facility.isPresent()) {
					for (Inventory inventory : listOfInventory) {

						List<InventoryItem> facilityInventoryItems = new ArrayList<>();

						Collection<InventoryItem> inventoryItem = inventoryItemRepo.findByInventoryId(inventory);

						for (InventoryItem inventoryItem2 : inventoryItem) {

							if (inventoryItem2.getItemStatusId().getId() == 1
									&& inventoryItem2.getFacilityId().getId().equals(facilityId)) {
								facilityInventoryItems.add(inventoryItem2);
							}
						}

						List<FacilityWiseThreshold> listOffacilityWiseThreshold = facilityWiseThresholdRepository
								.findByInventoryId(inventory);

						for (FacilityWiseThreshold facilityWiseThreshold : listOffacilityWiseThreshold) {
							if ((facilityWiseThreshold.getFacilityId().getId().equals(facilityId))
									&& (facilityInventoryItems.size() <= facilityWiseThreshold.getThresholdLevel())) {

								FacilityWiseInventory facilityWiseItemCount = new FacilityWiseInventory();
								facilityWiseItemCount.setProductName(inventory.getProductName());
								facilityWiseItemCount
										.setFacilityWiseInventoryCount((long) facilityInventoryItems.size());
								facilityWiseItemCount.setTotalInventory(inventory.getInventory());
								facilityWiseItemCount.setSkuCode(inventory.getSkuCode());
								if (inventory.getAccessoriesStatus()) {
									facilityWiseItemCount.setAccessoriesStatus(PARENT);
									listOfFacilityWiseItemCount.add(facilityWiseItemCount);

								} else {

									facilityWiseItemCount.setAccessoriesStatus(CHILD);
									listOfFacilityWiseItemCountForChild.add(facilityWiseItemCount);

								}

							}
						}

					}

				} else {
					response.setError(EnumTypeForErrorCodes.SCUS517.name(), EnumTypeForErrorCodes.SCUS517.errorMsg());

				}

			}

			totalList.add(listOfFacilityWiseItemCount);
			totalList.add(listOfFacilityWiseItemCountForChild);
			response.setData(totalList);
		}

		catch (Exception e) {

			response.setError(EnumTypeForErrorCodes.SCUS054.name(), EnumTypeForErrorCodes.SCUS054.errorMsg());
			log.error(utils.toJson(response.getError()), e);

		}

		return response;

	}

	/**
	 * getAllSkuCodes service implementation
	 * 
	 * @return ServiceResponse<Collection<Inventory>>
	 */
	@Override
	public ServiceResponse<List<String>> getAllSkuCodes() {
		log.info("getting all skucodes");
		ServiceResponse<List<String>> response = new ServiceResponse<>();
		List<String> listOfSkuCode = new ArrayList<>();
		try {

			Collection<Inventory> listOfInventory = inventoryRepo.findAll();

			for (Inventory inventory : listOfInventory) {
				String skuCode = inventory.getSkuCode();
				listOfSkuCode.add(skuCode);
			}
			response.setData(listOfSkuCode);

		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS117.name(), EnumTypeForErrorCodes.SCUS117.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}

		return response;
	}

	/**
	 * getInventoryByBarcodeId service implementation
	 * 
	 * @param barcodeId
	 * @return ServiceResponse<Inventory>
	 */
	@Override
	public ServiceResponse<Inventory> getInventoryByBarcodeId(@NotNull @PathVariable String barcodeId) {
		log.info("getting inventory by barcode id");
		ServiceResponse<Inventory> response = new ServiceResponse<>();

		try {
			Inventory inventory = inventoryRepo.findByBarcodeId(barcodeId);

			response.setData(inventory);

		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS049.name(), EnumTypeForErrorCodes.SCUS049.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}

		return response;
	}

	/**
	 * getAllSkuCodesBySorting service implementation
	 * 
	 * @return ServiceResponse<Collection<Inventory>>
	 */
	@Override
	public ServiceResponse<JSONObject> getAllSkuCodesBySorting(Long facilityId, Boolean status, int pageNo, int size,
			String columnName, Boolean sortBy, String search) {
		log.info("getting all sku codes by sorting");

		ServiceResponse<JSONObject> response = new ServiceResponse<>();
		List<JSONObject> listOfObj = new ArrayList<>();
		JSONObject ob = new JSONObject();
		List<Inventory> totalRecords=new ArrayList<>();
		try {
			Pageable page;

			 totalRecords = inventoryRepo.findByActive(status);

			 if(size==-1) {
					size=totalRecords.size()	;
					}


			if (facilityId == 0) {

				List<Inventory> listOfInventory;
				
				if (!search.equals("null")) {
					if(columnName.equals(SKUCODE)) {
						columnName="sku_code";
						
					}else if(columnName.equals(SKUIMAGE)) {
						columnName="product_image";
						
					}else if(columnName.equals(SERIALNUMBERSTATUS)) {
						columnName="serial_number_status";
					}else if(columnName.equals(PRODUCTNAME)) {
						columnName="product_name";
					}else if(columnName.equals(BARCODEID)) {
						columnName="barcode_id";

					}else if(columnName.equals(ACCESSORIESSTATUS)) {
						columnName="accessories_status";
						
					}
					
					if (sortBy) {
						page = PageRequest.of(pageNo, size, Sort.by(columnName).descending());
					} else {
						page = PageRequest.of(pageNo, size, Sort.by(columnName).ascending());

					}
					
					listOfInventory = inventoryRepo.findByActive(status, search, page);
					totalRecords = inventoryRepo.findByActive(status, search);


				} else {
					if(columnName.equals("SKUImage")) {
						columnName="productImage";
						
					}
					
					if (sortBy) {
						page = PageRequest.of(pageNo, size, Sort.by(columnName).descending());
					} else {
						page = PageRequest.of(pageNo, size, Sort.by(columnName).ascending());

					}
					
					

					listOfInventory = inventoryRepo.findByActive(status, page);
					
					
						
				}
				

				for (Inventory inventory : listOfInventory) {
					JSONObject obj = new JSONObject();

					List<FacilityWiseThreshold> inventoryInAllfacility = facilityWiseThresholdRepository
							.findByInventoryId(inventory);
					Long overallThresholdLevel = 0l;
					for (FacilityWiseThreshold facilityWiseThreshold : inventoryInAllfacility) {
						overallThresholdLevel = overallThresholdLevel + facilityWiseThreshold.getThresholdLevel();

					}

					if (inventory.getProductImage() != null) {

						obj.put(PRODUCTIMAGE, true);
						byte[] inventoryImage = inventory.getProductImage();

						obj.put(SKUIMAGE, imageToThumbnail(inventoryImage).getData());

					} else {
						obj.put(PRODUCTIMAGE, false);

					}
					obj.put(THRESHOLDLEVEL, overallThresholdLevel);
					obj.put(BADINVENTORY, inventory.getBadInventory());
					obj.put(BARCODEID, inventory.getBarcodeId());
					obj.put(DESCRIPTION, inventory.getDescription());
					obj.put(DISPATCH, inventory.getDispatch());
					obj.put(ENABLE, inventory.getEnabled());
					obj.put("Inventoryid", inventory.getId());
					obj.put(INVENTORY, inventory.getInventory());
					obj.put(PENDINGQCASSEMENT, inventory.getPendingQcAccessment());
					obj.put(PRODUCTNAME, inventory.getProductName());
					obj.put(SERIALNUMBERSTATUS, inventory.getSerialNumberStatus());
					obj.put(ACCESSORYSTATUS, inventory.getAccessoriesStatus());

					obj.put(SKUCODE, inventory.getSkuCode());
					listOfObj.add(obj);

				}

			} else {
				Optional<Facility> facility = facilityRepository.findById(facilityId);

				if (facility.isPresent()) {
					List<Inventory> listOfInventory;
					
					
					if (!search.equals("null")) {
						if(columnName.equals(SKUCODE)) {
							columnName="sku_code";
							
						}else if(columnName.equals("SKUImage")) {
							columnName="product_image";
							
						}else if(columnName.equals(SERIALNUMBERSTATUS)) {
							columnName="serial_number_status";
						}else if(columnName.equals(PRODUCTNAME)) {
							columnName="product_name";
						}else if(columnName.equals(BARCODEID)) {
							columnName="barcode_id";

						}else if(columnName.equals(ACCESSORIESSTATUS)) {
							columnName="accessories_status";
							
						}
						
						if (sortBy) {
							page = PageRequest.of(pageNo, size, Sort.by(columnName).descending());
						} else {
							page = PageRequest.of(pageNo, size, Sort.by(columnName).ascending());

						}
						
						totalRecords = inventoryRepo.findByActive(status, search);
						
						listOfInventory = inventoryRepo.findByActive(status, search, page);

					} else {
						if(columnName.equals("SKUImage")) {
							columnName="productImage";
							
						}
						
						if (sortBy) {
							page = PageRequest.of(pageNo, size, Sort.by(columnName).descending());
						} else {
							page = PageRequest.of(pageNo, size, Sort.by(columnName).ascending());

						}
						
						
							listOfInventory = inventoryRepo.findByActive(status, page);
					

					}

					for (Inventory inventory : listOfInventory) {
						JSONObject obj = new JSONObject();
						FacilityWiseThreshold facilityWiseThreshold = facilityWiseThresholdRepository
								.findByInventoryIdAndFacilityId(inventory, facility.get());
						if (inventory.getActive().equals(status)) {
							if (inventory.getProductImage() != null) {

								obj.put(PRODUCTIMAGE, true);
								byte[] inventoryImage = inventory.getProductImage();

								obj.put(SKUIMAGE, imageToThumbnail(inventoryImage).getData());

							} else {
								obj.put(PRODUCTIMAGE, false);

							}
							obj.put(THRESHOLDLEVEL, facilityWiseThreshold.getThresholdLevel());
							obj.put(FACILITY, facilityWiseThreshold.getFacilityId());
							obj.put("facilityIdWiseThreshold", inventory.getId());
							obj.put(BADINVENTORY, inventory.getBadInventory());
							obj.put(BARCODEID, inventory.getBarcodeId());
							obj.put(DESCRIPTION, inventory.getDescription());
							obj.put(DISPATCH, inventory.getDispatch());
							obj.put(ENABLE, inventory.getEnabled());
							obj.put("Inventoryid", inventory.getId());
							obj.put(INVENTORY, inventory.getInventory());
							obj.put(PENDINGQCASSEMENT, inventory.getPendingQcAccessment());
							obj.put(PRODUCTNAME, inventory.getProductName());
							obj.put(SERIALNUMBERSTATUS, inventory.getSerialNumberStatus());
							obj.put(SKUCODE, inventory.getSkuCode());
							obj.put(ACCESSORYSTATUS, facilityWiseThreshold.getInventoryId().getAccessoriesStatus());
							listOfObj.add(obj);
						}

					}
				}
			}

			ob.put("list", listOfObj);

			ob.put("total", totalRecords.size());

			response.setData(ob);
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS117.name(), EnumTypeForErrorCodes.SCUS117.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}

		return response;
	}

	public ServiceResponse<byte[]> imageToThumbnail(byte[] inventoryImage) {
		ServiceResponse<byte[]> response = new ServiceResponse<>();
		try (ByteArrayInputStream bais = new ByteArrayInputStream(inventoryImage);
				ByteArrayOutputStream baos = new ByteArrayOutputStream();) {
			BufferedImage image = ImageIO.read(bais);
			ResampleOp resizeOp = new ResampleOp(50, 50);
			BufferedImage resizedImage = resizeOp.filter(image, null);
			ImageIO.write(resizedImage, "png", baos);
			byte[] thumbnailImage = baos.toByteArray();
			response.setData(thumbnailImage);

		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS137.name(), EnumTypeForErrorCodes.SCUS137.errorMsg());

			log.error(utils.toJson(response.getError()), e);

		}
		return response;
	}

	/**
	 * getInventoryItemsBasedOnSkuCode service implementation
	 * 
	 * @param skuCode
	 * @param statusId
	 * @param facilityId
	 * @return ServiceResponse<Collection<JSONObject>>
	 */
	@Override
	public ServiceResponse<Collection<JSONObject>> getInventoryItemsBasedOnSkuCode(@PathVariable String skuCode,
			@PathVariable Long statusId, @PathVariable Long facilityId) {
		ServiceResponse<Collection<JSONObject>> response = new ServiceResponse<>();
		List<JSONObject> objList = new ArrayList<>();
		try {

			Inventory inventory = inventoryRepo.findBySkuCode(skuCode);

			Collection<InventoryItem> inventoryItemList = inventoryItemRepo.findByInventoryId(inventory);

			for (InventoryItem inventoryItem : inventoryItemList) {
				if (inventoryItem.getApprovalstatus() && (!inventoryItem.getScanned())) {

					if (inventoryItem.getItemStatusId().getId().equals(statusId) && facilityId == 0) {
						JSONObject obj = new JSONObject();
						String qrcode = inventoryItem.getBarcode();
						String createdUser = inventoryItem.getCreatedUser();

						obj.put(QRCODE, qrcode);
						obj.put(PRODUCTNAME, inventory.getProductName());

						ZonedDateTime create = inventoryItem.getCreatedTime();
						ZonedDateTime update = inventoryItem.getUpdatedTime();

						String createDate = create.toString();
						String updateDate = update.toString();

						obj.put(CREATEDDATE, createDate.substring(0, 10));
						obj.put(UPDATEDDATE, updateDate.substring(0, 10));
						obj.put(SERIALNUMBER, inventoryItem.getSerialNumber());

						obj.put(CREATEDUSER, createdUser);
						obj.put(UPDATEDUSER, inventoryItem.getUpdatedUser());

						objList.add(obj);

					} else if (inventoryItem.getItemStatusId().getId().equals(statusId)
							&& inventoryItem.getFacilityId().getId().equals(facilityId)) {
						JSONObject obj = new JSONObject();
						String qrcode = inventoryItem.getBarcode();
						String createdUser = inventoryItem.getCreatedUser();

						obj.put(QRCODE, qrcode);
						obj.put(PRODUCTNAME, inventory.getProductName());

						ZonedDateTime create = inventoryItem.getCreatedTime();
						ZonedDateTime update = inventoryItem.getUpdatedTime();

						String createDate = create.toString();
						String updateDate = update.toString();
						obj.put(SERIALNUMBER, inventoryItem.getSerialNumber());

						obj.put(CREATEDDATE, createDate.substring(0, 10));
						obj.put(UPDATEDDATE, updateDate.substring(0, 10));
						obj.put(UPDATEDUSER, inventoryItem.getUpdatedUser());

						obj.put(CREATEDUSER, createdUser);
						objList.add(obj);
					}

				}

			}
			response.setData(objList);

		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS052.name(), EnumTypeForErrorCodes.SCUS052.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}

		return response;
	}

	/**
	 * getProductCountBasedOnFacility service implementation
	 * 
	 * @param facilityId
	 * @return ServiceResponse<List<JSONObject>>
	 */
	@Override
	public ServiceResponse<JSONObject> getProductCountBasedOnFacility(Long facilityId, Boolean status, int pageNo,
			int size, String columnName, Boolean sortBy, String search) {
		log.info("get Product Count Based On Facility");
		ServiceResponse<JSONObject> response = new ServiceResponse<>();
		JSONObject finalObj = new JSONObject();
		List<Inventory> totalRecords=new ArrayList<>();

		try {

			Pageable page;
			 totalRecords = inventoryRepo.findByActive(status);

			 if(size==-1) {
					size=totalRecords.size()	;
					}
			
			List<Inventory> listOfInventorys;
			if (!search.equals("null")) {
		
				if(columnName.equals(SKUCODE)) {
					columnName="sku_code";
					
				}else if(columnName.equals("SKUImage")) {
					columnName="product_image";
					
				}else if(columnName.equals(PENDINGQCASSEMENT)) {
					columnName="pending_qc_accessment";
				}else if(columnName.equals(BADINVENTORY)) {
					columnName="bad_inventory";
				}else if(columnName.equals(INTRANSITCOUNT)) {
					columnName="in_transit_count";
				}else if(columnName.equals(PENDINGAPPROVALCOUNT)) {
					columnName="pending_approval_count";
				}else if(columnName.equals(ACCESSORIESSTATUS)) {
					columnName="accessories_status";
				}else if(columnName.equals(PRODUCTNAME)) {
					columnName="product_name";
				}else if(columnName.equals(BARCODEID)) {
					columnName="barcode_id";

				}
				
				if (sortBy) {
					page = PageRequest.of(pageNo, size, Sort.by(columnName).descending());
				} else {
					page = PageRequest.of(pageNo, size, Sort.by(columnName).ascending());

				}
				listOfInventorys = inventoryRepo.findByActive(status, search, page);
				 totalRecords = inventoryRepo.findByActive(status,search);

			} else {
				if(columnName.equals("SKUImage")) {
					columnName="productImage";
					
				}
				
				if (sortBy) {
					page = PageRequest.of(pageNo, size, Sort.by(columnName).descending());
				} else {
					page = PageRequest.of(pageNo, size, Sort.by(columnName).ascending());

				}
				listOfInventorys = inventoryRepo.findByActive(status, page);
			

			}

			List<JSONObject> objList = new ArrayList<>();

			if (facilityId == 0) {

				for (Inventory inventory : listOfInventorys) {

					Long overAllThresholdValue = 0l;

					List<FacilityWiseThreshold> listOfInventoryBasedOnFacilityWiseThreshold = facilityWiseThresholdRepository
							.findByInventoryId(inventory);

					for (FacilityWiseThreshold facilityWiseThreshold : listOfInventoryBasedOnFacilityWiseThreshold) {
						overAllThresholdValue = overAllThresholdValue + facilityWiseThreshold.getThresholdLevel();
					}

						JSONObject obj1 = new JSONObject();

						obj1.put(SKUCODE, inventory.getSkuCode());
						obj1.put(PRODUCTNAME, inventory.getProductName());
						obj1.put(INVENTORY, inventory.getInventory());
						obj1.put(PENDINGQCASSEMENT, inventory.getPendingQcAccessment());
						obj1.put(BADINVENTORY, inventory.getBadInventory());
						obj1.put(BARCODEID, inventory.getBarcodeId());
						obj1.put(THRESHOLDLEVEL, overAllThresholdValue);
						obj1.put(INTRANSITCOUNT, inventory.getInTransitCount());
						obj1.put(PENDINGAPPROVALCOUNT, inventory.getPendingApprovalCount());
						obj1.put(ACCESSORYSTATUS, inventory.getAccessoriesStatus());

						obj1.put("id", inventory.getId());

						if (inventory.getProductImage() != null) {

							obj1.put(PRODUCTIMAGE, true);
							byte[] inventoryImage = inventory.getProductImage();
							imageToThumbnail(inventoryImage).getData();

							obj1.put(SKUIMAGE, imageToThumbnail(inventoryImage).getData());

						} else {
							obj1.put(PRODUCTIMAGE, false);

					}
					objList.add(obj1);

				}
			} else {

				String skuCode = null;
				String productName = null;
				for (Inventory inventory : listOfInventorys) {

					JSONObject object = new JSONObject();
					skuCode = inventory.getSkuCode();
					productName = inventory.getProductName();
					Optional<Facility> facility = facilityRepository.findById(facilityId);

						if (facility.isPresent()) {
							List<InventoryItem> avaliableInventoryItemList = new ArrayList<>();
							List<InventoryItem> badInvInventoryItemList = new ArrayList<>();
							List<InventoryItem> pendingQcInventoryItemList = new ArrayList<>();

							FacilityWiseThreshold inventoryBasedOnFacilityWiseThreshold = facilityWiseThresholdRepository
									.findByInventoryIdAndFacilityId(inventory, facility.get());

							Collection<InventoryItem> gettingInventoryItemsList = inventoryItemRepo
									.findByInventoryId(inventory);
							Long avaliable = (long) 0;
							Long badInv = (long) 0;
							Long pendingQc = (long) 0;
							Long intransitCount = 0l;
							Long pendingApprovalCount = 0l;
							for (InventoryItem inventoryItem : gettingInventoryItemsList) {
								if (inventoryItem.getFacilityId().getId().equals(facilityId)) {
									if (inventoryItem.getApprovalstatus()) {
										if (!inventoryItem.getScanned()) {
											if (inventoryItem.getItemStatusId().getId() == 1) {
												avaliableInventoryItemList.add(inventoryItem);
												avaliable = (long) avaliableInventoryItemList.size();

											} else if (inventoryItem.getItemStatusId().getId() == 6) {
												badInvInventoryItemList.add(inventoryItem);
												badInv = (long) badInvInventoryItemList.size();

											} else if (inventoryItem.getItemStatusId().getId() == 5) {
												pendingQcInventoryItemList.add(inventoryItem);
												pendingQc = (long) pendingQcInventoryItemList.size();

											}
										} else {

											intransitCount++;

										}
									} else {
										pendingApprovalCount++;

									}

								}

							}
							object.put(SKUCODE, skuCode);
							object.put(PRODUCTNAME, productName);
							object.put(INVENTORY, avaliable);
							object.put(BADINVENTORY, badInv);
							object.put(PENDINGQCASSEMENT, pendingQc);
							object.put("id", inventory.getId());

							object.put(THRESHOLDLEVEL, inventoryBasedOnFacilityWiseThreshold.getThresholdLevel());
							object.put(BARCODEID, inventory.getBarcodeId());
							object.put(INTRANSITCOUNT, intransitCount);
							object.put(PENDINGAPPROVALCOUNT, pendingApprovalCount);
							object.put(ACCESSORYSTATUS, inventory.getAccessoriesStatus());

							if (inventory.getProductImage() != null) {

								object.put(PRODUCTIMAGE, true);
								byte[] inventoryImage = inventory.getProductImage();
								imageToThumbnail(inventoryImage).getData();

								object.put(SKUIMAGE, imageToThumbnail(inventoryImage).getData());

							} else {
								object.put(PRODUCTIMAGE, false);

							}

							objList.add(object);

					}

				}

			}

			finalObj.put("list", objList);
			finalObj.put("total", totalRecords.size());
			response.setData(finalObj);
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS051.name(), EnumTypeForErrorCodes.SCUS051.errorMsg());
			log.error(utils.toJson(response.getError()), e);

		}
		return response;
	}

	/**
	 * getInventoryBasedOnFacility service implementation
	 * 
	 * @param startDate
	 * @param endDate
	 * @return ServiceResponse<List<JSONObject>>
	 */
	@Override
	public ServiceResponse<List<JSONObject>> getInventoryBasedOnFacility() {
		log.info("getting inventory details based on facility");
		ServiceResponse<List<JSONObject>> response = new ServiceResponse<>();
		try {
			List<JSONObject> objList = new ArrayList<>();
			List<Inventory> listOfInventorys = inventoryRepo.findAll();
			String skuCode = null;
			String productName = null;

			for (Inventory inventory : listOfInventorys) {
				skuCode = inventory.getSkuCode();
				productName = inventory.getProductName();
				Collection<InventoryItem> gettingInventoryItemsList = inventoryItemRepo.findByInventoryId(inventory);

				Long avaliable = (long) 0;
				Long pendingQc = (long) 0;
				Long badInventory = (long) 0;
				Long scannedCount = (long) 0;

				Long scannedCount1 = (long) 0;

				Long scannedCount2 = (long) 0;
				Long pendingApprovalCount = (long) 0;

				Long pendingApprovalCount1 = (long) 0;

				Long pendingApprovalCount2 = (long) 0;

				Long avaliable1 = (long) 0;
				Long pendingQc1 = (long) 0;
				Long badInventory1 = (long) 0;
				Long avaliable2 = (long) 0;
				Long pendingQc2 = (long) 0;
				Long badInventory2 = (long) 0;

				Long[] arr = new Long[18];
				String hydLocation = "MBB_Hyderabad";
				String banLocation = "MBB_Bangalore";
				String amazonLocation = "Amazon_Flex";
				for (InventoryItem inventoryItem : gettingInventoryItemsList) {
					if (inventoryItem.getItemStatusId().getId() != 7) {
						if (inventoryItem.getFacilityId().getId() == 1) {
							if (inventoryItem.getApprovalstatus()) {
								if (!inventoryItem.getScanned()) {

									if (inventoryItem.getItemStatusId().getId() == 1) {
										avaliable++;
										arr[0] = avaliable;
									} else if (inventoryItem.getItemStatusId().getId() == 5) {
										pendingQc++;
										arr[1] = pendingQc;
									} else if (inventoryItem.getItemStatusId().getId() == 6) {
										badInventory++;
										arr[3] = badInventory;
									}
								} else {
									scannedCount++;
									arr[12] = scannedCount;
								}
							} else {
								pendingApprovalCount++;
								arr[13] = pendingApprovalCount;
							}

						} else if (inventoryItem.getFacilityId().getId() == 2) {
							if (inventoryItem.getApprovalstatus()) {

								if (!inventoryItem.getScanned()) {

									if (inventoryItem.getItemStatusId().getId() == 1) {
										avaliable1++;
										arr[4] = avaliable1;
									} else if (inventoryItem.getItemStatusId().getId() == 5) {
										pendingQc1++;
										arr[5] = pendingQc1;
									} else if (inventoryItem.getItemStatusId().getId() == 6) {
										badInventory1++;
										arr[7] = badInventory1;
									}
								} else {
									scannedCount1++;
									arr[14] = scannedCount1;
								}
							} else {
								pendingApprovalCount1++;
								arr[15] = pendingApprovalCount1;
							}

						} else if (inventoryItem.getFacilityId().getId() == 3) {
							if (inventoryItem.getApprovalstatus()) {

								if (!inventoryItem.getScanned()) {

									if (inventoryItem.getItemStatusId().getId() == 1) {
										avaliable2++;
										arr[8] = avaliable2;
									} else if (inventoryItem.getItemStatusId().getId() == 5) {
										pendingQc2++;
										arr[9] = pendingQc2;
									} else if (inventoryItem.getItemStatusId().getId() == 6) {
										badInventory2++;
										arr[11] = badInventory2;
									}

								} else {
									scannedCount2++;
									arr[16] = scannedCount2;
								}
							} else {
								pendingApprovalCount2++;
								arr[17] = pendingApprovalCount2;
							}
						}
					}
				}
				String count = "count";
				String status = "status";

				String location = "location";
				String available = "Available";
				String pendingQC = "Pending Quality Check";

				String unAvailable = "Unavailable";
				String inTransit = "IN-TRANSIT";
				String pendingApproval = "PENDING-APPROVAL";

				for (int i = 0; i < arr.length; i++) {
					JSONObject object = new JSONObject();
					object.put(SKUCODE, skuCode);
					object.put(PRODUCTNAME, productName);
					if (i == 0) {
						object.put(count, arr[0]);
						object.put(status, available);
						object.put(location, hydLocation);
						if (arr[0] != null && arr[0] != 0) {
							objList.add(object);
						}

					} else if (i == 1) {
						object.put(count, arr[1]);
						object.put(status, pendingQC);
						object.put(location, hydLocation);
						if (arr[1] != null && arr[1] != 0) {
							objList.add(object);
						}
					} else if (i == 3) {
						object.put(count, arr[3]);
						object.put(status, unAvailable);
						object.put(location, hydLocation);
						if (arr[3] != null && arr[3] != 0) {
							objList.add(object);
						}
					} else if (i == 4) {
						object.put(count, arr[4]);
						object.put(status, available);
						object.put(location, banLocation);
						if (arr[4] != null && arr[4] != 0) {
							objList.add(object);
						}
					} else if (i == 5) {
						object.put(count, arr[5]);
						object.put(status, pendingQC);
						object.put(location, banLocation);
						if (arr[5] != null && arr[5] != 0) {
							objList.add(object);
						}
					} else if (i == 7) {
						object.put(count, arr[7]);
						object.put(status, unAvailable);
						object.put(location, banLocation);
						if (arr[7] != null && arr[7] != 0) {
							objList.add(object);
						}
					} else if (i == 8) {
						object.put(count, arr[8]);
						object.put(status, available);
						object.put(location, amazonLocation);
						if (arr[8] != null && arr[8] != 0) {
							objList.add(object);
						}
					} else if (i == 9) {
						object.put(count, arr[9]);
						object.put(status, pendingQC);
						object.put(location, amazonLocation);
						if (arr[9] != null && arr[9] != 0) {
							objList.add(object);
						}
					} else if (i == 11) {
						object.put(count, arr[11]);
						object.put(status, unAvailable);
						object.put(location, amazonLocation);
						if (arr[11] != null && arr[11] != 0) {
							objList.add(object);
						}
					} else if (i == 12) {
						object.put(count, arr[12]);
						object.put(status, inTransit);
						object.put(location, hydLocation);
						if (arr[12] != null && arr[12] != 0) {
							objList.add(object);
						}
					}

					else if (i == 14) {
						object.put(count, arr[14]);
						object.put(status, inTransit);
						object.put(location, banLocation);
						if (arr[14] != null && arr[14] != 0) {
							objList.add(object);
						}
					}

					else if (i == 16) {
						object.put(count, arr[16]);
						object.put(status, inTransit);
						object.put(location, amazonLocation);
						if (arr[16] != null && arr[16] != 0) {
							objList.add(object);
						}
					}

					else if (i == 13) {
						object.put(count, arr[13]);
						object.put(status, pendingApproval);
						object.put(location, hydLocation);
						if (arr[13] != null && arr[13] != 0) {
							objList.add(object);
						}
					} else if (i == 15) {
						object.put(count, arr[15]);
						object.put(status, pendingApproval);
						object.put(location, banLocation);
						if (arr[15] != null && arr[15] != 0) {
							objList.add(object);
						}
					} else if (i == 17) {
						object.put(count, arr[17]);
						object.put(status, pendingApproval);
						object.put(location, amazonLocation);
						if (arr[17] != null && arr[17] != 0) {
							objList.add(object);
						}
					}

				}

			}
			response.setData(objList);
		} catch (Exception e) {

			response.setError(EnumTypeForErrorCodes.SCUS811.name(), EnumTypeForErrorCodes.SCUS811.errorMsg());
			log.error(utils.toJson(response.getError()), e);

		}
		return response;

	}

	/**
	 * getAllBarcodes service implementation
	 * 
	 * @return ServiceResponse<List<String>>
	 */
	@Override
	public ServiceResponse<List<String>> getAllBarcodes() {
		log.info("getting all un used barcodes");

		ServiceResponse<List<String>> response = new ServiceResponse<>();
		List<String> barcodesList = new ArrayList<>();
		List<String> lastBarcodesList = new ArrayList<>();
		try {
			Collection<Inventory> inventory = inventoryRepo.findAll();
			for (Inventory skucodes : inventory) {
				String skuCode = skucodes.getSkuCode();
				Barcode barcode = barCodeRepo.findBySku(skuCode);
				Long count = barcode.getValue();
				Inventory inventoryExists = inventoryRepo.findBySkuCode(skuCode);
				String barcodeId = inventoryExists.getBarcodeId();
				Long seq;

				if (count != null) {
					for (int i = 0; i < count; i++) {
						seq = (long) (i + 1);
						String nbr = seq.toString();
						String barcodes = barcodeId + "-" + StringUtils.leftPad(nbr, 7, "0");
						String qrcodeWithSku = barcodes;
						barcodesList.add(qrcodeWithSku);
					}

					Collection<InventoryItem> inventoryItemExists = inventoryItemRepo
							.findByInventoryId(inventoryExists);
					for (InventoryItem items : inventoryItemExists) {
						String existingBarcode = items.getBarcode();
						String qrcodeWithSku = existingBarcode;

						lastBarcodesList.add(qrcodeWithSku);
					}
				}
			}
			barcodesList.removeAll(lastBarcodesList);

			response.setData(barcodesList);

		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS119.name(), EnumTypeForErrorCodes.SCUS119.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}

		return response;
	}

	@Override
	public ServiceResponse<String> updateFacilityWiseThreshold() {
		log.info("update Facility Wise Threshold");
		ServiceResponse<String> response = new ServiceResponse<>();

		try {

			List<Inventory> listOfInventory = inventoryRepo.findAll();
			List<Facility> listOfFacility = facilityRepository.findAll();

			for (Inventory inventory : listOfInventory) {
				List<FacilityWiseThreshold> existInventoryInfacilityWiseThreshold = facilityWiseThresholdRepository
						.findByInventoryId(inventory);
				if (existInventoryInfacilityWiseThreshold == null) {

					for (Facility facility : listOfFacility) {

						FacilityWiseThreshold facilityWiseThreshold = new FacilityWiseThreshold();
						facilityWiseThreshold.setInventoryId(inventory);
						facilityWiseThreshold.setFacilityId(facility);
						facilityWiseThreshold.setThresholdLevel(5l);
						facilityWiseThresholdRepository.save(facilityWiseThreshold);

					}

				} else {
					if ((existInventoryInfacilityWiseThreshold.size() < listOfFacility.size())) {
						for (int i = existInventoryInfacilityWiseThreshold.size() + 1; i <= listOfFacility
								.size(); i++) {
							Optional<Facility> facility = facilityRepository
									.findById((existInventoryInfacilityWiseThreshold.size() + (long) (i)));
							if (facility.isPresent()) {
								FacilityWiseThreshold facilityWiseThreshold = new FacilityWiseThreshold();

								facilityWiseThreshold.setFacilityId(facility.get());
								facilityWiseThreshold.setInventoryId(inventory);
								facilityWiseThreshold.setThresholdLevel(5l);
								facilityWiseThresholdRepository.save(facilityWiseThreshold);

							}
						}

					}
				}

			}
			response.setData("Success in updating Facility Wise Threshold");
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS055.name(), EnumTypeForErrorCodes.SCUS055.errorMsg());

			log.error(utils.toJson(response.getError()), e);
		}

		return response;

	}

	@Override
	public ServiceResponse<Inventory> gettingInventoryPictureBySkuCode(String skuCode) {

		log.info("getting Inventory Picture By SkuCode");
		ServiceResponse<Inventory> response = new ServiceResponse<>();
		try {

			Inventory inventory = inventoryRepo.findBySkuCode(skuCode);

			if (inventory != null) {
				response.setData(inventory);
			} else {
				response.setError(EnumTypeForErrorCodes.SCUS057.name(), EnumTypeForErrorCodes.SCUS057.errorMsg());

			}

		} catch (Exception e) {

			response.setError(EnumTypeForErrorCodes.SCUS056.name(), EnumTypeForErrorCodes.SCUS056.errorMsg());

			log.error(utils.toJson(response.getError()), e);
		}
		return response;
	}

	@Override
	public ServiceResponse<Inventory> updatingInventoryPictureBySkuCode(MultipartFile file, String skuCode) {
		ServiceResponse<Inventory> response = new ServiceResponse<>();
		log.info("updating Inventory Picture By SkuCode");
		try {
			Inventory inventory = inventoryRepo.findBySkuCode(skuCode);
			inventory.setProductImage(file.getBytes());
			Inventory updatedInventory = inventoryRepo.save(inventory);
			response.setData(updatedInventory);
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS058.name(), EnumTypeForErrorCodes.SCUS058.errorMsg());

			log.error(utils.toJson(response.getError()), e);
		}
		return response;

	}

	@Override
	public ServiceResponse<List<JSONObject>> getScannedQrcodesCount(String skuCode, Long facilityId) {
		log.info("get scanned count based on Sku and facility");

		ServiceResponse<List<JSONObject>> response = new ServiceResponse<>();
		List<JSONObject> objList = new ArrayList<>();
		try {

			Inventory inventory = inventoryRepo.findBySkuCode(skuCode);

			Collection<InventoryItem> inventoryItemList = inventoryItemRepo.findByInventoryId(inventory);

			for (InventoryItem inventoryItem : inventoryItemList) {
				if (inventoryItem.getScanned()
						&& (facilityId == 0 || inventoryItem.getFacilityId().getId().equals(facilityId))) {

					JSONObject obj = new JSONObject();
					String qrcode = inventoryItem.getBarcode();
					String createdUser = inventoryItem.getCreatedUser();

					obj.put(QRCODE, qrcode);

					ZonedDateTime dateTime = inventoryItem.getCreatedTime();
					String date = dateTime.toString();
					obj.put(CREATEDDATE, date.substring(0, 10));
					obj.put(CREATEDUSER, createdUser);
					obj.put(UPDATEDUSER, inventoryItem.getUpdatedUser());
					objList.add(obj);

				}
			}
			response.setData(objList);
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS125.name(), EnumTypeForErrorCodes.SCUS125.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}

		return response;
	}

	@Override
	public ServiceResponse<List<JSONObject>> getInventoryOnDates(String startDate, String endDate, Long facilityId) {
		log.info("get inventory by date filters");

		ServiceResponse<List<JSONObject>> response = new ServiceResponse<>();
		List<JSONObject> objList = new ArrayList<>();
		List<InventoryItem> itemList = new ArrayList<>();
		List<Inventory> inventoryList = new ArrayList<>();
		List<Inventory> inventoryDuplicatsList = new ArrayList<>();

		try {
			String endDate1 = LocalDate.parse(endDate).plusDays(1).toString();

			Collection<InventoryItem> listInventoryItem = inventoryItemRepo.findByStartEndDates(startDate, endDate1);
			if (facilityId == 0) {

				itemList = (List<InventoryItem>) listInventoryItem;

			} else {

				for (InventoryItem inventoryItem : listInventoryItem) {
					if (inventoryItem.getFacilityId().getId().equals(facilityId)) {

						itemList.add(inventoryItem);

					}
				}
			}

			for (InventoryItem inventoryItem2 : itemList) {

				Inventory inventory = inventoryRepo.findById(inventoryItem2.getInventoryId().getId()).get();

				inventoryDuplicatsList.add(inventory);

			}
			for (Inventory inventory : inventoryDuplicatsList) {

				if (!inventoryList.contains(inventory)) {

					inventoryList.add(inventory);
				}
			}
			for (Inventory inventory : inventoryList) {
				String skuCode = null;
				String productName = null;

				JSONObject object = new JSONObject();
				skuCode = inventory.getSkuCode();
				productName = inventory.getProductName();

				List<InventoryItem> avaliableInventoryItemList = new ArrayList<>();
				List<InventoryItem> badInvInventoryItemList = new ArrayList<>();
				List<InventoryItem> pendingQcInventoryItemList = new ArrayList<>();
				Long avaliable = (long) 0;
				Long badInv = (long) 0;
				Long pendingQc = (long) 0;
				Long intransitCount = 0l;
				Long pendingApprovalCount = 0l;

				if (facilityId == 0) {
					Long overAllThresholdValue = 0l;

					List<FacilityWiseThreshold> listOfInventoryBasedOnFacilityWiseThreshold = facilityWiseThresholdRepository
							.findByInventoryId(inventory);

					for (FacilityWiseThreshold facilityWiseThreshold : listOfInventoryBasedOnFacilityWiseThreshold) {
						overAllThresholdValue = overAllThresholdValue + facilityWiseThreshold.getThresholdLevel();
					}

					for (InventoryItem inventoryItem2 : itemList) {

						if (inventoryItem2.getInventoryId().getId().equals(inventory.getId())) {
							if (inventoryItem2.getApprovalstatus()) {

								if (!inventoryItem2.getScanned()) {
									if (inventoryItem2.getItemStatusId().getId() == 1) {
										avaliableInventoryItemList.add(inventoryItem2);
										avaliable = (long) avaliableInventoryItemList.size();

									} else if (inventoryItem2.getItemStatusId().getId() == 6) {
										badInvInventoryItemList.add(inventoryItem2);
										badInv = (long) badInvInventoryItemList.size();

									} else if (inventoryItem2.getItemStatusId().getId() == 5) {
										pendingQcInventoryItemList.add(inventoryItem2);
										pendingQc = (long) pendingQcInventoryItemList.size();

									}

								} else {
									intransitCount++;

								}
							} else {
								pendingApprovalCount++;

							}

						}
					}
					object.put(SKUCODE, skuCode);
					object.put(PRODUCTNAME, productName);
					object.put(INVENTORY, avaliable);
					object.put(BADINVENTORY, badInv);
					object.put(PENDINGQCASSEMENT, pendingQc);
					object.put(BARCODEID, inventory.getBarcodeId());
					object.put(THRESHOLDLEVEL, overAllThresholdValue);
					object.put(INTRANSITCOUNT, intransitCount);
					object.put(PENDINGAPPROVALCOUNT, pendingApprovalCount);

					objList.add(object);

					response.setData(objList);

				} else {

					Optional<Facility> facility = facilityRepository.findById(facilityId);
					if (facility.isPresent()) {

						FacilityWiseThreshold inventoryBasedOnFacilityWiseThreshold = facilityWiseThresholdRepository
								.findByInventoryIdAndFacilityId(inventory, facility.get());

						for (InventoryItem inventoryItem2 : itemList) {

							if (inventoryItem2.getInventoryId().getId().equals(inventory.getId())) {
								if (inventoryItem2.getApprovalstatus()) {

									if (!inventoryItem2.getScanned()) {

										if (inventoryItem2.getItemStatusId().getId() == 1) {
											avaliableInventoryItemList.add(inventoryItem2);
											avaliable = (long) avaliableInventoryItemList.size();

										} else if (inventoryItem2.getItemStatusId().getId() == 6) {
											badInvInventoryItemList.add(inventoryItem2);
											badInv = (long) badInvInventoryItemList.size();

										} else if (inventoryItem2.getItemStatusId().getId() == 5) {
											pendingQcInventoryItemList.add(inventoryItem2);
											pendingQc = (long) pendingQcInventoryItemList.size();

										}

									} else {

										intransitCount++;
									}
								} else {
									pendingApprovalCount++;

								}
							}
						}
						object.put(SKUCODE, skuCode);
						object.put(PRODUCTNAME, productName);
						object.put(INVENTORY, avaliable);
						object.put(BADINVENTORY, badInv);
						object.put(PENDINGQCASSEMENT, pendingQc);
						object.put(THRESHOLDLEVEL, inventoryBasedOnFacilityWiseThreshold.getThresholdLevel());
						object.put(BARCODEID, inventory.getBarcodeId());
						object.put(INTRANSITCOUNT, intransitCount);
						object.put(PENDINGAPPROVALCOUNT, pendingApprovalCount);

						objList.add(object);

					}
				}
				response.setData(objList);

			}

		} catch (

		Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS134.name(), EnumTypeForErrorCodes.SCUS134.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}
		return response;
	}

	@Scheduled(cron = "${inventoryAlertsBasedOnOverAllThresholdLevelCount}")
	@Override
	public ServiceResponse<List<FacilityWiseInventory>> inventoryAlertsBasedOnOverAllThresholdLevelCount() {

		log.info("over All Threshold Level Count");

		ServiceResponse<List<FacilityWiseInventory>> response = new ServiceResponse<>();
		try {

			List<Inventory> listOfInventory = inventoryRepo.findAll();

			List<FacilityWiseInventory> listOfOverallFacilityWiseItemCount = new ArrayList<>();

			for (Inventory inventory : listOfInventory) {
				Long overAllThresholdValue = 0l;

				List<FacilityWiseThreshold> listOfInventoryBasedOnFacilityWiseThreshold = facilityWiseThresholdRepository
						.findByInventoryId(inventory);

				for (FacilityWiseThreshold facilityWiseThreshold : listOfInventoryBasedOnFacilityWiseThreshold) {
					overAllThresholdValue = overAllThresholdValue + facilityWiseThreshold.getThresholdLevel();
				}

				if (inventory.getInventory() != null && inventory.getInventory() <= overAllThresholdValue
						&& inventory.getActive()) {

					FacilityWiseInventory overallFacilityWiseItemCount = new FacilityWiseInventory();
					overallFacilityWiseItemCount.setProductName(inventory.getProductName());
					overallFacilityWiseItemCount.setSkuCode(inventory.getSkuCode());
					overallFacilityWiseItemCount.setFacilityWiseInventoryCount(overAllThresholdValue);
					overallFacilityWiseItemCount.setTotalInventory(inventory.getInventory());

					listOfOverallFacilityWiseItemCount.add(overallFacilityWiseItemCount);
				}
			}

			List<FacilityWiseInventory> sortedFacilityWiseInventoryList = listOfOverallFacilityWiseItemCount.stream()
					.sorted(Comparator.comparing(FacilityWiseInventory::getTotalInventory))
					.collect(Collectors.toList());

			if (!sortedFacilityWiseInventoryList.isEmpty()) {
				context.setVariable(INVENTORYLIST, sortedFacilityWiseInventoryList);

				String body1 = "Please find the below list for products with low inventory for all Facility by over all threshold level";

				String body2 = templateEngine.process(templateforOverAllThresholdLevel, context);

				Collection<User> userByRole = userSvc.getUsersByRole("SUPERADMIN").getData();

				for (User user : userByRole) {
					String time = DateTimeFormatter.ofPattern("hh:mm a").format(LocalTime.now());

					if (user.isNotificationStatus()) {
						String email = user.getEmail();

						String subject = "MBB-Platform - Inventory Alert for over all threshold level" + " on "
								+ LocalDate.now() + " at " + time;
						emailsvc.notifyUserByEmail(email, body1 + body2, subject);

					}

				}

				response.setData(sortedFacilityWiseInventoryList);
			}

		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS136.name(), EnumTypeForErrorCodes.SCUS136.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}
		return response;

	}

	@Override
	public ServiceResponse<Collection<JSONObject>> getInventoryItemsBasedOnSkuCodeAndDates(
			@PathVariable String startDate, @PathVariable String endDate, @PathVariable String skuCode,
			@PathVariable Long statusId, @PathVariable Long facilityId) {
		log.info("get inventory item based on sku and dates");
		ServiceResponse<Collection<JSONObject>> response = new ServiceResponse<>();
		List<JSONObject> objList = new ArrayList<>();
		try {
			String endDate1 = LocalDate.parse(endDate).plusDays(1).toString();

			Inventory inventory = inventoryRepo.findBySkuCode(skuCode);

			Collection<InventoryItem> inventoryItemList = inventoryItemRepo.findByInventoryIdAndDates(startDate,
					endDate1, inventory);

			for (InventoryItem inventoryItem : inventoryItemList) {
				if (inventoryItem.getApprovalstatus()) {

					if (statusId == 8) {

						if (inventoryItem.getScanned()
								&& (facilityId == 0 || inventoryItem.getFacilityId().getId().equals(facilityId))) {

							String packageName = inventoryItem.getTransferInventoryId().getPackageName();

							String[] splitArray = packageName.split("_", 3);
							String to = splitArray[1];
							Facility toFacility = facilityRepository.findByFacilityName(to);

							JSONObject obj = new JSONObject();
							String qrcode = inventoryItem.getBarcode();
							String createdUser = inventoryItem.getCreatedUser();

							obj.put(QRCODE, qrcode);
							obj.put(PRODUCTNAME, inventory.getProductName());

							ZonedDateTime create = inventoryItem.getCreatedTime();
							ZonedDateTime update = inventoryItem.getUpdatedTime();

							String createDate = create.toString();
							String updateDate = update.toString();

							obj.put(CREATEDDATE, createDate.substring(0, 10));
							obj.put(UPDATEDDATE, updateDate.substring(0, 10));
							obj.put(SERIALNUMBER, inventoryItem.getSerialNumber());
							obj.put(CREATEDUSER, createdUser);
							obj.put(UPDATEDUSER, inventoryItem.getUpdatedUser());
							obj.put("toFacility", toFacility.getFacility());
							obj.put(FACILITY, inventoryItem.getFacilityId());
							obj.put(PONUMBER, inventoryItem.getPoVendorId().getPurchaseOrderNumber());

							objList.add(obj);

						}

					} else {

						if (!inventoryItem.getScanned()) {

							if ((inventoryItem.getItemStatusId().getId().equals(statusId) && facilityId == 0)
									|| (inventoryItem.getItemStatusId().getId().equals(statusId)
											&& inventoryItem.getFacilityId().getId().equals(facilityId))) {
								JSONObject obj = new JSONObject();
								String qrcode = inventoryItem.getBarcode();
								String createdUser = inventoryItem.getCreatedUser();

								obj.put(QRCODE, qrcode);
								obj.put(PRODUCTNAME, inventory.getProductName());

								ZonedDateTime create = inventoryItem.getCreatedTime();
								ZonedDateTime update = inventoryItem.getUpdatedTime();

								String createDate = create.toString();
								String updateDate = update.toString();

								obj.put(CREATEDDATE, createDate.substring(0, 10));
								obj.put(UPDATEDDATE, updateDate.substring(0, 10));
								obj.put(SERIALNUMBER, inventoryItem.getSerialNumber());

								obj.put(CREATEDUSER, createdUser);
								obj.put(UPDATEDUSER, inventoryItem.getUpdatedUser());
								obj.put(PONUMBER, inventoryItem.getPoVendorId().getPurchaseOrderNumber());

								obj.put(FACILITY, inventoryItem.getFacilityId());

								objList.add(obj);

							}
						}
					}
				} else {
					if (statusId == 9
							|| inventoryItem.getFacilityId().getId().equals(facilityId) && (facilityId == 0)) {

						JSONObject obj = new JSONObject();
						String qrcode = inventoryItem.getBarcode();
						String createdUser = inventoryItem.getCreatedUser();

						obj.put(QRCODE, qrcode);
						obj.put(PRODUCTNAME, inventory.getProductName());

						ZonedDateTime create = inventoryItem.getCreatedTime();
						ZonedDateTime update = inventoryItem.getUpdatedTime();

						String createDate = create.toString();
						String updateDate = update.toString();

						obj.put(CREATEDDATE, createDate.substring(0, 10));
						obj.put(UPDATEDDATE, updateDate.substring(0, 10));
						obj.put(SERIALNUMBER, inventoryItem.getSerialNumber());

						obj.put(CREATEDUSER, createdUser);
						obj.put(UPDATEDUSER, inventoryItem.getUpdatedUser());
						obj.put(PONUMBER, inventoryItem.getPoVendorId().getPurchaseOrderNumber());

						obj.put(FACILITY, inventoryItem.getFacilityId());

						objList.add(obj);

					}
				}
			}
			response.setData(objList);

		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS052.name(), EnumTypeForErrorCodes.SCUS052.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}

		return response;

	}

	@Override
	public ServiceResponse<String> updateInventoryStatus(String skuCode, Boolean skuStatus) {
		log.info("update inventory status");
		ServiceResponse<String> response = new ServiceResponse<>();
		List<InventoryItem> finalInventoryItemList = new ArrayList<>();
		Boolean action = false;
		try {
			Inventory inventory = inventoryRepo.findBySkuCode(skuCode);

			if (inventory != null) {
				Collection<InventoryItem> inventoryItemList = inventoryItemRepo.findByInventoryId(inventory);

				for (InventoryItem inventoryItem : inventoryItemList) {
					if (inventoryItem.getItemStatusId().getId() != 7l) {
						finalInventoryItemList.add(inventoryItem);
					}

				}
				List<PoVendor> listPo = poVendorRepo.findByPurchaseInvoiceStatus(1l);
				LABLE: for (PoVendor poVendor : listPo) {

					List<VendorItemDetails> listVendorItem = vendorItemDetailsRepo.findByPoVendorId(poVendor);
					for (VendorItemDetails vendorItemDetails : listVendorItem) {
						if (vendorItemDetails.getSkuCode().equals(skuCode)) {
							action = true;

							break LABLE;

						}
					}

				}

				if (inventory.getActive()) {
					if (inventory.getAccessoriesStatus()) {
						response.setError(EnumTypeForErrorCodes.SCUS070.name(),
								EnumTypeForErrorCodes.SCUS070.errorMsg());

					} else {
						List<ChildAccessories> childList = childAccessoriesRepo.findByChildId(inventory.getId());
						if (childList.isEmpty()) {
							if ((finalInventoryItemList.isEmpty()
									|| finalInventoryItemList.size() == userInventoryCount) && !action) {

								inventory.setActive(skuStatus);
								response.setData("success");

							} else {
								response.setError(EnumTypeForErrorCodes.SCUS063.name(),
										EnumTypeForErrorCodes.SCUS063.errorMsg());
							}
						} else {
							response.setError(EnumTypeForErrorCodes.SCUS071.name(),
									EnumTypeForErrorCodes.SCUS071.errorMsg());
						}
					}
				} else {
					inventory.setActive(skuStatus);
					response.setData("success");

				}

			} else {
				response.setError(EnumTypeForErrorCodes.SCUS1062.name(), EnumTypeForErrorCodes.SCUS1062.errorMsg());
			}

		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS052.name(), EnumTypeForErrorCodes.SCUS052.errorMsg());

			log.error(utils.toJson(response.getError()), e);

		}
		return response;
	}

	@Override
	public ServiceResponse<List<JSONObject>> viewAccessoriesInInventory(Long inventoryId,Long facilityId,
			@PathVariable Boolean status) {

		log.info("view accessories");
		ServiceResponse<List<JSONObject>> response = new ServiceResponse<>();
		List<Inventory> invList=new ArrayList<>();
		try {

			List<ChildAccessories> accessoriesList = childAccessoriesRepo.findByParentId(inventoryId);

			for (ChildAccessories childAccessories : accessoriesList) {
				Optional<Inventory> inventory = inventoryRepo.findById(childAccessories.getChildId());

				if (inventory.isPresent()) {
				invList.add(inventory.get());
				
					
				
				} else {
					response.setError(EnumTypeForErrorCodes.SCUS044.name(), EnumTypeForErrorCodes.SCUS044.errorMsg());

				}

			}
		List<JSONObject> result = getProductCountBasedOnFacilityForViewAccessories(facilityId,status,invList).getData();
			
			response.setData(result);
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS068.name(), EnumTypeForErrorCodes.SCUS068.errorMsg());

			log.error(utils.toJson(response.getError()), e);

		}
		return response;
	}

	@Override
	public ServiceResponse<JSONObject> getProductNameBySku(String skuCode) {
		log.info("get product name by skucode");
		ServiceResponse<JSONObject> response = new ServiceResponse<>();
		JSONObject obj = new JSONObject();
		try {
			Inventory inventory = inventoryRepo.findBySkuCode(skuCode);
			if(inventory!=null) {
			if(!inventory.getAccessoriesStatus()) {
			obj.put(SKUCODE, inventory.getSkuCode());
			obj.put(PRODUCTNAME, inventory.getProductName());

			obj.put("id", inventory.getId());
			response.setData(obj);
			}else {
				response.setError(EnumTypeForErrorCodes.SCUS072.name(), EnumTypeForErrorCodes.SCUS072.errorMsg());

				
			}
			}else {
				
				response.setError(EnumTypeForErrorCodes.SCUS066.name(), EnumTypeForErrorCodes.SCUS066.errorMsg());
	
			}
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS069.name(), EnumTypeForErrorCodes.SCUS069.errorMsg());

			log.error(utils.toJson(response.getError()), e);

		}
		return response;
	}

	/**
	 * getProductCountBasedOnFacility service implementation
	 * 
	 * @param facilityId
	 * @return ServiceResponse<List<JSONObject>>
	 */
	@Override
	public ServiceResponse<List<JSONObject>> getProductCountBasedOnFacilityForViewAccessories(Long facilityId,
			Boolean status, List<Inventory> accessoriesList) {
		log.info("get Product Count Based On Facility");
		ServiceResponse<List<JSONObject>> response = new ServiceResponse<>();

		try {

			List<Inventory> listOfInventorys = accessoriesList;

			List<JSONObject> objList = new ArrayList<>();

			if (facilityId == 0) {

				for (Inventory inventory : listOfInventorys) {
					if (inventory.getActive().equals(status)) {

						Long overAllThresholdValue = 0l;

						List<FacilityWiseThreshold> listOfInventoryBasedOnFacilityWiseThreshold = facilityWiseThresholdRepository
								.findByInventoryId(inventory);

						for (FacilityWiseThreshold facilityWiseThreshold : listOfInventoryBasedOnFacilityWiseThreshold) {
							overAllThresholdValue = overAllThresholdValue + facilityWiseThreshold.getThresholdLevel();
						}

						JSONObject obj1 = new JSONObject();

						obj1.put(SKUCODE, inventory.getSkuCode());
						obj1.put(PRODUCTNAME, inventory.getProductName());
						obj1.put(INVENTORY, inventory.getInventory());
						obj1.put(PENDINGQCASSEMENT, inventory.getPendingQcAccessment());
						obj1.put(BADINVENTORY, inventory.getBadInventory());
						obj1.put(BARCODEID, inventory.getBarcodeId());
						obj1.put(THRESHOLDLEVEL, overAllThresholdValue);
						obj1.put(INTRANSITCOUNT, inventory.getInTransitCount());
						obj1.put(PENDINGAPPROVALCOUNT, inventory.getPendingApprovalCount());
						obj1.put(ACCESSORYSTATUS, inventory.getAccessoriesStatus());

						obj1.put("id", inventory.getId());

						if (inventory.getProductImage() != null) {

							obj1.put(PRODUCTIMAGE, true);
							byte[] inventoryImage = inventory.getProductImage();
							imageToThumbnail(inventoryImage).getData();

							obj1.put(SKUIMAGE, imageToThumbnail(inventoryImage).getData());

						} else {
							obj1.put(PRODUCTIMAGE, false);

						}
						objList.add(obj1);
					}

					response.setData(objList);

				}
			} else {

				String skuCode = null;
				String productName = null;
				for (Inventory inventory : listOfInventorys) {
					if (inventory.getActive().equals(status)) {
						JSONObject object = new JSONObject();
						skuCode = inventory.getSkuCode();
						productName = inventory.getProductName();
						Optional<Facility> facility = facilityRepository.findById(facilityId);

						if (facility.isPresent()) {
							List<InventoryItem> avaliableInventoryItemList = new ArrayList<>();
							List<InventoryItem> badInvInventoryItemList = new ArrayList<>();
							List<InventoryItem> pendingQcInventoryItemList = new ArrayList<>();

							FacilityWiseThreshold inventoryBasedOnFacilityWiseThreshold = facilityWiseThresholdRepository
									.findByInventoryIdAndFacilityId(inventory, facility.get());

							Collection<InventoryItem> gettingInventoryItemsList = inventoryItemRepo
									.findByInventoryId(inventory);
							Long avaliable = (long) 0;
							Long badInv = (long) 0;
							Long pendingQc = (long) 0;
							Long intransitCount = 0l;
							Long pendingApprovalCount = 0l;
							for (InventoryItem inventoryItem : gettingInventoryItemsList) {
								if (inventoryItem.getFacilityId().getId().equals(facilityId)) {
									if (inventoryItem.getApprovalstatus()) {
										if (!inventoryItem.getScanned()) {
											if (inventoryItem.getItemStatusId().getId() == 1) {
												avaliableInventoryItemList.add(inventoryItem);
												avaliable = (long) avaliableInventoryItemList.size();

											} else if (inventoryItem.getItemStatusId().getId() == 6) {
												badInvInventoryItemList.add(inventoryItem);
												badInv = (long) badInvInventoryItemList.size();

											} else if (inventoryItem.getItemStatusId().getId() == 5) {
												pendingQcInventoryItemList.add(inventoryItem);
												pendingQc = (long) pendingQcInventoryItemList.size();

											}
										} else {

											intransitCount++;

										}
									} else {
										pendingApprovalCount++;

									}

								}

							}
							object.put(SKUCODE, skuCode);
							object.put(PRODUCTNAME, productName);
							object.put(INVENTORY, avaliable);
							object.put(BADINVENTORY, badInv);
							object.put(PENDINGQCASSEMENT, pendingQc);
							object.put("id", inventory.getId());

							object.put(THRESHOLDLEVEL, inventoryBasedOnFacilityWiseThreshold.getThresholdLevel());
							object.put(BARCODEID, inventory.getBarcodeId());
							object.put(INTRANSITCOUNT, intransitCount);
							object.put(PENDINGAPPROVALCOUNT, pendingApprovalCount);
							object.put(ACCESSORYSTATUS, inventory.getAccessoriesStatus());

							if (inventory.getProductImage() != null) {

								object.put(PRODUCTIMAGE, true);
								byte[] inventoryImage = inventory.getProductImage();
								imageToThumbnail(inventoryImage).getData();

								object.put(SKUIMAGE, imageToThumbnail(inventoryImage).getData());

							} else {
								object.put(PRODUCTIMAGE, false);

							}

							objList.add(object);

						}
						response.setData(objList);
					}

				}

			}
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS051.name(), EnumTypeForErrorCodes.SCUS051.errorMsg());
			log.error(utils.toJson(response.getError()), e);

		}
		return response;
	}

	@Override
	public ServiceResponse<List<JSONObject>> viewAccessories(Long inventoryId) {

		log.info("view accessories");
		ServiceResponse<List<JSONObject>> response = new ServiceResponse<>();
		List<JSONObject> finalInventoryList = new ArrayList<>();
		try {

			List<ChildAccessories> accessoriesList = childAccessoriesRepo.findByParentId(inventoryId);
			
			for (ChildAccessories childAccessories : accessoriesList) {
				JSONObject obj = new JSONObject();

				Optional<Inventory> inventory = inventoryRepo.findById(childAccessories.getChildId());
				if (inventory.isPresent()) {
					obj.put("sku", inventory.get().getSkuCode());
					obj.put(PRODUCTNAME, inventory.get().getProductName());

					finalInventoryList.add(obj);
				} else {
					response.setError(EnumTypeForErrorCodes.SCUS044.name(), EnumTypeForErrorCodes.SCUS044.errorMsg());

				}

			}
			response.setData(finalInventoryList);
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS068.name(), EnumTypeForErrorCodes.SCUS068.errorMsg());

			log.error(utils.toJson(response.getError()), e);

		}
		return response;
	}

}

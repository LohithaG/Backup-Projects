package com.mbb.mbbplatform.svcs.impl;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Optional;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.mbb.mbbplatform.common.EnumTypeForErrorCodes;
import com.mbb.mbbplatform.domain.InventoryItem;
import com.mbb.mbbplatform.domain.PoStatus;
import com.mbb.mbbplatform.domain.PoVendor;
import com.mbb.mbbplatform.domain.PurchaseInvoiceStatus;
import com.mbb.mbbplatform.domain.Vendor;
import com.mbb.mbbplatform.domain.VendorItemDetails;
import com.mbb.mbbplatform.model.ServiceResponse;
import com.mbb.mbbplatform.model.Utils;
import com.mbb.mbbplatform.repos.InventoryItemRepository;
import com.mbb.mbbplatform.repos.PoStatusRepository;
import com.mbb.mbbplatform.repos.PoVendorRepository;
import com.mbb.mbbplatform.repos.PurchaseInvoiceStatusRepository;
import com.mbb.mbbplatform.repos.VendorItemDetailsRepository;
import com.mbb.mbbplatform.repos.VendorRepository;
import com.mbb.mbbplatform.svcs.PoVendorService;

@RestController
@SuppressWarnings("unchecked")
public class PoVendorServiceImpl implements PoVendorService {

	private static Logger log = LoggerFactory.getLogger(PoVendorServiceImpl.class);

	@Autowired
	private PoVendorRepository poVendorRepository;

	@Autowired
	private VendorRepository vendorRepo;
	@Autowired
	private VendorItemDetailsRepository vendorItemDetailsRepo;

	@Autowired
	private InventoryItemRepository inventoryItemRepo;

	@Autowired
	private PoStatusRepository poStatusRepo;

	@Autowired
	private PurchaseInvoiceStatusRepository purchaseInvoiceStatusRepo;

	@Autowired
	private VendorItemDetailsServiceImpl vendorItemDetailsServiceImpl;

	@Autowired
	private Utils utils;

	private static final String SKULIST = "skuList";

	private static final String PURCHASEORDERDATE = "purchaseOrderDate";

	/**
	 * addPoVendor service implementation
	 * 
	 * @RequestBody povendor
	 * @return ServiceResponse<PoVendor>
	 */
	@Override
	public ServiceResponse<PoVendor> addPoVendor(PoVendor povendor) {
		log.info("adding Povendor");

		ServiceResponse<PoVendor> response = new ServiceResponse<>();
		try {

			PoVendor povendorExists = poVendorRepository.findByPurchaseOrderNumber(povendor.getPurchaseOrderNumber());
			if (povendorExists != null) {
				response.setError(EnumTypeForErrorCodes.SCUS823.name(), EnumTypeForErrorCodes.SCUS823.errorMsg());
			} else {

				povendor.setEnable(false);
				povendor.setPriceDetailsAdded(false);
				povendor.setPurchaseInvoiceStatus(purchaseInvoiceStatusRepo.findById(1l).get());
				povendor.setStatus(poStatusRepo.findById(6l).get());
				PoVendor savedPovendor = poVendorRepository.save(povendor);
				response.setData(savedPovendor);
			}
		} catch (Exception exception) {

			response.setError(EnumTypeForErrorCodes.SCUS803.name(), EnumTypeForErrorCodes.SCUS803.errorMsg());
			log.error(utils.toJson(response.getError()), exception);
		}

		return response;
	}

	/**
	 * UpdatePoVendor service implementation
	 * 
	 * @param id
	 * @RequestBody PoVendor
	 * @return ServiceResponse<PoVendor>
	 */
	@Override
	public ServiceResponse<PoVendor> updatePoVendor(@Valid Long id, @Valid PoVendor povendor) {
		log.info("updating povendor");
		ServiceResponse<PoVendor> response = new ServiceResponse<>();

		try {
			Optional<PoVendor> poVendorExist = poVendorRepository.findById(id);

			if (poVendorExist.isPresent()) {
				PoVendor poVendorExists = poVendorRepository
						.findByPurchaseOrderNumber(poVendorExist.get().getPurchaseOrderNumber());
				if (poVendorExists == null || poVendorExists.getId().equals(id)) {
					poVendorExist.get().setComments(povendor.getComments());
					poVendorExist.get().setPurchaseOrderNumber(povendor.getPurchaseOrderNumber());
					poVendorExist.get().setVendorId(povendor.getVendorId());
					PoVendor updatedPoVendor = poVendorRepository.save(poVendorExist.get());
					response.setData(updatedPoVendor);
				} else {
					response.setError(EnumTypeForErrorCodes.SCUS827.name(), EnumTypeForErrorCodes.SCUS827.errorMsg());
				}

			} else {
				response.setError(EnumTypeForErrorCodes.SCUS822.name(), EnumTypeForErrorCodes.SCUS822.errorMsg());
			}
		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS823.name(), EnumTypeForErrorCodes.SCUS823.errorMsg());
			log.error(utils.toJson(response.getError()), exception);
		}

		return response;
	}

	/**
	 * getPoVendorById service implementation
	 * 
	 * @param id
	 * @return ServiceResponse<PoVendor>
	 */
	@Override
	public ServiceResponse<PoVendor> getPoVendorById(@Valid Long id) {
		log.info("getting povendor by id ");
		ServiceResponse<PoVendor> response = new ServiceResponse<>();

		try {

			Optional<PoVendor> povendorExist = poVendorRepository.findById(id);

			if (povendorExist.isPresent()) {
				response.setData(povendorExist.get());

			} else {
				response.setError(EnumTypeForErrorCodes.SCUS806.name(), EnumTypeForErrorCodes.SCUS806.errorMsg());
			}
		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS807.name(), EnumTypeForErrorCodes.SCUS807.errorMsg());
			log.error(utils.toJson(response.getError()), exception);
		}
		return response;
	}

	/**
	 * getAllPoVendor service implementation
	 * 
	 * 
	 * @return ServiceResponse<Collection<PoVendor>>
	 */

	@Override
	public ServiceResponse<Collection<PoVendor>> getAllPoVendor() {
		log.info("getting all povendor list");

		ServiceResponse<Collection<PoVendor>> response = new ServiceResponse<>();
		try {
			Collection<PoVendor> listOfPoVendor = poVendorRepository.findAll();
			response.setData(listOfPoVendor);
		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS808.name(), EnumTypeForErrorCodes.SCUS808.errorMsg());
			log.error(utils.toJson(response.getError()), exception);
		}
		return response;
	}

	/**
	 * getPoVendorBypurchaseOrderNumber service implementation
	 * 
	 * @param purchaseOrderNumber
	 * @return ServiceResponse<PoVendor>
	 */
	@Override
	public ServiceResponse<PoVendor> getPoVendorBypurchaseOrderNumber(@Valid String purchaseOrderNumber) {
		log.info("getting povendor by purchase Order Number ");
		ServiceResponse<PoVendor> response = new ServiceResponse<>();
		try {
			PoVendor poVendorExist = poVendorRepository.findByPurchaseOrderNumber(purchaseOrderNumber);
			if (poVendorExist != null) {
				response.setData(poVendorExist);

			} else {
				response.setError(EnumTypeForErrorCodes.SCUS809.name(), EnumTypeForErrorCodes.SCUS809.errorMsg());
			}

		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS810.name(), EnumTypeForErrorCodes.SCUS810.errorMsg());
			log.error(utils.toJson(response.getError()), exception);
		}
		return response;
	}

	/**
	 * getAllVendors service implementation
	 * 
	 * @return ServiceResponse<Collection<Vendor>>
	 */
	@Override
	public ServiceResponse<Collection<Vendor>> getAllVendors() {
		log.info("getting all vendors list");

		ServiceResponse<Collection<Vendor>> response = new ServiceResponse<>();
		try {
			Collection<Vendor> listOfPoVendor = vendorRepo.findAll();
			response.setData(listOfPoVendor);
		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS822.name(), EnumTypeForErrorCodes.SCUS822.errorMsg());
			log.error(utils.toJson(response.getError()), exception);
		}
		return response;
	}

	/**
	 * getAllDetailsOfVendor service implementation
	 * 
	 * @return ServiceResponse<Collection<JSONObject>>
	 */
	@Override
	public ServiceResponse<Collection<JSONObject>> getAllDetailsOfVendor(@NotNull @PathVariable String startDate,
			@NotNull @PathVariable String endDate, @PathVariable Long vendorId,
			@PathVariable Long purchaseInvoicestatusId) {

		log.info("getting All Details Of Vendor");
		ServiceResponse<Collection<JSONObject>> response = new ServiceResponse<>();
		try {
			Collection<PoVendor> sortedListOfPoVendor = new ArrayList<>();
			String endDate1 = LocalDate.parse(endDate).plusDays(1).toString();

			Collection<PoVendor> listOfPoVendor = poVendorRepository.findByCommercialInvoiceDate(startDate, endDate1);

			if (!purchaseInvoicestatusId.equals(0l)) {

				for (PoVendor poVendor : listOfPoVendor) {

					if (poVendor.getPurchaseInvoiceStatus() != null
							&& poVendor.getPurchaseInvoiceStatus().getId().equals(purchaseInvoicestatusId)) {
						sortedListOfPoVendor.add(poVendor);
					}
				}

			} else {
				sortedListOfPoVendor = listOfPoVendor;
			}

			Optional<Vendor> vendor = vendorRepo.findById(vendorId);
			List<PoVendor> poVendors = new ArrayList<>();
			for (PoVendor povendorDetails : sortedListOfPoVendor) {
				if (vendor.isPresent()) {
					if (povendorDetails.getVendorId() == vendor.get()) {
						poVendors.add(povendorDetails);
					}
				} else {
					poVendors.add(povendorDetails);
				}
			}
			List<JSONObject> objList = new ArrayList<>();
			for (PoVendor poVendor : poVendors) {
				JSONObject obj = new JSONObject();
				List<String> skuList = new ArrayList<>();
				String purchaseOrderNo = poVendor.getPurchaseOrderNumber();

				List<VendorItemDetails> vendorItemDetails = vendorItemDetailsRepo.findByPoVendorId(poVendor);
				obj.put("poId", poVendor.getId());
				obj.put("vendorname", poVendor.getVendorId().getName());
				obj.put("ponumber", purchaseOrderNo);
				obj.put("productDetails", vendorItemDetails);
				obj.put("count", vendorItemDetails.size());
				obj.put("createdDate", poVendor.getCreatedTime());
				obj.put(PURCHASEORDERDATE, poVendor.getCommercialInvoiceDate());
				obj.put("stockReceivedDate", poVendor.getStockReceivedDate());

				obj.put("comments", poVendor.getComments());
				obj.put("purchaseInvoiceStatus", poVendor.getPurchaseInvoiceStatus());
				for (VendorItemDetails itemDetails : vendorItemDetails) {
					String skuCode = (itemDetails.getSkuCode()) + "-" + (itemDetails.getItemName());
					skuList.add(skuCode);
				}
				obj.put(SKULIST, skuList);
				objList.add(obj);
			}

			response.setData(objList);
		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS824.name(), EnumTypeForErrorCodes.SCUS824.errorMsg());
			log.error(utils.toJson(response.getError()), exception);
		}
		return response;

	}

	/**
	 * getPoVendorsBasedOnStatus service implementation
	 * 
	 * @param enable
	 * @return ServiceResponse<Collection<PoVendor>>
	 */
	@Override
	public ServiceResponse<Collection<PoVendor>> getPoVendorsBasedOnStatus(Boolean enable) {
		log.info("get poVendor based on status");
		ServiceResponse<Collection<PoVendor>> response = new ServiceResponse<>();
		try {
			List<PoVendor> poVendorList = new ArrayList<>();
			Collection<PoVendor> listOfPoVendor = poVendorRepository.findAll();
			for (PoVendor poVendor : listOfPoVendor) {
				if (enable) {
					if (poVendor.getEnable().equals(enable)) {
						Long count = 0l;
						List<VendorItemDetails> listVendorItemDetails = vendorItemDetailsRepo
								.findByPoVendorId(poVendor);
						for (VendorItemDetails vendorItemDetails : listVendorItemDetails) {
							Integer retreieveCount = vendorItemDetailsServiceImpl.retreiveQrcodesCount(
									vendorItemDetails.getSkuCode(), poVendor.getPurchaseOrderNumber()).getData();
							count = count + retreieveCount;

						}
						if (count > 0) {
							poVendorList.add(poVendor);
						}
					}
				} else {
					if (poVendor.getEnable().equals(enable) && poVendor.getPurchaseInvoiceStatus().getId() == 2) {
						poVendorList.add(poVendor);
					}

				}
			}
			response.setData(poVendorList);
		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS826.name(), EnumTypeForErrorCodes.SCUS826.errorMsg());
			log.error(utils.toJson(response.getError()), exception);
		}
		return response;
	}

	@Override
	public ServiceResponse<List<JSONObject>> getInventoryApproval(@PathVariable String startDate,
			@PathVariable String endDate, @PathVariable Long statusId) {
		log.info("get details for inventory approval screen");
		ServiceResponse<List<JSONObject>> response = new ServiceResponse<>();
		List<JSONObject> list = new ArrayList<>();
		try {
			String endDate1 = LocalDate.parse(endDate).plusDays(1).toString();

			Collection<PoVendor> listPoVendor = poVendorRepository.findByCommercialInvoiceDate(startDate, endDate1);

			for (PoVendor poVendor : listPoVendor) {

				if (statusId == 0) {
					JSONObject obj = new JSONObject();
					Collection<InventoryItem> listInvItem = inventoryItemRepo.findByPoVendorId(poVendor);
					List<VendorItemDetails> listVendorItem = vendorItemDetailsRepo.findByPoVendorId(poVendor);
					Long totalCount = 0l;
					JSONArray sku = new JSONArray();
					for (VendorItemDetails vendorItemDetails : listVendorItem) {

						sku.add(vendorItemDetails.getSkuCode() + "-" + vendorItemDetails.getItemName());

						totalCount = totalCount + vendorItemDetails.getQuantity();
					}

					obj.put(SKULIST, sku);
					obj.put("totalCount", totalCount);
					obj.put("statusInfo", poVendor.getStatus());
					obj.put("poNumber", poVendor.getPurchaseOrderNumber());
					obj.put("poVendorId", poVendor.getId());
					obj.put(PURCHASEORDERDATE, poVendor.getCommercialInvoiceDate());
					obj.put("vendorName", poVendor.getVendorId().getName());

					if (poVendor.getStatus().getId() == 4) {
						obj.put("approvedDate", poVendor.getUpdatedTime());
					} else {
						obj.put("approvedDate", null);
					}

					obj.put("addedToInventory", listInvItem.size());
					list.add(obj);
				} else {
					if (poVendor.getStatus().getId().equals(statusId)) {
						JSONObject obj = new JSONObject();
						Collection<InventoryItem> listInvItem = inventoryItemRepo.findByPoVendorId(poVendor);
						List<VendorItemDetails> listVendorItem = vendorItemDetailsRepo.findByPoVendorId(poVendor);
						Long totalCount = 0l;
						JSONArray sku = new JSONArray();
						for (VendorItemDetails vendorItemDetails : listVendorItem) {

							sku.add(vendorItemDetails.getSkuCode() + "-" + vendorItemDetails.getItemName());

							totalCount = totalCount + vendorItemDetails.getQuantity();
						}

						obj.put(SKULIST, sku);
						obj.put("totalCount", totalCount);
						obj.put("statusInfo", poVendor.getStatus());
						obj.put("poNumber", poVendor.getPurchaseOrderNumber());
						obj.put(PURCHASEORDERDATE, poVendor.getCommercialInvoiceDate());
						obj.put("vendorName", poVendor.getVendorId().getName());
						if (poVendor.getStatus().getId() == 4) {
							obj.put("approvedDate", poVendor.getUpdatedTime());
						} else {
							obj.put("approvedDate", null);
						}

						obj.put("addedToInventory", listInvItem.size());

						obj.put("poVendorId", poVendor.getId());

						list.add(obj);

					}

				}

			}

			response.setData(list);

		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS832.name(), EnumTypeForErrorCodes.SCUS832.errorMsg());
			log.error(utils.toJson(response.getError()), exception);
		}
		return response;
	}

	@Override
	public ServiceResponse<PoVendor> updatePOStatus(Long poVendorId, Long poStatusId, String stockReceivedDate) {
		log.info("updating POStatus");
		ServiceResponse<PoVendor> response = new ServiceResponse<>();

		try {
			Optional<PoVendor> poVendorExist = poVendorRepository.findById(poVendorId);
			Optional<PurchaseInvoiceStatus> purchaseInvoiceStatusExist = purchaseInvoiceStatusRepo.findById(poStatusId);
			Optional<PoStatus> poStatusExist = poStatusRepo.findById(5l);

			if (poVendorExist.isPresent() && purchaseInvoiceStatusExist.isPresent() && poStatusExist.isPresent()) {
				PoVendor poVenodr = poVendorExist.get();
				poVenodr.setPurchaseInvoiceStatus(purchaseInvoiceStatusExist.get());

				poVenodr.setStatus(poStatusExist.get());
				LocalDate date = LocalDate.parse(stockReceivedDate);
				poVenodr.setStockReceivedDate(date);
				PoVendor updatePOStatus = poVendorRepository.save(poVenodr);

				response.setData(updatePOStatus);

			} else {
				response.setError(EnumTypeForErrorCodes.SCUS822.name(), EnumTypeForErrorCodes.SCUS822.errorMsg());
			}
		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS833.name(), EnumTypeForErrorCodes.SCUS833.errorMsg());
			log.error(utils.toJson(response.getError()), exception);
		}

		return response;
	}

	@Override
	public ServiceResponse<List<PurchaseInvoiceStatus>> getAllPurchaseInvoiceStatus() {
		log.info("getting all purchase invoice status");
		ServiceResponse<List<PurchaseInvoiceStatus>> response = new ServiceResponse<>();

		try {

			List<PurchaseInvoiceStatus> listofPurchaseInvoiceStatus = purchaseInvoiceStatusRepo.findAll();
			response.setData(listofPurchaseInvoiceStatus);

		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS834.name(), EnumTypeForErrorCodes.SCUS834.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}
		return response;

	}
}

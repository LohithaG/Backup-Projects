package com.mbb.mbbplatform.svcs.impl;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.json.JSONArray;
import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.mbb.mbbplatform.common.EnumTypeForErrorCodes;
import com.mbb.mbbplatform.domain.Inventory;
import com.mbb.mbbplatform.domain.InventoryItem;
import com.mbb.mbbplatform.domain.PoAndBarcode;
import com.mbb.mbbplatform.domain.PoVendor;
import com.mbb.mbbplatform.domain.VendorItemDetails;
import com.mbb.mbbplatform.model.ServiceResponse;
import com.mbb.mbbplatform.model.Utils;
import com.mbb.mbbplatform.repos.InventoryItemRepository;
import com.mbb.mbbplatform.repos.InventoryRepository;
import com.mbb.mbbplatform.repos.PoAndBarcodeRepository;
import com.mbb.mbbplatform.repos.PoVendorRepository;
import com.mbb.mbbplatform.repos.VendorItemDetailsRepository;
import com.mbb.mbbplatform.svcs.VendorItemDetailsService;

@RestController
@SuppressWarnings("unchecked")
public class VendorItemDetailsServiceImpl implements VendorItemDetailsService {
	private static Logger log = LoggerFactory.getLogger(VendorItemDetailsServiceImpl.class);

	@Autowired
	private PoVendorRepository poVendorRepository;
	@Autowired
	private VendorItemDetailsRepository vendorItemDetailsRepository;

	@Autowired
	private Utils utils;
	
	@Autowired
	private InventoryRepository inventoryRepo;
	
	@Autowired
	private InventoryItemRepository inventoryItemRepo;
	
	@Autowired
	private PoAndBarcodeRepository poAndBarcodeRepo;
	
	private static final String SKUCODE = "skuCode";
	
	private static final String QUANTITY = "quantity";

	private static final String ITEMNAME = "itemName";



	/**
	 * addVendorItemDetails service implementation
	 * 
	 * @param vendorItemDetails
	 * @return ServiceResponse<List<VendorItemDetails>>
	 */
	public ServiceResponse<List<VendorItemDetails>> addVendorItemDetails(String vendorItemDetails) {
		log.info("adding vendor item details");
		ServiceResponse<List<VendorItemDetails>> response = new ServiceResponse<>();

		List<VendorItemDetails> listOfVendorItemDetails = new ArrayList<>();
		try {

			JSONObject object = new JSONObject(vendorItemDetails);

			JSONObject poVendorObject = object.getJSONObject("poVendorId");

			Long poVendorId = poVendorObject.getLong("id");

			Optional<PoVendor> findedPoVendor = poVendorRepository.findById(poVendorId);

			if (findedPoVendor.isPresent()) {
				JSONArray jsonarray = object.getJSONArray("vendorDetails");
				for (int i = 0; i < jsonarray.length(); i++) {
					VendorItemDetails vendorItemDetails1 = new VendorItemDetails();
					JSONObject vendorItemDetailsObject = jsonarray.getJSONObject(i);
					vendorItemDetails1.setSkuCode(vendorItemDetailsObject.getString(SKUCODE));
					vendorItemDetails1.setItemName(vendorItemDetailsObject.getString(ITEMNAME));
					vendorItemDetails1.setQuantity(vendorItemDetailsObject.getLong(QUANTITY));
					vendorItemDetails1.setPoVendorId(findedPoVendor.get());
					VendorItemDetails savedVendorItemDetails = vendorItemDetailsRepository.save(vendorItemDetails1);
					listOfVendorItemDetails.add(savedVendorItemDetails);
				}
			} else {
				response.setError(EnumTypeForErrorCodes.SCUS812.name(), EnumTypeForErrorCodes.SCUS812.errorMsg());

			}

			response.setData(listOfVendorItemDetails);
		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS812.name(), EnumTypeForErrorCodes.SCUS812.errorMsg());
			log.error(utils.toJson(response.getError()), exception);
		}

		return response;

	}

	/**
	 * getAllVendorItemDetails service implementation
	 * 
	 * @return ServiceResponse<Collection<VendorItemDetails>>
	 */
	@Override
	public ServiceResponse<Collection<VendorItemDetails>> getAllVendorItemDetails() {
		log.info("getting all vendor item details");
		ServiceResponse<Collection<VendorItemDetails>> response = new ServiceResponse<>();
		try {
			Collection<VendorItemDetails> listVendorItemDetails = vendorItemDetailsRepository.findAll();
			response.setData(listVendorItemDetails);
		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS820.name(), EnumTypeForErrorCodes.SCUS820.errorMsg());
			log.error(utils.toJson(response.getError()), exception);
		}
		return response;
	}

	/**
	 * getVendorItemDetailsById service implementation
	 * 
	 * @param id
	 * @return ServiceResponse<VendorItemDetails>
	 */
	@Override
	public ServiceResponse<Collection<VendorItemDetails>> getVendorItemDetailsByPoVendor(@Valid Long poVendorId) {
		log.info("getting Vendor Item Details By Id");
		ServiceResponse<Collection<VendorItemDetails>> response = new ServiceResponse<>();

		try {
			Optional<PoVendor> povendorExist = poVendorRepository.findById(poVendorId);
			if (povendorExist.isPresent()) {

				Collection<VendorItemDetails> existVendorItemDetails = vendorItemDetailsRepository
						.findByPoVendorId(povendorExist.get());

				response.setData(existVendorItemDetails);
			}

		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS821.name(), EnumTypeForErrorCodes.SCUS821.errorMsg());
			log.error(utils.toJson(response.getError()), exception);
		}

		return response;
	}

	/**
	 * updateVendorItemDetails service implementation
	 * 
	 * @RequestBody vendorItemDetails
	 * @return ServiceResponse<Collection<VendorItemDetails>>
	 */
	@Override
	public ServiceResponse<Collection<VendorItemDetails>> updateVendorItemDetails(
			@Valid List<VendorItemDetails> vendorItemDetails) {
		log.info("updating Vendor Item Details");
		ServiceResponse<Collection<VendorItemDetails>> response = new ServiceResponse<>();
		List<VendorItemDetails> listOfVendorItemDetails = new ArrayList<>();

		try {
			for (VendorItemDetails itemDetails : vendorItemDetails) {
				VendorItemDetails vendorExists = vendorItemDetailsRepository.findBySkuCode(itemDetails.getSkuCode());
				VendorItemDetails updatedItemDetails = null;
				if (vendorExists != null) {
					vendorExists.setItemName(itemDetails.getItemName());
					vendorExists.setQuantity(itemDetails.getQuantity());
					vendorExists.setPoVendorId(itemDetails.getPoVendorId());
					updatedItemDetails = vendorItemDetailsRepository.save(vendorExists);

				} else {
					updatedItemDetails = vendorItemDetailsRepository.save(itemDetails);
				}
				listOfVendorItemDetails.add(updatedItemDetails);

			}
			response.setData(listOfVendorItemDetails);
		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS812.name(), EnumTypeForErrorCodes.SCUS812.errorMsg());
			log.error(utils.toJson(response.getError()), exception);
		}

		return response;
	}

	/**
	 * deleteVendorItemDetailsBasedOnPoVendor service implementation
	 * 
	 * @param poVendorId
	 * @return ServiceResponse<String>
	 */
	@Override
	public ServiceResponse<String> deleteVendorItemDetailsBasedOnPoVendor(@Valid Long poVendorId) {
		log.info("delete Vendor ItemDetails Based On PoVendor");
		ServiceResponse<String> response = new ServiceResponse<>();
		try {
			Optional<PoVendor> poVendor = poVendorRepository.findById(poVendorId);
			if (poVendor.isPresent()) {
				List<VendorItemDetails> vendorItemDetailsExist = vendorItemDetailsRepository
						.findByPoVendorId(poVendor.get());
				vendorItemDetailsRepository.deleteAll(vendorItemDetailsExist);
			}
			response.setData("Item deleted successfully");
		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS818.name(), EnumTypeForErrorCodes.SCUS818.errorMsg());
			log.error(utils.toJson(response.getError()), exception);
		}
		return response;
	}

	/**
	 * getSkuCodesByPurchaseOrderNumber service implementation
	 * 
	 * @param purchaseOrderNumber
	 * @return ServiceResponse<List<VendorItemDetails>>
	 */
	@Override
	public ServiceResponse<List<org.json.simple.JSONObject>> getSkuCodesByPurchaseOrderNumber(
			@Valid String purchaseOrderNumber) {
		log.info("getting Sku Codes By Purchase Order Number");
		ServiceResponse<List<org.json.simple.JSONObject>> response = new ServiceResponse<>();
		List<org.json.simple.JSONObject> objList=new ArrayList<>();
		try {
			PoVendor povendorExist = poVendorRepository.findByPurchaseOrderNumber(purchaseOrderNumber);
			List<VendorItemDetails> listOfVendorItemDetails = vendorItemDetailsRepository
					.findByPoVendorId(povendorExist);
			if(povendorExist.getEnable()) {
			for (VendorItemDetails vendorItemDetails : listOfVendorItemDetails) {
				org.json.simple.JSONObject obj=new org.json.simple.JSONObject();

				Integer retrieveCount = retreiveQrcodesCount(vendorItemDetails.getSkuCode(),purchaseOrderNumber).getData();
				obj.put(SKUCODE, vendorItemDetails.getSkuCode());
				obj.put(QUANTITY, vendorItemDetails.getQuantity());
				obj.put("retriveCount",retrieveCount);
				obj.put(ITEMNAME,vendorItemDetails.getItemName());

				objList.add(obj);
			}}else {
				for (VendorItemDetails vendorItemDetails : listOfVendorItemDetails) {
					org.json.simple.JSONObject obj=new org.json.simple.JSONObject();	
					obj.put(SKUCODE, vendorItemDetails.getSkuCode());
					obj.put(QUANTITY, vendorItemDetails.getQuantity());
					obj.put(ITEMNAME,vendorItemDetails.getItemName());

					objList.add(obj);
				}
				
			}
			response.setData(objList);
		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS826.name(), EnumTypeForErrorCodes.SCUS826.errorMsg());
			log.error(utils.toJson(response.getError()), exception);
		}
		return response;
	}

	public ServiceResponse<Integer> retreiveQrcodesCount(@PathVariable String skuCode, @PathVariable String poNumber) {
		
		ServiceResponse<Integer> response = new ServiceResponse<>();
		List<String> barcodesList = new ArrayList<>();
		List<String> lastBarcodesList = new ArrayList<>();
		try {
			PoVendor poVendor = poVendorRepository.findByPurchaseOrderNumber(poNumber);
			List<VendorItemDetails> vendorItemDetails = vendorItemDetailsRepository.findByPoVendorId(poVendor);
			for (VendorItemDetails itemDetails : vendorItemDetails) {
				String skuCodeExists = itemDetails.getSkuCode();

				if (skuCodeExists.equals(skuCode)) {
					Inventory inventoryExists = inventoryRepo.findBySkuCode(skuCode);
					List<PoAndBarcode> poAndBarcodeList = poAndBarcodeRepo.findBySkuCodeAndPoVendorId(skuCode,
							poVendor);
					for (PoAndBarcode poAndBarcode : poAndBarcodeList) {
						String barcode = poAndBarcode.getBarcode();
						barcodesList.add(barcode);
					}

					Collection<InventoryItem> inventoryItemExists = inventoryItemRepo
							.findByInventoryId(inventoryExists);
					for (InventoryItem items : inventoryItemExists) {
						String existingBarcode = items.getBarcode();
						lastBarcodesList.add(existingBarcode);
					}
					barcodesList.removeAll(lastBarcodesList);
				}
			}

			response.setData(barcodesList.size());

		} catch (

		Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS950.name(), EnumTypeForErrorCodes.SCUS950.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}
		return response;
	}
}

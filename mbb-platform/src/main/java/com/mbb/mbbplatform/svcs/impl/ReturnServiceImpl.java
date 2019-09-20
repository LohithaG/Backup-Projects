package com.mbb.mbbplatform.svcs.impl;

import java.time.ZonedDateTime;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.List;

import org.apache.commons.lang.StringUtils;
import org.json.simple.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.mbb.mbbplatform.common.EnumTypeForErrorCodes;
import com.mbb.mbbplatform.domain.Dispatch;
import com.mbb.mbbplatform.domain.Inventory;
import com.mbb.mbbplatform.domain.InventoryItem;
import com.mbb.mbbplatform.domain.InventoryItemChecklist;
import com.mbb.mbbplatform.model.ServiceResponse;
import com.mbb.mbbplatform.model.Utils;
import com.mbb.mbbplatform.repos.DispatchRepository;
import com.mbb.mbbplatform.repos.InventoryItemChecklistRepository;
import com.mbb.mbbplatform.repos.InventoryItemRepository;
import com.mbb.mbbplatform.repos.InventoryRepository;
import com.mbb.mbbplatform.svcs.InventoryItemService;
import com.mbb.mbbplatform.svcs.ReturnService;

@RestController
@SuppressWarnings("unchecked")
public class ReturnServiceImpl implements ReturnService {

	private static Logger log = LoggerFactory.getLogger(ReturnServiceImpl.class);

	@Autowired
	private Utils utils;

	@Autowired
	private InventoryRepository inventoryRepo;

	@Autowired
	private InventoryItemRepository inventoryItemRepo;

	@Autowired
	private InventoryItemChecklistRepository inventoryItemChecklistRepo;

	@Autowired
	private InventoryItemService inventoryItemService;

	@Autowired
	private DispatchRepository dispatchRepo;

	/**
	 * addReturnItem service implementation
	 * 
	 * @RequestBody inventoryItemList
	 * @return ServiceResponse<List<InventoryItem>>
	 */
	@Override
	public ServiceResponse<List<InventoryItem>> addReturnItem(@RequestBody List<InventoryItem> inventoryItemList) {
		log.info("adding return item");
		ServiceResponse<List<InventoryItem>> response = new ServiceResponse<>();

		try {
			List<InventoryItem> inventoryItems = new ArrayList<>();
			for (InventoryItem inventoryItem : inventoryItemList) {

				InventoryItem inventoryItem1 = inventoryItemRepo.findByBarcode(inventoryItem.getBarcode());
		
				String barcode = inventoryItem.getBarcode();
				Long dispatchCount = inventoryItem1.getInventoryId().getDispatch();
				inventoryItem1.getInventoryId().setDispatch(dispatchCount - 1);
				Long invCount = inventoryItem1.getInventoryId().getInventory();
				Long badInvCount = inventoryItem1.getInventoryId().getBadInventory();
				Long pendingQcCount = inventoryItem1.getInventoryId().getPendingQcAccessment();

				inventoryItem.setReturnProduct(true);
				inventoryItem.setApprovalstatus(true);

				if (inventoryItem.getInventoryConditionId().getId() == 1) {
					if (inventoryItem.getItemStatusId().getId() == 1) {
						if (invCount != null) {
							inventoryItem1.getInventoryId().setInventory(invCount + 1);
						} else {
							inventoryItem1.getInventoryId().setInventory((long) 0);
							Long invCount1 = inventoryItem1.getInventoryId().getInventory();
							inventoryItem1.getInventoryId().setInventory(invCount1 + 1);
						}
						inventoryItemService.updateInventoryItemStatus(inventoryItem.getId(), 1l);
					} else if (inventoryItem.getItemStatusId().getId() == 5) {
						if (pendingQcCount != null) {
							inventoryItem1.getInventoryId().setPendingQcAccessment(pendingQcCount + 1);
						} else {
							inventoryItem1.getInventoryId().setPendingQcAccessment((long) 0);
							Long qcCount = inventoryItem1.getInventoryId().getPendingQcAccessment();
							inventoryItem1.getInventoryId().setPendingQcAccessment(qcCount + 1);
						}
						inventoryItemService.updateInventoryItemStatus(inventoryItem.getId(), 5l);
					}
				} else {
					if (badInvCount != null) {
						inventoryItem1.getInventoryId().setBadInventory(badInvCount + 1);
					} else {
						inventoryItem1.getInventoryId().setBadInventory((long) 0);
						Long badInvCount1 = inventoryItem1.getInventoryId().getBadInventory();
						inventoryItem1.getInventoryId().setBadInventory(badInvCount1 + 1);
					}
					inventoryItemService.updateInventoryItemCondition(inventoryItem.getId(), 2l);
					inventoryItemService.updateInventoryItemStatus(inventoryItem.getId(), 6l);
				}
				inventoryRepo.save(inventoryItem1.getInventoryId());

				Collection<Dispatch> dispatch = dispatchRepo.findByBarcode(barcode);
				for (Dispatch dispatchExists : dispatch) {
					if (!dispatchExists.getProductReturn()) {
						dispatchExists.setProductReturn(true);

						List<Dispatch> lastDispatch = dispatchRepo.findBylastReturnRecord();
						List<String> rmsList = new ArrayList<>();
						for (Dispatch disp : lastDispatch) {
							rmsList.add(disp.getReturnRequestNo());

						}

						Collections.sort(rmsList);

						String lastRMSNumber = rmsList.get(rmsList.size() - 1);

						Long rMS = Long.parseLong(lastRMSNumber.substring(4));
						Long newRms = rMS + 1;
						String num = newRms.toString();
						String finalReturnRequestNo = "RMS-" + StringUtils.leftPad(num, 6, "0");
						dispatchExists.setReturnRequestNo(finalReturnRequestNo);
						dispatchExists.setReturnedToFacility(inventoryItem.getFacilityId());
						dispatchRepo.save(dispatchExists);
					}
				}

				inventoryItem.setCreatedTime(ZonedDateTime.now());

				inventoryItem.setUpdatedUser(inventoryItem.getCreatedUser());
				inventoryItem.setFacilityId(inventoryItem.getFacilityId());
				inventoryItemRepo.save(inventoryItem);
				inventoryItems.add(inventoryItem);

			}
			response.setData(inventoryItems);
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS601.name(), EnumTypeForErrorCodes.SCUS601.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}

		return response;
	}

	/**
	 * getReturnProductDetailsBasedOnBarcode service implementation
	 * 
	 * @param barcode
	 * @return ServiceResponse<JSONObject>
	 */
	@Override
	public ServiceResponse<JSONObject> getReturnProductDetailsBasedOnBarcode(@PathVariable String barcode) {
		log.info("getting item details based on barcode");
		ServiceResponse<JSONObject> response = new ServiceResponse<>();

		try {
			JSONObject obj = new JSONObject();
			Collection<Dispatch> dispatchExists = dispatchRepo.findByBarcode(barcode);
			InventoryItem inventoryItemExists = inventoryItemRepo.findByBarcode(barcode);
			if (inventoryItemExists == null) {
				response.setError(EnumTypeForErrorCodes.SCUS604.name(), EnumTypeForErrorCodes.SCUS604.errorMsg());
			} else {
				if (!dispatchExists.isEmpty() && inventoryItemExists.getItemStatusId().getId() == 7) {
					for (Dispatch dispatch : dispatchExists) {
						if (!dispatch.getProductReturn()) {
							String invoiceId = dispatch.getInvoiceId();
							obj.put("invoiceId", invoiceId);
							obj.put("comments", dispatch.getComment());

						}
					}
					InventoryItem inventoryItem = inventoryItemRepo.findByBarcode(barcode);
					obj.put("inventoryItem", inventoryItem);
					response.setData(obj);
				} else {
					response.setError(EnumTypeForErrorCodes.SCUS603.name(), EnumTypeForErrorCodes.SCUS603.errorMsg());
				}
			}

		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS602.name(), EnumTypeForErrorCodes.SCUS602.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}

		return response;
	}

	/**
	 * getItemsBasedOnInvoiceNumber service implementation
	 * 
	 * @param invoiceId
	 * @return ServiceResponse<List<JSONObject>>
	 */
	@Override
	public ServiceResponse<List<JSONObject>> getItemsBasedOnInvoiceNumber(String invoiceId) {
		log.info("getting item details based on barcode");
		ServiceResponse<List<JSONObject>> response = new ServiceResponse<>();
		try {

			List<Dispatch> dispatchList = dispatchRepo.findByInvoiceId(invoiceId);
			List<JSONObject> itemsList = new ArrayList<>();

			if (!dispatchList.isEmpty()) {
				for (Dispatch dispatch : dispatchList) {

					JSONObject obj = new JSONObject();
					if (dispatch.getProductReturn() == null || (!dispatch.getProductReturn())) {

						String barcode = dispatch.getBarcode();

						InventoryItem inventoryItem = inventoryItemRepo.findByBarcode(barcode);
						Inventory inventory = inventoryItem.getInventoryId();
						Collection<InventoryItemChecklist> itemChecklistList = inventoryItemChecklistRepo
								.findByInventoryItemId(inventoryItem);
						List<InventoryItemChecklist> checklistList = new ArrayList<>();

						for (InventoryItemChecklist checklist : itemChecklistList) {
							if (!checklist.getProductReturn()) {
								checklistList.add(checklist);
							}
						}
						obj.put("inventoryItem", inventoryItem);
						obj.put("checklist", checklistList);
						obj.put("skuCode", inventory.getSkuCode());
						obj.put("productName", inventory.getProductName());
						obj.put("comments", dispatch.getComment());
						obj.put("facility", dispatch.getFacilityId());

						itemsList.add(obj);
					} else {
						response.setError(EnumTypeForErrorCodes.SCUS607.name(),
								EnumTypeForErrorCodes.SCUS607.errorMsg());
					}
				}
			} else {
				response.setError(EnumTypeForErrorCodes.SCUS605.name(), EnumTypeForErrorCodes.SCUS605.errorMsg());
			}
			response.setData(itemsList);
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS606.name(), EnumTypeForErrorCodes.SCUS606.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}
		return response;
	}

	@Override
	public ServiceResponse<List<Dispatch>> getRMSNumber() {
		ServiceResponse<List<Dispatch>> response = new ServiceResponse<>();
		try {
			Boolean returnProduct = true;
			List<Dispatch> savedDispatchList = new ArrayList<>();
			List<Dispatch> dispatchList = dispatchRepo.findByProductReturn(returnProduct);
			Long number = 1l;
			for (Dispatch dispatch : dispatchList) {

				String rmsNo = "RMS-" + StringUtils.leftPad(number.toString(), 6, "0");

				dispatch.setReturnRequestNo(rmsNo);
				Dispatch savedDispatch = dispatchRepo.save(dispatch);
				savedDispatchList.add(savedDispatch);
				number++;

			}
			response.setData(savedDispatchList);
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS606.name(), EnumTypeForErrorCodes.SCUS606.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}
		return response;

	}

}

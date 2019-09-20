package com.mbb.mbbplatform.svcs.impl;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import javax.validation.Valid;

import org.json.JSONArray;
import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.mbb.mbbplatform.common.EnumTypeForErrorCodes;
import com.mbb.mbbplatform.domain.InventoryAccessoryChecklist;
import com.mbb.mbbplatform.domain.InventoryItem;
import com.mbb.mbbplatform.domain.InventoryItemChecklist;
import com.mbb.mbbplatform.model.ServiceResponse;
import com.mbb.mbbplatform.model.Utils;
import com.mbb.mbbplatform.repos.InventoryItemAccessoriesRepository;
import com.mbb.mbbplatform.repos.InventoryItemChecklistRepository;
import com.mbb.mbbplatform.repos.InventoryItemRepository;
import com.mbb.mbbplatform.repos.ServicingProductRepository;
import com.mbb.mbbplatform.svcs.InventoryItemChecklistService;

@RestController
@Validated
public class InventoryItemChecklistServiceImpl implements InventoryItemChecklistService {
	private static Logger log = LoggerFactory.getLogger(InventoryItemChecklistServiceImpl.class);
	@Autowired
	private InventoryItemChecklistRepository inventoryItemChecklistRepo;

	@Autowired
	private InventoryItemRepository inventoryItemRepo;
	@Autowired
	private ServicingProductRepository  productServicingRepository;
	@Autowired
	private Utils utils;

	@Autowired
	private InventoryItemAccessoriesRepository inventoryItemAccessoriesRepo;

	/**
	 * addChecklist service implementation
	 * 
	 * @param inputchecklistList
	 * @return ServiceResponse<List<Collection<InventoryItemChecklist>>>
	 */
	@Override
	public ServiceResponse<List<Collection<InventoryItemChecklist>>> addChecklist(
			@Valid @RequestBody String inputchecklistList) {
		log.info(" adding new checklist");
		ServiceResponse<List<Collection<InventoryItemChecklist>>> response = new ServiceResponse<>();
		List<Collection<InventoryItemChecklist>> resultInventoryItemCheckList = new ArrayList<>();
		try {

			JSONObject totalObject = new JSONObject(inputchecklistList);

			JSONArray totalArray = (JSONArray) totalObject.get("array");
			for (int j = 0; j < totalArray.length(); j++) {

				JSONObject object = totalArray.getJSONObject(j);

				InventoryItemChecklist checklistObject = new InventoryItemChecklist();

				JSONObject inventoryItemObject = object.getJSONObject("inventoryItemId");

				Long inventoryItemId = inventoryItemObject.getLong("id");

				Optional<InventoryItem> inventoryItem = inventoryItemRepo.findById(inventoryItemId);

				if (inventoryItem.isPresent()) {

					checklistObject.setInventoryItemId(inventoryItem.get());
				}
				Set<InventoryItemChecklist> checklistList = new HashSet<>();

				JSONArray jsonarray = object.getJSONArray("checkListArray");

				for (int i = 0; i < jsonarray.length(); i++) {

					InventoryItemChecklist checklistObject1 = new InventoryItemChecklist();

					JSONObject checkList = jsonarray.getJSONObject(i);

					Boolean bool = checkList.getBoolean("accessoryCondition");

					Long quantity = checkList.getLong("quantity");

					Long accessoriesId = checkList.getLong("accessoriesId");

					checklistObject1.setAccessoryCondition(bool);

					checklistObject1.setQuantity(quantity);

					Optional<InventoryAccessoryChecklist> accessories = inventoryItemAccessoriesRepo
							.findById(accessoriesId);
					if (accessories.isPresent()) {

						checklistObject1.setAccessoriesId(accessories.get());
					}
					if (inventoryItem.isPresent()) {
						checklistObject1.setInventoryItemId(inventoryItem.get());
					}
					checklistObject1.setProductReturn(false);
					checklistList.add(checklistObject1);
				}

				Collection<InventoryItemChecklist> checklist1 = inventoryItemChecklistRepo.saveAll(checklistList);

				resultInventoryItemCheckList.add(checklist1);
			}
			response.setData(resultInventoryItemCheckList);
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS900.name(), EnumTypeForErrorCodes.SCUS900.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}
		return response;
	}

	/**
	 * updateChecklist service implementation
	 * 
	 * @param totalchecklist
	 * @return ServiceResponse<String>
	 */
	@Override
	public ServiceResponse<List<Collection<InventoryItemChecklist>>> updateChecklist(@Valid String totalchecklist) {

		log.info(" updating checklist");
		ServiceResponse<List<Collection<InventoryItemChecklist>>> response = new ServiceResponse<>();
		List<InventoryItemChecklist> inventoryItemChecklistList = new ArrayList<>();
		List<Collection<InventoryItemChecklist>> resultInventoryItemCheckList = new ArrayList<>();

		try {
			JSONObject totalObject = new JSONObject(totalchecklist);

			JSONArray totalArray = (JSONArray) totalObject.get("array");
			for (int j = 0; j < totalArray.length(); j++) {

				JSONObject object = totalArray.getJSONObject(j);
				JSONArray array = (JSONArray) object.get("checkListArray");

				JSONObject inventoryItem = (JSONObject) object.get("inventoryItemId");
				Long inventoryItemId = (Long) inventoryItem.getLong("id");

				Optional<InventoryItem> inventoryItem1 = inventoryItemRepo.findById(inventoryItemId);
				if (inventoryItem1.isPresent()) {

					Collection<InventoryItemChecklist> inventoryItemChecklist = inventoryItemChecklistRepo
							.findByInventoryItemId(inventoryItem1.get());

					for (InventoryItemChecklist InventoryItemChecklist1 : inventoryItemChecklist) {
						if (!InventoryItemChecklist1.getProductReturn()) {

							Long existingAccrssoryId = InventoryItemChecklist1.getAccessoriesId().getId();

							for (int i = 0; i < array.length(); i++) {
								JSONObject jsonObj = array.getJSONObject(i);

								Long accessoryId = (Long) jsonObj.getLong("accessoriesId");

								if (existingAccrssoryId.equals(accessoryId)) {

									Long quantity = (Long) jsonObj.getLong("quantity");

									InventoryItemChecklist1.setQuantity(quantity);

									Boolean accessoryCondition = jsonObj.getBoolean("accessoryCondition");

									InventoryItemChecklist1.setAccessoryCondition(accessoryCondition);

								}

							}
							InventoryItemChecklist1.setProductReturn(true);
							inventoryItemChecklistList.add(InventoryItemChecklist1);

						}
					}
				}

				Collection<InventoryItemChecklist> checklist1 = inventoryItemChecklistRepo
						.saveAll(inventoryItemChecklistList);
				resultInventoryItemCheckList.add(checklist1);
			}
			response.setData(resultInventoryItemCheckList);

		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS901.name(), EnumTypeForErrorCodes.SCUS901.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}

		return response;
	}

	/**
	 * getChecklist service implementation
	 * 
	 * @param inventoryItemId
	 * @return ServiceResponse<Collection<InventoryItemChecklist>>
	 */
	@Override
	public ServiceResponse<Collection<InventoryItemChecklist>> getChecklist(@Valid Long inventoryItemId) {
		log.info(" adding checklist");
		ServiceResponse<Collection<InventoryItemChecklist>> response = new ServiceResponse<>();
		try {
			List<InventoryItemChecklist> checklistList = new ArrayList<>();
			Optional<InventoryItem> inventoryItem = inventoryItemRepo.findById(inventoryItemId);

			if (inventoryItem.isPresent()) {
				Collection<InventoryItemChecklist> checklistData = inventoryItemChecklistRepo
						.findByInventoryItemId(inventoryItem.get());
				for (InventoryItemChecklist checklist : checklistData) {
					if (!checklist.getProductReturn()) {
						checklistList.add(checklist);
						response.setData(checklistList);
					}
				}

			}

		} catch (Exception e) {

			response.setError(EnumTypeForErrorCodes.SCUS902.name(), EnumTypeForErrorCodes.SCUS902.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}
		return response;
	}

	@Override
	public ServiceResponse<List<InventoryItemChecklist>> addServicingProductsCheckList(
			@Valid List<InventoryItemChecklist> inventoryItemChecklist, @Valid Long serviceId) {
			log.info(" adding addServicingProductsCheckList");
			ServiceResponse<List<InventoryItemChecklist>> response = new ServiceResponse<>();
			List<InventoryItemChecklist> list = new ArrayList<>();
			try {
				for (InventoryItemChecklist listInventoryItemChecklist : inventoryItemChecklist) {
					listInventoryItemChecklist.setProductReturn(false);
					listInventoryItemChecklist.setServicingProduct(productServicingRepository.findById(serviceId).get());
					listInventoryItemChecklist.setAccessoriesId(listInventoryItemChecklist.getAccessoriesId());

					list.add(listInventoryItemChecklist);
					inventoryItemChecklistRepo.save(listInventoryItemChecklist);

				}
				response.setData(list);

			} catch (Exception e) {

				log.error(utils.toJson(response.getError()), e);
			}
			return response;
	}


	
}

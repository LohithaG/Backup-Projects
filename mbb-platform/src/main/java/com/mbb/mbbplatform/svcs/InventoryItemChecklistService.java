package com.mbb.mbbplatform.svcs;

import java.util.Collection;
import java.util.List;

import javax.validation.Valid;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mbb.mbbplatform.common.RestApiUrlConstants;
import com.mbb.mbbplatform.domain.InventoryItemChecklist;
import com.mbb.mbbplatform.model.ServiceResponse;

@RequestMapping("/mbb/checklist")
public interface InventoryItemChecklistService {


	@PostMapping(RestApiUrlConstants.ADD_NEW_CHECKLIST)
	@ResponseBody
	ServiceResponse<List<Collection<InventoryItemChecklist>>> addChecklist(
			@Valid @RequestBody String inputchecklistList);

	@PutMapping(RestApiUrlConstants.UPDATE_CHECKLIST)
	@ResponseBody
	ServiceResponse<List<Collection<InventoryItemChecklist>>> updateChecklist(@Valid @RequestBody String totalchecklist);

	@GetMapping(RestApiUrlConstants.GET_CHECKLIST)
	@ResponseBody
	ServiceResponse<Collection<InventoryItemChecklist>> getChecklist(@Valid @PathVariable Long inventoryItemId);
	@PostMapping(RestApiUrlConstants.GET_SERVICING_PRODUCTS_CHECKLIST)
	@ResponseBody
	ServiceResponse<List<InventoryItemChecklist>> addServicingProductsCheckList(@Valid @RequestBody List<InventoryItemChecklist> inventoryItemChecklist, @Valid @PathVariable Long serviceId);

}

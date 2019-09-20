package com.mbb.mbbplatform.svcs;

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
import com.mbb.mbbplatform.domain.SpareParts;
import com.mbb.mbbplatform.model.ServiceResponse;

@RequestMapping("/mbb/spareparts")
public interface SparePartsService {
	@PostMapping(RestApiUrlConstants.ADD_SPARE_PARTS)
	@ResponseBody
	ServiceResponse<List<SpareParts>> addSpareParts(@Valid @RequestBody  List<SpareParts> spareParts,@Valid @PathVariable Long quotationId);
	@GetMapping(RestApiUrlConstants.GET_ALL_SPARE_PARTS)
	@ResponseBody
	ServiceResponse<List<SpareParts>> getAllSpareParts();
	@PutMapping(RestApiUrlConstants.UPDATING_SPARE_PARTS)
	@ResponseBody
	ServiceResponse<List<SpareParts>> updateSpareParts(@Valid @RequestBody List<SpareParts> spareParts, @Valid @PathVariable Long quotationDetailsId);
}

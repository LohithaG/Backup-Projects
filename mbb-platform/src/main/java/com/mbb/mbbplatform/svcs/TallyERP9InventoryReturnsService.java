package com.mbb.mbbplatform.svcs;

import java.util.List;


import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import com.mbb.mbbplatform.domain.TallyERP9InventoryReturns;
import com.mbb.mbbplatform.model.ServiceResponse;



@RequestMapping(value = "/mbb/tallyERP9InventoryReturns")
public interface TallyERP9InventoryReturnsService {

	@PostMapping("/")
	@ResponseBody
	ServiceResponse<List<TallyERP9InventoryReturns>> addTallyERP9InventoryReturns();
}

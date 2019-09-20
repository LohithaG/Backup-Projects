package com.mbb.mbbplatform.svcs;

import java.util.List;


import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mbb.mbbplatform.domain.TallyERP9Inventory;
import com.mbb.mbbplatform.model.ServiceResponse;



@RequestMapping(value = "/mbb/tallyERP9Inventory")
public interface TallyERP9InventoryService {

	
	@PostMapping("/")
	@ResponseBody
	ServiceResponse<List<TallyERP9Inventory>> addTallyERP9Inventory();
}

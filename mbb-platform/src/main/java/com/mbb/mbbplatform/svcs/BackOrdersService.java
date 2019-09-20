package com.mbb.mbbplatform.svcs;

import java.util.Collection;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mbb.mbbplatform.domain.BackOrders;
import com.mbb.mbbplatform.model.ServiceResponse;

@RequestMapping(value = "/mbb/backOrders")
public interface BackOrdersService {
	
	@PostMapping("/")
	@ResponseBody
	ServiceResponse<List<BackOrders>> addBackOrder();
	
	@GetMapping("/getAllBackOrders")
	@ResponseBody
	ServiceResponse<Collection<BackOrders>> getAllBackOrders();
}

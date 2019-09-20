package com.mbb.mbbplatform.svcs;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mbb.mbbplatform.domain.SaleOrders;
import com.mbb.mbbplatform.model.ServiceResponse;


@RequestMapping(value = "/mbb/sales")
public interface SalesService {

	
	@GetMapping("/getSaleOrdersList")
	@ResponseBody
	public ServiceResponse<List<SaleOrders>> getSaleOrdersList();
}

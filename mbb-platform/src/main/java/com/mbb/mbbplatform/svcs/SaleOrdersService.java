package com.mbb.mbbplatform.svcs;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mbb.mbbplatform.domain.SaleOrders;
import com.mbb.mbbplatform.model.ServiceResponse;
import com.mbb.mbbplatform.common.RestApiUrlConstants;

@RequestMapping(value = "/mbb/saleorders")
public interface SaleOrdersService {

	@PostMapping(RestApiUrlConstants.ADD_SALE_ORDERS)
	@ResponseBody
	public ServiceResponse<List<SaleOrders>> addSaleOrders();

	
	@GetMapping(RestApiUrlConstants.GET_RECORDS_BY_TEMPLATE)
	@ResponseBody
	public String getRecordsByTemplate();
	
	
	@PostMapping(RestApiUrlConstants.CREATE_SALE)
	@ResponseBody
	public String createSale();
	
	
	
		
	}
	
	


package com.mbb.mbbplatform.svcs;

import java.util.List;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mbb.mbbplatform.common.RestApiUrlConstants;
import com.mbb.mbbplatform.domain.SaleOrderForShipments;
import com.mbb.mbbplatform.model.ServiceResponse;
@RequestMapping(value = "/mbb/saleordersforshipments")
public interface SaleOdersForShipmentsService {

	@PostMapping(RestApiUrlConstants.ADD_SALE_ORDERS)
	@ResponseBody
	public ServiceResponse<List<SaleOrderForShipments>> addSaleOrders();

	
}

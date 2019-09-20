package com.mbb.mbbplatform.svcs;

import java.util.List;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;

import org.json.simple.JSONObject;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mbb.mbbplatform.common.RestApiUrlConstants;
import com.mbb.mbbplatform.domain.ServicingProduct;
import com.mbb.mbbplatform.domain.ServicingStatuses;
import com.mbb.mbbplatform.model.ServiceResponse;
@RequestMapping("/mbb/servicing")

public interface ServicingProductService {
	@PutMapping(RestApiUrlConstants.UPDATING_SERVICING_PRODUCT)
	@ResponseBody
	ServiceResponse<ServicingProduct> updateServicingProduct(@Valid @RequestBody  ServicingProduct productServicing,@Valid @PathVariable Long id);

	
	@PostMapping(RestApiUrlConstants.ADD_SERVICING_PRODUCT)
	@ResponseBody
	ServiceResponse<ServicingProduct> addServicingProduct(@Valid @RequestBody  ServicingProduct productServicing);

	@GetMapping(RestApiUrlConstants.GET_ALL_SERVICING_PRODUCTS)
	@ResponseBody
	ServiceResponse<List<JSONObject>> getAll();
	
	
	@GetMapping(RestApiUrlConstants.GET_AUTO_FILTER)
	@ResponseBody
	ServiceResponse<JSONObject> getDetailsByorderId(@Valid @PathVariable String orderId);
	
	@GetMapping(RestApiUrlConstants.GET_BY_SKU)
	@ResponseBody
	ServiceResponse<JSONObject> getProductNameBySkuCode(@Valid @PathVariable String skuCode);
	
	
	@GetMapping(RestApiUrlConstants.GET_DETAIS_BY_SKU)
	@ResponseBody
	ServiceResponse<JSONObject> getDetailsBySkucode(@PathVariable String skuCode);

	
	@GetMapping(RestApiUrlConstants.GET_SERVICING_PRODUCTS_BY_FILTERS)
	@ResponseBody
	ServiceResponse<List<JSONObject>> getServicigProductsByFilters(@NotNull @PathVariable String startDate,@PathVariable String endDate,
			@PathVariable	Long warranty, @PathVariable Long servicingStatus,@PathVariable Long paymentStatus);

	@GetMapping(RestApiUrlConstants.GET_ALL_SERVICING_STATUES)
	@ResponseBody
	ServiceResponse<List<ServicingStatuses>> getAllServiceStatues();

	@GetMapping(RestApiUrlConstants.GET_SERVICING_PRODUCTS_BY_ID)
	@ResponseBody
	ServiceResponse<JSONObject> getServicingProductById(@Valid @PathVariable Long id);
	
	@GetMapping(RestApiUrlConstants.GET_CUSTOMER_DETAILS_BY_ORDERID)
	@ResponseBody
	ServiceResponse<JSONObject> getCustomerDetailsByOrderId(@Valid @PathVariable String orderId);

}

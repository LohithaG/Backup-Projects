package com.mbb.mbbplatform.svcs;


import java.util.Collection;
import java.util.List;

import javax.validation.Valid;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mbb.mbbplatform.common.RestApiUrlConstants;
import com.mbb.mbbplatform.domain.ShippingAggregator;
import com.mbb.mbbplatform.model.ServiceResponse;

@RequestMapping("/mbb/shippingAggregator")
public interface ShippingAggregatorService {
	@PostMapping(RestApiUrlConstants.ADD_SHIPPING_AGGREGATOR)
	@ResponseBody
	ServiceResponse<ShippingAggregator> addShippingAggregator(@Valid @RequestBody ShippingAggregator shippingAggrrgator);
	
	
	@PutMapping(RestApiUrlConstants.UPDATE_SHIPPING_AGGREGATOR)
	@ResponseBody
	ServiceResponse<ShippingAggregator> updateShippingAggregator(@Valid @RequestBody ShippingAggregator shippingAggrrgator);
	
	
	@DeleteMapping(RestApiUrlConstants.DELETE_SHIPPING_AGGREGATOR)
	@ResponseBody
	ServiceResponse<String> deleteShippingAggregator(@Valid @PathVariable Long id);
	
	@GetMapping(RestApiUrlConstants.GET_BASED_ON_TRACKING_NUMBER)
	@ResponseBody
	ServiceResponse<ShippingAggregator> getBasedOnTrackingNumber(@Valid @PathVariable String trackingNo);
	
	
	@GetMapping(RestApiUrlConstants.GET_BASED_ON_COURIER_NAME)
	@ResponseBody
	ServiceResponse<Collection<ShippingAggregator>> getBasedOnCourierName(@Valid @PathVariable String courierName);
	
	
	@GetMapping(RestApiUrlConstants.GET_BASED_ON_SHIPPINGAGGR)
	@ResponseBody
	ServiceResponse<Collection<ShippingAggregator>> getBasedOnShippingAggr(@Valid @PathVariable String shippingAggr);
	
	
	@GetMapping(RestApiUrlConstants.GET_ALL_SHIPPING_AGGREGATOR)
	@ResponseBody
	ServiceResponse<List<ShippingAggregator>> getAll();

	@PostMapping(RestApiUrlConstants.ADD_SHIPPING_AGGREGATOR_FOR_SERVICING_PRODUCTS)
	@ResponseBody
	ServiceResponse<ShippingAggregator> addShippingAggregatorForServicingproducts(
			@Valid @RequestBody ShippingAggregator shippingAggregator, @Valid @PathVariable Long id);

	
	
	
	
}

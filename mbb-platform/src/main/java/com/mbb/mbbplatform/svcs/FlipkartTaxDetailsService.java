package com.mbb.mbbplatform.svcs;

import java.util.Collection;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mbb.mbbplatform.common.RestApiUrlConstants;
import com.mbb.mbbplatform.domain.FlipkartTaxDetails;
import com.mbb.mbbplatform.model.ServiceResponse;

@RequestMapping(value = "/mbb/flipkarttaxdetails")

public interface FlipkartTaxDetailsService {
	@PostMapping(RestApiUrlConstants.ADD_FLIPKART_COD_REMITTANCE)
	@ResponseBody
	ServiceResponse<List<FlipkartTaxDetails>> addFlipkartTaxDetails();
	@GetMapping(RestApiUrlConstants.GET_FLIPKART_TAXDETAILS)
	@ResponseBody
	ServiceResponse<Collection<FlipkartTaxDetails>> getAllFlipkartTaxDetails();
	@GetMapping(RestApiUrlConstants.GET_FLIPKART_ORDERID_TAXDETAILS)
	@ResponseBody
	ServiceResponse<List<FlipkartTaxDetails>> getTaxesForParticularOrderItemId(@PathVariable String orderItemId);
}

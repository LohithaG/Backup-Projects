package com.mbb.mbbplatform.svcs;

import java.util.Collection;
import java.util.List;

import javax.validation.constraints.NotNull;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mbb.mbbplatform.common.RestApiUrlConstants;
import com.mbb.mbbplatform.domain.CODRemittance;
import com.mbb.mbbplatform.model.ServiceResponse;

@RequestMapping(value = "/mbb/codremittance")
public interface CODRemittanceService {

	@GetMapping(RestApiUrlConstants.GET_ALL_ZEPO_CODREMITTANCE)
	@ResponseBody
	ServiceResponse<Collection<CODRemittance>> getAllZepoCodRemittance();

	@GetMapping(RestApiUrlConstants.GET_ALL_SR_COD_REMITTANCE)
	@ResponseBody
	ServiceResponse<Collection<CODRemittance>> getAllShiprocketCodRemittance();

	@GetMapping(RestApiUrlConstants.GET_ALL_COD_REMITTANCE)
	@ResponseBody
	ServiceResponse<Collection<CODRemittance>> getAllCodRemittance();

	@GetMapping(RestApiUrlConstants.GET_ALL_SHIPPING_AGGREGATORS)
	@ResponseBody
	ServiceResponse<Collection<CODRemittance>> getAllShippingAggregator(
			@NotNull @PathVariable String shippingAggregator);

	@GetMapping(RestApiUrlConstants.GET_ALL_COD_STATUS)
	@ResponseBody
	ServiceResponse<Collection<CODRemittance>> getAllCodStatus(@NotNull @PathVariable String status);

	@GetMapping(RestApiUrlConstants.GET_ALL_SHIPPING_AGGREGATR_AND_STATUS)
	@ResponseBody
	List<CODRemittance> getAllShippingAggregatorAndStatus(@NotNull @PathVariable String status,
			@NotNull @PathVariable String shippingAggregator);

	@GetMapping(RestApiUrlConstants.FIND_COD_REMITTANCE_REPORTS_IN_BETWEEN_DATES)
	@ResponseBody
	ServiceResponse<Collection<CODRemittance>> findCodRemittanceReportsInBetweenDates(
	@NotNull @RequestParam String startDate, @NotNull @RequestParam String endDate );

	@GetMapping(RestApiUrlConstants.FIND_COD_REMITTANCE_DETAILS_IN_BETWEEN_DATES)
	@ResponseBody
	List<CODRemittance> findCodRemittanceDetailsInBetweenDates(
			@NotNull @RequestParam String startDate, @NotNull @RequestParam String endDate,@NotNull @RequestParam String shippingAggregator,
			@NotNull @RequestParam String status);

	
	@DeleteMapping(RestApiUrlConstants.DELETE_ALL_SR_SHIPMENTS)
	@ResponseBody
	public ServiceResponse<String> deleteAllShiprocketShipments();
	@PostMapping(RestApiUrlConstants.GET_ALL_ZEPO_CODREMITTANCE)
	@ResponseBody
	ServiceResponse<Collection<CODRemittance>> addAllZepoCodRemittance();
}

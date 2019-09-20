package com.mbb.mbbplatform.svcs;

import java.util.Collection;
import java.util.List;

import javax.validation.constraints.NotNull;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import com.mbb.mbbplatform.common.RestApiUrlConstants;

import com.mbb.mbbplatform.domain.ShipmentsDeliveryAlerts;
import com.mbb.mbbplatform.domain.ZepoSRShipments;
import com.mbb.mbbplatform.model.ServiceResponse;

@RequestMapping(value = "/mbb/zepoSRShipments")
public interface ZepoSRShipmentsService {

	@GetMapping(RestApiUrlConstants.GET_ALL_ZEPO_SHIPMENTS)
	@ResponseBody
	ServiceResponse<Collection<ZepoSRShipments>> getAllZepoShipments();

	@GetMapping(RestApiUrlConstants.GET_ALL_SGIPROCKET_SHIPMENTS)
	@ResponseBody
	ServiceResponse<Collection<ZepoSRShipments>> getAllShiprocketShipments();

	@GetMapping(RestApiUrlConstants.GET_ALL_AMAZON_FLIPKART_SHIPMENTS)
	@ResponseBody
	ServiceResponse<Collection<ZepoSRShipments>> getAllAmazonFlipkartShipment();

	@GetMapping(RestApiUrlConstants.GET_ALL_ZEPOSR_SHIPMENTS)
	@ResponseBody
	ServiceResponse<Collection<ZepoSRShipments>> getAllzeposrshipments();

	@GetMapping(RestApiUrlConstants.GET_ALL_SHIPPING_STATUS_AND_SHIPPING_AGREGATOR)
	@ResponseBody
	List<ZepoSRShipments> getAllShippingStatusAndShippingAggregator(@NotNull @PathVariable String status,
			@NotNull @PathVariable String shippingAggregator);

	@GetMapping(RestApiUrlConstants.GET_ALL_ZEPOSR_SHIPMENTS_BY_DELIVERY_STATUS)
	@ResponseBody
	ServiceResponse<List<ZepoSRShipments>> getAllzeposrshipmentsByDeliveryStatus();

	@GetMapping(RestApiUrlConstants.FIND_SHIPMENTS_REPORT_IN_BETWEEN_DATES)
	@ResponseBody
	ServiceResponse<Collection<ZepoSRShipments>> findShipmentsReportInBetweenDates(
			@NotNull @PathVariable String startDate, @NotNull @PathVariable String endDate);

	@GetMapping(RestApiUrlConstants.FIND_TRACKING_DETAILS)
	@ResponseBody
	ServiceResponse<Collection<ZepoSRShipments>> findTrackingDetails(@NotNull @PathVariable String trackingNo);

	@GetMapping(RestApiUrlConstants.GET_DELIVERY_ALERTS_ZEPOSR_SHIPMENTS)
	@ResponseBody
	public ServiceResponse<List<ShipmentsDeliveryAlerts>> getDeliveryAlertsZepoSRShipments();

	@GetMapping(RestApiUrlConstants.FIND_SHIPMENTS_DETAILS_IN_BETWEEN_DATES)
	@ResponseBody
	List<ZepoSRShipments> findShipmentsDetailsInBetweenDates(@NotNull @RequestParam String startDate,
			@NotNull @RequestParam String endDate, @NotNull @RequestParam String shippingAggregator,
			@NotNull @RequestParam String status);

	@GetMapping(RestApiUrlConstants.FIND_SHIPMENTS_DETAILS_IN_BETWEEN_DATES_PAYMENTMODE)
	@ResponseBody
	List<ZepoSRShipments> findShipmentsDetailsInBetweenDatesAndPaymentMode(@NotNull @RequestParam String startDate,
			@NotNull @RequestParam String endDate, @NotNull @RequestParam String shippingAggregator,
			@NotNull @RequestParam String status,@NotNull @RequestParam String paymentMode);
}

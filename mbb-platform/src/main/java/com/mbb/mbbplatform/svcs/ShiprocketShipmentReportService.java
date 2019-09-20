package com.mbb.mbbplatform.svcs;

import java.util.Collection;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mbb.mbbplatform.domain.ShiprocketShipmentReport;
import com.mbb.mbbplatform.model.ServiceResponse;
import com.mbb.mbbplatform.common.RestApiUrlConstants;


@RequestMapping("mbb/shiprocketshipmentReport")
public interface ShiprocketShipmentReportService {

	@PostMapping(RestApiUrlConstants.ADD_SHIPROCKET_SHIPMENT_REPORT)
	@ResponseBody
	ServiceResponse<List<ShiprocketShipmentReport>> addShiprocketShipmentReport();

	@GetMapping(RestApiUrlConstants.GET_ALL_SHIPROCKET_SHIPMENT_REPORT)
	@ResponseBody
	ServiceResponse<Collection<ShiprocketShipmentReport>> getAllShiprocketShipment();

}

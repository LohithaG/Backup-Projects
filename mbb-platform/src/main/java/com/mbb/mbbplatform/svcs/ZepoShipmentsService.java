package com.mbb.mbbplatform.svcs;

import java.util.Collection;
import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import com.mbb.mbbplatform.domain.ZepoShipments;
import com.mbb.mbbplatform.model.ServiceResponse;
import com.mbb.mbbplatform.common.RestApiUrlConstants;


@RequestMapping(value = "/mbb/zepoShipments")
public interface ZepoShipmentsService {

	@PostMapping(RestApiUrlConstants.ADD_ZEPO_SHIPMENTS)
	@ResponseBody
	ServiceResponse<List<ZepoShipments>> addZepoShipment();
	
	@GetMapping(RestApiUrlConstants.GET_ALL_ZEPO_ZEPO_SHIPMENTS)
	@ResponseBody
	ServiceResponse<Collection<ZepoShipments>> getAllZepoZepoShipment();

}

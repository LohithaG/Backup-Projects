package com.mbb.mbbplatform.svcs;

import javax.validation.constraints.NotNull;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import com.mbb.mbbplatform.common.RestApiUrlConstants;

@RequestMapping(value = "mbb/zepoSRShipmentsTracking")
public interface TrackingDetailsService {
	@GetMapping(RestApiUrlConstants.GET_TRACKING_DETAILS_BY_TRACKING_ID)
	@ResponseBody
	public String getTrackingDetailsByTrackingId(@NotNull @PathVariable  String trackingNo) ;
}

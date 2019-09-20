package com.mss.pmj.pmjmis.svcs;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mss.pmj.pmjmis.common.RestApiUrlConstants;
import com.mss.pmj.pmjmis.domain.Location;
import com.mss.pmj.pmjmis.model.ServiceResponse;

@RequestMapping(value = "/pmj/location")
public interface LocationService {


	@GetMapping(RestApiUrlConstants.GET_ALL_LOCATIONS_BY_CHANNEL)
	@ResponseBody
	ServiceResponse<List<Location>> getAllLocationsByChannel(@PathVariable String channelName);

	@GetMapping(RestApiUrlConstants.GET_ALL_D2H_LOCATIONS_GROUP_BY_STATE)
	@ResponseBody
	ServiceResponse<List<Location>> getAllD2hLocationsGroupByState();

	@GetMapping(RestApiUrlConstants.GET_ALL_CLUSTERS_BY_STATE)
	@ResponseBody
	ServiceResponse<List<Location>> getAllClustersByState(@PathVariable String state);

	@GetMapping(RestApiUrlConstants.GET_ALL_LOCATIONS_BY_CLUSTER)
	@ResponseBody
	ServiceResponse<List<Location>> getAllLocationsByCluster(@PathVariable String state,@PathVariable String clusterName);

}

package com.mss.pmj.pmjmis.svcs;

import org.json.simple.JSONObject;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mss.pmj.pmjmis.common.RestApiUrlConstants;
import com.mss.pmj.pmjmis.model.ServiceResponse;

@RequestMapping(value = "/pmj/ticketsize")
public interface TicketSizeService {

	// Showroom

	@GetMapping(RestApiUrlConstants.GET_TICKETSIZE_BY_ALL_SHOWROOMS)
	@ResponseBody
	ServiceResponse<JSONObject> ticketSizeByAllShowrooms(@PathVariable String startDate, @PathVariable String endDate);

	@GetMapping(RestApiUrlConstants.GET_TICKETSIZE_BY_SHOWROOM_LOCATION)
	@ResponseBody
	ServiceResponse<JSONObject> ticketSizeByShowroomLocation(@PathVariable String startDate,
			@PathVariable String endDate, @PathVariable String locationCode);

	// D2H
	@GetMapping(RestApiUrlConstants.GET_TICKETSIZE_BY_D2H_STATES)
	@ResponseBody
	ServiceResponse<JSONObject> ticketSizeByD2hStates(@PathVariable String startDate, @PathVariable String endDate);

	@GetMapping(RestApiUrlConstants.GET_TICKETSIZE_BY_D2H_CLUSTER)
	@ResponseBody
	ServiceResponse<JSONObject> ticketSizeByD2hClusters(@PathVariable String startDate, @PathVariable String endDate,
			@PathVariable String state);

	@GetMapping(RestApiUrlConstants.GET_TICKETSIZE_BY_D2H_LOCATION)
	@ResponseBody
	ServiceResponse<JSONObject> ticketSizeByD2hLocation(@PathVariable String startDate, @PathVariable String endDate,
			@PathVariable String clusterName,@PathVariable String state);

	@GetMapping(RestApiUrlConstants.GET_TICKETSIZE_BY_D2H_TEAM)
	@ResponseBody
	ServiceResponse<JSONObject> ticketSizeByD2hTeam(@PathVariable String startDate, @PathVariable String endDate,
			@PathVariable String locationCode);

}

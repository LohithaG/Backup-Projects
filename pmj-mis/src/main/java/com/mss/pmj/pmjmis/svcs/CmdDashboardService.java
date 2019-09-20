package com.mss.pmj.pmjmis.svcs;

import org.json.simple.JSONObject;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mss.pmj.pmjmis.common.RestApiUrlConstants;
import com.mss.pmj.pmjmis.model.ServiceResponse;

@RequestMapping(value = "/pmj/cmddashboard")
public interface CmdDashboardService {

	@GetMapping(RestApiUrlConstants.GET_TOP_EMPLOYEES)
	@ResponseBody
	ServiceResponse<JSONObject> getTopEmployees(@PathVariable String startDate, @PathVariable String endDate);

	@GetMapping(RestApiUrlConstants.GET_KPI_BLOCK_VALUES)
	@ResponseBody
	ServiceResponse<JSONObject> getKpiBlockValues(@PathVariable String startDate, @PathVariable String endDate);

}

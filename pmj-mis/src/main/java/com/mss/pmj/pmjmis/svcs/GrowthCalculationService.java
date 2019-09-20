package com.mss.pmj.pmjmis.svcs;

import org.json.simple.JSONObject;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mss.pmj.pmjmis.common.RestApiUrlConstants;
import com.mss.pmj.pmjmis.model.ServiceResponse;

@RequestMapping(value = "/pmj/growthCalculation")
public interface GrowthCalculationService {

	@GetMapping(RestApiUrlConstants.GET_GROWTH_BY_TOTALSALES)
	@ResponseBody
	ServiceResponse<JSONObject> getGrowthByTotalSales(@PathVariable String startDate1, @PathVariable String endDate1,
			@PathVariable String startDate2, @PathVariable String endDate2, @PathVariable String startDate3,
			@PathVariable String endDate3);

	@GetMapping(RestApiUrlConstants.GET_GROWTH_BY_SALESPERSON)
	@ResponseBody
	ServiceResponse<JSONObject> getGrowthBySalesPerson(@PathVariable String startDate1, @PathVariable String endDate1,
			@PathVariable String startDate2, @PathVariable String endDate2, @PathVariable String startDate3,
			@PathVariable String endDate3, @PathVariable Long empId);

	@GetMapping(RestApiUrlConstants.GET_GROWTH_BY_CHANNEL)
	@ResponseBody
	ServiceResponse<JSONObject> getGrowthByChannel(@PathVariable String startDate1, @PathVariable String endDate1,
			@PathVariable String startDate2, @PathVariable String endDate2, @PathVariable String startDate3,
			@PathVariable String endDate3);
	
	@GetMapping(RestApiUrlConstants.GET_GROWTH_BY_LOCATION_SHOWROOM)
	@ResponseBody
	ServiceResponse<JSONObject> getGrowthByShowroomLocation(@PathVariable String startDate1, @PathVariable String endDate1,
			@PathVariable String startDate2, @PathVariable String endDate2, @PathVariable String startDate3,
			@PathVariable String endDate3);
	
	@GetMapping(RestApiUrlConstants.GET_GROWTH_BY_LOCATION_D2H)
	@ResponseBody
	ServiceResponse<JSONObject> getGrowthByD2HLocation(@PathVariable String startDate1, @PathVariable String endDate1,
			@PathVariable String startDate2, @PathVariable String endDate2, @PathVariable String startDate3,
			@PathVariable String endDate3,@PathVariable String clusterName,@PathVariable String state);

}

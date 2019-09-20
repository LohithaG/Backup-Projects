package com.mss.pmj.pmjmis.svcs;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mss.pmj.pmjmis.common.RestApiUrlConstants;
import com.mss.pmj.pmjmis.response.LocationTgtVsActulas;
import com.mss.pmj.pmjmis.response.TargetVsActualResponse;

@RequestMapping(value = "/pmj/performanceAnalysis/ShwWise")
public interface PerformanceAnalysisEachLocationService {

	@GetMapping(RestApiUrlConstants.GET_LOCATION_STORE_DATA)
	@ResponseBody
	TargetVsActualResponse<LocationTgtVsActulas> getLocationStoreTargetVsActual(@PathVariable String locationName,@PathVariable String startDate,
			@PathVariable String endDate);

}

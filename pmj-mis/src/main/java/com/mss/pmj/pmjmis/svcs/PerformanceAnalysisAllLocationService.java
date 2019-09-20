package com.mss.pmj.pmjmis.svcs;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mss.pmj.pmjmis.common.RestApiUrlConstants;
import com.mss.pmj.pmjmis.response.TargetVsActualResponse;
import com.mss.pmj.pmjmis.response.TgtVsActualLocation;

@RequestMapping(value = "/pmj/performanceAnalysis/forAllSHW")
public interface PerformanceAnalysisAllLocationService {

	@GetMapping(RestApiUrlConstants.GET_ALL_LOCATION_STORE_DATA_CHANNEL)
	@ResponseBody
	TargetVsActualResponse<TgtVsActualLocation> getLocationStoreTargetVsActual(@PathVariable String channelName,@PathVariable String startDate,
			@PathVariable String endDate);

}

package com.mss.pmj.pmjmis.svcs;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import com.mss.pmj.pmjmis.common.RestApiUrlConstants;
import com.mss.pmj.pmjmis.response.TargetVsActualResponse;
import com.mss.pmj.pmjmis.response.TgtVsActualLocation;

@RequestMapping(value = "/pmj/performanceAnalysis/D2HCluster")
public interface PerformanceAnalysisD2HLocationService {

	@GetMapping(RestApiUrlConstants.GET_LOCATION_D2H_DATA)
	@ResponseBody
	TargetVsActualResponse<TgtVsActualLocation> getLocationD2HStateTargetVsActual(@PathVariable String stateName,@PathVariable String clusterName,
			@PathVariable String startDate, @PathVariable String endDate);

}

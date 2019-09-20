package com.mss.pmj.pmjmis.svcs;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mss.pmj.pmjmis.common.RestApiUrlConstants;
import com.mss.pmj.pmjmis.response.PerformanceAnalysisChannelWiseTgtVsActual;
import com.mss.pmj.pmjmis.response.TargetVsActualResponse;
import com.mss.pmj.pmjmis.response.TgtVsActual;

@RequestMapping("/pmj/performanceAnalysis")
public interface PerformanceAnalysisChannelWiseService {

	@GetMapping(RestApiUrlConstants.GET_PERFORMANCE_ANALYSIS_FOR_ALL_CHANNELS)
	@ResponseBody
	public TargetVsActualResponse<PerformanceAnalysisChannelWiseTgtVsActual> performanceAnalysisForAllChannels(
			@PathVariable String startDate, @PathVariable String endDate);

	@GetMapping(RestApiUrlConstants.GET_PERFORMANCE_ANALYSIS_FOR_EACH_CHANNELS)
	@ResponseBody
	TargetVsActualResponse<TgtVsActual> performanceAnalysisEachChannelWise(@PathVariable Long channelId,
			@PathVariable String startDate, @PathVariable String endDate);

}

package com.mss.pmj.pmjmis.svcs;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mss.pmj.pmjmis.common.RestApiUrlConstants;
import com.mss.pmj.pmjmis.response.ConversionData;
import com.mss.pmj.pmjmis.response.TargetVsActualResponse;

@RequestMapping(value = "/pmj")
public interface PerformanceAnalysisSalesConversionService {

	@GetMapping(RestApiUrlConstants.GET_PERFORMANCE_ANALYSIS_SALESPERSONWISE_CONVERSION)
	@ResponseBody
	TargetVsActualResponse<ConversionData> conversionAnalysisSalesPersonWise(@PathVariable Long salesPersonId,@PathVariable String startDate, @PathVariable String endDate);
	
	@GetMapping(RestApiUrlConstants.GET_PERFORMANCE_ANALYSIS_SALESPERSONWISE_TICKETSIZE)
	@ResponseBody
	TargetVsActualResponse<ConversionData> ticketSizeAnalysisSalesPersonWise(@PathVariable Long salesPersonId,@PathVariable String startDate, @PathVariable String endDate);
}
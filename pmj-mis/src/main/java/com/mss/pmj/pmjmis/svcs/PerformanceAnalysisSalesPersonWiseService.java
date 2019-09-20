package com.mss.pmj.pmjmis.svcs;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mss.pmj.pmjmis.common.RestApiUrlConstants;
import com.mss.pmj.pmjmis.response.PCSalesPersonWiseMarginsResponse;
import com.mss.pmj.pmjmis.response.PerformanceAnalysisSalesPersonWiseDetails;
import com.mss.pmj.pmjmis.response.SalesPersonWiseAchivements;
import com.mss.pmj.pmjmis.response.TargetVsActualResponse;
import com.mss.pmj.pmjmis.response.TgtVsActual;

@RequestMapping("/pmj/performanceAnalysis")
public interface PerformanceAnalysisSalesPersonWiseService {

	// pc sales person wise sales tgt vs actuals

	@GetMapping(RestApiUrlConstants.GET_PERFORMANCE_ANALYSIS_SALESPERSONWISE_TGT_VS_ACTUALS)
	@ResponseBody
	TargetVsActualResponse<TgtVsActual> salesPersonWiseTargetsVsActuals(@PathVariable String startDate,
			@PathVariable String endDate, @PathVariable Long salesPersonId);

	// pc sales person wise achievements

	@GetMapping(RestApiUrlConstants.GET_PERFORMANCE_ANALYSIS_SALESPERSONWISE_ACHIVEMENTS)
	@ResponseBody
	TargetVsActualResponse<SalesPersonWiseAchivements> performanceAnalysisSalesPersonWiseAchivements(
			@PathVariable String startDate, @PathVariable String endDate, @PathVariable Long salesPersonId);

	@GetMapping(RestApiUrlConstants.GET_PERFORMANCE_ANALYSIS_SALESPERSONWISE_MARGINS)
	@ResponseBody
	TargetVsActualResponse<PCSalesPersonWiseMarginsResponse> paSalesPersonWiseMargins(@PathVariable String startDate,
			@PathVariable String endDate, @PathVariable Long salesPersonId);

	@GetMapping(RestApiUrlConstants.GET_PERFORMANCE_ANALYSIS_SALESPERSONWISE_KPI_BLOCKS)
	@ResponseBody
	TargetVsActualResponse<PerformanceAnalysisSalesPersonWiseDetails> performanceAnalysisSalesPersonWiseKPIBlocks(
			@PathVariable Long salesPersonId, @PathVariable String startDate, @PathVariable String endDate);

}

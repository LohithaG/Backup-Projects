package com.mss.pmj.pmjmis.svcs;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import com.mss.pmj.pmjmis.common.RestApiUrlConstants;
import com.mss.pmj.pmjmis.response.D2HTgtVsActuals;
import com.mss.pmj.pmjmis.response.TargetVsActualResponse;

@RequestMapping(value = "/pmj/performanceAnalysis/forAllD2H")
public interface PerformanceAnalysisLocationStateD2HService {

	@GetMapping(RestApiUrlConstants.GET_LOCATION_STATE_D2H_DATA)
	@ResponseBody
	TargetVsActualResponse<D2HTgtVsActuals> getLocationD2HTargetVsActual(
			@PathVariable String startDate, @PathVariable String endDate);

}

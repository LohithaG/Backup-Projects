package com.mss.pmj.pmjmis.svcs;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import com.mss.pmj.pmjmis.common.RestApiUrlConstants;
import com.mss.pmj.pmjmis.response.D2HTeam;
import com.mss.pmj.pmjmis.response.TargetVsActualResponse;

@RequestMapping(value = "/pmj/performanceAnalysis/D2HLocation")
public interface PerformanceAnalysisD2HTeamService {

	@GetMapping(RestApiUrlConstants.GET_TEAM_D2H_DATA)
	@ResponseBody
	TargetVsActualResponse<D2HTeam> getLocationD2HTeamTargetVsActual(@PathVariable String locationCode,
			@PathVariable String startDate, @PathVariable String endDate);

}

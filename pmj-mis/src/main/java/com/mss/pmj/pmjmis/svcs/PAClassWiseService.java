package com.mss.pmj.pmjmis.svcs;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mss.pmj.pmjmis.common.RestApiUrlConstants;
import com.mss.pmj.pmjmis.response.PAAllClassesData;
import com.mss.pmj.pmjmis.response.TargetVsActualResponse;

@RequestMapping(value = "/pmj/performanceAnalysis")
public interface PAClassWiseService {

	@SuppressWarnings("rawtypes")
	@GetMapping(RestApiUrlConstants.GET_PA_FOR_ALL_CLASSES)
	@ResponseBody
	TargetVsActualResponse<PAAllClassesData> forAllClasses(@PathVariable Long locationId,
			@PathVariable String startDate, @PathVariable String endDate);

	@SuppressWarnings("rawtypes")
	@GetMapping(RestApiUrlConstants.GET_PA_FOR_EACH_CLASSES)
	@ResponseBody
	TargetVsActualResponse<PAAllClassesData> forEachClass(@PathVariable Long locationId, @PathVariable String empClass,
			@PathVariable String startDate, @PathVariable String endDate);

}

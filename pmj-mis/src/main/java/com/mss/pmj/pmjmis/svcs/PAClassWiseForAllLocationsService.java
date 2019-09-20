package com.mss.pmj.pmjmis.svcs;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mss.pmj.pmjmis.common.RestApiUrlConstants;
import com.mss.pmj.pmjmis.response.PAAllClassesData;
import com.mss.pmj.pmjmis.response.TargetVsActualResponse;

@RequestMapping(value = "/pmj/performanceAnalysis")
public interface PAClassWiseForAllLocationsService {

	@SuppressWarnings("rawtypes")
	@GetMapping(RestApiUrlConstants.GET_PA_FOR_ALL_CLASSES_AND_LOCATIONS)
	@ResponseBody
	TargetVsActualResponse<PAAllClassesData> forAllClassesAndLocations(@PathVariable String startDate,
			@PathVariable String endDate);
}

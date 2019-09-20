package com.mss.pmj.pmjmis.svcs;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import com.mss.pmj.pmjmis.common.RestApiUrlConstants;
import com.mss.pmj.pmjmis.response.D2HConversionFactorStateData;
import com.mss.pmj.pmjmis.response.TargetVsActualResponse;

@RequestMapping(value = "/pmj/conversionfactor/D2HState")
public interface ConversionFactorD2HClusterService {

	@GetMapping(RestApiUrlConstants.GET_EACH_STATE_D2H_DATA)
	@ResponseBody
	TargetVsActualResponse<D2HConversionFactorStateData> getLocationD2HStateTargetVsActual(
			@PathVariable String stateName, @PathVariable String startDate, @PathVariable String endDate);

}

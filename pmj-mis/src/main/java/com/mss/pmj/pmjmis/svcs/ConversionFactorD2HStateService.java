package com.mss.pmj.pmjmis.svcs;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import com.mss.pmj.pmjmis.common.RestApiUrlConstants;
import com.mss.pmj.pmjmis.response.D2HConversionFactorData;
import com.mss.pmj.pmjmis.response.TargetVsActualResponse;

@RequestMapping(value = "/pmj/conversionfactor/forAllD2H")
public interface ConversionFactorD2HStateService {

	@GetMapping(RestApiUrlConstants.GET_STATE_D2H)
	@ResponseBody
	TargetVsActualResponse<D2HConversionFactorData> getLocationD2HTargetVsActual(@PathVariable String startDate,
			@PathVariable String endDate);

}

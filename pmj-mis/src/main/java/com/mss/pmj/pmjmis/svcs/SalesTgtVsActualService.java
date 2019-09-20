package com.mss.pmj.pmjmis.svcs;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mss.pmj.pmjmis.common.RestApiUrlConstants;
import com.mss.pmj.pmjmis.response.TargetVsActualResponse;
import com.mss.pmj.pmjmis.response.TgtVsActual;

@RequestMapping(value = "/pmj/targetVsActual")
public interface SalesTgtVsActualService {

	@GetMapping(RestApiUrlConstants.GET_TARGET_VS_ACTUAL_GROUPBY)
	@ResponseBody
	TargetVsActualResponse<TgtVsActual> getTargetVsActual(@PathVariable String startDate, @PathVariable String endDate);

}

package com.mss.pmj.pmjmis.svcs;

import org.json.simple.JSONObject;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mss.pmj.pmjmis.common.RestApiUrlConstants;
import com.mss.pmj.pmjmis.model.ServiceResponse;
import com.mss.pmj.pmjmis.response.SHWConversionFactorData;
import com.mss.pmj.pmjmis.response.TargetVsActualResponse;
@RequestMapping(value = "/pmj/conversionFactors")
public interface ConversionFactorsService {
	
	//Showroom
	
	@GetMapping(RestApiUrlConstants.GET_CONVERSION_BY_ALL_SHOWROOMS)
	@ResponseBody
	TargetVsActualResponse<SHWConversionFactorData> conversionFactorsByAllShowrooms(@PathVariable String startDate,@PathVariable String endDate);
	
	@GetMapping(RestApiUrlConstants.GET_CONVERSION_BY_SHOWROOM_LOCATION)
	@ResponseBody
	ServiceResponse<JSONObject> conversionFactorsByShowroomLocation(@PathVariable String startDate,@PathVariable String endDate,@PathVariable String locationCode);
	
}

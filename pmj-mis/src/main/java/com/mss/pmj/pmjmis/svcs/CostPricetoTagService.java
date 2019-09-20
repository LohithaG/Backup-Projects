package com.mss.pmj.pmjmis.svcs;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mss.pmj.pmjmis.common.RestApiUrlConstants;
import com.mss.pmj.pmjmis.response.CostPricetoTagData;
import com.mss.pmj.pmjmis.response.CostPricetoTagResponse;

@RequestMapping(value = "/pmj/marginscostotag")
public interface CostPricetoTagService {

	@GetMapping(RestApiUrlConstants.GET_COST_PRICE_TO_TAG)
	@ResponseBody

	CostPricetoTagResponse<CostPricetoTagData> getcostpricetoTag(@PathVariable String startDate,
			@PathVariable String endDate);
}

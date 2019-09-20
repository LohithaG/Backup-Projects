package com.mss.pmj.pmjmis.svcs;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mss.pmj.pmjmis.common.RestApiUrlConstants;
import com.mss.pmj.pmjmis.response.CostPricetoSalesData;
import com.mss.pmj.pmjmis.response.CostpricetoSalesResponse;
@RequestMapping(value = "/pmj/marginscost")
public interface CostPricetoSalesService {

	@GetMapping(RestApiUrlConstants.GET_COST_PRICE_TO_SALES)
	@ResponseBody

	CostpricetoSalesResponse<CostPricetoSalesData> getcostpricetoSales(@PathVariable String startDate,
			@PathVariable String endDate);
}

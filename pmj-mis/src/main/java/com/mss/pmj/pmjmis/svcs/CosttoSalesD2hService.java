package com.mss.pmj.pmjmis.svcs;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mss.pmj.pmjmis.common.RestApiUrlConstants;
import com.mss.pmj.pmjmis.response.CostPricetoSalesDataD2h;
import com.mss.pmj.pmjmis.response.CostpricetoSalesResponse;


@RequestMapping(value = "/pmj/marginscostosalesd2h")
public interface CosttoSalesD2hService {
	
	@GetMapping(RestApiUrlConstants.GET_COSTPRICE_TO_SALES_D2H)
	@ResponseBody

	CostpricetoSalesResponse<CostPricetoSalesDataD2h> getcostpricetoSalesd2h(@PathVariable String startDate,
			@PathVariable String endDate);

}

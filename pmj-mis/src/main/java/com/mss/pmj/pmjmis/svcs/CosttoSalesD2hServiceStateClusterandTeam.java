package com.mss.pmj.pmjmis.svcs;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mss.pmj.pmjmis.common.RestApiUrlConstants;
import com.mss.pmj.pmjmis.response.CostPricetoSalesDataD2hStateClusterandLocation;
import com.mss.pmj.pmjmis.response.CostpricetoSalesResponse;

@RequestMapping(value = "/pmj/marginscostosalesd2h")
public interface CosttoSalesD2hServiceStateClusterandTeam {

	@GetMapping(RestApiUrlConstants.GET_COSTPRICE_TO_SALES_STATE_CLUSTER_LOCATION)
	@ResponseBody

	CostpricetoSalesResponse<CostPricetoSalesDataD2hStateClusterandLocation> getCostpricetoSalesd2hclusters(
			@PathVariable String state, @PathVariable String cluster, @PathVariable String locationcode,
			@PathVariable String startDate, @PathVariable String endDate);

}

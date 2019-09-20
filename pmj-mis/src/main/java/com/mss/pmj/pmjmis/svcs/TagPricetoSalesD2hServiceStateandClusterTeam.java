package com.mss.pmj.pmjmis.svcs;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mss.pmj.pmjmis.common.RestApiUrlConstants;
import com.mss.pmj.pmjmis.response.TagpricetoSalesDataD2HStateandClusterandLocation;
import com.mss.pmj.pmjmis.response.TagpricetoSalesResponse;

@RequestMapping(value = "/pmj/margintosalesd2h")
public interface TagPricetoSalesD2hServiceStateandClusterTeam {
	
	@GetMapping(RestApiUrlConstants.GET_TAGPRICE_TO_SALES_STATE_CLUSTER_LOCATION)
	@ResponseBody

	TagpricetoSalesResponse<TagpricetoSalesDataD2HStateandClusterandLocation> getTagpricetoSales(@PathVariable String state,
			@PathVariable String cluster,@PathVariable String locationcode, @PathVariable String startDate, @PathVariable String endDate);

}

package com.mss.pmj.pmjmis.svcs;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mss.pmj.pmjmis.common.RestApiUrlConstants;
import com.mss.pmj.pmjmis.response.TagpricetoSalesData;
import com.mss.pmj.pmjmis.response.TagpricetoSalesResponse;

@RequestMapping(value = "/pmj/margintosalesshw")
public interface TagPricetoSalesService {

	@GetMapping(RestApiUrlConstants.GET_TAGPRICE_TO_SALES)
	@ResponseBody

	TagpricetoSalesResponse<TagpricetoSalesData> getTagpricetoSales(@PathVariable String startDate,
			@PathVariable String endDate);
}

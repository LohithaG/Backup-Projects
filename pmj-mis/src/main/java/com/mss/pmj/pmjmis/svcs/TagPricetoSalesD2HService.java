package com.mss.pmj.pmjmis.svcs;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mss.pmj.pmjmis.common.RestApiUrlConstants;
import com.mss.pmj.pmjmis.response.TagpricetoSalesDataD2H;
import com.mss.pmj.pmjmis.response.TagpricetoSalesResponse;

@RequestMapping(value = "/pmj/margintosalesd2h")
public interface TagPricetoSalesD2HService {

	@GetMapping(RestApiUrlConstants.GET_TAGPRICE_TO_SALES_D2H)
	@ResponseBody

	TagpricetoSalesResponse<TagpricetoSalesDataD2H> getTagpricetoSales(@PathVariable String startDate,
			@PathVariable String endDate);
}
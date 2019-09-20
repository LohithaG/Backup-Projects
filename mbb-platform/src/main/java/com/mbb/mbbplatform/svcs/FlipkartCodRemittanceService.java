package com.mbb.mbbplatform.svcs;

import java.util.Collection;

import javax.validation.constraints.NotNull;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mbb.mbbplatform.common.RestApiUrlConstants;
import com.mbb.mbbplatform.domain.FlipkartCodRemittance;
import com.mbb.mbbplatform.model.ServiceResponse;
@RequestMapping(value = "/mbb/flipkartcod")

public interface FlipkartCodRemittanceService {
	@PostMapping(RestApiUrlConstants.GET_FLIPKART_COD)
	@ResponseBody
	ServiceResponse<Collection<FlipkartCodRemittance>> getFlipkartCodRemittance();
	@GetMapping(RestApiUrlConstants.GET_FLIPKART_COD)
	@ResponseBody
	ServiceResponse<Collection<FlipkartCodRemittance>> getAllFlipkartCodRemittance();
	@GetMapping(RestApiUrlConstants.BETWEEN_DATES)
	@ResponseBody
	ServiceResponse<Collection<FlipkartCodRemittance>> findFlipkartReportInBetweenDates(@NotNull @RequestParam String startDate,
			@NotNull @RequestParam String endDate,@NotNull @RequestParam String returnType);
	
}

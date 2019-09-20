package com.mbb.mbbplatform.svcs;

import java.util.Collection;
import java.util.List;

import javax.validation.constraints.NotNull;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mbb.mbbplatform.common.RestApiUrlConstants;
import com.mbb.mbbplatform.domain.AmazonCodRemittance;
import com.mbb.mbbplatform.model.ServiceResponse;
@RequestMapping(value = "/mbb/amazon")

public interface AmazonCodRemittanceService {
	@PostMapping(RestApiUrlConstants.GET_AMAZON_COD)
	@ResponseBody
	ServiceResponse<List<AmazonCodRemittance>> getAmazonCodRemittance();
	@GetMapping(RestApiUrlConstants.GET_AMAZON_COD)
	@ResponseBody
	ServiceResponse<Collection<AmazonCodRemittance>> getAllAmazonCodRemittance();

	@GetMapping(RestApiUrlConstants.FIND_AMAZON_SHIPMENTS_REPORT_IN_BETWEEN_DATES)
	@ResponseBody
	ServiceResponse<List<AmazonCodRemittance>> findAmazonCodInBetweenDates(@NotNull String startDate,
			@NotNull String endDate,@NotNull String type);
}

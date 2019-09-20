package com.mbb.mbbplatform.svcs;

import java.util.List;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mbb.mbbplatform.domain.AmazonCodRemittanceDump;
import com.mbb.mbbplatform.common.RestApiUrlConstants;
import com.mbb.mbbplatform.model.ServiceResponse;

@RequestMapping(value = "/mbb/amazoncodremittance")

public interface AmazonCodRemittanceDumpService{
	
	@PostMapping(RestApiUrlConstants.ADD_AMAZON_COD_REMITTANCE)
	@ResponseBody
	ServiceResponse<List<AmazonCodRemittanceDump>> addAmazonCodRemittance();

}

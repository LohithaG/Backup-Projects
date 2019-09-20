package com.mbb.mbbplatform.svcs;

import java.util.Collection;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import com.mbb.mbbplatform.common.RestApiUrlConstants;

import com.mbb.mbbplatform.domain.ZepoCodRemittance;

import com.mbb.mbbplatform.model.ServiceResponse;

@RequestMapping(value = "/mbb/zepoCodRemittance")
public interface ZepoCodRemittanceService {

	@PostMapping(RestApiUrlConstants.ADD_ZEPO_COD_REMITTANCE)
	@ResponseBody
	ServiceResponse<List<ZepoCodRemittance>> addZepoCodRemittance();
	
	
	@GetMapping(RestApiUrlConstants.GET_ALL_ZEPO_COD_REMITTANCE)
	@ResponseBody
	ServiceResponse<Collection<ZepoCodRemittance>> getAllZepoCodRemittance();
}

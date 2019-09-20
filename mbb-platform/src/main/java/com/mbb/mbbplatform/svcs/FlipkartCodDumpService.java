package com.mbb.mbbplatform.svcs;

import java.util.List;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mbb.mbbplatform.domain.FlipkartCodDump;
import com.mbb.mbbplatform.common.RestApiUrlConstants;
import com.mbb.mbbplatform.model.ServiceResponse;
@RequestMapping(value = "/mbb/flipkartcod")

public interface FlipkartCodDumpService {
	@PostMapping(RestApiUrlConstants.ADD_FLIPKART_COD_REMITTANCE)
	@ResponseBody
	ServiceResponse<List<FlipkartCodDump>> addFlipkartCodRemittance();
}

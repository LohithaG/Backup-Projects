package com.mbb.mbbplatform.svcs;

import java.util.List;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mbb.mbbplatform.domain.ClearTaxSaleReport;
import com.mbb.mbbplatform.model.ServiceResponse;

@RequestMapping("/mbb/clearTaxSaleReport")
public interface ClearTaxSaleReportService {

	@PostMapping("/")
	@ResponseBody
	ServiceResponse<List<ClearTaxSaleReport>> addClearTaxSaleReport();
	
	
	
}

package com.mbb.mbbplatform.svcs;

import java.util.List;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mbb.mbbplatform.domain.PricesReport;
import com.mbb.mbbplatform.model.ServiceResponse;

@RequestMapping("/mbb/pricesReport")
public interface PricesReportService {
	@PostMapping("/")
	@ResponseBody
	ServiceResponse<List<PricesReport>> addCategory();
}

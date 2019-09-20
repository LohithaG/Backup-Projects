package com.mbb.mbbplatform.svcs;

import java.util.List;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mbb.mbbplatform.domain.ReorderReport;
import com.mbb.mbbplatform.model.ServiceResponse;

@RequestMapping("/mbb/reOrderReports")
public interface ReOrderReportService {
	@PostMapping("/")
	@ResponseBody
	ServiceResponse<List<ReorderReport>> addReOrderReport();
}

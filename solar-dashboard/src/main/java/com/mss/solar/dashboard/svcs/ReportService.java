package com.mss.solar.dashboard.svcs;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mss.solar.dashboard.common.RestApiUrlConstants;
import com.mss.solar.dashboard.domain.FoodCourt;
import com.mss.solar.dashboard.model.ServiceResponse;

@RequestMapping(value = "/api/reports")
public interface ReportService {

	@PostMapping(RestApiUrlConstants.GENERATE_REPORT)
	@ResponseBody
	public byte[] analyticsReport(@PathVariable("templateName") String templateName,
			@RequestBody Map<String, String> dataMap, HttpServletRequest request, HttpServletResponse response);

	@PostMapping(RestApiUrlConstants.EXPENSES_REPORT)
	@ResponseBody
	public String expensesReport(@PathVariable("templateName") String templateName,
			@RequestBody Map<String, String> dataMap);

	@PostMapping(RestApiUrlConstants.TRIPCONSOLIDATED_REPORT)
	@ResponseBody
	public String tripConsolidatedReport(@PathVariable("templateName") String templateName,
			@RequestBody Map<String, String> dataMap);

	@PostMapping(RestApiUrlConstants.DELIVERY_REPORT)
	@ResponseBody
	public String deliveryReport(@PathVariable("templateName") String templateName,
			@RequestBody Map<String, String> dataMap);

}

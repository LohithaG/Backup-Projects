package com.mbb.mbbplatform.svcs;

import java.io.IOException;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import com.mbb.mbbplatform.common.RestApiUrlConstants;

@RequestMapping("mbb/reports")
public interface ReportsService {

	@GetMapping(RestApiUrlConstants.GET_REPORTSS)
	@ResponseBody
	String getReports() throws IOException;
	
}

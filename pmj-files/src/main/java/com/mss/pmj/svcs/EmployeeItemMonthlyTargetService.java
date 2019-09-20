package com.mss.pmj.svcs;

import java.io.IOException;
import java.util.List;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mss.pmj.common.RestApiUrlConstants;
import com.mss.pmj.domain.EmployeeItemMonthlyTarget;
import com.mss.pmj.model.ServiceResponse;
import com.mss.pmj.svcs.impl.UploadErrors;

@RequestMapping(value = "/pmj/employeemonthlyTarget")
public interface EmployeeItemMonthlyTargetService {

	@PostMapping(RestApiUrlConstants.ADD_EMPLOYEE_MONTHLY_DATA)
	@ResponseBody
	ServiceResponse<UploadErrors> addEmployeeMonthlyData(@RequestBody String sheetName)
			throws IOException;

}

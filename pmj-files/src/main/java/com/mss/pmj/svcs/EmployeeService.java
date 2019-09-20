package com.mss.pmj.svcs;

import java.io.IOException;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mss.pmj.common.RestApiUrlConstants;
import com.mss.pmj.domain.Employee;
import com.mss.pmj.model.ServiceResponse;
import com.mss.pmj.svcs.impl.UploadErrors;

@RequestMapping(value = "/pmj/employee")
public interface EmployeeService {

	@PostMapping(RestApiUrlConstants.ADD_EMPLOYEE_DATA)
	@ResponseBody
	ServiceResponse<UploadErrors> addEmployee(@PathVariable String filePath) throws IOException;

	

}

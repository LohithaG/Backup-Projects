package com.mss.pmj.pmjmis.svcs;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mss.pmj.pmjmis.common.RestApiUrlConstants;
import com.mss.pmj.pmjmis.domain.Employee;
import com.mss.pmj.pmjmis.model.ServiceResponse;

@RequestMapping(value = "/pmj/employee")
public interface EmployeeService {
	
	@PostMapping(RestApiUrlConstants.ADD_EMPLOYEE_DATA)
	@ResponseBody
	ServiceResponse<List<Employee>> addEmployee(@PathVariable String path);
	
	@GetMapping(RestApiUrlConstants.GET_EMPLOYEE_BY_LOCATION)
	@ResponseBody
	ServiceResponse<List<Employee>> getEmployeeByLocation(@PathVariable Long locationId);
	
	@GetMapping(RestApiUrlConstants.GET_EMPLOYEE_BY_NAME)
	@ResponseBody
	ServiceResponse<List<Employee>> getEmployeeByName(@PathVariable String employeeName);
	
	
	
	
	

}

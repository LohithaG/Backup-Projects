package com.mss.pmj.svcs;

import java.io.IOException;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mss.pmj.common.RestApiUrlConstants;
import com.mss.pmj.model.ServiceResponse;
import com.mss.pmj.svcs.impl.UploadErrors;

@RequestMapping(value = "/pmj/d2hEmployeeActual")
public interface D2HEmpActualsService {

	@PostMapping(RestApiUrlConstants.ADD_EMPLOYEE_DAILY_DATA_D2H)
	@ResponseBody
	ServiceResponse<UploadErrors> addD2HEmpActuals(String filePath) throws IOException;
	
	public void processFileFromFolder();

}

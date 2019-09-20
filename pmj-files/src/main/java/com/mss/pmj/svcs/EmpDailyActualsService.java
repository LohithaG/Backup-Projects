package com.mss.pmj.svcs;

import java.io.IOException;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mss.pmj.common.RestApiUrlConstants;
import com.mss.pmj.model.ServiceResponse;
import com.mss.pmj.svcs.impl.UploadErrors;

@RequestMapping(value = "/pmj/empDailyActuals")
public interface EmpDailyActualsService {

	@PostMapping(RestApiUrlConstants.ADD_EMPLOYEE_DAILY_DATA_SHW)
	@ResponseBody
	ServiceResponse<UploadErrors> addEmployeeShwDailyData(String filePath) throws IOException;

	public void processFileFromFolder();

}

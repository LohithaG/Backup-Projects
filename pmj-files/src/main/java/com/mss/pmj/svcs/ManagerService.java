package com.mss.pmj.svcs;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mss.pmj.common.RestApiUrlConstants;
import com.mss.pmj.model.ServiceResponse;
import com.mss.pmj.svcs.impl.UploadErrors;

@RequestMapping(value = "/pmj/manager")
public interface ManagerService {

	@PostMapping(RestApiUrlConstants.ADD_MANAGER_DATA)
	@ResponseBody
	ServiceResponse<UploadErrors> addManager(@PathVariable String filePath);

}

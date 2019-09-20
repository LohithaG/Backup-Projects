package com.mss.pmj.svcs;

import java.io.IOException;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mss.pmj.common.RestApiUrlConstants;
import com.mss.pmj.model.ServiceResponse;
import com.mss.pmj.svcs.impl.UploadErrors;

@RequestMapping(value = "/pmj/location")
public interface LocationService {

	@PostMapping(RestApiUrlConstants.ADD_LOCATION_DATA)
	@ResponseBody
	ServiceResponse<UploadErrors> addLocation(@PathVariable String filePath) throws IOException;

}

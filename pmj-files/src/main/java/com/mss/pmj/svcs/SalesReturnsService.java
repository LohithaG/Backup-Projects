package com.mss.pmj.svcs;

import java.io.IOException;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mss.pmj.common.RestApiUrlConstants;
import com.mss.pmj.model.ServiceResponse;
import com.mss.pmj.svcs.impl.UploadErrors;

@RequestMapping(value = "/pmj/salesReturn")
public interface SalesReturnsService  {

	@PostMapping(RestApiUrlConstants.ADD_SALES_RETURN_DATA)
	@ResponseBody
	ServiceResponse<UploadErrors> addSalesReturn(String filePath)throws IOException;
	
	
	public void processFileFromFolder();

}

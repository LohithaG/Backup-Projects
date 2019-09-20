package com.mss.pmj.svcs;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import com.mss.pmj.common.RestApiUrlConstants;
import com.mss.pmj.model.ServiceResponse;
import com.mss.pmj.svcs.impl.UploadErrors;

@RequestMapping(value = "/pmj/upload")
public interface FileUploadService {

	@PostMapping(RestApiUrlConstants.FILE_UPLOAD)
	@ResponseBody
	public ServiceResponse<UploadErrors> fileUpload(@RequestParam("file") MultipartFile files);

	@GetMapping(RestApiUrlConstants.DOWNLOAD_SAMPLE)
	@ResponseBody
	public ServiceResponse<String> downloadSample(@PathVariable String fileName, HttpServletRequest request,
			HttpServletResponse response);

}

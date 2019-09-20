package com.mbb.mbbplatform.svcs;

import java.io.IOException;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@RequestMapping("mbb/shiprocketDownload")
public interface DownloadShiprocketReportService {

	@GetMapping("/")
	@ResponseBody
	String getdownloadReport() throws IOException;
	
	@GetMapping("/getshiprocketReport")
	@ResponseBody
	String getshiprocketReport() throws IOException;	
	
}

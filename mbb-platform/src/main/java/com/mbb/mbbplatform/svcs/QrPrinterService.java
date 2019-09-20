package com.mbb.mbbplatform.svcs;

import java.util.List;

import javax.validation.Valid;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mbb.mbbplatform.model.ServiceResponse;

@RequestMapping("/mbb/print")
public interface QrPrinterService {
	
	@PostMapping("/barcode")
	@ResponseBody
	ServiceResponse<String> printQrcodes(@Valid @RequestBody List<String> barcodes) throws Exception;
}

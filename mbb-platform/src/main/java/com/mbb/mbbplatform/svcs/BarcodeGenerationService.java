package com.mbb.mbbplatform.svcs;

import java.util.List;

import org.json.simple.JSONObject;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mbb.mbbplatform.common.RestApiUrlConstants;
import com.mbb.mbbplatform.model.ServiceResponse;

@RequestMapping("/mbb/barcodes")
public interface BarcodeGenerationService {

	@GetMapping(RestApiUrlConstants.GENERATE_QRCODE_SEQUENCE)
	@ResponseBody
	ServiceResponse<List<String>> qrcodeSequence(@PathVariable String skuCode, @PathVariable Long count);

	@GetMapping(RestApiUrlConstants.REPRINT_QRCODES)
	@ResponseBody
	ServiceResponse<List<JSONObject>> retreiveQrcodes( @PathVariable String poNumber);

	@GetMapping(RestApiUrlConstants.GENERATE_QRCODE)
	@ResponseBody
	ServiceResponse<String> qrCodeGeneration(@PathVariable String barcode);

	@PostMapping(RestApiUrlConstants.QRCODE_GENERATION_FOR_LIST)
	@ResponseBody
	ServiceResponse<List<String>> qrCodeGenerationForList(@RequestBody List<JSONObject> barcodes);
	
	@GetMapping(RestApiUrlConstants.GENERATE_BASED_ON_PONUMBER)
	@ResponseBody
	ServiceResponse<List<JSONObject>> qrcodeSequenceBasedOnPoNumber(@PathVariable String poNumber);
	
	

	

	

	
}

package com.mbb.mbbplatform.svcs;

import java.io.IOException;
import java.util.List;

import org.json.simple.JSONObject;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import com.mbb.mbbplatform.common.RestApiUrlConstants;
import com.mbb.mbbplatform.model.ServiceResponse;

@RequestMapping("/mbb/transferDocument")
public interface TransferDocumentService {

	@PostMapping(RestApiUrlConstants.ADD_TRANSFER_DOCUMENT)
	@ResponseBody
	public ServiceResponse<String> addTransferDocument(@RequestParam("files") MultipartFile[] files,
			@RequestParam("id") Long id) throws IOException;

	@GetMapping(RestApiUrlConstants.GET_TRANSFER_DOCUMENT)
	@ResponseBody
	public ServiceResponse<List<JSONObject>> getTransferDocumentByPackageId(@PathVariable Long id) throws IOException;

	@ResponseBody
	@GetMapping(RestApiUrlConstants.MAIL_TRANSFERDOCUMENTS)
	   public ServiceResponse<String> sendAttachmentEmail(@PathVariable Long id);

	@GetMapping(RestApiUrlConstants.GENERATEPDF_FOR_TRANSFERINVENTORY_DETAILS)
	@ResponseBody
	public ServiceResponse<String> pdfDocGenerator(@PathVariable Long id) throws IOException;

	@GetMapping(RestApiUrlConstants.MAIL_TRANSFER_INVENTORY)
	@ResponseBody
	ServiceResponse<String> sendingMailForTransferInventory(@PathVariable Long userId, @PathVariable Long id);

}

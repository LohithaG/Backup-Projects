package com.mbb.mbbplatform.svcs;

import java.util.List;

import javax.validation.Valid;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mbb.mbbplatform.common.RestApiUrlConstants;
import com.mbb.mbbplatform.domain.QuotationDetails;
import com.mbb.mbbplatform.model.ServiceResponse;

@RequestMapping("/mbb/quotation")
public interface QuotationDetailsService {
	@PostMapping(RestApiUrlConstants.ADD_QUOTATION_DETAILS)
	@ResponseBody
	ServiceResponse<QuotationDetails> addQuotaionDetails(@Valid @RequestBody  QuotationDetails quotationDetails,@PathVariable Long serviceId);
	
	@GetMapping(RestApiUrlConstants.GET_ALL_QUOTATION_DETAILS)
	@ResponseBody
	ServiceResponse<List<QuotationDetails>> getAll();

	@PutMapping(RestApiUrlConstants.UPDATE_QUOTATION_DETAILS)
	@ResponseBody
	ServiceResponse<QuotationDetails> updateQuotationDetails(@Valid @RequestBody QuotationDetails quotationDetails,@PathVariable @Valid Long id);
	
	@GetMapping(RestApiUrlConstants.GENERATING_PDF_FOR_QUOTATION_DETAILS)
	@ResponseBody
	ServiceResponse<String> pdfGenerationForQuotationDetails(@PathVariable Long id);
	
	@GetMapping(RestApiUrlConstants.SENDING_MAIL_FOR_QUOTATION_DETAILS)
	@ResponseBody
	ServiceResponse<String> sendingMailRegardingQuotationDetails(@PathVariable Long id);
	
	@PostMapping(RestApiUrlConstants.ADD_PAYMENT_DETAILS)
	@ResponseBody
	ServiceResponse<QuotationDetails> addPaymentDetails(@Valid @RequestBody String paymentDetails,@PathVariable Long id);
	
	@PostMapping(RestApiUrlConstants.ADD_SERVICING_INVOICE_DETAILS)
	@ResponseBody
	ServiceResponse<QuotationDetails> addInvoiceDetails(@RequestBody String invoice,@PathVariable Long id);
	
	@PutMapping(RestApiUrlConstants.UPDATE_PAYMENT_DETAILS)
	@ResponseBody
	ServiceResponse<QuotationDetails> updatePaymentDetails(@Valid @RequestBody String paymentDetails,@PathVariable Long id);
	
	@PutMapping(RestApiUrlConstants.UPDATE_SERVICING_INVOICE_DETAILS)
	@ResponseBody
	ServiceResponse<QuotationDetails> updateInvoiceDetails(@RequestBody String invoice,@PathVariable Long id);
	


}

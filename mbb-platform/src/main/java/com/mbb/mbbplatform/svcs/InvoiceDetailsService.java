package com.mbb.mbbplatform.svcs;

import java.util.List;

import javax.validation.constraints.NotNull;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mbb.mbbplatform.common.RestApiUrlConstants;
import com.mbb.mbbplatform.domain.InvoiceDetails;
import com.mbb.mbbplatform.domain.SaleOrders;
import com.mbb.mbbplatform.model.ServiceResponse;

@RequestMapping("/mbb/invoiceDetails")
public interface InvoiceDetailsService {

	@PostMapping(RestApiUrlConstants.ADD_INVOICE_DETAILS)
	@ResponseBody
	ServiceResponse<List<InvoiceDetails>> addInvoiceDetails(List<SaleOrders> saleOrdersList);

	@GetMapping(RestApiUrlConstants.GET_ALL_INVOICE_DETAILS)
	@ResponseBody
	public ServiceResponse<List<org.json.simple.JSONObject>> getAllInVoiceDetails(@NotNull @PathVariable String startDate,
			@NotNull  @PathVariable String endDate, @NotNull @PathVariable String paymentMode, @NotNull @PathVariable String status,
			@NotNull @PathVariable String channel);

	@PutMapping(RestApiUrlConstants.UPDATE_INVOICE_DETAILS)
	@ResponseBody
	public ServiceResponse<List<InvoiceDetails>> updateOrderStatus();

	@GetMapping(RestApiUrlConstants.GET_DETAILS_BY_INVOICEID)
	@ResponseBody
	ServiceResponse<String> getDetailsByInvoiceNumber(@NotNull @PathVariable String invoiceId);

}

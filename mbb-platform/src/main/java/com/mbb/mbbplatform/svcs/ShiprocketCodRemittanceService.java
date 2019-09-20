package com.mbb.mbbplatform.svcs;

import java.util.Collection;
import java.util.List;
import javax.validation.constraints.NotNull;
import org.json.JSONException;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import com.mbb.mbbplatform.domain.ShiprocketCodRemittance;
import com.mbb.mbbplatform.model.ServiceResponse;
import com.mbb.mbbplatform.common.RestApiUrlConstants;

@RequestMapping(value = "/api/shiprocket")
public interface ShiprocketCodRemittanceService {
	
	@GetMapping(RestApiUrlConstants.GET_EXTERNAL_ORDERS)
	@ResponseBody
	public String getExternalOrders() throws JSONException;

	@GetMapping(RestApiUrlConstants.GET_COD_REMITTANCE)
	@ResponseBody

	public String getCodRemittance() throws JSONException;

	@GetMapping(RestApiUrlConstants.GET_COD_REMITTANCE_DETAILS)
	@ResponseBody
	public List<String> getCodRemittanceDetails() throws JSONException;

	@PostMapping(RestApiUrlConstants.GET_TOKEN)
	@ResponseBody
	public String getToken() throws JSONException;

	@GetMapping(RestApiUrlConstants.GET_REMITTANCE_REPORT)
	@ResponseBody
	public String getRemittanceReport() throws JSONException;
	
	
	@GetMapping(RestApiUrlConstants.GET_ORDER_ID)
	@ResponseBody

	public List<String> getOrderId(@NotNull @PathVariable Long crfid) throws JSONException;
	
	
	@GetMapping(RestApiUrlConstants.GET_ALL_COD)
	@ResponseBody
	ServiceResponse<Collection<ShiprocketCodRemittance>> getAllCod();
	
	
	@GetMapping(RestApiUrlConstants.GET_COD)
	@ResponseBody
	public String getCod() throws JSONException ;
	

	

	
}

package com.mbb.mbbplatform.svcs;

import java.util.Collection;
import java.util.List;

import javax.validation.constraints.NotNull;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mbb.mbbplatform.domain.ZepoSRCodRemittance;
import com.mbb.mbbplatform.model.ServiceResponse;

@RequestMapping(value = "/mbb/zepoSRCodRemittance")
public interface ZepoSRCodRemittanceService {
	@GetMapping("/getAllZepoSRCodRemittance")
	@ResponseBody
	ServiceResponse<Collection<ZepoSRCodRemittance>> getAllZepoSRCodRemittance();
	
	
	@GetMapping("/getAllZepoCodRemittance")
	@ResponseBody
	ServiceResponse<Collection<ZepoSRCodRemittance>> getAllZepoCod();
	
	@GetMapping("/getAllRemittance")
	@ResponseBody
	ServiceResponse<Collection<ZepoSRCodRemittance>> getAllCodRemittance();
	
	@GetMapping("/getAllCodRemittance")
	@ResponseBody
	ServiceResponse<List<ZepoSRCodRemittance>> findZepoSRCodRemittanceDetails(@NotNull String startDate,
			@NotNull String endDate, @NotNull @RequestParam String shippingAggregator,
			@NotNull @RequestParam String status);
	
}

package com.mbb.mbbplatform.svcs;


import java.util.List;


import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;


import com.mbb.mbbplatform.domain.BusyInvoices;
import com.mbb.mbbplatform.model.ServiceResponse;

@RequestMapping(value = "/mbb/busyInvoices")
public interface BusyInvoicesService {
	
	@PostMapping("/")
	@ResponseBody
	ServiceResponse<List<BusyInvoices>> addBackInvoice();
	
	
}

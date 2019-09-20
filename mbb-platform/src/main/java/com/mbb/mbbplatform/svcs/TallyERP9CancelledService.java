package com.mbb.mbbplatform.svcs;

import java.util.List;


import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mbb.mbbplatform.domain.TallyERP9Cancelled;
import com.mbb.mbbplatform.model.ServiceResponse;

@RequestMapping(value = "/mbb/tallyERP9Cancelled")
public interface TallyERP9CancelledService {

	
	@PostMapping("/")
	@ResponseBody
	ServiceResponse<List<TallyERP9Cancelled>> addTallyERP9Cancelled();
}

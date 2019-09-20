package com.mbb.mbbplatform.svcs;

import java.util.List;


import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mbb.mbbplatform.domain.TallyERP9;
import com.mbb.mbbplatform.model.ServiceResponse;

@RequestMapping(value = "/mbb/tallyERP9")
public interface TallyERP9Service {

	
	@PostMapping("/")
	@ResponseBody
	ServiceResponse<List<TallyERP9>> addTallyERP9();
}

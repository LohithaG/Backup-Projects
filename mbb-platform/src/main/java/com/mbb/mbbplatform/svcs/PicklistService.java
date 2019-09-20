package com.mbb.mbbplatform.svcs;

import java.util.List;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mbb.mbbplatform.domain.PickList;
import com.mbb.mbbplatform.model.ServiceResponse;

@RequestMapping("/mbb/picklist")
public interface PicklistService {
	@PostMapping("/")
	@ResponseBody
	ServiceResponse<List<PickList>> addPickList();
}

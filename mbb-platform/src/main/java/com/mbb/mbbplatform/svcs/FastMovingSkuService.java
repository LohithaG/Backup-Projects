package com.mbb.mbbplatform.svcs;

import java.util.List;

import org.json.simple.JSONObject;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mbb.mbbplatform.common.RestApiUrlConstants;
import com.mbb.mbbplatform.domain.FastMovingSku;
import com.mbb.mbbplatform.model.ServiceResponse;

@RequestMapping("/mbb/fastMovingSku")
public interface FastMovingSkuService {
	@PostMapping("/")
	@ResponseBody
	ServiceResponse<List<FastMovingSku>> addFastMovingSku();

	@GetMapping(RestApiUrlConstants.GET_FASTMOVING_SKU)
	@ResponseBody
	ServiceResponse<List<JSONObject>> getFastMovingSku(@PathVariable String startDate, @PathVariable String endDate,
			@PathVariable Long facility,@PathVariable Long channelId);

}

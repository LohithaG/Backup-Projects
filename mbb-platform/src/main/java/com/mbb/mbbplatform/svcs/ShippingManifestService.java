package com.mbb.mbbplatform.svcs;

import java.util.List;


import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mbb.mbbplatform.domain.ShippingManifest;
import com.mbb.mbbplatform.model.ServiceResponse;



@RequestMapping(value = "/mbb/shippingmanifest")
public interface ShippingManifestService {
	@PostMapping("/")
	@ResponseBody
	ServiceResponse<List<ShippingManifest>> addShippingManifest();

}

package com.mbb.mbbplatform.svcs;

import java.util.List;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mbb.mbbplatform.domain.ReversePickup;
import com.mbb.mbbplatform.model.ServiceResponse;

@RequestMapping("/mbb/reversePickup")
public interface ReversePickupService {
	@PostMapping("/")
	@ResponseBody
	ServiceResponse<List<ReversePickup>> addReversePickUp();
}

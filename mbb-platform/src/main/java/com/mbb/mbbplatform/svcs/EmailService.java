package com.mbb.mbbplatform.svcs;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mbb.mbbplatform.model.ServiceResponse;

@RequestMapping(value = "emailsvc")
public interface EmailService {

	@GetMapping("/")
	@ResponseBody
	ServiceResponse<String> notifyUserByEmail(@PathVariable("email") String email,
			@PathVariable("payload") String payload, @PathVariable String subject);
}

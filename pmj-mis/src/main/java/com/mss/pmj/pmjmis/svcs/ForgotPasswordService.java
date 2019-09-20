package com.mss.pmj.pmjmis.svcs;

import javax.validation.Valid;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mss.pmj.pmjmis.common.RestApiUrlConstants;

@RequestMapping(value = "/forgotpassword")
public interface ForgotPasswordService {

	@GetMapping(RestApiUrlConstants.FORGOT_ADMIN_CREDENTIALS)
	@ResponseBody
	String forgotPassword(@Valid @PathVariable String password);

}

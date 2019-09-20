package com.mss.pmj.pmjmis.svcs.impl;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.RestController;

import com.mss.pmj.pmjmis.domain.User;
import com.mss.pmj.pmjmis.repos.UserRepository;
import com.mss.pmj.pmjmis.svcs.ForgotPasswordService;
@RestController
@Validated
public class ForgotPassowrdServiceImpl implements ForgotPasswordService {

	private static Logger log = LoggerFactory.getLogger(ForgotPassowrdServiceImpl.class);

	@Autowired
	private UserRepository userRepo;

	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;

	@Override
	public String forgotPassword(String password) {
		log.info("Changing Admin password");
		String response = null;
		try {
			User user = userRepo.findByUserName("Admin");
			if (user != null) {
				user.setPassword(bCryptPasswordEncoder.encode(password));
				userRepo.save(user);
				response = "admin password updated successfully";
			}

		} catch (Exception e) {
			response = "Failed to update admin password";

		}

		return response;
	}

}

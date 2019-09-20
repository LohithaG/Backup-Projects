package com.mbb.mbbplatform.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mbb.mbbplatform.domain.Otp;
import com.mbb.mbbplatform.domain.User;

public interface OtpRepository extends JpaRepository<Otp, Long> {

	Otp findOneByUser(User user);
	
	Otp findOneByUserId(Integer id);
	
	Otp findOneByUserAndCode(User user, Integer otpStr);
	
	Otp findUserByCode(Integer otpStr);
}

package com.mbb.mbbplatform.svcs.impl;

import javax.mail.internet.MimeMessage;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.scheduling.annotation.Async;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.mbb.mbbplatform.common.EnumTypeForErrorCodes;
import com.mbb.mbbplatform.model.ServiceResponse;
import com.mbb.mbbplatform.svcs.EmailService;

@RestController
public class EmailServiceImpl implements EmailService {

	private static Logger log = LoggerFactory.getLogger(EmailServiceImpl.class);

	@Autowired
	private JavaMailSender mailSender;

	@Value("${email}")
	private String replyTo;

	/**
	 * notifyUserByEmail service implementation
	 * 
	 * @param email
	 * @param payload
	 * @return ServiceResponse<String>
	 */
	@Async
	@Override
	public ServiceResponse<String> notifyUserByEmail(@PathVariable("email") String email,
			@PathVariable("payload") String payload, @PathVariable String subject) {
		log.info("Notifying User By Email");

		ServiceResponse<String> response = new ServiceResponse<>();
		try {

			if (!payload.contains("base64") ) {
				MimeMessage mail = mailSender.createMimeMessage();

				MimeMessageHelper helper = new MimeMessageHelper(mail, true);
				helper.setSubject(subject);
				helper.setTo(email);
				helper.setReplyTo((replyTo));
				

				helper.setText(payload, true);

				mailSender.send(mail);
				response.setData("Mail Sent Successfully");
			}
		} catch (Exception e) {

			response.setError(EnumTypeForErrorCodes.SCUS036.name(), EnumTypeForErrorCodes.SCUS036.errorMsg());

		}
		return response;
	}
}

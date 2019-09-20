package com.mbb.mbbplatform.svcs.impl;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.mbb.mbbplatform.common.EnumTypeForErrorCodes;
import com.mbb.mbbplatform.domain.Transportation;
import com.mbb.mbbplatform.model.ServiceResponse;
import com.mbb.mbbplatform.model.Utils;
import com.mbb.mbbplatform.repos.TransportationRepository;
import com.mbb.mbbplatform.svcs.TransportationService;

@RestController
public class TransportationServiceImpl implements TransportationService {
	private static Logger log = LoggerFactory.getLogger(UserServiceImpl.class);

	@Autowired
	TransportationRepository transportationRepository;
	@Autowired
	private Utils utils;

	@Override
	public ServiceResponse<List<Transportation>> getAllTransport() {
		ServiceResponse<List<Transportation>> response = new ServiceResponse<>();

		try {
			List<Transportation> listOfTransportation = transportationRepository.findAll();
			response.setData(listOfTransportation);
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS1057.name(), EnumTypeForErrorCodes.SCUS1057.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}
		return response;
	}

}
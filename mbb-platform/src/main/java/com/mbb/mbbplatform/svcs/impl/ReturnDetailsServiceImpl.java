package com.mbb.mbbplatform.svcs.impl;

import java.time.LocalDate;
import java.time.ZonedDateTime;
import java.util.List;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.mbb.mbbplatform.common.EnumTypeForErrorCodes;
import com.mbb.mbbplatform.domain.Channel;
import com.mbb.mbbplatform.domain.Dispatch;
import com.mbb.mbbplatform.domain.ReturnDetails;
import com.mbb.mbbplatform.domain.ReturnReasons;
import com.mbb.mbbplatform.domain.TypeOfReturn;
import com.mbb.mbbplatform.model.ServiceResponse;
import com.mbb.mbbplatform.model.Utils;
import com.mbb.mbbplatform.repos.ChannelRepository;
import com.mbb.mbbplatform.repos.DispatchRepository;
import com.mbb.mbbplatform.repos.ReturnDetailsRepository;
import com.mbb.mbbplatform.repos.ReturnReasonsRepository;
import com.mbb.mbbplatform.repos.TypeOfReturnRepository;
import com.mbb.mbbplatform.svcs.ReturnDetailsService;

@RestController
public class ReturnDetailsServiceImpl implements ReturnDetailsService {
	private static Logger log = LoggerFactory.getLogger(InventoryServiceImpl.class);
	@Autowired
	private Utils utils;

	@Autowired
	private DispatchRepository dispatchRepo;

	@Autowired
	private ReturnDetailsRepository returnDetailsRepo;

	@Autowired
	private ChannelRepository channelRepo;

	@Autowired
	private TypeOfReturnRepository typeOfReturnRepo;

	@Autowired
	private ReturnReasonsRepository returnReasonsRepo;

	@Override
	public ServiceResponse<ReturnDetails> addReturnDetails(@Valid ReturnDetails returnDetails) {
		log.info("adding return details");

		ServiceResponse<ReturnDetails> response = new ServiceResponse<>();
		ReturnDetails savedReturnDetails = null;
		try {
			ReturnDetails existingReturnDetails = returnDetailsRepo.findByDispatchId(returnDetails.getDispatchId());
			if (existingReturnDetails == null) {
				Dispatch dispatch = dispatchRepo.findById(returnDetails.getDispatchId().getId()).get();
				
				dispatchRepo.save(dispatch);
				ZonedDateTime createdDate = dispatch.getCreatedTime();
				LocalDate localDate = createdDate.toLocalDate();
				if (localDate.isBefore(returnDetails.getReturnRequestOn())||localDate.isEqual(returnDetails.getReturnRequestOn())) {

					savedReturnDetails = returnDetailsRepo.save(returnDetails);
				} else {
					response.setError(EnumTypeForErrorCodes.SCUS617.name(), EnumTypeForErrorCodes.SCUS617.errorMsg());

				}
			} else {

				response.setError(EnumTypeForErrorCodes.SCUS608.name(), EnumTypeForErrorCodes.SCUS608.errorMsg());

			}
			response.setData(savedReturnDetails);

		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS609.name(), EnumTypeForErrorCodes.SCUS609.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}
		return response;
	}

	@Override
	public ServiceResponse<ReturnDetails> getByDispatchId(Long id) {
		log.info("get return details by dispatchId");
		ServiceResponse<ReturnDetails> response = new ServiceResponse<>();
		try {
			Dispatch dispatch = dispatchRepo.findById(id).get();
			ReturnDetails returnDetails = returnDetailsRepo.findByDispatchId(dispatch);
			if (returnDetails != null) {
				
				response.setData(returnDetails);

			}

		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS612.name(), EnumTypeForErrorCodes.SCUS612.errorMsg());
			log.error(utils.toJson(response.getError()), e);

		}
		return response;
	}

	@Override
	public ServiceResponse<List<Channel>> getAllChannels() {
		log.info("get all channels");
		ServiceResponse<List<Channel>> response = new ServiceResponse<>();
		try {

			List<Channel> channels = channelRepo.findAll();
			response.setData(channels);

		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS614.name(), EnumTypeForErrorCodes.SCUS614.errorMsg());
			log.error(utils.toJson(response.getError()), e);

		}
		return response;
	}

	@Override
	public ServiceResponse<List<TypeOfReturn>> getAllTypeOfReturns() {
		log.info("get all type of returns");
		ServiceResponse<List<TypeOfReturn>> response = new ServiceResponse<>();
		try {
			List<TypeOfReturn> typeOfReturns = typeOfReturnRepo.findAll();
			response.setData(typeOfReturns);
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS615.name(), EnumTypeForErrorCodes.SCUS615.errorMsg());
			log.error(utils.toJson(response.getError()), e);

		}

		return response;
	}

	@Override
	public ServiceResponse<List<ReturnReasons>> getAllReturnReasons() {
		log.info("get all return reasons");
		ServiceResponse<List<ReturnReasons>> response = new ServiceResponse<>();
		try {
			List<ReturnReasons> returnReasons = returnReasonsRepo.findAll();
			response.setData(returnReasons);
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS616.name(), EnumTypeForErrorCodes.SCUS616.errorMsg());
			log.error(utils.toJson(response.getError()), e);

		}
		return response;
	}

}

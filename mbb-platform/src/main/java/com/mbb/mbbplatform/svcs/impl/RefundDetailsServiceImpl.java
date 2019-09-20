package com.mbb.mbbplatform.svcs.impl;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.mbb.mbbplatform.common.EnumTypeForErrorCodes;
import com.mbb.mbbplatform.domain.Dispatch;
import com.mbb.mbbplatform.domain.RefundDetails;
import com.mbb.mbbplatform.domain.ReturnDetails;
import com.mbb.mbbplatform.model.ServiceResponse;
import com.mbb.mbbplatform.model.Utils;
import com.mbb.mbbplatform.repos.DispatchRepository;
import com.mbb.mbbplatform.repos.RefundDetailsRepository;
import com.mbb.mbbplatform.repos.ReturnDetailsRepository;
import com.mbb.mbbplatform.svcs.RefundDetailsService;

@RestController
public class RefundDetailsServiceImpl implements RefundDetailsService {

	private static Logger log = LoggerFactory.getLogger(InventoryServiceImpl.class);
	@Autowired
	private Utils utils;

	@Autowired
	private DispatchRepository dispatchRepo;

	@Autowired
	private RefundDetailsRepository refundDetailsRepo;

	@Autowired
	private ReturnDetailsRepository returnDetailsRepo;

	@Override
	public ServiceResponse<RefundDetails> addRefundDetails(@Valid RefundDetails refundDetails) {
		log.info("adding return details");

		ServiceResponse<RefundDetails> response = new ServiceResponse<>();
		RefundDetails savedRefundDetails = null;
		try {
			RefundDetails existingRefundDetails = refundDetailsRepo.findByDispatchId(refundDetails.getDispatchId());
			ReturnDetails existingReturnDetails = returnDetailsRepo.findByDispatchId(refundDetails.getDispatchId());
			if (existingReturnDetails == null || !existingReturnDetails.getReturnStatus()) {
				response.setError(EnumTypeForErrorCodes.SCUS618.name(), EnumTypeForErrorCodes.SCUS618.errorMsg());

			} else {

				if (existingRefundDetails == null) {

					savedRefundDetails = refundDetailsRepo.save(refundDetails);

				} else {

					response.setError(EnumTypeForErrorCodes.SCUS610.name(), EnumTypeForErrorCodes.SCUS610.errorMsg());

				}
			}
			response.setData(savedRefundDetails);

		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS611.name(), EnumTypeForErrorCodes.SCUS611.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}
		return response;
	}

	@Override
	public ServiceResponse<RefundDetails> getByDispatchId(Long id) {
		log.info("get return details by dispatchId");
		ServiceResponse<RefundDetails> response = new ServiceResponse<>();
		try {
			Dispatch dispatch = dispatchRepo.findById(id).get();
			RefundDetails refundDetails = refundDetailsRepo.findByDispatchId(dispatch);
			if (refundDetails != null) {
				response.setData(refundDetails);

			}

		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS613.name(), EnumTypeForErrorCodes.SCUS613.errorMsg());
			log.error(utils.toJson(response.getError()), e);

		}
		return response;
	}

}

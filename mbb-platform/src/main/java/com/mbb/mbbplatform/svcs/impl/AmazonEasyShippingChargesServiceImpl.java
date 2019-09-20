package com.mbb.mbbplatform.svcs.impl;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import com.mbb.mbbplatform.common.EnumTypeForErrorCodes;
import com.mbb.mbbplatform.domain.AmazonCodRemittanceDump;
import com.mbb.mbbplatform.domain.AmazonEasyShippingCharges;
import com.mbb.mbbplatform.model.ServiceResponse;
import com.mbb.mbbplatform.model.Utils;
import com.mbb.mbbplatform.repos.AmazonCodRemittanceDumpRepository;
import com.mbb.mbbplatform.repos.AmazonEasyShippingChargesRepository;
import com.mbb.mbbplatform.svcs.AmazonEasyShippingChargesService;
@Service
public class AmazonEasyShippingChargesServiceImpl implements AmazonEasyShippingChargesService {
	private static Logger log = LoggerFactory.getLogger(AmazonEasyShippingChargesServiceImpl.class);

	@Autowired
	private Utils utils;

	@Autowired
	private AmazonEasyShippingChargesRepository easyShippingRepository;

	@Autowired
	private AmazonCodRemittanceDumpRepository amazonCodRemittanceRepo;
	@Scheduled(cron = "${amazoneasyshipping.addAmazonEasyShipping}")

	@Override
	public ServiceResponse<List<AmazonEasyShippingCharges>> addAmazonEasyShipping() {

		log.info("adding easy shipping  orders");

		ServiceResponse<List<AmazonEasyShippingCharges>> response = new ServiceResponse<>();

		List<AmazonEasyShippingCharges> listEasyShip = new ArrayList<>();

		try {
			List<AmazonCodRemittanceDump> amazoncod = amazonCodRemittanceRepo.findAllByFulfillment();
			for (AmazonCodRemittanceDump amazonCodRemittance : amazoncod) {
				AmazonEasyShippingCharges easyShip = new AmazonEasyShippingCharges();

				AmazonEasyShippingCharges easyShipping = easyShippingRepository.findByOrderId(amazonCodRemittance.getOrderId());

				if (easyShipping == null) {

					easyShip.setSettlementId(amazonCodRemittance.getSettlementId());
					easyShip.setDateTime(amazonCodRemittance.getDateTime());
					easyShip.setType(amazonCodRemittance.getType());
					easyShip.setOrderId(amazonCodRemittance.getOrderId());
					easyShip.setSku(amazonCodRemittance.getSku());
					easyShip.setDescription(amazonCodRemittance.getDescription());
					easyShip.setQuantity("Easy Ship weight handling fees");
					easyShip.setFulfillment(amazonCodRemittance.getFulfillment());
					easyShip.setShippingCredits(amazonCodRemittance.getShippingCredits());
					easyShip.setTotal(amazonCodRemittance.getTotal());
					LocalDateTime dateTime = LocalDateTime.now();
					easyShip.setCreatedDate(dateTime);
					easyShip.setUpdatedDate(dateTime);

					listEasyShip.add(easyShip);
				} else {

					listEasyShip.add(easyShipping);
					easyShippingRepository.saveAll(listEasyShip);
					response.setData(listEasyShip);
				}
				easyShippingRepository.saveAll(listEasyShip);
				response.setData(listEasyShip);
			}
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS243.name(), EnumTypeForErrorCodes.SCUS243.errorMsg());

			log.error(utils.toJson(response.getError()), e);

		}
		return response;

	}
}

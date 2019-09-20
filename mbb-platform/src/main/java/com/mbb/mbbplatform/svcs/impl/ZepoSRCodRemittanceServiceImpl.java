package com.mbb.mbbplatform.svcs.impl;

import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import javax.validation.constraints.NotNull;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;

import com.mbb.mbbplatform.common.EnumTypeForErrorCodes;
import com.mbb.mbbplatform.domain.ShiprocketCodRemittance;
import com.mbb.mbbplatform.domain.ZepoCodRemittance;
import com.mbb.mbbplatform.domain.ZepoSRCodRemittance;
import com.mbb.mbbplatform.model.ServiceResponse;
import com.mbb.mbbplatform.model.Utils;
import com.mbb.mbbplatform.repos.ShiprocketCodRemittanceRepository;
import com.mbb.mbbplatform.repos.ZepoCodRemittanceRepository;
import com.mbb.mbbplatform.repos.ZepoSRCodRemittanceRepository;
import com.mbb.mbbplatform.svcs.ZepoSRCodRemittanceService;

@Service
public class ZepoSRCodRemittanceServiceImpl implements ZepoSRCodRemittanceService {

	private static Logger log = LoggerFactory.getLogger(ZepoSRCodRemittanceServiceImpl.class);

	@Autowired
	private ShiprocketCodRemittanceRepository shiprocketCodRemittanceRepo;

	@Autowired
	private ZepoSRCodRemittanceRepository zepoSRCodRemittanceRepo;

	@Autowired
	private ZepoCodRemittanceRepository zepoCodRemittanceRepo;

	@Autowired
	private Utils utils;

	@Scheduled(cron = "0 30 10 * * ?")
	@Override
	public ServiceResponse<Collection<ZepoSRCodRemittance>> getAllZepoSRCodRemittance() {
		ServiceResponse<Collection<ZepoSRCodRemittance>> response = new ServiceResponse<>();

		List<ZepoSRCodRemittance> zepoSRRemittanceList = new ArrayList<>();
		try {
			List<ShiprocketCodRemittance> listZepoSRCodRemittance = shiprocketCodRemittanceRepo.findAll();
			for (ShiprocketCodRemittance shiprocketCodRemittance : listZepoSRCodRemittance) {
				ZepoSRCodRemittance zepoSRRemittance = new ZepoSRCodRemittance();

				String crfid = shiprocketCodRemittance.getCrfid() + "";

				ZepoSRCodRemittance listCrfid = zepoSRCodRemittanceRepo.findByCrfid(crfid);

				if (listCrfid != null) {
					zepoSRRemittanceList.add(listCrfid);
					zepoSRCodRemittanceRepo.saveAll(zepoSRRemittanceList);

					response.setData(zepoSRRemittanceList);

				} else {

					zepoSRRemittance.setCrfid(shiprocketCodRemittance.getCrfid() + "");
					zepoSRRemittance.setUtr(shiprocketCodRemittance.getUtr());
					zepoSRRemittance.setCodpayable(shiprocketCodRemittance.getCodpayable());
					zepoSRRemittance.setStatus(shiprocketCodRemittance.getStatus());
					zepoSRRemittance.setRemarks(shiprocketCodRemittance.getRemarks());
					zepoSRRemittance.setRemittedValue(Double.parseDouble(shiprocketCodRemittance.getRemittedValue()));
					zepoSRRemittance.setAccountType(shiprocketCodRemittance.getAccountType());
					String remittedDate = shiprocketCodRemittance.getCreatedAt();
					SimpleDateFormat fromUser = new SimpleDateFormat("dd/MM/yyyy");
					SimpleDateFormat myFormat = new SimpleDateFormat("yyyy-MM-dd");
					String reformattedStr = myFormat.format(fromUser.parse(remittedDate));
					zepoSRRemittance.setCreatedAt(reformattedStr);
					zepoSRRemittance.setRechargeValue(shiprocketCodRemittance.getRechargeValue());
					zepoSRRemittance.setReversalValue(shiprocketCodRemittance.getReversalValue());
					zepoSRRemittance.setShippingAggregator(shiprocketCodRemittance.getShippingAggregator());
					LocalDateTime dateTime = LocalDateTime.now();
					zepoSRRemittance.setCreatedDate(dateTime);
					zepoSRRemittance.setUpdatedDate(dateTime);
					zepoSRRemittanceList.add(zepoSRRemittance);

				}
			}
			zepoSRCodRemittanceRepo.saveAll(zepoSRRemittanceList);
			response.setData(zepoSRRemittanceList);

		} catch (Exception e) {
			log.error(utils.toJson(response.getError()), e);

		}
		return response;

	}

	@Scheduled(cron = "0 30 10 * * ?")
	@Override
	public ServiceResponse<Collection<ZepoSRCodRemittance>> getAllZepoCod() {
		log.info("adding All Zepo CodRemittance report");
		ServiceResponse<Collection<ZepoSRCodRemittance>> response = new ServiceResponse<>();

		List<ZepoSRCodRemittance> listZepoCod = new ArrayList<>();

		try {
			List<ZepoCodRemittance> listZepocodremittance = zepoCodRemittanceRepo.findAll();

			for (ZepoCodRemittance zepoCodRemittance : listZepocodremittance) {

				ZepoSRCodRemittance zepoSRCodRemittance = new ZepoSRCodRemittance();


				String crfid = zepoCodRemittance.getLedger();

				List<ZepoSRCodRemittance> listCrfid = zepoSRCodRemittanceRepo.findAllByCrfid(crfid);
				if(!listCrfid.isEmpty())
				{
					listZepoCod.add(listCrfid.get(0));
					zepoSRCodRemittanceRepo.saveAll(listZepoCod);

					response.setData(listZepoCod);
				}
				else
				{
				zepoSRCodRemittance.setCrfid(zepoCodRemittance.getLedger());
				zepoSRCodRemittance.setUtr(zepoCodRemittance.getPaymentReferennceNumber());
				zepoSRCodRemittance.setRemittedValue(Double.parseDouble(zepoCodRemittance.getTotalAmount()));
				zepoSRCodRemittance.setCreatedAt(zepoCodRemittance.getDueDate());

				String dueDate = zepoCodRemittance.getDueDate();
				SimpleDateFormat fromUser = new SimpleDateFormat("dd/MM/yyyy");
				SimpleDateFormat myFormat = new SimpleDateFormat("yyyy-MM-dd");
				String reformattedStr = myFormat.format(fromUser.parse(dueDate));

				zepoSRCodRemittance.setCreatedAt(reformattedStr);
				String status = zepoCodRemittance.getStatus();
				if (status.equals("No Action")) {
					zepoSRCodRemittance.setStatus("Payment Pending");
				} else {
					zepoSRCodRemittance.setStatus(zepoCodRemittance.getStatus());
				}

				zepoSRCodRemittance.setShippingAggregator("ZEPO");
				LocalDateTime dateTime = LocalDateTime.now();
				zepoSRCodRemittance.setCreatedDate(dateTime);
				zepoSRCodRemittance.setUpdatedDate(dateTime);
				listZepoCod.add(zepoSRCodRemittance);

			}
			}
			zepoSRCodRemittanceRepo.saveAll(listZepoCod);
			response.setData(listZepoCod);
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS258.name(), EnumTypeForErrorCodes.SCUS258.errorMsg());

			log.error(utils.toJson(response.getError()), e);
		}
		return response;

	}

	@Override
	public ServiceResponse<Collection<ZepoSRCodRemittance>> getAllCodRemittance() {
		log.info("getting all zeposrshipments reports");
		ServiceResponse<Collection<ZepoSRCodRemittance>> response = new ServiceResponse<>();
		try {
			Collection<ZepoSRCodRemittance> listzeposrshipments = zepoSRCodRemittanceRepo.findAll();
			response.setData(listzeposrshipments);
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS233.name(), EnumTypeForErrorCodes.SCUS233.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}
		return response;
	}

	@Override
	public ServiceResponse<List<ZepoSRCodRemittance>> findZepoSRCodRemittanceDetails(@NotNull String startDate,
			@NotNull String endDate, @NotNull @RequestParam String shippingAggregator,
			@NotNull @RequestParam String status) {
		ServiceResponse<List<ZepoSRCodRemittance>> reponse = new ServiceResponse<>();
		List<ZepoSRCodRemittance> list = new ArrayList<>();
		log.info("find zepo shiprocket cod details in between the dates");

		try {
			if (status.equals("all") && shippingAggregator.equals("all")) {
				list = zepoSRCodRemittanceRepo.findByStartDateAndEndDate(startDate, endDate);
			} else if (status.equals("all")) {
				list = zepoSRCodRemittanceRepo.findByStartDateAndEndDateAndShippingAggregator(startDate, endDate,
						shippingAggregator);
			} else if (shippingAggregator.equals("all")) {
				list = zepoSRCodRemittanceRepo.findByStartDateAndEndDateAndStatus(startDate, endDate, status);
			} else {
				list = zepoSRCodRemittanceRepo.getCODRemittanceDetails(startDate, endDate, shippingAggregator, status);
			}
			reponse.setData(list);
		} catch (Exception e) {
			reponse.setError(EnumTypeForErrorCodes.SCUS252.name(), EnumTypeForErrorCodes.SCUS252.errorMsg());
			log.error("failed to codremittance", e);
		}
		return reponse;

	}
}

package com.mbb.mbbplatform.svcs.impl;

import java.text.DecimalFormat;
import java.text.SimpleDateFormat;
import java.time.Instant;
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
import org.springframework.web.bind.annotation.PathVariable;

import com.mbb.mbbplatform.common.EnumTypeForErrorCodes;
import com.mbb.mbbplatform.domain.AmazonCodRemittance;
import com.mbb.mbbplatform.domain.AmazonCodRemittanceDump;
import com.mbb.mbbplatform.domain.AmazonEasyShippingCharges;
import com.mbb.mbbplatform.model.ServiceResponse;
import com.mbb.mbbplatform.model.Utils;
import com.mbb.mbbplatform.repos.AmazonCodRemittanceDumpRepository;
import com.mbb.mbbplatform.repos.AmazonCodRemittanceRepository;
import com.mbb.mbbplatform.repos.AmazonEasyShippingChargesRepository;
import com.mbb.mbbplatform.svcs.AmazonCodRemittanceService;

@Service
public class AmazonCodRemittanceServiceImpl implements AmazonCodRemittanceService{

	private static Logger log = LoggerFactory.getLogger(AmazonCodRemittanceServiceImpl.class);

	@Autowired
	private AmazonCodRemittanceDumpRepository amazonCodDumpRemittanceRepo;

	@Autowired
	private AmazonCodRemittanceRepository amazonCodRemittanceRepo;
	

	@Autowired
	private AmazonEasyShippingChargesRepository easyShippingRepository;
	
	@Autowired
	private Utils utils;
	@Scheduled(cron = "${amazoncodremittance.getAmazonCodRemittance}")
	@Override
	public ServiceResponse<List<AmazonCodRemittance>> getAmazonCodRemittance() {
		log.info("adding AmazonMerchantCod orders");

		ServiceResponse<List<AmazonCodRemittance>> response = new ServiceResponse<>();

		List<AmazonCodRemittance> listAmazon = new ArrayList<>();

		try {
			List<AmazonCodRemittanceDump> amazoncod = amazonCodDumpRemittanceRepo.findAllByType();
			for (AmazonCodRemittanceDump amazonCodRemittance : amazoncod) {
				AmazonCodRemittance amozonMerchant = new AmazonCodRemittance();

				AmazonCodRemittance amazonMerchantCod = amazonCodRemittanceRepo
						.findByOrderId(amazonCodRemittance.getOrderId());
				AmazonEasyShippingCharges easyShipping = easyShippingRepository.findByOrderId(amazonCodRemittance.getOrderId());

				if (amazonMerchantCod == null) {
					amozonMerchant.setSettlementId(amazonCodRemittance.getSettlementId());
					String s =amazonCodRemittance.getDateTime() ;
					SimpleDateFormat formatter6 = new SimpleDateFormat("dd-MMM-yyyy HH:mm:ss");
					Instant date = formatter6.parse(s).toInstant();
					String settelementDate=(date+"").substring(0,10);
					amozonMerchant.setDateTime(settelementDate);
					amozonMerchant.setIgst(amazonCodRemittance.getIgst());
					amozonMerchant.setFbaFees(amazonCodRemittance.getFbaFees());
					amozonMerchant.setMarketPlace(amazonCodRemittance.getMarketPlace());
					amozonMerchant.setOrderCity(amazonCodRemittance.getOrderCity());
					amozonMerchant.setOrderPostal(amazonCodRemittance.getOrderPostal());
					amozonMerchant.setOrderSate(amazonCodRemittance.getOrderSate());
					amozonMerchant.setOther(amazonCodRemittance.getOther());
					amozonMerchant.setSgst(amazonCodRemittance.getSgst());
					amozonMerchant.setTotalSales(amazonCodRemittance.getTotalSales());
					amozonMerchant.setOtherTransactionFees(amazonCodRemittance.getOtherTransactionFees());
					amozonMerchant.setProductSales(amazonCodRemittance.getProductSales());
					amozonMerchant.setPromotionalRebates(amazonCodRemittance.getPromotionalRebates());
					amozonMerchant.setSellingFees(amazonCodRemittance.getSellingFees());
					amozonMerchant.setOrderId(amazonCodRemittance.getOrderId());
					amozonMerchant.setSku(amazonCodRemittance.getSku());
					amozonMerchant.setDescription(amazonCodRemittance.getDescription());
					amozonMerchant.setQuantity(amazonCodRemittance.getQuantity());
					amozonMerchant.setFulfillment(amazonCodRemittance.getFulfillment());
					amozonMerchant.setCgst(amazonCodRemittance.getCgst());
					if(amazonCodRemittance.getType().equals("Refund"))
					{
					amozonMerchant.setType("REFUND");
					}
					else if(amazonCodRemittance.getType().equals("Order")) {
						amozonMerchant.setType("ORDER");

					}
					else
					{
						amozonMerchant.setType(amazonCodRemittance.getType());

					}
					String ordertype=amazonCodRemittance.getType();
					amozonMerchant.setShippingCredits(amazonCodRemittance.getShippingCredits());

					if(ordertype.equals("REFUND"))
					{
						amozonMerchant.setShippingCredits(amazonCodRemittance.getShippingCredits());
						amozonMerchant.setTotal(Double.parseDouble(amazonCodRemittance.getTotal())+"");
					}
					else {
					
					if (easyShipping != null) {
						Double shippingTotal = Double.parseDouble(easyShipping.getTotal());
						Double orderTotal =Double.parseDouble (amazonCodRemittance.getTotal());
						Double total=shippingTotal+orderTotal;
						DecimalFormat f = new DecimalFormat("##.00");
						amozonMerchant.setTotal(f.format(total));
						amozonMerchant.setShippingFee(easyShipping.getTotal());
					} else {
						amozonMerchant.setTotal(Double.parseDouble(amazonCodRemittance.getTotal())+"");

					}
					}

					LocalDateTime dateTime = LocalDateTime.now();

					amozonMerchant.setCreatedDate(dateTime);
					amozonMerchant.setUpdatedDate(dateTime);

					listAmazon.add(amozonMerchant);
				} 
				else {
					listAmazon.add(amazonMerchantCod);
					amazonCodRemittanceRepo.saveAll(listAmazon);
					response.setData(listAmazon);
				}
				amazonCodRemittanceRepo.saveAll(listAmazon);
				response.setData(listAmazon);
			}
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS244.name(), EnumTypeForErrorCodes.SCUS244.errorMsg());

			log.error(utils.toJson(response.getError()), e);

		}
		return response;
	}
	

	@Override
	public ServiceResponse<Collection<AmazonCodRemittance>> getAllAmazonCodRemittance() {
		log.info("get All Amazon Flipkart Cod Remittance");

		ServiceResponse<Collection<AmazonCodRemittance>> response = new ServiceResponse<>();

		try {
			Collection<AmazonCodRemittance> amazonCodRemittance = amazonCodRemittanceRepo.findAll();
			response.setData(amazonCodRemittance);

		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS245.name(), EnumTypeForErrorCodes.SCUS245.errorMsg());

			log.error(utils.toJson(response.getError()), e);

		}
		return response;
	}

	@Override
	public ServiceResponse<List<AmazonCodRemittance>> findAmazonCodInBetweenDates(
			@NotNull @PathVariable String startDate, @NotNull @PathVariable String endDate,@NotNull  @PathVariable String type) {
		log.info("find cod details in between the dates");
		ServiceResponse<List<AmazonCodRemittance>> responses = new ServiceResponse<>();
		try {
			if(type.equals("ALL"))
			{
				List<AmazonCodRemittance>	betweenDates = amazonCodRemittanceRepo.getBetweenDates(startDate,endDate);
			responses.setData(betweenDates);
			}
			else
			{
				List<AmazonCodRemittance> betweenDateAndType = amazonCodRemittanceRepo.getBetweenDatesAndType(startDate,endDate,type);
				responses.setData(betweenDateAndType);

			}
			} catch (Exception e) {
			responses.setError(EnumTypeForErrorCodes.SCUS253.name(), EnumTypeForErrorCodes.SCUS253.errorMsg());

			log.error(utils.toJson(responses.getError()), e);
		}
		return responses;
	}
}

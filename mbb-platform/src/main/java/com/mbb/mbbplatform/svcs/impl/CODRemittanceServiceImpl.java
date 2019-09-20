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
import com.mbb.mbbplatform.domain.CODRemittance;
import com.mbb.mbbplatform.domain.ShiprocketCodOrders;
import com.mbb.mbbplatform.domain.ZepoCodRemittance;
import com.mbb.mbbplatform.domain.ZepoShipments;
import com.mbb.mbbplatform.model.ServiceResponse;
import com.mbb.mbbplatform.model.Utils;
import com.mbb.mbbplatform.repos.CODRemittanceRepository;
import com.mbb.mbbplatform.repos.ShiprocketCodOrdersRepository;
import com.mbb.mbbplatform.repos.ZepoCodRemittanceRepository;
import com.mbb.mbbplatform.repos.ZepoShipmentsRepository;
import com.mbb.mbbplatform.svcs.CODRemittanceService;

@Service
public class CODRemittanceServiceImpl implements CODRemittanceService {

	private static Logger log = LoggerFactory.getLogger(CODRemittanceServiceImpl.class);
	public static final String PAYMENTPENDING="Payment Pending";
	public static final String PAYMENTPENDINGCAPS="Payment pending";

	public static final String NOTAVAILABLE="NOT AVAILABLE";
	public static final String DATEFORMAT="yyyy-MM-dd";

	@Autowired
	private ZepoCodRemittanceRepository zepoCodRemittanceRepo;

	@Autowired
	private Utils utils;

	@Autowired
	private CODRemittanceRepository cODRemittanceRepo;

	@Autowired
	private ShiprocketCodOrdersRepository shiprocketCodOrdersRepo;

	@Autowired
	private ZepoShipmentsRepository zepoShipmentsRepo;

	@Scheduled(cron = "${codremittance.getzepoandsr}")
	@Override
	public ServiceResponse<Collection<CODRemittance>> addAllZepoCodRemittance() {
			log.info("adding All Zepo CodRemittance report");
			ServiceResponse<Collection<CODRemittance>> response = new ServiceResponse<>();

		List<CODRemittance> listCodremittance = new ArrayList<>();
		try {
			List<ZepoCodRemittance> listZepocodremittance = zepoCodRemittanceRepo.findAll();
			for (ZepoCodRemittance zepoCodRemittance : listZepocodremittance) {
				CODRemittance codremittance = new CODRemittance();
				String trackingId = zepoCodRemittance.getTrackingId();
				List<CODRemittance> codremittanceTraking = cODRemittanceRepo.findByTrackingNo((trackingId));
				if (codremittanceTraking.isEmpty()) {
					List<ZepoShipments> zeposhipmentsList = zepoShipmentsRepo.findByTrackingNo(trackingId);
					if (zeposhipmentsList.isEmpty()) {
						codremittance.setTrackingNo(zepoCodRemittance.getTrackingId());
						codremittance.setcRFIDORLedger(zepoCodRemittance.getLedger());
						codremittance.setAmount(Double.parseDouble(zepoCodRemittance.getTotalAmount()));
						String dueDate = zepoCodRemittance.getDueDate();
						SimpleDateFormat fromUser = new SimpleDateFormat("dd/MM/yyyy");
						SimpleDateFormat myFormat = new SimpleDateFormat(DATEFORMAT);
						String reformattedStr = myFormat.format(fromUser.parse(dueDate));
						codremittance.setRemittedDate(reformattedStr);
						String status = zepoCodRemittance.getStatus();
						if (status.equals("No Action")) {
							codremittance.setRemittanceStatus(PAYMENTPENDING);
						} 
						else if(status.equals(PAYMENTPENDINGCAPS)) {
							codremittance.setRemittanceStatus(PAYMENTPENDING);

						}else {
							codremittance.setRemittanceStatus(zepoCodRemittance.getStatus());

						}
						String paymentStatus = codremittance.getRemittanceStatus();
						if (paymentStatus.equals(PAYMENTPENDING)) {
							codremittance.setPaymentReferennceNumber(NOTAVAILABLE);
						} else {
							codremittance.setPaymentReferennceNumber(zepoCodRemittance.getPaymentReferennceNumber());
						}

						codremittance.setShippingAggregator("ZEPO");
						LocalDateTime dateTime = LocalDateTime.now();
						codremittance.setCreatedDate(dateTime);
						codremittance.setUpdatedDate(dateTime);
						listCodremittance.add(codremittance);
					} else {
						for (ZepoShipments zeposhipments : zeposhipmentsList) {
							codremittance.setOrderId(zeposhipments.getOrderNumber());
							codremittance.setTrackingNo(zepoCodRemittance.getTrackingId());
							codremittance.setcRFIDORLedger(zepoCodRemittance.getLedger());

							codremittance.setAmount(Double.parseDouble(zepoCodRemittance.getTotalAmount()));
							String dueDate = zepoCodRemittance.getDueDate();
							SimpleDateFormat fromUser = new SimpleDateFormat("dd/MM/yyyy");
							SimpleDateFormat myFormat = new SimpleDateFormat(DATEFORMAT);
							String reformattedStr = myFormat.format(fromUser.parse(dueDate));
							codremittance.setRemittedDate(reformattedStr);
							String status = zepoCodRemittance.getStatus();
							if (status.equals("No Action")) {
								codremittance.setRemittanceStatus(PAYMENTPENDING);
							} 
							else if(status.equals(PAYMENTPENDINGCAPS)) {
								codremittance.setRemittanceStatus(PAYMENTPENDING);

							}else {
								codremittance.setRemittanceStatus(zepoCodRemittance.getStatus());
							}

							String paymentStatus = codremittance.getRemittanceStatus();
							if (paymentStatus.equals(PAYMENTPENDING)) {
								codremittance.setPaymentReferennceNumber(NOTAVAILABLE);
							} else {
								codremittance
										.setPaymentReferennceNumber(zepoCodRemittance.getPaymentReferennceNumber());
							}
							codremittance.setShippingAggregator("ZEPO");
							LocalDateTime dateTime = LocalDateTime.now();
							codremittance.setCreatedDate(dateTime);
							codremittance.setUpdatedDate(dateTime);
							listCodremittance.add(codremittance);
						}
					}
				} else {
					for (CODRemittance zepoCodRemittance2 : codremittanceTraking) {
						
						 if(zepoCodRemittance2.getRemittanceStatus().equals(PAYMENTPENDINGCAPS)) {
							 zepoCodRemittance2.setRemittanceStatus(PAYMENTPENDING);

						}
						listCodremittance.add(zepoCodRemittance2);
						cODRemittanceRepo.saveAll(listCodremittance);
						response.setData(listCodremittance);
					}

				}

			}

			cODRemittanceRepo.saveAll(listCodremittance);
			response.setData(listCodremittance);

		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS226.name(), EnumTypeForErrorCodes.SCUS226.errorMsg());
			log.error(utils.toJson(response.getError()), exception);
		}
		return response;
	}

	@Scheduled(cron = "${codremittance.getzepoandsr}")
	@Override
	public ServiceResponse<Collection<CODRemittance>> getAllShiprocketCodRemittance() {
		log.info("adding All Shiprocket CodRemittance report");
		ServiceResponse<Collection<CODRemittance>> response = new ServiceResponse<>();
		List<CODRemittance> listCodremittance = new ArrayList<>();
		try {
			List<ShiprocketCodOrders> listShiprocketCodOrders = shiprocketCodOrdersRepo.findAll();
			for (ShiprocketCodOrders shiprocketCodOrders : listShiprocketCodOrders) {
				CODRemittance codremittance = new CODRemittance();
				String awbcode = shiprocketCodOrders.getaWB();
				List<CODRemittance> codremittanceTraking = cODRemittanceRepo.findByTrackingNo(awbcode);
				if (codremittanceTraking.isEmpty()) {
					codremittance.setcRFIDORLedger(shiprocketCodOrders.getcRFID() + "");
					codremittance.setOrderId((shiprocketCodOrders.getOrderId()));
					codremittance.setTrackingNo((shiprocketCodOrders.getaWB() + ""));
					codremittance.setAmount(shiprocketCodOrders.getOrderValue());
					String remittanceDate = shiprocketCodOrders.getRemittanceDate() + "";
					remittanceDate = remittanceDate.substring(0, 10);
					SimpleDateFormat fromUser = new SimpleDateFormat(DATEFORMAT);
					String reformattedStr = fromUser.format(fromUser.parse(remittanceDate));
					codremittance.setRemittedDate(reformattedStr);

					String utrNo = shiprocketCodOrders.getuTR();
					if (utrNo.equals("")) {
						codremittance.setRemittanceStatus(PAYMENTPENDING);
					} else {
						codremittance.setRemittanceStatus("Complete");
					}
					String remittanceStatus = codremittance.getRemittanceStatus();
					if (remittanceStatus.equals(PAYMENTPENDING)) {
						codremittance.setPaymentReferennceNumber(NOTAVAILABLE);
					} else {
						codremittance.setPaymentReferennceNumber(shiprocketCodOrders.getuTR());
					}
					codremittance.setShippingAggregator("SHIPROCKET");
					LocalDateTime dateTime = LocalDateTime.now();
					codremittance.setCreatedDate(dateTime);
					codremittance.setUpdatedDate(dateTime);
					listCodremittance.add(codremittance);
				} else {
					for (CODRemittance codremittanceList : codremittanceTraking) {
						listCodremittance.add(codremittanceList);
						cODRemittanceRepo.saveAll(listCodremittance);
						response.setData(listCodremittance);
					}
				}
			}
			cODRemittanceRepo.saveAll(listCodremittance);
			response.setData(listCodremittance);

		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS227.name(), EnumTypeForErrorCodes.SCUS227.errorMsg());
			log.error(utils.toJson(response.getError()), exception);
		}

		return response;

	}
	@Scheduled(cron = "${codremittance.getzepoandsr}")
	@Override
	public ServiceResponse<Collection<CODRemittance>> getAllZepoCodRemittance() {
		log.info("getting all CODRemittance");
		ServiceResponse<Collection<CODRemittance>> response = new ServiceResponse<>();
		try {
			Collection<CODRemittance> listCodRemittance = cODRemittanceRepo.findAllByShippingAggregator("ZEPO");
			response.setData(listCodRemittance);
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS228.name(), EnumTypeForErrorCodes.SCUS228.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}
		return response;
	}
	
	@Scheduled(cron = "${codremittance.getzepoandsr}")
	@Override
	public ServiceResponse<Collection<CODRemittance>> getAllCodRemittance() {
		log.info("getting all CODRemittance");
		ServiceResponse<Collection<CODRemittance>> response = new ServiceResponse<>();
		try {
			Collection<CODRemittance> listCodRemittance = cODRemittanceRepo.findAll();
			response.setData(listCodRemittance);
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS228.name(), EnumTypeForErrorCodes.SCUS228.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}
		return response;
	}

	@Override
	public ServiceResponse<Collection<CODRemittance>> getAllShippingAggregator(String shippingAggregator) {
		log.info("get All ShippingAggregator ");
		ServiceResponse<Collection<CODRemittance>> response = new ServiceResponse<>();

		try {
			Collection<CODRemittance> listShippingAggregator = cODRemittanceRepo
					.findByShippingAggregator(shippingAggregator);
			response.setData(listShippingAggregator);
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS230.name(), EnumTypeForErrorCodes.SCUS230.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}

		return response;
	}

	@Override
	public ServiceResponse<Collection<CODRemittance>> getAllCodStatus(@NotNull String status) {
		log.info("get All Shipping status ");
		ServiceResponse<Collection<CODRemittance>> response = new ServiceResponse<>();

		try {
			Collection<CODRemittance> listShippingStatus = cODRemittanceRepo.findByRemittanceStatus(status);
			response.setData(listShippingStatus);
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS234.name(), EnumTypeForErrorCodes.SCUS234.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}
		return response;

	}

	@Override
	public List<CODRemittance> getAllShippingAggregatorAndStatus(@NotNull String status,
			@NotNull String shippingAggregator) {
		log.info("get All Shipping status and shippingAggregator ");
		List<CODRemittance> response = new ArrayList<>();
		ServiceResponse<List<CODRemittance>> responses = new ServiceResponse<>();
		try {
			if (status.equals("all") && shippingAggregator.equals("all")) {
				response = cODRemittanceRepo.findAll();
			} else if (status.equals("all")) {
				response = cODRemittanceRepo.findByShippingAggregator(shippingAggregator);
			} else if (shippingAggregator.equals("all")) {
				response = cODRemittanceRepo.findByRemittanceStatus(status);
			} else {
				response = cODRemittanceRepo.findByShippingAggregatorAndRemittanceStatus(shippingAggregator, status);
			}

		} catch (Exception e) {
			responses.setError(EnumTypeForErrorCodes.SCUS255.name(), EnumTypeForErrorCodes.SCUS255.errorMsg());
			log.error("Filed to get all Shipping status and shippingAggregator ");
		}
		return response;
	}

	@Override
	public ServiceResponse<Collection<CODRemittance>> findCodRemittanceReportsInBetweenDates(@NotNull String startDate,
			@NotNull String endDate) {
		log.info("find cod reports in between the dates");
		ServiceResponse<Collection<CODRemittance>> response = new ServiceResponse<>();
		try {

			Collection<CODRemittance> codlist = cODRemittanceRepo.getCODRemittanceReports(startDate, endDate);

			response.setData(codlist);
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS247.name(), EnumTypeForErrorCodes.SCUS247.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}
		return response;
	}

	@Override
	public List<CODRemittance> findCodRemittanceDetailsInBetweenDates(@NotNull String startDate,
			@NotNull String endDate, @NotNull @RequestParam String shippingAggregator,
			@NotNull @RequestParam String status) {
		log.info("find cod details in between the dates");
		List<CODRemittance> response = new ArrayList<>();
		ServiceResponse<List<CODRemittance>> responses = new ServiceResponse<>();

		try {

			if (status.equals("all") && shippingAggregator.equals("all")) {
				response = cODRemittanceRepo.findByStartDateAndEndDate(startDate, endDate);
			} else if (status.equals("all")) {
				response = cODRemittanceRepo.findByStartDateAndEndDateAndShippingAggregator(startDate, endDate,
						shippingAggregator);
			} else if (shippingAggregator.equals("all")) {
				response = cODRemittanceRepo.findByStartDateAndEndDateAndStatus(startDate, endDate, status);
			} else {
				response = cODRemittanceRepo.getCODRemittanceDetails(startDate, endDate, shippingAggregator, status);
			}
			responses.setData(response);
		} catch (Exception e) {
			responses.setError(EnumTypeForErrorCodes.SCUS249.name(), EnumTypeForErrorCodes.SCUS249.errorMsg());
			log.error("failed to codremittance" , e);
		}
		return response;
	}

	@Scheduled(cron = "${codremittance.deleteshiprocket}")
	@Override
	public ServiceResponse<String> deleteAllShiprocketShipments() {
		log.info("delete delivery alerts orers list");
		ServiceResponse<String> response = new ServiceResponse<>();
		try {
			List<CODRemittance> codremittance = cODRemittanceRepo.findAllByShippingAggregator();

			cODRemittanceRepo.deleteAll(codremittance);

		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS248.name(), EnumTypeForErrorCodes.SCUS248.errorMsg());
			log.info("delete shiprocket shipments  ");
		}
		return response;

	}

}

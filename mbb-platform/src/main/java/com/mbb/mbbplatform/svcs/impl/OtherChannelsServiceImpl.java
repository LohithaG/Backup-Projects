package com.mbb.mbbplatform.svcs.impl;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import com.mbb.mbbplatform.common.EnumTypeForErrorCodes;
import com.mbb.mbbplatform.domain.OtherChannels;
import com.mbb.mbbplatform.domain.SaleOrderForShipments;
import com.mbb.mbbplatform.model.ServiceResponse;
import com.mbb.mbbplatform.model.Utils;
import com.mbb.mbbplatform.repos.OtherChannelsRepository;
import com.mbb.mbbplatform.repos.SaleOrdersForShipmentsRepository;

import com.mbb.mbbplatform.svcs.OtherChannelsService;

@Service
public class OtherChannelsServiceImpl implements OtherChannelsService {

	private static Logger log = LoggerFactory.getLogger(OtherChannelsServiceImpl.class);
	@Autowired
	private SaleOrdersForShipmentsRepository saleOrdersRepo;

	@Autowired
	private OtherChannelsRepository otherChannelRepo;

	@Autowired
	private Utils utils;
	
	public static final String ONLINE="ONLINE";

	@Scheduled(cron = "${otherchannel.getamazon}")
	@Override
	public ServiceResponse<Collection<OtherChannels>> getAllAmazonchannels() {
		log.info("get all AmazonChannel  report");
		ServiceResponse<Collection<OtherChannels>> response = new ServiceResponse<>();

		List<OtherChannels> listOtherChannels = new ArrayList<>();
		try {
			LocalDate date = LocalDate.now();

			Collection<SaleOrderForShipments> listSaleChannelName = saleOrdersRepo.findAllByChannelNameAndZohocreatedDate(date);

			for (SaleOrderForShipments saleOrders : listSaleChannelName) {
				OtherChannels otherChannel = new OtherChannels();
				
				List<OtherChannels> listSaleOrders = otherChannelRepo
						.findBySaleOrderItemCode(saleOrders.getSaleOrderItemCode());
				if (listSaleOrders.isEmpty()) {
					String channelName = saleOrders.getChannelName();
					if (channelName.equals("AMAZON_IN")) {
						otherChannel.setChannelName("AMAZON");
					}
					String dispatchDate = saleOrders.getDispatchDate() + "";
					if (dispatchDate.equals("null")) {
						otherChannel.setDispatchDate("NA");
					} else {
						otherChannel.setDispatchDate(saleOrders.getDispatchDate() + "");
					}
					otherChannel.setDisplayOrderCode(saleOrders.getDisplayOrderCode());
					Long paymentCod = saleOrders.getCod();
					if (paymentCod == 1) {
						otherChannel.setPaymentMode("COD");
					} else {
						otherChannel.setPaymentMode(ONLINE);
					}
					otherChannel.setTotalPrice(saleOrders.getTotalPrice());
					otherChannel.setTrackingNumber(saleOrders.getTrackingNumber());
					String deliveryDate = saleOrders.getDeliveryTime() + "";
					if (deliveryDate.equals("null")) {
						otherChannel.setDeliveryDate("NA");
					} else {
						otherChannel.setDeliveryDate(saleOrders.getDeliveryTime() + "");
					}
					otherChannel.setOrderDate(saleOrders.getOrderDate() + "");
					otherChannel.setShippingCharges(saleOrders.getShippingCharges());

					String courierName = saleOrders.getShippingProvider();
					if (courierName.equals("Zepo")) {
						otherChannel.setCourierName("ZEPO");
					} else if (courierName.equals("SR-Fedex_Surface")) {
						otherChannel.setCourierName("SR-FEDEX");
					} else if (courierName.equals("self")) {
						otherChannel.setCourierName("SELF");
					} else if (courierName.equals("SR-Delhivery")) {
						otherChannel.setCourierName("SR-DELHIVERY");
					} else if (courierName.equals("")) {
						otherChannel.setCourierName("ATS");
					} else {
						otherChannel.setCourierName(saleOrders.getShippingProvider());
					}
					otherChannel.setSaleOrderItemCode(saleOrders.getSaleOrderItemCode());
					otherChannel.setSaleOrderItemStatus(saleOrders.getSaleOrderItemStatus());
					otherChannel.setZohocreatedDate(saleOrders.getZohocreatedDate());
					otherChannel.setProductName(saleOrders.getItemTypeName());
					LocalDateTime dateTime = LocalDateTime.now();
					otherChannel.setCreatedDate(dateTime);
					otherChannel.setUpdatedDate(dateTime);
					listOtherChannels.add(otherChannel);
				} else {
					for (OtherChannels saleOrders2 : listSaleOrders) {
						String channelName = saleOrders.getChannelName();
						if (channelName.equals("AMAZON_IN")) {
							saleOrders2.setChannelName("AMAZON");
						}
						String dispatchDate = saleOrders.getDispatchDate() + "";
						if (dispatchDate.equals("null")) {
							saleOrders2.setDispatchDate("NA");
						} else {
							saleOrders2.setDispatchDate(saleOrders.getDispatchDate() + "");
						}
						saleOrders2.setDisplayOrderCode(saleOrders.getDisplayOrderCode());
						Long paymentCod = saleOrders.getCod();
						if (paymentCod == 1) {
							saleOrders2.setPaymentMode("COD");
						} else {
							saleOrders2.setPaymentMode(ONLINE);
						}
						saleOrders2.setTotalPrice(saleOrders.getTotalPrice());
						saleOrders2.setTrackingNumber(saleOrders.getTrackingNumber());
						String deliveryDate = saleOrders.getDeliveryTime() + "";
						if (deliveryDate.equals("null")) {
							saleOrders2.setDeliveryDate("NA");
						} else {
							saleOrders2.setDeliveryDate(saleOrders.getDeliveryTime() + "");
						}
						saleOrders2.setOrderDate(saleOrders.getOrderDate() + "");
						saleOrders2.setShippingCharges(saleOrders.getShippingCharges());

						String courierName = saleOrders.getShippingProvider();
						if (courierName.equals("Zepo")) {
							saleOrders2.setCourierName("ZEPO");
						} else if (courierName.equals("SR-Fedex_Surface")) {
							saleOrders2.setCourierName("SR-FEDEX");
						} else if (courierName.equals("self")) {
							saleOrders2.setCourierName("SELF");
						} else if (courierName.equals("SR-Delhivery")) {
							saleOrders2.setCourierName("SR-DELHIVERY");
						} else if (courierName.equals("")) {
							saleOrders2.setCourierName("ATS");
						} else {
							saleOrders2.setCourierName(saleOrders.getShippingProvider());
						}
						saleOrders2.setSaleOrderItemCode(saleOrders.getSaleOrderItemCode());
						saleOrders2.setSaleOrderItemStatus(saleOrders.getSaleOrderItemStatus());
						saleOrders2.setZohocreatedDate(saleOrders.getZohocreatedDate());
						saleOrders2.setProductName(saleOrders.getItemTypeName());
						saleOrders2.setZohocreatedDate(date);
						LocalDateTime dateTime = LocalDateTime.now();
						saleOrders2.setCreatedDate(dateTime);
						saleOrders2.setUpdatedDate(dateTime);
						listOtherChannels.add(saleOrders2);
					}
				}
			}
			otherChannelRepo.saveAll(listOtherChannels);
			response.setData(listOtherChannels);
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS235.name(), EnumTypeForErrorCodes.SCUS235.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}
		return response;
	}

	@Scheduled(cron = "${otherchannel.getflipkart}")
	@Override
	public ServiceResponse<Collection<OtherChannels>> getAllFlipkartchannels() {
		log.info("get all FlipkartChannel  report");
		ServiceResponse<Collection<OtherChannels>> response = new ServiceResponse<>();

		List<OtherChannels> listflipkartChannels = new ArrayList<>();

		try {
			LocalDate date = LocalDate.now();

			List<SaleOrderForShipments> listSaleChannelName = saleOrdersRepo.findByChannelNameAndZohocreatedDate(date);

			for (SaleOrderForShipments saleOrders : listSaleChannelName) {
				OtherChannels flipkartChannel = new OtherChannels();				
				List<OtherChannels> listSaleOrders = otherChannelRepo
						.findBySaleOrderItemCode(saleOrders.getSaleOrderItemCode());
				if (listSaleOrders .isEmpty()) {
					flipkartChannel.setChannelName(saleOrders.getChannelName());
					String dispatchDate = saleOrders.getDispatchDate() + "";
					if (dispatchDate.equals("null")) {
						flipkartChannel.setDispatchDate("NA");
					} else {
						flipkartChannel.setDispatchDate(saleOrders.getDispatchDate() + "");
					}
					flipkartChannel.setDisplayOrderCode(saleOrders.getDisplayOrderCode());
					flipkartChannel.setSaleOrderItemStatus(saleOrders.getSaleOrderItemStatus());
					flipkartChannel.setTotalPrice(saleOrders.getTotalPrice());
					flipkartChannel.setTrackingNumber(saleOrders.getTrackingNumber());
					flipkartChannel.setSaleOrderItemCode(saleOrders.getSaleOrderItemCode());
					String deliveryDate = saleOrders.getDeliveryTime() + "";
					if (deliveryDate.equals("null")) {
						flipkartChannel.setDeliveryDate("NA");
					} else {
						flipkartChannel.setDeliveryDate(saleOrders.getDeliveryTime() + "");
					}

					Long paymentCod = saleOrders.getCod();
					if (paymentCod == 1) {
						flipkartChannel.setPaymentMode("COD");
					} else {
						flipkartChannel.setPaymentMode(ONLINE);
					}
					flipkartChannel.setOrderDate(saleOrders.getOrderDate() + "");
					flipkartChannel.setShippingCharges(saleOrders.getShippingCharges());
					
				String courierName=	saleOrders.getShippingProvider();
				if(courierName.equals("self")) {
					flipkartChannel.setCourierName("E-Kart Logistics");
				}else {
					flipkartChannel.setCourierName(saleOrders.getShippingProvider());
				}
					
					
					
					flipkartChannel.setZohocreatedDate(saleOrders.getZohocreatedDate());
					flipkartChannel.setProductName(saleOrders.getItemTypeName());
					LocalDateTime dateTime = LocalDateTime.now();
					flipkartChannel.setCreatedDate(dateTime);
					flipkartChannel.setUpdatedDate(dateTime);
					listflipkartChannels.add(flipkartChannel);
					otherChannelRepo.saveAll(listflipkartChannels);
					response.setData(listflipkartChannels);
				} else {
					for (OtherChannels saleOrders2 : listSaleOrders) {

					
					saleOrders2.setChannelName(saleOrders.getChannelName());
					String dispatchDate = saleOrders.getDispatchDate() + "";
					if (dispatchDate.equals("null")) {
						saleOrders2.setDispatchDate("NA");
					} else {
						saleOrders2.setDispatchDate(saleOrders.getDispatchDate() + "");
					}
					saleOrders2.setDisplayOrderCode(saleOrders.getDisplayOrderCode());
					saleOrders2.setSaleOrderItemStatus(saleOrders.getSaleOrderItemStatus());
					saleOrders2.setTotalPrice(saleOrders.getTotalPrice());
					saleOrders2.setTrackingNumber(saleOrders.getTrackingNumber());
					saleOrders2.setSaleOrderItemCode(saleOrders.getSaleOrderItemCode());
					String deliveryDate = saleOrders.getDeliveryTime() + "";
					if (deliveryDate.equals("null")) {
						saleOrders2.setDeliveryDate("NA");
					} else {
						flipkartChannel.setDeliveryDate(saleOrders.getDeliveryTime() + "");
					}
					saleOrders2.setOrderDate(saleOrders.getOrderDate() + "");
					saleOrders2.setShippingCharges(saleOrders.getShippingCharges());
					Long paymentType = saleOrders.getCod();
					if (paymentType == 1) {
						saleOrders2.setPaymentMode("COD");
					} else {
						saleOrders2.setPaymentMode(ONLINE);
					}
					String coueierName = saleOrders.getShippingProvider();
					if (coueierName.equals("E-Kart Logistics")) {
						saleOrders2.setCourierName("E-KART");
					} else if (coueierName.equals("self")) {
						saleOrders2.setCourierName("E-KART");
					} else {
						saleOrders2.setCourierName(saleOrders.getShippingProvider());
					}
					saleOrders2.setZohocreatedDate(saleOrders.getZohocreatedDate());
					saleOrders2.setProductName(saleOrders.getItemTypeName());
					LocalDateTime dateTime = LocalDateTime.now();
					saleOrders2.setCreatedDate(dateTime);
					saleOrders2.setUpdatedDate(dateTime);
					saleOrders2.setZohocreatedDate(date);
					listflipkartChannels.add(saleOrders2);
				}
				}

			}
			otherChannelRepo.saveAll(listflipkartChannels);
			response.setData(listflipkartChannels);
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS250.name(), EnumTypeForErrorCodes.SCUS250.errorMsg());

			log.error(utils.toJson(response.getError()), e);
		}
		return response;
	}

}

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
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.RestController;

import com.mbb.mbbplatform.common.EnumTypeForErrorCodes;
import com.mbb.mbbplatform.domain.AmazonFlipkartShipments;
import com.mbb.mbbplatform.domain.OtherChannels;
import com.mbb.mbbplatform.model.ServiceResponse;
import com.mbb.mbbplatform.model.Utils;
import com.mbb.mbbplatform.repos.AmazonFlipkartShipmentsRepository;
import com.mbb.mbbplatform.repos.OtherChannelsRepository;
import com.mbb.mbbplatform.svcs.AmazonFlipkartShipmentsService;



@RestController
@Validated
public class AmazonFlipkartShipmentsServiceImpl implements AmazonFlipkartShipmentsService {

	private static Logger log = LoggerFactory.getLogger(AmazonFlipkartShipmentsServiceImpl.class);
	
	@Autowired
	private OtherChannelsRepository otherChannelRepo;

	@Autowired
	private AmazonFlipkartShipmentsRepository amazonFlipkartShipmentRepo;

	@Autowired
	private Utils utils;

	@Scheduled(cron = "${amazonflipkartshipments.getall}")
	@Override
	public ServiceResponse<Collection<AmazonFlipkartShipments>> getAllAmazonFlipkartchannels() {

		log.info("get All amazon and flipkart shipments reports");
		ServiceResponse<Collection<AmazonFlipkartShipments>> response = new ServiceResponse<>();
		List<AmazonFlipkartShipments> listzeposrshipments = new ArrayList<>();
		try {
			LocalDate createdDate = LocalDate.now();
			List<OtherChannels> amazonFlipkartList = otherChannelRepo.findByZohocreatedDate(createdDate);
			for (OtherChannels amazonFlipkartChannels : amazonFlipkartList) {
				AmazonFlipkartShipments amazonFlipkartShipments = new AmazonFlipkartShipments();

				List<AmazonFlipkartShipments> amazonFlipkartShipmentsExist = amazonFlipkartShipmentRepo
						.findBySaleOrderItemCode(amazonFlipkartChannels.getSaleOrderItemCode());
				if (amazonFlipkartShipmentsExist.isEmpty()) {
					amazonFlipkartShipments.setChannelName(amazonFlipkartChannels.getChannelName());
					amazonFlipkartShipments.setDisplayOrderCode(amazonFlipkartChannels.getDisplayOrderCode());
					amazonFlipkartShipments.setDispatchDate(amazonFlipkartChannels.getDispatchDate());
					amazonFlipkartShipments.setSaleOrderItemStatus(amazonFlipkartChannels.getSaleOrderItemStatus());
					amazonFlipkartShipments.setTotalPrice(amazonFlipkartChannels.getTotalPrice());
					amazonFlipkartShipments.setTrackingNumber(amazonFlipkartChannels.getTrackingNumber());
					amazonFlipkartShipments.setDeliveryDate(amazonFlipkartChannels.getDeliveryDate());
					amazonFlipkartShipments.setPaymentMode(amazonFlipkartChannels.getPaymentMode());
					amazonFlipkartShipments.setOrderDate(amazonFlipkartChannels.getOrderDate());
					amazonFlipkartShipments.setShippingCharges(amazonFlipkartChannels.getShippingCharges());
					amazonFlipkartShipments.setCourierName(amazonFlipkartChannels.getCourierName());
					amazonFlipkartShipments.setSaleOrderItemCode(amazonFlipkartChannels.getSaleOrderItemCode());
					amazonFlipkartShipments.setZohocreatedDate(amazonFlipkartChannels.getZohocreatedDate() + "");
					amazonFlipkartShipments.setSaleOrderItemCode(amazonFlipkartChannels.getSaleOrderItemCode());
					amazonFlipkartShipments.setProductName(amazonFlipkartChannels.getProductName());
					LocalDateTime dateTime = LocalDateTime.now();
					amazonFlipkartShipments.setCreatedDate(dateTime);
					amazonFlipkartShipments.setUpdatedDate(dateTime);
					listzeposrshipments.add(amazonFlipkartShipments);
				} else {
					for (AmazonFlipkartShipments shipment : amazonFlipkartShipmentsExist) {
						shipment.setChannelName(amazonFlipkartChannels.getChannelName());
						shipment.setDisplayOrderCode(amazonFlipkartChannels.getDisplayOrderCode());
						shipment.setDispatchDate(amazonFlipkartChannels.getDispatchDate());
						shipment.setSaleOrderItemStatus(amazonFlipkartChannels.getSaleOrderItemStatus());
						shipment.setTotalPrice(amazonFlipkartChannels.getTotalPrice());
						shipment.setTrackingNumber(amazonFlipkartChannels.getTrackingNumber());
						shipment.setDeliveryDate(amazonFlipkartChannels.getDeliveryDate());
						shipment.setPaymentMode(amazonFlipkartChannels.getPaymentMode());
						shipment.setOrderDate(amazonFlipkartChannels.getOrderDate());
						shipment.setShippingCharges(amazonFlipkartChannels.getShippingCharges());
						shipment.setCourierName(amazonFlipkartChannels.getCourierName());
						shipment.setSaleOrderItemCode(amazonFlipkartChannels.getSaleOrderItemCode());
						shipment.setZohocreatedDate(amazonFlipkartChannels.getZohocreatedDate() + "");
						shipment.setSaleOrderItemCode(amazonFlipkartChannels.getSaleOrderItemCode());
						shipment.setProductName(amazonFlipkartChannels.getProductName());
						LocalDateTime dateTime = LocalDateTime.now();
						shipment.setCreatedDate(dateTime);
						shipment.setUpdatedDate(dateTime);
						listzeposrshipments.add(shipment);
					}
				}
			}
			response.setData(listzeposrshipments);
			amazonFlipkartShipmentRepo.saveAll(listzeposrshipments);

		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS246.name(), EnumTypeForErrorCodes.SCUS246.errorMsg());

			log.error(utils.toJson(response.getError()), e);
		}
		return response;
	}

}

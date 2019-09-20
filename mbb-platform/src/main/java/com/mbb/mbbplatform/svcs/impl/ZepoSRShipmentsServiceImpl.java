package com.mbb.mbbplatform.svcs.impl;

import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Locale;

import javax.validation.constraints.NotNull;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.PropertySource;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.Context;

import com.mbb.mbbplatform.common.EnumTypeForErrorCodes;
import com.mbb.mbbplatform.domain.AmazonFlipkartShipments;
import com.mbb.mbbplatform.domain.AmazonOrders;
import com.mbb.mbbplatform.domain.SRShippingCharge;
import com.mbb.mbbplatform.domain.SaleOrderForShipments;
import com.mbb.mbbplatform.domain.ShipmentsDeliveryAlerts;
import com.mbb.mbbplatform.domain.ShiprocketShipmentReport;
import com.mbb.mbbplatform.domain.User;
import com.mbb.mbbplatform.domain.ZepoSRShipments;
import com.mbb.mbbplatform.domain.ZepoShipments;
import com.mbb.mbbplatform.model.ServiceResponse;
import com.mbb.mbbplatform.model.Utils;
import com.mbb.mbbplatform.repos.AmazonFlipkartShipmentsRepository;
import com.mbb.mbbplatform.repos.AmazonOrdersRepository;
import com.mbb.mbbplatform.repos.SRShippingChargeRepository;
import com.mbb.mbbplatform.repos.SaleOrdersForShipmentsRepository;
import com.mbb.mbbplatform.repos.SaleOrdersRepository;
import com.mbb.mbbplatform.repos.ShipmentsDeliveryAlertsRepository;
import com.mbb.mbbplatform.repos.ShiprocketShipmentReportRepository;
import com.mbb.mbbplatform.repos.ZepoSRShipmentsRepository;
import com.mbb.mbbplatform.repos.ZepoShipmentsRepository;
import com.mbb.mbbplatform.svcs.EmailService;
import com.mbb.mbbplatform.svcs.UserService;
import com.mbb.mbbplatform.svcs.ZepoSRShipmentsService;

@Service
@PropertySource(value = "classpath:application.properties")
public class ZepoSRShipmentsServiceImpl implements ZepoSRShipmentsService {

	private static Logger log = LoggerFactory.getLogger(ZepoSRShipmentsServiceImpl.class);

	@Autowired
	private ShiprocketShipmentReportRepository shiprocketShipmentReportRepo;

	@Autowired
	private ZepoShipmentsRepository zepoShipmentsRepo;

	@Autowired
	private ZepoSRShipmentsRepository zepoSRShipmentsRepo;
	@Autowired
	private SaleOrdersForShipmentsRepository saleOrdersRepo;
	
	@Autowired
	private TemplateEngine templateEngine;

	@Autowired
	private AmazonFlipkartShipmentsRepository amazonFlipkartShipmentsRepo;

	@Autowired
	private ShipmentsDeliveryAlertsRepository shipmentsDeliveryAlertsRepo;

	@Autowired
	private SaleOrdersRepository saleOrdersRepository;
	
	@Autowired
	private UserService userSvc;

	@Autowired
	private AmazonOrdersRepository amazonOrdersRepo;

	@Autowired
	private Utils utils;

	@Autowired
	private EmailService emailsvc;

	@Autowired
	private SRShippingChargeRepository sRShippingChargeRepo;

	public static final String DELAY = "DELAY";
	public static final String DELIVERED = "DELIVERED";
	public static final String CANCELLED = "CANCELLED";
	public static final String INTRANSIT = "IN TRANSIT";
	public static final String PICKUPSCHEDULED = "PICKUP SCHEDULED";
	public static final String RETURNED = "RETURNED";
	public static final String OUTFORDELIVERY = "OUT FOR DELIVERY";
	public static final String ONLINE = "ONLINE";
	public static final String ONLINES = "online";
	public static final String DISPATCHED = "DISPATCHED";
	public static final String NOSTATUS = "NO STATUS";

@Value("${zeposr.delayedMaxDays}")
	private Long delayedMaxDays;
		@Scheduled(cron = "${zeposr.addzepo}")
	@Override
	public ServiceResponse<Collection<ZepoSRShipments>> getAllZepoShipments() {
		log.info("adding All Zepo shipments report");
		ServiceResponse<Collection<ZepoSRShipments>> response = new ServiceResponse<>();

		List<ZepoSRShipments> listzeposrshipments = new ArrayList<>();
		try {

			LocalDate date = LocalDate.now();

			List<ZepoShipments> listzeposhipments = zepoShipmentsRepo.findAll();

			for (ZepoShipments zeposhipments : listzeposhipments) {
				ZepoSRShipments zepoSRShipments = new ZepoSRShipments();
				String requestDate = zeposhipments.getRequestDate();
				ZepoSRShipments listZepoShipments = zepoSRShipmentsRepo.findByRequestDate(requestDate);
				if (listZepoShipments != null) {
					listZepoShipments.setOrderId(zeposhipments.getOrderNumber());
					listZepoShipments.setTrackingNo((zeposhipments.getTrackingNo()));
					listZepoShipments.setOrderTotal(zeposhipments.getPackageInvoiceValue());
					listZepoShipments.setCourierName(zeposhipments.getCourierName());
					listZepoShipments.setZepoRefundStatus(zeposhipments.getRefundStatus());
					String requestDateTime = zeposhipments.getRequestDate();
					requestDateTime = requestDateTime.substring(0, 10);
					listZepoShipments.setZepoShipmentRequestedDate(requestDateTime);

					String actualPickUpDate = zeposhipments.getActualPickupDate();

					if (actualPickUpDate==null||actualPickUpDate.equals("")) {
						listZepoShipments.setDispatchDate("NA");

					} 
					else {
						listZepoShipments.setDispatchDate(zeposhipments.getActualPickupDate());

					}

					String deliveryDate = zeposhipments.getActualDeliveryDate();

					if (deliveryDate==null||deliveryDate.equals("")) {
						listZepoShipments.setDeliveryDate("NA");

					} else {
						listZepoShipments.setDeliveryDate(zeposhipments.getActualDeliveryDate());

					}

					if (listZepoShipments.getDispatchDate().equals("NA")) {
						listZepoShipments.setDeliveryStatus(NOSTATUS);
					}
					else
					{
						listZepoShipments.setDeliveryStatus(DELAY);
					}
					String status = zeposhipments.getTrackingStatus();

					if (status.equals("Delivered")) {

						listZepoShipments.setStatus(DELIVERED);
					} else if (status.equals("Cancelled")) {
						listZepoShipments.setStatus(CANCELLED);
					} else if (status.equals("In Transit")) {
						listZepoShipments.setStatus(INTRANSIT);
					} else if (status.equals("Pickup Scheduled")) {
						listZepoShipments.setStatus(PICKUPSCHEDULED);
					} else if (status.equals("Out For Delivery")) {
						listZepoShipments.setStatus(DISPATCHED);
					} else if (status.equals("Shipment Returned")) {
						listZepoShipments.setStatus(RETURNED);
					} else {
						listZepoShipments.setStatus(status);
					}
					listzeposrshipments.add(listZepoShipments);

					zepoSRShipmentsRepo.saveAll(listzeposrshipments);
					response.setData(listzeposrshipments);
				} else {
					List<ZepoSRShipments> zepoAmazon = zepoSRShipmentsRepo
							.findByOrderIdAndShippingAggregator(zeposhipments.getOrderNumber(), "AMAZON");

					zepoSRShipments.setOrderId(zeposhipments.getOrderNumber());
					zepoSRShipments.setTrackingNo((zeposhipments.getTrackingNo()));
					String status = zeposhipments.getTrackingStatus();
					if (status.equals("Delivered")) {
						zepoSRShipments.setStatus(DELIVERED);
					} else if (status.equals("Cancelled")) {
						zepoSRShipments.setStatus(CANCELLED);
					} else if (status.equals("In Transit")) {
						zepoSRShipments.setStatus(INTRANSIT);
					} else if (status.equals("Pickup Scheduled")) {
						zepoSRShipments.setStatus(PICKUPSCHEDULED);
					} else if (status.equals("Out For Delivery")) {
						zepoSRShipments.setStatus(DISPATCHED);
					} else if (status.equals("Shipment Returned")) {
						zepoSRShipments.setStatus(RETURNED);
					} else {
						zepoSRShipments.setStatus(status);
					}

					String paymentMode = zeposhipments.getPaymentMode();
					if (paymentMode.equals(ONLINES)) {
						zepoSRShipments.setPaymentMode(ONLINE);
					} else {
						zepoSRShipments.setPaymentMode("COD");
					}
					zepoSRShipments.setOrderTotal(zeposhipments.getPackageInvoiceValue());
					zepoSRShipments.setCourierName(zeposhipments.getCourierName());

					String actualPickUpDate = zeposhipments.getActualPickupDate();

					if (actualPickUpDate == null||actualPickUpDate.equals("")) {
						zepoSRShipments.setDispatchDate("NA");

					} else {
						zepoSRShipments.setDispatchDate(zeposhipments.getActualPickupDate());

					}

					String deliveryDate = zeposhipments.getActualDeliveryDate();

					if (deliveryDate == null||deliveryDate.equals("")) {
						zepoSRShipments.setDeliveryDate("NA");

					} else {
						zepoSRShipments.setDeliveryDate(zeposhipments.getActualDeliveryDate());

					}

					if ( zepoSRShipments.getDispatchDate().equals("NA")) {
						zepoSRShipments.setDeliveryStatus(NOSTATUS);
					}
					else
					{
						zepoSRShipments.setDeliveryStatus(DELAY);
					}

					zepoSRShipments.setShippingCost(zeposhipments.getTotalCharge());
					zepoSRShipments.setRequestDate(zeposhipments.getRequestDate());
					zepoSRShipments.setProductName(zeposhipments.getPackageContentDescription());
					zepoSRShipments.setSaleOrderItemCode(zeposhipments.getTrackingNo());
					String requestDateTime = zeposhipments.getRequestDate();
					requestDateTime = requestDateTime.substring(0, 10);
					List<SaleOrderForShipments> saleorders	=saleOrdersRepo.findAllByDisplayOrderCode(zeposhipments.getOrderNumber());
					if(!saleorders.isEmpty())
					{
						
						SaleOrderForShipments saleOrder=	saleorders.get(0);
					zepoSRShipments.setOrderDate(saleOrder.getOrderDate()+"");
						
					}
					zepoSRShipments.setZepoShipmentRequestedDate(requestDateTime);
					zepoSRShipments.setZepoRefundStatus(zeposhipments.getRefundStatus());
					zepoSRShipments.setShippingAggregator("ZEPO");
					zepoSRShipments.setCreatedDate(date);
					LocalDateTime dateTime = LocalDateTime.now();
					zepoSRShipments.setUpdatedDate(dateTime);
					listzeposrshipments.add(zepoSRShipments);

					if (zepoAmazon != null) {
						for (ZepoSRShipments amazonDelete : zepoAmazon) {
							zepoSRShipmentsRepo.delete(amazonDelete);
						}
					}

				}
				zepoSRShipmentsRepo.saveAll(listzeposrshipments);
				response.setData(listzeposrshipments);
			}
		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS231.name(), EnumTypeForErrorCodes.SCUS231.errorMsg());
			log.error(utils.toJson(response.getError()), exception);
		}
		return response;
	}

	@Scheduled(cron = "${zeposr.addsr}")
	@Override
	public ServiceResponse<Collection<ZepoSRShipments>> getAllShiprocketShipments() {
		log.info("adding All shiprocket shipments report");
		ServiceResponse<Collection<ZepoSRShipments>> response = new ServiceResponse<>();

		List<ZepoSRShipments> listzeposrshipments = new ArrayList<>();
		try {
			List<ShiprocketShipmentReport> listShiprocketshipments = shiprocketShipmentReportRepo.findAll();

			for (ShiprocketShipmentReport shiprocketCodOrders : listShiprocketshipments) {
				ZepoSRShipments zepoSRShipments = new ZepoSRShipments();
				List<ZepoSRShipments> zeposhiprocketList = zepoSRShipmentsRepo
						.findByTrackingNo(shiprocketCodOrders.getaWBCode());
				if (zeposhiprocketList.isEmpty()) {
					SRShippingCharge srshippingCharge = sRShippingChargeRepo
							.findByAWBNumber(shiprocketCodOrders.getaWBCode());
					if (srshippingCharge != null) {
						zepoSRShipments.setOrderId(shiprocketCodOrders.getOrderID());
						zepoSRShipments.setTrackingNo((shiprocketCodOrders.getaWBCode()));
						zepoSRShipments.setSaleOrderItemCode(shiprocketCodOrders.getChannelSKU());
						String status = shiprocketCodOrders.getStatus();
						if (status.equals("IN TRANSIT-EN-ROUTE") || status.equals("IN TRANSIT-AT DESTINATION HUB")
								|| status.equals(INTRANSIT) || status.equals("SHIPPED")) {
							zepoSRShipments.setStatus(INTRANSIT);
						} else if (status.equals("RTO DELIVERED")) {
							zepoSRShipments.setStatus(RETURNED);
						} else if (status.equals("CANCELED")) {
							zepoSRShipments.setStatus(CANCELLED);
						}

						else {
							zepoSRShipments.setStatus(shiprocketCodOrders.getStatus());
						}

						String paymentMode = shiprocketCodOrders.getPaymentMethod();
						if (paymentMode.equals("prepaid")) {
							zepoSRShipments.setPaymentMode(ONLINE);
						} else {
							zepoSRShipments.setPaymentMode("COD");
						}
						zepoSRShipments.setOrderTotal(shiprocketCodOrders.getProductPrice());

						String courierName = shiprocketCodOrders.getCourierCompany();
						if (courierName.equals("Fedex SL") || courierName.equals("Fedex Surface")
								|| courierName.equals("Fedex FR") || courierName.equals("Fedex")) {
							zepoSRShipments.setCourierName("FEDEX");
						} else if (courierName.equals("Delhivery") || courierName.equals("Delhivery Surface")
								|| courierName.equals("Delhivery Surface Standard")
								|| courierName.equals("Delhivery Surface Lite")) {
							zepoSRShipments.setCourierName("DELHIVERY");
						} else if (courierName.equals("Ecom Exp")) {
							zepoSRShipments.setCourierName("ECOM EXP");
						} else {
							zepoSRShipments.setCourierName(shiprocketCodOrders.getCourierCompany());
						}
						zepoSRShipments.setDispatchDate(shiprocketCodOrders.getOrderShippedDate());
						zepoSRShipments.setDeliveryDate(shiprocketCodOrders.getOrderDeliveredDate());

						if (zepoSRShipments.getDispatchDate().equals("NA")) {
							zepoSRShipments.setDeliveryStatus(NOSTATUS);

						}
						else
						{
							zepoSRShipments.setDeliveryStatus(DELAY);

						}

						zepoSRShipments.setProductName(shiprocketCodOrders.getProductName());
						zepoSRShipments.setShippingCost(srshippingCharge.getFreightTotalAmount());
						String shiprocketCreatedAt = shiprocketCodOrders.getShiprocketCreatedAt();
						if (shiprocketCreatedAt.length() == 19) {
							shiprocketCreatedAt = shiprocketCreatedAt.substring(0, 9);
						} else {
							shiprocketCreatedAt = shiprocketCreatedAt.substring(0, 8);
						}
						if (shiprocketCreatedAt.length() == 8) {
							DateTimeFormatter formatter = DateTimeFormatter.ofPattern("d MMM yy", Locale.ENGLISH);
							LocalDate date = LocalDate.parse(shiprocketCreatedAt, formatter);
							zepoSRShipments.setOrderDate(date + "");
						} else {
							DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd MMM yy", Locale.ENGLISH);
							LocalDate date = LocalDate.parse(shiprocketCreatedAt, formatter);
							zepoSRShipments.setOrderDate(date + "");
						}
						zepoSRShipments.setShippingAggregator("SHIPROCKET");
						LocalDateTime dateTime = LocalDateTime.now();
						LocalDate date = LocalDate.now();
						zepoSRShipments.setCreatedDate(date);
						zepoSRShipments.setUpdatedDate(dateTime);
						listzeposrshipments.add(zepoSRShipments);
					}
				} else {
					for (ZepoSRShipments shiprocketShipmentReport : zeposhiprocketList) {
						if ( shiprocketShipmentReport.getDispatchDate().equals("NA")) {
							shiprocketShipmentReport.setDeliveryStatus(NOSTATUS);

						}
						else {
							shiprocketShipmentReport.setDeliveryStatus(DELAY);

						}
						listzeposrshipments.add(shiprocketShipmentReport);
						zepoSRShipmentsRepo.saveAll(listzeposrshipments);
						response.setData(listzeposrshipments);
					}
				}
			}
			zepoSRShipmentsRepo.saveAll(listzeposrshipments);
			response.setData(listzeposrshipments);

		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS232.name(), EnumTypeForErrorCodes.SCUS232.errorMsg());
			log.error(utils.toJson(response.getError()), exception);
		}
		return response;
	}

	@Scheduled(cron = "${zeposr.getall}")
	@Override
	public ServiceResponse<Collection<ZepoSRShipments>> getAllzeposrshipments() {
		log.info("getting all zeposrshipments reports");
		ServiceResponse<Collection<ZepoSRShipments>> response = new ServiceResponse<>();
		try {
			Collection<ZepoSRShipments> listzeposrshipments = zepoSRShipmentsRepo.findAll();
			response.setData(listzeposrshipments);
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS233.name(), EnumTypeForErrorCodes.SCUS233.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}
		return response;
	}

	@Override
	public List<ZepoSRShipments> getAllShippingStatusAndShippingAggregator(String status, String shippingAggregator) {
		log.info("get All ShippingStatus and shippingAggregator ");
		List<ZepoSRShipments> response = new ArrayList<>();
		ServiceResponse<List<ZepoSRShipments>> responses = new ServiceResponse<>();

		try {
			if (status.equals("all") && shippingAggregator.equals("all")) {
				response = zepoSRShipmentsRepo.findAll();
			} else if (status.equals("all")) {
				response = zepoSRShipmentsRepo.findByShippingAggregator(shippingAggregator);
			} else if (shippingAggregator.equals("all")) {
				response = zepoSRShipmentsRepo.findByStatus(status);
			} else {
				response = zepoSRShipmentsRepo.findByShippingAggregatorAndStatus(shippingAggregator, status);
			}
			responses.setData(response);
		} catch (Exception e) {
			responses.setError(EnumTypeForErrorCodes.SCUS255.name(), EnumTypeForErrorCodes.SCUS255.errorMsg());
			log.error("Filed to all getting Shipping status and shippingAggregator ", e);
		}
		return response;
	}

	@Scheduled(cron="${zeposr.deliverystatus}")
	@Override
	public ServiceResponse<List<ZepoSRShipments>> getAllzeposrshipmentsByDeliveryStatus() {
		log.info("get All zeposrshipments By Delivery Status ");

		ServiceResponse<List<ZepoSRShipments>> response = new ServiceResponse<>();

		List<ZepoSRShipments> addZepoSRShipments = new ArrayList<>();

		try {
			List<ZepoSRShipments> deliveredItems = zepoSRShipmentsRepo.findAllByStatus();

			for (ZepoSRShipments Items : deliveredItems) {
				List<ZepoSRShipments> zeposrShipmentsExists = zepoSRShipmentsRepo
						.findByTrackingNo(Items.getTrackingNo());
				for (ZepoSRShipments zepoSRShipments : zeposrShipmentsExists) {

					if ((Items.getDispatchDate().length() > 2) && (Items.getDeliveryDate().length() > 2)) {
						DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
						LocalDate dispatchDate = LocalDate.parse((Items.getDispatchDate()).substring(0, 10), formatter);
						LocalDate deliveryDate = LocalDate.parse(Items.getDeliveryDate().substring(0, 10), formatter);

						if (deliveryDate.isEqual(dispatchDate.plusDays(7))
								|| deliveryDate.isBefore(dispatchDate.plusDays(7))) {
							zepoSRShipments.setDeliveryStatus("ONTIME");
						}

						else {
							zepoSRShipments.setDeliveryStatus(DELAY);
						}
						addZepoSRShipments.add(zepoSRShipments);

					}
				}

			}
			zepoSRShipmentsRepo.saveAll(addZepoSRShipments);

			List<ZepoSRShipments> allZepoSRShipments = zepoSRShipmentsRepo.findAll();
			response.setData(allZepoSRShipments);
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS234.name(), EnumTypeForErrorCodes.SCUS234.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}

		return response;
	}

	@Scheduled(cron = "${zeposr.amazonflipkart}")
	@Override
	public ServiceResponse<Collection<ZepoSRShipments>> getAllAmazonFlipkartShipment() {
		log.info("adding All Zepo shipments report");
		ServiceResponse<Collection<ZepoSRShipments>> response = new ServiceResponse<>();

		List<ZepoSRShipments> listzeposrshipments = new ArrayList<>();
		try {
			LocalDate date = LocalDate.now();

		List<AmazonFlipkartShipments> listAmazonFlikartshipments = amazonFlipkartShipmentsRepo.findAllByZohocreatedDate(date);
			for (AmazonFlipkartShipments amazonFlipkartChannels : listAmazonFlikartshipments) {
				ZepoSRShipments zepoSRShipments = new ZepoSRShipments();
				List<ZepoSRShipments> listZepoSrshipments = zepoSRShipmentsRepo
						.findBySaleOrderItemCode(amazonFlipkartChannels.getSaleOrderItemCode());
				if (listZepoSrshipments.isEmpty()) {
					AmazonOrders amazonOrders = amazonOrdersRepo
							.findByAmazonOrderId(amazonFlipkartChannels.getSaleOrderItemCode());
					if (amazonOrders != null) {
						zepoSRShipments.setOrderId(amazonFlipkartChannels.getDisplayOrderCode());
						zepoSRShipments.setTrackingNo(amazonFlipkartChannels.getTrackingNumber());
						zepoSRShipments.setOrderTotal(amazonFlipkartChannels.getTotalPrice());
						zepoSRShipments.setSaleOrderItemCode(amazonFlipkartChannels.getSaleOrderItemCode());

						String status = amazonOrders.getOrderStatus();
						if (status.equals("Shipped")) {
							zepoSRShipments.setStatus(DELIVERED);
						} else {
							zepoSRShipments.setStatus(CANCELLED);
						}
						zepoSRShipments.setShippingAggregator(amazonFlipkartChannels.getChannelName());
						zepoSRShipments.setDispatchDate(amazonFlipkartChannels.getDispatchDate() + "");
						zepoSRShipments.setDeliveryDate(amazonFlipkartChannels.getDeliveryDate() + "");
						if (zepoSRShipments.getDispatchDate().equals("NA")) {
							zepoSRShipments.setDeliveryStatus(NOSTATUS);
						}
						String paymentCod = amazonFlipkartChannels.getPaymentMode();
						if (paymentCod.equals(ONLINE) || paymentCod.equals(ONLINES)) {
							zepoSRShipments.setPaymentMode(ONLINE);
						} else {
							zepoSRShipments.setPaymentMode("COD");
						}
						zepoSRShipments.setOrderDate(amazonFlipkartChannels.getOrderDate());
						zepoSRShipments.setShippingCost(amazonFlipkartChannels.getShippingCharges());
						zepoSRShipments.setCourierName(amazonFlipkartChannels.getCourierName());
						zepoSRShipments.setProductName(amazonFlipkartChannels.getProductName());
						LocalDateTime dateTime = LocalDateTime.now();
						zepoSRShipments.setCreatedDate(date);
						zepoSRShipments.setUpdatedDate(dateTime);
						listzeposrshipments.add(zepoSRShipments);
						zepoSRShipmentsRepo.saveAll(listzeposrshipments);
					} else {
						zepoSRShipments.setOrderId(amazonFlipkartChannels.getDisplayOrderCode());
						zepoSRShipments.setTrackingNo(amazonFlipkartChannels.getTrackingNumber());
						zepoSRShipments.setOrderTotal(amazonFlipkartChannels.getTotalPrice());
						zepoSRShipments.setStatus(amazonFlipkartChannels.getSaleOrderItemStatus());
						zepoSRShipments.setShippingAggregator(amazonFlipkartChannels.getChannelName());
						zepoSRShipments.setDispatchDate(amazonFlipkartChannels.getDispatchDate() + "");

						zepoSRShipments.setDeliveryDate(amazonFlipkartChannels.getDeliveryDate() + "");
						if ( zepoSRShipments.getDispatchDate().equals("NA")) {
							zepoSRShipments.setDeliveryStatus(NOSTATUS);
						}
						else
						{
							zepoSRShipments.setDeliveryStatus(DELAY);
	
						}
						zepoSRShipments.setSaleOrderItemCode(amazonFlipkartChannels.getSaleOrderItemCode());
						String paymentCod = amazonFlipkartChannels.getPaymentMode();
						if (paymentCod.equals(ONLINE) || paymentCod.equals(ONLINES)) {
							zepoSRShipments.setPaymentMode(ONLINE);
						} else {
							zepoSRShipments.setPaymentMode("COD");
						}
						zepoSRShipments.setOrderDate(amazonFlipkartChannels.getOrderDate());
						zepoSRShipments.setShippingCost(amazonFlipkartChannels.getShippingCharges());
						zepoSRShipments.setCourierName(amazonFlipkartChannels.getCourierName());
						zepoSRShipments.setProductName(amazonFlipkartChannels.getProductName());
						LocalDateTime dateTime = LocalDateTime.now();
						zepoSRShipments.setCreatedDate(date);
						zepoSRShipments.setUpdatedDate(dateTime);
						listzeposrshipments.add(zepoSRShipments);
						zepoSRShipmentsRepo.saveAll(listzeposrshipments);
					}

				} else {
					for (ZepoSRShipments zepoSRShipments2 : listZepoSrshipments) {
						zepoSRShipments2.setDispatchDate(amazonFlipkartChannels.getDispatchDate() + "");

						zepoSRShipments2.setDeliveryDate(amazonFlipkartChannels.getDeliveryDate() + "");
						if (zepoSRShipments2.getDispatchDate().equals("NA")) {
							zepoSRShipments2.setDeliveryStatus(NOSTATUS);
						}
						else {
							zepoSRShipments2.setDeliveryStatus(DELAY);

						}
						zepoSRShipments2.setOrderId(amazonFlipkartChannels.getDisplayOrderCode());
						zepoSRShipments2.setTrackingNo(amazonFlipkartChannels.getTrackingNumber());
						zepoSRShipments2.setOrderTotal(amazonFlipkartChannels.getTotalPrice());
						zepoSRShipments2.setStatus(amazonFlipkartChannels.getSaleOrderItemStatus());
						zepoSRShipments2.setShippingAggregator(amazonFlipkartChannels.getChannelName());
						zepoSRShipments2.setSaleOrderItemCode(amazonFlipkartChannels.getSaleOrderItemCode());
					     zepoSRShipments2.setPaymentMode(amazonFlipkartChannels.getPaymentMode());
					     zepoSRShipments2.setOrderDate(amazonFlipkartChannels.getOrderDate());
					     zepoSRShipments2.setShippingCost(amazonFlipkartChannels.getShippingCharges());
					     zepoSRShipments2.setCourierName(amazonFlipkartChannels.getCourierName());
					     zepoSRShipments2.setProductName(amazonFlipkartChannels.getProductName());
						LocalDateTime dateTime = LocalDateTime.now();
						zepoSRShipments2.setUpdatedDate(dateTime);
						listzeposrshipments.add(zepoSRShipments2);
						zepoSRShipmentsRepo.saveAll(listzeposrshipments);
						response.setData(listzeposrshipments);
					}
				}
			}
			response.setData(listzeposrshipments);

		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS251.name(), EnumTypeForErrorCodes.SCUS251.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}
		return response;
	}

	@Override
	public ServiceResponse<Collection<ZepoSRShipments>> findShipmentsReportInBetweenDates(
			@NotNull @PathVariable String startDate, @NotNull @PathVariable String endDate) {
		log.info("find cod details in between the dates");
		ServiceResponse<Collection<ZepoSRShipments>> response = new ServiceResponse<>();
		try {
			Collection<ZepoSRShipments> codlist = zepoSRShipmentsRepo.getShipmentsReports(startDate, endDate);
			response.setData(codlist);
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS253.name(), EnumTypeForErrorCodes.SCUS253.errorMsg());

			log.error(utils.toJson(response.getError()), e);
		}
		return response;
	}

	@Override
	public ServiceResponse<Collection<ZepoSRShipments>> findTrackingDetails(@NotNull String trackingNo) {
		log.info("find the tracking details");
		ServiceResponse<Collection<ZepoSRShipments>> response = new ServiceResponse<>();
		try {
			Collection<ZepoSRShipments> listTrackingNumber = zepoSRShipmentsRepo.findByTrackingNo(trackingNo);
			response.setData(listTrackingNumber);
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS254.name(), EnumTypeForErrorCodes.SCUS254.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}
		return response;
	}

	@Scheduled(cron = "${zeposr.deliveryalerts}")
	@Override
	public ServiceResponse<List<ShipmentsDeliveryAlerts>> getDeliveryAlertsZepoSRShipments() {
		log.info("get delivery alerts orers list");
		ServiceResponse<List<ShipmentsDeliveryAlerts>> response = new ServiceResponse<>();
		LocalDateTime dateTime = LocalDateTime.now();
		LocalDate todayDate = LocalDate.now();
		String time = new SimpleDateFormat("hh:mm aa").format(new java.util.Date().getTime());

		String templateName = "email/alerts";
		SimpleDateFormat myFormat = new SimpleDateFormat("yyyy-MM-dd");

		SimpleDateFormat myNewFormat = new SimpleDateFormat("dd-MM-yyyy");

		Context context = new Context();

		try {
			LocalDateTime startDate = LocalDateTime
					.of(todayDate.getYear(), todayDate.getMonth(), todayDate.getDayOfMonth(), 0, 0, 0).minusDays(delayedMaxDays);
			List<ZepoSRShipments> zepoSRShipmentslist = zepoSRShipmentsRepo.findByStatusAndDispatchDate("DISPATCHED",
					startDate);

			List<ShipmentsDeliveryAlerts> shipmentsList = new ArrayList<>();

			for (ZepoSRShipments listdeliveryAlerts : zepoSRShipmentslist) {
				ShipmentsDeliveryAlerts deliveryAlerts = new ShipmentsDeliveryAlerts();
				String dispatchdate = listdeliveryAlerts.getDispatchDate().substring(0, 9);

				String reformattedStr = myNewFormat.format(myFormat.parse(dispatchdate));

				deliveryAlerts.setOrderId(listdeliveryAlerts.getOrderId());
				deliveryAlerts.setTrackingNo(listdeliveryAlerts.getTrackingNo());
				deliveryAlerts.setStatus(listdeliveryAlerts.getStatus());
				deliveryAlerts.setDispatchDate(reformattedStr);
				deliveryAlerts.setCreatedDate(dateTime);
				deliveryAlerts.setUpdatedDate(dateTime);
				shipmentsList.add(deliveryAlerts);

			}
			if (!shipmentsList.isEmpty()) {
				context.setVariable("shipmentsList", shipmentsList);
				String body = templateEngine.process(templateName, context);

				ServiceResponse<Collection<User>> users = userSvc.getUsersByRole("DISPATCHER");
				Collection<User> usersData = users.getData();

				for (User user : usersData) {
					if (user.isNotificationStatus()) {
						String emailId = user.getEmail();
						String subject = "MBB-Platform- Delayed Delivery Alerts on "
								+ myNewFormat.format(myFormat.parse(todayDate + "")) + " at " + time;

						emailsvc.notifyUserByEmail(emailId, "Below are the Delayed Delivery Orders\n\n\n\n" + body,
								subject);
					}
				}
			}

			shipmentsDeliveryAlertsRepo.saveAll(shipmentsList);
			response.setData(shipmentsList);
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS252.name(), EnumTypeForErrorCodes.SCUS252.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}
		return response;

	}

	@Override
	public List<ZepoSRShipments> findShipmentsDetailsInBetweenDates(@NotNull @RequestParam String startDate,
			@NotNull @RequestParam String endDate, @NotNull @RequestParam String shippingAggregator,
			@NotNull @RequestParam String status) {
		log.info("find shipments details in between dates");
		ServiceResponse<List<ZepoSRShipments>> responses = new ServiceResponse<>();
		List<ZepoSRShipments> response = new ArrayList<>();
		try {

			if (status.equals("all") && shippingAggregator.equals("all")) {
				response = zepoSRShipmentsRepo.findByStartDateAndEndDate(startDate, endDate);
			} else if (status.equals("all")) {
				response = zepoSRShipmentsRepo.findByStartDateAndEndDateAndShippingAggregator(startDate, endDate,
						shippingAggregator);
			} else if (shippingAggregator.equals("all")) {
				response = zepoSRShipmentsRepo.findByStartDateAndEndDateAndStatus(startDate, endDate, status);
			} else {
				response = zepoSRShipmentsRepo.getShipmentsDetails(startDate, endDate, shippingAggregator, status);
			}
			responses.setData(response);
		} catch (Exception e) {
			responses.setError(EnumTypeForErrorCodes.SCUS256.name(), EnumTypeForErrorCodes.SCUS256.errorMsg());
			log.error("failed to zeposrshipments", e);
		}
		return response;
	}

	@Override
	public List<ZepoSRShipments> findShipmentsDetailsInBetweenDatesAndPaymentMode(
			@NotNull @RequestParam String startDate, @NotNull @RequestParam String endDate,
			@NotNull @RequestParam String shippingAggregator, @NotNull @RequestParam String status,
			@NotNull @RequestParam String paymentMode) {
		log.info("Find Shipments Details In Between Dates");

		ServiceResponse<List<ZepoSRShipments>> responses = new ServiceResponse<>();

		List<ZepoSRShipments> response = new ArrayList<>();
		try {

			if (status.equals("all") && shippingAggregator.equals("all") && paymentMode.equals("all")) {
				response = zepoSRShipmentsRepo.findByStartDateAndEndDate(startDate, endDate);
			} else if (status.equals("all") && shippingAggregator.equals("all")) {
				response = zepoSRShipmentsRepo.findByStartDateAndEndDateAndPaymentMode(startDate, endDate, paymentMode);

			} else if (status.equals("all") && paymentMode.equals("all")) {
				response = zepoSRShipmentsRepo.findByStartDateAndEndDateAndShippingAggregator(startDate, endDate,
						shippingAggregator);

			} else if (shippingAggregator.equals("all") && paymentMode.equals("all")) {
				response = zepoSRShipmentsRepo.findByStartDateAndEndDateAndStatus(startDate, endDate, status);
			} else if (status.equals("all")) {
				response = zepoSRShipmentsRepo.findByStartDateAndEndDateAndShippingAggregatorAndPaymentMode(startDate,
						endDate, shippingAggregator, paymentMode);
			} else if (shippingAggregator.equals("all")) {
				response = zepoSRShipmentsRepo.findByStartDateAndEndDateAndStatusAndPaymentMode(startDate, endDate,
						status, paymentMode);
			} else if (paymentMode.equals("all")) {
				response = zepoSRShipmentsRepo.findByStartDateAndEndDateAndShippingAggregatorAndStatus(startDate,
						endDate, shippingAggregator, status);
			} else {
				response = zepoSRShipmentsRepo.getShipmentsDetailsWithPaymentMode(startDate, endDate,
						shippingAggregator, status, paymentMode);
			}
			responses.setData(response);
		} catch (Exception e) {
			responses.setError(EnumTypeForErrorCodes.SCUS256.name(), EnumTypeForErrorCodes.SCUS256.errorMsg());
			log.error("failed to find zeposr shipments between dates ", e);
		}
		return response;
	}

}

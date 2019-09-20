package com.mbb.mbbplatform.svcs.impl;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import javax.validation.constraints.NotNull;

import org.json.JSONArray;
import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.mbb.mbbplatform.common.EnumTypeForErrorCodes;
import com.mbb.mbbplatform.domain.InvoiceDetails;
import com.mbb.mbbplatform.domain.SaleOrders;
import com.mbb.mbbplatform.domain.ZepoSRShipments;
import com.mbb.mbbplatform.model.ServiceResponse;
import com.mbb.mbbplatform.model.Utils;
import com.mbb.mbbplatform.repos.InvoiceDetailsRepository;
import com.mbb.mbbplatform.repos.SaleOrdersRepository;
import com.mbb.mbbplatform.repos.ZepoSRShipmentsRepository;
import com.mbb.mbbplatform.svcs.InvoiceDetailsService;

@RestController
@SuppressWarnings("unchecked")

public class InvoiceDetailsServiceImpl implements InvoiceDetailsService {

	private static Logger log = LoggerFactory.getLogger(InvoiceDetailsServiceImpl.class);

	@Autowired
	private Utils utils;

	@Autowired
	private InvoiceDetailsRepository invoiceDetailsRepository;

	@Autowired
	private SaleOrdersRepository saleOrdersRepository;

	@Autowired
	private ZepoSRShipmentsRepository zepoSRShipmentsRepository;

	private static final String SKUCODE = "skucode";

	@Override
	public ServiceResponse<List<InvoiceDetails>> addInvoiceDetails(List<SaleOrders> saleOrdersList) {
		log.info("adding invoice details");
		ServiceResponse<List<InvoiceDetails>> response = new ServiceResponse<>();

		List<InvoiceDetails> listOfInvoiceDetails = new ArrayList<>();

		try {

			for (SaleOrders saleOrders : saleOrdersList) {

				InvoiceDetails existingInvoice=	invoiceDetailsRepository.findByInvoiceNumberAndSaleOrderItemCode(saleOrders.getDisplayOrderCode(),
						saleOrders.getSaleOrderItemCode());
				if(existingInvoice!=null) {
					
					
					existingInvoice.setChannelName(saleOrders.getChannelName());

					existingInvoice.setInvoiceNumber(saleOrders.getDisplayOrderCode());

					existingInvoice.setOrderDate(saleOrders.getOrderDate());

					existingInvoice.setStatus(saleOrders.getSaleOrderItemStatus());

					if (saleOrders.getCod() == 1) {
						existingInvoice.setPaymentMode("COD");
					} else {
						existingInvoice.setPaymentMode("ONLINE");
					}

					existingInvoice.setSaleOrderItemCode(saleOrders.getSaleOrderItemCode());

					existingInvoice.setAwbNumber(saleOrders.getTrackingNumber());

					listOfInvoiceDetails.add(existingInvoice);
				}else {

				InvoiceDetails invoiceDetails = new InvoiceDetails();

				invoiceDetails.setChannelName(saleOrders.getChannelName());

				invoiceDetails.setInvoiceNumber(saleOrders.getDisplayOrderCode());

				invoiceDetails.setOrderDate(saleOrders.getOrderDate());

				invoiceDetails.setStatus(saleOrders.getSaleOrderItemStatus());

				if (saleOrders.getCod() == 1) {
					invoiceDetails.setPaymentMode("COD");
				} else {
					invoiceDetails.setPaymentMode("ONLINE");
				}

				invoiceDetails.setSaleOrderItemCode(saleOrders.getSaleOrderItemCode());

				invoiceDetails.setAwbNumber(saleOrders.getTrackingNumber());

				listOfInvoiceDetails.add(invoiceDetails);
			}
			}
			invoiceDetailsRepository.saveAll(listOfInvoiceDetails);
			updateOrderStatus();
			response.setData(listOfInvoiceDetails);

		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS801.name(), EnumTypeForErrorCodes.SCUS801.errorMsg());
			log.error(utils.toJson(response.getError()), exception);

		}

		return response;
	}

	public ServiceResponse<List<InvoiceDetails>> updateOrderStatus() {
		log.info("update order status");

		ServiceResponse<List<InvoiceDetails>> response = new ServiceResponse<>();

		try {
			List<InvoiceDetails> listOfInvoiceDetails = invoiceDetailsRepository.findAll();
			List<InvoiceDetails> invoiceDetailsList = new ArrayList<>();

			for (InvoiceDetails invoiceDetails : listOfInvoiceDetails) {
				String orderNumber = invoiceDetails.getInvoiceNumber();

				List<ZepoSRShipments> detailsOfZepoSRShipments = zepoSRShipmentsRepository.findByOrderId(orderNumber);
				if (!detailsOfZepoSRShipments.isEmpty()) {
					for (ZepoSRShipments shipments : detailsOfZepoSRShipments) {
						invoiceDetails.setStatus(shipments.getStatus());
					}
				} else {
					invoiceDetails.setStatus("DISPATCHED");
				}
				invoiceDetailsList.add(invoiceDetails);
				invoiceDetailsRepository.saveAll(invoiceDetailsList);

			}

			response.setData(invoiceDetailsList);
		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS802.name(), EnumTypeForErrorCodes.SCUS802.errorMsg());
			log.error(utils.toJson(response.getError()), exception);

		}
		return response;

	}

	public ServiceResponse<List<InvoiceDetails>> getAllInVoiceDetails() {
		log.info("getting all invoice Details");

		ServiceResponse<List<InvoiceDetails>> response = new ServiceResponse<>();

		try {
			List<InvoiceDetails> listOfInvoiceDetails = invoiceDetailsRepository.findAll();
			response.setData(listOfInvoiceDetails);
		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS802.name(), EnumTypeForErrorCodes.SCUS802.errorMsg());
			log.error(utils.toJson(response.getError()), exception);

		}
		return response;

	}

	@Override
	public ServiceResponse<List<org.json.simple.JSONObject>> getAllInVoiceDetails(
			@NotNull @PathVariable String startDate, @PathVariable String endDate,
			@NotNull @PathVariable String paymentMode, @NotNull @PathVariable String status,
			@NotNull @PathVariable String channel) {
		log.info("getting all invoice Details by filters");

		ServiceResponse<List<org.json.simple.JSONObject>> response = new ServiceResponse<>();
		List<InvoiceDetails> invoiceDetailsList = new ArrayList<>();
		List<org.json.simple.JSONObject> jsonListList = new ArrayList<>();

		try {
			String endDate1 = LocalDate.parse(endDate).plusDays(1).toString();

			if (status.equals("All") && channel.equals("All") && paymentMode.equals("All")) {
				invoiceDetailsList = invoiceDetailsRepository.findInvoiceDetails(startDate, endDate1);
			} else if (status.equals("All") && channel.equals("All")) {
				invoiceDetailsList = invoiceDetailsRepository.findByStartDateAndEndDateAndPaymentMode(startDate,
						endDate1, paymentMode);
			} else if (channel.equals("All") && paymentMode.equals("All")) {
				invoiceDetailsList = invoiceDetailsRepository.findByStartDateAndEndDateAndStatus(startDate, endDate1,
						status);

			} else if (paymentMode.equals("All") && status.equals("All")) {

				invoiceDetailsList = invoiceDetailsRepository.findByStartDateAndEndDateAndChannel(startDate, endDate1,
						channel);
			} else if (status.equals("All")) {
				invoiceDetailsList = invoiceDetailsRepository.findByStartDateAndEndDateAndChannelNameAndPaymentMode(
						startDate, endDate1, channel, paymentMode);
			} else if (channel.equals("All")) {
				invoiceDetailsList = invoiceDetailsRepository
						.findByStartDateAndEndDateAndStatusAndPaymentMode(startDate, endDate1, status, paymentMode);
			} else if (paymentMode.equals("All")) {
				invoiceDetailsList = invoiceDetailsRepository.findByStartDateAndEndDateAndStatusAndChannel(startDate,
						endDate1, status, channel);
			} else {
				invoiceDetailsList = invoiceDetailsRepository
						.findByStartDateAndEndDateAndStatusAndChannelAndPaymentMode(startDate, endDate1, paymentMode,
								status, channel);

			}
			for (InvoiceDetails invoiceDetails : invoiceDetailsList) {
				List<SaleOrders> saleOrders = saleOrdersRepository
						.findByDisplayOrderCode(invoiceDetails.getInvoiceNumber());
				org.json.simple.JSONObject obj = new org.json.simple.JSONObject();
				obj.put("id", invoiceDetails.getId());

				obj.put("invoiceNumber", invoiceDetails.getInvoiceNumber());

				obj.put("awbNumber", invoiceDetails.getAwbNumber());

				obj.put("channelName", invoiceDetails.getChannelName());

				obj.put("paymentMode", invoiceDetails.getPaymentMode());

				obj.put("status", invoiceDetails.getStatus());

				obj.put("orderDate", invoiceDetails.getOrderDate());

				obj.put("totalPrice", saleOrders.get(0).getTotalPrice());

				jsonListList.add(obj);

			}
			response.setData(jsonListList);

		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS802.name(), EnumTypeForErrorCodes.SCUS802.errorMsg());
			log.error(utils.toJson(response.getError()), exception);

		}
		return response;

	}

	public ServiceResponse<String> getDetailsByInvoiceNumber(@NotNull @PathVariable String invoiceId) {
		log.info("getting Details By InvoiceNumber");
		ServiceResponse<String> response = new ServiceResponse<>();

		try {
			JSONArray obj = new JSONArray();
			List<JSONObject> listOfInvoiceDetails = new ArrayList<>();

			List<InvoiceDetails> listOfInvoiceDetails1 = invoiceDetailsRepository.findByInvoiceNumber(invoiceId);

			InvoiceDetails invoiceDetails = listOfInvoiceDetails1.get(0);
			JSONObject customerDetails = new JSONObject();
			List<SaleOrders> saleOrders = saleOrdersRepository
					.findByDisplayOrderCode(invoiceDetails.getInvoiceNumber());
			customerDetails.put("Name", saleOrders.get(0).getBillingAddressName());
			customerDetails.put("emial", saleOrders.get(0).getNotificationEmail());
			customerDetails.put("Phone", saleOrders.get(0).getNotificationMobile());
			customerDetails.put("location", saleOrders.get(0).getShippingAddressCity());
			obj.put(customerDetails);

			for (InvoiceDetails invoiceDetails1 : listOfInvoiceDetails1) {
				JSONObject obj1 = new JSONObject();
				SaleOrders saleOrders1 = null;
				if (invoiceDetails1.getChannelName().equals("CUSTOM")
						|| invoiceDetails1.getChannelName().equals("SHOPCLUES")) {

					saleOrders1 = saleOrdersRepository.findBySaleOrderItemCodeAndDisplayOrderCode(
							invoiceDetails1.getSaleOrderItemCode(), invoiceDetails1.getInvoiceNumber());

				} else {
					saleOrders1 = saleOrdersRepository.findBySaleOrderItemCode(invoiceDetails1.getSaleOrderItemCode());
				}
				obj1.put(SKUCODE, saleOrders1.getItemSKUCode());

				obj1.put("productName", saleOrders1.getItemTypeName());

				obj1.put("dispatchDate", saleOrders1.getDispatchDate());

				obj1.put("orderDate", saleOrders1.getOrderDate());

				obj1.put("totalPrice", saleOrders1.getTotalPrice());

				obj1.put("IGST", saleOrders1.getIgst());

				obj1.put("SGST", saleOrders1.getSgst());

				obj1.put("UTGST", saleOrders1.getUtgst());

				obj1.put("shippingCharges", saleOrders1.getShippingCharges());

				obj1.put("shippingprovider", saleOrders1.getShippingProvider());

				obj1.put("paymentInstrument", saleOrders1.getPaymentInstrument());

				obj1.put("gstTaxTypeCode", saleOrders1.getGstTaxTypeCode());

				obj1.put("quantity", 1);
				listOfInvoiceDetails.add(obj1);
			}
			List<JSONObject> listOfInvoiceDetails2 = new ArrayList<>();

			int count = 1;

			for (int i = 0; i < listOfInvoiceDetails.size(); i++) {
				int j = i + 1;
				if (i == 0) {
					listOfInvoiceDetails2.add(listOfInvoiceDetails.get(i));
				}
				if (j < listOfInvoiceDetails.size()) {

					if ((listOfInvoiceDetails.get(i).get(SKUCODE)).equals((listOfInvoiceDetails.get(j).get(SKUCODE)))) {
						for (JSONObject jsonObject : listOfInvoiceDetails2) {

							if ((jsonObject.get(SKUCODE)).equals(listOfInvoiceDetails.get(j).get(SKUCODE))) {

								listOfInvoiceDetails2.remove(jsonObject);
								listOfInvoiceDetails2.add(listOfInvoiceDetails.get(j).put("quantity", ++count));

							}

						}
					} else {
						listOfInvoiceDetails2.add(listOfInvoiceDetails.get(j));

					}
				}

			}
			obj.put(listOfInvoiceDetails2);

			String obj3 = obj.toString();
			response.setData(obj3);
		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS802.name(), EnumTypeForErrorCodes.SCUS802.errorMsg());
			log.error(utils.toJson(response.getError()), exception);

		}
		return response;
	}

}

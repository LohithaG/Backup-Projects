package com.mbb.mbbplatform.svcs.impl;

import java.io.FileReader;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.RestController;

import com.mbb.mbbplatform.common.EnumTypeForErrorCodes;
import com.mbb.mbbplatform.domain.SaleOrderForShipments;
import com.mbb.mbbplatform.model.ServiceResponse;
import com.mbb.mbbplatform.model.Utils;
import com.mbb.mbbplatform.repos.SaleOrdersForShipmentsRepository;
import com.mbb.mbbplatform.svcs.SaleOdersForShipmentsService;
import com.opencsv.CSVReader;
@RestController
@Validated
public class SaleOrdersForShipmentsServiceImpl implements SaleOdersForShipmentsService {

	private static Logger log = LoggerFactory.getLogger(SaleOrdersServiceImpl.class);

	
	@Autowired
	private SaleOrdersForShipmentsRepository saleOrdersRepo;


	@Autowired
	private Utils utils;
	public static final String PATTERN = "yyyy-MM-dd HH:mm:ss";

	@Scheduled(cron = "${SaleOrderForShipments.addSaleOrders}")
	@Override
	public ServiceResponse<List<SaleOrderForShipments>> addSaleOrders() {
		log.info("Adding Sale Orders For Shipments");
		ServiceResponse<List<SaleOrderForShipments>> response = new ServiceResponse<>();
		try {
			DateTimeFormatter dateFormatter = DateTimeFormatter.ofPattern("ddMMyyyy");
			LocalDateTime dateTime = LocalDateTime.now();

			LocalDate date = LocalDate.now();
		
			String formattedDate = date.format(dateFormatter);
			
			CSVReader reader = new CSVReader(new FileReader("mbb-reports/Sale+Orders_"+formattedDate+".csv"), ',');

			List<SaleOrderForShipments> saleOrders = new ArrayList<>();

			String[] record = null;
			Iterator<String[]> rowIterator = reader.iterator();

			rowIterator.toString();

			while ((record = reader.readNext()) != null) {

				SaleOrderForShipments orders = new SaleOrderForShipments();
				orders.setSaleOrderItemCode(record[0]);

				orders.setDisplayOrderCode(record[1]);

				orders.setReversePickupCode(record[2]);

				if (record[3] != null && record[3].length() > 0) {

					DateTimeFormatter formatter = DateTimeFormatter.ofPattern(PATTERN);

					orders.setReversePickupCreatedDate(LocalDateTime.parse(record[3], formatter));

				}
				orders.setReversePickupReason(record[4]);

				orders.setNotificationEmail(record[5]);

				orders.setNotificationMobile(record[6]);

				if (record[7] != null && record[7].length() > 0) {

					orders.setRequireCustomization(Boolean.parseBoolean(record[7]));
				}

				if (record[8] != null && record[8].length() > 0) {
					orders.setCod(Long.parseLong(record[8]));
				}

				if (record[9] != null && record[9].length() > 0) {
					orders.setShippingAddressId(Long.parseLong(record[9]));
				}

				orders.setCategory(record[10]);

				orders.setInvoiceCode(record[11]);

				if (record[12] != null && record[12].length() > 0) {

					DateTimeFormatter formatter = DateTimeFormatter.ofPattern(PATTERN);

					orders.setInvoiceCreated(LocalDateTime.parse(record[12], formatter));

				}

				orders.setShippingAddressName(record[13]);
				orders.setShippingAddressLine1(record[14]);
				orders.setShippingAddressLine2(record[15]);
				orders.setShippingAddressCity(record[16]);
				orders.setShippingAddressState(record[17]);
				orders.setShippingAddressCountry(record[18]);
				orders.setShippingAddressPincode(record[19]);
				orders.setShippingAddressPhone(record[20]);
				if (record[12] != null && record[12].length() > 0) {
					orders.setBillingAddressId(Long.parseLong(record[21]));
				}
				orders.setBillingAddressName(record[22]);
				orders.setBillingAddressLine1(record[23]);
				orders.setBillingAddressLine2(record[24]);
				orders.setBillingAddressCity(record[25]);
				orders.setBillingAddressState(record[26]);
				orders.setBillingAddressCountry(record[27]);
				orders.setBillingAddressPincode(record[28]);
				orders.setBillingAddressPhone(record[29]);
				orders.setShippingMethod(record[30]);
				orders.setItemSKUCode(record[31]);
				orders.setChannelProductId(record[32]);
				orders.setItemTypeName(record[33]);
				orders.setItemTypeColor(record[34]);
				orders.setItemTypeSize(record[35]);
				orders.setItemTypeBrand(record[36]);
				orders.setChannelName(record[37]);
				if (record[38] != null && record[38].length() > 0) {

					orders.setSkuRequireCustomization(Boolean.parseBoolean(record[38]));
				}
				if (record[39] != null && record[39].length() > 0) {
					orders.setGiftWrap(Boolean.parseBoolean(record[39]));
				}
				orders.setGiftMessage(record[40]);
				orders.setHsnCode(record[41]);

				if (record[42] != null && record[42].length() > 0) {
					orders.setMrp(Double.parseDouble(record[42]));
				}
				if (record[43] != null && record[43].length() > 0) {

					orders.setTotalPrice(Double.parseDouble(record[43]));
				}
				if (record[44] != null && record[44].length() > 0) {

					orders.setSellingPrice(Double.parseDouble(record[44]));
				}
				if (record[45] != null && record[45].length() > 0) {

					orders.setCostPrice(Double.parseDouble(record[45]));
				}
				if (record[46] != null && record[46].length() > 0) {

					orders.setPrepaidAmount(Boolean.parseBoolean(record[46]));
				}
				if (record[47] != null && record[47].length() > 0) {

					orders.setSubtotal(Double.parseDouble(record[47]));
				}
				if (record[48] != null && record[48].length() > 0) {

					orders.setDiscount(Double.parseDouble(record[48]));
				}
				if (record[49] != null && record[49].length() > 0) {

					orders.setGstTaxTypeCode(Double.parseDouble(record[49]));
				}
				if (record[50] != null && record[50].length() > 0) {

					orders.setCgst(Double.parseDouble(record[50]));
				}
				if (record[51] != null && record[51].length() > 0) {

					orders.setIgst(Double.parseDouble(record[51]));
				}
				if (record[52] != null && record[52].length() > 0) {

					orders.setSgst(Double.parseDouble(record[52]));
				}
				if (record[53] != null && record[53].length() > 0) {

					orders.setUtgst(Double.parseDouble(record[53]));
				}
				if (record[54] != null && record[54].length() > 0) {

					orders.setCess(Double.parseDouble(record[54]));
				}
				if (record[55] != null && record[55].length() > 0) {

					orders.setCgstRate(Double.parseDouble(record[55]));
				}
				if (record[56] != null && record[56].length() > 0) {

					orders.setIgstRate(Double.parseDouble(record[56]));
				}
				if (record[57] != null && record[57].length() > 0) {

					orders.setSgstRate(Double.parseDouble(record[57]));
				}
				if (record[58] != null && record[58].length() > 0) {

					orders.setUtgstRate(Double.parseDouble(record[58]));
				}
				if (record[59] != null && record[59].length() > 0) {

					orders.setCessRate(Double.parseDouble(record[59]));
				}
				if (record[60] != null && record[60].length() > 0) {

					orders.setTaxPercentage(Double.parseDouble(record[60]));
				}
				if (record[61] != null && record[61].length() > 0) {

					orders.setTaxValue(Double.parseDouble(record[61]));
				}
				orders.setVoucherCode(record[62]);
				if (record[63] != null && record[63].length() > 0) {

					orders.setShippingCharges(Double.parseDouble(record[63]));
				}
				if (record[64] != null && record[64].length() > 0) {

					orders.setShippingMethodCharges(Double.parseDouble(record[64]));
				}
				if (record[65] != null && record[65].length() > 0) {

					orders.setCodServiceCharges(Double.parseDouble(record[65]));
				}
				if (record[66] != null && record[66].length() > 0) {

					orders.setGiftWrapCharges(Double.parseDouble(record[66]));
				}
				if (record[67] != null && record[67].length() > 0) {

					orders.setPacketNumber(Integer.parseInt(record[67]));
				}
				if (record[68] != null && record[68].length() > 0) {
					DateTimeFormatter formatter = DateTimeFormatter.ofPattern(PATTERN);

					orders.setOrderDate(LocalDate.parse(record[68], formatter));
				}
				orders.setSaleOrderCode(record[69]);
				if (record[70] != null && record[70].length() > 0) {
					orders.setOnHold(Boolean.parseBoolean(record[70]));
				}
				orders.setSaleOrderStatus(record[71]);
				if (record[72] != null && record[72].length() > 0) {
					orders.setPriority(Integer.parseInt(record[72]));
				}
				orders.setCurrency(record[73]);
				orders.setCurrencyConversionRate(record[74]);
				orders.setSaleOrderItemStatus(record[75]);
				orders.setCancellationReason(record[76]);
				orders.setShippingProvider(record[77]);
				orders.setShippingArrangedBy(record[78]);
				orders.setShippingPackageCode(record[79]);
				if (record[80] != null && record[80].length() > 0) {
					DateTimeFormatter formatter = DateTimeFormatter.ofPattern(PATTERN);

					orders.setShippingPackageCreationDate(LocalDateTime.parse(record[68], formatter));
				}

				orders.setShippingPackageStatusCode(record[81]);
				orders.setShippingPackageType(record[82]);
				if (record[83] != null && record[83].length() > 0) {
					orders.setLength(Double.parseDouble(record[83]));
				}
				if (record[84] != null && record[84].length() > 0) {
					orders.setWidth(Double.parseDouble(record[84]));
				}
				if (record[85] != null && record[85].length() > 0) {
					orders.setHeight(Double.parseDouble(record[85]));
				}
				if (record[86] != null && record[86].length() > 0) {
					DateTimeFormatter formatter = DateTimeFormatter.ofPattern(PATTERN);

					orders.setDeliveryTime(LocalDateTime.parse(record[86], formatter));
				}
				orders.setTrackingNumber(record[87]);
				if (record[88] != null && record[88].length() > 0) {
					DateTimeFormatter formatter = DateTimeFormatter.ofPattern(PATTERN);

					orders.setDispatchDate(LocalDateTime.parse(record[88], formatter));
				}
				orders.setFacility(record[89]);
				if (record[90] != null && record[90].length() > 0) {
					DateTimeFormatter formatter = DateTimeFormatter.ofPattern(PATTERN);

					orders.setDispatchDate(LocalDateTime.parse(record[90], formatter));
				}
				orders.setReturnReason(record[91]);
				if (record[92] != null && record[92].length() > 0) {
					DateTimeFormatter formatter = DateTimeFormatter.ofPattern(PATTERN);

					orders.setCreated(LocalDateTime.parse(record[92], formatter));
				}
				if (record[93] != null && record[93].length() > 0) {
					DateTimeFormatter formatter = DateTimeFormatter.ofPattern(PATTERN);

					orders.setUpdated(LocalDateTime.parse(record[93], formatter));
				}
				orders.setCombinationIdentifier(record[94]);
				orders.setCombinationDescription(record[95]);
				if (record[96] != null && record[96].length() > 0) {
					orders.setTransferPrice(Double.parseDouble(record[96]));
				}
				orders.setItemCode(record[97]);
				orders.setImei(record[98]);
				if (record[99] != null && record[99].length() > 0) {
					orders.setWeight(Double.parseDouble(record[99]));
				}
				orders.setGstIn(record[100]);
				orders.setCustomerGSTIN(record[101]);
				orders.setTin(record[102]);
				orders.setPaymentInstrument(record[103]);
				if (record[104] != null && record[104].length() > 0) {
					orders.setChannelShipping(Boolean.parseBoolean(record[104]));
				}
				orders.setItemDetails(record[105]);

				orders.setCreatedDate(dateTime);
				orders.setUpdatedDate(dateTime);
				orders.setZohocreatedDate(date);

				LocalDate fileCreatedDate = LocalDate.now();
				orders.setDateInCsvfile(fileCreatedDate);

				saleOrdersRepo.save(orders);

				saleOrders.add(orders);
				
			}

			response.setData(saleOrders);

			reader.close();
		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS021.name(), EnumTypeForErrorCodes.SCUS021.errorMsg());
			log.error(utils.toJson(response.getError()), exception);
		}

		return response;
	}



}

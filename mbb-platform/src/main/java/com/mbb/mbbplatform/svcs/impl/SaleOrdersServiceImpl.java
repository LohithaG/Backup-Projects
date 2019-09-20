package com.mbb.mbbplatform.svcs.impl;

import java.io.FileReader;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.mbb.mbbplatform.common.EnumTypeForErrorCodes;
import com.mbb.mbbplatform.domain.SaleOrders;
import com.mbb.mbbplatform.model.ServiceResponse;
import com.mbb.mbbplatform.model.Utils;
import com.mbb.mbbplatform.repos.SaleOrdersRepository;
import com.mbb.mbbplatform.svcs.InvoiceDetailsService;
import com.mbb.mbbplatform.svcs.SaleOrdersService;
import com.opencsv.CSVReader;

@RestController
@Validated
public class SaleOrdersServiceImpl implements SaleOrdersService {

	private static Logger log = LoggerFactory.getLogger(SaleOrdersServiceImpl.class);

	@Value("${zoho.api}")
	private String zohoApi;

	@Value("${zoho.saleorder.api}")
	private String apiForZoho;

	@Value("${zoho.createsale.authorization}")
	private String authorization;

	@Value("${zoho.getrecords.authorization}")
	private String recordAuthorization;

	@Autowired
	private SaleOrdersRepository saleOrdersRepo;

	@Autowired
	private InvoiceDetailsService invoiceDetailsSvc;

	@Autowired
	private Utils utils;
	public static final String PATTERN = "yyyy-MM-dd HH:mm:ss";

	@Scheduled(cron = "${saleorders.add}")
	@Override
	public ServiceResponse<List<SaleOrders>> addSaleOrders() {
		log.info("adding sale orders report");
		ServiceResponse<List<SaleOrders>> response = new ServiceResponse<>();
		try {
			DateTimeFormatter dateFormatter = DateTimeFormatter.ofPattern("ddMMyyyy");
			LocalDateTime dateTime = LocalDateTime.now();

			LocalDate date = LocalDate.now();

			String formattedDate = date.format(dateFormatter);
	CSVReader reader = new CSVReader(new FileReader("mbb-reports/Sale+Orders_" + formattedDate + ".csv"), ',');


			List<SaleOrders> saleOrders = new ArrayList<>();

			String[] record = null;
			Iterator<String[]> rowIterator = reader.iterator();

			rowIterator.toString();

			while ((record = reader.readNext()) != null) {

				SaleOrders existingSaleOrder = saleOrdersRepo.findBySaleOrderItemCodeAndDisplayOrderCode(record[0],
						record[1]);
				if (existingSaleOrder != null) {

					existingSaleOrder.setReversePickupCode(record[2]);

					if (record[3] != null && record[3].length() > 0) {

						DateTimeFormatter formatter = DateTimeFormatter.ofPattern(PATTERN);

						existingSaleOrder.setReversePickupCreatedDate(LocalDateTime.parse(record[3], formatter));

					}
					existingSaleOrder.setReversePickupReason(record[4]);

					existingSaleOrder.setNotificationEmail(record[5]);

					existingSaleOrder.setNotificationMobile(record[6]);

					if (record[7] != null && record[7].length() > 0) {

						existingSaleOrder.setRequireCustomization(Boolean.parseBoolean(record[7]));
					}

					if (record[8] != null && record[8].length() > 0) {
						existingSaleOrder.setCod(Long.parseLong(record[8]));
					}

					if (record[9] != null && record[9].length() > 0) {
						existingSaleOrder.setShippingAddressId(Long.parseLong(record[9]));
					}

					existingSaleOrder.setCategory(record[10]);

					existingSaleOrder.setInvoiceCode(record[11]);

					if (record[12] != null && record[12].length() > 0) {

						DateTimeFormatter formatter = DateTimeFormatter.ofPattern(PATTERN);

						existingSaleOrder.setInvoiceCreated(LocalDateTime.parse(record[12], formatter));

					}

					existingSaleOrder.setShippingAddressName(record[13]);
					existingSaleOrder.setShippingAddressLine1(record[14]);
					existingSaleOrder.setShippingAddressLine2(record[15]);
					existingSaleOrder.setShippingAddressCity(record[16]);
					existingSaleOrder.setShippingAddressState(record[17]);
					existingSaleOrder.setShippingAddressCountry(record[18]);
					existingSaleOrder.setShippingAddressPincode(record[19]);
					existingSaleOrder.setShippingAddressPhone(record[20]);
					if (record[12] != null && record[12].length() > 0) {
						existingSaleOrder.setBillingAddressId(Long.parseLong(record[21]));
					}
					existingSaleOrder.setBillingAddressName(record[22]);
					existingSaleOrder.setBillingAddressLine1(record[23]);
					existingSaleOrder.setBillingAddressLine2(record[24]);
					existingSaleOrder.setBillingAddressCity(record[25]);
					existingSaleOrder.setBillingAddressState(record[26]);
					existingSaleOrder.setBillingAddressCountry(record[27]);
					existingSaleOrder.setBillingAddressPincode(record[28]);
					existingSaleOrder.setBillingAddressPhone(record[29]);
					existingSaleOrder.setShippingMethod(record[30]);
					existingSaleOrder.setItemSKUCode(record[31]);
					existingSaleOrder.setChannelProductId(record[32]);
					existingSaleOrder.setItemTypeName(record[33]);
					existingSaleOrder.setItemTypeColor(record[34]);
					existingSaleOrder.setItemTypeSize(record[35]);
					existingSaleOrder.setItemTypeBrand(record[36]);
					existingSaleOrder.setChannelName(record[37]);
					if (record[38] != null && record[38].length() > 0) {

						existingSaleOrder.setSkuRequireCustomization(Boolean.parseBoolean(record[38]));
					}
					if (record[39] != null && record[39].length() > 0) {
						existingSaleOrder.setGiftWrap(Boolean.parseBoolean(record[39]));
					}
					existingSaleOrder.setGiftMessage(record[40]);
					existingSaleOrder.setHsnCode(record[41]);

					if (record[42] != null && record[42].length() > 0) {
						existingSaleOrder.setMrp(Double.parseDouble(record[42]));
					}
					if (record[43] != null && record[43].length() > 0) {

						existingSaleOrder.setTotalPrice(Double.parseDouble(record[43]));
					}
					if (record[44] != null && record[44].length() > 0) {

						existingSaleOrder.setSellingPrice(Double.parseDouble(record[44]));
					}
					if (record[45] != null && record[45].length() > 0) {

						existingSaleOrder.setCostPrice(Double.parseDouble(record[45]));
					}
					if (record[46] != null && record[46].length() > 0) {

						existingSaleOrder.setPrepaidAmount(Boolean.parseBoolean(record[46]));
					}
					if (record[47] != null && record[47].length() > 0) {

						existingSaleOrder.setSubtotal(Double.parseDouble(record[47]));
					}
					if (record[48] != null && record[48].length() > 0) {

						existingSaleOrder.setDiscount(Double.parseDouble(record[48]));
					}
					if (record[49] != null && record[49].length() > 0) {

						existingSaleOrder.setGstTaxTypeCode(Double.parseDouble(record[49]));
					}
					if (record[50] != null && record[50].length() > 0) {

						existingSaleOrder.setCgst(Double.parseDouble(record[50]));
					}
					if (record[51] != null && record[51].length() > 0) {

						existingSaleOrder.setIgst(Double.parseDouble(record[51]));
					}
					if (record[52] != null && record[52].length() > 0) {

						existingSaleOrder.setSgst(Double.parseDouble(record[52]));
					}
					if (record[53] != null && record[53].length() > 0) {

						existingSaleOrder.setUtgst(Double.parseDouble(record[53]));
					}
					if (record[54] != null && record[54].length() > 0) {

						existingSaleOrder.setCess(Double.parseDouble(record[54]));
					}
					if (record[55] != null && record[55].length() > 0) {

						existingSaleOrder.setCgstRate(Double.parseDouble(record[55]));
					}
					if (record[56] != null && record[56].length() > 0) {

						existingSaleOrder.setIgstRate(Double.parseDouble(record[56]));
					}
					if (record[57] != null && record[57].length() > 0) {

						existingSaleOrder.setSgstRate(Double.parseDouble(record[57]));
					}
					if (record[58] != null && record[58].length() > 0) {

						existingSaleOrder.setUtgstRate(Double.parseDouble(record[58]));
					}
					if (record[59] != null && record[59].length() > 0) {

						existingSaleOrder.setCessRate(Double.parseDouble(record[59]));
					}
					if (record[60] != null && record[60].length() > 0) {

						existingSaleOrder.setTaxPercentage(Double.parseDouble(record[60]));
					}
					if (record[61] != null && record[61].length() > 0) {

						existingSaleOrder.setTaxValue(Double.parseDouble(record[61]));
					}
					existingSaleOrder.setVoucherCode(record[62]);
					if (record[63] != null && record[63].length() > 0) {

						existingSaleOrder.setShippingCharges(Double.parseDouble(record[63]));
					}
					if (record[64] != null && record[64].length() > 0) {

						existingSaleOrder.setShippingMethodCharges(Double.parseDouble(record[64]));
					}
					if (record[65] != null && record[65].length() > 0) {

						existingSaleOrder.setCodServiceCharges(Double.parseDouble(record[65]));
					}
					if (record[66] != null && record[66].length() > 0) {

						existingSaleOrder.setGiftWrapCharges(Double.parseDouble(record[66]));
					}
					if (record[67] != null && record[67].length() > 0) {

						existingSaleOrder.setPacketNumber(Integer.parseInt(record[67]));
					}
					if (record[68] != null && record[68].length() > 0) {
						DateTimeFormatter formatter = DateTimeFormatter.ofPattern(PATTERN);

						existingSaleOrder.setOrderDate(LocalDate.parse(record[68], formatter));
					}
					existingSaleOrder.setSaleOrderCode(record[69]);
					if (record[70] != null && record[70].length() > 0) {
						existingSaleOrder.setOnHold(Boolean.parseBoolean(record[70]));
					}
					existingSaleOrder.setSaleOrderStatus(record[71]);
					if (record[72] != null && record[72].length() > 0) {
						existingSaleOrder.setPriority(Integer.parseInt(record[72]));
					}
					existingSaleOrder.setCurrency(record[73]);
					existingSaleOrder.setCurrencyConversionRate(record[74]);
					existingSaleOrder.setSaleOrderItemStatus(record[75]);
					existingSaleOrder.setCancellationReason(record[76]);
					existingSaleOrder.setShippingProvider(record[77]);
					existingSaleOrder.setShippingArrangedBy(record[78]);
					existingSaleOrder.setShippingPackageCode(record[79]);
					if (record[80] != null && record[80].length() > 0) {
						DateTimeFormatter formatter = DateTimeFormatter.ofPattern(PATTERN);

						existingSaleOrder.setShippingPackageCreationDate(LocalDateTime.parse(record[68], formatter));
					}

					existingSaleOrder.setShippingPackageStatusCode(record[81]);
					existingSaleOrder.setShippingPackageType(record[82]);
					if (record[83] != null && record[83].length() > 0) {
						existingSaleOrder.setLength(Double.parseDouble(record[83]));
					}
					if (record[84] != null && record[84].length() > 0) {
						existingSaleOrder.setWidth(Double.parseDouble(record[84]));
					}
					if (record[85] != null && record[85].length() > 0) {
						existingSaleOrder.setHeight(Double.parseDouble(record[85]));
					}
					if (record[86] != null && record[86].length() > 0) {
						DateTimeFormatter formatter = DateTimeFormatter.ofPattern(PATTERN);

						existingSaleOrder.setDeliveryTime(LocalDateTime.parse(record[86], formatter));
					}
					existingSaleOrder.setTrackingNumber(record[87]);
					if (record[88] != null && record[88].length() > 0) {
						DateTimeFormatter formatter = DateTimeFormatter.ofPattern(PATTERN);

						existingSaleOrder.setDispatchDate(LocalDateTime.parse(record[88], formatter));
					}
					existingSaleOrder.setFacility(record[89]);
					if (record[90] != null && record[90].length() > 0) {
						DateTimeFormatter formatter = DateTimeFormatter.ofPattern(PATTERN);

						existingSaleOrder.setDispatchDate(LocalDateTime.parse(record[90], formatter));
					}
					existingSaleOrder.setReturnReason(record[91]);
					if (record[92] != null && record[92].length() > 0) {
						DateTimeFormatter formatter = DateTimeFormatter.ofPattern(PATTERN);

						existingSaleOrder.setCreated(LocalDateTime.parse(record[92], formatter));
					}
					if (record[93] != null && record[93].length() > 0) {
						DateTimeFormatter formatter = DateTimeFormatter.ofPattern(PATTERN);

						existingSaleOrder.setUpdated(LocalDateTime.parse(record[93], formatter));
					}
					existingSaleOrder.setCombinationIdentifier(record[94]);
					existingSaleOrder.setCombinationDescription(record[95]);
					if (record[96] != null && record[96].length() > 0) {
						existingSaleOrder.setTransferPrice(Double.parseDouble(record[96]));
					}
					existingSaleOrder.setItemCode(record[97]);
					existingSaleOrder.setImei(record[98]);
					if (record[99] != null && record[99].length() > 0) {
						existingSaleOrder.setWeight(Double.parseDouble(record[99]));
					}
					existingSaleOrder.setGstIn(record[100]);
					existingSaleOrder.setCustomerGSTIN(record[101]);
					existingSaleOrder.setTin(record[102]);
					existingSaleOrder.setPaymentInstrument(record[103]);
					if (record[104] != null && record[104].length() > 0) {
						existingSaleOrder.setChannelShipping(Boolean.parseBoolean(record[104]));
					}
					existingSaleOrder.setItemDetails(record[105]);

					existingSaleOrder.setCreatedDate(dateTime);
					existingSaleOrder.setUpdatedDate(dateTime);
					existingSaleOrder.setZohocreatedDate(date);

					LocalDate fileCreatedDate = LocalDate.now();
					existingSaleOrder.setDateInCsvfile(fileCreatedDate);

					saleOrdersRepo.save(existingSaleOrder);
					saleOrders.add(existingSaleOrder);

				} else {

					SaleOrders orders = new SaleOrders();

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
			}

			response.setData(saleOrders);
			invoiceDetailsSvc.addInvoiceDetails(saleOrders);

			reader.close();
		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS021.name(), EnumTypeForErrorCodes.SCUS021.errorMsg());
			log.error(utils.toJson(response.getError()), exception);
		}

		return response;
	}

	@Override
	public String getRecordsByTemplate() {

		log.info("getting unicommerce sale orders from zoho crm");

		RestTemplate restTemplate = new RestTemplate();

		HttpHeaders headers = new HttpHeaders();
		headers.set("Authorization", recordAuthorization);

		headers.setContentType(MediaType.APPLICATION_JSON);
		HttpEntity<String> entity = new HttpEntity<>(headers);
		return restTemplate.exchange(apiForZoho, HttpMethod.GET, entity, String.class).getBody();

	}

	@Override
	public String createSale() {

		log.info("adding sale orders into zoho crm");
		String result = "";

		LocalDate createdDate = LocalDate.now();

		List<SaleOrders> dBsalesOrderList = saleOrdersRepo.findByZohocreatedDate(createdDate);

		JSONObject mainObj = new JSONObject();
		List<JSONObject> listJSONObj = new ArrayList<>();
		try {

			for (SaleOrders sOrder : dBsalesOrderList) {
				JSONObject sale = new JSONObject();

				sale.put("Last_Name", sOrder.getDisplayOrderCode());
				sale.put("Item_Type_Name", sOrder.getItemTypeName());

				sale.put("Channel_Name", sOrder.getChannelName());
				sale.put("Sale_Order_Status", sOrder.getSaleOrderStatus());
				sale.put("Shipping_Package_Status_Code", sOrder.getShippingPackageStatusCode());

				sale.put("Total_Price", sOrder.getTotalPrice());
				sale.put("Selling_Price", sOrder.getSellingPrice());

				sale.put("Shipping_Address_Line_1", sOrder.getShippingAddressLine1());
				sale.put("Shipping_Address_Line_2", sOrder.getShippingAddressLine2());
				sale.put("Shipping_Address_City", sOrder.getShippingAddressCity());
				sale.put("Shipping_Address_State", sOrder.getShippingAddressState());
				sale.put("Shipping_Address_Country", sOrder.getShippingAddressCountry());
				sale.put("Shipping_Address_Pincode", sOrder.getShippingAddressPincode());

				sale.put("Billing_Address_Line_1", sOrder.getBillingAddressLine1());
				sale.put("Billing_Address_Line_2", sOrder.getBillingAddressLine2());
				sale.put("Billing_Address_City", sOrder.getBillingAddressCity());
				sale.put("Billing_Address_State", sOrder.getBillingAddressState());
				sale.put("Billing_Address_Country", sOrder.getBillingAddressCountry());
				sale.put("Billing_Address_Pincode", sOrder.getBillingAddressPincode());

				sale.put("Shipping_Address_Name", sOrder.getShippingAddressName());
				sale.put("Billing_Address_Name", sOrder.getBillingAddressName());
				sale.put("Item_SKU_Code", sOrder.getItemSKUCode());

				sale.put("Subtotal", sOrder.getSubtotal());
				sale.put("GST_Tax_Type_Code", sOrder.getGstTaxTypeCode());
				sale.put("CGST", sOrder.getCgst());
				sale.put("IGST", sOrder.getIgst());
				sale.put("SGST", sOrder.getSgst());
				sale.put("Sale_Order_Code", sOrder.getSaleOrderCode());

				sale.put("Notification_Mobile", sOrder.getNotificationMobile());
				sale.put("Notification_Email", sOrder.getNotificationEmail());
				sale.put("Tracking_Number", sOrder.getTrackingNumber());

				sale.put("Created_Date", sOrder.getZohocreatedDate());

				sale.put("Order_Date", sOrder.getOrderDate());

				sale.put("Name", sOrder.getChannelName());

				sale.put("Payment_Instrument", sOrder.getPaymentInstrument());

				sale.put("Shipping_Charges", sOrder.getShippingCharges());

				listJSONObj.add(sale);
			}

			mainObj.put("data", listJSONObj);

			RestTemplate restTemplate = new RestTemplate();

			HttpHeaders headers = new HttpHeaders();
			headers.set("Authorization", authorization);
			headers.setContentType(MediaType.APPLICATION_JSON);

			HttpEntity<String> entity = new HttpEntity<>(mainObj.toString(), headers);
			restTemplate.getMessageConverters().add(new MappingJackson2HttpMessageConverter());

			result = restTemplate.exchange(zohoApi, HttpMethod.POST, entity, String.class).getBody();
		} catch (Exception e) {

			log.info("errors");
		}
		return result;
	}

}

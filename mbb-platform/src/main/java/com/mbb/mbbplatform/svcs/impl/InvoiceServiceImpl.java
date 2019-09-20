package com.mbb.mbbplatform.svcs.impl;

import java.io.FileReader;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.mbb.mbbplatform.common.EnumTypeForErrorCodes;
import com.mbb.mbbplatform.domain.Invoice;
import com.mbb.mbbplatform.model.ServiceResponse;
import com.mbb.mbbplatform.model.Utils;
import com.mbb.mbbplatform.repos.InvoiceRepository;
import com.mbb.mbbplatform.svcs.InvoiceService;
import com.opencsv.CSVReader;

@RestController
public class InvoiceServiceImpl implements InvoiceService {
	private static Logger log = LoggerFactory.getLogger(InvoiceServiceImpl.class);

	@Autowired
	private InvoiceRepository invoiceRepo;

	@Autowired
	private Utils utils;

	@Override
	public ServiceResponse<List<Invoice>> addInvoices() {
		log.info("adding Invoices report ");
		ServiceResponse<List<Invoice>> response = new ServiceResponse<>();
		try {
			CSVReader reader = new CSVReader(new FileReader("mbb-reports/Invoice_30112018.csv"), ',');

			List<Invoice> invoicesList = new ArrayList<>();

			String[] record = null;
			Iterator<String[]> rowIterator = reader.iterator();

			rowIterator.toString();
			while ((record = reader.readNext()) != null) {

				Invoice invoice = new Invoice();
				invoice.setOrderNo(record[0]);
				invoice.setInvoiceNo(record[1]);
				String disPatchDateInString = record[4];

				DateTimeFormatter dtf = null;
				dtf = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
				LocalDateTime disPatchDate = LocalDateTime.parse(disPatchDateInString, dtf);
				invoice.setInvoiceCreatedDate(disPatchDate);

				String ChannelInvoiceCreatedDate = record[5];

				if (!ChannelInvoiceCreatedDate.trim().equals("")) {
					dtf = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
					LocalDateTime disPatchDate1 = LocalDateTime.parse(ChannelInvoiceCreatedDate, dtf);
					invoice.setChannelInvoiceCreatedDate(disPatchDate1);
				}

				invoice.setShippingPackageCode(record[2]);
				invoice.setShippingPackageStatusCode(record[3]);
				invoice.setCustomerName(record[6]);
				invoice.setSkuCode(record[7]);
				invoice.setSkuName(record[8]);
				if (record[9] != null && record[9].length() > 0) {
					invoice.setQuantity(Double.parseDouble(record[9]));
				}
				if (record[10] != null && record[10].length() > 0) {
					invoice.setInvoiceTax(Double.parseDouble(record[10]));
				}
				if (record[11] != null && record[11].length() > 0) {
					invoice.setInvoiceTotal(Double.parseDouble(record[11]));
				}
				invoice.setInvoiceCancelled(record[12]);
				if (!record[13].trim().equals("")) {
					invoice.setHsnCode(Double.parseDouble(record[13]));
				}
				if (record[14] != null && record[14].length() > 0) {
					invoice.setGstTaxTypeCode(Long.parseLong(record[14]));
				}
				if (record[15] != null && record[15].length() > 0) {
					invoice.setCgst(Double.parseDouble(record[15]));
				}
				if (record[16] != null && record[16].length() > 0) {
					invoice.setIgst(Double.parseDouble(record[16]));
				}
				if (record[17] != null && record[17].length() > 0) {
					invoice.setSgst(Double.parseDouble(record[17]));
				}
				if (record[18] != null && record[18].length() > 0) {
					invoice.setUtgst(Double.parseDouble(record[18]));
				}
				if (record[19] != null && record[19].length() > 0) {
					invoice.setCess(Double.parseDouble(record[19]));
				}
				if (record[20] != null && record[20].length() > 0) {
					invoice.setCgstRate(Double.parseDouble(record[20]));
				}
				if (record[21] != null && record[21].length() > 0) {
					invoice.setIgstRate(Double.parseDouble(record[21]));
				}
				if (record[22] != null && record[22].length() > 0) {
					invoice.setSgstRate(Double.parseDouble(record[22]));
				}
				if (record[23] != null && record[23].length() > 0) {
					invoice.setUtgstRate(Double.parseDouble(record[23]));
				}
				if (record[24] != null && record[24].length() > 0) {
					invoice.setCessRate(Double.parseDouble(record[24]));
				}
				if (record[25] != null && record[25].length() > 0) {
					invoice.setShippingCharge(Double.parseDouble(record[25]));
				}
				if (record[26] != null && record[26].length() > 0) {
					invoice.setCodCharge(Double.parseDouble(record[26]));
				}

				invoice.setChannelName(record[27]);
				LocalDateTime dateTime = LocalDateTime.now();
				invoice.setCreatedDate(dateTime);
				invoice.setUpdatedDate(dateTime);
				LocalDateTime datetime = LocalDateTime.now();
				invoice.setDateInCSvfile(datetime);
				invoiceRepo.save(invoice);
				invoicesList.add(invoice);

			}

			response.setData(invoicesList);

			reader.close();
		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS013.name(), EnumTypeForErrorCodes.SCUS013.errorMsg());
			 log.error(utils.toJson(response.getError()), exception);
		}

		return response;
	}

}

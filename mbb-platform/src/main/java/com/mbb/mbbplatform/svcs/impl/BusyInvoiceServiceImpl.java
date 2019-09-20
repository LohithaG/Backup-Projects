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
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.RestController;

import com.mbb.mbbplatform.common.EnumTypeForErrorCodes;
import com.mbb.mbbplatform.domain.BusyInvoices;
import com.mbb.mbbplatform.model.ServiceResponse;
import com.mbb.mbbplatform.model.Utils;
import com.mbb.mbbplatform.repos.BusyInvoicesRepository;
import com.mbb.mbbplatform.svcs.BusyInvoicesService;
import com.opencsv.CSVReader;

@RestController
@Validated
public class BusyInvoiceServiceImpl implements BusyInvoicesService {

	private static Logger log = LoggerFactory.getLogger(BusyInvoiceServiceImpl.class);

	@Autowired
	private BusyInvoicesRepository busyInvoiceRepo;
	
	@Autowired
	private Utils utils;
	
	@Override
	public ServiceResponse<List<BusyInvoices>> addBackInvoice() {
		
		log.info("adding busyinvoices report");

		ServiceResponse<List<BusyInvoices>> response = new ServiceResponse<>();

		try {
			CSVReader reader = new CSVReader(new FileReader("mbb-reports/Busy+Invoices_30112018.csv"), ',');

			List<BusyInvoices> busyInvoicesList = new ArrayList<>();

			String[] record = null;
			Iterator<String[]> rowIterator = reader.iterator();

			rowIterator.toString();

			while ((record = reader.readNext()) != null) {

				BusyInvoices busyInvoices = new BusyInvoices();
				String dateIn = record[1];
				DateTimeFormatter dtf = null;
				LocalDate date = null;
				dtf = DateTimeFormatter.ofPattern("dd-MM-yyyy");
				date = LocalDate.parse(dateIn, dtf);
				busyInvoices.setDate(date);

				busyInvoices.setSeries(record[0]);

				busyInvoices.setBillNo(record[2]);
				busyInvoices.setSaleType(record[3]);
				busyInvoices.setAccount(record[4]);
				busyInvoices.setMcName(record[5]);
				busyInvoices.setItemName(record[6]);
				if (record[7] != null && record[7].length() > 0) {
					busyInvoices.setQuantity(Double.parseDouble(record[7]));
				}
				busyInvoices.setUnit(record[8]);
				if (record[9] != null && record[9].length() > 0) {
					busyInvoices.setPrice(Double.parseDouble(record[9]));
				}
				if (record[10] != null && record[10].length() > 0) {
					busyInvoices.setAmount(Double.parseDouble(record[10]));
				}
				busyInvoices.setOrderNo(record[11]);
				busyInvoices.setBrockerName(record[12]);
				busyInvoices.setCustName(record[13]);
				busyInvoices.setCustAdd(record[14]);
				busyInvoices.setCustCity(record[15]);
				busyInvoices.setCustPhone(record[16]);
				busyInvoices.setItemId(record[17]);
				busyInvoices.setAwb(record[18]);
				busyInvoices.setCourier(record[19]);
				if (record[20] != null && record[20].length() > 0) {
					busyInvoices.setCgst(Double.parseDouble(record[20]));
				}
				if (record[21] != null && record[21].length() > 0) {
					busyInvoices.setSgst(Double.parseDouble(record[21]));
				}
				if (record[22] != null && record[22].length() > 0) {
					busyInvoices.setUtgst(Double.parseDouble(record[22]));
				}
				if (record[23] != null && record[23].length() > 0) {
					busyInvoices.setIgst(Double.parseDouble(record[23]));
				}
				if (record[24] != null && record[24].length() > 0) {
					busyInvoices.setCompensationCess(Double.parseDouble(record[24]));
				}
				if (record[25] != null && record[25].length() > 0) {
					busyInvoices.setCgstRate(Double.parseDouble(record[25]));
				}
				if (record[26] != null && record[26].length() > 0) {
					busyInvoices.setIgstRate(Double.parseDouble(record[26]));
				}
				if (record[27] != null && record[27].length() > 0) {
					busyInvoices.setSgstRate(Double.parseDouble(record[27]));
				}
				if (record[28] != null && record[28].length() > 0) {
					busyInvoices.setUtgstRate(Double.parseDouble(record[28]));
				}
				if (record[29] != null && record[29].length() > 0) {
					busyInvoices.setCessRate(Double.parseDouble(record[29]));
				}
				if (record[30] != null && record[30].length() > 0) {
					busyInvoices.setSaleTax(Double.parseDouble(record[30]));
				}
				if (record[31] != null && record[31].length() > 0) {
					busyInvoices.setSurCharge(Double.parseDouble(record[31]));
				}
				if (record[32] != null && record[32].length() > 0) {
					busyInvoices.setPercentageOfAdditionalTax(Double.parseDouble(record[32]));
				}
				if (record[33] != null && record[33].length() > 0) {
					busyInvoices.setAmtOfAdditionalTax(Double.parseDouble(record[33]));
				}
				busyInvoices.setFreightAndForwardingCharges(record[34]);
				if (record[35] != null && record[35].length() > 0) {
					busyInvoices.setShippingCharges(Double.parseDouble(record[35]));
				}
				if (record[36] != null && record[36].length() > 0) {
					busyInvoices.setImei(Long.parseLong(record[36]));
				}
				busyInvoices.setChannelLedgerName(record[37]);
				busyInvoices.setItemDetails(record[38]);
				LocalDateTime dateTime = LocalDateTime.now();
				busyInvoices.setCreatedDate(dateTime);
				busyInvoices.setUpdatedDate(dateTime);
				LocalDateTime datetime = LocalDateTime.now();
				busyInvoices.setDateInCSvfile(datetime);
				busyInvoiceRepo.save(busyInvoices);
				busyInvoicesList.add(busyInvoices);

			}

			response.setData(busyInvoicesList);

			reader.close();
		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS002.name(), EnumTypeForErrorCodes.SCUS002.errorMsg());
			 log.error(utils.toJson(response.getError()), exception);
		}

		return response;
	}

}

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
import com.mbb.mbbplatform.domain.TallyERP9Cancelled;
import com.mbb.mbbplatform.model.ServiceResponse;
import com.mbb.mbbplatform.model.Utils;
import com.mbb.mbbplatform.repos.TallyEr9CancelledRepository;
import com.mbb.mbbplatform.svcs.TallyERP9CancelledService;
import com.opencsv.CSVReader;

@RestController
@Validated
public class TallyERP9CancelledServiceImpl implements TallyERP9CancelledService {
	
	private static Logger log = LoggerFactory.getLogger(TallyERP9CancelledServiceImpl.class);

	@Autowired
	private TallyEr9CancelledRepository tallyEr9CancelledRepository;
	
	@Autowired
	private Utils utils;
	
	public static final String PATTERN = "dd-MM-yyyy";

	@Override
	public ServiceResponse<List<TallyERP9Cancelled>> addTallyERP9Cancelled() {
		
		log.info("adding tally erp9 cancelled report");
		ServiceResponse<List<TallyERP9Cancelled>> response = new ServiceResponse<>();
		try {
			CSVReader reader = new CSVReader(new FileReader("mbb-reports/Tally+ERP9+Cancelled_30112018.csv"), ',');

			List<TallyERP9Cancelled> tallyERP9CancelledList = new ArrayList<>();

			String[] record = null;
			Iterator<String[]> rowIterator = reader.iterator();

			rowIterator.toString();

			while ((record = reader.readNext()) != null) {
				TallyERP9Cancelled tallyERP9Cancelled = new TallyERP9Cancelled();
				String dateIn = record[0];
				DateTimeFormatter dtf = null;
				LocalDate date = null;
				dtf = DateTimeFormatter.ofPattern(PATTERN);
				date = LocalDate.parse(dateIn, dtf);
				tallyERP9Cancelled.setDate(date);
				
				String dispatchDate = record[35];
				dtf = DateTimeFormatter.ofPattern(PATTERN);
				date = LocalDate.parse(dispatchDate, dtf);
				tallyERP9Cancelled.setDispatchDate(date);

				String narration = record[36];
				dtf = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
				LocalDateTime disPatchDate = LocalDateTime.parse(narration, dtf);
				tallyERP9Cancelled.setNarration(disPatchDate);

				String dispatchDate1 = record[40];
				dtf = DateTimeFormatter.ofPattern(PATTERN);
				date = LocalDate.parse(dispatchDate1, dtf);
				tallyERP9Cancelled.setOriginalInvoiceDate(date);
				 if (record[1] != null && record[1].length() > 0) {
				tallyERP9Cancelled.setSaleOrderNumber((record[1]));
				 }
				tallyERP9Cancelled.setInvoiceNumber(record[2]);
				tallyERP9Cancelled.setChannelEntry(record[3]);
				tallyERP9Cancelled.setChannelLedger(record[4]);
				tallyERP9Cancelled.setProductName(record[5]);
				 if (record[6] != null && record[6].length() > 0) {
				tallyERP9Cancelled.setProductSKUCode((record[6]));
				 }
				 if (record[7] != null && record[7].length() > 0) {
				tallyERP9Cancelled.setQty(Long.parseLong(record[7]));
				 }
				 if (record[8] != null && record[8].length() > 0) {
				tallyERP9Cancelled.setUnitPrice(Double.parseDouble(record[8]));
				 }
				tallyERP9Cancelled.setCurrency(record[9]);
				 if (record[10] != null && record[10].length() > 0) {
				tallyERP9Cancelled.setConversionRate(Double.parseDouble(record[10]));
				 }
				 if (record[11] != null && record[11].length() > 0) {
				tallyERP9Cancelled.setTotal(Double.parseDouble(record[11]));
				 }
				tallyERP9Cancelled.setCustomerName(record[12]);
				tallyERP9Cancelled.setShippingAddressName(record[13]);
				tallyERP9Cancelled.setShippingAddressLine1(record[14]);
				tallyERP9Cancelled.setShippingAddressLine2(record[15]);
				tallyERP9Cancelled.setShippingAddressCity(record[16]);
				tallyERP9Cancelled.setShippingAddressState(record[17]);
				tallyERP9Cancelled.setShippingAddressCountry(record[18]);
				 if (record[19] != null && record[19].length() > 0) {
				tallyERP9Cancelled.setShippingAddressPincode(Long.parseLong(record[19]));
				 }
				tallyERP9Cancelled.setShippingAddressPhone(record[20]);
				tallyERP9Cancelled.setShippingProvider(record[21]);
				tallyERP9Cancelled.setAwbNum(record[22]);
				 if (record[23] != null && record[23].length() > 0) {
				tallyERP9Cancelled.setSales(Double.parseDouble(record[23]));
				 }
				tallyERP9Cancelled.setSalesLedger(record[24]);
				 if (record[25] != null && record[25].length() > 0) {
				tallyERP9Cancelled.setTax(Double.parseDouble(record[25]));
				 }
				tallyERP9Cancelled.setTaxLedger(record[26]);
				tallyERP9Cancelled.setAdditionalTax(record[27]);
				tallyERP9Cancelled.setAdditionalTaxLedger(record[28]);
				tallyERP9Cancelled.setOthercharges(record[29]);
				tallyERP9Cancelled.setOtherChargesLedger(record[30]);
				if (record[31] != null && record[31].length() > 0) {
					tallyERP9Cancelled.setServiceTax(Long.parseLong(record[31]));
				}
				tallyERP9Cancelled.setStLedger(record[32]);
				if (record[33] != null && record[33].length() > 0) {
				tallyERP9Cancelled.setImei(Long.parseLong(record[33]));
				}
				tallyERP9Cancelled.setGoDown(record[34]);
				
				tallyERP9Cancelled.setEntity(record[37]);
				tallyERP9Cancelled.setVoucherTypeName(record[38]);
				 if (record[39] != null && record[39].length() > 0) {
				tallyERP9Cancelled.setTinNo(Double.parseDouble(record[39]));
				 }
				 if (record[41] != null && record[41].length() > 0) {
				tallyERP9Cancelled.setOriginalSaleNo((record[41]));
				 }
				LocalDateTime dateTime = LocalDateTime.now();
				tallyERP9Cancelled.setCreatedDate(dateTime);
				tallyERP9Cancelled.setUpdatedDate(dateTime);
				LocalDateTime datetime = LocalDateTime.now();
				tallyERP9Cancelled.setDateInCSvfile(datetime);
				tallyEr9CancelledRepository.save(tallyERP9Cancelled);
				tallyERP9CancelledList.add(tallyERP9Cancelled);
			}
			response.setData(tallyERP9CancelledList);

			reader.close();
		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS028.name(), EnumTypeForErrorCodes.SCUS028.errorMsg());
			 log.error(utils.toJson(response.getError()), exception);
		}

		return response;
	}

}

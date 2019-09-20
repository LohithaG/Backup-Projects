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
import com.mbb.mbbplatform.domain.TallyReturnGSTReport;
import com.mbb.mbbplatform.model.ServiceResponse;
import com.mbb.mbbplatform.model.Utils;
import com.mbb.mbbplatform.repos.TallyReturnGstReportRepository;
import com.mbb.mbbplatform.svcs.TallyReturnGSTReportService;
import com.opencsv.CSVReader;

@RestController
@Validated
public class TallyReturnGSTReportServiceImpl implements TallyReturnGSTReportService {
	
	private static Logger log = LoggerFactory.getLogger(TallyReturnGSTReportServiceImpl.class);

	@Autowired
	private TallyReturnGstReportRepository tallyReturnGstReportRepository;
	
	@Autowired
	private Utils utils;

	@Override
	public ServiceResponse<List<TallyReturnGSTReport>> addTallyReturnGSTReportr() {

		log.info("adding tally return gst report");

		ServiceResponse<List<TallyReturnGSTReport>> response = new ServiceResponse<>();
		try {
			CSVReader reader = new CSVReader(new FileReader("mbb-reports/Tally+Return+GST+Report_30112018.csv"), ',');

			List<TallyReturnGSTReport> tallyReturnGSTReportList = new ArrayList<>();

			String[] record = null;
			Iterator<String[]> rowIterator = reader.iterator();
			rowIterator.toString();
			while ((record = reader.readNext()) != null) {
				TallyReturnGSTReport tallyReturnGSTReport = new TallyReturnGSTReport();
				String dateInString = record[0];
				DateTimeFormatter dtf = null;
				LocalDate date = null;
				if (dateInString.contains("-")) {
					dtf = DateTimeFormatter.ofPattern("dd-MM-yyyy");
					date = LocalDate.parse(dateInString, dtf);
					tallyReturnGSTReport.setDate(date);
				} else {
					dtf = DateTimeFormatter.ofPattern("dd/MM/yyyy");
					date = LocalDate.parse(dateInString, dtf);
					tallyReturnGSTReport.setDate(date);
				}
				String disPatchDateInString = record[45];
				dtf = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
				LocalDateTime disPatchDate = LocalDateTime.parse(disPatchDateInString, dtf);
				tallyReturnGSTReport.setDispatchDateOrCancellationDate(disPatchDate);

				String originalInvoiceDate = record[50];
				if (originalInvoiceDate.contains("-")) {
					dtf = DateTimeFormatter.ofPattern("dd-MM-yyyy");
					date = LocalDate.parse(originalInvoiceDate, dtf);
					tallyReturnGSTReport.setDate(date);
				} else {
					dtf = DateTimeFormatter.ofPattern("dd/MM/yyyy");
					date = LocalDate.parse(originalInvoiceDate, dtf);
					tallyReturnGSTReport.setDate(date);
				}

				String invoiceChannelCreated = record[52];
				if (invoiceChannelCreated.contains("-") && !invoiceChannelCreated.trim().equals("")) {
					dtf = DateTimeFormatter.ofPattern("dd-MM-yyyy");
					date = LocalDate.parse(invoiceChannelCreated, dtf);
					tallyReturnGSTReport.setInvoiceChannelCreated(date);
				} else if (!invoiceChannelCreated.trim().equals("")) {
					dtf = DateTimeFormatter.ofPattern("dd/MM/yyyy");
					date = LocalDate.parse(invoiceChannelCreated, dtf);
					tallyReturnGSTReport.setInvoiceChannelCreated(date);
				}
				tallyReturnGSTReport.setSaleOrderNumber(record[1]);
				tallyReturnGSTReport.setInvoiceNumber(record[2]);
				tallyReturnGSTReport.setChannelEntry(record[3]);
				tallyReturnGSTReport.setChannelLedger(record[4]);
				tallyReturnGSTReport.setProductName(record[5]);
				tallyReturnGSTReport.setProductSKUCode(record[6]);
				if (record[7] != null && record[7].length() > 0) {
					tallyReturnGSTReport.setQty(Double.parseDouble(record[7]));
				}
				if (record[8] != null && record[8].length() > 0) {
					tallyReturnGSTReport.setUnitPrice(Double.parseDouble(record[8]));
				}
				tallyReturnGSTReport.setCurrency(record[9]);
				if (record[10] != null && record[10].length() > 0) {
					tallyReturnGSTReport.setConversionRate(Double.parseDouble(record[10]));
				}
				if (record[11] != null && record[11].length() > 0) {
					tallyReturnGSTReport.setTotal(Double.parseDouble(record[11]));
				}
				tallyReturnGSTReport.setCustomerName(record[12]);
				tallyReturnGSTReport.setShippingAddressName(record[13]);
				tallyReturnGSTReport.setShippingAddressLine1(record[14]);
				tallyReturnGSTReport.setShippingAddressLine2(record[15]);
				tallyReturnGSTReport.setShippingAddressCity(record[16]);
				tallyReturnGSTReport.setShippingAddressState(record[17]);
				tallyReturnGSTReport.setShippingAddressCountry(record[18]);
				if (record[19] != null && record[19].length() > 0) {
					tallyReturnGSTReport.setShippingAddressPincode((record[19]));
				}
				tallyReturnGSTReport.setShippingAddressPhone(record[20]);
				tallyReturnGSTReport.setShippingProvider(record[21]);
				tallyReturnGSTReport.setAwbNum(record[22]);
				if (record[23] != null && record[23].length() > 0) {
					tallyReturnGSTReport.setSales(Double.parseDouble(record[23]));
				}
				tallyReturnGSTReport.setSalesLedger(record[24]);
				if (record[25] != null && record[25].length() > 0) {
					tallyReturnGSTReport.setCgst(Double.parseDouble(record[25]));
				}
				tallyReturnGSTReport.setCgstRate((record[26]));
				if (record[27] != null && record[27].length() > 0) {
					tallyReturnGSTReport.setSgst((record[27]));
				}

				tallyReturnGSTReport.setSgstRate((record[28]));
				if (record[29] != null && record[29].length() > 0) {
					tallyReturnGSTReport.setIgst(Double.parseDouble(record[29]));
				}

				tallyReturnGSTReport.setIgstRate((record[30]));
				if (record[31] != null && record[31].length() > 0) {
					tallyReturnGSTReport.setUtgst(Double.parseDouble(record[31]));
				}

				tallyReturnGSTReport.setUtgstRate((record[32]));
				if (record[33] != null && record[33].length() > 0) {
					tallyReturnGSTReport.setCess(Double.parseDouble(record[33]));
				}
				tallyReturnGSTReport.setCessRate((record[34]));
				if (record[35] != null && record[35].length() > 0) {
					tallyReturnGSTReport.setOtherCharges(Double.parseDouble(record[35]));
				}
				tallyReturnGSTReport.setOtherChargesLedger(record[36]);
				if (record[37] != null && record[37].length() > 0) {
					tallyReturnGSTReport.setOtherCharges1(Double.parseDouble(record[37]));
				}
				tallyReturnGSTReport.setOtherChargesLedger1(record[38]);
				tallyReturnGSTReport.setServiceTax((record[39]));
				tallyReturnGSTReport.setStLedger(record[40]);
				tallyReturnGSTReport.setDiscountLedger((record[41]));
				if (record[42] != null && record[42].length() > 0) {
					tallyReturnGSTReport.setDiscountAmount(Double.parseDouble(record[42]));
				}
				if (record[43] != null && record[43].length() > 0) {
				tallyReturnGSTReport.setImei(Long.parseLong(record[43]));
				}
				tallyReturnGSTReport.setGoDown(record[44]);
				tallyReturnGSTReport.setNarration(record[46]);
				tallyReturnGSTReport.setEntity(record[47]);
				tallyReturnGSTReport.setVoucherTypeName(record[48]);
				if (record[49] != null && record[49].length() > 0) {
				tallyReturnGSTReport.setTinNo(Long.parseLong(record[49]));
				}
				tallyReturnGSTReport.setOriginalInvoiceDate(date);
				tallyReturnGSTReport.setOriginalInvoiceNo(record[51]);
				tallyReturnGSTReport.setInvoiceChannelCreated(date);
				tallyReturnGSTReport.setChannelState(record[53]);
				tallyReturnGSTReport.setChannelPartyGSTIN(record[54]);
				tallyReturnGSTReport.setCustomerGSTIN(record[55]);
				tallyReturnGSTReport.setBillingPartyCode(record[56]);
				if (record[57] != null && record[57].length() > 0) {
					tallyReturnGSTReport.setTaxVerification(Double.parseDouble(record[57]));
				}
				tallyReturnGSTReport.setGstRegistrationType(record[58]);
				tallyReturnGSTReport.setRpCode(record[59]);
				LocalDateTime dateTime = LocalDateTime.now();
				tallyReturnGSTReport.setCreatedDate(dateTime);
				tallyReturnGSTReport.setUpdatedDate(dateTime);
				LocalDateTime datetime = LocalDateTime.now();
				tallyReturnGSTReport.setDateInCSvfile(datetime);
				LocalDateTime dateTime1 = LocalDateTime.now();
				tallyReturnGSTReport.setCreatedDate(dateTime1);
				tallyReturnGSTReport.setUpdatedDate(dateTime1);
				LocalDateTime datetime2 = LocalDateTime.now();
				tallyReturnGSTReport.setDateInCSvfile(datetime2);
				tallyReturnGstReportRepository.save(tallyReturnGSTReport); 
				tallyReturnGSTReportList.add(tallyReturnGSTReport);
			}
			response.setData(tallyReturnGSTReportList);
			reader.close();
		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS035.name(), EnumTypeForErrorCodes.SCUS035.errorMsg());
			 log.error(utils.toJson(response.getError()), exception);
		}
		return response;
	}

}

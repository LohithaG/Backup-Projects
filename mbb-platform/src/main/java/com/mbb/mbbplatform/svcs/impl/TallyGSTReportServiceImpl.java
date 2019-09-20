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
import com.mbb.mbbplatform.domain.TallyGSTReport;
import com.mbb.mbbplatform.model.ServiceResponse;
import com.mbb.mbbplatform.model.Utils;
import com.mbb.mbbplatform.repos.TallyGstReportRepository;
import com.mbb.mbbplatform.svcs.TallyGSTReportService;
import com.opencsv.CSVReader;

@RestController
@Validated
public class TallyGSTReportServiceImpl implements TallyGSTReportService {
	
	private static Logger log = LoggerFactory.getLogger(TallyGSTReportServiceImpl.class);

	@Autowired
	private TallyGstReportRepository tallyGstReportRepository;
	
	@Autowired
	private Utils utils;

	public static final String PATTERN = "dd-MM-yyyy";

	public static final String PATTERNS = "yyyy-MM-dd HH:mm:ss";

	@Override
	public ServiceResponse<List<TallyGSTReport>> addTallyGSTReport() {
		
		log.info("adding tally gst report");
		ServiceResponse<List<TallyGSTReport>> response = new ServiceResponse<>();
		try {
			CSVReader reader = new CSVReader(new FileReader("mbb-reports/Tally+GST+Report_30112018.csv"), ',');

			List<TallyGSTReport> tallyGSTReportList = new ArrayList<>();

			String[] record = null;
			Iterator<String[]> rowIterator = reader.iterator();

			rowIterator.toString();
			while ((record = reader.readNext()) != null) {
				TallyGSTReport tallyGSTReport = new TallyGSTReport();

				String dateInString = record[0];
				DateTimeFormatter dtf = null;
				LocalDate date = null;
				if (dateInString.contains("-")) {
					dtf = DateTimeFormatter.ofPattern(PATTERN);
					date = LocalDate.parse(dateInString, dtf);
					tallyGSTReport.setDate(date);
				} else {
					dtf = DateTimeFormatter.ofPattern("dd/MM/yyyy");
					date = LocalDate.parse(dateInString, dtf);
					tallyGSTReport.setDate(date);
				}

				String disPatchDateInString = record[45];
				if (disPatchDateInString.contains(":")) {
					dtf = DateTimeFormatter.ofPattern(PATTERNS);
					LocalDateTime disPatchDate = LocalDateTime.parse(disPatchDateInString, dtf);
					tallyGSTReport.setDispatchDateOrcancellationDate(disPatchDate);
				} else if (disPatchDateInString.contains("-")) {
					dtf = DateTimeFormatter.ofPattern(PATTERN);

					LocalDate disDate = LocalDate.parse(disPatchDateInString, dtf);

					LocalDateTime disPatchDate = LocalDateTime.of(disDate.getYear(), disDate.getMonth(),
							disDate.getDayOfMonth(), 0, 0);
					tallyGSTReport.setDispatchDateOrcancellationDate(disPatchDate);
				}

				String narration = record[46];
				dtf = DateTimeFormatter.ofPattern(PATTERNS);
				LocalDateTime narrationDate = LocalDateTime.parse(narration, dtf);
				tallyGSTReport.setNarration(narrationDate);

				String originalInvoiceDate = record[50];
				if (originalInvoiceDate.contains("-")) {
					dtf = DateTimeFormatter.ofPattern(PATTERN);
					date = LocalDate.parse(originalInvoiceDate, dtf);
					tallyGSTReport.setOriginalInvoiceDate(date);
				} else {
					dtf = DateTimeFormatter.ofPattern("dd/MM/yyyy");
					date = LocalDate.parse(originalInvoiceDate, dtf);
					tallyGSTReport.setOriginalInvoiceDate(date);
				}

				String channelInvoiceCreated = record[52];
				if (!channelInvoiceCreated.trim().equals("")) {
					dtf = DateTimeFormatter.ofPattern(PATTERNS);
					LocalDateTime disPatchDate1 = LocalDateTime.parse(channelInvoiceCreated, dtf);

					tallyGSTReport.setChannelInvoiceCreated(disPatchDate1);
				}

				tallyGSTReport.setSaleOrderNumber(record[1]);
				tallyGSTReport.setInvoiceNumber(record[2]);
				 if (record[3] != null && record[3].length() > 0) {
				tallyGSTReport.setChannelEntry(Double.parseDouble(record[3]));
				 }
				tallyGSTReport.setChannelLedger(record[4]);
				tallyGSTReport.setProductName(record[5]);
				tallyGSTReport.setProductSKUCode(record[6]);
				 if (record[7] != null && record[7].length() > 0) {
				tallyGSTReport.setQty(Double.parseDouble(record[7]));
				 }
				 if (record[8] != null && record[8].length() > 0) {
				tallyGSTReport.setUnitPrice(Double.parseDouble(record[8]));
				 }
				tallyGSTReport.setCurrency(record[9]);
				 if (record[10] != null && record[10].length() > 0) {
				tallyGSTReport.setConversionRate(Double.parseDouble(record[10]));
				 }
				 if (record[11] != null && record[11].length() > 0) {
				tallyGSTReport.setTotal(Double.parseDouble(record[11]));
				 }
				tallyGSTReport.setCustomerName(record[12]);
				tallyGSTReport.setShippingAddressName(record[13]);
				tallyGSTReport.setShippingAddressLine1(record[14]);
				tallyGSTReport.setShippingAddressLine2(record[15]);
				tallyGSTReport.setShippingAddressCity(record[16]);
				tallyGSTReport.setShippingAddressState(record[17]);
				tallyGSTReport.setShippingAddressCountry(record[18]);
				 if (record[19] != null && record[19].length() > 0) {
				tallyGSTReport.setShippingAddressPincode((record[19]));
				 }
				tallyGSTReport.setShippingAddressPhone(record[20]);
				tallyGSTReport.setShippingProvider(record[21]);
				tallyGSTReport.setAwbNum(record[22]);
				 if (record[23] != null && record[23].length() > 0) {
				tallyGSTReport.setSales(Double.parseDouble(record[23]));
				 }
				tallyGSTReport.setSalesLedger(record[24]);
				 if (record[25] != null && record[25].length() > 0) {
				tallyGSTReport.setCgst(Double.parseDouble(record[25]));
				 }
				tallyGSTReport.setCgstRate(record[26]);
				 if (record[27] != null && record[27].length() > 0) {
				tallyGSTReport.setSgst(Double.parseDouble(record[27]));
				 }
				tallyGSTReport.setsGSTRate(record[28]);
				 if (record[29] != null && record[29].length() > 0) {
				tallyGSTReport.setIgst(Double.parseDouble(record[29]));
				 }
				tallyGSTReport.setIgstRate(record[30]);
				 if (record[31] != null && record[31].length() > 0) {
				tallyGSTReport.setUtgst(Double.parseDouble(record[31]));
				 }
				tallyGSTReport.setUtgstRate(record[32]);
				 if (record[33] != null && record[33].length() > 0) {
				tallyGSTReport.setCess(Double.parseDouble(record[33]));
				 }
				tallyGSTReport.setCessRate(record[34]);
				 if (record[35] != null && record[35].length() > 0) {
				tallyGSTReport.setOthercharges(Double.parseDouble(record[35]));
				 }
				tallyGSTReport.setOtherChargesLedger(record[36]);
				 if (record[37] != null && record[37].length() > 0) {
				tallyGSTReport.setOtherCharges1(Double.parseDouble(record[37]));
				 }
				tallyGSTReport.setOtherChargesLedger1(record[38]);
				if (record[39] != null && record[39].length() > 0) {
					tallyGSTReport.setServiceTax(Double.parseDouble(record[39]));
				}
				tallyGSTReport.setStLedger(record[40]);
				if (record[41] != null && record[41].length() > 0) {
					tallyGSTReport.setServiceTax(Double.parseDouble(record[41]));
				}
				 if (record[42] != null && record[42].length() > 0) {
				tallyGSTReport.setDiscountAmount(Double.parseDouble(record[42]));
				 }
				 if (record[43] != null && record[43].length() > 0) {
				tallyGSTReport.setImei(Long.parseLong(record[43]));
				 }
				tallyGSTReport.setGoDown(record[44]);

				tallyGSTReport.setEntity(record[47]);
				tallyGSTReport.setVoucherTypeName(record[48]);
				if (record[49] != null && record[49].length() > 0) {
					tallyGSTReport.setTinNo(Long.parseLong(record[49]));
				}

				tallyGSTReport.setOriginalSaleNo(record[51]);

				tallyGSTReport.setChannelState(record[53]);
				tallyGSTReport.setChannelPartyGSTIN(record[54]);
				tallyGSTReport.setCustomerGSTIN(record[55]);
				tallyGSTReport.setBillingPartyCode(record[56]);
				if (record[57] != null && record[57].length() > 0) {
					tallyGSTReport.setTaxVerification(Double.parseDouble(record[57]));
				}
				tallyGSTReport.setGstRegistrationType(record[58]);
				LocalDateTime dateTime = LocalDateTime.now();
				tallyGSTReport.setCreatedDate(dateTime);
				tallyGSTReport.setUpdatedDate(dateTime);
				LocalDateTime datetime = LocalDateTime.now();
				tallyGSTReport.setDateInCSvfile(datetime);
				tallyGstReportRepository.save(tallyGSTReport);

				tallyGSTReportList.add(tallyGSTReport);

			}
			response.setData(tallyGSTReportList);

			reader.close();
		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS032.name(), EnumTypeForErrorCodes.SCUS032.errorMsg());
			 log.error(utils.toJson(response.getError()), exception);
		}

		return response;
	}

}

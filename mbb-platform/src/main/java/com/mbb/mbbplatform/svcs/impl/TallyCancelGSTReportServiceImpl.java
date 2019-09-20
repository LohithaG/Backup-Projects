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
import com.mbb.mbbplatform.domain.TallyCancelGSTReport;
import com.mbb.mbbplatform.model.ServiceResponse;
import com.mbb.mbbplatform.model.Utils;
import com.mbb.mbbplatform.repos.TallyCancelGstReportRepository;
import com.mbb.mbbplatform.svcs.TallyCancelGSTReportService;
import com.opencsv.CSVReader;

@RestController
@Validated
public class TallyCancelGSTReportServiceImpl implements TallyCancelGSTReportService {
	
	private static Logger log = LoggerFactory.getLogger(TallyCancelGSTReportServiceImpl.class);

	@Autowired
	private TallyCancelGstReportRepository tallyCancelGstReportRepository;
	
	@Autowired
	private Utils utils;
	public static final String PATTERN = "dd-MM-yyyy";

	@Override
	public ServiceResponse<List<TallyCancelGSTReport>> addTallyCancelGSTReport() {
		
		log.info("adding tally cancel gst report");
		ServiceResponse<List<TallyCancelGSTReport>> response = new ServiceResponse<>();
		try {
			CSVReader reader = new CSVReader(new FileReader("mbb-reports/Tally+Cancel+GST+Report_30112018.csv"), ',');

			List<TallyCancelGSTReport> tallyCancelGSTReportList = new ArrayList<>();

			String[] record = null;
			Iterator<String[]> rowIterator = reader.iterator();

			rowIterator.toString();

			while ((record = reader.readNext()) != null) {
				TallyCancelGSTReport tallyCancelGSTReport = new TallyCancelGSTReport();
				String dateIn = record[0];
				DateTimeFormatter dtf = null;
				LocalDate date = null;
				dtf = DateTimeFormatter.ofPattern(PATTERN);
				date = LocalDate.parse(dateIn, dtf);
				tallyCancelGSTReport.setDate(date);

				String dispatchDate = record[45];
				dtf = DateTimeFormatter.ofPattern(PATTERN);
				date = LocalDate.parse(dispatchDate, dtf);
				tallyCancelGSTReport.setDispatchDateOrcancellationDate(date);

				String narration = record[46];
				dtf = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
				LocalDateTime disPatchDate = LocalDateTime.parse(narration, dtf);
				tallyCancelGSTReport.setNarration(disPatchDate);

				String dispatchDate1 = record[50];
				dtf = DateTimeFormatter.ofPattern(PATTERN);
				date = LocalDate.parse(dispatchDate1, dtf);
				tallyCancelGSTReport.setOriginalInvoiceDate(date);
				if (record[1] != null && record[1].length() > 0) {
					tallyCancelGSTReport.setSaleOrderNumber((record[1]));
				}
				tallyCancelGSTReport.setInvoiceNumber(record[2]);
				tallyCancelGSTReport.setChannelEntry((record[3]));
				tallyCancelGSTReport.setChannelLedger(record[4]);
				tallyCancelGSTReport.setProductName(record[5]);
				if (record[6] != null && record[6].length() > 0) {
					tallyCancelGSTReport.setProductSKUCode((record[6]));
				}
				if (record[7] != null && record[7].length() > 0) {
					tallyCancelGSTReport.setQty(Long.parseLong(record[7]));
				}
				if (record[8] != null && record[8].length() > 0) {
					tallyCancelGSTReport.setUnitPrice((Double.parseDouble(record[8])));
				}
				tallyCancelGSTReport.setCurrency(record[9]);
				if (record[10] != null && record[10].length() > 0) {
					tallyCancelGSTReport.setConversionRate(Double.parseDouble(record[10]));
				}
				if (record[11] != null && record[11].length() > 0) {
					tallyCancelGSTReport.setTotal(Double.parseDouble(record[11]));
				}
				tallyCancelGSTReport.setCustomerName(record[12]);
				tallyCancelGSTReport.setShippingAddressName(record[13]);
				tallyCancelGSTReport.setShippingAddressLine1(record[14]);
				tallyCancelGSTReport.setShippingAddressLine2(record[15]);
				tallyCancelGSTReport.setShippingAddressCity(record[16]);
				tallyCancelGSTReport.setShippingAddressState(record[17]);
				tallyCancelGSTReport.setShippingAddressCountry(record[18]);
				if (record[19] != null && record[19].length() > 0) {
					tallyCancelGSTReport.setShippingAddressPincode(Long.parseLong(record[19]));
				}
				tallyCancelGSTReport.setShippingAddressPhone(record[20]);
				tallyCancelGSTReport.setShippingProvider(record[21]);
				tallyCancelGSTReport.setAwbNum(record[22]);
				if (record[23] != null && record[23].length() > 0) {
					tallyCancelGSTReport.setSales(Double.parseDouble(record[23]));
				}
				tallyCancelGSTReport.setSalesLedger(record[24]);
				if (record[25] != null && record[25].length() > 0) {
					tallyCancelGSTReport.setCgst(Double.parseDouble(record[25]));
				}
				if (record[26] != null && record[26].length() > 0) {
				tallyCancelGSTReport.setCgstRate((record[26]));
				}
				if (record[27] != null && record[27].length() > 0) {
					tallyCancelGSTReport.setSgst(Double.parseDouble(record[27]));
				}
				tallyCancelGSTReport.setsGSTRate((record[28]));
				if (record[29] != null && record[29].length() > 0) {
					tallyCancelGSTReport.setIgst(Double.parseDouble(record[29]));
				}
				tallyCancelGSTReport.setIgstRate(record[30]);
				if (record[31] != null && record[31].length() > 0) {
					tallyCancelGSTReport.setUtgst(Double.parseDouble(record[31]));
				}
				if (record[32] != null && record[32].length() > 0) {
				tallyCancelGSTReport.setUtgstRate((record[32]));
				}
				if (record[33] != null && record[33].length() > 0) {
					tallyCancelGSTReport.setCess(Double.parseDouble(record[33]));
				}
				if (record[34] != null && record[34].length() > 0) {
				tallyCancelGSTReport.setCessRate((record[34]));
				}
				tallyCancelGSTReport.setOthercharges((record[35]));
				tallyCancelGSTReport.setOtherChargesLedger(record[36]);
				tallyCancelGSTReport.setOtherCharges1((record[37]));
				tallyCancelGSTReport.setOtherChargesLedger1(record[38]);
				if (record[39] != null && record[39].length() > 0) {
					tallyCancelGSTReport.setServiceTax(Double.parseDouble(record[39]));
				}
				tallyCancelGSTReport.setStLedger(record[40]);
				tallyCancelGSTReport.setDiscountLedger(record[41]);
				if (record[42] != null && record[42].length() > 0) {
					tallyCancelGSTReport.setDiscountAmount(Double.parseDouble(record[42]));
				}
				if (record[43] != null && record[43].length() > 0) {
				tallyCancelGSTReport.setImei(Long.parseLong(record[43]));
				}
				tallyCancelGSTReport.setGoDown(record[44]);

				tallyCancelGSTReport.setEntity(record[47]);
				tallyCancelGSTReport.setVoucherTypeName(record[48]);
				if (record[49] != null && record[49].length() > 0) {
				tallyCancelGSTReport.setTinNo(Long.parseLong(record[49]));
				}
				if (record[51] != null && record[51].length() > 0) {
					tallyCancelGSTReport.setOriginalSaleNo((record[51]));
				}
				tallyCancelGSTReport.setChannelInvoiceCreated(record[52]);
				tallyCancelGSTReport.setChannelState(record[53]);
				tallyCancelGSTReport.setChannelPartyGSTIN(record[54]);
				tallyCancelGSTReport.setCustomerGSTIN(record[55]);
				tallyCancelGSTReport.setBillingPartyCode(record[56]);
				if (record[57] != null && record[57].length() > 0) {
					tallyCancelGSTReport.setTaxVerification(Double.parseDouble(record[57]));
				}
				tallyCancelGSTReport.setGstRegistrationType(record[58]);
				LocalDateTime dateTime = LocalDateTime.now();
				tallyCancelGSTReport.setCreatedDate(dateTime);
				tallyCancelGSTReport.setUpdatedDate(dateTime);
				LocalDateTime datetime = LocalDateTime.now();
				tallyCancelGSTReport.setDateInCSvfile(datetime);
				tallyCancelGstReportRepository.save(tallyCancelGSTReport);
				tallyCancelGSTReportList.add(tallyCancelGSTReport);

			}
			response.setData(tallyCancelGSTReportList);

			reader.close();
		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS026.name(), EnumTypeForErrorCodes.SCUS026.errorMsg());
			 log.error(utils.toJson(response.getError()), exception);
		}

		return response;

	}
}

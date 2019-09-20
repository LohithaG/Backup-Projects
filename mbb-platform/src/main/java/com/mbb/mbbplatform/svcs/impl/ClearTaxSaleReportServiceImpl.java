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
import org.springframework.web.bind.annotation.RestController;

import com.mbb.mbbplatform.common.EnumTypeForErrorCodes;
import com.mbb.mbbplatform.domain.ClearTaxSaleReport;
import com.mbb.mbbplatform.model.ServiceResponse;
import com.mbb.mbbplatform.repos.ClearTaxSalesReportRepository;
import com.mbb.mbbplatform.svcs.ClearTaxSaleReportService;
import com.opencsv.CSVReader;

@RestController
public class ClearTaxSaleReportServiceImpl implements ClearTaxSaleReportService {
	
	private static Logger log = LoggerFactory.getLogger(ClearTaxSaleReportServiceImpl.class);

	@Autowired
	private ClearTaxSalesReportRepository clearTaxSaleReportRepo;

	public static final String PATTERN = "dd-MM-yyyy";

	@Override
	public ServiceResponse<List<ClearTaxSaleReport>> addClearTaxSaleReport() {
		log.info("adding cleartax sale report");
		ServiceResponse<List<ClearTaxSaleReport>> response = new ServiceResponse<>();
		try {
			CSVReader reader = new CSVReader(new FileReader("mbb-reports/Clear+Tax+Sale+Report_30112018.csv"), ',');

			List<ClearTaxSaleReport> saleReportsList = new ArrayList<>();

			String[] record = null;
			Iterator<String[]> rowIterator = reader.iterator();

			rowIterator.toString();

			while ((record = reader.readNext()) != null) {

				ClearTaxSaleReport sales = new ClearTaxSaleReport();

				String bildate = record[0];
				DateTimeFormatter dtf = null;
				LocalDate date = null;
				dtf = DateTimeFormatter.ofPattern(PATTERN);
				date = LocalDate.parse(bildate, dtf);
				sales.setDate(date);

				sales.setInvoiceNumber(record[1]);
				sales.setCustomerBillingName(record[2]);
				sales.setCustomerBillingGstin(record[3]);
				sales.setStatePlaceOfSupply(record[4]);
				sales.setIsTheItemAGoodOrService(record[5]);
				sales.setItemDescription(record[6]);
				if (record[7] != null && record[7].length() > 0) {
					sales.setHsnOrSacCode(Double.parseDouble(record[7]));
				}
				if (record[8] != null && record[8].length() > 0) {
					sales.setItemQuantity(Double.parseDouble(record[8]));
				}
				sales.setItemUnitOfMeasurement(record[9]);
				if (record[10] != null && record[10].length() > 0) {
					sales.setItemRate(Double.parseDouble(record[10]));
				}
				if (record[11] != null && record[11].length() > 0) {
					sales.setTotalItemDiscountAmount(Double.parseDouble(record[11]));
				}
				if (record[12] != null && record[12].length() > 0) {
					sales.setItemTaxableValue(Double.parseDouble(record[12]));
				}
				if (record[13] != null && record[13].length() > 0) {
					sales.setCgstRate(Double.parseDouble(record[13]));
				}
				if (record[14] != null && record[14].length() > 0) {
					sales.setCgstAmount(Double.parseDouble(record[14]));
				}
				if (record[15] != null && record[15].length() > 0) {
					sales.setSgstRate(Double.parseDouble(record[15]));
				}
				if (record[16] != null && record[16].length() > 0) {
					sales.setSgstAmount(Double.parseDouble(record[16]));
				}
				if (record[17] != null && record[17].length() > 0) {
					sales.setIgstRate(Double.parseDouble(record[17]));
				}
				if (record[18] != null && record[18].length() > 0) {
					sales.setIgstAmount(Double.parseDouble(record[18]));
				}
				if (record[19] != null && record[19].length() > 0) {
					sales.setCessRate(Double.parseDouble(record[19]));
				}
				if (record[20] != null && record[20].length() > 0) {
					sales.setCessAmount(Double.parseDouble(record[20]));
				}
				sales.setIsThisABillOfSupply(record[21]);
				sales.setIsThisANilRatedOrExemptOrNonGSTitem(record[22]);
				sales.setIsReverseChargeApplicable(record[23]);

				sales.setTypeOfExport(record[24]);
				sales.setShippingPortCodeExport(record[25]);
				sales.setShippingBillNumberExport(record[26]);
				if (record[27] != null && record[27].length() > 0) {
					String shippingBillDateExport = record[27];
					dtf = DateTimeFormatter.ofPattern(PATTERN);
					date = LocalDate.parse(shippingBillDateExport, dtf);
					sales.setShippingBillDateExport(date);
				}
				sales.setHasGSTOrIDTTdsBeenDeducted(record[28]);
				sales.setMyGstin(record[29]);
				sales.setCustomerBillingAddress(record[30]);
				sales.setCustomerBillingCity(record[31]);
				sales.setCustomerBillingState(record[32]);

				sales.setIsThisDocumentCancelled(record[33]);
				sales.setIsTheCustomeraCompositionDealerOrUINRegistered(record[34]);
				sales.setReturnFilingPeriod(record[35]);
				if (record[36] != null && record[36].length() > 0) {
					String originalInvoiceDate = record[36];
					dtf = DateTimeFormatter.ofPattern(PATTERN);
					date = LocalDate.parse(originalInvoiceDate, dtf);
					sales.setOriginalInvoiceDate(date);
				}
				sales.setOriginalInvoiceNumber(record[37]);
				sales.setOriginalCustomerBillingGSTIN(record[38]);
				sales.setGstinOfEcommerceMarketplace(record[39]);
				if (record[40] != null && record[40].length() > 0) {
					String dateOfLinkedAdvanceReceipt = record[40];
					dtf = DateTimeFormatter.ofPattern(PATTERN);
					date = LocalDate.parse(dateOfLinkedAdvanceReceipt, dtf);
					sales.setDateOfLinkedAdvanceReceipt(date);
				}

				sales.setVoucherNumberOfLinkedAdvanceReceipt(record[41]);
				sales.setAdjustmentAmountOfTheLinkedAdvanceReceipt(record[42]);
				if (record[43] != null && record[43].length() > 0) {
					sales.setTotalTransactionValue(Double.parseDouble(record[43]));
				}
				LocalDateTime dateTime = LocalDateTime.now();
				sales.setCreatedDate(dateTime);
				sales.setUpdatedDate(dateTime);
				LocalDateTime datetime = LocalDateTime.now();
				sales.setDateInCSvfile(datetime);
				 clearTaxSaleReportRepo.save(sales);
				saleReportsList.add(sales);

			}

			response.setData(saleReportsList);

			reader.close();
		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS007.name(), EnumTypeForErrorCodes.SCUS007.errorMsg());
		}

		return response;
	}
}

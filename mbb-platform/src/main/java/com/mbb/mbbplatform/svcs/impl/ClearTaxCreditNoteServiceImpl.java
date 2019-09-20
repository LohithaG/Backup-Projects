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

import com.mbb.mbbplatform.domain.ClearTaxCreditNote;
import com.mbb.mbbplatform.model.ServiceResponse;
import com.mbb.mbbplatform.repos.ClearTaxCreditNoteRepository;
import com.mbb.mbbplatform.svcs.CleartTaxCreditNoteService;
import com.opencsv.CSVReader;

@RestController
public class ClearTaxCreditNoteServiceImpl implements CleartTaxCreditNoteService {
	
	private static Logger log = LoggerFactory.getLogger(ClearTaxCreditNoteServiceImpl.class);

	@Autowired
	private ClearTaxCreditNoteRepository clearTaxCreditNoteRepo;

	public static final String PATTERN = "dd-MM-yyyy";

	@Override
	public ServiceResponse<List<ClearTaxCreditNote>> addClearTaxCreditNote() {
		
		log.info("adding cleartax credit note report");
		
		ServiceResponse<List<ClearTaxCreditNote>> response = new ServiceResponse<>();
		try {
			CSVReader reader = new CSVReader(new FileReader("mbb-reports/Clear+Tax+Credit+Note_30112018.csv"), ',');

			List<ClearTaxCreditNote> clearTaxCreditNotesList = new ArrayList<>();

			String[] record = null;
			Iterator<String[]> rowIterator = reader.iterator();

			rowIterator.toString();

			while ((record = reader.readNext()) != null) {

				ClearTaxCreditNote clearTaxCreditNote = new ClearTaxCreditNote();

				String bildate = record[0];
				DateTimeFormatter dtf = null;
				LocalDate date = null;
				dtf = DateTimeFormatter.ofPattern(PATTERN);
				date = LocalDate.parse(bildate, dtf);
				clearTaxCreditNote.setCreditOrDebitNoteDate(date);

				String dateInString = record[3];
				if(dateInString.contains("-")) {
					dtf = DateTimeFormatter.ofPattern(PATTERN);
					date = LocalDate.parse(dateInString, dtf);
					clearTaxCreditNote.setInvoiceDate(date);
				} else {
					dtf = DateTimeFormatter.ofPattern("dd/MM/yyyy");
					date = LocalDate.parse(dateInString, dtf);
					clearTaxCreditNote.setInvoiceDate(date);
				}

				clearTaxCreditNote.setCreditOrDebitNoteNumber(record[1]);
				clearTaxCreditNote.setCreditOrDebitNoteType(record[2]);
				clearTaxCreditNote.setInvoiceNumber(record[4]);
				clearTaxCreditNote.setCustomerBillingName(record[5]);
				clearTaxCreditNote.setCustomerBillingGstin(record[6]);
				clearTaxCreditNote.setStatePlaceOfSupply(record[7]);
				clearTaxCreditNote.setIsTheItemAGoodOrService(record[8]);
				clearTaxCreditNote.setItemDescription(record[9]);
				if (record[10] != null && record[10].length() > 0) {
					clearTaxCreditNote.setHsnOrSacCode(Double.parseDouble(record[10]));
				}
				if (record[11] != null && record[11].length() > 0) {
					clearTaxCreditNote.setItemquantity(Double.parseDouble(record[11]));
				}
				clearTaxCreditNote.setItemUnitOfMeasurement(record[12]);
				if (record[13] != null && record[13].length() > 0) {
					clearTaxCreditNote.setItemRate(Double.parseDouble(record[13]));
				}
				if (record[14] != null && record[14].length() > 0) {
					clearTaxCreditNote.setTotalItemDiscountAmount(Double.parseDouble(record[14]));
				}
				if (record[15] != null && record[15].length() > 0) {
					clearTaxCreditNote.setItemTaxableValue(Double.parseDouble(record[15]));
				}
				if (record[16] != null && record[16].length() > 0) {
					clearTaxCreditNote.setCgstRate(Double.parseDouble(record[16]));
				}
				if (record[17] != null && record[17].length() > 0) {
					clearTaxCreditNote.setCgstAmount(Double.parseDouble(record[17]));
				}
				if (record[18] != null && record[18].length() > 0) {
					clearTaxCreditNote.setSgstRate(Double.parseDouble(record[18]));
				}
				if (record[19] != null && record[19].length() > 0) {
					clearTaxCreditNote.setSgstAmount(Double.parseDouble(record[19]));
				}
				if (record[20] != null && record[20].length() > 0) {
					clearTaxCreditNote.setIgstRate(Double.parseDouble(record[20]));
				}
				if (record[21] != null && record[21].length() > 0) {
					clearTaxCreditNote.setIgstAmount(Double.parseDouble(record[21]));
				}
				if (record[22] != null && record[22].length() > 0) {
					clearTaxCreditNote.setCessRate(Double.parseDouble(record[22]));
				}
				if (record[23] != null && record[23].length() > 0) {
					clearTaxCreditNote.setCessAmount(Double.parseDouble(record[23]));
				}
				clearTaxCreditNote.setIsReverseChargeApplicable(record[24]);
				clearTaxCreditNote.setIsThisANilRatedOrExemptOrNonGSTItem(record[25]);

				if (record[26] != null && record[26].length() > 0) {
					String originalCreditOrDebitNoteDate = record[26];
					dtf = DateTimeFormatter.ofPattern(PATTERN);
					date = LocalDate.parse(originalCreditOrDebitNoteDate, dtf);
					clearTaxCreditNote.setOriginalCreditOrDebitNoteDate(date);
				}
				if (record[27] != null && record[27].length() > 0) {
					clearTaxCreditNote.setOriginalCreditOrDebitNoteNumber(Long.parseLong(record[27]));
				}

				clearTaxCreditNote.setOriginalCustomerBillingGstin(record[28]);
				clearTaxCreditNote.setMyGSTIN(record[29]);

				clearTaxCreditNote.setCustomerBillingAddress(record[30]);
				clearTaxCreditNote.setCustomerBillingCity(record[31]);
				clearTaxCreditNote.setCustomerBillingState(record[32]);
				clearTaxCreditNote.setIsThisDocumentCancelled(record[33]);
				if (record[34] != null && record[34].length() > 0) {
					clearTaxCreditNote.setTaxAmount(Double.parseDouble(record[34]));
				}
				clearTaxCreditNote.setTransactionType(record[35]);
				clearTaxCreditNote.setIsThisNoteForBillOfSupply(record[36]);
				clearTaxCreditNote.setReasonForIssuingCDN(record[37]);
				clearTaxCreditNote.setIsThisNoteForAPreGSTInvoice(record[38]);
				clearTaxCreditNote.setIsTheCustomerACompositionDealerOrUinRegistered(record[39]);
				clearTaxCreditNote.setReturnFilingPeriod(record[40]);
				if (record[41] != null && record[41].length() > 0) {
					clearTaxCreditNote.setTotalTransactionValue(Double.parseDouble(record[41]));
				}
				LocalDateTime dateTime = LocalDateTime.now();
				clearTaxCreditNote.setCreatedDate(dateTime);
				clearTaxCreditNote.setUpdatedDate(dateTime);
				LocalDateTime datetime = LocalDateTime.now();
				clearTaxCreditNote.setDateInCSvfile(datetime);
				clearTaxCreditNoteRepo.save(clearTaxCreditNote);
				clearTaxCreditNotesList.add(clearTaxCreditNote);

			}
			response.setData(clearTaxCreditNotesList);

			reader.close();
		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS006.name(), EnumTypeForErrorCodes.SCUS006.errorMsg());
		}

		return response;
	}

}

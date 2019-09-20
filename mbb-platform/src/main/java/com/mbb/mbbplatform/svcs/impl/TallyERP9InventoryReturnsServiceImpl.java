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
import com.mbb.mbbplatform.domain.TallyERP9InventoryReturns;
import com.mbb.mbbplatform.model.ServiceResponse;
import com.mbb.mbbplatform.model.Utils;
import com.mbb.mbbplatform.repos.TallyEr9InventoryReturnsRepository;
import com.mbb.mbbplatform.svcs.TallyERP9InventoryReturnsService;
import com.opencsv.CSVReader;

@RestController
@Validated
public class TallyERP9InventoryReturnsServiceImpl implements TallyERP9InventoryReturnsService {
	
	private static Logger log = LoggerFactory.getLogger(TallyERP9InventoryReturnsServiceImpl.class);

	@Autowired
	private TallyEr9InventoryReturnsRepository tallyEr9InventoryReturnsRepository;
	
	@Autowired
	private Utils utils;

	public static final String PATTERN = "dd-MM-yyyy";

	
	@Override
	public ServiceResponse<List<TallyERP9InventoryReturns>> addTallyERP9InventoryReturns() {
		
		log.info("adding tally erp9 inventory returns report");
		ServiceResponse<List<TallyERP9InventoryReturns>> response = new ServiceResponse<>();
		try {
			CSVReader reader = new CSVReader(new FileReader("mbb-reports/Tally+ERP9+Inventory+Returns_30112018.csv"),
					',');

			List<TallyERP9InventoryReturns> tallyERP9InventoryReturnsList = new ArrayList<>();

			String[] record = null;
			Iterator<String[]> rowIterator = reader.iterator();

			rowIterator.toString();

			while ((record = reader.readNext()) != null) {
				TallyERP9InventoryReturns tallyERP9InventoryReturns = new TallyERP9InventoryReturns();

				String dateIn = record[0];
				DateTimeFormatter dtf = null;
				LocalDate date = null;
				dtf = DateTimeFormatter.ofPattern(PATTERN);
				date = LocalDate.parse(dateIn, dtf);
				tallyERP9InventoryReturns.setDate(date);

				String disPatchDateInString = record[35];
				if (disPatchDateInString.contains(":")) {
					dtf = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
					LocalDateTime disPatchDate = LocalDateTime.parse(disPatchDateInString, dtf);
					tallyERP9InventoryReturns.setDispatchDateOrcancellationDate(disPatchDate);
				} else if (disPatchDateInString.contains("-")) {
					dtf = DateTimeFormatter.ofPattern(PATTERN);

					LocalDate disDate = LocalDate.parse(disPatchDateInString, dtf);

					LocalDateTime disPatchDate = LocalDateTime.of(disDate.getYear(), disDate.getMonth(),
							disDate.getDayOfMonth(), 0, 0);
					tallyERP9InventoryReturns.setDispatchDateOrcancellationDate(disPatchDate);
				}

				tallyERP9InventoryReturns.setSaleOrderNumber(record[1]);
				tallyERP9InventoryReturns.setInvoiceNumber(record[2]);
				tallyERP9InventoryReturns.setChannelEntry(record[3]);
				tallyERP9InventoryReturns.setChannelLedger(record[4]);
				tallyERP9InventoryReturns.setProductName(record[5]);
				tallyERP9InventoryReturns.setProductSKUCode((record[6]));
				if (record[8] != null && record[8].length() > 0) {
				tallyERP9InventoryReturns.setUnitPrice(Double.parseDouble(record[8]));
				}
				tallyERP9InventoryReturns.setCurrency(record[9]);
				tallyERP9InventoryReturns.setConversionRate(record[10]);
				if (record[11] != null && record[11].length() > 0) {
				tallyERP9InventoryReturns.setTotal(Double.parseDouble(record[11]));
				}
				tallyERP9InventoryReturns.setCustomerName(record[12]);
				tallyERP9InventoryReturns.setShippingAddressName(record[13]);
				tallyERP9InventoryReturns.setShippingAddressLine1(record[14]);
				tallyERP9InventoryReturns.setShippingAddressLine2(record[15]);
				tallyERP9InventoryReturns.setShippingAddressCity(record[16]);
				tallyERP9InventoryReturns.setShippingAddressState(record[17]);
				tallyERP9InventoryReturns.setShippingAddressCountry(record[18]);
				 if (record[19] != null && record[19].length() > 0) {
				tallyERP9InventoryReturns.setShippingAddressPincode((record[19]));
				 }
				tallyERP9InventoryReturns.setShippingAddressPhone(record[20]);
				tallyERP9InventoryReturns.setShippingProvider(record[21]);
				tallyERP9InventoryReturns.setAwbNum(record[22]);
				tallyERP9InventoryReturns.setSales(record[23]);
				tallyERP9InventoryReturns.setSalesLedger(record[24]);
				tallyERP9InventoryReturns.setTax(record[25]);
				tallyERP9InventoryReturns.setTaxLedger(record[26]);
				if (record[27] != null && record[27].length() > 0) {
				tallyERP9InventoryReturns.setAdditionalTax(Double.parseDouble(record[27]));
				}
				tallyERP9InventoryReturns.setAdditionalTaxLedger(record[28]);
				if (record[29] != null && record[29].length() > 0) {
				tallyERP9InventoryReturns.setOthercharges(Double.parseDouble(record[29]));
				}
				tallyERP9InventoryReturns.setOtherChargesLedger(record[30]);
				if (record[31] != null && record[31].length() > 0) {
					tallyERP9InventoryReturns.setServiceTax(Long.parseLong(record[31]));
				}
				tallyERP9InventoryReturns.setStLedger(record[32]);
				if (record[33] != null && record[33].length() > 0) {
				tallyERP9InventoryReturns.setImei(Long.parseLong(record[33]));
				}
				tallyERP9InventoryReturns.setGoDown(record[34]);

				tallyERP9InventoryReturns.setNarration(record[36]);
				tallyERP9InventoryReturns.setEntity(record[37]);
				tallyERP9InventoryReturns.setVoucherTypeName(record[38]);
				LocalDateTime dateTime = LocalDateTime.now();
				tallyERP9InventoryReturns.setCreatedDate(dateTime);
				tallyERP9InventoryReturns.setUpdatedDate(dateTime);
				LocalDateTime datetime = LocalDateTime.now();
				tallyERP9InventoryReturns.setDateInCSvfile(datetime);
				tallyEr9InventoryReturnsRepository.save(tallyERP9InventoryReturns);
				tallyERP9InventoryReturnsList.add(tallyERP9InventoryReturns);
			}
			response.setData(tallyERP9InventoryReturnsList);

			reader.close();
		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS031.name(), EnumTypeForErrorCodes.SCUS031.errorMsg());
			 log.error(utils.toJson(response.getError()), exception);
		}

		return response;
	}

}

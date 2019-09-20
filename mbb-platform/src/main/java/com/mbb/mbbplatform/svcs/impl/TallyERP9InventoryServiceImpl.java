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
import com.mbb.mbbplatform.domain.TallyERP9Inventory;
import com.mbb.mbbplatform.model.ServiceResponse;
import com.mbb.mbbplatform.model.Utils;
import com.mbb.mbbplatform.repos.TallyEr9InventoryRepository;
import com.mbb.mbbplatform.svcs.TallyERP9InventoryService;
import com.opencsv.CSVReader;


@RestController
@Validated
public class TallyERP9InventoryServiceImpl implements TallyERP9InventoryService {
	
	private static Logger log = LoggerFactory.getLogger(TallyERP9InventoryServiceImpl.class);

	@Autowired
	private TallyEr9InventoryRepository tallyEr9InventoryRepository;
	
	@Autowired
	private Utils utils;

	public static final String PATTERN = "dd-MM-yyyy";

	@Override
	public ServiceResponse<List<TallyERP9Inventory>> addTallyERP9Inventory() {
		
		log.info("adding tally erp9 inventory report");

		ServiceResponse<List<TallyERP9Inventory>> response = new ServiceResponse<>();
		try {
			CSVReader reader = new CSVReader(new FileReader("mbb-reports/Tally+ERP9+Inventory_30112018.csv"), ',');

			List<TallyERP9Inventory> tallyERP9InventoryList = new ArrayList<>();

			String[] record = null;
			Iterator<String[]> rowIterator = reader.iterator();

			rowIterator.toString();

			while ((record = reader.readNext()) != null) {
				TallyERP9Inventory tallyERP9Inventory = new TallyERP9Inventory();
				
				
				DateTimeFormatter dtf = null;
				LocalDate date = null;
				String dateIn = record[0];
				if(dateIn.contains("/")) {
					dtf = DateTimeFormatter.ofPattern("dd/MM/yyyy");
					date = LocalDate.parse(dateIn, dtf);
					tallyERP9Inventory.setDate(date);
				}else if(dateIn.contains("-")) {
					dtf = DateTimeFormatter.ofPattern(PATTERN);
					date = LocalDate.parse(dateIn, dtf);
					tallyERP9Inventory.setDate(date);
				}
				
				
				String disPatchDate = record[35];
				if(disPatchDate.contains(":")) {
					dtf = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
					LocalDateTime disPatchDate1 = LocalDateTime.parse(disPatchDate, dtf);
					tallyERP9Inventory.setDispatchDate(disPatchDate1);
				}
				
			
				tallyERP9Inventory.setSaleOrderNumber(record[1]);
				tallyERP9Inventory.setInvoiceNumber(record[2]);
				tallyERP9Inventory.setChannelEntry(record[3]);
				tallyERP9Inventory.setChannelLedger(record[4]);
				tallyERP9Inventory.setProductName(record[5]);
				tallyERP9Inventory.setProductSKUCode((record[6]));
				if (record[7] != null && record[7].length() > 0) {
				tallyERP9Inventory.setQty(Long.parseLong(record[7]));
				}
				if (record[8] != null && record[8].length() > 0) {
				tallyERP9Inventory.setUnitPrice(Double.parseDouble(record[8]));
				}
				tallyERP9Inventory.setCurrency(record[9]);
				if (record[10] != null && record[10].length() > 0) {
				tallyERP9Inventory.setConversionRate(Double.parseDouble(record[10]));
				}
				if (record[11] != null && record[11].length() > 0) {
				tallyERP9Inventory.setTotal(Double.parseDouble(record[11]));
				}
				tallyERP9Inventory.setCustomerName(record[12]);
				tallyERP9Inventory.setShippingAddressName(record[13]);
				tallyERP9Inventory.setShippingAddressLine1(record[14]);
				tallyERP9Inventory.setShippingAddressLine2(record[15]);
				tallyERP9Inventory.setShippingAddressCity(record[16]);
				tallyERP9Inventory.setShippingAddressState(record[17]);
				tallyERP9Inventory.setShippingAddressCountry(record[18]);
				if (record[19] != null && record[19].length() > 0) {
				tallyERP9Inventory.setShippingAddressPincode((record[19]));
				}
				tallyERP9Inventory.setShippingAddressPhone(record[20]);
				tallyERP9Inventory.setShippingProvider(record[21]);
				tallyERP9Inventory.setAwbNum(record[22]);
				if (record[23] != null && record[23].length() > 0) {
				tallyERP9Inventory.setSales((record[23]));
				}
				tallyERP9Inventory.setSalesLedger(record[24]);
				if (record[25] != null && record[25].length() > 0) {
				tallyERP9Inventory.setTax((record[25]));
				}
				tallyERP9Inventory.setTaxLedger(record[26]);
				tallyERP9Inventory.setAdditionalTax(record[27]);
				tallyERP9Inventory.setAdditionalTaxLedger(record[28]);
				tallyERP9Inventory.setOthercharges(record[29]);
				tallyERP9Inventory.setOtherChargesLedger(record[30]);
				if (record[31] != null && record[31].length() > 0) {
				tallyERP9Inventory.setServiceTax((record[31]));
				}
				tallyERP9Inventory.setStLedger(record[32]);
				if (record[33] != null && record[33].length() > 0) {
				tallyERP9Inventory.setImei((record[33]));
				}
				tallyERP9Inventory.setGoDown(record[34]);
				LocalDateTime dateTime = LocalDateTime.now();
				tallyERP9Inventory.setCreatedDate(dateTime);
				tallyERP9Inventory.setUpdatedDate(dateTime);
				LocalDateTime datetime = LocalDateTime.now();
				tallyERP9Inventory.setDateInCSvfile(datetime);
				tallyEr9InventoryRepository.save(tallyERP9Inventory);
				tallyERP9InventoryList.add(tallyERP9Inventory);
			}
			response.setData(tallyERP9InventoryList);
			reader.close();
		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS029.name(), EnumTypeForErrorCodes.SCUS029.errorMsg());
			 log.error(utils.toJson(response.getError()), exception);
		}

		return response;

	}
}

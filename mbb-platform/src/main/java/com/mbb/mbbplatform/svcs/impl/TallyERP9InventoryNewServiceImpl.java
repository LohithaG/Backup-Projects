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
import com.mbb.mbbplatform.domain.TallyERP9InventoryNew;
import com.mbb.mbbplatform.model.ServiceResponse;
import com.mbb.mbbplatform.model.Utils;
import com.mbb.mbbplatform.repos.TallyEr9InventoryNewRepository;
import com.mbb.mbbplatform.svcs.TallyERP9InventoryNewService;
import com.opencsv.CSVReader;


@RestController
@Validated
public class TallyERP9InventoryNewServiceImpl implements TallyERP9InventoryNewService {
	
	private static Logger log = LoggerFactory.getLogger(TallyERP9InventoryNewServiceImpl.class);

	@Autowired
	private TallyEr9InventoryNewRepository tallyEr9InventoryNewRepository;
	
	@Autowired
	private Utils utils;

	public static final String PATTERN = "dd-MM-yyyy";
	public static final String PATTERNS = "yyyy-MM-dd HH:mm:ss";

	@Override
	public ServiceResponse<List<TallyERP9InventoryNew>> addTallyERP9InventoryNew() {
		
		log.info("adding tally erp9 inventory report");
		ServiceResponse<List<TallyERP9InventoryNew>> response = new ServiceResponse<>();
		try {
			CSVReader reader = new CSVReader(new FileReader("mbb-reports/Tally+ERP9+Inventory+New_30112018.csv"), ',');

			List<TallyERP9InventoryNew> tallyERP9InventoryNewList = new ArrayList<>();

			String[] record = null;
			Iterator<String[]> rowIterator = reader.iterator();

			rowIterator.toString();
			while ((record = reader.readNext()) != null) {
				TallyERP9InventoryNew tallyERP9InventoryNew = new TallyERP9InventoryNew();
				
				
				
				DateTimeFormatter dtf = null;
				LocalDate date = null;
				String dateIn = record[0];
				if(dateIn.contains("-")) {
				dtf = DateTimeFormatter.ofPattern(PATTERN);
				date = LocalDate.parse(dateIn, dtf);
				tallyERP9InventoryNew.setDate(date);
				}
				String disPatchDateInString = record[35];
				if (disPatchDateInString.contains(":")) {
					dtf = DateTimeFormatter.ofPattern(PATTERNS);
					LocalDateTime disPatchDate = LocalDateTime.parse(disPatchDateInString, dtf);
					tallyERP9InventoryNew.setDispatchDateOrCancellationDate(disPatchDate);
				} else if (disPatchDateInString.contains("-")) {
					dtf = DateTimeFormatter.ofPattern(PATTERN);

					LocalDate disDate = LocalDate.parse(disPatchDateInString, dtf);

					LocalDateTime disPatchDate = LocalDateTime.of(disDate.getYear(), disDate.getMonth(),
							disDate.getDayOfMonth(), 0, 0);
					tallyERP9InventoryNew.setDispatchDateOrCancellationDate(disPatchDate);
				}

				
				String narration = record[36];
				if (disPatchDateInString.contains(":")) {
					dtf = DateTimeFormatter.ofPattern(PATTERNS);
					LocalDateTime disPatchDate = LocalDateTime.parse(narration, dtf);
					tallyERP9InventoryNew.setDispatchDateOrCancellationDate(disPatchDate);
				} 
				
				tallyERP9InventoryNew.setSaleOrderNumber(record[1]);
				tallyERP9InventoryNew.setInvoiceNumber(record[2]);
				tallyERP9InventoryNew.setChannelEntry(record[3]);
				tallyERP9InventoryNew.setChannelLedger(record[4]);
				tallyERP9InventoryNew.setProductName(record[5]);
				tallyERP9InventoryNew.setProductSKUCode((record[6]));
				tallyERP9InventoryNew.setQty(Long.parseLong(record[7]));
				if (record[8] != null && record[8].length() > 0) {
				tallyERP9InventoryNew.setUnitPrice(Double.parseDouble(record[8]));
				}
				tallyERP9InventoryNew.setCurrency(record[9]);
				tallyERP9InventoryNew.setConversionRate(record[10]);
				if (record[11] != null && record[11].length() > 0) {
				tallyERP9InventoryNew.setTotal(Double.parseDouble(record[11]));
				}
				tallyERP9InventoryNew.setCustomerName(record[12]);
				tallyERP9InventoryNew.setShippingAddressName(record[13]);
				tallyERP9InventoryNew.setShippingAddressLine1(record[14]);
				tallyERP9InventoryNew.setShippingAddressLine2(record[15]);
				tallyERP9InventoryNew.setShippingAddressCity(record[16]);
				tallyERP9InventoryNew.setShippingAddressState(record[17]);
				tallyERP9InventoryNew.setShippingAddressCountry(record[18]);
				tallyERP9InventoryNew.setShippingAddressPincode((record[19]));
				tallyERP9InventoryNew.setShippingAddressPhone(record[20]);
				tallyERP9InventoryNew.setShippingProvider(record[21]);
				tallyERP9InventoryNew.setAwbNum(record[22]);
				if (record[23] != null && record[23].length() > 0) {
				tallyERP9InventoryNew.setSales((record[23]));
				}
				tallyERP9InventoryNew.setSalesLedger(record[24]);
				if (record[25] != null && record[25].length() > 0) {
				tallyERP9InventoryNew.setTax((record[25]));
				}
				tallyERP9InventoryNew.setTaxLedger(record[26]);
				if (record[27] != null && record[27].length() > 0) {
				tallyERP9InventoryNew.setAdditionalTax((record[27]));
				}
				if (record[28] != null && record[28].length() > 0) {
				tallyERP9InventoryNew.setAdditionalTaxLedger((record[28]));
				}
				if (record[29] != null && record[29].length() > 0) {
				tallyERP9InventoryNew.setOthercharges((record[29]));
				}
				tallyERP9InventoryNew.setOtherChargesLedger(record[30]);
				if (record[31] != null && record[31].length() > 0) {
					tallyERP9InventoryNew.setServiceTax((record[31]));
				}
				tallyERP9InventoryNew.setStLedger(record[32]);
				if (record[33] != null && record[33].length() > 0) {
				tallyERP9InventoryNew.setImei((record[33]));
				}
				tallyERP9InventoryNew.setGoDown(record[34]);
				tallyERP9InventoryNew.setEntity(record[37]);
				tallyERP9InventoryNew.setVoucherTypeName(record[38]);
				LocalDateTime dateTime = LocalDateTime.now();
				tallyERP9InventoryNew.setCreatedDate(dateTime);
				tallyERP9InventoryNew.setUpdatedDate(dateTime);
				LocalDateTime datetime = LocalDateTime.now();
				tallyERP9InventoryNew.setDateInCSvfile(datetime);
				tallyEr9InventoryNewRepository.save(tallyERP9InventoryNew);
				tallyERP9InventoryNewList.add(tallyERP9InventoryNew);
			}
			response.setData(tallyERP9InventoryNewList);

			reader.close();
		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS030.name(), EnumTypeForErrorCodes.SCUS030.errorMsg());
			 log.error(utils.toJson(response.getError()), exception);
		}

		return response;
	}

}

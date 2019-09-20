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
import com.mbb.mbbplatform.domain.PurchaseEntries;
import com.mbb.mbbplatform.model.ServiceResponse;
import com.mbb.mbbplatform.repos.PurchaseEntriesRepository;
import com.mbb.mbbplatform.svcs.PurchaseEntriesService;
import com.opencsv.CSVReader;

@RestController
public class PurchaseEntriesServiceImpl implements PurchaseEntriesService {
	
	private static Logger log = LoggerFactory.getLogger(PurchaseEntriesServiceImpl.class);

	@Autowired
	private PurchaseEntriesRepository purchaseEntriesRepo;

	@Override
	public ServiceResponse<List<PurchaseEntries>> addPurchaseEntry() {
		
		log.info("adding purchase entry report ");
		ServiceResponse<List<PurchaseEntries>> response = new ServiceResponse<>();
		try {
			CSVReader reader = new CSVReader(new FileReader("mbb-reports/Purchase+Entries_30112018.csv"), ',');

			List<PurchaseEntries> purchaseEntriesList = new ArrayList<>();

			String[] record = null;
			Iterator<String[]> rowIterator = reader.iterator();

			rowIterator.toString();

			while ((record = reader.readNext()) != null) {

				PurchaseEntries purchaseEntries = new PurchaseEntries();

				if (record[0] != null && record[0].length() > 0) {
					String createdlDate = record[0];
					DateTimeFormatter dtf = null;
					LocalDate date = null;
					dtf = DateTimeFormatter.ofPattern("yyyy-MMM-dd");
					date = LocalDate.parse(createdlDate, dtf);

					purchaseEntries.setCreatedlDate(date);
				}
				purchaseEntries.setPoCode(record[1]);
				purchaseEntries.setVoucherNumber(record[2]);
				purchaseEntries.setItemTypeName(record[3]);
				purchaseEntries.setItemSkuCode(record[4]);
				purchaseEntries.setCategory(record[5]);
				if (record[6] != null && record[6].length() > 0) {
					purchaseEntries.setHsnCode(Double.parseDouble(record[6]));
				}
				purchaseEntries.setVendorPartyName(record[7]);
				purchaseEntries.setVendorCode(record[8]);
				purchaseEntries.setVendorSkuCode(record[9]);
				purchaseEntries.setOrderQuantity(record[10]);
				purchaseEntries.setFacility(record[11]);
				if (record[12] != null && record[12].length() > 0) {
					purchaseEntries.setUnitPrice(Double.parseDouble(record[12]));
				}
				if (record[13] != null && record[13].length() > 0) {
					purchaseEntries.setTotal(Double.parseDouble(record[13]));
				}
				purchaseEntries.setCustomerName(record[14]);
				purchaseEntries.setShippingAddressName(record[15]);

				purchaseEntries.setShippingAddressLine1(record[16]);
				purchaseEntries.setShippingAddressLine2(record[17]);
				purchaseEntries.setShippingAddressCity(record[18]);
				purchaseEntries.setShippingAddressState(record[19]);
				purchaseEntries.setShippingAddressCountry(record[20]);

				purchaseEntries.setShippingAddressPincode(record[21]);
				purchaseEntries.setShippingAddressPhone(record[22]);
				purchaseEntries.setShippingProvider(record[23]);
				purchaseEntries.setAwbNum(record[24]);
				purchaseEntries.setPurchaseAmount(record[25]);
				purchaseEntries.setPurchaseLedger(record[26]);
				if (record[27] != null && record[27].length() > 0) {
					purchaseEntries.setCgst(Double.parseDouble(record[27]));
				}
				if (record[28] != null && record[28].length() > 0) {
					purchaseEntries.setCgstRate(Double.parseDouble(record[28]));
				}
				if (record[29] != null && record[29].length() > 0) {
					purchaseEntries.setSgst(Double.parseDouble(record[29]));
				}
				if (record[30] != null && record[30].length() > 0) {
					purchaseEntries.setSgstRate(Double.parseDouble(record[30]));
				}
				if (record[31] != null && record[31].length() > 0) {
					purchaseEntries.setIgst(Double.parseDouble(record[31]));
				}
				if (record[32] != null && record[32].length() > 0) {
					purchaseEntries.setIgstRate(Double.parseDouble(record[32]));
				}
				if (record[33] != null && record[33].length() > 0) {
					purchaseEntries.setUtgst(Double.parseDouble(record[33]));
				}
				if (record[34] != null && record[34].length() > 0) {
					purchaseEntries.setUtgstRate(Double.parseDouble(record[34]));
				}
				if (record[35] != null && record[35].length() > 0) {
					purchaseEntries.setCess(Double.parseDouble(record[35]));
				}
				if (record[36] != null && record[36].length() > 0) {
					purchaseEntries.setCessRate(Double.parseDouble(record[36]));
				}
				if (record[37] != null && record[37].length() > 0) {
					purchaseEntries.setOtherCharges(Double.parseDouble(record[37]));
				}
				purchaseEntries.setOtherChargesLedger(record[38]);
				purchaseEntries.setOtherCharges1(record[39]);
				purchaseEntries.setOtherChargesLedger1(record[40]);
				purchaseEntries.setPurchaseOrderStatus(record[41]);
				purchaseEntries.setUpdated(record[42]);
				purchaseEntries.setGoDown(record[43]);
				purchaseEntries.setNarration(record[44]);
				purchaseEntries.setVoucherTypeName(record[45]);
				purchaseEntries.setChannelState(record[46]);
				purchaseEntries.setChannelPartyGSTIN(record[47]);
				purchaseEntries.setCustomerGSTIN(record[48]);
				purchaseEntries.setGstRegistrationType(record[49]);

				LocalDateTime dateTime = LocalDateTime.now();
				purchaseEntries.setCreatedDate(dateTime);
				purchaseEntries.setUpdatedDate(dateTime);
				LocalDateTime datetime = LocalDateTime.now();
				purchaseEntries.setDateInCSvfile(datetime);
				purchaseEntriesRepo.save(purchaseEntries);
				purchaseEntriesList.add(purchaseEntries);

			}

			response.setData(purchaseEntriesList);

			reader.close();
		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS012.name(), EnumTypeForErrorCodes.SCUS012.errorMsg());
		}

		return response;
	}

}

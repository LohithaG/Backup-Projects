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
import com.mbb.mbbplatform.domain.TallyERP9;
import com.mbb.mbbplatform.model.ServiceResponse;
import com.mbb.mbbplatform.model.Utils;
import com.mbb.mbbplatform.repos.TallyERP9Repository;
import com.mbb.mbbplatform.svcs.TallyERP9Service;
import com.opencsv.CSVReader;

@RestController
@Validated
public class TallyERP9ServiceImpl implements TallyERP9Service {

	private static Logger log = LoggerFactory.getLogger(TallyERP9ServiceImpl.class);

	@Autowired
	private TallyERP9Repository tallyERP9Repository;

	@Autowired
	private Utils utils;

	@Override
	public ServiceResponse<List<TallyERP9>> addTallyERP9() {

		log.info("adding tally erp9 report");

		ServiceResponse<List<TallyERP9>> response = new ServiceResponse<>();
		try {
			CSVReader reader = new CSVReader(new FileReader("mbb-reports/Tally+ERP9_30112018.csv"), ',');

			List<TallyERP9> tallyERP9List = new ArrayList<>();

			String[] record = null;
			Iterator<String[]> rowIterator = reader.iterator();

			rowIterator.toString();

			while ((record = reader.readNext()) != null) {
				TallyERP9 tallyERP9 = new TallyERP9();

				String dateIn = record[0];
				DateTimeFormatter dtf = null;
				LocalDate date = null;
				dtf = DateTimeFormatter.ofPattern("dd-MM-yyyy");
				date = LocalDate.parse(dateIn, dtf);
				tallyERP9.setDate(date);

				tallyERP9.setSaleOrderNumber(record[1]);
				tallyERP9.setInvoiceCode(record[2]);
				tallyERP9.setChannelEntry(record[3]);
				tallyERP9.setChannelLedger(record[4]);
				tallyERP9.setQty(Long.parseLong(record[5]));
				tallyERP9.setProductName(record[6]);
				if (record[7] != null && record[7].length() > 0) {
					tallyERP9.setUnitPrice(Double.parseDouble(record[7]));
				}
				if (record[8] != null && record[8].length() > 0) {
					tallyERP9.setTotal((Double.parseDouble(record[8])));
				}
				if (record[9] != null && record[9].length() > 0) {
					tallyERP9.setSales(Double.parseDouble(record[9]));
				}
				tallyERP9.setSalesLedger(record[10]);
				if (record[11] != null && record[11].length() > 0) {
					tallyERP9.setTax(Double.parseDouble(record[11]));
				}
				tallyERP9.setTaxLedger(record[12]);
				if (record[13] != null && record[13].length() > 0) {
					tallyERP9.setAdditionalTax(Double.parseDouble(record[13]));
				}
				tallyERP9.setAdditionalTaxLedger(record[14]);
				if (record[15] != null && record[15].length() > 0) {
					tallyERP9.setOthercharges(Double.parseDouble(record[15]));
				}
				tallyERP9.setOtherChargesLedger(record[16]);
				LocalDateTime dateTime = LocalDateTime.now();
				tallyERP9.setCreatedDate(dateTime);
				tallyERP9.setUpdatedDate(dateTime);
				LocalDateTime datetime = LocalDateTime.now();
				tallyERP9.setDateInCSvfile(datetime);
				tallyERP9Repository.save(tallyERP9);
				tallyERP9List.add(tallyERP9);
			}
			response.setData(tallyERP9List);

			reader.close();
		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS027.name(), EnumTypeForErrorCodes.SCUS027.errorMsg());
			log.error(utils.toJson(response.getError()), exception);
		}

		return response;
	}

}

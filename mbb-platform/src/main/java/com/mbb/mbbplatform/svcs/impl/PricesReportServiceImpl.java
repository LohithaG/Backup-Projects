package com.mbb.mbbplatform.svcs.impl;

import java.io.FileReader;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.mbb.mbbplatform.common.EnumTypeForErrorCodes;
import com.mbb.mbbplatform.domain.PricesReport;
import com.mbb.mbbplatform.model.ServiceResponse;
import com.mbb.mbbplatform.repos.PricesReportRepository;
import com.mbb.mbbplatform.svcs.PricesReportService;
import com.opencsv.CSVReader;

@RestController
public class PricesReportServiceImpl implements PricesReportService {
	
	private static Logger log = LoggerFactory.getLogger(PricesReportServiceImpl.class);

	@Autowired
	private PricesReportRepository pricesReportRepo;

	@Override
	public ServiceResponse<List<PricesReport>> addCategory() {
		
		log.info("adding category report ");
		ServiceResponse<List<PricesReport>> response = new ServiceResponse<>();
		try {
			CSVReader reader = new CSVReader(new FileReader("mbb-reports/Prices+Report_30112018.csv"), ',');

			List<PricesReport> pricesList = new ArrayList<>();

			String[] record = null;
			Iterator<String[]> rowIterator = reader.iterator();

			rowIterator.toString();

			while ((record = reader.readNext()) != null) {

				PricesReport prices = new PricesReport();

				prices.setChannelName(record[0]);
				prices.setSkuCode(record[1]);
				prices.setSellerSKUOnChannel(record[2]);
				prices.setChannelProductId(record[3]);
				if (record[4] != null && record[4].length() > 0) {
					prices.setSellingPrice(Double.parseDouble(record[4]));
				}
				if (record[5] != null && record[5].length() > 0) {
					prices.setTransferPrice(Double.parseDouble(record[5]));
				}
				prices.setPrices(record[6]);
				prices.setMrp(record[7]);
				prices.setMsp(record[8]);
				prices.setCurrency(record[9]);
				prices.setCreated(record[10]);
				prices.setUpdated(record[11]);
				LocalDateTime dateTime = LocalDateTime.now();
				prices.setCreatedDate(dateTime);
				prices.setUpdatedDate(dateTime);
				LocalDateTime datetime = LocalDateTime.now();
				prices.setDateInCSvfile(datetime);

				pricesReportRepo.save(prices);
				pricesList.add(prices);

			}

			response.setData(pricesList);

			reader.close();
		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS005.name(), EnumTypeForErrorCodes.SCUS005.errorMsg());
		}

		return response;
	}

}

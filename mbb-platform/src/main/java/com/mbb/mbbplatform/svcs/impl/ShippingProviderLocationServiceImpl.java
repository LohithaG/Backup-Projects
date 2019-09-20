package com.mbb.mbbplatform.svcs.impl;

import java.io.FileReader;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.RestController;

import com.mbb.mbbplatform.common.EnumTypeForErrorCodes;
import com.mbb.mbbplatform.domain.ShippingProviderLocation;
import com.mbb.mbbplatform.model.ServiceResponse;
import com.mbb.mbbplatform.model.Utils;
import com.mbb.mbbplatform.repos.ShippingProviderLocationRepository;
import com.mbb.mbbplatform.svcs.ShippingProviderLocationService;
import com.opencsv.CSVReader;

@RestController
@Validated
public class ShippingProviderLocationServiceImpl implements ShippingProviderLocationService {
	
	private static Logger log = LoggerFactory.getLogger(ShippingProviderLocationServiceImpl.class);

	@Autowired
	private ShippingProviderLocationRepository shippingProviderLocationRepository;
	
	@Autowired
	private Utils utils;

	@Override
	public ServiceResponse<List<ShippingProviderLocation>> addShippingProviderLocation() {
		
		log.info("adding shipping provider location report ");

		ServiceResponse<List<ShippingProviderLocation>> response = new ServiceResponse<>();
		try {
			CSVReader reader = new CSVReader(new FileReader("mbb-reports/Shipping+Provider+Location_30112018.csv"),
					',');

			List<ShippingProviderLocation> shippingProviderLocationList = new ArrayList<>();

			String[] record = null;
			Iterator<String[]> rowIterator = reader.iterator();

			rowIterator.toString();

			while ((record = reader.readNext()) != null) {
				ShippingProviderLocation shippingProviderLocation = new ShippingProviderLocation();
				shippingProviderLocation.setName(record[0]);
				 if (record[1] != null && record[1].length() > 0) {
				shippingProviderLocation.setPincode(Long.parseLong(record[1]));
				 }
				shippingProviderLocation.setRoutingCode(record[2]);
				shippingProviderLocation.setShippingProviderMethod(record[3]);
				 if (record[4] != null && record[4].length() > 0) {
				shippingProviderLocation.setCod(Boolean.parseBoolean(record[4]));
				 }
				shippingProviderLocation.setShippingProviderName(record[5]);
				shippingProviderLocation.setShippingProvider(record[6]);
				 if (record[7] != null && record[7].length() > 0) {
				shippingProviderLocation.setEnabled(Boolean.parseBoolean(record[7]));
				 }
				 if (record[8] != null && record[8].length() > 0) {
				shippingProviderLocation.setPriority(Long.parseLong(record[8]));
				 }
				LocalDateTime dateTime = LocalDateTime.now();
				shippingProviderLocation.setCreatedDate(dateTime);
				shippingProviderLocation.setUpdatedDate(dateTime);
				LocalDateTime datetime = LocalDateTime.now();
				shippingProviderLocation.setDateInCSvfile(datetime);
				shippingProviderLocationRepository.save(shippingProviderLocation);
				shippingProviderLocationList.add(shippingProviderLocation);
			}
			response.setData(shippingProviderLocationList);

			reader.close();
		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS025.name(), EnumTypeForErrorCodes.SCUS025.errorMsg());
			 log.error(utils.toJson(response.getError()), exception);
		}

		return response;

	}
}

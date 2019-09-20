package com.mbb.mbbplatform.svcs.impl;

import java.io.FileReader;

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
import com.mbb.mbbplatform.domain.ShippingManifest;
import com.mbb.mbbplatform.model.ServiceResponse;
import com.mbb.mbbplatform.model.Utils;
import com.mbb.mbbplatform.repos.ShippingManifestRepository;
import com.mbb.mbbplatform.svcs.ShippingManifestService;
import com.opencsv.CSVReader;

@RestController
@Validated
public class ShippingManifestServiceImpl implements ShippingManifestService {

	private static Logger log = LoggerFactory.getLogger(ShippingManifestServiceImpl.class);

	@Autowired
	private ShippingManifestRepository manifestRepo;

	@Autowired
	private Utils utils;

	@Override
	public ServiceResponse<List<ShippingManifest>> addShippingManifest() {
		log.info("adding shipping manifest report ");
		ServiceResponse<List<ShippingManifest>> response = new ServiceResponse<>();
		try {
			CSVReader reader = new CSVReader(new FileReader("mbb-reports/Shipping+Manifest_30112018.csv"), ',');

			List<ShippingManifest> shippingManifest = new ArrayList<>();

			String[] record = null;
			Iterator<String[]> rowIterator = reader.iterator();

			rowIterator.toString();

			while ((record = reader.readNext()) != null) {

				ShippingManifest manifest = new ShippingManifest();

				String disPatchDateInString = record[5];
				DateTimeFormatter dtf = null;
				dtf = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
				LocalDateTime disPatchDate = LocalDateTime.parse(disPatchDateInString, dtf);
				manifest.setCreated(disPatchDate);

				String updated = record[20];
				if (updated.contains(":")) {
					dtf = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
					LocalDateTime disPatchDate1 = LocalDateTime.parse(updated, dtf);
					manifest.setUpdated(disPatchDate1);
				}
				manifest.setChannelName(record[0]);
				manifest.setManifestNo(record[1]);
				manifest.setManifestStatus(record[2]);
				manifest.setTrackingNumber(record[3]);
				manifest.setOrderNumber(record[4]);

				manifest.setShippingProviderName(record[6]);
				manifest.setUsername(record[7]);
				manifest.setShippingCity(record[8]);
				manifest.setShippingPackageCode(record[9]);
				manifest.setShippingPackageType(record[10]);
				if (record[11] != null && record[11].length() > 0) {
					manifest.setLength((record[11]));
				}
				if (record[12] != null && record[12].length() > 0) {
					manifest.setWidth(Long.parseLong(record[12]));
				}
				if (record[13] != null && record[13].length() > 0) {
					manifest.setHeight(Long.parseLong(record[13]));
				}
				if (record[14] != null && record[14].length() > 0) {
					manifest.setNoOfProducts(Long.parseLong(record[14]));
				}
				if (record[15] != null && record[15].length() > 0) {
					manifest.setNoOfBoxes(Long.parseLong(record[15]));
				}
				if (record[16] != null && record[16].length() > 0) {
					manifest.setShippingCharges(Long.parseLong(record[16]));
				}
				if (record[17] != null && record[17].length() > 0) {
					manifest.setAmount(Double.parseDouble(record[17]));
				}
				manifest.setComments(record[18]);
				manifest.setShippingMethod(record[19]);
				LocalDateTime dateTime = LocalDateTime.now();
				manifest.setCreatedDate(dateTime);
				manifest.setUpdatedDate(dateTime);
				LocalDateTime datetime = LocalDateTime.now();
				manifest.setDateInCSvfile(datetime);
				manifestRepo.save(manifest);
				shippingManifest.add(manifest);
			}
			response.setData(shippingManifest);
			reader.close();
		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS023.name(), EnumTypeForErrorCodes.SCUS023.errorMsg());
			log.error(utils.toJson(response.getError()), exception);
		}

		return response;

	}

}

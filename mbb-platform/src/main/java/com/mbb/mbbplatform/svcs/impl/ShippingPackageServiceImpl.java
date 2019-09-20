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
import com.mbb.mbbplatform.domain.ShippingPackage;
import com.mbb.mbbplatform.model.ServiceResponse;
import com.mbb.mbbplatform.model.Utils;
import com.mbb.mbbplatform.repos.ShippingPackageRepository;
import com.mbb.mbbplatform.svcs.ShippingPackageService;
import com.opencsv.CSVReader;

@RestController
@Validated
public class ShippingPackageServiceImpl implements ShippingPackageService {
	
	private static Logger log = LoggerFactory.getLogger(ShippingPackageServiceImpl.class);

	@Autowired
	private ShippingPackageRepository shippingPackageRepository;
	
	@Autowired
	private Utils utils;
	
	public static final String PATTERN = "yyyy-MM-dd HH:mm:ss";

	@Override
	public ServiceResponse<List<ShippingPackage>> addShippingPackage() {
		
		log.info("adding shipping package report ");
		ServiceResponse<List<ShippingPackage>> response = new ServiceResponse<>();
		try {
			CSVReader reader = new CSVReader(new FileReader("mbb-reports/Shipping+Package_30112018.csv"), ',');

			List<ShippingPackage> shippingPackageList = new ArrayList<>();

			String[] record = null;
			Iterator<String[]> rowIterator = reader.iterator();

			rowIterator.toString();

			while ((record = reader.readNext()) != null) {
				ShippingPackage shippingPackage = new ShippingPackage();

				String disPatchDateInString = record[29];
				DateTimeFormatter dtf = null;
				dtf = DateTimeFormatter.ofPattern(PATTERN);
				LocalDateTime disPatchDate = LocalDateTime.parse(disPatchDateInString, dtf);
				shippingPackage.setCreated(disPatchDate);

				String disPatchTime = record[29];
				dtf = DateTimeFormatter.ofPattern(PATTERN);
				LocalDateTime disPatchDate1 = LocalDateTime.parse(disPatchTime, dtf);
				shippingPackage.setDispatchTime(disPatchDate1);

				String updated = record[29];
				dtf = DateTimeFormatter.ofPattern(PATTERN);
				LocalDateTime disPatchDate2 = LocalDateTime.parse(updated, dtf);
				shippingPackage.setUpdated(disPatchDate2);

				shippingPackage.setShippingPackageNo(record[0]);
				shippingPackage.setStatus(record[1]);
				shippingPackage.setInvoiceCode(record[2]);
				shippingPackage.setShippingProvider(record[3]);
				shippingPackage.setShippingMethod(record[4]);
				 if (record[5] != null && record[5].length() > 0) {
				shippingPackage.setCashOnDelivery(Boolean.parseBoolean(record[5]));
				 }
				shippingPackage.setShippingAddressName(record[6]);
				shippingPackage.setShippingAddressLine1(record[7]);
				shippingPackage.setShippingAddressLine2(record[8]);
				shippingPackage.setShippingAddressCity(record[9]);
				shippingPackage.setShippingAddressState(record[10]);
				 if (record[11] != null && record[11].length() > 0) {
				shippingPackage.setShippingAddressPincode((record[11]));
				 }
				shippingPackage.setShippingAddressPhone(record[12]);
				shippingPackage.setPicklistNumber(record[13]);
				shippingPackage.setSaleOrderCode(record[14]);
				shippingPackage.setZone(record[15]);
				shippingPackage.setTrackingNumber(record[16]);
				 if (record[17] != null && record[17].length() > 0) {
				shippingPackage.setActualWeight(Long.parseLong(record[17]));
				 }
				shippingPackage.setShippingCharges((record[18]));
				shippingPackage.setCodCharges((record[19]));
				shippingPackage.setAdditionalInfo(record[20]);
				if (record[21] != null && record[21].length() > 0) {
				shippingPackage.setTotalPrice(Double.parseDouble((record[21])));
				}
				 if (record[22] != null && record[22].length() > 0) {
				shippingPackage.setNoOfItems(Long.parseLong(record[22]));
				 }
				 if (record[23] != null && record[23].length() > 0) {
				shippingPackage.setNoOfBoxes(Long.parseLong(record[23]));
				 }
				shippingPackage.setPackingCost((record[24]));
				shippingPackage.setPackageCode(record[25]);
				 if (record[26] != null && record[26].length() > 0) {
				shippingPackage.setLength(Long.parseLong(record[26]));
				 }
				 if (record[27] != null && record[27].length() > 0) {
				shippingPackage.setWidth(Long.parseLong(record[27]));
				 }
				 if (record[28] != null && record[28].length() > 0) {
				shippingPackage.setHeight(Long.parseLong(record[28]));
				 }

				shippingPackage.setShippingManifestCode(record[31]);
				shippingPackage.setReturnTime(record[32]);
				shippingPackage.setShipmentTracking(record[33]);
				
				 if (record[34] != null && record[34].length() > 0) {
				String deliveryDateTime =record[34];
				dtf = DateTimeFormatter.ofPattern(PATTERN);
				LocalDateTime deliveryTime = LocalDateTime.parse(deliveryDateTime, dtf);
				shippingPackage.setDeliveryTime(deliveryTime);
				 }
				shippingPackage.setChannel(record[36]);
				 if (record[37] != null && record[37].length() > 0) {
				shippingPackage.setCollectableAmount(Double.parseDouble((record[37])));
				 }
				LocalDateTime dateTime = LocalDateTime.now();
				shippingPackage.setCreatedDate(dateTime);
				shippingPackage.setUpdatedDate(dateTime);
				LocalDateTime datetime = LocalDateTime.now();
				shippingPackage.setDateInCSvfile(datetime);
				shippingPackageRepository.save(shippingPackage);
				shippingPackageList.add(shippingPackage);
			}
			response.setData(shippingPackageList);

			reader.close();
		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS024.name(), EnumTypeForErrorCodes.SCUS024.errorMsg());
			 log.error(utils.toJson(response.getError()), exception);
		}

		return response;

	}
}

package com.mbb.mbbplatform.svcs.impl;

import java.io.FileReader;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mbb.mbbplatform.common.EnumTypeForErrorCodes;
import com.mbb.mbbplatform.domain.ShiprocketShipmentReport;
import com.mbb.mbbplatform.model.ServiceResponse;
import com.mbb.mbbplatform.model.Utils;
import com.mbb.mbbplatform.repos.ShiprocketShipmentReportRepository;
import com.mbb.mbbplatform.svcs.ShiprocketShipmentReportService;
import com.opencsv.CSVReader;

@Service
public class ShiprocketShipmentReportServiceImpl implements ShiprocketShipmentReportService {

	private static Logger log = LoggerFactory.getLogger(ShiprocketShipmentReportServiceImpl.class);

	@Autowired
	private ShiprocketShipmentReportRepository shiprocketShipmentReportRepo;

	@Autowired
	private Utils utils;
	//@Scheduled(cron = "${srshipmentreport.addShiprocketShipmentReport}")
	@Override
	public ServiceResponse<List<ShiprocketShipmentReport>> addShiprocketShipmentReport() {
		log.info("adding ShiprocketReport report");
		ServiceResponse<List<ShiprocketShipmentReport>> response = new ServiceResponse<>();
		try {

			CSVReader reader = new CSVReader(new FileReader("SR-shipments/OrderExport.csv"), ',');
			
			List<ShiprocketShipmentReport> listshiprocketReport = new ArrayList<>();
			String[] record = null;
			Iterator<String[]> rowIterator = reader.iterator();
			rowIterator.toString();
			while ((record = reader.readNext()) != null) {
				ShiprocketShipmentReport shiprocket = new ShiprocketShipmentReport();
				shiprocket.setOrderID(record[0]);
				shiprocket.setShiprocketCreatedAt(record[1]);
				shiprocket.setChannel(record[2]);
				shiprocket.setStatus(record[3]);
				shiprocket.setChannelSKU(record[4]);
				shiprocket.setMasterSKU(record[5]);
				shiprocket.setProductName(record[6]);
				if (record[7] != null && record[7].length() > 0) {
					shiprocket.setProductQuantity(Long.parseLong(record[7]));
				}
				shiprocket.setChannelCreatedAt(record[8]);
				shiprocket.setCustomerName(record[9]);
				shiprocket.setCustomerEmail(record[10]);
				if (record[11] != null && record[11].length() > 0) {
					shiprocket.setCustomerMobile(Long.parseLong(record[11]));
				}
				shiprocket.setAddressLine1(record[12]);
				shiprocket.setAddressLine2(record[13]);
				shiprocket.setAddressCity(record[14]);
				shiprocket.setAddressState(record[15]);
				shiprocket.setAddressPincode(record[16]);
				shiprocket.setPaymentMethod(record[17]);
				if (record[18] != null && record[18].length() > 0) {
					shiprocket.setProductPrice(Double.parseDouble(record[18]));

				}
				if (record[19] != null && record[19].length() > 0) {
					shiprocket.setOrderTotal(Double.parseDouble(record[19]));
				}
				if (record[20] != null && record[20].length() > 0) {
					shiprocket.setWeight(Double.parseDouble(record[19]));
				}

				shiprocket.setDimensions(record[21]);
				shiprocket.setCourierCompany(record[22]);
				shiprocket.setaWBCode(record[23]);
				shiprocket.setaWBAssignedDate(record[24]);
				shiprocket.setPickupLocationID(record[25]);
				shiprocket.setPickupAddressName(record[26]);
				shiprocket.setPickupscheduledDate(record[27]);
				shiprocket.setOrderShippedDate(record[28]);
				shiprocket.setOrderDeliveredDate(record[29]);
				shiprocket.setrTOInitiatedDate(record[30]);
				shiprocket.setrTODeliveredDate(record[31]);
				LocalDateTime dateTime = LocalDateTime.now();
				shiprocket.setCreatedDate(dateTime);
				shiprocket.setUpdatedDate(dateTime);
				listshiprocketReport.add(shiprocket);

			}
			shiprocketShipmentReportRepo.saveAll(listshiprocketReport);
			response.setData(listshiprocketReport);

		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS223.name(), EnumTypeForErrorCodes.SCUS223.errorMsg());
			log.error(utils.toJson(response.getError()), e);

		}
		return response;
	}

	@Override
	public ServiceResponse<Collection<ShiprocketShipmentReport>> getAllShiprocketShipment() {
		log.info("getting all Shiprocket");
		ServiceResponse<Collection<ShiprocketShipmentReport>> response = new ServiceResponse<>();
		try {
			Collection<ShiprocketShipmentReport> listShiprocket = shiprocketShipmentReportRepo.findAll();
			response.setData(listShiprocket);
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS224.name(), EnumTypeForErrorCodes.SCUS224.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}
		return response;

	}
}

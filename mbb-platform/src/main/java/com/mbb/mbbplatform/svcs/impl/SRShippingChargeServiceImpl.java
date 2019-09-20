package com.mbb.mbbplatform.svcs.impl;

import java.io.FileReader;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import com.mbb.mbbplatform.common.EnumTypeForErrorCodes;
import com.mbb.mbbplatform.domain.SRShippingCharge;
import com.mbb.mbbplatform.model.ServiceResponse;
import com.mbb.mbbplatform.model.Utils;
import com.mbb.mbbplatform.repos.SRShippingChargeRepository;
import com.mbb.mbbplatform.svcs.SRShippingChargeService;
import com.opencsv.CSVReader;

@Service
public class SRShippingChargeServiceImpl implements SRShippingChargeService {

	private static Logger log = LoggerFactory.getLogger(SRShippingChargeServiceImpl.class);

	@Autowired
	private SRShippingChargeRepository sRShippingChargeRepo;

	@Autowired
	private Utils utils;

	
	
	@Override
	public ServiceResponse<List<SRShippingCharge>> addSRShippingCharge() {
		log.info("adding SRShippingcharge report");
		ServiceResponse<List<SRShippingCharge>> response = new ServiceResponse<>();
		try {
			CSVReader reader = new CSVReader(new FileReader("SR-shipments/export.csv"),
					',');
			List<SRShippingCharge> listshiprocketReport = new ArrayList<>();
			String[] record = null;
			Iterator<String[]> rowIterator = reader.iterator();
			rowIterator.toString();
			while ((record = reader.readNext()) != null) {
				SRShippingCharge sRShippingCharge = new SRShippingCharge();

				sRShippingCharge.setOrderNumber(record[1]);
				sRShippingCharge.setaWBNumber(record[2]);
				sRShippingCharge.setCourierName(record[3]);
				sRShippingCharge.setPaymentMode(record[4]);
				if (record[24] != null && record[24].length() > 0) {
					sRShippingCharge.setFreightTotalAmount(Double.parseDouble(record[24]));
				}
				LocalDateTime dateTime = LocalDateTime.now();
				sRShippingCharge.setCreatedDate(dateTime);
				sRShippingCharge.setUpdatedDate(dateTime);
				listshiprocketReport.add(sRShippingCharge);

			}
			sRShippingChargeRepo.saveAll(listshiprocketReport);
			response.setData(listshiprocketReport);
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS239.name(), EnumTypeForErrorCodes.SCUS239.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}
		return response;
	}
}

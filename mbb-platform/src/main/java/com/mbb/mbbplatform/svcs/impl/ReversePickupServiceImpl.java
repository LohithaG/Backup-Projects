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
import org.springframework.web.bind.annotation.RestController;

import com.mbb.mbbplatform.common.EnumTypeForErrorCodes;
import com.mbb.mbbplatform.domain.ReversePickup;
import com.mbb.mbbplatform.model.ServiceResponse;
import com.mbb.mbbplatform.repos.ReversePickupRepository;
import com.mbb.mbbplatform.svcs.ReversePickupService;
import com.opencsv.CSVReader;

@RestController
public class ReversePickupServiceImpl implements ReversePickupService {
	
	private static Logger log = LoggerFactory.getLogger(ReversePickupServiceImpl.class);
	@Autowired
	private ReversePickupRepository reversePickupRepo;
	public static final String DATEFORMAT="yyyy-MM-dd HH:mm:ss";

	@Override
	public ServiceResponse<List<ReversePickup>> addReversePickUp() {
		
		log.info("adding reverse pickup report");
		ServiceResponse<List<ReversePickup>> response = new ServiceResponse<>();
		try {
			CSVReader reader = new CSVReader(new FileReader("mbb-reports/Reverse+Pickup_30112018.csv"), ',');

			List<ReversePickup> reversePickupList = new ArrayList<>();

			String[] record = null;
			Iterator<String[]> rowIterator = reader.iterator();

			rowIterator.toString();

			while ((record = reader.readNext()) != null) {

				ReversePickup reversePickup = new ReversePickup();

				String disPatchDateInString = record[1];
				DateTimeFormatter dtf = null;
				dtf = DateTimeFormatter.ofPattern(DATEFORMAT);
				LocalDateTime disPatchDate = LocalDateTime.parse(disPatchDateInString, dtf);
				reversePickup.setSaleOrderReceived(disPatchDate);

				String dispatchedDate = record[7];
				dtf = DateTimeFormatter.ofPattern(DATEFORMAT);
				LocalDateTime disPatchDate1 = LocalDateTime.parse(dispatchedDate, dtf);
				reversePickup.setDispatchedDate(disPatchDate1);

				String reversePickupCreated = record[9];
				dtf = DateTimeFormatter.ofPattern(DATEFORMAT);
				LocalDateTime disPatchDate2 = LocalDateTime.parse(reversePickupCreated, dtf);
				reversePickup.setReversePickupLastUpdated(disPatchDate2);

				String reversePickupCreatedupdate = record[8];
				dtf = DateTimeFormatter.ofPattern(DATEFORMAT);
				LocalDateTime disPatchDate3 = LocalDateTime.parse(reversePickupCreatedupdate, dtf);
				reversePickup.setReversePickupLastUpdated(disPatchDate3);

				reversePickup.setSaleOrderItemCode(record[0]);
				reversePickup.setOriginalSaleOrderCode(record[2]);
				reversePickup.setItemName(record[3]);
				reversePickup.setItemSkuCode(record[4]);
				reversePickup.setReversePickupNo(record[5]);
				 if (record[6] != null && record[6].length() > 0) {
				reversePickup.setTrackingNo(Long.parseLong(record[6]));
				 }
				reversePickup.setReversePickupStatus(record[10]);
				reversePickup.setReversePickupAction(record[11]);
				reversePickup.setReversePickupReason(record[12]);
				reversePickup.setReplacementSaleOrderCode(record[13]);
				reversePickup.setChannelName(record[14]);
				reversePickup.setReturnInvoiceNumber(record[15]);
				LocalDateTime dateTime = LocalDateTime.now();
				reversePickup.setCreatedDate(dateTime);
				reversePickup.setUpdatedDate(dateTime);
				LocalDateTime datetime = LocalDateTime.now();
				reversePickup.setDateInCSvfile(datetime);
				reversePickupRepo.save(reversePickup);
				reversePickupList.add(reversePickup);

			}

			response.setData(reversePickupList);

			reader.close();
		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS018.name(), EnumTypeForErrorCodes.SCUS018.errorMsg());
		}

		return response;
	}

}

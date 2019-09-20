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
import com.mbb.mbbplatform.domain.BusyManagement;
import com.mbb.mbbplatform.model.ServiceResponse;
import com.mbb.mbbplatform.repos.BusyManagementRepository;
import com.mbb.mbbplatform.svcs.BusyManagementService;
import com.opencsv.CSVReader;

@RestController
public class BusyManagementServiceImpl implements BusyManagementService {
	private static Logger log = LoggerFactory.getLogger(BusyManagementServiceImpl.class);

	@Autowired
	private BusyManagementRepository busyManagementRepo;

	@Override
	public ServiceResponse<List<BusyManagement>> addBusyManagement() {
		log.info("adding busy management report");
		ServiceResponse<List<BusyManagement>> response = new ServiceResponse<>();

		try {
			CSVReader reader = new CSVReader(new FileReader("mbb-reports/Busy+Management_30112018.csv"), ',');

			List<BusyManagement> busymanagementList = new ArrayList<>();

			String[] record = null;
			Iterator<String[]> rowIterator = reader.iterator();

			rowIterator.toString();

			while ((record = reader.readNext()) != null) {

				BusyManagement busyManagement = new BusyManagement();
				busyManagement.setVchSeries(record[0]);

				String bildate = record[1];
				DateTimeFormatter dtf = null;
				LocalDate date = null;
				dtf = DateTimeFormatter.ofPattern("dd-MM-yy");
				date = LocalDate.parse(bildate, dtf);
				busyManagement.setVchOrBillDate(date);
				busyManagement.setVchOrBillNo(record[2]);

				busyManagement.setSaleOrPurchaseType(record[3]);
				busyManagement.setPartyName(record[4]);
				busyManagement.setMcName(record[5]);
				busyManagement.setItemName(record[6]);
				if (record[7] != null && record[7].length() > 0) {
					busyManagement.setQuantity(Double.parseDouble(record[7]));
				}
				busyManagement.setUnit(record[8]);
				if (record[9] != null && record[9].length() > 0) {
					busyManagement.setPrice(Double.parseDouble(record[9]));
				}
				if (record[10] != null && record[10].length() > 0) {
					busyManagement.setAmount(Double.parseDouble(record[10]));
				}
				busyManagement.setVchOptFeild(record[11]);
				busyManagement.setBilledPartyName(record[12]);
				busyManagement.setBilledAddLine1(record[13]);
				busyManagement.setBilledAddLine2(record[14]);
				busyManagement.setBilledAddLine3(record[15]);
				busyManagement.setBilledAddLine4(record[16]);
				busyManagement.setBilledPartyMobileNo(record[17]);
				busyManagement.setBsName(record[18]);
				if (record[19] != null && record[19].length() > 0) {
					busyManagement.setBsPercent(Double.parseDouble(record[19]));
				}
				if (record[20] != null && record[20].length() > 0) {
					busyManagement.setBsAmount(Double.parseDouble(record[20]));
				}
				busyManagement.setBs1Name(record[21]);

				if (record[22] != null && record[22].length() > 0) {
					busyManagement.setBs1Amount(Double.parseDouble(record[22]));
				}

				busyManagement.setBs2Name(record[23]);
				if (record[24] != null && record[24].length() > 0) {
					busyManagement.setBs2Amount(Double.parseDouble(record[24]));
				}
				busyManagement.setBs3Name(record[25]);
				if (record[26] != null && record[26].length() > 0) {
					busyManagement.setBs3Amount(Double.parseDouble(record[26]));
				}
				if (record[27] != null && record[27].length() > 0) {
					busyManagement.setImei(Long.parseLong(record[27]));
				}
				busyManagement.setGrOrRrNo(record[28]);
				busyManagement.setTransport(record[29]);
				if (record[30] != null && record[30].length() > 0) {
					busyManagement.setTotal(Double.parseDouble(record[30]));
				}
				LocalDateTime dateTime = LocalDateTime.now();
				busyManagement.setCreatedDate(dateTime);
				busyManagement.setUpdatedDate(dateTime);
				LocalDateTime datetime = LocalDateTime.now();
				busyManagement.setDateInCSvfile(datetime);
				busyManagementRepo.save(busyManagement);
				busymanagementList.add(busyManagement);

			}

			response.setData(busymanagementList);

			reader.close();
		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS003.name(), EnumTypeForErrorCodes.SCUS003.errorMsg());
		}

		return response;
	}
}

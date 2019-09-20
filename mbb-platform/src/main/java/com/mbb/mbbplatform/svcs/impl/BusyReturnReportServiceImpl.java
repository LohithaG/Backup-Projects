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
import com.mbb.mbbplatform.domain.BusyReturnReport;
import com.mbb.mbbplatform.model.ServiceResponse;
import com.mbb.mbbplatform.repos.BusyReturnReportRepository;
import com.mbb.mbbplatform.svcs.BusyReturnReportService;
import com.opencsv.CSVReader;

@RestController
public class BusyReturnReportServiceImpl implements BusyReturnReportService {
	private static Logger log = LoggerFactory.getLogger(BusyReturnReportServiceImpl.class);

	@Autowired
	private BusyReturnReportRepository backReturnReportRepo;

	@Override
	public ServiceResponse<List<BusyReturnReport>> addBusyReturnReport() {
		log.info("adding busy return report");
		ServiceResponse<List<BusyReturnReport>> response = new ServiceResponse<>();

		try {
			CSVReader reader = new CSVReader(new FileReader("mbb-reports/Busy+Return+Report_30112018.csv"), ',');

			List<BusyReturnReport> busyReturnReportList = new ArrayList<>();

			String[] record = null;
			Iterator<String[]> rowIterator = reader.iterator();

			rowIterator.toString();

			while ((record = reader.readNext()) != null) {

				BusyReturnReport busyReturnReport = new BusyReturnReport();

				String bildate = record[1];
				DateTimeFormatter dtf = null;
				LocalDate date = null;
				dtf = DateTimeFormatter.ofPattern("dd-MM-yyyy");
				date = LocalDate.parse(bildate, dtf);
				busyReturnReport.setVchOrBillDate(date);

				String dateInString = record[41];

				if (dateInString.contains("-")) {
					dtf = DateTimeFormatter.ofPattern("dd-MM-yyyy");
					date = LocalDate.parse(dateInString, dtf);
					busyReturnReport.setOriginalSalePurcDate(date);
				} else {
					dtf = DateTimeFormatter.ofPattern("dd/MM/yyyy");
					date = LocalDate.parse(dateInString, dtf);
					busyReturnReport.setOriginalSalePurcDate(date);
				}

				busyReturnReport.setVchSeries(record[0]);

				busyReturnReport.setVchOrBillNo(record[2]);
				busyReturnReport.setSaleOrPurchaseType(record[3]);
				busyReturnReport.setPartyName(record[4]);
				busyReturnReport.setMcName(record[5]);
				busyReturnReport.setItemName(record[6]);
				 if (record[7] != null && record[7].length() > 0) {
				busyReturnReport.setQuantity(Double.parseDouble(record[7]));
				 }
				busyReturnReport.setUnit(record[8]);
				 if (record[9] != null && record[9].length() > 0) {
				busyReturnReport.setPrice(Double.parseDouble(record[9]));
				 }
				 if (record[10] != null && record[10].length() > 0) {
				busyReturnReport.setAmount(Double.parseDouble(record[10]));
				 }
				busyReturnReport.setVchOptFeild(record[11]);
				busyReturnReport.setBilledPartyName(record[12]);
				busyReturnReport.setBilledAddLine1(record[13]);
				busyReturnReport.setBilledAddLine2(record[14]);
				busyReturnReport.setBilledAddLine3(record[15]);
				busyReturnReport.setBilledAddLine4(record[16]);
				busyReturnReport.setBilledPartyMobileNo(record[17]);

				busyReturnReport.setBsName(record[18]);
				if (record[19] != null && record[19].length() > 0) {
				busyReturnReport.setBsPercent(Double.parseDouble(record[19]));
				}
				 if (record[20] != null && record[20].length() > 0) {
				busyReturnReport.setBsAmount(Double.parseDouble(record[20]));
				 }

				busyReturnReport.setBs1Name(record[21]);
				busyReturnReport.setBs1Percent((record[22]));
				 if (record[23] != null && record[23].length() > 0) {
				busyReturnReport.setBs1Amount(Double.parseDouble(record[23]));
				 }

				busyReturnReport.setBs2Name(record[24]);
				if (record[25] != null && record[25].length() > 0) {
				busyReturnReport.setBs2Percent(Double.parseDouble(record[25]));
				}
				 if (record[26] != null && record[26].length() > 0) {
				busyReturnReport.setBs2Amount(Double.parseDouble(record[26]));
				 }

				busyReturnReport.setBs3Name(record[27]);
				 if (record[28] != null && record[28].length() > 0) {
				busyReturnReport.setBs3Percent(Double.parseDouble(record[28]));
				 }
				 if (record[29] != null && record[29].length() > 0) {
				busyReturnReport.setBs3Amount(Double.parseDouble(record[29]));
				 }

				busyReturnReport.setBs4Name(record[30]);
				 if (record[31] != null && record[31].length() > 0) {
				busyReturnReport.setBs4Amount(Double.parseDouble(record[31]));
				 }

				busyReturnReport.setBs5Name(record[32]);
				if (record[33] != null && record[33].length() > 0) {
				busyReturnReport.setBs5Amount(Double.parseDouble(record[33]));
				}

				busyReturnReport.setBs6Name(record[34]);
				 if (record[35] != null && record[35].length() > 0) {
				busyReturnReport.setBs6Amount(Double.parseDouble(record[35]));
				 }
				 if (record[36] != null && record[36].length() > 0) {
				busyReturnReport.setImei(Long.parseLong(record[36]));
				 }
				busyReturnReport.setGrOrRrNo(record[37]);
				busyReturnReport.setTransport(record[38]);
				 if (record[39] != null && record[39].length() > 0) {
				busyReturnReport.setTotal(Double.parseDouble(record[39]));
				 }
				 if (record[40] != null && record[40].length() > 0) {
				busyReturnReport.setOriginalSalePurcVchNo(record[40]);
				 }
			
				LocalDateTime dateTime = LocalDateTime.now();
				busyReturnReport.setCreatedDate(dateTime);
				busyReturnReport.setUpdatedDate(dateTime);
				LocalDateTime datetime = LocalDateTime.now();
				busyReturnReport.setDateInCSvfile(datetime);
				backReturnReportRepo.save(busyReturnReport);
				busyReturnReportList.add(busyReturnReport);

			}

			response.setData(busyReturnReportList);

			reader.close();
		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS004.name(), EnumTypeForErrorCodes.SCUS004.errorMsg());
		}

		return response;
	}
}

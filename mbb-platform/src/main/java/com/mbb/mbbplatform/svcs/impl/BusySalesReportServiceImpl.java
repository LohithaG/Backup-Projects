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
import com.mbb.mbbplatform.domain.BusySalesReport;
import com.mbb.mbbplatform.model.ServiceResponse;
import com.mbb.mbbplatform.repos.BusySalesReportRepositoty;
import com.mbb.mbbplatform.svcs.BusySalesReportService;
import com.opencsv.CSVReader;

@RestController
public class BusySalesReportServiceImpl implements BusySalesReportService {
	
	private static Logger log = LoggerFactory.getLogger(BusySalesReportServiceImpl.class);

	@Autowired
	private BusySalesReportRepositoty busySalesReportRepo;
	
	@Override
	public ServiceResponse<List<BusySalesReport>> addBusySalesReport() {
		log.info("adding busy sales report");
		ServiceResponse<List<BusySalesReport>> response = new ServiceResponse<>();

		try {
			CSVReader reader = new CSVReader(new FileReader("mbb-reports/Busy+Sales+Report_30112018.csv"), ',');

			List<BusySalesReport> busySalesReportList = new ArrayList<>();

			String[] record = null;
			Iterator<String[]> rowIterator = reader.iterator();

			rowIterator.toString();

			while ((record = reader.readNext()) != null) {

				BusySalesReport busySalesReport = new BusySalesReport();

				String bildate = record[1];
				DateTimeFormatter dtf = null;
				LocalDate date = null;
				dtf = DateTimeFormatter.ofPattern("dd-MM-yyyy");
				date = LocalDate.parse(bildate, dtf);
				busySalesReport.setVchOrBillDate(date);

				busySalesReport.setVchSeries(record[0]);

				busySalesReport.setVchOrBillNo(record[2]);
				busySalesReport.setSaleOrPurchaseType(record[3]);
				busySalesReport.setPartyName(record[4]);
				busySalesReport.setMcName(record[5]);
				busySalesReport.setItemName(record[6]);
				if (record[7] != null && record[7].length() > 0) {
					busySalesReport.setQuantity(Double.parseDouble(record[7]));
				}
				busySalesReport.setUnit(record[8]);
				if (record[9] != null && record[9].length() > 0) {
					busySalesReport.setPrice(Double.parseDouble(record[9]));
				}
				if (record[10] != null && record[10].length() > 0) {
					busySalesReport.setAmount(Double.parseDouble(record[10]));
				}
				busySalesReport.setVchOptFeild(record[11]);
				busySalesReport.setBilledPartyName(record[12]);
				busySalesReport.setBilledAddLine1(record[13]);
				busySalesReport.setBilledAddLine2(record[14]);
				busySalesReport.setBilledAddLine3(record[15]);
				busySalesReport.setBilledAddLine4(record[16]);
				if (record[17] != null && record[17].length() > 0) {
					busySalesReport.setBilledPartyMobileNo(record[17]);
				}

				busySalesReport.setBsName(record[18]);
				if (record[19] != null && record[19].length() > 0) {
				busySalesReport.setBsPercent(Double.parseDouble(record[19]));
				}
				if (record[20] != null && record[20].length() > 0) {
					busySalesReport.setBsAmount(Double.parseDouble(record[20]));
				}

				busySalesReport.setBs1Name(record[21]);
				if (record[22] != null && record[22].length() > 0) {
				busySalesReport.setBs1Percent(Double.parseDouble(record[22]));
				}
				if (record[23] != null && record[23].length() > 0) {
					busySalesReport.setBs1Amount(Double.parseDouble(record[23]));
				}
				busySalesReport.setBs2Name(record[24]);
				if (record[25] != null && record[25].length() > 0) {
				busySalesReport.setBs2Percent(Double.parseDouble(record[25]));
				}
				if (record[26] != null && record[26].length() > 0) {
					busySalesReport.setBs2Amount(Double.parseDouble(record[26]));
				}

				busySalesReport.setBs3Name(record[27]);
				busySalesReport.setBs3Percent(Double.parseDouble(record[28]));
				if (record[29] != null && record[29].length() > 0) {
					busySalesReport.setBs3Amount(Double.parseDouble(record[29]));
				}

				busySalesReport.setBs4Name(record[30]);
				if (record[31] != null && record[31].length() > 0) {
					busySalesReport.setBs4Amount(Double.parseDouble(record[31]));
				}

				busySalesReport.setBs5Name(record[32]);
				if (record[33] != null && record[33].length() > 0) {
					busySalesReport.setBs5Amount(Double.parseDouble(record[33]));
				}
				busySalesReport.setBs6Name(record[34]);
				if (record[35] != null && record[35].length() > 0) {
					busySalesReport.setBs6Amount(Double.parseDouble(record[35]));
				}
				if (record[36] != null && record[36].length() > 0) {
				busySalesReport.setImei(Long.parseLong(record[36]));
				}
				busySalesReport.setGrOrRrNo(record[37]);
				busySalesReport.setTransport(record[38]);
				if (record[39] != null && record[39].length() > 0) {
					busySalesReport.setTotal(Double.parseDouble(record[39]));
				}
				if (record[40] != null && record[40].length() > 0) {
					busySalesReport.setConversionRate(Double.parseDouble(record[40]));
				}
				LocalDateTime dateTime = LocalDateTime.now();
				busySalesReport.setCreatedDate(dateTime);
				busySalesReport.setUpdatedDate(dateTime);
				LocalDateTime datetime = LocalDateTime.now();
				busySalesReport.setDateInCSvfile(datetime);
				busySalesReportRepo.save(busySalesReport);
				busySalesReportList.add(busySalesReport);

			}

			response.setData(busySalesReportList);

			reader.close();
		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS019.name(), EnumTypeForErrorCodes.SCUS019.errorMsg());
		}

		return response;
	}
}

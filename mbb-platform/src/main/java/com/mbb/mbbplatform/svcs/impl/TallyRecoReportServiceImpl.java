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
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.RestController;

import com.mbb.mbbplatform.common.EnumTypeForErrorCodes;
import com.mbb.mbbplatform.domain.TallyRecoReport;
import com.mbb.mbbplatform.model.ServiceResponse;
import com.mbb.mbbplatform.model.Utils;
import com.mbb.mbbplatform.repos.TallyRecoReportRepository;
import com.mbb.mbbplatform.svcs.TallyRecoReportService;
import com.opencsv.CSVReader;

@RestController
@Validated
public class TallyRecoReportServiceImpl implements TallyRecoReportService {
	
	private static Logger log = LoggerFactory.getLogger(TallyRecoReportServiceImpl.class);

	@Autowired
	private TallyRecoReportRepository tallyRecoReportRepository;
	
	@Autowired
	private Utils utils;

	@Override
	public ServiceResponse<List<TallyRecoReport>> addTallyRecoReport() {
		
		log.info("adding tally reco report");
		ServiceResponse<List<TallyRecoReport>> response = new ServiceResponse<>();
		try {
			CSVReader reader = new CSVReader(new FileReader("mbb-reports/Tally+Reco+Report_30112018.csv"), ',');

			List<TallyRecoReport> tallyRecoReportList = new ArrayList<>();

			String[] record = null;
			Iterator<String[]> rowIterator = reader.iterator();

			rowIterator.toString();
			while ((record = reader.readNext()) != null) {
				TallyRecoReport tallyRecoReport = new TallyRecoReport();
				String settlementDate = record[0];
				DateTimeFormatter dtf = null;
				LocalDate date = null;
				if (settlementDate.contains("-")) {
					dtf = DateTimeFormatter.ofPattern("dd-MM-yyyy");
					date = LocalDate.parse(settlementDate, dtf);
					tallyRecoReport.setSettlementDate(date);
				} else {
					dtf = DateTimeFormatter.ofPattern("dd/MM/yyyy");
					date = LocalDate.parse(settlementDate, dtf);
					tallyRecoReport.setSettlementDate(date);
				}
				tallyRecoReport.setChannelName(record[1]);
				if (record[2] != null && record[2].length() > 0) {
				tallyRecoReport.setSettlementAmount(Double.parseDouble(record[2]));
				}
				tallyRecoReport.setTransactionType(record[3]);
				tallyRecoReport.setSettlementId(record[4]);
				tallyRecoReport.setOrderId(record[5]);
				tallyRecoReport.setOrderItemId(record[6]);
				if (record[7] != null && record[7].length() > 0) {
				tallyRecoReport.setChannelRecovery(Double.parseDouble(record[7]));
				}
				LocalDateTime dateTime = LocalDateTime.now();
				tallyRecoReport.setCreatedDate(dateTime);
				tallyRecoReport.setUpdatedDate(dateTime);
				LocalDateTime datetime = LocalDateTime.now();
				tallyRecoReport.setDateInCSvfile(datetime);
				tallyRecoReportRepository.save(tallyRecoReport);
				tallyRecoReportList.add(tallyRecoReport);
			}
			response.setData(tallyRecoReportList);
			reader.close();

		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS033.name(), EnumTypeForErrorCodes.SCUS033.errorMsg());
			 log.error(utils.toJson(response.getError()), exception);
		}

		return response;
	}
}

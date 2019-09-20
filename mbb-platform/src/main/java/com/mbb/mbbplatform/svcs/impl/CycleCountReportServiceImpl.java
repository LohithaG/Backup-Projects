package com.mbb.mbbplatform.svcs.impl;

import java.io.FileReader;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.mbb.mbbplatform.common.EnumTypeForErrorCodes;
import com.mbb.mbbplatform.domain.CycleCountReport;
import com.mbb.mbbplatform.model.ServiceResponse;
import com.mbb.mbbplatform.model.Utils;
import com.mbb.mbbplatform.repos.CycleCountReportRepository;
import com.mbb.mbbplatform.svcs.CycleCountReportService;
import com.opencsv.CSVReader;

@RestController
public class CycleCountReportServiceImpl implements CycleCountReportService {

	private static Logger log = LoggerFactory.getLogger(CycleCountReportServiceImpl.class);

	@Autowired
	private Utils utils;

	@Autowired
	private CycleCountReportRepository cycleCountReportRepo;

	@Override
	public ServiceResponse<List<CycleCountReport>> addCycleCount() {
		log.info("adding cyclecount report");
		ServiceResponse<List<CycleCountReport>> response = new ServiceResponse<>();
		try {
			CSVReader reader = new CSVReader(new FileReader("mbb-reports/CYCLE_COUNT_REPORT_30112018.csv"), ',');

			List<CycleCountReport> cycleCountList = new ArrayList<>();

			String[] record = null;
			Iterator<String[]> rowIterator = reader.iterator();

			rowIterator.toString();

			while ((record = reader.readNext()) != null) {

				CycleCountReport cycleCount = new CycleCountReport();

				cycleCount.setCycleCountCode(record[0]);
				cycleCount.setSubCycleCountCode(record[1]);

				cycleCount.setShelfCode(record[2]);
				cycleCount.setShelfCodeStatus(record[3]);
				cycleCount.setItemCodes(record[4]);
				cycleCount.setUpdated(record[5]);
				cycleCount.setShelfUpdated(record[6]);
				cycleCount.setUser(record[7]);
				LocalDateTime dateTime = LocalDateTime.now();
				cycleCount.setCreatedDate(dateTime);
				cycleCount.setUpdatedDate(dateTime);
				LocalDateTime datetime = LocalDateTime.now();
				cycleCount.setDateInCSvfile(datetime);
				cycleCountReportRepo.save(cycleCount);
				cycleCountList.add(cycleCount);

			}

			response.setData(cycleCountList);

			reader.close();
		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS009.name(), EnumTypeForErrorCodes.SCUS009.errorMsg());
			log.error(utils.toJson(response.getError()), exception);
		}

		return response;
	}

}

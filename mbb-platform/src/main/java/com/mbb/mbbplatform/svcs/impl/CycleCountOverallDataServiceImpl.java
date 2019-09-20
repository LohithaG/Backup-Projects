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
import com.mbb.mbbplatform.domain.CycleCountOverallData;
import com.mbb.mbbplatform.model.ServiceResponse;
import com.mbb.mbbplatform.model.Utils;
import com.mbb.mbbplatform.repos.CycleCountOverallDataRepository;
import com.mbb.mbbplatform.svcs.CycleCountOverallDataService;
import com.opencsv.CSVReader;

@RestController
public class CycleCountOverallDataServiceImpl implements CycleCountOverallDataService{

	private static Logger log = LoggerFactory.getLogger(CycleCountOverallDataServiceImpl.class);

	@Autowired
	private Utils utils;
	
	@Autowired
	private CycleCountOverallDataRepository cycleCountRepo;

	@Override
	public ServiceResponse<List<CycleCountOverallData>> addCycleCountOverallData() {

		log.info("adding cyclecount overall report");

		ServiceResponse<List<CycleCountOverallData>> response = new ServiceResponse<>();
		try {
			CSVReader reader = new CSVReader(new FileReader("mbb-reports/Cycle+Count+Overall+Data_30112018.csv"), ',');

			List<CycleCountOverallData> cycleCountList = new ArrayList<>();
			
			String[] record = null;
			Iterator<String[]> rowIterator = reader.iterator();
			
			rowIterator.toString();
			
			while ((record = reader.readNext()) != null) {

				CycleCountOverallData cycleCount = new CycleCountOverallData();
           
				cycleCount.setDiscarded(record[0]);
				cycleCount.setShelfCode(record[1]);
				cycleCount.setProductName(record[2]);
				cycleCount.setSeller(record[3]);
				cycleCount.setSkuCode(record[4]);
				cycleCount.setExpectedInventory(record[5]);
				cycleCount.setInventoryFound(record[6]);
				cycleCount.setExtra(record[7]);
				cycleCount.setExtraReconciled(record[8]);
				cycleCount.setNetExtra(record[9]);
				cycleCount.setMissing(record[10]);
				cycleCount.setMissingReconciled(record[11]);
				cycleCount.setNetMissing(record[12]);
				cycleCount.setUsername(record[13]);
				cycleCount.setCreated(record[14]);
				LocalDateTime dateTime = LocalDateTime.now();
				cycleCount.setCreatedDate(dateTime);
				cycleCount.setUpdatedDate(dateTime);
				LocalDateTime datetime = LocalDateTime.now();
				cycleCount.setDateInCSvfile(datetime);
				cycleCountRepo.save(cycleCount);
				cycleCountList.add(cycleCount);
				
			}
			
			response.setData(cycleCountList);
			
			reader.close();
		} catch (Exception exception) {
			 response.setError(EnumTypeForErrorCodes.SCUS008.name(),EnumTypeForErrorCodes.SCUS008.errorMsg());
			 log.error(utils.toJson(response.getError()), exception);
		}

		return response;
	}
}

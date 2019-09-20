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
import com.mbb.mbbplatform.domain.ReorderReport;
import com.mbb.mbbplatform.model.ServiceResponse;
import com.mbb.mbbplatform.repos.ReorderReportRepository;
import com.mbb.mbbplatform.svcs.ReOrderReportService;
import com.opencsv.CSVReader;

@RestController
public class ReOrderReportServiceImpl implements ReOrderReportService{
	
	private static Logger log = LoggerFactory.getLogger(ReOrderReportServiceImpl.class);

	@Autowired
	private ReorderReportRepository reOrderReportRepo;
	
	@Override
	public ServiceResponse<List<ReorderReport>> addReOrderReport() {
		
		log.info("adding reorder report ");
		ServiceResponse<List<ReorderReport>> response = new ServiceResponse<>();
		try {
			CSVReader reader = new CSVReader(new FileReader("mbb-reports/Reorder+Report_30112018.csv"), ',');

			List<ReorderReport> reOrdersList = new ArrayList<>();
			
			String[] record = null;
			Iterator<String[]> rowIterator = reader.iterator();
			
			rowIterator.toString();
			
			while ((record = reader.readNext()) != null) {

				ReorderReport reOrders = new ReorderReport();
           
				reOrders.setSku(record[0]);
				reOrders.setName(record[1]);
				reOrders.setFacility(record[2]);
				reOrders.setReorderThreshold(record[3]);
				if (record[4] != null && record[4].length() > 0) {
				reOrders.setReorderQuantity(Double.parseDouble(record[4]));
				}
				LocalDateTime dateTime = LocalDateTime.now();
				reOrders.setCreatedDate(dateTime);
				reOrders.setUpdatedDate(dateTime);
				LocalDateTime datetime = LocalDateTime.now();
				reOrders.setDateInCSvfile(datetime);
				reOrderReportRepo.save(reOrders);
				reOrdersList.add(reOrders);
				
			}
			
			response.setData(reOrdersList);
			
			reader.close();
		} catch (Exception exception) {
			 response.setError(EnumTypeForErrorCodes.SCUS016.name(),EnumTypeForErrorCodes.SCUS016.errorMsg());
		}

		return response;
	}

}

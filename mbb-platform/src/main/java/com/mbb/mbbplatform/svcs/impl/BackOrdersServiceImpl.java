package com.mbb.mbbplatform.svcs.impl;

import java.io.FileReader;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.RestController;

import com.mbb.mbbplatform.common.EnumTypeForErrorCodes;
import com.mbb.mbbplatform.domain.BackOrders;
import com.mbb.mbbplatform.model.ServiceResponse;
import com.mbb.mbbplatform.repos.BackOrdersRepository;
import com.mbb.mbbplatform.svcs.BackOrdersService;
import com.opencsv.CSVReader;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@RestController
@Validated
public class BackOrdersServiceImpl implements BackOrdersService {
	private static Logger log = LoggerFactory.getLogger(BackOrdersServiceImpl.class);

	@Autowired
	private BackOrdersRepository backOrdersRepo;
	
	@Override
	public ServiceResponse<List<BackOrders>> addBackOrder() {

		log.info("adding backorders report");
		ServiceResponse<List<BackOrders>> response = new ServiceResponse<>();
		try {
			CSVReader reader = new CSVReader(new FileReader("mbb-reports/Back+Orders_30112018.csv"), ',');
			
		

			List<BackOrders> backOrder = new ArrayList<>();

			String[] record = null;
			Iterator<String[]> rowIterator = reader.iterator();

			rowIterator.toString();

			while ((record = reader.readNext()) != null) {

				BackOrders orders = new BackOrders();

				String updatedDate = record[8];
				DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
				LocalDateTime updatedDate1 = LocalDateTime.parse(updatedDate, dtf);
				orders.setUpdated(updatedDate1);

				orders.setItemTypeName(record[0]);
				orders.setItemSkuCode(record[1]);
				orders.setCategoryName(record[2]);
				if (record[3] != null && record[3].length() > 0) {
					orders.setQuantityToRise(Double.parseDouble(record[3]));
				}
				orders.setVendorSkuCode(record[4]);
				orders.setVendorName(record[5]);
				if (record[6] != null && record[6].length() > 0) {
					orders.setUnitPrice(Double.parseDouble(record[6]));
				}
				if (record[7] != null && record[7].length() > 0) {
					orders.setPriority(Long.parseLong(record[7]));
				}
				LocalDateTime dateTime = LocalDateTime.now();
				orders.setCreatedDate(dateTime);
				orders.setUpdatedDate(dateTime);
				LocalDateTime datetime = LocalDateTime.now();
				orders.setDateInCSvfile(datetime);
				backOrdersRepo.save(orders);
				backOrder.add(orders);

			}

			response.setData(backOrder);

			reader.close();
		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS001.name(), EnumTypeForErrorCodes.SCUS001.errorMsg());
		}

		return response;
	}

	@Override
	public ServiceResponse<Collection<BackOrders>> getAllBackOrders() {
	
		return null;
	}

}

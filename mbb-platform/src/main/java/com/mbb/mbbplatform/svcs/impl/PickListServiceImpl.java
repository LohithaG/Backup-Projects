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
import com.mbb.mbbplatform.domain.PickList;
import com.mbb.mbbplatform.model.ServiceResponse;
import com.mbb.mbbplatform.repos.PicklistRepository;
import com.mbb.mbbplatform.svcs.PicklistService;
import com.opencsv.CSVReader;

@RestController
public class PickListServiceImpl implements PicklistService {
	
	private static Logger log = LoggerFactory.getLogger(PickListServiceImpl.class);

	@Autowired

	private PicklistRepository pickListRepo;

	@Override
	public ServiceResponse<List<PickList>> addPickList() {
		
		log.info("adding picklist report ");

		ServiceResponse<List<PickList>> response = new ServiceResponse<>();
		try {
			CSVReader reader = new CSVReader(new FileReader("mbb-reports/Picklist_30112018.csv"), ',');

			List<PickList> pickListReports = new ArrayList<>();
			
			String[] record = null;
			Iterator<String[]> rowIterator = reader.iterator();
			
			rowIterator.toString();
			
			while ((record = reader.readNext()) != null) {

				PickList pickList = new PickList();
           
				pickList.setPicklistCode(record[0]);
				pickList.setSaleOrderItemCode(record[1]);
				pickList.setShippingPackageCode(record[2]);
				pickList.setSaleOrderCode(record[3]);
				pickList.setItemSkuCode(record[4]);
				pickList.setItemTypeName(record[5]);
				pickList.setShelfCode(record[6]);
				pickList.setPicklistCreatedBy(record[7]);
				
				pickList.setItemStatus(record[8]);
				pickList.setPicklistStatus(record[9]);
				pickList.setCreated(record[10]);
				pickList.setUpdated(record[11]);
				LocalDateTime dateTime = LocalDateTime.now();
				pickList.setCreatedDate(dateTime);
				pickList.setUpdatedDate(dateTime);
				LocalDateTime datetime = LocalDateTime.now();
				pickList.setDateInCSvfile(datetime);
				pickListRepo.save(pickList);
				pickListReports.add(pickList);
				
			}
			
			response.setData(pickListReports);
			
			reader.close();
		} catch (Exception exception) {
			 response.setError(EnumTypeForErrorCodes.SCUS015.name(),EnumTypeForErrorCodes.SCUS015.errorMsg());
		}

		return response;
	}

}

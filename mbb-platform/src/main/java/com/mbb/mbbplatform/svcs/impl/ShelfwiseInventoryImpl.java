package com.mbb.mbbplatform.svcs.impl;

import java.io.FileReader;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.RestController;

import com.mbb.mbbplatform.common.EnumTypeForErrorCodes;
import com.mbb.mbbplatform.domain.ShelfwiseInventory;
import com.mbb.mbbplatform.model.ServiceResponse;
import com.mbb.mbbplatform.repos.ShelfWiseInventoryRepository;
import com.mbb.mbbplatform.svcs.ShelfwiseInventoryService;
import com.opencsv.CSVReader;

@RestController
@Validated
public class ShelfwiseInventoryImpl implements ShelfwiseInventoryService {
	
	private static Logger log = LoggerFactory.getLogger(ShelfwiseInventoryImpl.class);

	@Autowired
	private ShelfWiseInventoryRepository shelfwiseRepo;

	@Override
	public ServiceResponse<List<ShelfwiseInventory>> addShelfwiseInventory() {
		
		log.info("adding shelfwise inventory report ");
		ServiceResponse<List<ShelfwiseInventory>> response = new ServiceResponse<>();
		try {
			CSVReader reader = new CSVReader(new FileReader("mbb-reports/Shelfwise+Inventory_30112018.csv"), ',');

			List<ShelfwiseInventory> shelfwiseInventory = new ArrayList<>();

			String[] record = null;
			Iterator<String[]> rowIterator = reader.iterator();

			rowIterator.toString();

			while ((record = reader.readNext()) != null) {

				ShelfwiseInventory inventory = new ShelfwiseInventory();

				inventory.setFacility(record[0]);
				inventory.setItemTypeSKUCode(record[1]);
				inventory.setItemTypeName(record[2]);
				inventory.setInventoryType(record[3]);
				inventory.setShelf(record[4]);
				 if (record[5] != null && record[5].length() > 0) {
				inventory.setQuantity(Long.parseLong(record[5]));
				 }
				 if (record[6] != null && record[6].length() > 0) {
				inventory.setQuantityBlocked(Long.parseLong(record[6]));
				 }
				 if (record[7] != null && record[7].length() > 0) {
				inventory.setQuantityNotFound(Long.parseLong(record[7]));
				 }
				 if (record[8] != null && record[8].length() > 0) {
				inventory.setQuantityDamaged(Long.parseLong(record[8]));
				 }
				 if (record[9] != null && record[9].length() > 0) {
				inventory.setPriority(Long.parseLong(record[9]));
				 }
				inventory.setSection((record[10]));
				LocalDateTime dateTime = LocalDateTime.now();
				inventory.setCreatedDate(dateTime);
				inventory.setUpdatedDate(dateTime);
				LocalDateTime date =LocalDateTime.now();
				inventory.setDateInCSvfile(date);
				
				shelfwiseRepo.save(inventory);
				shelfwiseInventory.add(inventory);
			}

			response.setData(shelfwiseInventory);

			reader.close();
		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS022.name(), EnumTypeForErrorCodes.SCUS022.errorMsg());
		}

		return response;
	}
}

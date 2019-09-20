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
import com.mbb.mbbplatform.domain.InventorySnapshot;
import com.mbb.mbbplatform.model.ServiceResponse;
import com.mbb.mbbplatform.model.Utils;
import com.mbb.mbbplatform.repos.InventorySnapshotRepository;
import com.mbb.mbbplatform.svcs.InventorySnapshotService;
import com.opencsv.CSVReader;

@RestController
public class InventorySnapshotServiceImpl implements InventorySnapshotService {
	private static Logger log = LoggerFactory.getLogger(InventoryServiceImpl.class);

	@Autowired
	private InventorySnapshotRepository inventorySnapshotRepo;

	
	
	@Autowired
	private Utils utils;

	@Override
	public ServiceResponse<List<InventorySnapshot>> addInventorySnapshot() {
		log.info("adding Inventory Snapshot report ");
		ServiceResponse<List<InventorySnapshot>> response = new ServiceResponse<>();
		try {
			CSVReader reader = new CSVReader(new FileReader("mbb-reports/Inventory+Snapshot_30112018.csv"), ',');

			List<InventorySnapshot> inventorySnapshotList = new ArrayList<>();

			String[] record = null;
			Iterator<String[]> rowIterator = reader.iterator();

			rowIterator.toString();

			while ((record = reader.readNext()) != null) {

				InventorySnapshot inventory = new InventorySnapshot();

				String disPatchDateInString = record[20];
				DateTimeFormatter dtf = null;
				dtf = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
				LocalDateTime disPatchDate = LocalDateTime.parse(disPatchDateInString, dtf);
				inventory.setUpdated(disPatchDate);

				inventory.setFacility(record[0]);
				inventory.setItemTypeName(record[1]);
				inventory.setItemSkuCode(record[2]);
				inventory.setEan(record[3]);
				inventory.setUpc(record[4]);
				inventory.setIsbn(record[5]);
				inventory.setColor(record[6]);
				inventory.setSize(record[7]);

				inventory.setBrand(record[8]);
				inventory.setCategoryName(record[9]);
				if (record[10] != null && record[10].length() > 0) {
					inventory.setMrp(Double.parseDouble(record[10]));
				}
				if (record[11] != null && record[11].length() > 0) {
					inventory.setOpenSale(Long.parseLong(record[11]));
				}
				if (record[12] != null && record[12].length() > 0) {
					inventory.setInventory(Long.parseLong(record[12]));
				}
				if (record[13] != null && record[13].length() > 0) {
					inventory.setInventoryBlocked(Long.parseLong(record[13]));
				}
				if (record[14] != null && record[14].length() > 0) {

					inventory.setBadInventory(Long.parseLong(record[14]));
				}
				if (record[15] != null && record[15].length() > 0) {
					inventory.setPutawayPending(Long.parseLong(record[15]));
				}
				if (record[16] != null && record[16].length() > 0) {
					inventory.setPendingInventoryAssessment(Long.parseLong(record[16]));
				}
				if (record[17] != null && record[17].length() > 0) {

					inventory.setReturnAwaited(Long.parseLong(record[17]));
				}
				if (record[18] != null && record[18].length() > 0) {
					inventory.setOpenPurchase(Long.parseLong(record[18]));
				}
				if (record[19] != null && record[19].length() > 0) {
					inventory.setEnabled(Boolean.parseBoolean(record[19]));
				}
				if (record[20] != null && record[20].length() > 0) {
					DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");

					inventory.setUpdated(LocalDateTime.parse(record[20], formatter));
				}
				if (record[21] != null && record[21].length() > 0) {
					inventory.setCostPrice(Double.parseDouble(record[21]));
				}
				LocalDateTime dateTime = LocalDateTime.now();
				inventory.setCreatedDate(dateTime);
				inventory.setUpdatedDate(dateTime);

				LocalDate fileCreatedDate = LocalDate.now();
				inventory.setDateInCsvfile(fileCreatedDate);
				inventorySnapshotRepo.save(inventory);
				inventorySnapshotList.add(inventory);

			}

			response.setData(inventorySnapshotList);

			reader.close();
		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS011.name(), EnumTypeForErrorCodes.SCUS011.errorMsg());
			log.error(utils.toJson(response.getError()), exception);
		}

		return response;
	}

}

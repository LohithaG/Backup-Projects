package com.mbb.mbbplatform.svcs.impl;

import java.io.FileReader;
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
import com.mbb.mbbplatform.domain.ItemMaster;
import com.mbb.mbbplatform.model.ServiceResponse;
import com.mbb.mbbplatform.repos.ItemMasterRepository;
import com.mbb.mbbplatform.svcs.ItemMasterService;
import com.opencsv.CSVReader;

@RestController
public class ItemMasterServiceImpl implements ItemMasterService {
	
	private static Logger log = LoggerFactory.getLogger(ItemMasterServiceImpl.class);

	@Autowired
	private ItemMasterRepository itemMasterRepo;

	@Override
	public ServiceResponse<List<ItemMaster>> addItemMaster() {
		
		log.info("adding item master report ");
		ServiceResponse<List<ItemMaster>> response = new ServiceResponse<>();
		try {
			CSVReader reader = new CSVReader(new FileReader("mbb-reports/Item+Master_30112018.csv"), ',');

			List<ItemMaster> itemMastersList = new ArrayList<>();

			String[] record = null;
			Iterator<String[]> rowIterator = reader.iterator();

			rowIterator.toString();

			while ((record = reader.readNext()) != null) {

				ItemMaster itemMaster = new ItemMaster();

				String disPatchDateInString = record[26];
				DateTimeFormatter dtf = null;
				dtf = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
				LocalDateTime disPatchDate = LocalDateTime.parse(disPatchDateInString, dtf);
				itemMaster.setUpdated(disPatchDate);

				itemMaster.setCategoryCode(record[0]);
				itemMaster.setProductCode(record[1]);
				itemMaster.setName(record[2]);
				itemMaster.setDescription(record[3]);
				itemMaster.setScanIdentifier(record[4]);
				if (record[5] != null && record[5].length() > 0) {
					itemMaster.setRequiresCustomization(Boolean.parseBoolean(record[5]));
				}
				if (record[6] != null && record[6].length() > 0) {
					itemMaster.setLength(Long.parseLong(record[6]));
				}
				if (record[7] != null && record[7].length() > 0) {
					itemMaster.setWidth(Long.parseLong(record[7]));
				}
				if (record[8] != null && record[8].length() > 0) {
					itemMaster.setHeight(Long.parseLong(record[8]));
				}
				if (record[9] != null && record[9].length() > 0) {
					itemMaster.setWeight(Long.parseLong(record[9]));
				}
				itemMaster.setEan(record[10]);
				itemMaster.setUpc(record[11]);
				itemMaster.setIsbn(record[12]);
				itemMaster.setColor(record[13]);

				itemMaster.setSize(record[14]);
				itemMaster.setBrand(record[15]);
				itemMaster.setItemDetailFields(record[16]);
				itemMaster.setTags(record[17]);
				itemMaster.setImageUrl(record[18]);
				itemMaster.setProductPageUrl(record[19]);
				itemMaster.setTaxTypeCode(record[20]);
				if (record[21] != null && record[21].length() > 0) {
					itemMaster.setGstTaxTypeCode(Long.parseLong(record[21]));
				}
				if (record[22] != null && record[22].length() > 0) {
					itemMaster.setBasePrice(Double.parseDouble(record[22]));
				}
				if (record[23] != null && record[23].length() > 0) {
					itemMaster.setCostPrice(Double.parseDouble(record[23]));
				}
				itemMaster.setTat(record[24]);
				itemMaster.setMrp(record[25]);

				itemMaster.setCategoryName(record[27]);
				if (record[28] != null && record[28].length() > 0) {
					itemMaster.setEnabled(Boolean.parseBoolean(record[28]));
				}
				itemMaster.setType(record[29]);
				itemMaster.setComponentProductCode(record[30]);
				if (record[31] != null && record[31].length() > 0) {
				itemMaster.setComponentQuantity(Double.parseDouble(record[31]));
				}
				if (record[32] != null && record[32].length() > 0) {
				itemMaster.setComponentPrice(Double.parseDouble(record[32]));
				}
				if (record[33] != null && record[33].length() > 0) {
					itemMaster.setHsnCode(Double.parseDouble(record[33]));
				}
				LocalDateTime dateTime = LocalDateTime.now();
				itemMaster.setCreatedDate(dateTime);
				itemMaster.setUpdatedDate(dateTime);
				LocalDateTime datetime = LocalDateTime.now();
				itemMaster.setDateInCSvfile(datetime);
				itemMasterRepo.save(itemMaster);
				itemMastersList.add(itemMaster);

			}

			response.setData(itemMastersList);

			reader.close();
		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS014.name(), EnumTypeForErrorCodes.SCUS014.errorMsg());
		}

		return response;
	}

}

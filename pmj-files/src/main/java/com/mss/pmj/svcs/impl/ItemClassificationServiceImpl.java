package com.mss.pmj.svcs.impl;

import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardOpenOption;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.mss.pmj.common.EnumTypeForErrorCodes;
import com.mss.pmj.common.Utils;
import com.mss.pmj.domain.ItemClassification;
import com.mss.pmj.model.ServiceResponse;
import com.mss.pmj.repos.ItemClassificationRepository;
import com.mss.pmj.svcs.ItemClassificationService;
import com.opencsv.CSVReader;



@Service
public class ItemClassificationServiceImpl implements ItemClassificationService {
	
	private static Logger log = LoggerFactory.getLogger(ItemClassificationServiceImpl.class);
	
	@Value("${files.url}")
	private String filesurl;
	
	@Autowired
	private Utils utils;
	
	@Value("${logFileUploadPath}")
	private String logFileUploadPath;

	@Autowired
	private ItemClassificationRepository itemClassificationrepository;

	@Override
	public ServiceResponse<String> addItemClassification(String filePath) throws IOException {
		log.info("save ItemClassification service implementation");
		ServiceResponse<String> response = new ServiceResponse<>();

		List<ItemClassification> list = new ArrayList<>();
		StringBuffer exceptions = new StringBuffer();
		CSVReader reader=null;
		LocalDate dateTime = LocalDate.now();
		 File file = new File(logFileUploadPath + "Gold_DiamondClassification" + dateTime + ".txt");
		try {
			 reader = new CSVReader(new FileReader(filePath), ',');
			String[] record = null;
			Iterator<String[]> rowIterator = reader.iterator();
			int rowcount=0;
			while ((record = reader.readNext()) != null) {
				rowcount++;
				ItemClassification item1 = new ItemClassification();
				ItemClassification item2 = new ItemClassification();
				ItemClassification item3 = new ItemClassification();
				if (!record[0].isEmpty()) {
					ItemClassification itemObject=itemClassificationrepository.findByItemCode(record[0]);
					if(itemObject==null) {
						String itemCode = record[0];
						item1.setItemCode(itemCode);
						item1.setItemType("Diamond");
						list.add(item1);
						itemClassificationrepository.saveAll(list);

					}else {
						exceptions.append("<br>" + "item code already exists:(rownumber" + rowcount+")");
						exceptions.append(System.lineSeparator());
					}
					
				}
				if (!record[1].isEmpty()) {
					ItemClassification itemObject=itemClassificationrepository.findByItemCode(record[1]);
					if(itemObject==null) {
					item2.setItemCode(record[1]);
					item2.setItemType("Gold");
					list.add(item2);
					itemClassificationrepository.saveAll(list);

					}else {
						exceptions.append("<br>" + "item code already exists" + record[1]);
						exceptions.append(System.lineSeparator());
					}
				}
				if (!record[2].isEmpty()) {
					ItemClassification itemObject=itemClassificationrepository.findByItemCode(record[2]);
					if(itemObject==null) {
					item3.setItemCode(record[2]);
					item3.setItemType("Exceptions");
					list.add(item3);
					itemClassificationrepository.saveAll(list);

					}else {
						exceptions.append("<br>" + "item code already exists:(rownumber" + rowcount+")");
						exceptions.append(System.lineSeparator());
					}
				}
				//itemClassificationrepository.saveAll(list1);
				//response.setData(list1);
			}
			if (exceptions != null) {
				
				 file.createNewFile();
				Files.write(Paths.get(logFileUploadPath + "Gold_DiamondClassification" + dateTime + ".txt"),
						exceptions.toString().getBytes(), StandardOpenOption.APPEND);

			}
			response.setData("File uploaded successfully");

		} catch (Exception e) {
			 file.createNewFile();
			response.setError(EnumTypeForErrorCodes.SCUS016.name(), EnumTypeForErrorCodes.SCUS016.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}
		finally {
			reader.close();
		}

		return response;
	}
}

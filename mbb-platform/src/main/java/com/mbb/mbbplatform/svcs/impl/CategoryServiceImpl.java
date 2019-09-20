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

import com.mbb.mbbplatform.domain.Category;
import com.mbb.mbbplatform.model.ServiceResponse;
import com.mbb.mbbplatform.repos.CategoryRepository;
import com.mbb.mbbplatform.svcs.CategoryService;
import com.opencsv.CSVReader;

@RestController
public class CategoryServiceImpl implements CategoryService {
	
	private static Logger log = LoggerFactory.getLogger(CategoryServiceImpl.class);

	@Autowired
	private CategoryRepository categoryRepo;

	@Override
	public ServiceResponse<List<Category>> addCategory() {
		log.info("adding category report");
		ServiceResponse<List<Category>> response = new ServiceResponse<>();
		try {
			CSVReader reader = new CSVReader(new FileReader("mbb-reports/Category_30112018.csv"), ',');

			List<Category> categoriesList = new ArrayList<>();

			String[] record = null;
			Iterator<String[]> rowIterator = reader.iterator();

			rowIterator.toString();

			while ((record = reader.readNext()) != null) {

				Category category = new Category();

				String disPatchDateInString = record[5];
				DateTimeFormatter dtf = null;
				dtf = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
				LocalDateTime disPatchDate = LocalDateTime.parse(disPatchDateInString, dtf);
				category.setCreated(disPatchDate);

				String updatedDateInString = record[6];
				dtf = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
				LocalDateTime disPatchDate1 = LocalDateTime.parse(updatedDateInString, dtf);
				category.setCreated(disPatchDate1);

				category.setCategoryCode(record[0]);
				category.setCategoryName(record[1]);
				if (record[2] != null && record[2].length() > 0) {
					category.setHsnCode(Double.parseDouble(record[2]));
				}
				if (record[3] != null && record[3].length() > 0) {
				category.setGstTaxType(Double.parseDouble(record[3]));
				}
				category.setTaxType(record[4]);

				LocalDateTime dateTime = LocalDateTime.now();
				category.setCreatedDate(dateTime);
				category.setUpdatedDate(dateTime);
				LocalDateTime datetime = LocalDateTime.now();
				category.setDateInCSvfile(datetime);
				categoryRepo.save(category);
				categoriesList.add(category);

			}

			response.setData(categoriesList);

			reader.close();
		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS005.name(), EnumTypeForErrorCodes.SCUS005.errorMsg());
		}

		return response;
	}

}

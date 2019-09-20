package com.mbb.mbbplatform.svcs.impl;

import java.io.FileReader;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Set;

import org.json.simple.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.mbb.mbbplatform.common.EnumTypeForErrorCodes;
import com.mbb.mbbplatform.domain.Dispatch;
import com.mbb.mbbplatform.domain.FastMovingSku;
import com.mbb.mbbplatform.domain.Inventory;
import com.mbb.mbbplatform.domain.InventoryItem;
import com.mbb.mbbplatform.model.ServiceResponse;
import com.mbb.mbbplatform.model.Utils;
import com.mbb.mbbplatform.repos.DispatchRepository;
import com.mbb.mbbplatform.repos.FastMovingSkuRepository;
import com.mbb.mbbplatform.repos.InventoryItemRepository;
import com.mbb.mbbplatform.svcs.FastMovingSkuService;
import com.opencsv.CSVReader;

@RestController
public class FastMovingSkuServiceImpl implements FastMovingSkuService {

	private static Logger log = LoggerFactory.getLogger(FastMovingSkuServiceImpl.class);

	@Autowired
	private FastMovingSkuRepository fastMovingSkuRepo;

	@Autowired
	private DispatchRepository dispatchRepo;

	@Autowired
	private InventoryItemRepository inventoryItemRepo;

	@Autowired
	private Utils utils;

	@Override
	public ServiceResponse<List<FastMovingSku>> addFastMovingSku() {

		log.info("adding fastmoving sku report");
		ServiceResponse<List<FastMovingSku>> response = new ServiceResponse<>();
		try (CSVReader reader = new CSVReader(new FileReader("mbb-reports/Fast+Moving+SKU_30112018.csv"), ',');) {

			List<FastMovingSku> fastMovingSkuList = new ArrayList<>();

			String[] record = null;
			Iterator<String[]> rowIterator = reader.iterator();

			rowIterator.toString();

			while ((record = reader.readNext()) != null) {

				FastMovingSku fastMovingSku = new FastMovingSku();

				fastMovingSku.setSkuCode(record[0]);
				fastMovingSku.setName(record[1]);
				if (record[2] != null && record[2].length() > 0) {
					fastMovingSku.setInventory(Long.parseLong(record[2]));
				}
				if (record[3] != null && record[3].length() > 0) {
					fastMovingSku.setTotalSales(Long.parseLong(record[3]));
				}
				if (record[4] != null && record[4].length() > 0) {
					fastMovingSku.setDayOfInventory(Long.parseLong(record[4]));
				}
				LocalDateTime dateTime = LocalDateTime.now();
				fastMovingSku.setCreatedDate(dateTime);
				fastMovingSku.setUpdatedDate(dateTime);
				LocalDateTime datetime = LocalDateTime.now();
				fastMovingSku.setDateInCSvfile(datetime);
				fastMovingSkuRepo.save(fastMovingSku);
				fastMovingSkuList.add(fastMovingSku);

			}

			response.setData(fastMovingSkuList);

		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS010.name(), EnumTypeForErrorCodes.SCUS010.errorMsg());
		}

		return response;
	}

	@SuppressWarnings("unchecked")
	@Override
	public ServiceResponse<List<JSONObject>> getFastMovingSku(String startDate, String endDate, Long facility, Long channelId) {
		log.info("get fast moving SKU's list");
		ServiceResponse<List<JSONObject>> response = new ServiceResponse<>();

		List<Inventory> list = new ArrayList<>();
		List<JSONObject> listJson = new ArrayList<>();
		Collection<Dispatch> dispatchlist =null;

		try {

			String endDate1 = LocalDate.parse(endDate).plusDays(1).toString();

			
			if(facility==0&&channelId==0) {
				
				dispatchlist=dispatchRepo.findDispatchDetails(startDate, endDate1);
			}else if(facility==0) {
				dispatchlist=dispatchRepo.findDispatchDetailsOnChannel(startDate, endDate1, channelId);
				
			}else if(channelId==0) {
				
				dispatchlist=dispatchRepo.findDispatchDetailsOnFacility(startDate, endDate1, facility);
			}else {
				dispatchlist=dispatchRepo.findDispatchDetailsOnChannelFacility(startDate, endDate1,channelId,facility);
				
			}
			for (Dispatch dispatch : dispatchlist) {
				InventoryItem inventoryItem = inventoryItemRepo.findByBarcode(dispatch.getBarcode());
				
					list.add(inventoryItem.getInventoryId());
				
				
				}

			
			Set<Inventory> st = new HashSet<>(list);

			for (Inventory inventory : st) {
				JSONObject obj = new JSONObject();

				obj.put("skuCode", inventory.getSkuCode());
				obj.put("count", Collections.frequency(list, inventory));
				obj.put("productName", inventory.getProductName());

				listJson.add(obj);
			}
			response.setData(listJson);
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS010.name(), EnumTypeForErrorCodes.SCUS010.errorMsg());
			log.error(utils.toJson(response.getError()), e);

		}

		return response;
	}

}

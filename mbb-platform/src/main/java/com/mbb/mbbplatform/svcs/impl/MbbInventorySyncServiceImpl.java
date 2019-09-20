package com.mbb.mbbplatform.svcs.impl;

import java.util.Collection;

import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.mbb.mbbplatform.common.EnumTypeForErrorCodes;
import com.mbb.mbbplatform.domain.Inventory;
import com.mbb.mbbplatform.domain.InventoryItem;
import com.mbb.mbbplatform.model.ServiceResponse;
import com.mbb.mbbplatform.repos.InventoryItemRepository;
import com.mbb.mbbplatform.repos.InventoryRepository;
import com.mbb.mbbplatform.svcs.MbbInventorySyncService;

@RestController
public class MbbInventorySyncServiceImpl implements MbbInventorySyncService {

	@Autowired
	private InventoryRepository inventoryRepo;
	
	@Autowired
	private InventoryItemRepository inventoryItemRepo;

	@Override
	public String syncInventoryToMbb() {
		ServiceResponse<String> response = new ServiceResponse<>();
		String result = "";
		try {

			RestTemplate restTemplate = new RestTemplate();
			HttpHeaders headers = new HttpHeaders();

			headers.set("Authorization",
					"Basic Y2tfMzljZjQyNDhiYzI0YzU3N2Q2YjA2NjIwMDc5ZDViODgxOTc5MjI0MDpjc19hOTIwZDNmNDk5YzA3ZjVhYjZjNzU4ZjYwYzI5NGU3NDNhYjFhNWEx");
			HttpEntity<String> entity = new HttpEntity<>(headers);
			result = restTemplate.exchange("https://test.medicalbulkbuy.com/wc-api/v2/products?filter[limit] =-1",
					HttpMethod.GET, entity, String.class).getBody();

			JSONObject jsonObject = new JSONObject(result);

			JSONArray productsList = jsonObject.getJSONArray("products");
			Collection<Inventory> inventoryList = inventoryRepo.findAll();
			for (int i = 0; i < productsList.length(); i++) {
				JSONObject jsonobject = productsList.getJSONObject(i);
				for (Inventory inventory : inventoryList) {

					String skuCode = inventory.getSkuCode();
					String mbbSku = jsonobject.getString("sku");
					if (skuCode.equals(mbbSku)) {
						
						JSONObject obj = new JSONObject();
						Long inventoryStock = inventory.getInventory();
						Boolean in_stock = false;
						int stock_quantity;
						Boolean managing_stock;
						if (inventoryStock == null) {
							in_stock = false;
							stock_quantity = 0;
							managing_stock = false;

						} else if (inventoryStock == 0) {
							in_stock = false;
							stock_quantity = 0;
							managing_stock = false;
						} else {
							in_stock = true;
							managing_stock = true;
							int invCount=0;
							Collection<InventoryItem> listInventoryItem = inventoryItemRepo.findByInventoryId(inventory);
							
							for (InventoryItem inventoryItem : listInventoryItem) {
								
								if(inventoryItem.getFacilityId().getId()!=3) {
								
								invCount=invCount+1;	
									
								}
								
							}
							
							stock_quantity = invCount;

						}
						obj.put("in_stock", in_stock);
						obj.put("stock_quantity", stock_quantity);
						obj.put("managing_stock", managing_stock);
						JSONObject obj2 = new JSONObject();
						obj2.put("product", obj);

					
						headers.setContentType(MediaType.APPLICATION_JSON);

						HttpEntity<String> entity1 = new HttpEntity<>(obj2.toString(), headers);
						restTemplate.getMessageConverters().add(new MappingJackson2HttpMessageConverter());

						result = restTemplate.exchange("https://test.medicalbulkbuy.com/wc-api/v2/products/" + skuCode,
								HttpMethod.POST, entity1, String.class).getBody();
					}
				}

			}
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS716.name(), EnumTypeForErrorCodes.SCUS716.errorMsg());
		}

		return "Success";
	}

}
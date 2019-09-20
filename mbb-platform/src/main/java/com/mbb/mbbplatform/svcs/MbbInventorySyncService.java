package com.mbb.mbbplatform.svcs;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mbb.mbbplatform.common.RestApiUrlConstants;

@RequestMapping("/mbb/inventorySync")
public interface MbbInventorySyncService {

@GetMapping(RestApiUrlConstants.INVENTORY_SYNC)
@ResponseBody
String syncInventoryToMbb();
}
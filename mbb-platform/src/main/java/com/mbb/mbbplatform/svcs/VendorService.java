package com.mbb.mbbplatform.svcs;
import java.util.Collection;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mbb.mbbplatform.common.RestApiUrlConstants;
import com.mbb.mbbplatform.domain.Vendor;
import com.mbb.mbbplatform.model.ServiceResponse;

@RequestMapping("/mbb/vendor")
public interface VendorService {
	
	@PostMapping(RestApiUrlConstants.ADD_DETAILS)
	@ResponseBody
	ServiceResponse<Vendor> addVendor(@RequestBody Vendor vendor);

	@DeleteMapping(RestApiUrlConstants.GET_DETAILS_BY_ID)
	@ResponseBody
	ServiceResponse<String> deleteVendor(@PathVariable Long id);

	@GetMapping(RestApiUrlConstants.GET_ALL_DETAILS1)
	@ResponseBody
	ServiceResponse<Collection<Vendor>> getAllVendors();

	@GetMapping(RestApiUrlConstants.GET_DETAILS_BY_ID)
	@ResponseBody
	ServiceResponse<Vendor> getVendorById(@PathVariable Long id);
	
	@PutMapping(RestApiUrlConstants.UPDATE_VENDOR)
	@ResponseBody
	ServiceResponse<Vendor> updateVendor(@RequestBody Vendor vendor, @PathVariable Long id);
}
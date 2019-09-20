package com.mbb.mbbplatform.svcs;

import java.util.Collection;

import javax.validation.Valid;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.mbb.mbbplatform.common.RestApiUrlConstants;
import com.mbb.mbbplatform.domain.SelfShipment;
import com.mbb.mbbplatform.model.ServiceResponse;

@RequestMapping("/mbb/selfTransport")
public interface SelfShipmentService {

	@PostMapping(RestApiUrlConstants.ADD_SELF_TRANSPORT)
	public ServiceResponse<SelfShipment> addSelfShipment(@Valid @RequestBody SelfShipment ownTransport);

	@PutMapping(RestApiUrlConstants.UPDATE_SELF_TRANSPORT)
	public ServiceResponse<SelfShipment> updateSelfTransport(@Valid @PathVariable Long id,
			@Valid @RequestBody SelfShipment ownTransport);

	@GetMapping(RestApiUrlConstants.GET_ALL_SELF_TRANSPORT)
	public ServiceResponse<Collection<SelfShipment>> getAllSelfTransport();

	@GetMapping(RestApiUrlConstants.GET_DETAILS_BY_ID)
	public ServiceResponse<SelfShipment> getById(@PathVariable Long id);

	@DeleteMapping(RestApiUrlConstants.GET_DETAILS_BY_ID)
	public ServiceResponse<SelfShipment> deleteById(@PathVariable Long id);
	
	@PostMapping(RestApiUrlConstants.ADD_SELF_TRANSPORT_FOR_SERVICING_PRODUCT)
	ServiceResponse<SelfShipment> addSelfShipmentForServicingProducts(@Valid @RequestBody SelfShipment selfShipment,@Valid @PathVariable Long id);
	
}

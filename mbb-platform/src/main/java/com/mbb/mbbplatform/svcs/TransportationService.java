package com.mbb.mbbplatform.svcs;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mbb.mbbplatform.common.RestApiUrlConstants;

import com.mbb.mbbplatform.domain.Transportation;
import com.mbb.mbbplatform.model.ServiceResponse;

@RequestMapping("/mbb/transportation")
public interface TransportationService {

@GetMapping(RestApiUrlConstants.GET_ALL_TRANSPORTATION)
@ResponseBody
public ServiceResponse<List<Transportation>> getAllTransport();
}
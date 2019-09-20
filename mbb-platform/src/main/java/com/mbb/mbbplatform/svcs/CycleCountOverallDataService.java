package com.mbb.mbbplatform.svcs;

import java.util.List;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mbb.mbbplatform.domain.CycleCountOverallData;
import com.mbb.mbbplatform.model.ServiceResponse;

@RequestMapping("/mbb/cyclecountOverallData")
public interface CycleCountOverallDataService {
	@PostMapping("/")
	@ResponseBody
	ServiceResponse<List<CycleCountOverallData>> addCycleCountOverallData();
}

package com.mbb.mbbplatform.svcs;

import java.util.List;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mbb.mbbplatform.domain.TallyRecoReport;
import com.mbb.mbbplatform.model.ServiceResponse;

@RequestMapping(value = "/mbb/tallyRecoReport")
public interface TallyRecoReportService {

	@PostMapping("/")
	@ResponseBody
	ServiceResponse<List<TallyRecoReport>> addTallyRecoReport();
}

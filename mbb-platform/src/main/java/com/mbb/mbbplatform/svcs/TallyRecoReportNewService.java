package com.mbb.mbbplatform.svcs;

import java.util.List;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import com.mbb.mbbplatform.domain.TallyRecoReportNew;
import com.mbb.mbbplatform.model.ServiceResponse;


@RequestMapping(value = "/mbb/tallyRecoReportNew")
public interface TallyRecoReportNewService {

	
	@PostMapping("/")
	@ResponseBody
	ServiceResponse<List<TallyRecoReportNew>> addTallyRecoReportNew();
	
}

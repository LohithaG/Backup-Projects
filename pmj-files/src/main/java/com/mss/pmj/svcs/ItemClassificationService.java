package com.mss.pmj.svcs;

import java.io.IOException;
import java.util.List;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mss.pmj.common.RestApiUrlConstants;
import com.mss.pmj.domain.ItemClassification;
import com.mss.pmj.model.ServiceResponse;

@RequestMapping(value = "/pmj/itemClassification")

public interface ItemClassificationService {

	@PostMapping(RestApiUrlConstants.ADD_ITEMCLASSIFICATION_DATA)
	@ResponseBody
	ServiceResponse<String> addItemClassification(@PathVariable String filePath) throws IOException;

}

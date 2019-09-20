package com.mbb.mbbplatform.svcs;

import java.util.List;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mbb.mbbplatform.domain.ClearTaxCreditNote;
import com.mbb.mbbplatform.model.ServiceResponse;

@RequestMapping("/mbb/clearTaxCreditNote")
public interface CleartTaxCreditNoteService {
	@PostMapping("/")
	@ResponseBody
	ServiceResponse<List<ClearTaxCreditNote>> addClearTaxCreditNote();
}

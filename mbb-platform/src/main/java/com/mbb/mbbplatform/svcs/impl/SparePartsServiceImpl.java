package com.mbb.mbbplatform.svcs.impl;

import java.util.List;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.mbb.mbbplatform.common.EnumTypeForErrorCodes;
import com.mbb.mbbplatform.domain.QuotationDetails;
import com.mbb.mbbplatform.domain.SpareParts;
import com.mbb.mbbplatform.model.ServiceResponse;
import com.mbb.mbbplatform.model.Utils;
import com.mbb.mbbplatform.repos.QuotationDetailsRepository;
import com.mbb.mbbplatform.repos.SparePartsRepository;
import com.mbb.mbbplatform.svcs.SparePartsService;

@RestController
public class SparePartsServiceImpl implements SparePartsService {
	private static Logger log = LoggerFactory.getLogger(SparePartsServiceImpl.class);

	@Autowired
	private Utils utils;

	@Autowired
	private SparePartsRepository sparePartsRepository;

	@Autowired
	private QuotationDetailsRepository quotationDetailsRepository;

	@Override
	public ServiceResponse<List<SpareParts>> addSpareParts(@Valid List<SpareParts> spareParts, Long quotationId) {
		log.info("adding Spare Parts ");
		ServiceResponse<List<SpareParts>> response = new ServiceResponse<>();
		try {
			
			for (SpareParts listOfSpareParts : spareParts) {
				QuotationDetails quotationDetails = quotationDetailsRepository.findById(quotationId).get();
				listOfSpareParts.setQuotationDetailsId(quotationDetails);

			}
			List<SpareParts> saveSpareParts  = sparePartsRepository.saveAll(spareParts);
			response.setData(saveSpareParts);

			saveSpareParts = sparePartsRepository.saveAll(spareParts);
			response.setData(saveSpareParts);
		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS2050.name(), EnumTypeForErrorCodes.SCUS2050.errorMsg());
			log.error(utils.toJson(response.getError()), exception);
		}

		return response;
	}

	@Override
	public ServiceResponse<List<SpareParts>> getAllSpareParts() {
		log.info("get All Spare Parts");
		ServiceResponse<List<SpareParts>> response = new ServiceResponse<>();
		try {
			List<SpareParts> servicingProduct = sparePartsRepository.findAll();
			response.setData(servicingProduct);
		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS2101.name(), EnumTypeForErrorCodes.SCUS2101.errorMsg());
			log.error(utils.toJson(response.getError()), exception);
		}
		return response;

	}

	@Override
	public ServiceResponse<List<SpareParts>> updateSpareParts(@Valid List<SpareParts> spareParts,
			@Valid Long quotationDetailsId) {
		log.info("updating spare parts");
		ServiceResponse<List<SpareParts>> response = new ServiceResponse<>();
		try {
			List<SpareParts> sparePartsList = sparePartsRepository.findAllByQuotationDetailsId(quotationDetailsRepository.findById(quotationDetailsId).get());
			if (!sparePartsList.isEmpty()) {
				sparePartsRepository.deleteAll(sparePartsList);
			}
			response=	addSpareParts(spareParts, quotationDetailsId);
		
		} catch (Exception exception) {

			response.setError(EnumTypeForErrorCodes.SCUS2112.name(), EnumTypeForErrorCodes.SCUS2112.errorMsg());
			log.error(utils.toJson(response.getError()), exception);
		}
		return response;

	}

}

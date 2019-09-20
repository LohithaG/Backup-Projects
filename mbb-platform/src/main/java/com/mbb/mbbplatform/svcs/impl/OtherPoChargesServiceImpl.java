package com.mbb.mbbplatform.svcs.impl;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Optional;

import org.json.JSONArray;
import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.mbb.mbbplatform.common.EnumTypeForErrorCodes;
import com.mbb.mbbplatform.domain.OtherPoCharges;
import com.mbb.mbbplatform.domain.PoVendor;
import com.mbb.mbbplatform.model.ServiceResponse;
import com.mbb.mbbplatform.model.Utils;
import com.mbb.mbbplatform.repos.OtherPoChargesRepository;
import com.mbb.mbbplatform.repos.PoVendorRepository;
import com.mbb.mbbplatform.svcs.OtherPoChargesService;

@RestController
public class OtherPoChargesServiceImpl implements OtherPoChargesService {

	private static Logger log = LoggerFactory.getLogger(OtherPoChargesServiceImpl.class);

	@Autowired
	private Utils utils;

	@Autowired
	private PoVendorRepository poVendorRepository;

	@Autowired
	private OtherPoChargesRepository otherPoChargesRepository;

	/**
	 * addBankDetails service implementation
	 * 
	 * @RequestBody bankDetails
	 * @return ServiceResponse<String>
	 */
	@Override
	public ServiceResponse<List<OtherPoCharges>> addOtherCharges(String otherCharges) {
		log.info("adding b item details");
		ServiceResponse<List<OtherPoCharges>> response = new ServiceResponse<>();

		List<OtherPoCharges> bankDetailsList = new ArrayList<>();
		try {

			JSONObject object = new JSONObject(otherCharges);

			JSONObject poVendorObject = object.getJSONObject("poVendorId");

			Long poVendorId = poVendorObject.getLong("id");

			Optional<PoVendor> poVendorExists = poVendorRepository.findById(poVendorId);

			if (poVendorExists.isPresent()) {
				JSONArray jsonarray = object.getJSONArray("otherCharges");
				for (int i = 0; i < jsonarray.length(); i++) {
					OtherPoCharges otherCharges1 = new OtherPoCharges();
					JSONObject otherChargesObject = jsonarray.getJSONObject(i);
					otherCharges1.setBankCharges(otherChargesObject.getDouble("bankCharges"));
					otherCharges1.setCustomDuty(otherChargesObject.getDouble("customDuty"));
					otherCharges1.setClearingCharges(otherChargesObject.getDouble("clearingCharges"));
					otherCharges1.setCarriageInwardOrOutward(otherChargesObject.getDouble("carriageInwardOrOutward"));
					otherCharges1.setTransportation(otherChargesObject.getDouble("transportation"));
					otherCharges1.setOtherCharges(otherChargesObject.getDouble("otherCharges"));
					otherCharges1.setTotalAmount(otherChargesObject.getDouble("totalAmount"));
					otherCharges1.setPoVendorId(poVendorExists.get());
					OtherPoCharges savedOtherCharges = otherPoChargesRepository.save(otherCharges1);
					bankDetailsList.add(savedOtherCharges);
				}
			} else {
				response.setError(EnumTypeForErrorCodes.SCUS1300.name(), EnumTypeForErrorCodes.SCUS1300.errorMsg());

			}

			response.setData(bankDetailsList);
		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS1301.name(), EnumTypeForErrorCodes.SCUS1301.errorMsg());
			log.error(utils.toJson(response.getError()), exception);
		}

		return response;
	}

	/**
	 * deleteBankDetailsBasedOnPoVendor service implementation
	 * 
	 * @param poVendorId
	 * @return ServiceResponse<String>
	 */
	@Override
	public ServiceResponse<String> deleteOtherChargesBasedOnPoVendor(Long poVendorId) {

		log.info("delete bank details Based On PoVendor");
		ServiceResponse<String> response = new ServiceResponse<>();
		try {
			Optional<PoVendor> poVendor = poVendorRepository.findById(poVendorId);
			if (poVendor.isPresent()) {
				List<OtherPoCharges> otherChargesExist = otherPoChargesRepository.findByPoVendorId(poVendor.get());
				otherPoChargesRepository.deleteAll(otherChargesExist);
			}
			response.setData("other charges detelted successfully");
		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS1303.name(), EnumTypeForErrorCodes.SCUS1303.errorMsg());
			log.error(utils.toJson(response.getError()), exception);
		}
		return response;

	}

	/**
	 * deleteBankDetailsBasedOnPoVendor service implementation
	 * 
	 * @param poVendorId
	 * @return ServiceResponse<String>
	 */
	@Override
	public ServiceResponse<Collection<OtherPoCharges>> getAllOtherCharges() {

		log.info("getting all bank details");
		ServiceResponse<Collection<OtherPoCharges>> response = new ServiceResponse<>();
		try {
			Collection<OtherPoCharges> otherChargesList = otherPoChargesRepository.findAll();
			response.setData(otherChargesList);
		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS1305.name(), EnumTypeForErrorCodes.SCUS1305.errorMsg());
			log.error(utils.toJson(response.getError()), exception);
		}
		return response;
	}

	/**
	 * deleteBankDetailsBasedOnPoVendor service implementation
	 * 
	 * @param poVendorId
	 * @return ServiceResponse<String>
	 */
	@Override
	public ServiceResponse<Collection<OtherPoCharges>> getOtherChargesByPoVendor(@PathVariable Long poVendorId) {

		log.info("getting all bank details");
		ServiceResponse<Collection<OtherPoCharges>> response = new ServiceResponse<>();
		try {
			Optional<PoVendor> poVendor = poVendorRepository.findById(poVendorId);
			if (poVendor.isPresent()) {
				Collection<OtherPoCharges> otherChargesList = otherPoChargesRepository.findByPoVendorId(poVendor.get());
				response.setData(otherChargesList);
			}

		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS1304.name(), EnumTypeForErrorCodes.SCUS1304.errorMsg());
			log.error(utils.toJson(response.getError()), exception);
		}
		return response;
	}
	/**
	 * getTotalAmountPerPoVendor service implementation
	 * 
	 * @param poVendorId
	 * @return ServiceResponse<Double>
	 */
	@Override
	public ServiceResponse<Double> getTotalAmountPerPoVendor(Long poVendorId) {
		log.info("total amount per vendor");
		ServiceResponse<Double> response = new ServiceResponse<>();
		try {
			Optional<PoVendor> poVendor = poVendorRepository.findById(poVendorId);
			if (poVendor.isPresent()) {
				Collection<OtherPoCharges> otherChargesList = otherPoChargesRepository.findByPoVendorId(poVendor.get());
				Double total = (double) 0;
				for (OtherPoCharges otherCharges : otherChargesList) {
					Double amount = otherCharges.getTotalAmount();
					total = total + amount;
				}
				response.setData(total);
			}

		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS1104.name(), EnumTypeForErrorCodes.SCUS1104.errorMsg());
			log.error(utils.toJson(response.getError()), exception);
		}
		return response;
	}
}

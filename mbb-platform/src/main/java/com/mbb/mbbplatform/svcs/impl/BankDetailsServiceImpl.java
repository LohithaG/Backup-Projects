package com.mbb.mbbplatform.svcs.impl;

import java.time.ZonedDateTime;
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
import com.mbb.mbbplatform.domain.BankDetails;
import com.mbb.mbbplatform.domain.PoVendor;
import com.mbb.mbbplatform.model.ServiceResponse;
import com.mbb.mbbplatform.model.Utils;
import com.mbb.mbbplatform.repos.BankDetailsRepository;
import com.mbb.mbbplatform.repos.PoVendorRepository;
import com.mbb.mbbplatform.svcs.BankDetailsService;

@RestController
public class BankDetailsServiceImpl implements BankDetailsService {

	private static Logger log = LoggerFactory.getLogger(BankDetailsServiceImpl.class);

	@Autowired
	private Utils utils;

	@Autowired
	private PoVendorRepository poVendorRepository;

	@Autowired
	private BankDetailsRepository bankDetailsRepository;

	/**
	 * addBankDetails service implementation
	 * 
	 * @RequestBody bankDetails
	 * @return ServiceResponse<String>
	 */
	@Override
	public ServiceResponse<List<BankDetails>> addBankDetails(String bankDetails) {
		log.info("adding bank item details");
		ServiceResponse<List<BankDetails>> response = new ServiceResponse<>();

		List<BankDetails> bankDetailsList = new ArrayList<>();
		try {

			JSONObject object = new JSONObject(bankDetails);

			JSONObject poVendorObject = object.getJSONObject("poVendorId");

			Long poVendorId = poVendorObject.getLong("id");

			Optional<PoVendor> poVendorExists = poVendorRepository.findById(poVendorId);

			if (poVendorExists.isPresent()) {
				JSONArray jsonarray = object.getJSONArray("bankDetails");
				for (int i = 0; i < jsonarray.length(); i++) {
					BankDetails bankDetails1 = new BankDetails();
					JSONObject bankDetailsObject = jsonarray.getJSONObject(i);
					bankDetails1.setBankName(bankDetailsObject.getString("bankName"));
					bankDetails1.setTransactionNumber(bankDetailsObject.getString("transactionNumber"));
					bankDetails1.setAmount(bankDetailsObject.getDouble("amount"));
					String enteredDate = bankDetailsObject.getString("enteredDate");
					bankDetails1.setComments(bankDetailsObject.getString("comments"));
					bankDetails1.setEnteredDate(ZonedDateTime.parse(enteredDate));

					bankDetails1.setPoVendorId(poVendorExists.get());
					BankDetails savedbankDetails = bankDetailsRepository.save(bankDetails1);
					bankDetailsList.add(savedbankDetails);
				}
			} else {
				response.setError(EnumTypeForErrorCodes.SCUS1101.name(), EnumTypeForErrorCodes.SCUS1101.errorMsg());

			}

			response.setData(bankDetailsList);
		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS1102.name(), EnumTypeForErrorCodes.SCUS1102.errorMsg());
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
	public ServiceResponse<String> deleteBankDetailsBasedOnPoVendor(Long poVendorId) {

		log.info("delete bank details Based On PoVendor");
		ServiceResponse<String> response = new ServiceResponse<>();
		try {
			Optional<PoVendor> poVendor = poVendorRepository.findById(poVendorId);
			if (poVendor.isPresent()) {
				Collection<BankDetails> bankDetailsExist = bankDetailsRepository.findByPoVendorId(poVendor.get());
				bankDetailsRepository.deleteAll(bankDetailsExist);
			}
			response.setData("bank details detelted successfully");
		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS1103.name(), EnumTypeForErrorCodes.SCUS1103.errorMsg());
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
	public ServiceResponse<Collection<BankDetails>> getAllBankDetails() {

		log.info("getting all bank details");
		ServiceResponse<Collection<BankDetails>> response = new ServiceResponse<>();
		try {
			Collection<BankDetails> bankDetailsList = bankDetailsRepository.findAll();
			response.setData(bankDetailsList);
		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS1105.name(), EnumTypeForErrorCodes.SCUS1105.errorMsg());
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
	public ServiceResponse<Collection<BankDetails>> getBankDetailsByPoVendor(@PathVariable Long poVendorId) {

		log.info("getting all bank details");
		ServiceResponse<Collection<BankDetails>> response = new ServiceResponse<>();
		try {
			Optional<PoVendor> poVendor = poVendorRepository.findById(poVendorId);
			if (poVendor.isPresent()) {
				Collection<BankDetails> bankDetailsList = bankDetailsRepository.findByPoVendorId(poVendor.get());
				response.setData(bankDetailsList);
			}

		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS1104.name(), EnumTypeForErrorCodes.SCUS1104.errorMsg());
			log.error(utils.toJson(response.getError()), exception);
		}
		return response;
	}

	@Override
	public ServiceResponse<Double> getTotalAmountPerPoVendor(Long poVendorId) {
		log.info("total amount per vendor");
		ServiceResponse<Double> response = new ServiceResponse<>();
		try {
			Optional<PoVendor> poVendor = poVendorRepository.findById(poVendorId);
			if (poVendor.isPresent()) {
				Collection<BankDetails> bankDetailsList = bankDetailsRepository.findByPoVendorId(poVendor.get());
				Double total = (double) 0;
				for (BankDetails bankDetails : bankDetailsList) {
					Double amount = bankDetails.getAmount();
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

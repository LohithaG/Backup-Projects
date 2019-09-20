package com.mbb.mbbplatform.svcs.impl;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.json.simple.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.mbb.mbbplatform.common.EnumTypeForErrorCodes;
import com.mbb.mbbplatform.domain.BankDetails;
import com.mbb.mbbplatform.domain.OtherPoCharges;
import com.mbb.mbbplatform.domain.PoVendor;
import com.mbb.mbbplatform.domain.PriceDetails;
import com.mbb.mbbplatform.domain.ProductDetails;
import com.mbb.mbbplatform.domain.TotalAmountDetails;
import com.mbb.mbbplatform.domain.TypeOfCurrency;
import com.mbb.mbbplatform.domain.VendorItemDetails;
import com.mbb.mbbplatform.model.ServiceResponse;
import com.mbb.mbbplatform.model.Utils;
import com.mbb.mbbplatform.repos.BankDetailsRepository;
import com.mbb.mbbplatform.repos.OtherPoChargesRepository;
import com.mbb.mbbplatform.repos.PoVendorRepository;
import com.mbb.mbbplatform.repos.PriceDetailsRepository;
import com.mbb.mbbplatform.repos.TotalAmountDetailsRepository;
import com.mbb.mbbplatform.repos.TypeOfCurrencyRepository;
import com.mbb.mbbplatform.repos.VendorItemDetailsRepository;
import com.mbb.mbbplatform.svcs.PriceCalculationsService;

@RestController
@SuppressWarnings("unchecked")
public class PriceCalculationsServiceImpl implements PriceCalculationsService {

	private static Logger log = LoggerFactory.getLogger(VendorItemDetailsServiceImpl.class);

	@Autowired
	private PoVendorRepository poVendorRepository;
	@Autowired
	private VendorItemDetailsRepository vendorItemDetailsRepository;

	@Autowired
	private BankDetailsRepository bankDetailsRepository;

	@Autowired
	private OtherPoChargesRepository otherPoChargesRepository;

	@Autowired
	private TotalAmountDetailsRepository totalAmountDetailsRepository;

	@Autowired
	private PriceDetailsRepository priceDetailsRepository;

	@Autowired
	private TypeOfCurrencyRepository currencyTypeRepository;

	@Autowired
	private Utils utils;

	@Override
	public ServiceResponse<List<VendorItemDetails>> getAmountBeforeCharges(
			@Valid @RequestBody List<ProductDetails> skuCodeList, @PathVariable Long currencyTypeId,
			@PathVariable Long poVendorId) {
		log.info("calculating price details before charges");
		ServiceResponse<List<VendorItemDetails>> response = new ServiceResponse<>();
		List<Double> amountList = new ArrayList<>();
		List<Double> totalAmountList = new ArrayList<>();
		List<VendorItemDetails> vendorItemDetailsList = new ArrayList<>();
		List<PriceDetails> listOfPriceDetails = new ArrayList<>();

		try {
			TotalAmountDetails totalAmountDetails = new TotalAmountDetails();

			Double totalAmount = (double) 0;
			Double totalAmount1 = (double) 0;
			Double totalAmountPaidInBank = (double) 0;
			Optional<PoVendor> poVendor = poVendorRepository.findById(poVendorId);
			Optional<TypeOfCurrency> currencyType = currencyTypeRepository.findById(currencyTypeId);
			if (currencyType.isPresent() && poVendor.isPresent()) {

				poVendor.get().setCurrencyTypeId(currencyType.get());
				totalAmountDetails.setPoVendorId(poVendor.get());

			}
			Collection<BankDetails> existBankDetails = bankDetailsRepository.findByPoVendorId(poVendor.get());

			for (BankDetails bankDetails : existBankDetails) {

				totalAmountPaidInBank = totalAmountPaidInBank + bankDetails.getAmount();
			}
			poVendor.get().setPriceDetailsAdded(true);
			List<VendorItemDetails> itemDetails = vendorItemDetailsRepository.findByPoVendorId(poVendor.get());
			if (currencyTypeId == 1) {
				for (ProductDetails product : skuCodeList) {
					for (VendorItemDetails items : itemDetails) {
						if ((items.getSkuCode()).equals(product.getSkuCode())) {
							Double unitPriceInRupeesBeforeCharges = (product.getPrice());
							PriceDetails priceDetails = new PriceDetails();

							Double priceInRupeesBeforeCharges = (product.getPrice()) * (product.getQuantity());
							amountList.add(Math.round(unitPriceInRupeesBeforeCharges * 100.0) / 100.0);
							totalAmountList.add(Math.round(priceInRupeesBeforeCharges * 100.0) / 100.0);

							priceDetails.setUnitPriceInRupeesBeforeCharges(
									Math.round(unitPriceInRupeesBeforeCharges * 100.0) / 100.0);
							priceDetails.setPrice(Math.round(unitPriceInRupeesBeforeCharges * 100.0) / 100.0);
							priceDetails.setVendorItemDetailsId(items);
							priceDetails.setPoVendorId(poVendor.get());
							priceDetails.setPriceInRupeesBeforeCharges(
									Math.round(priceInRupeesBeforeCharges * 100.0) / 100.0);
							vendorItemDetailsList.add(items);
							listOfPriceDetails.add(priceDetails);
						}
					}
				}
				for (Double amount : amountList) {
					totalAmount = amount + totalAmount;
				}
				for (Double amount1 : totalAmountList) {
					totalAmount1 = amount1 + totalAmount1;
				}

				if (totalAmount1.equals(totalAmountPaidInBank)
						|| (totalAmount1 <= totalAmountPaidInBank + 1 && totalAmount1 >= totalAmountPaidInBank - 1)) {

					vendorItemDetailsRepository.saveAll(vendorItemDetailsList);
					priceDetailsRepository.saveAll(listOfPriceDetails);

					totalAmountDetails.setTotalUnitPriceAmountInRupees(totalAmount);
					totalAmountDetails.setTotalPriceAmountInRupees(totalAmount1);
					totalAmountDetailsRepository.save(totalAmountDetails);

				} else {
					response.setError(EnumTypeForErrorCodes.SCUS835.name(), EnumTypeForErrorCodes.SCUS835.errorMsg());

				}
			} else {

				Double unitPriceInUsd;
				List<Double> amountInBankDetailsList = new ArrayList<>();
				List<Double> priceInRupeesBeforeChargesList = new ArrayList<>();
				for (ProductDetails product : skuCodeList) {
					for (VendorItemDetails items : itemDetails) {
						if ((items.getSkuCode()).equals(product.getSkuCode())) {

							PriceDetails priceDetails = new PriceDetails();
							unitPriceInUsd = (product.getPrice()) * (product.getQuantity());
							priceDetails.setPrice(Math.round(product.getPrice() * 100.0) / 100.0);
							amountList.add(Math.round(unitPriceInUsd * 100.0) / 100.0);
							priceDetails.setUnitPriceInUsdBeforeCharges(Math.round(unitPriceInUsd * 100.0) / 100.0);
							priceDetails.setVendorItemDetailsId(items);
							priceDetails.setPoVendorId(poVendor.get());
							priceDetailsRepository.save(priceDetails);

						}
					}
				}

				Double totalAmountInBankDetails = (double) 0;
				if (poVendor.isPresent()) {
					Collection<BankDetails> bankDetailsList = bankDetailsRepository.findByPoVendorId(poVendor.get());
					for (BankDetails bankDetails : bankDetailsList) {
						Double amountInBankDetails = bankDetails.getAmount();
						amountInBankDetailsList.add(amountInBankDetails);
					}

					for (Double amount1 : amountInBankDetailsList) {
						totalAmountInBankDetails = amount1 + totalAmountInBankDetails;
					}
				}

				for (Double amount : amountList) {
					totalAmount = amount + totalAmount;
				}
				totalAmountDetails.setTotalAmountInUsd(totalAmount);
				Double ratio = (totalAmountInBankDetails) / (totalAmount);

				List<Double> amountList1 = new ArrayList<>();
				for (ProductDetails product : skuCodeList) {
					for (VendorItemDetails items : itemDetails) {
						if ((items.getSkuCode()).equals(product.getSkuCode())) {
							PriceDetails priceDetails = priceDetailsRepository.findByVendorItemDetailsId(items);

							Double unitPriceInRupeesBeforeCharges = (ratio) * Math.round((product.getPrice()) * 100.0)
									/ 100.0;

							priceDetails.setUnitPriceInRupeesBeforeCharges(
									Math.round(unitPriceInRupeesBeforeCharges * 100.0) / 100.0);
							Double priceInRupeesBeforeCharges = (Math.round(unitPriceInRupeesBeforeCharges * 100.0)
									/ 100.0) * (product.getQuantity());

							priceDetails.setPriceInRupeesBeforeCharges(
									Math.round(priceInRupeesBeforeCharges * 100.0) / 100.0);
							priceInRupeesBeforeChargesList.add(Math.round(priceInRupeesBeforeCharges * 100.0) / 100.0);
							amountList1.add(Math.round(unitPriceInRupeesBeforeCharges * 100.0) / 100.0);
							vendorItemDetailsList.add(items);

							priceDetailsRepository.save(priceDetails);

						}
					}
				}
				Double totalAmountInruppesPerUnit = (double) 0;
				for (Double amount1 : amountList1) {

					totalAmountInruppesPerUnit = Math.round((amount1 + totalAmountInruppesPerUnit) * 100.0) / 100.0;

				}
				Double totalAmountInruppes = (double) 0;
				for (Double amount2 : priceInRupeesBeforeChargesList) {
					totalAmountInruppes = Math.round((amount2 + totalAmountInruppes) * 100.0) / 100.0;

				}
				totalAmountDetails.setTotalPriceAmountInRupees(totalAmountInruppes);
				totalAmountDetails.setTotalUnitPriceAmountInRupees(totalAmountInruppesPerUnit);
				totalAmountDetailsRepository.save(totalAmountDetails);
			}
			poVendorRepository.save(poVendor.get());
			afterChargesPriceDetails(poVendorId);
			response.setData(vendorItemDetailsList);

		}

		catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS828.name(), EnumTypeForErrorCodes.SCUS828.errorMsg());
			log.error(utils.toJson(response.getError()), exception);
		}
		return response;
	}

	public void afterChargesPriceDetails(Long poVendorId) {
		log.info("calculating price details after charges");
		Optional<PoVendor> poVendor = poVendorRepository.findById(poVendorId);
		List<Double> amountInOtherChargesList = new ArrayList<>();
		if (poVendor.isPresent()) {
			Collection<OtherPoCharges> otherChargesList = otherPoChargesRepository.findByPoVendorId(poVendor.get());
			for (OtherPoCharges otherCharges : otherChargesList) {
				Double otherChargesTotal = otherCharges.getTotalAmount();
				amountInOtherChargesList.add(otherChargesTotal);
			}

			Collection<TotalAmountDetails> amountDetailsList = totalAmountDetailsRepository
					.findByPoVendorId(poVendor.get());
			for (TotalAmountDetails amountDetails : amountDetailsList) {
				Double amount = (double) 0;
				for (Double otherChargesPerUnit : amountInOtherChargesList) {
					amount = otherChargesPerUnit + amount;
				}
				Double ratioForOtherCharges = amount / (amountDetails.getTotalPriceAmountInRupees());

				Collection<VendorItemDetails> vendorItemDetailsList = vendorItemDetailsRepository
						.findByPoVendorId(poVendor.get());
				List<Double> otherChargesPerUnitList = new ArrayList<>();
				List<Double> priceAfterChargesPerUnitList = new ArrayList<>();

				for (VendorItemDetails itemDetails : vendorItemDetailsList) {

					PriceDetails priceDeatils = priceDetailsRepository.findByVendorItemDetailsId(itemDetails);

					Double otherChargesPerUnit = (ratioForOtherCharges)
							* (priceDeatils.getUnitPriceInRupeesBeforeCharges());
					priceDeatils.setOtherChargesPerUnit(Math.round(otherChargesPerUnit * 100.0) / 100.0);
					Double beforeCharges = priceDeatils.getUnitPriceInRupeesBeforeCharges();

					Double afterCharges = (otherChargesPerUnit) + (beforeCharges);

					priceDeatils.setUnitPriceInRupeesAfterCharges(Math.round(afterCharges * 100.0) / 100.0);

					otherChargesPerUnitList.add(otherChargesPerUnit);

					Double priceAfterChargesPerUnit = (afterCharges) * (itemDetails.getQuantity());

					priceDeatils.setPriceInRupeesAfterCharges(Math.round(priceAfterChargesPerUnit * 100.0) / 100.0);

					priceAfterChargesPerUnitList.add(Math.round(priceAfterChargesPerUnit * 100.0) / 100.0);
					priceDetailsRepository.save(priceDeatils);
					vendorItemDetailsRepository.save(itemDetails);
				}

				Double otherChargesTotal = (double) 0;
				for (Double otherCharges : otherChargesPerUnitList) {
					otherChargesTotal = otherCharges + otherChargesTotal;
				}

				amountDetails.setTotalAmountForOtherCharges(Math.round(otherChargesTotal * 100.0) / 100.0);

				Double afterChargesTotal = (double) 0;
				for (Double afterCharges : priceAfterChargesPerUnitList) {
					afterChargesTotal = afterCharges + afterChargesTotal;
				}

				amountDetails.setTotalAmountForAfterCharges(Math.round(afterChargesTotal * 100.0) / 100.0);

				totalAmountDetailsRepository.save(amountDetails);

			}
		}
	}

	@Override
	public ServiceResponse<JSONObject> getAllPoDetails(Long poVendorId) {
		log.info("calculating price details before charges");
		ServiceResponse<JSONObject> response = new ServiceResponse<>();
		try {
			JSONObject obj = new JSONObject();
			Optional<PoVendor> poVendor = poVendorRepository.findById(poVendorId);
			if (poVendor.isPresent()) {
				List<VendorItemDetails> itemDetails = vendorItemDetailsRepository.findByPoVendorId(poVendor.get());
				Collection<PriceDetails> priceDetails = priceDetailsRepository.findByPoVendorId(poVendor.get());

				Collection<OtherPoCharges> otherChargesList = otherPoChargesRepository.findByPoVendorId(poVendor.get());
				Collection<BankDetails> bankDetailsList = bankDetailsRepository.findByPoVendorId(poVendor.get());
				Collection<TotalAmountDetails> totalAmount = totalAmountDetailsRepository
						.findByPoVendorId(poVendor.get());

				obj.put("vendorItemDetails", itemDetails);
				obj.put("otherCharges", otherChargesList);
				obj.put("bankDetails", bankDetailsList);
				obj.put("priceDetails", priceDetails);
				obj.put("totalAmount", totalAmount);
			}

			response.setData(obj);

		} catch (Exception exception) {

			response.setError(EnumTypeForErrorCodes.SCUS829.name(), EnumTypeForErrorCodes.SCUS829.errorMsg());
			log.error(utils.toJson(response.getError()), exception);
		}
		return response;
	}

	@Override
	public ServiceResponse<String> deleteAmountDetailsBasedOnPoVendor(@Valid Long poVendorId) {
		ServiceResponse<String> response = new ServiceResponse<>();
		try {
			Optional<PoVendor> poVendor = poVendorRepository.findById(poVendorId);
			if (poVendor.isPresent()) {
				Collection<PriceDetails> priceDeatils = priceDetailsRepository.findByPoVendorId(poVendor.get());
				priceDetailsRepository.deleteAll(priceDeatils);
				Collection<TotalAmountDetails> totalAmount = totalAmountDetailsRepository
						.findByPoVendorId(poVendor.get());
				totalAmountDetailsRepository.deleteAll(totalAmount);

			}
			response.setData("Item detelted successfully");

		} catch (Exception exception) {

			response.setError(EnumTypeForErrorCodes.SCUS831.name(), EnumTypeForErrorCodes.SCUS831.errorMsg());
			log.error(utils.toJson(response.getError()), exception);
		}
		return response;
	}

	@Override
	public ServiceResponse<List<JSONObject>> getPriceDetailsetailsByPoVendor(@Valid Long poVendorId) {
		ServiceResponse<List<JSONObject>> response = new ServiceResponse<>();

		try {
			Optional<PoVendor> povendorExist = poVendorRepository.findById(poVendorId);
			if (povendorExist.isPresent()) {
				Collection<VendorItemDetails> existVendorItemDetails = vendorItemDetailsRepository
						.findByPoVendorId(povendorExist.get());
				List<JSONObject> objList = new ArrayList<>();
				for (VendorItemDetails itemDetails : existVendorItemDetails) {
					JSONObject obj = new JSONObject();
					PriceDetails priceDeatils = priceDetailsRepository.findByVendorItemDetailsId(itemDetails);

					if (priceDeatils != null) {
						obj.put("skuCode", priceDeatils.getVendorItemDetailsId().getSkuCode());
						obj.put("itemName", priceDeatils.getVendorItemDetailsId().getItemName());
						obj.put("quantity", priceDeatils.getVendorItemDetailsId().getQuantity());
						obj.put("price", priceDeatils.getPrice());
						obj.put("currencyType", povendorExist.get().getCurrencyTypeId());
					} else {
						obj.put("skuCode", itemDetails.getSkuCode());
						obj.put("itemName", itemDetails.getItemName());
						obj.put("quantity", itemDetails.getQuantity());
						obj.put("currencyType", povendorExist.get().getCurrencyTypeId());
					}
					objList.add(obj);
				}
				response.setData(objList);
			}

		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS830.name(), EnumTypeForErrorCodes.SCUS830.errorMsg());
			log.error(utils.toJson(response.getError()), exception);
		}

		return response;
	}

	/**
	 * getAllVendors service implementation
	 * 
	 * @return ServiceResponse<Collection<Vendor>>
	 */
	@Override
	public ServiceResponse<Collection<TypeOfCurrency>> getAllCurrencyTypes() {
		log.info("deleting vendor");
		ServiceResponse<Collection<TypeOfCurrency>> response = new ServiceResponse<>();
		try {
			Collection<TypeOfCurrency> vendorExists = currencyTypeRepository.findAll();

			response.setData(vendorExists);

		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS1125.name(), EnumTypeForErrorCodes.SCUS1125.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}
		return response;
	}

}

package com.mbb.mbbplatform.domain;

import java.time.LocalDate;
import java.time.LocalDateTime;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "cleartaxsalereport")
public class ClearTaxSaleReport {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	private LocalDate date;

	private String invoiceNumber;

	private String customerBillingName;

	private String customerBillingGstin;

	private String statePlaceOfSupply;

	private String isTheItemAGoodOrService;

	private String itemDescription;

	private Double hsnOrSacCode;

	private Double itemQuantity;

	private String itemUnitOfMeasurement;

	private Double itemRate;

	private Double totalItemDiscountAmount;

	private Double itemTaxableValue;

	private Double cgstRate;

	private Double cgstAmount;

	private Double sgstRate;

	private Double sgstAmount;

	private Double igstRate;

	private Double igstAmount;

	private Double cessRate;

	private Double cessAmount;

	private String isThisABillOfSupply;

	private String isThisANilRatedOrExemptOrNonGSTitem;

	private String isReverseChargeApplicable;

	private String typeOfExport;

	private String shippingPortCodeExport;

	private String shippingBillNumberExport;

	private LocalDate shippingBillDateExport;

	private String hasGSTOrIDTTdsBeenDeducted;

	private String myGstin;

	private String customerBillingAddress;

	private String customerBillingCity;

	private String customerBillingState;

	private String isThisDocumentCancelled;

	private String isTheCustomeraCompositionDealerOrUINRegistered;

	private String returnFilingPeriod;

	private LocalDate originalInvoiceDate;

	private LocalDateTime updatedDate;

	private String originalInvoiceNumber;

	private LocalDateTime createdDate;

	private LocalDateTime dateInCSvfile;

	private String originalCustomerBillingGSTIN;

	private String gstinOfEcommerceMarketplace;

	private LocalDate dateOfLinkedAdvanceReceipt;

	private String voucherNumberOfLinkedAdvanceReceipt;

	private String adjustmentAmountOfTheLinkedAdvanceReceipt;

	private Double totalTransactionValue;

	public String getInvoiceNumber() {
		return invoiceNumber;
	}

	public void setInvoiceNumber(String invoiceNumber) {
		this.invoiceNumber = invoiceNumber;
	}

	public String getCustomerBillingName() {
		return customerBillingName;
	}

	public void setCustomerBillingName(String customerBillingName) {
		this.customerBillingName = customerBillingName;
	}

	public String getCustomerBillingGstin() {
		return customerBillingGstin;
	}

	public void setCustomerBillingGstin(String customerBillingGstin) {
		this.customerBillingGstin = customerBillingGstin;
	}

	public String getStatePlaceOfSupply() {
		return statePlaceOfSupply;
	}

	public void setStatePlaceOfSupply(String statePlaceOfSupply) {
		this.statePlaceOfSupply = statePlaceOfSupply;
	}

	public String getIsTheItemAGoodOrService() {
		return isTheItemAGoodOrService;
	}

	public void setIsTheItemAGoodOrService(String isTheItemAGoodOrService) {
		this.isTheItemAGoodOrService = isTheItemAGoodOrService;
	}

	public String getItemDescription() {
		return itemDescription;
	}

	public void setItemDescription(String itemDescription) {
		this.itemDescription = itemDescription;
	}

	public Double getHsnOrSacCode() {
		return hsnOrSacCode;
	}

	public void setHsnOrSacCode(Double hsnOrSacCode) {
		this.hsnOrSacCode = hsnOrSacCode;
	}

	public Double getItemQuantity() {
		return itemQuantity;
	}

	public void setItemQuantity(Double itemQuantity) {
		this.itemQuantity = itemQuantity;
	}

	public String getItemUnitOfMeasurement() {
		return itemUnitOfMeasurement;
	}

	public void setItemUnitOfMeasurement(String itemUnitOfMeasurement) {
		this.itemUnitOfMeasurement = itemUnitOfMeasurement;
	}

	public Double getItemRate() {
		return itemRate;
	}

	public void setItemRate(Double itemRate) {
		this.itemRate = itemRate;
	}

	public Double getTotalItemDiscountAmount() {
		return totalItemDiscountAmount;
	}

	public void setTotalItemDiscountAmount(Double totalItemDiscountAmount) {
		this.totalItemDiscountAmount = totalItemDiscountAmount;
	}

	public Double getItemTaxableValue() {
		return itemTaxableValue;
	}

	public void setItemTaxableValue(Double itemTaxableValue) {
		this.itemTaxableValue = itemTaxableValue;
	}

	public Double getCgstRate() {
		return cgstRate;
	}

	public void setCgstRate(Double cgstRate) {
		this.cgstRate = cgstRate;
	}

	public Double getCgstAmount() {
		return cgstAmount;
	}

	public void setCgstAmount(Double cgstAmount) {
		this.cgstAmount = cgstAmount;
	}

	public Double getSgstRate() {
		return sgstRate;
	}

	public void setSgstRate(Double sgstRate) {
		this.sgstRate = sgstRate;
	}

	public Double getSgstAmount() {
		return sgstAmount;
	}

	public void setSgstAmount(Double sgstAmount) {
		this.sgstAmount = sgstAmount;
	}

	public Double getIgstRate() {
		return igstRate;
	}

	public void setIgstRate(Double igstRate) {
		this.igstRate = igstRate;
	}

	public Double getIgstAmount() {
		return igstAmount;
	}

	public void setIgstAmount(Double igstAmount) {
		this.igstAmount = igstAmount;
	}

	public Double getCessRate() {
		return cessRate;
	}

	public void setCessRate(Double cessRate) {
		this.cessRate = cessRate;
	}

	public Double getCessAmount() {
		return cessAmount;
	}

	public void setCessAmount(Double cessAmount) {
		this.cessAmount = cessAmount;
	}

	public String getIsThisABillOfSupply() {
		return isThisABillOfSupply;
	}

	public void setIsThisABillOfSupply(String isThisABillOfSupply) {
		this.isThisABillOfSupply = isThisABillOfSupply;
	}

	public String getIsThisANilRatedOrExemptOrNonGSTitem() {
		return isThisANilRatedOrExemptOrNonGSTitem;
	}

	public void setIsThisANilRatedOrExemptOrNonGSTitem(String isThisANilRatedOrExemptOrNonGSTitem) {
		this.isThisANilRatedOrExemptOrNonGSTitem = isThisANilRatedOrExemptOrNonGSTitem;
	}

	public String getIsReverseChargeApplicable() {
		return isReverseChargeApplicable;
	}

	public void setIsReverseChargeApplicable(String isReverseChargeApplicable) {
		this.isReverseChargeApplicable = isReverseChargeApplicable;
	}

	public String getTypeOfExport() {
		return typeOfExport;
	}

	public void setTypeOfExport(String typeOfExport) {
		this.typeOfExport = typeOfExport;
	}

	public String getShippingPortCodeExport() {
		return shippingPortCodeExport;
	}

	public void setShippingPortCodeExport(String shippingPortCodeExport) {
		this.shippingPortCodeExport = shippingPortCodeExport;
	}

	public String getShippingBillNumberExport() {
		return shippingBillNumberExport;
	}

	public void setShippingBillNumberExport(String shippingBillNumberExport) {
		this.shippingBillNumberExport = shippingBillNumberExport;
	}

	public LocalDate getShippingBillDateExport() {
		return shippingBillDateExport;
	}

	public void setShippingBillDateExport(LocalDate shippingBillDateExport) {
		this.shippingBillDateExport = shippingBillDateExport;
	}

	public String getHasGSTOrIDTTdsBeenDeducted() {
		return hasGSTOrIDTTdsBeenDeducted;
	}

	public void setHasGSTOrIDTTdsBeenDeducted(String hasGSTOrIDTTdsBeenDeducted) {
		this.hasGSTOrIDTTdsBeenDeducted = hasGSTOrIDTTdsBeenDeducted;
	}

	public String getMyGstin() {
		return myGstin;
	}

	public void setMyGstin(String myGstin) {
		this.myGstin = myGstin;
	}

	public String getCustomerBillingAddress() {
		return customerBillingAddress;
	}

	public void setCustomerBillingAddress(String customerBillingAddress) {
		this.customerBillingAddress = customerBillingAddress;
	}

	public String getCustomerBillingCity() {
		return customerBillingCity;
	}

	public void setCustomerBillingCity(String customerBillingCity) {
		this.customerBillingCity = customerBillingCity;
	}

	public String getCustomerBillingState() {
		return customerBillingState;
	}

	public void setCustomerBillingState(String customerBillingState) {
		this.customerBillingState = customerBillingState;
	}

	public String getIsThisDocumentCancelled() {
		return isThisDocumentCancelled;
	}

	public void setIsThisDocumentCancelled(String isThisDocumentCancelled) {
		this.isThisDocumentCancelled = isThisDocumentCancelled;
	}

	public String getIsTheCustomeraCompositionDealerOrUINRegistered() {
		return isTheCustomeraCompositionDealerOrUINRegistered;
	}

	public void setIsTheCustomeraCompositionDealerOrUINRegistered(
			String isTheCustomeraCompositionDealerOrUINRegistered) {
		this.isTheCustomeraCompositionDealerOrUINRegistered = isTheCustomeraCompositionDealerOrUINRegistered;
	}

	public String getReturnFilingPeriod() {
		return returnFilingPeriod;
	}

	public void setReturnFilingPeriod(String returnFilingPeriod) {
		this.returnFilingPeriod = returnFilingPeriod;
	}

	public LocalDate getOriginalInvoiceDate() {
		return originalInvoiceDate;
	}

	public void setOriginalInvoiceDate(LocalDate originalInvoiceDate) {
		this.originalInvoiceDate = originalInvoiceDate;
	}

	public String getOriginalInvoiceNumber() {
		return originalInvoiceNumber;
	}

	public void setOriginalInvoiceNumber(String originalInvoiceNumber) {
		this.originalInvoiceNumber = originalInvoiceNumber;
	}

	public String getOriginalCustomerBillingGSTIN() {
		return originalCustomerBillingGSTIN;
	}

	public void setOriginalCustomerBillingGSTIN(String originalCustomerBillingGSTIN) {
		this.originalCustomerBillingGSTIN = originalCustomerBillingGSTIN;
	}

	public String getGstinOfEcommerceMarketplace() {
		return gstinOfEcommerceMarketplace;
	}

	public void setGstinOfEcommerceMarketplace(String gstinOfEcommerceMarketplace) {
		this.gstinOfEcommerceMarketplace = gstinOfEcommerceMarketplace;
	}

	public LocalDate getDateOfLinkedAdvanceReceipt() {
		return dateOfLinkedAdvanceReceipt;
	}

	public void setDateOfLinkedAdvanceReceipt(LocalDate dateOfLinkedAdvanceReceipt) {
		this.dateOfLinkedAdvanceReceipt = dateOfLinkedAdvanceReceipt;
	}

	public String getVoucherNumberOfLinkedAdvanceReceipt() {
		return voucherNumberOfLinkedAdvanceReceipt;
	}

	public void setVoucherNumberOfLinkedAdvanceReceipt(String voucherNumberOfLinkedAdvanceReceipt) {
		this.voucherNumberOfLinkedAdvanceReceipt = voucherNumberOfLinkedAdvanceReceipt;
	}

	public String getAdjustmentAmountOfTheLinkedAdvanceReceipt() {
		return adjustmentAmountOfTheLinkedAdvanceReceipt;
	}

	public void setAdjustmentAmountOfTheLinkedAdvanceReceipt(String adjustmentAmountOfTheLinkedAdvanceReceipt) {
		this.adjustmentAmountOfTheLinkedAdvanceReceipt = adjustmentAmountOfTheLinkedAdvanceReceipt;
	}

	public Double getTotalTransactionValue() {
		return totalTransactionValue;
	}

	public void setTotalTransactionValue(Double totalTransactionValue) {
		this.totalTransactionValue = totalTransactionValue;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public void setDate(LocalDate date) {
		this.date = date;
	}

	public void setDateInCSvfile(LocalDateTime dateInCSvfile) {
		this.dateInCSvfile = dateInCSvfile;
	}

	public Long getId() {
		return id;
	}

	public LocalDate getDate() {
		return date;
	}

	public LocalDateTime getUpdatedDate() {
		return updatedDate;
	}

	public void setUpdatedDate(LocalDateTime updatedDate) {
		this.updatedDate = updatedDate;
	}

	public LocalDateTime getCreatedDate() {
		return createdDate;
	}

	public void setCreatedDate(LocalDateTime createdDate) {
		this.createdDate = createdDate;
	}

	public LocalDateTime getDateInCSvfile() {
		return dateInCSvfile;
	}

}

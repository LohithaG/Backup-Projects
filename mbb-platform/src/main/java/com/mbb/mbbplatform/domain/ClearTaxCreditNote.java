package com.mbb.mbbplatform.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "cleartaxcreditnote")
public class ClearTaxCreditNote {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	private LocalDate creditOrDebitNoteDate;

	private String creditOrDebitNoteNumber;

	private String creditOrDebitNoteType;

	private LocalDate invoiceDate;

	private String invoiceNumber;

	private String customerBillingName;

	private String customerBillingGstin;

	private String statePlaceOfSupply;

	private String isTheItemAGoodOrService;

	private String itemDescription;

	private Double hsnOrSacCode;

	private Double itemquantity;

	private String isReverseChargeApplicable;

	private String isThisANilRatedOrExemptOrNonGSTItem;

	private LocalDate originalCreditOrDebitNoteDate;

	private Long originalCreditOrDebitNoteNumber;

	private String originalCustomerBillingGstin;

	private String myGSTIN;

	private String customerBillingAddress;

	private String customerBillingCity;

	private String customerBillingState;

	private String isThisDocumentCancelled;

	private Double taxAmount;

	private String transactionType;

	private String isThisNoteForBillOfSupply;

	private String reasonForIssuingCDN;

	private String isThisNoteForAPreGSTInvoice;

	private String isTheCustomerACompositionDealerOrUinRegistered;

	private String returnFilingPeriod;

	private LocalDateTime updatedDate;

	private Double totalTransactionValue;

	private LocalDateTime createdDate;

	private LocalDateTime dateInCSvfile;

	private String itemUnitOfMeasurement;

	private Double cgstRate;

	private Double itemRate;

	private Double totalItemDiscountAmount;

	private Double itemTaxableValue;

	private Double sgstRate;

	private Double igstRate;

	private Double cgstAmount;

	private Double sgstAmount;

	private Double igstAmount;

	private Double cessRate;

	private Double cessAmount;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public LocalDate getCreditOrDebitNoteDate() {
		return creditOrDebitNoteDate;
	}

	public void setCreditOrDebitNoteDate(LocalDate creditOrDebitNoteDate) {
		this.creditOrDebitNoteDate = creditOrDebitNoteDate;
	}

	public String getCreditOrDebitNoteNumber() {
		return creditOrDebitNoteNumber;
	}

	public void setCreditOrDebitNoteNumber(String creditOrDebitNoteNumber) {
		this.creditOrDebitNoteNumber = creditOrDebitNoteNumber;
	}

	public String getCreditOrDebitNoteType() {
		return creditOrDebitNoteType;
	}

	public void setCreditOrDebitNoteType(String creditOrDebitNoteType) {
		this.creditOrDebitNoteType = creditOrDebitNoteType;
	}

	public LocalDate getInvoiceDate() {
		return invoiceDate;
	}

	public void setInvoiceDate(LocalDate invoiceDate) {
		this.invoiceDate = invoiceDate;
	}

	public Double getItemquantity() {
		return itemquantity;
	}

	public void setItemquantity(Double itemquantity) {
		this.itemquantity = itemquantity;
	}

	public Double getCessAmount() {
		return cessAmount;
	}

	public void setCessAmount(Double cessAmount) {
		this.cessAmount = cessAmount;
	}

	public String getIsReverseChargeApplicable() {
		return isReverseChargeApplicable;
	}

	public void setIsReverseChargeApplicable(String isReverseChargeApplicable) {
		this.isReverseChargeApplicable = isReverseChargeApplicable;
	}

	public String getIsThisANilRatedOrExemptOrNonGSTItem() {
		return isThisANilRatedOrExemptOrNonGSTItem;
	}

	public void setIsThisANilRatedOrExemptOrNonGSTItem(String isThisANilRatedOrExemptOrNonGSTItem) {
		this.isThisANilRatedOrExemptOrNonGSTItem = isThisANilRatedOrExemptOrNonGSTItem;
	}

	public LocalDate getOriginalCreditOrDebitNoteDate() {
		return originalCreditOrDebitNoteDate;
	}

	public void setOriginalCreditOrDebitNoteDate(LocalDate originalCreditOrDebitNoteDate) {
		this.originalCreditOrDebitNoteDate = originalCreditOrDebitNoteDate;
	}

	public Long getOriginalCreditOrDebitNoteNumber() {
		return originalCreditOrDebitNoteNumber;
	}

	public void setOriginalCreditOrDebitNoteNumber(Long originalCreditOrDebitNoteNumber) {
		this.originalCreditOrDebitNoteNumber = originalCreditOrDebitNoteNumber;
	}

	public String getOriginalCustomerBillingGstin() {
		return originalCustomerBillingGstin;
	}

	public void setOriginalCustomerBillingGstin(String originalCustomerBillingGstin) {
		this.originalCustomerBillingGstin = originalCustomerBillingGstin;
	}

	public String getMyGSTIN() {
		return myGSTIN;
	}

	public void setMyGSTIN(String myGSTIN) {
		this.myGSTIN = myGSTIN;
	}

	public Double getTaxAmount() {
		return taxAmount;
	}

	public void setTaxAmount(Double taxAmount) {
		this.taxAmount = taxAmount;
	}

	public String getTransactionType() {
		return transactionType;
	}

	public void setTransactionType(String transactionType) {
		this.transactionType = transactionType;
	}

	public String getIsThisNoteForBillOfSupply() {
		return isThisNoteForBillOfSupply;
	}

	public void setIsThisNoteForBillOfSupply(String isThisNoteForBillOfSupply) {
		this.isThisNoteForBillOfSupply = isThisNoteForBillOfSupply;
	}

	public String getReasonForIssuingCDN() {
		return reasonForIssuingCDN;
	}

	public void setReasonForIssuingCDN(String reasonForIssuingCDN) {
		this.reasonForIssuingCDN = reasonForIssuingCDN;
	}

	public String getIsThisNoteForAPreGSTInvoice() {
		return isThisNoteForAPreGSTInvoice;
	}

	public void setIsThisNoteForAPreGSTInvoice(String isThisNoteForAPreGSTInvoice) {
		this.isThisNoteForAPreGSTInvoice = isThisNoteForAPreGSTInvoice;
	}

	public String getIsTheCustomerACompositionDealerOrUinRegistered() {
		return isTheCustomerACompositionDealerOrUinRegistered;
	}

	public void setIsTheCustomerACompositionDealerOrUinRegistered(
			String isTheCustomerACompositionDealerOrUinRegistered) {
		this.isTheCustomerACompositionDealerOrUinRegistered = isTheCustomerACompositionDealerOrUinRegistered;
	}

	public String getReturnFilingPeriod() {
		return returnFilingPeriod;
	}

	public void setReturnFilingPeriod(String returnFilingPeriod) {
		this.returnFilingPeriod = returnFilingPeriod;
	}

	public String getInvoiceNumber() {
		return invoiceNumber;
	}

	public void setInvoiceNumber(String invoiceNumber) {
		this.invoiceNumber = invoiceNumber;
	}

	public String getCustomerBillingName() {
		return customerBillingName;
	}

	public void setItemDescription(String itemDescription) {
		this.itemDescription = itemDescription;
	}

	public String getItemDescription() {
		return itemDescription;
	}

	public String getIsTheItemAGoodOrService() {
		return isTheItemAGoodOrService;
	}

	public void setIsTheItemAGoodOrService(String isTheItemAGoodOrService) {
		this.isTheItemAGoodOrService = isTheItemAGoodOrService;
	}

	public Double getHsnOrSacCode() {
		return hsnOrSacCode;
	}

	public void setHsnOrSacCode(Double hsnOrSacCode) {
		this.hsnOrSacCode = hsnOrSacCode;
	}

	public String getCustomerBillingGstin() {
		return customerBillingGstin;
	}

	public String getStatePlaceOfSupply() {
		return statePlaceOfSupply;
	}

	public void setCustomerBillingName(String customerBillingName) {
		this.customerBillingName = customerBillingName;
	}

	public void setCustomerBillingGstin(String customerBillingGstin) {
		this.customerBillingGstin = customerBillingGstin;
	}

	public void setStatePlaceOfSupply(String statePlaceOfSupply) {
		this.statePlaceOfSupply = statePlaceOfSupply;
	}

	public Double getCgstRate() {
		return cgstRate;
	}

	public void setCgstRate(Double cgstRate) {
		this.cgstRate = cgstRate;
	}

	public void setItemTaxableValue(Double itemTaxableValue) {
		this.itemTaxableValue = itemTaxableValue;
	}

	public void setSgstRate(Double sgstRate) {
		this.sgstRate = sgstRate;
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

	public Double getSgstAmount() {
		return sgstAmount;
	}

	public void setSgstAmount(Double sgstAmount) {
		this.sgstAmount = sgstAmount;
	}

	public Double getIgstAmount() {
		return igstAmount;
	}

	public Double getIgstRate() {
		return igstRate;
	}

	public void setIgstAmount(Double igstAmount) {
		this.igstAmount = igstAmount;
	}

	public void setIgstRate(Double igstRate) {
		this.igstRate = igstRate;
	}

	public Double getCessRate() {
		return cessRate;
	}

	public String getCustomerBillingAddress() {
		return customerBillingAddress;
	}

	public void setCessRate(Double cessRate) {
		this.cessRate = cessRate;
	}

	public void setCustomerBillingAddress(String customerBillingAddress) {
		this.customerBillingAddress = customerBillingAddress;
	}

	public String getCustomerBillingCity() {
		return customerBillingCity;
	}

	public String getCustomerBillingState() {
		return customerBillingState;
	}

	public void setCustomerBillingCity(String customerBillingCity) {
		this.customerBillingCity = customerBillingCity;
	}

	public void setCustomerBillingState(String customerBillingState) {
		this.customerBillingState = customerBillingState;
	}

	public void setTotalTransactionValue(Double totalTransactionValue) {
		this.totalTransactionValue = totalTransactionValue;
	}

	public String getIsThisDocumentCancelled() {
		return isThisDocumentCancelled;
	}

	public void setIsThisDocumentCancelled(String isThisDocumentCancelled) {
		this.isThisDocumentCancelled = isThisDocumentCancelled;
	}

	public Double getTotalTransactionValue() {
		return totalTransactionValue;
	}

	public LocalDateTime getCreatedDate() {
		return createdDate;
	}

	public LocalDateTime getUpdatedDate() {
		return updatedDate;
	}

	public void setCreatedDate(LocalDateTime createdDate) {
		this.createdDate = createdDate;
	}

	public void setUpdatedDate(LocalDateTime updatedDate) {
		this.updatedDate = updatedDate;
	}

	public LocalDateTime getDateInCSvfile() {
		return dateInCSvfile;
	}

	public void setDateInCSvfile(LocalDateTime dateInCSvfile) {
		this.dateInCSvfile = dateInCSvfile;
	}

	public String getItemUnitOfMeasurement() {
		return itemUnitOfMeasurement;
	}

	public Double getItemRate() {
		return itemRate;
	}

	public void setItemUnitOfMeasurement(String itemUnitOfMeasurement) {
		this.itemUnitOfMeasurement = itemUnitOfMeasurement;
	}

	public Double getTotalItemDiscountAmount() {
		return totalItemDiscountAmount;
	}

	public void setItemRate(Double itemRate) {
		this.itemRate = itemRate;
	}

	public void setTotalItemDiscountAmount(Double totalItemDiscountAmount) {
		this.totalItemDiscountAmount = totalItemDiscountAmount;
	}

	public Double getItemTaxableValue() {
		return itemTaxableValue;
	}

}

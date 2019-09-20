package com.mbb.mbbplatform.domain;

import java.time.LocalDate;
import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tallygstreport")
public class TallyGSTReport {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	private LocalDate date;

	private String saleOrderNumber;

	private String invoiceNumber;

	private Double channelEntry;

	private String channelLedger;

	private String productName;

	private String productSKUCode;

	private Double qty;

	private Double unitPrice;

	private String currency;

	private Double conversionRate;

	private Double total;

	private String customerName;

	private String shippingAddressName;

	private String shippingAddressLine1;

	private String shippingAddressLine2;

	private String shippingAddressCity;

	private String shippingAddressState;

	private String shippingAddressCountry;

	private String shippingAddressPincode;

	private String shippingAddressPhone;

	private String shippingProvider;

	private String awbNum;

	private Double sales;

	private String salesLedger;

	private Double cgst;

	private String cgstRate;

	private Double sgst;

	private String sGSTRate;

	private Double igst;

	private String igstRate;

	private Double utgst;

	private String utgstRate;

	private Double cess;

	private String cessRate;

	private Double othercharges;

	private String otherChargesLedger;

	private Double otherCharges1;

	private String otherChargesLedger1;

	private Double serviceTax;

	private String stLedger;

	private Double discountLedger;

	private Double discountAmount;

	private Long imei;

	private String goDown;

	private LocalDateTime dispatchDateOrcancellationDate;

	private LocalDateTime narration;

	private String entity;

	private String voucherTypeName;

	private Long tinNo;

	private LocalDate originalInvoiceDate;

	private String originalSaleNo;

	private LocalDateTime channelInvoiceCreated;

	private String channelState;

	private String channelPartyGSTIN;

	private String customerGSTIN;

	private String billingPartyCode;

	private Double taxVerification;

	private String gstRegistrationType;

	private LocalDateTime createdDate;

	private LocalDateTime updatedDate;

	private LocalDateTime dateInCSvfile;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public LocalDate getDate() {
		return date;
	}

	public void setDate(LocalDate date) {
		this.date = date;
	}

	public String getSaleOrderNumber() {
		return saleOrderNumber;
	}

	public void setSaleOrderNumber(String saleOrderNumber) {
		this.saleOrderNumber = saleOrderNumber;
	}

	public String getInvoiceNumber() {
		return invoiceNumber;
	}

	public void setInvoiceNumber(String invoiceNumber) {
		this.invoiceNumber = invoiceNumber;
	}

	public Double getChannelEntry() {
		return channelEntry;
	}

	public void setChannelEntry(Double channelEntry) {
		this.channelEntry = channelEntry;
	}

	public String getChannelLedger() {
		return channelLedger;
	}

	public void setChannelLedger(String channelLedger) {
		this.channelLedger = channelLedger;
	}

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public String getProductSKUCode() {
		return productSKUCode;
	}

	public void setProductSKUCode(String productSKUCode) {
		this.productSKUCode = productSKUCode;
	}

	public Double getQty() {
		return qty;
	}

	public void setQty(Double qty) {
		this.qty = qty;
	}

	public Double getUnitPrice() {
		return unitPrice;
	}

	public void setUnitPrice(Double unitPrice) {
		this.unitPrice = unitPrice;
	}

	public String getCurrency() {
		return currency;
	}

	public void setCurrency(String currency) {
		this.currency = currency;
	}

	public Double getConversionRate() {
		return conversionRate;
	}

	public void setConversionRate(Double conversionRate) {
		this.conversionRate = conversionRate;
	}

	public Double getTotal() {
		return total;
	}

	public void setTotal(Double total) {
		this.total = total;
	}

	public String getCustomerName() {
		return customerName;
	}

	public void setCustomerName(String customerName) {
		this.customerName = customerName;
	}

	public String getShippingAddressName() {
		return shippingAddressName;
	}

	public void setShippingAddressName(String shippingAddressName) {
		this.shippingAddressName = shippingAddressName;
	}

	public String getShippingAddressLine1() {
		return shippingAddressLine1;
	}

	public void setShippingAddressLine1(String shippingAddressLine1) {
		this.shippingAddressLine1 = shippingAddressLine1;
	}

	public String getShippingAddressLine2() {
		return shippingAddressLine2;
	}

	public void setShippingAddressLine2(String shippingAddressLine2) {
		this.shippingAddressLine2 = shippingAddressLine2;
	}

	public String getShippingAddressCity() {
		return shippingAddressCity;
	}

	public void setShippingAddressCity(String shippingAddressCity) {
		this.shippingAddressCity = shippingAddressCity;
	}

	public String getShippingAddressState() {
		return shippingAddressState;
	}

	public void setShippingAddressState(String shippingAddressState) {
		this.shippingAddressState = shippingAddressState;
	}

	public String getShippingAddressCountry() {
		return shippingAddressCountry;
	}

	public void setShippingAddressCountry(String shippingAddressCountry) {
		this.shippingAddressCountry = shippingAddressCountry;
	}

	public String getShippingAddressPincode() {
		return shippingAddressPincode;
	}

	public void setShippingAddressPincode(String shippingAddressPincode) {
		this.shippingAddressPincode = shippingAddressPincode;
	}

	public String getShippingAddressPhone() {
		return shippingAddressPhone;
	}

	public void setShippingAddressPhone(String shippingAddressPhone) {
		this.shippingAddressPhone = shippingAddressPhone;
	}

	public String getShippingProvider() {
		return shippingProvider;
	}

	public void setShippingProvider(String shippingProvider) {
		this.shippingProvider = shippingProvider;
	}

	public String getAwbNum() {
		return awbNum;
	}

	public void setAwbNum(String awbNum) {
		this.awbNum = awbNum;
	}

	public Double getSales() {
		return sales;
	}

	public void setSales(Double sales) {
		this.sales = sales;
	}

	public String getSalesLedger() {
		return salesLedger;
	}

	public void setSalesLedger(String salesLedger) {
		this.salesLedger = salesLedger;
	}

	public Double getCgst() {
		return cgst;
	}

	public void setCgst(Double cgst) {
		this.cgst = cgst;
	}

	public String getCgstRate() {
		return cgstRate;
	}

	public void setCgstRate(String cgstRate) {
		this.cgstRate = cgstRate;
	}

	public Double getSgst() {
		return sgst;
	}

	public void setSgst(Double sgst) {
		this.sgst = sgst;
	}

	

	public String getsGSTRate() {
		return sGSTRate;
	}

	public void setsGSTRate(String sGSTRate) {
		this.sGSTRate = sGSTRate;
	}

	public Double getIgst() {
		return igst;
	}

	public void setIgst(Double igst) {
		this.igst = igst;
	}

	public String getIgstRate() {
		return igstRate;
	}

	public void setIgstRate(String igstRate) {
		this.igstRate = igstRate;
	}

	public Double getUtgst() {
		return utgst;
	}

	public void setUtgst(Double utgst) {
		this.utgst = utgst;
	}

	public String getUtgstRate() {
		return utgstRate;
	}

	public void setUtgstRate(String utgstRate) {
		this.utgstRate = utgstRate;
	}

	public Double getCess() {
		return cess;
	}

	public void setCess(Double cess) {
		this.cess = cess;
	}

	public String getCessRate() {
		return cessRate;
	}

	public void setCessRate(String cessRate) {
		this.cessRate = cessRate;
	}

	public Double getOthercharges() {
		return othercharges;
	}

	public void setOthercharges(Double othercharges) {
		this.othercharges = othercharges;
	}

	public String getOtherChargesLedger() {
		return otherChargesLedger;
	}

	public void setOtherChargesLedger(String otherChargesLedger) {
		this.otherChargesLedger = otherChargesLedger;
	}

	public Double getOtherCharges1() {
		return otherCharges1;
	}

	public void setOtherCharges1(Double otherCharges1) {
		this.otherCharges1 = otherCharges1;
	}

	public String getOtherChargesLedger1() {
		return otherChargesLedger1;
	}

	public void setOtherChargesLedger1(String otherChargesLedger1) {
		this.otherChargesLedger1 = otherChargesLedger1;
	}

	public Double getServiceTax() {
		return serviceTax;
	}

	public void setServiceTax(Double serviceTax) {
		this.serviceTax = serviceTax;
	}

	public String getStLedger() {
		return stLedger;
	}

	public void setStLedger(String stLedger) {
		this.stLedger = stLedger;
	}

	public Double getDiscountLedger() {
		return discountLedger;
	}

	public void setDiscountLedger(Double discountLedger) {
		this.discountLedger = discountLedger;
	}

	public Double getDiscountAmount() {
		return discountAmount;
	}

	public void setDiscountAmount(Double discountAmount) {
		this.discountAmount = discountAmount;
	}

	public Long getImei() {
		return imei;
	}

	public void setImei(Long imei) {
		this.imei = imei;
	}

	public String getGoDown() {
		return goDown;
	}

	public void setGoDown(String goDown) {
		this.goDown = goDown;
	}

	public LocalDateTime getDispatchDateOrcancellationDate() {
		return dispatchDateOrcancellationDate;
	}

	public void setDispatchDateOrcancellationDate(LocalDateTime dispatchDateOrcancellationDate) {
		this.dispatchDateOrcancellationDate = dispatchDateOrcancellationDate;
	}

	public LocalDateTime getNarration() {
		return narration;
	}

	public void setNarration(LocalDateTime narration) {
		this.narration = narration;
	}

	public String getEntity() {
		return entity;
	}

	public void setEntity(String entity) {
		this.entity = entity;
	}

	public String getVoucherTypeName() {
		return voucherTypeName;
	}

	public void setVoucherTypeName(String voucherTypeName) {
		this.voucherTypeName = voucherTypeName;
	}

	public Long getTinNo() {
		return tinNo;
	}

	public void setTinNo(Long tinNo) {
		this.tinNo = tinNo;
	}

	public LocalDate getOriginalInvoiceDate() {
		return originalInvoiceDate;
	}

	public void setOriginalInvoiceDate(LocalDate originalInvoiceDate) {
		this.originalInvoiceDate = originalInvoiceDate;
	}

	public String getOriginalSaleNo() {
		return originalSaleNo;
	}

	public void setOriginalSaleNo(String originalSaleNo) {
		this.originalSaleNo = originalSaleNo;
	}

	public LocalDateTime getChannelInvoiceCreated() {
		return channelInvoiceCreated;
	}

	public void setChannelInvoiceCreated(LocalDateTime channelInvoiceCreated) {
		this.channelInvoiceCreated = channelInvoiceCreated;
	}

	public String getChannelState() {
		return channelState;
	}

	public void setChannelState(String channelState) {
		this.channelState = channelState;
	}

	

	public String getChannelPartyGSTIN() {
		return channelPartyGSTIN;
	}

	public void setChannelPartyGSTIN(String channelPartyGSTIN) {
		this.channelPartyGSTIN = channelPartyGSTIN;
	}

	public String getCustomerGSTIN() {
		return customerGSTIN;
	}

	public void setCustomerGSTIN(String customerGSTIN) {
		this.customerGSTIN = customerGSTIN;
	}

	public String getBillingPartyCode() {
		return billingPartyCode;
	}

	public void setBillingPartyCode(String billingPartyCode) {
		this.billingPartyCode = billingPartyCode;
	}

	public Double getTaxVerification() {
		return taxVerification;
	}

	public void setTaxVerification(Double taxVerification) {
		this.taxVerification = taxVerification;
	}

	public String getGstRegistrationType() {
		return gstRegistrationType;
	}

	public void setGstRegistrationType(String gstRegistrationType) {
		this.gstRegistrationType = gstRegistrationType;
	}

	public LocalDateTime getCreatedDate() {
		return createdDate;
	}

	public void setCreatedDate(LocalDateTime createdDate) {
		this.createdDate = createdDate;
	}

	public LocalDateTime getUpdatedDate() {
		return updatedDate;
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

}


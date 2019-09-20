package com.mbb.mbbplatform.domain;

import java.time.LocalDate;
import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "purchaseentries")
public class PurchaseEntries {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	private LocalDate createdlDate;

	private String poCode;

	private String voucherNumber;

	private String itemTypeName;

	private String itemSkuCode;

	private String category;

	private Double hsnCode;

	private String vendorPartyName;

	private String vendorCode;

	private String vendorSkuCode;

	private String orderQuantity;

	private String facility;

	private Double unitPrice;

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

	private String purchaseAmount;

	private String purchaseLedger;

	private Double cgst;

	private Double cgstRate;

	private Double sgst;

	private Double sgstRate;

	private Double igst;

	private Double igstRate;

	private Double utgst;

	private Double utgstRate;

	private Double cess;

	private Double cessRate;

	private Double otherCharges;

	private String otherChargesLedger;

	private String otherCharges1;

	private String otherChargesLedger1;

	private String purchaseOrderStatus;

	private String updated;

	private String goDown;

	private String narration;

	private String voucherTypeName;

	private String channelState;

	private String channelPartyGSTIN;

	private String customerGSTIN;

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

	public LocalDate getCreatedlDate() {
		return createdlDate;
	}

	public void setCreatedlDate(LocalDate createdlDate) {
		this.createdlDate = createdlDate;
	}

	public String getPoCode() {
		return poCode;
	}

	public void setPoCode(String poCode) {
		this.poCode = poCode;
	}

	public String getVoucherNumber() {
		return voucherNumber;
	}

	public void setVoucherNumber(String voucherNumber) {
		this.voucherNumber = voucherNumber;
	}

	public String getItemTypeName() {
		return itemTypeName;
	}

	public void setItemTypeName(String itemTypeName) {
		this.itemTypeName = itemTypeName;
	}

	public String getItemSkuCode() {
		return itemSkuCode;
	}

	public void setItemSkuCode(String itemSkuCode) {
		this.itemSkuCode = itemSkuCode;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public Double getHsnCode() {
		return hsnCode;
	}

	public void setHsnCode(Double hsnCode) {
		this.hsnCode = hsnCode;
	}

	public String getVendorPartyName() {
		return vendorPartyName;
	}

	public void setVendorPartyName(String vendorPartyName) {
		this.vendorPartyName = vendorPartyName;
	}

	public String getVendorCode() {
		return vendorCode;
	}

	public void setVendorCode(String vendorCode) {
		this.vendorCode = vendorCode;
	}

	public String getVendorSkuCode() {
		return vendorSkuCode;
	}

	public void setVendorSkuCode(String vendorSkuCode) {
		this.vendorSkuCode = vendorSkuCode;
	}

	public String getOrderQuantity() {
		return orderQuantity;
	}

	public void setOrderQuantity(String orderQuantity) {
		this.orderQuantity = orderQuantity;
	}

	public String getFacility() {
		return facility;
	}

	public void setFacility(String facility) {
		this.facility = facility;
	}

	public Double getUnitPrice() {
		return unitPrice;
	}

	public void setUnitPrice(Double unitPrice) {
		this.unitPrice = unitPrice;
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

	public String getPurchaseAmount() {
		return purchaseAmount;
	}

	public void setPurchaseAmount(String purchaseAmount) {
		this.purchaseAmount = purchaseAmount;
	}

	public String getPurchaseLedger() {
		return purchaseLedger;
	}

	public void setPurchaseLedger(String purchaseLedger) {
		this.purchaseLedger = purchaseLedger;
	}

	public Double getCgst() {
		return cgst;
	}

	public void setCgst(Double cgst) {
		this.cgst = cgst;
	}

	public Double getCgstRate() {
		return cgstRate;
	}

	public void setCgstRate(Double cgstRate) {
		this.cgstRate = cgstRate;
	}

	public Double getSgst() {
		return sgst;
	}

	public void setSgst(Double sgst) {
		this.sgst = sgst;
	}

	public Double getSgstRate() {
		return sgstRate;
	}

	public void setSgstRate(Double sgstRate) {
		this.sgstRate = sgstRate;
	}

	public Double getIgst() {
		return igst;
	}

	public void setIgst(Double igst) {
		this.igst = igst;
	}

	public Double getIgstRate() {
		return igstRate;
	}

	public void setIgstRate(Double igstRate) {
		this.igstRate = igstRate;
	}

	public Double getUtgst() {
		return utgst;
	}

	public void setUtgst(Double utgst) {
		this.utgst = utgst;
	}

	public Double getUtgstRate() {
		return utgstRate;
	}

	public void setUtgstRate(Double utgstRate) {
		this.utgstRate = utgstRate;
	}

	public Double getCess() {
		return cess;
	}

	public void setCess(Double cess) {
		this.cess = cess;
	}

	public Double getCessRate() {
		return cessRate;
	}

	public void setCessRate(Double cessRate) {
		this.cessRate = cessRate;
	}

	public Double getOtherCharges() {
		return otherCharges;
	}

	public void setOtherCharges(Double otherCharges) {
		this.otherCharges = otherCharges;
	}

	public String getOtherChargesLedger() {
		return otherChargesLedger;
	}

	public void setOtherChargesLedger(String otherChargesLedger) {
		this.otherChargesLedger = otherChargesLedger;
	}

	public String getOtherCharges1() {
		return otherCharges1;
	}

	public void setOtherCharges1(String otherCharges1) {
		this.otherCharges1 = otherCharges1;
	}

	public String getOtherChargesLedger1() {
		return otherChargesLedger1;
	}

	public void setOtherChargesLedger1(String otherChargesLedger1) {
		this.otherChargesLedger1 = otherChargesLedger1;
	}

	public String getPurchaseOrderStatus() {
		return purchaseOrderStatus;
	}

	public void setPurchaseOrderStatus(String purchaseOrderStatus) {
		this.purchaseOrderStatus = purchaseOrderStatus;
	}

	public String getUpdated() {
		return updated;
	}

	public void setUpdated(String updated) {
		this.updated = updated;
	}

	public String getGoDown() {
		return goDown;
	}

	public void setGoDown(String goDown) {
		this.goDown = goDown;
	}

	public String getNarration() {
		return narration;
	}

	public void setNarration(String narration) {
		this.narration = narration;
	}

	public String getVoucherTypeName() {
		return voucherTypeName;
	}

	public void setVoucherTypeName(String voucherTypeName) {
		this.voucherTypeName = voucherTypeName;
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

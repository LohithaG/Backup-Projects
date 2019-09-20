package com.mbb.mbbplatform.domain;

import java.time.LocalDate;
import java.time.LocalDateTime;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "busyinvoices")
public class BusyInvoices {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)

	private Long id;

	private String series;

	private LocalDate date;

	private String billNo;

	private String saleType;

	private String account;

	private String mcName;

	private String itemName;

	private Double quantity;

	private String unit;

	private Double price;

	private Double amount;

	private String orderNo;

	private String brockerName;

	private String custName;

	private String custAdd;

	private String custCity;

	private String custPhone;

	private String itemId;

	private String awb;

	private String courier;

	private Double cgst;

	private Double sgst;

	private Double utgst;

	private Double igst;

	private Double compensationCess;

	private Double cgstRate;

	private Double igstRate;

	private Double sgstRate;

	private Double utgstRate;

	private Double cessRate;

	private Double saleTax;

	private Double surCharge;

	private Double percentageOfAdditionalTax;

	private Double amtOfAdditionalTax;

	private String freightAndForwardingCharges;

	private Double shippingCharges;

	private Long imei;

	private String channelLedgerName;

	private String itemDetails;

	private LocalDateTime createdDate;

	private LocalDateTime updatedDate;

	private LocalDateTime dateInCSvfile;

	public Long getId() {
		return id;
	}

	public String getSeries() {
		return series;
	}

	public LocalDate getDate() {
		return date;
	}

	public String getBillNo() {
		return billNo;
	}

	public String getSaleType() {
		return saleType;
	}

	public String getAccount() {
		return account;
	}

	public String getOrderNo() {
		return orderNo;
	}

	public LocalDateTime getDateInCSvfile() {
		return dateInCSvfile;
	}

	public String getBrockerName() {
		return brockerName;
	}

	public String getCustName() {
		return custName;
	}

	public String getCustAdd() {
		return custAdd;
	}

	public String getCustCity() {
		return custCity;
	}

	public String getItemId() {
		return itemId;
	}

	public String getCustPhone() {
		return custPhone;
	}

	public String getAwb() {
		return awb;
	}

	public String getCourier() {
		return courier;
	}

	public Double getSgst() {
		return sgst;
	}

	public Double getCgst() {
		return cgst;
	}

	public Double getUtgst() {
		return utgst;
	}

	public Double getIgst() {
		return igst;
	}

	public Double getCompensationCess() {
		return compensationCess;
	}

	public Double getCgstRate() {
		return cgstRate;
	}

	public Double getIgstRate() {
		return igstRate;
	}

	public Double getSgstRate() {
		return sgstRate;
	}

	public Double getUtgstRate() {
		return utgstRate;
	}

	public LocalDateTime getUpdatedDate() {
		return updatedDate;
	}

	public Double getCessRate() {
		return cessRate;
	}

	public Double getSaleTax() {
		return saleTax;
	}

	public Double getSurCharge() {
		return surCharge;
	}

	public Double getPercentageOfAdditionalTax() {
		return percentageOfAdditionalTax;
	}

	public String getChannelLedgerName() {
		return channelLedgerName;
	}

	public Double getAmtOfAdditionalTax() {
		return amtOfAdditionalTax;
	}

	public String getFreightAndForwardingCharges() {
		return freightAndForwardingCharges;
	}

	public Double getShippingCharges() {
		return shippingCharges;
	}

	public String getUnit() {
		return unit;
	}

	public Long getImei() {
		return imei;
	}

	public String getItemName() {
		return itemName;
	}

	public String getMcName() {
		return mcName;
	}

	public Double getQuantity() {
		return quantity;
	}

	public Double getAmount() {
		return amount;
	}

	public Double getPrice() {
		return price;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public void setSeries(String series) {
		this.series = series;
	}

	public void setDate(LocalDate date) {
		this.date = date;
	}

	public void setSaleType(String saleType) {
		this.saleType = saleType;
	}

	public void setBillNo(String billNo) {
		this.billNo = billNo;
	}

	public void setOrderNo(String orderNo) {
		this.orderNo = orderNo;
	}

	public LocalDateTime getCreatedDate() {
		return createdDate;
	}

	public void setBrockerName(String brockerName) {
		this.brockerName = brockerName;
	}

	public void setAccount(String account) {
		this.account = account;
	}

	public void setCustName(String custName) {
		this.custName = custName;
	}

	public void setCustAdd(String custAdd) {
		this.custAdd = custAdd;
	}

	public void setCustCity(String custCity) {
		this.custCity = custCity;
	}

	public void setCustPhone(String custPhone) {
		this.custPhone = custPhone;
	}

	public void setItemId(String itemId) {
		this.itemId = itemId;
	}

	public void setAwb(String awb) {
		this.awb = awb;
	}

	public void setCourier(String courier) {
		this.courier = courier;
	}

	public void setCgst(Double cgst) {
		this.cgst = cgst;
	}

	public void setSgst(Double sgst) {
		this.sgst = sgst;
	}

	public void setUtgst(Double utgst) {
		this.utgst = utgst;
	}

	public void setIgst(Double igst) {
		this.igst = igst;
	}

	public void setCompensationCess(Double compensationCess) {
		this.compensationCess = compensationCess;
	}

	public void setCgstRate(Double cgstRate) {
		this.cgstRate = cgstRate;
	}

	public void setIgstRate(Double igstRate) {
		this.igstRate = igstRate;
	}

	public void setSgstRate(Double sgstRate) {
		this.sgstRate = sgstRate;
	}

	public void setUtgstRate(Double utgstRate) {
		this.utgstRate = utgstRate;
	}

	public void setCessRate(Double cessRate) {
		this.cessRate = cessRate;
	}

	public void setSaleTax(Double saleTax) {
		this.saleTax = saleTax;
	}

	public void setSurCharge(Double surCharge) {
		this.surCharge = surCharge;
	}

	public void setPercentageOfAdditionalTax(Double percentageOfAdditionalTax) {
		this.percentageOfAdditionalTax = percentageOfAdditionalTax;
	}

	public void setAmtOfAdditionalTax(Double amtOfAdditionalTax) {
		this.amtOfAdditionalTax = amtOfAdditionalTax;
	}

	public void setFreightAndForwardingCharges(String freightAndForwardingCharges) {
		this.freightAndForwardingCharges = freightAndForwardingCharges;
	}

	public void setShippingCharges(Double shippingCharges) {
		this.shippingCharges = shippingCharges;
	}

	public void setImei(Long imei) {
		this.imei = imei;
	}

	public void setMcName(String mcName) {
		this.mcName = mcName;
	}

	public void setUnit(String unit) {
		this.unit = unit;
	}

	public void setPrice(Double price) {
		this.price = price;
	}

	public void setQuantity(Double quantity) {
		this.quantity = quantity;
	}

	public void setAmount(Double amount) {
		this.amount = amount;
	}

	public void setChannelLedgerName(String channelLedgerName) {
		this.channelLedgerName = channelLedgerName;
	}

	public String getItemDetails() {
		return itemDetails;
	}

	public void setItemDetails(String itemDetails) {
		this.itemDetails = itemDetails;
	}

	public void setCreatedDate(LocalDateTime createdDate) {
		this.createdDate = createdDate;
	}

	public void setUpdatedDate(LocalDateTime updatedDate) {
		this.updatedDate = updatedDate;
	}

	public void setItemName(String itemName) {
		this.itemName = itemName;
	}

	public void setDateInCSvfile(LocalDateTime dateInCSvfile) {
		this.dateInCSvfile = dateInCSvfile;
	}

}

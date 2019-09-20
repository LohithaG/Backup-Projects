package com.mbb.mbbplatform.domain;

import java.time.LocalDateTime;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "invoice")
public class Invoice {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	private String orderNo;

	private String invoiceNo;

	private String shippingPackageCode;

	private String shippingPackageStatusCode;

	private LocalDateTime invoiceCreatedDate;

	private LocalDateTime channelInvoiceCreatedDate;

	private String customerName;

	private String skuCode;

	private String skuName;

	private Double quantity;

	private Double invoiceTax;

	private Double invoiceTotal;

	private String invoiceCancelled;

	private Double hsnCode;

	private Long gstTaxTypeCode;

	private Double shippingCharge;

	private Double codCharge;

	private String channelName;

	private LocalDateTime createdDate;

	private LocalDateTime updatedDate;

	private LocalDateTime dateInCSvfile;

	private Double cess;

	private Double cgst;

	private Double igst;

	private Double sgst;

	private Double utgst;

	private Double utgstRate;

	private Double cgstRate;

	private Double igstRate;

	private Double sgstRate;

	private Double cessRate;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getOrderNo() {
		return orderNo;
	}

	public void setOrderNo(String orderNo) {
		this.orderNo = orderNo;
	}

	public String getInvoiceNo() {
		return invoiceNo;
	}

	public void setInvoiceNo(String invoiceNo) {
		this.invoiceNo = invoiceNo;
	}

	public String getShippingPackageCode() {
		return shippingPackageCode;
	}

	public void setShippingPackageCode(String shippingPackageCode) {
		this.shippingPackageCode = shippingPackageCode;
	}

	public String getShippingPackageStatusCode() {
		return shippingPackageStatusCode;
	}

	public void setShippingPackageStatusCode(String shippingPackageStatusCode) {
		this.shippingPackageStatusCode = shippingPackageStatusCode;
	}

	public LocalDateTime getInvoiceCreatedDate() {
		return invoiceCreatedDate;
	}

	public void setInvoiceCreatedDate(LocalDateTime invoiceCreatedDate) {
		this.invoiceCreatedDate = invoiceCreatedDate;
	}

	public LocalDateTime getChannelInvoiceCreatedDate() {
		return channelInvoiceCreatedDate;
	}

	public void setChannelInvoiceCreatedDate(LocalDateTime channelInvoiceCreatedDate) {
		this.channelInvoiceCreatedDate = channelInvoiceCreatedDate;
	}

	public String getCustomerName() {
		return customerName;
	}

	public void setCustomerName(String customerName) {
		this.customerName = customerName;
	}

	public String getSkuCode() {
		return skuCode;
	}

	public void setSkuCode(String skuCode) {
		this.skuCode = skuCode;
	}

	public String getSkuName() {
		return skuName;
	}

	public void setSkuName(String skuName) {
		this.skuName = skuName;
	}

	public Double getQuantity() {
		return quantity;
	}

	public void setQuantity(Double quantity) {
		this.quantity = quantity;
	}

	public Double getInvoiceTax() {
		return invoiceTax;
	}

	public void setInvoiceTax(Double invoiceTax) {
		this.invoiceTax = invoiceTax;
	}

	public Double getInvoiceTotal() {
		return invoiceTotal;
	}

	public void setInvoiceTotal(Double invoiceTotal) {
		this.invoiceTotal = invoiceTotal;
	}

	public String getInvoiceCancelled() {
		return invoiceCancelled;
	}

	public void setInvoiceCancelled(String invoiceCancelled) {
		this.invoiceCancelled = invoiceCancelled;
	}

	public Double getHsnCode() {
		return hsnCode;
	}

	public void setHsnCode(Double hsnCode) {
		this.hsnCode = hsnCode;
	}

	public Long getGstTaxTypeCode() {
		return gstTaxTypeCode;
	}

	public Double getShippingCharge() {
		return shippingCharge;
	}

	public void setShippingCharge(Double shippingCharge) {
		this.shippingCharge = shippingCharge;
	}

	public Double getCodCharge() {
		return codCharge;
	}

	public void setCodCharge(Double codCharge) {
		this.codCharge = codCharge;
	}

	public LocalDateTime getCreatedDate() {
		return createdDate;
	}

	public void setCreatedDate(LocalDateTime createdDate) {
		this.createdDate = createdDate;
	}

	public void setUpdatedDate(LocalDateTime updatedDate) {
		this.updatedDate = updatedDate;
	}

	public void setDateInCSvfile(LocalDateTime dateInCSvfile) {
		this.dateInCSvfile = dateInCSvfile;
	}

	public LocalDateTime getUpdatedDate() {
		return updatedDate;
	}

	public LocalDateTime getDateInCSvfile() {
		return dateInCSvfile;
	}

	public String getChannelName() {
		return channelName;
	}

	public void setChannelName(String channelName) {
		this.channelName = channelName;
	}

	public Double getIgstRate() {
		return igstRate;
	}

	public void setCess(Double cess) {
		this.cess = cess;
	}

	public Double getCgstRate() {
		return cgstRate;
	}

	public void setCgstRate(Double cgstRate) {
		this.cgstRate = cgstRate;
	}

	public void setIgstRate(Double igstRate) {
		this.igstRate = igstRate;
	}

	public Double getSgstRate() {
		return sgstRate;
	}

	public void setSgstRate(Double sgstRate) {
		this.sgstRate = sgstRate;
	}

	public Double getCessRate() {
		return cessRate;
	}

	public Double getUtgstRate() {
		return utgstRate;
	}

	public void setUtgstRate(Double utgstRate) {
		this.utgstRate = utgstRate;
	}

	public void setCessRate(Double cessRate) {
		this.cessRate = cessRate;
	}

	public void setGstTaxTypeCode(Long gstTaxTypeCode) {
		this.gstTaxTypeCode = gstTaxTypeCode;
	}

	public Double getCgst() {
		return cgst;
	}

	public Double getIgst() {
		return igst;
	}

	public void setCgst(Double cgst) {
		this.cgst = cgst;
	}

	public void setIgst(Double igst) {
		this.igst = igst;
	}

	public void setSgst(Double sgst) {
		this.sgst = sgst;
	}

	public Double getSgst() {
		return sgst;
	}

	public Double getUtgst() {
		return utgst;
	}

	public void setUtgst(Double utgst) {
		this.utgst = utgst;
	}

	public Double getCess() {
		return cess;
	}

}

package com.mbb.mbbplatform.domain;

import java.time.LocalDate;
import java.time.ZonedDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;


@Entity
@Table(name = "povendor")
public class PoVendor {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	@ManyToOne
	@JoinColumn(name = "vendorId")
	private Vendor vendorId;

	private String purchaseOrderNumber;

	@CreationTimestamp
	private ZonedDateTime createdTime;

	@UpdateTimestamp
	private ZonedDateTime updatedTime;

	private ZonedDateTime commercialInvoiceDate;

	private LocalDate stockReceivedDate;

	private Boolean enable;

	private Boolean priceDetailsAdded;

	private String comments;

	@ManyToOne
	@JoinColumn(name = "status")
	private PoStatus status;

	@ManyToOne
	@JoinColumn(name = "currencyTypeId")
	private TypeOfCurrency currencyTypeId;

	@ManyToOne
	@JoinColumn(name = "purchaseInvoiceStatus")
	private PurchaseInvoiceStatus purchaseInvoiceStatus;

	public Long getId() {
		return id;
	}

	public PoStatus getStatus() {
		return status;
	}

	public ZonedDateTime getCommercialInvoiceDate() {
		return commercialInvoiceDate;
	}

	public void setCommercialInvoiceDate(ZonedDateTime commercialInvoiceDate) {
		this.commercialInvoiceDate = commercialInvoiceDate;
	}

	public void setStatus(PoStatus status) {
		this.status = status;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getPurchaseOrderNumber() {
		return purchaseOrderNumber;
	}

	public void setPurchaseOrderNumber(String purchaseOrderNumber) {
		this.purchaseOrderNumber = purchaseOrderNumber;
	}

	public ZonedDateTime getCreatedTime() {
		return createdTime;
	}

	public void setCreatedTime(ZonedDateTime createdTime) {
		this.createdTime = createdTime;
	}

	public PurchaseInvoiceStatus getPurchaseInvoiceStatus() {
		return purchaseInvoiceStatus;
	}

	public void setPurchaseInvoiceStatus(PurchaseInvoiceStatus purchaseInvoiceStatus) {
		this.purchaseInvoiceStatus = purchaseInvoiceStatus;
	}

	public ZonedDateTime getUpdatedTime() {
		return updatedTime;
	}

	public void setUpdatedTime(ZonedDateTime updatedTime) {
		this.updatedTime = updatedTime;
	}

	public Vendor getVendorId() {
		return vendorId;
	}

	

	public LocalDate getStockReceivedDate() {
		return stockReceivedDate;
	}

	public void setStockReceivedDate(LocalDate stockReceivedDate) {
		this.stockReceivedDate = stockReceivedDate;
	}

	public void setVendorId(Vendor vendorId) {
		this.vendorId = vendorId;
	}

	public Boolean getEnable() {
		return enable;
	}

	public void setEnable(Boolean enable) {
		this.enable = enable;
	}

	public Boolean getPriceDetailsAdded() {
		return priceDetailsAdded;
	}

	public void setPriceDetailsAdded(Boolean priceDetailsAdded) {
		this.priceDetailsAdded = priceDetailsAdded;
	}

	public String getComments() {
		return comments;
	}

	public void setComments(String comments) {
		this.comments = comments;
	}

	public TypeOfCurrency getCurrencyTypeId() {
		return currencyTypeId;
	}

	public void setCurrencyTypeId(TypeOfCurrency currencyTypeId) {
		this.currencyTypeId = currencyTypeId;
	}

}

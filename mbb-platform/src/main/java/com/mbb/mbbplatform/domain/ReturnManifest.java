package com.mbb.mbbplatform.domain;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "returnmanifest")
public class ReturnManifest {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	private String returnManifestCode;

	private String returnManifestStatus;

	private String createdBy;

	private String createdAt;

	private String shippingPackageCode;

	private String trackingNumber;

	private String saleOrderCode;

	private String customerName;

	private String customerEmail;

	private String shippingPackageStatus;

	private String reshipmentAction;

	private LocalDateTime dispatchTime;

	private String shippingProvider;

	private String updatedAt;

	private String channelName;

	private LocalDateTime createdDate;

	private LocalDateTime updatedDate;

	private LocalDateTime dateInCSvfile;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getReturnManifestCode() {
		return returnManifestCode;
	}

	public void setReturnManifestCode(String returnManifestCode) {
		this.returnManifestCode = returnManifestCode;
	}

	public String getReturnManifestStatus() {
		return returnManifestStatus;
	}

	public void setReturnManifestStatus(String returnManifestStatus) {
		this.returnManifestStatus = returnManifestStatus;
	}

	public String getCreatedBy() {
		return createdBy;
	}

	public void setCreatedBy(String createdBy) {
		this.createdBy = createdBy;
	}

	public String getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(String createdAt) {
		this.createdAt = createdAt;
	}

	public String getShippingPackageCode() {
		return shippingPackageCode;
	}

	public void setShippingPackageCode(String shippingPackageCode) {
		this.shippingPackageCode = shippingPackageCode;
	}

	public String getTrackingNumber() {
		return trackingNumber;
	}

	public void setTrackingNumber(String trackingNumber) {
		this.trackingNumber = trackingNumber;
	}

	public String getSaleOrderCode() {
		return saleOrderCode;
	}

	public void setSaleOrderCode(String saleOrderCode) {
		this.saleOrderCode = saleOrderCode;
	}

	public String getCustomerName() {
		return customerName;
	}

	public void setCustomerName(String customerName) {
		this.customerName = customerName;
	}

	public String getCustomerEmail() {
		return customerEmail;
	}

	public void setCustomerEmail(String customerEmail) {
		this.customerEmail = customerEmail;
	}

	public String getShippingPackageStatus() {
		return shippingPackageStatus;
	}

	public void setShippingPackageStatus(String shippingPackageStatus) {
		this.shippingPackageStatus = shippingPackageStatus;
	}

	public String getReshipmentAction() {
		return reshipmentAction;
	}

	public void setReshipmentAction(String reshipmentAction) {
		this.reshipmentAction = reshipmentAction;
	}

	public LocalDateTime getDispatchTime() {
		return dispatchTime;
	}

	public void setDispatchTime(LocalDateTime dispatchTime) {
		this.dispatchTime = dispatchTime;
	}

	public String getShippingProvider() {
		return shippingProvider;
	}

	public void setShippingProvider(String shippingProvider) {
		this.shippingProvider = shippingProvider;
	}

	public String getUpdatedAt() {
		return updatedAt;
	}

	public void setUpdatedAt(String updatedAt) {
		this.updatedAt = updatedAt;
	}

	public String getChannelName() {
		return channelName;
	}

	public void setChannelName(String channelName) {
		this.channelName = channelName;
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

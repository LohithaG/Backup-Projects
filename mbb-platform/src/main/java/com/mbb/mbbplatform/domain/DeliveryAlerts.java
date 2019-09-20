package com.mbb.mbbplatform.domain;

import java.time.LocalDateTime;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "DeliveryAlert")
public class DeliveryAlerts {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	private String saleOrderCode;

	@Column(name = "trackingNumber_Zepo")
	private String trackingNumber;

	@Column(name = "displayOrderCode_SR")
	private String displayOrderCode;

	private LocalDateTime createdDate;

	private LocalDateTime updatedDate;

	private String statusCode;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getSaleOrderCode() {
		return saleOrderCode;
	}

	public void setSaleOrderCode(String saleOrderCode) {
		this.saleOrderCode = saleOrderCode;
	}

	public String getTrackingNumber() {
		return trackingNumber;
	}

	public void setTrackingNumber(String trackingNumber) {
		this.trackingNumber = trackingNumber;
	}

	public String getDisplayOrderCode() {
		return displayOrderCode;
	}

	public void setDisplayOrderCode(String displayOrderCode) {
		this.displayOrderCode = displayOrderCode;
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

	public String getStatusCode() {
		return statusCode;
	}

	public void setStatusCode(String statusCode) {
		this.statusCode = statusCode;
	}

}

package com.mbb.mbbplatform.domain;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "sales")
public class Sales {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	private String currentStatus;

	private LocalDateTime deliveredDateTime;

	private LocalDateTime createdDate;

	private LocalDateTime updatedDate;

	private Integer displayOrderId;

	private String trackingNumber;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getCurrentStatus() {
		return currentStatus;
	}

	public void setCurrentStatus(String currentStatus) {
		this.currentStatus = currentStatus;
	}

	public LocalDateTime getDeliveredDateTime() {
		return deliveredDateTime;
	}

	public void setDeliveredDateTime(LocalDateTime deliveredDateTime) {
		this.deliveredDateTime = deliveredDateTime;
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

	public Integer getDisplayOrderId() {
		return displayOrderId;
	}

	public void setDisplayOrderId(Integer displayOrderId) {
		this.displayOrderId = displayOrderId;
	}

	public String getTrackingNumber() {
		return trackingNumber;
	}

	public void setTrackingNumber(String trackingNumber) {
		this.trackingNumber = trackingNumber;
	}

}

package com.mbb.mbbplatform.domain;

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
@Table(name = "otherpocharges")
public class OtherPoCharges {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	private Double bankCharges;

	private Double customDuty;

	private Double clearingCharges;

	private Double transportation;

	private Double carriageInwardOrOutward;

	private Double otherCharges;

	private Double totalAmount;

	@ManyToOne
	@JoinColumn(name = "poVendorId")
	private PoVendor poVendorId;

	@CreationTimestamp
	private ZonedDateTime createdTime;

	@UpdateTimestamp
	private ZonedDateTime updatedTime;

	

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Double getBankCharges() {
		return bankCharges;
	}

	public void setBankCharges(Double bankCharges) {
		this.bankCharges = bankCharges;
	}

	public Double getCustomDuty() {
		return customDuty;
	}

	public void setCustomDuty(Double customDuty) {
		this.customDuty = customDuty;
	}

	public Double getClearingCharges() {
		return clearingCharges;
	}

	public void setClearingCharges(Double clearingCharges) {
		this.clearingCharges = clearingCharges;
	}

	public Double getTransportation() {
		return transportation;
	}

	public void setTransportation(Double transportation) {
		this.transportation = transportation;
	}

	public Double getCarriageInwardOrOutward() {
		return carriageInwardOrOutward;
	}

	public void setCarriageInwardOrOutward(Double carriageInwardOrOutward) {
		this.carriageInwardOrOutward = carriageInwardOrOutward;
	}

	public Double getOtherCharges() {
		return otherCharges;
	}

	public void setOtherCharges(Double otherCharges) {
		this.otherCharges = otherCharges;
	}

	public PoVendor getPoVendorId() {
		return poVendorId;
	}

	public void setPoVendorId(PoVendor poVendorId) {
		this.poVendorId = poVendorId;
	}

	public ZonedDateTime getCreatedTime() {
		return createdTime;
	}

	public void setCreatedTime(ZonedDateTime createdTime) {
		this.createdTime = createdTime;
	}

	public ZonedDateTime getUpdatedTime() {
		return updatedTime;
	}

	public void setUpdatedTime(ZonedDateTime updatedTime) {
		this.updatedTime = updatedTime;
	}

	public Double getTotalAmount() {
		return totalAmount;
	}

	public void setTotalAmount(Double totalAmount) {
		this.totalAmount = totalAmount;
	}


}

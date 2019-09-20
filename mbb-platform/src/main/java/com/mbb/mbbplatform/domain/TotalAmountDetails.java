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
@Table(name = "totalpricedetails")
public class TotalAmountDetails {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	@ManyToOne
	@JoinColumn(name = "poVendorId")
	private PoVendor poVendorId;
	
	@CreationTimestamp
	private ZonedDateTime createdTime;

	@UpdateTimestamp
	private ZonedDateTime updatedTime;
	
	private Double totalAmountInUsd;
	
	private Double totalUnitPriceAmountInRupees;
	
	private Double totalPriceAmountInRupees;
	
	private Double totalAmountForOtherCharges;
	
	private Double totalAmountForAfterCharges;
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
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

	public Double getTotalAmountInUsd() {
		return totalAmountInUsd;
	}

	public void setTotalAmountInUsd(Double totalAmountInUsd) {
		this.totalAmountInUsd = totalAmountInUsd;
	}

	public Double getTotalUnitPriceAmountInRupees() {
		return totalUnitPriceAmountInRupees;
	}

	public void setTotalUnitPriceAmountInRupees(Double totalUnitPriceAmountInRupees) {
		this.totalUnitPriceAmountInRupees = totalUnitPriceAmountInRupees;
	}

	public Double getTotalPriceAmountInRupees() {
		return totalPriceAmountInRupees;
	}

	public void setTotalPriceAmountInRupees(Double totalPriceAmountInRupees) {
		this.totalPriceAmountInRupees = totalPriceAmountInRupees;
	}

	public Double getTotalAmountForOtherCharges() {
		return totalAmountForOtherCharges;
	}

	public void setTotalAmountForOtherCharges(Double totalAmountForOtherCharges) {
		this.totalAmountForOtherCharges = totalAmountForOtherCharges;
	}

	public Double getTotalAmountForAfterCharges() {
		return totalAmountForAfterCharges;
	}

	public void setTotalAmountForAfterCharges(Double totalAmountForAfterCharges) {
		this.totalAmountForAfterCharges = totalAmountForAfterCharges;
	}
	
}

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
@Table(name = "pricedetails")
public class PriceDetails {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	private Double price;

	private Double unitPriceInUsdBeforeCharges;

	private Double unitPriceInRupeesBeforeCharges;

	private Double priceInRupeesBeforeCharges;

	private Double unitPriceInRupeesAfterCharges;

	private Double priceInRupeesAfterCharges;
	
	private Double otherChargesPerUnit;
	
	@ManyToOne
	@JoinColumn(name = "poVendorId")
	private PoVendor poVendorId;

	@CreationTimestamp
	private ZonedDateTime createdTime;

	@UpdateTimestamp
	private ZonedDateTime updatedTime;
	
	@ManyToOne
	@JoinColumn(name = "vendorItemDetailsId")
	private VendorItemDetails vendorItemDetailsId;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Double getPrice() {
		return price;
	}

	public void setPrice(Double price) {
		this.price = price;
	}

	public Double getUnitPriceInUsdBeforeCharges() {
		return unitPriceInUsdBeforeCharges;
	}

	public void setUnitPriceInUsdBeforeCharges(Double unitPriceInUsdBeforeCharges) {
		this.unitPriceInUsdBeforeCharges = unitPriceInUsdBeforeCharges;
	}

	public Double getUnitPriceInRupeesBeforeCharges() {
		return unitPriceInRupeesBeforeCharges;
	}

	public void setUnitPriceInRupeesBeforeCharges(Double unitPriceInRupeesBeforeCharges) {
		this.unitPriceInRupeesBeforeCharges = unitPriceInRupeesBeforeCharges;
	}

	public Double getPriceInRupeesBeforeCharges() {
		return priceInRupeesBeforeCharges;
	}

	public void setPriceInRupeesBeforeCharges(Double priceInRupeesBeforeCharges) {
		this.priceInRupeesBeforeCharges = priceInRupeesBeforeCharges;
	}

	public Double getUnitPriceInRupeesAfterCharges() {
		return unitPriceInRupeesAfterCharges;
	}

	public void setUnitPriceInRupeesAfterCharges(Double unitPriceInRupeesAfterCharges) {
		this.unitPriceInRupeesAfterCharges = unitPriceInRupeesAfterCharges;
	}

	public Double getPriceInRupeesAfterCharges() {
		return priceInRupeesAfterCharges;
	}

	public void setPriceInRupeesAfterCharges(Double priceInRupeesAfterCharges) {
		this.priceInRupeesAfterCharges = priceInRupeesAfterCharges;
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

	public VendorItemDetails getVendorItemDetailsId() {
		return vendorItemDetailsId;
	}

	public void setVendorItemDetailsId(VendorItemDetails vendorItemDetailsId) {
		this.vendorItemDetailsId = vendorItemDetailsId;
	}

	public Double getOtherChargesPerUnit() {
		return otherChargesPerUnit;
	}

	public void setOtherChargesPerUnit(Double otherChargesPerUnit) {
		this.otherChargesPerUnit = otherChargesPerUnit;
	}

	public PoVendor getPoVendorId() {
		return poVendorId;
	}

	public void setPoVendorId(PoVendor poVendorId) {
		this.poVendorId = poVendorId;
	}

	
}

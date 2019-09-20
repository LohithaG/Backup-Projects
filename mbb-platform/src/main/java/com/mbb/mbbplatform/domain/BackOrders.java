package com.mbb.mbbplatform.domain;

import java.time.LocalDateTime;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "backorders")
public class BackOrders {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	private String itemTypeName;

	private String itemSkuCode;

	private String categoryName;

	private Double quantityToRise;

	private String vendorSkuCode;

	private String vendorName;

	private Double unitPrice;

	private Long priority;

	private LocalDateTime updated;

	private LocalDateTime createdDate;

	private LocalDateTime updatedDate;

	private LocalDateTime dateInCSvfile;

	public Long getId() {
		return id;
	}

	public String getItemTypeName() {
		return itemTypeName;
	}

	public String getItemSkuCode() {
		return itemSkuCode;
	}

	public String getCategoryName() {
		return categoryName;
	}

	public Double getQuantityToRise() {
		return quantityToRise;
	}

	public String getVendorSkuCode() {
		return vendorSkuCode;
	}

	public String getVendorName() {
		return vendorName;
	}

	public Double getUnitPrice() {
		return unitPrice;
	}

	public LocalDateTime getDateInCSvfile() {
		return dateInCSvfile;
	}

	public Long getPriority() {
		return priority;
	}

	public LocalDateTime getUpdatedDate() {
		return updatedDate;
	}

	public LocalDateTime getCreatedDate() {
		return createdDate;
	}

	public LocalDateTime getUpdated() {
		return updated;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public void setItemTypeName(String itemTypeName) {
		this.itemTypeName = itemTypeName;
	}

	public void setItemSkuCode(String itemSkuCode) {
		this.itemSkuCode = itemSkuCode;
	}

	public void setCategoryName(String categoryName) {
		this.categoryName = categoryName;
	}

	public void setQuantityToRise(Double quantityToRise) {
		this.quantityToRise = quantityToRise;
	}

	public void setVendorSkuCode(String vendorSkuCode) {
		this.vendorSkuCode = vendorSkuCode;
	}

	public void setVendorName(String vendorName) {
		this.vendorName = vendorName;
	}

	public void setUnitPrice(Double unitPrice) {
		this.unitPrice = unitPrice;
	}

	public void setPriority(Long priority) {
		this.priority = priority;
	}

	public void setUpdated(LocalDateTime updated) {
		this.updated = updated;
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

}

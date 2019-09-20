package com.mbb.mbbplatform.domain;

import java.time.LocalDateTime;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "picklist")
public class PickList {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	private String picklistCode;

	private String saleOrderItemCode;

	private String shippingPackageCode;

	private String saleOrderCode;

	private String itemSkuCode;

	private String itemTypeName;

	private String shelfCode;

	private String picklistCreatedBy;

	private String itemStatus;

	private String picklistStatus;

	private String created;

	private String updated;

	private LocalDateTime createdDate;

	private LocalDateTime updatedDate;

	private LocalDateTime dateInCSvfile;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
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

	public String getPicklistCode() {
		return picklistCode;
	}

	public void setPicklistCode(String picklistCode) {
		this.picklistCode = picklistCode;
	}

	public String getSaleOrderItemCode() {
		return saleOrderItemCode;
	}

	public void setSaleOrderItemCode(String saleOrderItemCode) {
		this.saleOrderItemCode = saleOrderItemCode;
	}

	public String getShippingPackageCode() {
		return shippingPackageCode;
	}

	public void setShippingPackageCode(String shippingPackageCode) {
		this.shippingPackageCode = shippingPackageCode;
	}

	public String getSaleOrderCode() {
		return saleOrderCode;
	}

	public void setSaleOrderCode(String saleOrderCode) {
		this.saleOrderCode = saleOrderCode;
	}

	public String getItemSkuCode() {
		return itemSkuCode;
	}

	public void setItemSkuCode(String itemSkuCode) {
		this.itemSkuCode = itemSkuCode;
	}

	public String getItemTypeName() {
		return itemTypeName;
	}

	public void setItemTypeName(String itemTypeName) {
		this.itemTypeName = itemTypeName;
	}

	public String getShelfCode() {
		return shelfCode;
	}

	public void setShelfCode(String shelfCode) {
		this.shelfCode = shelfCode;
	}

	public String getPicklistCreatedBy() {
		return picklistCreatedBy;
	}

	public void setPicklistCreatedBy(String picklistCreatedBy) {
		this.picklistCreatedBy = picklistCreatedBy;
	}

	public String getItemStatus() {
		return itemStatus;
	}

	public void setItemStatus(String itemStatus) {
		this.itemStatus = itemStatus;
	}

	public String getPicklistStatus() {
		return picklistStatus;
	}

	public void setPicklistStatus(String picklistStatus) {
		this.picklistStatus = picklistStatus;
	}

	public String getCreated() {
		return created;
	}

	public void setCreated(String created) {
		this.created = created;
	}

	public String getUpdated() {
		return updated;
	}

	public void setUpdated(String updated) {
		this.updated = updated;
	}

}

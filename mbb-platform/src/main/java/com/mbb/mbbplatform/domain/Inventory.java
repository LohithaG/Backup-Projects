package com.mbb.mbbplatform.domain;

import java.time.ZonedDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;
import javax.validation.constraints.Min;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

@Entity
@Table(name = "inventory")
public class Inventory {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	private Boolean enabled;

	@Min(value = 0L, message = "The value must be positive")
	private Long inventory;

	private String skuCode;

	private String productName;

	private Boolean serialNumberStatus;
	
	private Boolean accessoriesStatus; 
	


	

	@Lob
	private byte[] productImage;

	@CreationTimestamp
	private ZonedDateTime createdTime;

	@UpdateTimestamp
	private ZonedDateTime updatedTime;

	@Min(value = 0L, message = "The value must be positive")
	private Long badInventory;

	@Min(value = 0L, message = "The value must be positive")
	private Long pendingQcAccessment;

	@Min(value = 0L, message = "The value must be positive")
	private Long inTransitCount;

	@Min(value = 0L, message = "The value must be positive")
	private Long dispatch;

	private String barcodeId;

	private String description;

	private Boolean active;

	@Min(value = 0L, message = "The value must be positive")
	private Long pendingApprovalCount;

	public Long getPendingApprovalCount() {
		return pendingApprovalCount;
	}

	public Long getId() {
		return id;
	}

	public void setPendingApprovalCount(Long pendingApprovalCount) {
		this.pendingApprovalCount = pendingApprovalCount;
	}

	public void setId(Long id) {
		this.id = id;
	}
	public Boolean getAccessoriesStatus() {
		return accessoriesStatus;
	}

	public void setAccessoriesStatus(Boolean accessoriesStatus) {
		this.accessoriesStatus = accessoriesStatus;
	}
	public Boolean getEnabled() {
		return enabled;
	}

	public Long getInTransitCount() {
		return inTransitCount;
	}

	public void setInTransitCount(Long inTransitCount) {
		this.inTransitCount = inTransitCount;
	}

	public void setEnabled(Boolean enabled) {
		this.enabled = enabled;
	}

	public Long getInventory() {
		return inventory;
	}

	public void setInventory(Long inventory) {
		this.inventory = inventory;
	}

	public String getSkuCode() {
		return skuCode;
	}

	public ZonedDateTime getCreatedTime() {
		return createdTime;
	}

	public void setSkuCode(String skuCode) {
		this.skuCode = skuCode;
	}

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public void setCreatedTime(ZonedDateTime createdTime) {
		this.createdTime = createdTime;
	}

	public Long getBadInventory() {
		return badInventory;
	}

	public ZonedDateTime getUpdatedTime() {
		return updatedTime;
	}

	public void setUpdatedTime(ZonedDateTime updatedTime) {
		this.updatedTime = updatedTime;
	}

	public void setBadInventory(Long badInventory) {
		this.badInventory = badInventory;
	}

	public Long getPendingQcAccessment() {
		return pendingQcAccessment;
	}

	public void setDispatch(Long dispatch) {
		this.dispatch = dispatch;
	}

	public void setPendingQcAccessment(Long pendingQcAccessment) {
		this.pendingQcAccessment = pendingQcAccessment;
	}

	public Long getDispatch() {
		return dispatch;
	}

	public String getBarcodeId() {
		return barcodeId;
	}

	public String getDescription() {
		return description;
	}

	public void setBarcodeId(String barcodeId) {
		this.barcodeId = barcodeId;
	}

	public Boolean getActive() {
		return active;
	}

	public void setActive(Boolean active) {
		this.active = active;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public byte[] getProductImage() {
		return productImage;
	}

	public void setSerialNumberStatus(Boolean serialNumberStatus) {
		this.serialNumberStatus = serialNumberStatus;
	}

	public void setProductImage(byte[] productImage) {
		this.productImage = productImage;
	}

	public Boolean getSerialNumberStatus() {
		return serialNumberStatus;
	}

}

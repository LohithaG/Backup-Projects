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
@Table(name = "packagedetails")
public class PackageDetails {
	

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	private String skuCode;

	private String productName;
	
	 private Long available;

	 private Long pendingQualityCheck;

	 private Long unAvailable;
	 
	private Long quantityToMove;
	
	private Boolean enable;
	
	private Long availableScanned;
	
	private Long pendingQCScanned;
	
	private Long unAvailableScanned;
	
	private String comments;
	

	
	

	@CreationTimestamp
	private ZonedDateTime createdTime;

	@UpdateTimestamp
	private ZonedDateTime updatedTime;
	
	@ManyToOne
	@JoinColumn(name="transferInventoryId")
	private TransferInventory transferInventoryId;

	public TransferInventory getTransferInventoryId() {
		return transferInventoryId;
	}

	public void setTransferInventoryId(TransferInventory transferInventoryId) {
		this.transferInventoryId = transferInventoryId;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}
	public String getComments() {
		return comments;
	}

	public void setComments(String comments) {
		this.comments = comments;
	}
	public String getSkuCode() {
		return skuCode;
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

	
	public Long getAvailable() {
		return available;
	}

	public void setAvailable(Long available) {
		this.available = available;
	}

	public Long getPendingQualityCheck() {
		return pendingQualityCheck;
	}

	public void setPendingQualityCheck(Long pendingQualityCheck) {
		this.pendingQualityCheck = pendingQualityCheck;
	}

	public Long getUnAvailable() {
		return unAvailable;
	}

	public void setUnAvailable(Long unAvailable) {
		this.unAvailable = unAvailable;
	}

	public Long getQuantityToMove() {
		return quantityToMove;
	}

	public void setQuantityToMove(Long quantityToMove) {
		this.quantityToMove = quantityToMove;
	}

	public Boolean getEnable() {
		return enable;
	}

	public void setEnable(Boolean enable) {
		this.enable = enable;
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

	public Long getAvailableScanned() {
		return availableScanned;
	}

	public void setAvailableScanned(Long availableScanned) {
		this.availableScanned = availableScanned;
	}

	public Long getPendingQCScanned() {
		return pendingQCScanned;
	}

	public void setPendingQCScanned(Long pendingQCScanned) {
		this.pendingQCScanned = pendingQCScanned;
	}

	public Long getUnAvailableScanned() {
		return unAvailableScanned;
	}

	public void setUnAvailableScanned(Long unAvailableScanned) {
		this.unAvailableScanned = unAvailableScanned;
	}

	

}

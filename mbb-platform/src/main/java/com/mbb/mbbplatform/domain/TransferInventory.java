package com.mbb.mbbplatform.domain;

import java.time.LocalDate;
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
@Table(name = "transferinventory")
public class TransferInventory {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	private String packageName;

	private LocalDate inventoryMovingDate;

	private Long numberOfskus;

	private Long numberOfProducts;
	
	private Boolean enable;
	
	@CreationTimestamp
	private ZonedDateTime createdTime;

	@UpdateTimestamp
	private ZonedDateTime updatedTime;

	
	private String transferId;
	
	@ManyToOne
	@JoinColumn(name="statusId")
	private InventoryMovingStatus statusId;
	
	private String comments;

	public String getComments() {
		return comments;
	}

	public void setComments(String comments) {
		this.comments = comments;
	}

	

	



	
	

	public String getTransferId() {
		return transferId;
	}

	public void setTransferId(String transferId) {
		this.transferId = transferId;
	}

	public InventoryMovingStatus getStatusId() {
		return statusId;
	}

	public void setStatusId(InventoryMovingStatus statusId) {
		this.statusId = statusId;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	
	public String getPackageName() {
		return packageName;
	}

	public void setPackageName(String packageName) {
		this.packageName = packageName;
	}

	public LocalDate getInventoryMovingDate() {
		return inventoryMovingDate;
	}

	public void setInventoryMovingDate(LocalDate inventoryMovingDate) {
		this.inventoryMovingDate = inventoryMovingDate;
	}

	public Long getNumberOfskus() {
		return numberOfskus;
	}

	public void setNumberOfskus(Long numberOfskus) {
		this.numberOfskus = numberOfskus;
	}

	public Long getNumberOfProducts() {
		return numberOfProducts;
	}

	public void setNumberOfProducts(Long numberOfProducts) {
		this.numberOfProducts = numberOfProducts;
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

}

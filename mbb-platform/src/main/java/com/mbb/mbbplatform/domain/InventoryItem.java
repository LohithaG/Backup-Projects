package com.mbb.mbbplatform.domain;

import java.time.ZonedDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "inventoryitem")
@JsonIgnoreProperties(ignoreUnknown = true)
public class InventoryItem implements Comparable<InventoryItem>{

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	@ManyToOne
	@JoinColumn(name = "facilityId")
	private Facility facilityId;

	@ManyToOne
	@JoinColumn(name = "inventoryConditionId")
	private InventoryCondition inventoryConditionId;

	@ManyToOne
	@JoinColumn(name = "inventoryId")
	private Inventory inventoryId;

	@ManyToOne
	@JoinColumn(name = "itemStatusId")
	private InventoryItemStatus itemStatusId;

	@ManyToOne
	@JoinColumn(name = "poVendorId")
	private PoVendor poVendorId;

	private String barcode;

	@Column(columnDefinition = "LONGTEXT")
	private String productImage;

	@CreationTimestamp
	private ZonedDateTime createdTime;

	@UpdateTimestamp
	private ZonedDateTime updatedTime;

	private String createdUser;

	private String updatedUser;

	private Boolean returnProduct;
	
	private Boolean scanned;

	private String serialNumber;

	private Boolean approvalstatus;

	@ManyToOne
	@JoinColumn(name = "transferInventoryId")
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

	public Facility getFacilityId() {
		return facilityId;
	}

	public void setFacilityId(Facility facilityId) {
		this.facilityId = facilityId;
	}

	public InventoryCondition getInventoryConditionId() {
		return inventoryConditionId;
	}

	public void setInventoryConditionId(InventoryCondition inventoryConditionId) {
		this.inventoryConditionId = inventoryConditionId;
	}

	public Inventory getInventoryId() {
		return inventoryId;
	}

	public void setInventoryId(Inventory inventoryId) {
		this.inventoryId = inventoryId;
	}

	public InventoryItemStatus getItemStatusId() {
		return itemStatusId;
	}

	public void setItemStatusId(InventoryItemStatus itemStatusId) {
		this.itemStatusId = itemStatusId;
	}

	public String getBarcode() {
		return barcode;
	}

	public void setBarcode(String barcode) {
		this.barcode = barcode;
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

	public String getProductImage() {
		return productImage;
	}

	public void setProductImage(String productImage) {
		this.productImage = productImage;
	}

	public String getCreatedUser() {
		return createdUser;
	}

	public PoVendor getPoVendorId() {
		return poVendorId;
	}

	public void setPoVendorId(PoVendor poVendorId) {
		this.poVendorId = poVendorId;
	}

	public void setCreatedUser(String createdUser) {
		this.createdUser = createdUser;
	}

	public Boolean getReturnProduct() {
		return returnProduct;
	}

	public void setReturnProduct(Boolean returnProduct) {
		this.returnProduct = returnProduct;
	}

	public Boolean getScanned() {
		return scanned;
	}

	public void setScanned(Boolean scanned) {
		this.scanned = scanned;
	}

	public String getSerialNumber() {
		return serialNumber;
	}

	public void setSerialNumber(String serialNumber) {
		this.serialNumber = serialNumber;
	}

	public Boolean getApprovalstatus() {
		return approvalstatus;
	}

	public void setApprovalstatus(Boolean approvalstatus) {
		this.approvalstatus = approvalstatus;
	}

	public String getUpdatedUser() {
		return updatedUser;
	}

	public void setUpdatedUser(String updatedUser) {
		this.updatedUser = updatedUser;
	}
	@Override
	public int compareTo(InventoryItem inventoryItem) {
 
	
	 return this.barcode.compareTo(inventoryItem.getBarcode());
 
	}
 

}

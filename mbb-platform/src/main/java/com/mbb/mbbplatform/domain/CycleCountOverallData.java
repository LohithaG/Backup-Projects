package com.mbb.mbbplatform.domain;

import java.time.LocalDateTime;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "cyclecountoveralldata")
public class CycleCountOverallData {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	private String discarded;

	private String shelfCode;

	private String productName;

	private String seller;

	private String skuCode;

	private String expectedInventory;

	private String inventoryFound;

	private String extra;

	private String extraReconciled;

	private String netExtra;

	private String missing;

	private String missingReconciled;

	private String netMissing;

	private String username;

	private String created;

	private LocalDateTime createdDate;

	private LocalDateTime updatedDate;

	private LocalDateTime dateInCSvfile;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getDiscarded() {
		return discarded;
	}

	public void setDiscarded(String discarded) {
		this.discarded = discarded;
	}

	public String getShelfCode() {
		return shelfCode;
	}

	public LocalDateTime getCreatedDate() {
		return createdDate;
	}

	public void setShelfCode(String shelfCode) {
		this.shelfCode = shelfCode;
	}

	public String getProductName() {
		return productName;
	}

	public void setCreatedDate(LocalDateTime createdDate) {
		this.createdDate = createdDate;
	}

	public LocalDateTime getDateInCSvfile() {
		return dateInCSvfile;
	}

	public LocalDateTime getUpdatedDate() {
		return updatedDate;
	}

	public void setUpdatedDate(LocalDateTime updatedDate) {
		this.updatedDate = updatedDate;
	}

	public void setDateInCSvfile(LocalDateTime dateInCSvfile) {
		this.dateInCSvfile = dateInCSvfile;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public String getSeller() {
		return seller;
	}

	public void setSeller(String seller) {
		this.seller = seller;
	}

	public String getSkuCode() {
		return skuCode;
	}

	public void setSkuCode(String skuCode) {
		this.skuCode = skuCode;
	}

	public String getExpectedInventory() {
		return expectedInventory;
	}

	public void setExpectedInventory(String expectedInventory) {
		this.expectedInventory = expectedInventory;
	}

	public String getInventoryFound() {
		return inventoryFound;
	}

	public void setInventoryFound(String inventoryFound) {
		this.inventoryFound = inventoryFound;
	}

	public String getExtra() {
		return extra;
	}

	public void setExtra(String extra) {
		this.extra = extra;
	}

	public String getExtraReconciled() {
		return extraReconciled;
	}

	public void setExtraReconciled(String extraReconciled) {
		this.extraReconciled = extraReconciled;
	}

	public String getNetExtra() {
		return netExtra;
	}

	public void setNetExtra(String netExtra) {
		this.netExtra = netExtra;
	}

	public String getMissing() {
		return missing;
	}

	public void setMissing(String missing) {
		this.missing = missing;
	}

	public String getMissingReconciled() {
		return missingReconciled;
	}

	public void setMissingReconciled(String missingReconciled) {
		this.missingReconciled = missingReconciled;
	}

	public String getNetMissing() {
		return netMissing;
	}

	public void setNetMissing(String netMissing) {
		this.netMissing = netMissing;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getCreated() {
		return created;
	}

	public void setCreated(String created) {
		this.created = created;
	}

}

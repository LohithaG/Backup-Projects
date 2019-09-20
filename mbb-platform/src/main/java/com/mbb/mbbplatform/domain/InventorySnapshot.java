package com.mbb.mbbplatform.domain;

import java.time.LocalDate;
import java.time.LocalDateTime;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "inventorysnapshot")
public class InventorySnapshot {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	private String facility;

	private String itemTypeName;

	private String itemSkuCode;

	private String ean;

	private String upc;

	private String isbn;

	private String color;

	private String size;

	private String brand;

	private String categoryName;

	private Double mrp;

	private Long openSale;

	private Long inventory;

	private Long inventoryBlocked;

	private Long badInventory;

	private Long putawayPending;

	private Long pendingInventoryAssessment;

	private Long returnAwaited;

	private Long openPurchase;

	private Boolean enabled;

	private LocalDateTime updated;

	private Double costPrice;

	private LocalDateTime createdDate;

	private LocalDateTime updatedDate;

	private LocalDate dateInCsvfile;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getFacility() {
		return facility;
	}

	public void setFacility(String facility) {
		this.facility = facility;
	}

	public String getItemTypeName() {
		return itemTypeName;
	}

	public void setItemTypeName(String itemTypeName) {
		this.itemTypeName = itemTypeName;
	}

	public String getItemSkuCode() {
		return itemSkuCode;
	}

	public void setItemSkuCode(String itemSkuCode) {
		this.itemSkuCode = itemSkuCode;
	}

	public String getCategoryName() {
		return categoryName;
	}

	public void setCategoryName(String categoryName) {
		this.categoryName = categoryName;
	}

	public Double getMrp() {
		return mrp;
	}

	public void setMrp(Double mrp) {
		this.mrp = mrp;
	}

	public Long getOpenSale() {
		return openSale;
	}

	public void setOpenSale(Long openSale) {
		this.openSale = openSale;
	}

	public Long getInventory() {
		return inventory;
	}

	public void setInventory(Long inventory) {
		this.inventory = inventory;
	}

	public Long getInventoryBlocked() {
		return inventoryBlocked;
	}

	public void setInventoryBlocked(Long inventoryBlocked) {
		this.inventoryBlocked = inventoryBlocked;
	}

	public Long getBadInventory() {
		return badInventory;
	}

	public void setBadInventory(Long badInventory) {
		this.badInventory = badInventory;
	}

	public Long getPutawayPending() {
		return putawayPending;
	}

	public void setPutawayPending(Long putawayPending) {
		this.putawayPending = putawayPending;
	}

	public LocalDateTime getCreatedDate() {
		return createdDate;
	}

	public void setCreatedDate(LocalDateTime createdDate) {
		this.createdDate = createdDate;
	}

	public void setUpdatedDate(LocalDateTime updatedDate) {
		this.updatedDate = updatedDate;
	}

	public LocalDate getDateInCsvfile() {
		return dateInCsvfile;
	}

	public void setDateInCsvfile(LocalDate dateInCsvfile) {
		this.dateInCsvfile = dateInCsvfile;
	}

	public LocalDateTime getUpdatedDate() {
		return updatedDate;
	}

	public Long getPendingInventoryAssessment() {
		return pendingInventoryAssessment;
	}

	public void setReturnAwaited(Long returnAwaited) {
		this.returnAwaited = returnAwaited;
	}

	public void setPendingInventoryAssessment(Long pendingInventoryAssessment) {
		this.pendingInventoryAssessment = pendingInventoryAssessment;
	}

	public Long getReturnAwaited() {
		return returnAwaited;
	}

	public Long getOpenPurchase() {
		return openPurchase;
	}

	public void setOpenPurchase(Long openPurchase) {
		this.openPurchase = openPurchase;
	}

	public Boolean getEnabled() {
		return enabled;
	}

	public void setEnabled(Boolean enabled) {
		this.enabled = enabled;
	}

	public LocalDateTime getUpdated() {
		return updated;
	}

	public void setUpdated(LocalDateTime updated) {
		this.updated = updated;
	}

	public Double getCostPrice() {
		return costPrice;
	}

	public void setCostPrice(Double costPrice) {
		this.costPrice = costPrice;
	}

	public String getBrand() {
		return brand;
	}

	public String getColor() {
		return color;
	}

	public String getSize() {
		return size;
	}

	public String getEan() {
		return ean;
	}

	public void setColor(String color) {
		this.color = color;
	}

	public void setSize(String size) {
		this.size = size;
	}

	public void setBrand(String brand) {
		this.brand = brand;
	}

	public void setEan(String ean) {
		this.ean = ean;
	}

	public void setUpc(String upc) {
		this.upc = upc;
	}

	public String getUpc() {
		return upc;
	}

	public String getIsbn() {
		return isbn;
	}

	public void setIsbn(String isbn) {
		this.isbn = isbn;
	}

}

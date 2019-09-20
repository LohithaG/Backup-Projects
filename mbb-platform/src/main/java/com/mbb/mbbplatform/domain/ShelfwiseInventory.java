package com.mbb.mbbplatform.domain;


import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "selfwiseinventory")
public class ShelfwiseInventory {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	private String facility;

	private String itemTypeSKUCode;

	private String itemTypeName;

	private String inventoryType;

	private String shelf;

	private Long quantity;

	private Long quantityBlocked;

	private Long quantityNotFound;

	private Long quantityDamaged;

	private Long priority;

	private String section;

	private LocalDateTime createdDate;

	private LocalDateTime updatedDate;

	private LocalDateTime dateInCSvfile;

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

	public String getItemTypeSKUCode() {
		return itemTypeSKUCode;
	}

	public void setItemTypeSKUCode(String itemTypeSKUCode) {
		this.itemTypeSKUCode = itemTypeSKUCode;
	}

	public String getItemTypeName() {
		return itemTypeName;
	}

	public void setItemTypeName(String itemTypeName) {
		this.itemTypeName = itemTypeName;
	}

	public String getInventoryType() {
		return inventoryType;
	}

	public void setInventoryType(String inventoryType) {
		this.inventoryType = inventoryType;
	}

	public String getShelf() {
		return shelf;
	}

	public void setShelf(String shelf) {
		this.shelf = shelf;
	}

	public Long getQuantity() {
		return quantity;
	}

	public void setQuantity(Long quantity) {
		this.quantity = quantity;
	}

	public Long getQuantityBlocked() {
		return quantityBlocked;
	}

	public void setQuantityBlocked(Long quantityBlocked) {
		this.quantityBlocked = quantityBlocked;
	}

	public Long getQuantityNotFound() {
		return quantityNotFound;
	}

	public void setQuantityNotFound(Long quantityNotFound) {
		this.quantityNotFound = quantityNotFound;
	}

	public Long getQuantityDamaged() {
		return quantityDamaged;
	}

	public void setQuantityDamaged(Long quantityDamaged) {
		this.quantityDamaged = quantityDamaged;
	}

	public Long getPriority() {
		return priority;
	}

	public void setPriority(Long priority) {
		this.priority = priority;
	}

	public String getSection() {
		return section;
	}

	public void setSection(String section) {
		this.section = section;
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

}

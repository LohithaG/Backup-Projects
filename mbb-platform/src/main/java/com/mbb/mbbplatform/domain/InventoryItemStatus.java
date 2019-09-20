package com.mbb.mbbplatform.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "inventoryitemstatus")
public class InventoryItemStatus {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	private String itemStatus;
	
	@ManyToOne
	@JoinColumn(name="inventoryConditionId")
	private InventoryCondition inventoryConditionId;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getItemStatus() {
		return itemStatus;
	}

	public void setItemStatus(String itemStatus) {
		this.itemStatus = itemStatus;
	}

	public InventoryCondition getInventoryConditionId() {
		return inventoryConditionId;
	}

	public void setInventoryConditionId(InventoryCondition inventoryConditionId) {
		this.inventoryConditionId = inventoryConditionId;
	}

}

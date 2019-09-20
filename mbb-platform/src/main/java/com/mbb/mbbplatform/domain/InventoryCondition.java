package com.mbb.mbbplatform.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="inventorycondition")
public class InventoryCondition {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	private String inventoryCondition;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getInventoryCondition() {
		return inventoryCondition;
	}

	public void setInventoryCondition(String inventoryCondition) {
		this.inventoryCondition = inventoryCondition;
	}
	

}

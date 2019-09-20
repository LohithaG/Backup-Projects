package com.mbb.mbbplatform.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "inventoryaccessorychecklist   ")
public class InventoryAccessoryChecklist  {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	private String skuCode;

	private String accessory;

	private Long quantity;
	
	private Boolean conditionCheck;

	public Boolean getConditionCheck() {
		return conditionCheck;
	}

	public void setConditionCheck(Boolean conditionCheck) {
		this.conditionCheck = conditionCheck;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getAccessory() {
		return accessory;
	}

	public String getSkuCode() {
		return skuCode;
	}

	public void setSkuCode(String skuCode) {
		this.skuCode = skuCode;
	}

	public void setAccessory(String accessory) {
		this.accessory = accessory;
	}

	public Long getQuantity() {
		return quantity;
	}

	public void setQuantity(Long quantity) {
		this.quantity = quantity;
	}

}

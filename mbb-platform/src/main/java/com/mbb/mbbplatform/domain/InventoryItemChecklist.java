package com.mbb.mbbplatform.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "inventoryitemchecklist ")
public class InventoryItemChecklist {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	@ManyToOne
	@JoinColumn(name = "inventoryItemId")
	private InventoryItem inventoryItemId;

	@ManyToOne
	@JoinColumn(name = "accessoriesId")
	private InventoryAccessoryChecklist accessoriesId;

	@ManyToOne
	@JoinColumn(name = "servicingproductId")
	private ServicingProduct servicingProduct;
	
	private Boolean accessoryCondition;

	private Long quantity;
	
	private Boolean productReturn;

	public ServicingProduct getServicingProduct() {
		return servicingProduct;
	}

	public void setServicingProduct(ServicingProduct servicingProduct) {
		this.servicingProduct = servicingProduct;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public InventoryItem getInventoryItemId() {
		return inventoryItemId;
	}

	public void setInventoryItemId(InventoryItem inventoryItemId) {
		this.inventoryItemId = inventoryItemId;
	}

	public InventoryAccessoryChecklist getAccessoriesId() {
		return accessoriesId;
	}

	public void setAccessoriesId(InventoryAccessoryChecklist accessoriesId) {
		this.accessoriesId = accessoriesId;
	}

	public Boolean getAccessoryCondition() {
		return accessoryCondition;
	}

	public void setAccessoryCondition(Boolean accessoryCondition) {
		this.accessoryCondition = accessoryCondition;
	}

	public Long getQuantity() {
		return quantity;
	}

	public void setQuantity(Long quantity) {
		this.quantity = quantity;
	}

	public Boolean getProductReturn() {
		return productReturn;
	}

	public void setProductReturn(Boolean productReturn) {
		this.productReturn = productReturn;
	}

}

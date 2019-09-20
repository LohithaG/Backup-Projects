package com.mbb.mbbplatform.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "barcodeid")
public class Barcode {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	private String sku;
	
	private long nxtInventoryId;
	
	private Long value;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getSku() {
		return sku;
	}

	public void setSku(String sku) {
		this.sku = sku;
	}

	public long getNxtInventoryId() {
		return nxtInventoryId;
	}

	public void setNxtInventoryId(long nxtInventoryId) {
		this.nxtInventoryId = nxtInventoryId;
	}

	public Long getValue() {
		return value;
	}

	public void setValue(Long value) {
		this.value = value;
	}


}

package com.mbb.mbbplatform.domain;

public class FacilityWiseInventory {

	private String productName;

	private Long facilityWiseInventoryCount;

	private Long totalInventory;

	private String skuCode;
	
	private String accessoriesStatus;
	
	

	public String getAccessoriesStatus() {
		return accessoriesStatus;
	}

	public void setAccessoriesStatus(String accessoriesStatus) {
		this.accessoriesStatus = accessoriesStatus;
	}

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public Long getFacilityWiseInventoryCount() {
		return facilityWiseInventoryCount;
	}

	public void setFacilityWiseInventoryCount(Long facilityWiseInventoryCount) {
		this.facilityWiseInventoryCount = facilityWiseInventoryCount;
	}

	public Long getTotalInventory() {
		return totalInventory;
	}

	public void setTotalInventory(Long totalInventory) {
		this.totalInventory = totalInventory;
	}

	public String getSkuCode() {
		return skuCode;
	}

	public void setSkuCode(String skuCode) {
		this.skuCode = skuCode;
	}

}

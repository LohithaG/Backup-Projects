package com.mbb.mbbplatform.domain;

public class ProductDetails {

	private String skuCode;

	private Long quantity;

	private Double price;
	
	private Long poVendorId;

	public String getSkuCode() {
		return skuCode;
	}

	public void setSkuCode(String skuCode) {
		this.skuCode = skuCode;
	}

	public Long getQuantity() {
		return quantity;
	}

	public void setQuantity(Long quantity) {
		this.quantity = quantity;
	}

	public Double getPrice() {
		return price;
	}

	public void setPrice(Double price) {
		this.price = price;
	}

	public Long getPoVendorId() {
		return poVendorId;
	}

	public void setPoVendorId(Long poVendorId) {
		this.poVendorId = poVendorId;
	}

}

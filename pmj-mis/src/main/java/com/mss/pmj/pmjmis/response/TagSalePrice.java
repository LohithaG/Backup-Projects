package com.mss.pmj.pmjmis.response;

import java.util.List;

public class TagSalePrice {

	private List<Double> tagPrice;

	private List<Double> salePrice;

	public List<Double> getTagPrice() {
		return tagPrice;
	}

	public void setTagPrice(List<Double> tagPrice) {
		this.tagPrice = tagPrice;
	}

	public List<Double> getSalePrice() {
		return salePrice;
	}

	public void setSalePrice(List<Double> salePrice) {
		this.salePrice = salePrice;
	}

}

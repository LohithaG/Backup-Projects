package com.mss.pmj.pmjmis.response;

public class CostPricetoTagPriceValue {

	private LocationCostPricetoTagActuals costprice;
	private LocationCostPricetoTagSalesPriceactuals tagprice;

	public LocationCostPricetoTagActuals getCostprice() {
		return costprice;
	}

	public void setCostprice(LocationCostPricetoTagActuals costprice) {
		this.costprice = costprice;
	}

	public LocationCostPricetoTagSalesPriceactuals getTagprice() {
		return tagprice;
	}

	public void setTagprice(LocationCostPricetoTagSalesPriceactuals tagprice) {
		this.tagprice = tagprice;
	}

}
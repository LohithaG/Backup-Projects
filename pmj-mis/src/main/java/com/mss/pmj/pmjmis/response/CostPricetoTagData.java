package com.mss.pmj.pmjmis.response;

public class CostPricetoTagData {

	private Double totalcostprice;
	private Double totaltagprice;
	private Double totalmargin;
	private CostSalePrice costprice;

	private CostTagPrice tagprice;
	private CostPricetoTagpriceDetails details;

	public Double getTotalcostprice() {
		return totalcostprice;
	}

	public void setTotalcostprice(Double totalcostprice) {
		this.totalcostprice = totalcostprice;
	}

	public Double getTotaltagprice() {
		return totaltagprice;
	}

	public void setTotaltagprice(Double totaltagprice) {
		this.totaltagprice = totaltagprice;
	}

	public Double getTotalmargin() {
		return totalmargin;
	}

	public void setTotalmargin(Double totalmargin) {
		this.totalmargin = totalmargin;
	}

	public CostSalePrice getCostprice() {
		return costprice;
	}

	public void setCostprice(CostSalePrice costprice) {
		this.costprice = costprice;
	}

	public CostTagPrice getTagprice() {
		return tagprice;
	}

	public void setTagprice(CostTagPrice tagprice) {
		this.tagprice = tagprice;
	}

	public CostPricetoTagpriceDetails getDetails() {
		return details;
	}

	public void setDetails(CostPricetoTagpriceDetails details) {
		this.details = details;
	}

}

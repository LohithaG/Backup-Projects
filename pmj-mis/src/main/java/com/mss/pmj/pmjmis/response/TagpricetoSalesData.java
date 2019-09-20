package com.mss.pmj.pmjmis.response;

public class TagpricetoSalesData {

	private Double totaltagprice;
	private Double totalsaleprice;
	private Double totalmargin;
	private TagPrice tagprice;
	private SalePrice saleprice;
	private TagpricetoSalesDetails details;

	public Double getTotaltagprice() {
		return totaltagprice;
	}

	public void setTotaltagprice(Double totaltagprice) {
		this.totaltagprice = totaltagprice;
	}

	public Double getTotalsaleprice() {
		return totalsaleprice;
	}

	public void setTotalsaleprice(Double totalsaleprice) {
		this.totalsaleprice = totalsaleprice;
	}

	public Double getTotalmargin() {
		return totalmargin;
	}

	public void setTotalmargin(Double totalmargin) {
		this.totalmargin = totalmargin;
	}

	public TagPrice getTagprice() {
		return tagprice;
	}

	public void setTagprice(TagPrice tagprice) {
		this.tagprice = tagprice;
	}

	public SalePrice getSaleprice() {
		return saleprice;
	}

	public void setSaleprice(SalePrice saleprice) {
		this.saleprice = saleprice;
	}

	public TagpricetoSalesDetails getDetails() {
		return details;
	}

	public void setDetails(TagpricetoSalesDetails details) {
		this.details = details;
	}

}
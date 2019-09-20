package com.mss.pmj.pmjmis.response;

public class TagpricetoSalesDataD2H {

	private Double totaltagprice;
	private Double totalsaleprice;
	private Double totalmargin;

	private TagPrice tagprice;

	private SalePrice saleprice;

	private TagPricetoSalesDetailsD2h d2hdetails;

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

	public TagPricetoSalesDetailsD2h getD2hdetails() {
		return d2hdetails;
	}

	public void setD2hdetails(TagPricetoSalesDetailsD2h d2hdetails) {
		this.d2hdetails = d2hdetails;
	}

}

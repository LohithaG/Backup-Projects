package com.mss.pmj.pmjmis.response;

public class TagpricetoSalesDataD2HStateandClusterandLocation {

	private Double totaltagprice;
	private Double totalsaleprice;
	private Double totalmargin;
	private String state;
	private String cluster;
	private String location;

	private TagPrice tagprice;

	private SalePrice saleprice;

	private Tagteamwisetimeline d2hdetails;

	public Tagteamwisetimeline getD2hdetails() {
		return d2hdetails;
	}

	public void setD2hdetails(Tagteamwisetimeline d2hdetails) {
		this.d2hdetails = d2hdetails;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
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

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getCluster() {
		return cluster;
	}

	public void setCluster(String cluster) {
		this.cluster = cluster;
	}
}
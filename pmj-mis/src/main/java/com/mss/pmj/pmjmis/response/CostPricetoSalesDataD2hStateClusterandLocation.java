package com.mss.pmj.pmjmis.response;

public class CostPricetoSalesDataD2hStateClusterandLocation {

	private Double totalcostprice;
	private Double totalsaleprice;
	private Double totalmargin;

	private String state;

	private String cluster;

	private String location;

	private CostPrice costprice;
	private CostSalePrice saleprice;

	private CostTeamWiseTimelineD2h d2hdetails;

	public CostTeamWiseTimelineD2h getD2hdetails() {
		return d2hdetails;
	}

	public void setD2hdetails(CostTeamWiseTimelineD2h d2hdetails) {
		this.d2hdetails = d2hdetails;
	}

	public Double getTotalcostprice() {
		return totalcostprice;
	}

	public void setTotalcostprice(Double totalcostprice) {
		this.totalcostprice = totalcostprice;
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

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public CostSalePrice getSaleprice() {
		return saleprice;
	}

	public void setSaleprice(CostSalePrice saleprice) {
		this.saleprice = saleprice;
	}

	public CostPrice getCostprice() {
		return costprice;
	}

	public void setCostprice(CostPrice costprice) {
		this.costprice = costprice;
	}

}

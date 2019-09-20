package com.mss.pmj.pmjmis.response;

public class CostPricetoSalesDataD2h {

	private Double totalcostprice;
	private Double totalsaleprice;
	private Double totalmargin;

	private CostPrice costprice;

	private CostSalePrice saleprice;
	
	

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

	public CostSalePrice getSaleprice() {
		return saleprice;
	}

	public void setSaleprice(CostSalePrice saleprice) {
		this.saleprice = saleprice;
	}

	public CostPricetoSalesDetailsD2h getD2hdetails() {
		return d2hdetails;
	}

	public void setD2hdetails(CostPricetoSalesDetailsD2h d2hdetails) {
		this.d2hdetails = d2hdetails;
	}

	private CostPricetoSalesDetailsD2h d2hdetails;

	public CostPrice getCostprice() {
		return costprice;
	}

	public void setCostprice(CostPrice costprice) {
		this.costprice = costprice;
	}
}

package com.mss.pmj.pmjmis.response;

public class CostPricetoSalesData {

	private Double totalcostprice;
	private Double totalsaleprice;
	private Double totalmargin;
	private CostPrice costprice;

	private CostSalePrice saleprice;
	private CostPricetoSalesDetails details;

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

	public CostPricetoSalesDetails getDetails() {
		return details;
	}

	public void setDetails(CostPricetoSalesDetails details) {
		this.details = details;
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

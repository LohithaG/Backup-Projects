package com.mss.pmj.pmjmis.response;

import java.util.List;

public class CostPricetoSalesDetails {
	
	private List<String> timeline;
	
	private CostpricetoSalesValue actuals;
	
	private CostpricetoSalesLocation locations;

	public List<String> getTimeline() {
		return timeline;
	}

	public void setTimeline(List<String> timeline) {
		this.timeline = timeline;
	}

	public CostpricetoSalesValue getActuals() {
		return actuals;
	}

	public void setActuals(CostpricetoSalesValue actuals) {
		this.actuals = actuals;
	}

	public CostpricetoSalesLocation getLocations() {
		return locations;
	}

	public void setLocations(CostpricetoSalesLocation locations) {
		this.locations = locations;
	}

}

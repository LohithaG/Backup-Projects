package com.mss.pmj.pmjmis.response;

import java.util.List;

public class CostPricetoSalesDetailsD2h {

	private List<String> timeline;

	private CostpricetoSalesValue actuals;

	private CostPricetoSalesD2hStates clusters;

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

	public CostPricetoSalesD2hStates getClusters() {
		return clusters;
	}

	public void setClusters(CostPricetoSalesD2hStates clusters) {
		this.clusters = clusters;
	}

}

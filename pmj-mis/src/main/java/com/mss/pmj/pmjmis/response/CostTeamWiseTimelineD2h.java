package com.mss.pmj.pmjmis.response;

import java.util.List;

public class CostTeamWiseTimelineD2h {

	private List<String> timeline;

	private CostpricetoSalesValue actuals;

	private CostPricetoSalesD2hDetailsTeamWise clusters;

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

	public CostPricetoSalesD2hDetailsTeamWise getClusters() {
		return clusters;
	}

	public void setClusters(CostPricetoSalesD2hDetailsTeamWise clusters) {
		this.clusters = clusters;
	}

}

package com.mss.pmj.pmjmis.response;

import java.util.List;

public class CostPricetoSalesDataD2hClusterCost {

	private List<String> timeline;

	private CostpricetoSalesValue actuals;

	private CostPricetoSalesD2hClusters clusters;

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

	public CostPricetoSalesD2hClusters getClusters() {
		return clusters;
	}

	public void setClusters(CostPricetoSalesD2hClusters clusters) {
		this.clusters = clusters;
	}
}

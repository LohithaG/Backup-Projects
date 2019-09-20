package com.mss.pmj.pmjmis.response;

import java.util.List;

public class TagPricetoSalesDetailsD2hcluster {
	private List<String> timeline;

	private TagpricetoSalesValue actuals;

	private TagPricetoSalesD2HClusters clusters;

	public List<String> getTimeline() {
		return timeline;
	}

	public void setTimeline(List<String> timeline) {
		this.timeline = timeline;
	}

	public TagpricetoSalesValue getActuals() {
		return actuals;
	}

	public void setActuals(TagpricetoSalesValue actuals) {
		this.actuals = actuals;
	}

	public TagPricetoSalesD2HClusters getClusters() {
		return clusters;
	}

	public void setClusters(TagPricetoSalesD2HClusters clusters) {
		this.clusters = clusters;
	}

}

package com.mss.pmj.pmjmis.response;

import java.util.List;

public class TagPricetoSalesDetailsD2h {

	private List<String> timeline;

	private TagpricetoSalesValue actuals;

	private TagPricetoSalesD2HStates clusters;

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

	public TagPricetoSalesD2HStates getClusters() {
		return clusters;
	}

	public void setClusters(TagPricetoSalesD2HStates clusters) {
		this.clusters = clusters;
	}

}

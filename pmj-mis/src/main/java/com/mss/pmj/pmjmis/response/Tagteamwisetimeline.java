package com.mss.pmj.pmjmis.response;

import java.util.List;

public class Tagteamwisetimeline {

	private List<String> timeline;

	private TagpricetoSalesValue actuals;

	private Tagpricetosalesdetailsteamwise clusters;

	public List<String> getTimeline() {
		return timeline;
	}

	public void setTimeline(List<String> timeline) {
		this.timeline = timeline;
	}

	public Tagpricetosalesdetailsteamwise getClusters() {
		return clusters;
	}

	public void setClusters(Tagpricetosalesdetailsteamwise clusters) {
		this.clusters = clusters;
	}

	public TagpricetoSalesValue getActuals() {
		return actuals;
	}

	public void setActuals(TagpricetoSalesValue actuals) {
		this.actuals = actuals;
	}

}

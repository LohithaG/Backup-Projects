package com.mss.pmj.pmjmis.response;

import java.util.List;

public class CostPricetoTagpriceDetails {

	private List<String> timeline;

	private CostPricetoTagPriceValue actuals;

	private CostPricetoTagLocation locations;

	public CostPricetoTagLocation getLocations() {
		return locations;
	}

	public void setLocations(CostPricetoTagLocation locations) {
		this.locations = locations;
	}

	public List<String> getTimeline() {
		return timeline;
	}

	public void setTimeline(List<String> timeline) {
		this.timeline = timeline;
	}

	public CostPricetoTagPriceValue getActuals() {
		return actuals;
	}

	public void setActuals(CostPricetoTagPriceValue actuals) {
		this.actuals = actuals;
	}

}

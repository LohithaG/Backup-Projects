package com.mss.pmj.pmjmis.response;

import java.util.List;

public class TagpricetoSalesDetails {
	
	private List<String> timeline;
	
	private TagpricetoSalesValue actuals;
	
	private TagpricetoSalesLocation locations;
	
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

	public TagpricetoSalesLocation getLocations() {
		return locations;
	}

	public void setLocations(TagpricetoSalesLocation locations) {
		this.locations = locations;
	}
	
	
	

}

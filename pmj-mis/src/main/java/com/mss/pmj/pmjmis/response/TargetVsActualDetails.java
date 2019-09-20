package com.mss.pmj.pmjmis.response;

import java.util.List;

public class TargetVsActualDetails {
	
	
	private List<String> timeline;
	
	private ItemQuantityValue actuals;

	private ItemQuantityValue target;

	public List<String> getTimeline() {
		return timeline;
	}

	public void setTimeline(List<String> timeline) {
		this.timeline = timeline;
	}

	public ItemQuantityValue getActuals() {
		return actuals;
	}

	public void setActuals(ItemQuantityValue actuals) {
		this.actuals = actuals;
	}

	public ItemQuantityValue getTarget() {
		return target;
	}

	public void setTarget(ItemQuantityValue target) {
		this.target = target;
	}
	
	
	
	

}

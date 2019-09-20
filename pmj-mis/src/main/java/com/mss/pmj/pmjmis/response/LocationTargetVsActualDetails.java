package com.mss.pmj.pmjmis.response;

import java.util.List;

public class LocationTargetVsActualDetails {

	private List<String> location;

	private ItemQuantityValue actuals;

	private ItemQuantityValue target;

	public List<String> getLocation() {
		return location;
	}

	public void setLocation(List<String> location) {
		this.location = location;
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

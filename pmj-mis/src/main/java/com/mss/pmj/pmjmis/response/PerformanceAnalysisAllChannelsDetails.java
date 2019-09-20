package com.mss.pmj.pmjmis.response;

import java.util.List;

public class PerformanceAnalysisAllChannelsDetails {

	private List<String> channels;

	private ItemQuantityValue actuals;

	private ItemQuantityValue target;

	public List<String> getChannels() {
		return channels;
	}

	public void setChannels(List<String> channels) {
		this.channels = channels;
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

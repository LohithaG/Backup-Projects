package com.mss.pmj.pmjmis.response;

public class PerformanceAnalysisChannelWiseTgtVsActual {

	private QuantityValue actuals;

	private QuantityValue target;

	private PerformanceAnalysisAllChannelsDetails details;

	public QuantityValue getActuals() {
		return actuals;
	}

	public void setActuals(QuantityValue actuals) {
		this.actuals = actuals;
	}

	public QuantityValue getTarget() {
		return target;
	}

	public void setTarget(QuantityValue target) {
		this.target = target;
	}

	public PerformanceAnalysisAllChannelsDetails getDetails() {
		return details;
	}

	public void setDetails(PerformanceAnalysisAllChannelsDetails details) {
		this.details = details;
	}

}

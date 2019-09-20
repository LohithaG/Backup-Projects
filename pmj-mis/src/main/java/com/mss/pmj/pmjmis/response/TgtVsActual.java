package com.mss.pmj.pmjmis.response;

public class TgtVsActual {

	/*
	 * private String fromDate;
	 * 
	 * private String toDate;
	 */

	private QuantityValue actuals;

	private QuantityValue target;
	
	private TargetVsActualDetails details;

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

	public TargetVsActualDetails getDetails() {
		return details;
	}

	public void setDetails(TargetVsActualDetails details) {
		this.details = details;
	}

}


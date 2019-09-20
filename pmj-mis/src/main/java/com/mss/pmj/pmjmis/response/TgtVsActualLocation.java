package com.mss.pmj.pmjmis.response;

public class TgtVsActualLocation {

	/*
	 * private String fromDate;
	 * 
	 * private String toDate;
	 */

	private QuantityValue actuals;

	private QuantityValue target;
	
	private LocationTargetVsActualDetails details;

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

	public LocationTargetVsActualDetails getDetails() {
		return details;
	}

	public void setDetails(LocationTargetVsActualDetails details) {
		this.details = details;
	}

}


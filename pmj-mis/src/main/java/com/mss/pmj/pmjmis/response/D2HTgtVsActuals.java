package com.mss.pmj.pmjmis.response;

public class D2HTgtVsActuals {

	private QuantityValue actuals;

	private QuantityValue target;

	private D2HTgtVsActualsDetails details;

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

	public D2HTgtVsActualsDetails getDetails() {
		return details;
	}

	public void setDetails(D2HTgtVsActualsDetails details) {
		this.details = details;
	}

}

package com.mss.pmj.pmjmis.response;

public class D2HClusterTgtVsActuals {

	private QuantityValue actuals;

	private QuantityValue target;

	private D2HClusterTgtVsActualsDetails details;

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

	public D2HClusterTgtVsActualsDetails getDetails() {
		return details;
	}

	public void setDetails(D2HClusterTgtVsActualsDetails details) {
		this.details = details;
	}

}

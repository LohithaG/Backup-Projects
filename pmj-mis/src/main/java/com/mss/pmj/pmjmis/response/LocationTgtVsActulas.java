package com.mss.pmj.pmjmis.response;

public class LocationTgtVsActulas {

	private QuantityValue actuals;

	private QuantityValue target;

	private EcahTgtVsActualDetails details;

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

	public EcahTgtVsActualDetails getDetails() {
		return details;
	}

	public void setDetails(EcahTgtVsActualDetails details) {
		this.details = details;
	}

}

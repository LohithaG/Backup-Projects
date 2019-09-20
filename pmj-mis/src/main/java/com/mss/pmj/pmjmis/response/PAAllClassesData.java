package com.mss.pmj.pmjmis.response;

public class PAAllClassesData<T> {

	private QuantityValue actuals;

	private QuantityValue target;

	private T details;

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

	public T getDetails() {
		return details;
	}

	public void setDetails(T details) {
		this.details = details;
	}

}

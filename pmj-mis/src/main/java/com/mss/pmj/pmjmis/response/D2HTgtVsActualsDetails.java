package com.mss.pmj.pmjmis.response;

import java.util.List;

public class D2HTgtVsActualsDetails {

	private List<String> state;

	private ItemQuantityValue actuals;

	private ItemQuantityValue target;

	public List<String> getState() {
		return state;
	}

	public void setState(List<String> state) {
		this.state = state;
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

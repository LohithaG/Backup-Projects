package com.mss.pmj.pmjmis.response;

import java.util.List;

import com.mss.pmj.pmjmis.response.ItemQuantityValue;

public class PAAllClassesDetails {

	private List<String> classes;

	private ItemQuantityValue actuals;

	private ItemQuantityValue target;

	public List<String> getClasses() {
		return classes;
	}

	public void setClasses(List<String> classes) {
		this.classes = classes;
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

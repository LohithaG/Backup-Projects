package com.mss.pmj.pmjmis.response;

import java.util.List;

public class CostPricetoTagLocation {

	private List<String> names;

	private CostPricetoTagPriceValue actuals;

	public List<String> getNames() {
		return names;
	}

	public void setNames(List<String> names) {
		this.names = names;
	}

	public CostPricetoTagPriceValue getActuals() {
		return actuals;
	}

	public void setActuals(CostPricetoTagPriceValue actuals) {
		this.actuals = actuals;
	}

}

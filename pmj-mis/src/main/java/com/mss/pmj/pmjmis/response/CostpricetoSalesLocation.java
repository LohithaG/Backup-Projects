package com.mss.pmj.pmjmis.response;

import java.util.List;

public class CostpricetoSalesLocation {

	private List<String> names;

	private CostpricetoSalesValue actuals;

	public List<String> getNames() {
		return names;
	}

	public void setNames(List<String> names) {
		this.names = names;
	}

	public CostpricetoSalesValue getActuals() {
		return actuals;
	}

	public void setActuals(CostpricetoSalesValue actuals) {
		this.actuals = actuals;
	}

}

package com.mss.pmj.pmjmis.domain;

import org.json.JSONObject;

public class TgtVsActual {
	
	private Actuals actuals;
	
	private Target target;
	
	private JSONObject details;

	public Actuals getActuals() {
		return actuals;
	}

	public void setActuals(Actuals actuals) {
		this.actuals = actuals;
	}

	public Target getTarget() {
		return target;
	}

	public void setTarget(Target target) {
		this.target = target;
	}

	public JSONObject getDetails() {
		return details;
	}

	public void setDetails(JSONObject details) {
		this.details = details;
	}
	
}

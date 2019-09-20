package com.mss.pmj.pmjmis.response;

public class TicketSize {
	
	private Double percentageValue;
	
	private Double target;
	
	private Double actual;

	public Double getTarget() {
		return target;
	}

	public void setTarget(Double target) {
		this.target = target;
	}

	public Double getActual() {
		return actual;
	}

	public void setActual(Double actual) {
		this.actual = actual;
	}
	public Double getPercentageValue() {
		return percentageValue;
	}

	public void setPercentageValue(Double percentageValue) {
		this.percentageValue = percentageValue;
	}
}

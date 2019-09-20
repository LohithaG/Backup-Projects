package com.mss.pmj.pmjmis.response;

import java.util.List;

public class ConversionFactorD2HDetails {

	private List<String> state;

	private ConversionFactorActuals actuals;

	private ConversionFactorWalkins walkins;

	private ConversionFactorTargets targets;

	public ConversionFactorActuals getActuals() {
		return actuals;
	}

	public void setActuals(ConversionFactorActuals actuals) {
		this.actuals = actuals;
	}

	public ConversionFactorWalkins getWalkins() {
		return walkins;
	}

	public void setWalkins(ConversionFactorWalkins walkins) {
		this.walkins = walkins;
	}

	public List<String> getState() {
		return state;
	}

	public void setState(List<String> state) {
		this.state = state;
	}

	public ConversionFactorTargets getTargets() {
		return targets;
	}

	public void setTargets(ConversionFactorTargets targets) {
		this.targets = targets;
	}

}

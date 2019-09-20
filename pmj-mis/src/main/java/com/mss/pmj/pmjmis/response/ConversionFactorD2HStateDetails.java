package com.mss.pmj.pmjmis.response;

import java.util.List;

public class ConversionFactorD2HStateDetails {

	private List<String> clusters;

	private ConversionFactorActuals actuals;

	private ConversionFactorWalkins walkins;

	private ConversionFactorTargets targets;

	public List<String> getClusters() {
		return clusters;
	}

	public void setClusters(List<String> clusters) {
		this.clusters = clusters;
	}

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

	public ConversionFactorTargets getTargets() {
		return targets;
	}

	public void setTargets(ConversionFactorTargets targets) {
		this.targets = targets;
	}

}

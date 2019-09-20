package com.mss.pmj.pmjmis.response;

public class Conversion {
	
	private Double percentageValue;

	private Double totalWalkins;

	private Double preferredWalkins;

	public Double getTotalWalkins() {
		return totalWalkins;
	}

	public void setTotalWalkins(Double i) {
		this.totalWalkins = i;
	}

	public Double getPreferredWalkins() {
		return preferredWalkins;
	}

	public void setPreferredWalkins(Double preferredWalkins) {
		this.preferredWalkins = preferredWalkins;
	}

	public Double getPercentageValue() {
		return percentageValue;
	}

	public void setPercentageValue(Double percentageValue) {
		this.percentageValue = percentageValue;
	}
}

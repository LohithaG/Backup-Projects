package com.mss.pmj.pmjmis.response;

import java.util.List;

public class SalesPersonWiseAchivements {

	private List<String> timeLine;

	private List<Double> goldAchivementsPercentage;

	private List<Double> diamondAchivementsPercentage;

	public List<String> getTimeLine() {
		return timeLine;
	}

	public void setTimeLine(List<String> timeLine) {
		this.timeLine = timeLine;
	}

	public List<Double> getGoldAchivementsPercentage() {
		return goldAchivementsPercentage;
	}

	public void setGoldAchivementsPercentage(List<Double> goldAchivementsPercentage) {
		this.goldAchivementsPercentage = goldAchivementsPercentage;
	}

	public List<Double> getDiamondAchivementsPercentage() {
		return diamondAchivementsPercentage;
	}

	public void setDiamondAchivementsPercentage(List<Double> diamondAchivementsPercentage) {
		this.diamondAchivementsPercentage = diamondAchivementsPercentage;
	}

	
}

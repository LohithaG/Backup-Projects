package com.mss.pmj.pmjmis.response;

import java.util.List;

public class Tagpricetosaleslist {

	private List<Double> gold;

	private List<Double> diamond;
	
	private List<Double> percent;

	public List<Double> getPercent() {
		return percent;
	}
	public void setPercent(List<Double> percent) {
		this.percent = percent;
	}
	public List<Double> getGold() {
		return gold;
	}
	public void setGold(List<Double> gold) {
		this.gold = gold;
	}

	public List<Double> getDiamond() {
		return diamond;
	}

	public void setDiamond(List<Double> diamond) {
		this.diamond = diamond;
	}

}

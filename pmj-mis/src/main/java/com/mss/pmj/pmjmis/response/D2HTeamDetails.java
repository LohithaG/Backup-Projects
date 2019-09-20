package com.mss.pmj.pmjmis.response;

import java.util.List;

import com.mss.pmj.pmjmis.domain.Team;

public class D2HTeamDetails {

	private List<String> teams;

	private ItemQuantityValue actuals;

	private ItemQuantityValue target;

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

	public List<String> getTeams() {
		return teams;
	}

	public void setTeams(List<String> teams) {
		this.teams = teams;
	}

}

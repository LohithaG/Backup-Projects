package com.mss.pmj.pmjmis.response;

import com.mss.pmj.pmjmis.domain.Team;

public class CmdDashboardD2h {
	
	private Double totalSales;
	
	private Double totalGold;
	
	private Double totalDiamond;
	
	private Team team;

	public double getTotalSales() {
		return totalSales;
	}

	public void setTotalSales(double totalSales) {
		this.totalSales = totalSales;
	}

	public Team getTeam() {
		return team;
	}

	public void setTeam(Team team) {
		this.team = team;
	}

	public Double getTotalGold() {
		return totalGold;
	}

	public void setTotalGold(Double totalGold) {
		this.totalGold = totalGold;
	}

	public Double getTotalDiamond() {
		return totalDiamond;
	}

	public void setTotalDiamond(Double totalDiamond) {
		this.totalDiamond = totalDiamond;
	}

	public void setTotalSales(Double totalSales) {
		this.totalSales = totalSales;
	}
	
	

}

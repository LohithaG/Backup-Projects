package com.mss.pmj.pmjmis.response;

import com.mss.pmj.pmjmis.domain.Employee;

public class CmdDashboardShw {

	private Double totalSales;

	private Double totalGold;

	private Double totalDiamond;

	private Employee employee;

	public Double getTotalSales() {
		return totalSales;
	}

	public void setTotalSales(Double totalSales) {
		this.totalSales = totalSales;
	}

	public Employee getEmployee() {
		return employee;
	}

	public void setEmployee(Employee employee) {
		this.employee = employee;
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

}

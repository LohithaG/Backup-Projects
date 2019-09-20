package com.mss.pmj.pmjmis.response;

import java.util.Collection;

import com.mss.pmj.pmjmis.domain.EmployeeItemMonthlyTarget;
import com.mss.pmj.pmjmis.domain.Sales;
import com.mss.pmj.pmjmis.domain.TeamItemMonthlyTarget;

public class Sample {

	private Collection<EmployeeItemMonthlyTarget> employees;

	private Long numberOfDays;

	private Collection<Sales> sale;

	private String startDateTimeline;
	
	private String endDateTimeline;
	
	private Collection<TeamItemMonthlyTarget> teamD2hTgt;

	public Collection<EmployeeItemMonthlyTarget> getEmployees() {
		return employees;
	}

	public void setEmployees(Collection<EmployeeItemMonthlyTarget> employees) {
		this.employees = employees;
	}

	public Long getNumberOfDays() {
		return numberOfDays;
	}

	public void setNumberOfDays(Long numberOfDays) {
		this.numberOfDays = numberOfDays;
	}

	public Collection<Sales> getSale() {
		return sale;
	}

	public void setSale(Collection<Sales> sale) {
		this.sale = sale;
	}

	public String getStartDateTimeline() {
		return startDateTimeline;
	}

	public void setStartDateTimeline(String startDateTimeline) {
		this.startDateTimeline = startDateTimeline;
	}

	public String getEndDateTimeline() {
		return endDateTimeline;
	}

	public void setEndDateTimeline(String endDateTimeline) {
		this.endDateTimeline = endDateTimeline;
	}

	public Collection<TeamItemMonthlyTarget> getTeamD2hTgt() {
		return teamD2hTgt;
	}

	public void setTeamD2hTgt(Collection<TeamItemMonthlyTarget> teamD2hTgt) {
		this.teamD2hTgt = teamD2hTgt;
	}

	
}

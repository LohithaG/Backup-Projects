package com.mss.pmj.pmjmis.response;

import java.util.Collection;

import com.mss.pmj.pmjmis.domain.Sales;
import com.mss.pmj.pmjmis.domain.TeamItemMonthlyTarget;

public class Sample1 {

	private Collection<TeamItemMonthlyTarget> teamItemMonthlyTarget;

	private Long numberOfDays;

	private Collection<Sales> sale;

	private String startDateTimeline;

	private String endDateTimeline;

	public Collection<TeamItemMonthlyTarget> getTeamItemMonthlyTarget() {
		return teamItemMonthlyTarget;
	}

	public void setTeamItemMonthlyTarget(Collection<TeamItemMonthlyTarget> teamItemMonthlyTarget) {
		this.teamItemMonthlyTarget = teamItemMonthlyTarget;
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

}

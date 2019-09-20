package com.mss.pmj.pmjmis.response;

import java.util.Collection;

import com.mss.pmj.pmjmis.domain.EmpDailyActuals;
import com.mss.pmj.pmjmis.domain.EmployeeItemMonthlyTarget;

public class ConversionSample {

	private Collection<EmployeeItemMonthlyTarget> employees;

	private Long numberOfDays;

	public Collection<EmpDailyActuals> getEmpDailyActuals() {
		return empDailyActuals;
	}

	public void setEmpDailyActuals(Collection<EmpDailyActuals> empDailyActuals) {
		this.empDailyActuals = empDailyActuals;
	}

	private Collection<EmpDailyActuals> empDailyActuals;

	private String startDateTimeline;
	
	private String endDateTimeline;

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

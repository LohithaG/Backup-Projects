package com.mss.pmj.pmjmis.response;

import java.util.List;

public class PerformanceAnalysisSalesPersonWiseData {

	private List<String> timeline;

	private EmployeeTargetVsActuals employee;

	public List<String> getTimeline() {
		return timeline;
	}

	public void setTimeline(List<String> timeline) {
		this.timeline = timeline;
	}

	public EmployeeTargetVsActuals getEmployee() {
		return employee;
	}

	public void setEmployee(EmployeeTargetVsActuals employee) {
		this.employee = employee;
	}

}

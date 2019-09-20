package com.mss.pmj.pmjmis.response;

public class ConversionData {
	
	    private String[] timeLine;

	    private EmployeeConversionTgtvsActual[] employee;

	    public String[] getTimeLine ()
	    {
	        return timeLine;
	    }

	    public void setTimeLine (String[] timeLine)
	    {
	        this.timeLine = timeLine;
	    }

	    public EmployeeConversionTgtvsActual[] getEmployee ()
	    {
	        return employee;
	    }

	    public void setEmployee (EmployeeConversionTgtvsActual[] employee)
	    {
	        this.employee = employee;
	    }
}

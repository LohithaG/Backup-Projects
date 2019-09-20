package com.mss.pmj.pmjmis.response;

public class SHWConversionEmployeeDetails {
	
	private ConversionFactorWalkins walkins;

    private String[] employee;

    public ConversionFactorWalkins getWalkins ()
    {
        return walkins;
    }

    public void setWalkins (ConversionFactorWalkins walkins)
    {
        this.walkins = walkins;
    }

    public String[] getEmployee ()
    {
        return employee;
    }

    public void setEmployee (String[] employee)
    {
        this.employee = employee;
    }
}

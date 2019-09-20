package com.mss.pmj.pmjmis.response;

public class EmployeeConversionTgtvsActual {
	
	     private String empCode;

	    private String name;
	
	    private ConversionActuals targets;
	    
	    private ConversionActuals actuals;

	    private Walkins walkins;

	    public Walkins getWalkins() {
			return walkins;
		}

		public void setWalkins(Walkins walkins) {
			this.walkins = walkins;
		}

		public ConversionActuals getActuals ()
	    {
	        return actuals;
	    }

	    public void setActuals (ConversionActuals actuals)
	    {
	        this.actuals = actuals;
	    }

		public String getEmpCode() {
			return empCode;
		}

		public void setEmpCode(String empCode) {
			this.empCode = empCode;
		}

		public String getName ()
	    {
	        return name;
	    }

	    public void setName (String name)
	    {
	        this.name = name;
	    }

	    public ConversionActuals getTargets ()
	    {
	        return targets;
	    }

	    public void setTargets (ConversionActuals targets)
	    {
	        this.targets = targets;
	    }
}
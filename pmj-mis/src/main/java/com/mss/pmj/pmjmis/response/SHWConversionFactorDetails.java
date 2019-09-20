package com.mss.pmj.pmjmis.response;

public class SHWConversionFactorDetails {
	
    private String[] locations;

    private ConversionActuals targets;
    
    private ConversionActuals actuals;
    
    private ConversionFactorWalkins walkins;


    public ConversionActuals getActuals ()
    {
        return actuals;
    }

    public void setActuals (ConversionActuals actuals)
    {
        this.actuals = actuals;
    }

    public String[] getLocations ()
    {
        return locations;
    }

    public void setLocations (String[] locations)
    {
        this.locations = locations;
    }
    public ConversionActuals getTargets ()
    {
        return targets;
    }

    public ConversionFactorWalkins getWalkins() {
		return walkins;
	}

	public void setWalkins(ConversionFactorWalkins walkins) {
		this.walkins = walkins;
	}

	public void setTargets (ConversionActuals targets)
    {
        this.targets = targets;
    }
}
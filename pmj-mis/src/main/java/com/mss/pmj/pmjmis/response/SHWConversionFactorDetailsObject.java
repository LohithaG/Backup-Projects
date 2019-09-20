package com.mss.pmj.pmjmis.response;

public class SHWConversionFactorDetailsObject {
	
    private String[] timeline;

    private ConversionActuals targets;
    
    private ConversionActuals actuals;
    
    private ConversionFactorWalkins walkins;


    public ConversionActuals getActuals ()
    {
        return actuals;
    }

    public String[] getTimeline() {
		return timeline;
	}

	public void setTimeline(String[] timeline) {
		this.timeline = timeline;
	}

	public void setActuals (ConversionActuals actuals)
    {
        this.actuals = actuals;
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
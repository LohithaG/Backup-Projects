package com.mss.pmj.pmjmis.response;

public class Locations {

	private String code;

	private String locationName;

	private ItemQuantityValue actuals;

	private ItemQuantityValue target;

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public String getLocationName() {
		return locationName;
	}

	public void setLocationName(String locationName) {
		this.locationName = locationName;
	}

	public ItemQuantityValue getActuals() {
		return actuals;
	}

	public void setActuals(ItemQuantityValue actuals) {
		this.actuals = actuals;
	}

	public ItemQuantityValue getTarget() {
		return target;
	}

	public void setTarget(ItemQuantityValue target) {
		this.target = target;
	}

}

package com.mss.pmj.pmjmis.response;

import java.util.List;

public class D2HClusterTgtVsActualsDetails {

	private List<String> cluster;

	private ItemQuantityValue actuals;

	private ItemQuantityValue target;

	public List<String> getCluster() {
		return cluster;
	}

	public void setCluster(List<String> cluster) {
		this.cluster = cluster;
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

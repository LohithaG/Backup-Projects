package com.mss.solar.dashboard.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "weightmeasurement")
public class WeightMeasurement {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	private String weightType;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getWeightType() {
		return weightType;
	}

	public void setWeightType(String weightType) {
		this.weightType = weightType;
	}

}

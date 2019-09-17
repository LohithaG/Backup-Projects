package com.mss.solar.dashboard.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "exceptionarea")
public class ExceptionArea {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	private String exceptionArea;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getExceptionArea() {
		return exceptionArea;
	}

	public void setExceptionArea(String exceptionArea) {
		this.exceptionArea = exceptionArea;
	}
	
	
	
}

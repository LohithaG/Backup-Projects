package com.mss.solar.dashboard.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "exceptionseverity")
public class ExceptionSeverity {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	private String exceptionSeverity;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getExceptionSeverity() {
		return exceptionSeverity;
	}

	public void setExceptionSeverity(String exceptionSeverity) {
		this.exceptionSeverity = exceptionSeverity;
	}
	
}

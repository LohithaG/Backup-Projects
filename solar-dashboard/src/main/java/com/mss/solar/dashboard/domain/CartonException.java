package com.mss.solar.dashboard.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "cartonexception")
public class CartonException {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	@ManyToOne
	@JoinColumn(name = "exceptionArea")
	private ExceptionArea exceptionArea;

	@ManyToOne
	@JoinColumn(name = "exceptionType")
	private ExceptionType exceptionType;

	@ManyToOne
	@JoinColumn(name = "exceptionSeverity")
	private ExceptionSeverity exceptionSeverity;
	
	@ManyToOne
	@JoinColumn(name = "inspectionCartonDetails")
	private InspectionCartonDetails inspectionCartonDetails;
	
	private String exceptionMsg;
	
	private String comments;

	public ExceptionArea getExceptionArea() {
		return exceptionArea;
	}

	public void setExceptionArea(ExceptionArea exceptionArea) {
		this.exceptionArea = exceptionArea;
	}

	public ExceptionType getExceptionType() {
		return exceptionType;
	}

	public void setExceptionType(ExceptionType exceptionType) {
		this.exceptionType = exceptionType;
	}

	public ExceptionSeverity getExceptionSeverity() {
		return exceptionSeverity;
	}

	public void setExceptionSeverity(ExceptionSeverity exceptionSeverity) {
		this.exceptionSeverity = exceptionSeverity;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public InspectionCartonDetails getInspectionCartonDetails() {
		return inspectionCartonDetails;
	}

	public void setInspectionCartonDetails(InspectionCartonDetails inspectionCartonDetails) {
		this.inspectionCartonDetails = inspectionCartonDetails;
	}

	public String getExceptionMsg() {
		return exceptionMsg;
	}

	public void setExceptionMsg(String exceptionMsg) {
		this.exceptionMsg = exceptionMsg;
	}

	public String getComments() {
		return comments;
	}

	public void setComments(String comments) {
		this.comments = comments;
	}
	
	

}

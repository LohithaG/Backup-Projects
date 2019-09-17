package com.mss.solar.dashboard.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "inspection")
public class Inspection {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	@ManyToOne
	@JoinColumn(name = "loadNumber")
	private LoadDetails loadNumber;

	@Column(columnDefinition = "LONGTEXT")
	private String driverSignature;

	@Column(columnDefinition = "LONGTEXT")
	private String inspectorSignature;

	private String driverComment;

	private String inspectorComment;

	@ManyToOne
	@JoinColumn(name = "inspectionType")
	private InspectionType inspectionType;

	@ManyToOne
	@JoinColumn(name = "location")
	private Location location;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public LoadDetails getLoadNumber() {
		return loadNumber;
	}

	public void setLoadNumber(LoadDetails loadNumber) {
		this.loadNumber = loadNumber;
	}

	public String getDriverSignature() {
		return driverSignature;
	}

	public void setDriverSignature(String driverSignature) {
		this.driverSignature = driverSignature;
	}

	public String getInspectorSignature() {
		return inspectorSignature;
	}

	public void setInspectorSignature(String inspectorSignature) {
		this.inspectorSignature = inspectorSignature;
	}

	public String getDriverComment() {
		return driverComment;
	}

	public void setDriverComment(String driverComment) {
		this.driverComment = driverComment;
	}

	public String getInspectorComment() {
		return inspectorComment;
	}

	public void setInspectorComment(String inspectorComment) {
		this.inspectorComment = inspectorComment;
	}

	public InspectionType getInspectionType() {
		return inspectionType;
	}

	public void setInspectionType(InspectionType inspectionType) {
		this.inspectionType = inspectionType;
	}

	public Location getLocation() {
		return location;
	}

	public void setLocation(Location location) {
		this.location = location;
	}

}

package com.mss.solar.dashboard.domain;

import java.time.ZonedDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "cartondetails")
public class CartonDetails {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	private String length;

	private String width;

	private String height;

	private String weight;

	@ManyToOne
	@JoinColumn(name = "pickupLocation")
	private Location pickupLocation;

	@ManyToOne
	@JoinColumn(name = "destinationLocation")
	private Location destinationLocation;

	private String cartonId;

	private ZonedDateTime createdDate;

	@ManyToOne
	@JoinColumn(name = "loadNumber")
	private LoadDetails loadNumber;

	private Boolean preInspectionStatus;

	private Boolean postInspectionStatus;

	private String updatedDate;

	private String comment;

	@ManyToOne
	@JoinColumn(name = "SkidDrops")
	private SkidDrops skidDrops;

	public SkidDrops getSkidDrops() {
		return skidDrops;
	}

	public void setSkidDrops(SkidDrops skidDrops) {
		this.skidDrops = skidDrops;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getLength() {
		return length;
	}

	public void setLength(String length) {
		this.length = length;
	}

	public String getWidth() {
		return width;
	}

	public void setWidth(String width) {
		this.width = width;
	}

	public String getHeight() {
		return height;
	}

	public void setHeight(String height) {
		this.height = height;
	}

	public Location getPickupLocation() {
		return pickupLocation;
	}

	public void setPickupLocation(Location pickupLocation) {
		this.pickupLocation = pickupLocation;
	}

	public Location getDestinationLocation() {
		return destinationLocation;
	}

	public void setDestinationLocation(Location destinationLocation) {
		this.destinationLocation = destinationLocation;
	}

	public String getCartonId() {
		return cartonId;
	}

	public void setCartonId(String cartonId) {
		this.cartonId = cartonId;
	}

	public ZonedDateTime getCreatedDate() {
		return createdDate;
	}

	public void setCreatedDate(ZonedDateTime createdDate) {
		this.createdDate = createdDate;
	}

	public LoadDetails getLoadNumber() {
		return loadNumber;
	}

	public void setLoadNumber(LoadDetails loadNumber) {
		this.loadNumber = loadNumber;
	}

	public Boolean getPreInspectionStatus() {
		return preInspectionStatus;
	}

	public void setPreInspectionStatus(Boolean preInspectionStatus) {
		this.preInspectionStatus = preInspectionStatus;
	}

	public Boolean getPostInspectionStatus() {
		return postInspectionStatus;
	}

	public void setPostInspectionStatus(Boolean postInspectionStatus) {
		this.postInspectionStatus = postInspectionStatus;
	}

	public String getWeight() {
		return weight;
	}

	public void setWeight(String weight) {
		this.weight = weight;
	}

	public String getUpdatedDate() {
		return updatedDate;
	}

	public void setUpdatedDate(String updatedDate) {
		this.updatedDate = updatedDate;
	}

	public String getComment() {
		return comment;
	}

	public void setComment(String comment) {
		this.comment = comment;
	}

}

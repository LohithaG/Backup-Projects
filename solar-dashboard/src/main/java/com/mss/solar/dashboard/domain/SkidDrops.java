package com.mss.solar.dashboard.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "skiddrops")
@JsonIgnoreProperties(ignoreUnknown = true)
public class SkidDrops {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	@ManyToOne
	@JoinColumn(name = "destLocNbr")
	private Location destLocNbr;

	private Integer totalCartons;

	private Integer addedCartons;

	@ManyToOne
	@JoinColumn(name = "loadTypNbr")
	private LoadAppointmentType loadTypNbr;

	private Integer geoStatus;

	private Double totalMiles;

	@ManyToOne
	@JoinColumn(name = "loadDetails")
	private LoadDetails loadDetails;
	
	private Integer cartonstatus;
	
	private Boolean postInspectionStatus;
	
	private Long skidOrderPerLoad;
	
	private Boolean skidDropStatus;
	
	public Boolean getPostInspectionStatus() {
		return postInspectionStatus;
	}

	public void setPostInspectionStatus(Boolean postInspectionStatus) {
		this.postInspectionStatus = postInspectionStatus;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Location getDestLocNbr() {
		return destLocNbr;
	}

	public void setDestLocNbr(Location destLocNbr) {
		this.destLocNbr = destLocNbr;
	}

	public Integer getTotalCartons() {
		return totalCartons;
	}

	public void setTotalCartons(Integer totalCartons) {
		this.totalCartons = totalCartons;
	}

	public Integer getAddedCartons() {
		return addedCartons;
	}

	public void setAddedCartons(Integer addedCartons) {
		this.addedCartons = addedCartons;
	}

	public LoadAppointmentType getLoadTypNbr() {
		return loadTypNbr;
	}

	public void setLoadTypNbr(LoadAppointmentType loadTypNbr) {
		this.loadTypNbr = loadTypNbr;
	}

	@JsonIgnore
	public LoadDetails getLoadDetails() {
		return loadDetails;
	}

	public void setLoadDetails(LoadDetails loadDetails) {
		this.loadDetails = loadDetails;
	}

	public Integer getGeoStatus() {
		return geoStatus;
	}

	public void setGeoStatus(Integer geoStatus) {
		this.geoStatus = geoStatus;
	}

	public Double getTotalMiles() {
		return totalMiles;
	}

	public void setTotalMiles(Double totalMiles) {
		this.totalMiles = totalMiles;
	}

	public Integer getCartonstatus() {
		return cartonstatus;
	}

	public void setCartonstatus(Integer cartonstatus) {
		this.cartonstatus = cartonstatus;
	}

	public Long getSkidOrderPerLoad() {
		return skidOrderPerLoad;
	}

	public void setSkidOrderPerLoad(Long skidOrderPerLoad) {
		this.skidOrderPerLoad = skidOrderPerLoad;
	}

	public Boolean getSkidDropStatus() {
		return skidDropStatus;
	}

	public void setSkidDropStatus(Boolean skidDropStatus) {
		this.skidDropStatus = skidDropStatus;
	}

}

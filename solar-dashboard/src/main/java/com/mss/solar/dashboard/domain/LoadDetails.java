package com.mss.solar.dashboard.domain;

import java.time.ZonedDateTime;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "loaddetails")
@JsonIgnoreProperties(ignoreUnknown = true)
public class LoadDetails {

	@Id
	private String loadNumber;

	@ManyToOne
	@JoinColumn(name = "originLocNbr")
	private Location originLocNbr;

	private ZonedDateTime createdTS;

	@ManyToOne
	@JoinColumn(name = "createdUser")
	private User createdUser;

	private ZonedDateTime lastUpdatedTS;

	@ManyToOne
	@JoinColumn(name = "lastUpdatedUser")
	private User lastUpdatedUser;

	@ManyToOne
	@JoinColumn(name = "driver")
	private Driver driver;

	@ManyToOne
	@JoinColumn(name = "vndNbr")
	private Vendor vndNbr;

	@ManyToOne
	@JoinColumn(name = "loadStatNbr")
	private LoadAppointmentStatus loadStatNbr;

	private Integer highValueLoad;

	private Integer highPriorityLoad;

	private Double geomiles;

	private Long skidDropsCount;
	
	@OneToMany(mappedBy = "loadDetails", cascade = CascadeType.ALL)
	private Set<SkidDrops> skidDrops;
	
	private Long totalCartons;
	
	private Long addedCartons;
	
	private Long PostInspectionCompletedSkids;
	
	private Boolean preInspectionStatus;
	
	private Double totalMiles;
	
	@ManyToOne
	@JoinColumn(name = "destLocNbr")
	private Location destLocNbr;
	
	public Boolean getPreInspectionStatus() {
		return preInspectionStatus;
	}

	public void setPreInspectionStatus(Boolean preInspectionStatus) {
		this.preInspectionStatus = preInspectionStatus;
	}

	public Long getPostInspectionCompletedSkids() {
		return PostInspectionCompletedSkids;
	}

	public void setPostInspectionCompletedSkids(Long postInspectionCompletedSkids) {
		PostInspectionCompletedSkids = postInspectionCompletedSkids;
	}

	public Long getAddedCartons() {
		return addedCartons;
	}

	public void setAddedCartons(Long addedCartons) {
		this.addedCartons = addedCartons;
	}

	public String getLoadNumber() {
		return loadNumber;
	}

	public void setLoadNumber(String loadNumber) {
		this.loadNumber = loadNumber;
	}

	public Location getOriginLocNbr() {
		return originLocNbr;
	}

	public void setOriginLocNbr(Location originLocNbr) {
		this.originLocNbr = originLocNbr;
	}

	public ZonedDateTime getCreatedTS() {
		return createdTS;
	}

	public void setCreatedTS(ZonedDateTime createdTS) {
		this.createdTS = createdTS;
	}

	public User getCreatedUser() {
		return createdUser;
	}

	public void setCreatedUser(User createdUser) {
		this.createdUser = createdUser;
	}

	public ZonedDateTime getLastUpdatedTS() {
		return lastUpdatedTS;
	}

	public void setLastUpdatedTS(ZonedDateTime lastUpdatedTS) {
		this.lastUpdatedTS = lastUpdatedTS;
	}

	public User getLastUpdatedUser() {
		return lastUpdatedUser;
	}

	public void setLastUpdatedUser(User lastUpdatedUser) {
		this.lastUpdatedUser = lastUpdatedUser;
	}

	public Driver getDriver() {
		return driver;
	}

	public void setDriver(Driver driver) {
		this.driver = driver;
	}

	public Vendor getVndNbr() {
		return vndNbr;
	}

	public void setVndNbr(Vendor vndNbr) {
		this.vndNbr = vndNbr;
	}

	public LoadAppointmentStatus getLoadStatNbr() {
		return loadStatNbr;
	}

	public void setLoadStatNbr(LoadAppointmentStatus loadStatNbr) {
		this.loadStatNbr = loadStatNbr;
	}

	public Integer getHighValueLoad() {
		return highValueLoad;
	}

	public void setHighValueLoad(Integer highValueLoad) {
		this.highValueLoad = highValueLoad;
	}

	public Integer getHighPriorityLoad() {
		return highPriorityLoad;
	}

	public void setHighPriorityLoad(Integer highPriorityLoad) {
		this.highPriorityLoad = highPriorityLoad;
	}

	public Double getGeomiles() {
		return geomiles;
	}

	public void setGeomiles(Double geomiles) {
		this.geomiles = geomiles;
	}

	public Long getSkidDropsCount() {
		return skidDropsCount;
	}

	public void setSkidDropsCount(Long skidDropsCount) {
		this.skidDropsCount = skidDropsCount;
	}

	public Set<SkidDrops> getSkidDrops() {
		return skidDrops;
	}

	public void setSkidDrops(Set<SkidDrops> skidDrops) {
		this.skidDrops = skidDrops;
	}

	public Long getTotalCartons() {
		return totalCartons;
	}

	public void setTotalCartons(Long totalCartons) {
		this.totalCartons = totalCartons;
	}

	public Double getTotalMiles() {
		return totalMiles;
	}

	public void setTotalMiles(Double totalMiles) {
		this.totalMiles = totalMiles;
	}

	public Location getDestLocNbr() {
		return destLocNbr;
	}

	public void setDestLocNbr(Location destLocNbr) {
		this.destLocNbr = destLocNbr;
	}
	

}

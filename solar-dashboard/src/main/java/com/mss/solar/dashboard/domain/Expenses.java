package com.mss.solar.dashboard.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "expenses")
public class Expenses {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	
	@ManyToOne
	@JoinColumn(name="loadNumber")
	private LoadDetails loadNumber;
	
	@ManyToOne
	@JoinColumn(name="driverId")
	private Driver driverId;
	
	private Long NoOfExpenses;
	
	private Double totalAmount;

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

	public Driver getDriverId() {
		return driverId;
	}

	public void setDriverId(Driver driverId) {
		this.driverId = driverId;
	}

	public Long getNoOfExpenses() {
		return NoOfExpenses;
	}

	public void setNoOfExpenses(Long noOfExpenses) {
		NoOfExpenses = noOfExpenses;
	}

	public Double getTotalAmount() {
		return totalAmount;
	}

	public void setTotalAmount(Double totalAmount) {
		this.totalAmount = totalAmount;
	}


	/*public ZonedDateTime getCreatedTime() {
		return createdTime;
	}

	public void setCreatedTime(ZonedDateTime createdTime) {
		this.createdTime = createdTime;
	}

	public ZonedDateTime getUpdatedTime() {
		return updatedTime;
	}

	public void setUpdatedTime(ZonedDateTime updatedTime) {
		this.updatedTime = updatedTime;
	}*/
	
	
}

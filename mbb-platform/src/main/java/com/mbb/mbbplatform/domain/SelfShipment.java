package com.mbb.mbbplatform.domain;

import java.time.ZonedDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

@Entity
@Table(name = "selfshipment")
public class SelfShipment {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	private String driverName;

	private String vehicleNumber;

	private Long driverNumber;

	private Long driverAlternateNumber;
	
	private String email;

	@CreationTimestamp
	private ZonedDateTime createdTime;

	@UpdateTimestamp
	private ZonedDateTime updatedTime;

	@ManyToOne
	@JoinColumn(name = "transferInventoryId")
	private TransferInventory transferInventoryId;
	
	@ManyToOne
	@JoinColumn(name = "servicingProductId")
	private ServicingProduct servicingProductId;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getDriverName() {
		return driverName;
	}

	public void setDriverName(String driverName) {
		this.driverName = driverName;
	}

	public String getVehicleNumber() {
		return vehicleNumber;
	}

	public void setVehicleNumber(String vehicleNumber) {
		this.vehicleNumber = vehicleNumber;
	}

	public Long getDriverNumber() {
		return driverNumber;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public ServicingProduct getServicingProductId() {
		return servicingProductId;
	}

	public void setServicingProductId(ServicingProduct servicingProductId) {
		this.servicingProductId = servicingProductId;
	}

	public Long getDriverAlternateNumber() {
		return driverAlternateNumber;
	}

	public void setDriverAlternateNumber(Long driverAlternateNumber) {
		this.driverAlternateNumber = driverAlternateNumber;
	}

	public void setDriverNumber(Long driverNumber) {
		this.driverNumber = driverNumber;
	}

	public ZonedDateTime getCreatedTime() {
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
	}

	public TransferInventory getTransferInventoryId() {
		return transferInventoryId;
	}

	public void setTransferInventoryId(TransferInventory transferInventoryId) {
		this.transferInventoryId = transferInventoryId;
	}

	
}

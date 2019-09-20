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
@Table(name = "shippingaggregator")
public class ShippingAggregator {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	private String shippingAggregator;

	private String courierName;

	private String trackingNumber;

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
	
	

	public ServicingProduct getServicingProductId() {
		return servicingProductId;
	}

	public void setServicingProductId(ServicingProduct servicingProductId) {
		this.servicingProductId = servicingProductId;
	}

	public ZonedDateTime getCreatedTime() {
		return createdTime;
	}

	public TransferInventory getTransferInventoryId() {
		return transferInventoryId;
	}

	public void setTransferInventoryId(TransferInventory transferInventoryId) {
		this.transferInventoryId = transferInventoryId;
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

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getShippingAggregator() {
		return shippingAggregator;
	}

	public void setShippingAggregator(String shippingAggregator) {
		this.shippingAggregator = shippingAggregator;
	}

	public String getCourierName() {
		return courierName;
	}

	public void setCourierName(String courierName) {
		this.courierName = courierName;
	}

	public String getTrackingNumber() {
		return trackingNumber;
	}

	public void setTrackingNumber(String trackingNumber) {
		this.trackingNumber = trackingNumber;
	}

}

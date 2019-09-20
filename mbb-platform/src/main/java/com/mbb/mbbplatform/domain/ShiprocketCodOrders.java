package com.mbb.mbbplatform.domain;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "shiprocketcodorders")
public class ShiprocketCodOrders {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	private Long cRFID;

	private String aWB;

	private LocalDateTime deliveredDate;

	private String orderId;

	private String courier;

	private Double orderValue;

	private LocalDateTime remittanceDate;

	private String uTR;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getcRFID() {
		return cRFID;
	}

	public void setcRFID(Long cRFID) {
		this.cRFID = cRFID;
	}

	public String getaWB() {
		return aWB;
	}

	public void setaWB(String aWB) {
		this.aWB = aWB;
	}

	public LocalDateTime getDeliveredDate() {
		return deliveredDate;
	}

	public void setDeliveredDate(LocalDateTime deliveredDate) {
		this.deliveredDate = deliveredDate;
	}

	public String getOrderId() {
		return orderId;
	}

	public void setOrderId(String orderId) {
		this.orderId = orderId;
	}

	public String getCourier() {
		return courier;
	}

	public void setCourier(String courier) {
		this.courier = courier;
	}

	public Double getOrderValue() {
		return orderValue;
	}

	public void setOrderValue(Double orderValue) {
		this.orderValue = orderValue;
	}

	public LocalDateTime getRemittanceDate() {
		return remittanceDate;
	}

	public void setRemittanceDate(LocalDateTime remittanceDate) {
		this.remittanceDate = remittanceDate;
	}

	public String getuTR() {
		return uTR;
	}

	public void setuTR(String uTR) {
		this.uTR = uTR;
	}

}

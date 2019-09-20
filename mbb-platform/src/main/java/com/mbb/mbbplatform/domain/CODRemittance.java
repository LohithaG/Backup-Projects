package com.mbb.mbbplatform.domain;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "codremittance")
public class CODRemittance {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	private String orderId;

	private String trackingNo;

	private String cRFIDORLedger;

	private String paymentReferennceNumber;

	private Double amount;

	private String remittanceStatus;

	private String remittedDate;

	private String shippingAggregator;

	private LocalDateTime createdDate;

	private LocalDateTime updatedDate;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getOrderId() {
		return orderId;
	}

	public void setOrderId(String orderId) {
		this.orderId = orderId;
	}

	public String getTrackingNo() {
		return trackingNo;
	}

	public void setTrackingNo(String trackingNo) {
		this.trackingNo = trackingNo;
	}

	public String getcRFIDORLedger() {
		return cRFIDORLedger;
	}

	public void setcRFIDORLedger(String cRFIDORLedger) {
		this.cRFIDORLedger = cRFIDORLedger;
	}

	public String getPaymentReferennceNumber() {
		return paymentReferennceNumber;
	}

	public void setPaymentReferennceNumber(String paymentReferennceNumber) {
		this.paymentReferennceNumber = paymentReferennceNumber;
	}

	public Double getAmount() {
		return amount;
	}

	public void setAmount(Double amount) {
		this.amount = amount;
	}

	public String getRemittanceStatus() {
		return remittanceStatus;
	}

	public void setRemittanceStatus(String remittanceStatus) {
		this.remittanceStatus = remittanceStatus;
	}

	public String getRemittedDate() {
		return remittedDate;
	}

	public void setRemittedDate(String remittedDate) {
		this.remittedDate = remittedDate;
	}

	public String getShippingAggregator() {
		return shippingAggregator;
	}

	public void setShippingAggregator(String shippingAggregator) {
		this.shippingAggregator = shippingAggregator;
	}

	public LocalDateTime getCreatedDate() {
		return createdDate;
	}

	public void setCreatedDate(LocalDateTime createdDate) {
		this.createdDate = createdDate;
	}

	public LocalDateTime getUpdatedDate() {
		return updatedDate;
	}

	public void setUpdatedDate(LocalDateTime updatedDate) {
		this.updatedDate = updatedDate;
	}

}

package com.mbb.mbbplatform.domain;

import java.time.LocalDate;
import java.time.ZonedDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.Size;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

@Entity
@Table(name = "refunddetails")
public class RefundDetails {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	private LocalDate refundedDate ;
	
	private Boolean refundStatus;
	
	private Double amount;
	
	@CreationTimestamp
	private ZonedDateTime createdTime;
	
	@UpdateTimestamp
	private ZonedDateTime updatedTime;
	
	private String transactionNumber;
	@Size(max=1000,min=0)	

	private String comments;
	
	private String bankName;
	
	private String deductionAmount;
	
	private String refundedAmount;

	
	@OneToOne
	@JoinColumn(name = "dispatchId")
	private Dispatch dispatchId;
	
	private String paymentGatewayCharges;

	private String courierCharges;

	private String others;

	
	

	public Long getId() {
		return id;
	}

	public String getComments() {
		return comments;
	}

	public String getBankName() {
		return bankName;
	}

	public void setBankName(String bankName) {
		this.bankName = bankName;
	}

	public String getDeductionAmount() {
		return deductionAmount;
	}

	public String getPaymentGatewayCharges() {
		return paymentGatewayCharges;
	}

	public void setPaymentGatewayCharges(String paymentGatewayCharges) {
		this.paymentGatewayCharges = paymentGatewayCharges;
	}

	public String getCourierCharges() {
		return courierCharges;
	}

	public void setCourierCharges(String courierCharges) {
		this.courierCharges = courierCharges;
	}

	public String getOthers() {
		return others;
	}

	public void setOthers(String others) {
		this.others = others;
	}

	public void setDeductionAmount(String deductionAmount) {
		this.deductionAmount = deductionAmount;
	}

	public String getRefundedAmount() {
		return refundedAmount;
	}

	public void setRefundedAmount(String refundedAmount) {
		this.refundedAmount = refundedAmount;
	}

	public void setComments(String comments) {
		this.comments = comments;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public LocalDate getRefundedDate() {
		return refundedDate;
	}

	public void setRefundedDate(LocalDate refundedDate) {
		this.refundedDate = refundedDate;
	}

	public Boolean getRefundStatus() {
		return refundStatus;
	}

	public void setRefundStatus(Boolean refundStatus) {
		this.refundStatus = refundStatus;
	}

	public Double getAmount() {
		return amount;
	}

	public void setAmount(Double amount) {
		this.amount = amount;
	}

	public String getTransactionNumber() {
		return transactionNumber;
	}

	public void setTransactionNumber(String transactionNumber) {
		this.transactionNumber = transactionNumber;
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

	public Dispatch getDispatchId() {
		return dispatchId;
	}

	public void setDispatchId(Dispatch dispatchId) {
		this.dispatchId = dispatchId;
	}
	
	
	
	
}

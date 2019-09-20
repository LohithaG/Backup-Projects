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
@Table(name = "bankdetails")
public class BankDetails {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	private String bankName;

	private String transactionNumber;

	private Double amount;

	private ZonedDateTime enteredDate;
	
	@ManyToOne
	@JoinColumn(name = "poVendorId")
	private PoVendor poVendorId;
	
	@CreationTimestamp
	private ZonedDateTime createdTime;

	@UpdateTimestamp
	private ZonedDateTime updatedTime;

	private String comments;
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getBankName() {
		return bankName;
	}

	public void setBankName(String bankName) {
		this.bankName = bankName;
	}

	public String getTransactionNumber() {
		return transactionNumber;
	}

	public void setTransactionNumber(String transactionNumber) {
		this.transactionNumber = transactionNumber;
	}

	public Double getAmount() {
		return amount;
	}

	public void setAmount(Double amount) {
		this.amount = amount;
	}

	public ZonedDateTime getEnteredDate() {
		return enteredDate;
	}

	public void setEnteredDate(ZonedDateTime enteredDate) {
		this.enteredDate = enteredDate;
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

	public PoVendor getPoVendorId() {
		return poVendorId;
	}

	public void setPoVendorId(PoVendor poVendorId) {
		this.poVendorId = poVendorId;
	}

	public String getComments() {
		return comments;
	}

	public void setComments(String comments) {
		this.comments = comments;
	}

	
}

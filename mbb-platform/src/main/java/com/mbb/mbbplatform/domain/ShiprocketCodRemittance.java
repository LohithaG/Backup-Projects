package com.mbb.mbbplatform.domain;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "shiprocketcodremittance")
public class ShiprocketCodRemittance {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	private Long crfid;

	private String utr;

	private String codpayable;

	private String status;

	private String remarks;

	private String remittedValue;

	private String accountType;

	private String createdAt;

	private String rechargeValue;

	private String reversalValue;
	
	private String shippingAggregator;

	private LocalDateTime createdDate;

	private LocalDateTime updatedDate;

	
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

	public String getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(String createdAt) {
		this.createdAt = createdAt;
	}

	public String getRechargeValue() {
		return rechargeValue;
	}

	public void setRechargeValue(String rechargeValue) {
		this.rechargeValue = rechargeValue;
	}

	public String getReversalValue() {
		return reversalValue;
	}

	public void setReversalValue(String reversalValue) {
		this.reversalValue = reversalValue;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getCrfid() {
		return crfid;
	}

	public void setCrfid(Long crfid) {
		this.crfid = crfid;
	}

	public String getUtr() {
		return utr;
	}

	public void setUtr(String utr) {
		this.utr = utr;
	}

	public String getCodpayable() {
		return codpayable;
	}

	public void setCodpayable(String codpayable) {
		this.codpayable = codpayable;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getRemarks() {
		return remarks;
	}

	public void setRemarks(String remarks) {
		this.remarks = remarks;
	}

	public String getRemittedValue() {
		return remittedValue;
	}

	public void setRemittedValue(String remittedValue) {
		this.remittedValue = remittedValue;
	}

	public String getAccountType() {
		return accountType;
	}

	public void setAccountType(String accountType) {
		this.accountType = accountType;
	}

}

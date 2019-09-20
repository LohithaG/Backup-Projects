package com.mbb.mbbplatform.domain;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "flipkarttaxdetails")
public class FlipkartTaxDetails {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	private String serviceType;
	private String neftId;
	private String orderItemId;
	private String recallId;
	private String code;
	private String feeName;
	private String warehouseStateCode;
	private Double feeAmount;
	private Double feeWaiver;
	private Long cgstRate;
	private Long sgstRate;
	private Long igstRate;
	private Double cgstAmount;
	private Double sgstAmount;
	private Double igstAmount;
	private Double totalTaxes;
	private LocalDateTime createdDate;
	private LocalDateTime updatedDate;
	private Double totalTaxesForOrder;
	private Double marketPlaceFee;
	
	
	
	public Double getMarketPlaceFee() {
		return marketPlaceFee;
	}
	public void setMarketPlaceFee(Double marketPlaceFee) {
		this.marketPlaceFee = marketPlaceFee;
	}
	public Double getTotalTaxesForOrder() {
		return totalTaxesForOrder;
	}
	public void setTotalTaxesForOrder(Double totalTaxesForOrder) {
		this.totalTaxesForOrder = totalTaxesForOrder;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getServiceType() {
		return serviceType;
	}
	public void setServiceType(String serviceType) {
		this.serviceType = serviceType;
	}
	public String getNeftId() {
		return neftId;
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
	public Long getCgstRate() {
		return cgstRate;
	}
	public void setCgstRate(Long cgstRate) {
		this.cgstRate = cgstRate;
	}
	public void setNeftId(String neftId) {
		this.neftId = neftId;
	}
	public String getOrderItemId() {
		return orderItemId;
	}
	public void setOrderItemId(String orderItemId) {
		this.orderItemId = orderItemId;
	}
	public String getRecallId() {
		return recallId;
	}
	public void setRecallId(String recallId) {
		this.recallId = recallId;
	}
	public String getCode() {
		return code;
	}
	public void setCode(String code) {
		this.code = code;
	}
	public String getFeeName() {
		return feeName;
	}
	public void setFeeName(String feeName) {
		this.feeName = feeName;
	}
	public String getWarehouseStateCode() {
		return warehouseStateCode;
	}
	public void setWarehouseStateCode(String warehouseStateCode) {
		this.warehouseStateCode = warehouseStateCode;
	}
	public Double getFeeAmount() {
		return feeAmount;
	}
	public void setFeeAmount(Double feeAmount) {
		this.feeAmount = feeAmount;
	}
	public Double getFeeWaiver() {
		return feeWaiver;
	}
	public void setFeeWaiver(Double feeWaiver) {
		this.feeWaiver = feeWaiver;
	}
	public Long getSgstRate() {
		return sgstRate;
	}
	public void setSgstRate(Long sgstRate) {
		this.sgstRate = sgstRate;
	}
	public Long getIgstRate() {
		return igstRate;
	}
	public void setIgstRate(Long igstRate) {
		this.igstRate = igstRate;
	}
	public Double getCgstAmount() {
		return cgstAmount;
	}
	public void setCgstAmount(Double cgstAmount) {
		this.cgstAmount = cgstAmount;
	}
	public Double getSgstAmount() {
		return sgstAmount;
	}
	public void setSgstAmount(Double sgstAmount) {
		this.sgstAmount = sgstAmount;
	}
	public Double getIgstAmount() {
		return igstAmount;
	}
	public void setIgstAmount(Double igstAmount) {
		this.igstAmount = igstAmount;
	}
	public Double getTotalTaxes() {
		return totalTaxes;
	}
	public void setTotalTaxes(Double totalTaxes) {
		this.totalTaxes = totalTaxes;
	}
	

	




}

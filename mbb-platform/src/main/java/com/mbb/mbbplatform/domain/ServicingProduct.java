package com.mbb.mbbplatform.domain;

import java.time.LocalDate;
import java.time.ZonedDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.Min;
import javax.validation.constraints.Size;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;


@Entity
@Table(name = "servicingproduct")
public class ServicingProduct {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	@CreationTimestamp
	private ZonedDateTime createdTime;
	
	@UpdateTimestamp
	private ZonedDateTime updatedTime;
	

	
	@ManyToOne
	@JoinColumn(name = "customerDetailsId")
	private CustomerDetails customerDetailsId;
	
	@ManyToOne
	@JoinColumn(name = "servicingStatusesId")
	private ServicingStatuses servicingStatusesId;

	private String serviceId;
	private String orderId;
	private LocalDate orderDate;
	private String skuCode;
	private String productName;
	private String productSerialNumber;
	private String qrCode;
	private Boolean warranty;
	private Long warrantyInDays;
	private Boolean tenDaysReturnPolicy;
	private String runTime;
	@Size(max=1000,min=0)	

	private String customerRemarks;
	private String receivedBy;


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
	public CustomerDetails getCustomerDetailsId() {
		return customerDetailsId;
	}
	public void setCustomerDetailsId(CustomerDetails customerDetailsId) {
		this.customerDetailsId = customerDetailsId;
	}
	public Long getId() {
		return id;
	}
	public String getReceivedBy() {
		return receivedBy;
	}
	public void setReceivedBy(String receivedBy) {
		this.receivedBy = receivedBy;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getServiceId() {
		return serviceId;
	}
	public void setServiceId(String serviceId) {
		this.serviceId = serviceId;
	}
	public String getOrderId() {
		return orderId;
	}
	

	public ServicingStatuses getServicingStatusesId() {
		return servicingStatusesId;
	}
	public void setServicingStatusesId(ServicingStatuses servicingStatusesId) {
		this.servicingStatusesId = servicingStatusesId;
	}
	public void setOrderId(String orderId) {
		this.orderId = orderId;
	}
	
	public LocalDate getOrderDate() {
		return orderDate;
	}
	public void setOrderDate(LocalDate orderDate) {
		this.orderDate = orderDate;
	}
	public String getSkuCode() {
		return skuCode;
	}
	public void setSkuCode(String skuCode) {
		this.skuCode = skuCode;
	}
	public String getProductName() {
		return productName;
	}
	public void setProductName(String productName) {
		this.productName = productName;
	}
	public String getProductSerialNumber() {
		return productSerialNumber;
	}
	public void setProductSerialNumber(String productSerialNumber) {
		this.productSerialNumber = productSerialNumber;
	}
	public String getQrCode() {
		return qrCode;
	}
	public void setQrCode(String qrCode) {
		this.qrCode = qrCode;
	}
	
	public Boolean getWarranty() {
		return warranty;
	}
	public void setWarranty(Boolean warranty) {
		this.warranty = warranty;
	}
	public Long getWarrantyInDays() {
		return warrantyInDays;
	}
	public void setWarrantyInDays(Long warrantyInDays) {
		this.warrantyInDays = warrantyInDays;
	}
	public Boolean getTenDaysReturnPolicy() {
		return tenDaysReturnPolicy;
	}
	public void setTenDaysReturnPolicy(Boolean tenDaysReturnPolicy) {
		this.tenDaysReturnPolicy = tenDaysReturnPolicy;
	}
	public String getRunTime() {
		return runTime;
	}
	public void setRunTime(String runTime) {
		this.runTime = runTime;
	}


	public String getCustomerRemarks() {
		return customerRemarks;
	}
	public void setCustomerRemarks(String customerRemarks) {
		this.customerRemarks = customerRemarks;
	}
	
	
}

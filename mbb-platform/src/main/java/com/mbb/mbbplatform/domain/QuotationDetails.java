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
import javax.validation.constraints.Size;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
@Entity
@Table(name = "quotationdetails")
public class QuotationDetails {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	@CreationTimestamp
	private ZonedDateTime createdTime;
	
	@UpdateTimestamp
	private ZonedDateTime updatedTime;
	
	@ManyToOne
	@JoinColumn(name = "ServicingProductId")
	private ServicingProduct servicingProduct;
	
	@ManyToOne
	@JoinColumn(name = "paymentModesId")
	private PaymentModes paymentModeId;
	
	private Double serviceCharges;
	private Double courierCharges;
	private Boolean emailStatus;
	public Boolean getEmailStatus() {
		return emailStatus;
	}
	public void setEmailStatus(Boolean emailStatus) {
		this.emailStatus = emailStatus;
	}
	private Double otherCharges;
	private Double igst;
	private Double cgst;
	private Double sgst;
	private Double utgst;
	private Double totalCharges;
	@Size(max=1000,min=0)	

	private String comments;
	private Boolean paymentStatus;
	private String transactionReferenceNumber;
	private LocalDate date;
	private String unicommerceReferenceNumber;

	
	public String getTransactionReferenceNumber() {
		return transactionReferenceNumber;
	}
	public void setTransactionReferenceNumber(String transactionReferenceNumber) {
		this.transactionReferenceNumber = transactionReferenceNumber;
	}
	public LocalDate getDate() {
		return date;
	}
	public String getUnicommerceReferenceNumber() {
		return unicommerceReferenceNumber;
	}
	public void setUnicommerceReferenceNumber(String unicommerceReferenceNumber) {
		this.unicommerceReferenceNumber = unicommerceReferenceNumber;
	}
	public void setDate(LocalDate date) {
		this.date = date;
	}
	public PaymentModes getPaymentModeId() {
		return paymentModeId;
	}
	public void setPaymentModeId(PaymentModes paymentModeId) {
		this.paymentModeId = paymentModeId;
	}
	public Boolean getPaymentStatus() {
		return paymentStatus;
	}
	public void setPaymentStatus(Boolean paymentStatus) {
		this.paymentStatus = paymentStatus;
	}
	public String getComments() {
		return comments;
	}
	public void setComments(String comments) {
		this.comments = comments;
	}
	
	public ServicingProduct getServicingProduct() {
		return servicingProduct;
	}
	public void setServicingProduct(ServicingProduct servicingProduct) {
		this.servicingProduct = servicingProduct;
	}
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
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
	public Double getServiceCharges() {
		return serviceCharges;
	}
	public void setServiceCharges(Double serviceCharges) {
		this.serviceCharges = serviceCharges;
	}
	public Double getCourierCharges() {
		return courierCharges;
	}
	public void setCourierCharges(Double courierCharges) {
		this.courierCharges = courierCharges;
	}
	public Double getOtherCharges() {
		return otherCharges;
	}
	public void setOtherCharges(Double otherCharges) {
		this.otherCharges = otherCharges;
	}
	public Double getIgst() {
		return igst;
	}
	public void setIgst(Double igst) {
		this.igst = igst;
	}
	public Double getCgst() {
		return cgst;
	}
	public void setCgst(Double cgst) {
		this.cgst = cgst;
	}
	public Double getSgst() {
		return sgst;
	}
	public void setSgst(Double sgst) {
		this.sgst = sgst;
	}
	public Double getUtgst() {
		return utgst;
	}
	public void setUtgst(Double utgst) {
		this.utgst = utgst;
	}
	public Double getTotalCharges() {
		return totalCharges;
	}
	public void setTotalCharges(Double totalCharges) {
		this.totalCharges = totalCharges;
	}





	

}

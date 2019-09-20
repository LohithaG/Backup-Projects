package com.mbb.mbbplatform.domain;

import java.time.LocalDate;
import java.time.ZonedDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.Size;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

@Entity
@Table(name = "returndetails")
public class ReturnDetails {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	private LocalDate returnRequestOn ;
	
	@ManyToOne
	@JoinColumn(name="typeOfReturn")
	private TypeOfReturn typeOfReturn;
	
	@ManyToOne
	@JoinColumn(name="returnReasons")
	private ReturnReasons returnReasons;
	
	private Boolean returnStatus;
	@Size(max=1000,min=0)	
	private String comments;
	
	private String otherReasons;
	
	private String unicommerceRefferenceNo;


	@CreationTimestamp
	private ZonedDateTime createdTime;
	
	@UpdateTimestamp
	private ZonedDateTime updatedTime;
	
	@OneToOne
	@JoinColumn(name = "dispatchId")
	private Dispatch dispatchId;
	
	private String productStatus;

	private LocalDate pickupInitiated;
	
	private String trackingNumber;
	
	public Long getId() {
		return id;
	}


	public String getUnicommerceRefferenceNo() {
		return unicommerceRefferenceNo;
	}


	public LocalDate getPickupInitiated() {
		return pickupInitiated;
	}


	public void setPickupInitiated(LocalDate pickupInitiated) {
		this.pickupInitiated = pickupInitiated;
	}


	public void setUnicommerceRefferenceNo(String unicommerceRefferenceNo) {
		this.unicommerceRefferenceNo = unicommerceRefferenceNo;
	}


	public String getProductStatus() {
		return productStatus;
	}


	public String getOtherReasons() {
		return otherReasons;
	}


	public void setOtherReasons(String otherReasons) {
		this.otherReasons = otherReasons;
	}


	public void setProductStatus(String productStatus) {
		this.productStatus = productStatus;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public LocalDate getReturnRequestOn() {
		return returnRequestOn;
	}


	public void setReturnRequestOn(LocalDate returnRequestOn) {
		this.returnRequestOn = returnRequestOn;
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


	public TypeOfReturn getTypeOfReturn() {
		return typeOfReturn;
	}


	

	public String getTrackingNumber() {
		return trackingNumber;
	}


	public void setTrackingNumber(String trackingNumber) {
		this.trackingNumber = trackingNumber;
	}


	public void setTypeOfReturn(TypeOfReturn typeOfReturn) {
		this.typeOfReturn = typeOfReturn;
	}


	public ReturnReasons getReturnReasons() {
		return returnReasons;
	}


	public void setReturnReasons(ReturnReasons returnReasons) {
		this.returnReasons = returnReasons;
	}


	public Boolean getReturnStatus() {
		return returnStatus;
	}


	public void setReturnStatus(Boolean returnStatus) {
		this.returnStatus = returnStatus;
	}


	public String getComments() {
		return comments;
	}


	public void setComments(String comments) {
		this.comments = comments;
	}


	public Dispatch getDispatchId() {
		return dispatchId;
	}


	public void setDispatchId(Dispatch dispatchId) {
		this.dispatchId = dispatchId;
	}

}

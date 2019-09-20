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
@Table(name = "dispatch")
public class Dispatch {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	private String barcode;

	private String invoiceId;
	
	@CreationTimestamp
	private ZonedDateTime createdTime;
	
	@UpdateTimestamp
	private ZonedDateTime updatedTime;
	
	private String comment;
	
	private String createdUser;
	
	private Boolean productReturn;
	
	private Long expectedDeliveryDates;
	
	@ManyToOne
	@JoinColumn(name = "channel")
	private Channel channel;
	
	
	
	private String returnRequestNo;
	
	@ManyToOne
	@JoinColumn(name = "facilityId")
	private Facility facilityId;
	
	@ManyToOne
	@JoinColumn(name = "returnedtofacility")
	private Facility returnedToFacility;
	
	@ManyToOne
	@JoinColumn(name = "paymentModes")
	private PaymentModes paymentModes;
	


	private String receivedBy;
	
	

	@ManyToOne
	@JoinColumn(name = "DispatchPaymentDocuments")
	private DispatchPaymentDocuments dispatchPaymentDocuments;

	public String getReceivedBy() {
		return receivedBy;
	}

	
	public DispatchPaymentDocuments getDispatchPaymentDocuments() {
		return dispatchPaymentDocuments;
	}


	

	public void setDispatchPaymentDocuments(DispatchPaymentDocuments dispatchPaymentDocuments) {
		this.dispatchPaymentDocuments = dispatchPaymentDocuments;
	}


	public void setReceivedBy(String receivedBy) {
		this.receivedBy = receivedBy;
	}

	public Facility getReturnedToFacility() {
		return returnedToFacility;
	}

	public void setReturnedToFacility(Facility returnedToFacility) {
		this.returnedToFacility = returnedToFacility;
	}

	public Facility getFacilityId() {
		return facilityId;
	}

	public void setFacilityId(Facility facilityId) {
		this.facilityId = facilityId;
	}

	public String getReturnRequestNo() {
		return returnRequestNo;
	}

	public void setReturnRequestNo(String returnRequestNo) {
		this.returnRequestNo = returnRequestNo;
	}

	public Channel getChannel() {
		return channel;
	}

	public void setChannel(Channel channel) {
		this.channel = channel;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public PaymentModes getPaymentModes() {
		return paymentModes;
	}

	public void setPaymentModes(PaymentModes paymentModes) {
		this.paymentModes = paymentModes;
	}

	public String getBarcode() {
		return barcode;
	}

	public void setBarcode(String barcode) {
		this.barcode = barcode;
	}

	public String getInvoiceId() {
		return invoiceId;
	}

	public void setInvoiceId(String invoiceId) {
		this.invoiceId = invoiceId;
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

	public String getComment() {
		return comment;
	}

	public void setComment(String comment) {
		this.comment = comment;
	}

	public String getCreatedUser() {
		return createdUser;
	}

	public void setCreatedUser(String createdUser) {
		this.createdUser = createdUser;
	}

	public Boolean getProductReturn() {
		return productReturn;
	}

	public void setProductReturn(Boolean productReturn) {
		this.productReturn = productReturn;
	}

	public Long getExpectedDeliveryDates() {
		return expectedDeliveryDates;
	}

	public void setExpectedDeliveryDates(Long expectedDeliveryDates) {
		this.expectedDeliveryDates = expectedDeliveryDates;
	}

}

package com.mbb.mbbplatform.domain;


import java.time.LocalDateTime;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "reversepickup")
public class ReversePickup {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	private String saleOrderItemCode;

	private LocalDateTime saleOrderReceived;

	private String originalSaleOrderCode;

	private String itemName;

	private String itemSkuCode;

	private String reversePickupNo;

	private Long trackingNo;

	private LocalDateTime dispatchedDate;

	private LocalDateTime reversePickupCreated;

	private LocalDateTime reversePickupLastUpdated;

	private String reversePickupStatus;

	private String reversePickupAction;

	private String reversePickupReason;

	private String replacementSaleOrderCode;

	private String channelName;

	private String returnInvoiceNumber;

	private LocalDateTime createdDate;

	private LocalDateTime updatedDate;

	private LocalDateTime dateInCSvfile;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getSaleOrderItemCode() {
		return saleOrderItemCode;
	}

	public void setSaleOrderItemCode(String saleOrderItemCode) {
		this.saleOrderItemCode = saleOrderItemCode;
	}

	public LocalDateTime getSaleOrderReceived() {
		return saleOrderReceived;
	}

	public void setSaleOrderReceived(LocalDateTime saleOrderReceived) {
		this.saleOrderReceived = saleOrderReceived;
	}

	public String getOriginalSaleOrderCode() {
		return originalSaleOrderCode;
	}

	public void setOriginalSaleOrderCode(String originalSaleOrderCode) {
		this.originalSaleOrderCode = originalSaleOrderCode;
	}

	public String getItemName() {
		return itemName;
	}

	public void setItemName(String itemName) {
		this.itemName = itemName;
	}

	public String getItemSkuCode() {
		return itemSkuCode;
	}

	public void setItemSkuCode(String itemSkuCode) {
		this.itemSkuCode = itemSkuCode;
	}

	public String getReversePickupNo() {
		return reversePickupNo;
	}

	public void setReversePickupNo(String reversePickupNo) {
		this.reversePickupNo = reversePickupNo;
	}

	public Long getTrackingNo() {
		return trackingNo;
	}

	public void setTrackingNo(Long trackingNo) {
		this.trackingNo = trackingNo;
	}

	public LocalDateTime getDispatchedDate() {
		return dispatchedDate;
	}

	public void setDispatchedDate(LocalDateTime dispatchedDate) {
		this.dispatchedDate = dispatchedDate;
	}

	public LocalDateTime getReversePickupCreated() {
		return reversePickupCreated;
	}

	public void setReversePickupCreated(LocalDateTime reversePickupCreated) {
		this.reversePickupCreated = reversePickupCreated;
	}

	public LocalDateTime getReversePickupLastUpdated() {
		return reversePickupLastUpdated;
	}

	public void setReversePickupLastUpdated(LocalDateTime reversePickupLastUpdated) {
		this.reversePickupLastUpdated = reversePickupLastUpdated;
	}

	public String getReversePickupStatus() {
		return reversePickupStatus;
	}

	public void setReversePickupStatus(String reversePickupStatus) {
		this.reversePickupStatus = reversePickupStatus;
	}

	public String getReversePickupAction() {
		return reversePickupAction;
	}

	public void setReversePickupAction(String reversePickupAction) {
		this.reversePickupAction = reversePickupAction;
	}

	public String getReversePickupReason() {
		return reversePickupReason;
	}

	public void setReversePickupReason(String reversePickupReason) {
		this.reversePickupReason = reversePickupReason;
	}

	public String getReplacementSaleOrderCode() {
		return replacementSaleOrderCode;
	}

	public void setReplacementSaleOrderCode(String replacementSaleOrderCode) {
		this.replacementSaleOrderCode = replacementSaleOrderCode;
	}

	public String getChannelName() {
		return channelName;
	}

	public void setChannelName(String channelName) {
		this.channelName = channelName;
	}

	public String getReturnInvoiceNumber() {
		return returnInvoiceNumber;
	}

	public void setReturnInvoiceNumber(String returnInvoiceNumber) {
		this.returnInvoiceNumber = returnInvoiceNumber;
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

	public LocalDateTime getDateInCSvfile() {
		return dateInCSvfile;
	}

	public void setDateInCSvfile(LocalDateTime dateInCSvfile) {
		this.dateInCSvfile = dateInCSvfile;
	}

}

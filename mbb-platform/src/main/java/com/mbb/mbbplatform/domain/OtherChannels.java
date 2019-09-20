package com.mbb.mbbplatform.domain;

import java.time.LocalDate;
import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "otherchannels")
public class OtherChannels {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	private String channelName;

	private String displayOrderCode;

	private String dispatchDate;

	private String saleOrderItemStatus;

	private Double totalPrice;

	private String trackingNumber;

	private String deliveryDate;

	private LocalDateTime createdDate;

	private LocalDateTime updatedDate;

	private String paymentMode;

	private String orderDate;

	private Double shippingCharges;

	private String courierName;

	private String saleOrderItemCode;

	private LocalDate zohocreatedDate;

	private String productName;

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public LocalDate getZohocreatedDate() {
		return zohocreatedDate;
	}

	public void setZohocreatedDate(LocalDate zohocreatedDate) {
		this.zohocreatedDate = zohocreatedDate;
	}

	public String getSaleOrderItemCode() {
		return saleOrderItemCode;
	}

	public void setSaleOrderItemCode(String saleOrderItemCode) {
		this.saleOrderItemCode = saleOrderItemCode;
	}

	public String getCourierName() {
		return courierName;
	}

	public void setCourierName(String courierName) {
		this.courierName = courierName;
	}

	public Double getShippingCharges() {
		return shippingCharges;
	}

	public void setShippingCharges(Double shippingCharges) {
		this.shippingCharges = shippingCharges;
	}

	public String getOrderDate() {
		return orderDate;
	}

	public void setOrderDate(String orderDate) {
		this.orderDate = orderDate;
	}

	public String getPaymentMode() {
		return paymentMode;
	}

	public void setPaymentMode(String paymentMode) {
		this.paymentMode = paymentMode;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getChannelName() {
		return channelName;
	}

	public void setChannelName(String channelName) {
		this.channelName = channelName;
	}

	public String getDispatchDate() {
		return dispatchDate;
	}

	public void setDispatchDate(String dispatchDate) {
		this.dispatchDate = dispatchDate;
	}

	public String getSaleOrderItemStatus() {
		return saleOrderItemStatus;
	}

	public void setSaleOrderItemStatus(String saleOrderItemStatus) {
		this.saleOrderItemStatus = saleOrderItemStatus;
	}

	public Double getTotalPrice() {
		return totalPrice;
	}

	public void setTotalPrice(Double totalPrice) {
		this.totalPrice = totalPrice;
	}

	public String getTrackingNumber() {
		return trackingNumber;
	}

	public void setTrackingNumber(String trackingNumber) {
		this.trackingNumber = trackingNumber;
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

	public String getDeliveryDate() {
		return deliveryDate;
	}

	public void setDeliveryDate(String deliveryDate) {
		this.deliveryDate = deliveryDate;
	}

	public String getDisplayOrderCode() {
		return displayOrderCode;
	}

	public void setDisplayOrderCode(String displayOrderCode) {
		this.displayOrderCode = displayOrderCode;
	}

}

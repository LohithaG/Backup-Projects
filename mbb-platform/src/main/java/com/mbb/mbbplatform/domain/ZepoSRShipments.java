package com.mbb.mbbplatform.domain;

import java.time.LocalDate;
import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "zeposrshipments")
public class ZepoSRShipments {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	private String orderId;

	private String trackingNo;

	private String courierName;

	private String paymentMode;

	private Double orderTotal;

	private String status;

	private String shippingAggregator;

	private String dispatchDate;

	private String deliveryDate;

	private LocalDate createdDate;

	private LocalDateTime updatedDate;

	private String deliveryStatus;

	private Double shippingCost;

	private String requestDate;
	private String zepoShipmentRequestedDate;
	private String zepoRefundStatus;


	private String orderDate;

	private String productName;

	private String saleOrderItemCode;

	public String getSaleOrderItemCode() {
		return saleOrderItemCode;
	}

	public void setSaleOrderItemCode(String saleOrderItemCode) {
		this.saleOrderItemCode = saleOrderItemCode;
	}

	public String getProductName() {
		return productName;
	}



	public String getZepoShipmentRequestedDate() {
		return zepoShipmentRequestedDate;
	}

	public void setZepoShipmentRequestedDate(String zepoShipmentRequestedDate) {
		this.zepoShipmentRequestedDate = zepoShipmentRequestedDate;
	}

	

	public String getZepoRefundStatus() {
		return zepoRefundStatus;
	}

	public void setZepoRefundStatus(String zepoRefundStatus) {
		this.zepoRefundStatus = zepoRefundStatus;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public String getOrderDate() {
		return orderDate;
	}

	public void setOrderDate(String orderDate) {
		this.orderDate = orderDate;
	}

	public String getRequestDate() {
		return requestDate;
	}

	public void setRequestDate(String requestDate) {
		this.requestDate = requestDate;
	}

	public String getDispatchDate() {
		return dispatchDate;
	}

	public void setDispatchDate(String dispatchDate) {
		this.dispatchDate = dispatchDate;
	}

	public String getDeliveryDate() {
		return deliveryDate;
	}

	public void setDeliveryDate(String deliveryDate) {
		this.deliveryDate = deliveryDate;
	}

	public String getShippingAggregator() {
		return shippingAggregator;
	}

	public void setShippingAggregator(String shippingAggregator) {
		this.shippingAggregator = shippingAggregator;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getOrderId() {
		return orderId;
	}

	public void setOrderId(String orderId) {
		this.orderId = orderId;
	}

	public String getTrackingNo() {
		return trackingNo;
	}

	public void setTrackingNo(String trackingNo) {
		this.trackingNo = trackingNo;
	}

	public String getCourierName() {
		return courierName;
	}

	public void setCourierName(String courierName) {
		this.courierName = courierName;
	}

	public String getPaymentMode() {
		return paymentMode;
	}

	public void setPaymentMode(String paymentMode) {
		this.paymentMode = paymentMode;
	}

	public Double getOrderTotal() {
		return orderTotal;
	}

	public void setOrderTotal(Double orderTotal) {
		this.orderTotal = orderTotal;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public LocalDate getCreatedDate() {
		return createdDate;
	}

	public void setCreatedDate(LocalDate createdDate) {
		this.createdDate = createdDate;
	}

	public LocalDateTime getUpdatedDate() {
		return updatedDate;
	}

	public void setUpdatedDate(LocalDateTime updatedDate) {
		this.updatedDate = updatedDate;
	}

	public String getDeliveryStatus() {
		return deliveryStatus;
	}

	public void setDeliveryStatus(String deliveryStatus) {
		this.deliveryStatus = deliveryStatus;
	}

	public Double getShippingCost() {
		return shippingCost;
	}

	public void setShippingCost(Double shippingCost) {
		this.shippingCost = shippingCost;
	}

}

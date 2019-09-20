package com.mbb.mbbplatform.domain;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "shiprocketshipmentreport")
public class ShiprocketShipmentReport {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	private String orderID;

	private String shiprocketCreatedAt;

	private String channel;

	private String status;

	private String channelSKU;

	private String masterSKU;

	private String productName;

	private Long productQuantity;

	private String channelCreatedAt;

	private String customerName;

	private String customerEmail;

	private Long customerMobile;

	private String addressLine1;

	private String addressLine2;

	private String addressCity;

	private String addressState;

	private String addressPincode;

	private String paymentMethod;

	private Double productPrice;

	private Double orderTotal;

	private Double weight;

	private String dimensions;

	private String courierCompany;

	private String aWBCode;

	private String aWBAssignedDate;

	private String pickupLocationID;

	private String pickupAddressName;

	private String pickupscheduledDate;

	private String orderShippedDate;

	private String orderDeliveredDate;

	private String rTOInitiatedDate;

	private String rTODeliveredDate;

	private LocalDateTime createdDate;

	private LocalDateTime updatedDate;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Double getOrderTotal() {
		return orderTotal;
	}

	public void setOrderTotal(Double orderTotal) {
		this.orderTotal = orderTotal;
	}

	public String getOrderID() {
		return orderID;
	}

	public void setOrderID(String orderID) {
		this.orderID = orderID;
	}

	public String getShiprocketCreatedAt() {
		return shiprocketCreatedAt;
	}

	public void setShiprocketCreatedAt(String shiprocketCreatedAt) {
		this.shiprocketCreatedAt = shiprocketCreatedAt;
	}

	public String getChannel() {
		return channel;
	}

	public void setChannel(String channel) {
		this.channel = channel;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getChannelSKU() {
		return channelSKU;
	}

	public void setChannelSKU(String channelSKU) {
		this.channelSKU = channelSKU;
	}

	public String getMasterSKU() {
		return masterSKU;
	}

	public void setMasterSKU(String masterSKU) {
		this.masterSKU = masterSKU;
	}

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public Long getProductQuantity() {
		return productQuantity;
	}

	public void setProductQuantity(Long productQuantity) {
		this.productQuantity = productQuantity;
	}

	public String getChannelCreatedAt() {
		return channelCreatedAt;
	}

	public void setChannelCreatedAt(String channelCreatedAt) {
		this.channelCreatedAt = channelCreatedAt;
	}

	public String getCustomerName() {
		return customerName;
	}

	public void setCustomerName(String customerName) {
		this.customerName = customerName;
	}

	public String getCustomerEmail() {
		return customerEmail;
	}

	public void setCustomerEmail(String customerEmail) {
		this.customerEmail = customerEmail;
	}

	public Long getCustomerMobile() {
		return customerMobile;
	}

	public void setCustomerMobile(Long customerMobile) {
		this.customerMobile = customerMobile;
	}

	public String getAddressLine1() {
		return addressLine1;
	}

	public void setAddressLine1(String addressLine1) {
		this.addressLine1 = addressLine1;
	}

	public String getAddressLine2() {
		return addressLine2;
	}

	public void setAddressLine2(String addressLine2) {
		this.addressLine2 = addressLine2;
	}

	public String getAddressCity() {
		return addressCity;
	}

	public void setAddressCity(String addressCity) {
		this.addressCity = addressCity;
	}

	public String getAddressState() {
		return addressState;
	}

	public void setAddressState(String addressState) {
		this.addressState = addressState;
	}

	public String getAddressPincode() {
		return addressPincode;
	}

	public void setAddressPincode(String addressPincode) {
		this.addressPincode = addressPincode;
	}

	public String getPaymentMethod() {
		return paymentMethod;
	}

	public void setPaymentMethod(String paymentMethod) {
		this.paymentMethod = paymentMethod;
	}

	public Double getProductPrice() {
		return productPrice;
	}

	public void setProductPrice(Double productPrice) {
		this.productPrice = productPrice;
	}

	public Double getWeight() {
		return weight;
	}

	public void setWeight(Double weight) {
		this.weight = weight;
	}

	public String getDimensions() {
		return dimensions;
	}

	public void setDimensions(String dimensions) {
		this.dimensions = dimensions;
	}

	public String getCourierCompany() {
		return courierCompany;
	}

	public void setCourierCompany(String courierCompany) {
		this.courierCompany = courierCompany;
	}

	public String getaWBCode() {
		return aWBCode;
	}

	public void setaWBCode(String aWBCode) {
		this.aWBCode = aWBCode;
	}

	public String getaWBAssignedDate() {
		return aWBAssignedDate;
	}

	public void setaWBAssignedDate(String aWBAssignedDate) {
		this.aWBAssignedDate = aWBAssignedDate;
	}

	public String getPickupLocationID() {
		return pickupLocationID;
	}

	public void setPickupLocationID(String pickupLocationID) {
		this.pickupLocationID = pickupLocationID;
	}

	public String getPickupAddressName() {
		return pickupAddressName;
	}

	public void setPickupAddressName(String pickupAddressName) {
		this.pickupAddressName = pickupAddressName;
	}

	public String getPickupscheduledDate() {
		return pickupscheduledDate;
	}

	public void setPickupscheduledDate(String pickupscheduledDate) {
		this.pickupscheduledDate = pickupscheduledDate;
	}

	public String getOrderShippedDate() {
		return orderShippedDate;
	}

	public void setOrderShippedDate(String orderShippedDate) {
		this.orderShippedDate = orderShippedDate;
	}

	public String getOrderDeliveredDate() {
		return orderDeliveredDate;
	}

	public void setOrderDeliveredDate(String orderDeliveredDate) {
		this.orderDeliveredDate = orderDeliveredDate;
	}

	public String getrTOInitiatedDate() {
		return rTOInitiatedDate;
	}

	public void setrTOInitiatedDate(String rTOInitiatedDate) {
		this.rTOInitiatedDate = rTOInitiatedDate;
	}

	public String getrTODeliveredDate() {
		return rTODeliveredDate;
	}

	public void setrTODeliveredDate(String rTODeliveredDate) {
		this.rTODeliveredDate = rTODeliveredDate;
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

}

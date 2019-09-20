package com.mbb.mbbplatform.domain;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "zeposhipments")
public class ZepoShipments {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	private Double shipmentId;

	private String requestDate;

	private Double zepoUserId;

	private String status;

	private String trackingNo;

	private String trackingStatus;

	private String trackingStatusDate;

	private String pickupNumber;

	private String orderNumber;

	private String courierName;

	private String serviceType;

	private String paymentMode;

	private String paymentType;

	private String zone;

	private Double parentId;

	private String formRequired;

	private String formLink;

	private Boolean insurance;

	private Double totalCharge;

	private Double baseRate;

	private Double fuelsurcharge;

	private Double cODCharge;

	private Double insuranceCharge;

	private Double serviceTax;

	private Double goodsandServiceTax;

	private Double advancementFees;

	private Double entryorOctroiTax;

	private String shippingLabel;

	private String cODLabel;

	private String currentLocation;

	private String messageDetail;

	private Double packageWeight;

	private Double volumetricweight;

	private Double chargedWeight;

	private Double packageLength;

	private Double packageWidth;

	private Double packageHeight;

	private Double packageInvoiceValue;

	private String packageContentDescription;

	private String pickupPincode;

	private String pickupCompanyName;

	private String pickupContactEmail;

	private String pickupContactNumber;

	private String fromAddress1;

	private String fromAddress2;

	private String fromLandmark;

	private String pickupCity;

	private String pickupState;

	private String pickupCountry;

	private String deliveryPincode;

	private String deliveryCompanyName;

	private String deliveryContactEmail;

	private String deliveryContactNumber;

	private String deliveryAddress1;

	private String deliveryAddress2;

	private String deliveryLandmark;

	private String deliveryCity;

	private String deliveryState;

	private String deliveryCountry;

	private String refundStatus;

	private String refundRefNo;

	private String refundedTo;

	private String expectedPickupDate;

	private String actualPickupDate;

	private String actualDeliveryDate;

	private String noofDaysforDelivery;

	private LocalDateTime createdDate;

	private LocalDateTime updatedDate;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Double getShipmentId() {
		return shipmentId;
	}

	public void setShipmentId(Double shipmentId) {
		this.shipmentId = shipmentId;
	}

	public String getRequestDate() {
		return requestDate;
	}

	public void setRequestDate(String requestDate) {
		this.requestDate = requestDate;
	}

	public Double getZepoUserId() {
		return zepoUserId;
	}

	public void setZepoUserId(Double zepoUserId) {
		this.zepoUserId = zepoUserId;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getTrackingNo() {
		return trackingNo;
	}

	public void setTrackingNo(String trackingNo) {
		this.trackingNo = trackingNo;
	}

	public String getTrackingStatus() {
		return trackingStatus;
	}

	public void setTrackingStatus(String trackingStatus) {
		this.trackingStatus = trackingStatus;
	}

	public String getTrackingStatusDate() {
		return trackingStatusDate;
	}

	public void setTrackingStatusDate(String trackingStatusDate) {
		this.trackingStatusDate = trackingStatusDate;
	}

	public String getPickupNumber() {
		return pickupNumber;
	}

	public void setPickupNumber(String pickupNumber) {
		this.pickupNumber = pickupNumber;
	}

	public String getOrderNumber() {
		return orderNumber;
	}

	public void setOrderNumber(String orderNumber) {
		this.orderNumber = orderNumber;
	}

	public String getCourierName() {
		return courierName;
	}

	public void setCourierName(String courierName) {
		this.courierName = courierName;
	}

	public String getServiceType() {
		return serviceType;
	}

	public void setServiceType(String serviceType) {
		this.serviceType = serviceType;
	}

	public String getPaymentMode() {
		return paymentMode;
	}

	public void setPaymentMode(String paymentMode) {
		this.paymentMode = paymentMode;
	}

	public String getPaymentType() {
		return paymentType;
	}

	public void setPaymentType(String paymentType) {
		this.paymentType = paymentType;
	}

	public String getZone() {
		return zone;
	}

	public void setZone(String zone) {
		this.zone = zone;
	}

	public Double getParentId() {
		return parentId;
	}

	public void setParentId(Double parentId) {
		this.parentId = parentId;
	}

	public String getFormRequired() {
		return formRequired;
	}

	public void setFormRequired(String formRequired) {
		this.formRequired = formRequired;
	}

	public String getFormLink() {
		return formLink;
	}

	public void setFormLink(String formLink) {
		this.formLink = formLink;
	}

	public Boolean getInsurance() {
		return insurance;
	}

	public void setInsurance(Boolean insurance) {
		this.insurance = insurance;
	}

	public Double getTotalCharge() {
		return totalCharge;
	}

	public void setTotalCharge(Double totalCharge) {
		this.totalCharge = totalCharge;
	}

	public Double getBaseRate() {
		return baseRate;
	}

	public void setBaseRate(Double baseRate) {
		this.baseRate = baseRate;
	}

	public Double getFuelsurcharge() {
		return fuelsurcharge;
	}

	public void setFuelsurcharge(Double fuelsurcharge) {
		this.fuelsurcharge = fuelsurcharge;
	}

	public Double getcODCharge() {
		return cODCharge;
	}

	public void setcODCharge(Double cODCharge) {
		this.cODCharge = cODCharge;
	}

	public Double getInsuranceCharge() {
		return insuranceCharge;
	}

	public void setInsuranceCharge(Double insuranceCharge) {
		this.insuranceCharge = insuranceCharge;
	}

	public Double getServiceTax() {
		return serviceTax;
	}

	public void setServiceTax(Double serviceTax) {
		this.serviceTax = serviceTax;
	}

	public Double getGoodsandServiceTax() {
		return goodsandServiceTax;
	}

	public void setGoodsandServiceTax(Double goodsandServiceTax) {
		this.goodsandServiceTax = goodsandServiceTax;
	}

	public Double getAdvancementFees() {
		return advancementFees;
	}

	public void setAdvancementFees(Double advancementFees) {
		this.advancementFees = advancementFees;
	}

	public Double getEntryorOctroiTax() {
		return entryorOctroiTax;
	}

	public void setEntryorOctroiTax(Double entryorOctroiTax) {
		this.entryorOctroiTax = entryorOctroiTax;
	}

	public String getShippingLabel() {
		return shippingLabel;
	}

	public void setShippingLabel(String shippingLabel) {
		this.shippingLabel = shippingLabel;
	}

	public String getcODLabel() {
		return cODLabel;
	}

	public void setcODLabel(String cODLabel) {
		this.cODLabel = cODLabel;
	}

	public String getCurrentLocation() {
		return currentLocation;
	}

	public void setCurrentLocation(String currentLocation) {
		this.currentLocation = currentLocation;
	}

	public String getMessageDetail() {
		return messageDetail;
	}

	public void setMessageDetail(String messageDetail) {
		this.messageDetail = messageDetail;
	}

	public Double getPackageWeight() {
		return packageWeight;
	}

	public void setPackageWeight(Double packageWeight) {
		this.packageWeight = packageWeight;
	}

	public Double getVolumetricweight() {
		return volumetricweight;
	}

	public void setVolumetricweight(Double volumetricweight) {
		this.volumetricweight = volumetricweight;
	}

	public Double getChargedWeight() {
		return chargedWeight;
	}

	public void setChargedWeight(Double chargedWeight) {
		this.chargedWeight = chargedWeight;
	}

	public Double getPackageLength() {
		return packageLength;
	}

	public void setPackageLength(Double packageLength) {
		this.packageLength = packageLength;
	}

	public Double getPackageWidth() {
		return packageWidth;
	}

	public void setPackageWidth(Double packageWidth) {
		this.packageWidth = packageWidth;
	}

	public Double getPackageHeight() {
		return packageHeight;
	}

	public void setPackageHeight(Double packageHeight) {
		this.packageHeight = packageHeight;
	}

	public Double getPackageInvoiceValue() {
		return packageInvoiceValue;
	}

	public void setPackageInvoiceValue(Double packageInvoiceValue) {
		this.packageInvoiceValue = packageInvoiceValue;
	}

	public String getPackageContentDescription() {
		return packageContentDescription;
	}

	public void setPackageContentDescription(String packageContentDescription) {
		this.packageContentDescription = packageContentDescription;
	}

	public String getPickupPincode() {
		return pickupPincode;
	}

	public void setPickupPincode(String pickupPincode) {
		this.pickupPincode = pickupPincode;
	}

	public String getPickupCompanyName() {
		return pickupCompanyName;
	}

	public void setPickupCompanyName(String pickupCompanyName) {
		this.pickupCompanyName = pickupCompanyName;
	}

	public String getPickupContactEmail() {
		return pickupContactEmail;
	}

	public void setPickupContactEmail(String pickupContactEmail) {
		this.pickupContactEmail = pickupContactEmail;
	}

	public String getPickupContactNumber() {
		return pickupContactNumber;
	}

	public void setPickupContactNumber(String pickupContactNumber) {
		this.pickupContactNumber = pickupContactNumber;
	}

	public String getFromAddress1() {
		return fromAddress1;
	}

	public void setFromAddress1(String fromAddress1) {
		this.fromAddress1 = fromAddress1;
	}

	public String getFromAddress2() {
		return fromAddress2;
	}

	public void setFromAddress2(String fromAddress2) {
		this.fromAddress2 = fromAddress2;
	}

	public String getFromLandmark() {
		return fromLandmark;
	}

	public void setFromLandmark(String fromLandmark) {
		this.fromLandmark = fromLandmark;
	}

	public String getPickupCity() {
		return pickupCity;
	}

	public void setPickupCity(String pickupCity) {
		this.pickupCity = pickupCity;
	}

	public String getPickupState() {
		return pickupState;
	}

	public void setPickupState(String pickupState) {
		this.pickupState = pickupState;
	}

	public String getPickupCountry() {
		return pickupCountry;
	}

	public void setPickupCountry(String pickupCountry) {
		this.pickupCountry = pickupCountry;
	}

	public String getDeliveryPincode() {
		return deliveryPincode;
	}

	public void setDeliveryPincode(String deliveryPincode) {
		this.deliveryPincode = deliveryPincode;
	}

	public String getDeliveryCompanyName() {
		return deliveryCompanyName;
	}

	public void setDeliveryCompanyName(String deliveryCompanyName) {
		this.deliveryCompanyName = deliveryCompanyName;
	}

	public String getDeliveryContactEmail() {
		return deliveryContactEmail;
	}

	public void setDeliveryContactEmail(String deliveryContactEmail) {
		this.deliveryContactEmail = deliveryContactEmail;
	}

	public String getDeliveryContactNumber() {
		return deliveryContactNumber;
	}

	public void setDeliveryContactNumber(String deliveryContactNumber) {
		this.deliveryContactNumber = deliveryContactNumber;
	}

	public String getDeliveryAddress1() {
		return deliveryAddress1;
	}

	public void setDeliveryAddress1(String deliveryAddress1) {
		this.deliveryAddress1 = deliveryAddress1;
	}

	public String getDeliveryAddress2() {
		return deliveryAddress2;
	}

	public void setDeliveryAddress2(String deliveryAddress2) {
		this.deliveryAddress2 = deliveryAddress2;
	}

	public String getDeliveryLandmark() {
		return deliveryLandmark;
	}

	public void setDeliveryLandmark(String deliveryLandmark) {
		this.deliveryLandmark = deliveryLandmark;
	}

	public String getDeliveryCity() {
		return deliveryCity;
	}

	public void setDeliveryCity(String deliveryCity) {
		this.deliveryCity = deliveryCity;
	}

	public String getDeliveryState() {
		return deliveryState;
	}

	public void setDeliveryState(String deliveryState) {
		this.deliveryState = deliveryState;
	}

	public String getDeliveryCountry() {
		return deliveryCountry;
	}

	public void setDeliveryCountry(String deliveryCountry) {
		this.deliveryCountry = deliveryCountry;
	}

	public String getRefundStatus() {
		return refundStatus;
	}

	public void setRefundStatus(String refundStatus) {
		this.refundStatus = refundStatus;
	}

	public String getRefundRefNo() {
		return refundRefNo;
	}

	public void setRefundRefNo(String refundRefNo) {
		this.refundRefNo = refundRefNo;
	}

	public String getRefundedTo() {
		return refundedTo;
	}

	public void setRefundedTo(String refundedTo) {
		this.refundedTo = refundedTo;
	}

	public String getExpectedPickupDate() {
		return expectedPickupDate;
	}

	public void setExpectedPickupDate(String expectedPickupDate) {
		this.expectedPickupDate = expectedPickupDate;
	}

	public String getActualPickupDate() {
		return actualPickupDate;
	}

	public void setActualPickupDate(String actualPickupDate) {
		this.actualPickupDate = actualPickupDate;
	}

	public String getActualDeliveryDate() {
		return actualDeliveryDate;
	}

	public void setActualDeliveryDate(String actualDeliveryDate) {
		this.actualDeliveryDate = actualDeliveryDate;
	}

	public String getNoofDaysforDelivery() {
		return noofDaysforDelivery;
	}

	public void setNoofDaysforDelivery(String noofDaysforDelivery) {
		this.noofDaysforDelivery = noofDaysforDelivery;
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

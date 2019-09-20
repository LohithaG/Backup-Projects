package com.mbb.mbbplatform.domain;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "shippingpackage")
public class ShippingPackage {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	private String shippingPackageNo;

	private String status;

	private String invoiceCode;

	private String shippingProvider;

	private String shippingMethod;

	private Boolean cashOnDelivery;

	private String shippingAddressName;

	private String shippingAddressLine1;

	private String shippingAddressLine2;

	private String shippingAddressCity;

	private String shippingAddressState;

	private String shippingAddressPincode;

	private String shippingAddressPhone;

	private String picklistNumber;

	private String saleOrderCode;

	private String zone;

	private String trackingNumber;

	private Long actualWeight;

	private String shippingCharges;

	private String codCharges;

	private String additionalInfo;

	private Double totalPrice;

	private Long noOfItems;

	private Long noOfBoxes;

	private String packingCost;

	private String packageCode;

	private Long length;

	private Long width;

	private Long height;

	private LocalDateTime created;

	private LocalDateTime dispatchTime;

	private String shippingManifestCode;

	private String returnTime;

	private String shipmentTracking;

	private LocalDateTime deliveryTime;

	private LocalDateTime updated;

	private String channel;

	private Double collectableAmount;

	private LocalDateTime createdDate;

	private LocalDateTime updatedDate;

	private LocalDateTime dateInCSvfile;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getShippingPackageNo() {
		return shippingPackageNo;
	}

	public void setShippingPackageNo(String shippingPackageNo) {
		this.shippingPackageNo = shippingPackageNo;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getInvoiceCode() {
		return invoiceCode;
	}

	public void setInvoiceCode(String invoiceCode) {
		this.invoiceCode = invoiceCode;
	}

	public String getShippingProvider() {
		return shippingProvider;
	}

	public void setShippingProvider(String shippingProvider) {
		this.shippingProvider = shippingProvider;
	}

	public String getShippingMethod() {
		return shippingMethod;
	}

	public void setShippingMethod(String shippingMethod) {
		this.shippingMethod = shippingMethod;
	}

	public Boolean getCashOnDelivery() {
		return cashOnDelivery;
	}

	public void setCashOnDelivery(Boolean cashOnDelivery) {
		this.cashOnDelivery = cashOnDelivery;
	}

	public String getShippingAddressName() {
		return shippingAddressName;
	}

	public void setShippingAddressName(String shippingAddressName) {
		this.shippingAddressName = shippingAddressName;
	}

	public String getShippingAddressLine1() {
		return shippingAddressLine1;
	}

	public void setShippingAddressLine1(String shippingAddressLine1) {
		this.shippingAddressLine1 = shippingAddressLine1;
	}

	public String getShippingAddressLine2() {
		return shippingAddressLine2;
	}

	public void setShippingAddressLine2(String shippingAddressLine2) {
		this.shippingAddressLine2 = shippingAddressLine2;
	}

	public String getShippingAddressCity() {
		return shippingAddressCity;
	}

	public void setShippingAddressCity(String shippingAddressCity) {
		this.shippingAddressCity = shippingAddressCity;
	}

	public String getShippingAddressState() {
		return shippingAddressState;
	}

	public void setShippingAddressState(String shippingAddressState) {
		this.shippingAddressState = shippingAddressState;
	}

	public String getShippingAddressPincode() {
		return shippingAddressPincode;
	}

	public void setShippingAddressPincode(String shippingAddressPincode) {
		this.shippingAddressPincode = shippingAddressPincode;
	}

	public String getShippingAddressPhone() {
		return shippingAddressPhone;
	}

	public void setShippingAddressPhone(String shippingAddressPhone) {
		this.shippingAddressPhone = shippingAddressPhone;
	}

	public String getPicklistNumber() {
		return picklistNumber;
	}

	public void setPicklistNumber(String picklistNumber) {
		this.picklistNumber = picklistNumber;
	}

	public String getSaleOrderCode() {
		return saleOrderCode;
	}

	public void setSaleOrderCode(String saleOrderCode) {
		this.saleOrderCode = saleOrderCode;
	}

	public String getZone() {
		return zone;
	}

	public void setZone(String zone) {
		this.zone = zone;
	}

	public String getTrackingNumber() {
		return trackingNumber;
	}

	public void setTrackingNumber(String trackingNumber) {
		this.trackingNumber = trackingNumber;
	}

	public Long getActualWeight() {
		return actualWeight;
	}

	public void setActualWeight(Long actualWeight) {
		this.actualWeight = actualWeight;
	}

	public String getShippingCharges() {
		return shippingCharges;
	}

	public void setShippingCharges(String shippingCharges) {
		this.shippingCharges = shippingCharges;
	}

	public String getCodCharges() {
		return codCharges;
	}

	public void setCodCharges(String codCharges) {
		this.codCharges = codCharges;
	}

	public String getAdditionalInfo() {
		return additionalInfo;
	}

	public void setAdditionalInfo(String additionalInfo) {
		this.additionalInfo = additionalInfo;
	}

	public Double getTotalPrice() {
		return totalPrice;
	}

	public void setTotalPrice(Double totalPrice) {
		this.totalPrice = totalPrice;
	}

	public Long getNoOfItems() {
		return noOfItems;
	}

	public void setNoOfItems(Long noOfItems) {
		this.noOfItems = noOfItems;
	}

	public Long getNoOfBoxes() {
		return noOfBoxes;
	}

	public void setNoOfBoxes(Long noOfBoxes) {
		this.noOfBoxes = noOfBoxes;
	}

	public String getPackingCost() {
		return packingCost;
	}

	public void setPackingCost(String packingCost) {
		this.packingCost = packingCost;
	}

	public String getPackageCode() {
		return packageCode;
	}

	public void setPackageCode(String packageCode) {
		this.packageCode = packageCode;
	}

	public Long getLength() {
		return length;
	}

	public void setLength(Long length) {
		this.length = length;
	}


	public Long getHeight() {
		return height;
	}

	public void setHeight(Long height) {
		this.height = height;
	}

	public LocalDateTime getCreated() {
		return created;
	}

	public void setCreated(LocalDateTime created) {
		this.created = created;
	}

	public LocalDateTime getDispatchTime() {
		return dispatchTime;
	}

	public void setDispatchTime(LocalDateTime dispatchTime) {
		this.dispatchTime = dispatchTime;
	}

	public String getShippingManifestCode() {
		return shippingManifestCode;
	}

	public void setShippingManifestCode(String shippingManifestCode) {
		this.shippingManifestCode = shippingManifestCode;
	}

	public String getReturnTime() {
		return returnTime;
	}

	public Long getWidth() {
		return width;
	}

	public void setWidth(Long width) {
		this.width = width;
	}

	public void setReturnTime(String returnTime) {
		this.returnTime = returnTime;
	}

	public String getShipmentTracking() {
		return shipmentTracking;
	}

	public void setShipmentTracking(String shipmentTracking) {
		this.shipmentTracking = shipmentTracking;
	}

	public LocalDateTime getDeliveryTime() {
		return deliveryTime;
	}

	public void setDeliveryTime(LocalDateTime deliveryTime) {
		this.deliveryTime = deliveryTime;
	}

	public LocalDateTime getUpdated() {
		return updated;
	}

	public void setUpdated(LocalDateTime updated) {
		this.updated = updated;
	}

	public String getChannel() {
		return channel;
	}

	public void setChannel(String channel) {
		this.channel = channel;
	}

	public Double getCollectableAmount() {
		return collectableAmount;
	}

	public void setCollectableAmount(Double collectableAmount) {
		this.collectableAmount = collectableAmount;
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

package com.mbb.mbbplatform.domain;

import java.time.LocalDateTime;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "shippingmanifest")
public class ShippingManifest {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	private String channelName;
	
	private String manifestNo;
	
	private String manifestStatus;
	
	private String trackingNumber;
	
	private String orderNumber;
	
	private LocalDateTime created;
	
	private String shippingProviderName;
	
	private String username;
	
	private String shippingCity;
	
	private String shippingRegion;
	
	private String shippingPackageCode;
	
	private String shippingPackageType;
	
	private String length;
	
	private Long width;
	
	private Long height;
	
	private Long noOfProducts;
	
	private Long noOfBoxes;
	
	private Long weight;
	
	private Long shippingCharges;
	
	private Double amount;
	
	private String comments;
	
	private String shippingMethod;
	
	private LocalDateTime updated;
	
	private LocalDateTime createdDate;

	private LocalDateTime updatedDate;

	private LocalDateTime dateInCSvfile;

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

	public String getManifestNo() {
		return manifestNo;
	}

	public void setManifestNo(String manifestNo) {
		this.manifestNo = manifestNo;
	}

	public String getManifestStatus() {
		return manifestStatus;
	}

	public void setManifestStatus(String manifestStatus) {
		this.manifestStatus = manifestStatus;
	}

	public String getTrackingNumber() {
		return trackingNumber;
	}

	public void setTrackingNumber(String trackingNumber) {
		this.trackingNumber = trackingNumber;
	}

	public String getOrderNumber() {
		return orderNumber;
	}

	public void setOrderNumber(String orderNumber) {
		this.orderNumber = orderNumber;
	}

	public LocalDateTime getCreated() {
		return created;
	}

	public void setCreated(LocalDateTime created) {
		this.created = created;
	}

	public String getShippingProviderName() {
		return shippingProviderName;
	}

	public void setShippingProviderName(String shippingProviderName) {
		this.shippingProviderName = shippingProviderName;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getShippingCity() {
		return shippingCity;
	}

	public void setShippingCity(String shippingCity) {
		this.shippingCity = shippingCity;
	}

	public String getShippingRegion() {
		return shippingRegion;
	}

	public void setShippingRegion(String shippingRegion) {
		this.shippingRegion = shippingRegion;
	}

	public String getShippingPackageCode() {
		return shippingPackageCode;
	}

	public void setShippingPackageCode(String shippingPackageCode) {
		this.shippingPackageCode = shippingPackageCode;
	}

	public String getShippingPackageType() {
		return shippingPackageType;
	}

	public void setShippingPackageType(String shippingPackageType) {
		this.shippingPackageType = shippingPackageType;
	}

	public String getLength() {
		return length;
	}

	public void setLength(String length) {
		this.length = length;
	}

	public Long getWidth() {
		return width;
	}

	public void setWidth(Long width) {
		this.width = width;
	}

	public Long getHeight() {
		return height;
	}

	public void setHeight(Long height) {
		this.height = height;
	}

	public Long getNoOfProducts() {
		return noOfProducts;
	}

	public void setNoOfProducts(Long noOfProducts) {
		this.noOfProducts = noOfProducts;
	}

	public Long getNoOfBoxes() {
		return noOfBoxes;
	}

	public void setNoOfBoxes(Long noOfBoxes) {
		this.noOfBoxes = noOfBoxes;
	}

	public Long getWeight() {
		return weight;
	}

	public void setWeight(Long weight) {
		this.weight = weight;
	}

	public Long getShippingCharges() {
		return shippingCharges;
	}

	public void setShippingCharges(Long shippingCharges) {
		this.shippingCharges = shippingCharges;
	}

	public Double getAmount() {
		return amount;
	}

	public void setAmount(Double amount) {
		this.amount = amount;
	}

	public String getComments() {
		return comments;
	}

	public void setComments(String comments) {
		this.comments = comments;
	}

	public String getShippingMethod() {
		return shippingMethod;
	}

	public void setShippingMethod(String shippingMethod) {
		this.shippingMethod = shippingMethod;
	}

	public LocalDateTime getUpdated() {
		return updated;
	}

	public void setUpdated(LocalDateTime updated) {
		this.updated = updated;
	}

}

package com.mbb.mbbplatform.domain;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "amazoncoddumpremittance")
public class AmazonCodRemittanceDump {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	private String dateTime;
	private String settlementId;

	private String type;
	private String orderId;
	private String sku;
	private String description;
	private Long quantity;
	private String marketPlace;
	private String fulfillment;
	private String orderCity;
	private String orderSate;
	private Long orderPostal;
	private Double productSales;
	private Double shippingCredits;
	private Double promotionalRebates;
	private Double totalSales;
	private Double cgst;
	private Double sgst;
	private Double igst;
	private Double sellingFees;
	private Double fbaFees;
	private Double otherTransactionFees;
	private String other;
	private String total;
	private LocalDateTime createdDate;
	private LocalDateTime updatedDate;
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
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getDateTime() {
		return dateTime;
	}
	public void setDateTime(String dateTime) {
		this.dateTime = dateTime;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getOrderId() {
		return orderId;
	}
	public void setOrderId(String orderId) {
		this.orderId = orderId;
	}
	public String getSku() {
		return sku;
	}
	public String getSettlementId() {
		return settlementId;
	}
	public void setSettlementId(String settlementId) {
		this.settlementId = settlementId;
	}
	public void setSku(String sku) {
		this.sku = sku;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public Long getQuantity() {
		return quantity;
	}
	public void setQuantity(Long quantity) {
		this.quantity = quantity;
	}
	public String getMarketPlace() {
		return marketPlace;
	}
	public void setMarketPlace(String marketPlace) {
		this.marketPlace = marketPlace;
	}
	public String getFulfillment() {
		return fulfillment;
	}
	public void setFulfillment(String fulfillment) {
		this.fulfillment = fulfillment;
	}
	public String getOrderCity() {
		return orderCity;
	}
	public void setOrderCity(String orderCity) {
		this.orderCity = orderCity;
	}
	public String getOrderSate() {
		return orderSate;
	}
	public void setOrderSate(String orderSate) {
		this.orderSate = orderSate;
	}
	public Long getOrderPostal() {
		return orderPostal;
	}
	public void setOrderPostal(Long orderPostal) {
		this.orderPostal = orderPostal;
	}
	public Double getProductSales() {
		return productSales;
	}
	public void setProductSales(Double productSales) {
		this.productSales = productSales;
	}
	public Double getShippingCredits() {
		return shippingCredits;
	}
	public void setShippingCredits(Double shippingCredits) {
		this.shippingCredits = shippingCredits;
	}
	public Double getPromotionalRebates() {
		return promotionalRebates;
	}
	public void setPromotionalRebates(Double promotionalRebates) {
		this.promotionalRebates = promotionalRebates;
	}
	public Double getTotalSales() {
		return totalSales;
	}
	public void setTotalSales(Double totalSales) {
		this.totalSales = totalSales;
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
	public Double getIgst() {
		return igst;
	}
	public void setIgst(Double igst) {
		this.igst = igst;
	}
	public Double getSellingFees() {
		return sellingFees;
	}
	public void setSellingFees(Double sellingFees) {
		this.sellingFees = sellingFees;
	}
	public Double getFbaFees() {
		return fbaFees;
	}
	public void setFbaFees(Double fbaFees) {
		this.fbaFees = fbaFees;
	}
	public Double getOtherTransactionFees() {
		return otherTransactionFees;
	}
	public void setOtherTransactionFees(Double otherTransactionFees) {
		this.otherTransactionFees = otherTransactionFees;
	}
	public String getOther() {
		return other;
	}
	public void setOther(String other) {
		this.other = other;
	}
	public String getTotal() {
		return total;
	}
	public void setTotal(String total) {
		this.total = total;
	}






}

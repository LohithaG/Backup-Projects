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
@Table(name = "spareparts")
public class SpareParts {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	@CreationTimestamp
	private ZonedDateTime createdTime;
	
	@UpdateTimestamp
	private ZonedDateTime updatedTime;
	private String sku;
	private String productName;
	private Double price;

	@ManyToOne
	@JoinColumn(name = "quotationDetailsId")
	private QuotationDetails quotationDetailsId;
	
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
	public String getSku() {
		return sku;
	}
	public void setSku(String sku) {
		this.sku = sku;
	}
	public String getProductName() {
		return productName;
	}
	public void setProductName(String productName) {
		this.productName = productName;
	}
	public Double getPrice() {
		return price;
	}
	public void setPrice(Double price) {
		this.price = price;
	}
	
	public QuotationDetails getQuotationDetailsId() {
		return quotationDetailsId;
	}
	public void setQuotationDetailsId(QuotationDetails quotationDetailsId) {
		this.quotationDetailsId = quotationDetailsId;
	}
	
	
}

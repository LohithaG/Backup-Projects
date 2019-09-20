package com.mbb.mbbplatform.domain;

import java.time.LocalDateTime;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "category")
public class Category {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	private String categoryCode;

	private String categoryName;

	private Double hsnCode;

	private Double gstTaxType;

	private LocalDateTime updatedDate;

	private String taxType;

	private LocalDateTime createdDate;

	private LocalDateTime dateInCSvfile;

	private LocalDateTime created;

	private LocalDateTime updated;

	public String getCategoryName() {
		return categoryName;
	}

	public void setCategoryName(String categoryName) {
		this.categoryName = categoryName;
	}

	public Double getHsnCode() {
		return hsnCode;
	}

	public void setHsnCode(Double hsnCode) {
		this.hsnCode = hsnCode;
	}

	public Double getGstTaxType() {
		return gstTaxType;
	}

	public void setGstTaxType(Double gstTaxType) {
		this.gstTaxType = gstTaxType;
	}

	public void setCategoryCode(String categoryCode) {
		this.categoryCode = categoryCode;
	}

	public void setUpdated(LocalDateTime updated) {
		this.updated = updated;
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

	public void setCreated(LocalDateTime created) {
		this.created = created;
	}

	public LocalDateTime getDateInCSvfile() {
		return dateInCSvfile;
	}

	public void setDateInCSvfile(LocalDateTime dateInCSvfile) {
		this.dateInCSvfile = dateInCSvfile;
	}

	public String getTaxType() {
		return taxType;
	}

	public void setTaxType(String taxType) {
		this.taxType = taxType;
	}

	public LocalDateTime getCreated() {
		return created;
	}

	public void setUpdatedDate(LocalDateTime updatedDate) {
		this.updatedDate = updatedDate;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public LocalDateTime getUpdated() {
		return updated;
	}

	public Long getId() {
		return id;
	}

	public String getCategoryCode() {
		return categoryCode;
	}

}

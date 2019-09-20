package com.mbb.mbbplatform.domain;

import java.time.LocalDateTime;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "itemmaster")
public class ItemMaster {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	private String categoryCode;

	private String productCode;

	private String name;

	private String description;

	private String scanIdentifier;

	private boolean requiresCustomization;

	private Long length;

	private Long width;

	private Long height;

	private Long weight;

	private String ean;

	private String upc;

	private String isbn;

	private String color;

	private String size;

	private String brand;

	private String itemDetailFields;

	private String tags;

	private String imageUrl;

	private String productPageUrl;

	private String taxTypeCode;

	private Long gstTaxTypeCode;

	private Double basePrice;

	private Double costPrice;

	private String tat;

	private String mrp;

	private LocalDateTime updated;

	private String categoryName;

	private boolean enabled;

	private String type;

	private String componentProductCode;

	private Double componentQuantity;

	private Double componentPrice;

	private Double hsnCode;

	private LocalDateTime createdDate;

	private LocalDateTime updatedDate;

	private LocalDateTime dateInCSvfile;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getCategoryCode() {
		return categoryCode;
	}

	public void setCategoryCode(String categoryCode) {
		this.categoryCode = categoryCode;
	}

	public String getProductCode() {
		return productCode;
	}

	public void setProductCode(String productCode) {
		this.productCode = productCode;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getScanIdentifier() {
		return scanIdentifier;
	}

	public void setScanIdentifier(String scanIdentifier) {
		this.scanIdentifier = scanIdentifier;
	}

	public boolean isRequiresCustomization() {
		return requiresCustomization;
	}

	public void setRequiresCustomization(boolean requiresCustomization) {
		this.requiresCustomization = requiresCustomization;
	}

	public Long getWeight() {
		return weight;
	}

	public void setWeight(Long weight) {
		this.weight = weight;
	}

	public String getEan() {
		return ean;
	}

	public void setEan(String ean) {
		this.ean = ean;
	}

	public String getUpc() {
		return upc;
	}

	public void setUpc(String upc) {
		this.upc = upc;
	}

	public String getIsbn() {
		return isbn;
	}

	public void setIsbn(String isbn) {
		this.isbn = isbn;
	}

	public String getColor() {
		return color;
	}

	public void setColor(String color) {
		this.color = color;
	}

	public String getSize() {
		return size;
	}

	public void setSize(String size) {
		this.size = size;
	}

	public String getBrand() {
		return brand;
	}

	public void setBrand(String brand) {
		this.brand = brand;
	}

	public String getItemDetailFields() {
		return itemDetailFields;
	}

	public void setItemDetailFields(String itemDetailFields) {
		this.itemDetailFields = itemDetailFields;
	}

	public String getTags() {
		return tags;
	}

	public void setTags(String tags) {
		this.tags = tags;
	}

	public String getImageUrl() {
		return imageUrl;
	}

	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}

	public String getProductPageUrl() {
		return productPageUrl;
	}

	public void setProductPageUrl(String productPageUrl) {
		this.productPageUrl = productPageUrl;
	}

	public String getTaxTypeCode() {
		return taxTypeCode;
	}

	public void setTaxTypeCode(String taxTypeCode) {
		this.taxTypeCode = taxTypeCode;
	}

	public Long getGstTaxTypeCode() {
		return gstTaxTypeCode;
	}

	public void setGstTaxTypeCode(Long gstTaxTypeCode) {
		this.gstTaxTypeCode = gstTaxTypeCode;
	}

	public Double getBasePrice() {
		return basePrice;
	}

	public void setBasePrice(Double basePrice) {
		this.basePrice = basePrice;
	}

	public Double getCostPrice() {
		return costPrice;
	}

	public void setCostPrice(Double costPrice) {
		this.costPrice = costPrice;
	}

	public String getTat() {
		return tat;
	}

	public void setTat(String tat) {
		this.tat = tat;
	}

	public String getMrp() {
		return mrp;
	}

	public void setMrp(String mrp) {
		this.mrp = mrp;
	}

	public LocalDateTime getUpdated() {
		return updated;
	}

	public void setUpdated(LocalDateTime updated) {
		this.updated = updated;
	}

	public String getCategoryName() {
		return categoryName;
	}

	public void setCategoryName(String categoryName) {
		this.categoryName = categoryName;
	}

	public boolean isEnabled() {
		return enabled;
	}

	public void setEnabled(boolean enabled) {
		this.enabled = enabled;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getComponentProductCode() {
		return componentProductCode;
	}

	public void setComponentProductCode(String componentProductCode) {
		this.componentProductCode = componentProductCode;
	}

	public Double getComponentQuantity() {
		return componentQuantity;
	}

	public void setComponentQuantity(Double componentQuantity) {
		this.componentQuantity = componentQuantity;
	}

	public Double getComponentPrice() {
		return componentPrice;
	}

	public void setComponentPrice(Double componentPrice) {
		this.componentPrice = componentPrice;
	}

	public Double getHsnCode() {
		return hsnCode;
	}

	public void setHsnCode(Double hsnCode) {
		this.hsnCode = hsnCode;
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

	public void setWidth(Long width) {
		this.width = width;
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

	public Long getWidth() {
		return width;
	}

	public void setHeight(Long height) {
		this.height = height;
	}

}

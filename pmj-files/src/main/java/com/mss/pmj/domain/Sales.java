package com.mss.pmj.domain;

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
@Table(name = "sales")
public class Sales {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	private String docNumber;

	private Long variantId;

	private String transactionDate;

	@ManyToOne
	@JoinColumn(name = "empId")
	private Employee empId;

	private String customerName;

	private String itemName;

	private String itemType;

	private String purity;

	private Double grossWeight;

	private Integer pieces;

	private Double netWeight;

	private Double stoneWeight;

	private Integer stonePieces;

	private Integer diamondPieces;

	private Double diamondWeight;

	private Double goldRate;

	private Double TotalSoldAmount;

	private Double makingRate;

	private Double wastageRate;

	private String labelNo;

	private Double costPrice;

	@ManyToOne
	private Location location;

	@CreationTimestamp
	private ZonedDateTime createdTime;

	@UpdateTimestamp
	private ZonedDateTime updatedTime;

	private Double tagPrice;

	public Double getCostPrice() {
		return costPrice;
	}

	public void setCostPrice(Double costPrice) {
		this.costPrice = costPrice;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getDocNumber() {
		return docNumber;
	}

	public void setDocNumber(String docNumber) {
		this.docNumber = docNumber;
	}

	public Long getVariantId() {
		return variantId;
	}

	public void setVariantId(Long variantId) {
		this.variantId = variantId;
	}

	public String getTransactionDate() {
		return transactionDate;
	}

	public void setTransactionDate(String transactionDate) {
		this.transactionDate = transactionDate;
	}

	public Employee getEmpId() {
		return empId;
	}

	public void setEmpId(Employee empId) {
		this.empId = empId;
	}

	public String getCustomerName() {
		return customerName;
	}

	public void setCustomerName(String customerName) {
		this.customerName = customerName;
	}

	public String getItemName() {
		return itemName;
	}

	public void setItemName(String itemName) {
		this.itemName = itemName;
	}

	public String getItemType() {
		return itemType;
	}

	public void setItemType(String itemType) {
		this.itemType = itemType;
	}

	public String getPurity() {
		return purity;
	}

	public void setPurity(String purity) {
		this.purity = purity;
	}

	public Double getGrossWeight() {
		return grossWeight;
	}

	public void setGrossWeight(Double grossWeight) {
		this.grossWeight = grossWeight;
	}

	public Integer getPieces() {
		return pieces;
	}

	public void setPieces(Integer pieces) {
		this.pieces = pieces;
	}

	public Double getNetWeight() {
		return netWeight;
	}

	public void setNetWeight(Double netWeight) {
		this.netWeight = netWeight;
	}

	public Double getStoneWeight() {
		return stoneWeight;
	}

	public void setStoneWeight(Double stoneWeight) {
		this.stoneWeight = stoneWeight;
	}

	public Integer getStonePieces() {
		return stonePieces;
	}

	public void setStonePieces(Integer stonePieces) {
		this.stonePieces = stonePieces;
	}

	public Integer getDiamondPieces() {
		return diamondPieces;
	}

	public void setDiamondPieces(Integer diamondPieces) {
		this.diamondPieces = diamondPieces;
	}

	public Double getDiamondWeight() {
		return diamondWeight;
	}

	public void setDiamondWeight(Double diamondWeight) {
		this.diamondWeight = diamondWeight;
	}

	public Double getGoldRate() {
		return goldRate;
	}

	public void setGoldRate(Double goldRate) {
		this.goldRate = goldRate;
	}

	public Double getTotalSoldAmount() {
		return TotalSoldAmount;
	}

	public void setTotalSoldAmount(Double totalSoldAmount) {
		TotalSoldAmount = totalSoldAmount;
	}

	public Double getMakingRate() {
		return makingRate;
	}

	public void setMakingRate(Double makingRate) {
		this.makingRate = makingRate;
	}

	public Double getWastageRate() {
		return wastageRate;
	}

	public void setWastageRate(Double wastageRate) {
		this.wastageRate = wastageRate;
	}

	public Location getLocation() {
		return location;
	}

	public void setLocation(Location location) {
		this.location = location;
	}

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

	public Double getTagPrice() {
		return tagPrice;
	}

	public void setTagPrice(Double tagPrice) {
		this.tagPrice = tagPrice;
	}

	public String getLabelNo() {
		return labelNo;
	}

	public void setLabelNo(String labelNo) {
		this.labelNo = labelNo;
	}

}

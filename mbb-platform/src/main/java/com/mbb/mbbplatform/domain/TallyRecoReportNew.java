package com.mbb.mbbplatform.domain;

import java.time.LocalDate;
import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tallyrecoreportnew")
public class TallyRecoReportNew {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	private LocalDate settlementDate;

	private String channelName;

	private Double settlementAmount;

	private String transactionType;

	private String settlementId;

	private String orderId;

	private String orderItemId;

	private Double sellingPrice;

	private Double shippingCharge;

	private Double commission;

	private Double shippingFee;

	private Double fixedFee;

	private Double reverseShippingFee;

	private Double channelPenalty;

	private Double rewards;

	private Double discount;

	private Double otherIncentive;

	private Double additionalFee;

	private Double tax;

	private LocalDateTime createdDate;

	private LocalDateTime updatedDate;

	private LocalDateTime dateInCSvfile;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public LocalDate getSettlementDate() {
		return settlementDate;
	}

	public void setSettlementDate(LocalDate settlementDate) {
		this.settlementDate = settlementDate;
	}

	public String getChannelName() {
		return channelName;
	}

	public void setChannelName(String channelName) {
		this.channelName = channelName;
	}

	public Double getSettlementAmount() {
		return settlementAmount;
	}

	public void setSettlementAmount(Double settlementAmount) {
		this.settlementAmount = settlementAmount;
	}

	public String getTransactionType() {
		return transactionType;
	}

	public void setTransactionType(String transactionType) {
		this.transactionType = transactionType;
	}

	public String getSettlementId() {
		return settlementId;
	}

	public void setSettlementId(String settlementId) {
		this.settlementId = settlementId;
	}

	public String getOrderId() {
		return orderId;
	}

	public void setOrderId(String orderId) {
		this.orderId = orderId;
	}

	public String getOrderItemId() {
		return orderItemId;
	}

	public void setOrderItemId(String orderItemId) {
		this.orderItemId = orderItemId;
	}

	public Double getSellingPrice() {
		return sellingPrice;
	}

	public void setSellingPrice(Double sellingPrice) {
		this.sellingPrice = sellingPrice;
	}

	public Double getShippingCharge() {
		return shippingCharge;
	}

	public void setShippingCharge(Double shippingCharge) {
		this.shippingCharge = shippingCharge;
	}

	public Double getCommission() {
		return commission;
	}

	public void setCommission(Double commission) {
		this.commission = commission;
	}

	public Double getShippingFee() {
		return shippingFee;
	}

	public void setShippingFee(Double shippingFee) {
		this.shippingFee = shippingFee;
	}

	public Double getFixedFee() {
		return fixedFee;
	}

	public void setFixedFee(Double fixedFee) {
		this.fixedFee = fixedFee;
	}

	public Double getReverseShippingFee() {
		return reverseShippingFee;
	}

	public void setReverseShippingFee(Double reverseShippingFee) {
		this.reverseShippingFee = reverseShippingFee;
	}

	public Double getChannelPenalty() {
		return channelPenalty;
	}

	public void setChannelPenalty(Double channelPenalty) {
		this.channelPenalty = channelPenalty;
	}

	public Double getRewards() {
		return rewards;
	}

	public void setRewards(Double rewards) {
		this.rewards = rewards;
	}

	public Double getDiscount() {
		return discount;
	}

	public void setDiscount(Double discount) {
		this.discount = discount;
	}

	public Double getOtherIncentive() {
		return otherIncentive;
	}

	public void setOtherIncentive(Double otherIncentive) {
		this.otherIncentive = otherIncentive;
	}

	public Double getAdditionalFee() {
		return additionalFee;
	}

	public void setAdditionalFee(Double additionalFee) {
		this.additionalFee = additionalFee;
	}

	public LocalDateTime getCreatedDate() {
		return createdDate;
	}

	public Double getTax() {
		return tax;
	}

	public void setTax(Double tax) {
		this.tax = tax;
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

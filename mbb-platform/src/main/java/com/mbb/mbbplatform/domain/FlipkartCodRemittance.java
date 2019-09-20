package com.mbb.mbbplatform.domain;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "flipkartcodremittance")
public class FlipkartCodRemittance {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	private String channel;

	public String getChannel() {
		return channel;
	}

	public void setChannel(String channel) {
		this.channel = channel;
	}
	private Double totalTaxes;
private double marketPlaceFeeAndTaxes;
	private String neftId;
	private String neftType;
	private String settlementDate;
	private Double settledAmount;
	private String orderId;
	private String orderItemId;
	private Double saleAmount;
	private Double totalOfferAmount;
	private Double myShare;
	private Double customerShippingAmount;
	private Double marketPlaceFee;
	private Double taxCollectedAtSource;
	private Double taxes;
	private Double protectionFund;
	private String refund;
	private String orderDate;
	private String dispatchDate;
	private String fulfillmentType;
	private String sellerSku;
	private Long quantity;
	private String productName;
	private String additionalInformation;
	private String returnType;
	private String itemReturnStatus;
	private Double orderItemSaleAmount;
	private Double orderItemTotalOffer;
	private Double orderItemMyShare;
	private String tier;
	private Long commissionRate;
	private String commission;
	private Double commissionFeeWaiver;
	private Double collectionFee;
	private Double collectionFeeWaiver;
	private String fixedFee;
	private Double fixedFeeWaiver;
	private Double noCostFeeReiumbersment;
	private Double installationFee;
	private Double unInstallationFee;
	private Double techVisitFee;
	private Double insatllationAndPackagingFee;
	private Double pickAndPackFee;
	private Double pickAndPackFeeWaiver;
	private Double customerShippingFee;
	private Double shippingCharges;
	private Double shippingFeeWaiver;
	private Double reverseShippingFee;
	private Double franciseFee;
	private Double productCancalletionFee;
	private Double serviceCancalletionFee;
	private Double feeDiscount;
	private String multipartShipment;
	private Double profilerDeadWeight;
	private Double sellerDeadWeight;
	private String lengthBreadthHeight;
	private Double volumetricWeight;
	private String chargableWeightType;
	private String chargableWeightSlab;
	private String shippingZone;
	private String type;

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public Double getMyShare() {
		return myShare;
	}

	public double getMarketPlaceFeeAndTaxes() {
		return marketPlaceFeeAndTaxes;
	}

	public void setMarketPlaceFeeAndTaxes(double marketPlaceFeeAndTaxes) {
		this.marketPlaceFeeAndTaxes = marketPlaceFeeAndTaxes;
	}

	public void setMyShare(Double myShare) {
		this.myShare = myShare;
	}

	public Double getTotalTaxes() {
		return totalTaxes;
	}

	public void setTotalTaxes(Double totalTaxes) {
		this.totalTaxes = totalTaxes;
	}

	public Double getMarketPlaceFee() {
		return marketPlaceFee;
	}

	public void setMarketPlaceFee(Double marketPlaceFee) {
		this.marketPlaceFee = marketPlaceFee;
	}

	public Double getProtectionFund() {
		return protectionFund;
	}

	public void setProtectionFund(Double protectionFund) {
		this.protectionFund = protectionFund;
	}

	public String getAdditionalInformation() {
		return additionalInformation;
	}

	public void setAdditionalInformation(String additionalInformation) {
		this.additionalInformation = additionalInformation;
	}

	public Double getOrderItemSaleAmount() {
		return orderItemSaleAmount;
	}

	public void setOrderItemSaleAmount(Double orderItemSaleAmount) {
		this.orderItemSaleAmount = orderItemSaleAmount;
	}

	public Double getOrderItemTotalOffer() {
		return orderItemTotalOffer;
	}

	public void setOrderItemTotalOffer(Double orderItemTotalOffer) {
		this.orderItemTotalOffer = orderItemTotalOffer;
	}

	public Double getOrderItemMyShare() {
		return orderItemMyShare;
	}

	public void setOrderItemMyShare(Double orderItemMyShare) {
		this.orderItemMyShare = orderItemMyShare;
	}

	public String getTier() {
		return tier;
	}

	public void setTier(String tier) {
		this.tier = tier;
	}

	public Long getCommissionRate() {
		return commissionRate;
	}

	public void setCommissionRate(Long commissionRate) {
		this.commissionRate = commissionRate;
	}

	public String getCommission() {
		return commission;
	}

	public void setCommission(String commission) {
		this.commission = commission;
	}

	public Double getCommissionFeeWaiver() {
		return commissionFeeWaiver;
	}

	public void setCommissionFeeWaiver(Double commissionFeeWaiver) {
		this.commissionFeeWaiver = commissionFeeWaiver;
	}

	public Double getCollectionFee() {
		return collectionFee;
	}

	public void setCollectionFee(Double collectionFee) {
		this.collectionFee = collectionFee;
	}

	public Double getCollectionFeeWaiver() {
		return collectionFeeWaiver;
	}

	public void setCollectionFeeWaiver(Double collectionFeeWaiver) {
		this.collectionFeeWaiver = collectionFeeWaiver;
	}

	public String getFixedFee() {
		return fixedFee;
	}

	public void setFixedFee(String fixedFee) {
		this.fixedFee = fixedFee;
	}

	public Double getFixedFeeWaiver() {
		return fixedFeeWaiver;
	}

	public void setFixedFeeWaiver(Double fixedFeeWaiver) {
		this.fixedFeeWaiver = fixedFeeWaiver;
	}

	public Double getNoCostFeeReiumbersment() {
		return noCostFeeReiumbersment;
	}

	public void setNoCostFeeReiumbersment(Double noCostFeeReiumbersment) {
		this.noCostFeeReiumbersment = noCostFeeReiumbersment;
	}

	public Double getInstallationFee() {
		return installationFee;
	}

	public void setInstallationFee(Double installationFee) {
		this.installationFee = installationFee;
	}

	public Double getUnInstallationFee() {
		return unInstallationFee;
	}

	public void setUnInstallationFee(Double unInstallationFee) {
		this.unInstallationFee = unInstallationFee;
	}

	public Double getTechVisitFee() {
		return techVisitFee;
	}

	public void setTechVisitFee(Double techVisitFee) {
		this.techVisitFee = techVisitFee;
	}

	public Double getInsatllationAndPackagingFee() {
		return insatllationAndPackagingFee;
	}

	public void setInsatllationAndPackagingFee(Double insatllationAndPackagingFee) {
		this.insatllationAndPackagingFee = insatllationAndPackagingFee;
	}

	public Double getPickAndPackFee() {
		return pickAndPackFee;
	}

	public void setPickAndPackFee(Double pickAndPackFee) {
		this.pickAndPackFee = pickAndPackFee;
	}

	public Double getPickAndPackFeeWaiver() {
		return pickAndPackFeeWaiver;
	}

	public void setPickAndPackFeeWaiver(Double pickAndPackFeeWaiver) {
		this.pickAndPackFeeWaiver = pickAndPackFeeWaiver;
	}

	public Double getCustomerShippingFee() {
		return customerShippingFee;
	}

	public void setCustomerShippingFee(Double customerShippingFee) {
		this.customerShippingFee = customerShippingFee;
	}

	public Double getShippingFeeWaiver() {
		return shippingFeeWaiver;
	}

	public void setShippingFeeWaiver(Double shippingFeeWaiver) {
		this.shippingFeeWaiver = shippingFeeWaiver;
	}

	public Double getFranciseFee() {
		return franciseFee;
	}

	public void setFranciseFee(Double franciseFee) {
		this.franciseFee = franciseFee;
	}

	public Double getProductCancalletionFee() {
		return productCancalletionFee;
	}

	public void setProductCancalletionFee(Double productCancalletionFee) {
		this.productCancalletionFee = productCancalletionFee;
	}

	public Double getServiceCancalletionFee() {
		return serviceCancalletionFee;
	}

	public void setServiceCancalletionFee(Double serviceCancalletionFee) {
		this.serviceCancalletionFee = serviceCancalletionFee;
	}

	public Double getFeeDiscount() {
		return feeDiscount;
	}

	public void setFeeDiscount(Double feeDiscount) {
		this.feeDiscount = feeDiscount;
	}

	public String getMultipartShipment() {
		return multipartShipment;
	}

	public void setMultipartShipment(String multipartShipment) {
		this.multipartShipment = multipartShipment;
	}

	public Double getProfilerDeadWeight() {
		return profilerDeadWeight;
	}

	public void setProfilerDeadWeight(Double profilerDeadWeight) {
		this.profilerDeadWeight = profilerDeadWeight;
	}

	public Double getSellerDeadWeight() {
		return sellerDeadWeight;
	}

	public void setSellerDeadWeight(Double sellerDeadWeight) {
		this.sellerDeadWeight = sellerDeadWeight;
	}

	public String getLengthBreadthHeight() {
		return lengthBreadthHeight;
	}

	public void setLengthBreadthHeight(String lengthBreadthHeight) {
		this.lengthBreadthHeight = lengthBreadthHeight;
	}

	public Double getVolumetricWeight() {
		return volumetricWeight;
	}

	public void setVolumetricWeight(Double volumetricWeight) {
		this.volumetricWeight = volumetricWeight;
	}

	public String getChargableWeightType() {
		return chargableWeightType;
	}

	public void setChargableWeightType(String chargableWeightType) {
		this.chargableWeightType = chargableWeightType;
	}

	public String getChargableWeightSlab() {
		return chargableWeightSlab;
	}

	public void setChargableWeightSlab(String chargableWeightSlab) {
		this.chargableWeightSlab = chargableWeightSlab;
	}

	public String getShippingZone() {
		return shippingZone;
	}

	public void setShippingZone(String shippingZone) {
		this.shippingZone = shippingZone;
	}

	private String buyerInvoiceId;
	private String buyerInvoiceDate;
	private String buyerInvoiceAmount;
	private LocalDateTime createdDate;

	public String getNeftId() {
		return neftId;
	}

	public void setNeftId(String neftId) {
		this.neftId = neftId;
	}

	public String getNeftType() {
		return neftType;
	}

	public void setNeftType(String neftType) {
		this.neftType = neftType;
	}

	public String getSettlementDate() {
		return settlementDate;
	}

	public void setSettlementDate(String settlementDate) {
		this.settlementDate = settlementDate;
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

	private LocalDateTime updatedDate;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Double getSettledAmount() {
		return settledAmount;
	}

	public void setSettledAmount(Double settledAmount) {
		this.settledAmount = settledAmount;
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

	public Double getSaleAmount() {
		return saleAmount;
	}

	public void setSaleAmount(Double saleAmount) {
		this.saleAmount = saleAmount;
	}

	public Double getTotalOfferAmount() {
		return totalOfferAmount;
	}

	public void setTotalOfferAmount(Double totalOfferAmount) {
		this.totalOfferAmount = totalOfferAmount;
	}

	public Double getCustomerShippingAmount() {
		return customerShippingAmount;
	}

	public void setCustomerShippingAmount(Double customerShippingAmount) {
		this.customerShippingAmount = customerShippingAmount;
	}

	public Double getTaxCollectedAtSource() {
		return taxCollectedAtSource;
	}

	public void setTaxCollectedAtSource(Double taxCollectedAtSource) {
		this.taxCollectedAtSource = taxCollectedAtSource;
	}

	public Double getTaxes() {
		return taxes;
	}

	public void setTaxes(Double taxes) {
		this.taxes = taxes;
	}

	public String getRefund() {
		return refund;
	}

	public void setRefund(String refund) {
		this.refund = refund;
	}

	public String getOrderDate() {
		return orderDate;
	}

	public void setOrderDate(String orderDate) {
		this.orderDate = orderDate;
	}

	public String getDispatchDate() {
		return dispatchDate;
	}

	public void setDispatchDate(String dispatchDate) {
		this.dispatchDate = dispatchDate;
	}

	public String getFulfillmentType() {
		return fulfillmentType;
	}

	public void setFulfillmentType(String fulfillmentType) {
		this.fulfillmentType = fulfillmentType;
	}

	public String getSellerSku() {
		return sellerSku;
	}

	public void setSellerSku(String sellerSku) {
		this.sellerSku = sellerSku;
	}

	public Long getQuantity() {
		return quantity;
	}

	public void setQuantity(Long quantity) {
		this.quantity = quantity;
	}

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public String getReturnType() {
		return returnType;
	}

	public void setReturnType(String returnType) {
		this.returnType = returnType;
	}

	public String getItemReturnStatus() {
		return itemReturnStatus;
	}

	public void setItemReturnStatus(String itemReturnStatus) {
		this.itemReturnStatus = itemReturnStatus;
	}

	public Double getShippingCharges() {
		return shippingCharges;
	}

	public void setShippingCharges(Double shippingCharges) {
		this.shippingCharges = shippingCharges;
	}

	public Double getReverseShippingFee() {
		return reverseShippingFee;
	}

	public void setReverseShippingFee(Double reverseShippingFee) {
		this.reverseShippingFee = reverseShippingFee;
	}

	public String getBuyerInvoiceId() {
		return buyerInvoiceId;
	}

	public void setBuyerInvoiceId(String buyerInvoiceId) {
		this.buyerInvoiceId = buyerInvoiceId;
	}

	public String getBuyerInvoiceDate() {
		return buyerInvoiceDate;
	}

	public void setBuyerInvoiceDate(String buyerInvoiceDate) {
		this.buyerInvoiceDate = buyerInvoiceDate;
	}

	public String getBuyerInvoiceAmount() {
		return buyerInvoiceAmount;
	}

	public void setBuyerInvoiceAmount(String buyerInvoiceAmount) {
		this.buyerInvoiceAmount = buyerInvoiceAmount;
	}

}

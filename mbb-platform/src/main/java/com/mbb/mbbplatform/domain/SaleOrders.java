package com.mbb.mbbplatform.domain;

import java.time.LocalDate;
import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "saleorders")
public class SaleOrders {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	private String saleOrderItemCode;

	private String displayOrderCode;

	private String reversePickupCode;

	private LocalDateTime reversePickupCreatedDate;

	private String reversePickupReason;

	private String notificationEmail;

	private String notificationMobile;

	private Boolean requireCustomization;

	private Long cod;

	private Long shippingAddressId;

	private String category;

	private String invoiceCode;

	private LocalDateTime invoiceCreated;

	private String shippingAddressName;

	private String shippingAddressLine1;

	private String shippingAddressLine2;

	private String shippingAddressCity;

	private String shippingAddressState;

	private String shippingAddressCountry;

	private String shippingAddressPincode;

	private String shippingAddressPhone;

	private Long billingAddressId;

	private String billingAddressName;

	private String billingAddressLine1;

	private String billingAddressLine2;

	private String billingAddressCity;

	private String billingAddressState;

	private String billingAddressCountry;

	private String billingAddressPincode;

	private String billingAddressPhone;

	private String shippingMethod;

	private String itemSKUCode;

	private String channelProductId;

	private String itemTypeName;

	private String itemTypeColor;

	private String itemTypeSize;

	private String itemTypeBrand;

	private String channelName;

	private Boolean skuRequireCustomization;

	private Boolean giftWrap;

	private String giftMessage;

	private String hsnCode;

	private Double mrp;

	private Double totalPrice;

	private Double sellingPrice;

	private Double costPrice;

	private Boolean prepaidAmount;

	private Double subtotal;

	private Double discount;

	private Double gstTaxTypeCode;

	private Double cgst;

	private Double igst;

	private Double sgst;

	private Double utgst;

	private Double cess;

	private Double cgstRate;

	private Double igstRate;

	private Double sgstRate;

	private Double utgstRate;

	private Double cessRate;

	private Double taxPercentage;

	private Double taxValue;

	private String voucherCode;

	private Double shippingCharges;

	private Double shippingMethodCharges;

	private Double codServiceCharges;

	private Double giftWrapCharges;

	private int packetNumber;

	private LocalDate orderDate;

	private String saleOrderCode;

	private Boolean onHold;

	private String saleOrderStatus;

	private int priority;

	private String currency;

	private String currencyConversionRate;

	private String saleOrderItemStatus;

	private String cancellationReason;

	private String shippingProvider;

	private String shippingArrangedBy;

	private String shippingPackageCode;

	private LocalDateTime shippingPackageCreationDate;

	private String shippingPackageStatusCode;

	private String shippingPackageType;

	private Double length;

	private Double width;

	private Double height;

	private LocalDateTime deliveryTime;

	private String trackingNumber;

	private LocalDateTime dispatchDate;

	private String facility;

	private LocalDateTime returnDate;

	private String returnReason;

	private LocalDateTime created;

	private LocalDateTime updated;

	private String combinationIdentifier;

	private String combinationDescription;

	private Double transferPrice;

	private String itemCode;

	private String imei;

	private Double weight;

	private String gstIn;

	private String customerGSTIN;

	private String tin;

	private String paymentInstrument;

	private Boolean channelShipping;

	private String itemDetails;

	private LocalDateTime createdDate;

	private LocalDateTime updatedDate;

	private LocalDate dateInCsvfile;
	
	private LocalDate zohocreatedDate;
	

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getSaleOrderItemCode() {
		return saleOrderItemCode;
	}

	public void setSaleOrderItemCode(String saleOrderItemCode) {
		this.saleOrderItemCode = saleOrderItemCode;
	}

	public String getDisplayOrderCode() {
		return displayOrderCode;
	}

	public void setDisplayOrderCode(String displayOrderCode) {
		this.displayOrderCode = displayOrderCode;
	}

	public String getReversePickupCode() {
		return reversePickupCode;
	}

	public void setReversePickupCode(String reversePickupCode) {
		this.reversePickupCode = reversePickupCode;
	}

	public LocalDateTime getReversePickupCreatedDate() {
		return reversePickupCreatedDate;
	}

	public void setReversePickupCreatedDate(LocalDateTime reversePickupCreatedDate) {
		this.reversePickupCreatedDate = reversePickupCreatedDate;
	}

	public String getReversePickupReason() {
		return reversePickupReason;
	}

	public void setReversePickupReason(String reversePickupReason) {
		this.reversePickupReason = reversePickupReason;
	}

	public String getNotificationEmail() {
		return notificationEmail;
	}

	public void setNotificationEmail(String notificationEmail) {
		this.notificationEmail = notificationEmail;
	}

	public String getNotificationMobile() {
		return notificationMobile;
	}

	public void setNotificationMobile(String notificationMobile) {
		this.notificationMobile = notificationMobile;
	}

	public Boolean getRequireCustomization() {
		return requireCustomization;
	}

	public void setRequireCustomization(Boolean requireCustomization) {
		this.requireCustomization = requireCustomization;
	}

	public Long getCod() {
		return cod;
	}

	public void setCod(Long cod) {
		this.cod = cod;
	}

	public Long getShippingAddressId() {
		return shippingAddressId;
	}

	public void setShippingAddressId(Long shippingAddressId) {
		this.shippingAddressId = shippingAddressId;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getInvoiceCode() {
		return invoiceCode;
	}

	public void setInvoiceCode(String invoiceCode) {
		this.invoiceCode = invoiceCode;
	}

	public LocalDateTime getInvoiceCreated() {
		return invoiceCreated;
	}

	public void setInvoiceCreated(LocalDateTime invoiceCreated) {
		this.invoiceCreated = invoiceCreated;
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

	public String getShippingAddressCountry() {
		return shippingAddressCountry;
	}

	public void setShippingAddressCountry(String shippingAddressCountry) {
		this.shippingAddressCountry = shippingAddressCountry;
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

	public Long getBillingAddressId() {
		return billingAddressId;
	}

	public void setBillingAddressId(Long billingAddressId) {
		this.billingAddressId = billingAddressId;
	}

	public String getBillingAddressName() {
		return billingAddressName;
	}

	public void setBillingAddressName(String billingAddressName) {
		this.billingAddressName = billingAddressName;
	}

	public String getBillingAddressLine1() {
		return billingAddressLine1;
	}

	public void setBillingAddressLine1(String billingAddressLine1) {
		this.billingAddressLine1 = billingAddressLine1;
	}

	public String getBillingAddressLine2() {
		return billingAddressLine2;
	}

	public void setBillingAddressLine2(String billingAddressLine2) {
		this.billingAddressLine2 = billingAddressLine2;
	}

	public String getBillingAddressCity() {
		return billingAddressCity;
	}

	public void setBillingAddressCity(String billingAddressCity) {
		this.billingAddressCity = billingAddressCity;
	}

	public String getBillingAddressState() {
		return billingAddressState;
	}

	public void setBillingAddressState(String billingAddressState) {
		this.billingAddressState = billingAddressState;
	}

	public String getBillingAddressCountry() {
		return billingAddressCountry;
	}

	public void setBillingAddressCountry(String billingAddressCountry) {
		this.billingAddressCountry = billingAddressCountry;
	}

	public String getBillingAddressPincode() {
		return billingAddressPincode;
	}

	public void setBillingAddressPincode(String billingAddressPincode) {
		this.billingAddressPincode = billingAddressPincode;
	}

	public String getBillingAddressPhone() {
		return billingAddressPhone;
	}

	public void setBillingAddressPhone(String billingAddressPhone) {
		this.billingAddressPhone = billingAddressPhone;
	}

	public String getShippingMethod() {
		return shippingMethod;
	}

	public void setShippingMethod(String shippingMethod) {
		this.shippingMethod = shippingMethod;
	}

	public String getItemSKUCode() {
		return itemSKUCode;
	}

	public void setItemSKUCode(String itemSKUCode) {
		this.itemSKUCode = itemSKUCode;
	}

	public String getChannelProductId() {
		return channelProductId;
	}

	public void setChannelProductId(String channelProductId) {
		this.channelProductId = channelProductId;
	}

	public String getItemTypeName() {
		return itemTypeName;
	}

	public void setItemTypeName(String itemTypeName) {
		this.itemTypeName = itemTypeName;
	}

	public String getItemTypeColor() {
		return itemTypeColor;
	}

	public void setItemTypeColor(String itemTypeColor) {
		this.itemTypeColor = itemTypeColor;
	}

	public String getItemTypeSize() {
		return itemTypeSize;
	}

	public void setItemTypeSize(String itemTypeSize) {
		this.itemTypeSize = itemTypeSize;
	}

	public String getItemTypeBrand() {
		return itemTypeBrand;
	}

	public void setItemTypeBrand(String itemTypeBrand) {
		this.itemTypeBrand = itemTypeBrand;
	}

	public String getChannelName() {
		return channelName;
	}

	public void setChannelName(String channelName) {
		this.channelName = channelName;
	}

	public Boolean getSkuRequireCustomization() {
		return skuRequireCustomization;
	}

	public void setSkuRequireCustomization(Boolean skuRequireCustomization) {
		this.skuRequireCustomization = skuRequireCustomization;
	}

	public Boolean getGiftWrap() {
		return giftWrap;
	}

	public void setGiftWrap(Boolean giftWrap) {
		this.giftWrap = giftWrap;
	}

	public String getGiftMessage() {
		return giftMessage;
	}

	public void setGiftMessage(String giftMessage) {
		this.giftMessage = giftMessage;
	}

	public String getHsnCode() {
		return hsnCode;
	}

	public void setHsnCode(String hsnCode) {
		this.hsnCode = hsnCode;
	}

	public Double getMrp() {
		return mrp;
	}

	public void setMrp(Double mrp) {
		this.mrp = mrp;
	}

	public Double getTotalPrice() {
		return totalPrice;
	}

	public void setTotalPrice(Double totalPrice) {
		this.totalPrice = totalPrice;
	}

	public Double getSellingPrice() {
		return sellingPrice;
	}

	public void setSellingPrice(Double sellingPrice) {
		this.sellingPrice = sellingPrice;
	}

	public Double getCostPrice() {
		return costPrice;
	}

	public void setCostPrice(Double costPrice) {
		this.costPrice = costPrice;
	}

	public Boolean getPrepaidAmount() {
		return prepaidAmount;
	}

	public void setPrepaidAmount(Boolean prepaidAmount) {
		this.prepaidAmount = prepaidAmount;
	}

	public Double getSubtotal() {
		return subtotal;
	}

	public void setSubtotal(Double subtotal) {
		this.subtotal = subtotal;
	}

	public Double getDiscount() {
		return discount;
	}

	public void setDiscount(Double discount) {
		this.discount = discount;
	}

	public Double getGstTaxTypeCode() {
		return gstTaxTypeCode;
	}

	public void setGstTaxTypeCode(Double gstTaxTypeCode) {
		this.gstTaxTypeCode = gstTaxTypeCode;
	}

	public Double getCgst() {
		return cgst;
	}

	public void setCgst(Double cgst) {
		this.cgst = cgst;
	}

	public Double getIgst() {
		return igst;
	}

	public void setIgst(Double igst) {
		this.igst = igst;
	}

	public Double getSgst() {
		return sgst;
	}

	public void setSgst(Double sgst) {
		this.sgst = sgst;
	}

	public Double getUtgst() {
		return utgst;
	}

	public void setUtgst(Double utgst) {
		this.utgst = utgst;
	}

	public Double getCess() {
		return cess;
	}

	public void setCess(Double cess) {
		this.cess = cess;
	}

	public Double getCgstRate() {
		return cgstRate;
	}

	public void setCgstRate(Double cgstRate) {
		this.cgstRate = cgstRate;
	}

	public Double getIgstRate() {
		return igstRate;
	}

	public void setIgstRate(Double igstRate) {
		this.igstRate = igstRate;
	}

	public Double getSgstRate() {
		return sgstRate;
	}

	public void setSgstRate(Double sgstRate) {
		this.sgstRate = sgstRate;
	}

	public Double getUtgstRate() {
		return utgstRate;
	}

	public void setUtgstRate(Double utgstRate) {
		this.utgstRate = utgstRate;
	}

	public Double getCessRate() {
		return cessRate;
	}

	public void setCessRate(Double cessRate) {
		this.cessRate = cessRate;
	}

	public Double getTaxPercentage() {
		return taxPercentage;
	}

	public void setTaxPercentage(Double taxPercentage) {
		this.taxPercentage = taxPercentage;
	}

	public Double getTaxValue() {
		return taxValue;
	}

	public void setTaxValue(Double taxValue) {
		this.taxValue = taxValue;
	}

	public String getVoucherCode() {
		return voucherCode;
	}

	public void setVoucherCode(String voucherCode) {
		this.voucherCode = voucherCode;
	}

	public Double getShippingCharges() {
		return shippingCharges;
	}

	public void setShippingCharges(Double shippingCharges) {
		this.shippingCharges = shippingCharges;
	}

	public Double getShippingMethodCharges() {
		return shippingMethodCharges;
	}

	public void setShippingMethodCharges(Double shippingMethodCharges) {
		this.shippingMethodCharges = shippingMethodCharges;
	}

	public Double getCodServiceCharges() {
		return codServiceCharges;
	}

	public void setCodServiceCharges(Double codServiceCharges) {
		this.codServiceCharges = codServiceCharges;
	}

	public Double getGiftWrapCharges() {
		return giftWrapCharges;
	}

	public void setGiftWrapCharges(Double giftWrapCharges) {
		this.giftWrapCharges = giftWrapCharges;
	}

	public int getPacketNumber() {
		return packetNumber;
	}

	public void setPacketNumber(int packetNumber) {
		this.packetNumber = packetNumber;
	}

	public LocalDate getOrderDate() {
		return orderDate;
	}

	public void setOrderDate(LocalDate orderDate) {
		this.orderDate = orderDate;
	}

	public String getSaleOrderCode() {
		return saleOrderCode;
	}

	public void setSaleOrderCode(String saleOrderCode) {
		this.saleOrderCode = saleOrderCode;
	}

	public Boolean getOnHold() {
		return onHold;
	}

	public void setOnHold(Boolean onHold) {
		this.onHold = onHold;
	}

	public String getSaleOrderStatus() {
		return saleOrderStatus;
	}

	public void setSaleOrderStatus(String saleOrderStatus) {
		this.saleOrderStatus = saleOrderStatus;
	}

	public int getPriority() {
		return priority;
	}

	public void setPriority(int priority) {
		this.priority = priority;
	}

	public String getCurrency() {
		return currency;
	}

	public void setCurrency(String currency) {
		this.currency = currency;
	}

	public String getCurrencyConversionRate() {
		return currencyConversionRate;
	}

	public void setCurrencyConversionRate(String currencyConversionRate) {
		this.currencyConversionRate = currencyConversionRate;
	}

	public String getSaleOrderItemStatus() {
		return saleOrderItemStatus;
	}

	public void setSaleOrderItemStatus(String saleOrderItemStatus) {
		this.saleOrderItemStatus = saleOrderItemStatus;
	}

	public String getCancellationReason() {
		return cancellationReason;
	}

	public void setCancellationReason(String cancellationReason) {
		this.cancellationReason = cancellationReason;
	}

	public String getShippingProvider() {
		return shippingProvider;
	}

	public void setShippingProvider(String shippingProvider) {
		this.shippingProvider = shippingProvider;
	}

	public String getShippingArrangedBy() {
		return shippingArrangedBy;
	}

	public void setShippingArrangedBy(String shippingArrangedBy) {
		this.shippingArrangedBy = shippingArrangedBy;
	}

	public String getShippingPackageCode() {
		return shippingPackageCode;
	}

	public void setShippingPackageCode(String shippingPackageCode) {
		this.shippingPackageCode = shippingPackageCode;
	}

	public LocalDateTime getShippingPackageCreationDate() {
		return shippingPackageCreationDate;
	}

	public void setShippingPackageCreationDate(LocalDateTime shippingPackageCreationDate) {
		this.shippingPackageCreationDate = shippingPackageCreationDate;
	}

	public String getShippingPackageStatusCode() {
		return shippingPackageStatusCode;
	}

	public void setShippingPackageStatusCode(String shippingPackageStatusCode) {
		this.shippingPackageStatusCode = shippingPackageStatusCode;
	}

	public String getShippingPackageType() {
		return shippingPackageType;
	}

	public void setShippingPackageType(String shippingPackageType) {
		this.shippingPackageType = shippingPackageType;
	}

	public Double getLength() {
		return length;
	}

	public void setLength(Double length) {
		this.length = length;
	}

	public Double getWidth() {
		return width;
	}

	public void setWidth(Double width) {
		this.width = width;
	}

	public Double getHeight() {
		return height;
	}

	public void setHeight(Double height) {
		this.height = height;
	}

	public LocalDateTime getDeliveryTime() {
		return deliveryTime;
	}

	public void setDeliveryTime(LocalDateTime deliveryTime) {
		this.deliveryTime = deliveryTime;
	}

	public String getTrackingNumber() {
		return trackingNumber;
	}

	public void setTrackingNumber(String trackingNumber) {
		this.trackingNumber = trackingNumber;
	}

	public LocalDateTime getDispatchDate() {
		return dispatchDate;
	}

	public void setDispatchDate(LocalDateTime dispatchDate) {
		this.dispatchDate = dispatchDate;
	}

	public String getFacility() {
		return facility;
	}

	public void setFacility(String facility) {
		this.facility = facility;
	}

	public LocalDateTime getReturnDate() {
		return returnDate;
	}

	public void setReturnDate(LocalDateTime returnDate) {
		this.returnDate = returnDate;
	}

	public String getReturnReason() {
		return returnReason;
	}

	public void setReturnReason(String returnReason) {
		this.returnReason = returnReason;
	}

	public LocalDateTime getCreated() {
		return created;
	}

	public void setCreated(LocalDateTime created) {
		this.created = created;
	}

	public LocalDateTime getUpdated() {
		return updated;
	}

	public void setUpdated(LocalDateTime updated) {
		this.updated = updated;
	}

	public String getCombinationIdentifier() {
		return combinationIdentifier;
	}

	public void setCombinationIdentifier(String combinationIdentifier) {
		this.combinationIdentifier = combinationIdentifier;
	}

	public String getCombinationDescription() {
		return combinationDescription;
	}

	public void setCombinationDescription(String combinationDescription) {
		this.combinationDescription = combinationDescription;
	}

	public Double getTransferPrice() {
		return transferPrice;
	}

	public void setTransferPrice(Double transferPrice) {
		this.transferPrice = transferPrice;
	}

	public String getItemCode() {
		return itemCode;
	}

	public void setItemCode(String itemCode) {
		this.itemCode = itemCode;
	}

	public String getImei() {
		return imei;
	}

	public void setImei(String imei) {
		this.imei = imei;
	}

	public Double getWeight() {
		return weight;
	}

	public void setWeight(Double weight) {
		this.weight = weight;
	}

	public String getGstIn() {
		return gstIn;
	}

	public void setGstIn(String gstIn) {
		this.gstIn = gstIn;
	}

	public String getCustomerGSTIN() {
		return customerGSTIN;
	}

	public void setCustomerGSTIN(String customerGSTIN) {
		this.customerGSTIN = customerGSTIN;
	}

	public String getTin() {
		return tin;
	}

	public void setTin(String tin) {
		this.tin = tin;
	}

	public String getPaymentInstrument() {
		return paymentInstrument;
	}

	public void setPaymentInstrument(String paymentInstrument) {
		this.paymentInstrument = paymentInstrument;
	}

	public Boolean getChannelShipping() {
		return channelShipping;
	}

	public void setChannelShipping(Boolean channelShipping) {
		this.channelShipping = channelShipping;
	}

	public String getItemDetails() {
		return itemDetails;
	}

	public void setItemDetails(String itemDetails) {
		this.itemDetails = itemDetails;
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

	public LocalDate getDateInCsvfile() {
		return dateInCsvfile;
	}

	public void setDateInCsvfile(LocalDate dateInCsvfile) {
		this.dateInCsvfile = dateInCsvfile;
	}

	public LocalDate getZohocreatedDate() {
		return zohocreatedDate;
	}

	public void setZohocreatedDate(LocalDate zohocreatedDate) {
		this.zohocreatedDate = zohocreatedDate;
	}

}

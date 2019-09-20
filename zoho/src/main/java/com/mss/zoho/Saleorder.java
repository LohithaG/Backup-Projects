package com.mss.zoho;


import java.time.LocalDate;
import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "saleorder")
@JsonIgnoreProperties(ignoreUnknown = true)
public class Saleorder {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	private String subject;
	/*private String first_Name;
	private String mobile;
	private String phone;
	private String email;
	private String carrier;
	private String description;
	private String terms_and_Conditions;
	private String last_Name;*/


	//@Id
	private String sale_Order_Code;

	private String saleOrderItemCode;

	private String display_Order_Code;

	private String notification_Email;

	private String notification_Mobile;

	private String requireCustomization;

	private String cod;

	private String shippingAddressId;

	private String category;

	private String invoiceCode;

	private String invoiceCreated;

	private String shipping_Address_Line_1;
	
	private String shipping_Address_Line_2;
	
	private String shipping_Address_City;
	
	private String shipping_Address_State;
	
	private String shipping_Address_Country;
	
	private String shipping_Address_Pincode;

	private String shippingAddressPhone;

	private String billingAddressId;


	private String billing_Address_Line_1;
	
	private String billing_Address_Line_2;
	
	private String billing_Address_City;
	
	private String billing_Address_State;
	
	private String billing_Address_Country;
	
	private String billing_Address_Pincode;
	
	private String shipping_Address_Name;
	
	private String billing_Address_Name;

	private String billingAddressPhone;

	private String shippingMethod;

	private String item_SKU_Code;

	private String channelProductId;

	private String item_Type_Name;

	private String itemTypeColor;

	private String itemTypeSize;

	private String itemTypeBrand;

	private String Channel_Name;

	private String sKURequireCustomization;

	private String giftWrap;

	private String giftMessage;

	private String hSNCode;

	private String MRP;

	private String total_Price;
	private String selling_Price;

	private String costPrice;

	private String prepaidAmount;

	private String subtotal;
	
	private String gST_Tax_Type_Code;
	
	private String cGST;
	
	private String iGST;
	
	private String sGST;

	private String uTGST;

	private String cESS;

	private String cGSTRate;

	private String iGSTRate;

	private String sGSTRate;

	private String uTGSTRate;

	private String cESSRate;

	private String taxPercentage;

	private String taxValue;

	private String voucherCode;

	private String shippingCharges;

	private String shippingMethodCharges;

	private String cODServiceCharges;

	private String giftWrapCharges;

	private String packetNumber;

	private String orderDate;

	private String onHold;

	private String sale_Order_Status;

	private String priority;

	private String currency;

	private String currencyConversionRate;

	private String saleOrderItemStatus;

	private String cancellationReason;

	private String shipping_Provider;

	private String shippingArrangedBy;

	private String shippingPackageCode;

	private String shippingPackageCreationDate;

	private String shipping_Package_Status_Code;

	private String shippingPackageType;

	private String length;

	private String width;

	private String height;

	private String deliveryTime;

	private String tracking_Number;

	private String dispatchDate;

	private String facility;

//	private String created;

	private String updated;

	private String combinationIdentifier;

	private String combinationDescription;

	private String transferPrice;

	private String itemCode;

	private String imei;

	private String weight;

	private String gstIn;

	private String customerGSTIN;

	private String tin;

	private String paymentInstrument;

	private String channelShipping;

	private String item_Details;
	
	private LocalDate created;
	

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getSale_Order_Code() {
		return sale_Order_Code;
	}

	public void setSale_Order_Code(String sale_Order_Code) {
		this.sale_Order_Code = sale_Order_Code;
	}

	public String getSaleOrderItemCode() {
		return saleOrderItemCode;
	}

	public void setSaleOrderItemCode(String saleOrderItemCode) {
		this.saleOrderItemCode = saleOrderItemCode;
	}

	public String getDisplay_Order_Code() {
		return display_Order_Code;
	}

	public void setDisplay_Order_Code(String display_Order_Code) {
		this.display_Order_Code = display_Order_Code;
	}

	

	

	public String getNotification_Mobile() {
		return notification_Mobile;
	}

	public void setNotification_Mobile(String notification_Mobile) {
		this.notification_Mobile = notification_Mobile;
	}

	public String getRequireCustomization() {
		return requireCustomization;
	}

	public void setRequireCustomization(String requireCustomization) {
		this.requireCustomization = requireCustomization;
	}

	public String getCod() {
		return cod;
	}

	public void setCod(String cod) {
		this.cod = cod;
	}

	public String getShippingAddressId() {
		return shippingAddressId;
	}

	public void setShippingAddressId(String shippingAddressId) {
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

	public String getInvoiceCreated() {
		return invoiceCreated;
	}

	public void setInvoiceCreated(String invoiceCreated) {
		this.invoiceCreated = invoiceCreated;
	}

	public String getShipping_Address_Line_1() {
		return shipping_Address_Line_1;
	}

	public void setShipping_Address_Line_1(String shipping_Address_Line_1) {
		this.shipping_Address_Line_1 = shipping_Address_Line_1;
	}

	public String getShipping_Address_Line_2() {
		return shipping_Address_Line_2;
	}

	public void setShipping_Address_Line_2(String shipping_Address_Line_2) {
		this.shipping_Address_Line_2 = shipping_Address_Line_2;
	}

	public String getShipping_Address_City() {
		return shipping_Address_City;
	}

	public void setShipping_Address_City(String shipping_Address_City) {
		this.shipping_Address_City = shipping_Address_City;
	}

	public String getShipping_Address_State() {
		return shipping_Address_State;
	}

	public void setShipping_Address_State(String shipping_Address_State) {
		this.shipping_Address_State = shipping_Address_State;
	}

	public String getShipping_Address_Country() {
		return shipping_Address_Country;
	}

	public void setShipping_Address_Country(String shipping_Address_Country) {
		this.shipping_Address_Country = shipping_Address_Country;
	}

	public String getShipping_Address_Pincode() {
		return shipping_Address_Pincode;
	}

	public void setShipping_Address_Pincode(String shipping_Address_Pincode) {
		this.shipping_Address_Pincode = shipping_Address_Pincode;
	}

	public String getShippingAddressPhone() {
		return shippingAddressPhone;
	}

	public void setShippingAddressPhone(String shippingAddressPhone) {
		this.shippingAddressPhone = shippingAddressPhone;
	}

	public String getBillingAddressId() {
		return billingAddressId;
	}

	public void setBillingAddressId(String billingAddressId) {
		this.billingAddressId = billingAddressId;
	}

	public String getBilling_Address_Line_1() {
		return billing_Address_Line_1;
	}

	public void setBilling_Address_Line_1(String billing_Address_Line_1) {
		this.billing_Address_Line_1 = billing_Address_Line_1;
	}

	public String getBilling_Address_Line_2() {
		return billing_Address_Line_2;
	}

	public void setBilling_Address_Line_2(String billing_Address_Line_2) {
		this.billing_Address_Line_2 = billing_Address_Line_2;
	}

	public String getBilling_Address_City() {
		return billing_Address_City;
	}

	public void setBilling_Address_City(String billing_Address_City) {
		this.billing_Address_City = billing_Address_City;
	}

	public String getBilling_Address_State() {
		return billing_Address_State;
	}

	public void setBilling_Address_State(String billing_Address_State) {
		this.billing_Address_State = billing_Address_State;
	}

	public String getBilling_Address_Country() {
		return billing_Address_Country;
	}

	public void setBilling_Address_Country(String billing_Address_Country) {
		this.billing_Address_Country = billing_Address_Country;
	}

	public String getBilling_Address_Pincode() {
		return billing_Address_Pincode;
	}

	public void setBilling_Address_Pincode(String billing_Address_Pincode) {
		this.billing_Address_Pincode = billing_Address_Pincode;
	}

	public String getShipping_Address_Name() {
		return shipping_Address_Name;
	}

	public void setShipping_Address_Name(String shipping_Address_Name) {
		this.shipping_Address_Name = shipping_Address_Name;
	}

	public String getBilling_Address_Name() {
		return billing_Address_Name;
	}

	public void setBilling_Address_Name(String billing_Address_Name) {
		this.billing_Address_Name = billing_Address_Name;
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

	public String getItem_SKU_Code() {
		return item_SKU_Code;
	}

	public void setItem_SKU_Code(String item_SKU_Code) {
		this.item_SKU_Code = item_SKU_Code;
	}

	public String getChannelProductId() {
		return channelProductId;
	}

	public void setChannelProductId(String channelProductId) {
		this.channelProductId = channelProductId;
	}

	public String getItem_Type_Name() {
		return item_Type_Name;
	}

	public void setItem_Type_Name(String item_Type_Name) {
		this.item_Type_Name = item_Type_Name;
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

	

	public String getsKURequireCustomization() {
		return sKURequireCustomization;
	}

	public void setsKURequireCustomization(String sKURequireCustomization) {
		this.sKURequireCustomization = sKURequireCustomization;
	}

	public String getGiftWrap() {
		return giftWrap;
	}

	public void setGiftWrap(String giftWrap) {
		this.giftWrap = giftWrap;
	}

	public String getGiftMessage() {
		return giftMessage;
	}

	public void setGiftMessage(String giftMessage) {
		this.giftMessage = giftMessage;
	}

	public String gethSNCode() {
		return hSNCode;
	}

	public void sethSNCode(String hSNCode) {
		this.hSNCode = hSNCode;
	}

	public String getMRP() {
		return MRP;
	}

	public void setMRP(String mRP) {
		MRP = mRP;
	}

	public String getTotal_Price() {
		return total_Price;
	}

	public void setTotal_Price(String total_Price) {
		this.total_Price = total_Price;
	}

	public String getSelling_Price() {
		return selling_Price;
	}

	public void setSelling_Price(String selling_Price) {
		this.selling_Price = selling_Price;
	}

	public String getCostPrice() {
		return costPrice;
	}

	public void setCostPrice(String costPrice) {
		this.costPrice = costPrice;
	}

	public String getPrepaidAmount() {
		return prepaidAmount;
	}

	public void setPrepaidAmount(String prepaidAmount) {
		this.prepaidAmount = prepaidAmount;
	}

	public String getSubtotal() {
		return subtotal;
	}

	public void setSubtotal(String subtotal) {
		this.subtotal = subtotal;
	}

	public String getgST_Tax_Type_Code() {
		return gST_Tax_Type_Code;
	}

	public void setgST_Tax_Type_Code(String gST_Tax_Type_Code) {
		this.gST_Tax_Type_Code = gST_Tax_Type_Code;
	}

	public String getcGST() {
		return cGST;
	}

	public void setcGST(String cGST) {
		this.cGST = cGST;
	}

	public String getiGST() {
		return iGST;
	}

	public void setiGST(String iGST) {
		this.iGST = iGST;
	}

	public String getsGST() {
		return sGST;
	}

	public void setsGST(String sGST) {
		this.sGST = sGST;
	}

	public String getuTGST() {
		return uTGST;
	}

	public void setuTGST(String uTGST) {
		this.uTGST = uTGST;
	}

	public String getcESS() {
		return cESS;
	}

	public void setcESS(String cESS) {
		this.cESS = cESS;
	}

	public String getcGSTRate() {
		return cGSTRate;
	}

	public void setcGSTRate(String cGSTRate) {
		this.cGSTRate = cGSTRate;
	}

	public String getiGSTRate() {
		return iGSTRate;
	}

	public void setiGSTRate(String iGSTRate) {
		this.iGSTRate = iGSTRate;
	}

	public String getsGSTRate() {
		return sGSTRate;
	}

	public void setsGSTRate(String sGSTRate) {
		this.sGSTRate = sGSTRate;
	}

	public String getuTGSTRate() {
		return uTGSTRate;
	}

	public void setuTGSTRate(String uTGSTRate) {
		this.uTGSTRate = uTGSTRate;
	}

	public String getcESSRate() {
		return cESSRate;
	}

	public void setcESSRate(String cESSRate) {
		this.cESSRate = cESSRate;
	}

	public String getTaxPercentage() {
		return taxPercentage;
	}

	public void setTaxPercentage(String taxPercentage) {
		this.taxPercentage = taxPercentage;
	}

	public String getTaxValue() {
		return taxValue;
	}

	public void setTaxValue(String taxValue) {
		this.taxValue = taxValue;
	}

	public String getVoucherCode() {
		return voucherCode;
	}

	public void setVoucherCode(String voucherCode) {
		this.voucherCode = voucherCode;
	}

	public String getShippingCharges() {
		return shippingCharges;
	}

	public void setShippingCharges(String shippingCharges) {
		this.shippingCharges = shippingCharges;
	}

	public String getShippingMethodCharges() {
		return shippingMethodCharges;
	}

	public void setShippingMethodCharges(String shippingMethodCharges) {
		this.shippingMethodCharges = shippingMethodCharges;
	}

	public String getcODServiceCharges() {
		return cODServiceCharges;
	}

	public void setcODServiceCharges(String cODServiceCharges) {
		this.cODServiceCharges = cODServiceCharges;
	}

	public String getGiftWrapCharges() {
		return giftWrapCharges;
	}

	public void setGiftWrapCharges(String giftWrapCharges) {
		this.giftWrapCharges = giftWrapCharges;
	}

	public String getPacketNumber() {
		return packetNumber;
	}

	public void setPacketNumber(String packetNumber) {
		this.packetNumber = packetNumber;
	}

	public String getOrderDate() {
		return orderDate;
	}

	public void setOrderDate(String orderDate) {
		this.orderDate = orderDate;
	}

	public String getOnHold() {
		return onHold;
	}

	public void setOnHold(String onHold) {
		this.onHold = onHold;
	}

	public String getSale_Order_Status() {
		return sale_Order_Status;
	}

	public void setSale_Order_Status(String sale_Order_Status) {
		this.sale_Order_Status = sale_Order_Status;
	}

	public String getPriority() {
		return priority;
	}

	public void setPriority(String priority) {
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

	public String getShipping_Provider() {
		return shipping_Provider;
	}

	public void setShipping_Provider(String shipping_Provider) {
		this.shipping_Provider = shipping_Provider;
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

	public String getShippingPackageCreationDate() {
		return shippingPackageCreationDate;
	}

	public void setShippingPackageCreationDate(String shippingPackageCreationDate) {
		this.shippingPackageCreationDate = shippingPackageCreationDate;
	}

	public String getShipping_Package_Status_Code() {
		return shipping_Package_Status_Code;
	}

	public void setShipping_Package_Status_Code(String shipping_Package_Status_Code) {
		this.shipping_Package_Status_Code = shipping_Package_Status_Code;
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

	public String getWidth() {
		return width;
	}

	public void setWidth(String width) {
		this.width = width;
	}

	public String getHeight() {
		return height;
	}

	public void setHeight(String height) {
		this.height = height;
	}

	public String getDeliveryTime() {
		return deliveryTime;
	}

	public void setDeliveryTime(String deliveryTime) {
		this.deliveryTime = deliveryTime;
	}

	

	public String getDispatchDate() {
		return dispatchDate;
	}

	public void setDispatchDate(String dispatchDate) {
		this.dispatchDate = dispatchDate;
	}

	public String getFacility() {
		return facility;
	}

	public void setFacility(String facility) {
		this.facility = facility;
	}

	

	public String getUpdated() {
		return updated;
	}

	public void setUpdated(String updated) {
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

	public String getTransferPrice() {
		return transferPrice;
	}

	public void setTransferPrice(String transferPrice) {
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

	public String getWeight() {
		return weight;
	}

	public void setWeight(String weight) {
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

	public String getChannelShipping() {
		return channelShipping;
	}

	public void setChannelShipping(String channelShipping) {
		this.channelShipping = channelShipping;
	}

	

	public String getChannel_Name() {
		return Channel_Name;
	}

	public void setChannel_Name(String channel_Name) {
		Channel_Name = channel_Name;
	}

	public String getNotification_Email() {
		return notification_Email;
	}

	public void setNotification_Email(String notification_Email) {
		this.notification_Email = notification_Email;
	}

	public String getTracking_Number() {
		return tracking_Number;
	}

	public void setTracking_Number(String tracking_Number) {
		this.tracking_Number = tracking_Number;
	}

	public String getItem_Details() {
		return item_Details;
	}

	public void setItem_Details(String item_Details) {
		this.item_Details = item_Details;
	}

	

	public String getSubject() {
		return subject;
	}

	public void setSubject(String subject) {
		this.subject = subject;
	}

	public LocalDate getCreated() {
		return created;
	}

	public void setCreated(LocalDate created) {
		this.created = created;
	}

	

	
	

	
	

}

package com.mbb.mbbplatform.domain;

import java.time.LocalDate;
import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tallyerp9cancelled")
public class TallyERP9Cancelled {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	private LocalDate date;

	private String saleOrderNumber;

	private String invoiceNumber;

	private String channelEntry;

	private String channelLedger;

	private String productName;

	private String productSKUCode;

	private Long qty;

	private Double unitPrice;

	private String currency;

	private Double conversionRate;

	private Double total;

	private String customerName;

	private String shippingAddressName;

	private String shippingAddressLine1;

	private String shippingAddressLine2;

	private String shippingAddressCity;

	private String shippingAddressState;

	private String shippingAddressCountry;

	private Long shippingAddressPincode;

	private String shippingAddressPhone;

	private String shippingProvider;

	private String awbNum;

	private Double sales;

	private String salesLedger;

	private Double tax;

	private String taxLedger;

	private String additionalTax;

	private String additionalTaxLedger;

	private String othercharges;

	private String otherChargesLedger;

	private Long serviceTax;

	private String stLedger;

	private Long imei;

	private String goDown;

	private LocalDate dispatchDate;

	private LocalDateTime narration;

	private String entity;

	private String voucherTypeName;

	private Double tinNo;

	private LocalDate originalInvoiceDate;

	private String originalSaleNo;

	private LocalDateTime createdDate;

	private LocalDateTime updatedDate;

	private LocalDateTime dateInCSvfile;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public LocalDate getDate() {
		return date;
	}

	public void setDate(LocalDate date) {
		this.date = date;
	}

	public String getSaleOrderNumber() {
		return saleOrderNumber;
	}

	public void setSaleOrderNumber(String saleOrderNumber) {
		this.saleOrderNumber = saleOrderNumber;
	}

	public String getInvoiceNumber() {
		return invoiceNumber;
	}

	public void setInvoiceNumber(String invoiceNumber) {
		this.invoiceNumber = invoiceNumber;
	}

	public String getChannelEntry() {
		return channelEntry;
	}

	public void setChannelEntry(String channelEntry) {
		this.channelEntry = channelEntry;
	}

	public String getChannelLedger() {
		return channelLedger;
	}

	public void setChannelLedger(String channelLedger) {
		this.channelLedger = channelLedger;
	}

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public String getProductSKUCode() {
		return productSKUCode;
	}

	public void setProductSKUCode(String productSKUCode) {
		this.productSKUCode = productSKUCode;
	}

	public Long getQty() {
		return qty;
	}

	public void setQty(Long qty) {
		this.qty = qty;
	}

	public Double getUnitPrice() {
		return unitPrice;
	}

	public void setUnitPrice(Double unitPrice) {
		this.unitPrice = unitPrice;
	}

	public String getCurrency() {
		return currency;
	}

	public void setCurrency(String currency) {
		this.currency = currency;
	}

	public Double getConversionRate() {
		return conversionRate;
	}

	public void setConversionRate(Double conversionRate) {
		this.conversionRate = conversionRate;
	}

	public Double getTotal() {
		return total;
	}

	public void setTotal(Double total) {
		this.total = total;
	}

	public String getCustomerName() {
		return customerName;
	}

	public void setCustomerName(String customerName) {
		this.customerName = customerName;
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

	public Long getShippingAddressPincode() {
		return shippingAddressPincode;
	}

	public void setShippingAddressPincode(Long shippingAddressPincode) {
		this.shippingAddressPincode = shippingAddressPincode;
	}

	public String getShippingAddressPhone() {
		return shippingAddressPhone;
	}

	public void setShippingAddressPhone(String shippingAddressPhone) {
		this.shippingAddressPhone = shippingAddressPhone;
	}

	public String getShippingProvider() {
		return shippingProvider;
	}

	public void setShippingProvider(String shippingProvider) {
		this.shippingProvider = shippingProvider;
	}

	public String getAwbNum() {
		return awbNum;
	}

	public void setAwbNum(String awbNum) {
		this.awbNum = awbNum;
	}

	public Double getSales() {
		return sales;
	}

	public void setSales(Double sales) {
		this.sales = sales;
	}

	public String getSalesLedger() {
		return salesLedger;
	}

	public void setSalesLedger(String salesLedger) {
		this.salesLedger = salesLedger;
	}

	public Double getTax() {
		return tax;
	}

	public void setTax(Double tax) {
		this.tax = tax;
	}

	public String getTaxLedger() {
		return taxLedger;
	}

	public void setTaxLedger(String taxLedger) {
		this.taxLedger = taxLedger;
	}

	public String getAdditionalTax() {
		return additionalTax;
	}

	public void setAdditionalTax(String additionalTax) {
		this.additionalTax = additionalTax;
	}

	public String getAdditionalTaxLedger() {
		return additionalTaxLedger;
	}

	public void setAdditionalTaxLedger(String additionalTaxLedger) {
		this.additionalTaxLedger = additionalTaxLedger;
	}

	public String getOthercharges() {
		return othercharges;
	}

	public void setOthercharges(String othercharges) {
		this.othercharges = othercharges;
	}

	public String getOtherChargesLedger() {
		return otherChargesLedger;
	}

	public void setOtherChargesLedger(String otherChargesLedger) {
		this.otherChargesLedger = otherChargesLedger;
	}

	public Long getServiceTax() {
		return serviceTax;
	}

	public void setServiceTax(Long serviceTax) {
		this.serviceTax = serviceTax;
	}

	public String getStLedger() {
		return stLedger;
	}

	public void setStLedger(String stLedger) {
		this.stLedger = stLedger;
	}

	public Long getImei() {
		return imei;
	}

	public void setImei(Long imei) {
		this.imei = imei;
	}

	public String getGoDown() {
		return goDown;
	}

	public void setGoDown(String goDown) {
		this.goDown = goDown;
	}

	public LocalDate getDispatchDate() {
		return dispatchDate;
	}

	public void setDispatchDate(LocalDate dispatchDate) {
		this.dispatchDate = dispatchDate;
	}

	public LocalDateTime getNarration() {
		return narration;
	}

	public void setNarration(LocalDateTime narration) {
		this.narration = narration;
	}

	public String getEntity() {
		return entity;
	}

	public void setEntity(String entity) {
		this.entity = entity;
	}

	public String getVoucherTypeName() {
		return voucherTypeName;
	}

	public void setVoucherTypeName(String voucherTypeName) {
		this.voucherTypeName = voucherTypeName;
	}

	public Double getTinNo() {
		return tinNo;
	}

	public void setTinNo(Double tinNo) {
		this.tinNo = tinNo;
	}

	public LocalDate getOriginalInvoiceDate() {
		return originalInvoiceDate;
	}

	public void setOriginalInvoiceDate(LocalDate originalInvoiceDate) {
		this.originalInvoiceDate = originalInvoiceDate;
	}

	public String getOriginalSaleNo() {
		return originalSaleNo;
	}

	public void setOriginalSaleNo(String originalSaleNo) {
		this.originalSaleNo = originalSaleNo;
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

}

package com.mbb.mbbplatform.domain;

import java.time.LocalDate;
import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tallyerp9")
public class TallyERP9 {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	private LocalDate date;

	private String saleOrderNumber;

	private String invoiceCode;

	private String channelEntry;

	private String channelLedger;

	private Long qty;

	private String productName;

	private Double unitPrice;

	private Double total;

	private Double sales;

	private String salesLedger;

	private Double tax;

	private String taxLedger;

	private Double additionalTax;

	private String additionalTaxLedger;

	private Double othercharges;

	private String otherChargesLedger;

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

	public String getInvoiceCode() {
		return invoiceCode;
	}

	public void setInvoiceCode(String invoiceCode) {
		this.invoiceCode = invoiceCode;
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

	public Long getQty() {
		return qty;
	}

	public void setQty(Long qty) {
		this.qty = qty;
	}

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public Double getUnitPrice() {
		return unitPrice;
	}

	public void setUnitPrice(Double unitPrice) {
		this.unitPrice = unitPrice;
	}

	public Double getTotal() {
		return total;
	}

	public void setTotal(Double total) {
		this.total = total;
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

	public Double getAdditionalTax() {
		return additionalTax;
	}

	public void setAdditionalTax(Double additionalTax) {
		this.additionalTax = additionalTax;
	}

	public String getAdditionalTaxLedger() {
		return additionalTaxLedger;
	}

	public void setAdditionalTaxLedger(String additionalTaxLedger) {
		this.additionalTaxLedger = additionalTaxLedger;
	}

	public Double getOthercharges() {
		return othercharges;
	}

	public void setOthercharges(Double othercharges) {
		this.othercharges = othercharges;
	}

	public String getOtherChargesLedger() {
		return otherChargesLedger;
	}

	public void setOtherChargesLedger(String otherChargesLedger) {
		this.otherChargesLedger = otherChargesLedger;
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

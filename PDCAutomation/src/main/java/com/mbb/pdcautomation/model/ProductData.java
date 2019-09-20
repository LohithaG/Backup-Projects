package com.mbb.pdcautomation.model;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

/**
 * This is ProductData entity which can store Product information
 *
 */
@Entity
@Table(name = "product_information")
public class ProductData {
	@Id
	@GeneratedValue
	@Column(name = "checklist_id")
	private int checklistId;
	@NotNull
	@Column(name = "order_id")
	private String orderId;
	@NotNull
	@Column(name = "docket_number")
	private String docketNumber;
	@NotNull
	@Column(name = "checklist_date")
	private LocalDate checklistDate;

	@Column(name = "order_date")
	private LocalDate orderDate;

	@Column(name = "dispatch_date")
	private LocalDate dispatchDate;
	@NotNull
	@Column(name = "source")
	private String source;
	@NotNull
	@Column(name = "product_name")
	private String productName;
	@NotNull
	@Column(name = "product_quantity")
	private int productQuantity;
	@NotNull
	@Column(name = "product_warranty")
	private boolean productWarranty;
	@NotNull
	@Column(name = "msn")
	private String msn;
	@NotNull
	@Column(name = "warranty_period")
	private int warrantyPeriod;
	@NotNull
	@Column(name = "mode_of_payment")
	private String modeOfPayment;
	@NotNull
	@Column(name = "courier_provider_name")
	private String courierProviderName;
	@NotNull
	@Column(name = "shipment_price")
	private double shipmentPrice;
	@NotNull
	@Column(name = "sales_price")
	private double salesPrice;
	@NotNull
	@Column(name = "entry_tax")
	private double entryTax;
	@NotNull
	@Column(name = "check_pincode")
	private boolean checkPincode;
	@NotNull
	@Column(name = "customer_image")
	private boolean customerImage;
	@NotNull
	@Column(name = "form_name")
	private String formName;
	@NotNull
	@Column(name = "dispatched")
	private boolean dispatched;
	@NotNull
	@Column(name = "invoice_to_accountant")
	private boolean invoiceToAccountant;
	@NotNull
	@Column(name = "created_by")
	private String createdBy;
	@NotNull
	@Column(name = "status")
	private int status;

	/**
	 * This is default constructor which is used by hibernate to create instance
	 * of this entity
	 */
	public ProductData() {

	}

	public int getChecklistId() {
		return checklistId;
	}

	public void setChecklistId(int checklistId) {
		this.checklistId = checklistId;
	}

	public String getOrderId() {
		return orderId;
	}

	public void setOrderId(String orderId) {
		this.orderId = orderId;
	}

	public String getDocketNumber() {
		return docketNumber;
	}

	public void setDocketNumber(String docketNumber) {
		this.docketNumber = docketNumber;
	}

	public LocalDate getChecklistDate() {
		return checklistDate;
	}

	public void setChecklistDate(LocalDate checklistDate) {
		this.checklistDate = checklistDate;
	}

	public LocalDate getOrderDate() {
		return orderDate;
	}

	public void setOrderDate(LocalDate orderDate) {
		this.orderDate = orderDate;
	}

	public LocalDate getDispatchDate() {
		return dispatchDate;
	}

	public void setDispatchDate(LocalDate dispatchDate) {
		this.dispatchDate = dispatchDate;
	}

	public String getSource() {
		return source;
	}

	public void setSource(String source) {
		this.source = source;
	}

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public int getProductQuantity() {
		return productQuantity;
	}

	public void setProductQuantity(int productQuantity) {
		this.productQuantity = productQuantity;
	}

	public boolean isProductWarranty() {
		return productWarranty;
	}

	public void setProductWarranty(boolean productWarranty) {
		this.productWarranty = productWarranty;
	}

	public String getMsn() {
		return msn;
	}

	public void setMsn(String msn) {
		this.msn = msn;
	}

	public int getWarrantyPeriod() {
		return warrantyPeriod;
	}

	public void setWarrantyPeriod(int warrantyPeriod) {
		this.warrantyPeriod = warrantyPeriod;
	}

	public String getModeOfPayment() {
		return modeOfPayment;
	}

	public void setModeOfPayment(String modeOfPayment) {
		this.modeOfPayment = modeOfPayment;
	}

	public String getCourierProviderName() {
		return courierProviderName;
	}

	public void setCourierProviderName(String courierProviderName) {
		this.courierProviderName = courierProviderName;
	}

	public double getShipmentPrice() {
		return shipmentPrice;
	}

	public void setShipmentPrice(double shipmentPrice) {
		this.shipmentPrice = shipmentPrice;
	}

	public double getsalesPrice() {
		return salesPrice;
	}

	public void setSalesPrice(double salesPrice) {
		this.salesPrice = salesPrice;
	}

	public double getEntryTax() {
		return entryTax;
	}

	public void setEntryTax(double entryTax) {
		this.entryTax = entryTax;
	}

	public boolean isCheckPincode() {
		return checkPincode;
	}

	public void setCheckPincode(boolean checkPincode) {
		this.checkPincode = checkPincode;
	}

	public boolean isCustomerImage() {
		return customerImage;
	}

	public void setCustomerImage(boolean customerImage) {
		this.customerImage = customerImage;
	}

	public String getFormName() {
		return formName;
	}

	public void setFormName(String formName) {
		this.formName = formName;
	}

	public boolean isDispatched() {
		return dispatched;
	}

	public void setDispatched(boolean dispatched) {
		this.dispatched = dispatched;
	}

	public boolean isInvoiceToAccountant() {
		return invoiceToAccountant;
	}

	public void setInvoiceToAccountant(boolean invoiceToAccountant) {
		this.invoiceToAccountant = invoiceToAccountant;
	}

	public String getCreatedBy() {
		return createdBy;
	}

	public void setCreatedBy(String createdBy) {
		this.createdBy = createdBy;
	}

	public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
	}

}

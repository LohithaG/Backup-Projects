package com.mbb.pdcautomation.model;

/**
 * This model class to store A single checklist information
 */
public class Product {

	private int checklistId;

	private String orderId;

	private String docketNumber;

	private String checklistDate;

	private String orderDate;

	private String dispatchDate;

	private String source;

	private String productName;

	private int productQuantity;

	private boolean productWarranty;

	private String msn;

	private int warrantyPeriod;

	private String modeOfPayment;

	private String courierProviderName;

	private double shipmentPrice;

	private double salesPrice;

	private double entryTax;

	private boolean checkPincode;

	private boolean customerImage;

	private String formName;

	private boolean dispatched;

	private boolean invoiceToAccountant;

	private String createdBy;

	private int status;

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

	public String getChecklistDate() {
		return checklistDate;
	}

	public void setChecklistDate(String checklistDate) {
		this.checklistDate = checklistDate;
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
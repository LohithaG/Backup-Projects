package com.mbb.mbbplatform.domain;

import java.time.LocalDate;
import java.time.LocalDateTime;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "busymanagement")
public class BusyManagement {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	private String vchSeries;

	private LocalDate vchOrBillDate;

	private String vchOrBillNo;

	private String saleOrPurchaseType;

	private String partyName;

	private String mcName;

	private String itemName;

	private Double quantity;

	private String unit;

	private Double price;

	private Double amount;

	private String vchOptFeild;

	private String billedPartyName;

	private String billedAddLine1;

	private String billedAddLine2;

	private String billedAddLine3;

	private String billedAddLine4;

	private String billedPartyMobileNo;

	private String bsName;

	private Double bsPercent;

	private Double bsAmount;

	private String bs1Name;

	private Double bs1Amount;

	private String bs2Name;

	private Double bs2Amount;

	private String bs3Name;

	private Double bs3Amount;

	private Long imei;

	private String grOrRrNo;

	private String transport;

	private Double total;

	private LocalDateTime createdDate;

	private LocalDateTime updatedDate;

	private LocalDateTime dateInCSvfile;

	public void setMcName(String mcName) {
		this.mcName = mcName;
	}

	public String getItemName() {
		return itemName;
	}

	public void setItemName(String itemName) {
		this.itemName = itemName;
	}

	public Double getQuantity() {
		return quantity;
	}

	public void setQuantity(Double quantity) {
		this.quantity = quantity;
	}

	public String getUnit() {
		return unit;
	}

	public void setUnit(String unit) {
		this.unit = unit;
	}

	public Double getPrice() {
		return price;
	}

	public void setPrice(Double price) {
		this.price = price;
	}

	public Double getAmount() {
		return amount;
	}

	public Long getId() {
		return id;
	}

	public String getVchSeries() {
		return vchSeries;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public void setVchSeries(String vchSeries) {
		this.vchSeries = vchSeries;
	}

	public String getVchOrBillNo() {
		return vchOrBillNo;
	}

	public LocalDate getVchOrBillDate() {
		return vchOrBillDate;
	}

	public void setVchOrBillDate(LocalDate vchOrBillDate) {
		this.vchOrBillDate = vchOrBillDate;
	}

	public void setVchOrBillNo(String vchOrBillNo) {
		this.vchOrBillNo = vchOrBillNo;
	}

	public String getPartyName() {
		return partyName;
	}

	public String getSaleOrPurchaseType() {
		return saleOrPurchaseType;
	}

	public void setSaleOrPurchaseType(String saleOrPurchaseType) {
		this.saleOrPurchaseType = saleOrPurchaseType;
	}

	public void setPartyName(String partyName) {
		this.partyName = partyName;
	}

	public String getMcName() {
		return mcName;
	}

	public void setAmount(Double amount) {
		this.amount = amount;
	}

	public String getVchOptFeild() {
		return vchOptFeild;
	}

	public void setVchOptFeild(String vchOptFeild) {
		this.vchOptFeild = vchOptFeild;
	}

	public String getBilledPartyName() {
		return billedPartyName;
	}

	public void setBilledPartyName(String billedPartyName) {
		this.billedPartyName = billedPartyName;
	}

	public String getBilledAddLine1() {
		return billedAddLine1;
	}

	public void setBilledAddLine1(String billedAddLine1) {
		this.billedAddLine1 = billedAddLine1;
	}

	public String getBilledAddLine2() {
		return billedAddLine2;
	}

	public void setBilledAddLine2(String billedAddLine2) {
		this.billedAddLine2 = billedAddLine2;
	}

	public String getBilledAddLine3() {
		return billedAddLine3;
	}

	public void setBilledAddLine3(String billedAddLine3) {
		this.billedAddLine3 = billedAddLine3;
	}

	public String getBilledAddLine4() {
		return billedAddLine4;
	}

	public void setBilledAddLine4(String billedAddLine4) {
		this.billedAddLine4 = billedAddLine4;
	}

	public String getBilledPartyMobileNo() {
		return billedPartyMobileNo;
	}

	public void setBilledPartyMobileNo(String billedPartyMobileNo) {
		this.billedPartyMobileNo = billedPartyMobileNo;
	}

	public String getBsName() {
		return bsName;
	}

	public void setBsName(String bsName) {
		this.bsName = bsName;
	}

	public Double getBsPercent() {
		return bsPercent;
	}

	public void setBsPercent(Double bsPercent) {
		this.bsPercent = bsPercent;
	}

	public Double getBsAmount() {
		return bsAmount;
	}

	public void setBsAmount(Double bsAmount) {
		this.bsAmount = bsAmount;
	}

	public String getBs1Name() {
		return bs1Name;
	}

	public void setBs1Name(String bs1Name) {
		this.bs1Name = bs1Name;
	}

	public Double getBs1Amount() {
		return bs1Amount;
	}

	public void setBs1Amount(Double bs1Amount) {
		this.bs1Amount = bs1Amount;
	}

	public String getBs2Name() {
		return bs2Name;
	}

	public void setBs2Name(String bs2Name) {
		this.bs2Name = bs2Name;
	}

	public Double getBs2Amount() {
		return bs2Amount;
	}

	public void setBs2Amount(Double bs2Amount) {
		this.bs2Amount = bs2Amount;
	}

	public String getBs3Name() {
		return bs3Name;
	}

	public Long getImei() {
		return imei;
	}

	public void setBs3Name(String bs3Name) {
		this.bs3Name = bs3Name;
	}

	public Double getBs3Amount() {
		return bs3Amount;
	}

	public void setBs3Amount(Double bs3Amount) {
		this.bs3Amount = bs3Amount;
	}

	public void setImei(Long imei) {
		this.imei = imei;
	}

	public String getGrOrRrNo() {
		return grOrRrNo;
	}

	public LocalDateTime getDateInCSvfile() {
		return dateInCSvfile;
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

	public void setDateInCSvfile(LocalDateTime dateInCSvfile) {
		this.dateInCSvfile = dateInCSvfile;
	}

	public void setGrOrRrNo(String grOrRrNo) {
		this.grOrRrNo = grOrRrNo;
	}

	public void setTotal(Double total) {
		this.total = total;
	}

	public Double getTotal() {
		return total;
	}

	public void setTransport(String transport) {
		this.transport = transport;
	}

	public String getTransport() {
		return transport;
	}

	public LocalDateTime getCreatedDate() {
		return createdDate;
	}

}

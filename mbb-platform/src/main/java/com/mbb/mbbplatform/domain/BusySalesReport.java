package com.mbb.mbbplatform.domain;

import java.time.LocalDate;
import java.time.LocalDateTime;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "busysalesreport")
public class BusySalesReport {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	private Double bs1Percent;

	private Double bs1Amount;

	private String bs2Name;

	private Double bs2Percent;

	private Double bs2Amount;

	private String bs3Name;

	private Double bs3Percent;

	private Double bs3Amount;

	private String bs4Name;

	private Double bs4Amount;

	private String bs5Name;

	private Double bs5Amount;

	private String bs6Name;

	private Double bs6Amount;

	private Long imei;

	private String grOrRrNo;

	private String transport;

	private Double total;

	private Double conversionRate;

	private LocalDateTime createdDate;

	private LocalDateTime updatedDate;

	private LocalDateTime dateInCSvfile;

	private String billedAddLine3;

	private String vchOptFeild;

	private String billedAddLine1;

	private String billedAddLine2;

	private String billedAddLine4;

	private String billedPartyMobileNo;

	private String bsName;

	private Double bsPercent;

	private String bs1Name;

	private Double bsAmount;

	private String billedPartyName;

	private String vchSeries;

	private LocalDate vchOrBillDate;

	private String partyName;

	private String vchOrBillNo;

	private String saleOrPurchaseType;

	private String mcName;

	private String itemName;

	private Double price;

	private Double quantity;

	private String unit;

	private Double amount;

	public Double getBs1Percent() {
		return bs1Percent;
	}

	public void setBs1Percent(Double bs1Percent) {
		this.bs1Percent = bs1Percent;
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

	public Double getBs2Percent() {
		return bs2Percent;
	}

	public void setBs2Percent(Double bs2Percent) {
		this.bs2Percent = bs2Percent;
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

	public void setBs3Name(String bs3Name) {
		this.bs3Name = bs3Name;
	}

	public Double getBs3Percent() {
		return bs3Percent;
	}

	public void setBs3Percent(Double bs3Percent) {
		this.bs3Percent = bs3Percent;
	}

	public Double getBs3Amount() {
		return bs3Amount;
	}

	public void setBs3Amount(Double bs3Amount) {
		this.bs3Amount = bs3Amount;
	}

	public String getBs4Name() {
		return bs4Name;
	}

	public void setBs4Name(String bs4Name) {
		this.bs4Name = bs4Name;
	}

	public Double getBs4Amount() {
		return bs4Amount;
	}

	public void setBs4Amount(Double bs4Amount) {
		this.bs4Amount = bs4Amount;
	}

	public String getBs5Name() {
		return bs5Name;
	}

	public void setBs5Name(String bs5Name) {
		this.bs5Name = bs5Name;
	}

	public Double getBs5Amount() {
		return bs5Amount;
	}

	public void setBs5Amount(Double bs5Amount) {
		this.bs5Amount = bs5Amount;
	}

	public String getBs6Name() {
		return bs6Name;
	}

	public void setBs6Name(String bs6Name) {
		this.bs6Name = bs6Name;
	}

	public Double getBs6Amount() {
		return bs6Amount;
	}

	public void setBs6Amount(Double bs6Amount) {
		this.bs6Amount = bs6Amount;
	}

	public Double getConversionRate() {
		return conversionRate;
	}

	public void setConversionRate(Double conversionRate) {
		this.conversionRate = conversionRate;
	}

	public String getBilledAddLine2() {
		return billedAddLine2;
	}

	public String getBilledAddLine1() {
		return billedAddLine1;
	}

	public void setBilledAddLine1(String billedAddLine1) {
		this.billedAddLine1 = billedAddLine1;
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

	public void setBilledPartyMobileNo(String billedPartyMobileNo) {
		this.billedPartyMobileNo = billedPartyMobileNo;
	}

	public void setBilledAddLine4(String billedAddLine4) {
		this.billedAddLine4 = billedAddLine4;
	}

	public String getBilledPartyMobileNo() {
		return billedPartyMobileNo;
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

	public String getBs1Name() {
		return bs1Name;
	}

	public Double getBsAmount() {
		return bsAmount;
	}

	public void setBsAmount(Double bsAmount) {
		this.bsAmount = bsAmount;
	}

	public void setBs1Name(String bs1Name) {
		this.bs1Name = bs1Name;
	}

	public Long getImei() {
		return imei;
	}

	public String getGrOrRrNo() {
		return grOrRrNo;
	}

	public void setImei(Long imei) {
		this.imei = imei;
	}

	public void setGrOrRrNo(String grOrRrNo) {
		this.grOrRrNo = grOrRrNo;
	}

	public Double getTotal() {
		return total;
	}

	public String getTransport() {
		return transport;
	}

	public void setTransport(String transport) {
		this.transport = transport;
	}

	public void setTotal(Double total) {
		this.total = total;
	}

	public String getVchSeries() {
		return vchSeries;
	}

	public void setVchSeries(String vchSeries) {
		this.vchSeries = vchSeries;
	}

	public LocalDate getVchOrBillDate() {
		return vchOrBillDate;
	}

	public void setVchOrBillDate(LocalDate vchOrBillDate) {
		this.vchOrBillDate = vchOrBillDate;
	}

	public String getVchOrBillNo() {
		return vchOrBillNo;
	}

	public void setVchOrBillNo(String vchOrBillNo) {
		this.vchOrBillNo = vchOrBillNo;
	}

	public String getSaleOrPurchaseType() {
		return saleOrPurchaseType;
	}

	public void setSaleOrPurchaseType(String saleOrPurchaseType) {
		this.saleOrPurchaseType = saleOrPurchaseType;
	}

	public String getPartyName() {
		return partyName;
	}

	public void setPartyName(String partyName) {
		this.partyName = partyName;
	}

	public String getMcName() {
		return mcName;
	}

	public void setItemName(String itemName) {
		this.itemName = itemName;
	}

	public void setMcName(String mcName) {
		this.mcName = mcName;
	}

	public String getItemName() {
		return itemName;
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

	public Double getAmount() {
		return amount;
	}

	public Double getPrice() {
		return price;
	}

	public void setPrice(Double price) {
		this.price = price;
	}

	public void setAmount(Double amount) {
		this.amount = amount;
	}

	public String getBilledPartyName() {
		return billedPartyName;
	}

	public String getVchOptFeild() {
		return vchOptFeild;
	}

	public void setVchOptFeild(String vchOptFeild) {
		this.vchOptFeild = vchOptFeild;
	}

	public LocalDateTime getUpdatedDate() {
		return updatedDate;
	}

	public void setBilledPartyName(String billedPartyName) {
		this.billedPartyName = billedPartyName;
	}

	public LocalDateTime getCreatedDate() {
		return createdDate;
	}

	public void setCreatedDate(LocalDateTime createdDate) {
		this.createdDate = createdDate;
	}

	public void setUpdatedDate(LocalDateTime updatedDate) {
		this.updatedDate = updatedDate;
	}

	public Long getId() {
		return id;
	}

	public LocalDateTime getDateInCSvfile() {
		return dateInCSvfile;
	}

	public void setDateInCSvfile(LocalDateTime dateInCSvfile) {
		this.dateInCSvfile = dateInCSvfile;
	}

	public void setId(Long id) {
		this.id = id;
	}

}

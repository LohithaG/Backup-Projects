package com.mbb.mbbplatform.domain;

import java.time.LocalDateTime;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "cyclecountreport")
public class CycleCountReport {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	private String cycleCountCode;

	private String subCycleCountCode;

	private String shelfCode;

	private String shelfCodeStatus;

	private String itemCodes;

	private String updated;

	private String shelfUpdated;

	private String user;

	private LocalDateTime createdDate;

	private LocalDateTime updatedDate;

	private LocalDateTime dateInCSvfile;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getCycleCountCode() {
		return cycleCountCode;
	}

	public void setCycleCountCode(String cycleCountCode) {
		this.cycleCountCode = cycleCountCode;
	}

	public String getSubCycleCountCode() {
		return subCycleCountCode;
	}

	public void setSubCycleCountCode(String subCycleCountCode) {
		this.subCycleCountCode = subCycleCountCode;
	}

	public String getShelfCode() {
		return shelfCode;
	}

	public LocalDateTime getCreatedDate() {
		return createdDate;
	}

	public void setUpdatedDate(LocalDateTime updatedDate) {
		this.updatedDate = updatedDate;
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

	public void setDateInCSvfile(LocalDateTime dateInCSvfile) {
		this.dateInCSvfile = dateInCSvfile;
	}

	public void setShelfCode(String shelfCode) {
		this.shelfCode = shelfCode;
	}

	public String getShelfCodeStatus() {
		return shelfCodeStatus;
	}

	public void setShelfCodeStatus(String shelfCodeStatus) {
		this.shelfCodeStatus = shelfCodeStatus;
	}

	public String getItemCodes() {
		return itemCodes;
	}

	public void setItemCodes(String itemCodes) {
		this.itemCodes = itemCodes;
	}

	public String getUpdated() {
		return updated;
	}

	public void setUpdated(String updated) {
		this.updated = updated;
	}

	public String getShelfUpdated() {
		return shelfUpdated;
	}

	public void setShelfUpdated(String shelfUpdated) {
		this.shelfUpdated = shelfUpdated;
	}

	public String getUser() {
		return user;
	}

	public void setUser(String user) {
		this.user = user;
	}

}

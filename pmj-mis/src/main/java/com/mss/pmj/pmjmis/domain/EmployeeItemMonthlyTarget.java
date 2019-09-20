package com.mss.pmj.pmjmis.domain;

import java.time.ZonedDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

@Entity
@Table(name = "empItemMonthlyTgt")
public class EmployeeItemMonthlyTarget {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	private Double quantity;

	private Double value;

	private String itemType;

	private String tgtMonth;

	private Character empClass;

	private Integer workingDays;

	@OneToOne
	@JoinColumn(name = "emp")
	private Employee emp;

	private Double conversion;

	private Integer walkins;

	private Double ticketSize;

	@CreationTimestamp
	private ZonedDateTime createdTime;

	@UpdateTimestamp
	private ZonedDateTime updatedTime;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Double getQuantity() {
		return quantity;
	}

	public void setQuantity(Double quantity) {
		this.quantity = quantity;
	}

	public Double getValue() {
		return value;
	}

	public void setValue(Double value) {
		this.value = value;
	}

	public String getItemType() {
		return itemType;
	}

	public void setItemType(String itemType) {
		this.itemType = itemType;
	}

	public String getTgtMonth() {
		return tgtMonth;
	}

	public void setTgtMonth(String tgtMonth) {
		this.tgtMonth = tgtMonth;
	}

	public Character getEmpClass() {
		return empClass;
	}

	public void setEmpClass(Character empClass) {
		this.empClass = empClass;
	}

	public Integer getWorkingDays() {
		return workingDays;
	}

	public void setWorkingDays(Integer workingDays) {
		this.workingDays = workingDays;
	}

	public Employee getEmp() {
		return emp;
	}

	public void setEmp(Employee emp) {
		this.emp = emp;
	}

	public Double getConversion() {
		return conversion;
	}

	public void setConversion(Double conversion) {
		this.conversion = conversion;
	}

	public Integer getWalkins() {
		return walkins;
	}

	public void setWalkins(Integer walkins) {
		this.walkins = walkins;
	}

	public Double getTicketSize() {
		return ticketSize;
	}

	public void setTicketSize(Double ticketSize) {
		this.ticketSize = ticketSize;
	}

	public ZonedDateTime getCreatedTime() {
		return createdTime;
	}

	public void setCreatedTime(ZonedDateTime createdTime) {
		this.createdTime = createdTime;
	}

	public ZonedDateTime getUpdatedTime() {
		return updatedTime;
	}

	public void setUpdatedTime(ZonedDateTime updatedTime) {
		this.updatedTime = updatedTime;
	}

}

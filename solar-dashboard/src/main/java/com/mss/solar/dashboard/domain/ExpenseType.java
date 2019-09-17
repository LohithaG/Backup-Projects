package com.mss.solar.dashboard.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "expensetype")
public class ExpenseType {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	private String expenseType;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getExpenseType() {
		return expenseType;
	}

	public void setExpenseType(String expenseType) {
		this.expenseType = expenseType;
	}

}

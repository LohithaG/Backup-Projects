package com.mss.solar.dashboard.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "expensesdetails")
public class ExpensesDetails {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	@ManyToOne
	@JoinColumn(name = "expenseTypeId")
	private ExpenseType expenseTypeId;

	private Double amount;
	
	@Column(columnDefinition = "LONGTEXT")
	private String billImage;
	
	private String billDate;
	
	@ManyToOne
	@JoinColumn(name = "expensesId")
	private Expenses expensesId;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public ExpenseType getExpenseTypeId() {
		return expenseTypeId;
	}

	public void setExpenseTypeId(ExpenseType expenseTypeId) {
		this.expenseTypeId = expenseTypeId;
	}

	public Double getAmount() {
		return amount;
	}

	public void setAmount(Double amount) {
		this.amount = amount;
	}

	public String getBillImage() {
		return billImage;
	}

	public void setBillImage(String billImage) {
		this.billImage = billImage;
	}
	

	public String getBillDate() {
		return billDate;
	}

	public void setBillDate(String billDate) {
		this.billDate = billDate;
	}

	public Expenses getExpensesId() {
		return expensesId;
	}

	public void setExpensesId(Expenses expensesId) {
		this.expensesId = expensesId;
	}

	
}

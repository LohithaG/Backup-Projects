package com.mss.solar.dashboard.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mss.solar.dashboard.domain.ExpenseType;

public interface ExpensesTypeRepository extends JpaRepository<ExpenseType, Long> {

	ExpenseType findById(Long expenseTypeid);

}

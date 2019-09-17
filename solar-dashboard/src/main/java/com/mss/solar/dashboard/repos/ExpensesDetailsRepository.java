package com.mss.solar.dashboard.repos;

import java.util.Collection;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mss.solar.dashboard.domain.Expenses;
import com.mss.solar.dashboard.domain.ExpensesDetails;

public interface ExpensesDetailsRepository extends JpaRepository<ExpensesDetails, Long> {

	Collection<ExpensesDetails> findByExpensesId(Expenses expenses);

	ExpensesDetails findById(Long id);
}

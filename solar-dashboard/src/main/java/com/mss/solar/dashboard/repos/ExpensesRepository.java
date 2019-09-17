package com.mss.solar.dashboard.repos;

import java.util.Collection;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mss.solar.dashboard.domain.Driver;
import com.mss.solar.dashboard.domain.Expenses;
import com.mss.solar.dashboard.domain.LoadDetails;

public interface ExpensesRepository extends JpaRepository<Expenses, Long> {

	Expenses findById(Long id);

	Collection<Expenses> findByDriverId(Driver driver);

	Expenses findByLoadNumber(LoadDetails loadObj);

}

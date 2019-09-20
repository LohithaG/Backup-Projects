package com.mss.pmj.pmjmis.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mss.pmj.pmjmis.domain.Sales;
import com.mss.pmj.pmjmis.domain.SalesReturns;

public interface SalesReturnsRepository extends JpaRepository<SalesReturns, Long> {

	SalesReturns findBySales(Sales sales);

}
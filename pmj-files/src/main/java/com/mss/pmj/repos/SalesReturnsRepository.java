package com.mss.pmj.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.mss.pmj.domain.Sales;
import com.mss.pmj.domain.SalesReturns;

public interface SalesReturnsRepository extends JpaRepository<SalesReturns, Long> {

	SalesReturns findBySales(Sales sales);

	@Query(value = "SELECT * FROM sales_returns WHERE doc_no=?1 AND stock_code=?2 AND variant_name=?3 AND transaction_date = ?4", nativeQuery = true)
	SalesReturns findByDocNoAndStockCodeAndVariantNameAndTransactionDate(String string, String string2, String string3,
			String string4);

}

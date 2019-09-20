package com.mss.pmj.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.mss.pmj.domain.Sales;

public interface SalesRepository extends JpaRepository<Sales, Long> {

	@Query(value = "SELECT * FROM sales WHERE label_no=?1 AND transaction_date = ?2", nativeQuery = true)
	Sales findByLabelNoAndTransactionDate(String labelNo, String transactionDate);

	@Query(value = "SELECT * FROM sales WHERE doc_number=?1 AND label_no=?2 AND variant_id=?3 AND transaction_date = ?4", nativeQuery = true)
	Sales findByDocNumberAndLabelNoAndVariantIdAndTransactionDate(String docNumber,String labelNo,Long variantId, String transactionDate);
}

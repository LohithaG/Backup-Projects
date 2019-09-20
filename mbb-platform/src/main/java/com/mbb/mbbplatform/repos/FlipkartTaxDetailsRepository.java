package com.mbb.mbbplatform.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.mbb.mbbplatform.domain.FlipkartTaxDetails;

public interface FlipkartTaxDetailsRepository extends JpaRepository<FlipkartTaxDetails, Long> {

	@Query(value = "SELECT * FROM mbbinventory.flipkarttaxdetails WHERE fee_name in('Fixed Fee','Shipping Fee','Commission','Collection Fee') and order_item_id=?1", nativeQuery = true)
	List<FlipkartTaxDetails> findByOrderItemId(String stringCellValue);
	@Query(value = "SELECT * FROM mbbinventory.flipkarttaxdetails WHERE order_item_id=?1 and fee_name =?2  ", nativeQuery = true)
	List<FlipkartTaxDetails> findByOrderItemIdAndFeeName(String orderItemId, String feeName);
	List<FlipkartTaxDetails> findAllByOrderItemId(String orderItemId);

}

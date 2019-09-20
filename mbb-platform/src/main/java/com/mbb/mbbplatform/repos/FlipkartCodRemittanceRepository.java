package com.mbb.mbbplatform.repos;

import java.util.Collection;

import javax.validation.constraints.NotNull;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.mbb.mbbplatform.domain.FlipkartCodRemittance;

public interface FlipkartCodRemittanceRepository  extends JpaRepository<FlipkartCodRemittance,Long> {

	FlipkartCodRemittance findByOrderItemId(String orderItemId);
	@Query(value = "SELECT * FROM mbbinventory.flipkartcodremittance WHERE settlement_date >= ?1 AND settlement_date <= ?2", nativeQuery = true)
    Collection<FlipkartCodRemittance> getBetweenDates(@NotNull String startDate, @NotNull String endDate);
	
	
	@Query(value = "SELECT * FROM mbbinventory.flipkartcodremittance WHERE settlement_date >= ?1 AND settlement_date <= ?2 AND return_type=?3", nativeQuery = true)
	Collection<FlipkartCodRemittance> getBetweenDatesAndReturnType(@NotNull String startDate, @NotNull String endDate,
			@NotNull String returnType);
	
	@Query(value = "SELECT * FROM mbbinventory.flipkartcodremittance WHERE order_item_id = ?1  AND return_type='CUSTOMER RETURN'", nativeQuery = true)
	FlipkartCodRemittance findByOrderItemIdAndReturnType(String orderId);
}

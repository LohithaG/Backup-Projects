package com.mbb.mbbplatform.repos;

import java.util.List;

import javax.validation.constraints.NotNull;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.mbb.mbbplatform.domain.AmazonCodRemittance;

public interface AmazonCodRemittanceRepository extends JpaRepository<AmazonCodRemittance,Long>{

	AmazonCodRemittance findByOrderId(String orderId);
	@Query(value = "SELECT * FROM mbbinventory.amazoncodremittance WHERE date_time >= ?1 AND date_time <= ?2", nativeQuery = true)

	List<AmazonCodRemittance> getBetweenDates(@NotNull String startDate, @NotNull String endDate);

	@Query(value = "SELECT * FROM mbbinventory.amazoncodremittance WHERE date_time >= ?1 AND date_time <= ?2 AND type=?3", nativeQuery = true)
	List<AmazonCodRemittance> getBetweenDatesAndType(@NotNull String startDate, @NotNull String endDate,
			@NotNull String type);

}

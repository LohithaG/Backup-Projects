package com.mbb.mbbplatform.repos;

import java.util.Collection;
import java.util.List;

import javax.validation.constraints.NotNull;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.web.bind.annotation.RequestParam;

import com.mbb.mbbplatform.domain.CODRemittance;

public interface CODRemittanceRepository extends JpaRepository<CODRemittance, Long> {

	public List<CODRemittance> findByShippingAggregator(String shippingAggregator);

	public List<CODRemittance> findByRemittanceStatus(String status);

	List<CODRemittance> findByShippingAggregatorAndRemittanceStatus(String shippingAggregator, String status);
	
	List<CODRemittance> findByTrackingNo(String trackingId);
	@Query(value = "SELECT * FROM mbbinventory.codremittance WHERE shipping_aggregator='SHIPROCKET'" , nativeQuery = true )
	public List<CODRemittance> findAllByShippingAggregator();
	@Query(value = "SELECT * FROM mbbinventory.codremittance WHERE remitted_date >= ?1 AND remitted_date <= ?2 AND shipping_aggregator=?3 AND remittance_status=?4", nativeQuery = true )
	List<CODRemittance> getCODRemittanceDetails(@NotNull String startDate, @NotNull String endDate  , @NotNull @RequestParam String shippingAggregator, @NotNull @RequestParam String status);


	@Query(value = "SELECT * FROM mbbinventory.codremittance WHERE remitted_date >= ?1 AND remitted_date <= ?2 ", nativeQuery = true )
	Collection<CODRemittance> getCODRemittanceReports(@NotNull String startDate, @NotNull String endDate  );
	
	
	
	@Query(value = "SELECT * FROM mbbinventory.codremittance WHERE remitted_date >= ?1 AND remitted_date <= ?2", nativeQuery = true)
	List<CODRemittance> findByStartDateAndEndDate(@NotNull String startDate, @NotNull String endDate);

	
	@Query(value = "SELECT * FROM mbbinventory.codremittance WHERE remitted_date >= ?1 AND remitted_date <= ?2 AND shipping_aggregator = ?3", nativeQuery = true)
	List<CODRemittance> findByStartDateAndEndDateAndShippingAggregator(@NotNull String startDate, @NotNull String endDate,@NotNull String shippingAggregator);

	
	@Query(value = "SELECT * FROM mbbinventory.codremittance WHERE remitted_date >= ?1 AND remitted_date <= ?2 AND remittance_status = ?3", nativeQuery = true)
	List<CODRemittance> findByStartDateAndEndDateAndStatus(@NotNull String startDate, @NotNull String endDate,@NotNull String status);
	
	Collection<CODRemittance> findAllByShippingAggregator(String string);

}

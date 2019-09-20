package com.mbb.mbbplatform.repos;

import java.time.ZonedDateTime;
import java.util.Collection;
import java.util.List;

import javax.validation.constraints.NotNull;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.mbb.mbbplatform.domain.Dispatch;

public interface DispatchRepository extends JpaRepository<Dispatch, Long> {

	Collection<Dispatch> findByBarcode(String barcode);

	@Query("SELECT dispatch FROM Dispatch dispatch where dispatch.createdTime <= ?1")
	Collection<Dispatch> findByLastWeekData(ZonedDateTime lastDate);

	@Query(value = "SELECT * FROM mbbinventory.dispatch WHERE created_time >= ?1 AND created_time <= ?2 ", nativeQuery = true)

	Collection<Dispatch> findDispatchDetails(@NotNull String startDate, @NotNull String endDate);

	@Query(value = "SELECT *,count(*) FROM mbbinventory.dispatch WHERE created_time >= ?1 AND created_time <= ?2 GROUP BY invoice_id HAVING COUNT(invoice_id) > 1", nativeQuery = true)

	Collection<Dispatch> findDispatchDetailsGroupBy(@NotNull String startDate, @NotNull String endDate);

	List<Dispatch> findByInvoiceId(String invoiceId);

	@Query(value = "SELECT * FROM mbbinventory.dispatch WHERE created_time >= ?1 AND created_time <= ?2 AND channel=?3", nativeQuery = true)

	Collection<Dispatch> findDispatchDetailsOnDatesAndChannel(@NotNull String startDate, String endDate1, Long channel);

	@Query(value = "SELECT * FROM mbbinventory.dispatch where product_return=true", nativeQuery = true)
	List<Dispatch> findBylastReturnRecord();

	List<Dispatch> findByProductReturn(Boolean returnProduct);

	@Query(value = "SELECT * FROM mbbinventory.dispatch WHERE created_time >= ?1 AND created_time <= ?2 AND channel=?3 AND facility_id=?4", nativeQuery = true)

	Collection<Dispatch> findDispatchDetailsOnChannelFacility(@NotNull String startDate, @NotNull String endDate,
			@NotNull Long channel, Long facilityId);
	
	@Query(value = "SELECT * FROM mbbinventory.dispatch WHERE created_time >= ?1 AND created_time <= ?2 AND channel=?3 ", nativeQuery = true)

	Collection<Dispatch> findDispatchDetailsOnChannel(@NotNull String startDate, @NotNull String endDate,
			@NotNull Long channel);
	
	@Query(value = "SELECT * FROM mbbinventory.dispatch WHERE created_time >= ?1 AND created_time <= ?2  AND facility_id=?3", nativeQuery = true)

	Collection<Dispatch> findDispatchDetailsOnFacility(@NotNull String startDate, @NotNull String endDate,
			@NotNull Long facilityId);
}

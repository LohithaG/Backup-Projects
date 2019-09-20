package com.mbb.mbbplatform.repos;

import java.util.List;

import javax.validation.constraints.NotNull;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.mbb.mbbplatform.domain.TransferInventory;

public interface TransferInventoryRepository extends JpaRepository<TransferInventory, Long> {

	@Query(value = "SELECT * FROM mbbinventory.transferinventory WHERE created_time >= ?1 AND created_time <= ?2 ", nativeQuery = true)
	List<TransferInventory> findByStartAndEndDates(@NotNull String startDate, @NotNull String endDate);

	@Query(value = "SELECT * FROM mbbinventory.transferinventory WHERE created_time >= ?1 AND created_time <= ?2 AND status_id=?3  ", nativeQuery = true)
	List<TransferInventory> findByStartAndEndDatesAndStatusId(@NotNull String startDate, @NotNull String endDate,
			@NotNull Long statusId);

	@Query(value = "SELECT * FROM mbbinventory.transferinventory ORDER BY ID DESC limit 1 ", nativeQuery = true)
	TransferInventory findBylastRecord();
}

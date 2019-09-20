package com.mbb.mbbplatform.repos;

import java.util.Collection;
import java.util.List;

import javax.validation.constraints.NotNull;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.web.bind.annotation.PathVariable;

import com.mbb.mbbplatform.domain.Inventory;

public interface InventoryRepository extends JpaRepository<Inventory, Long> {

	Inventory findBySkuCode(String skuCode);

	Inventory findBySkuCodeAndActive(String skuCode, Boolean active);

	Inventory findByBarcodeId(@NotNull String barcodeId);

	@Query(value = "SELECT * FROM mbbinventory.inventory ORDER BY sku_code ASC", nativeQuery = true)
	Collection<Inventory> getBasedOnSorting();

	@Query(value = "SELECT * FROM mbbinventory.inventory WHERE created_time >= ?1 AND created_time <= ?2 ", nativeQuery = true)
	List<Inventory> findInventoryDetails(@NotNull String startDate, @NotNull String endDate);

	Collection<Inventory> findBySerialNumberStatus(Boolean status);

	List<Inventory> findByActive(Boolean active);

	List<Inventory> findByActive(Boolean status, Pageable page);

	@Query(value = "SELECT * FROM mbbinventory.inventory where active=:status AND (sku_code like %:search% or product_name like %:search%)", nativeQuery = true)
	List<Inventory> findByActive(@PathVariable Boolean status, @PathVariable String search,
			@PathVariable Pageable page);

	@Query(value = "SELECT * FROM mbbinventory.inventory where active=:status AND (sku_code like %:search% or product_name like %:search%)", nativeQuery = true)
	List<Inventory> findByActive(Boolean status, String search);
}

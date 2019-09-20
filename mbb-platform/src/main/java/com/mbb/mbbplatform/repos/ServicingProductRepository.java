package com.mbb.mbbplatform.repos;

import java.util.List;

import javax.validation.constraints.NotNull;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import com.mbb.mbbplatform.domain.ServicingProduct;

public interface ServicingProductRepository extends JpaRepository<ServicingProduct, Long> {
	@Query(value = "SELECT * FROM mbbinventory.servicingproduct ORDER BY ID DESC limit 1 ", nativeQuery = true)
	ServicingProduct findBylastRecord();

	@Query(value = "SELECT * FROM mbbinventory.servicingproduct WHERE created_time >= ?1 AND created_time <= ?2 ", nativeQuery = true)

	List<ServicingProduct> findByStartDateAndEndDate(@NotNull String startDate, String endDate1);

	@Query(value = "SELECT * FROM mbbinventory.servicingproduct WHERE created_time >= ?1 AND created_time <= ?2 AND warranty =true and servicing_statuses_id=?3", nativeQuery = true)

	List<ServicingProduct> findByStartDateAndEndDateAndWarrantyAndStatus(@NotNull String startDate, String endDate1,
	Long servicingStatus);
	@Query(value = "SELECT * FROM mbbinventory.servicingproduct WHERE created_time >= ?1 AND created_time <= ?2 AND warranty='1' ", nativeQuery = true)
	List<ServicingProduct> findByStartDateAndEndDateAndWaranty(@NotNull String startDate, String endDate1);

	@Query(value = "SELECT * FROM mbbinventory.servicingproduct WHERE created_time >= ?1 AND created_time <= ?2 AND warranty='0' ", nativeQuery = true)
	List<ServicingProduct> findByStartDateAndEndDateAndInWaranty(@NotNull String startDate, String endDate1);

	@Query(value = "SELECT * FROM mbbinventory.servicingproduct WHERE created_time >= ?1 AND created_time <= ?2 AND ", nativeQuery = true)
	List<ServicingProduct> findByStartDateAndEndDateAndInWarrantyAndStatus(@NotNull String startDate, String endDate1,
			Long servicingStatus);
	@Query(value = "SELECT * FROM mbbinventory.servicingproduct WHERE created_time >= ?1 AND created_time <= ?2  and servicing_statuses_id=?3 ", nativeQuery = true)

	List<ServicingProduct> findByStartDateAndEndDateAndStatus(@NotNull String startDate, String endDate1,Long servicingStatus );
	@Query(value = "SELECT * FROM mbbinventory.servicingproduct WHERE created_time >= ?1 AND created_time <= ?2 AND servicing_statuses_id=?3 AND warranty=0", nativeQuery = true)

	List<ServicingProduct> findAllByStartDateAndEndDateAndWarrantyAndStatus(@NotNull String startDate, String endDate1,
			Long servicingStatus);

}

package com.mss.pmj.pmjmis.repos;

import java.time.LocalDate;
import java.util.Collection;
import java.util.List;

import javax.validation.constraints.NotNull;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.mss.pmj.pmjmis.domain.Employee;
import com.mss.pmj.pmjmis.domain.Sales;

public interface SalesRepository extends JpaRepository<Sales, Long> {

	List<Sales> findByTransactionDate(String startDateTimeline);
	
	@Query(value = "SELECT * FROM sales WHERE transaction_date = ?1 AND emp_id = ?2", nativeQuery = true)
    List<Sales> findByTransactionDateAndEmp(@NotNull String startDateTimeline,@NotNull long salesPersonId);

	Sales findByItemName(String itemName);

	Sales findByLabelNo(String labelNo);

	@Query(value = "SELECT * FROM sales WHERE transaction_date >= ?1 AND transaction_date <= ?2 AND item_type = ?3", nativeQuery = true)
	List<Sales> findByStartDateAndEndDateAndItemType(@NotNull String startDate, @NotNull String endDate,
			@NotNull String itemType);

	@Query(value = "SELECT * FROM sales WHERE transaction_date >= ?1 AND transaction_date <= ?2 AND item_type = ?3 AND emp_id = ?4", nativeQuery = true)
	List<Sales> findByStartDateAndEndDateAndItemTypeAndEmpId(String startDate, String endDate, String ItemType,
			Employee employee);

	@Query(value = "SELECT * FROM sales WHERE transaction_date >= ?1 AND transaction_date <= ?2", nativeQuery = true)
	List<Sales> findByStartDateAndEndDate(@NotNull String startDate, @NotNull String endDate);

	@Query(value = "SELECT * FROM sales WHERE transaction_date >= ?1 AND transaction_date <= ?2 AND location_id = ?3", nativeQuery = true)
	List<Sales> findByStartDateAndEndDateAndLocationName(@NotNull String startDate, @NotNull String endDate,
			@NotNull Long locationNane);

	Sales findByLabelNoAndEmpIdAndDocNumber(String labelNo, Employee empId, String docNumber);

	@Query(value = "SELECT * FROM sales WHERE transaction_date = ?1 AND location_id = ?2 ", nativeQuery = true)
	List<Sales> findByTransactionDateAndLocation(LocalDate startDateTimeline, Long locationId);

	@Query(value = "SELECT * FROM sales WHERE  transaction_date=?1 AND emp_id= ?2 ", nativeQuery = true)
	List<Sales> findByTransactionDateAndEmpId(@NotNull String startDateTimeline, @NotNull Long empId);

	@Query(value = "SELECT * FROM sales WHERE transaction_date >= ?1 AND transaction_date <= ?2 AND emp_id=?3 ", nativeQuery = true)
	List<Sales> findByStartDateAndEndDateAndEmpId(@NotNull String startDate, @NotNull String endDate,
			@NotNull Long salesPersonId);

	@Query(value = "SELECT * FROM sales WHERE transaction_date >= ?1 AND transaction_date <= ?2 AND emp_id = ?3", nativeQuery = true)
	List<Sales> findByStartDateAndEndDateAndEmployee(@NotNull String startDate, @NotNull String endDate,
			@NotNull Long employeeName);

	@Query(value = "SELECT * FROM sales where emp_id in( SELECT emp FROM emp_item_monthly_tgt where emp in  (select id from employee where location=?1) and emp_class=?2 and tgt_month=?3 AND item_type=?6) AND transaction_date >= ?4 AND transaction_date <= ?5 AND item_type=?6", nativeQuery = true)
	Collection<Sales> salesDataInBetweenDatesByLocationIdAndEmpClassAndTgtMonth(@NotNull Long locationId,
			@NotNull Character empClass, @NotNull String tgtMonth, @NotNull String startDate, @NotNull String endDate,
			String itemType);

	@Query(value = "SELECT * FROM sales where emp_id in( SELECT emp FROM emp_item_monthly_tgt where emp in  (select id from employee where location=?1) and emp_class=?2 and tgt_month=?3 AND item_type=?6 and emp=?7) AND transaction_date >= ?4 AND transaction_date <= ?5 AND item_type=?6 AND emp_id=?7", nativeQuery = true)
	Collection<Sales> salesDataInBetweenDatesByLocationIdAndEmpClassAndTgtMonthAndByEmpId(@NotNull Long locationId,
			@NotNull Character empClass, @NotNull String tgtMonth, @NotNull String startDate, @NotNull String endDate,
			String itemType, Long empId);

	@Query(value = "SELECT * FROM sales where emp_id in( SELECT emp FROM emp_item_monthly_tgt where emp in  (select id from employee where location=?1) and emp_class=?2 and tgt_month=?3 AND item_type=?5) AND transaction_date = ?4  AND item_type=?5", nativeQuery = true)
	Collection<Sales> salesDataInDateByLocationIdAndEmpClassAndTgtMonth(@NotNull Long locationId,
			@NotNull Character empClass, @NotNull String tgtMonth, @NotNull String startDate, String itemType);

@Query(value = "SELECT * FROM sales s WHERE transaction_date >= ?1 AND transaction_date <= ?2 AND emp_id=?3 ", nativeQuery = true)
	List<Sales> findSalesByStartDateAndEndDateAndEmpId(@NotNull String startDate, @NotNull String endDate,
			@NotNull Long empId);

@Query(value = "SELECT * FROM sales WHERE transaction_date >= ?1 AND transaction_date <= ?2 AND location_id in (select id from location where cluster=?3)", nativeQuery = true)
List<Sales> findByStartDateAndEndDateAndCluster(String startDate, String endDate, String cluster);


}

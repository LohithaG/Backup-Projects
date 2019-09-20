package com.mss.pmj.pmjmis.repos;

import java.time.LocalDate;
import java.util.List;

import javax.validation.constraints.NotNull;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.mss.pmj.pmjmis.domain.Channel;
import com.mss.pmj.pmjmis.domain.EmpDailyActuals;
import com.mss.pmj.pmjmis.domain.Employee;

public interface EmpDailyActualsRepository extends JpaRepository<EmpDailyActuals, Long> {

	EmpDailyActuals findByVisitDateAndMobileNumber(String string, String string2);

	List<EmpDailyActuals> findByVisitDateAndItemType(String startDateTimeline, String itemType);

	@Query(value = "SELECT * FROM emp_daily_actuals where emp = ?1 and visit_date >= ?2 AND visit_date <= ?3", nativeQuery = true)
	List<EmpDailyActuals> findByStartDateAndEndDate(@NotNull long salesPersonId, @NotNull String startDate,
			@NotNull String endDate);

	@Query(value = "SELECT * FROM emp_daily_actuals where emp = ?1 and visit_date = ?2 and item_type = ?3 and sale = ?4 ", nativeQuery = true)
	List<EmpDailyActuals> findActualsByEmpAndVisitDateAndItemTypeAndSale(@NotNull long salesPersonId,
			@NotNull LocalDate startDateTimeline, @NotNull String itemType, @NotNull int sale);

	@Query(value = "SELECT * FROM emp_daily_actuals where emp = ?1 and visit_date >= ?2 AND visit_date <= ?3 and item_type='Gold' and sale=1 ", nativeQuery = true)
	List<EmpDailyActuals> findPrefferedGoldWalkinsByStartDateAndEndDate(@NotNull long salesPersonId,
			@NotNull String startDate, @NotNull String endDate);

	@Query(value = "SELECT * FROM emp_daily_actuals where emp = ?1 and visit_date >= ?2 AND visit_date <= ?3 and item_type='Diamond' and sale=1 ", nativeQuery = true)
	List<EmpDailyActuals> findPrefferedDiamondWalkinsByStartDateAndEndDate(@NotNull long salesPersonId,
			@NotNull String startDate, @NotNull String endDate);

	@Query(value = "SELECT * FROM emp_daily_actuals WHERE item_type = ?1 AND visit_date >= ?2 AND visit_date <= ?3 AND channel = 1 And emp =?4 AND sale=1", nativeQuery = true)
	List<EmpDailyActuals> findByItemTypeVisitDateChannelEmp(String itemType, String startDate, String endDate,
			Employee employee);

	@Query(value = "SELECT * FROM emp_daily_actuals WHERE item_type = ?1 AND visit_date >= ?2 AND visit_date <= ?3 AND channel = 2 And emp =?4 AND sale=1", nativeQuery = true)
	List<EmpDailyActuals> findByItemTypeVisitDateChannelEmpD2h(String itemType, String startDate, String endDate,
			Employee employee);

	@Query(value = "SELECT * FROM emp_daily_actuals where emp = ?1 and visit_date >= ?2 AND visit_date <= ?3 and sale=1", nativeQuery = true)
	List<EmpDailyActuals> findTotalPrefferedWalkinsByEmp(@NotNull long salesPersonId, @NotNull String startDate,
			@NotNull String endDate);

	@Query(value = "SELECT * FROM emp_daily_actuals where emp = ?3 and visit_date = ?1 AND item_type = ?2", nativeQuery = true)
	List<EmpDailyActuals> findByVisitDateAndItemTypeAndEmp(@NotNull String startDateTimeline, @NotNull String itemType,
			@NotNull long salesPersonId);

	@Query(value = "SELECT * FROM emp_daily_actuals WHERE visit_date >= ?1 AND visit_date <= ?2 AND emp = ?3 AND channel = ?4", nativeQuery = true)
	List<EmpDailyActuals> findByStartDateAndEndDateAndEmpAndChannel(String startDate, String endDate, Employee employee,
			Channel channel);

	@Query(value = "SELECT * FROM emp_daily_actuals WHERE visit_date >= ?1 AND visit_date <= ?2 AND item_type = ?3 AND emp = ?4", nativeQuery = true)
	List<EmpDailyActuals> findByStartDateAndEndDateAndItemTypeAndEmpId(String startDate, String endDate, String ItemType,
			Employee employee);
        @Query(value = "SELECT * FROM emp_daily_actuals WHERE visit_date >= ?1 AND visit_date <= ?2", nativeQuery = true)
	List<EmpDailyActuals> findByvisitDate(String startDate, String endDate);
	
	@Query(value = "SELECT * FROM emp_daily_actuals WHERE visit_date >= ?1 AND visit_date <= ?2 and sale = 1", nativeQuery = true)
	List<EmpDailyActuals> findByvisitDateAndSales(String startDate, String endDate);

}

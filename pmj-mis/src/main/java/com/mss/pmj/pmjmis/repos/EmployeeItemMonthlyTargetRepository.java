package com.mss.pmj.pmjmis.repos;

import java.util.Collection;
import java.util.List;

import javax.validation.constraints.NotNull;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.mss.pmj.pmjmis.domain.Employee;
import com.mss.pmj.pmjmis.domain.EmployeeItemMonthlyTarget;

public interface EmployeeItemMonthlyTargetRepository extends JpaRepository<EmployeeItemMonthlyTarget, Long> {

	@Query(value = "SELECT * FROM emp_item_monthly_tgt WHERE created_time >= ?1 AND created_time <= ?2 ", nativeQuery = true)
	List<EmployeeItemMonthlyTarget> findByStartDateAndEndDate(@NotNull String startDate, @NotNull String endDate);

	Collection<EmployeeItemMonthlyTarget> findByTgtMonth(@NotNull String tgtMonth);

	@Query(value = "select * from emp_item_monthly_tgt where emp in(SELECT id FROM employee where location =?2) and tgt_month=?1", nativeQuery = true)
	List<EmployeeItemMonthlyTarget> findByTgtMonthAndLocationId(@NotNull String tgtMonth, Long locationId);

	@Query(value = "SELECT * FROM emp_item_monthly_tgt WHERE tgt_month=?1 AND emp=?2 ", nativeQuery = true)
	Collection<EmployeeItemMonthlyTarget> findByTgtMonthAndEmp(String tgtMonth, Long empId);

	Collection<EmployeeItemMonthlyTarget> findByTgtMonthAndItemType(String targetmonth, String itemType);

	Collection<EmployeeItemMonthlyTarget> findByTgtMonthAndItemTypeAndEmp(String targetmonth, String itemType,
			Employee employee);

	List<EmployeeItemMonthlyTarget> findByEmp(Employee emp);

	@Query(value = "SELECT * FROM emp_item_monthly_tgt WHERE  tgt_month>=?1 AND tgt_month <= ?2 ", nativeQuery = true)
	List<EmployeeItemMonthlyTarget> findEmployeeInBetweenMonth(String date3, String date4);

	@Query(value = "SELECT * FROM  emp_item_monthly_tgt where emp_class is not NULL group by emp_class", nativeQuery = true)
	List<EmployeeItemMonthlyTarget> findAllClasses();
@Query(value = "SELECT * FROM emp_item_monthly_tgt where emp in  (select id from employee where location=?1) and emp_class=?2 and tgt_month=?3 and item_type=?4", nativeQuery = true)
	List<EmployeeItemMonthlyTarget> findByLocationIdAndClassInTgtMonth(long locationId, Character className,
			String tgtMonth, String itemType);

	@Query(value = "SELECT * FROM emp_item_monthly_tgt where emp in  (select id from employee where location=?1) and emp_class=?2 and tgt_month=?3 and item_type=?4 and emp=?5", nativeQuery = true)
	List<EmployeeItemMonthlyTarget> findByLocationIdAndClassInTgtMonthByEmpId(long locationId, Character className,
			String tgtMonth, String itemType, Long empId);
}

package com.mss.pmj.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.mss.pmj.domain.EmployeeItemMonthlyTarget;

public interface EmployeeItemMonthlyTargetRepository extends JpaRepository<EmployeeItemMonthlyTarget, Long> {

	@Query(value = "SELECT * FROM emp_item_monthly_tgt WHERE  emp=?1 AND tgt_month = ?2 AND item_type=?3", nativeQuery = true)
	EmployeeItemMonthlyTarget findByEmpAndTgtMonthAndItemType(Long empId, String tgtMonth, String itemType);
}

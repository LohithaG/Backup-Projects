package com.mss.pmj.pmjmis.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.mss.pmj.pmjmis.domain.Employee;
import com.mss.pmj.pmjmis.domain.Location;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {

	Employee findByEmpId(Long empId);

	List<Employee> findByLocation(Location location);

	Employee findByEmpCode(String record);

	@Query(value = "SELECT * FROM employee WHERE emp_name LIKE %:employeeName% and location in(SELECT id FROM location where channel_id= 1 ) ", nativeQuery = true)
	List<Employee> findByEmpName(String employeeName);

}

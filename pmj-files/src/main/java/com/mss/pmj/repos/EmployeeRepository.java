package com.mss.pmj.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mss.pmj.domain.Employee;
import com.mss.pmj.domain.Location;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
	
	Employee findByEmpId(Long empId);

	List<Employee> findByLocation(Location location);

	Employee findByEmpCode(String record);

}

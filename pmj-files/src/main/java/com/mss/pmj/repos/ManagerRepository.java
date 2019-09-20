package com.mss.pmj.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mss.pmj.domain.Employee;
import com.mss.pmj.domain.Manager;

public interface ManagerRepository extends JpaRepository<Manager, Long>{

	Manager findByEmpId(Employee employee);

}

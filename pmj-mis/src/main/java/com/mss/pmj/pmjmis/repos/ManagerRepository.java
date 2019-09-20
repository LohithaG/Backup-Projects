package com.mss.pmj.pmjmis.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mss.pmj.pmjmis.domain.Employee;
import com.mss.pmj.pmjmis.domain.Manager;

public interface ManagerRepository extends JpaRepository<Manager, Long>{

	Manager findByEmpId(Employee emp);

}

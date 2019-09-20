package com.mss.pmj.pmjmis.repos;

import java.util.Collection;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mss.pmj.pmjmis.domain.Employee;
import com.mss.pmj.pmjmis.domain.User;

public interface UserRepository extends JpaRepository<User, Long> {

	Collection<User> findByActive(Boolean setActive);

	User findByUserName(String userName);

	User findByEmpCode(Employee emp);

}

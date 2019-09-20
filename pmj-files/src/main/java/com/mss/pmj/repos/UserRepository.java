package com.mss.pmj.repos;

import java.util.Collection;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mss.pmj.domain.User;

public interface UserRepository extends JpaRepository<User, Long> {


	Collection<User> findByActive(Boolean setActive);

	User findByUserName(String userName);


}

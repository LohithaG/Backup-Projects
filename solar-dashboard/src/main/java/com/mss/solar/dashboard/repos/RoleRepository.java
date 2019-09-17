package com.mss.solar.dashboard.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mss.solar.dashboard.domain.Role;

public interface RoleRepository extends JpaRepository<Role, Long> {
	
	Role findByName(String name);


}

package com.mss.pmj.pmjmis.repos;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mss.pmj.pmjmis.domain.Role;

public interface RoleRepository extends JpaRepository<Role, Long> {
	
	Role findByName(String name);

	Optional<Role> findById(Long id);

}

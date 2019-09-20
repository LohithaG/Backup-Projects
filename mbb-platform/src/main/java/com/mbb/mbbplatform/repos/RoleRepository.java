package com.mbb.mbbplatform.repos;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mbb.mbbplatform.domain.Role;

public interface RoleRepository extends JpaRepository<Role, Long> {
	
	Role findByName(String name);

	Optional<Role> findById(Long id);

}

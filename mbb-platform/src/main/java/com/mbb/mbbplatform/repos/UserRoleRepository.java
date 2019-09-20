package com.mbb.mbbplatform.repos;

import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mbb.mbbplatform.domain.UserRole;

public interface UserRoleRepository extends JpaRepository<UserRole, Long> {

	Set<UserRole> findByUserid(Long id);
}

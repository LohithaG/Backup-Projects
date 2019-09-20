package com.mbb.mbbplatform.repos;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mbb.mbbplatform.domain.User;

public interface UserRepository extends JpaRepository<User, Long> {
	User findByName(String name);

	User findByEmail(String email);

	User findByPhone(String phone);

	User findByPassword(String password);

	User findByEmailAndPassword(String email, String password);

	Optional<User> findById(Long id);
	
	Collection<User> findByActive(Boolean active);

	List<User> findAllByRolesNameIn(Collection<String> roles);

}

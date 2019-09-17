package com.mss.solar.dashboard.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mss.solar.dashboard.domain.ExceptionType;

public interface ExceptionTypeRepository extends JpaRepository<ExceptionType, Long> {

	ExceptionType findById(long l);

}

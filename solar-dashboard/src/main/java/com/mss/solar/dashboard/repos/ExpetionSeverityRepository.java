package com.mss.solar.dashboard.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mss.solar.dashboard.domain.ExceptionSeverity;

public interface ExpetionSeverityRepository extends JpaRepository<ExceptionSeverity, Long> {

	ExceptionSeverity findById(long long1);


}

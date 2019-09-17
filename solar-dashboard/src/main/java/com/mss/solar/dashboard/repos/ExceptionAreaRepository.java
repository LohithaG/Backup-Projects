package com.mss.solar.dashboard.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mss.solar.dashboard.domain.ExceptionArea;

public interface ExceptionAreaRepository extends JpaRepository<ExceptionArea, Long> {

	ExceptionArea findById(long long1);

}

package com.mss.solar.dashboard.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mss.solar.dashboard.domain.CartonStatus;

public interface CartonStatusRepository extends JpaRepository<CartonStatus, Long> {

	CartonStatus findById(Long statusId);

}

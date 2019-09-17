package com.mss.solar.dashboard.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mss.solar.dashboard.domain.WeightMeasurement;

public interface WeightMeasurementRepository extends JpaRepository<WeightMeasurement, Long> {

	WeightMeasurement findById(long l);
}

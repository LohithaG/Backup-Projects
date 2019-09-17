package com.mss.solar.dashboard.repos;

import java.util.Collection;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mss.solar.dashboard.domain.CartonException;
import com.mss.solar.dashboard.domain.InspectionCartonDetails;

public interface CartonExceptionRepositoty extends JpaRepository<CartonException, Long> {

	Collection<CartonException> findByInspectionCartonDetails(InspectionCartonDetails cartonDetails1);

}

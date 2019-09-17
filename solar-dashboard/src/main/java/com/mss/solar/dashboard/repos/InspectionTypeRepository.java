package com.mss.solar.dashboard.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mss.solar.dashboard.domain.InspectionType;

public interface InspectionTypeRepository extends JpaRepository<InspectionType, Long> {

	InspectionType findById(Long id);

}

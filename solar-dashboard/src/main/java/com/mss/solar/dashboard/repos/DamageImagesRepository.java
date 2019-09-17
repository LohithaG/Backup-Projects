package com.mss.solar.dashboard.repos;

import java.util.Collection;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mss.solar.dashboard.domain.CartonException;
import com.mss.solar.dashboard.domain.DamageImages;
import com.mss.solar.dashboard.domain.InspectionCartonDetails;

public interface DamageImagesRepository extends JpaRepository<DamageImages, Long> {

	Collection<DamageImages> findByCartonException(CartonException cartonException);

	//Collection<DamageImages> findByInspectionCartonDetails(InspectionCartonDetails carDetails);

}

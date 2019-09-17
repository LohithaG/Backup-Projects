package com.mss.solar.dashboard.repos;

import java.util.Collection;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mss.solar.dashboard.domain.CartonDetails;
import com.mss.solar.dashboard.domain.LoadDetails;
import com.mss.solar.dashboard.domain.Location;

public interface CartonDetailsRepository extends JpaRepository<CartonDetails, Long> {

	CartonDetails findById(Long id);

	List<CartonDetails> findByLoadNumber(LoadDetails loadDetails);

	CartonDetails findByCartonId(String cartonId);

	Collection<CartonDetails> findByDestinationLocation(Location destLocNbr);

	List<CartonDetails> findByLoadNumberAndDestinationLocation(LoadDetails loadDetails, Location destLocNbr);

	Collection<CartonDetails> findByLoadNumberAndPickupLocation(LoadDetails loadDetails, Location location);

}

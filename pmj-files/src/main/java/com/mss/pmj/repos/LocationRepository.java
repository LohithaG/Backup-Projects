package com.mss.pmj.repos;

import javax.validation.constraints.NotNull;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mss.pmj.domain.Location;

public interface LocationRepository extends JpaRepository<Location, Long> {

	Location findByLocationName(@NotNull String name);

	Location findByLocationCode(String locationCode);

	Location findByLocationId(Long locationId);
	
	Location findByCluster(String name);

}

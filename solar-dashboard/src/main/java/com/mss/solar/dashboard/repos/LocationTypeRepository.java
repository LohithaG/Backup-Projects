package com.mss.solar.dashboard.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mss.solar.dashboard.domain.LocationType;

public interface LocationTypeRepository  extends JpaRepository<LocationType, Long>{
	
	LocationType findByType(String type);

}

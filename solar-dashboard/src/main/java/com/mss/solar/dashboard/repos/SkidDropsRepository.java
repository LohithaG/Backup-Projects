package com.mss.solar.dashboard.repos;

import java.util.Collection;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.mss.solar.dashboard.domain.LoadDetails;
import com.mss.solar.dashboard.domain.Location;
import com.mss.solar.dashboard.domain.SkidDrops;

public interface SkidDropsRepository extends JpaRepository<SkidDrops, Long> {

	Collection<SkidDrops> findByLoadDetails(LoadDetails loadDetails);

	@Query("SELECT s FROM SkidDrops s where s.destLocNbr.locNbr = ?1")
	Collection<SkidDrops> getLoadsByLocations(String locNbr);

	SkidDrops findByLoadDetailsAndDestLocNbr(LoadDetails loadDetails, Location destinationLocation);

	Collection<SkidDrops> findByDestLocNbr(Location deleteLocation);

	SkidDrops findById(Long skidId);

	SkidDrops findBySkidOrderPerLoad(Long skidOrder);

	SkidDrops findBySkidOrderPerLoadAndLoadDetails(Long order, LoadDetails loadDetails);

}

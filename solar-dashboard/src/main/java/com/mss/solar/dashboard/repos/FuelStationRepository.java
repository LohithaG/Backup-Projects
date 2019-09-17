package com.mss.solar.dashboard.repos;

import java.util.Collection;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.mss.solar.dashboard.domain.FuelStation;

public interface FuelStationRepository extends JpaRepository<FuelStation, Long> {

	FuelStation findById(Long id);

	@Query(value = "SELECT * FROM solar.fuelstation WHERE (latitude BETWEEN ?1 AND ?3) And (longitude BETWEEN ?2 AND ?4)", nativeQuery = true)
	Collection<FuelStation> findInBetweenRoutes(double sourcelat, double sourcelong, double destlat, double destlong);

	FuelStation findByNameAndAddress(String name, String address);

}

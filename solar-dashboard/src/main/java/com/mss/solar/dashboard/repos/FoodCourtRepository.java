package com.mss.solar.dashboard.repos;

import java.util.Collection;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.mss.solar.dashboard.domain.FoodCourt;

public interface FoodCourtRepository extends JpaRepository<FoodCourt, Long> {

	FoodCourt findById(Long id);

	@Query(value = "Select * from solar.foodcourt WHERE (latitude BETWEEN ?1 AND ?3) And (longitude BETWEEN ?2 AND ?4)", nativeQuery = true)
	Collection<FoodCourt> findInBetweenRoutes(double sourcelat, double sourcelong, double destlat, double destlong);

	FoodCourt findByNameAndAddress(String name, String address);

}

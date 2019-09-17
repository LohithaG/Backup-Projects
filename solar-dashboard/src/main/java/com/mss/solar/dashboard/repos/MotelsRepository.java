package com.mss.solar.dashboard.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mss.solar.dashboard.domain.Motels;

public interface MotelsRepository extends JpaRepository<Motels, Long> {

	Motels findByNameAndAddress(String name, String address);

	Motels findById(long id);

	
	
	
}

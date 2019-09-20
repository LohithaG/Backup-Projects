package com.mbb.mbbplatform.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mbb.mbbplatform.domain.Facility;


public interface FacilityRepository extends JpaRepository<Facility, Long>{
	
	public Facility findByFacilityName(String fromLocation);


}

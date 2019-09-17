package com.mss.solar.dashboard.repos;

import java.util.Collection;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.mss.solar.dashboard.domain.Inspection;
import com.mss.solar.dashboard.domain.InspectionType;
import com.mss.solar.dashboard.domain.LoadDetails;
import com.mss.solar.dashboard.domain.Location;

public interface InspectionRepository extends JpaRepository<Inspection, Long> {

	Inspection findById(Long id);

	Collection<Inspection> findByLoadNumber(LoadDetails load);
	
	//@Query("SELECT i FROM Inspection i where i.load = ?1 OR i.inspectionType = ?2")
	@Query(value = "SELECT * FROM solar.inspection WHERE load_number = ?1 AND inspection_type= ?2 ", nativeQuery = true)
	Collection<Inspection> findByLoadNumberAndInspectionType(LoadDetails load, InspectionType inspectionType);

	InspectionType findByInspectionType(InspectionType inspectionTypeObj);
	
	@Query(value = "SELECT * FROM solar.inspection WHERE load_number = ?1 AND inspection_type= ?2 AND location =?3 ", nativeQuery = true)
	Inspection findByLoadNumberAndInspectionTypeAndLocation(LoadDetails loadObj, InspectionType inspectionTypeObj,
			Location location);

	//Inspection findByLoadNumberAndInspectionType(LoadAppointment load, InspectionType id);
}

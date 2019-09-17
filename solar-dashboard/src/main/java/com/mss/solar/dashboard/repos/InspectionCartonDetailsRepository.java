package com.mss.solar.dashboard.repos;

import java.util.Collection;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.mss.solar.dashboard.domain.CartonDetails;
import com.mss.solar.dashboard.domain.Inspection;
import com.mss.solar.dashboard.domain.InspectionCartonDetails;

public interface InspectionCartonDetailsRepository extends JpaRepository<InspectionCartonDetails, Long> {

	Collection<InspectionCartonDetails> findByInspectionId(Long id);

	List<InspectionCartonDetails> findByCartons(CartonDetails carton);

	//InspectionCartonDetails findByInspectionId(Inspection inspection);

	@Query(value = "SELECT * FROM solar.inspectioncartondetails WHERE inspection_id = ?1 AND cartons= ?2 ", nativeQuery = true)
	InspectionCartonDetails findByInspectionIdAndCartons(Inspection inspection, CartonDetails carton);

}

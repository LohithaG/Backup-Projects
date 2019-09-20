package com.mbb.mbbplatform.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mbb.mbbplatform.domain.Facility;
import com.mbb.mbbplatform.domain.FacilityWiseThreshold;
import com.mbb.mbbplatform.domain.Inventory;

public interface FacilityWiseThresholdRepository extends JpaRepository<FacilityWiseThreshold, Long> {

	List<FacilityWiseThreshold> findByInventoryId(Inventory inventoryId);

	FacilityWiseThreshold findByInventoryIdAndFacilityId(Inventory inventoryId, Facility facilityId);

	List<FacilityWiseThreshold> findByFacilityId(Facility facilityId);

	List<FacilityWiseThreshold> findByFacilityId(Long facilityId);



}

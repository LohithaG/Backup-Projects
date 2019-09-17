package com.mss.solar.dashboard.repos;

import java.util.Collection;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.mss.solar.dashboard.domain.LoadDetails;
import com.mss.solar.dashboard.domain.Location;
import com.mss.solar.dashboard.domain.Vendor;

public interface LoadDetailsRepository extends JpaRepository<LoadDetails, String> {

	LoadDetails findByLoadNumber(String loadNumber);

	Collection<LoadDetails> findByDriverId(Long driverId);

	Collection<LoadDetails> findByDriverIdAndLoadStatNbrId(Long driverId, long l);

	@Query("SELECT l FROM LoadDetails l where l.loadStatNbr IN (2,3,4) AND l.driver.id=?1")
	Collection<LoadDetails> getDriverNotCompletedLoads(Long driverId);

	Collection<LoadDetails> findByLoadStatNbrId(Long id);

	@Query(value = "SELECT * FROM solar.loaddetails order by loaddetails.load_number desc limit 1", nativeQuery = true)
	LoadDetails findBylastRecord();

	@Query("SELECT l FROM LoadDetails l where l.loadStatNbr IN (4,5) AND l.driver.id=?1")
	Collection<LoadDetails> getDriverAcceptedAndCompletedLoads(Long driverId);

	@Query("SELECT l FROM LoadDetails l where l.originLocNbr.locNbr = ?1")
	Collection<LoadDetails> getLoadsByPickUpLocations(String locNbr);

	Collection<LoadDetails> findByVndNbr(Vendor vendorDetails);
	
	Collection<LoadDetails> findByOriginLocNbr(Location location);
}

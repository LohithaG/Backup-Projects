package com.mss.solar.dashboard.repos;

import java.util.Collection;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mss.solar.dashboard.domain.Location;
import com.mss.solar.dashboard.domain.LocationType;
import com.mss.solar.dashboard.domain.User;

public interface LocationRepository extends JpaRepository<Location, Long> {

	Location findByEmail(String email);

	Location findByLocNbr(String locNbr);

	Location findByPhoneNumber(String phoneNumber);

	Location findByLatitudeAndLongitude(Double latitude, Double longitude);
	
	Collection<Location> findByLocationType(LocationType type);

	Location findByUser(User user);

}

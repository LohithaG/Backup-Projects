package com.mss.pmj.pmjmis.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.mss.pmj.pmjmis.domain.Employee;
import com.mss.pmj.pmjmis.domain.Location;
import com.mss.pmj.pmjmis.domain.Team;

public interface TeamRepository  extends JpaRepository<Team, Long> {

	Team findByLocationAndTeamNum(Location location, int i);

	Team findByLocationAndTeamNumAndEmp(Location location, int parseInt, Employee employee);

        List<Team> findByLocation(Location location);

	@Query(value = "Select * from team where location=?1", nativeQuery = true)
	List<Team> findByLocationcode(Location locationCode);

}

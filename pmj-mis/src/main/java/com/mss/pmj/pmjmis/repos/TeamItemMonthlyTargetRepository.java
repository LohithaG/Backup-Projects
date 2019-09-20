package com.mss.pmj.pmjmis.repos;

import java.util.Collection;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.mss.pmj.pmjmis.domain.Team;
import com.mss.pmj.pmjmis.domain.TeamItemMonthlyTarget;

public interface TeamItemMonthlyTargetRepository extends JpaRepository<TeamItemMonthlyTarget, Long>{

	TeamItemMonthlyTarget findByTeamAndItemType(Team teamExists, String string);

	Collection<TeamItemMonthlyTarget> findByMonthAndYear(String month, String year);

	@Query(value = "SELECT * FROM team_item_monthly_tgt where team_id in (select id from team where location=?3 ) and month=?1 and year=?2", nativeQuery = true)
	Collection<TeamItemMonthlyTarget> findByMonthAndYearAndLocationId(String month, String year, Long locationId);

	Collection<TeamItemMonthlyTarget> findByMonthAndYearAndItemType(String month, String year, String itemType);

	Collection<TeamItemMonthlyTarget> findByMonthAndYearAndItemTypeAndTeam(String month, String year, String ItemType,
			Team team);
	
	Collection<TeamItemMonthlyTarget> findByTeamAndMonthAndYear(Team team, String month, String year);

}

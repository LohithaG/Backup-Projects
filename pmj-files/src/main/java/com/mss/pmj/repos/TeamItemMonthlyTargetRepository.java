package com.mss.pmj.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mss.pmj.domain.Team;
import com.mss.pmj.domain.TeamItemMonthlyTarget;

public interface TeamItemMonthlyTargetRepository extends JpaRepository<TeamItemMonthlyTarget, Long> {

	TeamItemMonthlyTarget findByTeamAndItemType(Team teamExists, String string);
 
	TeamItemMonthlyTarget findByTeamAndItemTypeAndMonthAndYear(Team teamExists, String string,String month,String year);
}

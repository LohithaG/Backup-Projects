package com.mss.pmj.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mss.pmj.domain.EmpDailyActuals;

public interface EmpDailyActualsRepository extends JpaRepository<EmpDailyActuals, Long> {

	EmpDailyActuals findByVisitDateAndMobileNumber(String string, String string2);

}

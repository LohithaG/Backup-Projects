package com.mbb.mbbplatform.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mbb.mbbplatform.domain.ShiprocketShipmentReport;

public interface ShiprocketShipmentReportRepository extends JpaRepository<ShiprocketShipmentReport, Long> {

	ShiprocketShipmentReport findByOrderID(String orderId);
	
	List<ShiprocketShipmentReport> findByAWBCode(String aWBCode);

}

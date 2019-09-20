package com.mbb.mbbplatform.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mbb.mbbplatform.domain.ShiprocketCodOrders;


public interface ShiprocketCodOrdersRepository extends JpaRepository<ShiprocketCodOrders, Long> {
	
	
	ShiprocketCodOrders findByAWB(String awb);
}

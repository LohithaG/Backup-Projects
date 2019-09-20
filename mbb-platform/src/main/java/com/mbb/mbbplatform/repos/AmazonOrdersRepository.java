package com.mbb.mbbplatform.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mbb.mbbplatform.domain.AmazonOrders;

public interface AmazonOrdersRepository extends JpaRepository<AmazonOrders, Long> {
	
	AmazonOrders findByAmazonOrderId(String amazonOrderId);

}

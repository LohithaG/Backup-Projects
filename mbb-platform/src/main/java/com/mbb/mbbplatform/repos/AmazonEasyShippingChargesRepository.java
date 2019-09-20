package com.mbb.mbbplatform.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mbb.mbbplatform.domain.AmazonEasyShippingCharges;

public interface AmazonEasyShippingChargesRepository   extends JpaRepository<AmazonEasyShippingCharges,Long>{

	AmazonEasyShippingCharges findByOrderId(String orderId);

}

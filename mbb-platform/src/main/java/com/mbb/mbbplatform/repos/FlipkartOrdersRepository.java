package com.mbb.mbbplatform.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mbb.mbbplatform.domain.FlipkartOrders;

public interface FlipkartOrdersRepository extends JpaRepository<FlipkartOrders, Long> {

	FlipkartOrders findByShipmentId(String shipmentId);

	FlipkartOrders findByOrderId(String orderId);

}

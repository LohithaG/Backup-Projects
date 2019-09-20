package com.mbb.mbbplatform.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mbb.mbbplatform.domain.ZepoShipments;

public interface ZepoShipmentsRepository extends JpaRepository<ZepoShipments, Long> {

	List<ZepoShipments> findByTrackingNo(String trackingNo);
}

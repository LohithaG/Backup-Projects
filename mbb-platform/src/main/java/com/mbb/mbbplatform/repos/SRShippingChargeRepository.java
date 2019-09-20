package com.mbb.mbbplatform.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mbb.mbbplatform.domain.SRShippingCharge;

public interface SRShippingChargeRepository extends JpaRepository<SRShippingCharge, Long> {

	SRShippingCharge findByAWBNumber(String aWBNumber);

}

package com.mbb.mbbplatform.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mbb.mbbplatform.domain.OtherPoCharges;
import com.mbb.mbbplatform.domain.PoVendor;

public interface OtherPoChargesRepository extends JpaRepository<OtherPoCharges, Long> {

	List<OtherPoCharges> findByPoVendorId(PoVendor poVendor);

}

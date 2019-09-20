package com.mbb.mbbplatform.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.mbb.mbbplatform.domain.AmazonCodRemittanceDump;

public interface AmazonCodRemittanceDumpRepository  extends JpaRepository<AmazonCodRemittanceDump,Long>{
	@Query(value = " SELECT * FROM mbbinventory.amazoncoddumpremittance WHERE fulfillment='Merchant' AND type='Shipping Services'", nativeQuery = true)
	List<AmazonCodRemittanceDump> findAllByFulfillment();
	@Query(value = " SELECT * FROM mbbinventory.amazoncoddumpremittance WHERE fulfillment='Merchant' AND type!='Shipping Services'", nativeQuery = true)
	List<AmazonCodRemittanceDump> findAllByType();

}

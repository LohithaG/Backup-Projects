package com.mbb.mbbplatform.repos;

import java.util.Collection;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mbb.mbbplatform.domain.PoVendor;
import com.mbb.mbbplatform.domain.TotalAmountDetails;

public interface TotalAmountDetailsRepository extends JpaRepository<TotalAmountDetails, Long>{

	Collection<TotalAmountDetails> findByPoVendorId(PoVendor poVendor);

}

package com.mbb.mbbplatform.repos;

import java.util.Collection;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mbb.mbbplatform.domain.BankDetails;
import com.mbb.mbbplatform.domain.PoVendor;

public interface BankDetailsRepository extends JpaRepository<BankDetails, Long> {

	Collection<BankDetails> findByPoVendorId(PoVendor poVendor);


}

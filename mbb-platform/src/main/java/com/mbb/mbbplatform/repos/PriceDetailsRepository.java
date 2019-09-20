package com.mbb.mbbplatform.repos;

import java.util.Collection;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mbb.mbbplatform.domain.PoVendor;
import com.mbb.mbbplatform.domain.PriceDetails;
import com.mbb.mbbplatform.domain.VendorItemDetails;

public interface PriceDetailsRepository extends JpaRepository<PriceDetails, Long> {

	PriceDetails findByVendorItemDetailsId(VendorItemDetails itemDetails);

	Collection<PriceDetails> findByPoVendorId(PoVendor poVendor);

}

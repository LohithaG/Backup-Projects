package com.mbb.mbbplatform.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mbb.mbbplatform.domain.PoVendor;
import com.mbb.mbbplatform.domain.VendorItemDetails;

public interface VendorItemDetailsRepository extends JpaRepository<VendorItemDetails,Long> {

	List<VendorItemDetails> findByPoVendorId(PoVendor poVendor);

	VendorItemDetails findBySkuCode(String skuCode);

}
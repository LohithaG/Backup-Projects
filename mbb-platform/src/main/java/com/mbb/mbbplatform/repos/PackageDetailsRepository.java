package com.mbb.mbbplatform.repos;

import java.util.Collection;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mbb.mbbplatform.domain.PackageDetails;
import com.mbb.mbbplatform.domain.TransferInventory;

public interface PackageDetailsRepository extends JpaRepository<PackageDetails, Long>{
	
public Collection<PackageDetails>	findByTransferInventoryId(TransferInventory id );

public PackageDetails findByIdAndSkuCode(Long id, String skuCode);

}

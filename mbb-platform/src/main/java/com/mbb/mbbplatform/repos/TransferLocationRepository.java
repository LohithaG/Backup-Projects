package com.mbb.mbbplatform.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mbb.mbbplatform.domain.TransferLocation;

public interface TransferLocationRepository extends JpaRepository<TransferLocation, Long>{

	TransferLocation findByTransferLocation(String packageName);

}

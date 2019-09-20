package com.mbb.mbbplatform.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mbb.mbbplatform.domain.ShippingProviderLocation;

public interface ShippingPackageLocationRepository extends JpaRepository<ShippingProviderLocation, Long>{

}

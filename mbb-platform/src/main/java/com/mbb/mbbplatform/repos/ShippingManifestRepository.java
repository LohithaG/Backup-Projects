package com.mbb.mbbplatform.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mbb.mbbplatform.domain.ShippingManifest;

public interface ShippingManifestRepository extends JpaRepository<ShippingManifest, Long> {

}

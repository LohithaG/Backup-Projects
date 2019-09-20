package com.mbb.mbbplatform.repos;


import org.springframework.data.jpa.repository.JpaRepository;

import com.mbb.mbbplatform.domain.InventorySnapshot;

public interface InventorySnapshotRepository extends JpaRepository<InventorySnapshot, Long>{

	

}

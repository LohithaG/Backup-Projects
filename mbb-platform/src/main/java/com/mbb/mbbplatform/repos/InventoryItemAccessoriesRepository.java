package com.mbb.mbbplatform.repos;

import java.util.Collection;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mbb.mbbplatform.domain.InventoryAccessoryChecklist;

public interface InventoryItemAccessoriesRepository extends JpaRepository<InventoryAccessoryChecklist, Long> {

	public Collection<InventoryAccessoryChecklist> findBySkuCode(String skuCode);

}

package com.mbb.mbbplatform.repos;

import java.util.Collection;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mbb.mbbplatform.domain.InventoryAccessoryChecklist;
import com.mbb.mbbplatform.domain.InventoryItem;
import com.mbb.mbbplatform.domain.InventoryItemChecklist;

public interface InventoryItemChecklistRepository extends JpaRepository<InventoryItemChecklist, Long>{

	Collection<InventoryItemChecklist> findByInventoryItemId(Long id);

	Collection<InventoryItemChecklist> findByInventoryItemId(InventoryItem inventoryItem);

	List<InventoryItemChecklist> findByAccessoriesId(InventoryAccessoryChecklist accessory);

}

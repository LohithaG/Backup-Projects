package com.mbb.mbbplatform.repos;

import java.util.Collection;

import javax.validation.Valid;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.mbb.mbbplatform.domain.InventoryItemStatus;

public interface InventoryItemStatusRepository extends JpaRepository<InventoryItemStatus, Long>{

	InventoryItemStatus findByItemStatus(@Valid String itemStatus);

	@Query(value="SELECT * FROM inventoryitemstatus where inventory_condition_id=?1",nativeQuery=true)
	Collection<InventoryItemStatus> getStatusByInventoryCondition(Long id);

}

package com.mbb.mbbplatform.repos;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

import javax.validation.constraints.NotNull;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.mbb.mbbplatform.domain.Facility;
import com.mbb.mbbplatform.domain.Inventory;
import com.mbb.mbbplatform.domain.InventoryItem;
import com.mbb.mbbplatform.domain.InventoryItemStatus;
import com.mbb.mbbplatform.domain.PoVendor;
import com.mbb.mbbplatform.domain.TransferInventory;

public interface InventoryItemRepository extends JpaRepository<InventoryItem, Long>{

	Collection<InventoryItem> findByInventoryId(Inventory inventory);

	InventoryItem findByBarcode(@NotNull String barcode);

	Collection<InventoryItem> findByItemStatusId(Optional<InventoryItemStatus> inventoryItemStatus);

	Collection<InventoryItem> findByFacilityId(Facility facilityId);
		
	Collection<InventoryItem> findByTransferInventoryId(TransferInventory id );

	Collection<InventoryItem> findByPoVendorId(PoVendor poVendor);

	InventoryItem findBySerialNumber(@NotNull String serialNumber);
	@Query(value = "SELECT * FROM mbbinventory.inventoryitem WHERE created_time >= ?1 AND created_time <= ?2 ", nativeQuery = true)

	Collection<InventoryItem> findByStartEndDates(String startDate, String endDate);
	@Query(value = "SELECT * FROM mbbinventory.inventoryitem WHERE created_time >= ?1 AND created_time <= ?2 AND inventory_id=?3", nativeQuery = true)
	Collection<InventoryItem> findByInventoryIdAndDates(String startdate, String endDate, Inventory inventory);
	
	
	Collection<InventoryItem> findByInventoryIdAndItemStatusId(Inventory inventory, InventoryItemStatus inventoryItemStatus);

	List<InventoryItem>  findAllByInventoryId(Inventory inventory);

	Collection<InventoryItem> findByTransferInventoryIdAndScanned(TransferInventory transferInventory, boolean b);


}

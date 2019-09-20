package com.mbb.mbbplatform.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mbb.mbbplatform.domain.SelfShipment;
import com.mbb.mbbplatform.domain.ServicingProduct;
import com.mbb.mbbplatform.domain.TransferInventory;

public interface SelfShipmentRepository extends JpaRepository<SelfShipment, Long> {

	public SelfShipment findByDriverName(String driverName);
	
	public SelfShipment findByTransferInventoryId(TransferInventory transferInventoryId);

	public SelfShipment findByServicingProductId(ServicingProduct servicingProduct);

}

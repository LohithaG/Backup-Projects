package com.mbb.mbbplatform.repos;

import java.util.Collection;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mbb.mbbplatform.domain.ServicingProduct;
import com.mbb.mbbplatform.domain.ShippingAggregator;
import com.mbb.mbbplatform.domain.TransferInventory;

public interface ShippingAggregatorRepository extends JpaRepository<ShippingAggregator, Long> {

	public ShippingAggregator findByTrackingNumber(String trackingNumber);
	
	public Collection<ShippingAggregator> findByShippingAggregator(String shippingAggr);
	
	public Collection<ShippingAggregator> findByCourierName(String courierName);

	public ShippingAggregator findByTransferInventoryId(TransferInventory transferInventoryId);

	public ShippingAggregator findByServicingProductId(ServicingProduct servicingProduct);
	

}

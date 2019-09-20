package com.mbb.mbbplatform.repos;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.mbb.mbbplatform.domain.SaleOrderForShipments;

public interface SaleOrdersForShipmentsRepository extends JpaRepository<SaleOrderForShipments, Long> {

	
	

	@Query(value = "SELECT * FROM mbbinventory.saleordersforshipments WHERE saleordersforshipments.shipping_package_status_code =?1 And saleordersforshipments.dispatch_date < ?2 ", nativeQuery = true)
	public List<SaleOrderForShipments> findByShippingPackageStatusCodeAndDispatchDate(String shippingPackageStatusCode,
			LocalDateTime dispatchDate);
	
	List<SaleOrderForShipments> findByZohocreatedDate(LocalDate zohocreatedDate);

	@Query(value = "SELECT * FROM mbbinventory.saleordersforshipments where channel_name = 'AMAZON_IN' AND shipping_provider in('ATS',' ') AND sale_order_item_status!='FULFILLABLE' AND zohocreated_date=?1", nativeQuery = true)
	public List<SaleOrderForShipments> findAllByChannelNameAndZohocreatedDate(LocalDate date);

	public List<SaleOrderForShipments> findByDisplayOrderCode(String displayOrderCode);
	
	@Query(value=" SELECT * FROM mbbinventory.saleordersforshipments WHERE saleordersforshipments.channel_name='FLIPKART'AND sale_order_item_status!='FULFILLABLE' AND zohocreated_date=?1 ", nativeQuery = true)
	public List<SaleOrderForShipments> findByChannelNameAndZohocreatedDate(LocalDate date);

	public SaleOrderForShipments findBySaleOrderItemCode(String saleOrderItemCode);

	public SaleOrderForShipments findBySaleOrderItemCodeAndDisplayOrderCode(String saleOrderItemCode, String invoiceNumber);

	@Query(value=" SELECT * FROM mbbinventory.saleordersforshipments WHERE saleordersforshipments.channel_name='FLIPKART' ", nativeQuery = true)
	public List<SaleOrderForShipments> findByChannelName();

	public List<SaleOrderForShipments> findAllByDisplayOrderCode(String orderNumber);
}

package com.mbb.mbbplatform.repos;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.mbb.mbbplatform.domain.SaleOrders;

@Repository
public interface SaleOrdersRepository extends JpaRepository<SaleOrders, Long> {

	@Query(value = "SELECT * FROM mbbinventory.saleorders WHERE saleorders.shipping_package_status_code =?1 And saleorders.dispatch_date < ?2 ", nativeQuery = true)
	public List<SaleOrders> findByShippingPackageStatusCodeAndDispatchDate(String shippingPackageStatusCode,
			LocalDateTime dispatchDate);
	
	List<SaleOrders> findByZohocreatedDate(LocalDate zohocreatedDate);

	@Query(value = "SELECT * FROM mbbinventory.saleorders where channel_name = 'AMAZON_IN' AND shipping_provider in('ATS') AND zohocreated_date=?1", nativeQuery = true)
	public List<SaleOrders> findAllByChannelNameAndZohocreatedDate(LocalDate date);

	public List<SaleOrders> findByDisplayOrderCode(String displayOrderCode);
	
	@Query(value=" SELECT * FROM mbbinventory.saleorders WHERE saleorders.channel_name='FLIPKART'AND zohocreated_date=?1 ", nativeQuery = true)
	public List<SaleOrders> findByChannelNameAndZohocreatedDate(LocalDate date);

	public SaleOrders findBySaleOrderItemCode(String saleOrderItemCode);

	public SaleOrders findBySaleOrderItemCodeAndDisplayOrderCode(String saleOrderItemCode, String invoiceNumber);

	@Query(value=" SELECT * FROM mbbinventory.saleorders WHERE saleorders.channel_name='FLIPKART' ", nativeQuery = true)
	public List<SaleOrders> findByChannelName();

	

}

package com.mbb.mbbplatform.repos;

import java.time.LocalDateTime;
import java.util.Collection;
import java.util.List;
import javax.validation.constraints.NotNull;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.mbb.mbbplatform.domain.ZepoSRShipments;

public interface ZepoSRShipmentsRepository extends JpaRepository<ZepoSRShipments, Long> {

	public List<ZepoSRShipments> findByStatus(String status);
	@Query(value = " SELECT * FROM mbbinventory.zeposrshipments WHERE zeposrshipments.status in('PICKUP SCHEDULED','CANCELLED' ,'DELIVERED','IN TRANSIT','OUT FOR DELIVERY','FULFILLABLE','RETURNED')", nativeQuery = true)
	public List<ZepoSRShipments> findAllByStatus();

	public List<ZepoSRShipments> findByShippingAggregator(String shippingAggregator);

	List<ZepoSRShipments> findByShippingAggregatorAndStatus(String shippingAggregator, String status);

	List<ZepoSRShipments> findByTrackingNo(String trackingNo);

	List<ZepoSRShipments> findByOrderId(String orderId);

	ZepoSRShipments findByRequestDate(String requestDate);

	List<ZepoSRShipments> findBySaleOrderItemCode(String saleOrderItemCode);

	@Query(value = "SELECT * FROM mbbinventory.zeposrshipments WHERE order_date >= ?1 AND order_date <= ?2", nativeQuery = true)
	Collection<ZepoSRShipments> getShipmentsReports(@NotNull String startDate, @NotNull String endDate);

	@Query(value = "SELECT * FROM mbbinventory.zeposrshipments WHERE order_date >= ?1 AND order_date <= ?2 AND shipping_aggregator = ?3 AND status = ?4", nativeQuery = true)
	List<ZepoSRShipments> getShipmentsDetails(@NotNull String startDate, @NotNull String endDate,
			@NotNull String shippingAggregator, @NotNull String status);

	@Query(value = "SELECT * FROM mbbinventory.zeposrshipments WHERE zeposrshipments.status =?1 And zeposrshipments.dispatch_date < ?2 order by dispatch_date asc ", nativeQuery = true)
	public List<ZepoSRShipments> findByStatusAndDispatchDate(String status, LocalDateTime dispatchDate);

	@Query(value = "SELECT * FROM mbbinventory.zeposrshipments WHERE order_date >= ?1 AND order_date <= ?2", nativeQuery = true)
	List<ZepoSRShipments> findByStartDateAndEndDate(@NotNull String startDate, @NotNull String endDate);

	@Query(value = "SELECT * FROM mbbinventory.zeposrshipments WHERE order_date >= ?1 AND order_date <= ?2 AND shipping_aggregator = ?3", nativeQuery = true)
	List<ZepoSRShipments> findByStartDateAndEndDateAndShippingAggregator(@NotNull String startDate,
			@NotNull String endDate, @NotNull String shippingAggregator);

	@Query(value = "SELECT * FROM mbbinventory.zeposrshipments WHERE order_date >= ?1 AND order_date <= ?2 AND status = ?3", nativeQuery = true)
	List<ZepoSRShipments> findByStartDateAndEndDateAndStatus(@NotNull String startDate, @NotNull String endDate,
			@NotNull String status);
	
	@Query(value = "SELECT * FROM mbbinventory.zeposrshipments WHERE order_date >= ?1 AND order_date <= ?2 AND shipping_aggregator = ?3 and payment_mode=?4", nativeQuery = true)
	List<ZepoSRShipments> findByStartDateAndEndDateAndShippingAggregatorAndPaymentMode(@NotNull String startDate,
			@NotNull String endDate, @NotNull String shippingAggregator, @NotNull String paymentMode);
	
	@Query(value = "SELECT * FROM mbbinventory.zeposrshipments WHERE order_date >= ?1 AND order_date <= ?2 AND shipping_aggregator = ?3 and status=?4 and payment_mode=?5", nativeQuery = true)
	List<ZepoSRShipments> getShipmentsDetailsWithPaymentMode(@NotNull String startDate, @NotNull String endDate,
			@NotNull String shippingAggregator, @NotNull String status, @NotNull String paymentMode);
	
	
	@Query(value = "SELECT * FROM mbbinventory.zeposrshipments WHERE order_date >= ?1 AND order_date <= ?2 AND status = ?3 and payment_mode=?4", nativeQuery = true)
	 List<ZepoSRShipments> findByStartDateAndEndDateAndStatusAndPaymentMode(@NotNull String startDate,
			@NotNull String endDate, @NotNull String status, @NotNull String paymentMode);
	
	@Query(value = "SELECT * FROM mbbinventory.zeposrshipments WHERE order_date >= ?1 AND order_date <= ?2 AND shipping_aggregator = ?3 and status=?4", nativeQuery = true)
	 List<ZepoSRShipments> findByStartDateAndEndDateAndShippingAggregatorAndStatus(@NotNull String startDate,
			@NotNull String endDate, @NotNull String shippingAggregator, @NotNull String status);
	
	@Query(value = "SELECT * FROM mbbinventory.zeposrshipments WHERE order_date >= ?1 AND order_date <= ?2 AND payment_mode = ?3", nativeQuery = true)

	List<ZepoSRShipments> findByStartDateAndEndDateAndPaymentMode(@NotNull String startDate,
			@NotNull String endDate, @NotNull String paymentMode);
	@Query(value = "SELECT * FROM mbbinventory.zeposrshipments WHERE order_id = ?1 AND shipping_aggregator =?2 ", nativeQuery = true)
	List<ZepoSRShipments> findByOrderIdAndShippingAggregator(String orderId,String shippingAggregator);
	
	
	

}

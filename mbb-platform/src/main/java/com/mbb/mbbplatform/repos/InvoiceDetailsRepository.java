package com.mbb.mbbplatform.repos;

import java.util.List;

import javax.validation.constraints.NotNull;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.mbb.mbbplatform.domain.InvoiceDetails;

public interface InvoiceDetailsRepository extends JpaRepository<InvoiceDetails, Long> {
	List<InvoiceDetails> findByInvoiceNumber(@NotNull String invoiceId);

	InvoiceDetails findBySaleOrderItemCode(String saleOrderItemCode);

	@Query(value = "SELECT * FROM mbbinventory.invoicedetails WHERE order_date >= ?1 AND order_date <= ?2 GROUP BY invoice_number", nativeQuery = true)
	List<InvoiceDetails> findInvoiceDetails(@NotNull String startDate, @NotNull String endDate);

	@Query(value = "SELECT * FROM mbbinventory.invoicedetails WHERE order_date >= ?1 AND order_date <= ?2 AND channel_name = ?3  AND payment_mode = ?4 GROUP BY invoice_number", nativeQuery = true)
	List<InvoiceDetails> findByStartDateAndEndDateAndChannelNameAndPaymentMode(@NotNull String startDate,
			@NotNull String endDate, @NotNull String channel, @NotNull String paymentMode);

	@Query(value = "SELECT * FROM mbbinventory.invoicedetails WHERE order_date >= ?1 AND order_date <= ?2 AND status = ?3  AND payment_mode = ?4 GROUP BY invoice_number", nativeQuery = true)
	List<InvoiceDetails> findByStartDateAndEndDateAndStatusAndPaymentMode(@NotNull String startDate,
			@NotNull String endDate, @NotNull String status, @NotNull String paymentMode);

	@Query(value = "SELECT * FROM mbbinventory.invoicedetails WHERE order_date >= ?1 AND order_date <= ?2 AND status = ?3  AND channel_name = ?4 GROUP BY invoice_number", nativeQuery = true)
	List<InvoiceDetails> findByStartDateAndEndDateAndStatusAndChannel(String startDate, String endDate, String status,
			String channel);

	@Query(value = "SELECT * FROM mbbinventory.invoicedetails WHERE order_date >= ?1 AND order_date <= ?2 AND channel_name = ?3 GROUP BY invoice_number", nativeQuery = true)
	List<InvoiceDetails> findByStartDateAndEndDateAndChannel(String startDate, String endDate, String channel);

	@Query(value = "SELECT * FROM mbbinventory.invoicedetails WHERE order_date >= ?1 AND order_date <= ?2 AND status = ?3 GROUP BY invoice_number", nativeQuery = true)
	List<InvoiceDetails> findByStartDateAndEndDateAndStatus(String startDate, String endDate, String status);

	@Query(value = "SELECT * FROM mbbinventory.invoicedetails WHERE order_date >= ?1 AND order_date <= ?2 AND payment_mode = ?3 GROUP BY invoice_number", nativeQuery = true)
	List<InvoiceDetails> findByStartDateAndEndDateAndPaymentMode(String startDate, String endDate, String paymentMode);

	@Query(value = "SELECT * FROM mbbinventory.invoicedetails WHERE order_date >= ?1 AND order_date <= ?2 AND payment_mode = ?3 AND status = ?4  AND channel_name = ?5 GROUP BY invoice_number", nativeQuery = true)
	List<InvoiceDetails> findByStartDateAndEndDateAndStatusAndChannelAndPaymentMode(String startDate, String endDate,
			String paymentMode, String status, String channel);

	InvoiceDetails findByInvoiceNumberAndSaleOrderItemCode(String displayOrderCode, String saleOrderItemCode);

}

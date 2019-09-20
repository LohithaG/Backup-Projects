package com.mbb.mbbplatform.repos;

import java.util.Collection;
import java.util.List;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.mbb.mbbplatform.domain.PoVendor;
import com.mbb.mbbplatform.domain.Vendor;

public interface PoVendorRepository extends JpaRepository<PoVendor,Long>{

	PoVendor findByPurchaseOrderNumber(@Valid String purchaseOrderNumber);

	Collection<PoVendor> findByVendorId(Vendor vendor);

	@Query(value = "SELECT * FROM mbbinventory.povendor WHERE commercial_invoice_date >= ?1 AND commercial_invoice_date <= ?2 ", nativeQuery = true)
	Collection<PoVendor> findByCommercialInvoiceDate(@NotNull String startDate, @NotNull String endDate);
	
	@Query(value = "SELECT * FROM mbbinventory.povendor WHERE purchase_invoice_status= ?1 ", nativeQuery = true)
	List<PoVendor> findByPurchaseInvoiceStatus(Long l);




}

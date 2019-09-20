package com.mbb.mbbplatform.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.mbb.mbbplatform.domain.QuotationDetails;

public interface QuotationDetailsRepository extends JpaRepository<QuotationDetails,Long> {

	QuotationDetails findByServicingProductId(Long serviceId);
	
	@Query(value = "SELECT * FROM mbbinventory.quotationdetails WHERE  servicing_product_id =?1 and payment_status=?2 ", nativeQuery = true)
	QuotationDetails findByServicingProductIdAndPaymentStatus(Long id, Boolean status);



}

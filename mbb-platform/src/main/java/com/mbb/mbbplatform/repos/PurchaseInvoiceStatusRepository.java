package com.mbb.mbbplatform.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mbb.mbbplatform.domain.PurchaseInvoiceStatus;

public interface PurchaseInvoiceStatusRepository extends JpaRepository<PurchaseInvoiceStatus, Long> {

}

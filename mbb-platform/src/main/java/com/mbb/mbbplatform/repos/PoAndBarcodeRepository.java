package com.mbb.mbbplatform.repos;

import java.util.List;

import javax.validation.constraints.NotNull;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mbb.mbbplatform.domain.PoAndBarcode;
import com.mbb.mbbplatform.domain.PoVendor;

public interface PoAndBarcodeRepository extends JpaRepository<PoAndBarcode, Long> {

	PoAndBarcode findByBarcode(@NotNull String barcode);

	List<PoAndBarcode> findBySkuCode(String skuCode);

	List<PoAndBarcode> findBySkuCodeAndPoVendorId(String skuCode, PoVendor poVendor);

}

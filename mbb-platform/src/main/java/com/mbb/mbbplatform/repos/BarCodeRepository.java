package com.mbb.mbbplatform.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.mbb.mbbplatform.domain.Barcode;

public interface BarCodeRepository extends JpaRepository<Barcode, Long> {

	@Query(value = "SELECT * FROM mbbinventory.barcodeid ORDER BY ID DESC limit 1 ", nativeQuery = true)
	public Barcode findBylastRecord();

	public Barcode findBySku(String skuCode);
	
	public Barcode findByNxtInventoryId(Long barcodeId );

}

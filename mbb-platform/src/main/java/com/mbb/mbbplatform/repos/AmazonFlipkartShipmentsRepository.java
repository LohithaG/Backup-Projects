package com.mbb.mbbplatform.repos;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.mbb.mbbplatform.domain.AmazonFlipkartShipments;


public interface AmazonFlipkartShipmentsRepository extends JpaRepository<AmazonFlipkartShipments, Long>{

	@Query(value = "SELECT * FROM mbbinventory.amazonflipkartshipments where  zohocreated_date=?1", nativeQuery = true)
	List<AmazonFlipkartShipments> findAllByZohocreatedDate(LocalDate date);

	List<AmazonFlipkartShipments> findBySaleOrderItemCode(String saleOrderItemCode);

}

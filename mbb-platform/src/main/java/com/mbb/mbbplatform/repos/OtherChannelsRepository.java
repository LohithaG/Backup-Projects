package com.mbb.mbbplatform.repos;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mbb.mbbplatform.domain.OtherChannels;

public interface OtherChannelsRepository extends JpaRepository<OtherChannels, Long> {

	List<OtherChannels> findBySaleOrderItemCode(String saleOrderItemCode);
	
	List<OtherChannels> findByZohocreatedDate(LocalDate zohocreatedDate );
	
	
	
}

package com.mss.zoho.repos;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mss.zoho.Saleorder;


public interface SaleorderRepository extends JpaRepository<Saleorder, Long> {
	

	List<Saleorder> findByCreated(LocalDate Created);

//	List<Saleorder> findByCreated(LocalDate localDate);
	

	
	//Saleorder findBysubject(String Subject);


	
	/*Saleorder findBycarrier(String Carrier);
	
	Saleorder findByDescription(String Description);*/
	
	
}

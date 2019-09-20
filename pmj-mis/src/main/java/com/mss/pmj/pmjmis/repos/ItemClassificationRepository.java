package com.mss.pmj.pmjmis.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mss.pmj.pmjmis.domain.ItemClassification;

public interface ItemClassificationRepository extends JpaRepository<ItemClassification, Long> {

	
	ItemClassification findByItemCode(String itemCode);
}

package com.mss.pmj.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mss.pmj.domain.ItemClassification;

public interface ItemClassificationRepository extends JpaRepository<ItemClassification, Long> {

	ItemClassification findByItemCode(String itemCode);
}

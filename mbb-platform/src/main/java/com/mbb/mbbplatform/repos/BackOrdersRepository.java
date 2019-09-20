package com.mbb.mbbplatform.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mbb.mbbplatform.domain.BackOrders;


public interface  BackOrdersRepository extends JpaRepository<BackOrders, Long>
{
	
}

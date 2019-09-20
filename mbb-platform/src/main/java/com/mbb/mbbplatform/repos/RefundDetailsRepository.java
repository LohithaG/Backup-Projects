package com.mbb.mbbplatform.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mbb.mbbplatform.domain.Dispatch;
import com.mbb.mbbplatform.domain.RefundDetails;

public interface RefundDetailsRepository extends JpaRepository<RefundDetails, Long>{
	
	RefundDetails findByDispatchId(Dispatch dispatchId);


}

package com.mbb.mbbplatform.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mbb.mbbplatform.domain.Dispatch;
import com.mbb.mbbplatform.domain.ReturnDetails;

public interface ReturnDetailsRepository extends JpaRepository<ReturnDetails, Long>{
	
	ReturnDetails findByDispatchId(Dispatch dispatchId);


}

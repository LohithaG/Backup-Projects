package com.mbb.mbbplatform.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mbb.mbbplatform.domain.CustomerDetails;

public interface CustomerDetailsRepository extends JpaRepository<CustomerDetails,Long>{

}

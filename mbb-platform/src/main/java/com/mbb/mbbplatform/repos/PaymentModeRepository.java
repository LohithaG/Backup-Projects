package com.mbb.mbbplatform.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mbb.mbbplatform.domain.PaymentModes;

public interface PaymentModeRepository extends JpaRepository<PaymentModes, Long>{

}

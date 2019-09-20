package com.mbb.mbbplatform.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mbb.mbbplatform.domain.ShiprocketCodRemittance;

public interface ShiprocketCodRemittanceRepository extends JpaRepository<ShiprocketCodRemittance, Long> {

	void save(List<ShiprocketCodRemittance> salesList);

	ShiprocketCodRemittance findByCrfid(Long crfid);

}

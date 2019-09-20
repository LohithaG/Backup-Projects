package com.mbb.mbbplatform.repos;

import java.util.Collection;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.mbb.mbbplatform.domain.FlipkartCodDump;

public interface FlipkartCodDumpRepository extends JpaRepository< FlipkartCodDump,Long>{
	@Query(value = "SELECT * FROM mbbinventory.flipkartcoddump WHERE neft_type = 'postpaid' ", nativeQuery = true)

	Collection<FlipkartCodDump> findByNeftType( );


}
package com.mbb.mbbplatform.repos;

import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;

import com.mbb.mbbplatform.domain.QuotationDetails;
import com.mbb.mbbplatform.domain.SpareParts;

public interface SparePartsRepository extends JpaRepository<SpareParts,Long>{

	List<SpareParts> findByQuotationDetailsId(QuotationDetails servicingProduct);

	List<SpareParts> findAllByQuotationDetailsId( QuotationDetails quotationDetails);

}

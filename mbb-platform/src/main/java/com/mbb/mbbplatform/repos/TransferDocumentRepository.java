package com.mbb.mbbplatform.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mbb.mbbplatform.domain.TransferDocument;
import com.mbb.mbbplatform.domain.TransferInventory;

public interface TransferDocumentRepository extends JpaRepository< TransferDocument, Long> {

List< TransferDocument> findByPackageId(TransferInventory transferInventory);


}
package com.mbb.mbbplatform.repos;

import org.springframework.data.jpa.repository.JpaRepository;


import com.mbb.mbbplatform.domain.BusyManagement;

public interface BusyManagementRepository extends JpaRepository<BusyManagement, Long> {

}

package com.mss.pmj.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mss.pmj.domain.Cluster;

public interface ClusterRepository extends JpaRepository<Cluster, Long> {

}

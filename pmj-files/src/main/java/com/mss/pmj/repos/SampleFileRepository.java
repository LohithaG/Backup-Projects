package com.mss.pmj.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mss.pmj.domain.SampleFile;

public interface SampleFileRepository extends JpaRepository<SampleFile, Integer> {

	SampleFile findByFileName(String string);

}

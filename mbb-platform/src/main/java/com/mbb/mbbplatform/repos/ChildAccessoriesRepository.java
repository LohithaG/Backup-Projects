package com.mbb.mbbplatform.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mbb.mbbplatform.domain.ChildAccessories;

public interface ChildAccessoriesRepository extends JpaRepository<ChildAccessories, Long>{
	
	
List<ChildAccessories> findByParentId(Long parentId);

List<ChildAccessories> findByChildId(Long childId);
}

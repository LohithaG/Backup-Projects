package com.mbb.mbbplatform.repos;

import org.springframework.data.jpa.repository.JpaRepository;


import com.mbb.mbbplatform.domain.Category;

public interface CategoryRepository extends JpaRepository<Category, Long>{

}

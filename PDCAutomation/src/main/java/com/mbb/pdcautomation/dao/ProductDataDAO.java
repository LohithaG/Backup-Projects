package com.mbb.pdcautomation.dao;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import com.mbb.pdcautomation.model.ProductData;

/**
 * 
 * It is DAO(Data Access Object) interface which defines all ProductData related
 * operations(create,read,update,delete)
 *
 */

public interface ProductDataDAO {
	/**
	 * This method saves or updates Product data object into Database
	 * 
	 * @param productData
	 *            object
	 * @return void
	 */
	public void saveProductData(ProductData productData);

	/**
	 * This method gets all ProductData information from Database
	 * 
	 * @param none
	 * @return void
	 */
	public List<ProductData> getAllProductData(String hql);

	/**
	 * This method checks whether a particular ProductData exists in Database or
	 * not
	 * 
	 * @param orderId,
	 *            productName
	 * 
	 * @return boolean
	 */
	public boolean productExists(String orderId, String productName);

	/**
	 * This method gets one ProductData information from Database based on its
	 * ID
	 * 
	 * @param productId
	 * @return Optional<ProductData>
	 */
	public Optional<ProductData> getProductDataById(int checklistId);

	/**
	 * This method deletes one ProductData information from Database
	 * 
	 * @param productData
	 * @return void
	 */
	public void deleteProductData(ProductData productData);

	/**
	 * This method updates one ProductData information from Database
	 * 
	 * @param productData
	 * @return void
	 */

	public void updateProductData(ProductData productData);

	/**
	 * This method gets all ProductData information from Database
	 * 
	 * @param Startdate,Enddate,filterValue,hql
	 * @return List<ProductData>
	 */
	public List<ProductData> getProductDataByAllFilters(LocalDate Startdate, LocalDate Enddate, String filterValue,
			String hql);

	/**
	 * This method gets all ProductData information from Database By Dates
	 * 
	 * @param Startdate,Enddate,hql
	 * @return List<ProductData>
	 */
	public List<ProductData> getProductDataByDates(LocalDate Startdate, LocalDate Enddate, String hql);

	/**
	 * This method gets all ProductData information from Database By Filter
	 * 
	 * @param hql
	 * @return List<ProductData>
	 */
	public List<ProductData> getProductDataByFilter(String hql);

}

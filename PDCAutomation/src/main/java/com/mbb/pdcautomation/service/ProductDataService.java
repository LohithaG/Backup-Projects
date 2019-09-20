package com.mbb.pdcautomation.service;

import java.util.List;

import com.mbb.pdcautomation.model.Product;
import com.mbb.pdcautomation.model.ProductData;
import com.mbb.pdcautomation.model.ResponseData;

/**
 * 
 * This ProductDataService interface can provide services for all ProductData
 * operations
 *
 */
public interface ProductDataService {

	/**
	 * This method can provide service for ProductData add operation
	 * 
	 * @param productData
	 * @return ResponseData object
	 */
	public ResponseData addProductData(Product productData);

	/**
	 * This method gets all orders information from Database
	 * 
	 * @param userRole
	 * @return List<ProductData>
	 */
	public List<ProductData> getAllProductData(String userRole);

	/**
	 * This method deletes one ProductData information from Database
	 * 
	 * @param checklistId
	 * @return ResponseData
	 */
	public ResponseData deleteProductData(int checklistId);

	/**
	 * This method updates one ProductData information from Database
	 * 
	 * @param productData
	 * @return ResponseData
	 */
	public ResponseData updateProductData(Product product);

	/**
	 * This method gets one ProductData information from Database based on its
	 * ID
	 * 
	 * @param checklistId
	 * @return ProductData object
	 */
	public ProductData getProductDataById(int checklistId);

	/**
	 * This method gets ProductData information from Database based on
	 * AllFilters
	 * 
	 * @param Startdate,Enddate,filterValue
	 * @return List<ProductData>
	 */
	public List<ProductData> getProductDataByAllFilters(String StartDate, String EndDate, String filterValue);

	/**
	 * This method gets ProductData information from Database based on its date
	 * 
	 * @param Startdate,Enddate
	 * @return List<ProductData>
	 */
	public List<ProductData> getProductDataByDates(String StartDate, String EndDate);

	/**
	 * This method gets ProductData information from Database based on Filter
	 * 
	 * @param filterValue
	 * @return List<ProductData>
	 */
	public List<ProductData> getProductDataByFilter(String filterValue);

}

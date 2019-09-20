package com.mbb.pdcautomation.service.impl;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mbb.pdcautomation.dao.impl.ProductDataDAOImpl;
import com.mbb.pdcautomation.model.Product;
import com.mbb.pdcautomation.model.ProductData;
import com.mbb.pdcautomation.model.ResponseData;
import com.mbb.pdcautomation.service.ProductDataService;

/**
 * 
 * This ProductDataService class can provide services for all ProductData
 * operations
 *
 */
@Service
public class ProductDataServiceImpl implements ProductDataService {

	@Autowired
	private ProductDataDAOImpl productDataDAOImpl;
	private static final Logger LOG = Logger.getLogger(ProductDataServiceImpl.class);

	/**
	 * This method can provide service for ProductData add operation
	 * 
	 * @param productData
	 * @return ResponseData object
	 */
	@Override
	public ResponseData addProductData(Product product) {
		LOG.info("adding ProductData in ProductDataServiceImpl started");
		ProductData productData = new ProductData();
		ResponseData responseData = new ResponseData();
		try {
			productData.setOrderId(product.getOrderId());
			productData.setDocketNumber(product.getDocketNumber());
			LocalDate checklistDate = LocalDate.parse(product.getChecklistDate());
			productData.setChecklistDate(checklistDate);
			LocalDate orderDate = LocalDate.parse(product.getOrderDate());
			productData.setOrderDate(orderDate);
			LocalDate dispatchDate = LocalDate.parse(product.getDispatchDate());
			productData.setDispatchDate(dispatchDate);
			productData.setSource(product.getSource());
			productData.setProductName(product.getProductName());
			productData.setProductQuantity(product.getProductQuantity());
			productData.setProductWarranty(product.isProductWarranty());
			productData.setMsn(product.getMsn());
			productData.setWarrantyPeriod(product.getWarrantyPeriod());
			productData.setModeOfPayment(product.getModeOfPayment());
			productData.setCourierProviderName(product.getCourierProviderName());
			productData.setShipmentPrice(product.getShipmentPrice());
			productData.setSalesPrice(product.getsalesPrice());
			productData.setEntryTax(product.getEntryTax());
			productData.setCheckPincode(product.isCheckPincode());
			productData.setCustomerImage(product.isCustomerImage());
			productData.setFormName(product.getFormName());
			productData.setDispatched(product.isDispatched());
			productData.setInvoiceToAccountant(product.isInvoiceToAccountant());
			productData.setCreatedBy(product.getCreatedBy());
			productData.setStatus(product.getStatus());

			if (productDataDAOImpl.productExists(product.getOrderId(), product.getProductName()) != true) {

				productDataDAOImpl.saveProductData(productData);
				responseData.setStatus("SUCCESS");
				responseData.setMessage("ProductData Checklist created successfully");
			} else {
				responseData.setStatus("FAILURE");
				responseData.setMessage("Product with this OrderId already existed");
			}
			LOG.info("adding ProductData in ProductDataServiceImpl ended");
		} catch (Exception error) {
			responseData.setStatus("FAILURE");
			responseData.setMessage("Error in adding ProductData Checklist");
			LOG.error("Failed in adding ProductData in ProductDataServiceImpl", error);
		}
		return responseData;
	}

	/**
	 * This method gets all orders information from Database
	 * 
	 * @param userRole
	 * @return List<ProductData>
	 */
	@Override
	public List<ProductData> getAllProductData(String userRole) {
		String hql;
		if (("[ROLE_ADMIN]".equals(userRole) || ("[ROLE_USER]".equals(userRole)))) {
			hql = "FROM ProductData";
		} else if ("[ROLE_VERIFIER]".equals(userRole)) {
			hql = "FROM ProductData where status=0";
		} else {
			hql = "FROM ProductData where status=1";
		}
		return productDataDAOImpl.getAllProductData(hql);
	}

	/**
	 * This method delete productdata based on id
	 * 
	 * @param checklistId
	 * @return ResponseData
	 */
	public ResponseData deleteProductData(int checklistId) {
		LOG.info("Delete ProductData Service implementation start");
		ResponseData response = new ResponseData();
		try {
			Optional<ProductData> productDataDetails = productDataDAOImpl.getProductDataById(checklistId);
			if (productDataDetails.isPresent()) {
				productDataDAOImpl.deleteProductData(productDataDetails.get());
				response.setStatus("SUCCESS");
				response.setMessage("ProductData Deleted Successfully");
			} else {
				response.setStatus("FAILURE");
				response.setMessage("There is no such Product");
			}
			LOG.info("Delete ProductData Service implementation end");
		} catch (Exception e) {
			LOG.error("Failed  in Deleting ProductData Service implementation", e);
			response.setStatus("FAILURE");
			response.setMessage("Failed  in Deleting ProductData");
		}
		return response;
	}

	/**
	 * This method update productdata
	 * 
	 * @param product
	 * @return ResponseData
	 */
	@Override
	public ResponseData updateProductData(Product product) {
		LOG.info("updating ProductData in ProductDataServiceImpl started");
		ProductData productData = new ProductData();
		ResponseData responseData = new ResponseData();
		try {
			productData.setChecklistId(product.getChecklistId());
			productData.setOrderId(product.getOrderId());
			productData.setDocketNumber(product.getDocketNumber());
			LocalDate checklistDate = LocalDate.parse(product.getChecklistDate());
			productData.setChecklistDate(checklistDate);
			LocalDate orderDate = LocalDate.parse(product.getOrderDate());
			productData.setOrderDate(orderDate);
			LocalDate dispatchDate = LocalDate.parse(product.getDispatchDate());
			productData.setDispatchDate(dispatchDate);
			productData.setSource(product.getSource());
			productData.setProductName(product.getProductName());
			productData.setProductQuantity(product.getProductQuantity());
			productData.setProductWarranty(product.isProductWarranty());
			productData.setMsn(product.getMsn());
			productData.setWarrantyPeriod(product.getWarrantyPeriod());
			productData.setModeOfPayment(product.getModeOfPayment());
			productData.setCourierProviderName(product.getCourierProviderName());
			productData.setShipmentPrice(product.getShipmentPrice());
			productData.setSalesPrice(product.getsalesPrice());
			productData.setEntryTax(product.getEntryTax());
			productData.setCheckPincode(product.isCheckPincode());
			productData.setCustomerImage(product.isCustomerImage());
			productData.setFormName(product.getFormName());
			productData.setDispatched(product.isDispatched());
			productData.setInvoiceToAccountant(product.isInvoiceToAccountant());
			productData.setCreatedBy(product.getCreatedBy());
			productData.setStatus(product.getStatus());
			productDataDAOImpl.updateProductData(productData);
			responseData.setStatus("SUCCESS");
			responseData.setMessage("ProductData Checklist updated successfully");
			LOG.info("updating ProductData in ProductDataServiceImpl ended");
		} catch (Exception error) {
			responseData.setStatus("FAILURE");
			responseData.setMessage("Error in updating ProductData Checklist");
			LOG.error("Failed in updating ProductData in ProductDataServiceImpl", error);
		}
		return responseData;

	}

	/**
	 * This method getProductDataById
	 * 
	 * @param productId
	 * @return ProductData
	 */
	@Override
	public ProductData getProductDataById(int productId) {
		LOG.info("getting ProductData in ProductDataServiceImpl started");
		ProductData productData = null;
		Optional<ProductData> productDataDetails = productDataDAOImpl.getProductDataById(productId);
		if (productDataDetails.isPresent()) {
			productData = productDataDetails.get();
		}
		LOG.info("getting ProductData in ProductDataServiceImpl ended");
		return productData;
	}

	/**
	 * This method getProductDataByAllFilters
	 * 
	 * @param StartDate,EndDate,filterValue
	 * @return List<ProductData>
	 */
	@Override
	public List<ProductData> getProductDataByAllFilters(String StartDate, String EndDate, String filterValue) {
		LOG.info("getting ProductData in ProductDataServiceImpl started");
		List<ProductData> productDate1 = null;
		String hql = null;
		try {
			if (("create".equals(filterValue))) {
				hql = "from ProductData where checklistDate between :Startdate and :Enddate and status=0";
			} else if ("verify".equals(filterValue)) {
				hql = "from ProductData where checklistDate between :Startdate and :Enddate and status=1";
			} else if ("approve".equals(filterValue)) {
				hql = "from ProductData where checklistDate between :Startdate and :Enddate and status=2";
			}

			else {

				hql = "from ProductData where checklistDate between :Startdate and :Enddate";

			}
			LocalDate Startdate = LocalDate.parse(StartDate);
			LocalDate Enddate = LocalDate.parse(EndDate);
			productDate1 = productDataDAOImpl.getProductDataByAllFilters(Startdate, Enddate, filterValue, hql);
		} catch (Exception error) {
			LOG.error("Failed in getting  ProductData by date  in ProductDataServiceImpl", error);
		}
		LOG.info("getting ProductData in ProductDataServiceImpl ended");
		return productDate1;
	}

	/**
	 * This method getProductDataByDates
	 * 
	 * @param StartDate,EndDate
	 * 
	 * @return List<ProductData>
	 */
	@Override
	public List<ProductData> getProductDataByDates(String StartDate, String EndDate) {
		LOG.info("getting ProductData in ProductDataServiceImpl started");
		List<ProductData> productDate1 = null;
		String hql = null;
		try {
			hql = "from ProductData where checklistDate between :Startdate and :Enddate";
			LocalDate Startdate = LocalDate.parse(StartDate);
			LocalDate Enddate = LocalDate.parse(EndDate);
			productDate1 = productDataDAOImpl.getProductDataByDates(Startdate, Enddate, hql);

		} catch (Exception error) {

			LOG.error("Failed in getting  ProductData by date  in ProductDataServiceImpl", error);
		}
		LOG.info("getting ProductData in ProductDataServiceImpl ended");
		return productDate1;
	}

	/**
	 * This method getProductDataByFilter
	 * 
	 * @param filterValue
	 * 
	 * @return List<ProductData>
	 */
	@Override
	public List<ProductData> getProductDataByFilter(String filterValue) {
		LOG.info("getting ProductData in ProductDataServiceImpl started");
		List<ProductData> productDate1 = null;
		String hql = null;
		try {
			if (("create".equals(filterValue))) {
				hql = "from ProductData where status=0";
			} else if ("verify".equals(filterValue)) {
				hql = "from ProductData where status=1";
			} else if ("approve".equals(filterValue)) {
				hql = "from ProductData where status=2";
			} else {

				hql = "from ProductData";
			}
			productDate1 = productDataDAOImpl.getProductDataByFilter(hql);
		} catch (Exception error) {
			LOG.error("Failed in getting  ProductData by date  in ProductDataServiceImpl", error);
		}
		LOG.info("getting ProductData in ProductDataServiceImpl ended");
		return productDate1;
	}

}

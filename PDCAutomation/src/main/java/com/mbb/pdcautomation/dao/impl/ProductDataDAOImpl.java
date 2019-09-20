package com.mbb.pdcautomation.dao.impl;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.apache.log4j.Logger;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.mbb.pdcautomation.dao.ProductDataDAO;
import com.mbb.pdcautomation.model.ProductData;

/**
 * 
 * It is DAO(Data Access Object) class which implemented all ProductData Entity
 * related operations(create,read,update,delete)
 *
 */
@Repository
public class ProductDataDAOImpl implements ProductDataDAO {
	@Autowired
	private SessionFactory sessionManager;
	private static final Logger LOG = Logger.getLogger(ProductDataDAOImpl.class);

	/**
	 * This method saves or updates Product data object into Database
	 * 
	 * @param productData
	 *            object
	 * 
	 * @return void
	 */
	@Override
	@Transactional
	public void saveProductData(ProductData productData) {
		LOG.info("adding ProductData in ProductDataDAOImpl started");
		try {
			Session session = sessionManager.getCurrentSession();
			session.save(productData);
			LOG.info("adding ProductData in ProductDataDAOImpl ended");
		} catch (RuntimeException e) {
			LOG.error("Failed in adding ProductData in ProductDataDAOImpl", e);

		}

	}

	/**
	 * This method gets all orders information from Database
	 * 
	 * @param none
	 * @return void
	 */

	@SuppressWarnings({ "unchecked", "deprecation" })
	@Override
	@Transactional
	public List<ProductData> getAllProductData(String hql) {
		LOG.info("getting all Products Data in ProductDataDAOImpl started");
		List<ProductData> allProductData = null;
		try {
			Session session = sessionManager.getCurrentSession();
			Query<ProductData> query = session.createQuery(hql);
			allProductData = query.list();
			LOG.info("getting all Products Data in ProductDataDAOImpl ended");
		} catch (RuntimeException e) {
			LOG.error("Failed in getting all Products Data in ProductDataDAOImpl", e);
		}

		return allProductData;

	}

	/**
	 * This method checks whether a particular ProductData exists in Database or
	 * not
	 * 
	 * @param orderId
	 *            , productName
	 * 
	 * @return boolean
	 */
	@SuppressWarnings({ "unchecked", "deprecation" })
	@Override
	@Transactional
	public boolean productExists(String orderId, String productName) {
		List<ProductData> productDataList;
		boolean exists = false;
		try {
			String queryString = "from ProductData where orderId= :orderId and  productName= :productName ";
			LOG.info("Finding ProductData with given orderId and productName already exits in database or not start");
			Session session = sessionManager.getCurrentSession();
			productDataList = (List<ProductData>) session.createQuery(queryString).setParameter("orderId", orderId)
					.setParameter("productName", productName).list();
			if (!productDataList.isEmpty()) {
				exists = true;
			}
			LOG.info("Finding ProductData with given orderId and productName already exits in database or not end");
		} catch (RuntimeException re) {
			LOG.error("Failed in finding ProductData with given orderId and productName already exits in database ",
					re);

		}

		return exists;
	}

	/**
	 * This method gets one ProductData information from Database based on its
	 * ID
	 * 
	 * @param checklistId
	 * @return Optional<ProductData>
	 */
	@SuppressWarnings({ "unchecked" })
	@Override
	@Transactional
	public Optional<ProductData> getProductDataById(int checklistId) {
		Optional<ProductData> productData = null;
		LOG.info("Finding ProductData  by checklistId in database start");
		try {
			String queryString = "from ProductData where checklistId= :checklistId";
			Session session = sessionManager.getCurrentSession();
			productData = session.createQuery(queryString).setParameter("checklistId", checklistId)
					.uniqueResultOptional();
			LOG.info("Finding ProductData  by checklistId in database end");
		} catch (RuntimeException re) {
			LOG.error("Failed in finding ProductData  by checklistId in database ", re);

		}
		return productData;

	}

	/**
	 * This method deletes one ProductData information from Database
	 * 
	 * @param productData
	 * @return void
	 */
	@Override
	@Transactional
	public void deleteProductData(ProductData productData) {

		LOG.info("deleting ProductData start");
		try {
			Session session = sessionManager.getCurrentSession();
			session.delete(productData);
			LOG.info("deleting ProductData end");
		} catch (RuntimeException re) {
			LOG.error("Failed in deleting ProductData", re);
			throw re;
		}

	}

	/**
	 * This method updates one ProductData information from Database
	 * 
	 * @param productData
	 * @return void
	 */
	@Override
	@Transactional
	public void updateProductData(ProductData productData) {
		LOG.info("updating ProductData in ProductDataDAOImpl started");
		try {
			Session session = sessionManager.getCurrentSession();
			session.update(productData);
			LOG.info("updating ProductData in ProductDataDAOImpl ended");
		} catch (RuntimeException e) {
			LOG.error("Failed in updating ProductData in ProductDataDAOImpl", e);

		}

	}

	/**
	 * This method gets all ProductData information from Database based on date
	 * filters
	 * 
	 * @param Startdate,Enddate,filterValue,hql
	 * @return List<ProductData>
	 */
	@SuppressWarnings({ "unchecked" })
	@Override
	@Transactional
	public List<ProductData> getProductDataByAllFilters(LocalDate Startdate, LocalDate Enddate, String filterValue,
			String hql) {
		List<ProductData> productDate = null;
		LOG.info("Finding ProductData  by filtering in database start");
		String queryString1 = hql;
		try {
			Session session = sessionManager.getCurrentSession();
			productDate = session.createQuery(queryString1).setParameter("Startdate", Startdate)
					.setParameter("Enddate", Enddate).list();
			LOG.info("Finding ProductData  by checklistdate in database end");
		} catch (RuntimeException re) {
			LOG.error("Failed in finding ProductData  by checklistdate in database ", re);
		}
		return productDate;
	}

	/**
	 * This method gets all ProductData information from Database based on dates
	 * 
	 * @param Startdate,Enddate,filterValue,hql
	 * @return List<ProductData>
	 */
	@SuppressWarnings({ "unchecked" })
	@Override
	@Transactional
	public List<ProductData> getProductDataByDates(LocalDate Startdate, LocalDate Enddate, String hql) {
		List<ProductData> productDate = null;
		LOG.info("Finding ProductData  by filtering in database start");
		String queryString1 = hql;
		try {
			Session session = sessionManager.getCurrentSession();
			productDate = session.createQuery(queryString1).setParameter("Startdate", Startdate)
					.setParameter("Enddate", Enddate).list();
			LOG.info("Finding ProductData  by checklistdate in database end");
		} catch (RuntimeException re) {
			LOG.error("Failed in finding ProductData  by checklistdate in database ", re);

		}
		return productDate;
	}

	/**
	 * This method gets all ProductData information from Database based on
	 * filters
	 * 
	 * @param hql
	 * @return List<ProductData>
	 */
	@SuppressWarnings({ "unchecked" })
	@Override
	@Transactional
	public List<ProductData> getProductDataByFilter(String hql) {
		List<ProductData> productDate = null;
		LOG.info("Finding ProductData  by filtering in database start");
		String queryString1 = hql;
		try {
			Session session = sessionManager.getCurrentSession();
			productDate = session.createQuery(queryString1).list();
			LOG.info("Finding ProductData  by checklistdate in database end");
		} catch (RuntimeException re) {
			LOG.error("Failed in finding ProductData  by checklistdate in database ", re);
		}
		return productDate;
	}

}

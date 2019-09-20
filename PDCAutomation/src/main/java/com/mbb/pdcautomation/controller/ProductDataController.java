package com.mbb.pdcautomation.controller;

import java.io.IOException;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.mbb.pdcautomation.model.CheckListWrapper;
import com.mbb.pdcautomation.model.Product;
import com.mbb.pdcautomation.model.ProductData;
import com.mbb.pdcautomation.model.ResponseData;
import com.mbb.pdcautomation.service.impl.ProductDataServiceImpl;

/**
 * 
 * This Controller contains methods which can handle Product data add, edit
 * read, delete requests
 *
 */
@RestController
public class ProductDataController {

	private static final Logger LOG = Logger.getLogger(ProductDataController.class);
	@Autowired
	private ProductDataServiceImpl productDataServiceImpl;
	/**
	 * This method can handle downloadExcel by product
	 * 
	 *
	 * @return ModelAndView
	 */
	@RequestMapping(value = "/Product checklist report", method = RequestMethod.GET)
	public ModelAndView downloadExcel(HttpServletRequest request, HttpServletResponse response) throws IOException {
		HttpSession session = request.getSession();
		String userName = (String) session.getAttribute("uname");
		if (userName == null) {

			return new ModelAndView("redirect:/login");

		}
		CheckListWrapper allCheckLists = (CheckListWrapper) session.getAttribute("allCheckListData");
		List<ProductData> allCheckList = allCheckLists.getCheckLists();
		// return a view which will be resolved by an excel view resolver
		return new ModelAndView("excelView", "allCheckList", allCheckList);
	}
	/**
	 * This method can handle downloadExcel by date
	 * 
	 *
	 * @return ModelAndView
	 */
	@RequestMapping(value = "/Product checklist report by date", method = RequestMethod.GET)
	public ModelAndView downloadExcelByDate(HttpServletRequest request, HttpServletResponse response)
			throws IOException {
		HttpSession session = request.getSession();
		String userName = (String) session.getAttribute("uname");
		if (userName == null) {

			return new ModelAndView("redirect:/login");

		}
		CheckListWrapper allCheckLists = (CheckListWrapper) session.getAttribute("allCheckListData");
		List<ProductData> allCheckList = allCheckLists.getCheckLists();
		// return a view which will be resolved by an excel view resolver
		return new ModelAndView("excelView", "allCheckList", allCheckList);

	}
	/**
	 * This method can handle login 
	 * 
	 *
	 * @return ModelAndView
	 */
	@RequestMapping(value = { "/", "/login" }, method = RequestMethod.GET)
	public ModelAndView login(HttpServletRequest request, HttpServletResponse response,
			@RequestParam(value = "error", required = false) String error,
			@RequestParam(value = "logout", required = false) String logout) {
		ModelAndView model = new ModelAndView("login");
		if (error != null) {
			model.addObject("error", "Invalid username and password!");
		}

		if (logout != null) {
			model.addObject("msg", "You've been logged out successfully.");
		}

		return model;

	}
	/**
	 * This method can handle homePage
	 * 
	 *
	 * @return ModelAndView
	 */
	@GetMapping(path = { "/home" })
	public ModelAndView homePage(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		ModelAndView view = new ModelAndView("index");
		HttpSession session = request.getSession();
		String userName = (String) session.getAttribute("uname");
		String userRole = (String) session.getAttribute("role");

		if (userName == null) {

			return new ModelAndView("redirect:/login");

		} else {

			List<ProductData> allCheckList = productDataServiceImpl.getAllProductData(userRole);
			CheckListWrapper checkListWrapper = new CheckListWrapper();
			checkListWrapper.setCheckLists(allCheckList);
			session.setAttribute("allCheckListData", checkListWrapper);
			view.addObject("allCheckList", checkListWrapper);
		}

		return view;
	}
	/**
	 * This method can handle addCheckListView
	 *
	 * @return ModelAndView
	 */
	@GetMapping("/addCheckList")
	public ModelAndView addCheckListView(HttpServletRequest request) {
		HttpSession session = request.getSession();
		String userName = (String) session.getAttribute("uname");
		if (userName == null) {

			return new ModelAndView("redirect:/login");

		} else {
			return new ModelAndView("addchecklist");
		}
	}
	/**
	 * This method can handle editCheckListData
	 *
	 * @return ModelAndView
	 */
	@GetMapping("/editCheckList")
	public ModelAndView editCheckListData(HttpServletRequest request, @RequestParam("checklistId") int checklistId) {
		LOG.info("getting ProductData by Id in ProductDataController started");
		ModelAndView view = new ModelAndView("editchecklist");
		HttpSession session = request.getSession();
		String userName = (String) session.getAttribute("uname");
		if (userName == null) {

			return new ModelAndView("redirect:/login");

		} else {

			ProductData productData = productDataServiceImpl.getProductDataById(checklistId);
			view.addObject("productData", productData);
			LOG.info("getting ProductData by Id in ProductDataController ended");
		}
		return view;

	}
	/**
	 * This method can handle verifyCheckListData
	 *
	 * @return ModelAndView
	 */
	@GetMapping("/verifyCheckList")
	public ModelAndView verifyCheckListData(HttpServletRequest request, @RequestParam("checklistId") int checklistId) {
		LOG.info("getting ProductData by Id in ProductDataController started");
		ModelAndView view = new ModelAndView("verifychecklist");
		HttpSession session = request.getSession();
		String userName = (String) session.getAttribute("uname");

		if (userName == null) {

			return new ModelAndView("redirect:/login");

		} else {

			ProductData productData = productDataServiceImpl.getProductDataById(checklistId);
			view.addObject("productData", productData);
			LOG.info("getting ProductData by Id in ProductDataController ended");
		}
		return view;

	}
	/**
	 * This method can handle accountantCheckListData
	 *
	 * @return ModelAndView
	 */
	@GetMapping("/editstatusCheckList")
	public ModelAndView accountantCheckListData(HttpServletRequest request,
			@RequestParam("checklistId") int checklistId) {
		LOG.info("getting ProductData by Id in ProductDataController started");
		ModelAndView view = new ModelAndView("accountantedit");
		HttpSession session = request.getSession();
		String userName = (String) session.getAttribute("uname");

		if (userName == null) {

			return new ModelAndView("redirect:/login");

		} else {

			ProductData productData = productDataServiceImpl.getProductDataById(checklistId);
			view.addObject("productData", productData);
			LOG.info("getting ProductData by Id in ProductDataController ended");
		}
		return view;

	}

	/**
	 * This method can handle Product data add request
	 * 
	 * @param productData
	 * @return ResponseData object
	 */
	@PostMapping(path = "/addProductData", consumes = "application/json", produces = "application/json")
	public ResponseData addProductData(@RequestBody Product productData) {
		LOG.info("adding ProductData in ProductDataController started");
		ResponseData responseData = productDataServiceImpl.addProductData(productData);
		LOG.info("adding ProductData in ProductDataController ended");
		return responseData;

	}

	/**
	 * This method can handle Product data put request
	 * 
	 * @param product  object
	 *           
	 * @return ResponseData object
	 */
	@PutMapping("/updateProductData")
	public ResponseData updateProductData(@RequestBody Product productData) {
		LOG.info("updating ProductData in ProductDataController started");
		ResponseData responseData = productDataServiceImpl.updateProductData(productData);
		LOG.info("updating ProductData in ProductDataController ended");
		return responseData;

	}
	/**
	 * This method can handle Product data delete request
	 * 
	 * @param checklistId
	 * @return ResponseData object
	 */
	@DeleteMapping("/deleteProductData")
	public ResponseData deleteProductData(HttpServletRequest request, HttpServletResponse response,
			@RequestParam("checklistId") int checklistId) throws ServletException, IOException {
		HttpSession session = request.getSession();
		String userName = (String) session.getAttribute("uname");
		if (userName == null) {
			RequestDispatcher rs = request.getRequestDispatcher("/login");
			rs.forward(request, response);
		}

		LOG.info("deleting ProductData in ProductDataController started");
		ResponseData responseData = productDataServiceImpl.deleteProductData(checklistId);
		LOG.info("deleting ProductData in ProductDataController ended");
		return responseData;

	}
	/**
	 * This method can handle getting Product data based on ID request
	 * 
	 * @param checklistId
	 * @return ProductData object
	 */
	@GetMapping("/getCheckList")
	public ProductData getProductDataById(HttpServletRequest request, HttpServletResponse response,
			@RequestParam("checklistId") int checklistId) throws ServletException, IOException {
		HttpSession session = request.getSession();
		String userName = (String) session.getAttribute("uname");
		if (userName == null) {
			RequestDispatcher rs = request.getRequestDispatcher("/login");
			rs.forward(request, response);
		}
		LOG.info("getting ProductData by Id in ProductDataController started");
		ProductData productData = productDataServiceImpl.getProductDataById(checklistId);
		LOG.info("getting ProductData by Id in ProductDataController ended");
		return productData;

	}
	/**
	 * This method can handle getting Product data based on startDate,endDate and filter
	 * 
	 * @param startDate,endDate,filter
	 * @return ProductData object
	 */
	@GetMapping("/getfilter")
	public ModelAndView filter(HttpServletRequest request, HttpServletResponse response,
			@RequestParam("filter") String filterValue, @RequestParam("startDate") String StartDate,
			@RequestParam("endDate") String EndDate) throws ServletException, IOException {
		LOG.info("getting ProductData by filtering in ProductDataController started");
		ModelAndView view = new ModelAndView("home");
		List<ProductData> allCheckList = null;
		HttpSession session = request.getSession();
		String userName = (String) session.getAttribute("uname");

		if (userName == null) {

			return new ModelAndView("redirect:/login");

		} else {

			if (!"".equals(StartDate) && !"".equals(EndDate) && !"none".equals(filterValue)) {

				allCheckList = productDataServiceImpl.getProductDataByAllFilters(StartDate, EndDate, filterValue);

			} else if (!"".equals(StartDate) && !"".equals(EndDate)) {

				allCheckList = productDataServiceImpl.getProductDataByDates(StartDate, EndDate);

			} else if (!"none".equals(filterValue)) {

				allCheckList = productDataServiceImpl.getProductDataByFilter(filterValue);

			}

			CheckListWrapper checkListWrapper = new CheckListWrapper();
			checkListWrapper.setCheckLists(allCheckList);

			session.setAttribute("allCheckListData", checkListWrapper);

			view.addObject("allCheckList", checkListWrapper);

			view.addObject("allCheckListData", checkListWrapper);

		}

		LOG.info("getting ProductData by filtering in ProductDataController ended");

		return view;
	}

}

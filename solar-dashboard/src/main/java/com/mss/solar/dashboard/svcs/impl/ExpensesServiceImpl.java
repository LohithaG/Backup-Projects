package com.mss.solar.dashboard.svcs.impl;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import javax.validation.Valid;

import org.apache.log4j.Logger;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.mss.solar.dashboard.common.EnumTypeForErrorCodes;
import com.mss.solar.dashboard.common.Utils;
import com.mss.solar.dashboard.domain.Driver;
import com.mss.solar.dashboard.domain.ExpenseType;
import com.mss.solar.dashboard.domain.Expenses;
import com.mss.solar.dashboard.domain.ExpensesDetails;
import com.mss.solar.dashboard.domain.LoadDetails;
import com.mss.solar.dashboard.model.ServiceResponse;
import com.mss.solar.dashboard.repos.DriverRepository;
import com.mss.solar.dashboard.repos.ExpensesDetailsRepository;
import com.mss.solar.dashboard.repos.ExpensesRepository;
import com.mss.solar.dashboard.repos.ExpensesTypeRepository;
import com.mss.solar.dashboard.repos.LoadDetailsRepository;
import com.mss.solar.dashboard.svcs.ExpensesService;

@RestController
public class ExpensesServiceImpl implements ExpensesService {

	private static final Logger log = Logger.getLogger(ExpensesServiceImpl.class);

	@Autowired
	private Utils utils;

	@Autowired
	private LoadDetailsRepository loadRepo;

	@Autowired
	private DriverRepository driverRepo;

	@Autowired
	private ExpensesTypeRepository expenseTypeRepo;

	@Autowired
	private ExpensesRepository expenseRepo;

	@Autowired
	private ExpensesDetailsRepository expensesDetailRepo;

	/**
	 * getAllExpenses Service Implementation
	 * 
	 * @return ServiceResponse<Collection<Expenses>>
	 */
	@Override
	public ServiceResponse<Collection<Expenses>> getAllExpenses() {
		log.debug("get all expense detail");
		ServiceResponse<Collection<Expenses>> response = new ServiceResponse<>();
		try {
			Collection<Expenses> expensesList = expenseRepo.findAll();
			response.setData(expensesList);

		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS1006.name(), EnumTypeForErrorCodes.SCUS1006.errorMsg());
			log.error(utils.toJson(response.getError()), exception);

		}
		return response;
	}

	/**
	 * addExpenses Service Implementation
	 * 
	 * @@RequestParam files String expenseDetails
	 * @return ServiceResponse<Collection<Expenses>>
	 */
	@Override
	public ServiceResponse<ExpensesDetails> addExpenses(
			@Valid @RequestBody String expenseDetails) {

		log.debug("adding new expense details");
		ServiceResponse<ExpensesDetails> response = new ServiceResponse<>();
		try {
			ExpensesDetails newExpensesDetails = new ExpensesDetails();

			Expenses newExpenses = new Expenses();

			org.json.JSONObject expensesObj = new org.json.JSONObject(expenseDetails);

			JSONObject loadObject = expensesObj.getJSONObject("loadNumber");

			String apptNbr = loadObject.getString("apptNbr");

			LoadDetails loadObj = loadRepo.findByLoadNumber(apptNbr);

			Expenses expenses = expenseRepo.findByLoadNumber(loadObj);
			Double amount = expensesObj.getDouble("amount");
			Expenses saveExpense = null;
			if (expenses == null) {
				JSONObject driverObject = expensesObj.getJSONObject("driverId");

				Long id = driverObject.getLong("id");

				Driver driverObj = driverRepo.findById(id);
				newExpenses.setDriverId(driverObj);
				newExpenses.setLoadNumber(loadObj);
				newExpenses.setNoOfExpenses(1l);

				newExpenses.setTotalAmount(amount);
				saveExpense = expenseRepo.save(newExpenses);
			} else {
				Long noOfExpenses = (expenses.getNoOfExpenses()) + 1l;

				Double totalAmount = (expenses.getTotalAmount()) + amount;
				expenses.setNoOfExpenses(noOfExpenses);
				expenses.setTotalAmount(totalAmount);
				saveExpense = expenseRepo.save(expenses);
			}
			JSONObject expenseObject = expensesObj.getJSONObject("expenseTypeId");

			Long expenseTypeid = expenseObject.getLong("id");
			
			ExpenseType expenseTypeObj = expenseTypeRepo.findById(expenseTypeid);
			newExpensesDetails.setExpenseTypeId(expenseTypeObj);
			newExpensesDetails.setBillImage(expensesObj.getString("billImage"));
			newExpensesDetails.setAmount(amount);
			String billDate = expensesObj.getString("billDate");
			newExpensesDetails.setBillDate(billDate);
			newExpensesDetails.setExpensesId(saveExpense);
			expensesDetailRepo.save(newExpensesDetails);
			response.setData(newExpensesDetails);

		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS1001.name(), EnumTypeForErrorCodes.SCUS1001.errorMsg());
			log.error(utils.toJson(response.getError()), exception);

		}
		return response;
	}

	/**
	 * deleteExpense Service Implementation
	 * 
	 * @param id
	 * @return ServiceResponse<String>
	 */
	@Override
	public ServiceResponse<String> deleteExpense(@PathVariable Long id) {
		log.info("delete expenses by id");
		ServiceResponse<String> response = new ServiceResponse<>();
		try {

			Expenses expenses = expenseRepo.findById(id);
			expenseRepo.delete(expenses);
			response.setData("expenses deleted successfully");

		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS1003.name(), EnumTypeForErrorCodes.SCUS1003.errorMsg());
			log.error(utils.toJson(response.getError()), exception);

		}
		return response;
	}

	@Override
	public ServiceResponse<Expenses> updateExpense(Driver driver) {
		// TODO Auto-generated method stub
		return null;
	}

	/**
	 * getExpenseByDriverId Service Implementation
	 * 
	 * @param driverId
	 * @return ServiceResponse<Collection<Expenses>>
	 */
	@Override
	public ServiceResponse<Collection<Expenses>> getExpenseByDriverId(@PathVariable Long driverId) {
		log.debug("get expense details based on driver");
		ServiceResponse<Collection<Expenses>> response = new ServiceResponse<>();
		try {
			Driver driver = driverRepo.findById(driverId);
			if (driver != null) {
				Collection<Expenses> expenses = expenseRepo.findByDriverId(driver);
				response.setData(expenses);
			} else {

			}

		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS1005.name(), EnumTypeForErrorCodes.SCUS1005.errorMsg());
			log.error(utils.toJson(response.getError()), exception);

		}
		return response;
	}

	/**
	 * getExpenseById Service Implementation
	 * 
	 * @param id
	 * @return ServiceResponse<Expenses>
	 */
	@Override
	public ServiceResponse<Expenses> getExpenseById(@PathVariable Long id) {
		log.debug("get expense details based on id");
		ServiceResponse<Expenses> response = new ServiceResponse<>();
		try {

			Expenses expenses = expenseRepo.findById(id);
			response.setData(expenses);

		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS1004.name(), EnumTypeForErrorCodes.SCUS1004.errorMsg());
			log.error(utils.toJson(response.getError()), exception);

		}
		return response;
	}

	/**
	 * geAllExpenseTypes Service Implementation
	 * 
	 * @return ServiceResponse<Collection<ExpenseType>>
	 */
	@Override
	public ServiceResponse<Collection<ExpenseType>> geAllExpenseTypes() {
		// TODO Auto-generated method stub
		log.debug("get all exense types");
		ServiceResponse<Collection<ExpenseType>> response = new ServiceResponse<>();
		try {

			Collection<ExpenseType> expenseTypes = expenseTypeRepo.findAll();
			response.setData(expenseTypes);

		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS1007.name(), EnumTypeForErrorCodes.SCUS1007.errorMsg());
			log.error(utils.toJson(response.getError()), exception);

		}
		return response;
	}

	/**
	 * geAllExpenseDetailsBasedonLoad Service Implementation
	 * 
	 * @param loadNumber
	 * @return ServiceResponse<Collection<org.json.simple.JSONObject>>
	 */
	@Override
	public ServiceResponse<Collection<org.json.simple.JSONObject>> geAllExpenseDetailsBasedonLoad(
			@PathVariable String loadNumber) {
		// TODO Auto-generated method stub
		log.debug("get expense details based on load");
		ServiceResponse<Collection<org.json.simple.JSONObject>> response = new ServiceResponse<>();
		try {
			LoadDetails load = loadRepo.findByLoadNumber(loadNumber);

			Expenses expenses = expenseRepo.findByLoadNumber(load);
			Collection<ExpensesDetails> expenseDetailsList = expensesDetailRepo.findByExpensesId(expenses);
			List<org.json.simple.JSONObject> objList = new ArrayList<>();
			for (ExpensesDetails expensesDetails : expenseDetailsList) {

				org.json.simple.JSONObject obj = new org.json.simple.JSONObject();
				obj.put("id", expensesDetails.getId());
				obj.put("amount", expensesDetails.getAmount());
				obj.put("billDate", expensesDetails.getBillDate());
				obj.put("expenseType", expensesDetails.getExpenseTypeId());
				objList.add(obj);
			}
			response.setData(objList);

		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS1007.name(), EnumTypeForErrorCodes.SCUS1007.errorMsg());
			log.error(utils.toJson(response.getError()), exception);

		}
		return response;
	}

	/**
	 * geAllExpenseDetailsById Service Implementation
	 * 
	 * @param id
	 * @return ServiceResponse<Collection<ExpensesDetails>>
	 */
	@Override
	public ServiceResponse<ExpensesDetails> geAllExpenseDetailsById(@PathVariable Long id) {
		log.debug("get all expense details based on id");
		ServiceResponse<ExpensesDetails> response = new ServiceResponse<>();
		try {

			ExpensesDetails expensesDetails = expensesDetailRepo.findById(id);
			response.setData(expensesDetails);

		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS1004.name(), EnumTypeForErrorCodes.SCUS1004.errorMsg());
			log.error(utils.toJson(response.getError()), exception);

		}
		return response;
	}

}

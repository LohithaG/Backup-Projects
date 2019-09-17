package com.mss.solar.dashboard.svcs;

import java.util.Collection;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;

import org.json.simple.JSONObject;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mss.solar.dashboard.common.RestApiUrlConstants;
import com.mss.solar.dashboard.domain.Driver;
import com.mss.solar.dashboard.domain.ExpenseType;
import com.mss.solar.dashboard.domain.Expenses;
import com.mss.solar.dashboard.domain.ExpensesDetails;
import com.mss.solar.dashboard.model.ServiceResponse;

@RequestMapping(value = "/api/expenses")
public interface ExpensesService {

	final String MODULE_NAME = "ExpensesService";

	@GetMapping(RestApiUrlConstants.GET_ALL_EXPENSES)
	@ResponseBody
	ServiceResponse<Collection<Expenses>> getAllExpenses();

	@PostMapping(RestApiUrlConstants.ADD_EXPENSES)
	@ResponseBody
	ServiceResponse<ExpensesDetails> addExpenses(
			@Valid @RequestBody String expenseDetails);

	@DeleteMapping(RestApiUrlConstants.DELETE_EXPENSE)
	@ResponseBody
	ServiceResponse<String> deleteExpense(@NotNull @PathVariable Long id);

	@PutMapping(RestApiUrlConstants.UPDATE_EXPENSES)
	@ResponseBody
	ServiceResponse<Expenses> updateExpense(@Valid @RequestBody Driver driver);

	@GetMapping(RestApiUrlConstants.GET_EXPENSE_BY_DRIVER_ID)
	@ResponseBody
	ServiceResponse<Collection<Expenses>> getExpenseByDriverId(@NotNull @PathVariable Long driverId);

	@GetMapping(RestApiUrlConstants.GET_EXPENSE_BY_ID)
	@ResponseBody
	ServiceResponse<Expenses> getExpenseById(@NotNull @PathVariable Long id);

	@GetMapping(RestApiUrlConstants.GET_ALL_EXPENSE_TYPES)
	@ResponseBody
	ServiceResponse<Collection<ExpenseType>> geAllExpenseTypes();
	
	@GetMapping(RestApiUrlConstants.GET_EXPENSE_DETAILS_BY_LOAD)
	@ResponseBody
	ServiceResponse<Collection<JSONObject>> geAllExpenseDetailsBasedonLoad(@PathVariable String loadNumber);
	
	@GetMapping(RestApiUrlConstants.GET_EXPENSE_DETAILS_BY_ID)
	@ResponseBody
	ServiceResponse<ExpensesDetails> geAllExpenseDetailsById(@PathVariable Long id);
}

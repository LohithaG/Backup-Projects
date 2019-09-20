package com.mbb.mbbplatform.svcs;

import java.util.Collection;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.hibernate.validator.constraints.Email;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mbb.mbbplatform.common.RestApiUrlConstants;
import com.mbb.mbbplatform.domain.Role;
import com.mbb.mbbplatform.domain.User;
import com.mbb.mbbplatform.model.ServiceResponse;

@RequestMapping(value = "/api/users")
@SuppressWarnings("deprecation")
public interface UserService {

	@PostMapping(RestApiUrlConstants.FORGOT_PW)
	@ResponseBody
	ServiceResponse<User> forgotPassword(@Email @PathVariable String email);

	@GetMapping(RestApiUrlConstants.GET_USER_BY_EMAIL)
	@ResponseBody
	ServiceResponse<User> getUserByEmail(@Email @PathVariable String email);

	@PostMapping(RestApiUrlConstants.SET_PW)
	@ResponseBody
	ServiceResponse<User> setPassword(@PathVariable Long userId, @PathVariable Integer otp,
			@PathVariable String password);

	@GetMapping(RestApiUrlConstants.GET_USERS_BY_ROLE)
	@ResponseBody
	ServiceResponse<Collection<User>> getUsersByRole(@Size(min = 4, max = 15) @PathVariable String role);

	@PutMapping(RestApiUrlConstants.UPDATE_USER)
	@ResponseBody
	ServiceResponse<User> updateUser(@Valid @RequestBody User user);

	@PostMapping(RestApiUrlConstants.ADD_USER)
	@ResponseBody
	ServiceResponse<User> addUser(@Valid @RequestBody User user);

	@GetMapping(RestApiUrlConstants.DELETE_USER)
	@ResponseBody
	ServiceResponse<String> deleteUser(@NotNull @PathVariable Long userId);

	@GetMapping(RestApiUrlConstants.GET_ALL_USERS)
	@ResponseBody
	ServiceResponse<Collection<User>> getAllUsers();

	@GetMapping(RestApiUrlConstants.GET_ALL_ROLES)
	@ResponseBody
	ServiceResponse<Collection<Role>> getAllRoles();

	@GetMapping(RestApiUrlConstants.GET_ALL_USERS_BY_FACILITY_ID)
	@ResponseBody
	ServiceResponse<Collection<User>> getAllUsersByFacilityId(@PathVariable Long facilityId);
}

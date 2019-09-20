package com.mss.pmj.pmjmis.svcs;

import java.util.Collection;

import javax.validation.Valid;
import javax.validation.constraints.Size;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mss.pmj.pmjmis.common.RestApiUrlConstants;
import com.mss.pmj.pmjmis.domain.Role;
import com.mss.pmj.pmjmis.domain.User;
import com.mss.pmj.pmjmis.model.ServiceResponse;

@RequestMapping(value = "/api/users")
public interface UserService {

	final String MODULE_NAME = "UserService";

	@GetMapping(RestApiUrlConstants.GET_ALL_USERS)
	@ResponseBody
	ServiceResponse<Collection<User>> getAllUsers();

	@GetMapping(RestApiUrlConstants.GET_ALL_ROLES)
	@ResponseBody
	ServiceResponse<Collection<Role>> getAllRoles();

	@GetMapping(RestApiUrlConstants.GET_USERS_BY_ROLE)
	@ResponseBody
	ServiceResponse<Collection<User>> getUsersByRole(@Size(min = 4, max = 15) @PathVariable String role);

	@GetMapping(RestApiUrlConstants.GET_USER_BY_USERNAME)
	@ResponseBody
	ServiceResponse<User> getUserByUserName(@PathVariable String userName);

	@PostMapping(RestApiUrlConstants.ADD_USER)
	@ResponseBody
	ServiceResponse<User> addUser(@Valid @RequestBody String userData);

	@PutMapping(RestApiUrlConstants.UPDATE_USER)
	@ResponseBody
	ServiceResponse<User> updateUser(@Valid @RequestBody String userData);

	@DeleteMapping(RestApiUrlConstants.DELETE_USER)
	@ResponseBody
	ServiceResponse<String> deleteUser(@Valid @PathVariable long userId);
	
	@GetMapping(RestApiUrlConstants.GET_USER_BY_ID)
	@ResponseBody
	ServiceResponse<User> getUserById(@Valid @PathVariable long userId);
	
	

}

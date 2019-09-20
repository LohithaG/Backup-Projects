package com.mss.pmj.pmjmis.svcs.impl;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Optional;

import javax.validation.Valid;
import javax.validation.constraints.Size;

import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.mss.pmj.pmjmis.common.EnumTypeForErrorCodes;
import com.mss.pmj.pmjmis.common.Utils;
import com.mss.pmj.pmjmis.domain.Employee;
import com.mss.pmj.pmjmis.domain.Manager;
import com.mss.pmj.pmjmis.domain.Role;
import com.mss.pmj.pmjmis.domain.User;
import com.mss.pmj.pmjmis.model.ServiceResponse;
import com.mss.pmj.pmjmis.repos.EmployeeRepository;
import com.mss.pmj.pmjmis.repos.ManagerRepository;
import com.mss.pmj.pmjmis.repos.RoleRepository;
import com.mss.pmj.pmjmis.repos.UserRepository;
import com.mss.pmj.pmjmis.svcs.UserService;

@RestController
@Validated
public class UserServiceImpl implements UserService {

	private static Logger log = LoggerFactory.getLogger(UserServiceImpl.class);

	@Autowired
	private UserRepository userRepo;

	@Autowired
	private Utils utils;

	@Autowired
	private RoleRepository roleRepo;

	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;

	@Autowired
	private EmployeeRepository employeeRepo;

	@Autowired
	private ManagerRepository managerRepo;

	/**
	 * getAllRoles service implementation
	 * 
	 * @return ServiceResponse<Collection<Role>>
	 */
	@Override
	public ServiceResponse<Collection<Role>> getAllRoles() {
		log.info("getting all roles");
		ServiceResponse<Collection<Role>> response = new ServiceResponse<>();
		try {
			Collection<Role> roles = roleRepo.findAll();
			response.setData(roles);
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS305.name(), EnumTypeForErrorCodes.SCUS305.errorMsg());
			log.error(utils.toJson(response.getError()), e);

		}
		return response;
	}

	/**
	 * getUsersByRole service implementation
	 * 
	 * @param role
	 * @return ServiceResponse<Collection<User>>
	 */
	@Override
	public ServiceResponse<Collection<User>> getUsersByRole(@Size(min = 4, max = 15) @PathVariable String role) {
		log.info("getting users by role");
		ServiceResponse<Collection<User>> response = new ServiceResponse<>();
		try {
			Role roleName = roleRepo.findByName(role);
			response.setData(roleName.getUsers());
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS304.name(), EnumTypeForErrorCodes.SCUS304.errorMsg());
			log.error(utils.toJson(response.getError()), e);

		}
		return response;
	}

	/**
	 * getUserByEmail service implementation
	 * 
	 * @param userName
	 * @return ServiceResponse<User>
	 */
	@Override
	public ServiceResponse<User> getUserByUserName(@PathVariable String userName) {
		log.info("getting users by userName");
		ServiceResponse<User> response = new ServiceResponse<>();
		try {
			User user = userRepo.findByUserName(userName);
			if (user == null) {
				response.setError(EnumTypeForErrorCodes.SCUS303.name(), EnumTypeForErrorCodes.SCUS303.errorMsg());
			} else {

				response.setData(user);
			}
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS302.name(),
					EnumTypeForErrorCodes.SCUS302.errorMsg() + userName);

			log.error(utils.toJson(response.getError()), e);

		}
		return response;
	}

	/**
	 * getAllUsers service implementation
	 * 
	 * @return ServiceResponse<Collection<User>>
	 */
	@Override
	public ServiceResponse<Collection<User>> getAllUsers() {
		log.info("getting all users");
		ServiceResponse<Collection<User>> response = new ServiceResponse<>();
		try {
			Boolean setActive = true;
			Collection<User> users = userRepo.findByActive(setActive);
			response.setData(users);
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS301.name(), EnumTypeForErrorCodes.SCUS301.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}
		return response;
	}

	@Override
	public ServiceResponse<User> addUser(String userdata) {
		log.info("Adding user");
		ServiceResponse<User> response = new ServiceResponse<>();
		try {

			JSONObject userObject = new JSONObject(userdata);

			User userNameExists = userRepo.findByUserName((String) userObject.get("userName"));

			User user = new User();

			if (userNameExists != null) {
				response.setError(EnumTypeForErrorCodes.SCUS307.name(), EnumTypeForErrorCodes.SCUS307.errorMsg());
			} else {

				String roleName = (String) userObject.get("role");

				Role role = roleRepo.findByName(roleName);

				List<Role> roleList = new ArrayList<>();

				roleList.add(role);

				user.setActive(true);
				user.setPassword(bCryptPasswordEncoder.encode((String) userObject.get("password")));
				user.setUserName((String) userObject.get("userName"));
				user.setRoles(roleList);

				if (roleName.equals("ADMIN")) {

					userRepo.save(user);
					response.setData(user);

				} else {
					Employee emp = employeeRepo.findByEmpCode((String) userObject.get("empCode"));
					if (emp == null) {

						response.setError(EnumTypeForErrorCodes.SCUS314.name(),
								EnumTypeForErrorCodes.SCUS314.errorMsg());

					} else {
						Manager manager = managerRepo.findByEmpId(emp);
						if (manager == null) {

							response.setError(EnumTypeForErrorCodes.SCUS309.name(),
									EnumTypeForErrorCodes.SCUS309.errorMsg());

						} else {

							User userCodeExists = userRepo.findByEmpCode(emp);
							if (userCodeExists == null) {

								user.setEmpCode(emp);
								userRepo.save(user);
								response.setData(user);
							} else {
								response.setError(EnumTypeForErrorCodes.SCUS315.name(),
										EnumTypeForErrorCodes.SCUS315.errorMsg());

							}
						}

					}

				}

			}

		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS306.name(), EnumTypeForErrorCodes.SCUS306.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}

		return response;
	}

	@Override
	public ServiceResponse<User> updateUser(@Valid String userData) {
		log.info("updating user details");
		ServiceResponse<User> response = new ServiceResponse<>();
		try {

			JSONObject userObject = new JSONObject(userData);

			Optional<User> userExists = userRepo.findById((long) userObject.getLong("id"));

			if (!userExists.isPresent()) {
				response.setError(EnumTypeForErrorCodes.SCUS310.name(), EnumTypeForErrorCodes.SCUS310.errorMsg());
			} else {

				String roleName = (String) userObject.get("role");

				Role role = roleRepo.findByName(roleName);

				List<Role> roleList = new ArrayList<>();

				roleList.add(role);

				userExists.get().setPassword(bCryptPasswordEncoder.encode((String) userObject.get("password")));
				userExists.get().setUserName((String) userObject.get("userName"));
				userExists.get().setRoles(roleList);

				if (roleName.equals("ADMIN")) {

					userRepo.save(userExists.get());
					response.setData(userExists.get());

				} else {
					Employee emp = employeeRepo.findByEmpCode((String) userObject.get("empCode"));
					if (emp == null) {

						response.setError(EnumTypeForErrorCodes.SCUS309.name(),
								EnumTypeForErrorCodes.SCUS309.errorMsg());

					} else {

						userExists.get().setEmpCode(emp);
						userRepo.save(userExists.get());
						response.setData(userExists.get());

					}

				}

			}

		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS311.name(), EnumTypeForErrorCodes.SCUS311.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}

		return response;
	}

	@Override
	public ServiceResponse<String> deleteUser(@Valid long userId) {
		log.info("deleting user by userId");
		ServiceResponse<String> response = new ServiceResponse<>();
		try {
			Optional<User> user = userRepo.findById(userId);
			if(user.isPresent()) {
			userRepo.delete(user.get());
			response.setData("user deleted succesfully");
			}

		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS312.name(), EnumTypeForErrorCodes.SCUS312.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}

		return response;
	}

	@Override
	public ServiceResponse<User> getUserById(@Valid long userId) {
		log.info("Get user by userId");
		ServiceResponse<User> response = new ServiceResponse<>();
		try {
			Optional<User> user = userRepo.findById(userId);
			if(user.isPresent()) {
			response.setData(user.get());
			}

		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS313.name(), EnumTypeForErrorCodes.SCUS313.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}

		return response;
	}

}

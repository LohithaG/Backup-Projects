package com.mbb.mbbplatform.svcs.impl;

import java.time.ZonedDateTime;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Optional;
import java.util.Random;
import java.util.Set;

import javax.transaction.Transactional;
import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.apache.commons.lang.StringUtils;
import org.hibernate.validator.constraints.Email;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.mbb.mbbplatform.common.EnumTypeForErrorCodes;
import com.mbb.mbbplatform.domain.Facility;
import com.mbb.mbbplatform.domain.Otp;
import com.mbb.mbbplatform.domain.Role;
import com.mbb.mbbplatform.domain.User;
import com.mbb.mbbplatform.model.ServiceResponse;
import com.mbb.mbbplatform.model.Utils;
import com.mbb.mbbplatform.repos.FacilityRepository;
import com.mbb.mbbplatform.repos.OtpRepository;
import com.mbb.mbbplatform.repos.RoleRepository;
import com.mbb.mbbplatform.repos.UserRepository;
import com.mbb.mbbplatform.svcs.EmailService;
import com.mbb.mbbplatform.svcs.UserService;

@RestController
@Validated
@SuppressWarnings("deprecation")
public class UserServiceImpl implements UserService {

	private static Logger log = LoggerFactory.getLogger(UserServiceImpl.class);

	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;

	@Autowired
	private OtpRepository otpRepo;

	@Autowired
	private RoleRepository roleRepo;

	@Autowired
	private UserRepository userRepo;

	@Autowired
	private FacilityRepository facilityRepo;

	@Autowired
	private EmailService emailsvc;

	@Autowired
	private Utils utils;

	@Value("${usersvc.otpexpiry:5}")
	private Integer otpExpiry;

	@Value("${usersvc.otpMsg:otp:%s}")
	private String otpMsg;
	
	
	@Value("${mbbplatform.url}")
	private String url;

	private Random otpGenerator;

	public UserServiceImpl() {
		otpGenerator = new Random();
	}

	/**
	 * Generate otp method implementation
	 * 
	 * @param user
	 * @return Integer
	 */
	private Integer generateOtp(User user) {
		log.info("Generating OTP for the registration");
		Otp newOtp = new Otp();
		try {
			Otp oldOtp = otpRepo.findOneByUser(user);
			if (oldOtp == null) {
				newOtp.setUser(user);
				newOtp.setExpiryTime(ZonedDateTime.now().plusMinutes(otpExpiry));
				newOtp.setCode(100000 + otpGenerator.nextInt(900000));
				newOtp = otpRepo.save(newOtp);

			} else {
				oldOtp.setExpiryTime(ZonedDateTime.now().plusMinutes(otpExpiry));
				oldOtp.setCode(100000 + otpGenerator.nextInt(900000));

				newOtp = otpRepo.save(oldOtp);
			}

			String emailTemplate = "OTP to reset your password is";
			emailsvc.notifyUserByEmail(user.getEmail(), newOtp.getCode().toString(), emailTemplate);

		} catch (Exception e) {

			log.error("Error in generating OTP", e);
			throw e;
		}
		return newOtp.getCode();
	}

	public ServiceResponse<Collection<User>> getUsersByRoleId(Long id) {
		log.info("getting users by role");
		ServiceResponse<Collection<User>> response = new ServiceResponse<>();
		try {
			Optional<Role> roleName = roleRepo.findById(id);

			if (roleName.isPresent()) {
				response.setData(roleName.get().getUsers());

			} else {
				response.setError(EnumTypeForErrorCodes.SCUS519.name(), EnumTypeForErrorCodes.SCUS519.errorMsg());

			}
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS506.name(), EnumTypeForErrorCodes.SCUS506.errorMsg());
			log.error(utils.toJson(response.getError()), e);

		}
		return response;
	}

	/**
	 * forgotPassword service implementation
	 * 
	 * @param email
	 * @return ServiceResponse<User>
	 */
	@Override
	public ServiceResponse<User> forgotPassword(@Email @PathVariable String email) {
		log.info("forgot password");
		ServiceResponse<User> response = new ServiceResponse<>();
		try {
			User userExists = userRepo.findByEmail(email);

			if (userExists != null) {

				generateOtp(userExists);
				response.setData(userExists);
			} else {
				response.setError(EnumTypeForErrorCodes.SCUS501.name(), EnumTypeForErrorCodes.SCUS501.errorMsg());
			}

		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS502.name(), EnumTypeForErrorCodes.SCUS502.errorMsg());
			log.error(utils.toJson(response.getError()), e);

		}
		return response;
	}

	/**
	 * getUserByEmail service implementation
	 * 
	 * @param email
	 * @return ServiceResponse<User>
	 */
	@Override
	public ServiceResponse<User> getUserByEmail(@Email @PathVariable String email) {
		log.info("getting users by email");
		ServiceResponse<User> response = new ServiceResponse<>();
		try {
			User user = userRepo.findByEmail(email);
			if (user == null) {
				response.setError(EnumTypeForErrorCodes.SCUS008.name(), EnumTypeForErrorCodes.SCUS008.errorMsg());
			} else {

				response.setData(user);
			}
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS008.name(), EnumTypeForErrorCodes.SCUS008.errorMsg() + email);

			log.error(utils.toJson(response.getError()), e);

		}
		return response;
	}

	/**
	 * setPassword service implementation
	 * 
	 * @param userId
	 * @param otp
	 * @param password
	 * @return ServiceResponse<User>
	 */
	@Override
	public ServiceResponse<User> setPassword(@PathVariable Long userId, @PathVariable Integer otp,
			@PathVariable String password) {
		log.info("set password for registration or adding user");
		ServiceResponse<User> response = new ServiceResponse<>();
		try {
			
			User user = userRepo.findById(userId).get();

			Otp otpObj = otpRepo.findOneByUserAndCode(user, otp);
			if (otpObj != null) {
				if (ZonedDateTime.now().isBefore(otpObj.getExpiryTime())) {
					user.setPassword(bCryptPasswordEncoder.encode(password));
					if (!user.isActive()) {
						user.setActive(true);
						userRepo.save(user);

						Map<String, String> newUserData = new HashMap<>();

						newUserData.put("userName", user.getName());
						newUserData.put("email", user.getEmail());

					} else {
						userRepo.save(user);
					}
					response.setData(user);
				} else {
					response.setError(EnumTypeForErrorCodes.SCUS503.name(), EnumTypeForErrorCodes.SCUS503.errorMsg());
				}
			} else {
				response.setError(EnumTypeForErrorCodes.SCUS504.name(), EnumTypeForErrorCodes.SCUS504.errorMsg());
			}
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS505.name(), EnumTypeForErrorCodes.SCUS505.errorMsg());
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
			response.setError(EnumTypeForErrorCodes.SCUS506.name(), EnumTypeForErrorCodes.SCUS506.errorMsg());
			log.error(utils.toJson(response.getError()), e);

		}
		return response;
	}

	/**
	 * updateUser service implementation
	 * 
	 * @param user
	 * @return ServiceResponse<User>
	 */
	@Transactional
	@Override
	public ServiceResponse<User> updateUser(@Valid @RequestBody User user) {
		log.info("Update user");
		ServiceResponse<User> response = new ServiceResponse<>();
		try {
			User userExists = userRepo.findByEmail(user.getEmail());

			if (userExists == null) {
				response.setError(EnumTypeForErrorCodes.SCUS507.name(), EnumTypeForErrorCodes.SCUS507.errorMsg());
			} else {

				if (user.getRoles() == null && user.getRoles().isEmpty()) {
					response.setError(EnumTypeForErrorCodes.SCUS508.name(), EnumTypeForErrorCodes.SCUS508.errorMsg());
				} else {
					Set<Role> role = user.getRoles();
					for (Role rl : role) {
						Role userRole = roleRepo.findByName(rl.getName());
						userExists.setRoles(new HashSet<Role>(Arrays.asList(userRole)));
					}

					userExists.setActive(user.isActive());
					userExists.setName(user.getName());

					Long facilityId = user.getFacilityId().getId();
					Optional<Facility> facility = facilityRepo.findById(facilityId);
					if (facility.isPresent()) {
						userExists.setFacilityId(facility.get());
						userExists.setNotificationStatus(user.isNotificationStatus());
						userRepo.save(userExists);
						response.setData(userExists);
					} else {

						response.setError(EnumTypeForErrorCodes.SCUS517.name(),
								EnumTypeForErrorCodes.SCUS517.errorMsg());

					}

				}

			}
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS510.name(), EnumTypeForErrorCodes.SCUS510.errorMsg());
			log.error(utils.toJson(response.getError()), e);

		}
		return response;
	}

	/**
	 * addUser service implementation
	 * 
	 * @param user
	 * @return ServiceResponse<User>
	 */
	@Transactional
	@Override
	public ServiceResponse<User> addUser(@Valid @RequestBody User user) {
		log.info("adding user");
		ServiceResponse<User> response = new ServiceResponse<>();
		try {

			Set<Role> role = user.getRoles();

			for (Role role2 : role) {

				if (role2.getName().equals(roleRepo.findById(11l).get().getName())) {

					Role superAdminRoleUser = roleRepo.findById(11l).get();
					if (superAdminRoleUser.getUsers().isEmpty()) {
						User emailExists = userRepo.findByEmail(user.getEmail());
						User phoneExists = userRepo.findByPhone(user.getPhone());

						if (emailExists != null) {
							response.setError(EnumTypeForErrorCodes.SCUS511.name(),
									EnumTypeForErrorCodes.SCUS511.errorMsg());
						} else if (phoneExists != null) {
							response.setError(EnumTypeForErrorCodes.SCUS512.name(),
									EnumTypeForErrorCodes.SCUS512.errorMsg());
						} else {
							user.setActive(true);
							if (user.getRoles() == null && user.getRoles().isEmpty()) {
								response.setError(EnumTypeForErrorCodes.SCUS508.name(),
										EnumTypeForErrorCodes.SCUS508.errorMsg());
							} else {
								for (Role rl : role) {
									Role userRole = roleRepo.findByName(rl.getName());
									user.setRoles(new HashSet<Role>(Arrays.asList(userRole)));
								}
								String phone = user.getPhone();

								String encryptedPhone = StringUtils.overlay(phone,
										StringUtils.repeat("X", phone.length() - 4), 0, phone.length() - 4);
								user.setPhone(encryptedPhone);

								Long facilityId = user.getFacilityId().getId();
								Optional<Facility> facility = facilityRepo.findById(facilityId);
								if (facility.isPresent()) {
									user.setFacilityId(facility.get());
									userRepo.save(user);
									defaultPasswordGenetator(user);
									response.setData(user);
								} else {

									response.setError(EnumTypeForErrorCodes.SCUS517.name(),
											EnumTypeForErrorCodes.SCUS517.errorMsg());

								}

							}
						}
					} else {
						response.setError(EnumTypeForErrorCodes.SCUS521.name(),
								EnumTypeForErrorCodes.SCUS521.errorMsg());
					}

				} else {

					User emailExists = userRepo.findByEmail(user.getEmail());
					User phoneExists = userRepo.findByPhone(user.getPhone());

					if (emailExists != null) {
						response.setError(EnumTypeForErrorCodes.SCUS511.name(),
								EnumTypeForErrorCodes.SCUS511.errorMsg());
					} else if (phoneExists != null) {
						response.setError(EnumTypeForErrorCodes.SCUS512.name(),
								EnumTypeForErrorCodes.SCUS512.errorMsg());
					} else {
						user.setActive(true);
						if (user.getRoles() == null && user.getRoles().isEmpty()) {
							response.setError(EnumTypeForErrorCodes.SCUS508.name(),
									EnumTypeForErrorCodes.SCUS508.errorMsg());
						} else {
							for (Role rl : role) {
								Role userRole = roleRepo.findByName(rl.getName());
								user.setRoles(new HashSet<Role>(Arrays.asList(userRole)));
							}
							String phone = user.getPhone();

							String encryptedPhone = StringUtils.overlay(phone,
									StringUtils.repeat("X", phone.length() - 4), 0, phone.length() - 4);
							user.setPhone(encryptedPhone);

							Long facilityId = user.getFacilityId().getId();
							Optional<Facility> facility = facilityRepo.findById(facilityId);
							if (facility.isPresent()) {
								user.setFacilityId(facility.get());
								userRepo.save(user);
								defaultPasswordGenetator(user);
								response.setData(user);
							} else {

								response.setError(EnumTypeForErrorCodes.SCUS517.name(),
										EnumTypeForErrorCodes.SCUS517.errorMsg());

							}

						}
					}

				}

			}

		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS513.name(), EnumTypeForErrorCodes.SCUS513.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}
		return response;
	}

	/**
	 * deleteUser service implementation
	 * 
	 * @param userId
	 * @return ServiceResponse<String>
	 */
	@Transactional
	@Override
	public ServiceResponse<String> deleteUser(@NotNull @PathVariable Long userId) {
		log.info("deleting user");
		ServiceResponse<String> response = new ServiceResponse<>();
		try {
			Optional<User> user = userRepo.findById(userId);
			if (user.isPresent()) {
				Otp otpObj = otpRepo.findOneByUser(user.get());
				if (otpObj != null) {
					otpRepo.delete(otpObj);
				}
				userRepo.delete(user.get());
			}
			response.setData("User deleted successfully");
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS514.name(), EnumTypeForErrorCodes.SCUS514.errorMsg());
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
			response.setError(EnumTypeForErrorCodes.SCUS515.name(), EnumTypeForErrorCodes.SCUS515.errorMsg());
			log.error(utils.toJson(response.getError()), e);

		}
		return response;
	}

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
			response.setError(EnumTypeForErrorCodes.SCUS516.name(), EnumTypeForErrorCodes.SCUS516.errorMsg());
			log.error(utils.toJson(response.getError()), e);

		}
		return response;
	}

	@Override
	public ServiceResponse<Collection<User>> getAllUsersByFacilityId(Long facilityId) {

		log.info("getting all users based on facility");
		ServiceResponse<Collection<User>> response = new ServiceResponse<>();
		Collection<User> usersByFacility = new ArrayList<>();
		try {
			Boolean setActive = true;
			Collection<User> users = userRepo.findByActive(setActive);
			for (User user : users) {
				if (user.getFacilityId().getId().equals(facilityId)) {

					usersByFacility.add(user);
				}

			}
			response.setData(usersByFacility);
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS518.name(), EnumTypeForErrorCodes.SCUS518.errorMsg());
			log.error(utils.toJson(response.getError()), e);

		}
		return response;

	}

	private ServiceResponse<User> defaultPasswordGenetator(User user) {
		log.info("default Password Generator");
		ServiceResponse<User> response = new ServiceResponse<>();

		try {

			String mobileNumber = user.getPhone();
			String lastFourDigits = mobileNumber.substring(mobileNumber.length() - 4);
			String password = lastFourDigits + "@123";
			user.setPassword(bCryptPasswordEncoder.encode(password));

			User savedUser = userRepo.save(user);

			response.setData(savedUser);

			Set<Role> userroles = user.getRoles();

			StringBuilder role = new StringBuilder();
			for (Role role1 : userroles) {

				role.append(role1.getName());
				role.append("\n");

			}
			String emailTemplate = "Welcome to MBB Platform";

			String body = "Hi " + user.getName() +

					", You have recently created a new user account with " + role + "role in our MBB Platform. Url is: "
					+ url + "." + "\nYou can login using your e-mail address " + user.getEmail() + " and password is "
					+ password;

			emailsvc.notifyUserByEmail(user.getEmail(), body, emailTemplate);

		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS520.name(), EnumTypeForErrorCodes.SCUS520.errorMsg());

			log.error(utils.toJson(response.getError()), e);

		}
		return response;
	}

}

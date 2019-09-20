package com.mss.pmj.pmjmis.svcs.impl;

import java.io.FileReader;
import java.time.ZonedDateTime;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.mss.pmj.pmjmis.common.EnumTypeForErrorCodes;
import com.mss.pmj.pmjmis.common.Utils;
import com.mss.pmj.pmjmis.domain.Channel;
import com.mss.pmj.pmjmis.domain.Location;
import com.mss.pmj.pmjmis.domain.Manager;
import com.mss.pmj.pmjmis.domain.Role;
import com.mss.pmj.pmjmis.domain.User;
import com.mss.pmj.pmjmis.model.ServiceResponse;
import com.mss.pmj.pmjmis.repos.ChannelRepository;
import com.mss.pmj.pmjmis.repos.LocationRepository;
import com.mss.pmj.pmjmis.repos.ManagerRepository;
import com.mss.pmj.pmjmis.repos.UserRepository;
import com.mss.pmj.pmjmis.svcs.LocationService;
import com.opencsv.CSVReader;

@Service
public class LocationServiceImpl implements LocationService {

	private static Logger log = LoggerFactory.getLogger(LocationServiceImpl.class);

	@Autowired
	private Utils utils;

	@Autowired
	private LocationRepository locationRepo;

	@Autowired
	private ChannelRepository channelRepo;

	@Autowired
	private UserRepository userRepo;

	@Autowired
	private ManagerRepository managerRepo;

	/*
	 * get all locations by channel
	 */
	@Override
	public ServiceResponse<List<Location>> getAllLocationsByChannel(String channelName) {

		log.info("Getting all locations by channel");
		ServiceResponse<List<Location>> response = new ServiceResponse<>();
		try {
			Channel channel = channelRepo.findByChannelName(channelName);
			List<Location> locationDetails = new ArrayList<>();
			// Getting user details by login
			Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
			String username = null;
			if (principal instanceof UserDetails) {
				username = ((UserDetails) principal).getUsername();
			} else {
				username = principal.toString();
			}
			User user = userRepo.findByUserName(username);

			Role role = user.getRoles().get(0);

			if (role.getName().equals("ADMIN")) {

				locationDetails = locationRepo.findByChannel(channel);

			} else {

				if (user.getEmpCode() != null) {

					Manager manager = managerRepo.findByEmpId(user.getEmpCode());

					Set<Location> locationList = manager.getLocation();

					Set<Location> matchingLocationList = locationList.stream()
							.filter(p -> p.getChannel().getChannelName().equals(channelName))
							.collect(Collectors.toSet());

					for (Location location : matchingLocationList) {
						locationDetails.add(location);
					}
				}
			}
			response.setData(locationDetails);

		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS214.name(), EnumTypeForErrorCodes.SCUS214.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}
		return response;
	}

	@Override
	public ServiceResponse<List<Location>> getAllD2hLocationsGroupByState() {
		log.info("Getting all d2h locations group by state");

		ServiceResponse<List<Location>> response = new ServiceResponse<>();
		try {
			Channel channel = channelRepo.findByChannelName("D2H");

			List<Location> d2hStates = new ArrayList<>();

			// Getting user details by login
			Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
			String username = null;
			if (principal instanceof UserDetails) {
				username = ((UserDetails) principal).getUsername();
			} else {
				username = principal.toString();
			}
			User user = userRepo.findByUserName(username);

			Role role = user.getRoles().get(0);

			if (role.getName().equals("ADMIN")) {

				d2hStates = locationRepo.groupByStateAndChannel(channel);
			} else {

				if (user.getEmpCode() != null) {

					Manager manager = managerRepo.findByEmpId(user.getEmpCode());

					d2hStates = locationRepo.groupByManagerAndChannel(manager.getId(), channel);

				}

			}

			response.setData(d2hStates);

		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS218.name(), EnumTypeForErrorCodes.SCUS218.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}

		return response;
	}

	@Override
	public ServiceResponse<List<Location>> getAllClustersByState(String state) {

		log.info("getting all clusters by state");
		ServiceResponse<List<Location>> response = new ServiceResponse<>();
		try {
			Channel channel = channelRepo.findByChannelName("D2H");

			List<Location> clusters = new ArrayList<>();

			// Getting user details by login
			Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
			String username = null;
			if (principal instanceof UserDetails) {
				username = ((UserDetails) principal).getUsername();
			} else {
				username = principal.toString();
			}
			User user = userRepo.findByUserName(username);

			Role role = user.getRoles().get(0);

			if (role.getName().equals("ADMIN")) {

				clusters = locationRepo.clusterByStateAndChannel(state, channel);
			} else {

				if (user.getEmpCode() != null) {

					Manager manager = managerRepo.findByEmpId(user.getEmpCode());

					clusters = locationRepo.clusterByStateAndChannelAndManager(state, channel, manager.getId());

				}

			}

			response.setData(clusters);

		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS219.name(), EnumTypeForErrorCodes.SCUS219.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}
		return response;
	}

	@Override
	public ServiceResponse<List<Location>> getAllLocationsByCluster(String state, String clusterName) {
		log.info("getting all locations by cluster");
		ServiceResponse<List<Location>> response = new ServiceResponse<>();
		try {

			List<Location> locations = new ArrayList<>();
			// Getting user details by login
			Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
			String username = null;
			if (principal instanceof UserDetails) {
				username = ((UserDetails) principal).getUsername();
			} else {
				username = principal.toString();
			}
			User user = userRepo.findByUserName(username);

			Role role = user.getRoles().get(0);

			if (role.getName().equals("ADMIN")) {

				locations = locationRepo.findByClusterAndState(clusterName, state);
			} else {

				if (user.getEmpCode() != null) {

					Manager manager = managerRepo.findByEmpId(user.getEmpCode());

					locations = locationRepo.findByClusterAndManagerAndState(clusterName, manager.getId(), state);

				}

			}
			response.setData(locations);

		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS220.name(), EnumTypeForErrorCodes.SCUS220.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}
		return response;
	}
}

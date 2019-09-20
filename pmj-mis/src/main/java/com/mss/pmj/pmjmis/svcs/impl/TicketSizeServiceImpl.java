package com.mss.pmj.pmjmis.svcs.impl;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.time.temporal.ChronoUnit;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Collection;
import java.util.Date;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import javax.servlet.http.HttpServletResponse;

import org.json.simple.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.RestController;

import com.mss.pmj.pmjmis.common.EnumTypeForErrorCodes;
import com.mss.pmj.pmjmis.common.Utils;
import com.mss.pmj.pmjmis.domain.Channel;
import com.mss.pmj.pmjmis.domain.EmpDailyActuals;
import com.mss.pmj.pmjmis.domain.Employee;
import com.mss.pmj.pmjmis.domain.EmployeeItemMonthlyTarget;
import com.mss.pmj.pmjmis.domain.Location;
import com.mss.pmj.pmjmis.domain.Manager;
import com.mss.pmj.pmjmis.domain.Role;
import com.mss.pmj.pmjmis.domain.Sales;
import com.mss.pmj.pmjmis.domain.SalesReturns;
import com.mss.pmj.pmjmis.domain.Team;
import com.mss.pmj.pmjmis.domain.TeamItemMonthlyTarget;
import com.mss.pmj.pmjmis.domain.User;
import com.mss.pmj.pmjmis.model.ServiceResponse;
import com.mss.pmj.pmjmis.repos.ChannelRepository;
import com.mss.pmj.pmjmis.repos.EmpDailyActualsRepository;
import com.mss.pmj.pmjmis.repos.EmployeeItemMonthlyTargetRepository;
import com.mss.pmj.pmjmis.repos.EmployeeRepository;
import com.mss.pmj.pmjmis.repos.LocationRepository;
import com.mss.pmj.pmjmis.repos.ManagerRepository;
import com.mss.pmj.pmjmis.repos.SalesRepository;
import com.mss.pmj.pmjmis.repos.SalesReturnsRepository;
import com.mss.pmj.pmjmis.repos.TeamItemMonthlyTargetRepository;
import com.mss.pmj.pmjmis.repos.TeamRepository;
import com.mss.pmj.pmjmis.repos.UserRepository;
import com.mss.pmj.pmjmis.response.Dates;
import com.mss.pmj.pmjmis.svcs.TicketSizeService;

@RestController
public class TicketSizeServiceImpl implements TicketSizeService {

	private static Logger log = LoggerFactory.getLogger(TicketSizeServiceImpl.class);

	@Autowired
	private Utils utils;

	@Autowired
	private EmployeeItemMonthlyTargetRepository empItemMonthlyTargetRepo;

	@Autowired
	private SalesRepository salesRepo;

	@Autowired
	private SalesReturnsRepository salesReturnsRepo;

	@Autowired
	TeamItemMonthlyTargetRepository teamItemMonthlyTargetRepo;

	@Autowired
	private LocationRepository locationRepo;

	@Autowired
	private EmployeeRepository empRepo;

	@Autowired
	private EmpDailyActualsRepository empDailyActualsRepo;

	@Autowired
	private ChannelRepository channelRepo;

	@Autowired
	private TeamRepository teamRepo;

	@Autowired
	private UserRepository userRepo;

	@Autowired
	private ManagerRepository managerRepo;

	private static final String ADMIN = "ADMIN";

	private static final String ACTUAL_GOLD_TICKETSIZE = "actualGoldTicketSize";

	private static final String TOTALGOLDVALUE = "totalGoldValue";

	private static final String GOLDCOUNT = "goldCount";

	private static final String DIAMONDCOUNT = "diamondCount";

	private static final String ACTUAL_DIAMOND_TICKETSIZE = "actualDiamondTicketSize";

	private static final String TOTALDIAMONDVALUE = "totalDiamondValue";

	private static final String TARGET_GOLD_TICKETSIZE = "targetGoldTicketSize";

	private static final String TARGET_DIAMOND_TICKETSIZE = "targetDiamondTicketSize";

	private static final String DIAMOND = "diamond";

	private static final String ACTUALS = "actuals";

	private static final String TARGETS = "targets";

	private static final String DETAILS = "details";

	private static final String FROMDATE = "fromDate";

	private static final String TODATE = "toDate";

	private static final String MESSAGE = "message";

	private static final String SUCCESSFUL = "successful";

	private static final String STATUS = "status";

	private static final String DIAMONDVALUE = "Diamond";

	private static final String MONTHYEARFORMATE = "MMM-yyyy";

	private static final String TIMELINE = "timeline";

	private static final String EMPLOYEEDETAILS = "employeeDetails";

	@SuppressWarnings("unchecked")
	@Override
	public ServiceResponse<JSONObject> ticketSizeByAllShowrooms(String startDate, String endDate) {
		log.info("Getting ticket sizes for all showrooms");

		ServiceResponse<JSONObject> response = new ServiceResponse<>();

		JSONObject finalObject = new JSONObject();

		JSONObject data = new JSONObject();

		JSONObject actuals = new JSONObject();
		JSONObject targets = new JSONObject();

		try {

			Channel channel = channelRepo.findByChannelName("SHW");

			List<Location> showroomLocation = new ArrayList<>();

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

			if (role.getName().equals(ADMIN)) {

				showroomLocation = locationRepo.findByChannel(channel);

			} else {

				if (user.getEmpCode() != null) {

					Manager manager = managerRepo.findByEmpId(user.getEmpCode());

					Set<Location> locationList = manager.getLocation().stream().filter(o -> o.getChannel() == channel)
							.collect(Collectors.toSet());

					for (Location location : locationList) {

						showroomLocation.add(location);

					}
				}

			}

			Double totalShowRoomActualGold = 0.0;
			Double totalShowRoomActualDiamond = 0.0;
			Double totalShowRoomActualGoldCount = 0.0;
			Double totalShowRoomActualDiamondCount = 0.0;

			Double totalTargetGold = 0.0;
			Double totalTargetDiamond = 0.0;

			JSONObject details = new JSONObject();

			List<String> locations = new ArrayList<>();

			JSONObject actualsDetails = new JSONObject();
			List<Double> actualGold = new ArrayList<>();
			List<Double> actualDiamond = new ArrayList<>();

			JSONObject targetsDetails = new JSONObject();
			List<Double> targetGold = new ArrayList<>();
			List<Double> targetDiamond = new ArrayList<>();

			// Each showroom
			int locationsCount = showroomLocation.size();
			for (Location showroom : showroomLocation) {

				List<Employee> showroomEmployee = empRepo.findByLocation(showroom);

				locations.add(showroom.getLocationCode());

				// actuals
				JSONObject actualGoldDiamond = actualGoldDiamondValues(startDate, endDate, showroomEmployee);

				Double gold = (Double) actualGoldDiamond.get(ACTUAL_GOLD_TICKETSIZE);

				totalShowRoomActualGold += (double) actualGoldDiamond.get(TOTALGOLDVALUE);
				totalShowRoomActualGoldCount += (double) actualGoldDiamond.get(GOLDCOUNT);

				actualGold.add(gold);

				Double diamond = (Double) actualGoldDiamond.get(ACTUAL_DIAMOND_TICKETSIZE);

				totalShowRoomActualDiamond += (double) actualGoldDiamond.get(TOTALDIAMONDVALUE);
				totalShowRoomActualDiamondCount += (double) actualGoldDiamond.get(DIAMONDCOUNT);

				actualDiamond.add(diamond);

				// Targets
				JSONObject targetGoldDiamond = targetGoldDiamondValues(startDate, endDate, showroomEmployee);

				Double goldTarget = (Double) targetGoldDiamond.get(TARGET_GOLD_TICKETSIZE);
				totalTargetGold += goldTarget;

				targetGold.add(goldTarget);

				Double diamondTarget = (Double) targetGoldDiamond.get(TARGET_DIAMOND_TICKETSIZE);
				totalTargetDiamond += diamondTarget;

				targetDiamond.add(diamondTarget);

			}

			details.put("locations", locations);

			// actuals
			actualsDetails.put("gold", actualGold);
			actualsDetails.put(DIAMOND, actualDiamond);
			details.put(ACTUALS, actualsDetails);

			// targets
			targetsDetails.put("gold", targetGold);
			targetsDetails.put(DIAMOND, targetDiamond);
			details.put(TARGETS, targetsDetails);

			data.put(DETAILS, details);

			// calculating Total ticketsize for all showroom by startDate and endDate

			Double totalActualGold;
			Double totalActualDiamond;

			Double goldValueInlakh = totalShowRoomActualGold / 100000;
			Double diamondValueInlakh = totalShowRoomActualDiamond / 100000;

			if (goldValueInlakh == 0.0 || totalShowRoomActualGoldCount == 0.0) {

				totalActualGold = 0.0;
			} else {

				totalActualGold = goldValueInlakh / totalShowRoomActualGoldCount;
			}
			if (diamondValueInlakh == 0.0 || totalShowRoomActualDiamondCount == 0.0) {

				totalActualDiamond = 0.0;

			} else {

				totalActualDiamond = diamondValueInlakh / totalShowRoomActualDiamondCount;
			}

			actuals.put("gold", totalActualGold);
			actuals.put(DIAMOND, totalActualDiamond);

			if (totalTargetGold != 0.0) {

				targets.put("gold", totalTargetGold / locationsCount);
			} else {
				targets.put("gold", 0);

			}
			if (totalTargetDiamond != 0.0) {
				targets.put(DIAMOND, totalTargetDiamond / locationsCount);
			} else {
				targets.put(DIAMOND, 0);

			}

			data.put(ACTUALS, actuals);
			data.put(TARGETS, targets);

			finalObject.put("data", data);
			finalObject.put(FROMDATE, startDate);
			finalObject.put(TODATE, endDate);
			finalObject.put(MESSAGE, SUCCESSFUL);
			finalObject.put(STATUS, HttpServletResponse.SC_OK);

			response.setData(finalObject);

		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.TCUS001.name(), EnumTypeForErrorCodes.TCUS001.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}
		return response;
	}

	@SuppressWarnings("unchecked")
	private JSONObject actualGoldDiamondValues(String startDate, String endDate, List<Employee> showroomEmployee) {
		log.info("Getting actual ticketsize for showroom location");

		JSONObject actualTicketSize = new JSONObject();

		Double totalGoldValue = 0.0;
		Double totalDiamondValue = 0.0;
		Double prefferedGoldCount = 0.0;
		Double prefferedDiamondCount = 0.0;

		for (Employee employee : showroomEmployee) {

			// gold
			List<Sales> goldSales = salesRepo.findByStartDateAndEndDateAndItemTypeAndEmpId(startDate, endDate, "Gold",
					employee);
			Double totalGoldSales = goldSales.stream().mapToDouble(o -> o.getTotalSoldAmount()).sum();

			Double totalGoldReturnValue = 0.0;

			for (Sales sale : goldSales) {

				SalesReturns salesReturns = salesReturnsRepo.findBySales(sale);

				if (salesReturns != null) {

					totalGoldReturnValue += salesReturns.getAmountPayable();
				}
			}
			Double totalGoldActualValue = totalGoldSales - totalGoldReturnValue;

			totalGoldValue += totalGoldActualValue;

			// diamond
			List<Sales> diamondSales = salesRepo.findByStartDateAndEndDateAndItemTypeAndEmpId(startDate, endDate,
					DIAMONDVALUE, employee);
			Double totalDiamondSales = diamondSales.stream().mapToDouble(o -> o.getTotalSoldAmount()).sum();

			Double totalDiamondReturnValue = 0.0;

			for (Sales sale : diamondSales) {

				SalesReturns salesReturns = salesReturnsRepo.findBySales(sale);

				if (salesReturns != null) {

					totalDiamondReturnValue += salesReturns.getAmountPayable();

				}
			}
			Double totalDiamondActualValue = totalDiamondSales - totalDiamondReturnValue;

			totalDiamondValue += totalDiamondActualValue;

			// Preferred walkins
			List<EmpDailyActuals> preferredGold = empDailyActualsRepo.findByItemTypeVisitDateChannelEmp("Gold",
					startDate, endDate, employee);
			prefferedGoldCount += preferredGold.size();

			List<EmpDailyActuals> preferredDiamond = empDailyActualsRepo.findByItemTypeVisitDateChannelEmp(DIAMONDVALUE,
					startDate, endDate, employee);
			prefferedDiamondCount += preferredDiamond.size();

		}

		actualTicketSize.put(TOTALGOLDVALUE, totalGoldValue);
		actualTicketSize.put(TOTALDIAMONDVALUE, totalDiamondValue);
		actualTicketSize.put(GOLDCOUNT, prefferedGoldCount);
		actualTicketSize.put(DIAMONDCOUNT, prefferedDiamondCount);

		Double goldValueInlakh = totalGoldValue / 100000;
		Double diamondValueInlakh = totalDiamondValue / 100000;

		if (goldValueInlakh == 0.0 || prefferedGoldCount == 0.0) {

			actualTicketSize.put(ACTUAL_GOLD_TICKETSIZE, 0.0);
		} else {

			Double actualGoldTicketSize = goldValueInlakh / prefferedGoldCount;
			actualTicketSize.put(ACTUAL_GOLD_TICKETSIZE, actualGoldTicketSize);
		}
		if (diamondValueInlakh == 0.0 || prefferedDiamondCount == 0.0) {

			actualTicketSize.put(ACTUAL_DIAMOND_TICKETSIZE, 0.0);

		} else {

			Double actualDiamondTicketSize = diamondValueInlakh / prefferedDiamondCount;
			actualTicketSize.put(ACTUAL_DIAMOND_TICKETSIZE, actualDiamondTicketSize);
		}

		return actualTicketSize;
	}

	@SuppressWarnings("unchecked")
	public JSONObject targetGoldDiamondValues(String startDate, String endDate, List<Employee> locationwiseEmployees)
			throws ParseException {
		log.info("calculating ticketsize for showroom employee targets");

		JSONObject response = new JSONObject();

		Double rangeTotalGoldTarget = 0.0;
		Double rangeTotalDiamondTarget = 0.0;

		LocalDate localStartDate = LocalDate.parse(startDate);
		LocalDate localEndDate = LocalDate.parse(endDate);

		String date1 = localStartDate.getMonth() + "-" + localStartDate.getYear();
		String date2 = localEndDate.getMonth() + "-" + localEndDate.getYear();

		DateFormat formater = new SimpleDateFormat(MONTHYEARFORMATE);

		Calendar beginCalendar = Calendar.getInstance();
		Calendar finishCalendar = Calendar.getInstance();

		beginCalendar.setTime(formater.parse(date1));
		finishCalendar.setTime(formater.parse(date2));
		List<String> datesList = new ArrayList<>();

		while (beginCalendar.before(finishCalendar)) {
			String date = formater.format(beginCalendar.getTime()).toUpperCase();
			beginCalendar.add(Calendar.MONTH, 1);
			datesList.add(date);
		}
		String lastMonth = formater.format(finishCalendar.getTime()).toUpperCase();
		datesList.add(lastMonth);

		Collection<EmployeeItemMonthlyTarget> monthlyGoldTarget = null;
		Collection<EmployeeItemMonthlyTarget> monthlyDiamondTarget = null;

		long noOfDaysBetween;

		int employeeCount = locationwiseEmployees.size();

		for (Employee employee : locationwiseEmployees) {

			if (datesList.size() == 1) {

				Date date10 = new SimpleDateFormat(MONTHYEARFORMATE).parse(datesList.get(0));
				Calendar cal = Calendar.getInstance();
				cal.setTime(date10);
				cal.get(Calendar.MONTH);
				int lastDate = cal.getActualMaximum(Calendar.DATE);
				cal.set(Calendar.DATE, lastDate);
				int lastDay = cal.get(Calendar.DAY_OF_MONTH);

				noOfDaysBetween = ChronoUnit.DAYS.between(localStartDate, localEndDate) + 1;
				monthlyGoldTarget = empItemMonthlyTargetRepo.findByTgtMonthAndItemTypeAndEmp(datesList.get(0), "Gold",
						employee);
				if (!monthlyGoldTarget.isEmpty()) {
					Double totalMonthGoldValue = monthlyGoldTarget.stream().mapToDouble(o -> o.getTicketSize()).sum();
					Double totalGoldTarget = (totalMonthGoldValue / lastDay) * noOfDaysBetween;
					rangeTotalGoldTarget += totalGoldTarget;
				}

				monthlyDiamondTarget = empItemMonthlyTargetRepo.findByTgtMonthAndItemTypeAndEmp(datesList.get(0),
						DIAMONDVALUE, employee);
				if (!monthlyDiamondTarget.isEmpty()) {
					Double totalMonthDiamondValue = monthlyDiamondTarget.stream().mapToDouble(o -> o.getTicketSize())
							.sum();
					Double totalDiamondTarget = (totalMonthDiamondValue / lastDay) * noOfDaysBetween;
					rangeTotalDiamondTarget += totalDiamondTarget;
				}

			} else {
				for (int i = 0; i < datesList.size(); i++) {

					Date date10 = new SimpleDateFormat(MONTHYEARFORMATE).parse(datesList.get(i));
					Calendar cal = Calendar.getInstance();
					cal.setTime(date10);
					cal.get(Calendar.MONTH);
					int month = cal.get(Calendar.MONTH) + 1;
					int lastDate = cal.getActualMaximum(Calendar.DATE);
					cal.set(Calendar.DATE, lastDate);
					int lastDay = cal.get(Calendar.DAY_OF_MONTH);
					String m;
					if (month <= 9) {
						m = "0" + month;
					} else {
						m = String.valueOf(month);
					}
					if (i == 0) {
						String lastDay1 = datesList.get(i).substring(4, 8) + "-" + m + "-" + lastDay;
						LocalDate localLastDay = LocalDate.parse(lastDay1);
						noOfDaysBetween = ChronoUnit.DAYS.between(localStartDate, localLastDay) + 1;
						monthlyGoldTarget = empItemMonthlyTargetRepo.findByTgtMonthAndItemTypeAndEmp(datesList.get(i),
								"Gold", employee);
						if (!monthlyGoldTarget.isEmpty()) {
							Double totalMonthGoldValue = monthlyGoldTarget.stream().mapToDouble(o -> o.getTicketSize())
									.sum();
							Double totalGoldTarget = (totalMonthGoldValue / lastDay) * noOfDaysBetween;
							rangeTotalGoldTarget += totalGoldTarget;
						}

						monthlyDiamondTarget = empItemMonthlyTargetRepo
								.findByTgtMonthAndItemTypeAndEmp(datesList.get(i), DIAMONDVALUE, employee);
						if (!monthlyDiamondTarget.isEmpty()) {
							Double totalMonthDiamondValue = monthlyDiamondTarget.stream()
									.mapToDouble(o -> o.getTicketSize()).sum();
							Double totalDiamondTarget = (totalMonthDiamondValue / lastDay) * noOfDaysBetween;
							rangeTotalDiamondTarget += totalDiamondTarget;
						}

					} else if (i < datesList.size() - 1) {

						String lastDay1 = datesList.get(i).substring(4, 8) + "-" + m + "-" + lastDay;
						String firstDay1 = datesList.get(i).substring(4, 8) + "-" + m + "-" + "01";
						LocalDate localLastDay = LocalDate.parse(lastDay1);
						LocalDate firstDay = LocalDate.parse(firstDay1);
						noOfDaysBetween = ChronoUnit.DAYS.between(firstDay, localLastDay) + 1;
						monthlyGoldTarget = empItemMonthlyTargetRepo.findByTgtMonthAndItemTypeAndEmp(datesList.get(i),
								"Gold", employee);
						if (!monthlyGoldTarget.isEmpty()) {
							Double totalMonthGoldValue = monthlyGoldTarget.stream().mapToDouble(o -> o.getTicketSize())
									.sum();
							Double totalGoldTarget = (totalMonthGoldValue / lastDay) * noOfDaysBetween;
							rangeTotalGoldTarget += totalGoldTarget;
						}

						monthlyDiamondTarget = empItemMonthlyTargetRepo
								.findByTgtMonthAndItemTypeAndEmp(datesList.get(i), DIAMONDVALUE, employee);
						if (!monthlyDiamondTarget.isEmpty()) {
							Double totalMonthDiamondValue = monthlyDiamondTarget.stream()
									.mapToDouble(o -> o.getTicketSize()).sum();
							Double totalDiamondTarget = (totalMonthDiamondValue / lastDay) * noOfDaysBetween;
							rangeTotalDiamondTarget += totalDiamondTarget;
						}

					} else {

						String firstDay1 = datesList.get(i).substring(4, 8) + "-" + m + "-" + "01";
						LocalDate firstday = LocalDate.parse(firstDay1);
						noOfDaysBetween = ChronoUnit.DAYS.between(firstday, localEndDate) + 1;
						monthlyGoldTarget = empItemMonthlyTargetRepo.findByTgtMonthAndItemTypeAndEmp(datesList.get(i),
								"Gold", employee);
						if (!monthlyGoldTarget.isEmpty()) {
							Double totalMonthGoldValue = monthlyGoldTarget.stream().mapToDouble(o -> o.getTicketSize())
									.sum();
							Double totalGoldTarget = (totalMonthGoldValue / lastDay) * noOfDaysBetween;
							rangeTotalGoldTarget += totalGoldTarget;
						}

						monthlyDiamondTarget = empItemMonthlyTargetRepo
								.findByTgtMonthAndItemTypeAndEmp(datesList.get(i), DIAMONDVALUE, employee);
						if (!monthlyDiamondTarget.isEmpty()) {
							Double totalMonthDiamondValue = monthlyDiamondTarget.stream()
									.mapToDouble(o -> o.getTicketSize()).sum();
							Double totalDiamondTarget = (totalMonthDiamondValue / lastDay) * noOfDaysBetween;
							rangeTotalDiamondTarget += totalDiamondTarget;
						}

					}

				}
			}
		}

		if (rangeTotalGoldTarget != 0.0) {
			response.put(TARGET_GOLD_TICKETSIZE, rangeTotalGoldTarget / employeeCount);
		} else {
			response.put(TARGET_GOLD_TICKETSIZE, 0.0);
		}
		if (rangeTotalDiamondTarget != 0.0) {
			response.put(TARGET_DIAMOND_TICKETSIZE, rangeTotalDiamondTarget / employeeCount);
		} else {
			response.put(TARGET_DIAMOND_TICKETSIZE, 0.0);
		}

		return response;

	}

	@Override
	public ServiceResponse<JSONObject> ticketSizeByShowroomLocation(String startDate, String endDate,
			String locationCode) {
		log.info("Getting ticket size by showroom locations ");

		ServiceResponse<JSONObject> response = new ServiceResponse<>();
		try {

			LocalDate localStartDate = LocalDate.parse(startDate);
			LocalDate localEndDate = LocalDate.parse(endDate);

			long betweenDays = ChronoUnit.DAYS.between(localStartDate, localEndDate);

			if (betweenDays < 15) {
				// daywise
				response = getTicketSizeByDay(startDate, endDate, locationCode);
			} else if (betweenDays >= 15 && betweenDays <= 60) {
				// week wise
				response = getTicketSizeByWeek(startDate, endDate, locationCode);
			} else {
				// month wise
				response = getTicketSizeByMonth(startDate, endDate, locationCode);
			}

		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.TCUS002.name(), EnumTypeForErrorCodes.TCUS002.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}

		return response;
	}

	/*
	 * getTicketSizeByDay method
	 * 
	 */

	@SuppressWarnings("unchecked")
	public ServiceResponse<JSONObject> getTicketSizeByDay(String startDate, String endDate, String locationCode) {
		log.info("getting ticketSize for showroom location By daywise");
		ServiceResponse<JSONObject> response = new ServiceResponse<>();

		JSONObject finalObject = new JSONObject();

		JSONObject data = new JSONObject();

		JSONObject actuals = new JSONObject();
		JSONObject targets = new JSONObject();

		try {

			Location showroomLocation = locationRepo.findByLocationCode(locationCode);

			Double totalTargetGold = 0.0;
			Double totalTargetDiamond = 0.0;

			Double totalShowRoomActualGold = 0.0;
			Double totalShowRoomActualDiamond = 0.0;
			Double totalShowRoomActualGoldCount = 0.0;
			Double totalShowRoomActualDiamondCount = 0.0;

			JSONObject details = new JSONObject();

			List<String> timeLine = new ArrayList<>();

			JSONObject actualsDetails = new JSONObject();
			List<Double> actualGold = new ArrayList<>();
			List<Double> actualDiamond = new ArrayList<>();

			JSONObject targetsDetails = new JSONObject();
			List<Double> targetGold = new ArrayList<>();
			List<Double> targetDiamond = new ArrayList<>();

			List<Employee> showroomEmployee = empRepo.findByLocation(showroomLocation);

			LocalDate localStartDate = LocalDate.parse(startDate);
			LocalDate localEndDate = LocalDate.parse(endDate);

			long betweenDays = ChronoUnit.DAYS.between(localStartDate, localEndDate) + 1;

			// By each day
			for (LocalDate date = localStartDate; date.isBefore(localEndDate.plusDays(1)); date = date.plusDays(1)) {

				final String DATE_FORMATTER = "dd-MM-yyyy";

				DateTimeFormatter formatter = DateTimeFormatter.ofPattern(DATE_FORMATTER);
				String formatDateTime = date.format(formatter);

				timeLine.add(formatDateTime);

				String eachDay = date.toString();

				// actuals
				JSONObject actualGoldDiamond = actualGoldDiamondValues(eachDay, eachDay, showroomEmployee);

				Double gold = (Double) actualGoldDiamond.get(ACTUAL_GOLD_TICKETSIZE);

				totalShowRoomActualGold += (double) actualGoldDiamond.get(TOTALGOLDVALUE);
				totalShowRoomActualGoldCount += (double) actualGoldDiamond.get(GOLDCOUNT);

				actualGold.add(gold);

				Double diamond = (Double) actualGoldDiamond.get(ACTUAL_DIAMOND_TICKETSIZE);

				totalShowRoomActualDiamond += (double) actualGoldDiamond.get(TOTALDIAMONDVALUE);
				totalShowRoomActualDiamondCount += (double) actualGoldDiamond.get(DIAMONDCOUNT);

				actualDiamond.add(diamond);

				// Targets
				JSONObject targetGoldDiamond = targetGoldDiamondValues(eachDay, eachDay, showroomEmployee);

				Double goldTarget = (Double) targetGoldDiamond.get(TARGET_GOLD_TICKETSIZE);
				totalTargetGold += goldTarget;

				targetGold.add(goldTarget);

				Double diamondTarget = (Double) targetGoldDiamond.get(TARGET_DIAMOND_TICKETSIZE);
				totalTargetDiamond += diamondTarget;

				targetDiamond.add(diamondTarget);
			}

			details.put(TIMELINE, timeLine);

			// actuals
			actualsDetails.put("gold", actualGold);
			actualsDetails.put(DIAMOND, actualDiamond);
			details.put(ACTUALS, actualsDetails);

			// targets
			targetsDetails.put("gold", targetGold);
			targetsDetails.put(DIAMOND, targetDiamond);
			details.put(TARGETS, targetsDetails);

			data.put(DETAILS, details);

			// calculating totalTicket size for a location by startDate and endDate

			Double totalActualGold;
			Double totalActualDiamond;

			Double goldValueInlakh = totalShowRoomActualGold / 100000;
			Double diamondValueInlakh = totalShowRoomActualDiamond / 100000;

			if (goldValueInlakh == 0.0 || totalShowRoomActualGoldCount == 0.0) {

				totalActualGold = 0.0;
			} else {

				totalActualGold = goldValueInlakh / totalShowRoomActualGoldCount;
			}
			if (diamondValueInlakh == 0.0 || totalShowRoomActualDiamondCount == 0.0) {

				totalActualDiamond = 0.0;

			} else {

				totalActualDiamond = diamondValueInlakh / totalShowRoomActualDiamondCount;
			}

			actuals.put("gold", totalActualGold);
			actuals.put(DIAMOND, totalActualDiamond);

			targets.put("gold", totalTargetGold);
			targets.put(DIAMOND, totalTargetDiamond);

			data.put(ACTUALS, actuals);
			data.put(TARGETS, targets);

			// employee wise
			ServiceResponse<JSONObject> employeeDetails = ticketSizeShowroomEmployee(startDate, endDate, locationCode);

			data.put(EMPLOYEEDETAILS, employeeDetails.getData());

			finalObject.put("data", data);
			finalObject.put(FROMDATE, startDate);
			finalObject.put(TODATE, endDate);
			finalObject.put(MESSAGE, SUCCESSFUL);
			finalObject.put(STATUS, HttpServletResponse.SC_OK);

			response.setData(finalObject);

		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.TCUS003.name(), EnumTypeForErrorCodes.TCUS003.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}
		return response;
	}

	/*
	 * getTicketSizeByWeek method
	 * 
	 */
	@SuppressWarnings("unchecked")
	private ServiceResponse<JSONObject> getTicketSizeByWeek(String startDate, String endDate, String locationCode) {
		log.info("getting ticketSize for showroom location By weekwise");
		ServiceResponse<JSONObject> response = new ServiceResponse<>();

		JSONObject finalObject = new JSONObject();

		JSONObject data = new JSONObject();

		JSONObject actuals = new JSONObject();
		JSONObject targets = new JSONObject();

		try {

			Location showroomLocation = locationRepo.findByLocationCode(locationCode);

			Double totalTargetGold = 0.0;
			Double totalTargetDiamond = 0.0;

			Double totalShowRoomActualGold = 0.0;
			Double totalShowRoomActualDiamond = 0.0;
			Double totalShowRoomActualGoldCount = 0.0;
			Double totalShowRoomActualDiamondCount = 0.0;

			JSONObject details = new JSONObject();

			List<String> timeLine = new ArrayList<>();

			JSONObject actualsDetails = new JSONObject();
			List<Double> actualGold = new ArrayList<>();
			List<Double> actualDiamond = new ArrayList<>();

			JSONObject targetsDetails = new JSONObject();
			List<Double> targetGold = new ArrayList<>();
			List<Double> targetDiamond = new ArrayList<>();

			List<Employee> showroomEmployee = empRepo.findByLocation(showroomLocation);

			LocalDate localStartDate = LocalDate.parse(startDate);
			LocalDate localEndDate = LocalDate.parse(endDate);

			List<Dates> weeksList = new ArrayList<>();
			int count = 1;
			LocalDate start;
			while (localStartDate.isBefore(localEndDate.plusDays(1))) {
				Dates date = new Dates();
				date.setStartDate(localStartDate);
				start = localStartDate;
				localStartDate = localStartDate.plusWeeks(1);
				if (localStartDate.isBefore(localEndDate.plusDays(1))) {
					LocalDate weekEndDate = localStartDate.minusDays(1);
					date.setEndDate(weekEndDate);

					date.setWeekNumber("week" + count);

					count += 1;
					weeksList.add(date);
				} else {
					date.setStartDate(start);
					date.setEndDate(localEndDate);
					date.setWeekNumber("week" + count);
					weeksList.add(date);
				}

			}

			// By each week
			int weekcount = weeksList.size();
			for (Dates eachWeek : weeksList) {

				timeLine.add(eachWeek.getWeekNumber());

				String weekStart = eachWeek.getStartDate().toString();
				String weekEnd = eachWeek.getEndDate().toString();

				// actuals
				JSONObject actualGoldDiamond = actualGoldDiamondValues(weekStart, weekEnd, showroomEmployee);

				Double gold = (Double) actualGoldDiamond.get(ACTUAL_GOLD_TICKETSIZE);

				totalShowRoomActualGold += (double) actualGoldDiamond.get(TOTALGOLDVALUE);
				totalShowRoomActualGoldCount += (double) actualGoldDiamond.get(GOLDCOUNT);

				actualGold.add(gold);

				Double diamond = (Double) actualGoldDiamond.get(ACTUAL_DIAMOND_TICKETSIZE);

				totalShowRoomActualDiamond += (double) actualGoldDiamond.get(TOTALDIAMONDVALUE);
				totalShowRoomActualDiamondCount += (double) actualGoldDiamond.get(DIAMONDCOUNT);

				actualDiamond.add(diamond);

				// Targets
				JSONObject targetGoldDiamond = targetGoldDiamondValues(weekStart, weekEnd, showroomEmployee);

				Double goldTarget = (Double) targetGoldDiamond.get(TARGET_GOLD_TICKETSIZE);
				totalTargetGold += goldTarget;

				targetGold.add(goldTarget);

				Double diamondTarget = (Double) targetGoldDiamond.get(TARGET_DIAMOND_TICKETSIZE);
				totalTargetDiamond += diamondTarget;

				targetDiamond.add(diamondTarget);
			}

			details.put(TIMELINE, timeLine);

			// actuals
			actualsDetails.put("gold", actualGold);
			actualsDetails.put(DIAMOND, actualDiamond);
			details.put(ACTUALS, actualsDetails);

			// targets
			targetsDetails.put("gold", targetGold);
			targetsDetails.put(DIAMOND, targetDiamond);
			details.put(TARGETS, targetsDetails);

			data.put(DETAILS, details);

			// calculating total ticket size
			Double totalActualGold;
			Double totalActualDiamond;

			Double goldValueInlakh = totalShowRoomActualGold / 100000;
			Double diamondValueInlakh = totalShowRoomActualDiamond / 100000;

			if (goldValueInlakh == 0.0 || totalShowRoomActualGoldCount == 0.0) {

				totalActualGold = 0.0;
			} else {

				totalActualGold = goldValueInlakh / totalShowRoomActualGoldCount;
			}
			if (diamondValueInlakh == 0.0 || totalShowRoomActualDiamondCount == 0.0) {

				totalActualDiamond = 0.0;

			} else {

				totalActualDiamond = diamondValueInlakh / totalShowRoomActualDiamondCount;
			}

			actuals.put("gold", totalActualGold);
			actuals.put(DIAMOND, totalActualDiamond);

			targets.put("gold", totalTargetGold);
			targets.put(DIAMOND, totalTargetDiamond);

			// employee wise
			ServiceResponse<JSONObject> employeeDetails = ticketSizeShowroomEmployee(startDate, endDate, locationCode);

			data.put(EMPLOYEEDETAILS, employeeDetails.getData());

			data.put(ACTUALS, actuals);
			data.put(TARGETS, targets);

			finalObject.put("data", data);
			finalObject.put(FROMDATE, startDate);
			finalObject.put(TODATE, endDate);
			finalObject.put(MESSAGE, SUCCESSFUL);
			finalObject.put(STATUS, HttpServletResponse.SC_OK);

			response.setData(finalObject);

		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.TCUS004.name(), EnumTypeForErrorCodes.TCUS004.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}

		return response;
	}

	/*
	 * getTicketSizeByMonth method
	 */
	@SuppressWarnings("unchecked")
	private ServiceResponse<JSONObject> getTicketSizeByMonth(String startDate, String endDate, String locationCode) {
		log.info("getting ticketSize for showroom location By monthwise");

		ServiceResponse<JSONObject> response = new ServiceResponse<>();

		JSONObject finalObject = new JSONObject();

		JSONObject data = new JSONObject();

		JSONObject actuals = new JSONObject();
		JSONObject targets = new JSONObject();

		try {

			Location showroomLocation = locationRepo.findByLocationCode(locationCode);

			Double totalTargetGold = 0.0;
			Double totalTargetDiamond = 0.0;

			Double totalShowRoomActualGold = 0.0;
			Double totalShowRoomActualDiamond = 0.0;
			Double totalShowRoomActualGoldCount = 0.0;
			Double totalShowRoomActualDiamondCount = 0.0;

			JSONObject details = new JSONObject();

			List<String> timeLine = new ArrayList<>();

			JSONObject actualsDetails = new JSONObject();
			List<Double> actualGold = new ArrayList<>();
			List<Double> actualDiamond = new ArrayList<>();

			JSONObject targetsDetails = new JSONObject();
			List<Double> targetGold = new ArrayList<>();
			List<Double> targetDiamond = new ArrayList<>();

			List<Employee> showroomEmployee = empRepo.findByLocation(showroomLocation);

			LocalDate localStartDate = LocalDate.parse(startDate);
			LocalDate localEndDate = LocalDate.parse(endDate);

			String date1 = localStartDate.getMonth() + "-" + localStartDate.getYear();
			String date2 = localEndDate.getMonth() + "-" + localEndDate.getYear();

			List<String> datesList = new ArrayList<>();

			DateFormat formater = new SimpleDateFormat(MONTHYEARFORMATE);
			Calendar beginCalendar = Calendar.getInstance();
			Calendar finishCalendar = Calendar.getInstance();
			beginCalendar.setTime(formater.parse(date1));
			finishCalendar.setTime(formater.parse(date2));
			while (beginCalendar.before(finishCalendar)) {
				String date = formater.format(beginCalendar.getTime()).toUpperCase();
				beginCalendar.add(Calendar.MONTH, 1);
				datesList.add(date);
			}
			String lastMonth = formater.format(finishCalendar.getTime()).toUpperCase();
			datesList.add(lastMonth);

			// By each month
			int monthCount = datesList.size();
			for (int i = 0; i < datesList.size(); i++) {

				String monthStart = null;
				String monthEnd = null;

				timeLine.add(datesList.get(i));

				if (i == 0) {

					if (date1.equals(date2)) {

						monthStart = startDate;
						monthEnd = endDate;

					} else {

						Date date = new SimpleDateFormat(MONTHYEARFORMATE).parse(datesList.get(i));
						Calendar cal = Calendar.getInstance();
						cal.setTime(date);
						cal.get(Calendar.MONTH);
						int month = cal.get(Calendar.MONTH) + 1;
						int lastDate = cal.getActualMaximum(Calendar.DATE);
						cal.set(Calendar.DATE, lastDate);
						int lastDay = cal.get(Calendar.DAY_OF_MONTH);
						String m;
						if (month <= 9) {
							m = "0" + month;
						} else {
							m = String.valueOf(month);
						}
						String endDay = datesList.get(i).substring(4, 8) + "-" + m + "-" + lastDay;
						monthStart = startDate;
						monthEnd = endDay;
					}

				} else if (i < datesList.size() - 1) {
					Date date = new SimpleDateFormat(MONTHYEARFORMATE).parse(datesList.get(i));
					Calendar cal = Calendar.getInstance();
					cal.setTime(date);
					cal.get(Calendar.MONTH);
					int month = cal.get(Calendar.MONTH) + 1;
					int lastDate = cal.getActualMaximum(Calendar.DATE);
					cal.set(Calendar.DATE, lastDate);
					int lastDay = cal.get(Calendar.DAY_OF_MONTH);
					String m;
					if (month <= 9) {
						m = "0" + month;
					} else {
						m = String.valueOf(month);
					}
					String endDay = datesList.get(i).substring(4, 8) + "-" + m + "-" + lastDay;
					String startDay = datesList.get(i).substring(4, 8) + "-" + m + "-" + "01";
					monthStart = startDay;
					monthEnd = endDay;

				} else {
					Date date = new SimpleDateFormat(MONTHYEARFORMATE).parse(datesList.get(i));
					Calendar cal = Calendar.getInstance();
					cal.setTime(date);
					cal.get(Calendar.MONTH);
					int month = cal.get(Calendar.MONTH) + 1;
					int lastDate = cal.getActualMaximum(Calendar.DATE);
					cal.set(Calendar.DATE, lastDate);
					String m;
					if (month <= 9) {
						m = "0" + month;
					} else {
						m = String.valueOf(month);
					}
					String firstDay = datesList.get(i).substring(4, 8) + "-" + m + "-" + "01";

					monthStart = firstDay;
					monthEnd = firstDay;

				}

				// actuals
				JSONObject actualGoldDiamond = actualGoldDiamondValues(monthStart, monthEnd, showroomEmployee);

				Double gold = (Double) actualGoldDiamond.get(ACTUAL_GOLD_TICKETSIZE);

				totalShowRoomActualGold += (double) actualGoldDiamond.get(TOTALGOLDVALUE);
				totalShowRoomActualGoldCount += (double) actualGoldDiamond.get(GOLDCOUNT);

				actualGold.add(gold);

				Double diamond = (Double) actualGoldDiamond.get(ACTUAL_DIAMOND_TICKETSIZE);

				totalShowRoomActualDiamond += (double) actualGoldDiamond.get(TOTALDIAMONDVALUE);
				totalShowRoomActualDiamondCount += (double) actualGoldDiamond.get(DIAMONDCOUNT);

				actualDiamond.add(diamond);

				// Targets
				JSONObject targetGoldDiamond = targetGoldDiamondValues(monthStart, monthEnd, showroomEmployee);

				Double goldTarget = (Double) targetGoldDiamond.get(TARGET_GOLD_TICKETSIZE);
				totalTargetGold += goldTarget;

				targetGold.add(goldTarget);

				Double diamondTarget = (Double) targetGoldDiamond.get(TARGET_DIAMOND_TICKETSIZE);
				totalTargetDiamond += diamondTarget;

				targetDiamond.add(diamondTarget);
			}

			details.put(TIMELINE, timeLine);

			// actuals
			actualsDetails.put("gold", actualGold);
			actualsDetails.put(DIAMOND, actualDiamond);
			details.put(ACTUALS, actualsDetails);

			// targets
			targetsDetails.put("gold", targetGold);
			targetsDetails.put(DIAMOND, targetDiamond);
			details.put(TARGETS, targetsDetails);

			// employee wise
			ServiceResponse<JSONObject> employeeDetails = ticketSizeShowroomEmployee(startDate, endDate, locationCode);

			data.put(EMPLOYEEDETAILS, employeeDetails.getData());

			data.put(DETAILS, details);

			// calculating total ticketsize
			Double totalActualGold;
			Double totalActualDiamond;

			Double goldValueInlakh = totalShowRoomActualGold / 100000;
			Double diamondValueInlakh = totalShowRoomActualDiamond / 100000;

			if (goldValueInlakh == 0.0 || totalShowRoomActualGoldCount == 0.0) {

				totalActualGold = 0.0;
			} else {

				totalActualGold = goldValueInlakh / totalShowRoomActualGoldCount;
			}
			if (diamondValueInlakh == 0.0 || totalShowRoomActualDiamondCount == 0.0) {

				totalActualDiamond = 0.0;

			} else {

				totalActualDiamond = diamondValueInlakh / totalShowRoomActualDiamondCount;
			}

			actuals.put("gold", totalActualGold);
			actuals.put(DIAMOND, totalActualDiamond);

			targets.put("gold", totalTargetGold);
			targets.put(DIAMOND, totalTargetDiamond);

			data.put(ACTUALS, actuals);
			data.put(TARGETS, targets);

			finalObject.put("data", data);
			finalObject.put(FROMDATE, startDate);
			finalObject.put(TODATE, endDate);
			finalObject.put(MESSAGE, SUCCESSFUL);
			finalObject.put(STATUS, HttpServletResponse.SC_OK);

			response.setData(finalObject);

		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.TCUS005.name(), EnumTypeForErrorCodes.TCUS005.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}
		return response;
	}

	@SuppressWarnings("unchecked")
	public ServiceResponse<JSONObject> ticketSizeShowroomEmployee(String startDate, String endDate,
			String locationCode) {
		log.info("Getting ticketsize for all showroom employees by location");

		ServiceResponse<JSONObject> response = new ServiceResponse<>();

		JSONObject employeeDetails = new JSONObject();

		JSONObject actuals = new JSONObject();
		JSONObject targets = new JSONObject();

		List<String> employee = new ArrayList<>();

		List<Double> actualGold = new ArrayList<>();
		List<Double> actualDiamond = new ArrayList<>();

		List<Double> targetGold = new ArrayList<>();
		List<Double> targetDiamond = new ArrayList<>();

		try {

			Location location = locationRepo.findByLocationCode(locationCode);

			List<Employee> employeeList = empRepo.findByLocation(location);

			// Each employee
			for (Employee emp : employeeList) {

				employee.add(emp.getEmpName());

				// gold
				List<Sales> goldSales = salesRepo.findByStartDateAndEndDateAndItemTypeAndEmpId(startDate, endDate,
						"Gold", emp);
				Double totalGoldSales = goldSales.stream().mapToDouble(o -> o.getTotalSoldAmount()).sum();

				Double totalGoldReturnValue = 0.0;

				for (Sales sale : goldSales) {

					SalesReturns salesReturns = salesReturnsRepo.findBySales(sale);

					if (salesReturns != null) {

						totalGoldReturnValue += salesReturns.getAmountPayable();
					}
				}
				Double totalGoldActualValue = totalGoldSales - totalGoldReturnValue;

				// diamond
				List<Sales> diamondSales = salesRepo.findByStartDateAndEndDateAndItemTypeAndEmpId(startDate, endDate,
						DIAMONDVALUE, emp);
				Double totalDiamondSales = diamondSales.stream().mapToDouble(o -> o.getTotalSoldAmount()).sum();

				Double totalDiamondReturnValue = 0.0;

				for (Sales sale : diamondSales) {

					SalesReturns salesReturns = salesReturnsRepo.findBySales(sale);

					if (salesReturns != null) {

						totalDiamondReturnValue += salesReturns.getAmountPayable();
					}
				}
				Double totalDiamondActualValue = totalDiamondSales - totalDiamondReturnValue;

				// Preferred walkins
				List<EmpDailyActuals> preferredGold = empDailyActualsRepo.findByItemTypeVisitDateChannelEmp("Gold",
						startDate, endDate, emp);
				Double totalPerfferedGoldWalkins = (double) preferredGold.size();

				List<EmpDailyActuals> preferredDiamond = empDailyActualsRepo
						.findByItemTypeVisitDateChannelEmp(DIAMONDVALUE, startDate, endDate, emp);
				Double totalPerfferedDiamondWalkins = (double) preferredDiamond.size();

				// calculating ticketsize
				Double goldValueInlakh = totalGoldActualValue / 100000;
				Double diamondValueInlakh = totalDiamondActualValue / 100000;

				if (goldValueInlakh == 0.0 || totalPerfferedGoldWalkins == 0.0) {

					actualGold.add(0.0);
				} else {

					Double actualGoldTicketSize = goldValueInlakh / totalPerfferedGoldWalkins;
					actualGold.add(actualGoldTicketSize);
				}
				if (diamondValueInlakh == 0.0 || totalPerfferedDiamondWalkins == 0.0) {

					actualDiamond.add(0.0);

				} else {

					Double actualDiamondTicketSize = diamondValueInlakh / totalPerfferedDiamondWalkins;
					actualDiamond.add(actualDiamondTicketSize);
				}

				// targets

				List<Employee> empList = new ArrayList<>();

				empList.add(emp);

				JSONObject targetGoldDiamond = targetGoldDiamondValues(startDate, endDate, empList);

				Double goldTarget = (Double) targetGoldDiamond.get(TARGET_GOLD_TICKETSIZE);

				targetGold.add(goldTarget);

				Double diamondTarget = (Double) targetGoldDiamond.get(TARGET_DIAMOND_TICKETSIZE);

				targetDiamond.add(diamondTarget);

			}

			actuals.put("gold", actualGold);
			actuals.put(DIAMOND, actualDiamond);

			targets.put("gold", targetGold);
			targets.put(DIAMOND, targetDiamond);

			employeeDetails.put(ACTUALS, actuals);
			employeeDetails.put(TARGETS, targets);
			employeeDetails.put("employee", employee);

			response.setData(employeeDetails);

		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.TCUS010.name(), EnumTypeForErrorCodes.TCUS010.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}
		return response;

	}

	/*
	 * ticketSizeByD2hStates service
	 * 
	 */

	@SuppressWarnings("unchecked")
	@Override
	public ServiceResponse<JSONObject> ticketSizeByD2hStates(String startDate, String endDate) {
		log.info("Getting ticketsize for all d2h statewise");

		ServiceResponse<JSONObject> response = new ServiceResponse<>();

		JSONObject finalObject = new JSONObject();

		JSONObject data = new JSONObject();

		JSONObject actuals = new JSONObject();
		JSONObject targets = new JSONObject();

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

			if (role.getName().equals(ADMIN)) {

				d2hStates = locationRepo.groupByStateAndChannel(channel);
			} else {

				if (user.getEmpCode() != null) {

					Manager manager = managerRepo.findByEmpId(user.getEmpCode());

					d2hStates = locationRepo.groupByManagerAndChannel(manager.getId(), channel);

				}

			}

			Double totalActualGold = 0.0;
			Double totalActualDiamond = 0.0;
			Double totalActualGoldCount = 0.0;
			Double totalActualDiamondCount = 0.0;

			Double totalTargetGold = 0.0;
			Double totalTargetDiamond = 0.0;

			JSONObject details = new JSONObject();

			List<String> states = new ArrayList<>();

			JSONObject actualsDetails = new JSONObject();
			List<Double> actualGold = new ArrayList<>();
			List<Double> actualDiamond = new ArrayList<>();

			JSONObject targetsDetails = new JSONObject();
			List<Double> targetGold = new ArrayList<>();
			List<Double> targetDiamond = new ArrayList<>();

			// Each D2H states
			int stateCount = d2hStates.size();
			for (Location d2h : d2hStates) {

				states.add(d2h.getState());

				List<Location> d2hByState = new ArrayList<>();

				if (role.getName().equals(ADMIN)) {

					d2hByState = locationRepo.findByStateAndChannel(d2h.getState(), channel);
				} else {

					if (user.getEmpCode() != null) {

						Manager manager = managerRepo.findByEmpId(user.getEmpCode());

						d2hByState = locationRepo.groupByStateAndManagerAndChannel(d2h.getState(), manager.getId(),
								channel);

					}

				}

				Double goldActual = 0.0;
				Double diamondActual = 0.0;
				Double goldCount = 0.0;
				Double diamondCount = 0.0;
				Double goldTarget = 0.0;
				Double diamondTarget = 0.0;

				int locationCount = d2hByState.size();
				for (Location eachD2h : d2hByState) {

					List<Employee> d2hEmployees = empRepo.findByLocation(eachD2h);

					List<Team> d2hTeams = teamRepo.findByLocation(eachD2h);

					// actuals
					JSONObject actualGoldDiamond = d2hActualGoldDiamondValues(startDate, endDate, d2hEmployees);

					goldActual += (Double) actualGoldDiamond.get(TOTALGOLDVALUE);
					diamondActual += (Double) actualGoldDiamond.get(TOTALDIAMONDVALUE);
					goldCount += (Double) actualGoldDiamond.get(GOLDCOUNT);
					diamondCount += (Double) actualGoldDiamond.get(DIAMONDCOUNT);

					// Targets
					if (!d2hTeams.isEmpty()) {
						JSONObject targetGoldDiamond = d2hTargetGoldDiamondValues(startDate, endDate, d2hTeams);

						goldTarget += (Double) targetGoldDiamond.get(TARGET_GOLD_TICKETSIZE);
						diamondTarget += (Double) targetGoldDiamond.get(TARGET_DIAMOND_TICKETSIZE);
					}

				}
				// targets
				totalTargetGold += (goldTarget / locationCount);
				totalTargetDiamond += (diamondTarget / locationCount);

				targetGold.add(goldTarget / locationCount);
				targetDiamond.add(diamondTarget / locationCount);

				// actuals
				totalActualGold += goldActual;
				totalActualDiamond += diamondActual;
				totalActualGoldCount += goldCount;
				totalActualDiamondCount += diamondCount;

				// calculate ticketsize for each state

				Double totalActualGoldByState;
				Double totalActualDiamondByState;

				Double goldValueInlakh = goldActual / 100000;
				Double diamondValueInlakh = diamondActual / 100000;

				if (goldValueInlakh == 0.0 || goldCount == 0.0) {

					totalActualGoldByState = 0.0;
				} else {

					totalActualGoldByState = goldValueInlakh / goldCount;
				}
				if (diamondValueInlakh == 0.0 || diamondCount == 0.0) {

					totalActualDiamondByState = 0.0;

				} else {

					totalActualDiamondByState = diamondValueInlakh / diamondCount;
				}

				actualGold.add(totalActualGoldByState);
				actualDiamond.add(totalActualDiamondByState);

			}

			details.put("states", states);

			// actuals
			actualsDetails.put("gold", actualGold);
			actualsDetails.put(DIAMOND, actualDiamond);
			details.put(ACTUALS, actualsDetails);

			// targets
			targetsDetails.put("gold", targetGold);
			targetsDetails.put(DIAMOND, targetDiamond);
			details.put(TARGETS, targetsDetails);

			data.put(DETAILS, details);

			// calculating total ticketsize

			Double totalActualGoldAllState;
			Double totalActualDiamondAllState;

			Double goldValueInlakh = totalActualGold / 100000;
			Double diamondValueInlakh = totalActualDiamond / 100000;

			if (goldValueInlakh == 0.0 || totalActualGoldCount == 0.0) {

				totalActualGoldAllState = 0.0;
			} else {

				totalActualGoldAllState = goldValueInlakh / totalActualGoldCount;
			}
			if (diamondValueInlakh == 0.0 || totalActualDiamondCount == 0.0) {

				totalActualDiamondAllState = 0.0;

			} else {

				totalActualDiamondAllState = diamondValueInlakh / totalActualDiamondCount;
			}

			actuals.put("gold", totalActualGoldAllState);
			actuals.put(DIAMOND, totalActualDiamondAllState);

			if (stateCount != 0) {

				targets.put("gold", totalTargetGold / stateCount);
				targets.put(DIAMOND, totalTargetDiamond / stateCount);
			} else {
				targets.put("gold", 0);
				targets.put(DIAMOND, 0);

			}

			data.put(ACTUALS, actuals);
			data.put(TARGETS, targets);

			finalObject.put("data", data);
			finalObject.put(FROMDATE, startDate);
			finalObject.put(TODATE, endDate);
			finalObject.put(MESSAGE, SUCCESSFUL);
			finalObject.put(STATUS, HttpServletResponse.SC_OK);

			response.setData(finalObject);

		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.TCUS006.name(), EnumTypeForErrorCodes.TCUS006.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}

		return response;
	}

	@SuppressWarnings("unchecked")
	public JSONObject d2hActualGoldDiamondValues(String startDate, String endDate, List<Employee> d2hEmployees) {
		log.info("Getting actual ticketsize for d2h location");

		JSONObject actualTicketSize = new JSONObject();

		Double totalGoldValue = 0.0;
		Double totalDiamondValue = 0.0;
		Double prefferedGoldCount = 0.0;
		Double prefferedDiamondCount = 0.0;

		for (Employee employee : d2hEmployees) {

			// gold
			List<Sales> goldSales = salesRepo.findByStartDateAndEndDateAndItemTypeAndEmpId(startDate, endDate, "Gold",
					employee);
			Double totalGoldSales = goldSales.stream().mapToDouble(o -> o.getTotalSoldAmount()).sum();

			Double totalGoldReturnValue = 0.0;

			for (Sales sale : goldSales) {

				SalesReturns salesReturns = salesReturnsRepo.findBySales(sale);

				if (salesReturns != null) {

					totalGoldReturnValue += salesReturns.getAmountPayable();

				}
			}
			Double totalGoldActualValue = totalGoldSales - totalGoldReturnValue;

			totalGoldValue += totalGoldActualValue;

			// diamond
			List<Sales> diamondSales = salesRepo.findByStartDateAndEndDateAndItemTypeAndEmpId(startDate, endDate,
					DIAMONDVALUE, employee);
			Double totalDiamondSales = diamondSales.stream().mapToDouble(o -> o.getTotalSoldAmount()).sum();

			Double totalDiamondReturnValue = 0.0;

			for (Sales sale : diamondSales) {

				SalesReturns salesReturns = salesReturnsRepo.findBySales(sale);

				if (salesReturns != null) {

					totalDiamondReturnValue += salesReturns.getAmountPayable();

				}
			}
			Double totalDiamondActualValue = totalDiamondSales - totalDiamondReturnValue;

			totalDiamondValue += totalDiamondActualValue;

			// Preferred walkins
			List<EmpDailyActuals> preferredGold = empDailyActualsRepo.findByItemTypeVisitDateChannelEmpD2h("Gold",
					startDate, endDate, employee);
			prefferedGoldCount += preferredGold.size();

			List<EmpDailyActuals> preferredDiamond = empDailyActualsRepo
					.findByItemTypeVisitDateChannelEmpD2h(DIAMONDVALUE, startDate, endDate, employee);
			prefferedDiamondCount += preferredDiamond.size();

		}

		actualTicketSize.put(TOTALGOLDVALUE, totalGoldValue);
		actualTicketSize.put(TOTALDIAMONDVALUE, totalDiamondValue);
		actualTicketSize.put(GOLDCOUNT, prefferedGoldCount);
		actualTicketSize.put(DIAMONDCOUNT, prefferedDiamondCount);

		return actualTicketSize;
	}

	@SuppressWarnings("unchecked")
	public JSONObject d2hTargetGoldDiamondValues(String startDate, String endDate, List<Team> d2hTeams)
			throws ParseException {
		log.info("Getting GoldDiamond target ticketsize by team");

		JSONObject response = new JSONObject();

		Double rangeTotalGoldTarget = 0.0;
		Double rangeTotalDiamondTarget = 0.0;

		LocalDate localStartDate = LocalDate.parse(startDate);
		LocalDate localEndDate = LocalDate.parse(endDate);

		String date1 = localStartDate.getMonth() + "-" + localStartDate.getYear();
		String date2 = localEndDate.getMonth() + "-" + localEndDate.getYear();

		DateFormat formater = new SimpleDateFormat(MONTHYEARFORMATE);

		Calendar beginCalendar = Calendar.getInstance();
		Calendar finishCalendar = Calendar.getInstance();

		beginCalendar.setTime(formater.parse(date1));
		finishCalendar.setTime(formater.parse(date2));
		List<String> datesList = new ArrayList<>();

		while (beginCalendar.before(finishCalendar)) {
			String date = formater.format(beginCalendar.getTime()).toUpperCase();
			beginCalendar.add(Calendar.MONTH, 1);
			datesList.add(date);
		}
		String lastMonth = formater.format(finishCalendar.getTime()).toUpperCase();
		datesList.add(lastMonth);

		Collection<TeamItemMonthlyTarget> monthlyGoldTarget = null;
		Collection<TeamItemMonthlyTarget> monthlyDiamondTarget = null;

		long noOfDaysBetween;

		int teamCount = d2hTeams.size();

		for (Team eachTeam : d2hTeams) {

			if (datesList.size() == 1) {

				Date date10 = new SimpleDateFormat(MONTHYEARFORMATE).parse(datesList.get(0));
				Calendar cal = Calendar.getInstance();
				cal.setTime(date10);
				cal.get(Calendar.MONTH);
				int lastDate = cal.getActualMaximum(Calendar.DATE);
				cal.set(Calendar.DATE, lastDate);
				int lastDay = cal.get(Calendar.DAY_OF_MONTH);

				noOfDaysBetween = ChronoUnit.DAYS.between(localStartDate, localEndDate) + 1;
				String[] splitted = datesList.get(0).split("-");

				monthlyGoldTarget = teamItemMonthlyTargetRepo.findByMonthAndYearAndItemTypeAndTeam(splitted[0],
						splitted[1], "Gold", eachTeam);
				if (!monthlyGoldTarget.isEmpty()) {
					Double totalMonthGoldValue = monthlyGoldTarget.stream().mapToDouble(o -> o.getTicketSize()).sum();
					Double totalGoldTarget = (totalMonthGoldValue / lastDay) * noOfDaysBetween;
					rangeTotalGoldTarget += totalGoldTarget;
				}

				monthlyDiamondTarget = teamItemMonthlyTargetRepo.findByMonthAndYearAndItemTypeAndTeam(splitted[0],
						splitted[1], DIAMONDVALUE, eachTeam);
				if (!monthlyDiamondTarget.isEmpty()) {
					Double totalMonthDiamondValue = monthlyDiamondTarget.stream().mapToDouble(o -> o.getTicketSize())
							.sum();
					Double totalDiamondTarget = (totalMonthDiamondValue / lastDay) * noOfDaysBetween;
					rangeTotalDiamondTarget += totalDiamondTarget;
				}

			} else {
				for (int i = 0; i < datesList.size(); i++) {

					Date date10 = new SimpleDateFormat(MONTHYEARFORMATE).parse(datesList.get(i));
					Calendar cal = Calendar.getInstance();
					cal.setTime(date10);
					cal.get(Calendar.MONTH);
					int month = cal.get(Calendar.MONTH) + 1;
					int lastDate = cal.getActualMaximum(Calendar.DATE);
					cal.set(Calendar.DATE, lastDate);
					int lastDay = cal.get(Calendar.DAY_OF_MONTH);
					String m;
					if (month <= 9) {
						m = "0" + month;
					} else {
						m = String.valueOf(month);
					}
					if (i == 0) {
						String lastDay1 = datesList.get(i).substring(4, 8) + "-" + m + "-" + lastDay;
						LocalDate localLastDay = LocalDate.parse(lastDay1);
						noOfDaysBetween = ChronoUnit.DAYS.between(localStartDate, localLastDay) + 1;
						String[] splitted = datesList.get(i).split("-");

						monthlyGoldTarget = teamItemMonthlyTargetRepo.findByMonthAndYearAndItemTypeAndTeam(splitted[0],
								splitted[1], "Gold", eachTeam);
						if (!monthlyGoldTarget.isEmpty()) {
							Double totalMonthGoldValue = monthlyGoldTarget.stream().mapToDouble(o -> o.getTicketSize())
									.sum();
							Double totalGoldTarget = (totalMonthGoldValue / lastDay) * noOfDaysBetween;
							rangeTotalGoldTarget += totalGoldTarget;
						}

						monthlyDiamondTarget = teamItemMonthlyTargetRepo
								.findByMonthAndYearAndItemTypeAndTeam(splitted[0], splitted[1], DIAMONDVALUE, eachTeam);
						if (!monthlyDiamondTarget.isEmpty()) {
							Double totalMonthDiamondValue = monthlyDiamondTarget.stream()
									.mapToDouble(o -> o.getTicketSize()).sum();
							Double totalDiamondTarget = (totalMonthDiamondValue / lastDay) * noOfDaysBetween;
							rangeTotalDiamondTarget += totalDiamondTarget;
						}

					} else if (i < datesList.size() - 1) {

						String lastDay1 = datesList.get(i).substring(4, 8) + "-" + m + "-" + lastDay;
						String firstDay1 = datesList.get(i).substring(4, 8) + "-" + m + "-" + "01";
						LocalDate localLastDay = LocalDate.parse(lastDay1);
						LocalDate firstDay = LocalDate.parse(firstDay1);
						noOfDaysBetween = ChronoUnit.DAYS.between(firstDay, localLastDay) + 1;
						String[] splitted = datesList.get(i).split("-");
						monthlyGoldTarget = teamItemMonthlyTargetRepo.findByMonthAndYearAndItemTypeAndTeam(splitted[0],
								splitted[1], "Gold", eachTeam);
						if (!monthlyGoldTarget.isEmpty()) {
							Double totalMonthGoldValue = monthlyGoldTarget.stream().mapToDouble(o -> o.getTicketSize())
									.sum();
							Double totalGoldTarget = (totalMonthGoldValue / lastDay) * noOfDaysBetween;
							rangeTotalGoldTarget += totalGoldTarget;
						}

						monthlyDiamondTarget = teamItemMonthlyTargetRepo
								.findByMonthAndYearAndItemTypeAndTeam(splitted[0], splitted[1], DIAMONDVALUE, eachTeam);
						if (!monthlyDiamondTarget.isEmpty()) {
							Double totalMonthDiamondValue = monthlyDiamondTarget.stream()
									.mapToDouble(o -> o.getTicketSize()).sum();
							Double totalDiamondTarget = (totalMonthDiamondValue / lastDay) * noOfDaysBetween;
							rangeTotalDiamondTarget += totalDiamondTarget;
						}

					} else {

						String firstDay1 = datesList.get(i).substring(4, 8) + "-" + m + "-" + "01";
						LocalDate firstday = LocalDate.parse(firstDay1);
						noOfDaysBetween = ChronoUnit.DAYS.between(firstday, localEndDate) + 1;
						String[] splitted = datesList.get(i).split("-");
						monthlyGoldTarget = teamItemMonthlyTargetRepo.findByMonthAndYearAndItemTypeAndTeam(splitted[0],
								splitted[1], "Gold", eachTeam);
						if (!monthlyGoldTarget.isEmpty()) {
							Double totalMonthGoldValue = monthlyGoldTarget.stream().mapToDouble(o -> o.getTicketSize())
									.sum();
							Double totalGoldTarget = (totalMonthGoldValue / lastDay) * noOfDaysBetween;
							rangeTotalGoldTarget += totalGoldTarget;
						}

						monthlyDiamondTarget = teamItemMonthlyTargetRepo
								.findByMonthAndYearAndItemTypeAndTeam(splitted[0], splitted[1], DIAMONDVALUE, eachTeam);
						if (!monthlyDiamondTarget.isEmpty()) {
							Double totalMonthDiamondValue = monthlyDiamondTarget.stream()
									.mapToDouble(o -> o.getTicketSize()).sum();
							Double totalDiamondTarget = (totalMonthDiamondValue / lastDay) * noOfDaysBetween;
							rangeTotalDiamondTarget += totalDiamondTarget;
						}

					}

				}
			}
		}

		response.put(TARGET_GOLD_TICKETSIZE, rangeTotalGoldTarget / teamCount);
		response.put(TARGET_DIAMOND_TICKETSIZE, rangeTotalDiamondTarget / teamCount);

		return response;

	}

	@SuppressWarnings("unchecked")
	@Override
	public ServiceResponse<JSONObject> ticketSizeByD2hClusters(String startDate, String endDate, String state) {
		log.info("Getting ticketsize for all d2h clustersWise");

		ServiceResponse<JSONObject> response = new ServiceResponse<>();

		JSONObject finalObject = new JSONObject();

		JSONObject data = new JSONObject();

		JSONObject actuals = new JSONObject();
		JSONObject targets = new JSONObject();

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

			if (role.getName().equals(ADMIN)) {

				clusters = locationRepo.clusterByStateAndChannel(state, channel);
			} else {

				if (user.getEmpCode() != null) {

					Manager manager = managerRepo.findByEmpId(user.getEmpCode());

					clusters = locationRepo.clusterByStateAndChannelAndManager(state, channel, manager.getId());

				}

			}

			Double totalActualGold = 0.0;
			Double totalActualDiamond = 0.0;
			Double totalActualGoldCount = 0.0;
			Double totalActualDiamondCount = 0.0;

			Double totalTargetGold = 0.0;
			Double totalTargetDiamond = 0.0;

			JSONObject details = new JSONObject();

			List<String> cluster = new ArrayList<>();

			JSONObject actualsDetails = new JSONObject();
			List<Double> actualGold = new ArrayList<>();
			List<Double> actualDiamond = new ArrayList<>();

			JSONObject targetsDetails = new JSONObject();
			List<Double> targetGold = new ArrayList<>();
			List<Double> targetDiamond = new ArrayList<>();

			// Each D2H cluster
			int clusterCount = clusters.size();
			for (Location d2h : clusters) {

				cluster.add(d2h.getCluster());

				List<Location> d2hByState = new ArrayList<>();

				if (role.getName().equals(ADMIN)) {

					d2hByState = locationRepo.findByClusterAndState(d2h.getCluster(), state);
				} else {

					if (user.getEmpCode() != null) {

						Manager manager = managerRepo.findByEmpId(user.getEmpCode());

						d2hByState = locationRepo.findByClusterAndManagerAndState(d2h.getCluster(), manager.getId(),
								state);

					}

				}

				Double goldActual = 0.0;
				Double diamondActual = 0.0;
				Double goldCount = 0.0;
				Double diamondCount = 0.0;

				Double goldTarget = 0.0;
				Double diamondTarget = 0.0;

				int locationcount = d2hByState.size();
				for (Location eachD2h : d2hByState) {

					List<Employee> d2hEmployees = empRepo.findByLocation(eachD2h);

					List<Team> d2hTeams = teamRepo.findByLocation(eachD2h);

					// actuals
					if (!d2hEmployees.isEmpty()) {
						JSONObject actualGoldDiamond = d2hActualGoldDiamondValues(startDate, endDate, d2hEmployees);
						goldActual += (Double) actualGoldDiamond.get(TOTALGOLDVALUE);
						diamondActual += (Double) actualGoldDiamond.get(TOTALDIAMONDVALUE);
						goldCount += (Double) actualGoldDiamond.get(GOLDCOUNT);
						diamondCount += (Double) actualGoldDiamond.get(DIAMONDCOUNT);
					}
					// Targets
					if (!d2hTeams.isEmpty()) {
						JSONObject targetGoldDiamond = d2hTargetGoldDiamondValues(startDate, endDate, d2hTeams);
						goldTarget += (Double) targetGoldDiamond.get(TARGET_GOLD_TICKETSIZE);
						diamondTarget += (Double) targetGoldDiamond.get(TARGET_DIAMOND_TICKETSIZE);
					}

				}
				// targets
				totalTargetGold += (goldTarget / locationcount);
				totalTargetDiamond += (diamondTarget / locationcount);

				targetGold.add(goldTarget / locationcount);
				targetDiamond.add(diamondTarget / locationcount);
				// actuals
				totalActualGold += goldActual;
				totalActualDiamond += diamondActual;
				totalActualGoldCount += goldCount;
				totalActualDiamondCount += diamondCount;

				// calculate ticketsize for each state

				Double totalActualGoldByCluster;
				Double totalActualDiamondByCluster;

				Double goldValueInlakh = goldActual / 100000;
				Double diamondValueInlakh = diamondActual / 100000;

				if (goldValueInlakh == 0.0 || goldCount == 0.0) {

					totalActualGoldByCluster = 0.0;
				} else {

					totalActualGoldByCluster = goldValueInlakh / goldCount;
				}
				if (diamondValueInlakh == 0.0 || diamondCount == 0.0) {

					totalActualDiamondByCluster = 0.0;

				} else {

					totalActualDiamondByCluster = diamondValueInlakh / diamondCount;
				}

				actualGold.add(totalActualGoldByCluster);
				actualDiamond.add(totalActualDiamondByCluster);

			}

			details.put("clusters", cluster);

			// actuals
			actualsDetails.put("gold", actualGold);
			actualsDetails.put(DIAMOND, actualDiamond);
			details.put(ACTUALS, actualsDetails);

			// targets
			targetsDetails.put("gold", targetGold);
			targetsDetails.put(DIAMOND, targetDiamond);
			details.put(TARGETS, targetsDetails);

			data.put(DETAILS, details);

			// calculating total ticketsize
			Double totalActualGoldAllCluster;
			Double totalActualDiamondAllCluster;

			Double goldValueInlakh = totalActualGold / 100000;
			Double diamondValueInlakh = totalActualDiamond / 100000;

			if (goldValueInlakh == 0.0 || totalActualGoldCount == 0.0) {

				totalActualGoldAllCluster = 0.0;
			} else {

				totalActualGoldAllCluster = goldValueInlakh / totalActualGoldCount;
			}
			if (diamondValueInlakh == 0.0 || totalActualDiamondCount == 0.0) {

				totalActualDiamondAllCluster = 0.0;

			} else {

				totalActualDiamondAllCluster = diamondValueInlakh / totalActualDiamondCount;
			}

			actuals.put("gold", totalActualGoldAllCluster);
			actuals.put(DIAMOND, totalActualDiamondAllCluster);

			targets.put("gold", totalTargetGold / clusterCount);
			targets.put(DIAMOND, totalTargetDiamond / clusterCount);

			data.put(ACTUALS, actuals);
			data.put(TARGETS, targets);

			finalObject.put("data", data);
			finalObject.put(FROMDATE, startDate);
			finalObject.put(TODATE, endDate);
			finalObject.put(MESSAGE, SUCCESSFUL);
			finalObject.put(STATUS, HttpServletResponse.SC_OK);

			response.setData(finalObject);

		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.TCUS007.name(), EnumTypeForErrorCodes.TCUS007.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}

		return response;
	}

	@SuppressWarnings("unchecked")
	@Override
	public ServiceResponse<JSONObject> ticketSizeByD2hLocation(String startDate, String endDate, String clusterName,
			String state) {
		log.info("Getting ticketsize for all d2h by locationWise");

		ServiceResponse<JSONObject> response = new ServiceResponse<>();

		JSONObject finalObject = new JSONObject();

		JSONObject data = new JSONObject();

		JSONObject actuals = new JSONObject();
		JSONObject targets = new JSONObject();

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

			if (role.getName().equals(ADMIN)) {

				locations = locationRepo.findByClusterAndState(clusterName, state);
			} else {

				if (user.getEmpCode() != null) {

					Manager manager = managerRepo.findByEmpId(user.getEmpCode());

					locations = locationRepo.findByClusterAndManagerAndState(clusterName, manager.getId(), state);

				}

			}

			Double totalActualGold = 0.0;
			Double totalActualDiamond = 0.0;
			Double totalActualGoldCount = 0.0;
			Double totalActualDiamondCount = 0.0;

			Double totalTargetGold = 0.0;
			Double totalTargetDiamond = 0.0;

			JSONObject details = new JSONObject();

			List<String> location = new ArrayList<>();

			JSONObject actualsDetails = new JSONObject();
			List<Double> actualGold = new ArrayList<>();
			List<Double> actualDiamond = new ArrayList<>();

			JSONObject targetsDetails = new JSONObject();
			List<Double> targetGold = new ArrayList<>();
			List<Double> targetDiamond = new ArrayList<>();

			// Each D2H location
			int locationcount = locations.size();
			for (Location d2h : locations) {

				location.add(d2h.getLocationCode());

				List<Employee> d2hEmployees = empRepo.findByLocation(d2h);

				List<Team> d2hTeams = teamRepo.findByLocation(d2h);

				// actuals
				JSONObject actualGoldDiamond = d2hActualGoldDiamondValues(startDate, endDate, d2hEmployees);

				Double goldActual = (Double) actualGoldDiamond.get(TOTALGOLDVALUE);
				totalActualGold += goldActual;

				Double diamondActual = (Double) actualGoldDiamond.get(TOTALDIAMONDVALUE);
				totalActualDiamond += diamondActual;

				Double goldCount = (Double) actualGoldDiamond.get(GOLDCOUNT);
				totalActualGoldCount += goldCount;

				Double diamondCount = (Double) actualGoldDiamond.get(DIAMONDCOUNT);
				totalActualDiamondCount += diamondCount;

				// Targets
				if (!d2hTeams.isEmpty()) {
					JSONObject targetGoldDiamond = d2hTargetGoldDiamondValues(startDate, endDate, d2hTeams);

					Double goldTarget = (Double) targetGoldDiamond.get(TARGET_GOLD_TICKETSIZE);
					totalTargetGold += goldTarget;

					Double diamondTarget = (Double) targetGoldDiamond.get(TARGET_DIAMOND_TICKETSIZE);
					totalTargetDiamond += diamondTarget;

					targetGold.add(goldTarget);
					targetDiamond.add(diamondTarget);
				}

				// calculate total ticketsize for each location
				Double totalActualGoldByLocation;
				Double totalActualDiamondByLocation;

				Double goldValueInlakh = goldActual / 100000;
				Double diamondValueInlakh = diamondActual / 100000;

				if (goldValueInlakh == 0.0 || goldCount == 0.0) {

					totalActualGoldByLocation = 0.0;
				} else {

					totalActualGoldByLocation = goldValueInlakh / goldCount;
				}
				if (diamondValueInlakh == 0.0 || diamondCount == 0.0) {

					totalActualDiamondByLocation = 0.0;

				} else {

					totalActualDiamondByLocation = diamondValueInlakh / diamondCount;
				}

				actualGold.add(totalActualGoldByLocation);
				actualDiamond.add(totalActualDiamondByLocation);

			}

			details.put("locations", location);

			// actuals
			actualsDetails.put("gold", actualGold);
			actualsDetails.put(DIAMOND, actualDiamond);
			details.put(ACTUALS, actualsDetails);

			// targets
			targetsDetails.put("gold", targetGold);
			targetsDetails.put(DIAMOND, targetDiamond);
			details.put(TARGETS, targetsDetails);

			data.put(DETAILS, details);

			// Calculating total ticketsize
			Double totalActualGoldAllLocations;
			Double totalActualDiamondAllLocations;

			Double goldValueInlakh = totalActualGold / 100000;
			Double diamondValueInlakh = totalActualDiamond / 100000;

			if (goldValueInlakh == 0.0 || totalActualGoldCount == 0.0) {

				totalActualGoldAllLocations = 0.0;
			} else {

				totalActualGoldAllLocations = goldValueInlakh / totalActualGoldCount;
			}
			if (diamondValueInlakh == 0.0 || totalActualDiamondCount == 0.0) {

				totalActualDiamondAllLocations = 0.0;

			} else {

				totalActualDiamondAllLocations = diamondValueInlakh / totalActualDiamondCount;
			}

			actuals.put("gold", totalActualGoldAllLocations);
			actuals.put(DIAMOND, totalActualDiamondAllLocations);

			targets.put("gold", totalTargetGold / locationcount);
			targets.put(DIAMOND, totalTargetDiamond / locationcount);

			data.put(ACTUALS, actuals);
			data.put(TARGETS, targets);

			finalObject.put("data", data);
			finalObject.put(FROMDATE, startDate);
			finalObject.put(TODATE, endDate);
			finalObject.put(MESSAGE, SUCCESSFUL);
			finalObject.put(STATUS, HttpServletResponse.SC_OK);

			response.setData(finalObject);

		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.TCUS008.name(), EnumTypeForErrorCodes.TCUS008.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}

		return response;

	}

	@SuppressWarnings("unchecked")
	@Override
	public ServiceResponse<JSONObject> ticketSizeByD2hTeam(String startDate, String endDate, String locationCode) {
		log.info("Getting ticketsize for all d2h by teamWise");

		ServiceResponse<JSONObject> response = new ServiceResponse<>();

		JSONObject finalObject = new JSONObject();

		JSONObject data = new JSONObject();

		JSONObject actuals = new JSONObject();
		JSONObject targets = new JSONObject();

		try {

			Location location = locationRepo.findByLocationCode(locationCode);
			List<Team> teamByLocation = teamRepo.findByLocation(location);

			Double totalActualGold = 0.0;
			Double totalActualDiamond = 0.0;
			Double totalActualGoldCount = 0.0;
			Double totalActualDiamondCount = 0.0;

			Double totalTargetGold = 0.0;
			Double totalTargetDiamond = 0.0;

			JSONObject details = new JSONObject();

			List<String> team = new ArrayList<>();

			JSONObject actualsDetails = new JSONObject();
			List<Double> actualGold = new ArrayList<>();
			List<Double> actualDiamond = new ArrayList<>();

			JSONObject targetsDetails = new JSONObject();
			List<Double> targetGold = new ArrayList<>();
			List<Double> targetDiamond = new ArrayList<>();

			// Each D2H team
			int teamCount = teamByLocation.size();
			for (Team d2hTeam : teamByLocation) {

				team.add("Team " + d2hTeam.getTeamNum());

				Set<Employee> employee = d2hTeam.getEmp();
				// converting set to list
				List<Employee> employeeList = new ArrayList<>();
				for (Employee emp : employee) {
					employeeList.add(emp);
				}

				List<Team> d2hTeams = new ArrayList<>();

				d2hTeams.add(d2hTeam);

				// actuals
				JSONObject actualGoldDiamond = d2hActualGoldDiamondValues(startDate, endDate, employeeList);

				Double goldActual = (Double) actualGoldDiamond.get(TOTALGOLDVALUE);
				totalActualGold += goldActual;

				Double diamondActual = (Double) actualGoldDiamond.get(TOTALDIAMONDVALUE);
				totalActualDiamond += diamondActual;

				Double goldCount = (Double) actualGoldDiamond.get(GOLDCOUNT);
				totalActualGoldCount += goldCount;

				Double diamondCount = (Double) actualGoldDiamond.get(DIAMONDCOUNT);
				totalActualDiamondCount += diamondCount;

				// Targets
				JSONObject targetGoldDiamond = d2hTargetGoldDiamondValues(startDate, endDate, d2hTeams);

				Double goldTarget = (Double) targetGoldDiamond.get(TARGET_GOLD_TICKETSIZE);
				totalTargetGold += goldTarget;

				Double diamondTarget = (Double) targetGoldDiamond.get(TARGET_DIAMOND_TICKETSIZE);
				totalTargetDiamond += diamondTarget;

				targetGold.add(goldTarget);
				targetDiamond.add(diamondTarget);

				// calculate total ticketsize for each team

				Double totalActualGoldByTeam;
				Double totalActualDiamondByTeam;

				Double goldValueInlakh = goldActual / 100000;
				Double diamondValueInlakh = diamondActual / 100000;

				if (goldValueInlakh == 0.0 || goldCount == 0.0) {

					totalActualGoldByTeam = 0.0;
				} else {

					totalActualGoldByTeam = goldValueInlakh / goldCount;
				}
				if (diamondValueInlakh == 0.0 || diamondCount == 0.0) {

					totalActualDiamondByTeam = 0.0;

				} else {

					totalActualDiamondByTeam = diamondValueInlakh / diamondCount;
				}

				actualGold.add(totalActualGoldByTeam);
				actualDiamond.add(totalActualDiamondByTeam);

			}

			details.put("teams", team);

			// actuals
			actualsDetails.put("gold", actualGold);
			actualsDetails.put(DIAMOND, actualDiamond);
			details.put(ACTUALS, actualsDetails);

			// targets
			targetsDetails.put("gold", targetGold);
			targetsDetails.put(DIAMOND, targetDiamond);
			details.put(TARGETS, targetsDetails);

			data.put(DETAILS, details);

			// calculating total ticketsize

			Double totalActualGoldAllTeams;
			Double totalActualDiamondAllTeams;

			Double goldValueInlakh = totalActualGold / 100000;
			Double diamondValueInlakh = totalActualDiamond / 100000;

			if (goldValueInlakh == 0.0 || totalActualGoldCount == 0.0) {

				totalActualGoldAllTeams = 0.0;
			} else {

				totalActualGoldAllTeams = goldValueInlakh / totalActualGoldCount;
			}
			if (diamondValueInlakh == 0.0 || totalActualDiamondCount == 0.0) {

				totalActualDiamondAllTeams = 0.0;

			} else {

				totalActualDiamondAllTeams = diamondValueInlakh / totalActualDiamondCount;
			}

			actuals.put("gold", totalActualGoldAllTeams);
			actuals.put(DIAMOND, totalActualDiamondAllTeams);

			targets.put("gold", totalTargetGold / teamCount);
			targets.put(DIAMOND, totalTargetDiamond / teamCount);

			data.put(ACTUALS, actuals);
			data.put(TARGETS, targets);

			finalObject.put("data", data);
			finalObject.put(FROMDATE, startDate);
			finalObject.put(TODATE, endDate);
			finalObject.put(MESSAGE, SUCCESSFUL);
			finalObject.put(STATUS, HttpServletResponse.SC_OK);

			response.setData(finalObject);

		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.TCUS009.name(), EnumTypeForErrorCodes.TCUS009.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}

		return response;
	}

}

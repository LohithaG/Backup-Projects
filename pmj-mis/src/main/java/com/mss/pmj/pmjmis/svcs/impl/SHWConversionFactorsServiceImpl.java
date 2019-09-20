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
import com.mss.pmj.pmjmis.domain.User;
import com.mss.pmj.pmjmis.model.ServiceResponse;
import com.mss.pmj.pmjmis.repos.ChannelRepository;
import com.mss.pmj.pmjmis.repos.EmpDailyActualsRepository;
import com.mss.pmj.pmjmis.repos.EmployeeItemMonthlyTargetRepository;
import com.mss.pmj.pmjmis.repos.EmployeeRepository;
import com.mss.pmj.pmjmis.repos.LocationRepository;
import com.mss.pmj.pmjmis.repos.ManagerRepository;
import com.mss.pmj.pmjmis.repos.TeamItemMonthlyTargetRepository;
import com.mss.pmj.pmjmis.repos.UserRepository;
import com.mss.pmj.pmjmis.response.ConversionActuals;
import com.mss.pmj.pmjmis.response.ConversionFactorDiamond;
import com.mss.pmj.pmjmis.response.ConversionFactorGold;
import com.mss.pmj.pmjmis.response.ConversionFactorWalkins;
import com.mss.pmj.pmjmis.response.Dates;
import com.mss.pmj.pmjmis.response.SHWConversionFactorData;
import com.mss.pmj.pmjmis.response.SHWConversionFactorDetails;
import com.mss.pmj.pmjmis.response.TargetVsActualResponse;
import com.mss.pmj.pmjmis.svcs.ConversionFactorsService;

@RestController
public class SHWConversionFactorsServiceImpl implements ConversionFactorsService {

	private static Logger log = LoggerFactory.getLogger(SHWConversionFactorsServiceImpl.class);

	@Autowired
	private Utils utils;
	
	@Autowired
	private EmployeeItemMonthlyTargetRepository empItemMonthlyTargetRepo;

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
	private UserRepository userRepo;

	@Autowired
	private ManagerRepository managerRepo;

	private String targetGoldConversion = "targetGoldConversion";

	private String targetDiamondConversion = "targetDiamondConversion";

	private String actualDiamondConversionFactor = "actualDiamondConversionFactor";

	private String actualGoldConversionFactor = "actualGoldConversionFactor";

	private String totalGoldWalkins = "totalGoldWalkinCount";

	private String totalDiamondWalkins = "totalDiamondWalkinCount";

	private String totalDiamondPreferredWalkins = "totalDiamondPreferredWalkinCount";

	private String totalGoldPreferredWalkins = "totalGoldPreferredWalkinCount";

	private String monthYearFormat = "MMM-yyyy";

	private String diamondType = "Diamond";

	private String successMessage = "successful";

	private String timelineKey = "timeline";

	private String actualsKey = "actuals";

	private String targetsKey = "targets";

	private String goldTotalwalkinsKey = "goldTotalwalkins";

	private String goldPreferredwalkinsKey = "goldPreferredwalkins";

	private String diamondTotalwalkinsKey = "diamondTotalwalkins";

	private String diamondPreferredwalkinsKey = "diamondPreferredwalkins";

	private String totalWalkinsKey = "totalWalkins";

	private String preferredWalkinsKey = "preferredWalkins";

	private String walkinsKey = "walkins";

	private String employeeDetailsKey = "employeeDetails";

	private String detailsKey = "details";

	private String fromDate = "fromDate";

	private String toDate = "toDate";

	private String message = "message";

	private String status = "status";

	@Override
	public TargetVsActualResponse<SHWConversionFactorData> conversionFactorsByAllShowrooms(String startDate,
			String endDate) {

		log.info("Getting conversion factors for all showrooms");

		TargetVsActualResponse<SHWConversionFactorData> response = new TargetVsActualResponse<>();

		SHWConversionFactorData conversiondata = new SHWConversionFactorData();

		SHWConversionFactorDetails conversionDetails = new SHWConversionFactorDetails();

		ConversionActuals actuals = new ConversionActuals();

		ConversionActuals targets = new ConversionActuals();

		ConversionFactorWalkins walkins = new ConversionFactorWalkins();

		try {

			Channel chaneel = channelRepo.findByChannelName("SHW");

			Double totalTargetGold = 0.0;
			Double totalTargetDiamond = 0.0;

			List<String> locations = new ArrayList<>();
			List<Double> actualGold = new ArrayList<>();
			List<Double> actualDiamond = new ArrayList<>();

			List<Double> actualGoldTotalWalkins = new ArrayList<>();
			List<Double> actualGoldPrefferedWalkins = new ArrayList<>();

			List<Double> actualDiamondTotalWalkins = new ArrayList<>();
			List<Double> actualDiamondPrefferedWalkins = new ArrayList<>();

			List<Double> targetGold = new ArrayList<>();
			List<Double> targetDiamond = new ArrayList<>();
			ConversionFactorGold goldWalkins = new ConversionFactorGold();
			ConversionFactorDiamond diamondWalkins = new ConversionFactorDiamond();

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

			if (role.getName().equals("ADMIN")) {

				showroomLocation = locationRepo.findByChannel(chaneel);

			} else {

				if (user.getEmpCode() != null) {

					Manager manager = managerRepo.findByEmpId(user.getEmpCode());

					Set<Location> locationList = manager.getLocation();

					for (Location location : locationList) {

						showroomLocation.add(location);
					}
				}
			}
			// Each showroom
			for (Location showroom : showroomLocation) {

				List<Employee> showroomEmployee = empRepo.findByLocation(showroom);

				locations.add(showroom.getLocationCode());

				// Targets
				JSONObject targetGoldDiamond = targetGoldDiamondValues(startDate, endDate, showroomEmployee);

				Double goldTarget = (Double) targetGoldDiamond.get(targetGoldConversion);
				totalTargetGold += goldTarget;

				targetGold.add(goldTarget);

				Double diamondTarget = (Double) targetGoldDiamond.get(targetDiamondConversion);
				totalTargetDiamond += diamondTarget;

				targetDiamond.add(diamondTarget);

				// actuals
				JSONObject actualGoldDiamond = actualGoldDiamondValues(startDate, endDate, showroomEmployee);

				Double gold = (Double) actualGoldDiamond.get(actualGoldConversionFactor);

				Double goldTotalwalkins = (Double) actualGoldDiamond.get(totalGoldWalkins);

				Double goldPrefferedWalkins = (Double) actualGoldDiamond.get(totalGoldPreferredWalkins);

				actualGold.add(gold);

				actualGoldTotalWalkins.add(goldTotalwalkins);

				actualGoldPrefferedWalkins.add(goldPrefferedWalkins);

				Double diamond = (Double) actualGoldDiamond.get(actualDiamondConversionFactor);

				Double diamondTotalwalkins = (Double) actualGoldDiamond.get(totalDiamondWalkins);

				Double diamondPrefferedWalkins = (Double) actualGoldDiamond.get(totalDiamondPreferredWalkins);

				actualDiamondTotalWalkins.add(diamondTotalwalkins);
				actualDiamondPrefferedWalkins.add(diamondPrefferedWalkins);

				actualDiamond.add(diamond);

			}
			double allLocationsGoldTotalWalkins = actualGoldTotalWalkins.stream().mapToDouble(f -> f.doubleValue())
					.sum();
			double allLocationsGoldPrefferedWalkins = actualGoldPrefferedWalkins.stream()
					.mapToDouble(f -> f.doubleValue()).sum();
			double allLocationsDiaTotalWalkins = actualDiamondTotalWalkins.stream().mapToDouble(f -> f.doubleValue())
					.sum();
			double allLocationsDiaPrefferedWalkins = actualDiamondPrefferedWalkins.stream()
					.mapToDouble(f -> f.doubleValue()).sum();
			goldWalkins.setTotalWalkins(actualGoldTotalWalkins);
			goldWalkins.setPreferredWalkins(actualGoldPrefferedWalkins);
			diamondWalkins.setTotalWalkins(actualDiamondTotalWalkins);
			diamondWalkins.setPreferredWalkins(actualDiamondPrefferedWalkins);
			targets.setGold(targetGold.toArray(new Double[targetGold.size()]));
			targets.setDiamond(targetDiamond.toArray(new Double[targetDiamond.size()]));
			actuals.setGold(actualGold.toArray(new Double[actualGold.size()]));
			actuals.setDiamond(actualDiamond.toArray(new Double[actualDiamond.size()]));
			walkins.setGold(goldWalkins);
			walkins.setDiamond(diamondWalkins);
			conversionDetails.setLocations(locations.toArray(new String[locations.size()]));
			conversionDetails.setTargets(targets);
			conversionDetails.setActuals(actuals);
			conversionDetails.setWalkins(walkins);

			conversiondata.setGoldTotalwalkins(allLocationsGoldTotalWalkins);
			conversiondata.setGoldPreferredwalkins(allLocationsGoldPrefferedWalkins);
			conversiondata.setDiamondTotalwalkins(allLocationsDiaTotalWalkins);
			conversiondata.setDiamondPreferredwalkins(allLocationsDiaPrefferedWalkins);
			conversiondata.setDetails(conversionDetails);
			response.setData(conversiondata);
			response.setFromDate(startDate);
			response.setToDate(endDate);
			response.setMessage(successMessage);
			response.setStatus(HttpServletResponse.SC_OK);

		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.CFS001.name(), EnumTypeForErrorCodes.CFS001.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}
		return response;
	}

	public JSONObject targetGoldDiamondValues(String startDate, String endDate, List<Employee> locationwiseEmployees)
			throws ParseException {

		log.info("calculating conversion for showroom employee targets");

		JSONObject response = new JSONObject();

		Double rangeTotalGoldTarget = 0.0;
		Double rangeTotalDiamondTarget = 0.0;

		LocalDate localStartDate = LocalDate.parse(startDate);
		LocalDate localEndDate = LocalDate.parse(endDate);

		String date1 = localStartDate.getMonth() + "-" + localStartDate.getYear();
		String date2 = localEndDate.getMonth() + "-" + localEndDate.getYear();

		DateFormat formater = new SimpleDateFormat(monthYearFormat);

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

		for (Employee employee : locationwiseEmployees) {

			if (datesList.size() == 1) {

				Date date10 = new SimpleDateFormat(monthYearFormat).parse(datesList.get(0));
				Calendar cal = Calendar.getInstance();
				cal.setTime(date10);
				cal.get(Calendar.MONTH);
				int lastDate = cal.getActualMaximum(Calendar.DATE);
				cal.set(Calendar.DATE, lastDate);
				monthlyGoldTarget = empItemMonthlyTargetRepo.findByTgtMonthAndItemTypeAndEmp(datesList.get(0), "Gold",
						employee);
				if (!monthlyGoldTarget.isEmpty()) {
					Double totalGoldTarget = monthlyGoldTarget.stream().mapToDouble(o -> o.getConversion()).sum();
					rangeTotalGoldTarget += totalGoldTarget / (locationwiseEmployees.size() * datesList.size());
				}
				monthlyDiamondTarget = empItemMonthlyTargetRepo.findByTgtMonthAndItemTypeAndEmp(datesList.get(0),
						diamondType, employee);
				if (!monthlyDiamondTarget.isEmpty()) {
					Double totalDiamondTarget = monthlyDiamondTarget.stream().mapToDouble(o -> o.getConversion()).sum();
					rangeTotalDiamondTarget += totalDiamondTarget / (locationwiseEmployees.size() * datesList.size());
				}

			} else {
				for (int i = 0; i < datesList.size(); i++) {

					Date date10 = new SimpleDateFormat(monthYearFormat).parse(datesList.get(i));
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
						monthlyGoldTarget = empItemMonthlyTargetRepo.findByTgtMonthAndItemTypeAndEmp(datesList.get(i),
								"Gold", employee);
						if (!monthlyGoldTarget.isEmpty()) {
							Double totalGoldTarget = monthlyGoldTarget.stream().mapToDouble(o -> o.getConversion())
									.sum();
							rangeTotalGoldTarget += totalGoldTarget / (locationwiseEmployees.size() * datesList.size());
						}
						monthlyDiamondTarget = empItemMonthlyTargetRepo
								.findByTgtMonthAndItemTypeAndEmp(datesList.get(i), diamondType, employee);
						if (!monthlyDiamondTarget.isEmpty()) {
							Double totalDiamondTarget = monthlyDiamondTarget.stream()
									.mapToDouble(o -> o.getConversion()).sum();
							rangeTotalDiamondTarget += totalDiamondTarget
									/ (locationwiseEmployees.size() * datesList.size());
						}
					} else if (i < datesList.size() - 1) {

						String lastDay1 = datesList.get(i).substring(4, 8) + "-" + m + "-" + lastDay;
						monthlyGoldTarget = empItemMonthlyTargetRepo.findByTgtMonthAndItemTypeAndEmp(datesList.get(i),
								"Gold", employee);
						if (!monthlyGoldTarget.isEmpty()) {
							Double totalGoldTarget = monthlyGoldTarget.stream().mapToDouble(o -> o.getConversion())
									.sum();
							rangeTotalGoldTarget += totalGoldTarget / (locationwiseEmployees.size() * datesList.size());
						}

						monthlyDiamondTarget = empItemMonthlyTargetRepo
								.findByTgtMonthAndItemTypeAndEmp(datesList.get(i), diamondType, employee);
						if (!monthlyDiamondTarget.isEmpty()) {
							Double totalDiamondTarget = monthlyDiamondTarget.stream()
									.mapToDouble(o -> o.getConversion()).sum();
							rangeTotalDiamondTarget += totalDiamondTarget
									/ (locationwiseEmployees.size() * datesList.size());
						}
					} else {
						String firstDay1 = datesList.get(i).substring(4, 8) + "-" + m + "-" + "01";
						monthlyGoldTarget = empItemMonthlyTargetRepo.findByTgtMonthAndItemTypeAndEmp(datesList.get(i),
								"Gold", employee);
						if (!monthlyGoldTarget.isEmpty()) {
							Double totalGoldTarget = monthlyGoldTarget.stream().mapToDouble(o -> o.getConversion())
									.sum();
							rangeTotalGoldTarget += totalGoldTarget / (locationwiseEmployees.size() * datesList.size());
						}

						monthlyDiamondTarget = empItemMonthlyTargetRepo
								.findByTgtMonthAndItemTypeAndEmp(datesList.get(i), diamondType, employee);
						if (!monthlyDiamondTarget.isEmpty()) {
							Double totalDiamondTarget = monthlyDiamondTarget.stream()
									.mapToDouble(o -> o.getConversion()).sum();
							rangeTotalDiamondTarget += totalDiamondTarget
									/ (locationwiseEmployees.size() * datesList.size());
						}
					}
				}
			}
		}
		response.put(targetGoldConversion, rangeTotalGoldTarget);
		response.put(targetDiamondConversion, rangeTotalDiamondTarget);
		return response;
	}

	private JSONObject actualGoldDiamondValues(String startDate, String endDate, List<Employee> showroomEmployee) {

		log.info("calculating conversion for showroom employee actuals");

		JSONObject actualConversion = new JSONObject();

		Double totalGoldWalkinCount = 0.0;
		Double totalDiamondWalkinCount = 0.0;

		Double totalGoldPreferredWalkinCount = 0.0;
		Double totalDiamondPreferredWalkinCount = 0.0;

		for (Employee employee : showroomEmployee) {

			// gold
			List<EmpDailyActuals> goldSales = empDailyActualsRepo
					.findByStartDateAndEndDateAndItemTypeAndEmpId(startDate, endDate, "Gold", employee);
			double goldPreferredWalkins = goldSales.stream().filter(node -> node.getSale().equals(true)).count();
			double goldTotalWalkins = goldSales.size();

			totalGoldWalkinCount += goldTotalWalkins;
			totalGoldPreferredWalkinCount += goldPreferredWalkins;

			// diamond
			List<EmpDailyActuals> diamondSales = empDailyActualsRepo
					.findByStartDateAndEndDateAndItemTypeAndEmpId(startDate, endDate, diamondType, employee);
			double diamondPreferredWalkins = diamondSales.stream().filter(node -> node.getSale().equals(true)).count();
			double diamondTotalWalkins = diamondSales.size();

			totalDiamondWalkinCount += diamondTotalWalkins;
			totalDiamondPreferredWalkinCount += diamondPreferredWalkins;

		}
		actualConversion.put(totalGoldWalkins, totalGoldWalkinCount);
		actualConversion.put(totalDiamondWalkins, totalDiamondWalkinCount);
		actualConversion.put(totalGoldPreferredWalkins, totalGoldPreferredWalkinCount);
		actualConversion.put(totalDiamondPreferredWalkins, totalDiamondPreferredWalkinCount);

		if (totalGoldPreferredWalkinCount == 0.0 || totalGoldWalkinCount == 0.0) {

			actualConversion.put(actualGoldConversionFactor, 0.0);
		} else {

			Double actualGoldConversion = (totalGoldPreferredWalkinCount / totalGoldWalkinCount) * 100;
			actualConversion.put(actualGoldConversionFactor, actualGoldConversion);
		}
		if (totalDiamondPreferredWalkinCount == 0.0 || totalDiamondWalkinCount == 0.0) {
			actualConversion.put(actualDiamondConversionFactor, 0.0);
		} else {
			Double actualDiamondConversion = (totalDiamondPreferredWalkinCount / totalDiamondWalkinCount) * 100;
			actualConversion.put(actualDiamondConversionFactor, actualDiamondConversion);
		}
		return actualConversion;
	}

	@Override
	public ServiceResponse<JSONObject> conversionFactorsByShowroomLocation(String startDate, String endDate,
			String locationCode) {

		log.info("Getting conversion factors by showroom location");

		ServiceResponse<JSONObject> response = new ServiceResponse<>();
		try {

			LocalDate localStartDate = LocalDate.parse(startDate);
			LocalDate localEndDate = LocalDate.parse(endDate);

			long betweenDays = ChronoUnit.DAYS.between(localStartDate, localEndDate);

			if (betweenDays < 15) {
				// daywise
				response = getConversionFactorsByDay(startDate, endDate, locationCode);
			} else if (betweenDays >= 15 && betweenDays <= 60) {
				// week wise
				response = getConversionFactorsByWeek(startDate, endDate, locationCode);
			} else { // month wise
				response = getConversionFactorsByMonth(startDate, endDate, locationCode);
			}
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.CFS002.name(), EnumTypeForErrorCodes.CFS002.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}
		return response;
	}

	/*
	 * getTicketSizeByMonth method
	 */
	private ServiceResponse<JSONObject> getConversionFactorsByMonth(String startDate, String endDate,
			String locationCode) {

		log.info("getting conversion factors for showroom location By monthwise");

		ServiceResponse<JSONObject> response = new ServiceResponse<>();

		JSONObject finalObject = new JSONObject();

		JSONObject data = new JSONObject();

		JSONObject goldWalkins = new JSONObject();
		JSONObject diamondWalkins = new JSONObject();
		JSONObject walkins = new JSONObject();

		try {

			Location showroomLocation = locationRepo.findByLocationCode(locationCode);

			Double totalTargetGold = 0.0;
			Double totalTargetDiamond = 0.0;

			JSONObject details = new JSONObject();

			List<String> timeLine = new ArrayList<>();

			JSONObject actualsDetails = new JSONObject();

			List<Double> actualGold = new ArrayList<>();
			List<Double> actualDiamond = new ArrayList<>();

			JSONObject targetsDetails = new JSONObject();

			List<Double> targetGold = new ArrayList<>();
			List<Double> targetDiamond = new ArrayList<>();
			List<Double> actualGoldTotalWalkins = new ArrayList<>();
			List<Double> actualGoldPrefferedWalkins = new ArrayList<>();
			List<Double> actualDiamondTotalWalkins = new ArrayList<>();
			List<Double> actualDiamondPrefferedWalkins = new ArrayList<>();

			List<Employee> showroomEmployee = empRepo.findByLocation(showroomLocation);

			LocalDate localStartDate = LocalDate.parse(startDate);
			LocalDate localEndDate = LocalDate.parse(endDate);

			String date1 = localStartDate.getMonth() + "-" + localStartDate.getYear();
			String date2 = localEndDate.getMonth() + "-" + localEndDate.getYear();

			List<String> datesList = new ArrayList<>();

			DateFormat formater = new SimpleDateFormat(monthYearFormat);
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
			for (int i = 0; i < datesList.size(); i++) {

				String monthStart = null;
				String monthEnd = null;

				timeLine.add(datesList.get(i));

				if (i == 0) {

					if (date1.equals(date2)) {

						monthStart = startDate;
						monthEnd = endDate;

					} else {

						Date date = new SimpleDateFormat(monthYearFormat).parse(datesList.get(i));
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
					Date date = new SimpleDateFormat(monthYearFormat).parse(datesList.get(i));
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
					Date date = new SimpleDateFormat(monthYearFormat).parse(datesList.get(i));
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
				// Targets
				JSONObject targetGoldDiamond = targetGoldDiamondValues(monthStart, monthEnd, showroomEmployee);

				Double goldTarget = (Double) targetGoldDiamond.get(targetGoldConversion);
				totalTargetGold += goldTarget;

				targetGold.add(goldTarget);

				Double diamondTarget = (Double) targetGoldDiamond.get(targetDiamondConversion);
				totalTargetDiamond += diamondTarget;

				targetDiamond.add(diamondTarget);

				// Actuals

				JSONObject actualGoldDiamond = actualGoldDiamondValues(monthStart, monthEnd, showroomEmployee);

				Double gold = (Double) actualGoldDiamond.get(actualGoldConversionFactor);

				Double goldTotalwalkins = (Double) actualGoldDiamond.get(totalGoldWalkins);

				Double goldPrefferedWalkins = (Double) actualGoldDiamond.get(totalGoldPreferredWalkins);

				actualGoldTotalWalkins.add(goldTotalwalkins);

				actualGoldPrefferedWalkins.add(goldPrefferedWalkins);

				actualGold.add(gold);

				Double diamond = (Double) actualGoldDiamond.get(actualDiamondConversionFactor);

				Double diamondTotalwalkins = (Double) actualGoldDiamond.get(totalDiamondWalkins);

				Double diamondPrefferedWalkins = (Double) actualGoldDiamond.get(totalDiamondPreferredWalkins);

				actualDiamondTotalWalkins.add(diamondTotalwalkins);

				actualDiamondPrefferedWalkins.add(diamondPrefferedWalkins);

				actualDiamond.add(diamond);
			}
			details.put(timelineKey, timeLine);

			// actuals
			actualsDetails.put("gold", actualGold);
			actualsDetails.put(diamondType, actualDiamond);
			details.put(actualsKey, actualsDetails);

			// targets
			targetsDetails.put("gold", targetGold);
			targetsDetails.put(diamondType, targetDiamond);
			details.put(targetsKey, targetsDetails);

			goldWalkins.put(totalWalkinsKey, actualGoldTotalWalkins);
			goldWalkins.put(preferredWalkinsKey, actualGoldPrefferedWalkins);
			diamondWalkins.put(totalWalkinsKey, actualDiamondTotalWalkins);
			diamondWalkins.put(preferredWalkinsKey, actualDiamondPrefferedWalkins);

			walkins.put("gold", goldWalkins);
			walkins.put(diamondType, diamondWalkins);

			details.put(walkinsKey, walkins);

			// employee wise
			ServiceResponse<JSONObject> employeeDetails = conversionFactorShowroomEmployee(startDate, endDate,
					locationCode);

			JSONObject jsonobject = (JSONObject) employeeDetails.getData().get(walkinsKey);
			JSONObject goldJsonobject = (JSONObject) jsonobject.get("gold");
			JSONObject diaJsonobject = (JSONObject) jsonobject.get(diamondType);

			ArrayList<Double> goldTotalWalkinsArray = (ArrayList<Double>) goldJsonobject.get(totalWalkinsKey);
			double goldTotalWalkins = goldTotalWalkinsArray.stream().mapToDouble(f -> f.doubleValue()).sum();
			ArrayList<Double> goldPrefferedWalkinsArray = (ArrayList<Double>) goldJsonobject.get(preferredWalkinsKey);
			double goldPrefferedWalkins = goldPrefferedWalkinsArray.stream().mapToDouble(f -> f.doubleValue()).sum();
			ArrayList<Double> diaTotalWalkinsArray = (ArrayList<Double>) diaJsonobject.get(totalWalkinsKey);
			double diamondTotalWalkins = diaTotalWalkinsArray.stream().mapToDouble(f -> f.doubleValue()).sum();
			ArrayList<Double> diaPrefferedWalkinsArray = (ArrayList<Double>) diaJsonobject.get(preferredWalkinsKey);
			double diamondPrefferedWalkins = diaPrefferedWalkinsArray.stream().mapToDouble(f -> f.doubleValue()).sum();

			data.put(goldTotalwalkinsKey, goldTotalWalkins);
			data.put(goldPreferredwalkinsKey, goldPrefferedWalkins);
			data.put(diamondTotalwalkinsKey, diamondTotalWalkins);
			data.put(diamondPreferredwalkinsKey, diamondPrefferedWalkins);
			data.put(employeeDetailsKey, employeeDetails.getData());
			data.put(detailsKey, details);
			finalObject.put("data", data);
			finalObject.put(fromDate, startDate);
			finalObject.put(toDate, endDate);
			finalObject.put(message, successMessage);
			finalObject.put(status, HttpServletResponse.SC_OK);

			response.setData(finalObject);

		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.CFS005.name(), EnumTypeForErrorCodes.CFS005.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}
		return response;
	}

	/*
	 * getConversionFactorsByDay method
	 * 
	 */
	@SuppressWarnings("unchecked")
	public ServiceResponse<JSONObject> getConversionFactorsByDay(String startDate, String endDate,
			String locationCode) {

		log.info("getting conversion factors for showroom location By daywise");

		ServiceResponse<JSONObject> response = new ServiceResponse<>();

		JSONObject finalObject = new JSONObject();

		JSONObject data = new JSONObject();
		JSONObject goldWalkins = new JSONObject();
		JSONObject diamondWalkins = new JSONObject();
		JSONObject walkins = new JSONObject();

		try {

			Location showroomLocation = locationRepo.findByLocationCode(locationCode);

			Double totalTargetGold = 0.0;
			Double totalTargetDiamond = 0.0;

			JSONObject details = new JSONObject();

			List<String> timeLine = new ArrayList<>();

			JSONObject actualsDetails = new JSONObject();
			List<Double> actualGold = new ArrayList<>();
			List<Double> actualDiamond = new ArrayList<>();

			List<Double> actualGoldTotalWalkins = new ArrayList<>();
			List<Double> actualGoldPrefferedWalkins = new ArrayList<>();
			List<Double> actualDiamondTotalWalkins = new ArrayList<>();
			List<Double> actualDiamondPrefferedWalkins = new ArrayList<>();

			JSONObject targetsDetails = new JSONObject();
			List<Double> targetGold = new ArrayList<>();
			List<Double> targetDiamond = new ArrayList<>();

			List<Employee> showroomEmployee = empRepo.findByLocation(showroomLocation);

			LocalDate localStartDate = LocalDate.parse(startDate);
			LocalDate localEndDate = LocalDate.parse(endDate);

			// By each day
			for (LocalDate date = localStartDate; date.isBefore(localEndDate.plusDays(1)); date = date.plusDays(1)) {

				final String DATE_FORMATTER = "dd-MM-yyyy";

				DateTimeFormatter formatter = DateTimeFormatter.ofPattern(DATE_FORMATTER);
				String formatDateTime = date.format(formatter);

				timeLine.add(formatDateTime);

				String eachDay = date.toString();

				// actuals
				JSONObject actualGoldDiamond = actualGoldDiamondValues(eachDay, eachDay, showroomEmployee);

				Double gold = (Double) actualGoldDiamond.get(actualGoldConversionFactor);

				Double goldTotalwalkins = (Double) actualGoldDiamond.get(totalGoldWalkins);

				Double goldPrefferedWalkins = (Double) actualGoldDiamond.get(totalGoldPreferredWalkins);

				actualGoldTotalWalkins.add(goldTotalwalkins);

				actualGoldPrefferedWalkins.add(goldPrefferedWalkins);

				actualGold.add(gold);

				Double diamond = (Double) actualGoldDiamond.get(actualDiamondConversionFactor);

				Double diamondTotalwalkins = (Double) actualGoldDiamond.get(totalDiamondWalkins);

				Double diamondPrefferedWalkins = (Double) actualGoldDiamond.get(totalDiamondPreferredWalkins);

				actualDiamondTotalWalkins.add(diamondTotalwalkins);

				actualDiamondPrefferedWalkins.add(diamondPrefferedWalkins);

				actualDiamond.add(diamond);

				// Targets
				JSONObject targetGoldDiamond = targetGoldDiamondValues(eachDay, eachDay, showroomEmployee);

				Double goldTarget = (Double) targetGoldDiamond.get(targetGoldConversion);
				totalTargetGold += goldTarget;

				targetGold.add(goldTarget);

				Double diamondTarget = (Double) targetGoldDiamond.get(targetDiamondConversion);
				totalTargetDiamond += diamondTarget;

				targetDiamond.add(diamondTarget);
			}

			details.put(timelineKey, timeLine);

			// actuals
			actualsDetails.put("gold", actualGold);
			actualsDetails.put(diamondType, actualDiamond);
			details.put(actualsKey, actualsDetails);

			// targets
			targetsDetails.put("gold", targetGold);
			targetsDetails.put(diamondType, targetDiamond);
			details.put(targetsKey, targetsDetails);

			goldWalkins.put(totalWalkinsKey, actualGoldTotalWalkins);
			goldWalkins.put(preferredWalkinsKey, actualGoldPrefferedWalkins);
			diamondWalkins.put(totalWalkinsKey, actualDiamondTotalWalkins);
			diamondWalkins.put(preferredWalkinsKey, actualDiamondPrefferedWalkins);

			walkins.put("gold", goldWalkins);
			walkins.put(diamondType, diamondWalkins);

			details.put(walkinsKey, walkins);

			// employee wise
			ServiceResponse<JSONObject> employeeDetails = conversionFactorShowroomEmployee(startDate, endDate,
					locationCode);

			data.put(employeeDetailsKey, employeeDetails.getData());

			double goldTotalWalkins = actualGoldTotalWalkins.stream().mapToDouble(f -> f.doubleValue()).sum();

			double goldPrefferedWalkins = actualGoldPrefferedWalkins.stream().mapToDouble(f -> f.doubleValue()).sum();

			double diamondTotalWalkins = actualDiamondTotalWalkins.stream().mapToDouble(f -> f.doubleValue()).sum();

			double diamondPrefferedWalkins = actualDiamondPrefferedWalkins.stream().mapToDouble(f -> f.doubleValue())
					.sum();

			data.put(goldTotalwalkinsKey, goldTotalWalkins);
			data.put(goldPreferredwalkinsKey, goldPrefferedWalkins);
			data.put(diamondTotalwalkinsKey, diamondTotalWalkins);
			data.put(diamondPreferredwalkinsKey, diamondPrefferedWalkins);
			data.put(employeeDetailsKey, employeeDetails.getData());

			data.put(detailsKey, details);
			finalObject.put("data", data);
			finalObject.put(fromDate, startDate);
			finalObject.put(toDate, endDate);
			finalObject.put(message, successMessage);
			finalObject.put(status, HttpServletResponse.SC_OK);
			response.setData(finalObject);
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.CFS003.name(), EnumTypeForErrorCodes.CFS003.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}
		return response;
	}

	/*
	 * getConversionFactorsByWeek method
	 * 
	 */
	@SuppressWarnings("unchecked")
	private ServiceResponse<JSONObject> getConversionFactorsByWeek(String startDate, String endDate,
			String locationCode) {
		log.info("getting ticketSize for showroom location By weekwise");
		ServiceResponse<JSONObject> response = new ServiceResponse<>();

		JSONObject finalObject = new JSONObject();

		JSONObject data = new JSONObject();

		JSONObject goldWalkins = new JSONObject();
		JSONObject diamondWalkins = new JSONObject();
		JSONObject walkins = new JSONObject();

		try {

			Location showroomLocation = locationRepo.findByLocationCode(locationCode);

			Double totalTargetGold = 0.0;
			Double totalTargetDiamond = 0.0;

			JSONObject details = new JSONObject();

			List<String> timeLine = new ArrayList<>();

			JSONObject actualsDetails = new JSONObject();
			List<Double> actualGold = new ArrayList<>();
			List<Double> actualDiamond = new ArrayList<>();

			JSONObject targetsDetails = new JSONObject();
			List<Double> targetGold = new ArrayList<>();
			List<Double> targetDiamond = new ArrayList<>();

			List<Double> actualGoldTotalWalkins = new ArrayList<>();
			List<Double> actualGoldPrefferedWalkins = new ArrayList<>();
			List<Double> actualDiamondTotalWalkins = new ArrayList<>();
			List<Double> actualDiamondPrefferedWalkins = new ArrayList<>();

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
			for (Dates eachWeek : weeksList) {

				timeLine.add(eachWeek.getWeekNumber());

				String weekStart = eachWeek.getStartDate().toString();
				String weekEnd = eachWeek.getEndDate().toString();

				// actuals
				JSONObject actualGoldDiamond = actualGoldDiamondValues(weekStart, weekEnd, showroomEmployee);

				Double gold = (Double) actualGoldDiamond.get(actualGoldConversionFactor);

				Double goldTotalwalkins = (Double) actualGoldDiamond.get(totalGoldWalkins);

				Double goldPrefferedWalkins = (Double) actualGoldDiamond.get(totalGoldPreferredWalkins);

				actualGoldTotalWalkins.add(goldTotalwalkins);

				actualGoldPrefferedWalkins.add(goldPrefferedWalkins);

				actualGold.add(gold);

				Double diamond = (Double) actualGoldDiamond.get(actualDiamondConversionFactor);

				Double diamondTotalwalkins = (Double) actualGoldDiamond.get(totalDiamondWalkins);

				Double diamondPrefferedWalkins = (Double) actualGoldDiamond.get(totalDiamondPreferredWalkins);

				actualDiamondTotalWalkins.add(diamondTotalwalkins);

				actualDiamondPrefferedWalkins.add(diamondPrefferedWalkins);

				actualDiamond.add(diamond);

				// Targets
				JSONObject targetGoldDiamond = targetGoldDiamondValues(weekStart, weekEnd, showroomEmployee);
				Double goldTarget = (Double) targetGoldDiamond.get(targetGoldConversion);
				totalTargetGold += goldTarget;

				targetGold.add(goldTarget);

				Double diamondTarget = (Double) targetGoldDiamond.get(targetDiamondConversion);
				totalTargetDiamond += diamondTarget;
				targetDiamond.add(diamondTarget);
			}

			details.put(timelineKey, timeLine);

			// actuals
			actualsDetails.put("gold", actualGold);
			actualsDetails.put(diamondType, actualDiamond);
			details.put(actualsKey, actualsDetails);

			// targets
			targetsDetails.put("gold", targetGold);
			targetsDetails.put(diamondType, targetDiamond);
			details.put(targetsKey, targetsDetails);

			goldWalkins.put(totalWalkinsKey, actualGoldTotalWalkins);
			goldWalkins.put(preferredWalkinsKey, actualGoldPrefferedWalkins);
			diamondWalkins.put(totalWalkinsKey, actualDiamondTotalWalkins);
			diamondWalkins.put(preferredWalkinsKey, actualDiamondPrefferedWalkins);

			walkins.put("gold", goldWalkins);
			walkins.put(diamondType, diamondWalkins);

			details.put(walkinsKey, walkins);

			// employee wise
			ServiceResponse<JSONObject> employeeDetails = conversionFactorShowroomEmployee(startDate, endDate,
					locationCode);

			data.put(employeeDetailsKey, employeeDetails.getData());

			JSONObject jsonobject = (JSONObject) employeeDetails.getData().get(walkinsKey);
			JSONObject goldJsonobject = (JSONObject) jsonobject.get("gold");
			JSONObject diaJsonobject = (JSONObject) jsonobject.get(diamondType);

			ArrayList<Double> goldTotalWalkinsArray = (ArrayList<Double>) goldJsonobject.get(totalWalkinsKey);
			double goldTotalWalkins = goldTotalWalkinsArray.stream().mapToDouble(f -> f.doubleValue()).sum();
			ArrayList<Double> goldPrefferedWalkinsArray = (ArrayList<Double>) goldJsonobject.get(preferredWalkinsKey);
			double goldPrefferedWalkins = goldPrefferedWalkinsArray.stream().mapToDouble(f -> f.doubleValue()).sum();
			ArrayList<Double> diaTotalWalkinsArray = (ArrayList<Double>) diaJsonobject.get(totalWalkinsKey);
			double diamondTotalWalkins = diaTotalWalkinsArray.stream().mapToDouble(f -> f.doubleValue()).sum();
			ArrayList<Double> diaPrefferedWalkinsArray = (ArrayList<Double>) diaJsonobject.get(preferredWalkinsKey);
			double diamondPrefferedWalkins = diaPrefferedWalkinsArray.stream().mapToDouble(f -> f.doubleValue()).sum();

			data.put(goldTotalwalkinsKey, goldTotalWalkins);
			data.put(goldPreferredwalkinsKey, goldPrefferedWalkins);
			data.put(diamondTotalwalkinsKey, diamondTotalWalkins);
			data.put(diamondPreferredwalkinsKey, diamondPrefferedWalkins);
			data.put(employeeDetailsKey, employeeDetails.getData());

			data.put(detailsKey, details);

			finalObject.put("data", data);
			finalObject.put(fromDate, startDate);
			finalObject.put(toDate, endDate);
			finalObject.put(message, successMessage);
			finalObject.put(status, HttpServletResponse.SC_OK);

			response.setData(finalObject);

		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.CFS004.name(), EnumTypeForErrorCodes.CFS004.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}

		return response;
	}

	@SuppressWarnings("unchecked")
	public ServiceResponse<JSONObject> conversionFactorShowroomEmployee(String startDate, String endDate,
			String locationCode) {

		log.info("Getting conversion factor for all showroom employees by location");

		ServiceResponse<JSONObject> response = new ServiceResponse<>();

		JSONObject employeeDetails = new JSONObject();

		JSONObject gold = new JSONObject();
		JSONObject diamond = new JSONObject();
		JSONObject walkins = new JSONObject();
		List<String> employee = new ArrayList<>();

		List<Double> actualGoldTotalWalkins = new ArrayList<>();
		List<Double> actualDiamondTotalWalkins = new ArrayList<>();

		List<Double> actualGoldPrefferedWalkins = new ArrayList<>();
		List<Double> actualDiamondPrefferedWalkins = new ArrayList<>();

		try {

			Location location = locationRepo.findByLocationCode(locationCode);

			List<Employee> employeeList = empRepo.findByLocation(location);

			// Each employee
			for (Employee emp : employeeList) {

				employee.add(emp.getEmpName());

				// gold
				List<EmpDailyActuals> goldSales = empDailyActualsRepo
						.findByStartDateAndEndDateAndItemTypeAndEmpId(startDate, endDate, "Gold", emp);
				double goldPreferredWalkins = goldSales.stream().filter(node -> node.getSale().equals(true)).count();
				double goldTotalWalkins = goldSales.size();
				actualGoldTotalWalkins.add(goldTotalWalkins);
				actualGoldPrefferedWalkins.add(goldPreferredWalkins);
				// diamond
				List<EmpDailyActuals> diamondSales = empDailyActualsRepo
						.findByStartDateAndEndDateAndItemTypeAndEmpId(startDate, endDate, diamondType, emp);
				double diamondPreferredWalkins = diamondSales.stream().filter(node -> node.getSale().equals(true))
						.count();
				double diamondTotalWalkins = diamondSales.size();
				actualDiamondTotalWalkins.add(diamondTotalWalkins);
				actualDiamondPrefferedWalkins.add(diamondPreferredWalkins);
			}
			gold.put(totalWalkinsKey, actualGoldTotalWalkins);
			gold.put(preferredWalkinsKey, actualGoldPrefferedWalkins);
			diamond.put(totalWalkinsKey, actualDiamondTotalWalkins);
			diamond.put(preferredWalkinsKey, actualDiamondPrefferedWalkins);
			walkins.put("gold", gold);
			walkins.put(diamondType, diamond);
			employeeDetails.put(walkinsKey, walkins);
			employeeDetails.put("employee", employee);
			response.setData(employeeDetails);
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.CFS006.name(), EnumTypeForErrorCodes.CFS006.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}
		return response;
	}
}

package com.mss.pmj.pmjmis.svcs.impl;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Collection;
import java.util.Date;
import java.util.List;
import java.util.Set;

import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import com.mss.pmj.pmjmis.common.EnumTypeForErrorCodes;
import com.mss.pmj.pmjmis.common.Utils;
import com.mss.pmj.pmjmis.domain.Channel;
import com.mss.pmj.pmjmis.domain.Employee;
import com.mss.pmj.pmjmis.domain.EmployeeItemMonthlyTarget;
import com.mss.pmj.pmjmis.domain.Location;
import com.mss.pmj.pmjmis.domain.Manager;
import com.mss.pmj.pmjmis.domain.Role;
import com.mss.pmj.pmjmis.domain.Sales;
import com.mss.pmj.pmjmis.domain.SalesReturns;
import com.mss.pmj.pmjmis.domain.User;
import com.mss.pmj.pmjmis.repos.ChannelRepository;
import com.mss.pmj.pmjmis.repos.EmployeeItemMonthlyTargetRepository;
import com.mss.pmj.pmjmis.repos.EmployeeRepository;
import com.mss.pmj.pmjmis.repos.LocationRepository;
import com.mss.pmj.pmjmis.repos.ManagerRepository;
import com.mss.pmj.pmjmis.repos.SalesRepository;
import com.mss.pmj.pmjmis.repos.SalesReturnsRepository;
import com.mss.pmj.pmjmis.repos.UserRepository;
import com.mss.pmj.pmjmis.response.ItemQuantityValue;
import com.mss.pmj.pmjmis.response.LocationTargetVsActualDetails;
import com.mss.pmj.pmjmis.response.Quantity;
import com.mss.pmj.pmjmis.response.QuantityList;
import com.mss.pmj.pmjmis.response.QuantityValue;
import com.mss.pmj.pmjmis.response.TargetVsActualResponse;
import com.mss.pmj.pmjmis.response.TgtVsActualLocation;
import com.mss.pmj.pmjmis.response.Value;
import com.mss.pmj.pmjmis.response.ValueList;
import com.mss.pmj.pmjmis.svcs.PerformanceAnalysisAllLocationService;

@Service
public class PerformanceAnalysisAllLocationServiceImpl implements PerformanceAnalysisAllLocationService {

	private static Logger log = LoggerFactory.getLogger(PerformanceAnalysisAllLocationServiceImpl.class);

	@Autowired
	private Utils utils;

	@Autowired
	private LocationRepository locationRepo;

	@Autowired
	private ChannelRepository channelRepo;

	@Autowired
	private SalesRepository salesRepo;

	@Autowired
	private SalesReturnsRepository salesReturnsRepo;

	@Autowired
	private EmployeeItemMonthlyTargetRepository employeeItemMonthlyTargetRepo;

	@Autowired
	private EmployeeRepository employeeRepo;

	@Autowired
	private UserRepository userRepo;

	@Autowired
	private ManagerRepository managerRepo;

	@Override
	public TargetVsActualResponse<TgtVsActualLocation> getLocationStoreTargetVsActual(String channelName,
			String startDate, String endDate) {
		log.info("getting the location Actuals Vs Targets store data");
		TargetVsActualResponse<TgtVsActualLocation> response = new TargetVsActualResponse<>();

		TgtVsActualLocation targetVsActual = new TgtVsActualLocation();

		LocationTargetVsActualDetails targetActualsDetails = new LocationTargetVsActualDetails();

		List<String> locationName = new ArrayList<>();

		try {
			Channel channel = channelRepo.findByChannelName("SHW");

			List<Location> listOfLocation = new ArrayList<>();

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

				listOfLocation = locationRepo.findByChannel(channel);
			} else {

				if (user.getEmpCode() != null) {

					Manager manager = managerRepo.findByEmpId(user.getEmpCode());

					List<Location> locationList = locationRepo.findByManagerAndChannel(manager.getId(), channel);

					for (Location location : locationList) {

						listOfLocation.add(location);

					}
				}
			}

			for (Location location : listOfLocation) {

				locationName.add(location.getLocationCode());

			}
			TgtVsActualLocation actual = performanceAnalysisLocationActual(listOfLocation, startDate, endDate);

			TgtVsActualLocation target = performanceAnalysisLocationWiseTargets(listOfLocation, startDate, endDate);

			targetActualsDetails.setLocation(locationName);

			targetActualsDetails.setActuals(actual.getDetails().getActuals());

			targetVsActual.setActuals(actual.getActuals());

			targetActualsDetails.setTarget(target.getDetails().getTarget());

			targetVsActual.setTarget(target.getTarget());

			targetVsActual.setDetails(targetActualsDetails);

			response.setStatus(HttpServletResponse.SC_OK);
			response.setMessage("successful");
			response.setFromDate(startDate);
			response.setToDate(endDate);
			response.setData(targetVsActual);

		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS103.name(), EnumTypeForErrorCodes.SCUS103.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}
		return response;

	}

	public TgtVsActualLocation performanceAnalysisLocationActual(List<Location> listOfLocation, String startDate,
			String endDate) {

		TgtVsActualLocation data = new TgtVsActualLocation();

		LocationTargetVsActualDetails targetVsActualDetails = new LocationTargetVsActualDetails();

		Double goldQuantityActual = 0.0;
		Double goldValueActual = 0.0;
		Double diamondQuantityActual = 0.0;
		Double diamondValueActual = 0.0;

		try {

			List<Double> actualGoldQuantity = new ArrayList<>();
			List<Double> actualDiamondQuantity = new ArrayList<>();
			List<Double> actualGoldValue = new ArrayList<>();
			List<Double> actualDiamondValue = new ArrayList<>();

			QuantityValue finalActualQuantityValue = new QuantityValue();
			Quantity finalActualQuantity = new Quantity();
			Value finalActualValue = new Value();

			QuantityList actualQuantity = new QuantityList();
			ValueList actualValue = new ValueList();
			ItemQuantityValue actualQuantityValue = new ItemQuantityValue();

			Double salesReturnGoldQuantityDetails = 0.0;
			Double salesReturnGoldValueDetails = 0.0;
			Double salesReturnDiamondQuantityDetails = 0.0;
			Double salesReturnDiamondValueDetails = 0.0;

			for (Location location : listOfLocation) {

				Double monthlyActualGoldQuantity = 0.0;
				Double monthlyActualGoldValue = 0.0;
				Double monthlyActualDiamondQuantity = 0.0;
				Double monthlyActualDiamondValue = 0.0;

				Double salesReturnGoldQuantity = 0.0;
				Double salesReturnGoldValue = 0.0;
				Double salesReturnDiamondQuantity = 0.0;
				Double salesReturnDiamondValue = 0.0;

				List<Sales> salesDataList = salesRepo.findByStartDateAndEndDateAndLocationName(startDate, endDate,
						location.getId());

				if (!salesDataList.isEmpty()) {

					for (Sales sale : salesDataList) {

						if (sale.getItemType().equalsIgnoreCase("Gold")) {

							goldQuantityActual = goldQuantityActual + sale.getGrossWeight();
							goldValueActual = goldValueActual + sale.getTotalSoldAmount();

							monthlyActualGoldQuantity = monthlyActualGoldQuantity + sale.getGrossWeight();
							monthlyActualGoldValue = monthlyActualGoldValue + sale.getTotalSoldAmount();

						} else if (sale.getItemType().equalsIgnoreCase("Diamond")) {
							diamondQuantityActual = diamondQuantityActual + sale.getDiamondWeight();

							diamondValueActual = diamondValueActual + sale.getTotalSoldAmount();

							monthlyActualDiamondQuantity = monthlyActualDiamondQuantity + sale.getDiamondWeight();

							monthlyActualDiamondValue = monthlyActualDiamondValue + sale.getTotalSoldAmount();
						}

						SalesReturns salesReturns = salesReturnsRepo.findBySales(sale);

						if (salesReturns != null) {

							if (sale.getItemType().equalsIgnoreCase("Gold")) {

								salesReturnGoldQuantity = salesReturnGoldQuantity + salesReturns.getGrossWeight();
								salesReturnGoldQuantityDetails = salesReturnGoldQuantityDetails
										+ salesReturns.getGrossWeight();
								salesReturnGoldValue = salesReturnGoldValue + salesReturns.getAmountPayable();
								salesReturnGoldValueDetails = salesReturnGoldValueDetails
										+ salesReturns.getAmountPayable();

							} else if (sale.getItemType().equalsIgnoreCase("Diamond")) {

								salesReturnDiamondQuantity = salesReturnDiamondQuantity
										+ salesReturns.getDiamondWeight();
								salesReturnDiamondQuantityDetails = salesReturnDiamondQuantityDetails
										+ salesReturns.getDiamondWeight();
								salesReturnDiamondValue = salesReturnDiamondValue + salesReturns.getAmountPayable();
								salesReturnDiamondValueDetails = salesReturnDiamondValueDetails
										+ salesReturns.getAmountPayable();
							}

						}

					}
					actualDiamondQuantity.add(monthlyActualDiamondQuantity - salesReturnDiamondQuantity);
					actualDiamondValue.add((monthlyActualDiamondValue - salesReturnDiamondValue) / 100000);
					actualGoldQuantity.add((monthlyActualGoldQuantity - salesReturnGoldQuantity) / 1000);
					actualGoldValue.add((monthlyActualGoldValue - salesReturnGoldValue) / 100000);
				} else {
					actualDiamondQuantity.add(0.0);
					actualDiamondValue.add(0.0);
					actualGoldQuantity.add(0.0);
					actualGoldValue.add(0.0);
				}

				finalActualQuantity.setDiamond((diamondQuantityActual - salesReturnDiamondQuantityDetails));
				finalActualQuantity.setGold((goldQuantityActual - salesReturnGoldQuantityDetails) / 1000);
				finalActualValue.setDiamond((diamondValueActual - salesReturnDiamondValueDetails) / 100000);
				finalActualValue.setGold((goldValueActual - salesReturnGoldValueDetails) / 100000);

				finalActualQuantityValue.setQty(finalActualQuantity);

				finalActualQuantityValue.setValue(finalActualValue);

				actualQuantity.setDiamond(actualDiamondQuantity);
				actualQuantity.setGold(actualGoldQuantity);
				actualValue.setDiamond(actualDiamondValue);
				actualValue.setGold(actualGoldValue);

				actualQuantityValue.setQty(actualQuantity);
				actualQuantityValue.setValue(actualValue);

				data.setActuals(finalActualQuantityValue);

				targetVsActualDetails.setActuals(actualQuantityValue);

				data.setDetails(targetVsActualDetails);

			}

		} catch (Exception e) {
			log.error("getting errors", e);

		}
		return data;

	}

	public TgtVsActualLocation performanceAnalysisLocationWiseTargets(List<Location> listOfLocation, String startDate,
			String endDate) {

		TgtVsActualLocation data = new TgtVsActualLocation();

		LocationTargetVsActualDetails targetVsActualDetails = new LocationTargetVsActualDetails();

		Double tgtDiaquantity = 0.0;
		Double tgtGoldQuantity = 0.0;
		Double tgtDiaValue = 0.0;
		Double tgtGoldValue = 0.0;

		try {

			LocalDate localStartDate = LocalDate.parse(startDate);
			LocalDate localEndDate = LocalDate.parse(endDate);

			String date1 = localStartDate.getMonth() + "-" + localStartDate.getYear();
			String date2 = localEndDate.getMonth() + "-" + localEndDate.getYear();

			DateFormat formater = new SimpleDateFormat("MMM-yyyy");

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

			List<Double> targetGoldQuantityData = new ArrayList<>();
			List<Double> targetDiamondQuantityData = new ArrayList<>();
			List<Double> targetGoldValueData = new ArrayList<>();
			List<Double> targetDiamondValueData = new ArrayList<>();

			QuantityValue targets = new QuantityValue();

			Quantity quantity = new Quantity();

			Value value = new Value();

			ItemQuantityValue targetdatalist = new ItemQuantityValue();

			QuantityList targetQuantityData = new QuantityList();

			ValueList targetValueData = new ValueList();

			for (Location location : listOfLocation) {

				Double monthlyTargetGoldQuantity = 0.0;
				Double monthlyTargetGoldValue = 0.0;
				Double monthlyTargetDiamondQuantity = 0.0;
				Double monthlyTargetDiamondValue = 0.0;

				List<Employee> listOfemployee = employeeRepo.findByLocation(location);

				for (Employee employee : listOfemployee) {

					for (int i = 0; i < datesList.size(); i++) {

						Collection<EmployeeItemMonthlyTarget> monthlyTargetForSHW = null;

						long noOfDaysBetween = 0l;

						if (i == 0) {

							if (date1.equals(date2)) {

								monthlyTargetForSHW = employeeItemMonthlyTargetRepo
										.findByTgtMonthAndEmp(datesList.get(i), employee.getId());
								noOfDaysBetween = ChronoUnit.DAYS.between(localStartDate, localEndDate) + 1;

							} else {
								Date date10 = new SimpleDateFormat("MMM-yyyy").parse(datesList.get(i));
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
								String lastDay1 = datesList.get(i).substring(4, 8) + "-" + m + "-" + lastDay;
								LocalDate day = LocalDate.parse(lastDay1);
								monthlyTargetForSHW = employeeItemMonthlyTargetRepo
										.findByTgtMonthAndEmp(datesList.get(i), employee.getId());
								noOfDaysBetween = ChronoUnit.DAYS.between(localStartDate, day) + 1;
							}

						} else if (i < datesList.size() - 1) {
							Date date10 = new SimpleDateFormat("MMM-yyyy").parse(datesList.get(i));
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
							String lastDay1 = datesList.get(i).substring(4, 8) + "-" + m + "-" + lastDay;
							String firstDay1 = datesList.get(i).substring(4, 8) + "-" + m + "-" + "01";
							LocalDate day = LocalDate.parse(lastDay1);
							LocalDate firstday = LocalDate.parse(firstDay1);
							monthlyTargetForSHW = employeeItemMonthlyTargetRepo.findByTgtMonthAndEmp(datesList.get(i),
									employee.getId());
							noOfDaysBetween = ChronoUnit.DAYS.between(firstday, day) + 1;
						} else {
							Date date10 = new SimpleDateFormat("MMM-yyyy").parse(datesList.get(i));
							Calendar cal = Calendar.getInstance();
							cal.setTime(date10);
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
							String firstDay1 = datesList.get(i).substring(4, 8) + "-" + m + "-" + "01";
							LocalDate firstday = LocalDate.parse(firstDay1);
							monthlyTargetForSHW = employeeItemMonthlyTargetRepo.findByTgtMonthAndEmp(datesList.get(i),
									employee.getId());
							noOfDaysBetween = ChronoUnit.DAYS.between(firstday, localEndDate) + 1;
						}

						for (EmployeeItemMonthlyTarget empMonthlyTarget : monthlyTargetForSHW) {

							Date date10 = new SimpleDateFormat("MMM-yyyy").parse(empMonthlyTarget.getTgtMonth());
							Calendar cal = Calendar.getInstance();
							cal.setTime(date10);
							int lastDate = cal.getActualMaximum(Calendar.DATE);

							if (empMonthlyTarget.getItemType().equalsIgnoreCase("Gold")) {

								monthlyTargetGoldQuantity = monthlyTargetGoldQuantity
										+ (empMonthlyTarget.getQuantity() / lastDate) * noOfDaysBetween;

								monthlyTargetGoldValue = monthlyTargetGoldValue
										+ (empMonthlyTarget.getValue() / lastDate) * noOfDaysBetween;
								tgtGoldQuantity = tgtGoldQuantity
										+ (empMonthlyTarget.getQuantity() / lastDate) * noOfDaysBetween;
								tgtGoldValue = tgtGoldValue
										+ (empMonthlyTarget.getValue() / lastDate) * noOfDaysBetween;

							} else if (empMonthlyTarget.getItemType().equalsIgnoreCase("Diamond")) {

								monthlyTargetDiamondQuantity = monthlyTargetDiamondQuantity
										+ (empMonthlyTarget.getQuantity() / lastDate) * noOfDaysBetween;

								monthlyTargetDiamondValue = monthlyTargetDiamondValue
										+ (empMonthlyTarget.getValue() / lastDate) * noOfDaysBetween;

								tgtDiaquantity = tgtDiaquantity
										+ (empMonthlyTarget.getQuantity() / lastDate) * noOfDaysBetween;
								tgtDiaValue = tgtDiaValue + (empMonthlyTarget.getValue() / lastDate) * noOfDaysBetween;

							}

						}

					}
				}
				targetGoldQuantityData.add(monthlyTargetGoldQuantity);
				targetGoldValueData.add(monthlyTargetGoldValue);
				targetDiamondQuantityData.add(monthlyTargetDiamondQuantity);
				targetDiamondValueData.add(monthlyTargetDiamondValue);

			}

			quantity.setDiamond(tgtDiaquantity);
			quantity.setGold(tgtGoldQuantity);
			value.setDiamond(tgtDiaValue);
			value.setGold(tgtGoldValue);

			targets.setQty(quantity);
			targets.setValue(value);

			targetQuantityData.setDiamond(targetDiamondQuantityData);
			targetQuantityData.setGold(targetGoldQuantityData);

			targetValueData.setDiamond(targetDiamondValueData);
			targetValueData.setGold(targetGoldValueData);

			targetdatalist.setQty(targetQuantityData);
			targetdatalist.setValue(targetValueData);

			targetVsActualDetails.setTarget(targetdatalist);

			data.setTarget(targets);

			data.setDetails(targetVsActualDetails);

		} catch (Exception e) {
			log.error("getting errors", e);
		}

		return data;

	}
}

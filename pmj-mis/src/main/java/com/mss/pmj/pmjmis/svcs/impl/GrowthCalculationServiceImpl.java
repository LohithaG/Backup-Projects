package com.mss.pmj.pmjmis.svcs.impl;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Collection;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

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
import com.mss.pmj.pmjmis.repos.EmployeeItemMonthlyTargetRepository;
import com.mss.pmj.pmjmis.repos.EmployeeRepository;
import com.mss.pmj.pmjmis.repos.LocationRepository;
import com.mss.pmj.pmjmis.repos.ManagerRepository;
import com.mss.pmj.pmjmis.repos.SalesRepository;
import com.mss.pmj.pmjmis.repos.SalesReturnsRepository;
import com.mss.pmj.pmjmis.repos.TeamItemMonthlyTargetRepository;
import com.mss.pmj.pmjmis.repos.TeamRepository;
import com.mss.pmj.pmjmis.repos.UserRepository;
import com.mss.pmj.pmjmis.svcs.GrowthCalculationService;

@RestController
public class GrowthCalculationServiceImpl implements GrowthCalculationService {

	private static Logger log = LoggerFactory.getLogger(SalesTgtVsActualServiceImpl.class);

	@Autowired
	private Utils utils;

	@Autowired
	private EmployeeItemMonthlyTargetRepository empItemMonthlyTargetRepo;

	@Autowired
	private SalesRepository salesRepo;

	@Autowired
	private SalesReturnsRepository salesReturnsRepo;

	@Autowired
	private EmployeeRepository empRepo;

	@Autowired
	private LocationRepository locationRepo;

	@Autowired
	private ChannelRepository channelRepo;

	@Autowired
	TeamItemMonthlyTargetRepository teamItemMonthlyTargetRepo;

	@Autowired
	private TeamRepository teamRepo;

	@Autowired
	private UserRepository userRepo;

	@Autowired
	private ManagerRepository managerRepo;

	private static final String DIAMONDVALUE = "Diamond";

	private static final String GOLDVALUE = "Gold";

	private static final String MONTHYEARFORMATE = "MMM-yyyy";

	private static final String TIMELINE = "timeline";

	private static final String DIAMOND = "diamond";

	private static final String GOLDTARGET = "goldTarget";

	private static final String DIAMONDTARGET = "diamondTarget";

	private static final String ACTUAL = "actual";

	private static final String TARGET = "target";

	private static final String RANGE1 = "range1";

	private static final String RANGE2 = "range2";

	private static final String RANGE3 = "range3";

	private static final String GROWTHR1_R2 = "growthr1_r2";

	private static final String GROWTHR1_R3 = "growthr1_r3";

	private static final String GROWTHR2_R3 = "growthr2_r3";

	private static final String DETAILS = "details";

	private static final String ADMIN = "ADMIN";

	private static final String TOTALGOLD = "totalGold";

	private static final String TOTALDIAMOND = "totalDiamond";

	private static final String RANGE3_GOLD = "range3_gold";

	private static final String RANGE3_DIAMOND = "range3_diamond";

	private static final String GOLD_TARGET_R3 = "gold_target_r3";

	private static final String DIAMOND_TARGET_R3 = "diamond_target_r3";

	private static final String RANGE1_GOLD = "range1_gold";

	private static final String RANGE1_DIAMOND = "range1_diamond";

	private static final String RANGE2_GOLD = "range2_gold";

	private static final String RANGE2_DIAMOND = "range2_diamond";

	private static final String GOLD_TARGET_R1 = "gold_target_r1";

	private static final String GOLD_TARGET_R2 = "gold_target_r2";

	private static final String DIAMOND_TARGET_R1 = "diamond_target_r1";

	private static final String DIAMOND_TARGET_R2 = "diamond_target_r2";

	/*
	 * 
	 * Get growth by total sales
	 * 
	 */
	@SuppressWarnings("unchecked")
	@Override
	public ServiceResponse<JSONObject> getGrowthByTotalSales(String startDate1, String endDate1, String startDate2,
			String endDate2, String startDate3, String endDate3) {

		log.info("getting growth calculation values by total saleswise");

		ServiceResponse<JSONObject> response = new ServiceResponse<>();

		JSONObject finalObject = new JSONObject();

		JSONObject totalSales = new JSONObject();
		List<String> timeLine = new ArrayList<>();
		List<Double> gold = new ArrayList<>();
		List<Double> diamond = new ArrayList<>();

		JSONObject details = new JSONObject();

		JSONObject goldDetails = new JSONObject();
		List<Double> goldTargets = new ArrayList<>();

		JSONObject diamondDetails = new JSONObject();
		List<Double> diamondTargets = new ArrayList<>();

		try {
			// Range1

			List<Sales> goldRange1 = salesRepo.findByStartDateAndEndDateAndItemType(startDate1, endDate1, GOLDVALUE);
			Double totalGoldSaleValue1 = goldRange1.stream().mapToDouble(o -> o.getTotalSoldAmount()).sum();

			Double totalGoldReturnValue1 = 0.0;

			for (Sales sale : goldRange1) {

				SalesReturns salesReturns = salesReturnsRepo.findBySales(sale);

				if (salesReturns != null) {

					totalGoldReturnValue1 += salesReturns.getAmountPayable();

				}
			}

			Double totalGoldActualValue1 = (totalGoldSaleValue1 - totalGoldReturnValue1) / 100000;

			List<Sales> diamondRange1 = salesRepo.findByStartDateAndEndDateAndItemType(startDate1, endDate1,
					DIAMONDVALUE);
			Double totalDiamondSaleValue1 = diamondRange1.stream().mapToDouble(o -> o.getTotalSoldAmount()).sum();

			Double totalDiamondReturnValue1 = 0.0;

			for (Sales sale : diamondRange1) {

				SalesReturns salesReturns = salesReturnsRepo.findBySales(sale);

				if (salesReturns != null) {

					totalDiamondReturnValue1 += salesReturns.getAmountPayable();

				}
			}

			Double totalDiamondActualValue1 = (totalDiamondSaleValue1 - totalDiamondReturnValue1) / 100000;
			Double range1Total = totalGoldActualValue1 + totalDiamondActualValue1;

			timeLine.add("Range1");
			gold.add(totalGoldActualValue1);
			diamond.add(totalDiamondActualValue1);

			totalSales.put(TIMELINE, timeLine);
			totalSales.put("gold", gold);
			totalSales.put(DIAMOND, diamond);

			// targetValues
			JSONObject target1 = salesTargets(startDate1, endDate1);
			goldTargets.add((Double) target1.get(GOLDTARGET));
			diamondTargets.add((Double) target1.get(DIAMONDTARGET));

			goldDetails.put(TIMELINE, timeLine);
			goldDetails.put(ACTUAL, gold);
			goldDetails.put(TARGET, goldTargets);

			details.put("gold", goldDetails);

			diamondDetails.put(TIMELINE, timeLine);
			diamondDetails.put(ACTUAL, diamond);
			diamondDetails.put(TARGET, diamondTargets);

			details.put(DIAMOND, diamondDetails);

			finalObject.put(RANGE1, range1Total);

			// range2

			List<Sales> goldRange2 = salesRepo.findByStartDateAndEndDateAndItemType(startDate2, endDate2, GOLDVALUE);
			Double totalGoldSaleValue2 = goldRange2.stream().mapToDouble(o -> o.getTotalSoldAmount()).sum();

			Double totalGoldReturnValue2 = 0.0;

			for (Sales sale : goldRange2) {

				SalesReturns salesReturns = salesReturnsRepo.findBySales(sale);

				if (salesReturns != null) {

					totalGoldReturnValue2 += salesReturns.getAmountPayable();

				}
			}

			Double totalGoldActualValue2 = (totalGoldSaleValue2 - totalGoldReturnValue2) / 100000;

			List<Sales> diamondRange2 = salesRepo.findByStartDateAndEndDateAndItemType(startDate2, endDate2,
					DIAMONDVALUE);
			Double totalDiamondSaleValue2 = diamondRange2.stream().mapToDouble(o -> o.getTotalSoldAmount()).sum();

			Double totalDiamondReturnValue2 = 0.0;

			for (Sales sale : diamondRange2) {

				SalesReturns salesReturns = salesReturnsRepo.findBySales(sale);

				if (salesReturns != null) {

					totalDiamondReturnValue2 += salesReturns.getAmountPayable();

				}
			}

			Double totalDiamondActualValue2 = (totalDiamondSaleValue2 - totalDiamondReturnValue2) / 100000;
			Double range2Total = totalGoldActualValue2 + totalDiamondActualValue2;
			timeLine.add("Range2");
			gold.add(totalGoldActualValue2);
			diamond.add(totalDiamondActualValue2);

			totalSales.put(TIMELINE, timeLine);
			totalSales.put("gold", gold);
			totalSales.put(DIAMOND, diamond);

			// targetValues
			JSONObject target2 = salesTargets(startDate2, endDate2);

			goldTargets.add((Double) target2.get(GOLDTARGET));
			diamondTargets.add((Double) target2.get(DIAMONDTARGET));

			goldDetails.put(TIMELINE, timeLine);
			goldDetails.put(ACTUAL, gold);
			goldDetails.put(TARGET, goldTargets);

			details.put("gold", goldDetails);

			diamondDetails.put(TIMELINE, timeLine);
			diamondDetails.put(ACTUAL, diamond);
			diamondDetails.put(TARGET, diamondTargets);

			details.put(DIAMOND, diamondDetails);

			finalObject.put(RANGE2, range2Total);

			// calculating percentage
			if (range1Total != 0) {
				double value = range2Total - range1Total;
				if (value == 0.0) {
					finalObject.put(GROWTHR1_R2, 0);
				} else {
					double growthr1r2 = (value / range1Total) * 100;
					finalObject.put(GROWTHR1_R2, growthr1r2);
				}
			} else {
				finalObject.put(GROWTHR1_R2, 0);

			}

			// range 3
			if ((!startDate3.contains("null")) && (!endDate3.contains("null"))) {

				List<Sales> goldRange3 = salesRepo.findByStartDateAndEndDateAndItemType(startDate3, endDate3,
						GOLDVALUE);
				Double totalGoldSaleValue3 = goldRange3.stream().mapToDouble(o -> o.getTotalSoldAmount()).sum();

				Double totalGoldReturnValue3 = 0.0;

				for (Sales sale : goldRange3) {

					SalesReturns salesReturns = salesReturnsRepo.findBySales(sale);

					if (salesReturns != null) {

						totalGoldReturnValue3 += salesReturns.getAmountPayable();

					}
				}

				Double totalGoldActualValue3 = (totalGoldSaleValue3 - totalGoldReturnValue3) / 100000;

				List<Sales> diamondRange3 = salesRepo.findByStartDateAndEndDateAndItemType(startDate3, endDate3,
						DIAMONDVALUE);
				Double totalDiamondSaleValue3 = diamondRange3.stream().mapToDouble(o -> o.getTotalSoldAmount()).sum();

				Double totalDiamondReturnValue3 = 0.0;

				for (Sales sale : diamondRange3) {

					SalesReturns salesReturns = salesReturnsRepo.findBySales(sale);

					if (salesReturns != null) {

						totalDiamondReturnValue3 += salesReturns.getAmountPayable();

					}
				}

				Double totalDiamondActualValue3 = (totalDiamondSaleValue3 - totalDiamondReturnValue3) / 100000;
				Double range3Total = totalGoldActualValue3 + totalDiamondActualValue3;
				timeLine.add("Range3");
				gold.add(totalGoldActualValue3);
				diamond.add(totalDiamondActualValue3);

				totalSales.put(TIMELINE, timeLine);
				totalSales.put("gold", gold);
				totalSales.put(DIAMOND, diamond);

				// targetValues
				JSONObject target3 = salesTargets(startDate3, endDate3);
				goldTargets.add((Double) target3.get(GOLDTARGET));
				diamondTargets.add((Double) target3.get(DIAMONDTARGET));

				goldDetails.put(TIMELINE, timeLine);
				goldDetails.put(ACTUAL, gold);
				goldDetails.put(TARGET, goldTargets);

				details.put("gold", goldDetails);

				diamondDetails.put(TIMELINE, timeLine);
				diamondDetails.put(ACTUAL, diamond);
				diamondDetails.put(TARGET, diamondTargets);

				details.put(DIAMOND, diamondDetails);

				finalObject.put(RANGE3, range3Total);

				// calculating growth percentage

				double value2 = range3Total - range1Total;
				double value3 = range3Total - range2Total;

				if (range1Total != 0) {

					if (value2 == 0.0) {
						finalObject.put(GROWTHR1_R3, 0);
					} else {
						double growthr1r3 = (value2 / range1Total) * 100;
						finalObject.put(GROWTHR1_R3, growthr1r3);
					}
				} else {
					finalObject.put(GROWTHR1_R3, 0);
				}

				if (range2Total != 0) {
					if (value3 == 0.0) {
						finalObject.put(GROWTHR2_R3, 0);
					} else {
						double growthr2r3 = (value3 / range2Total) * 100;
						finalObject.put(GROWTHR2_R3, growthr2r3);
					}
				} else {

					finalObject.put(GROWTHR2_R3, 0);
				}

			}

			// set object

			finalObject.put("totalsales", totalSales);
			finalObject.put(DETAILS, details);

			response.setData(finalObject);

		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS211.name(), EnumTypeForErrorCodes.SCUS211.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}
		return response;
	}

	/**
	 * 
	 * Getting sales targets
	 * 
	 * @param startDate
	 * @param endDate
	 * @return JSONObject
	 * @throws ParseException
	 */

	@SuppressWarnings("unchecked")
	public JSONObject salesTargets(String startDate, String endDate) throws ParseException {

		JSONObject response = new JSONObject();

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

		Collection<TeamItemMonthlyTarget> monthlyD2hGoldTarget = null;
		Collection<TeamItemMonthlyTarget> monthlyD2hDiamondTarget = null;

		long noOfDaysBetween;
		Double rangeTotalGoldTarget = 0.0;
		Double rangeTotalDiamondTarget = 0.0;

		if (datesList.size() == 1) {

			Date date10 = new SimpleDateFormat(MONTHYEARFORMATE).parse(datesList.get(0));
			Calendar cal = Calendar.getInstance();
			cal.setTime(date10);
			cal.get(Calendar.MONTH);
			int lastDate = cal.getActualMaximum(Calendar.DATE);
			cal.set(Calendar.DATE, lastDate);
			int lastDay = cal.get(Calendar.DAY_OF_MONTH);

			noOfDaysBetween = ChronoUnit.DAYS.between(localStartDate, localEndDate) + 1;
			monthlyGoldTarget = empItemMonthlyTargetRepo.findByTgtMonthAndItemType(datesList.get(0), GOLDVALUE);

			String[] splitted = datesList.get(0).split("-");

			monthlyD2hGoldTarget = teamItemMonthlyTargetRepo.findByMonthAndYearAndItemType(splitted[0], splitted[1],
					GOLDVALUE);

			if (!monthlyGoldTarget.isEmpty()) {
				Double totalMonthGoldValue = monthlyGoldTarget.stream().mapToDouble(o -> o.getValue()).sum();
				Double totalGoldTarget = (totalMonthGoldValue / lastDay) * noOfDaysBetween;
				rangeTotalGoldTarget += totalGoldTarget;
			}
			if (!monthlyD2hGoldTarget.isEmpty()) {

				Double totalMonthD2hGoldValue = monthlyD2hGoldTarget.stream().mapToDouble(o -> o.getValue()).sum();
				Double totalD2hGoldTarget = (totalMonthD2hGoldValue / lastDay) * noOfDaysBetween;
				rangeTotalGoldTarget += totalD2hGoldTarget;

			}

			monthlyDiamondTarget = empItemMonthlyTargetRepo.findByTgtMonthAndItemType(datesList.get(0), DIAMONDVALUE);
			monthlyD2hDiamondTarget = teamItemMonthlyTargetRepo.findByMonthAndYearAndItemType(splitted[0], splitted[1],
					DIAMONDVALUE);

			if (!monthlyDiamondTarget.isEmpty()) {
				Double totalMonthDiamondValue = monthlyDiamondTarget.stream().mapToDouble(o -> o.getValue()).sum();
				Double totalDiamondTarget = (totalMonthDiamondValue / lastDay) * noOfDaysBetween;
				rangeTotalDiamondTarget += totalDiamondTarget;
			}
			if (!monthlyD2hDiamondTarget.isEmpty()) {

				Double totalMonthD2hDiamondValue = monthlyD2hDiamondTarget.stream().mapToDouble(o -> o.getValue())
						.sum();
				Double totalD2hDiamondTarget = (totalMonthD2hDiamondValue / lastDay) * noOfDaysBetween;
				rangeTotalDiamondTarget += totalD2hDiamondTarget;

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
					monthlyGoldTarget = empItemMonthlyTargetRepo.findByTgtMonthAndItemType(datesList.get(i), GOLDVALUE);
					String[] splitted = datesList.get(i).split("-");

					monthlyD2hGoldTarget = teamItemMonthlyTargetRepo.findByMonthAndYearAndItemType(splitted[0],
							splitted[1], GOLDVALUE);

					if (!monthlyGoldTarget.isEmpty()) {
						Double totalMonthGoldValue = monthlyGoldTarget.stream().mapToDouble(o -> o.getValue()).sum();
						Double totalGoldTarget = (totalMonthGoldValue / lastDay) * noOfDaysBetween;
						rangeTotalGoldTarget += totalGoldTarget;
					}

					if (!monthlyD2hGoldTarget.isEmpty()) {

						Double totalMonthD2hGoldValue = monthlyD2hGoldTarget.stream().mapToDouble(o -> o.getValue())
								.sum();
						Double totalD2hGoldTarget = (totalMonthD2hGoldValue / lastDay) * noOfDaysBetween;
						rangeTotalGoldTarget += totalD2hGoldTarget;

					}

					monthlyDiamondTarget = empItemMonthlyTargetRepo.findByTgtMonthAndItemType(datesList.get(i),
							DIAMONDVALUE);

					monthlyD2hDiamondTarget = teamItemMonthlyTargetRepo.findByMonthAndYearAndItemType(splitted[0],
							splitted[1], DIAMONDVALUE);

					if (!monthlyDiamondTarget.isEmpty()) {
						Double totalMonthDiamondValue = monthlyDiamondTarget.stream().mapToDouble(o -> o.getValue())
								.sum();
						Double totalDiamondTarget = (totalMonthDiamondValue / lastDay) * noOfDaysBetween;
						rangeTotalDiamondTarget += totalDiamondTarget;
					}

					if (!monthlyD2hDiamondTarget.isEmpty()) {

						Double totalMonthD2hDiamondValue = monthlyD2hDiamondTarget.stream()
								.mapToDouble(o -> o.getValue()).sum();
						Double totalD2hDiamondTarget = (totalMonthD2hDiamondValue / lastDay) * noOfDaysBetween;
						rangeTotalDiamondTarget += totalD2hDiamondTarget;

					}

				} else if (i < datesList.size() - 1) {

					String lastDay1 = datesList.get(i).substring(4, 8) + "-" + m + "-" + lastDay;
					String firstDay1 = datesList.get(i).substring(4, 8) + "-" + m + "-" + "01";
					LocalDate localLastDay = LocalDate.parse(lastDay1);
					LocalDate firstDay = LocalDate.parse(firstDay1);
					noOfDaysBetween = ChronoUnit.DAYS.between(firstDay, localLastDay) + 1;
					monthlyGoldTarget = empItemMonthlyTargetRepo.findByTgtMonthAndItemType(datesList.get(i), GOLDVALUE);

					String[] splitted = datesList.get(i).split("-");

					monthlyD2hGoldTarget = teamItemMonthlyTargetRepo.findByMonthAndYearAndItemType(splitted[0],
							splitted[1], GOLDVALUE);

					if (!monthlyGoldTarget.isEmpty()) {
						Double totalMonthGoldValue = monthlyGoldTarget.stream().mapToDouble(o -> o.getValue()).sum();
						Double totalGoldTarget = (totalMonthGoldValue / lastDay) * noOfDaysBetween;
						rangeTotalGoldTarget += totalGoldTarget;
					}
					if (!monthlyD2hGoldTarget.isEmpty()) {

						Double totalMonthD2hGoldValue = monthlyD2hGoldTarget.stream().mapToDouble(o -> o.getValue())
								.sum();
						Double totalD2hGoldTarget = (totalMonthD2hGoldValue / lastDay) * noOfDaysBetween;
						rangeTotalGoldTarget += totalD2hGoldTarget;

					}

					monthlyDiamondTarget = empItemMonthlyTargetRepo.findByTgtMonthAndItemType(datesList.get(i),
							DIAMONDVALUE);

					monthlyD2hDiamondTarget = teamItemMonthlyTargetRepo.findByMonthAndYearAndItemType(splitted[0],
							splitted[1], DIAMONDVALUE);

					if (!monthlyDiamondTarget.isEmpty()) {
						Double totalMonthDiamondValue = monthlyDiamondTarget.stream().mapToDouble(o -> o.getValue())
								.sum();
						Double totalDiamondTarget = (totalMonthDiamondValue / lastDay) * noOfDaysBetween;
						rangeTotalDiamondTarget += totalDiamondTarget;
					}
					if (!monthlyD2hDiamondTarget.isEmpty()) {

						Double totalMonthD2hDiamondValue = monthlyD2hDiamondTarget.stream()
								.mapToDouble(o -> o.getValue()).sum();
						Double totalD2hDiamondTarget = (totalMonthD2hDiamondValue / lastDay) * noOfDaysBetween;
						rangeTotalDiamondTarget += totalD2hDiamondTarget;

					}

				} else {

					String firstDay1 = datesList.get(i).substring(4, 8) + "-" + m + "-" + "01";
					LocalDate firstday = LocalDate.parse(firstDay1);
					noOfDaysBetween = ChronoUnit.DAYS.between(firstday, localEndDate) + 1;
					monthlyGoldTarget = empItemMonthlyTargetRepo.findByTgtMonthAndItemType(datesList.get(i), GOLDVALUE);

					String[] splitted = datesList.get(i).split("-");

					monthlyD2hGoldTarget = teamItemMonthlyTargetRepo.findByMonthAndYearAndItemType(splitted[0],
							splitted[1], GOLDVALUE);

					if (!monthlyGoldTarget.isEmpty()) {
						Double totalMonthGoldValue = monthlyGoldTarget.stream().mapToDouble(o -> o.getValue()).sum();
						Double totalGoldTarget = (totalMonthGoldValue / lastDay) * noOfDaysBetween;
						rangeTotalGoldTarget += totalGoldTarget;
					}
					if (!monthlyD2hGoldTarget.isEmpty()) {

						Double totalMonthD2hGoldValue = monthlyD2hGoldTarget.stream().mapToDouble(o -> o.getValue())
								.sum();
						Double totalD2hGoldTarget = (totalMonthD2hGoldValue / lastDay) * noOfDaysBetween;
						rangeTotalGoldTarget += totalD2hGoldTarget;

					}

					monthlyDiamondTarget = empItemMonthlyTargetRepo.findByTgtMonthAndItemType(datesList.get(i),
							DIAMONDVALUE);
					monthlyD2hDiamondTarget = teamItemMonthlyTargetRepo.findByMonthAndYearAndItemType(splitted[0],
							splitted[1], DIAMONDVALUE);
					if (!monthlyDiamondTarget.isEmpty()) {
						Double totalMonthDiamondValue = monthlyDiamondTarget.stream().mapToDouble(o -> o.getValue())
								.sum();
						Double totalDiamondTarget = (totalMonthDiamondValue / lastDay) * noOfDaysBetween;
						rangeTotalDiamondTarget += totalDiamondTarget;
					}
					if (!monthlyD2hDiamondTarget.isEmpty()) {

						Double totalMonthD2hDiamondValue = monthlyD2hDiamondTarget.stream()
								.mapToDouble(o -> o.getValue()).sum();
						Double totalD2hDiamondTarget = (totalMonthD2hDiamondValue / lastDay) * noOfDaysBetween;
						rangeTotalDiamondTarget += totalD2hDiamondTarget;

					}

				}

			}
		}
		response.put(GOLDTARGET, rangeTotalGoldTarget);
		response.put(DIAMONDTARGET, rangeTotalDiamondTarget);

		return response;

	}

	/**
	 * 
	 * Get growth calculations by salesPerson
	 */
	@SuppressWarnings("unchecked")
	@Override
	public ServiceResponse<JSONObject> getGrowthBySalesPerson(String startDate1, String endDate1, String startDate2,
			String endDate2, String startDate3, String endDate3, Long empId) {

		log.info("Getting growth calculations by sales person");

		ServiceResponse<JSONObject> response = new ServiceResponse<>();

		JSONObject finalObject = new JSONObject();

		JSONObject totalSales = new JSONObject();
		List<String> timeLine = new ArrayList<>();
		List<Double> gold = new ArrayList<>();
		List<Double> diamond = new ArrayList<>();

		JSONObject details = new JSONObject();

		JSONObject goldDetails = new JSONObject();
		List<Double> goldTargets = new ArrayList<>();

		JSONObject diamondDetails = new JSONObject();
		List<Double> diamondTargets = new ArrayList<>();

		try {
			Optional<Employee> employeeDetails = empRepo.findById(empId);
			if (employeeDetails.isPresent()) {

				// Range1
				List<Sales> goldRange1 = salesRepo.findByStartDateAndEndDateAndItemTypeAndEmpId(startDate1, endDate1,
						GOLDVALUE, employeeDetails.get());
				Double totalGoldSaleValue1 = goldRange1.stream().mapToDouble(o -> o.getTotalSoldAmount()).sum();

				Double totalGoldReturnValue1 = 0.0;

				for (Sales sale : goldRange1) {

					SalesReturns salesReturns = salesReturnsRepo.findBySales(sale);

					if (salesReturns != null) {

						totalGoldReturnValue1 += salesReturns.getAmountPayable();

					}
				}

				Double totalGoldActualValue1 = (totalGoldSaleValue1 - totalGoldReturnValue1) / 100000;

				List<Sales> diamondRange1 = salesRepo.findByStartDateAndEndDateAndItemTypeAndEmpId(startDate1, endDate1,
						DIAMONDVALUE, employeeDetails.get());
				Double totalDiamondSaleValue1 = diamondRange1.stream().mapToDouble(o -> o.getTotalSoldAmount()).sum();

				Double totalDiamondReturnValue1 = 0.0;

				for (Sales sale : diamondRange1) {

					SalesReturns salesReturns = salesReturnsRepo.findBySales(sale);

					if (salesReturns != null) {

						totalDiamondReturnValue1 += salesReturns.getAmountPayable();

					}
				}

				Double totalDiamondActualValue1 = (totalDiamondSaleValue1 - totalDiamondReturnValue1) / 100000;
				Double range1Total = totalGoldActualValue1 + totalDiamondActualValue1;

				timeLine.add("Range1");
				gold.add(totalGoldActualValue1);
				diamond.add(totalDiamondActualValue1);

				totalSales.put(TIMELINE, timeLine);
				totalSales.put("gold", gold);
				totalSales.put(DIAMOND, diamond);

				// targetValues
				JSONObject target1 = salesTargetsByEmployee(startDate1, endDate1, employeeDetails.get());
				goldTargets.add((Double) target1.get(GOLDTARGET));
				diamondTargets.add((Double) target1.get(DIAMONDTARGET));

				goldDetails.put(TIMELINE, timeLine);
				goldDetails.put(ACTUAL, gold);
				goldDetails.put(TARGET, goldTargets);

				details.put("gold", goldDetails);

				diamondDetails.put(TIMELINE, timeLine);
				diamondDetails.put(ACTUAL, diamond);
				diamondDetails.put(TARGET, diamondTargets);

				details.put(DIAMOND, diamondDetails);

				finalObject.put(RANGE1, range1Total);

				// range2
				List<Sales> goldRange2 = salesRepo.findByStartDateAndEndDateAndItemTypeAndEmpId(startDate2, endDate2,
						GOLDVALUE, employeeDetails.get());
				Double totalGoldSaleValue2 = goldRange2.stream().mapToDouble(o -> o.getTotalSoldAmount()).sum();

				Double totalGoldReturnValue2 = 0.0;

				for (Sales sale : goldRange2) {

					SalesReturns salesReturns = salesReturnsRepo.findBySales(sale);

					if (salesReturns != null) {

						totalGoldReturnValue2 += salesReturns.getAmountPayable();

					}
				}

				Double totalGoldActualValue2 = (totalGoldSaleValue2 - totalGoldReturnValue2) / 100000;
				List<Sales> diamondRange2 = salesRepo.findByStartDateAndEndDateAndItemTypeAndEmpId(startDate2, endDate2,
						DIAMONDVALUE, employeeDetails.get());
				Double totalDiamondSaleValue2 = diamondRange2.stream().mapToDouble(o -> o.getTotalSoldAmount()).sum();

				Double totalDiamondReturnValue2 = 0.0;

				for (Sales sale : diamondRange2) {

					SalesReturns salesReturns = salesReturnsRepo.findBySales(sale);

					if (salesReturns != null) {

						totalDiamondReturnValue2 += salesReturns.getAmountPayable();

					}
				}

				Double totalDiamondActualValue2 = (totalDiamondSaleValue2 - totalDiamondReturnValue2) / 100000;
				Double range2Total = totalGoldActualValue2 + totalDiamondActualValue2;
				timeLine.add("Range2");
				gold.add(totalGoldActualValue2);
				diamond.add(totalDiamondActualValue2);

				totalSales.put(TIMELINE, timeLine);
				totalSales.put("gold", gold);
				totalSales.put(DIAMOND, diamond);

				// targetValues
				JSONObject target2 = salesTargetsByEmployee(startDate2, endDate2, employeeDetails.get());

				goldTargets.add((Double) target2.get(GOLDTARGET));
				diamondTargets.add((Double) target2.get(DIAMONDTARGET));

				goldDetails.put(TIMELINE, timeLine);
				goldDetails.put(ACTUAL, gold);
				goldDetails.put(TARGET, goldTargets);

				details.put("gold", goldDetails);

				diamondDetails.put(TIMELINE, timeLine);
				diamondDetails.put(ACTUAL, diamond);
				diamondDetails.put(TARGET, diamondTargets);

				details.put(DIAMOND, diamondDetails);

				finalObject.put(RANGE2, range2Total);

				// calculating percentage
				if (range1Total != 0) {
					double value = range2Total - range1Total;
					if (value == 0.0) {
						finalObject.put(GROWTHR1_R2, 0);
					} else {
						double growthr1r2 = (value / range1Total) * 100;
						finalObject.put(GROWTHR1_R2, growthr1r2);
					}
				} else {
					finalObject.put(GROWTHR1_R2, 0);

				}

				// range 3
				if ((!startDate3.contains("null")) && (!endDate3.contains("null"))) {

					List<Sales> goldRange3 = salesRepo.findByStartDateAndEndDateAndItemTypeAndEmpId(startDate3,
							endDate3, GOLDVALUE, employeeDetails.get());
					Double totalGoldSaleValue3 = goldRange3.stream().mapToDouble(o -> o.getTotalSoldAmount()).sum();

					Double totalGoldReturnValue3 = 0.0;

					for (Sales sale : goldRange3) {

						SalesReturns salesReturns = salesReturnsRepo.findBySales(sale);

						if (salesReturns != null) {

							totalGoldReturnValue3 += salesReturns.getAmountPayable();

						}
					}

					Double totalGoldActualValue3 = (totalGoldSaleValue3 - totalGoldReturnValue3) / 100000;

					List<Sales> diamondRange3 = salesRepo.findByStartDateAndEndDateAndItemTypeAndEmpId(startDate3,
							endDate3, DIAMONDVALUE, employeeDetails.get());
					Double totalDiamondSaleValue3 = diamondRange3.stream().mapToDouble(o -> o.getTotalSoldAmount())
							.sum();

					Double totalDiamondReturnValue3 = 0.0;

					for (Sales sale : diamondRange3) {

						SalesReturns salesReturns = salesReturnsRepo.findBySales(sale);

						if (salesReturns != null) {

							totalDiamondReturnValue3 += salesReturns.getAmountPayable();

						}
					}

					Double totalDiamondActualValue3 = (totalDiamondSaleValue3 - totalDiamondReturnValue3) / 100000;
					Double range3Total = totalGoldActualValue3 + totalDiamondActualValue3;
					timeLine.add("Range3");
					gold.add(totalGoldActualValue3);
					diamond.add(totalDiamondActualValue3);

					totalSales.put(TIMELINE, timeLine);
					totalSales.put("gold", gold);
					totalSales.put(DIAMOND, diamond);

					// targetValues
					JSONObject target3 = salesTargetsByEmployee(startDate3, endDate3, employeeDetails.get());
					goldTargets.add((Double) target3.get(GOLDTARGET));
					diamondTargets.add((Double) target3.get(DIAMONDTARGET));

					goldDetails.put(TIMELINE, timeLine);
					goldDetails.put(ACTUAL, gold);
					goldDetails.put(TARGET, goldTargets);

					details.put("gold", goldDetails);

					diamondDetails.put(TIMELINE, timeLine);
					diamondDetails.put(ACTUAL, diamond);
					diamondDetails.put(TARGET, diamondTargets);

					details.put(DIAMOND, diamondDetails);

					finalObject.put(RANGE3, range3Total);

					// calculating growth percentage

					double value2 = range3Total - range1Total;
					double value3 = range3Total - range2Total;

					if (range1Total != 0) {

						if (value2 == 0.0) {
							finalObject.put(GROWTHR1_R3, 0);
						} else {
							double growthr1r3 = (value2 / range1Total) * 100;
							finalObject.put(GROWTHR1_R3, growthr1r3);
						}
					} else {
						finalObject.put(GROWTHR1_R3, 0);
					}

					if (range2Total != 0) {
						if (value3 == 0.0) {
							finalObject.put(GROWTHR2_R3, 0);
						} else {
							double growthr2r3 = (value3 / range2Total) * 100;
							finalObject.put(GROWTHR2_R3, growthr2r3);
						}
					} else {

						finalObject.put(GROWTHR2_R3, 0);
					}

				}

				// set object

				finalObject.put("totalsales", totalSales);
				finalObject.put(DETAILS, details);

				response.setData(finalObject);
			}

		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS212.name(), EnumTypeForErrorCodes.SCUS212.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}
		return response;
	}

	@SuppressWarnings("unchecked")
	public JSONObject salesTargetsByEmployee(String startDate, String endDate, Employee employee)
			throws ParseException {

		JSONObject response = new JSONObject();

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
		Double rangeTotalGoldTarget = 0.0;
		Double rangeTotalDiamondTarget = 0.0;

		if (datesList.size() == 1) {

			Date date10 = new SimpleDateFormat(MONTHYEARFORMATE).parse(datesList.get(0));
			Calendar cal = Calendar.getInstance();
			cal.setTime(date10);
			cal.get(Calendar.MONTH);
			int lastDate = cal.getActualMaximum(Calendar.DATE);
			cal.set(Calendar.DATE, lastDate);
			int lastDay = cal.get(Calendar.DAY_OF_MONTH);

			noOfDaysBetween = ChronoUnit.DAYS.between(localStartDate, localEndDate) + 1;
			monthlyGoldTarget = empItemMonthlyTargetRepo.findByTgtMonthAndItemTypeAndEmp(datesList.get(0), GOLDVALUE,
					employee);
			if (!monthlyGoldTarget.isEmpty()) {
				Double totalMonthGoldValue = monthlyGoldTarget.stream().mapToDouble(o -> o.getValue()).sum();
				Double totalGoldTarget = (totalMonthGoldValue / lastDay) * noOfDaysBetween;
				rangeTotalGoldTarget += totalGoldTarget;
			}

			monthlyDiamondTarget = empItemMonthlyTargetRepo.findByTgtMonthAndItemTypeAndEmp(datesList.get(0),
					DIAMONDVALUE, employee);
			if (!monthlyDiamondTarget.isEmpty()) {
				Double totalMonthDiamondValue = monthlyDiamondTarget.stream().mapToDouble(o -> o.getValue()).sum();
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
							GOLDVALUE, employee);
					if (!monthlyGoldTarget.isEmpty()) {
						Double totalMonthGoldValue = monthlyGoldTarget.stream().mapToDouble(o -> o.getValue()).sum();
						Double totalGoldTarget = (totalMonthGoldValue / lastDay) * noOfDaysBetween;
						rangeTotalGoldTarget += totalGoldTarget;
					}

					monthlyDiamondTarget = empItemMonthlyTargetRepo.findByTgtMonthAndItemTypeAndEmp(datesList.get(i),
							DIAMONDVALUE, employee);
					if (!monthlyDiamondTarget.isEmpty()) {
						Double totalMonthDiamondValue = monthlyDiamondTarget.stream().mapToDouble(o -> o.getValue())
								.sum();
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
							GOLDVALUE, employee);
					if (!monthlyGoldTarget.isEmpty()) {
						Double totalMonthGoldValue = monthlyGoldTarget.stream().mapToDouble(o -> o.getValue()).sum();
						Double totalGoldTarget = (totalMonthGoldValue / lastDay) * noOfDaysBetween;
						rangeTotalGoldTarget += totalGoldTarget;
					}

					monthlyDiamondTarget = empItemMonthlyTargetRepo.findByTgtMonthAndItemTypeAndEmp(datesList.get(i),
							DIAMONDVALUE, employee);
					if (!monthlyDiamondTarget.isEmpty()) {
						Double totalMonthDiamondValue = monthlyDiamondTarget.stream().mapToDouble(o -> o.getValue())
								.sum();
						Double totalDiamondTarget = (totalMonthDiamondValue / lastDay) * noOfDaysBetween;
						rangeTotalDiamondTarget += totalDiamondTarget;
					}

				} else {

					String firstDay1 = datesList.get(i).substring(4, 8) + "-" + m + "-" + "01";
					LocalDate firstday = LocalDate.parse(firstDay1);
					noOfDaysBetween = ChronoUnit.DAYS.between(firstday, localEndDate) + 1;
					monthlyGoldTarget = empItemMonthlyTargetRepo.findByTgtMonthAndItemTypeAndEmp(datesList.get(i),
							GOLDVALUE, employee);
					if (!monthlyGoldTarget.isEmpty()) {
						Double totalMonthGoldValue = monthlyGoldTarget.stream().mapToDouble(o -> o.getValue()).sum();
						Double totalGoldTarget = (totalMonthGoldValue / lastDay) * noOfDaysBetween;
						rangeTotalGoldTarget += totalGoldTarget;
					}

					monthlyDiamondTarget = empItemMonthlyTargetRepo.findByTgtMonthAndItemTypeAndEmp(datesList.get(i),
							DIAMONDVALUE, employee);
					if (!monthlyDiamondTarget.isEmpty()) {
						Double totalMonthDiamondValue = monthlyDiamondTarget.stream().mapToDouble(o -> o.getValue())
								.sum();
						Double totalDiamondTarget = (totalMonthDiamondValue / lastDay) * noOfDaysBetween;
						rangeTotalDiamondTarget += totalDiamondTarget;
					}

				}

			}
		}
		response.put(GOLDTARGET, rangeTotalGoldTarget);
		response.put(DIAMONDTARGET, rangeTotalDiamondTarget);

		return response;

	}

	@SuppressWarnings("unchecked")
	@Override
	public ServiceResponse<JSONObject> getGrowthByChannel(String startDate1, String endDate1, String startDate2,
			String endDate2, String startDate3, String endDate3) {
		log.info("getting growth calculations by channel wise");
		ServiceResponse<JSONObject> response = new ServiceResponse<>();

		JSONObject finalObject = new JSONObject();

		List<String> channels = new ArrayList<>();

		JSONObject details = new JSONObject();

		JSONObject showRoom = new JSONObject();

		JSONObject d2h = new JSONObject();

		try {

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

			// showroom
			Channel showroom = channelRepo.findByChannelName("SHW");
			List<Employee> locationwiseEmployees = new ArrayList<>();

			if (role.getName().equals(ADMIN)) {

				List<Location> allShowroomLocations = locationRepo.findByChannel(showroom);

				for (Location showroomLocation : allShowroomLocations) {

					locationwiseEmployees.addAll(empRepo.findByLocation(showroomLocation));
				}

			} else {

				if (user.getEmpCode() != null) {

					Manager manager = managerRepo.findByEmpId(user.getEmpCode());

					Set<Location> locationList = manager.getLocation().stream().filter(o -> o.getChannel() == showroom)
							.collect(Collectors.toSet());
					List<Location> allShowroomLocations = new ArrayList<>();

					for (Location location : locationList) {

						allShowroomLocations.add(location);

					}
					for (Location showroomLocation : allShowroomLocations) {

						locationwiseEmployees.addAll(empRepo.findByLocation(showroomLocation));
					}

				}

			}

			// range1
			JSONObject range1 = actualGoldDiamondSale(startDate1, endDate1, locationwiseEmployees);
			Double range1Gold = (Double) range1.get(TOTALGOLD);
			Double range1Diamond = (Double) range1.get(TOTALDIAMOND);
			Double range1Total = (range1Gold + range1Diamond) / 100000;

			JSONObject range1Target = showroomTargets(startDate1, endDate1, locationwiseEmployees);
			Double range1GoldTarget = (Double) range1Target.get(GOLDTARGET);
			Double range1DiamondTarget = (Double) range1Target.get(DIAMONDTARGET);

			// range2
			JSONObject range2 = actualGoldDiamondSale(startDate2, endDate2, locationwiseEmployees);
			Double range2Gold = (Double) range2.get(TOTALGOLD);
			Double range2Diamond = (Double) range2.get(TOTALDIAMOND);
			Double range2Total = (range2Gold + range2Diamond) / 100000;

			JSONObject range2Target = showroomTargets(startDate2, endDate2, locationwiseEmployees);
			Double range2GoldTarget = (Double) range2Target.get(GOLDTARGET);
			Double range2DiamondTarget = (Double) range2Target.get(DIAMONDTARGET);

			// range3
			if ((!startDate3.contains("null")) && (!endDate3.contains("null"))) {
				JSONObject range3 = actualGoldDiamondSale(startDate3, endDate3, locationwiseEmployees);

				Double range3Gold = (Double) range3.get(TOTALGOLD);
				Double range3Diamond = (Double) range3.get(TOTALDIAMOND);

				Double range3Total = (range3Gold + range3Diamond) / 100000;

				JSONObject range3Target = showroomTargets(startDate3, endDate3, locationwiseEmployees);
				Double range3GoldTarget = (Double) range3Target.get(GOLDTARGET);
				Double range3DiamondTarget = (Double) range3Target.get(DIAMONDTARGET);

				showRoom.put(RANGE3_GOLD, range3Gold / 100000);
				showRoom.put(RANGE3_DIAMOND, range3Diamond / 100000);

				double value2 = range3Total - range1Total;
				double value3 = range3Total - range2Total;
				if (range1Total != 0) {
					if (value2 == 0.0) {
						showRoom.put(GROWTHR1_R3, 0);
					} else {
						double growthr1r3 = (value2 / range1Total) * 100;
						showRoom.put(GROWTHR1_R3, growthr1r3);
					}
				} else {

					showRoom.put(GROWTHR1_R3, 0);

				}
				if (range2Total != 0) {

					if (value3 == 0.0) {
						showRoom.put(GROWTHR2_R3, 0);
					} else {
						double growthr2r3 = (value3 / range2Total) * 100;
						showRoom.put(GROWTHR2_R3, growthr2r3);
					}
				} else {
					showRoom.put(GROWTHR2_R3, 0);

				}

				showRoom.put(GOLD_TARGET_R3, range3GoldTarget);
				showRoom.put(DIAMOND_TARGET_R3, range3DiamondTarget);
			}

			channels.add("SHW");

			showRoom.put(RANGE1_GOLD, range1Gold / 100000);
			showRoom.put(RANGE1_DIAMOND, range1Diamond / 100000);

			showRoom.put(RANGE2_GOLD, range2Gold / 100000);
			showRoom.put(RANGE2_DIAMOND, range2Diamond / 100000);

			showRoom.put(GOLD_TARGET_R1, range1GoldTarget);
			showRoom.put(GOLD_TARGET_R2, range2GoldTarget);

			showRoom.put(DIAMOND_TARGET_R1, range1DiamondTarget);
			showRoom.put(DIAMOND_TARGET_R2, range2DiamondTarget);

			// growth calculations

			double value = range2Total - range1Total;
			if (range1Total != 0) {
				if (value == 0.0) {
					showRoom.put(GROWTHR1_R2, 0);
				} else {
					double growthr1r2 = (value / range1Total) * 100;
					showRoom.put(GROWTHR1_R2, growthr1r2);
				}
			} else {
				showRoom.put(GROWTHR1_R2, 0);

			}

			details.put("shw", showRoom);

			// D2H

			Channel d2hChannel = channelRepo.findByChannelName("D2H");
			List<Employee> alld2hEmployees = new ArrayList<>();
			if (role.getName().equals(ADMIN)) {

				List<Location> alld2hLocations = locationRepo.findByChannel(d2hChannel);

				for (Location d2hLocation : alld2hLocations) {

					alld2hEmployees.addAll(empRepo.findByLocation(d2hLocation));
				}

			} else {

				if (user.getEmpCode() != null) {

					Manager manager = managerRepo.findByEmpId(user.getEmpCode());

					Set<Location> locationList = manager.getLocation().stream()
							.filter(o -> o.getChannel() == d2hChannel).collect(Collectors.toSet());
					List<Location> allD2hLocations = new ArrayList<>();

					for (Location location : locationList) {

						allD2hLocations.add(location);

					}
					for (Location d2hLocation : allD2hLocations) {

						alld2hEmployees.addAll(empRepo.findByLocation(d2hLocation));
					}

				}

			}

			// range1
			JSONObject d2hRange1 = actualGoldDiamondSale(startDate1, endDate1, alld2hEmployees);

			Double range1D2hGold = (Double) d2hRange1.get(TOTALGOLD);
			Double range1D2hDiamond = (Double) d2hRange1.get(TOTALDIAMOND);
			Double range1D2hTotal = (range1D2hGold + range1D2hDiamond) / 100000;

			JSONObject d2hTargetRange1 = d2hTargets(startDate1, endDate1);

			d2h.put(GOLD_TARGET_R1, d2hTargetRange1.get(GOLDTARGET));
			d2h.put(DIAMOND_TARGET_R1, d2hTargetRange1.get(DIAMONDTARGET));

			// range2
			JSONObject d2hRange2 = actualGoldDiamondSale(startDate2, endDate2, alld2hEmployees);

			Double range2D2hGold = (Double) d2hRange2.get(TOTALGOLD);
			Double range2D2hDiamond = (Double) d2hRange2.get(TOTALDIAMOND);
			Double range2D2hTotal = (range2D2hGold + range2D2hDiamond) / 100000;

			JSONObject d2hTargetRange2 = d2hTargets(startDate2, endDate2);

			d2h.put(GOLD_TARGET_R2, d2hTargetRange2.get(GOLDTARGET));
			d2h.put(DIAMOND_TARGET_R2, d2hTargetRange2.get(DIAMONDTARGET));

			// range3
			if ((!startDate3.contains("null")) && (!endDate3.contains("null"))) {
				JSONObject d2hRange3 = actualGoldDiamondSale(startDate3, endDate3, alld2hEmployees);

				Double range3D2hGold = (Double) d2hRange3.get(TOTALGOLD);
				Double range3D2hDiamond = (Double) d2hRange3.get(TOTALDIAMOND);
				Double range3D2hTotal = (range3D2hGold + range3D2hDiamond) / 100000;

				d2h.put(RANGE3_GOLD, range3D2hGold / 100000);
				d2h.put(RANGE3_DIAMOND, range3D2hDiamond / 100000);

				double value2 = range3D2hTotal - range1D2hTotal;
				double value3 = range3D2hTotal - range2D2hTotal;

				if (range1D2hTotal != 0) {

					if (value2 == 0.0) {
						d2h.put(GROWTHR1_R3, 0);
					} else {
						double growthr1r3 = (value2 / range1D2hTotal) * 100;
						d2h.put(GROWTHR1_R3, growthr1r3);
					}
				} else {
					d2h.put(GROWTHR1_R3, 0);
				}

				if (range2D2hTotal != 0) {
					if (value3 == 0.0) {
						d2h.put(GROWTHR2_R3, 0);
					} else {
						double growthr2r3 = (value3 / range2D2hTotal) * 100;
						d2h.put(GROWTHR2_R3, growthr2r3);
					}
				} else {

					d2h.put(GROWTHR2_R3, 0);
				}

				JSONObject d2hTargetRange3 = d2hTargets(startDate3, endDate3);

				d2h.put(GOLD_TARGET_R3, d2hTargetRange3.get(GOLDTARGET));
				d2h.put(DIAMOND_TARGET_R3, d2hTargetRange3.get(DIAMONDTARGET));

			}

			channels.add("D2H");

			d2h.put(RANGE1_GOLD, range1D2hGold / 100000);
			d2h.put(RANGE1_DIAMOND, range1D2hDiamond / 100000);

			d2h.put(RANGE2_GOLD, range2D2hGold / 100000);
			d2h.put(RANGE2_DIAMOND, range2D2hDiamond / 100000);

			// growth calculations
			double d2hValue = range2D2hTotal - range1D2hTotal;
			if (range1D2hTotal != 0) {
				if (d2hValue == 0.0) {
					d2h.put(GROWTHR1_R2, 0);
				} else {
					double growthr1r2 = (d2hValue / range1D2hTotal) * 100;
					d2h.put(GROWTHR1_R2, growthr1r2);
				}
			} else {

				d2h.put(GROWTHR1_R2, 0);

			}

			details.put("d2h", d2h);

			// set to final object
			finalObject.put("channels", channels);
			finalObject.put(DETAILS, details);
			response.setData(finalObject);
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS213.name(), EnumTypeForErrorCodes.SCUS213.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}

		return response;
	}

	@SuppressWarnings("unchecked")
	public JSONObject actualGoldDiamondSale(String startDate, String endDate, List<Employee> locationwiseEmployees) {
		log.info("calculating total diamond and gold sales by channel");
		JSONObject response = new JSONObject();

		Double totalGoldValue = 0.0;
		Double totalDiamondValue = 0.0;

		for (Employee employee : locationwiseEmployees) {
			// gold
			List<Sales> empGoldSales = salesRepo.findByStartDateAndEndDateAndItemTypeAndEmpId(startDate, endDate,
					GOLDVALUE, employee);
			Double totalEmpGoldSale = empGoldSales.stream().mapToDouble(o -> o.getTotalSoldAmount()).sum();

			Double totalGoldReturnValue = 0.0;

			for (Sales sale : empGoldSales) {

				SalesReturns salesReturns = salesReturnsRepo.findBySales(sale);

				if (salesReturns != null) {

					totalGoldReturnValue += salesReturns.getAmountPayable();

				}
			}

			Double totalEmpGoldActualValue = totalEmpGoldSale - totalGoldReturnValue;

			totalGoldValue += totalEmpGoldActualValue;

			// diamond
			List<Sales> empDiamondsales = salesRepo.findByStartDateAndEndDateAndItemTypeAndEmpId(startDate, endDate,
					DIAMONDVALUE, employee);
			Double totalEmpDiamondSales = empDiamondsales.stream().mapToDouble(o -> o.getTotalSoldAmount()).sum();

			Double totalDiamondReturnValue = 0.0;

			for (Sales sale : empDiamondsales) {

				SalesReturns salesReturns = salesReturnsRepo.findBySales(sale);

				if (salesReturns != null) {

					totalDiamondReturnValue += salesReturns.getAmountPayable();

				}
			}

			Double totalEmpDiamondActualValue = totalEmpDiamondSales - totalDiamondReturnValue;

			totalDiamondValue += totalEmpDiamondActualValue;

		}
		response.put(TOTALGOLD, totalGoldValue);
		response.put(TOTALDIAMOND, totalDiamondValue);

		return response;

	}

	@SuppressWarnings("unchecked")
	public JSONObject showroomTargets(String startDate, String endDate, List<Employee> locationwiseEmployees)
			throws ParseException {
		log.info("calculating showroom employee targets");

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
				monthlyGoldTarget = empItemMonthlyTargetRepo.findByTgtMonthAndItemTypeAndEmp(datesList.get(0),
						GOLDVALUE, employee);
				if (!monthlyGoldTarget.isEmpty()) {
					Double totalMonthGoldValue = monthlyGoldTarget.stream().mapToDouble(o -> o.getValue()).sum();
					Double totalGoldTarget = (totalMonthGoldValue / lastDay) * noOfDaysBetween;
					rangeTotalGoldTarget += totalGoldTarget;
				}

				monthlyDiamondTarget = empItemMonthlyTargetRepo.findByTgtMonthAndItemTypeAndEmp(datesList.get(0),
						DIAMONDVALUE, employee);
				if (!monthlyDiamondTarget.isEmpty()) {
					Double totalMonthDiamondValue = monthlyDiamondTarget.stream().mapToDouble(o -> o.getValue()).sum();
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
								GOLDVALUE, employee);
						if (!monthlyGoldTarget.isEmpty()) {
							Double totalMonthGoldValue = monthlyGoldTarget.stream().mapToDouble(o -> o.getValue())
									.sum();
							Double totalGoldTarget = (totalMonthGoldValue / lastDay) * noOfDaysBetween;
							rangeTotalGoldTarget += totalGoldTarget;
						}

						monthlyDiamondTarget = empItemMonthlyTargetRepo
								.findByTgtMonthAndItemTypeAndEmp(datesList.get(i), DIAMONDVALUE, employee);
						if (!monthlyDiamondTarget.isEmpty()) {
							Double totalMonthDiamondValue = monthlyDiamondTarget.stream().mapToDouble(o -> o.getValue())
									.sum();
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
								GOLDVALUE, employee);
						if (!monthlyGoldTarget.isEmpty()) {
							Double totalMonthGoldValue = monthlyGoldTarget.stream().mapToDouble(o -> o.getValue())
									.sum();
							Double totalGoldTarget = (totalMonthGoldValue / lastDay) * noOfDaysBetween;
							rangeTotalGoldTarget += totalGoldTarget;
						}

						monthlyDiamondTarget = empItemMonthlyTargetRepo
								.findByTgtMonthAndItemTypeAndEmp(datesList.get(i), DIAMONDVALUE, employee);
						if (!monthlyDiamondTarget.isEmpty()) {
							Double totalMonthDiamondValue = monthlyDiamondTarget.stream().mapToDouble(o -> o.getValue())
									.sum();
							Double totalDiamondTarget = (totalMonthDiamondValue / lastDay) * noOfDaysBetween;
							rangeTotalDiamondTarget += totalDiamondTarget;
						}

					} else {

						String firstDay1 = datesList.get(i).substring(4, 8) + "-" + m + "-" + "01";
						LocalDate firstday = LocalDate.parse(firstDay1);
						noOfDaysBetween = ChronoUnit.DAYS.between(firstday, localEndDate) + 1;
						monthlyGoldTarget = empItemMonthlyTargetRepo.findByTgtMonthAndItemTypeAndEmp(datesList.get(i),
								GOLDVALUE, employee);
						if (!monthlyGoldTarget.isEmpty()) {
							Double totalMonthGoldValue = monthlyGoldTarget.stream().mapToDouble(o -> o.getValue())
									.sum();
							Double totalGoldTarget = (totalMonthGoldValue / lastDay) * noOfDaysBetween;
							rangeTotalGoldTarget += totalGoldTarget;
						}

						monthlyDiamondTarget = empItemMonthlyTargetRepo
								.findByTgtMonthAndItemTypeAndEmp(datesList.get(i), DIAMONDVALUE, employee);
						if (!monthlyDiamondTarget.isEmpty()) {
							Double totalMonthDiamondValue = monthlyDiamondTarget.stream().mapToDouble(o -> o.getValue())
									.sum();
							Double totalDiamondTarget = (totalMonthDiamondValue / lastDay) * noOfDaysBetween;
							rangeTotalDiamondTarget += totalDiamondTarget;
						}

					}

				}
			}
		}

		response.put(GOLDTARGET, rangeTotalGoldTarget);
		response.put(DIAMONDTARGET, rangeTotalDiamondTarget);

		return response;

	}

	@SuppressWarnings("unchecked")
	public JSONObject d2hTargets(String startDate, String endDate) throws ParseException {
		log.info("calculating d2h employee targets");

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

			monthlyGoldTarget = teamItemMonthlyTargetRepo.findByMonthAndYearAndItemType(splitted[0], splitted[1],
					GOLDVALUE);
			if (!monthlyGoldTarget.isEmpty()) {
				Double totalMonthGoldValue = monthlyGoldTarget.stream().mapToDouble(o -> o.getValue()).sum();
				Double totalGoldTarget = (totalMonthGoldValue / lastDay) * noOfDaysBetween;
				rangeTotalGoldTarget += totalGoldTarget;
			}

			monthlyDiamondTarget = teamItemMonthlyTargetRepo.findByMonthAndYearAndItemType(splitted[0], splitted[1],
					DIAMONDVALUE);
			if (!monthlyDiamondTarget.isEmpty()) {
				Double totalMonthDiamondValue = monthlyDiamondTarget.stream().mapToDouble(o -> o.getValue()).sum();
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

					monthlyGoldTarget = teamItemMonthlyTargetRepo.findByMonthAndYearAndItemType(splitted[0],
							splitted[1], GOLDVALUE);
					if (!monthlyGoldTarget.isEmpty()) {
						Double totalMonthGoldValue = monthlyGoldTarget.stream().mapToDouble(o -> o.getValue()).sum();
						Double totalGoldTarget = (totalMonthGoldValue / lastDay) * noOfDaysBetween;
						rangeTotalGoldTarget += totalGoldTarget;
					}

					monthlyDiamondTarget = teamItemMonthlyTargetRepo.findByMonthAndYearAndItemType(splitted[0],
							splitted[1], DIAMONDVALUE);
					if (!monthlyDiamondTarget.isEmpty()) {
						Double totalMonthDiamondValue = monthlyDiamondTarget.stream().mapToDouble(o -> o.getValue())
								.sum();
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
					monthlyGoldTarget = teamItemMonthlyTargetRepo.findByMonthAndYearAndItemType(splitted[0],
							splitted[1], GOLDVALUE);
					if (!monthlyGoldTarget.isEmpty()) {
						Double totalMonthGoldValue = monthlyGoldTarget.stream().mapToDouble(o -> o.getValue()).sum();
						Double totalGoldTarget = (totalMonthGoldValue / lastDay) * noOfDaysBetween;
						rangeTotalGoldTarget += totalGoldTarget;
					}

					monthlyDiamondTarget = teamItemMonthlyTargetRepo.findByMonthAndYearAndItemType(splitted[0],
							splitted[1], DIAMONDVALUE);
					if (!monthlyDiamondTarget.isEmpty()) {
						Double totalMonthDiamondValue = monthlyDiamondTarget.stream().mapToDouble(o -> o.getValue())
								.sum();
						Double totalDiamondTarget = (totalMonthDiamondValue / lastDay) * noOfDaysBetween;
						rangeTotalDiamondTarget += totalDiamondTarget;
					}

				} else {

					String firstDay1 = datesList.get(i).substring(4, 8) + "-" + m + "-" + "01";
					LocalDate firstday = LocalDate.parse(firstDay1);
					noOfDaysBetween = ChronoUnit.DAYS.between(firstday, localEndDate) + 1;
					String[] splitted = datesList.get(i).split("-");
					monthlyGoldTarget = teamItemMonthlyTargetRepo.findByMonthAndYearAndItemType(splitted[0],
							splitted[1], GOLDVALUE);
					if (!monthlyGoldTarget.isEmpty()) {
						Double totalMonthGoldValue = monthlyGoldTarget.stream().mapToDouble(o -> o.getValue()).sum();
						Double totalGoldTarget = (totalMonthGoldValue / lastDay) * noOfDaysBetween;
						rangeTotalGoldTarget += totalGoldTarget;
					}

					monthlyDiamondTarget = teamItemMonthlyTargetRepo.findByMonthAndYearAndItemType(splitted[0],
							splitted[1], DIAMONDVALUE);
					if (!monthlyDiamondTarget.isEmpty()) {
						Double totalMonthDiamondValue = monthlyDiamondTarget.stream().mapToDouble(o -> o.getValue())
								.sum();
						Double totalDiamondTarget = (totalMonthDiamondValue / lastDay) * noOfDaysBetween;
						rangeTotalDiamondTarget += totalDiamondTarget;
					}

				}

			}
		}

		response.put(GOLDTARGET, rangeTotalGoldTarget);
		response.put(DIAMONDTARGET, rangeTotalDiamondTarget);

		return response;

	}

	@SuppressWarnings("unchecked")
	@Override
	public ServiceResponse<JSONObject> getGrowthByShowroomLocation(String startDate1, String endDate1,
			String startDate2, String endDate2, String startDate3, String endDate3) {
		log.info("Geeting growth calculations by showrrom locations");
		ServiceResponse<JSONObject> response = new ServiceResponse<>();

		JSONObject finalObject = new JSONObject();

		List<String> locations = new ArrayList<>();

		JSONObject details = new JSONObject();

		List<Double> range1gold = new ArrayList<>();
		List<Double> range1diamond = new ArrayList<>();
		List<Double> range2gold = new ArrayList<>();
		List<Double> range2diamond = new ArrayList<>();
		List<Double> range3gold = new ArrayList<>();
		List<Double> range3diamond = new ArrayList<>();
		List<Double> goldTargetr1 = new ArrayList<>();
		List<Double> goldTargetr2 = new ArrayList<>();
		List<Double> goldTargetr3 = new ArrayList<>();
		List<Double> diamondTargetr1 = new ArrayList<>();
		List<Double> diamondTargetr2 = new ArrayList<>();
		List<Double> diamondTargetr3 = new ArrayList<>();

		Double range1AllLocationsTotal = 0.0;
		Double range2AllLocationsTotal = 0.0;
		Double range3AllLocationsTotal = 0.0;

		try {

			Channel showroom = channelRepo.findByChannelName("SHW");

			List<Location> allShowroomLocations = new ArrayList<>();

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

				allShowroomLocations = locationRepo.findByChannel(showroom);

			} else {

				if (user.getEmpCode() != null) {

					Manager manager = managerRepo.findByEmpId(user.getEmpCode());

					Set<Location> locationList = manager.getLocation().stream().filter(o -> o.getChannel() == showroom)
							.collect(Collectors.toSet());

					for (Location location : locationList) {

						allShowroomLocations.add(location);

					}
				}

			}

			for (Location location : allShowroomLocations) {

				locations.add(location.getLocationCode());

				List<Employee> employees = empRepo.findByLocation(location);

				// range1
				JSONObject range1 = actualGoldDiamondSale(startDate1, endDate1, employees);
				Double range1Gold = (Double) range1.get(TOTALGOLD);
				Double range1Diamond = (Double) range1.get(TOTALDIAMOND);
				range1AllLocationsTotal += (range1Gold + range1Diamond) / 100000;

				JSONObject range1Target = showroomTargets(startDate1, endDate1, employees);
				Double range1GoldTarget = (Double) range1Target.get(GOLDTARGET);
				Double range1DiamondTarget = (Double) range1Target.get(DIAMONDTARGET);

				// range2
				JSONObject range2 = actualGoldDiamondSale(startDate2, endDate2, employees);
				Double range2Gold = (Double) range2.get(TOTALGOLD);
				Double range2Diamond = (Double) range2.get(TOTALDIAMOND);
				range2AllLocationsTotal += (range2Gold + range2Diamond) / 100000;

				JSONObject range2Target = showroomTargets(startDate2, endDate2, employees);
				Double range2GoldTarget = (Double) range2Target.get(GOLDTARGET);
				Double range2DiamondTarget = (Double) range2Target.get(DIAMONDTARGET);

				// range3
				if ((!startDate3.contains("null")) && (!endDate3.contains("null"))) {
					JSONObject range3 = actualGoldDiamondSale(startDate3, endDate3, employees);

					Double range3Gold = (Double) range3.get(TOTALGOLD);
					Double range3Diamond = (Double) range3.get(TOTALDIAMOND);

					range3AllLocationsTotal += (range3Gold + range3Diamond) / 100000;

					JSONObject range3Target = showroomTargets(startDate3, endDate3, employees);
					Double range3GoldTarget = (Double) range3Target.get(GOLDTARGET);
					Double range3DiamondTarget = (Double) range3Target.get(DIAMONDTARGET);

					range3gold.add(range3Gold / 100000);
					range3diamond.add(range3Diamond / 100000);

					goldTargetr3.add(range3GoldTarget);
					diamondTargetr3.add(range3DiamondTarget);

					details.put(RANGE3_GOLD, range3gold);
					details.put(RANGE3_DIAMOND, range3diamond);

					details.put(GOLD_TARGET_R3, goldTargetr3);
					details.put(DIAMOND_TARGET_R3, diamondTargetr3);

					finalObject.put(RANGE3, range3AllLocationsTotal);

				}

				range1gold.add(range1Gold / 100000);
				range1diamond.add(range1Diamond / 100000);

				range2gold.add(range2Gold / 100000);
				range2diamond.add(range2Diamond / 100000);

				goldTargetr1.add(range1GoldTarget);
				goldTargetr2.add(range2GoldTarget);

				diamondTargetr1.add(range1DiamondTarget);
				diamondTargetr2.add(range2DiamondTarget);

			}

			// growth calculations

			double value = range2AllLocationsTotal - range1AllLocationsTotal;
			if (range1AllLocationsTotal != 0) {
				if (value == 0.0) {
					finalObject.put(GROWTHR1_R2, 0);
				} else {
					double growthr1r2Value = (value / range1AllLocationsTotal) * 100;
					finalObject.put(GROWTHR1_R2, growthr1r2Value);
				}
			} else {
				finalObject.put(GROWTHR1_R2, 0);
			}

			if ((!startDate3.contains("null")) && (!endDate3.contains("null"))) {

				double value2 = range3AllLocationsTotal - range1AllLocationsTotal;
				double value3 = range3AllLocationsTotal - range2AllLocationsTotal;

				if (range1AllLocationsTotal != 0) {
					if (value2 == 0.0) {
						finalObject.put(GROWTHR1_R3, 0);
					} else {
						double growthr1r3Value = (value2 / range1AllLocationsTotal) * 100;
						finalObject.put(GROWTHR1_R3, growthr1r3Value);
					}
				} else {

					finalObject.put(GROWTHR1_R3, 0);

				}

				if (range2AllLocationsTotal != 0) {
					if (value3 == 0.0) {
						finalObject.put(GROWTHR2_R3, 0);
					} else {
						double growthr2r3Value = (value3 / range2AllLocationsTotal) * 100;
						finalObject.put(GROWTHR2_R3, growthr2r3Value);
					}
				} else {

					finalObject.put(GROWTHR2_R3, 0);

				}
			}

			details.put(RANGE1_GOLD, range1gold);
			details.put(RANGE1_DIAMOND, range1diamond);
			details.put(RANGE2_GOLD, range2gold);
			details.put(RANGE2_DIAMOND, range2diamond);

			details.put(GOLD_TARGET_R1, goldTargetr1);
			details.put(GOLD_TARGET_R2, goldTargetr2);

			details.put(DIAMOND_TARGET_R1, diamondTargetr1);
			details.put(DIAMOND_TARGET_R2, diamondTargetr2);

			finalObject.put(RANGE1, range1AllLocationsTotal);
			finalObject.put(RANGE2, range2AllLocationsTotal);

			finalObject.put("locations", locations);
			finalObject.put(DETAILS, details);
			response.setData(finalObject);
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS216.name(), EnumTypeForErrorCodes.SCUS216.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}
		return response;
	}

	@SuppressWarnings("unchecked")
	@Override
	public ServiceResponse<JSONObject> getGrowthByD2HLocation(String startDate1, String endDate1, String startDate2,
			String endDate2, String startDate3, String endDate3, String clusterName, String state) {
		log.info("Getting growth for D2H locations");
		ServiceResponse<JSONObject> response = new ServiceResponse<>();

		JSONObject finalObject = new JSONObject();

		List<String> locations = new ArrayList<>();

		JSONObject details = new JSONObject();

		List<Double> range1gold = new ArrayList<>();
		List<Double> range1diamond = new ArrayList<>();
		List<Double> range2gold = new ArrayList<>();
		List<Double> range2diamond = new ArrayList<>();
		List<Double> range3gold = new ArrayList<>();
		List<Double> range3diamond = new ArrayList<>();
		List<Double> goldTargetr1 = new ArrayList<>();
		List<Double> goldTargetr2 = new ArrayList<>();
		List<Double> goldTargetr3 = new ArrayList<>();
		List<Double> diamondTargetr1 = new ArrayList<>();
		List<Double> diamondTargetr2 = new ArrayList<>();
		List<Double> diamondTargetr3 = new ArrayList<>();

		Double range1AllLocationsTotal = 0.0;
		Double range2AllLocationsTotal = 0.0;
		Double range3AllLocationsTotal = 0.0;

		try {

			List<Location> allClusterLocations = new ArrayList<>();

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

				allClusterLocations = locationRepo.findByClusterAndState(clusterName, state);

			} else {

				if (user.getEmpCode() != null) {

					Manager manager = managerRepo.findByEmpId(user.getEmpCode());

					Set<Location> locationListcluster = manager.getLocation().stream()
							.filter(o -> o.getCluster().equals(clusterName)).collect(Collectors.toSet());

					Set<Location> locationListState = locationListcluster.stream()
							.filter(o -> o.getState().equals(state)).collect(Collectors.toSet());

					for (Location location : locationListState) {

						allClusterLocations.add(location);

					}
				}

			}

			for (Location location : allClusterLocations) {

				locations.add(location.getLocationCode());

				List<Employee> employees = empRepo.findByLocation(location);

				List<Team> team = teamRepo.findByLocation(location);

				// range1
				JSONObject range1 = actualGoldDiamondSale(startDate1, endDate1, employees);
				Double range1Gold = (Double) range1.get(TOTALGOLD);
				Double range1Diamond = (Double) range1.get(TOTALDIAMOND);
				range1AllLocationsTotal += (range1Gold + range1Diamond) / 100000;

				JSONObject range1Target = d2hTargetsByTeam(startDate1, endDate1, team);
				Double range1GoldTarget = (Double) range1Target.get(GOLDTARGET);
				Double range1DiamondTarget = (Double) range1Target.get(DIAMONDTARGET);

				// range2
				JSONObject range2 = actualGoldDiamondSale(startDate2, endDate2, employees);
				Double range2Gold = (Double) range2.get(TOTALGOLD);
				Double range2Diamond = (Double) range2.get(TOTALDIAMOND);
				range2AllLocationsTotal += (range2Gold + range2Diamond) / 100000;

				JSONObject range2Target = d2hTargetsByTeam(startDate2, endDate2, team);
				Double range2GoldTarget = (Double) range2Target.get(GOLDTARGET);
				Double range2DiamondTarget = (Double) range2Target.get(DIAMONDTARGET);

				// range3
				if ((!startDate3.contains("null")) && (!endDate3.contains("null"))) {
					JSONObject range3 = actualGoldDiamondSale(startDate3, endDate3, employees);

					Double range3Gold = (Double) range3.get(TOTALGOLD);
					Double range3Diamond = (Double) range3.get(TOTALDIAMOND);

					range3AllLocationsTotal += (range3Gold + range3Diamond) / 100000;

					JSONObject range3Target = d2hTargetsByTeam(startDate3, endDate3, team);
					Double range3GoldTarget = (Double) range3Target.get(GOLDTARGET);
					Double range3DiamondTarget = (Double) range3Target.get(DIAMONDTARGET);

					range3gold.add(range3Gold / 100000);
					range3diamond.add(range3Diamond / 100000);

					goldTargetr3.add(range3GoldTarget);
					diamondTargetr3.add(range3DiamondTarget);

					details.put(RANGE3_GOLD, range3gold);
					details.put(RANGE3_DIAMOND, range3diamond);

					details.put(GOLD_TARGET_R3, goldTargetr3);
					details.put(DIAMOND_TARGET_R3, diamondTargetr3);

					finalObject.put(RANGE3, range3AllLocationsTotal);
				}

				range1gold.add(range1Gold / 100000);
				range1diamond.add(range1Diamond / 100000);

				range2gold.add(range2Gold / 100000);
				range2diamond.add(range2Diamond / 100000);

				goldTargetr1.add(range1GoldTarget);
				goldTargetr2.add(range2GoldTarget);

				diamondTargetr1.add(range1DiamondTarget);
				diamondTargetr2.add(range2DiamondTarget);

			}

			// growth calculations

			double value = range2AllLocationsTotal - range1AllLocationsTotal;
			if (range1AllLocationsTotal != 0) {
				if (value == 0.0) {
					finalObject.put(GROWTHR1_R2, 0);
				} else {
					double growthr1r2Value = (value / range1AllLocationsTotal) * 100;
					finalObject.put(GROWTHR1_R2, growthr1r2Value);
				}
			} else {
				finalObject.put(GROWTHR1_R2, 0);
			}

			if ((!startDate3.contains("null")) && (!endDate3.contains("null"))) {

				double value2 = range3AllLocationsTotal - range1AllLocationsTotal;
				double value3 = range3AllLocationsTotal - range2AllLocationsTotal;

				if (range1AllLocationsTotal != 0) {
					if (value2 == 0.0) {
						finalObject.put(GROWTHR1_R3, 0);
					} else {
						double growthr1r3Value = (value2 / range1AllLocationsTotal) * 100;
						finalObject.put(GROWTHR1_R3, growthr1r3Value);
					}
				} else {

					finalObject.put(GROWTHR1_R3, 0);

				}

				if (range2AllLocationsTotal != 0) {
					if (value3 == 0.0) {
						finalObject.put(GROWTHR2_R3, 0);
					} else {
						double growthr2r3Value = (value3 / range2AllLocationsTotal) * 100;
						finalObject.put(GROWTHR2_R3, growthr2r3Value);
					}
				} else {

					finalObject.put(GROWTHR2_R3, 0);

				}
			}

			details.put(RANGE1_GOLD, range1gold);
			details.put(RANGE1_DIAMOND, range1diamond);
			details.put(RANGE2_GOLD, range2gold);
			details.put(RANGE2_DIAMOND, range2diamond);

			details.put(GOLD_TARGET_R1, goldTargetr1);
			details.put(GOLD_TARGET_R2, goldTargetr2);

			details.put(DIAMOND_TARGET_R1, diamondTargetr1);
			details.put(DIAMOND_TARGET_R2, diamondTargetr2);

			finalObject.put(RANGE1, range1AllLocationsTotal);
			finalObject.put(RANGE2, range2AllLocationsTotal);

			finalObject.put("locations", locations);
			finalObject.put(DETAILS, details);
			response.setData(finalObject);
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS217.name(), EnumTypeForErrorCodes.SCUS217.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}
		return response;
	}

	@SuppressWarnings("unchecked")
	public JSONObject d2hTargetsByTeam(String startDate, String endDate, List<Team> team) throws ParseException {

		log.info("Getting targets by team");

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

		for (Team eachTeam : team) {

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
						splitted[1], GOLDVALUE, eachTeam);
				if (!monthlyGoldTarget.isEmpty()) {
					Double totalMonthGoldValue = monthlyGoldTarget.stream().mapToDouble(o -> o.getValue()).sum();
					Double totalGoldTarget = (totalMonthGoldValue / lastDay) * noOfDaysBetween;
					rangeTotalGoldTarget += totalGoldTarget;
				}

				monthlyDiamondTarget = teamItemMonthlyTargetRepo.findByMonthAndYearAndItemTypeAndTeam(splitted[0],
						splitted[1], DIAMONDVALUE, eachTeam);
				if (!monthlyDiamondTarget.isEmpty()) {
					Double totalMonthDiamondValue = monthlyDiamondTarget.stream().mapToDouble(o -> o.getValue()).sum();
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
								splitted[1], GOLDVALUE, eachTeam);
						if (!monthlyGoldTarget.isEmpty()) {
							Double totalMonthGoldValue = monthlyGoldTarget.stream().mapToDouble(o -> o.getValue())
									.sum();
							Double totalGoldTarget = (totalMonthGoldValue / lastDay) * noOfDaysBetween;
							rangeTotalGoldTarget += totalGoldTarget;
						}

						monthlyDiamondTarget = teamItemMonthlyTargetRepo
								.findByMonthAndYearAndItemTypeAndTeam(splitted[0], splitted[1], DIAMONDVALUE, eachTeam);
						if (!monthlyDiamondTarget.isEmpty()) {
							Double totalMonthDiamondValue = monthlyDiamondTarget.stream().mapToDouble(o -> o.getValue())
									.sum();
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
								splitted[1], GOLDVALUE, eachTeam);
						if (!monthlyGoldTarget.isEmpty()) {
							Double totalMonthGoldValue = monthlyGoldTarget.stream().mapToDouble(o -> o.getValue())
									.sum();
							Double totalGoldTarget = (totalMonthGoldValue / lastDay) * noOfDaysBetween;
							rangeTotalGoldTarget += totalGoldTarget;
						}

						monthlyDiamondTarget = teamItemMonthlyTargetRepo
								.findByMonthAndYearAndItemTypeAndTeam(splitted[0], splitted[1], DIAMONDVALUE, eachTeam);
						if (!monthlyDiamondTarget.isEmpty()) {
							Double totalMonthDiamondValue = monthlyDiamondTarget.stream().mapToDouble(o -> o.getValue())
									.sum();
							Double totalDiamondTarget = (totalMonthDiamondValue / lastDay) * noOfDaysBetween;
							rangeTotalDiamondTarget += totalDiamondTarget;
						}

					} else {

						String firstDay1 = datesList.get(i).substring(4, 8) + "-" + m + "-" + "01";
						LocalDate firstday = LocalDate.parse(firstDay1);
						noOfDaysBetween = ChronoUnit.DAYS.between(firstday, localEndDate) + 1;
						String[] splitted = datesList.get(i).split("-");
						monthlyGoldTarget = teamItemMonthlyTargetRepo.findByMonthAndYearAndItemTypeAndTeam(splitted[0],
								splitted[1], GOLDVALUE, eachTeam);
						if (!monthlyGoldTarget.isEmpty()) {
							Double totalMonthGoldValue = monthlyGoldTarget.stream().mapToDouble(o -> o.getValue())
									.sum();
							Double totalGoldTarget = (totalMonthGoldValue / lastDay) * noOfDaysBetween;
							rangeTotalGoldTarget += totalGoldTarget;
						}

						monthlyDiamondTarget = teamItemMonthlyTargetRepo
								.findByMonthAndYearAndItemTypeAndTeam(splitted[0], splitted[1], DIAMONDVALUE, eachTeam);
						if (!monthlyDiamondTarget.isEmpty()) {
							Double totalMonthDiamondValue = monthlyDiamondTarget.stream().mapToDouble(o -> o.getValue())
									.sum();
							Double totalDiamondTarget = (totalMonthDiamondValue / lastDay) * noOfDaysBetween;
							rangeTotalDiamondTarget += totalDiamondTarget;
						}

					}

				}
			}
		}

		response.put(GOLDTARGET, rangeTotalGoldTarget);
		response.put(DIAMONDTARGET, rangeTotalDiamondTarget);

		return response;

	}
}

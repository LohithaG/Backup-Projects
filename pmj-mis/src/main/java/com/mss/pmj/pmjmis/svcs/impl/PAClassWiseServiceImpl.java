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
import java.util.Optional;

import javax.servlet.http.HttpServletResponse;

import org.json.simple.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.mss.pmj.pmjmis.common.EnumTypeForErrorCodes;
import com.mss.pmj.pmjmis.common.Utils;
import com.mss.pmj.pmjmis.domain.Employee;
import com.mss.pmj.pmjmis.domain.EmployeeItemMonthlyTarget;
import com.mss.pmj.pmjmis.domain.Location;
import com.mss.pmj.pmjmis.domain.Sales;
import com.mss.pmj.pmjmis.domain.SalesReturns;
import com.mss.pmj.pmjmis.repos.ChannelRepository;
import com.mss.pmj.pmjmis.repos.EmployeeItemMonthlyTargetRepository;
import com.mss.pmj.pmjmis.repos.EmployeeRepository;
import com.mss.pmj.pmjmis.repos.LocationRepository;
import com.mss.pmj.pmjmis.repos.SalesRepository;
import com.mss.pmj.pmjmis.repos.SalesReturnsRepository;
import com.mss.pmj.pmjmis.repos.TeamItemMonthlyTargetRepository;
import com.mss.pmj.pmjmis.response.Dates;
import com.mss.pmj.pmjmis.response.ItemQuantityValue;
import com.mss.pmj.pmjmis.response.PAAllClassesData;
import com.mss.pmj.pmjmis.response.PAAllClassesDetails;
import com.mss.pmj.pmjmis.response.Quantity;
import com.mss.pmj.pmjmis.response.QuantityList;
import com.mss.pmj.pmjmis.response.QuantityValue;
import com.mss.pmj.pmjmis.response.TargetVsActualResponse;
import com.mss.pmj.pmjmis.response.Value;
import com.mss.pmj.pmjmis.response.ValueList;
import com.mss.pmj.pmjmis.svcs.PAClassWiseService;

@SuppressWarnings("rawtypes")
@RestController
public class PAClassWiseServiceImpl implements PAClassWiseService {

	private static final Logger log = LoggerFactory.getLogger(PAClassWiseServiceImpl.class);

	@Autowired
	Utils utils;

	@Autowired
	SalesRepository salesRepo;

	@Autowired
	SalesReturnsRepository salesReturnRepo;

	@Autowired
	EmployeeItemMonthlyTargetRepository empItemMonthlyTargetRepo;

	@Autowired
	TeamItemMonthlyTargetRepository teamItemMonthlyTargetRepo;

	@Autowired
	ChannelRepository channelRepo;

	@Autowired
	EmployeeRepository employeeRepo;

	@Autowired
	LocationRepository locationRepo;

	@Autowired
	SalesReturnsRepository salesReturnsRepo;

	private static final String DATE_FORMATE = "MMM-yyyy";

	private static final String DIAMOND = "Diamond";

	private static final String GOLD = "Gold";

	private static final String SUCCESSFUL = "successful";
	private static final String TIMELINE = "timeLine";
	private static final String ACTUALS = "actuals";
	private static final String TARGETS = "targets";

	private static final String END_DATE_TIME_LINE = "endDateTimeline";
	private static final String START_DATE_TIME_LINE = "startDateTimeline";
	private static final String NUMBER_OF_DAYS = "numberOfDays";
	private static final String GOLD_EMP_ACTUAL_LIST = "goldEmpActualList";
	private static final String DIAMOND_EMP_ACTUAL_LIST = "diamondEmpActualList";
	private static final String GOLD_MONTHLY_TARGET_FOR_SHW = "goldMonthlyTargetForSHW";
	private static final String DIAMOND_MONTHLY_TARGET_FOR_SHW = "diamondMonthlyTargetForSHW";

// performance analysis for all channels

	@Override
	public TargetVsActualResponse<PAAllClassesData> forAllClasses(Long locationId, String startDate, String endDate) {
		log.info("getting PA for All Classes");

		TargetVsActualResponse<PAAllClassesData> response = new TargetVsActualResponse<>();

		PAAllClassesData<PAAllClassesDetails> paForAllClasses = new PAAllClassesData<>();

		PAAllClassesDetails paAllClassesDetails = new PAAllClassesDetails();

		List<String> classes = new ArrayList<>();

		List<Character> listOfClasses = new ArrayList<>();

		List<EmployeeItemMonthlyTarget> allClasses = empItemMonthlyTargetRepo.findAllClasses();

		for (EmployeeItemMonthlyTarget employeeItemMonthlyTarget : allClasses) {

			listOfClasses.add(employeeItemMonthlyTarget.getEmpClass());
		}

		QuantityValue targets = new QuantityValue();

		Quantity targetTotalQuantity = new Quantity();

		Value targetTotalValue = new Value();

		ItemQuantityValue targetdatalist = new ItemQuantityValue();

		QuantityList targetQuantityData = new QuantityList();

		ValueList targetValueData = new ValueList();

		ItemQuantityValue actualdatalist = new ItemQuantityValue();

		QuantityList actualQuantityData = new QuantityList();

		ValueList actualValueData = new ValueList();

		QuantityValue actuals = new QuantityValue();

		Quantity actualTotalQuantity = new Quantity();

		Value actualTotalValue = new Value();

		List<Double> targetGoldQuantityData = new ArrayList<>();
		List<Double> targetDiamondQuantityData = new ArrayList<>();
		List<Double> targetGoldValueData = new ArrayList<>();
		List<Double> targetDiamondValueData = new ArrayList<>();

		List<Double> actualGoldQuantityData = new ArrayList<>();
		List<Double> actualDiamondQuantityData = new ArrayList<>();
		List<Double> actualGoldValueData = new ArrayList<>();
		List<Double> actualDiamondValueData = new ArrayList<>();

		Double tgtDiaquantity = 0.0;
		Double tgtGoldQuantity = 0.0;
		Double tgtDiaValue = 0.0;
		Double tgtGoldValue = 0.0;

		Double totalgoldvalue = 0.0;
		Double totaldiamondValue = 0.0;
		Double totalgoldQuantity = 0.0;
		Double totaldiamondQuantity = 0.0;

		Double salesReturnGoldQuantityDetails = 0.0;
		Double salesReturnGoldValueDetails = 0.0;
		Double salesReturnDiamondQuantityDetails = 0.0;
		Double salesReturnDiamondValueDetails = 0.0;

		try {

			LocalDate localStartDate = LocalDate.parse(startDate);
			LocalDate localEndDate = LocalDate.parse(endDate);

			String date5 = localStartDate.getMonth() + "-" + localStartDate.getYear();
			String date6 = localEndDate.getMonth() + "-" + localEndDate.getYear();

			DateFormat formater = new SimpleDateFormat(DATE_FORMATE);

			Calendar beginCalendar = Calendar.getInstance();
			Calendar finishCalendar = Calendar.getInstance();

			beginCalendar.setTime(formater.parse(date5));
			finishCalendar.setTime(formater.parse(date6));

			List<String> datesList = new ArrayList<>();

			while (beginCalendar.before(finishCalendar)) {
				String date = formater.format(beginCalendar.getTime()).toUpperCase();
				beginCalendar.add(Calendar.MONTH, 1);
				datesList.add(date);
			}

			String lastMonth = formater.format(finishCalendar.getTime()).toUpperCase();
			datesList.add(lastMonth);

			for (Character empClass : listOfClasses) {
				classes.add("Class " + empClass);

				Double monthlyTargetGoldQuantity = 0.0;
				Double monthlyTargetGoldValue = 0.0;
				Double monthlyTargetDiamondQuantity = 0.0;
				Double monthlyTargetDiamondValue = 0.0;

				Double monthlyActualGoldQuantity = 0.0;
				Double monthlyActualGoldValue = 0.0;
				Double monthlyActualDiamondQuantity = 0.0;
				Double monthlyActualDiamondValue = 0.0;
				for (int i = 0; i < datesList.size(); i++) {

					Collection<Sales> goldEmpActualList = null;

					Collection<Sales> diamondEmpActualList = null;

					List<EmployeeItemMonthlyTarget> goldMonthlyTargetForSHW = null;

					List<EmployeeItemMonthlyTarget> diamondMonthlyTargetForSHW = null;

					long noOfDaysBetween = 0l;

					if (i == 0) {

						if (date5.equals(date6)) {

							goldMonthlyTargetForSHW = empItemMonthlyTargetRepo
									.findByLocationIdAndClassInTgtMonth(locationId, empClass, datesList.get(i), "Gold");
							diamondMonthlyTargetForSHW = empItemMonthlyTargetRepo.findByLocationIdAndClassInTgtMonth(
									locationId, empClass, datesList.get(i), DIAMOND);

							goldEmpActualList = salesRepo.salesDataInBetweenDatesByLocationIdAndEmpClassAndTgtMonth(
									locationId, empClass, datesList.get(i), startDate, endDate, GOLD);

							diamondEmpActualList = salesRepo.salesDataInBetweenDatesByLocationIdAndEmpClassAndTgtMonth(
									locationId, empClass, datesList.get(i), startDate, endDate, DIAMOND);

							noOfDaysBetween = ChronoUnit.DAYS.between(localStartDate, localEndDate) + 1;

						} else {

							Date date10 = new SimpleDateFormat(DATE_FORMATE).parse(datesList.get(i));
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

							goldMonthlyTargetForSHW = empItemMonthlyTargetRepo
									.findByLocationIdAndClassInTgtMonth(locationId, empClass, datesList.get(i), "Gold");

							diamondMonthlyTargetForSHW = empItemMonthlyTargetRepo.findByLocationIdAndClassInTgtMonth(
									locationId, empClass, datesList.get(i), DIAMOND);

							goldEmpActualList = salesRepo.salesDataInBetweenDatesByLocationIdAndEmpClassAndTgtMonth(
									locationId, empClass, datesList.get(i), startDate, lastDay1, GOLD);

							diamondEmpActualList = salesRepo.salesDataInBetweenDatesByLocationIdAndEmpClassAndTgtMonth(
									locationId, empClass, datesList.get(i), startDate, lastDay1, DIAMOND);

							noOfDaysBetween = ChronoUnit.DAYS.between(localStartDate, day) + 1;
						}

					} else if (i < datesList.size() - 1) {
						Date date10 = new SimpleDateFormat(DATE_FORMATE).parse(datesList.get(i));
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

						goldMonthlyTargetForSHW = empItemMonthlyTargetRepo
								.findByLocationIdAndClassInTgtMonth(locationId, empClass, datesList.get(i), GOLD);
						diamondMonthlyTargetForSHW = empItemMonthlyTargetRepo
								.findByLocationIdAndClassInTgtMonth(locationId, empClass, datesList.get(i), DIAMOND);

						goldEmpActualList = salesRepo.salesDataInBetweenDatesByLocationIdAndEmpClassAndTgtMonth(
								locationId, empClass, datesList.get(i), firstDay1, lastDay1, GOLD);

						diamondEmpActualList = salesRepo.salesDataInBetweenDatesByLocationIdAndEmpClassAndTgtMonth(
								locationId, empClass, datesList.get(i), firstDay1, lastDay1, DIAMOND);

						noOfDaysBetween = ChronoUnit.DAYS.between(firstday, day) + 1;
					} else {
						Date date10 = new SimpleDateFormat(DATE_FORMATE).parse(datesList.get(i));
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

						goldMonthlyTargetForSHW = empItemMonthlyTargetRepo
								.findByLocationIdAndClassInTgtMonth(locationId, empClass, datesList.get(i), "Gold");
						diamondMonthlyTargetForSHW = empItemMonthlyTargetRepo
								.findByLocationIdAndClassInTgtMonth(locationId, empClass, datesList.get(i), DIAMOND);

						goldEmpActualList = salesRepo.salesDataInBetweenDatesByLocationIdAndEmpClassAndTgtMonth(
								locationId, empClass, datesList.get(i), firstDay1, endDate, GOLD);

						diamondEmpActualList = salesRepo.salesDataInBetweenDatesByLocationIdAndEmpClassAndTgtMonth(
								locationId, empClass, datesList.get(i), firstDay1, endDate, DIAMOND);

						noOfDaysBetween = ChronoUnit.DAYS.between(firstday, localEndDate) + 1;
					}

					if (!goldMonthlyTargetForSHW.isEmpty()) {

						for (EmployeeItemMonthlyTarget empMonthlyTarget : goldMonthlyTargetForSHW) {

							Date date10 = new SimpleDateFormat(DATE_FORMATE).parse(empMonthlyTarget.getTgtMonth());
							Calendar cal = Calendar.getInstance();
							cal.setTime(date10);
							int lastDate = cal.getActualMaximum(Calendar.DATE);
							if (empMonthlyTarget.getItemType().equalsIgnoreCase(GOLD)) {

								monthlyTargetGoldQuantity = monthlyTargetGoldQuantity
										+ (empMonthlyTarget.getQuantity() / lastDate) * noOfDaysBetween;
								monthlyTargetGoldValue = monthlyTargetGoldValue
										+ (empMonthlyTarget.getValue() / lastDate) * noOfDaysBetween;
								tgtGoldQuantity = tgtGoldQuantity
										+ (empMonthlyTarget.getQuantity() / lastDate) * noOfDaysBetween;
								tgtGoldValue = tgtGoldValue
										+ (empMonthlyTarget.getValue() / lastDate) * noOfDaysBetween;

							}

						}

					}
					if (!diamondMonthlyTargetForSHW.isEmpty()) {

						for (EmployeeItemMonthlyTarget empMonthlyTarget : diamondMonthlyTargetForSHW) {

							Date date10 = new SimpleDateFormat(DATE_FORMATE).parse(empMonthlyTarget.getTgtMonth());

							Calendar cal = Calendar.getInstance();
							cal.setTime(date10);
							int lastDate = cal.getActualMaximum(Calendar.DATE);

							if (empMonthlyTarget.getItemType().equalsIgnoreCase(DIAMOND)) {

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

					if (!goldEmpActualList.isEmpty()) {

						for (Sales saleData : goldEmpActualList) {

							if (saleData.getItemType().equalsIgnoreCase(GOLD)) {

								monthlyActualGoldValue = monthlyActualGoldValue + saleData.getTotalSoldAmount();
								monthlyActualGoldQuantity = monthlyActualGoldQuantity + saleData.getGrossWeight();

								totalgoldvalue = totalgoldvalue + saleData.getTotalSoldAmount();
								totalgoldQuantity = totalgoldQuantity + saleData.getGrossWeight();

							}
							SalesReturns salesReturns = salesReturnsRepo.findBySales(saleData);
							Double salesReturnGoldQuantity = 0.0;
							Double salesReturnGoldValue = 0.0;

							if (salesReturns != null && saleData.getItemType().equalsIgnoreCase(GOLD)) {

								salesReturnGoldQuantity = salesReturnGoldQuantity + salesReturns.getGrossWeight();

								salesReturnGoldQuantityDetails = salesReturnGoldQuantityDetails
										+ salesReturns.getGrossWeight();
								salesReturnGoldValue = salesReturnGoldValue + salesReturns.getAmountPayable();
								salesReturnGoldValueDetails = salesReturnGoldValueDetails
										+ salesReturns.getAmountPayable();
								monthlyActualGoldQuantity -= salesReturnGoldQuantity;
								monthlyActualGoldValue -= salesReturnGoldValue;

							}

						}

					}
					if (!diamondEmpActualList.isEmpty()) {

						for (Sales saleData : diamondEmpActualList) {

							if (saleData.getItemType().equalsIgnoreCase(DIAMOND)) {
								monthlyActualDiamondValue = monthlyActualDiamondValue + saleData.getTotalSoldAmount();

								monthlyActualDiamondQuantity = monthlyActualDiamondQuantity
										+ saleData.getDiamondWeight();

								totaldiamondValue = totaldiamondValue + saleData.getTotalSoldAmount();

								totaldiamondQuantity = totaldiamondQuantity + saleData.getDiamondWeight();

							}
							SalesReturns salesReturns = salesReturnsRepo.findBySales(saleData);
							Double salesReturnDiamondQuantity = 0.0;
							Double salesReturnDiamondValue = 0.0;
							if (salesReturns != null && saleData.getItemType().equalsIgnoreCase(DIAMOND)) {

								salesReturnDiamondQuantity = salesReturnDiamondQuantity
										+ salesReturns.getDiamondWeight();
								salesReturnDiamondQuantityDetails = salesReturnDiamondQuantityDetails
										+ salesReturns.getDiamondWeight();

								salesReturnDiamondValue = salesReturnDiamondValue + salesReturns.getAmountPayable();
								salesReturnDiamondValueDetails = salesReturnDiamondValueDetails
										+ salesReturns.getAmountPayable();
								monthlyActualDiamondQuantity -= salesReturnDiamondQuantity;
								monthlyActualDiamondValue -= salesReturnDiamondValue;

							}

						}

					}

				}

				actualGoldQuantityData.add(monthlyActualGoldQuantity / 1000);
				actualDiamondQuantityData.add(monthlyActualDiamondQuantity);
				actualGoldValueData.add(monthlyActualGoldValue / 100000);
				actualDiamondValueData.add(monthlyActualDiamondValue / 100000);

				targetDiamondQuantityData.add(monthlyTargetDiamondQuantity);

				targetGoldValueData.add(monthlyTargetGoldValue);
				targetGoldQuantityData.add(monthlyTargetGoldQuantity);

				targetDiamondValueData.add(monthlyTargetDiamondValue);

			}
// quantity and value of gold and diamond data list
			targetQuantityData.setDiamond(targetDiamondQuantityData);
			targetQuantityData.setGold(targetGoldQuantityData);
			targetValueData.setDiamond(targetDiamondValueData);
			targetValueData.setGold(targetGoldValueData);

			targetdatalist.setQty(targetQuantityData);

			targetdatalist.setValue(targetValueData);

			targetTotalQuantity.setDiamond(tgtDiaquantity);
			targetTotalQuantity.setGold(tgtGoldQuantity);

			targetTotalValue.setDiamond(tgtDiaValue);
			targetTotalValue.setGold(tgtGoldValue);

			targets.setQty(targetTotalQuantity);
			targets.setValue(targetTotalValue);

			actualQuantityData.setDiamond(actualDiamondQuantityData);
			actualQuantityData.setGold(actualGoldQuantityData);

			actualValueData.setDiamond(actualDiamondValueData);
			actualValueData.setGold(actualGoldValueData);

			actualdatalist.setQty(actualQuantityData);
			actualdatalist.setValue(actualValueData);

			actualTotalQuantity.setDiamond((totaldiamondQuantity - salesReturnDiamondQuantityDetails));
			actualTotalQuantity.setGold((totalgoldQuantity - salesReturnGoldQuantityDetails) / 1000);

			actualTotalValue.setDiamond((totaldiamondValue - salesReturnDiamondValueDetails) / 100000);
			actualTotalValue.setGold((totalgoldvalue - salesReturnGoldValueDetails) / 100000);

			actuals.setQty(actualTotalQuantity);
			actuals.setValue(actualTotalValue);

			paAllClassesDetails.setTarget(targetdatalist);
			paAllClassesDetails.setActuals(actualdatalist);

			paAllClassesDetails.setClasses(classes);

			paForAllClasses.setTarget(targets);
			paForAllClasses.setActuals(actuals);

			paForAllClasses.setDetails(paAllClassesDetails);

			response.setData(paForAllClasses);
			response.setStatus(HttpServletResponse.SC_OK);
			response.setMessage(SUCCESSFUL);
			response.setFromDate(startDate);
			response.setToDate(endDate);

		}

		catch (Exception e) {

			response.setError(EnumTypeForErrorCodes.SCUS831.name(), EnumTypeForErrorCodes.SCUS831.errorMsg());
			response.setMessage("Failed to get PA for All Classes");
			log.error(utils.toJson(response.getError()), e);

		}

		return response;
	}

	@Override
	public TargetVsActualResponse<PAAllClassesData> forEachClass(Long locationId, String empClass, String startDate,
			String endDate) {
		log.info("getting PA for Each Class");

		TargetVsActualResponse<PAAllClassesData> response = new TargetVsActualResponse<>();

		try {
			LocalDate localStartDate = LocalDate.parse(startDate);
			LocalDate localEndDate = LocalDate.parse(endDate);

			long betweenDays = ChronoUnit.DAYS.between(localStartDate, localEndDate);
			char empClassType = empClass.charAt(6);

			if (betweenDays < 15) {
// daywise
				response = getPAForEachClassByDay(locationId, empClassType, startDate, endDate);
			} else if (betweenDays >= 15 && betweenDays <= 60) {
// week wise
				response = getPAForEachClassByWeek(locationId, empClassType, startDate, endDate);
			} else {
// month wise
				response = getPAForEachClassByMonth(locationId, empClassType, startDate, endDate);
			}

		} catch (Exception e) {

			response.setError(EnumTypeForErrorCodes.SCUS832.name(), EnumTypeForErrorCodes.SCUS832.errorMsg());
			response.setMessage("Failed to get PA for Each Class");
			log.error(utils.toJson(response.getError()), e);

		}

		return response;
	}

	@SuppressWarnings("unchecked")
	private TargetVsActualResponse<PAAllClassesData> getPAForEachClassByMonth(Long locationId, char empClass,
			String startDate, String endDate) {
		log.info("getting PA For Each Class By Month");
		TargetVsActualResponse<PAAllClassesData> response = new TargetVsActualResponse<>();

		PAAllClassesData paForEachClasses = new PAAllClassesData();

		List<org.json.simple.JSONObject> paEachClassDetails = new ArrayList<>();

		org.json.simple.JSONObject timeLineDetails = new org.json.simple.JSONObject();

		// time line target objects
		QuantityValue targets = new QuantityValue();

		Quantity targetTotalQuantity = new Quantity();

		Value targetTotalValue = new Value();

		ItemQuantityValue targetdatalist = new ItemQuantityValue();

		QuantityList targetQuantityData = new QuantityList();

		ValueList targetValueData = new ValueList();

		// time line actual objects
		ItemQuantityValue actualdatalist = new ItemQuantityValue();

		QuantityList actualQuantityData = new QuantityList();

		ValueList actualValueData = new ValueList();

		QuantityValue actuals = new QuantityValue();

		Quantity actualTotalQuantity = new Quantity();

		Value actualTotalValue = new Value();

		List<Double> targetGoldQuantityData = new ArrayList<>();
		List<Double> targetDiamondQuantityData = new ArrayList<>();
		List<Double> targetGoldValueData = new ArrayList<>();
		List<Double> targetDiamondValueData = new ArrayList<>();

		List<Double> actualGoldQuantityData = new ArrayList<>();
		List<Double> actualDiamondQuantityData = new ArrayList<>();
		List<Double> actualGoldValueData = new ArrayList<>();
		List<Double> actualDiamondValueData = new ArrayList<>();

		Double tgtDiaquantity = 0.0;
		Double tgtGoldQuantity = 0.0;
		Double tgtDiaValue = 0.0;
		Double tgtGoldValue = 0.0;

		Double totalgoldvalue = 0.0;
		Double totaldiamondValue = 0.0;
		Double totalgoldQuantity = 0.0;
		Double totaldiamondQuantity = 0.0;

		Double salesReturnGoldQuantityDetails = 0.0;
		Double salesReturnGoldValueDetails = 0.0;
		Double salesReturnDiamondQuantityDetails = 0.0;
		Double salesReturnDiamondValueDetails = 0.0;

		List<String> timeLine = new ArrayList<>();

		try {

			LocalDate localStartDate = LocalDate.parse(startDate);
			LocalDate localEndDate = LocalDate.parse(endDate);

			String date5 = localStartDate.getMonth() + "-" + localStartDate.getYear();
			String date6 = localEndDate.getMonth() + "-" + localEndDate.getYear();

			DateFormat formater = new SimpleDateFormat(DATE_FORMATE);

			Calendar beginCalendar = Calendar.getInstance();
			Calendar finishCalendar = Calendar.getInstance();

			beginCalendar.setTime(formater.parse(date5));
			finishCalendar.setTime(formater.parse(date6));

			List<String> datesList = new ArrayList<>();

			while (beginCalendar.before(finishCalendar)) {
				String date = formater.format(beginCalendar.getTime()).toUpperCase();
				beginCalendar.add(Calendar.MONTH, 1);
				datesList.add(date);
			}

			String lastMonth = formater.format(finishCalendar.getTime()).toUpperCase();
			datesList.add(lastMonth);

			for (int i = 0; i < datesList.size(); i++) {

				Double monthlyTargetGoldQuantity = 0.0;
				Double monthlyTargetGoldValue = 0.0;
				Double monthlyTargetDiamondQuantity = 0.0;
				Double monthlyTargetDiamondValue = 0.0;

				Double monthlyActualGoldQuantity = 0.0;
				Double monthlyActualGoldValue = 0.0;
				Double monthlyActualDiamondQuantity = 0.0;
				Double monthlyActualDiamondValue = 0.0;

				Collection<Sales> goldEmpActualList = null;

				Collection<Sales> diamondEmpActualList = null;

				List<EmployeeItemMonthlyTarget> goldMonthlyTargetForSHW = null;

				List<EmployeeItemMonthlyTarget> diamondMonthlyTargetForSHW = null;

				long noOfDaysBetween = 0l;

				if (i == 0) {

					if (date5.equals(date6)) {

						goldMonthlyTargetForSHW = empItemMonthlyTargetRepo
								.findByLocationIdAndClassInTgtMonth(locationId, empClass, datesList.get(i), "Gold");
						diamondMonthlyTargetForSHW = empItemMonthlyTargetRepo
								.findByLocationIdAndClassInTgtMonth(locationId, empClass, datesList.get(i), DIAMOND);

						goldEmpActualList = salesRepo.salesDataInBetweenDatesByLocationIdAndEmpClassAndTgtMonth(
								locationId, empClass, datesList.get(i), startDate, endDate, "Gold");

						diamondEmpActualList = salesRepo.salesDataInBetweenDatesByLocationIdAndEmpClassAndTgtMonth(
								locationId, empClass, datesList.get(i), startDate, endDate, DIAMOND);

						noOfDaysBetween = ChronoUnit.DAYS.between(localStartDate, localEndDate) + 1;

					} else {

						Date date10 = new SimpleDateFormat(DATE_FORMATE).parse(datesList.get(i));
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

						goldMonthlyTargetForSHW = empItemMonthlyTargetRepo
								.findByLocationIdAndClassInTgtMonth(locationId, empClass, datesList.get(i), "Gold");

						diamondMonthlyTargetForSHW = empItemMonthlyTargetRepo
								.findByLocationIdAndClassInTgtMonth(locationId, empClass, datesList.get(i), DIAMOND);

						goldEmpActualList = salesRepo.salesDataInBetweenDatesByLocationIdAndEmpClassAndTgtMonth(
								locationId, empClass, datesList.get(i), startDate, lastDay1, "Gold");

						diamondEmpActualList = salesRepo.salesDataInBetweenDatesByLocationIdAndEmpClassAndTgtMonth(
								locationId, empClass, datesList.get(i), startDate, lastDay1, DIAMOND);

						noOfDaysBetween = ChronoUnit.DAYS.between(localStartDate, day) + 1;
					}

				} else if (i < datesList.size() - 1) {
					Date date10 = new SimpleDateFormat(DATE_FORMATE).parse(datesList.get(i));
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

					goldMonthlyTargetForSHW = empItemMonthlyTargetRepo.findByLocationIdAndClassInTgtMonth(locationId,
							empClass, datesList.get(i), "Gold");
					diamondMonthlyTargetForSHW = empItemMonthlyTargetRepo.findByLocationIdAndClassInTgtMonth(locationId,
							empClass, datesList.get(i), DIAMOND);

					goldEmpActualList = salesRepo.salesDataInBetweenDatesByLocationIdAndEmpClassAndTgtMonth(locationId,
							empClass, datesList.get(i), firstDay1, lastDay1, "Gold");

					diamondEmpActualList = salesRepo.salesDataInBetweenDatesByLocationIdAndEmpClassAndTgtMonth(
							locationId, empClass, datesList.get(i), firstDay1, lastDay1, DIAMOND);

					noOfDaysBetween = ChronoUnit.DAYS.between(firstday, day) + 1;
				} else {
					Date date10 = new SimpleDateFormat(DATE_FORMATE).parse(datesList.get(i));
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

					goldMonthlyTargetForSHW = empItemMonthlyTargetRepo.findByLocationIdAndClassInTgtMonth(locationId,
							empClass, datesList.get(i), "Gold");
					diamondMonthlyTargetForSHW = empItemMonthlyTargetRepo.findByLocationIdAndClassInTgtMonth(locationId,
							empClass, datesList.get(i), DIAMOND);

					goldEmpActualList = salesRepo.salesDataInBetweenDatesByLocationIdAndEmpClassAndTgtMonth(locationId,
							empClass, datesList.get(i), firstDay1, endDate, "Gold");

					diamondEmpActualList = salesRepo.salesDataInBetweenDatesByLocationIdAndEmpClassAndTgtMonth(
							locationId, empClass, datesList.get(i), firstDay1, endDate, DIAMOND);

					noOfDaysBetween = ChronoUnit.DAYS.between(firstday, localEndDate) + 1;
				}

				timeLine.add(datesList.get(i));

				if (!goldMonthlyTargetForSHW.isEmpty()) {

					for (EmployeeItemMonthlyTarget empMonthlyTarget : goldMonthlyTargetForSHW) {

						Date date10 = new SimpleDateFormat(DATE_FORMATE).parse(empMonthlyTarget.getTgtMonth());
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
							tgtGoldValue = tgtGoldValue + (empMonthlyTarget.getValue() / lastDate) * noOfDaysBetween;

						}

					}

				}

				if (!diamondMonthlyTargetForSHW.isEmpty()) {

					for (EmployeeItemMonthlyTarget empMonthlyTarget : diamondMonthlyTargetForSHW) {

						Date date10 = new SimpleDateFormat(DATE_FORMATE).parse(empMonthlyTarget.getTgtMonth());

						Calendar cal = Calendar.getInstance();
						cal.setTime(date10);
						int lastDate = cal.getActualMaximum(Calendar.DATE);

						if (empMonthlyTarget.getItemType().equalsIgnoreCase(DIAMOND)) {

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

				if (!goldEmpActualList.isEmpty()) {

					for (Sales saleData : goldEmpActualList) {

						if (saleData.getItemType().equalsIgnoreCase(GOLD)) {

							monthlyActualGoldValue = monthlyActualGoldValue + saleData.getTotalSoldAmount();
							monthlyActualGoldQuantity = monthlyActualGoldQuantity + saleData.getGrossWeight();

							totalgoldvalue = totalgoldvalue + saleData.getTotalSoldAmount();
							totalgoldQuantity = totalgoldQuantity + saleData.getGrossWeight();

						}
						SalesReturns salesReturns = salesReturnsRepo.findBySales(saleData);
						Double salesReturnGoldQuantity = 0.0;
						Double salesReturnGoldValue = 0.0;

						if (salesReturns != null && saleData.getItemType().equalsIgnoreCase(GOLD)) {

							salesReturnGoldQuantity = salesReturnGoldQuantity + salesReturns.getGrossWeight();

							salesReturnGoldQuantityDetails = salesReturnGoldQuantityDetails
									+ salesReturns.getGrossWeight();
							salesReturnGoldValue = salesReturnGoldValue + salesReturns.getAmountPayable();
							salesReturnGoldValueDetails = salesReturnGoldValueDetails + salesReturns.getAmountPayable();
							monthlyActualGoldQuantity -= salesReturnGoldQuantity;
							monthlyActualGoldValue -= salesReturnGoldValue;

						}

					}

				}
				if (!diamondEmpActualList.isEmpty()) {

					for (Sales saleData : diamondEmpActualList) {

						if (saleData.getItemType().equalsIgnoreCase(DIAMOND)) {
							monthlyActualDiamondValue = monthlyActualDiamondValue + saleData.getTotalSoldAmount();

							monthlyActualDiamondQuantity = monthlyActualDiamondQuantity + saleData.getDiamondWeight();

							totaldiamondValue = totaldiamondValue + saleData.getTotalSoldAmount();

							totaldiamondQuantity = totaldiamondQuantity + saleData.getDiamondWeight();

						}
						SalesReturns salesReturns = salesReturnsRepo.findBySales(saleData);
						Double salesReturnDiamondQuantity = 0.0;
						Double salesReturnDiamondValue = 0.0;
						if (salesReturns != null && saleData.getItemType().equalsIgnoreCase(DIAMOND)) {

							salesReturnDiamondQuantity = salesReturnDiamondQuantity + salesReturns.getDiamondWeight();
							salesReturnDiamondQuantityDetails = salesReturnDiamondQuantityDetails
									+ salesReturns.getDiamondWeight();

							salesReturnDiamondValue = salesReturnDiamondValue + salesReturns.getAmountPayable();
							salesReturnDiamondValueDetails = salesReturnDiamondValueDetails
									+ salesReturns.getAmountPayable();
							monthlyActualDiamondQuantity -= salesReturnDiamondQuantity;
							monthlyActualDiamondValue -= salesReturnDiamondValue;

						}

					}

				}

				actualGoldQuantityData.add(monthlyActualGoldQuantity / 1000);
				actualDiamondQuantityData.add(monthlyActualDiamondQuantity);
				actualGoldValueData.add(monthlyActualGoldValue / 100000);
				actualDiamondValueData.add(monthlyActualDiamondValue / 100000);

				targetDiamondQuantityData.add(monthlyTargetDiamondQuantity);

				targetGoldValueData.add(monthlyTargetGoldValue);
				targetGoldQuantityData.add(monthlyTargetGoldQuantity);

				targetDiamondValueData.add(monthlyTargetDiamondValue);

			}

			// quantity and value of gold and diamond data list
			targetQuantityData.setDiamond(targetDiamondQuantityData);
			targetQuantityData.setGold(targetGoldQuantityData);
			targetValueData.setDiamond(targetDiamondValueData);
			targetValueData.setGold(targetGoldValueData);

			targetdatalist.setQty(targetQuantityData);

			targetdatalist.setValue(targetValueData);

			targetTotalQuantity.setDiamond(tgtDiaquantity);
			targetTotalQuantity.setGold(tgtGoldQuantity);

			targetTotalValue.setDiamond(tgtDiaValue);
			targetTotalValue.setGold(tgtGoldValue);

			targets.setQty(targetTotalQuantity);
			targets.setValue(targetTotalValue);

			actualQuantityData.setDiamond(actualDiamondQuantityData);
			actualQuantityData.setGold(actualGoldQuantityData);

			actualValueData.setDiamond(actualDiamondValueData);
			actualValueData.setGold(actualGoldValueData);

			actualdatalist.setQty(actualQuantityData);
			actualdatalist.setValue(actualValueData);

			actualTotalQuantity.setDiamond((totaldiamondQuantity - salesReturnDiamondQuantityDetails));
			actualTotalQuantity.setGold((totalgoldQuantity - salesReturnGoldQuantityDetails) / 1000);

			actualTotalValue.setDiamond((totaldiamondValue - salesReturnDiamondValueDetails) / 100000);
			actualTotalValue.setGold((totalgoldvalue - salesReturnGoldValueDetails) / 100000);

			actuals.setQty(actualTotalQuantity);
			actuals.setValue(actualTotalValue);

			timeLineDetails.put(TIMELINE, timeLine);
			timeLineDetails.put(ACTUALS, actualdatalist);
			timeLineDetails.put(TARGETS, targetdatalist);

			JSONObject employeeData = paForEachClassEmployeeWise(startDate, endDate, locationId, empClass).getData();

			paEachClassDetails.add(timeLineDetails);
			paEachClassDetails.add(employeeData);

			paForEachClasses.setActuals(actuals);
			paForEachClasses.setTarget(targets);
			paForEachClasses.setDetails(paEachClassDetails);

			response.setData(paForEachClasses);
			response.setStatus(HttpServletResponse.SC_OK);
			response.setMessage(SUCCESSFUL);
			response.setFromDate(startDate);
			response.setToDate(endDate);

		} catch (Exception e) {

			response.setError(EnumTypeForErrorCodes.SCUS833.name(), EnumTypeForErrorCodes.SCUS833.errorMsg());
			response.setMessage("Failed to get PA for Each Class By Month");
			log.error(utils.toJson(response.getError()), e);

		}

		return response;
	}

	@SuppressWarnings("unchecked")
	private TargetVsActualResponse<PAAllClassesData> getPAForEachClassByWeek(Long locationId, char empClass,
			String startDate, String endDate) {
		log.info("getting PA For Each Class By Week");

		TargetVsActualResponse<PAAllClassesData> response = new TargetVsActualResponse<>();

		PAAllClassesData paForEachClasses = new PAAllClassesData();

		List<org.json.simple.JSONObject> paEachClassDetails = new ArrayList<>();

		org.json.simple.JSONObject timeLineDetails = new org.json.simple.JSONObject();

		// time line target objects
		QuantityValue targets = new QuantityValue();

		Quantity targetTotalQuantity = new Quantity();

		Value targetTotalValue = new Value();

		ItemQuantityValue targetdatalist = new ItemQuantityValue();

		QuantityList targetQuantityData = new QuantityList();

		ValueList targetValueData = new ValueList();

		// time line actual objects
		ItemQuantityValue actualdatalist = new ItemQuantityValue();

		QuantityList actualQuantityData = new QuantityList();

		ValueList actualValueData = new ValueList();

		QuantityValue actuals = new QuantityValue();

		Quantity actualTotalQuantity = new Quantity();

		Value actualTotalValue = new Value();

		List<Double> targetGoldQuantityData = new ArrayList<>();
		List<Double> targetDiamondQuantityData = new ArrayList<>();
		List<Double> targetGoldValueData = new ArrayList<>();
		List<Double> targetDiamondValueData = new ArrayList<>();

		List<Double> actualGoldQuantityData = new ArrayList<>();
		List<Double> actualDiamondQuantityData = new ArrayList<>();
		List<Double> actualGoldValueData = new ArrayList<>();
		List<Double> actualDiamondValueData = new ArrayList<>();

		Double tgtDiaquantity = 0.0;
		Double tgtGoldQuantity = 0.0;
		Double tgtDiaValue = 0.0;
		Double tgtGoldValue = 0.0;

		Double totalgoldvalue = 0.0;
		Double totaldiamondValue = 0.0;
		Double totalgoldQuantity = 0.0;
		Double totaldiamondQuantity = 0.0;

		Double salesReturnGoldQuantityDetails = 0.0;
		Double salesReturnGoldValueDetails = 0.0;
		Double salesReturnDiamondQuantityDetails = 0.0;
		Double salesReturnDiamondValueDetails = 0.0;

		List<String> timeLine = new ArrayList<>();

		try {

			LocalDate localStartDate = LocalDate.parse(startDate);
			LocalDate localEndDate = LocalDate.parse(endDate);

			List<Dates> weeksList = new ArrayList<>();
			int count = 1;
			LocalDate start;
			while (localStartDate.isBefore(localEndDate)) {
				Dates date = new Dates();
				date.setStartDate(localStartDate);
				start = localStartDate;
				localStartDate = localStartDate.plusWeeks(1);
				if (localStartDate.isBefore(localEndDate)) {
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
			long noOfDaysBetween = 0l;

			Collection<Sales> goldEmpActualList = null;

			Collection<Sales> diamondEmpActualList = null;

			List<EmployeeItemMonthlyTarget> goldMonthlyTargetForSHW = null;

			List<EmployeeItemMonthlyTarget> diamondMonthlyTargetForSHW = null;

			for (Dates dateValue : weeksList) {

				LocalDate sample1 = dateValue.getStartDate();
				LocalDate sample2 = dateValue.getEndDate();

				String samp = dateValue.getStartDate().toString();
				String samp1 = dateValue.getEndDate().toString();
				String date1 = sample1.getMonth() + "-" + sample1.getYear();
				String date2 = sample2.getMonth() + "-" + sample2.getYear();

				DateFormat formater = new SimpleDateFormat(DATE_FORMATE);

				Calendar beginCalendar = Calendar.getInstance();
				Calendar finishCalendar = Calendar.getInstance();

				beginCalendar.setTime(formater.parse(date1));
				finishCalendar.setTime(formater.parse(date2));
				List<String> datesList = new ArrayList<>();

				while (beginCalendar.before(finishCalendar)) {
					String date10 = formater.format(beginCalendar.getTime()).toUpperCase();
					beginCalendar.add(Calendar.MONTH, 1);
					datesList.add(date10);
				}
				String lastMonth = formater.format(finishCalendar.getTime()).toUpperCase();
				datesList.add(lastMonth);

				List<JSONObject> sampList = new ArrayList<>();

				if (datesList.size() == 1) {

					JSONObject sample = new JSONObject();

					Date date10 = new SimpleDateFormat(DATE_FORMATE).parse(datesList.get(0));
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

					goldMonthlyTargetForSHW = empItemMonthlyTargetRepo.findByLocationIdAndClassInTgtMonth(locationId,
							empClass, datesList.get(0), GOLD);
					diamondMonthlyTargetForSHW = empItemMonthlyTargetRepo.findByLocationIdAndClassInTgtMonth(locationId,
							empClass, datesList.get(0), DIAMOND);

					goldEmpActualList = salesRepo.salesDataInBetweenDatesByLocationIdAndEmpClassAndTgtMonth(locationId,
							empClass, datesList.get(0), samp, samp1, GOLD);

					diamondEmpActualList = salesRepo.salesDataInBetweenDatesByLocationIdAndEmpClassAndTgtMonth(
							locationId, empClass, datesList.get(0), samp, samp1, DIAMOND);
					noOfDaysBetween = ChronoUnit.DAYS.between(dateValue.getStartDate(), dateValue.getEndDate()) + 1;

					sample.put(END_DATE_TIME_LINE, dateValue.getEndDate().toString());
					sample.put(START_DATE_TIME_LINE, dateValue.getStartDate().toString());
					sample.put(NUMBER_OF_DAYS, noOfDaysBetween);
					sample.put(GOLD_EMP_ACTUAL_LIST, goldEmpActualList);
					sample.put(DIAMOND_EMP_ACTUAL_LIST, diamondEmpActualList);
					sample.put(GOLD_MONTHLY_TARGET_FOR_SHW, goldMonthlyTargetForSHW);
					sample.put(DIAMOND_MONTHLY_TARGET_FOR_SHW, diamondMonthlyTargetForSHW);
					sampList.add(sample);

				} else {

					for (int i = 0; i < datesList.size(); i++) {
						Date date10 = new SimpleDateFormat(DATE_FORMATE).parse(datesList.get(i));
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
						String firstDay1 = datesList.get(i).substring(4, 8) + "-" + m + "-" + "01";
						String lastDay1 = datesList.get(i).substring(4, 8) + "-" + m + "-" + lastDay;
						LocalDate day2 = LocalDate.parse(lastDay1);

						if (i == 0) {
							JSONObject sample = new JSONObject();

							goldMonthlyTargetForSHW = empItemMonthlyTargetRepo
									.findByLocationIdAndClassInTgtMonth(locationId, empClass, datesList.get(i), "Gold");
							diamondMonthlyTargetForSHW = empItemMonthlyTargetRepo.findByLocationIdAndClassInTgtMonth(
									locationId, empClass, datesList.get(i), DIAMOND);

							goldEmpActualList = salesRepo.salesDataInBetweenDatesByLocationIdAndEmpClassAndTgtMonth(
									locationId, empClass, datesList.get(i), dateValue.getStartDate().toString(),
									lastDay1, "Gold");

							diamondEmpActualList = salesRepo.salesDataInBetweenDatesByLocationIdAndEmpClassAndTgtMonth(
									locationId, empClass, datesList.get(i), dateValue.getStartDate().toString(),
									lastDay1, DIAMOND);

							noOfDaysBetween = ChronoUnit.DAYS.between(dateValue.getStartDate(), day2) + 1;

							sample.put(END_DATE_TIME_LINE, lastDay1);
							sample.put(START_DATE_TIME_LINE, dateValue.getStartDate().toString());
							sample.put(NUMBER_OF_DAYS, noOfDaysBetween);
							sample.put(GOLD_EMP_ACTUAL_LIST, goldEmpActualList);
							sample.put(DIAMOND_EMP_ACTUAL_LIST, diamondEmpActualList);
							sample.put(GOLD_MONTHLY_TARGET_FOR_SHW, goldMonthlyTargetForSHW);
							sample.put(DIAMOND_MONTHLY_TARGET_FOR_SHW, diamondMonthlyTargetForSHW);
							sampList.add(sample);
						} else {
							JSONObject sample = new JSONObject();

							goldMonthlyTargetForSHW = empItemMonthlyTargetRepo
									.findByLocationIdAndClassInTgtMonth(locationId, empClass, datesList.get(i), "Gold");
							diamondMonthlyTargetForSHW = empItemMonthlyTargetRepo.findByLocationIdAndClassInTgtMonth(
									locationId, empClass, datesList.get(i), DIAMOND);

							goldEmpActualList = salesRepo.salesDataInBetweenDatesByLocationIdAndEmpClassAndTgtMonth(
									locationId, empClass, datesList.get(i), firstDay1,
									dateValue.getEndDate().toString(), "Gold");

							diamondEmpActualList = salesRepo.salesDataInBetweenDatesByLocationIdAndEmpClassAndTgtMonth(
									locationId, empClass, datesList.get(i), firstDay1,
									dateValue.getEndDate().toString(), DIAMOND);

							noOfDaysBetween = ChronoUnit.DAYS.between(dateValue.getStartDate(), day2) + 1;

							sample.put(END_DATE_TIME_LINE, dateValue.getEndDate().toString());
							sample.put(START_DATE_TIME_LINE, firstDay1);
							sample.put(NUMBER_OF_DAYS, noOfDaysBetween);
							sample.put(GOLD_EMP_ACTUAL_LIST, goldEmpActualList);
							sample.put(DIAMOND_EMP_ACTUAL_LIST, diamondEmpActualList);
							sample.put(GOLD_MONTHLY_TARGET_FOR_SHW, goldMonthlyTargetForSHW);
							sample.put(DIAMOND_MONTHLY_TARGET_FOR_SHW, diamondMonthlyTargetForSHW);
							sampList.add(sample);
						}

					}
				}

				timeLine.add(dateValue.getWeekNumber());
				Double monthlyTargetGoldQuantity = 0.0;
				Double monthlyTargetGoldValue = 0.0;
				Double monthlyTargetDiamondQuantity = 0.0;
				Double monthlyTargetDiamondValue = 0.0;

				Double monthlyActualGoldQuantity = 0.0;
				Double monthlyActualGoldValue = 0.0;
				Double monthlyActualDiamondQuantity = 0.0;
				Double monthlyActualDiamondValue = 0.0;

				for (JSONObject sample : sampList) {

					Collection<Sales> goldEmpActualList1 = (Collection<Sales>) sample.get(GOLD_EMP_ACTUAL_LIST);
					Collection<Sales> diamondEmpActualList1 = (Collection<Sales>) sample.get(DIAMOND_EMP_ACTUAL_LIST);
					List<EmployeeItemMonthlyTarget> goldMonthlyTargetForSHW1 = (List<EmployeeItemMonthlyTarget>) sample
							.get(GOLD_MONTHLY_TARGET_FOR_SHW);
					List<EmployeeItemMonthlyTarget> diamondMonthlyTargetForSHW1 = (List<EmployeeItemMonthlyTarget>) sample
							.get(DIAMOND_MONTHLY_TARGET_FOR_SHW);
					if (!goldMonthlyTargetForSHW1.isEmpty()) {

						for (EmployeeItemMonthlyTarget empMonthlyTarget : goldMonthlyTargetForSHW) {

							Date date10 = new SimpleDateFormat(DATE_FORMATE).parse(empMonthlyTarget.getTgtMonth());
							Calendar cal = Calendar.getInstance();
							cal.setTime(date10);
							int lastDate = cal.getActualMaximum(Calendar.DATE);
							if (empMonthlyTarget.getItemType().equalsIgnoreCase(GOLD)) {

								monthlyTargetGoldQuantity = monthlyTargetGoldQuantity
										+ (empMonthlyTarget.getQuantity() / lastDate) * noOfDaysBetween;
								monthlyTargetGoldValue = monthlyTargetGoldValue
										+ (empMonthlyTarget.getValue() / lastDate) * noOfDaysBetween;
								tgtGoldQuantity = tgtGoldQuantity
										+ (empMonthlyTarget.getQuantity() / lastDate) * noOfDaysBetween;
								tgtGoldValue = tgtGoldValue
										+ (empMonthlyTarget.getValue() / lastDate) * noOfDaysBetween;

							}

						}

					}

					if (!diamondMonthlyTargetForSHW1.isEmpty()) {

						for (EmployeeItemMonthlyTarget empMonthlyTarget : diamondMonthlyTargetForSHW) {

							Date date10 = new SimpleDateFormat(DATE_FORMATE).parse(empMonthlyTarget.getTgtMonth());

							Calendar cal = Calendar.getInstance();
							cal.setTime(date10);
							int lastDate = cal.getActualMaximum(Calendar.DATE);

							if (empMonthlyTarget.getItemType().equalsIgnoreCase(DIAMOND)) {

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

					if (!goldEmpActualList.isEmpty()) {

						for (Sales saleData : goldEmpActualList1) {

							if (saleData.getItemType().equalsIgnoreCase(GOLD)) {

								monthlyActualGoldValue = monthlyActualGoldValue + saleData.getTotalSoldAmount();
								monthlyActualGoldQuantity = monthlyActualGoldQuantity + saleData.getGrossWeight();

								totalgoldvalue = totalgoldvalue + saleData.getTotalSoldAmount();
								totalgoldQuantity = totalgoldQuantity + saleData.getGrossWeight();

							}
							SalesReturns salesReturns = salesReturnsRepo.findBySales(saleData);
							Double salesReturnGoldQuantity = 0.0;
							Double salesReturnGoldValue = 0.0;

							if (salesReturns != null && saleData.getItemType().equalsIgnoreCase(GOLD)) {

								salesReturnGoldQuantity = salesReturnGoldQuantity + salesReturns.getGrossWeight();

								salesReturnGoldQuantityDetails = salesReturnGoldQuantityDetails
										+ salesReturns.getGrossWeight();
								salesReturnGoldValue = salesReturnGoldValue + salesReturns.getAmountPayable();
								salesReturnGoldValueDetails = salesReturnGoldValueDetails
										+ salesReturns.getAmountPayable();
								monthlyActualGoldQuantity -= salesReturnGoldQuantity;
								monthlyActualGoldValue -= salesReturnGoldValue;

							}

						}

					}
					if (!diamondEmpActualList1.isEmpty()) {

						for (Sales saleData : diamondEmpActualList) {

							if (saleData.getItemType().equalsIgnoreCase(DIAMOND)) {
								monthlyActualDiamondValue = monthlyActualDiamondValue + saleData.getTotalSoldAmount();

								monthlyActualDiamondQuantity = monthlyActualDiamondQuantity
										+ saleData.getDiamondWeight();

								totaldiamondValue = totaldiamondValue + saleData.getTotalSoldAmount();

								totaldiamondQuantity = totaldiamondQuantity + saleData.getDiamondWeight();

							}
							SalesReturns salesReturns = salesReturnsRepo.findBySales(saleData);
							Double salesReturnDiamondQuantity = 0.0;
							Double salesReturnDiamondValue = 0.0;
							if (salesReturns != null && saleData.getItemType().equalsIgnoreCase(DIAMOND)) {

								salesReturnDiamondQuantity = salesReturnDiamondQuantity
										+ salesReturns.getDiamondWeight();
								salesReturnDiamondQuantityDetails = salesReturnDiamondQuantityDetails
										+ salesReturns.getDiamondWeight();

								salesReturnDiamondValue = salesReturnDiamondValue + salesReturns.getAmountPayable();
								salesReturnDiamondValueDetails = salesReturnDiamondValueDetails
										+ salesReturns.getAmountPayable();
								monthlyActualDiamondQuantity -= salesReturnDiamondQuantity;
								monthlyActualDiamondValue -= salesReturnDiamondValue;

							}

						}

					}

				}
				actualGoldQuantityData.add(monthlyActualGoldQuantity / 1000);
				actualDiamondQuantityData.add(monthlyActualDiamondQuantity);
				actualGoldValueData.add(monthlyActualGoldValue / 100000);
				actualDiamondValueData.add(monthlyActualDiamondValue / 100000);

				targetDiamondQuantityData.add(monthlyTargetDiamondQuantity);

				targetGoldValueData.add(monthlyTargetGoldValue);
				targetGoldQuantityData.add(monthlyTargetGoldQuantity);

				targetDiamondValueData.add(monthlyTargetDiamondValue);

			}

			// quantity and value of gold and diamond data list
			targetQuantityData.setDiamond(targetDiamondQuantityData);
			targetQuantityData.setGold(targetGoldQuantityData);
			targetValueData.setDiamond(targetDiamondValueData);
			targetValueData.setGold(targetGoldValueData);

			targetdatalist.setQty(targetQuantityData);

			targetdatalist.setValue(targetValueData);

			targetTotalQuantity.setDiamond(tgtDiaquantity);
			targetTotalQuantity.setGold(tgtGoldQuantity);

			targetTotalValue.setDiamond(tgtDiaValue);
			targetTotalValue.setGold(tgtGoldValue);

			targets.setQty(targetTotalQuantity);
			targets.setValue(targetTotalValue);

			actualQuantityData.setDiamond(actualDiamondQuantityData);
			actualQuantityData.setGold(actualGoldQuantityData);

			actualValueData.setDiamond(actualDiamondValueData);
			actualValueData.setGold(actualGoldValueData);

			actualdatalist.setQty(actualQuantityData);
			actualdatalist.setValue(actualValueData);

			actualTotalQuantity.setDiamond((totaldiamondQuantity - salesReturnDiamondQuantityDetails));
			actualTotalQuantity.setGold((totalgoldQuantity - salesReturnGoldQuantityDetails) / 1000);

			actualTotalValue.setDiamond((totaldiamondValue - salesReturnDiamondValueDetails) / 100000);
			actualTotalValue.setGold((totalgoldvalue - salesReturnGoldValueDetails) / 100000);

			actuals.setQty(actualTotalQuantity);
			actuals.setValue(actualTotalValue);

			timeLineDetails.put(TIMELINE, timeLine);
			timeLineDetails.put(ACTUALS, actualdatalist);
			timeLineDetails.put(TARGETS, targetdatalist);

			JSONObject employeeData = paForEachClassEmployeeWise(startDate, endDate, locationId, empClass).getData();

			paEachClassDetails.add(timeLineDetails);
			paEachClassDetails.add(employeeData);

			paForEachClasses.setActuals(actuals);
			paForEachClasses.setTarget(targets);
			paForEachClasses.setDetails(paEachClassDetails);

			response.setData(paForEachClasses);
			response.setStatus(HttpServletResponse.SC_OK);
			response.setMessage(SUCCESSFUL);
			response.setFromDate(startDate);
			response.setToDate(endDate);

		} catch (Exception e) {

			response.setError(EnumTypeForErrorCodes.SCUS834.name(), EnumTypeForErrorCodes.SCUS834.errorMsg());
			response.setMessage("Failed to get PA for each Classe by Week");
			log.error(utils.toJson(response.getError()), e);

		}

		return response;
	}

	@SuppressWarnings("unchecked")
	private TargetVsActualResponse<PAAllClassesData> getPAForEachClassByDay(Long locationId, char empClass,
			String startDate, String endDate) {
		log.info("getting PA For Each Class By Day");

		TargetVsActualResponse<PAAllClassesData> response = new TargetVsActualResponse<>();
		PAAllClassesData paForEachClasses = new PAAllClassesData();

		List<org.json.simple.JSONObject> paEachClassDetails = new ArrayList<>();

		org.json.simple.JSONObject timeLineDetails = new org.json.simple.JSONObject();

		// time line target objects
		QuantityValue targets = new QuantityValue();

		Quantity targetTotalQuantity = new Quantity();

		Value targetTotalValue = new Value();

		ItemQuantityValue targetdatalist = new ItemQuantityValue();

		QuantityList targetQuantityData = new QuantityList();

		ValueList targetValueData = new ValueList();

		// time line actual objects
		ItemQuantityValue actualdatalist = new ItemQuantityValue();

		QuantityList actualQuantityData = new QuantityList();

		ValueList actualValueData = new ValueList();

		QuantityValue actuals = new QuantityValue();

		Quantity actualTotalQuantity = new Quantity();

		Value actualTotalValue = new Value();

		List<Double> targetGoldQuantityData = new ArrayList<>();
		List<Double> targetDiamondQuantityData = new ArrayList<>();
		List<Double> targetGoldValueData = new ArrayList<>();
		List<Double> targetDiamondValueData = new ArrayList<>();

		List<Double> actualGoldQuantityData = new ArrayList<>();
		List<Double> actualDiamondQuantityData = new ArrayList<>();
		List<Double> actualGoldValueData = new ArrayList<>();
		List<Double> actualDiamondValueData = new ArrayList<>();

		Double tgtDiaquantity = 0.0;
		Double tgtGoldQuantity = 0.0;
		Double tgtDiaValue = 0.0;
		Double tgtGoldValue = 0.0;

		Double totalgoldvalue = 0.0;
		Double totaldiamondValue = 0.0;
		Double totalgoldQuantity = 0.0;
		Double totaldiamondQuantity = 0.0;

		Double salesReturnGoldQuantityDetails = 0.0;
		Double salesReturnGoldValueDetails = 0.0;
		Double salesReturnDiamondQuantityDetails = 0.0;
		Double salesReturnDiamondValueDetails = 0.0;

		List<String> timeLine = new ArrayList<>();

		try {

			List<String> datesList = new ArrayList<>();

			LocalDate localStartDate = LocalDate.parse(startDate);
			LocalDate localEndDate = LocalDate.parse(endDate);
			String date1 = localStartDate.getMonth() + "-" + localStartDate.getYear();
			String date2 = localEndDate.getMonth() + "-" + localEndDate.getYear();
			DateFormat formater = new SimpleDateFormat(DATE_FORMATE);
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

			Collection<Sales> goldEmpActualList = null;

			Collection<Sales> diamondEmpActualList = null;

			List<EmployeeItemMonthlyTarget> goldMonthlyTargetForSHW = null;

			List<EmployeeItemMonthlyTarget> diamondMonthlyTargetForSHW = null;
			String startDateTimeline = null;

			String endDateTimeline = null;

			long noOfDaysBetween = 0l;

			List<JSONObject> sampList = new ArrayList<>();

			if (datesList.size() == 1) {

				JSONObject sample = new JSONObject();

				goldMonthlyTargetForSHW = empItemMonthlyTargetRepo.findByLocationIdAndClassInTgtMonth(locationId,
						empClass, datesList.get(0), GOLD);
				diamondMonthlyTargetForSHW = empItemMonthlyTargetRepo.findByLocationIdAndClassInTgtMonth(locationId,
						empClass, datesList.get(0), DIAMOND);

				noOfDaysBetween = ChronoUnit.DAYS.between(localStartDate, localEndDate) + 1;
				startDateTimeline = startDate;
				endDateTimeline = endDate;
				sample.put(END_DATE_TIME_LINE, endDateTimeline);
				sample.put(START_DATE_TIME_LINE, startDateTimeline);
				sample.put(NUMBER_OF_DAYS, noOfDaysBetween);
				sample.put(GOLD_EMP_ACTUAL_LIST, goldEmpActualList);
				sample.put(DIAMOND_EMP_ACTUAL_LIST, diamondEmpActualList);
				sample.put(GOLD_MONTHLY_TARGET_FOR_SHW, goldMonthlyTargetForSHW);
				sample.put(DIAMOND_MONTHLY_TARGET_FOR_SHW, diamondMonthlyTargetForSHW);
				sampList.add(sample);

			} else {

				for (int i = 0; i < datesList.size(); i++) {

					Date date10 = new SimpleDateFormat(DATE_FORMATE).parse(datesList.get(i));
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

						JSONObject sample = new JSONObject();

						String lastDay1 = datesList.get(i).substring(4, 8) + "-" + m + "-" + lastDay;
						LocalDate day = LocalDate.parse(lastDay1);

						goldMonthlyTargetForSHW = empItemMonthlyTargetRepo
								.findByLocationIdAndClassInTgtMonth(locationId, empClass, datesList.get(i), "Gold");
						diamondMonthlyTargetForSHW = empItemMonthlyTargetRepo
								.findByLocationIdAndClassInTgtMonth(locationId, empClass, datesList.get(i), DIAMOND);

						noOfDaysBetween = ChronoUnit.DAYS.between(localStartDate, day) + 1;
						startDateTimeline = startDate;
						endDateTimeline = lastDay1;
						sample.put(END_DATE_TIME_LINE, lastDay1);
						sample.put(START_DATE_TIME_LINE, startDate);
						sample.put(NUMBER_OF_DAYS, noOfDaysBetween);
						sample.put(GOLD_EMP_ACTUAL_LIST, goldEmpActualList);
						sample.put(DIAMOND_EMP_ACTUAL_LIST, diamondEmpActualList);
						sample.put(GOLD_MONTHLY_TARGET_FOR_SHW, goldMonthlyTargetForSHW);
						sample.put(DIAMOND_MONTHLY_TARGET_FOR_SHW, diamondMonthlyTargetForSHW);
						sample.put("tgt_month", datesList.get(i));

						sampList.add(sample);
					} else {
						JSONObject sample = new JSONObject();

						String firstDay1 = datesList.get(i).substring(4, 8) + "-" + m + "-" + "01";
						LocalDate day = LocalDate.parse(firstDay1);

						goldMonthlyTargetForSHW = empItemMonthlyTargetRepo
								.findByLocationIdAndClassInTgtMonth(locationId, empClass, datesList.get(i), "Gold");
						diamondMonthlyTargetForSHW = empItemMonthlyTargetRepo
								.findByLocationIdAndClassInTgtMonth(locationId, empClass, datesList.get(i), DIAMOND);

						noOfDaysBetween = ChronoUnit.DAYS.between(day, localEndDate) + 1;
						startDateTimeline = firstDay1;
						endDateTimeline = endDate;
						sample.put(END_DATE_TIME_LINE, endDate);
						sample.put(START_DATE_TIME_LINE, firstDay1);
						sample.put(NUMBER_OF_DAYS, noOfDaysBetween);
						sample.put(GOLD_EMP_ACTUAL_LIST, goldEmpActualList);
						sample.put(DIAMOND_EMP_ACTUAL_LIST, diamondEmpActualList);
						sample.put(GOLD_MONTHLY_TARGET_FOR_SHW, goldMonthlyTargetForSHW);
						sample.put(DIAMOND_MONTHLY_TARGET_FOR_SHW, diamondMonthlyTargetForSHW);
						sample.put("tgt_month", datesList.get(i));

						sampList.add(sample);
					}

				}
			}

			for (JSONObject sample : sampList) {

				startDateTimeline = (String) sample.get(START_DATE_TIME_LINE);

				List<EmployeeItemMonthlyTarget> goldMonthlyTargetForSHW1 = (List<EmployeeItemMonthlyTarget>) sample
						.get(GOLD_MONTHLY_TARGET_FOR_SHW);
				List<EmployeeItemMonthlyTarget> diamondMonthlyTargetForSHW1 = (List<EmployeeItemMonthlyTarget>) sample
						.get(DIAMOND_MONTHLY_TARGET_FOR_SHW);

				for (int i = 0; i < (Long) sample.get(DIAMOND_MONTHLY_TARGET_FOR_SHW); i++) {

					Double monthlyTargetGoldQuantity = 0.0;
					Double monthlyTargetGoldValue = 0.0;
					Double monthlyTargetDiamondQuantity = 0.0;
					Double monthlyTargetDiamondValue = 0.0;

					Double monthlyActualGoldQuantity = 0.0;
					Double monthlyActualGoldValue = 0.0;
					Double monthlyActualDiamondQuantity = 0.0;
					Double monthlyActualDiamondValue = 0.0;

					if (!goldMonthlyTargetForSHW1.isEmpty()) {

						for (EmployeeItemMonthlyTarget empMonthlyTarget : goldMonthlyTargetForSHW) {

							Date date10 = new SimpleDateFormat(DATE_FORMATE).parse(empMonthlyTarget.getTgtMonth());
							Calendar cal = Calendar.getInstance();
							cal.setTime(date10);
							int lastDate = cal.getActualMaximum(Calendar.DATE);
							if (empMonthlyTarget.getItemType().equalsIgnoreCase(GOLD)) {

								monthlyTargetGoldQuantity = monthlyTargetGoldQuantity
										+ (empMonthlyTarget.getQuantity() / lastDate);
								monthlyTargetGoldValue = monthlyTargetGoldValue
										+ (empMonthlyTarget.getValue() / lastDate);
								tgtGoldQuantity = tgtGoldQuantity + (empMonthlyTarget.getQuantity() / lastDate);
								tgtGoldValue = tgtGoldValue + (empMonthlyTarget.getValue() / lastDate);

							}

						}

					}

					if (!diamondMonthlyTargetForSHW1.isEmpty()) {

						for (EmployeeItemMonthlyTarget empMonthlyTarget : diamondMonthlyTargetForSHW) {

							Date date10 = new SimpleDateFormat(DATE_FORMATE).parse(empMonthlyTarget.getTgtMonth());

							Calendar cal = Calendar.getInstance();
							cal.setTime(date10);
							int lastDate = cal.getActualMaximum(Calendar.DATE);

							if (empMonthlyTarget.getItemType().equalsIgnoreCase(DIAMOND)) {

								monthlyTargetDiamondQuantity = monthlyTargetDiamondQuantity
										+ (empMonthlyTarget.getQuantity() / lastDate);

								monthlyTargetDiamondValue = monthlyTargetDiamondValue
										+ (empMonthlyTarget.getValue() / lastDate);

								tgtDiaquantity = tgtDiaquantity + (empMonthlyTarget.getQuantity() / lastDate);
								tgtDiaValue = tgtDiaValue + (empMonthlyTarget.getValue() / lastDate);

							}
						}

					}

					LocalDate localStartDateTimeline = LocalDate.parse(startDateTimeline);

					final String DATE_FORMATTER = "dd-MM-yyyy";

					DateTimeFormatter formatter = DateTimeFormatter.ofPattern(DATE_FORMATTER);

					String formatDateTime = localStartDateTimeline.format(formatter);

					timeLine.add(formatDateTime);

					String date6 = localStartDateTimeline.getMonth().toString().substring(0, 3) + "-"
							+ localStartDateTimeline.getYear();
					Collection<Sales> goldEmpActualList2 = salesRepo.salesDataInDateByLocationIdAndEmpClassAndTgtMonth(
							locationId, empClass, date6, startDateTimeline, GOLD);

					Collection<Sales> diamondEmpActualList2 = salesRepo
							.salesDataInDateByLocationIdAndEmpClassAndTgtMonth(locationId, empClass, date6,
									startDateTimeline, DIAMOND);

					LocalDate nextDay = localStartDateTimeline.plusDays(1);
					startDateTimeline = nextDay.toString();

					if (!goldEmpActualList2.isEmpty()) {

						for (Sales saleData : goldEmpActualList2) {

							if (saleData.getItemType().equalsIgnoreCase(GOLD)) {

								monthlyActualGoldValue = monthlyActualGoldValue + saleData.getTotalSoldAmount();
								monthlyActualGoldQuantity = monthlyActualGoldQuantity + saleData.getGrossWeight();

								totalgoldvalue = totalgoldvalue + saleData.getTotalSoldAmount();
								totalgoldQuantity = totalgoldQuantity + saleData.getGrossWeight();

							}
							SalesReturns salesReturns = salesReturnsRepo.findBySales(saleData);
							Double salesReturnGoldQuantity = 0.0;
							Double salesReturnGoldValue = 0.0;

							if (salesReturns != null && saleData.getItemType().equalsIgnoreCase(GOLD)) {

								salesReturnGoldQuantity = salesReturnGoldQuantity + salesReturns.getGrossWeight();

								salesReturnGoldQuantityDetails = salesReturnGoldQuantityDetails
										+ salesReturns.getGrossWeight();
								salesReturnGoldValue = salesReturnGoldValue + salesReturns.getAmountPayable();
								salesReturnGoldValueDetails = salesReturnGoldValueDetails
										+ salesReturns.getAmountPayable();
								monthlyActualGoldQuantity -= salesReturnGoldQuantity;
								monthlyActualGoldValue -= salesReturnGoldValue;

							}

						}

					}
					if (!diamondEmpActualList2.isEmpty()) {

						for (Sales saleData : diamondEmpActualList2) {

							if (saleData.getItemType().equalsIgnoreCase("DIAMOND")) {
								monthlyActualDiamondValue = monthlyActualDiamondValue + saleData.getTotalSoldAmount();

								monthlyActualDiamondQuantity = monthlyActualDiamondQuantity
										+ saleData.getDiamondWeight();

								totaldiamondValue = totaldiamondValue + saleData.getTotalSoldAmount();

								totaldiamondQuantity = totaldiamondQuantity + saleData.getDiamondWeight();

							}
							SalesReturns salesReturns = salesReturnsRepo.findBySales(saleData);
							Double salesReturnDiamondQuantity = 0.0;
							Double salesReturnDiamondValue = 0.0;
							if (salesReturns != null && saleData.getItemType().equalsIgnoreCase(DIAMOND)) {

								salesReturnDiamondQuantity = salesReturnDiamondQuantity
										+ salesReturns.getDiamondWeight();
								salesReturnDiamondQuantityDetails = salesReturnDiamondQuantityDetails
										+ salesReturns.getDiamondWeight();

								salesReturnDiamondValue = salesReturnDiamondValue + salesReturns.getAmountPayable();
								salesReturnDiamondValueDetails = salesReturnDiamondValueDetails
										+ salesReturns.getAmountPayable();
								monthlyActualDiamondQuantity -= salesReturnDiamondQuantity;
								monthlyActualDiamondValue -= salesReturnDiamondValue;

							}

						}

					}
					actualGoldQuantityData.add(monthlyActualGoldQuantity / 1000);
					actualDiamondQuantityData.add(monthlyActualDiamondQuantity);
					actualGoldValueData.add(monthlyActualGoldValue / 100000);
					actualDiamondValueData.add(monthlyActualDiamondValue / 100000);

					targetDiamondQuantityData.add(monthlyTargetDiamondQuantity);

					targetGoldValueData.add(monthlyTargetGoldValue);
					targetGoldQuantityData.add(monthlyTargetGoldQuantity);

					targetDiamondValueData.add(monthlyTargetDiamondValue);

				}

			}

			// quantity and value of gold and diamond data list
			targetQuantityData.setDiamond(targetDiamondQuantityData);
			targetQuantityData.setGold(targetGoldQuantityData);
			targetValueData.setDiamond(targetDiamondValueData);
			targetValueData.setGold(targetGoldValueData);

			targetdatalist.setQty(targetQuantityData);

			targetdatalist.setValue(targetValueData);

			targetTotalQuantity.setDiamond(tgtDiaquantity);
			targetTotalQuantity.setGold(tgtGoldQuantity);

			targetTotalValue.setDiamond(tgtDiaValue);
			targetTotalValue.setGold(tgtGoldValue);

			targets.setQty(targetTotalQuantity);
			targets.setValue(targetTotalValue);

			actualQuantityData.setDiamond(actualDiamondQuantityData);
			actualQuantityData.setGold(actualGoldQuantityData);

			actualValueData.setDiamond(actualDiamondValueData);
			actualValueData.setGold(actualGoldValueData);

			actualdatalist.setQty(actualQuantityData);
			actualdatalist.setValue(actualValueData);

			actualTotalQuantity.setDiamond((totaldiamondQuantity - salesReturnDiamondQuantityDetails));
			actualTotalQuantity.setGold((totalgoldQuantity - salesReturnGoldQuantityDetails) / 1000);

			actualTotalValue.setDiamond((totaldiamondValue - salesReturnDiamondValueDetails) / 100000);
			actualTotalValue.setGold((totalgoldvalue - salesReturnGoldValueDetails) / 100000);

			actuals.setQty(actualTotalQuantity);
			actuals.setValue(actualTotalValue);

			timeLineDetails.put(TIMELINE, timeLine);
			timeLineDetails.put(ACTUALS, actualdatalist);
			timeLineDetails.put(TARGETS, targetdatalist);

			JSONObject employeeData = paForEachClassEmployeeWise(startDate, endDate, locationId, empClass).getData();

			paEachClassDetails.add(timeLineDetails);
			paEachClassDetails.add(employeeData);

			paForEachClasses.setActuals(actuals);
			paForEachClasses.setTarget(targets);
			paForEachClasses.setDetails(paEachClassDetails);

			response.setData(paForEachClasses);
			response.setStatus(HttpServletResponse.SC_OK);
			response.setMessage(SUCCESSFUL);
			response.setFromDate(startDate);
			response.setToDate(endDate);

		} catch (

		Exception e) {

			response.setError(EnumTypeForErrorCodes.SCUS835.name(), EnumTypeForErrorCodes.SCUS835.errorMsg());
			response.setMessage("Failed to get PA for Each Classe By Day");
			log.error(utils.toJson(response.getError()), e);

		}

		return response;
	}

	@SuppressWarnings("unchecked")
	public TargetVsActualResponse<org.json.simple.JSONObject> paForEachClassEmployeeWise(String startDate,
			String endDate, Long locationId, char empClass) throws ParseException {
		log.info("calculating ticketsize for showroom employee targets");

		TargetVsActualResponse<org.json.simple.JSONObject> response = new TargetVsActualResponse<>();

		org.json.simple.JSONObject employeeDetails = new org.json.simple.JSONObject();

		// time line target objects
		QuantityValue targets = new QuantityValue();

		Quantity targetTotalQuantity = new Quantity();

		Value targetTotalValue = new Value();

		ItemQuantityValue targetdatalist = new ItemQuantityValue();

		QuantityList targetQuantityData = new QuantityList();

		ValueList targetValueData = new ValueList();

		// time line actual objects
		ItemQuantityValue actualdatalist = new ItemQuantityValue();

		QuantityList actualQuantityData = new QuantityList();

		ValueList actualValueData = new ValueList();

		List<Double> targetGoldQuantityData = new ArrayList<>();
		List<Double> targetDiamondQuantityData = new ArrayList<>();
		List<Double> targetGoldValueData = new ArrayList<>();
		List<Double> targetDiamondValueData = new ArrayList<>();

		List<Double> actualGoldQuantityData = new ArrayList<>();
		List<Double> actualDiamondQuantityData = new ArrayList<>();
		List<Double> actualGoldValueData = new ArrayList<>();
		List<Double> actualDiamondValueData = new ArrayList<>();

		Double tgtDiaquantity = 0.0;
		Double tgtGoldQuantity = 0.0;
		Double tgtDiaValue = 0.0;
		Double tgtGoldValue = 0.0;

		Double totalgoldvalue = 0.0;
		Double totaldiamondValue = 0.0;
		Double totalgoldQuantity = 0.0;
		Double totaldiamondQuantity = 0.0;

		Double salesReturnGoldQuantityDetails = 0.0;
		Double salesReturnGoldValueDetails = 0.0;
		Double salesReturnDiamondQuantityDetails = 0.0;
		Double salesReturnDiamondValueDetails = 0.0;

		try {

			List<String> employees = new ArrayList<>();

			Optional<Location> location1 = locationRepo.findById(locationId);
			if (location1.isPresent()) {
				Location location = location1.get();

				List<Employee> listOfShowRoomEmployee = employeeRepo.findByLocation(location);

				LocalDate localStartDate = LocalDate.parse(startDate);
				LocalDate localEndDate = LocalDate.parse(endDate);

				String date5 = localStartDate.getMonth() + "-" + localStartDate.getYear();
				String date6 = localEndDate.getMonth() + "-" + localEndDate.getYear();

				DateFormat formater = new SimpleDateFormat(DATE_FORMATE);

				Calendar beginCalendar = Calendar.getInstance();
				Calendar finishCalendar = Calendar.getInstance();

				beginCalendar.setTime(formater.parse(date5));
				finishCalendar.setTime(formater.parse(date6));
				List<String> datesList = new ArrayList<>();

				while (beginCalendar.before(finishCalendar)) {
					String date = formater.format(beginCalendar.getTime()).toUpperCase();
					beginCalendar.add(Calendar.MONTH, 1);
					datesList.add(date);
				}
				String lastMonth = formater.format(finishCalendar.getTime()).toUpperCase();
				datesList.add(lastMonth);

				for (Employee employee : listOfShowRoomEmployee) {

					Double monthlyTargetGoldQuantity = 0.0;
					Double monthlyTargetGoldValue = 0.0;
					Double monthlyTargetDiamondQuantity = 0.0;
					Double monthlyTargetDiamondValue = 0.0;

					Double monthlyActualGoldQuantity = 0.0;
					Double monthlyActualGoldValue = 0.0;
					Double monthlyActualDiamondQuantity = 0.0;
					Double monthlyActualDiamondValue = 0.0;

					Collection<Sales> goldEmpActualList = null;

					Collection<Sales> diamondEmpActualList = null;

					List<EmployeeItemMonthlyTarget> goldMonthlyTargetForSHW = null;

					List<EmployeeItemMonthlyTarget> diamondMonthlyTargetForSHW = null;

					long noOfDaysBetween = 0l;

					for (int i = 0; i < datesList.size(); i++) {

						if (i == 0) {

							if (date5.equals(date6)) {

								goldMonthlyTargetForSHW = empItemMonthlyTargetRepo.findByLocationIdAndClassInTgtMonth(
										locationId, empClass, datesList.get(i), "Gold");
								diamondMonthlyTargetForSHW = empItemMonthlyTargetRepo
										.findByLocationIdAndClassInTgtMonth(locationId, empClass, datesList.get(i),
												DIAMOND);

								goldEmpActualList = salesRepo.salesDataInBetweenDatesByLocationIdAndEmpClassAndTgtMonth(
										locationId, empClass, datesList.get(i), startDate, endDate, "Gold");

								diamondEmpActualList = salesRepo
										.salesDataInBetweenDatesByLocationIdAndEmpClassAndTgtMonth(locationId, empClass,
												datesList.get(i), startDate, endDate, DIAMOND);

								noOfDaysBetween = ChronoUnit.DAYS.between(localStartDate, localEndDate) + 1;

							} else {

								Date date10 = new SimpleDateFormat(DATE_FORMATE).parse(datesList.get(i));
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

								goldMonthlyTargetForSHW = empItemMonthlyTargetRepo.findByLocationIdAndClassInTgtMonth(
										locationId, empClass, datesList.get(i), GOLD);

								diamondMonthlyTargetForSHW = empItemMonthlyTargetRepo
										.findByLocationIdAndClassInTgtMonth(locationId, empClass, datesList.get(i),
												DIAMOND);

								goldEmpActualList = salesRepo.salesDataInBetweenDatesByLocationIdAndEmpClassAndTgtMonth(
										locationId, empClass, datesList.get(i), startDate, lastDay1, GOLD);

								diamondEmpActualList = salesRepo
										.salesDataInBetweenDatesByLocationIdAndEmpClassAndTgtMonth(locationId, empClass,
												datesList.get(i), startDate, lastDay1, DIAMOND);

								noOfDaysBetween = ChronoUnit.DAYS.between(localStartDate, day) + 1;

							}

						} else if (i < datesList.size() - 1) {
							Date date10 = new SimpleDateFormat(DATE_FORMATE).parse(datesList.get(i));
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

							goldMonthlyTargetForSHW = empItemMonthlyTargetRepo
									.findByLocationIdAndClassInTgtMonth(locationId, empClass, datesList.get(i), GOLD);
							diamondMonthlyTargetForSHW = empItemMonthlyTargetRepo.findByLocationIdAndClassInTgtMonth(
									locationId, empClass, datesList.get(i), DIAMOND);

							goldEmpActualList = salesRepo.salesDataInBetweenDatesByLocationIdAndEmpClassAndTgtMonth(
									locationId, empClass, datesList.get(i), firstDay1, lastDay1, GOLD);

							diamondEmpActualList = salesRepo.salesDataInBetweenDatesByLocationIdAndEmpClassAndTgtMonth(
									locationId, empClass, datesList.get(i), firstDay1, lastDay1, DIAMOND);

							noOfDaysBetween = ChronoUnit.DAYS.between(firstday, day) + 1;
						} else {
							Date date10 = new SimpleDateFormat(DATE_FORMATE).parse(datesList.get(i));
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

							goldMonthlyTargetForSHW = empItemMonthlyTargetRepo
									.findByLocationIdAndClassInTgtMonth(locationId, empClass, datesList.get(i), GOLD);
							diamondMonthlyTargetForSHW = empItemMonthlyTargetRepo.findByLocationIdAndClassInTgtMonth(
									locationId, empClass, datesList.get(i), DIAMOND);

							goldEmpActualList = salesRepo.salesDataInBetweenDatesByLocationIdAndEmpClassAndTgtMonth(
									locationId, empClass, datesList.get(i), firstDay1, endDate, GOLD);

							diamondEmpActualList = salesRepo.salesDataInBetweenDatesByLocationIdAndEmpClassAndTgtMonth(
									locationId, empClass, datesList.get(i), firstDay1, endDate, DIAMOND);

							noOfDaysBetween = ChronoUnit.DAYS.between(firstday, localEndDate) + 1;
						}

						if (!goldMonthlyTargetForSHW.isEmpty()) {

							for (EmployeeItemMonthlyTarget empMonthlyTarget : goldMonthlyTargetForSHW) {

								Date date10 = new SimpleDateFormat(DATE_FORMATE).parse(empMonthlyTarget.getTgtMonth());
								Calendar cal = Calendar.getInstance();
								cal.setTime(date10);
								int lastDate = cal.getActualMaximum(Calendar.DATE);

								if (empMonthlyTarget.getItemType().equalsIgnoreCase(GOLD)
										&& empMonthlyTarget.getEmp().equals(employee)) {

									monthlyTargetGoldQuantity = monthlyTargetGoldQuantity
											+ (empMonthlyTarget.getQuantity() / lastDate) * noOfDaysBetween;
									monthlyTargetGoldValue = monthlyTargetGoldValue
											+ (empMonthlyTarget.getValue() / lastDate) * noOfDaysBetween;
									tgtGoldQuantity = tgtGoldQuantity
											+ (empMonthlyTarget.getQuantity() / lastDate) * noOfDaysBetween;
									tgtGoldValue = tgtGoldValue
											+ (empMonthlyTarget.getValue() / lastDate) * noOfDaysBetween;

								}

							}

						}

						if (!diamondMonthlyTargetForSHW.isEmpty()) {

							for (EmployeeItemMonthlyTarget empMonthlyTarget : diamondMonthlyTargetForSHW) {

								Date date10 = new SimpleDateFormat(DATE_FORMATE).parse(empMonthlyTarget.getTgtMonth());

								Calendar cal = Calendar.getInstance();
								cal.setTime(date10);
								int lastDate = cal.getActualMaximum(Calendar.DATE);

								if (empMonthlyTarget.getItemType().equalsIgnoreCase(DIAMOND)
										&& empMonthlyTarget.getEmp().equals(employee)) {

									monthlyTargetDiamondQuantity = monthlyTargetDiamondQuantity
											+ (empMonthlyTarget.getQuantity() / lastDate) * noOfDaysBetween;

									monthlyTargetDiamondValue = monthlyTargetDiamondValue
											+ (empMonthlyTarget.getValue() / lastDate) * noOfDaysBetween;

									tgtDiaquantity = tgtDiaquantity
											+ (empMonthlyTarget.getQuantity() / lastDate) * noOfDaysBetween;
									tgtDiaValue = tgtDiaValue
											+ (empMonthlyTarget.getValue() / lastDate) * noOfDaysBetween;

								}
							}

						}

						if (!goldEmpActualList.isEmpty()) {

							for (Sales saleData : goldEmpActualList) {

								if (saleData.getEmpId().equals(employee)) {
									if (saleData.getItemType().equalsIgnoreCase(GOLD)) {

										monthlyActualGoldValue = monthlyActualGoldValue + saleData.getTotalSoldAmount();
										monthlyActualGoldQuantity = monthlyActualGoldQuantity
												+ saleData.getGrossWeight();

										totalgoldvalue = totalgoldvalue + saleData.getTotalSoldAmount();
										totalgoldQuantity = totalgoldQuantity + saleData.getGrossWeight();

									}
									SalesReturns salesReturns = salesReturnsRepo.findBySales(saleData);
									Double salesReturnGoldQuantity = 0.0;
									Double salesReturnGoldValue = 0.0;

									if (salesReturns != null && saleData.getItemType().equalsIgnoreCase(GOLD)) {

										salesReturnGoldQuantity = salesReturnGoldQuantity
												+ salesReturns.getGrossWeight();

										salesReturnGoldQuantityDetails = salesReturnGoldQuantityDetails
												+ salesReturns.getGrossWeight();
										salesReturnGoldValue = salesReturnGoldValue + salesReturns.getAmountPayable();
										salesReturnGoldValueDetails = salesReturnGoldValueDetails
												+ salesReturns.getAmountPayable();
										monthlyActualGoldQuantity -= salesReturnGoldQuantity;
										monthlyActualGoldValue -= salesReturnGoldValue;

									}
								}

							}

						}
						if (!diamondEmpActualList.isEmpty()) {

							for (Sales saleData : diamondEmpActualList) {
								if (saleData.getEmpId().equals(employee)) {

									if (saleData.getItemType().equalsIgnoreCase(DIAMOND)) {
										monthlyActualDiamondValue = monthlyActualDiamondValue
												+ saleData.getTotalSoldAmount();

										monthlyActualDiamondQuantity = monthlyActualDiamondQuantity
												+ saleData.getDiamondWeight();

										totaldiamondValue = totaldiamondValue + saleData.getTotalSoldAmount();

										totaldiamondQuantity = totaldiamondQuantity + saleData.getDiamondWeight();

									}
									SalesReturns salesReturns = salesReturnsRepo.findBySales(saleData);
									Double salesReturnDiamondQuantity = 0.0;
									Double salesReturnDiamondValue = 0.0;
									if (salesReturns != null && saleData.getItemType().equalsIgnoreCase(DIAMOND)) {

										salesReturnDiamondQuantity = salesReturnDiamondQuantity
												+ salesReturns.getDiamondWeight();
										salesReturnDiamondQuantityDetails = salesReturnDiamondQuantityDetails
												+ salesReturns.getDiamondWeight();

										salesReturnDiamondValue = salesReturnDiamondValue
												+ salesReturns.getAmountPayable();
										salesReturnDiamondValueDetails = salesReturnDiamondValueDetails
												+ salesReturns.getAmountPayable();
										monthlyActualDiamondQuantity -= salesReturnDiamondQuantity;
										monthlyActualDiamondValue -= salesReturnDiamondValue;

									}

								}
							}
						}

					}

					if (monthlyActualGoldQuantity.doubleValue() > 0 || monthlyActualDiamondQuantity.doubleValue() > 0
							|| monthlyActualGoldValue.doubleValue() > 0 || monthlyActualDiamondValue.doubleValue() > 0
							|| monthlyTargetDiamondQuantity.doubleValue() > 0
							|| monthlyTargetGoldValue.doubleValue() > 0 || monthlyTargetGoldQuantity.doubleValue() > 0
							|| monthlyTargetDiamondValue.doubleValue() > 0) {

						actualGoldQuantityData.add(monthlyActualGoldQuantity / 1000);
						actualDiamondQuantityData.add(monthlyActualDiamondQuantity);
						actualGoldValueData.add(monthlyActualGoldValue / 100000);
						actualDiamondValueData.add(monthlyActualDiamondValue / 100000);

						targetDiamondQuantityData.add(monthlyTargetDiamondQuantity);

						targetGoldValueData.add(monthlyTargetGoldValue);
						targetGoldQuantityData.add(monthlyTargetGoldQuantity);

						targetDiamondValueData.add(monthlyTargetDiamondValue);
						employees.add(employee.getEmpName());
					}

				}
				targetQuantityData.setDiamond(targetDiamondQuantityData);
				targetQuantityData.setGold(targetGoldQuantityData);
				targetValueData.setDiamond(targetDiamondValueData);
				targetValueData.setGold(targetGoldValueData);

				targetdatalist.setQty(targetQuantityData);

				targetdatalist.setValue(targetValueData);

				targetTotalQuantity.setDiamond(tgtDiaquantity);
				targetTotalQuantity.setGold(tgtGoldQuantity);

				targetTotalValue.setDiamond(tgtDiaValue);
				targetTotalValue.setGold(tgtGoldValue);

				targets.setQty(targetTotalQuantity);
				targets.setValue(targetTotalValue);

				actualQuantityData.setDiamond(actualDiamondQuantityData);
				actualQuantityData.setGold(actualGoldQuantityData);

				actualValueData.setDiamond(actualDiamondValueData);
				actualValueData.setGold(actualGoldValueData);

				actualdatalist.setQty(actualQuantityData);
				actualdatalist.setValue(actualValueData);

				employeeDetails.put("employees", employees);
				employeeDetails.put(ACTUALS, actualdatalist);
				employeeDetails.put(TARGETS, targetdatalist);

				response.setData(employeeDetails);

			}

		} catch (Exception e) {

			response.setError(EnumTypeForErrorCodes.SCUS836.name(), EnumTypeForErrorCodes.SCUS836.errorMsg());
			response.setMessage(EnumTypeForErrorCodes.SCUS836.errorMsg());
			log.error(utils.toJson(response.getError()), e);

		}
		return response;

	}
}

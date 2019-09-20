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

import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.mss.pmj.pmjmis.common.EnumTypeForErrorCodes;
import com.mss.pmj.pmjmis.common.Utils;
import com.mss.pmj.pmjmis.domain.Channel;
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
import com.mss.pmj.pmjmis.response.ItemQuantityValue;
import com.mss.pmj.pmjmis.response.PAAllClassesData;
import com.mss.pmj.pmjmis.response.PAAllClassesDetails;
import com.mss.pmj.pmjmis.response.Quantity;
import com.mss.pmj.pmjmis.response.QuantityList;
import com.mss.pmj.pmjmis.response.QuantityValue;
import com.mss.pmj.pmjmis.response.TargetVsActualResponse;
import com.mss.pmj.pmjmis.response.Value;
import com.mss.pmj.pmjmis.response.ValueList;
import com.mss.pmj.pmjmis.svcs.PAClassWiseForAllLocationsService;

@RestController
public class PAClassWiseForAllLocationsServiceImpl implements PAClassWiseForAllLocationsService {

	private static final Logger log = LoggerFactory.getLogger(PAClassWiseForAllLocationsServiceImpl.class);

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

	private static final String DATEFORMATE = "MMM-yyyy";

	private static final String DIAMOND = "Diamond";

	private static final String GOLD = "Gold";

	@SuppressWarnings("rawtypes")
	@Override
	public TargetVsActualResponse<PAAllClassesData> forAllClassesAndLocations(String startDate, String endDate) {

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

			DateFormat formater = new SimpleDateFormat(DATEFORMATE);

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

			Channel channel = channelRepo.findByChannelName("SHW");
			List<Location> locationDetails = locationRepo.findByChannel(channel);

			for (Character empClass : listOfClasses) {
				Double monthlyTargetGoldQuantity = 0.0;
				Double monthlyTargetGoldValue = 0.0;
				Double monthlyTargetDiamondQuantity = 0.0;
				Double monthlyTargetDiamondValue = 0.0;

				Double monthlyActualGoldQuantity = 0.0;
				Double monthlyActualGoldValue = 0.0;
				Double monthlyActualDiamondQuantity = 0.0;
				Double monthlyActualDiamondValue = 0.0;
				classes.add("Class " + empClass);
				for (Location location : locationDetails) {

					Long locationId = location.getId();

					for (int i = 0; i < datesList.size(); i++) {

						Collection<Sales> goldEmpActualList = null;

						Collection<Sales> diamondEmpActualList = null;

						List<EmployeeItemMonthlyTarget> goldMonthlyTargetForSHW = null;

						List<EmployeeItemMonthlyTarget> diamondMonthlyTargetForSHW = null;

						long noOfDaysBetween = 0l;

						if (i == 0) {

							if (date5.equals(date6)) {

								goldMonthlyTargetForSHW = empItemMonthlyTargetRepo.findByLocationIdAndClassInTgtMonth(
										locationId, empClass, datesList.get(i), "Gold");
								diamondMonthlyTargetForSHW = empItemMonthlyTargetRepo
										.findByLocationIdAndClassInTgtMonth(locationId, empClass, datesList.get(i),
												DIAMOND);

								goldEmpActualList = salesRepo.salesDataInBetweenDatesByLocationIdAndEmpClassAndTgtMonth(
										locationId, empClass, datesList.get(i), startDate, endDate, GOLD);

								diamondEmpActualList = salesRepo
										.salesDataInBetweenDatesByLocationIdAndEmpClassAndTgtMonth(locationId, empClass,
												datesList.get(i), startDate, endDate, DIAMOND);

								noOfDaysBetween = ChronoUnit.DAYS.between(localStartDate, localEndDate) + 1;

							} else {

								Date date10 = new SimpleDateFormat(DATEFORMATE).parse(datesList.get(i));
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
										locationId, empClass, datesList.get(i), "Gold");

								diamondMonthlyTargetForSHW = empItemMonthlyTargetRepo
										.findByLocationIdAndClassInTgtMonth(locationId, empClass, datesList.get(i),
												DIAMOND);

								goldEmpActualList = salesRepo.salesDataInBetweenDatesByLocationIdAndEmpClassAndTgtMonth(
										locationId, empClass, datesList.get(i), startDate, lastDay1, "Gold");

								diamondEmpActualList = salesRepo
										.salesDataInBetweenDatesByLocationIdAndEmpClassAndTgtMonth(locationId, empClass,
												datesList.get(i), startDate, lastDay1, DIAMOND);

								noOfDaysBetween = ChronoUnit.DAYS.between(localStartDate, day) + 1;
							}

						} else if (i < datesList.size() - 1) {
							Date date10 = new SimpleDateFormat(DATEFORMATE).parse(datesList.get(i));
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
									.findByLocationIdAndClassInTgtMonth(locationId, empClass, datesList.get(i), "Gold");
							diamondMonthlyTargetForSHW = empItemMonthlyTargetRepo.findByLocationIdAndClassInTgtMonth(
									locationId, empClass, datesList.get(i), DIAMOND);

							goldEmpActualList = salesRepo.salesDataInBetweenDatesByLocationIdAndEmpClassAndTgtMonth(
									locationId, empClass, datesList.get(i), firstDay1, lastDay1, "Gold");

							diamondEmpActualList = salesRepo.salesDataInBetweenDatesByLocationIdAndEmpClassAndTgtMonth(
									locationId, empClass, datesList.get(i), firstDay1, lastDay1, DIAMOND);

							noOfDaysBetween = ChronoUnit.DAYS.between(firstday, day) + 1;
						} else {
							Date date10 = new SimpleDateFormat(DATEFORMATE).parse(datesList.get(i));
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
							diamondMonthlyTargetForSHW = empItemMonthlyTargetRepo.findByLocationIdAndClassInTgtMonth(
									locationId, empClass, datesList.get(i), DIAMOND);

							goldEmpActualList = salesRepo.salesDataInBetweenDatesByLocationIdAndEmpClassAndTgtMonth(
									locationId, empClass, datesList.get(i), firstDay1, endDate, "Gold");

							diamondEmpActualList = salesRepo.salesDataInBetweenDatesByLocationIdAndEmpClassAndTgtMonth(
									locationId, empClass, datesList.get(i), firstDay1, endDate, DIAMOND);

							noOfDaysBetween = ChronoUnit.DAYS.between(firstday, localEndDate) + 1;
						}

						if (!goldMonthlyTargetForSHW.isEmpty()) {

							for (EmployeeItemMonthlyTarget empMonthlyTarget : goldMonthlyTargetForSHW) {

								Date date10 = new SimpleDateFormat(DATEFORMATE).parse(empMonthlyTarget.getTgtMonth());
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

								}

							}

						}
						if (!diamondMonthlyTargetForSHW.isEmpty()) {

							for (EmployeeItemMonthlyTarget empMonthlyTarget : diamondMonthlyTargetForSHW) {

								Date date10 = new SimpleDateFormat(DATEFORMATE).parse(empMonthlyTarget.getTgtMonth());

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
									tgtDiaValue = tgtDiaValue
											+ (empMonthlyTarget.getValue() / lastDate) * noOfDaysBetween;

								}
							}

						}

						if (!goldEmpActualList.isEmpty()) {

							for (Sales saleData : goldEmpActualList) {

								if (saleData.getItemType().equalsIgnoreCase("GOLD")) {

									monthlyActualGoldValue = monthlyActualGoldValue + saleData.getTotalSoldAmount();
									monthlyActualGoldQuantity = monthlyActualGoldQuantity + saleData.getGrossWeight();

									totalgoldvalue = totalgoldvalue + saleData.getTotalSoldAmount();
									totalgoldQuantity = totalgoldQuantity + saleData.getGrossWeight();

								}
								SalesReturns salesReturns = salesReturnsRepo.findBySales(saleData);
								Double salesReturnGoldQuantity = 0.0;
								Double salesReturnGoldValue = 0.0;

								if (salesReturns != null && saleData.getItemType().equalsIgnoreCase("Gold")) {

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

								if (saleData.getItemType().equalsIgnoreCase("DIAMOND")) {
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

									salesReturnDiamondValue = salesReturnDiamondValue + salesReturns.getAmountPayable();
									salesReturnDiamondValueDetails = salesReturnDiamondValueDetails
											+ salesReturns.getAmountPayable();
									monthlyActualDiamondQuantity -= salesReturnDiamondQuantity;
									monthlyActualDiamondValue -= salesReturnDiamondValue;

								}

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
			response.setMessage("successful");
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

}

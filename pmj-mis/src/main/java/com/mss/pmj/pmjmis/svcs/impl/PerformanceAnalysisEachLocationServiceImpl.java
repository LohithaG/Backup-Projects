
package com.mss.pmj.pmjmis.svcs.impl;

import java.text.DateFormat;
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
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import com.mss.pmj.pmjmis.common.EnumTypeForErrorCodes;
import com.mss.pmj.pmjmis.common.Utils;
import com.mss.pmj.pmjmis.domain.EmployeeItemMonthlyTarget;
import com.mss.pmj.pmjmis.domain.Location;
import com.mss.pmj.pmjmis.domain.Sales;
import com.mss.pmj.pmjmis.domain.SalesReturns;
import com.mss.pmj.pmjmis.repos.EmployeeItemMonthlyTargetRepository;
import com.mss.pmj.pmjmis.repos.LocationRepository;
import com.mss.pmj.pmjmis.repos.SalesRepository;
import com.mss.pmj.pmjmis.repos.SalesReturnsRepository;
import com.mss.pmj.pmjmis.response.Dates;
import com.mss.pmj.pmjmis.response.EcahTgtVsActualDetails;
import com.mss.pmj.pmjmis.response.ItemQuantityValue;
import com.mss.pmj.pmjmis.response.LocationTgtVsActulas;
import com.mss.pmj.pmjmis.response.Locations;
import com.mss.pmj.pmjmis.response.Quantity;
import com.mss.pmj.pmjmis.response.QuantityList;
import com.mss.pmj.pmjmis.response.QuantityValue;
import com.mss.pmj.pmjmis.response.Sample;
import com.mss.pmj.pmjmis.response.LocationTargetVsActualDetails;
import com.mss.pmj.pmjmis.response.TargetVsActualResponse;
import com.mss.pmj.pmjmis.response.Value;
import com.mss.pmj.pmjmis.response.ValueList;
import com.mss.pmj.pmjmis.svcs.PerformanceAnalysisEachLocationService;

@Service
public class PerformanceAnalysisEachLocationServiceImpl implements PerformanceAnalysisEachLocationService {

	private static Logger log = LoggerFactory.getLogger(PerformanceAnalysisEachLocationServiceImpl.class);

	@Autowired
	private Utils utils;

	@Autowired
	private LocationRepository locationRepo;

	@Autowired
	private SalesRepository salesRepo;

	@Autowired
	private SalesReturnsRepository salesReturnsRepo;

	@Autowired
	private EmployeeItemMonthlyTargetRepository employeeItemMonthlyTargetRepo;

	private static final String DATAFORMAT = "MMM-yyyy";

	private static final String GOLD = "Gold";

	private static final String DIAMOND = "Diamond";

	public TargetVsActualResponse<LocationTgtVsActulas> getLocationTargetVsActualByMonth(String startDate,
			String endDate, Long locationId) {

		log.info("get Location target vs actual sales between startDate and endDate");

		TargetVsActualResponse<LocationTgtVsActulas> response = new TargetVsActualResponse<>();

		LocationTgtVsActulas locationtargetVsActual = new LocationTgtVsActulas();

		EcahTgtVsActualDetails ecahTgtVsActualDetails = new EcahTgtVsActualDetails();

		Double salesReturnGoldQuantityDetails = 0.0;
		Double salesReturnGoldValueDetails = 0.0;
		Double salesReturnDiamondQuantityDetails = 0.0;
		Double salesReturnDiamondValueDetails = 0.0;

		String locationCode = null;

		String locationName = null;

		try {
			Optional<Location> locationObj = locationRepo.findById(locationId);

			if (locationObj.isPresent()) {
				locationCode = locationObj.get().getLocationCode();
				locationName = locationObj.get().getLocationName();
			}

			LocalDate localStartDate = LocalDate.parse(startDate);
			LocalDate localEndDate = LocalDate.parse(endDate);

			String date1 = localStartDate.getMonth() + "-" + localStartDate.getYear();
			String date2 = localEndDate.getMonth() + "-" + localEndDate.getYear();

			DateFormat formater = new SimpleDateFormat(DATAFORMAT);

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

			Double tgtDiaquantity = 0.0;
			Double tgtGoldQuantity = 0.0;
			Double tgtDiaValue = 0.0;
			Double tgtGoldValue = 0.0;

			Double goldQuantityActual = 0.0;
			Double goldValueActual = 0.0;
			Double diamondQuantityActual = 0.0;
			Double diamondValueActual = 0.0;

			QuantityValue finalActualQuantityValue = new QuantityValue();
			Quantity finalActualQuantity = new Quantity();
			Value finalActualValue = new Value();

			QuantityValue finalTargetQuantityValue = new QuantityValue();
			Quantity finalTargetQuantity = new Quantity();
			Value finalTargetValue = new Value();

			List<String> timeline = new ArrayList<>();
			ItemQuantityValue actualQuantityValue = new ItemQuantityValue();
			ItemQuantityValue targetQuantityValue = new ItemQuantityValue();

			QuantityList actualQuantity = new QuantityList();
			ValueList actualValue = new ValueList();
			List<Double> actualGoldQuantity = new ArrayList<>();
			List<Double> actualDiamondQuantity = new ArrayList<>();
			List<Double> actualGoldValue = new ArrayList<>();
			List<Double> actualDiamondValue = new ArrayList<>();

			QuantityList targetQuantity = new QuantityList();
			ValueList targetValue = new ValueList();
			List<Double> targetGoldQuantity = new ArrayList<>();
			List<Double> targetDiamondQuantity = new ArrayList<>();
			List<Double> targetGoldValue = new ArrayList<>();
			List<Double> targetDiamondValue = new ArrayList<>();

			Locations locations = new Locations();

			for (int i = 0; i < datesList.size(); i++) {

				Collection<Sales> empActualList = null;

				Collection<EmployeeItemMonthlyTarget> monthlyTarget = null;

				long noOfDaysBetween = 0l;

				if (i == 0) {

					if (date1.equals(date2)) {

						empActualList = salesRepo.findByStartDateAndEndDateAndLocationName(startDate, endDate,
								locationId);
						monthlyTarget = employeeItemMonthlyTargetRepo.findByTgtMonth(datesList.get(0));
						noOfDaysBetween = ChronoUnit.DAYS.between(localStartDate, localEndDate) + 1;

					} else {

						Date date10 = new SimpleDateFormat(DATAFORMAT).parse(datesList.get(i));
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
						String lastDay1 = datesList.get(0).substring(4, 8) + "-" + m + "-" + lastDay;
						LocalDate day = LocalDate.parse(lastDay1);
						empActualList = salesRepo.findByStartDateAndEndDateAndLocationName(startDate, lastDay1,
								locationId);
						monthlyTarget = employeeItemMonthlyTargetRepo.findByTgtMonth(datesList.get(0));
						noOfDaysBetween = ChronoUnit.DAYS.between(localStartDate, day) + 1;
					}

				} else if (i < datesList.size() - 1) {
					Date date10 = new SimpleDateFormat(DATAFORMAT).parse(datesList.get(i));
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
					String lastDay1 = datesList.get(0).substring(4, 8) + "-" + m + "-" + lastDay;
					String firstDay1 = datesList.get(0).substring(4, 8) + "-" + m + "-" + "01";
					LocalDate day = LocalDate.parse(lastDay1);
					LocalDate firstday = LocalDate.parse(firstDay1);
					empActualList = salesRepo.findByStartDateAndEndDateAndLocationName(firstDay1, lastDay1, locationId);
					monthlyTarget = employeeItemMonthlyTargetRepo.findByTgtMonth(datesList.get(i));
					noOfDaysBetween = ChronoUnit.DAYS.between(firstday, day) + 1;
				} else {
					Date date10 = new SimpleDateFormat(DATAFORMAT).parse(datesList.get(i));
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
					String firstDay1 = datesList.get(0).substring(4, 8) + "-" + m + "-" + "01";
					LocalDate firstday = LocalDate.parse(firstDay1);
					empActualList = salesRepo.findByStartDateAndEndDateAndLocationName(firstDay1, endDate, locationId);
					monthlyTarget = employeeItemMonthlyTargetRepo.findByTgtMonth(datesList.get(i));
					noOfDaysBetween = ChronoUnit.DAYS.between(firstday, localEndDate) + 1;
				}
				timeline.add(datesList.get(i));

				if (!monthlyTarget.isEmpty()) {

					Double monthlyTargetGoldQuantity = 0.0;
					Double monthlyTargetGoldValue = 0.0;
					Double monthlyTargetDiamondQuantity = 0.0;
					Double monthlyTargetDiamondValue = 0.0;

					for (EmployeeItemMonthlyTarget tgt : monthlyTarget) {

						Date date10 = new SimpleDateFormat(DATAFORMAT).parse(tgt.getTgtMonth());
						Calendar cal = Calendar.getInstance();
						cal.setTime(date10);
						int lastDate = cal.getActualMaximum(Calendar.DATE);

						if (tgt.getEmp().getLocation().getId().equals(locationId)) {

							if (tgt.getItemType().equalsIgnoreCase(GOLD)) {

								monthlyTargetGoldQuantity = monthlyTargetGoldQuantity
										+ (tgt.getQuantity() / lastDate) * noOfDaysBetween;

								monthlyTargetGoldValue = monthlyTargetGoldValue
										+ (tgt.getValue() / lastDate) * noOfDaysBetween;
								tgtGoldQuantity = tgtGoldQuantity + (tgt.getQuantity() / lastDate) * noOfDaysBetween;
								tgtGoldValue = tgtGoldValue + (tgt.getValue() / lastDate) * noOfDaysBetween;

							} else if (tgt.getItemType().equalsIgnoreCase(DIAMOND)) {
								monthlyTargetDiamondQuantity = monthlyTargetDiamondQuantity
										+ (tgt.getQuantity() / lastDate) * noOfDaysBetween;

								monthlyTargetDiamondValue = monthlyTargetDiamondValue
										+ (tgt.getValue() / lastDate) * noOfDaysBetween;

								tgtDiaquantity = tgtDiaquantity + (tgt.getQuantity() / lastDate) * noOfDaysBetween;
								tgtDiaValue = tgtDiaValue + (tgt.getValue() / lastDate) * noOfDaysBetween;

							}

						}
					}
					targetGoldQuantity.add(monthlyTargetGoldQuantity);
					targetGoldValue.add(monthlyTargetGoldValue);
					targetDiamondQuantity.add(monthlyTargetDiamondQuantity);
					targetDiamondValue.add(monthlyTargetDiamondValue);

				} else {
					targetGoldQuantity.add(0.0);
					targetGoldValue.add(0.0);
					targetDiamondQuantity.add(0.0);
					targetDiamondValue.add(0.0);
				}
				finalTargetQuantity.setDiamond(tgtDiaquantity);
				finalTargetQuantity.setGold(tgtGoldQuantity);
				finalTargetValue.setDiamond(tgtDiaValue);
				finalTargetValue.setGold(tgtGoldValue);

				finalTargetQuantityValue.setQty(finalTargetQuantity);

				finalTargetQuantityValue.setValue(finalTargetValue);

				locationtargetVsActual.setTarget(finalTargetQuantityValue);

				Double salesReturnGoldQuantity = 0.0;
				Double salesReturnGoldValue = 0.0;
				Double salesReturnDiamondQuantity = 0.0;
				Double salesReturnDiamondValue = 0.0;

				Double monthlyActualGoldQuantity = 0.0;
				Double monthlyActualGoldValue = 0.0;
				Double monthlyActualDiamondQuantity = 0.0;
				Double monthlyActualDiamondValue = 0.0;

				if (!empActualList.isEmpty()) {

					for (Sales sale : empActualList) {

						if (sale.getItemType().equalsIgnoreCase(GOLD)) {

							monthlyActualGoldQuantity = monthlyActualGoldQuantity + sale.getGrossWeight();
							monthlyActualGoldValue = monthlyActualGoldValue + sale.getTotalSoldAmount();

							goldQuantityActual = goldQuantityActual + sale.getGrossWeight();
							goldValueActual = goldValueActual + sale.getTotalSoldAmount();

						} else if (sale.getItemType().equalsIgnoreCase(DIAMOND)) {
							monthlyActualDiamondQuantity = monthlyActualDiamondQuantity + sale.getDiamondWeight();
							monthlyActualDiamondValue = monthlyActualDiamondValue + sale.getTotalSoldAmount();

							diamondQuantityActual = diamondQuantityActual + sale.getDiamondWeight();
							diamondValueActual = diamondValueActual + sale.getTotalSoldAmount();
						}

						SalesReturns salesReturns = salesReturnsRepo.findBySales(sale);

						if (salesReturns != null) {

							if (sale.getItemType().equalsIgnoreCase(GOLD)) {

								salesReturnGoldQuantity = salesReturnGoldQuantity + salesReturns.getGrossWeight();
								salesReturnGoldQuantityDetails = salesReturnGoldQuantityDetails
										+ salesReturns.getGrossWeight();
								salesReturnGoldValue = salesReturnGoldValue + salesReturns.getAmountPayable();
								salesReturnGoldValueDetails = salesReturnGoldValueDetails
										+ salesReturns.getAmountPayable();
							} else if (sale.getItemType().equalsIgnoreCase(DIAMOND)) {

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
				finalActualQuantity.setDiamond((diamondQuantityActual - salesReturnDiamondQuantityDetails) / 1000);
				finalActualQuantity.setGold((goldQuantityActual - salesReturnGoldQuantityDetails) / 1000);
				finalActualValue.setDiamond((diamondValueActual - salesReturnDiamondValueDetails) / 100000);
				finalActualValue.setGold((goldValueActual - salesReturnGoldValueDetails) / 100000);

				finalActualQuantityValue.setQty(finalActualQuantity);

				finalActualQuantityValue.setValue(finalActualValue);

				locationtargetVsActual.setActuals(finalActualQuantityValue);

				actualQuantity.setDiamond(actualDiamondQuantity);
				actualQuantity.setGold(actualGoldQuantity);
				actualValue.setDiamond(actualDiamondValue);
				actualValue.setGold(actualGoldValue);

				actualQuantityValue.setQty(actualQuantity);
				actualQuantityValue.setValue(actualValue);

				targetQuantity.setDiamond(targetDiamondQuantity);
				targetQuantity.setGold(targetGoldQuantity);
				targetValue.setDiamond(targetDiamondValue);
				targetValue.setGold(targetGoldValue);

				targetQuantityValue.setQty(targetQuantity);
				targetQuantityValue.setValue(targetValue);

				locations.setCode(locationCode);
				locations.setLocationName(locationName);
				locations.setActuals(actualQuantityValue);
				locations.setTarget(targetQuantityValue);

				ecahTgtVsActualDetails.setTimeLine(timeline);

				ecahTgtVsActualDetails.setLocations(locations);

				locationtargetVsActual.setActuals(finalActualQuantityValue);

				locationtargetVsActual.setDetails(ecahTgtVsActualDetails);

				response.setStatus(HttpServletResponse.SC_OK);
				response.setMessage("successful");
				response.setFromDate(startDate);
				response.setToDate(endDate);
				response.setData(locationtargetVsActual);

			}

		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS103.name(), EnumTypeForErrorCodes.SCUS103.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}
		return response;

	}

	public TargetVsActualResponse<LocationTgtVsActulas> getLocationTargetVsActualByDay(String startDate, String endDate,
			Long locationId) {
		log.info("get target vs actual sales groupby between startDate and endDate");
		TargetVsActualResponse<LocationTgtVsActulas> response = new TargetVsActualResponse<>();

		LocationTgtVsActulas locationtargetVsActual = new LocationTgtVsActulas();

		EcahTgtVsActualDetails ecahTgtVsActualDetails = new EcahTgtVsActualDetails();

		Double salesReturnGoldQuantityDetails = 0.0;
		Double salesReturnGoldValueDetails = 0.0;
		Double salesReturnDiamondQuantityDetails = 0.0;
		Double salesReturnDiamondValueDetails = 0.0;

		String locationCode = null;

		String locationName = null;

		try {

			Optional<Location> locationObj = locationRepo.findById(locationId);

			if (locationObj.isPresent()) {
				locationCode = locationObj.get().getLocationCode();
				locationName = locationObj.get().getLocationName();
			}

			LocalDate localStartDate = LocalDate.parse(startDate);
			LocalDate localEndDate = LocalDate.parse(endDate);

			String date1 = localStartDate.getMonth() + "-" + localStartDate.getYear();
			String date2 = localEndDate.getMonth() + "-" + localEndDate.getYear();

			DateFormat formater = new SimpleDateFormat(DATAFORMAT);

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

			QuantityValue finalActualQuantityValue = new QuantityValue();
			Quantity finalActualQuantity = new Quantity();
			Value finalActualValue = new Value();

			QuantityValue finalTargetQuantityValue = new QuantityValue();
			Quantity finalTargetQuantity = new Quantity();
			Value finalTargetValue = new Value();

			LocationTargetVsActualDetails targetVsActualDetails = new LocationTargetVsActualDetails();

			List<String> timeline = new ArrayList<>();
			ItemQuantityValue actualQuantityValue = new ItemQuantityValue();
			ItemQuantityValue targetQuantityValue = new ItemQuantityValue();

			QuantityList actualQuantity = new QuantityList();
			ValueList actualValue = new ValueList();

			QuantityList targetQuantity = new QuantityList();
			ValueList targetValue = new ValueList();

			Locations locations = new Locations();

			List<Double> actualGoldQuantity = new ArrayList<>();
			List<Double> actualDiamondQuantity = new ArrayList<>();
			List<Double> actualGoldValue = new ArrayList<>();
			List<Double> actualDiamondValue = new ArrayList<>();

			List<Double> targetGoldQuantity = new ArrayList<>();
			List<Double> targetDiamondQuantity = new ArrayList<>();
			List<Double> targetGoldValue = new ArrayList<>();
			List<Double> targetDiamondValue = new ArrayList<>();

			Double tgtDiaquantity = 0.0;
			Double tgtGoldQuantity = 0.0;
			Double tgtDiaValue = 0.0;
			Double tgtGoldValue = 0.0;

			Double goldQuantityActual = 0.0;
			Double goldValueActual = 0.0;
			Double diamondQuantityActual = 0.0;
			Double diamondValueActual = 0.0;

			Collection<Sales> empActualList = null;
			Collection<EmployeeItemMonthlyTarget> monthlyTarget = null;

			long noOfDaysBetween = 0l;
			String startDateTimeline = null;
			String endDateTimeline = null;

			List<Sample> sampList = new ArrayList<>();

			if (datesList.size() == 1) {
				Sample samp = new Sample();
				empActualList = salesRepo.findByStartDateAndEndDateAndLocationName(startDate, endDate, locationId);
				monthlyTarget = employeeItemMonthlyTargetRepo.findByTgtMonth(datesList.get(0));
				noOfDaysBetween = ChronoUnit.DAYS.between(localStartDate, localEndDate) + 1;
				startDateTimeline = startDate;
				endDateTimeline = endDate;

				samp.setEmployees(monthlyTarget);
				samp.setNumberOfDays(noOfDaysBetween);
				samp.setEndDateTimeline(endDateTimeline);
				samp.setSale(empActualList);
				samp.setStartDateTimeline(startDateTimeline);
				sampList.add(samp);

			} else {

				for (int i = 0; i < datesList.size(); i++) {

					Date date10 = new SimpleDateFormat(DATAFORMAT).parse(datesList.get(i));
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
						Sample samp = new Sample();
						String lastDay1 = datesList.get(0).substring(4, 8) + "-" + m + "-" + lastDay;
						LocalDate day = LocalDate.parse(lastDay1);
						empActualList = salesRepo.findByStartDateAndEndDateAndLocationName(startDate, lastDay1,
								locationId);
						monthlyTarget = employeeItemMonthlyTargetRepo.findByTgtMonth(datesList.get(i));
						noOfDaysBetween = ChronoUnit.DAYS.between(localStartDate, day) + 1;
						startDateTimeline = startDate;
						endDateTimeline = lastDay1;
						samp.setEmployees(monthlyTarget);
						samp.setNumberOfDays(noOfDaysBetween);
						samp.setEndDateTimeline(endDateTimeline);
						samp.setSale(empActualList);
						samp.setStartDateTimeline(startDateTimeline);
						sampList.add(samp);

					} else {
						Sample samp = new Sample();
						String firstDay1 = datesList.get(i).substring(4, 8) + "-" + m + "-" + "01";
						LocalDate day = LocalDate.parse(firstDay1);
						empActualList = salesRepo.findByStartDateAndEndDateAndLocationName(firstDay1, endDate,
								locationId);

						monthlyTarget = employeeItemMonthlyTargetRepo.findByTgtMonth(datesList.get(i));
						noOfDaysBetween = ChronoUnit.DAYS.between(day, localEndDate) + 1;
						startDateTimeline = firstDay1;
						endDateTimeline = endDate;
						samp.setEmployees(monthlyTarget);
						samp.setNumberOfDays(noOfDaysBetween);
						samp.setEndDateTimeline(endDateTimeline);
						samp.setSale(empActualList);
						samp.setStartDateTimeline(startDateTimeline);
						sampList.add(samp);
					}

				}

			}

			for (Sample sample : sampList) {
				startDateTimeline = sample.getStartDateTimeline();

				for (int i = 0; i < sample.getNumberOfDays(); i++) {

					Double monthlyTargetGoldQuantity = 0.0;
					Double monthlyTargetGoldValue = 0.0;
					Double monthlyTargetDiamondQuantity = 0.0;
					Double monthlyTargetDiamondValue = 0.0;

					if (!sample.getEmployees().isEmpty()) {

						for (EmployeeItemMonthlyTarget tgt : sample.getEmployees()) {

							Date date10 = new SimpleDateFormat(DATAFORMAT).parse(tgt.getTgtMonth());
							Calendar cal = Calendar.getInstance();
							cal.setTime(date10);
							int lastDate = cal.getActualMaximum(Calendar.DATE);

							if (tgt.getEmp().getLocation().getId().equals(locationId)) {

								if (tgt.getItemType().equalsIgnoreCase(GOLD)) {

									monthlyTargetGoldQuantity = monthlyTargetGoldQuantity
											+ (tgt.getQuantity() / lastDate);
									monthlyTargetGoldValue = monthlyTargetGoldValue + (tgt.getValue() / lastDate);
									tgtGoldQuantity = tgtGoldQuantity + (tgt.getQuantity() / lastDate);
									tgtGoldValue = tgtGoldValue + (tgt.getValue() / lastDate);
								} else if (tgt.getItemType().equalsIgnoreCase(DIAMOND)) {

									monthlyTargetDiamondQuantity = monthlyTargetDiamondQuantity
											+ (tgt.getQuantity() / lastDate);

									monthlyTargetDiamondValue = monthlyTargetDiamondValue
											+ +(tgt.getValue() / lastDate);

									tgtDiaquantity = tgtDiaquantity + (tgt.getQuantity() / lastDate);
									tgtDiaValue = tgtDiaValue + (tgt.getValue() / lastDate);

								}

							}
						}

						targetDiamondQuantity.add(monthlyTargetDiamondQuantity);
						targetDiamondValue.add(monthlyTargetDiamondValue);
						targetGoldQuantity.add(monthlyTargetGoldQuantity);
						targetGoldValue.add(monthlyTargetGoldValue);

					}

					else {
						targetGoldQuantity.add(0.0);
						targetGoldValue.add(0.0);
						targetDiamondQuantity.add(0.0);
						targetDiamondValue.add(0.0);
					}

					finalTargetQuantity.setDiamond(tgtDiaquantity);
					finalTargetQuantity.setGold(tgtGoldQuantity);
					finalTargetValue.setDiamond(tgtDiaValue);
					finalTargetValue.setGold(tgtGoldValue);

					finalTargetQuantityValue.setQty(finalTargetQuantity);

					finalTargetQuantityValue.setValue(finalTargetValue);

					locationtargetVsActual.setTarget(finalTargetQuantityValue);

					LocalDate localStartDateTimeline = LocalDate.parse(startDateTimeline);

					final String DATE_FORMATTER = "dd-MM-yyyy";

					DateTimeFormatter formatter = DateTimeFormatter.ofPattern(DATE_FORMATTER);
					String formatDateTime = localStartDateTimeline.format(formatter);

					timeline.add(formatDateTime);
					List<Sales> saleExists = salesRepo.findByTransactionDateAndLocation(localStartDateTimeline,
							locationId);
					LocalDate nextDay = localStartDateTimeline.plusDays(1);
					startDateTimeline = nextDay.toString();

					if (!saleExists.isEmpty()) {

						Double monthlyActualGoldQuantity = 0.0;
						Double monthlyActualGoldValue = 0.0;
						Double monthlyActualDiamondQuantity = 0.0;
						Double monthlyActualDiamondValue = 0.0;

						Double salesReturnGoldQuantity = 0.0;
						Double salesReturnGoldValue = 0.0;
						Double salesReturnDiamondQuantity = 0.0;
						Double salesReturnDiamondValue = 0.0;

						for (Sales sale : saleExists) {

							SalesReturns salesReturns = salesReturnsRepo.findBySales(sale);

							if (salesReturns != null) {

								if (sale.getItemType().equalsIgnoreCase(GOLD)) {

									salesReturnGoldQuantity = salesReturnGoldQuantity + salesReturns.getGrossWeight();
									salesReturnGoldQuantityDetails = salesReturnGoldQuantityDetails
											+ salesReturns.getGrossWeight();
									salesReturnGoldValue = salesReturnGoldValue + salesReturns.getAmountPayable();
									salesReturnGoldValueDetails = salesReturnGoldValueDetails
											+ salesReturns.getAmountPayable();

								} else if (sale.getItemType().equalsIgnoreCase(DIAMOND)) {

									salesReturnDiamondQuantity = salesReturnDiamondQuantity
											+ salesReturns.getDiamondWeight();
									salesReturnDiamondQuantityDetails = salesReturnDiamondQuantityDetails
											+ salesReturns.getDiamondWeight();
									salesReturnDiamondValue = salesReturnDiamondValue + salesReturns.getAmountPayable();
									salesReturnDiamondValueDetails = salesReturnDiamondValueDetails
											+ salesReturns.getAmountPayable();
								}

							}

							if (sale.getItemType().equalsIgnoreCase(GOLD)) {

								monthlyActualGoldQuantity = monthlyActualGoldQuantity + sale.getGrossWeight();
								monthlyActualGoldValue = monthlyActualGoldValue + sale.getTotalSoldAmount();
								goldQuantityActual = goldQuantityActual + sale.getGrossWeight();
								goldValueActual = goldValueActual + sale.getTotalSoldAmount();

							} else if (sale.getItemType().equalsIgnoreCase(DIAMOND)) {
								monthlyActualDiamondQuantity = monthlyActualDiamondQuantity + sale.getDiamondWeight();

								monthlyActualDiamondValue = monthlyActualDiamondValue + sale.getTotalSoldAmount();
								diamondQuantityActual = diamondQuantityActual + sale.getDiamondWeight();
								diamondValueActual = diamondValueActual + sale.getTotalSoldAmount();

							}

						}
						actualGoldQuantity.add((monthlyActualGoldQuantity - salesReturnGoldQuantity) / 1000);
						actualGoldValue.add((monthlyActualGoldValue - salesReturnGoldValue) / 100000);
						actualDiamondQuantity.add((monthlyActualDiamondQuantity - salesReturnDiamondQuantity));
						actualDiamondValue.add((monthlyActualDiamondValue - salesReturnDiamondValue) / 100000);

					} else {
						actualGoldQuantity.add(0.0);
						actualGoldValue.add(0.0);
						actualDiamondQuantity.add(0.0);
						actualDiamondValue.add(0.0);

					}

				}

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

			targetQuantity.setDiamond(targetDiamondQuantity);
			targetQuantity.setGold(targetGoldQuantity);
			targetValue.setDiamond(targetDiamondValue);
			targetValue.setGold(targetGoldValue);

			targetQuantityValue.setQty(targetQuantity);
			targetQuantityValue.setValue(targetValue);

			locations.setCode(locationCode);
			locations.setLocationName(locationName);
			locations.setActuals(actualQuantityValue);
			locations.setTarget(targetQuantityValue);

			ecahTgtVsActualDetails.setTimeLine(timeline);

			ecahTgtVsActualDetails.setLocations(locations);

			targetVsActualDetails.setActuals(actualQuantityValue);
			targetVsActualDetails.setTarget(targetQuantityValue);

			locationtargetVsActual.setActuals(finalActualQuantityValue);

			locationtargetVsActual.setDetails(ecahTgtVsActualDetails);

			response.setStatus(HttpServletResponse.SC_OK);
			response.setMessage("successful");
			response.setFromDate(startDate);
			response.setToDate(endDate);
			response.setData(locationtargetVsActual);

		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS104.name(), EnumTypeForErrorCodes.SCUS104.errorMsg());
			response.setMessage("Failed to get sales target vs actuals");
			log.error(utils.toJson(response.getError()), e);
		}

		return response;

	}

	@Override
	public TargetVsActualResponse<LocationTgtVsActulas> getLocationStoreTargetVsActual(String locationName,
			String startDate, String endDate) {

		log.info("get Location target vs actual sales groupby between startDate and endDate");
		TargetVsActualResponse<LocationTgtVsActulas> response = new TargetVsActualResponse<>();

		try {

			Location locationObj = locationRepo.findByLocationName(locationName);

			Long locationId = locationObj.getId();

			LocalDate localStartDate = LocalDate.parse(startDate);
			LocalDate localEndDate = LocalDate.parse(endDate);

			long betweenDays = ChronoUnit.DAYS.between(localStartDate, localEndDate);

			if (betweenDays <= 15) {
				// daywise
				response = getLocationTargetVsActualByDay(startDate, endDate, locationId);
			} else if (betweenDays > 15 && betweenDays <= 60) {
				// week
				response = getLocationStoreTargetVsActualByWeek(startDate, endDate, locationId);
			} else {
				// month
				response = getLocationTargetVsActualByMonth(startDate, endDate, locationId);
			}
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS104.name(), EnumTypeForErrorCodes.SCUS104.errorMsg());
			response.setMessage("Failed to get sales target vs actuals");
			log.error(utils.toJson(response.getError()), e);
		}
		return response;
	}

	public TargetVsActualResponse<LocationTgtVsActulas> getLocationStoreTargetVsActualByWeek(String startDate,
			String endDate, Long locationId) {

		log.info("get target vs actual sales groupby between startDate and endDate");
		TargetVsActualResponse<LocationTgtVsActulas> response = new TargetVsActualResponse<>();

		LocationTgtVsActulas locationtargetVsActual = new LocationTgtVsActulas();

		EcahTgtVsActualDetails ecahTgtVsActualDetails = new EcahTgtVsActualDetails();

		Double salesReturnGoldQuantityDetails = 0.0;
		Double salesReturnGoldValueDetails = 0.0;
		Double salesReturnDiamondQuantityDetails = 0.0;
		Double salesReturnDiamondValueDetails = 0.0;

		String locationCode = null;

		String locationName = null;

		try {
			Optional<Location> locationObj = locationRepo.findById(locationId);

			if (locationObj.isPresent()) {
				locationCode = locationObj.get().getLocationCode();
				locationName = locationObj.get().getLocationName();
			}

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
			Collection<Sales> empActualList = null;

			Collection<EmployeeItemMonthlyTarget> monthlyTarget = null;

			long noOfDaysBetween = 0l;
			Double tgtDiaquantity = 0.0;
			Double tgtGoldQuantity = 0.0;
			Double tgtDiaValue = 0.0;
			Double tgtGoldValue = 0.0;

			Double goldQuantityActual = 0.0;
			Double goldValueActual = 0.0;
			Double diamondQuantityActual = 0.0;
			Double diamondValueActual = 0.0;

			QuantityValue finalActualQuantityValue = new QuantityValue();
			Quantity finalActualQuantity = new Quantity();
			Value finalActualValue = new Value();

			QuantityValue finalTargetQuantityValue = new QuantityValue();
			Quantity finalTargetQuantity = new Quantity();
			Value finalTargetValue = new Value();

			LocationTargetVsActualDetails targetVsActualDetails = new LocationTargetVsActualDetails();

			Locations locations = new Locations();

			List<String> timeline = new ArrayList<>();
			ItemQuantityValue actualQuantityValue = new ItemQuantityValue();
			ItemQuantityValue targetQuantityValue = new ItemQuantityValue();

			QuantityList actualQuantity = new QuantityList();
			ValueList actualValue = new ValueList();
			List<Double> actualGoldQuantity = new ArrayList<>();
			List<Double> actualDiamondQuantity = new ArrayList<>();
			List<Double> actualGoldValue = new ArrayList<>();
			List<Double> actualDiamondValue = new ArrayList<>();

			QuantityList targetQuantity = new QuantityList();
			ValueList targetValue = new ValueList();
			List<Double> targetGoldQuantity = new ArrayList<>();
			List<Double> targetDiamondQuantity = new ArrayList<>();
			List<Double> targetGoldValue = new ArrayList<>();
			List<Double> targetDiamondValue = new ArrayList<>();

			for (Dates dateValue : weeksList) {

				LocalDate sample1 = dateValue.getStartDate();
				LocalDate sample2 = dateValue.getEndDate();

				String samp = dateValue.getStartDate().toString();
				String samp1 = dateValue.getEndDate().toString();
				String date1 = sample1.getMonth() + "-" + sample1.getYear();
				String date2 = sample2.getMonth() + "-" + sample2.getYear();

				DateFormat formater = new SimpleDateFormat(DATAFORMAT);

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

				List<Sample> sampList = new ArrayList<>();

				if (datesList.size() == 1) {
					Sample sample11 = new Sample();
					Date date10 = new SimpleDateFormat(DATAFORMAT).parse(datesList.get(0));
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
					empActualList = salesRepo.findByStartDateAndEndDateAndLocationName(samp, samp1, locationId);
					monthlyTarget = employeeItemMonthlyTargetRepo.findByTgtMonth(datesList.get(0));
					noOfDaysBetween = ChronoUnit.DAYS.between(dateValue.getStartDate(), dateValue.getEndDate()) + 1;

					sample11.setEmployees(monthlyTarget);
					sample11.setNumberOfDays(noOfDaysBetween);
					sample11.setEndDateTimeline(dateValue.getEndDate().toString());
					sample11.setSale(empActualList);
					sample11.setStartDateTimeline(dateValue.getStartDate().toString());
					sampList.add(sample11);
				} else {

					for (int i = 0; i < datesList.size(); i++) {
						Date date10 = new SimpleDateFormat(DATAFORMAT).parse(datesList.get(i));
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
						LocalDate day = LocalDate.parse(firstDay1);
						String lastDay1 = datesList.get(i).substring(4, 8) + "-" + m + "-" + lastDay;
						LocalDate day2 = LocalDate.parse(lastDay1);

						if (i == 0) {
							Sample sample11 = new Sample();
							empActualList = salesRepo.findByStartDateAndEndDateAndLocationName(
									dateValue.getStartDate().toString(), lastDay1, locationId);
							noOfDaysBetween = ChronoUnit.DAYS.between(dateValue.getStartDate(), day2) + 1;
							monthlyTarget = employeeItemMonthlyTargetRepo.findByTgtMonth(datesList.get(i));

							sample11.setEmployees(monthlyTarget);
							sample11.setNumberOfDays(noOfDaysBetween);
							sample11.setEndDateTimeline(lastDay1);
							sample11.setSale(empActualList);
							sample11.setStartDateTimeline(dateValue.getStartDate().toString());
							sampList.add(sample11);
						} else {
							Sample sample11 = new Sample();
							empActualList = salesRepo.findByStartDateAndEndDateAndLocationName(firstDay1,
									dateValue.getEndDate().toString(), locationId);
							noOfDaysBetween = ChronoUnit.DAYS.between(day, dateValue.getEndDate()) + 1;
							monthlyTarget = employeeItemMonthlyTargetRepo.findByTgtMonth(datesList.get(i));

							sample11.setEmployees(monthlyTarget);
							sample11.setNumberOfDays(noOfDaysBetween);
							sample11.setEndDateTimeline(dateValue.getEndDate().toString());
							sample11.setSale(empActualList);
							sample11.setStartDateTimeline(firstDay1);
							sampList.add(sample11);

						}

					}
				}

				timeline.add(dateValue.getWeekNumber());

				Double monthlyTargetGoldQuantity = 0.0;
				Double monthlyTargetGoldValue = 0.0;
				Double monthlyTargetDiamondQuantity = 0.0;
				Double monthlyTargetDiamondValue = 0.0;

				for (Sample sample : sampList) {

					if (!sample.getEmployees().isEmpty()) {

						for (EmployeeItemMonthlyTarget tgt : sample.getEmployees()) {

							Date date10 = new SimpleDateFormat(DATAFORMAT).parse(tgt.getTgtMonth());
							Calendar cal = Calendar.getInstance();
							cal.setTime(date10);
							int lastDate = cal.getActualMaximum(Calendar.DATE);

							if (tgt.getEmp().getLocation().getId().equals(locationId)) {

								if (tgt.getItemType().equalsIgnoreCase(GOLD)) {

									monthlyTargetGoldQuantity = monthlyTargetGoldQuantity
											+ (tgt.getQuantity() / lastDate) * sample.getNumberOfDays();
									monthlyTargetGoldValue = monthlyTargetGoldValue
											+ (tgt.getValue() / lastDate) * sample.getNumberOfDays();
									tgtGoldQuantity = tgtGoldQuantity
											+ (tgt.getQuantity() / lastDate) * sample.getNumberOfDays();
									tgtGoldValue = tgtGoldValue
											+ (tgt.getValue() / lastDate) * sample.getNumberOfDays();

								} else if (tgt.getItemType().equalsIgnoreCase(DIAMOND)) {

									monthlyTargetDiamondQuantity = monthlyTargetDiamondQuantity
											+ (tgt.getQuantity() / lastDate) * sample.getNumberOfDays();

									monthlyTargetDiamondValue = monthlyTargetDiamondValue
											+ +(tgt.getValue() / lastDate) * sample.getNumberOfDays();

									tgtDiaquantity = tgtDiaquantity
											+ (tgt.getQuantity() / lastDate) * sample.getNumberOfDays();
									tgtDiaValue = tgtDiaValue + (tgt.getValue() / lastDate) * sample.getNumberOfDays();

								}

							}
						}

					} else {
						monthlyTargetDiamondQuantity = monthlyTargetDiamondQuantity + 0.0;
						monthlyTargetDiamondValue = monthlyTargetDiamondValue + 0.0;
						tgtGoldQuantity = tgtGoldQuantity + 0.0;
						tgtGoldValue = tgtGoldValue + 0.0;

					}

				}
				targetGoldQuantity.add(monthlyTargetGoldQuantity);
				targetGoldValue.add(monthlyTargetGoldValue);
				targetDiamondQuantity.add(monthlyTargetDiamondQuantity);
				targetDiamondValue.add(monthlyTargetDiamondValue);

				finalTargetQuantity.setDiamond(tgtDiaquantity);
				finalTargetQuantity.setGold(tgtGoldQuantity);
				finalTargetValue.setDiamond(tgtDiaValue);
				finalTargetValue.setGold(tgtGoldValue);

				finalTargetQuantityValue.setQty(finalTargetQuantity);

				finalTargetQuantityValue.setValue(finalTargetValue);

				locationtargetVsActual.setTarget(finalTargetQuantityValue);

				Double monthlyActualGoldQuantity = 0.0;
				Double monthlyActualGoldValue = 0.0;
				Double monthlyActualDiamondQuantity = 0.0;
				Double monthlyActualDiamondValue = 0.0;

				Double salesReturnGoldQuantity = 0.0;
				Double salesReturnGoldValue = 0.0;
				Double salesReturnDiamondQuantity = 0.0;
				Double salesReturnDiamondValue = 0.0;

				for (Sample sample : sampList) {

					String startDateTimeline = sample.getStartDateTimeline();
					LocalDate localStartDateTimeline = LocalDate.parse(startDateTimeline);

					LocalDate nextDay = localStartDateTimeline.plusDays(1);
					startDateTimeline = nextDay.toString();

					if (!sample.getSale().isEmpty()) {

						for (Sales sale : sample.getSale()) {

							SalesReturns salesReturns = salesReturnsRepo.findBySales(sale);

							if (salesReturns != null) {

								if (sale.getItemType().equalsIgnoreCase(GOLD)) {

									salesReturnGoldQuantity = salesReturnGoldQuantity + salesReturns.getGrossWeight();
									salesReturnGoldQuantityDetails = salesReturnGoldQuantityDetails
											+ salesReturns.getGrossWeight();
									salesReturnGoldValue = salesReturnGoldValue + salesReturns.getAmountPayable();
									salesReturnGoldValueDetails = salesReturnGoldValueDetails
											+ salesReturns.getAmountPayable();
								} else if (sale.getItemType().equalsIgnoreCase(DIAMOND)) {

									salesReturnDiamondQuantity = salesReturnDiamondQuantity
											+ salesReturns.getDiamondWeight();
									salesReturnDiamondQuantityDetails = salesReturnDiamondQuantityDetails
											+ salesReturns.getDiamondWeight();
									salesReturnDiamondValue = salesReturnDiamondValue + salesReturns.getAmountPayable();
									salesReturnDiamondValueDetails = salesReturnDiamondValueDetails
											+ salesReturns.getAmountPayable();
								}

							}

							if (sale.getItemType().equalsIgnoreCase(GOLD)) {

								monthlyActualGoldQuantity = monthlyActualGoldQuantity + sale.getGrossWeight();
								monthlyActualGoldValue = monthlyActualGoldValue + sale.getTotalSoldAmount();
								goldQuantityActual = goldQuantityActual + sale.getGrossWeight();
								goldValueActual = goldValueActual + sale.getTotalSoldAmount();

							} else if (sale.getItemType().equalsIgnoreCase(DIAMOND)) {
								monthlyActualDiamondQuantity = monthlyActualDiamondQuantity + sale.getDiamondWeight();

								monthlyActualDiamondValue = monthlyActualDiamondValue + sale.getTotalSoldAmount();
								diamondQuantityActual = diamondQuantityActual + sale.getDiamondWeight();
								diamondValueActual = diamondValueActual + sale.getTotalSoldAmount();

							}

						}

					} else {

						monthlyActualGoldQuantity += 0.0;
						monthlyActualGoldValue += 0.0;
						monthlyActualDiamondQuantity += 0.0;
						monthlyActualDiamondValue += 0.0;

					}

				}
				actualGoldQuantity.add((monthlyActualGoldQuantity - salesReturnGoldQuantity) / 1000);
				actualGoldValue.add((monthlyActualGoldValue - salesReturnGoldValue) / 100000);
				actualDiamondQuantity.add((monthlyActualDiamondQuantity - salesReturnDiamondQuantity));
				actualDiamondValue.add((monthlyActualDiamondValue - salesReturnDiamondValue) / 100000);

				finalActualQuantity.setDiamond((diamondQuantityActual - salesReturnDiamondQuantityDetails));
				finalActualQuantity.setGold((goldQuantityActual - salesReturnGoldQuantityDetails) / 1000);
				finalActualValue.setDiamond((diamondValueActual - salesReturnDiamondValueDetails) / 100000);
				finalActualValue.setGold((goldValueActual - salesReturnGoldValueDetails) / 100000);

				finalActualQuantityValue.setQty(finalActualQuantity);

				finalActualQuantityValue.setValue(finalActualValue);

				locationtargetVsActual.setActuals(finalActualQuantityValue);

				actualQuantity.setDiamond(actualDiamondQuantity);
				actualQuantity.setGold(actualGoldQuantity);
				actualValue.setDiamond(actualDiamondValue);
				actualValue.setGold(actualGoldValue);

				actualQuantityValue.setQty(actualQuantity);
				actualQuantityValue.setValue(actualValue);

				targetQuantity.setDiamond(targetDiamondQuantity);
				targetQuantity.setGold(targetGoldQuantity);
				targetValue.setDiamond(targetDiamondValue);
				targetValue.setGold(targetGoldValue);

				targetQuantityValue.setQty(targetQuantity);
				targetQuantityValue.setValue(targetValue);

				locations.setCode(locationCode);
				locations.setLocationName(locationName);
				locations.setActuals(actualQuantityValue);
				locations.setTarget(targetQuantityValue);

				ecahTgtVsActualDetails.setTimeLine(timeline);

				ecahTgtVsActualDetails.setLocations(locations);

				locationtargetVsActual.setActuals(finalActualQuantityValue);

				locationtargetVsActual.setDetails(ecahTgtVsActualDetails);

				response.setStatus(HttpServletResponse.SC_OK);
				response.setMessage("successful");
				response.setFromDate(startDate);
				response.setToDate(endDate);
				response.setData(locationtargetVsActual);

			}

		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS104.name(), EnumTypeForErrorCodes.SCUS104.errorMsg());
			response.setMessage("Failed to get sales target vs actuals");
			log.error(utils.toJson(response.getError()), e);
		}
		return response;

	}

}

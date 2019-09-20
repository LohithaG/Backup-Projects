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

import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.mss.pmj.pmjmis.common.EnumTypeForErrorCodes;
import com.mss.pmj.pmjmis.common.Utils;
import com.mss.pmj.pmjmis.domain.EmpDailyActuals;
import com.mss.pmj.pmjmis.domain.EmployeeItemMonthlyTarget;
import com.mss.pmj.pmjmis.domain.Sales;
import com.mss.pmj.pmjmis.domain.SalesReturns;
import com.mss.pmj.pmjmis.model.ServiceResponse;
import com.mss.pmj.pmjmis.repos.ChannelRepository;
import com.mss.pmj.pmjmis.repos.EmpDailyActualsRepository;
import com.mss.pmj.pmjmis.repos.EmployeeItemMonthlyTargetRepository;
import com.mss.pmj.pmjmis.repos.SalesRepository;
import com.mss.pmj.pmjmis.repos.SalesReturnsRepository;
import com.mss.pmj.pmjmis.repos.TeamItemMonthlyTargetRepository;
import com.mss.pmj.pmjmis.response.Achivements;
import com.mss.pmj.pmjmis.response.Conversion;
import com.mss.pmj.pmjmis.response.Dates;
import com.mss.pmj.pmjmis.response.ItemQuantityValue;
import com.mss.pmj.pmjmis.response.Margins;
import com.mss.pmj.pmjmis.response.PCSalesPersonWiseMarginsResponse;
import com.mss.pmj.pmjmis.response.PerformanceAnalysisSalesPersonWiseDetails;
import com.mss.pmj.pmjmis.response.Quantity;
import com.mss.pmj.pmjmis.response.QuantityList;
import com.mss.pmj.pmjmis.response.QuantityValue;
import com.mss.pmj.pmjmis.response.SalesPersonWiseAchivements;
import com.mss.pmj.pmjmis.response.Sample;
import com.mss.pmj.pmjmis.response.TagSalePrice;
import com.mss.pmj.pmjmis.response.TargetVsActualDetails;
import com.mss.pmj.pmjmis.response.TargetVsActualResponse;
import com.mss.pmj.pmjmis.response.TgtVsActual;
import com.mss.pmj.pmjmis.response.TicketSize;
import com.mss.pmj.pmjmis.response.Value;
import com.mss.pmj.pmjmis.response.ValueList;
import com.mss.pmj.pmjmis.svcs.PerformanceAnalysisSalesPersonWiseService;

@RestController
public class PerformanceAnalysisSalesPersonlWiseServiceImpl implements PerformanceAnalysisSalesPersonWiseService {

	private static final Logger log = LoggerFactory.getLogger(PerformanceAnalysisSalesPersonlWiseServiceImpl.class);

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
	private EmpDailyActualsRepository empDailyActualsRepo;

	@Autowired
	private SalesReturnsRepository salesReturnsRepo;

	private static final String DATE_FORMATE = "MMM-yyyy";

	private static final String DIAMOND = "Diamond";

	private static final String GOLD = "Gold";

	private static final String SUCCESSFUL = "successful";

	public TargetVsActualResponse<TgtVsActual> getTargetVsActualByMonth(String startDate, String endDate,
			Long salesPersonId) {
		log.info("get target vs actual sales between startDate and endDate");

		TargetVsActualResponse<TgtVsActual> response = new TargetVsActualResponse<>();

		TgtVsActual targetVsActual = new TgtVsActual();

		try {

			LocalDate localStartDate = LocalDate.parse(startDate);
			LocalDate localEndDate = LocalDate.parse(endDate);

			String date1 = localStartDate.getMonth() + "-" + localStartDate.getYear();
			String date2 = localEndDate.getMonth() + "-" + localEndDate.getYear();

			DateFormat formater = new SimpleDateFormat(DATE_FORMATE);

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

			Double salesReturnGoldQuantityDetails = 0.0;
			Double salesReturnGoldValueDetails = 0.0;
			Double salesReturnDiamondQuantityDetails = 0.0;
			Double salesReturnDiamondValueDetails = 0.0;

			QuantityValue finalActualQuantityValue = new QuantityValue();
			Quantity finalActualQuantity = new Quantity();
			Value finalActualValue = new Value();

			QuantityValue finalTargetQuantityValue = new QuantityValue();
			Quantity finalTargetQuantity = new Quantity();
			Value finalTargetValue = new Value();

			TargetVsActualDetails targetVsActualDetails = new TargetVsActualDetails();

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

			for (int i = 0; i < datesList.size(); i++) {

				Collection<Sales> empActualList = null;

				Collection<EmployeeItemMonthlyTarget> monthlyTarget = null;

				long noOfDaysBetween = 0l;

				if (i == 0) {

					if (date1.equals(date2)) {
						empActualList = salesRepo.findByStartDateAndEndDateAndEmpId(startDate, endDate, salesPersonId);
						monthlyTarget = empItemMonthlyTargetRepo.findByTgtMonthAndEmp(datesList.get(i), salesPersonId);
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
						empActualList = salesRepo.findByStartDateAndEndDateAndEmpId(startDate, lastDay1, salesPersonId);
						monthlyTarget = empItemMonthlyTargetRepo.findByTgtMonthAndEmp(datesList.get(i), salesPersonId);
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
					empActualList = salesRepo.findByStartDateAndEndDateAndEmpId(firstDay1, lastDay1, salesPersonId);
					monthlyTarget = empItemMonthlyTargetRepo.findByTgtMonthAndEmp(datesList.get(i), salesPersonId);
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
					empActualList = salesRepo.findByStartDateAndEndDateAndEmpId(firstDay1, endDate, salesPersonId);
					monthlyTarget = empItemMonthlyTargetRepo.findByTgtMonthAndEmp(datesList.get(i), salesPersonId);
					noOfDaysBetween = ChronoUnit.DAYS.between(firstday, localEndDate) + 1;
				}

				timeline.add(datesList.get(i));
				if (!monthlyTarget.isEmpty()) {
					Double monthlyTargetGoldQuantity = 0.0;
					Double monthlyTargetGoldValue = 0.0;
					Double monthlyTargetDiamondQuantity = 0.0;
					Double monthlyTargetDiamondValue = 0.0;
					for (EmployeeItemMonthlyTarget tgt : monthlyTarget) {
						Date date10 = new SimpleDateFormat(DATE_FORMATE).parse(tgt.getTgtMonth());
						Calendar cal = Calendar.getInstance();
						cal.setTime(date10);
						int lastDate = cal.getActualMaximum(Calendar.DATE);
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
									+ +(tgt.getValue() / lastDate) * noOfDaysBetween;

							tgtDiaquantity = tgtDiaquantity + (tgt.getQuantity() / lastDate) * noOfDaysBetween;
							tgtDiaValue = tgtDiaValue + (tgt.getValue() / lastDate) * noOfDaysBetween;

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

				targetVsActual.setTarget(finalTargetQuantityValue);

				Double monthlyActualGoldQuantity = 0.0;
				Double monthlyActualGoldValue = 0.0;
				Double monthlyActualDiamondQuantity = 0.0;
				Double monthlyActualDiamondValue = 0.0;

				Double salesReturnGoldQuantity = 0.0;
				Double salesReturnGoldValue = 0.0;
				Double salesReturnDiamondQuantity = 0.0;
				Double salesReturnDiamondValue = 0.0;

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
								monthlyActualGoldQuantity -= salesReturnGoldQuantity;
								monthlyActualGoldValue -= salesReturnGoldValue;

							} else if (sale.getItemType().equalsIgnoreCase(DIAMOND)) {

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
					actualDiamondQuantity.add(monthlyActualDiamondQuantity);
					actualDiamondValue.add(monthlyActualDiamondValue / 100000);
					actualGoldQuantity.add(monthlyActualGoldQuantity / 1000);
					actualGoldValue.add(monthlyActualGoldValue / 100000);

				} else {
					actualDiamondQuantity.add(0.0);
					actualDiamondValue.add(0.0);
					actualGoldQuantity.add(0.0);
					actualGoldValue.add(0.0);
				}

			}

			finalActualQuantity.setDiamond((diamondQuantityActual - salesReturnDiamondQuantityDetails));
			finalActualQuantity.setGold((goldQuantityActual - salesReturnGoldQuantityDetails) / 1000);
			finalActualValue.setDiamond((diamondValueActual - salesReturnDiamondValueDetails) / 100000);
			finalActualValue.setGold((goldValueActual - salesReturnGoldValueDetails) / 100000);

			finalActualQuantityValue.setQty(finalActualQuantity);

			finalActualQuantityValue.setValue(finalActualValue);

			targetVsActual.setActuals(finalActualQuantityValue);

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

			targetVsActualDetails.setTimeline(timeline);
			targetVsActualDetails.setActuals(actualQuantityValue);
			targetVsActualDetails.setTarget(targetQuantityValue);

			targetVsActual.setDetails(targetVsActualDetails);

			response.setStatus(HttpServletResponse.SC_OK);
			response.setMessage(SUCCESSFUL);
			response.setFromDate(startDate);
			response.setToDate(endDate);
			response.setData(targetVsActual);
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS807.name(), EnumTypeForErrorCodes.SCUS807.errorMsg());
			response.setMessage("Failed to get performance analysis sales person wise TargetVsActual by month");
			log.error(utils.toJson(response.getError()), e);
		}
		return response;
	}

	public TargetVsActualResponse<TgtVsActual> getTargetVsActualByDay(String startDate, String endDate,
			Long salesPersonId) {

		log.info("get Target Vs Actual By Day");
		TargetVsActualResponse<TgtVsActual> response = new TargetVsActualResponse<>();

		TgtVsActual targetVsActual = new TgtVsActual();

		try {
			LocalDate localStartDate = LocalDate.parse(startDate);
			LocalDate localEndDate = LocalDate.parse(endDate);

			String date1 = localStartDate.getMonth() + "-" + localStartDate.getYear();
			String date2 = localEndDate.getMonth() + "-" + localEndDate.getYear();

			List<String> datesList = getDays(date1, date2);

			Double tgtDiaquantity = 0.0;
			Double tgtGoldQuantity = 0.0;
			Double tgtDiaValue = 0.0;
			Double tgtGoldValue = 0.0;

			Double goldQuantityActual = 0.0;
			Double goldValueActual = 0.0;
			Double diamondQuantityActual = 0.0;
			Double diamondValueActual = 0.0;

			Double salesReturnGoldQuantityDetails = 0.0;
			Double salesReturnGoldValueDetails = 0.0;
			Double salesReturnDiamondQuantityDetails = 0.0;
			Double salesReturnDiamondValueDetails = 0.0;

			QuantityValue finalActualQuantityValue = new QuantityValue();
			Quantity finalActualQuantity = new Quantity();
			Value finalActualValue = new Value();

			QuantityValue finalTargetQuantityValue = new QuantityValue();
			Quantity finalTargetQuantity = new Quantity();
			Value finalTargetValue = new Value();

			TargetVsActualDetails targetVsActualDetails = new TargetVsActualDetails();

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

			Collection<Sales> empActualList = null;
			Collection<EmployeeItemMonthlyTarget> monthlyTarget = null;

			long noOfDaysBetween = 0l;
			String startDateTimeline = null;
			String endDateTimeline = null;

			List<Sample> sampList = new ArrayList<>();

			if (datesList.size() == 1) {
				Sample samp = new Sample();
				empActualList = salesRepo.findByStartDateAndEndDateAndEmpId(startDate, endDate, salesPersonId);
				monthlyTarget = empItemMonthlyTargetRepo.findByTgtMonthAndEmp(datesList.get(0), salesPersonId);
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
						Sample samp = new Sample();
						String lastDay1 = datesList.get(i).substring(4, 8) + "-" + m + "-" + lastDay;
						LocalDate day = LocalDate.parse(lastDay1);
						empActualList = salesRepo.findByStartDateAndEndDateAndEmpId(startDate, lastDay1, salesPersonId);
						monthlyTarget = empItemMonthlyTargetRepo.findByTgtMonthAndEmp(datesList.get(i), salesPersonId);
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
						empActualList = salesRepo.findByStartDateAndEndDateAndEmpId(firstDay1, endDate, salesPersonId);

						monthlyTarget = empItemMonthlyTargetRepo.findByTgtMonthAndEmp(datesList.get(i), salesPersonId);
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
							Date date10 = new SimpleDateFormat(DATE_FORMATE).parse(tgt.getTgtMonth());
							Calendar cal = Calendar.getInstance();
							cal.setTime(date10);
							int lastDate = cal.getActualMaximum(Calendar.DATE);
							if (tgt.getItemType().equals(GOLD)) {

								monthlyTargetGoldQuantity = monthlyTargetGoldQuantity + (tgt.getQuantity() / lastDate);
								monthlyTargetGoldValue = monthlyTargetGoldValue + (tgt.getValue() / lastDate);
								tgtGoldQuantity = tgtGoldQuantity + (tgt.getQuantity() / lastDate);
								tgtGoldValue = tgtGoldValue + (tgt.getValue() / lastDate);

							} else if (tgt.getItemType().equals(DIAMOND)) {

								monthlyTargetDiamondQuantity = monthlyTargetDiamondQuantity
										+ (tgt.getQuantity() / lastDate);

								monthlyTargetDiamondValue = monthlyTargetDiamondValue + +(tgt.getValue() / lastDate);

								tgtDiaquantity = tgtDiaquantity + (tgt.getQuantity() / lastDate);
								tgtDiaValue = tgtDiaValue + (tgt.getValue() / lastDate);

							}

						}
						targetDiamondQuantity.add(monthlyTargetDiamondQuantity);
						targetDiamondValue.add(monthlyTargetDiamondValue);
						targetGoldQuantity.add(monthlyTargetGoldQuantity);
						targetGoldValue.add(monthlyTargetGoldValue);
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

					targetVsActual.setTarget(finalTargetQuantityValue);

					LocalDate localStartDateTimeline = LocalDate.parse(startDateTimeline);

					final String DATE_FORMATTER = "dd-MM-yyyy";

					DateTimeFormatter formatter = DateTimeFormatter.ofPattern(DATE_FORMATTER);
					String formatDateTime = localStartDateTimeline.format(formatter);

					timeline.add(formatDateTime);
					List<Sales> saleExists = salesRepo.findByTransactionDateAndEmpId(startDateTimeline, salesPersonId);
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

							if (sale.getItemType().equals(GOLD)) {

								monthlyActualGoldQuantity = monthlyActualGoldQuantity + sale.getGrossWeight();
								monthlyActualGoldValue = monthlyActualGoldValue + sale.getTotalSoldAmount();

								goldQuantityActual = goldQuantityActual + sale.getGrossWeight();
								goldValueActual = goldValueActual + sale.getTotalSoldAmount();

							} else if (sale.getItemType().equals(DIAMOND)) {
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
									monthlyActualGoldQuantity -= salesReturnGoldQuantity;
									monthlyActualGoldValue -= salesReturnGoldValue;

								} else if (sale.getItemType().equalsIgnoreCase(DIAMOND)) {

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

						actualGoldQuantity.add((monthlyActualGoldQuantity) / 1000);
						actualGoldValue.add((monthlyActualGoldValue) / 100000);
						actualDiamondQuantity.add(monthlyActualDiamondQuantity);
						actualDiamondValue.add((monthlyActualDiamondValue) / 100000);

					} else {
						actualGoldQuantity.add(0.0);
						actualGoldValue.add(0.0);
						actualDiamondQuantity.add(0.0);
						actualDiamondValue.add(0.0);

					}
				}

			}

			finalActualQuantity.setDiamond(diamondQuantityActual - salesReturnDiamondQuantityDetails);

			finalActualQuantity.setGold(goldQuantityActual - salesReturnGoldQuantityDetails / 1000);

			finalActualValue.setDiamond(diamondValueActual - salesReturnDiamondValueDetails / 100000);

			finalActualValue.setGold(goldValueActual - salesReturnGoldValueDetails / 100000);

			finalActualQuantityValue.setQty(finalActualQuantity);

			finalActualQuantityValue.setValue(finalActualValue);

			targetVsActual.setActuals(finalActualQuantityValue);

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

			targetVsActualDetails.setTimeline(timeline);
			targetVsActualDetails.setActuals(actualQuantityValue);
			targetVsActualDetails.setTarget(targetQuantityValue);

			targetVsActual.setDetails(targetVsActualDetails);

			response.setStatus(HttpServletResponse.SC_OK);
			response.setMessage(SUCCESSFUL);
			response.setFromDate(startDate);
			response.setToDate(endDate);
			response.setData(targetVsActual);
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS808.name(), EnumTypeForErrorCodes.SCUS808.errorMsg());
			response.setMessage("Failed to get performance analysis sales person wise TargetVsActual by day");
			log.error(utils.toJson(response.getError()), e);
		}
		return response;
	}

	public TargetVsActualResponse<TgtVsActual> getTargetVsActualByWeek(String startDate, String endDate,
			Long salesPersonId) {

		log.info("get Target Vs Actual By Week");
		TargetVsActualResponse<TgtVsActual> response = new TargetVsActualResponse<>();

		TgtVsActual targetVsActual = new TgtVsActual();

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

			Double salesReturnGoldQuantityDetails = 0.0;
			Double salesReturnGoldValueDetails = 0.0;
			Double salesReturnDiamondQuantityDetails = 0.0;
			Double salesReturnDiamondValueDetails = 0.0;

			QuantityValue finalActualQuantityValue = new QuantityValue();
			Quantity finalActualQuantity = new Quantity();
			Value finalActualValue = new Value();

			QuantityValue finalTargetQuantityValue = new QuantityValue();
			Quantity finalTargetQuantity = new Quantity();
			Value finalTargetValue = new Value();

			TargetVsActualDetails targetVsActualDetails = new TargetVsActualDetails();

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

				List<Sample> sampList = new ArrayList<>();

				if (datesList.size() == 1) {
					Sample sample11 = new Sample();
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
					empActualList = salesRepo.findByStartDateAndEndDateAndEmpId(samp, samp1, salesPersonId);
					monthlyTarget = empItemMonthlyTargetRepo.findByTgtMonthAndEmp(datesList.get(0), salesPersonId);
					noOfDaysBetween = ChronoUnit.DAYS.between(dateValue.getStartDate(), dateValue.getEndDate()) + 1;

					sample11.setEmployees(monthlyTarget);
					sample11.setNumberOfDays(noOfDaysBetween);
					sample11.setEndDateTimeline(dateValue.getEndDate().toString());
					sample11.setSale(empActualList);
					sample11.setStartDateTimeline(dateValue.getStartDate().toString());
					sampList.add(sample11);
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
						LocalDate day = LocalDate.parse(firstDay1);
						String lastDay1 = datesList.get(i).substring(4, 8) + "-" + m + "-" + lastDay;
						LocalDate day2 = LocalDate.parse(lastDay1);

						if (i == 0) {
							Sample sample11 = new Sample();

							empActualList = salesRepo.findByStartDateAndEndDateAndEmpId(
									dateValue.getStartDate().toString(), lastDay1, salesPersonId);
							noOfDaysBetween = ChronoUnit.DAYS.between(dateValue.getStartDate(), day2) + 1;
							monthlyTarget = empItemMonthlyTargetRepo.findByTgtMonthAndEmp(datesList.get(i),
									salesPersonId);

							sample11.setEmployees(monthlyTarget);
							sample11.setNumberOfDays(noOfDaysBetween);
							sample11.setEndDateTimeline(lastDay1);
							sample11.setSale(empActualList);
							sample11.setStartDateTimeline(dateValue.getStartDate().toString());
							sampList.add(sample11);
						} else {

							Sample sample11 = new Sample();
							empActualList = salesRepo.findByStartDateAndEndDateAndEmpId(firstDay1,
									dateValue.getEndDate().toString(), salesPersonId);
							noOfDaysBetween = ChronoUnit.DAYS.between(day, dateValue.getEndDate()) + 1;
							monthlyTarget = empItemMonthlyTargetRepo.findByTgtMonthAndEmp(datesList.get(i),
									salesPersonId);

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
							Date date10 = new SimpleDateFormat(DATE_FORMATE).parse(tgt.getTgtMonth());
							Calendar cal = Calendar.getInstance();
							cal.setTime(date10);
							int lastDate = cal.getActualMaximum(Calendar.DATE);
							if (tgt.getItemType().equals(GOLD)) {

								monthlyTargetGoldQuantity = monthlyTargetGoldQuantity
										+ (tgt.getQuantity() / lastDate) * sample.getNumberOfDays();
								monthlyTargetGoldValue = monthlyTargetGoldValue
										+ (tgt.getValue() / lastDate) * sample.getNumberOfDays();
								tgtGoldQuantity = tgtGoldQuantity
										+ (tgt.getQuantity() / lastDate) * sample.getNumberOfDays();
								tgtGoldValue = tgtGoldValue + (tgt.getValue() / lastDate) * sample.getNumberOfDays();

							} else if (tgt.getItemType().equals(DIAMOND)) {

								monthlyTargetDiamondQuantity = monthlyTargetDiamondQuantity
										+ (tgt.getQuantity() / lastDate) * sample.getNumberOfDays();

								monthlyTargetDiamondValue = monthlyTargetDiamondValue
										+ +(tgt.getValue() / lastDate) * sample.getNumberOfDays();

								tgtDiaquantity = tgtDiaquantity
										+ (tgt.getQuantity() / lastDate) * sample.getNumberOfDays();
								tgtDiaValue = tgtDiaValue + (tgt.getValue() / lastDate) * sample.getNumberOfDays();

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

				targetVsActual.setTarget(finalTargetQuantityValue);

				Double monthlyActualGoldQuantity = 0.0;
				Double monthlyActualGoldValue = 0.0;
				Double monthlyActualDiamondQuantity = 0.0;
				Double monthlyActualDiamondValue = 0.0;

				Double salesReturnGoldQuantity = 0.0;
				Double salesReturnGoldValue = 0.0;
				Double salesReturnDiamondQuantity = 0.0;
				Double salesReturnDiamondValue = 0.0;

				for (Sample sample : sampList) {
					/*
					 * String startDateTimeline = sample.getStartDateTimeline(); LocalDate
					 * localStartDateTimeline = LocalDate.parse(startDateTimeline);
					 * 
					 * LocalDate nextDay = localStartDateTimeline.plusDays(1); startDateTimeline =
					 * nextDay.toString();
					 */
					if (!sample.getSale().isEmpty()) {
						for (Sales sale : sample.getSale()) {

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
									monthlyActualGoldQuantity -= salesReturnGoldQuantity;
									monthlyActualGoldValue -= salesReturnGoldValue;

								} else if (sale.getItemType().equalsIgnoreCase(DIAMOND)) {

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

					} else {

						monthlyActualGoldQuantity += 0.0;
						monthlyActualGoldValue += 0.0;
						monthlyActualDiamondQuantity += 0.0;
						monthlyActualDiamondValue += 0.0;

					}

				}

				actualGoldQuantity.add((monthlyActualGoldQuantity) / 1000);
				actualGoldValue.add((monthlyActualGoldValue) / 100000);
				actualDiamondQuantity.add((monthlyActualDiamondQuantity));
				actualDiamondValue.add((monthlyActualDiamondValue) / 100000);

				System.out.println((monthlyActualGoldValue) / 100000);

			}

			finalActualQuantity.setDiamond(diamondQuantityActual - salesReturnDiamondQuantityDetails);

			finalActualQuantity.setGold(goldQuantityActual - salesReturnGoldQuantityDetails / 1000);

			finalActualValue.setDiamond(diamondValueActual - salesReturnDiamondValueDetails / 100000);

			finalActualValue.setGold(goldValueActual - salesReturnGoldValueDetails / 100000);
			finalActualQuantityValue.setQty(finalActualQuantity);

			finalActualQuantityValue.setValue(finalActualValue);

			targetVsActual.setActuals(finalActualQuantityValue);

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

			targetVsActualDetails.setTimeline(timeline);
			targetVsActualDetails.setActuals(actualQuantityValue);
			targetVsActualDetails.setTarget(targetQuantityValue);

			targetVsActual.setDetails(targetVsActualDetails);

			response.setStatus(HttpServletResponse.SC_OK);
			response.setMessage(SUCCESSFUL);
			response.setFromDate(startDate);
			response.setToDate(endDate);
			response.setData(targetVsActual);
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS809.name(), EnumTypeForErrorCodes.SCUS809.errorMsg());
			response.setMessage("Failed to get performance analysis sales person wise TargetVsActual by week");
			log.error(utils.toJson(response.getError()), e);
		}
		return response;
	}

	@Override
	public TargetVsActualResponse<TgtVsActual> salesPersonWiseTargetsVsActuals(String startDate, String endDate,
			Long salesPersonId) {

		log.info("sales Person Wise Targets Vs Actuals");
		TargetVsActualResponse<TgtVsActual> response = new TargetVsActualResponse<>();

		try {

			LocalDate localStartDate = LocalDate.parse(startDate);
			LocalDate localEndDate = LocalDate.parse(endDate);

			long betweenDays = ChronoUnit.DAYS.between(localStartDate, localEndDate);

			if (betweenDays < 15) {
				// daywise
				response = getTargetVsActualByDay(startDate, endDate, salesPersonId);
			} else if (betweenDays >= 15 && betweenDays <= 60) {
				// week wise
				response = getTargetVsActualByWeek(startDate, endDate, salesPersonId);
			} else {
				// month wise
				response = getTargetVsActualByMonth(startDate, endDate, salesPersonId);
			}
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS810.name(), EnumTypeForErrorCodes.SCUS810.errorMsg());
			response.setMessage("Failed to get performance analysis sales person wise TargetVsActual");
			log.error(utils.toJson(response.getError()), e);
		}
		return response;
	}

	public List<String> getDays(String startDate, String endDate) {
		ServiceResponse<List<String>> response = new ServiceResponse<>();
		List<String> datesList = new ArrayList<>();
		try {
			DateFormat formater = new SimpleDateFormat(DATE_FORMATE);
			Calendar beginCalendar = Calendar.getInstance();
			Calendar finishCalendar = Calendar.getInstance();
			beginCalendar.setTime(formater.parse(startDate));
			finishCalendar.setTime(formater.parse(endDate));
			while (beginCalendar.before(finishCalendar)) {
				String date = formater.format(beginCalendar.getTime()).toUpperCase();
				beginCalendar.add(Calendar.MONTH, 1);
				datesList.add(date);
			}
			String lastMonth = formater.format(finishCalendar.getTime()).toUpperCase();
			datesList.add(lastMonth);
			response.setData(datesList);
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS811.name(), EnumTypeForErrorCodes.SCUS811.errorMsg());

			log.error(utils.toJson(response.getError()), e);
		}
		return datesList;
	}

	@Override
	public TargetVsActualResponse<SalesPersonWiseAchivements> performanceAnalysisSalesPersonWiseAchivements(
			String startDate, String endDate, Long salesPersonId) {

		log.info("performance Analysis Sales Person Wise Achivements");

		TargetVsActualResponse<SalesPersonWiseAchivements> response = new TargetVsActualResponse<>();

		SalesPersonWiseAchivements salesPersonWiseAchivements = new SalesPersonWiseAchivements();

		List<String> timeLine = new ArrayList<>();

		List<Double> goldAchivementsPercentage = new ArrayList<>();

		List<Double> diamondAchivementsPercentage = new ArrayList<>();

		try {

			TgtVsActual salesTargetVsActual = salesPersonWiseTargetsVsActuals(startDate, endDate, salesPersonId)
					.getData();

			List<String> salesTargetVsActualTimeLine = salesTargetVsActual.getDetails().getTimeline();

			List<Double> listOfActualValueGold = salesTargetVsActual.getDetails().getActuals().getValue().getGold();
			List<Double> listOfActualValueDiamond = salesTargetVsActual.getDetails().getActuals().getValue()
					.getDiamond();

			List<Double> listOfTargetValueGold = salesTargetVsActual.getDetails().getTarget().getValue().getGold();
			List<Double> listOfTargetValueDiamond = salesTargetVsActual.getDetails().getTarget().getValue()
					.getDiamond();

			for (int i = 0; i < salesTargetVsActualTimeLine.size(); i++) {
				timeLine.add(salesTargetVsActualTimeLine.get(i));

				Double goldAchivement = (listOfActualValueGold.get(i) / listOfTargetValueGold.get(i)) * 100;

				Double diamondAchivement = (listOfActualValueDiamond.get(i) / listOfTargetValueDiamond.get(i)) * 100;

				if (goldAchivement.isNaN() || goldAchivement.isInfinite()) {
					goldAchivementsPercentage.add(0.0);

				} else {
					goldAchivementsPercentage.add(goldAchivement);

				}

				if (diamondAchivement.isNaN() || diamondAchivement.isInfinite()) {
					diamondAchivementsPercentage.add(0.0);

				} else {
					diamondAchivementsPercentage.add(diamondAchivement);

				}

			}
			salesPersonWiseAchivements.setTimeLine(timeLine);
			salesPersonWiseAchivements.setGoldAchivementsPercentage(goldAchivementsPercentage);
			salesPersonWiseAchivements.setDiamondAchivementsPercentage(diamondAchivementsPercentage);
			response.setData(salesPersonWiseAchivements);

			response.setStatus(HttpServletResponse.SC_OK);
			response.setMessage(SUCCESSFUL);
			response.setFromDate(startDate);
			response.setToDate(endDate);

		} catch (Exception e) {

			response.setError(EnumTypeForErrorCodes.SCUS812.name(), EnumTypeForErrorCodes.SCUS812.errorMsg());
			response.setMessage("Failed to get performance analysis sales person wise achivements");
			log.error(utils.toJson(response.getError()), e);

		}

		return response;
	}

	public TargetVsActualResponse<PCSalesPersonWiseMarginsResponse> paSalesPersonWiseMarginsByMonth(String startDate,
			String endDate, Long salesPersonId) {
		log.info("pa Sales Person Wise Margins By Month");
		TargetVsActualResponse<PCSalesPersonWiseMarginsResponse> response = new TargetVsActualResponse<>();

		PCSalesPersonWiseMarginsResponse pcSalesPersonWiseMarginsResponse = new PCSalesPersonWiseMarginsResponse();

		try {

			TagSalePrice diamondTagPriceVSSalePrice = new TagSalePrice();

			TagSalePrice goldTagPriceVSSalePrice = new TagSalePrice();

			LocalDate localStartDate = LocalDate.parse(startDate);
			LocalDate localEndDate = LocalDate.parse(endDate);

			String date1 = localStartDate.getMonth() + "-" + localStartDate.getYear();
			String date2 = localEndDate.getMonth() + "-" + localEndDate.getYear();

			DateFormat formater = new SimpleDateFormat(DATE_FORMATE);

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

			List<String> timeline = new ArrayList<>();

			List<Double> goldTagPriceList = new ArrayList<>();
			List<Double> goldSalePriceList = new ArrayList<>();
			List<Double> diamondTagPriceList = new ArrayList<>();
			List<Double> diamondSalePriceList = new ArrayList<>();

			for (int i = 0; i < datesList.size(); i++) {

				Collection<Sales> empActualList = null;

				long noOfDaysBetween = 0l;

				if (i == 0) {

					if (date1.equals(date2)) {
						empActualList = salesRepo.findByStartDateAndEndDateAndEmpId(startDate, endDate, salesPersonId);
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
						empActualList = salesRepo.findByStartDateAndEndDateAndEmpId(startDate, lastDay1, salesPersonId);
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
					empActualList = salesRepo.findByStartDateAndEndDateAndEmpId(firstDay1, lastDay1, salesPersonId);
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
					empActualList = salesRepo.findByStartDateAndEndDateAndEmpId(firstDay1, endDate, salesPersonId);
					noOfDaysBetween = ChronoUnit.DAYS.between(firstday, localEndDate) + 1;
				}

				timeline.add(datesList.get(i));
				Double goldTagPrice = 0.0;
				Double goldSalePrice = 0.0;
				Double diamondTagPrice = 0.0;
				Double diamondSalePrice = 0.0;

				if (!empActualList.isEmpty()) {

					for (Sales sale : empActualList) {

						if (sale.getItemType().equalsIgnoreCase(GOLD)) {

							goldTagPrice = goldTagPrice + sale.getTagPrice();
							goldSalePrice = goldSalePrice + sale.getTotalSoldAmount();

						} else if (sale.getItemType().equalsIgnoreCase(DIAMOND)) {

							diamondTagPrice = diamondTagPrice + sale.getTagPrice();
							diamondSalePrice = diamondSalePrice + sale.getTotalSoldAmount();
						}

					}

					goldTagPriceList.add(goldTagPrice / 100000);
					goldSalePriceList.add(goldSalePrice / 100000);
					diamondTagPriceList.add(diamondTagPrice / 100000);
					diamondSalePriceList.add(diamondSalePrice / 100000);
				} else {

					goldTagPriceList.add(0.0);
					goldSalePriceList.add(0.0);
					diamondTagPriceList.add(0.0);
					diamondSalePriceList.add(0.0);

				}

			}

			diamondTagPriceVSSalePrice.setSalePrice(diamondSalePriceList);
			diamondTagPriceVSSalePrice.setTagPrice(diamondTagPriceList);
			goldTagPriceVSSalePrice.setSalePrice(goldSalePriceList);
			goldTagPriceVSSalePrice.setTagPrice(goldTagPriceList);

			pcSalesPersonWiseMarginsResponse.setTimeLine(timeline);
			pcSalesPersonWiseMarginsResponse.setDiamondTagPriceVSSalePrice(diamondTagPriceVSSalePrice);
			pcSalesPersonWiseMarginsResponse.setGoldTagPriceVSSalePrice(goldTagPriceVSSalePrice);

			response.setStatus(HttpServletResponse.SC_OK);
			response.setMessage(SUCCESSFUL);
			response.setFromDate(startDate);
			response.setToDate(endDate);
			response.setData(pcSalesPersonWiseMarginsResponse);
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS813.name(), EnumTypeForErrorCodes.SCUS813.errorMsg());
			response.setMessage("Failed to get performance analysis sales person wise margins by month");
			log.error(utils.toJson(response.getError()), e);
		}
		return response;
	}

	public TargetVsActualResponse<PCSalesPersonWiseMarginsResponse> paSalesPersonWiseMarginsByDay(String startDate,
			String endDate, Long salesPersonId) {

		log.info("pa Sales Person Wise Margins By Day");
		TargetVsActualResponse<PCSalesPersonWiseMarginsResponse> response = new TargetVsActualResponse<>();

		PCSalesPersonWiseMarginsResponse pcSalesPersonWiseMarginsResponse = new PCSalesPersonWiseMarginsResponse();

		try {

			TagSalePrice diamondTagPriceVSSalePrice = new TagSalePrice();

			TagSalePrice goldTagPriceVSSalePrice = new TagSalePrice();

			LocalDate localStartDate = LocalDate.parse(startDate);
			LocalDate localEndDate = LocalDate.parse(endDate);

			String date1 = localStartDate.getMonth() + "-" + localStartDate.getYear();
			String date2 = localEndDate.getMonth() + "-" + localEndDate.getYear();

			List<String> datesList = getDays(date1, date2);

			List<String> timeline = new ArrayList<>();

			List<Double> goldTagPriceList = new ArrayList<>();
			List<Double> goldSalePriceList = new ArrayList<>();
			List<Double> diamondTagPriceList = new ArrayList<>();
			List<Double> diamondSalePriceList = new ArrayList<>();
			Collection<Sales> empActualList = null;

			long noOfDaysBetween = 0l;
			String startDateTimeline = null;
			String endDateTimeline = null;

			List<Sample> sampList = new ArrayList<>();

			if (datesList.size() == 1) {
				Sample samp = new Sample();
				empActualList = salesRepo.findByStartDateAndEndDateAndEmpId(startDate, endDate, salesPersonId);
				noOfDaysBetween = ChronoUnit.DAYS.between(localStartDate, localEndDate) + 1;
				startDateTimeline = startDate;
				endDateTimeline = endDate;

				samp.setNumberOfDays(noOfDaysBetween);
				samp.setEndDateTimeline(endDateTimeline);
				samp.setSale(empActualList);
				samp.setStartDateTimeline(startDateTimeline);
				sampList.add(samp);

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
						Sample samp = new Sample();
						String lastDay1 = datesList.get(i).substring(4, 8) + "-" + m + "-" + lastDay;
						LocalDate day = LocalDate.parse(lastDay1);
						empActualList = salesRepo.findByStartDateAndEndDateAndEmpId(startDate, lastDay1, salesPersonId);
						noOfDaysBetween = ChronoUnit.DAYS.between(localStartDate, day) + 1;
						startDateTimeline = startDate;
						endDateTimeline = lastDay1;
						samp.setNumberOfDays(noOfDaysBetween);
						samp.setEndDateTimeline(endDateTimeline);
						samp.setSale(empActualList);
						samp.setStartDateTimeline(startDateTimeline);
						sampList.add(samp);

					} else {
						Sample samp = new Sample();
						String firstDay1 = datesList.get(i).substring(4, 8) + "-" + m + "-" + "01";
						LocalDate day = LocalDate.parse(firstDay1);
						empActualList = salesRepo.findByStartDateAndEndDateAndEmpId(firstDay1, endDate, salesPersonId);

						noOfDaysBetween = ChronoUnit.DAYS.between(day, localEndDate) + 1;
						startDateTimeline = firstDay1;
						endDateTimeline = endDate;
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

					LocalDate localStartDateTimeline = LocalDate.parse(startDateTimeline);

					final String DATE_FORMATTER = "dd-MM-yyyy";

					DateTimeFormatter formatter = DateTimeFormatter.ofPattern(DATE_FORMATTER);
					String formatDateTime = localStartDateTimeline.format(formatter);

					timeline.add(formatDateTime);
					List<Sales> saleExists = salesRepo.findByTransactionDateAndEmpId(startDateTimeline, salesPersonId);
					LocalDate nextDay = localStartDateTimeline.plusDays(1);
					startDateTimeline = nextDay.toString();

					if (!saleExists.isEmpty()) {
						Double goldTagPrice = 0.0;
						Double goldSalePrice = 0.0;
						Double diamondTagPrice = 0.0;
						Double diamondSalePrice = 0.0;

						for (Sales sale : saleExists) {

							if (sale.getItemType().equals(GOLD)) {

								goldTagPrice = goldTagPrice + sale.getTagPrice();
								goldSalePrice = goldSalePrice + sale.getTotalSoldAmount();
							} else if (sale.getItemType().equals(DIAMOND)) {
								diamondTagPrice = diamondTagPrice + sale.getTagPrice();
								diamondSalePrice = diamondSalePrice + sale.getTotalSoldAmount();
							}
						}
						goldTagPriceList.add(goldTagPrice / 100000);
						goldSalePriceList.add(goldSalePrice / 100000);
						diamondTagPriceList.add(diamondTagPrice / 100000);
						diamondSalePriceList.add(diamondSalePrice / 100000);
					} else {
						goldTagPriceList.add(0.0);
						goldSalePriceList.add(0.0);
						diamondTagPriceList.add(0.0);
						diamondSalePriceList.add(0.0);

					}
				}

			}

			diamondTagPriceVSSalePrice.setSalePrice(diamondSalePriceList);
			diamondTagPriceVSSalePrice.setTagPrice(diamondTagPriceList);
			goldTagPriceVSSalePrice.setSalePrice(goldSalePriceList);
			goldTagPriceVSSalePrice.setTagPrice(goldTagPriceList);

			pcSalesPersonWiseMarginsResponse.setTimeLine(timeline);
			pcSalesPersonWiseMarginsResponse.setDiamondTagPriceVSSalePrice(diamondTagPriceVSSalePrice);
			pcSalesPersonWiseMarginsResponse.setGoldTagPriceVSSalePrice(goldTagPriceVSSalePrice);

			response.setStatus(HttpServletResponse.SC_OK);
			response.setMessage(SUCCESSFUL);
			response.setFromDate(startDate);
			response.setToDate(endDate);
			response.setData(pcSalesPersonWiseMarginsResponse);
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS814.name(), EnumTypeForErrorCodes.SCUS814.errorMsg());
			response.setMessage("Failed to get performance analysis sales person wise margins by day");
			log.error(utils.toJson(response.getError()), e);
		}
		return response;
	}

	public TargetVsActualResponse<PCSalesPersonWiseMarginsResponse> paSalesPersonWiseMarginsByWeek(String startDate,
			String endDate, Long salesPersonId) {

		log.info("pa Sales Person Wise Margins By Week");
		TargetVsActualResponse<PCSalesPersonWiseMarginsResponse> response = new TargetVsActualResponse<>();

		PCSalesPersonWiseMarginsResponse pcSalesPersonWiseMarginsResponse = new PCSalesPersonWiseMarginsResponse();
		try {
		


			TagSalePrice diamondTagPriceVSSalePrice = new TagSalePrice();

			TagSalePrice goldTagPriceVSSalePrice = new TagSalePrice();

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

			long noOfDaysBetween = 0l;

			List<String> timeline = new ArrayList<>();

			List<Double> goldTagPriceList = new ArrayList<>();
			List<Double> goldSalePriceList = new ArrayList<>();
			List<Double> diamondTagPriceList = new ArrayList<>();
			List<Double> diamondSalePriceList = new ArrayList<>();

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

				List<Sample> sampList = new ArrayList<>();

				if (datesList.size() == 1) {
					Sample sample11 = new Sample();
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
					empActualList = salesRepo.findByStartDateAndEndDateAndEmpId(samp, samp1, salesPersonId);
					noOfDaysBetween = ChronoUnit.DAYS.between(dateValue.getStartDate(), dateValue.getEndDate()) + 1;

					sample11.setNumberOfDays(noOfDaysBetween);
					sample11.setEndDateTimeline(dateValue.getEndDate().toString());
					sample11.setSale(empActualList);
					sample11.setStartDateTimeline(dateValue.getStartDate().toString());
					sampList.add(sample11);
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
						LocalDate day = LocalDate.parse(firstDay1);
						String lastDay1 = datesList.get(i).substring(4, 8) + "-" + m + "-" + lastDay;
						LocalDate day2 = LocalDate.parse(lastDay1);

						if (i == 0) {
							Sample sample11 = new Sample();
							empActualList = salesRepo.findByStartDateAndEndDateAndEmpId(
									dateValue.getStartDate().toString(), lastDay1, salesPersonId);
							noOfDaysBetween = ChronoUnit.DAYS.between(dateValue.getStartDate(), day2) + 1;

							sample11.setNumberOfDays(noOfDaysBetween);
							sample11.setEndDateTimeline(lastDay1);
							sample11.setSale(empActualList);
							sample11.setStartDateTimeline(dateValue.getStartDate().toString());
							sampList.add(sample11);
						} else {
							Sample sample11 = new Sample();
							empActualList = salesRepo.findByStartDateAndEndDateAndEmpId(firstDay1,
									dateValue.getEndDate().toString(), salesPersonId);
							noOfDaysBetween = ChronoUnit.DAYS.between(day, dateValue.getEndDate()) + 1;

							sample11.setNumberOfDays(noOfDaysBetween);
							sample11.setEndDateTimeline(dateValue.getEndDate().toString());
							sample11.setSale(empActualList);
							sample11.setStartDateTimeline(firstDay1);
							sampList.add(sample11);
						}

					}
				}

				timeline.add(dateValue.getWeekNumber());
				Double goldTagPrice = 0.0;
				Double goldSalePrice = 0.0;
				Double diamondTagPrice = 0.0;
				Double diamondSalePrice = 0.0;
				for (Sample sample : sampList) {
					String startDateTimeline = sample.getStartDateTimeline();
					LocalDate localStartDateTimeline = LocalDate.parse(startDateTimeline);

					LocalDate nextDay = localStartDateTimeline.plusDays(1);
					startDateTimeline = nextDay.toString();

					if (!sample.getSale().isEmpty()) {
						for (Sales sale : sample.getSale()) {

							if (sale.getItemType().equalsIgnoreCase(GOLD)) {

								goldTagPrice = goldTagPrice + sale.getTagPrice();
								goldSalePrice = goldSalePrice + sale.getTotalSoldAmount();

							} else if (sale.getItemType().equalsIgnoreCase(DIAMOND)) {
								diamondTagPrice = diamondTagPrice + sale.getTagPrice();
								diamondSalePrice = diamondSalePrice + sale.getTotalSoldAmount();

							}

						}

					} else {

						goldTagPrice += 0.0;
						goldSalePrice += 0.0;
						diamondTagPrice += 0.0;
						diamondSalePrice += 0.0;

					}

				}

				goldTagPriceList.add(goldTagPrice / 100000);
				goldSalePriceList.add(goldSalePrice / 100000);
				diamondTagPriceList.add(diamondTagPrice / 100000);
				diamondSalePriceList.add(diamondSalePrice / 100000);

			}

			diamondTagPriceVSSalePrice.setSalePrice(diamondSalePriceList);
			diamondTagPriceVSSalePrice.setTagPrice(diamondTagPriceList);
			goldTagPriceVSSalePrice.setSalePrice(goldSalePriceList);
			goldTagPriceVSSalePrice.setTagPrice(goldTagPriceList);

			pcSalesPersonWiseMarginsResponse.setTimeLine(timeline);
			pcSalesPersonWiseMarginsResponse.setDiamondTagPriceVSSalePrice(diamondTagPriceVSSalePrice);
			pcSalesPersonWiseMarginsResponse.setGoldTagPriceVSSalePrice(goldTagPriceVSSalePrice);

			response.setStatus(HttpServletResponse.SC_OK);
			response.setMessage(SUCCESSFUL);
			response.setFromDate(startDate);
			response.setToDate(endDate);
			response.setData(pcSalesPersonWiseMarginsResponse);
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS815.name(), EnumTypeForErrorCodes.SCUS815.errorMsg());
			response.setMessage("Failed to get performance analysis sales person wise margins by week");
			log.error(utils.toJson(response.getError()), e);
		}
		return response;
	}

	@Override
	public TargetVsActualResponse<PCSalesPersonWiseMarginsResponse> paSalesPersonWiseMargins(String startDate,
			String endDate, Long salesPersonId) {

		log.info("pa Sales Person Wise Margins");
		TargetVsActualResponse<PCSalesPersonWiseMarginsResponse> response = new TargetVsActualResponse<>();

		try {
			LocalDate localStartDate = LocalDate.parse(startDate);
			LocalDate localEndDate = LocalDate.parse(endDate);

			long betweenDays = ChronoUnit.DAYS.between(localStartDate, localEndDate);

			if (betweenDays < 15) {
				// daywise
				response = paSalesPersonWiseMarginsByDay(startDate, endDate, salesPersonId);
			} else if (betweenDays >= 15 && betweenDays <= 60) {
				// week wise
				response = paSalesPersonWiseMarginsByWeek(startDate, endDate, salesPersonId);
			} else {
				// month wise
				response = paSalesPersonWiseMarginsByMonth(startDate, endDate, salesPersonId);
			}
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS816.name(), EnumTypeForErrorCodes.SCUS816.errorMsg());
			response.setMessage("Failed to get performance analysis sales person wise margins");
			log.error(utils.toJson(response.getError()), e);
		}
		return response;
	}

	@Override
	public TargetVsActualResponse<PerformanceAnalysisSalesPersonWiseDetails> performanceAnalysisSalesPersonWiseKPIBlocks(
			Long salesPersonId, String startDate, String endDate) {

		log.info("performance Analysis Sales Person Wise KPI Blocks");

		TargetVsActualResponse<PerformanceAnalysisSalesPersonWiseDetails> response = new TargetVsActualResponse<>();

		PerformanceAnalysisSalesPersonWiseDetails performanceAnalysisSalesPersonWiseDetails = new PerformanceAnalysisSalesPersonWiseDetails();

		List<String> datesList = new ArrayList<>();

		Achivements achivements = new Achivements();

		Margins margins = new Margins();

		Conversion conversion = new Conversion();

		TicketSize ticketSize = new TicketSize();

		try {

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

			Double totalTargetValue = 0.0;

			Double totalTagPrice = 0.0;

			Double totalSalePrice = 0.0;

			Double totalWalkins = 0.0;

			Double prefferedWalkins = 0.0;

			int salesCount = 0;
			int totalSalesReturnCount = 0;
			Double totalTargetTicketValue = 0.0;

			Double totalActualTicketValue = 0.0;

			Double totalReturnAmount = 0.0;

			Collection<Sales> empActualList = null;

			Collection<EmpDailyActuals> empDailyActualList = null;

			Collection<EmpDailyActuals> empPreferredDailyActualList = null;

			Collection<EmployeeItemMonthlyTarget> monthlyTarget = null;

			for (int i = 0; i < datesList.size(); i++) {

				long noOfDaysBetween = 0l;

				if (i == 0) {

					if (date1.equals(date2)) {
						empActualList = salesRepo.findSalesByStartDateAndEndDateAndEmpId(startDate, endDate,
								salesPersonId);
						empDailyActualList = empDailyActualsRepo.findByStartDateAndEndDate(salesPersonId, startDate,
								endDate);
						empPreferredDailyActualList = empDailyActualsRepo.findTotalPrefferedWalkinsByEmp(salesPersonId,
								startDate, endDate);
						monthlyTarget = empItemMonthlyTargetRepo.findByTgtMonthAndEmp(datesList.get(i), salesPersonId);
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
						empActualList = salesRepo.findSalesByStartDateAndEndDateAndEmpId(startDate, lastDay1,
								salesPersonId);
						empDailyActualList = empDailyActualsRepo.findByStartDateAndEndDate(salesPersonId, startDate,
								lastDay1);
						empPreferredDailyActualList = empDailyActualsRepo.findTotalPrefferedWalkinsByEmp(salesPersonId,
								startDate, lastDay1);
						monthlyTarget = empItemMonthlyTargetRepo.findByTgtMonthAndEmp(datesList.get(i), salesPersonId);
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
					empActualList = salesRepo.findSalesByStartDateAndEndDateAndEmpId(firstDay1, lastDay1,
							salesPersonId);
					empDailyActualList = empDailyActualsRepo.findByStartDateAndEndDate(salesPersonId, firstDay1,
							lastDay1);
					empPreferredDailyActualList = empDailyActualsRepo.findTotalPrefferedWalkinsByEmp(salesPersonId,
							firstDay1, lastDay1);
					monthlyTarget = empItemMonthlyTargetRepo.findByTgtMonthAndEmp(datesList.get(i), salesPersonId);
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
					empActualList = salesRepo.findSalesByStartDateAndEndDateAndEmpId(firstDay1, endDate, salesPersonId);
					empDailyActualList = empDailyActualsRepo.findByStartDateAndEndDate(salesPersonId, firstDay1,
							endDate);
					empPreferredDailyActualList = empDailyActualsRepo.findTotalPrefferedWalkinsByEmp(salesPersonId,
							firstDay1, endDate);
					monthlyTarget = empItemMonthlyTargetRepo.findByTgtMonthAndEmp(datesList.get(i), salesPersonId);
					noOfDaysBetween = ChronoUnit.DAYS.between(firstday, localEndDate) + 1;
				}
				if (!monthlyTarget.isEmpty()) {

					for (EmployeeItemMonthlyTarget tgt : monthlyTarget) {
						Date date10 = new SimpleDateFormat(DATE_FORMATE).parse(tgt.getTgtMonth());
						Calendar cal = Calendar.getInstance();
						cal.setTime(date10);
						int lastDate = cal.getActualMaximum(Calendar.DATE);
						totalTargetTicketValue = totalTargetTicketValue
								+ (tgt.getTicketSize() / lastDate) * noOfDaysBetween;
						totalTargetValue = totalTargetValue + (tgt.getValue() / lastDate) * noOfDaysBetween;
					}
				}
				if (!empActualList.isEmpty()) {

					for (Sales sale : empActualList) {
						salesCount = salesCount + 1;
						totalTagPrice = totalTagPrice + sale.getTagPrice();
						totalSalePrice = totalSalePrice + sale.getTotalSoldAmount();
						totalActualTicketValue = totalActualTicketValue + sale.getTotalSoldAmount();
						SalesReturns salesReturns = salesReturnsRepo.findBySales(sale);
						if (salesReturns != null) {
							if (sale.getTotalSoldAmount().equals(salesReturns.getAmountPayable())) {
								totalSalesReturnCount = totalSalesReturnCount + 1;
							}
							totalReturnAmount = totalReturnAmount + salesReturns.getAmountPayable();
						}
					}
				}
				totalWalkins = totalWalkins + empDailyActualList.size();
				prefferedWalkins = prefferedWalkins + empPreferredDailyActualList.size();
			}
			achivements.setActual((totalSalePrice - totalReturnAmount) / 100000);
			achivements.setTarget(totalTargetValue);
			margins.setSalePrice(totalSalePrice / 100000);
			margins.setTagPrice(totalTagPrice / 100000);
			Double achivementpercentage = (achivements.getActual() / achivements.getTarget()) * 100;
			Double marginspercentage = ((margins.getSalePrice() - margins.getTagPrice()) / margins.getTagPrice()) * 100;

			conversion.setPreferredWalkins(prefferedWalkins);
			conversion.setTotalWalkins(totalWalkins);
			ticketSize.setTarget(totalTargetTicketValue);
			int totalSalescount = salesCount - totalSalesReturnCount;
			ticketSize.setActual((totalActualTicketValue - totalReturnAmount) / (100000 * totalSalescount));
			Double ticketSizePercentage = (ticketSize.getActual() / ticketSize.getTarget()) * 100;
			Double conversionPercentage;
			if (prefferedWalkins.equals(0.0) || totalWalkins.equals(0.0))
				conversionPercentage = 0.0;
			else
				conversionPercentage = (prefferedWalkins / totalWalkins) * 100;

			achivements.setPercentageValue(
					(achivementpercentage.isNaN() || achivementpercentage.isInfinite()) ? 0.0 : achivementpercentage);

			margins.setPercentageValue(
					(marginspercentage.isNaN() || marginspercentage.isInfinite()) ? 0.0 : marginspercentage);

			conversion.setPercentageValue(
					(conversionPercentage.isNaN() || conversionPercentage.isInfinite()) ? 0.0 : conversionPercentage);

			ticketSize.setPercentageValue(
					(ticketSizePercentage.isNaN() || ticketSizePercentage.isInfinite()) ? 0.0 : ticketSizePercentage);

			performanceAnalysisSalesPersonWiseDetails.setAchivements(achivements);
			performanceAnalysisSalesPersonWiseDetails.setMargins(margins);
			performanceAnalysisSalesPersonWiseDetails.setConversion(conversion);
			performanceAnalysisSalesPersonWiseDetails.setTicketSize(ticketSize);
			response.setData(performanceAnalysisSalesPersonWiseDetails);
			response.setStatus(HttpServletResponse.SC_OK);
			response.setMessage(SUCCESSFUL);
			response.setFromDate(startDate);
			response.setToDate(endDate);
		} catch (Exception e) {
			response.setStatus(HttpServletResponse.SC_CONFLICT);
			response.setError(EnumTypeForErrorCodes.SCUS817.name(), EnumTypeForErrorCodes.SCUS817.errorMsg());
			response.setMessage("Failed to get performance analysis sales person wise KPI Blocks");
			log.error(utils.toJson(response.getError()), e);
		}
		return response;
	}
}

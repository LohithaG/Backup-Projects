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

import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.mss.pmj.pmjmis.common.EnumTypeForErrorCodes;
import com.mss.pmj.pmjmis.common.Utils;
import com.mss.pmj.pmjmis.domain.EmployeeItemMonthlyTarget;
import com.mss.pmj.pmjmis.domain.Sales;
import com.mss.pmj.pmjmis.domain.SalesReturns;
import com.mss.pmj.pmjmis.domain.TeamItemMonthlyTarget;
import com.mss.pmj.pmjmis.model.ServiceResponse;
import com.mss.pmj.pmjmis.repos.EmployeeItemMonthlyTargetRepository;
import com.mss.pmj.pmjmis.repos.SalesRepository;
import com.mss.pmj.pmjmis.repos.SalesReturnsRepository;
import com.mss.pmj.pmjmis.repos.TeamItemMonthlyTargetRepository;
import com.mss.pmj.pmjmis.response.Dates;
import com.mss.pmj.pmjmis.response.ItemQuantityValue;
import com.mss.pmj.pmjmis.response.Quantity;
import com.mss.pmj.pmjmis.response.QuantityList;
import com.mss.pmj.pmjmis.response.QuantityValue;
import com.mss.pmj.pmjmis.response.Sample;
import com.mss.pmj.pmjmis.response.TargetVsActualDetails;
import com.mss.pmj.pmjmis.response.TargetVsActualResponse;
import com.mss.pmj.pmjmis.response.TgtVsActual;
import com.mss.pmj.pmjmis.response.Value;
import com.mss.pmj.pmjmis.response.ValueList;
import com.mss.pmj.pmjmis.svcs.SalesTgtVsActualService;

@RestController
public class SalesTgtVsActualServiceImpl implements SalesTgtVsActualService {
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
	private TeamItemMonthlyTargetRepository teamItemMonthlyTgtRepo;

	String dateFormat = "MMM-yyyy";
	String gold = "Gold";
	String diamond = "Diamond";

	public TargetVsActualResponse<TgtVsActual> getTargetVsActualByMonth(String startDate, String endDate) {
		log.info("get target vs actual sales between startDate and endDate");
		TargetVsActualResponse<TgtVsActual> response = new TargetVsActualResponse<>();

		TgtVsActual targetVsActual = new TgtVsActual();

		Double salesReturnGoldQuantityDetails = 0.0;
		Double salesReturnGoldValueDetails = 0.0;
		Double salesReturnDiamondQuantityDetails = 0.0;
		Double salesReturnDiamondValueDetails = 0.0;

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

			JSONObject salesTotalObj = calculateSalesInBetweendates(startDate, endDate);

			for (int i = 0; i < datesList.size(); i++) {

				Collection<Sales> empActualList = null;

				Collection<EmployeeItemMonthlyTarget> monthlyTarget = null;
				Collection<TeamItemMonthlyTarget> monthlyTargetForD2h = null;

				long noOfDaysBetween;

				if (i == 0) {

					if (date1.equals(date2)) {

						empActualList = salesRepo.findByStartDateAndEndDate(startDate, endDate);
						monthlyTarget = empItemMonthlyTargetRepo.findByTgtMonth(datesList.get(i));
						noOfDaysBetween = ChronoUnit.DAYS.between(localStartDate, localEndDate) + 1;
						monthlyTargetForD2h = teamItemMonthlyTgtRepo
								.findByMonthAndYear(datesList.get(i).substring(0, 3), datesList.get(i).substring(4, 8));

					} else {

						Date date10 = new SimpleDateFormat(dateFormat).parse(datesList.get(i));
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
						empActualList = salesRepo.findByStartDateAndEndDate(startDate, lastDay1);
						monthlyTarget = empItemMonthlyTargetRepo.findByTgtMonth(datesList.get(i));
						noOfDaysBetween = ChronoUnit.DAYS.between(localStartDate, day) + 1;
						monthlyTargetForD2h = teamItemMonthlyTgtRepo
								.findByMonthAndYear(datesList.get(i).substring(0, 3), datesList.get(i).substring(4, 8));
					}

				} else if (i < datesList.size() - 1) {
					Date date10 = new SimpleDateFormat(dateFormat).parse(datesList.get(i));
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
					empActualList = salesRepo.findByStartDateAndEndDate(firstDay1, lastDay1);
					monthlyTarget = empItemMonthlyTargetRepo.findByTgtMonth(datesList.get(i));
					noOfDaysBetween = ChronoUnit.DAYS.between(firstday, day) + 1;
					monthlyTargetForD2h = teamItemMonthlyTgtRepo.findByMonthAndYear(datesList.get(i).substring(0, 3),
							datesList.get(i).substring(4, 8));
				} else {
					Date date10 = new SimpleDateFormat(dateFormat).parse(datesList.get(i));
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
					empActualList = salesRepo.findByStartDateAndEndDate(firstDay1, endDate);
					monthlyTarget = empItemMonthlyTargetRepo.findByTgtMonth(datesList.get(i));
					noOfDaysBetween = ChronoUnit.DAYS.between(firstday, localEndDate) + 1;
					monthlyTargetForD2h = teamItemMonthlyTgtRepo.findByMonthAndYear(datesList.get(i).substring(0, 3),
							datesList.get(i).substring(4, 8));
				}

				timeline.add(datesList.get(i));
				if (!monthlyTarget.isEmpty() || !monthlyTargetForD2h.isEmpty()) {
					Double monthlyTargetGoldQuantity = 0.0;
					Double monthlyTargetGoldValue = 0.0;
					Double monthlyTargetDiamondQuantity = 0.0;
					Double monthlyTargetDiamondValue = 0.0;
					for (EmployeeItemMonthlyTarget tgt : monthlyTarget) {
						Date date10 = new SimpleDateFormat(dateFormat).parse(tgt.getTgtMonth());
						Calendar cal = Calendar.getInstance();
						cal.setTime(date10);
						int lastDate = cal.getActualMaximum(Calendar.DATE);
						if (tgt.getItemType().equals(gold)) {

							monthlyTargetGoldQuantity = monthlyTargetGoldQuantity
									+ (tgt.getQuantity() / lastDate) * noOfDaysBetween;
							monthlyTargetGoldValue = monthlyTargetGoldValue
									+ (tgt.getValue() / lastDate) * noOfDaysBetween;
							tgtGoldQuantity = tgtGoldQuantity + (tgt.getQuantity() / lastDate) * noOfDaysBetween;
							tgtGoldValue = tgtGoldValue + (tgt.getValue() / lastDate) * noOfDaysBetween;

						} else if (tgt.getItemType().equals(diamond)) {

							monthlyTargetDiamondQuantity = monthlyTargetDiamondQuantity
									+ (tgt.getQuantity() / lastDate) * noOfDaysBetween;

							monthlyTargetDiamondValue = monthlyTargetDiamondValue
									+ +(tgt.getValue() / lastDate) * noOfDaysBetween;

							tgtDiaquantity = tgtDiaquantity + (tgt.getQuantity() / lastDate) * noOfDaysBetween;
							tgtDiaValue = tgtDiaValue + (tgt.getValue() / lastDate) * noOfDaysBetween;

						}

					}

					for (TeamItemMonthlyTarget tgtD2h : monthlyTargetForD2h) {
						Date date10 = new SimpleDateFormat(dateFormat)
								.parse(tgtD2h.getMonth() + "-" + tgtD2h.getYear());
						Calendar cal = Calendar.getInstance();
						cal.setTime(date10);
						int lastDate = cal.getActualMaximum(Calendar.DATE);
						if (tgtD2h.getItemType().equals(gold)) {

							monthlyTargetGoldQuantity = monthlyTargetGoldQuantity
									+ (tgtD2h.getQuantity() / lastDate) * noOfDaysBetween;
							monthlyTargetGoldValue = monthlyTargetGoldValue
									+ (tgtD2h.getValue() / lastDate) * noOfDaysBetween;
							tgtGoldQuantity = tgtGoldQuantity + (tgtD2h.getQuantity() / lastDate) * noOfDaysBetween;
							tgtGoldValue = tgtGoldValue + (tgtD2h.getValue() / lastDate) * noOfDaysBetween;

						} else if (tgtD2h.getItemType().equals(diamond)) {

							monthlyTargetDiamondQuantity = monthlyTargetDiamondQuantity
									+ (tgtD2h.getQuantity() / lastDate) * noOfDaysBetween;

							monthlyTargetDiamondValue = monthlyTargetDiamondValue
									+ +(tgtD2h.getValue() / lastDate) * noOfDaysBetween;

							tgtDiaquantity = tgtDiaquantity + (tgtD2h.getQuantity() / lastDate) * noOfDaysBetween;
							tgtDiaValue = tgtDiaValue + (tgtD2h.getValue() / lastDate) * noOfDaysBetween;

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

						if (sale.getItemType().equals(gold)) {

							monthlyActualGoldQuantity = monthlyActualGoldQuantity + sale.getGrossWeight();
							monthlyActualGoldValue = monthlyActualGoldValue + sale.getTotalSoldAmount();

						} else if (sale.getItemType().equals(diamond)) {
							monthlyActualDiamondQuantity = monthlyActualDiamondQuantity + sale.getDiamondWeight();

							monthlyActualDiamondValue = monthlyActualDiamondValue + sale.getTotalSoldAmount();
						}
						SalesReturns salesReturns = salesReturnsRepo.findBySales(sale);

						if (salesReturns != null) {

							if (sale.getItemType().equals(gold)) {

								salesReturnGoldQuantity = salesReturnGoldQuantity + salesReturns.getGrossWeight();
								salesReturnGoldQuantityDetails = salesReturnGoldQuantityDetails
										+ salesReturns.getGrossWeight();
								salesReturnGoldValue = salesReturnGoldValue + salesReturns.getAmountPayable();
								salesReturnGoldValueDetails = salesReturnGoldValueDetails
										+ salesReturns.getAmountPayable();

							} else if (sale.getItemType().equals(diamond)) {

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
					actualDiamondQuantity.add(monthlyActualDiamondQuantity-salesReturnDiamondQuantity);
					actualDiamondValue.add((monthlyActualDiamondValue-salesReturnDiamondValue) / 100000);
					actualGoldQuantity.add((monthlyActualGoldQuantity-salesReturnGoldQuantity) / 1000);
					actualGoldValue.add((monthlyActualGoldValue-salesReturnGoldValue) / 100000);
				} else {
					actualDiamondQuantity.add(0.0);
					actualDiamondValue.add(0.0);
					actualGoldQuantity.add(0.0);
					actualGoldValue.add(0.0);
				}
			}

				finalActualQuantity.setDiamond(
						(salesTotalObj.getDouble("actualsDiaQtyTotal") - salesReturnDiamondQuantityDetails));
				finalActualQuantity.setGold(
						(salesTotalObj.getDouble("actualsGoldQtyTotal") - salesReturnGoldQuantityDetails) / 1000);
				finalActualValue.setDiamond(
						(salesTotalObj.getDouble("actualsDiaValueTotal") - salesReturnDiamondValueDetails) / 100000);
				finalActualValue.setGold(
						(salesTotalObj.getDouble("actualsGoldValueTotal") - salesReturnGoldValueDetails) / 100000);

				finalActualQuantityValue.setQty(finalActualQuantity);

				finalActualQuantityValue.setValue(finalActualValue);

				targetVsActual.setActuals(finalActualQuantityValue);

				//

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
				response.setMessage("successful");
				response.setFromDate(startDate);
				response.setToDate(endDate);
				response.setData(targetVsActual);
			
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS206.name(), EnumTypeForErrorCodes.SCUS206.errorMsg());
			response.setMessage("Failed to get sales target vs actuals");
			log.error(utils.toJson(response.getError()), e);
		}
		return response;
	}

	public TargetVsActualResponse<TgtVsActual> getTargetVsActualByDay(String startDate, String endDate) {

		log.info("get target vs actual sales groupby between startDate and endDate");
		TargetVsActualResponse<TgtVsActual> response = new TargetVsActualResponse<>();

		TgtVsActual targetVsActual = new TgtVsActual();

		Double salesReturnGoldQuantityDetails = 0.0;
		Double salesReturnGoldValueDetails = 0.0;
		Double salesReturnDiamondQuantityDetails = 0.0;
		Double salesReturnDiamondValueDetails = 0.0;

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
			Collection<TeamItemMonthlyTarget> monthlyTargetForD2h = null;

			long noOfDaysBetween = 0l;
			String startDateTimeline = null;
			String endDateTimeline = null;

			List<Sample> sampList = new ArrayList<>();

			if (datesList.size() == 1) {
				Sample samp = new Sample();
				empActualList = salesRepo.findByStartDateAndEndDate(startDate, endDate);
				monthlyTarget = empItemMonthlyTargetRepo.findByTgtMonth(datesList.get(0));
				noOfDaysBetween = ChronoUnit.DAYS.between(localStartDate, localEndDate) + 1;
				startDateTimeline = startDate;
				endDateTimeline = endDate;
				monthlyTargetForD2h = teamItemMonthlyTgtRepo.findByMonthAndYear(datesList.get(0).substring(0, 3),
						datesList.get(0).substring(4, 8));
				samp.setTeamD2hTgt(monthlyTargetForD2h);
				samp.setEmployees(monthlyTarget);
				samp.setNumberOfDays(noOfDaysBetween);
				samp.setEndDateTimeline(endDateTimeline);
				samp.setSale(empActualList);
				samp.setStartDateTimeline(startDateTimeline);
				sampList.add(samp);

			} else {

				for (int i = 0; i < datesList.size(); i++) {

					Date date10 = new SimpleDateFormat(dateFormat).parse(datesList.get(i));
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
						empActualList = salesRepo.findByStartDateAndEndDate(startDate, lastDay1);
						monthlyTarget = empItemMonthlyTargetRepo.findByTgtMonth(datesList.get(i));
						noOfDaysBetween = ChronoUnit.DAYS.between(localStartDate, day) + 1;
						monthlyTargetForD2h = teamItemMonthlyTgtRepo
								.findByMonthAndYear(datesList.get(i).substring(0, 3), datesList.get(i).substring(4, 8));
						samp.setTeamD2hTgt(monthlyTargetForD2h);
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
						empActualList = salesRepo.findByStartDateAndEndDate(firstDay1, endDate);

						monthlyTarget = empItemMonthlyTargetRepo.findByTgtMonth(datesList.get(i));
						noOfDaysBetween = ChronoUnit.DAYS.between(day, localEndDate) + 1;
						monthlyTargetForD2h = teamItemMonthlyTgtRepo
								.findByMonthAndYear(datesList.get(i).substring(0, 3), datesList.get(i).substring(4, 8));
						samp.setTeamD2hTgt(monthlyTargetForD2h);
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
			JSONObject salesTotalObj = calculateSalesInBetweendates(startDate, endDate);
			for (Sample sample : sampList) {

				startDateTimeline = sample.getStartDateTimeline();

				for (int i = 0; i < sample.getNumberOfDays(); i++) {
					Double monthlyTargetGoldQuantity = 0.0;
					Double monthlyTargetGoldValue = 0.0;
					Double monthlyTargetDiamondQuantity = 0.0;
					Double monthlyTargetDiamondValue = 0.0;
					if (!sample.getEmployees().isEmpty() || !sample.getTeamD2hTgt().isEmpty()) {
						for (EmployeeItemMonthlyTarget tgt : sample.getEmployees()) {
							Date date10 = new SimpleDateFormat(dateFormat).parse(tgt.getTgtMonth());
							Calendar cal = Calendar.getInstance();
							cal.setTime(date10);
							int lastDate = cal.getActualMaximum(Calendar.DATE);
							if (tgt.getItemType().equals(gold)) {

								monthlyTargetGoldQuantity = monthlyTargetGoldQuantity + (tgt.getQuantity() / lastDate);
								monthlyTargetGoldValue = monthlyTargetGoldValue + (tgt.getValue() / lastDate);
								tgtGoldQuantity = tgtGoldQuantity + (tgt.getQuantity() / lastDate);
								tgtGoldValue = tgtGoldValue + (tgt.getValue() / lastDate);

							} else if (tgt.getItemType().equals(diamond)) {

								monthlyTargetDiamondQuantity = monthlyTargetDiamondQuantity
										+ (tgt.getQuantity() / lastDate);

								monthlyTargetDiamondValue = monthlyTargetDiamondValue + +(tgt.getValue() / lastDate);

								tgtDiaquantity = tgtDiaquantity + (tgt.getQuantity() / lastDate);
								tgtDiaValue = tgtDiaValue + (tgt.getValue() / lastDate);

							}

						}

						for (TeamItemMonthlyTarget tgtD2h : sample.getTeamD2hTgt()) {
							Date date10 = new SimpleDateFormat(dateFormat)
									.parse(tgtD2h.getMonth() + "-" + tgtD2h.getYear());
							Calendar cal = Calendar.getInstance();
							cal.setTime(date10);
							int lastDate = cal.getActualMaximum(Calendar.DATE);
							if (tgtD2h.getItemType().equals(gold)) {

								monthlyTargetGoldQuantity = monthlyTargetGoldQuantity
										+ (tgtD2h.getQuantity() / lastDate);
								monthlyTargetGoldValue = monthlyTargetGoldValue + (tgtD2h.getValue() / lastDate);
								tgtGoldQuantity = tgtGoldQuantity + (tgtD2h.getQuantity() / lastDate);
								tgtGoldValue = tgtGoldValue + (tgtD2h.getValue() / lastDate);

							} else if (tgtD2h.getItemType().equals(diamond)) {

								monthlyTargetDiamondQuantity = monthlyTargetDiamondQuantity
										+ (tgtD2h.getQuantity() / lastDate);

								monthlyTargetDiamondValue = monthlyTargetDiamondValue + (tgtD2h.getValue() / lastDate);

								tgtDiaquantity = tgtDiaquantity + (tgtD2h.getQuantity() / lastDate);
								tgtDiaValue = tgtDiaValue + (tgtD2h.getValue() / lastDate);

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
					List<Sales> saleExists = salesRepo.findByTransactionDate(startDateTimeline);
					LocalDate nextDay = localStartDateTimeline.plusDays(1);
					startDateTimeline = nextDay.toString();

					if (saleExists.size() != 0) {
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

								if (sale.getItemType().equals(gold)) {

									salesReturnGoldQuantity = salesReturnGoldQuantity + salesReturns.getGrossWeight();
									salesReturnGoldQuantityDetails = salesReturnGoldQuantityDetails
											+ salesReturns.getGrossWeight();
									salesReturnGoldValue = salesReturnGoldValue + salesReturns.getAmountPayable();
									salesReturnGoldValueDetails = salesReturnGoldValueDetails
											+ salesReturns.getAmountPayable();

								} else if (sale.getItemType().equals(diamond)) {

									salesReturnDiamondQuantity = salesReturnDiamondQuantity
											+ salesReturns.getDiamondWeight();
									salesReturnDiamondQuantityDetails = salesReturnDiamondQuantityDetails
											+ salesReturns.getDiamondWeight();
									salesReturnDiamondValue = salesReturnDiamondValue + salesReturns.getAmountPayable();
									salesReturnDiamondValueDetails = salesReturnDiamondValueDetails
											+ salesReturns.getAmountPayable();
								}

							}

							if (sale.getItemType().equals(gold)) {

								monthlyActualGoldQuantity = monthlyActualGoldQuantity + sale.getGrossWeight();
								monthlyActualGoldValue = monthlyActualGoldValue + sale.getTotalSoldAmount();

							} else if (sale.getItemType().equals(diamond)) {
								monthlyActualDiamondQuantity = monthlyActualDiamondQuantity + sale.getDiamondWeight();

								monthlyActualDiamondValue = monthlyActualDiamondValue + sale.getTotalSoldAmount();

							}
						}
						actualGoldQuantity.add((monthlyActualGoldQuantity - salesReturnGoldQuantity) / 1000);
						actualGoldValue.add((monthlyActualGoldValue - salesReturnGoldValue) / 100000);
						actualDiamondQuantity.add(monthlyActualDiamondQuantity - salesReturnDiamondQuantity);
						actualDiamondValue.add((monthlyActualDiamondValue - salesReturnDiamondValue) / 100000);
					} else {
						actualGoldQuantity.add(0.0);
						actualGoldValue.add(0.0);
						actualDiamondQuantity.add(0.0);
						actualDiamondValue.add(0.0);

					}
				}

			}

			finalActualQuantity
					.setDiamond((salesTotalObj.getDouble("actualsDiaQtyTotal") - salesReturnDiamondQuantityDetails));
			finalActualQuantity
					.setGold((salesTotalObj.getDouble("actualsGoldQtyTotal") - salesReturnGoldQuantityDetails) / 1000);
			finalActualValue.setDiamond(
					(salesTotalObj.getDouble("actualsDiaValueTotal") - salesReturnDiamondValueDetails) / 100000);
			finalActualValue
					.setGold((salesTotalObj.getDouble("actualsGoldValueTotal") - salesReturnGoldValueDetails) / 100000);

			finalActualQuantityValue.setQty(finalActualQuantity);

			finalActualQuantityValue.setValue(finalActualValue);

			targetVsActual.setActuals(finalActualQuantityValue);

			//

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
			response.setMessage("successful");
			response.setFromDate(startDate);
			response.setToDate(endDate);
			response.setData(targetVsActual);
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS206.name(), EnumTypeForErrorCodes.SCUS206.errorMsg());
			response.setMessage("Failed to get sales target vs actuals");
			log.error(utils.toJson(response.getError()), e);
		}
		return response;
	}

	public TargetVsActualResponse<TgtVsActual> getTargetVsActualByWeek(String startDate, String endDate) {

		log.info("get target vs actual sales groupby between startDate and endDate");
		TargetVsActualResponse<TgtVsActual> response = new TargetVsActualResponse<>();

		TgtVsActual targetVsActual = new TgtVsActual();

		Double salesReturnGoldQuantityDetails = 0.0;
		Double salesReturnGoldValueDetails = 0.0;
		Double salesReturnDiamondQuantityDetails = 0.0;
		Double salesReturnDiamondValueDetails = 0.0;

		try {

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

			Collection<Sales> empActualList = null;

			Collection<EmployeeItemMonthlyTarget> monthlyTarget = null;
			Collection<TeamItemMonthlyTarget> monthlyTargetForD2h = null;

			long noOfDaysBetween;
			Double tgtDiaquantity = 0.0;
			Double tgtGoldQuantity = 0.0;
			Double tgtDiaValue = 0.0;
			Double tgtGoldValue = 0.0;

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

				DateFormat formater = new SimpleDateFormat(dateFormat);

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
					Date date10 = new SimpleDateFormat(dateFormat).parse(datesList.get(0));
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
					empActualList = salesRepo.findByStartDateAndEndDate(samp, samp1);
					monthlyTarget = empItemMonthlyTargetRepo.findByTgtMonth(datesList.get(0));
					monthlyTargetForD2h = teamItemMonthlyTgtRepo.findByMonthAndYear(datesList.get(0).substring(0, 3),
							datesList.get(0).substring(4, 8));
					sample11.setTeamD2hTgt(monthlyTargetForD2h);
					noOfDaysBetween = ChronoUnit.DAYS.between(dateValue.getStartDate(), dateValue.getEndDate()) + 1;

					sample11.setEmployees(monthlyTarget);
					sample11.setNumberOfDays(noOfDaysBetween);
					sample11.setEndDateTimeline(dateValue.getEndDate().toString());
					sample11.setSale(empActualList);
					sample11.setStartDateTimeline(dateValue.getStartDate().toString());
					sampList.add(sample11);
				} else {

					for (int i = 0; i < datesList.size(); i++) {
						Date date10 = new SimpleDateFormat(dateFormat).parse(datesList.get(i));
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
							empActualList = salesRepo.findByStartDateAndEndDate(dateValue.getStartDate().toString(),
									lastDay1);
							noOfDaysBetween = ChronoUnit.DAYS.between(dateValue.getStartDate(), day2) + 1;
							monthlyTarget = empItemMonthlyTargetRepo.findByTgtMonth(datesList.get(i));
							monthlyTargetForD2h = teamItemMonthlyTgtRepo.findByMonthAndYear(
									datesList.get(i).substring(0, 3), datesList.get(i).substring(4, 8));
							sample11.setTeamD2hTgt(monthlyTargetForD2h);
							sample11.setEmployees(monthlyTarget);
							sample11.setNumberOfDays(noOfDaysBetween);
							sample11.setEndDateTimeline(lastDay1);
							sample11.setSale(empActualList);
							sample11.setStartDateTimeline(dateValue.getStartDate().toString());
							sampList.add(sample11);
						} else {
							Sample sample11 = new Sample();
							empActualList = salesRepo.findByStartDateAndEndDate(firstDay1,
									dateValue.getEndDate().toString());
							noOfDaysBetween = ChronoUnit.DAYS.between(day, dateValue.getEndDate()) + 1;
							monthlyTarget = empItemMonthlyTargetRepo.findByTgtMonth(datesList.get(i));
							monthlyTargetForD2h = teamItemMonthlyTgtRepo.findByMonthAndYear(
									datesList.get(i).substring(0, 3), datesList.get(i).substring(4, 8));
							sample11.setTeamD2hTgt(monthlyTargetForD2h);
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

					if (!sample.getEmployees().isEmpty() || !sample.getTeamD2hTgt().isEmpty()) {

						for (EmployeeItemMonthlyTarget tgt : sample.getEmployees()) {
							Date date10 = new SimpleDateFormat(dateFormat).parse(tgt.getTgtMonth());
							Calendar cal = Calendar.getInstance();
							cal.setTime(date10);
							int lastDate = cal.getActualMaximum(Calendar.DATE);
							if (tgt.getItemType().equals(gold)) {

								monthlyTargetGoldQuantity = monthlyTargetGoldQuantity
										+ (tgt.getQuantity() / lastDate) * sample.getNumberOfDays();
								monthlyTargetGoldValue = monthlyTargetGoldValue
										+ (tgt.getValue() / lastDate) * sample.getNumberOfDays();
								tgtGoldQuantity = tgtGoldQuantity
										+ (tgt.getQuantity() / lastDate) * sample.getNumberOfDays();
								tgtGoldValue = tgtGoldValue + (tgt.getValue() / lastDate) * sample.getNumberOfDays();

							} else if (tgt.getItemType().equals(diamond)) {

								monthlyTargetDiamondQuantity = monthlyTargetDiamondQuantity
										+ (tgt.getQuantity() / lastDate) * sample.getNumberOfDays();

								monthlyTargetDiamondValue = monthlyTargetDiamondValue
										+ +(tgt.getValue() / lastDate) * sample.getNumberOfDays();

								tgtDiaquantity = tgtDiaquantity
										+ (tgt.getQuantity() / lastDate) * sample.getNumberOfDays();
								tgtDiaValue = tgtDiaValue + (tgt.getValue() / lastDate) * sample.getNumberOfDays();

							}

						}

						for (TeamItemMonthlyTarget tgtD2h : sample.getTeamD2hTgt()) {
							Date date10 = new SimpleDateFormat(dateFormat)
									.parse(tgtD2h.getMonth() + "-" + tgtD2h.getYear());
							Calendar cal = Calendar.getInstance();
							cal.setTime(date10);
							int lastDate = cal.getActualMaximum(Calendar.DATE);
							if (tgtD2h.getItemType().equals("Gold")) {

								monthlyTargetGoldQuantity = monthlyTargetGoldQuantity
										+ (tgtD2h.getQuantity() / lastDate) * sample.getNumberOfDays();
								monthlyTargetGoldValue = monthlyTargetGoldValue
										+ (tgtD2h.getValue() / lastDate) * sample.getNumberOfDays();
								tgtGoldQuantity = tgtGoldQuantity
										+ (tgtD2h.getQuantity() / lastDate) * sample.getNumberOfDays();
								tgtGoldValue = tgtGoldValue + (tgtD2h.getValue() / lastDate) * sample.getNumberOfDays();

							} else if (tgtD2h.getItemType().equals(diamond)) {

								monthlyTargetDiamondQuantity = monthlyTargetDiamondQuantity
										+ (tgtD2h.getQuantity() / lastDate) * sample.getNumberOfDays();

								monthlyTargetDiamondValue = monthlyTargetDiamondValue
										+ +(tgtD2h.getValue() / lastDate) * sample.getNumberOfDays();

								tgtDiaquantity = tgtDiaquantity
										+ (tgtD2h.getQuantity() / lastDate) * sample.getNumberOfDays();
								tgtDiaValue = tgtDiaValue + (tgtD2h.getValue() / lastDate) * sample.getNumberOfDays();

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
				JSONObject salesTotalObj = calculateSalesInBetweendates(startDate, endDate);
				for (Sample sample : sampList) {
					String startDateTimeline = sample.getStartDateTimeline();
					LocalDate localStartDateTimeline = LocalDate.parse(startDateTimeline);

					LocalDate nextDay = localStartDateTimeline.plusDays(1);
					startDateTimeline = nextDay.toString();

					if (!sample.getSale().isEmpty()) {
						for (Sales sale : sample.getSale()) {

							SalesReturns salesReturns = salesReturnsRepo.findBySales(sale);

							if (salesReturns != null) {

								if (sale.getItemType().equals(gold)) {

									salesReturnGoldQuantity = salesReturnGoldQuantity + salesReturns.getGrossWeight();
									salesReturnGoldQuantityDetails = salesReturnGoldQuantityDetails
											+ salesReturns.getGrossWeight();
									salesReturnGoldValue = salesReturnGoldValue + salesReturns.getAmountPayable();
									salesReturnGoldValueDetails = salesReturnGoldValueDetails
											+ salesReturns.getAmountPayable();

								} else if (sale.getItemType().equals(diamond)) {

									salesReturnDiamondQuantity = salesReturnDiamondQuantity
											+ salesReturns.getDiamondWeight();
									salesReturnDiamondQuantityDetails = salesReturnDiamondQuantityDetails
											+ salesReturns.getDiamondWeight();
									salesReturnDiamondValue = salesReturnDiamondValue + salesReturns.getAmountPayable();
									salesReturnDiamondValueDetails = salesReturnDiamondValueDetails
											+ salesReturns.getAmountPayable();
								}

							}

							if (sale.getItemType().equals(gold)) {

								monthlyActualGoldQuantity = monthlyActualGoldQuantity + sale.getGrossWeight();
								monthlyActualGoldValue = monthlyActualGoldValue + sale.getTotalSoldAmount();
							} else if (sale.getItemType().equals(diamond)) {
								monthlyActualDiamondQuantity = monthlyActualDiamondQuantity + sale.getDiamondWeight();
								monthlyActualDiamondValue = monthlyActualDiamondValue + sale.getTotalSoldAmount();
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

				finalActualQuantity.setDiamond(
						(salesTotalObj.getDouble("actualsDiaQtyTotal") - salesReturnDiamondQuantityDetails));
				finalActualQuantity.setGold(
						(salesTotalObj.getDouble("actualsGoldQtyTotal") - salesReturnGoldQuantityDetails) / 1000);
				finalActualValue.setDiamond(
						(salesTotalObj.getDouble("actualsDiaValueTotal") - salesReturnDiamondValueDetails) / 100000);
				finalActualValue.setGold(
						(salesTotalObj.getDouble("actualsGoldValueTotal") - salesReturnGoldValueDetails) / 100000);

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
				response.setMessage("successful");
				response.setFromDate(startDate);
				response.setToDate(endDate);
				response.setData(targetVsActual);

			}

		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS206.name(), EnumTypeForErrorCodes.SCUS206.errorMsg());
			response.setMessage("Failed to get sales target vs actuals");
			log.error(utils.toJson(response.getError()), e);
		}
		return response;
	}

	@Override
	public TargetVsActualResponse<TgtVsActual> getTargetVsActual(String startDate, String endDate) {

		log.info("get target vs actual sales groupby between startDate and endDate");
		TargetVsActualResponse<TgtVsActual> response = new TargetVsActualResponse<>();

		try {

			LocalDate localStartDate = LocalDate.parse(startDate);
			LocalDate localEndDate = LocalDate.parse(endDate);

			long betweenDays = ChronoUnit.DAYS.between(localStartDate, localEndDate);

			if (betweenDays < 15) {
				// daywise
				response = getTargetVsActualByDay(startDate, endDate);
			} else if (betweenDays >= 15 && betweenDays <= 60) {
				// week wise
				response = getTargetVsActualByWeek(startDate, endDate);
			} else {
				// month wise
				response = getTargetVsActualByMonth(startDate, endDate);
			}
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS206.name(), EnumTypeForErrorCodes.SCUS206.errorMsg());
			response.setMessage("Failed to get sales target vs actuals");
			log.error(utils.toJson(response.getError()), e);
		}
		return response;
	}

	public List<String> getDays(String startDate, String endDate) {
		ServiceResponse<List<String>> response = new ServiceResponse<>();
		List<String> datesList = new ArrayList<>();
		try {
			DateFormat formater = new SimpleDateFormat(dateFormat);
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
			response.setError(EnumTypeForErrorCodes.SCUS206.name(), EnumTypeForErrorCodes.SCUS206.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}
		return datesList;
	}

	public JSONObject calculateSalesInBetweendates(String startDate, String endDate) {

		List<Sales> goldActuals = salesRepo.findByStartDateAndEndDateAndItemType(startDate, endDate, gold);
		Double actualsGoldValueTotal = goldActuals.stream().mapToDouble(o -> o.getTotalSoldAmount()).sum();
		Double actualsGoldQtyTotal = goldActuals.stream().mapToDouble(o -> o.getGrossWeight()).sum();
		List<Sales> diamondActuals = salesRepo.findByStartDateAndEndDateAndItemType(startDate, endDate, diamond);
		Double actualsDiaValueTotal = diamondActuals.stream().mapToDouble(o -> o.getTotalSoldAmount()).sum();
		Double actualsDiaQtyTotal = diamondActuals.stream().mapToDouble(o -> o.getDiamondWeight()).sum();
		JSONObject obj = new JSONObject();
		obj.put("actualsGoldValueTotal", actualsGoldValueTotal);
		obj.put("actualsGoldQtyTotal", actualsGoldQtyTotal);
		obj.put("actualsDiaValueTotal", actualsDiaValueTotal);
		obj.put("actualsDiaQtyTotal", actualsDiaQtyTotal);

		return obj;
	}

}

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
import com.mss.pmj.pmjmis.repos.EmpDailyActualsRepository;
import com.mss.pmj.pmjmis.repos.EmployeeItemMonthlyTargetRepository;
import com.mss.pmj.pmjmis.repos.SalesRepository;
import com.mss.pmj.pmjmis.repos.SalesReturnsRepository;
import com.mss.pmj.pmjmis.response.ConversionActuals;
import com.mss.pmj.pmjmis.response.ConversionData;
import com.mss.pmj.pmjmis.response.ConversionSample;
import com.mss.pmj.pmjmis.response.Dates;
import com.mss.pmj.pmjmis.response.DiamondWalkins;
import com.mss.pmj.pmjmis.response.EmployeeConversionTgtvsActual;
import com.mss.pmj.pmjmis.response.GoldWalkins;
import com.mss.pmj.pmjmis.response.Sample;
import com.mss.pmj.pmjmis.response.TargetVsActualResponse;
import com.mss.pmj.pmjmis.response.Walkins;
import com.mss.pmj.pmjmis.svcs.PerformanceAnalysisSalesConversionService;

@RestController
public class PerformanceAnalysisSalesConversionServiceImpl implements PerformanceAnalysisSalesConversionService {
	private static Logger log = LoggerFactory.getLogger(PerformanceAnalysisSalesConversionServiceImpl.class);

	@Autowired
	private Utils utils;

	@Autowired
	private EmployeeItemMonthlyTargetRepository empItemMonthlyTargetRepo;

	@Autowired
	private EmpDailyActualsRepository empDailyActualsRepo;

	@Autowired
	private SalesRepository salesRepo;

	@Autowired
	private SalesReturnsRepository salesReturnsRepo;

	private String diamond = "Diamond";

	private String monthYearFormat = "MMM-yyyy";
	
	private String successMessage  = "successful";

	@Override
	public TargetVsActualResponse<ConversionData> conversionAnalysisSalesPersonWise(Long salesPersonId,
			String startDate, String endDate) {

		log.info("Get conversion Analysis SalesPersonWise between startDate and endDate");

		TargetVsActualResponse<ConversionData> response = new TargetVsActualResponse<>();

		try {

			LocalDate localStartDate = LocalDate.parse(startDate);
			LocalDate localEndDate = LocalDate.parse(endDate);

			long betweenDays = ChronoUnit.DAYS.between(localStartDate, localEndDate);

			if (betweenDays < 15) {
				// daywise
				response = getConversionTargetVsActualByDay(salesPersonId, startDate, endDate);
			} else if (betweenDays >= 15 && betweenDays <= 60) {
				// week wise
				response = getConversionTargetVsActualByWeek(salesPersonId, startDate, endDate);
			} else {
				// month wise
				response = getConversionTargetVsActualByMonth(salesPersonId, startDate, endDate);
			}
		} catch (Exception e) {
			response.setStatus(HttpServletResponse.SC_CONFLICT);
			response.setError(EnumTypeForErrorCodes.SCUS818.name(), EnumTypeForErrorCodes.SCUS818.errorMsg());
			response.setMessage(EnumTypeForErrorCodes.SCUS818.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}
		return response;
	}

	public TargetVsActualResponse<ConversionData> getConversionTargetVsActualByMonth(Long salesPersonId,
			String startDate, String endDate) {
		log.info("Get conversion Analysis SalesPersonWise By monthwise");
		TargetVsActualResponse<ConversionData> response = new TargetVsActualResponse<>();

		EmployeeConversionTgtvsActual employeeConversion = new EmployeeConversionTgtvsActual();

		String empCode = "";
		String empName = "";
		List<Double> targetGoldValue = new ArrayList<>();
		List<Double> targetDiamondValue = new ArrayList<>();
		ConversionData conversiontargetVsActual = new ConversionData();
		try {

			LocalDate localStartDate = LocalDate.parse(startDate);
			LocalDate localEndDate = LocalDate.parse(endDate);

			String date1 = localStartDate.getMonth() + "-" + localStartDate.getYear();
			String date2 = localEndDate.getMonth() + "-" + localEndDate.getYear();

			List<String> timeline = new ArrayList<>();

			List<String> datesList = getDays(date1, date2);
			List<EmployeeConversionTgtvsActual> employeeConversionList = new ArrayList<>();

			List<Double> actualGoldValue = new ArrayList<>();
			List<Double> actualDiamondValue = new ArrayList<>();

			List<Integer> goldTotalWalkins = new ArrayList<>();
			List<Integer> goldPrefferedWalkins = new ArrayList<>();
			List<Integer> diamondTotalWalkins = new ArrayList<>();
			List<Integer> diamondPrefferedWalkins = new ArrayList<>();

			for (int i = 0; i < datesList.size(); i++) {

				Collection<EmpDailyActuals> empActualList = null;

				Collection<EmployeeItemMonthlyTarget> monthlyTarget = null;

				if (i == 0) {

					if (date1.equals(date2)) {

						empActualList = empDailyActualsRepo.findByStartDateAndEndDate(salesPersonId, startDate,
								endDate);
						monthlyTarget = empItemMonthlyTargetRepo.findByTgtMonthAndEmp(datesList.get(i), salesPersonId);

					} else {

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
						String lastDay1 = datesList.get(i).substring(4, 8) + "-" + m + "-" + lastDay;
						empActualList = empDailyActualsRepo.findByStartDateAndEndDate(salesPersonId, startDate,
								lastDay1);
						monthlyTarget = empItemMonthlyTargetRepo.findByTgtMonthAndEmp(datesList.get(i), salesPersonId);
					}

				} else if (i < datesList.size() - 1) {
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
					String lastDay1 = datesList.get(i).substring(4, 8) + "-" + m + "-" + lastDay;
					String firstDay1 = datesList.get(i).substring(4, 8) + "-" + m + "-" + "01";
					empActualList = empDailyActualsRepo.findByStartDateAndEndDate(salesPersonId, firstDay1, lastDay1);
					monthlyTarget = empItemMonthlyTargetRepo.findByTgtMonthAndEmp(datesList.get(i), salesPersonId);
				} else {
					Date date10 = new SimpleDateFormat(monthYearFormat).parse(datesList.get(i));
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
					empActualList = empDailyActualsRepo.findByStartDateAndEndDate(salesPersonId, firstDay1, endDate);
					monthlyTarget = empItemMonthlyTargetRepo.findByTgtMonthAndEmp(datesList.get(i), salesPersonId);
				}

				timeline.add(datesList.get(i));
				if (!monthlyTarget.isEmpty()) {
					Double monthlyTargetGoldValue = 0.0;
					Double monthlyTargetDiamondValue = 0.0;
					for (EmployeeItemMonthlyTarget tgt : monthlyTarget) {
						empCode = tgt.getEmp().getEmpCode();
						empName = tgt.getEmp().getEmpName();
						Date date10 = new SimpleDateFormat(monthYearFormat).parse(tgt.getTgtMonth());
						Calendar cal = Calendar.getInstance();
						cal.setTime(date10);
						if (tgt.getItemType().equals("Gold")) {
							monthlyTargetGoldValue = monthlyTargetGoldValue + tgt.getConversion();

						} else if (tgt.getItemType().equals(diamond)) {
							monthlyTargetDiamondValue = monthlyTargetDiamondValue + tgt.getConversion();
						}
					}
					if (monthlyTargetGoldValue.isNaN() || monthlyTargetGoldValue.isInfinite()) {
						targetGoldValue.add(0.0);
					} else {
						targetGoldValue.add(monthlyTargetGoldValue);
					}
					if (monthlyTargetDiamondValue.isNaN() || monthlyTargetDiamondValue.isInfinite()) {
						targetDiamondValue.add(0.0);
					} else {
						targetDiamondValue.add(monthlyTargetDiamondValue);
					}
				} else {
					targetGoldValue.add(0.0);
					targetDiamondValue.add(0.0);
				}
				Double monthlyActualGoldValue = 0.0;
				Double monthlyActualDiamondValue = 0.0;
				double goldPrefferedCount = 0.0;
				double diamondPrefferedCount = 0.0;
				int goldTotalCount = 0;
				int diamondTotalCount = 0;
				if (!empActualList.isEmpty()) {

					for (EmpDailyActuals sale : empActualList) {

						if (sale.getItemType().equalsIgnoreCase("Gold")) {

							goldTotalCount = goldTotalCount + 1;
							if (sale.getSale().equals(true)) {
								goldPrefferedCount = goldPrefferedCount + 1;
							}
						} else if (sale.getItemType().equalsIgnoreCase(diamond)) {

							diamondTotalCount = diamondTotalCount + 1;
							if (sale.getSale().equals(true)) {
								diamondPrefferedCount = diamondPrefferedCount + 1;
							}
						}
					}
				} else {
					goldTotalCount = 0;
					goldPrefferedCount = 0;
					diamondTotalCount = 0;
					diamondPrefferedCount = 0;
				}
				goldTotalWalkins.add(goldTotalCount);
				goldPrefferedWalkins.add((int) goldPrefferedCount);
				if (goldTotalCount != 0)
					monthlyActualGoldValue = (goldPrefferedCount / goldTotalCount) * 100;
				diamondTotalWalkins.add(diamondTotalCount);
				diamondPrefferedWalkins.add((int) diamondPrefferedCount);
				if (diamondTotalCount != 0)
					monthlyActualDiamondValue = (diamondPrefferedCount / diamondTotalCount) * 100;
				if (monthlyActualGoldValue.isNaN() || monthlyActualGoldValue.isInfinite()) {
					actualGoldValue.add(0.0);
				} else {
					actualGoldValue.add(monthlyActualGoldValue);
				}
				if (monthlyActualDiamondValue.isNaN() || monthlyActualDiamondValue.isInfinite()) {
					actualDiamondValue.add(0.0);
				} else {
					actualDiamondValue.add(monthlyActualDiamondValue);
				}
			}
			GoldWalkins goldWalkins = new GoldWalkins();
			goldWalkins.setTotalWalkins(goldTotalWalkins.toArray(new Integer[goldTotalWalkins.size()]));
			goldWalkins.setPreferredWalkins(goldPrefferedWalkins.toArray(new Integer[goldPrefferedWalkins.size()]));
			DiamondWalkins diamondWalkins = new DiamondWalkins();
			diamondWalkins.setTotalWalkins(diamondTotalWalkins.toArray(new Integer[diamondTotalWalkins.size()]));
			diamondWalkins
					.setPreferredWalkins(diamondPrefferedWalkins.toArray(new Integer[diamondPrefferedWalkins.size()]));
			Walkins walkins = new Walkins();
			walkins.setGold(goldWalkins);
			walkins.setDiamond(diamondWalkins);
			employeeConversion.setEmpCode(empCode);
			employeeConversion.setName(empName);
			ConversionActuals conversionTarget = new ConversionActuals();
			ConversionActuals conversionActuals = new ConversionActuals();
			conversionTarget.setDiamond(targetDiamondValue.toArray(new Double[targetDiamondValue.size()]));
			conversionTarget.setGold(targetGoldValue.toArray(new Double[targetGoldValue.size()]));
			conversionActuals.setDiamond(actualDiamondValue.toArray(new Double[actualDiamondValue.size()]));
			conversionActuals.setGold(actualGoldValue.toArray(new Double[actualGoldValue.size()]));
			employeeConversion.setTargets(conversionTarget);
			employeeConversion.setActuals(conversionActuals);
			employeeConversion.setWalkins(walkins);
			employeeConversionList.add(employeeConversion);
			conversiontargetVsActual.setTimeLine(timeline.toArray(new String[timeline.size()]));
			conversiontargetVsActual.setEmployee(
					employeeConversionList.toArray(new EmployeeConversionTgtvsActual[employeeConversionList.size()]));
			response.setStatus(HttpServletResponse.SC_OK);
			response.setMessage(successMessage);
			response.setFromDate(startDate);
			response.setToDate(endDate);
			response.setData(conversiontargetVsActual);

		} catch (Exception e) {
			response.setStatus(HttpServletResponse.SC_CONFLICT);
			response.setError(EnumTypeForErrorCodes.SCUS818.name(), EnumTypeForErrorCodes.SCUS818.errorMsg());
			response.setMessage(EnumTypeForErrorCodes.SCUS818.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}
		return response;
	}

	public TargetVsActualResponse<ConversionData> getConversionTargetVsActualByDay(Long salesPersonId, String startDate,
			String endDate) {

		log.info("Get conversion Analysis SalesPersonWise By daywise");
		TargetVsActualResponse<ConversionData> response = new TargetVsActualResponse<>();

		ConversionData conversiontargetVsActual = new ConversionData();
		EmployeeConversionTgtvsActual employeeConversion = new EmployeeConversionTgtvsActual();
		String empCode = "";
		String empName = "";
		try {
			LocalDate localStartDate = LocalDate.parse(startDate);
			LocalDate localEndDate = LocalDate.parse(endDate);

			String date1 = localStartDate.getMonth() + "-" + localStartDate.getYear();
			String date2 = localEndDate.getMonth() + "-" + localEndDate.getYear();

			List<String> timeline = new ArrayList<>();

			List<EmployeeConversionTgtvsActual> employeeConversionList = new ArrayList<>();

			List<String> datesList = getDays(date1, date2);

			List<Double> targetGoldValue = new ArrayList<>();
			List<Double> targetDiamondValue = new ArrayList<>();

			List<Double> actualGoldValue = new ArrayList<>();
			List<Double> actualDiamondValue = new ArrayList<>();

			List<Integer> goldTotalWalkins = new ArrayList<>();
			List<Integer> goldPrefferedWalkins = new ArrayList<>();
			List<Integer> diamondTotalWalkins = new ArrayList<>();
			List<Integer> diamondPrefferedWalkins = new ArrayList<>();

			Collection<EmployeeItemMonthlyTarget> monthlyTarget = null;
			Collection<EmpDailyActuals> empActualList = null;

			long noOfDaysBetween = 0l;
			String startDateTimeline = null;
			String endDateTimeline = null;

			List<ConversionSample> sampList = new ArrayList<>();

			if (datesList.size() == 1) {
				ConversionSample samp = new ConversionSample();
				empActualList = empDailyActualsRepo.findByStartDateAndEndDate(salesPersonId, startDate, endDate);
				monthlyTarget = empItemMonthlyTargetRepo.findByTgtMonthAndEmp(datesList.get(0), salesPersonId);
				noOfDaysBetween = ChronoUnit.DAYS.between(localStartDate, localEndDate) + 1;
				startDateTimeline = startDate;
				endDateTimeline = endDate;

				samp.setEmployees(monthlyTarget);
				samp.setNumberOfDays(noOfDaysBetween);
				samp.setEndDateTimeline(endDateTimeline);
				samp.setEmpDailyActuals(empActualList);
				samp.setStartDateTimeline(startDateTimeline);
				sampList.add(samp);
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
						ConversionSample samp = new ConversionSample();
						String lastDay1 = datesList.get(i).substring(4, 8) + "-" + m + "-" + lastDay;
						LocalDate day = LocalDate.parse(lastDay1);
						empActualList = empDailyActualsRepo.findByStartDateAndEndDate(salesPersonId, startDate,
								lastDay1);
						monthlyTarget = empItemMonthlyTargetRepo.findByTgtMonthAndEmp(datesList.get(i), salesPersonId);
						noOfDaysBetween = ChronoUnit.DAYS.between(localStartDate, day) + 1;
						startDateTimeline = startDate;
						endDateTimeline = lastDay1;
						samp.setEmployees(monthlyTarget);
						samp.setNumberOfDays(noOfDaysBetween);
						samp.setEndDateTimeline(endDateTimeline);
						samp.setEmpDailyActuals(empActualList);
						samp.setStartDateTimeline(startDateTimeline);
						sampList.add(samp);

					} else {
						ConversionSample samp = new ConversionSample();
						String firstDay1 = datesList.get(i).substring(4, 8) + "-" + m + "-" + "01";
						LocalDate day = LocalDate.parse(firstDay1);
						empActualList = empDailyActualsRepo.findByStartDateAndEndDate(salesPersonId, firstDay1,
								endDate);

						monthlyTarget = empItemMonthlyTargetRepo.findByTgtMonthAndEmp(datesList.get(i), salesPersonId);
						noOfDaysBetween = ChronoUnit.DAYS.between(day, localEndDate) + 1;
						startDateTimeline = firstDay1;
						endDateTimeline = endDate;
						samp.setEmployees(monthlyTarget);
						samp.setNumberOfDays(noOfDaysBetween);
						samp.setEndDateTimeline(endDateTimeline);
						samp.setEmpDailyActuals(empActualList);
						samp.setStartDateTimeline(startDateTimeline);
						sampList.add(samp);
					}
				}
			}
			for (ConversionSample sample : sampList) {

				startDateTimeline = sample.getStartDateTimeline();

				for (int i = 0; i < sample.getNumberOfDays(); i++) {
					Double monthlyTargetGoldValue = 0.0;
					Double monthlyTargetDiamondValue = 0.0;
					if (!sample.getEmployees().isEmpty()) {
						for (EmployeeItemMonthlyTarget tgt : sample.getEmployees()) {
							empCode = tgt.getEmp().getEmpCode();
							empName = tgt.getEmp().getEmpName();
							if (tgt.getItemType().equals("Gold")) {
								monthlyTargetGoldValue = monthlyTargetGoldValue + (tgt.getConversion());

							} else if (tgt.getItemType().equals(diamond)) {

								monthlyTargetDiamondValue = monthlyTargetDiamondValue + (tgt.getConversion());
							}
						}
						if (monthlyTargetGoldValue.isNaN() || monthlyTargetGoldValue.isInfinite()) {
							targetGoldValue.add(0.0);
						} else {
							targetGoldValue.add(monthlyTargetGoldValue);
						}
						if (monthlyTargetDiamondValue.isNaN() || monthlyTargetDiamondValue.isInfinite()) {
							targetDiamondValue.add(0.0);
						} else {
							targetDiamondValue.add(monthlyTargetDiamondValue);
						}
					} else {
						targetGoldValue.add(0.0);
						targetDiamondValue.add(0.0);
					}
					LocalDate localStartDateTimeline = LocalDate.parse(startDateTimeline);
					final String DATE_FORMATTER = "dd-MM-yyyy";
					DateTimeFormatter formatter = DateTimeFormatter.ofPattern(DATE_FORMATTER);
					String formatDateTime = localStartDateTimeline.format(formatter);
					timeline.add(formatDateTime);
					Double monthlyActualGoldValue = 0.0;
					Double monthlyActualDiamondValue = 0.0;
					List<EmpDailyActuals> empGoldDailyExists = empDailyActualsRepo
							.findByVisitDateAndItemTypeAndEmp(startDateTimeline, "Gold", salesPersonId);
					List<EmpDailyActuals> empDiamondDailyExists = empDailyActualsRepo
							.findByVisitDateAndItemTypeAndEmp(startDateTimeline, diamond, salesPersonId);
					LocalDate nextDay = localStartDateTimeline.plusDays(1);
					startDateTimeline = nextDay.toString();
					double goldPrefferedCount = 0.0;
					double diamondPrefferedCount = 0.0;
					if (!empGoldDailyExists.isEmpty()) {

						for (EmpDailyActuals sale : empGoldDailyExists) {
							if (sale.getSale().equals(true)) {
								goldPrefferedCount = goldPrefferedCount + 1;
							}

						}
						goldTotalWalkins.add(empGoldDailyExists.size());
						goldPrefferedWalkins.add((int) goldPrefferedCount);
						monthlyActualGoldValue = (goldPrefferedCount / empGoldDailyExists.size()) * 100;
						if (monthlyActualGoldValue.isNaN() || monthlyActualGoldValue.isInfinite()) {
							actualGoldValue.add(0.0);
						} else {
							actualGoldValue.add(monthlyActualGoldValue);
						}
					} else {
						actualGoldValue.add(0.0);
						goldTotalWalkins.add(0);
						goldPrefferedWalkins.add(0);
					}
					if (!empDiamondDailyExists.isEmpty()) {

						for (EmpDailyActuals sale : empDiamondDailyExists) {
							if (sale.getSale().equals(true)) {
								diamondPrefferedCount = diamondPrefferedCount + 1;
							}
						}
						diamondTotalWalkins.add(empDiamondDailyExists.size());
						diamondPrefferedWalkins.add((int) diamondPrefferedCount);
						monthlyActualDiamondValue = (diamondPrefferedCount / empDiamondDailyExists.size()) * 100;
						if (monthlyActualDiamondValue.isNaN() || monthlyActualDiamondValue.isInfinite()) {
							actualDiamondValue.add(0.0);
						} else {
							actualDiamondValue.add(monthlyActualDiamondValue);
						}
					} else {
						actualDiamondValue.add(0.0);
						diamondTotalWalkins.add(0);
						diamondPrefferedWalkins.add(0);
					}
				}
			}
			GoldWalkins goldWalkins = new GoldWalkins();
			goldWalkins.setTotalWalkins(goldTotalWalkins.toArray(new Integer[goldTotalWalkins.size()]));
			goldWalkins.setPreferredWalkins(goldPrefferedWalkins.toArray(new Integer[goldPrefferedWalkins.size()]));
			DiamondWalkins diamondWalkins = new DiamondWalkins();
			diamondWalkins.setTotalWalkins(diamondTotalWalkins.toArray(new Integer[diamondTotalWalkins.size()]));
			diamondWalkins
					.setPreferredWalkins(diamondPrefferedWalkins.toArray(new Integer[diamondPrefferedWalkins.size()]));
			Walkins walkins = new Walkins();
			walkins.setGold(goldWalkins);
			walkins.setDiamond(diamondWalkins);
			employeeConversion.setEmpCode(empCode);
			employeeConversion.setName(empName);
			ConversionActuals conversionTarget = new ConversionActuals();
			ConversionActuals conversionActuals = new ConversionActuals();
			conversionTarget.setDiamond(targetDiamondValue.toArray(new Double[targetDiamondValue.size()]));
			conversionTarget.setGold(targetGoldValue.toArray(new Double[targetGoldValue.size()]));
			conversionActuals.setDiamond(actualDiamondValue.toArray(new Double[actualDiamondValue.size()]));
			conversionActuals.setGold(actualGoldValue.toArray(new Double[actualGoldValue.size()]));
			employeeConversion.setTargets(conversionTarget);
			employeeConversion.setActuals(conversionActuals);
			employeeConversion.setWalkins(walkins);
			employeeConversionList.add(employeeConversion);
			conversiontargetVsActual.setTimeLine(timeline.toArray(new String[timeline.size()]));
			conversiontargetVsActual.setEmployee(
					employeeConversionList.toArray(new EmployeeConversionTgtvsActual[employeeConversionList.size()]));
			response.setStatus(HttpServletResponse.SC_OK);
			response.setMessage(successMessage);
			response.setFromDate(startDate);
			response.setToDate(endDate);
			response.setData(conversiontargetVsActual);
		} catch (Exception e) {
			response.setStatus(HttpServletResponse.SC_CONFLICT);
			response.setError(EnumTypeForErrorCodes.SCUS818.name(), EnumTypeForErrorCodes.SCUS818.errorMsg());
			response.setMessage(EnumTypeForErrorCodes.SCUS818.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}
		return response;
	}

	public TargetVsActualResponse<ConversionData> getConversionTargetVsActualByWeek(Long salesPersonId,
			String startDate, String endDate) {

		log.info("Get conversion Analysis SalesPersonWise By weekwise");

		TargetVsActualResponse<ConversionData> response = new TargetVsActualResponse<>();

		ConversionData conversiontargetVsActual = new ConversionData();
		EmployeeConversionTgtvsActual employeeConversion = new EmployeeConversionTgtvsActual();
		String empCode = "";
		String empName = "";

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

			List<String> timeline = new ArrayList<>();

			List<EmployeeConversionTgtvsActual> employeeConversionList = new ArrayList<>();

			List<Double> targetGoldValue = new ArrayList<>();
			List<Double> targetDiamondValue = new ArrayList<>();

			List<Double> actualGoldValue = new ArrayList<>();
			List<Double> actualDiamondValue = new ArrayList<>();

			List<Integer> goldTotalWalkins = new ArrayList<>();
			List<Integer> goldPrefferedWalkins = new ArrayList<>();
			List<Integer> diamondTotalWalkins = new ArrayList<>();
			List<Integer> diamondPrefferedWalkins = new ArrayList<>();

			Collection<EmployeeItemMonthlyTarget> monthlyTarget = null;
			Collection<EmpDailyActuals> empActualList = null;

			long noOfDaysBetween = 0l;

			for (Dates dateValue : weeksList) {
				LocalDate sample1 = dateValue.getStartDate();
				LocalDate sample2 = dateValue.getEndDate();

				String samp = dateValue.getStartDate().toString();
				String samp1 = dateValue.getEndDate().toString();
				String date1 = sample1.getMonth() + "-" + sample1.getYear();
				String date2 = sample2.getMonth() + "-" + sample2.getYear();
				Double monthlyTargetGoldValue = 0.0;
				Double monthlyTargetDiamondValue = 0.0;

				DateFormat formater = new SimpleDateFormat(monthYearFormat);

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

				List<ConversionSample> sampList = new ArrayList<>();

				if (datesList.size() == 1) {
					ConversionSample sample = new ConversionSample();
					Date date10 = new SimpleDateFormat(monthYearFormat).parse(datesList.get(0));
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
					empActualList = empDailyActualsRepo.findByStartDateAndEndDate(salesPersonId, samp, samp1);
					monthlyTarget = empItemMonthlyTargetRepo.findByTgtMonthAndEmp(datesList.get(0), salesPersonId);
					noOfDaysBetween = ChronoUnit.DAYS.between(dateValue.getStartDate(), dateValue.getEndDate()) + 1;
					sample.setEmployees(monthlyTarget);
					sample.setNumberOfDays(noOfDaysBetween);
					sample.setEndDateTimeline(dateValue.getEndDate().toString());
					sample.setEmpDailyActuals(empActualList);
					sample.setStartDateTimeline(dateValue.getStartDate().toString());
					sampList.add(sample);
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
						String firstDay1 = datesList.get(i).substring(4, 8) + "-" + m + "-" + "01";
						LocalDate day = LocalDate.parse(firstDay1);
						String lastDay1 = datesList.get(i).substring(4, 8) + "-" + m + "-" + lastDay;
						LocalDate day2 = LocalDate.parse(lastDay1);

						if (i == 0) {
							ConversionSample sample = new ConversionSample();
							empActualList = empDailyActualsRepo.findByStartDateAndEndDate(salesPersonId,
									dateValue.getStartDate().toString(), lastDay1);
							noOfDaysBetween = ChronoUnit.DAYS.between(dateValue.getStartDate(), day2) + 1;
							monthlyTarget = empItemMonthlyTargetRepo.findByTgtMonthAndEmp(datesList.get(i),
									salesPersonId);

							sample.setEmployees(monthlyTarget);
							sample.setNumberOfDays(noOfDaysBetween);
							sample.setEndDateTimeline(lastDay1);
							sample.setEmpDailyActuals(empActualList);
							sample.setStartDateTimeline(dateValue.getStartDate().toString());
							sampList.add(sample);
						} else {
							ConversionSample sample = new ConversionSample();
							empActualList = empDailyActualsRepo.findByStartDateAndEndDate(salesPersonId, firstDay1,
									dateValue.getEndDate().toString());
							noOfDaysBetween = ChronoUnit.DAYS.between(day, dateValue.getEndDate()) + 1;
							monthlyTarget = empItemMonthlyTargetRepo.findByTgtMonthAndEmp(datesList.get(i),
									salesPersonId);

							sample.setEmployees(monthlyTarget);
							sample.setNumberOfDays(noOfDaysBetween);
							sample.setEndDateTimeline(dateValue.getEndDate().toString());
							sample.setEmpDailyActuals(empActualList);
							sample.setStartDateTimeline(firstDay1);
							sampList.add(sample);
						}

					}
				}
				timeline.add(dateValue.getWeekNumber());
				for (ConversionSample sample : sampList) {

					if (!sample.getEmployees().isEmpty()) {

						for (EmployeeItemMonthlyTarget tgt : sample.getEmployees()) {
							Date date10 = new SimpleDateFormat(monthYearFormat).parse(tgt.getTgtMonth());
							Calendar cal = Calendar.getInstance();
							cal.setTime(date10);
							empCode = tgt.getEmp().getEmpCode();
							empName = tgt.getEmp().getEmpName();
							if (tgt.getItemType().equals("Gold")) {
								if (monthlyTargetGoldValue != 0 && noOfDaysBetween != 7) {
									monthlyTargetGoldValue = ((monthlyTargetGoldValue * (7 - noOfDaysBetween))
											+ (tgt.getConversion() * noOfDaysBetween)) / 7;
								} else {
									monthlyTargetGoldValue = monthlyTargetGoldValue + tgt.getConversion();
								}

							} else if (tgt.getItemType().equals(diamond)) {
								if (monthlyTargetDiamondValue != 0 && noOfDaysBetween != 7) {
									monthlyTargetDiamondValue = ((monthlyTargetDiamondValue * (7 - noOfDaysBetween))
											+ (tgt.getConversion() * noOfDaysBetween)) / 7;
								} else {
									monthlyTargetDiamondValue = monthlyTargetDiamondValue + tgt.getConversion();
								}
							}
						}

					} else {
						monthlyTargetDiamondValue = 0.0;
						monthlyTargetGoldValue = 0.0;
					}
				}
				if (monthlyTargetGoldValue.isNaN() || monthlyTargetGoldValue.isInfinite()) {
					targetGoldValue.add(0.0);
				} else {
					targetGoldValue.add(monthlyTargetGoldValue);
				}
				if (monthlyTargetDiamondValue.isNaN() || monthlyTargetDiamondValue.isInfinite()) {
					targetDiamondValue.add(0.0);
				} else {
					targetDiamondValue.add(monthlyTargetDiamondValue);
				}
				Double monthlyActualGoldValue = 0.0;
				Double monthlyActualDiamondValue = 0.0;
				double goldPrefferedCount = 0.0;
				double diamondPrefferedCount = 0.0;
				int goldTotalCount = 0;
				int diamondTotalCount = 0;
				for (ConversionSample sample : sampList) {
					String startDateTimeline = sample.getStartDateTimeline();
					LocalDate localStartDateTimeline = LocalDate.parse(startDateTimeline);

					LocalDate nextDay = localStartDateTimeline.plusDays(1);
					startDateTimeline = nextDay.toString();

					if (!sample.getEmpDailyActuals().isEmpty()) {
						for (EmpDailyActuals sale : sample.getEmpDailyActuals()) {

							if (sale.getItemType().equalsIgnoreCase("Gold")) {

								goldTotalCount = goldTotalCount + 1;
								if (sale.getSale().equals(true)) {
									goldPrefferedCount = goldPrefferedCount + 1;
								}
							} else if (sale.getItemType().equalsIgnoreCase(diamond)) {

								diamondTotalCount = diamondTotalCount + 1;
								if (sale.getSale().equals(true)) {
									diamondPrefferedCount = diamondPrefferedCount + 1;
								}
							}
						}
					} else {
						goldTotalCount = 0;
						goldPrefferedCount = 0;
						diamondTotalCount = 0;
						diamondPrefferedCount = 0;

					}
				}
				goldTotalWalkins.add(goldTotalCount);
				goldPrefferedWalkins.add((int) goldPrefferedCount);
				if (goldTotalCount != 0)
					monthlyActualGoldValue = (goldPrefferedCount / goldTotalCount) * 100;
				diamondTotalWalkins.add(diamondTotalCount);
				diamondPrefferedWalkins.add((int) diamondPrefferedCount);
				if (diamondTotalCount != 0)
					monthlyActualDiamondValue = (diamondPrefferedCount / diamondTotalCount) * 100;
				if (monthlyActualGoldValue.isNaN() || monthlyActualGoldValue.isInfinite()) {
					actualGoldValue.add(0.0);
				} else {
					actualGoldValue.add(monthlyActualGoldValue);
				}
				if (monthlyActualDiamondValue.isNaN() || monthlyActualDiamondValue.isInfinite()) {
					actualDiamondValue.add(0.0);
				} else {
					actualDiamondValue.add(monthlyActualDiamondValue);
				}
			}
			GoldWalkins goldWalkins = new GoldWalkins();
			goldWalkins.setTotalWalkins(goldTotalWalkins.toArray(new Integer[goldTotalWalkins.size()]));
			goldWalkins.setPreferredWalkins(goldPrefferedWalkins.toArray(new Integer[goldPrefferedWalkins.size()]));
			DiamondWalkins diamondWalkins = new DiamondWalkins();
			diamondWalkins.setTotalWalkins(diamondTotalWalkins.toArray(new Integer[diamondTotalWalkins.size()]));
			diamondWalkins
					.setPreferredWalkins(diamondPrefferedWalkins.toArray(new Integer[diamondPrefferedWalkins.size()]));
			Walkins walkins = new Walkins();
			walkins.setGold(goldWalkins);
			walkins.setDiamond(diamondWalkins);
			employeeConversion.setEmpCode(empCode);
			employeeConversion.setName(empName);
			ConversionActuals conversionTarget = new ConversionActuals();
			ConversionActuals conversionActuals = new ConversionActuals();
			conversionTarget.setDiamond(targetDiamondValue.toArray(new Double[targetDiamondValue.size()]));
			conversionTarget.setGold(targetGoldValue.toArray(new Double[targetGoldValue.size()]));
			conversionActuals.setDiamond(actualDiamondValue.toArray(new Double[actualDiamondValue.size()]));
			conversionActuals.setGold(actualGoldValue.toArray(new Double[actualGoldValue.size()]));
			employeeConversion.setTargets(conversionTarget);
			employeeConversion.setActuals(conversionActuals);
			employeeConversion.setWalkins(walkins);
			employeeConversionList.add(employeeConversion);
			conversiontargetVsActual.setTimeLine(timeline.toArray(new String[timeline.size()]));
			conversiontargetVsActual.setEmployee(
					employeeConversionList.toArray(new EmployeeConversionTgtvsActual[employeeConversionList.size()]));
			response.setStatus(HttpServletResponse.SC_OK);
			response.setMessage(successMessage);
			response.setFromDate(startDate);
			response.setToDate(endDate);
			response.setData(conversiontargetVsActual);
		} catch (Exception e) {
			response.setStatus(HttpServletResponse.SC_CONFLICT);
			response.setError(EnumTypeForErrorCodes.SCUS818.name(), EnumTypeForErrorCodes.SCUS818.errorMsg());
			response.setMessage(EnumTypeForErrorCodes.SCUS818.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}
		return response;
	}

	public List<String> getDays(String startDate, String endDate) {
		ServiceResponse<List<String>> response = new ServiceResponse<>();
		List<String> datesList = new ArrayList<>();
		try {
			DateFormat formater = new SimpleDateFormat(monthYearFormat);
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
			response.setError(EnumTypeForErrorCodes.SCUS818.name(), EnumTypeForErrorCodes.SCUS818.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}
		return datesList;
	}

	@Override
	public TargetVsActualResponse<ConversionData> ticketSizeAnalysisSalesPersonWise(Long salesPersonId,
			String startDate, String endDate) {

		log.info("Get Ticket Size Analysis SalesPersonWise between startDate and endDate");
		TargetVsActualResponse<ConversionData> response = new TargetVsActualResponse<>();

		try {

			LocalDate localStartDate = LocalDate.parse(startDate);
			LocalDate localEndDate = LocalDate.parse(endDate);

			long betweenDays = ChronoUnit.DAYS.between(localStartDate, localEndDate);

			if (betweenDays < 15) {
				// daywise
				response = getTicketSizeTargetVsActualByDay(salesPersonId, startDate, endDate);
			} else if (betweenDays >= 15 && betweenDays <= 60) {
				// week wise
				response = getTicketSizeTargetVsActualByWeek(salesPersonId, startDate, endDate);
			} else {
				// month wise
				response = getTicketSizeTargetVsActualByMonth(salesPersonId, startDate, endDate);
			}
		} catch (Exception e) {
			response.setStatus(HttpServletResponse.SC_CONFLICT);
			response.setError(EnumTypeForErrorCodes.SCUS819.name(), EnumTypeForErrorCodes.SCUS819.errorMsg());
			response.setMessage(EnumTypeForErrorCodes.SCUS819.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}
		return response;
	}

	public TargetVsActualResponse<ConversionData> getTicketSizeTargetVsActualByMonth(Long salesPersonId,
			String startDate, String endDate) {
		log.info("Get Ticket Size Analysis SalesPersonWise By monthwise");
		TargetVsActualResponse<ConversionData> response = new TargetVsActualResponse<>();

		EmployeeConversionTgtvsActual employeeConversion = new EmployeeConversionTgtvsActual();

		String empCode = "";
		String empName = "";
		List<Double> targetGoldValue = new ArrayList<>();
		List<Double> targetDiamondValue = new ArrayList<>();
		ConversionData conversiontargetVsActual = new ConversionData();
		try {

			LocalDate localStartDate = LocalDate.parse(startDate);
			LocalDate localEndDate = LocalDate.parse(endDate);

			String date1 = localStartDate.getMonth() + "-" + localStartDate.getYear();
			String date2 = localEndDate.getMonth() + "-" + localEndDate.getYear();

			List<String> timeline = new ArrayList<>();

			List<String> datesList = getDays(date1, date2);
			List<EmployeeConversionTgtvsActual> employeeConversionList = new ArrayList<>();

			List<Double> actualGoldValue = new ArrayList<>();
			List<Double> actualDiamondValue = new ArrayList<>();

			for (int i = 0; i < datesList.size(); i++) {

				Collection<Sales> empActualList = null;
				Collection<EmpDailyActuals> empGoldDailyActualList = null;
				Collection<EmpDailyActuals> empDiamondDailyActualList = null;
				Integer totalSaleReturnGoldWalkins = 0;
				Integer totalSaleReturnDiamondWalkins = 0;
				Collection<EmployeeItemMonthlyTarget> monthlyTarget = null;

				long noOfDaysBetween = 0l;

				if (i == 0) {

					if (date1.equals(date2)) {

						empActualList = salesRepo.findSalesByStartDateAndEndDateAndEmpId(startDate, endDate,
								salesPersonId);
						empGoldDailyActualList = empDailyActualsRepo
								.findPrefferedGoldWalkinsByStartDateAndEndDate(salesPersonId, startDate, endDate);
						empDiamondDailyActualList = empDailyActualsRepo
								.findPrefferedDiamondWalkinsByStartDateAndEndDate(salesPersonId, startDate, endDate);
						monthlyTarget = empItemMonthlyTargetRepo.findByTgtMonthAndEmp(datesList.get(i), salesPersonId);
						noOfDaysBetween = ChronoUnit.DAYS.between(localStartDate, localEndDate) + 1;

					} else {

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
						String lastDay1 = datesList.get(i).substring(4, 8) + "-" + m + "-" + lastDay;
						LocalDate day = LocalDate.parse(lastDay1);
						empActualList = salesRepo.findSalesByStartDateAndEndDateAndEmpId(startDate, lastDay1,
								salesPersonId);
						empGoldDailyActualList = empDailyActualsRepo
								.findPrefferedGoldWalkinsByStartDateAndEndDate(salesPersonId, startDate, lastDay1);
						empDiamondDailyActualList = empDailyActualsRepo
								.findPrefferedDiamondWalkinsByStartDateAndEndDate(salesPersonId, startDate, lastDay1);
						monthlyTarget = empItemMonthlyTargetRepo.findByTgtMonthAndEmp(datesList.get(i), salesPersonId);
						noOfDaysBetween = ChronoUnit.DAYS.between(localStartDate, day) + 1;
					}

				} else if (i < datesList.size() - 1) {
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
					String lastDay1 = datesList.get(i).substring(4, 8) + "-" + m + "-" + lastDay;
					String firstDay1 = datesList.get(i).substring(4, 8) + "-" + m + "-" + "01";
					LocalDate day = LocalDate.parse(lastDay1);
					LocalDate firstday = LocalDate.parse(firstDay1);
					empActualList = salesRepo.findSalesByStartDateAndEndDateAndEmpId(firstDay1, lastDay1,
							salesPersonId);
					empGoldDailyActualList = empDailyActualsRepo
							.findPrefferedGoldWalkinsByStartDateAndEndDate(salesPersonId, firstDay1, lastDay1);
					empDiamondDailyActualList = empDailyActualsRepo
							.findPrefferedDiamondWalkinsByStartDateAndEndDate(salesPersonId, firstDay1, lastDay1);
					monthlyTarget = empItemMonthlyTargetRepo.findByTgtMonthAndEmp(datesList.get(i), salesPersonId);
					noOfDaysBetween = ChronoUnit.DAYS.between(firstday, day) + 1;
				} else {
					Date date10 = new SimpleDateFormat(monthYearFormat).parse(datesList.get(i));
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
					empGoldDailyActualList = empDailyActualsRepo
							.findPrefferedGoldWalkinsByStartDateAndEndDate(salesPersonId, firstDay1, endDate);
					empDiamondDailyActualList = empDailyActualsRepo
							.findPrefferedDiamondWalkinsByStartDateAndEndDate(salesPersonId, firstDay1, endDate);
					monthlyTarget = empItemMonthlyTargetRepo.findByTgtMonthAndEmp(datesList.get(i), salesPersonId);
					noOfDaysBetween = ChronoUnit.DAYS.between(firstday, localEndDate) + 1;
				}

				timeline.add(datesList.get(i));
				if (!monthlyTarget.isEmpty()) {
					Double monthlyTargetGoldValue = 0.0;
					Double monthlyTargetDiamondValue = 0.0;
					for (EmployeeItemMonthlyTarget tgt : monthlyTarget) {
						Date date10 = new SimpleDateFormat(monthYearFormat).parse(tgt.getTgtMonth());
						Calendar cal = Calendar.getInstance();
						cal.setTime(date10);
						empCode = tgt.getEmp().getEmpCode();
						empName = tgt.getEmp().getEmpName();
						int lastDate = cal.getActualMaximum(Calendar.DATE);
						if (tgt.getItemType().equals("Gold")) {
							monthlyTargetGoldValue = monthlyTargetGoldValue
									+ (tgt.getTicketSize() / lastDate) * noOfDaysBetween;
						} else if (tgt.getItemType().equals(diamond)) {
							monthlyTargetDiamondValue = monthlyTargetDiamondValue
									+ (tgt.getTicketSize() / lastDate) * noOfDaysBetween;
						}
					}
					if (monthlyTargetGoldValue.isNaN() || monthlyTargetGoldValue.isInfinite()) {
						targetGoldValue.add(0.0);
					} else {
						targetGoldValue.add(monthlyTargetGoldValue);
					}
					if (monthlyTargetDiamondValue.isNaN() || monthlyTargetDiamondValue.isInfinite()) {
						targetDiamondValue.add(0.0);
					} else {
						targetDiamondValue.add(monthlyTargetDiamondValue);
					}

				} else {
					targetGoldValue.add(0.0);
					targetDiamondValue.add(0.0);
				}
				Double monthlyActualGoldValue = 0.0;
				Double monthlyActualDiamondValue = 0.0;
				Double salesReturnGoldValue = 0.0;
				Double salesReturnDiamondValue = 0.0;
				if (!empActualList.isEmpty()) {

					for (Sales sale : empActualList) {

						if (sale.getItemType().equals("Gold")) {
							monthlyActualGoldValue = monthlyActualGoldValue + sale.getTotalSoldAmount();

						} else if (sale.getItemType().equals(diamond)) {
							monthlyActualDiamondValue = monthlyActualDiamondValue + sale.getTotalSoldAmount();
						}
						SalesReturns salesReturns = salesReturnsRepo.findBySales(sale);
						if (salesReturns != null) {

							if (sale.getItemType().equals("Gold")) {

								salesReturnGoldValue = salesReturnGoldValue + salesReturns.getAmountPayable();
								if (sale.getTotalSoldAmount().equals(salesReturns.getAmountPayable())) {
									totalSaleReturnGoldWalkins = totalSaleReturnGoldWalkins + 1;
								}
								monthlyActualGoldValue -= salesReturnGoldValue;

							} else if (sale.getItemType().equals(diamond)) {

								salesReturnDiamondValue = salesReturnDiamondValue + salesReturns.getAmountPayable();
								if (sale.getTotalSoldAmount().equals(salesReturns.getAmountPayable())) {
									totalSaleReturnDiamondWalkins = totalSaleReturnDiamondWalkins + 1;
								}
								monthlyActualDiamondValue -= salesReturnDiamondValue;
							}
						}
					}
					if (monthlyActualGoldValue.isNaN() || monthlyActualGoldValue.isInfinite()
							|| monthlyActualGoldValue == 0) {
						actualGoldValue.add(0.0);
					} else {
						actualGoldValue.add((monthlyActualGoldValue / 100000)
								/ (empGoldDailyActualList.size() - totalSaleReturnGoldWalkins));
					}
					if (monthlyActualDiamondValue.isNaN() || monthlyActualDiamondValue.isInfinite()
							|| monthlyActualDiamondValue == 0) {
						actualDiamondValue.add(0.0);
					} else {
						actualDiamondValue.add((monthlyActualDiamondValue / 100000)
								/ (empDiamondDailyActualList.size() - totalSaleReturnDiamondWalkins));
					}
				} else {
					actualDiamondValue.add(0.0);
					actualGoldValue.add(0.0);
				}
			}
			employeeConversion.setEmpCode(empCode);
			employeeConversion.setName(empName);
			ConversionActuals conversionTarget = new ConversionActuals();
			ConversionActuals conversionActuals = new ConversionActuals();
			conversionTarget.setDiamond(targetDiamondValue.toArray(new Double[targetDiamondValue.size()]));
			conversionTarget.setGold(targetGoldValue.toArray(new Double[targetGoldValue.size()]));
			conversionActuals.setDiamond(actualDiamondValue.toArray(new Double[actualDiamondValue.size()]));
			conversionActuals.setGold(actualGoldValue.toArray(new Double[actualGoldValue.size()]));
			employeeConversion.setTargets(conversionTarget);
			employeeConversion.setActuals(conversionActuals);
			employeeConversionList.add(employeeConversion);
			conversiontargetVsActual.setTimeLine(timeline.toArray(new String[timeline.size()]));
			conversiontargetVsActual.setEmployee(
					employeeConversionList.toArray(new EmployeeConversionTgtvsActual[employeeConversionList.size()]));
			response.setStatus(HttpServletResponse.SC_OK);
			response.setMessage(successMessage);
			response.setFromDate(startDate);
			response.setToDate(endDate);
			response.setData(conversiontargetVsActual);
		} catch (Exception e) {
			response.setStatus(HttpServletResponse.SC_CONFLICT);
			response.setError(EnumTypeForErrorCodes.SCUS819.name(), EnumTypeForErrorCodes.SCUS819.errorMsg());
			response.setMessage(EnumTypeForErrorCodes.SCUS819.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}
		return response;
	}

	public TargetVsActualResponse<ConversionData> getTicketSizeTargetVsActualByWeek(Long salesPersonId,
			String startDate, String endDate) {

		log.info("Get Ticket Size Analysis SalesPersonWise By weekwise");

		TargetVsActualResponse<ConversionData> response = new TargetVsActualResponse<>();

		ConversionData conversiontargetVsActual = new ConversionData();
		EmployeeConversionTgtvsActual employeeConversion = new EmployeeConversionTgtvsActual();
		String empCode = "";
		String empName = "";

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
			List<String> timeline = new ArrayList<>();

			List<EmployeeConversionTgtvsActual> employeeConversionList = new ArrayList<>();

			List<Double> targetGoldValue = new ArrayList<>();
			List<Double> targetDiamondValue = new ArrayList<>();

			List<Double> actualGoldValue = new ArrayList<>();
			List<Double> actualDiamondValue = new ArrayList<>();

			Collection<EmployeeItemMonthlyTarget> monthlyTarget = null;
			Collection<Sales> empActualList = null;
			Collection<EmpDailyActuals> empGoldDailyActualList = null;
			Collection<EmpDailyActuals> empDiamondDailyActualList = null;

			long noOfDaysBetween = 0l;

			for (Dates dateValue : weeksList) {
				LocalDate sample1 = dateValue.getStartDate();
				LocalDate sample2 = dateValue.getEndDate();
				String samp = dateValue.getStartDate().toString();
				String samp1 = dateValue.getEndDate().toString();
				String date1 = sample1.getMonth() + "-" + sample1.getYear();
				String date2 = sample2.getMonth() + "-" + sample2.getYear();

				DateFormat formater = new SimpleDateFormat(monthYearFormat);

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
					Sample sample = new Sample();
					Date date10 = new SimpleDateFormat(monthYearFormat).parse(datesList.get(0));
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
					empActualList = salesRepo.findSalesByStartDateAndEndDateAndEmpId(samp, samp1, salesPersonId);
					empGoldDailyActualList = empDailyActualsRepo
							.findPrefferedGoldWalkinsByStartDateAndEndDate(salesPersonId, samp, samp1);
					empDiamondDailyActualList = empDailyActualsRepo
							.findPrefferedDiamondWalkinsByStartDateAndEndDate(salesPersonId, samp, samp1);
					monthlyTarget = empItemMonthlyTargetRepo.findByTgtMonthAndEmp(datesList.get(0), salesPersonId);
					noOfDaysBetween = ChronoUnit.DAYS.between(dateValue.getStartDate(), dateValue.getEndDate()) + 1;
					sample.setEmployees(monthlyTarget);
					sample.setNumberOfDays(noOfDaysBetween);
					sample.setEndDateTimeline(dateValue.getEndDate().toString());
					sample.setSale(empActualList);
					sample.setStartDateTimeline(dateValue.getStartDate().toString());
					sampList.add(sample);
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
						String firstDay1 = datesList.get(i).substring(4, 8) + "-" + m + "-" + "01";
						LocalDate day = LocalDate.parse(firstDay1);
						String lastDay1 = datesList.get(i).substring(4, 8) + "-" + m + "-" + lastDay;
						LocalDate day2 = LocalDate.parse(lastDay1);

						if (i == 0) {
							Sample sample = new Sample();
							empActualList = salesRepo.findSalesByStartDateAndEndDateAndEmpId(
									dateValue.getStartDate().toString(), lastDay1, salesPersonId);
							empGoldDailyActualList = empDailyActualsRepo.findPrefferedGoldWalkinsByStartDateAndEndDate(
									salesPersonId, dateValue.getStartDate().toString(), lastDay1);
							empDiamondDailyActualList = empDailyActualsRepo
									.findPrefferedDiamondWalkinsByStartDateAndEndDate(salesPersonId,
											dateValue.getStartDate().toString(), lastDay1);
							noOfDaysBetween = ChronoUnit.DAYS.between(dateValue.getStartDate(), day2) + 1;
							monthlyTarget = empItemMonthlyTargetRepo.findByTgtMonthAndEmp(datesList.get(i),
									salesPersonId);

							sample.setEmployees(monthlyTarget);
							sample.setNumberOfDays(noOfDaysBetween);
							sample.setEndDateTimeline(lastDay1);
							sample.setSale(empActualList);
							sample.setStartDateTimeline(dateValue.getStartDate().toString());
							sampList.add(sample);
						} else {
							Sample sample = new Sample();
							empActualList = salesRepo.findSalesByStartDateAndEndDateAndEmpId(firstDay1,
									dateValue.getEndDate().toString(), salesPersonId);
							empGoldDailyActualList = empDailyActualsRepo.findPrefferedGoldWalkinsByStartDateAndEndDate(
									salesPersonId, firstDay1, dateValue.getEndDate().toString());
							empDiamondDailyActualList = empDailyActualsRepo
									.findPrefferedDiamondWalkinsByStartDateAndEndDate(salesPersonId, firstDay1,
											dateValue.getEndDate().toString());
							noOfDaysBetween = ChronoUnit.DAYS.between(day, dateValue.getEndDate()) + 1;
							monthlyTarget = empItemMonthlyTargetRepo.findByTgtMonthAndEmp(datesList.get(i),
									salesPersonId);
							sample.setEmployees(monthlyTarget);
							sample.setNumberOfDays(noOfDaysBetween);
							sample.setEndDateTimeline(dateValue.getEndDate().toString());
							sample.setSale(empActualList);
							sample.setStartDateTimeline(firstDay1);
							sampList.add(sample);
						}
					}
				}
				timeline.add(dateValue.getWeekNumber());
				Double monthlyTargetGoldValue = 0.0;
				Double monthlyTargetDiamondValue = 0.0;
				for (Sample sample : sampList) {
					if (!sample.getEmployees().isEmpty()) {

						for (EmployeeItemMonthlyTarget tgt : sample.getEmployees()) {
							Date date10 = new SimpleDateFormat(monthYearFormat).parse(tgt.getTgtMonth());
							Calendar cal = Calendar.getInstance();
							cal.setTime(date10);
							int lastDate = cal.getActualMaximum(Calendar.DATE);
							empCode = tgt.getEmp().getEmpCode();
							empName = tgt.getEmp().getEmpName();
							if (tgt.getItemType().equals("Gold")) {
								monthlyTargetGoldValue = monthlyTargetGoldValue
										+ (tgt.getTicketSize() / lastDate) * sample.getNumberOfDays();

							} else if (tgt.getItemType().equals(diamond)) {
								monthlyTargetDiamondValue = monthlyTargetDiamondValue
										+ (tgt.getTicketSize() / lastDate) * sample.getNumberOfDays();

							}
						}
					} else {
						monthlyTargetDiamondValue = 0.0;
						monthlyTargetGoldValue = 0.0;
					}
				}
				if (monthlyTargetGoldValue.isNaN() || monthlyTargetGoldValue.isInfinite()) {
					targetGoldValue.add(0.0);
				} else {
					targetGoldValue.add(monthlyTargetGoldValue);
				}
				if (monthlyTargetDiamondValue.isNaN() || monthlyTargetDiamondValue.isInfinite()) {
					targetDiamondValue.add(0.0);
				} else {
					targetDiamondValue.add(monthlyTargetDiamondValue);
				}
				Double monthlyActualGoldValue = 0.0;
				Double monthlyActualDiamondValue = 0.0;
				Double salesReturnGoldValue = 0.0;
				Double salesReturnDiamondValue = 0.0;
				Integer totalSaleReturnGoldWalkins = 0;
				Integer totalSaleReturnDiamondWalkins = 0;
				for (Sample sample : sampList) {
					String startDateTimeline = sample.getStartDateTimeline();
					LocalDate localStartDateTimeline = LocalDate.parse(startDateTimeline);

					LocalDate nextDay = localStartDateTimeline.plusDays(1);
					startDateTimeline = nextDay.toString();

					if (!sample.getSale().isEmpty()) {

						for (Sales sale : sample.getSale()) {

							if (sale.getItemType().equals("Gold")) {
								monthlyActualGoldValue = monthlyActualGoldValue + sale.getTotalSoldAmount();

							} else if (sale.getItemType().equals(diamond)) {
								monthlyActualDiamondValue = monthlyActualDiamondValue + sale.getTotalSoldAmount();
							}
							SalesReturns salesReturns = salesReturnsRepo.findBySales(sale);

							if (salesReturns != null) {

								if (sale.getItemType().equals("Gold")) {

									salesReturnGoldValue = salesReturnGoldValue + salesReturns.getAmountPayable();
									if (sale.getTotalSoldAmount().equals(salesReturns.getAmountPayable())) {
										totalSaleReturnGoldWalkins = totalSaleReturnGoldWalkins + 1;
									}
									monthlyActualGoldValue -= salesReturnGoldValue;

								} else if (sale.getItemType().equals(diamond)) {

									salesReturnDiamondValue = salesReturnDiamondValue + salesReturns.getAmountPayable();

									if (sale.getTotalSoldAmount().equals(salesReturns.getAmountPayable())) {
										totalSaleReturnDiamondWalkins = totalSaleReturnDiamondWalkins + 1;
									}
									monthlyActualDiamondValue -= salesReturnDiamondValue;
								}
							}
						}
					} else {
						monthlyActualGoldValue = 0.0;
						monthlyActualDiamondValue = 0.0;
					}
				}
				if (monthlyActualGoldValue.isNaN() || monthlyActualGoldValue.isInfinite()
						|| monthlyActualGoldValue == 0.0) {
					actualGoldValue.add(0.0);
				} else {
					
					actualGoldValue.add(
							(monthlyActualGoldValue / 100000) / (empGoldDailyActualList.size() - totalSaleReturnGoldWalkins));
				}
				if (monthlyActualDiamondValue.isNaN() || monthlyActualDiamondValue.isInfinite()
						|| monthlyActualDiamondValue == 0.0) {
					actualDiamondValue.add(0.0);
				} else {
					actualDiamondValue.add((monthlyActualDiamondValue / 100000)
							/ (empDiamondDailyActualList.size() - totalSaleReturnDiamondWalkins));
				}
			}
			employeeConversion.setEmpCode(empCode);
			employeeConversion.setName(empName);
			ConversionActuals conversionTarget = new ConversionActuals();
			ConversionActuals conversionActuals = new ConversionActuals();
			conversionTarget.setDiamond(targetDiamondValue.toArray(new Double[targetDiamondValue.size()]));
			conversionTarget.setGold(targetGoldValue.toArray(new Double[targetGoldValue.size()]));
			conversionActuals.setDiamond(actualDiamondValue.toArray(new Double[actualDiamondValue.size()]));
			conversionActuals.setGold(actualGoldValue.toArray(new Double[actualGoldValue.size()]));
			employeeConversion.setTargets(conversionTarget);
			employeeConversion.setActuals(conversionActuals);
			employeeConversionList.add(employeeConversion);
			conversiontargetVsActual.setTimeLine(timeline.toArray(new String[timeline.size()]));
			conversiontargetVsActual.setEmployee(
					employeeConversionList.toArray(new EmployeeConversionTgtvsActual[employeeConversionList.size()]));
			response.setStatus(HttpServletResponse.SC_OK);
			response.setMessage(successMessage);
			response.setFromDate(startDate);
			response.setToDate(endDate);
			response.setData(conversiontargetVsActual);
		} catch (Exception e) {
			response.setStatus(HttpServletResponse.SC_CONFLICT);
			response.setError(EnumTypeForErrorCodes.SCUS819.name(), EnumTypeForErrorCodes.SCUS819.errorMsg());
			response.setMessage(EnumTypeForErrorCodes.SCUS819.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}
		return response;
	}

	public TargetVsActualResponse<ConversionData> getTicketSizeTargetVsActualByDay(Long salesPersonId, String startDate,
			String endDate) {

		log.info("Get Ticket Size Analysis SalesPersonWise By daywise");

		TargetVsActualResponse<ConversionData> response = new TargetVsActualResponse<>();

		ConversionData conversiontargetVsActual = new ConversionData();
		EmployeeConversionTgtvsActual employeeConversion = new EmployeeConversionTgtvsActual();
		String empCode = "";
		String empName = "";
		try {
			LocalDate localStartDate = LocalDate.parse(startDate);
			LocalDate localEndDate = LocalDate.parse(endDate);

			String date1 = localStartDate.getMonth() + "-" + localStartDate.getYear();
			String date2 = localEndDate.getMonth() + "-" + localEndDate.getYear();

			List<String> timeline = new ArrayList<>();

			List<EmployeeConversionTgtvsActual> employeeConversionList = new ArrayList<>();

			List<String> datesList = getDays(date1, date2);

			List<Double> targetGoldValue = new ArrayList<>();
			List<Double> targetDiamondValue = new ArrayList<>();

			List<Double> actualGoldValue = new ArrayList<>();
			List<Double> actualDiamondValue = new ArrayList<>();

			Collection<EmployeeItemMonthlyTarget> monthlyTarget = null;
			Collection<Sales> empActualList = null;

			long noOfDaysBetween = 0l;
			String startDateTimeline = null;
			String endDateTimeline = null;

			List<Sample> sampList = new ArrayList<>();

			if (datesList.size() == 1) {
				Sample samp = new Sample();
				empActualList = salesRepo.findSalesByStartDateAndEndDateAndEmpId(startDate, endDate, salesPersonId);
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
						Sample samp = new Sample();
						String lastDay1 = datesList.get(i).substring(4, 8) + "-" + m + "-" + lastDay;
						LocalDate day = LocalDate.parse(lastDay1);
						empActualList = salesRepo.findSalesByStartDateAndEndDateAndEmpId(startDate, lastDay1,
								salesPersonId);
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
						empActualList = salesRepo.findSalesByStartDateAndEndDateAndEmpId(firstDay1, endDate,
								salesPersonId);
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
					Double monthlyTargetGoldValue = 0.0;
					Double monthlyTargetDiamondValue = 0.0;
					if (!sample.getEmployees().isEmpty()) {
						for (EmployeeItemMonthlyTarget tgt : sample.getEmployees()) {
							Date date10 = new SimpleDateFormat(monthYearFormat).parse(tgt.getTgtMonth());
							Calendar cal = Calendar.getInstance();
							cal.setTime(date10);
							int lastDate = cal.getActualMaximum(Calendar.DATE);
							empCode = tgt.getEmp().getEmpCode();
							empName = tgt.getEmp().getEmpName();
							if (tgt.getItemType().equals("Gold")) {
								monthlyTargetGoldValue = monthlyTargetGoldValue + (tgt.getTicketSize() / lastDate);

							} else if (tgt.getItemType().equals(diamond)) {

								monthlyTargetDiamondValue = monthlyTargetDiamondValue
										+ (tgt.getTicketSize() / lastDate);
							}
						}
						if (monthlyTargetGoldValue.isNaN() || monthlyTargetGoldValue.isInfinite()) {
							targetGoldValue.add(0.0);
						} else {
							targetGoldValue.add(monthlyTargetGoldValue);
						}
						if (monthlyTargetDiamondValue.isNaN() || monthlyTargetDiamondValue.isInfinite()) {
							targetDiamondValue.add(0.0);
						} else {
							targetDiamondValue.add(monthlyTargetDiamondValue);
						}
					} else {
						targetGoldValue.add(0.0);
						targetDiamondValue.add(0.0);
					}
					LocalDate localStartDateTimeline = LocalDate.parse(startDateTimeline);
					final String DATE_FORMATTER = "dd-MM-yyyy";
					DateTimeFormatter formatter = DateTimeFormatter.ofPattern(DATE_FORMATTER);
					String formatDateTime = localStartDateTimeline.format(formatter);
					timeline.add(formatDateTime);
					Double monthlyActualGoldValue = 0.0;
					Double monthlyActualDiamondValue = 0.0;

					Double preferredGoldWalkins = 0.0;
					Double preferredDiamondWalkins = 0.0;

					Integer totalSaleReturnGoldWalkins = 0;
					Integer totalSaleReturnDiamondWalkins = 0;

					List<Sales> saleExists = salesRepo.findByTransactionDateAndEmp(startDateTimeline, salesPersonId);
					List<EmpDailyActuals> goldDailyActuals = empDailyActualsRepo.findActualsByEmpAndVisitDateAndItemTypeAndSale(salesPersonId,localStartDateTimeline,"Gold",1);
					List<EmpDailyActuals> diamondDailyActuals = empDailyActualsRepo.findActualsByEmpAndVisitDateAndItemTypeAndSale(salesPersonId,localStartDateTimeline,"Diamond",1);
					preferredGoldWalkins = (double) goldDailyActuals.size();
					preferredDiamondWalkins = (double) diamondDailyActuals.size();
					LocalDate nextDay = localStartDateTimeline.plusDays(1);
					startDateTimeline = nextDay.toString();
					if (!saleExists.isEmpty()) {
						Double salesReturnGoldValue = 0.0;
						Double salesReturnDiamondValue = 0.0;
						for (Sales sale : saleExists) {

							SalesReturns salesReturns = salesReturnsRepo.findBySales(sale);

							if (sale.getItemType().equals("Gold")) {
								monthlyActualGoldValue = monthlyActualGoldValue + sale.getTotalSoldAmount();

							} else if (sale.getItemType().equals(diamond)) {
								monthlyActualDiamondValue = monthlyActualDiamondValue + sale.getTotalSoldAmount();
							}
							if (salesReturns != null) {

								if (sale.getItemType().equals("Gold")) {

									salesReturnGoldValue = salesReturnGoldValue + salesReturns.getAmountPayable();
									if (sale.getTotalSoldAmount().equals(salesReturns.getAmountPayable())) {
										totalSaleReturnGoldWalkins = totalSaleReturnGoldWalkins + 1;
									}
									monthlyActualGoldValue -= salesReturnGoldValue;

								} else if (sale.getItemType().equals(diamond)) {

									salesReturnDiamondValue = salesReturnDiamondValue + salesReturns.getAmountPayable();
									if (sale.getTotalSoldAmount().equals(salesReturns.getAmountPayable())) {
										totalSaleReturnDiamondWalkins = totalSaleReturnDiamondWalkins + 1;
									}
									monthlyActualDiamondValue -= salesReturnDiamondValue;
								}
							}
						}
						if (monthlyActualGoldValue.isNaN() || monthlyActualGoldValue.isInfinite()
								|| monthlyActualGoldValue == 0) {
							actualGoldValue.add(0.0);
						} else {
							actualGoldValue.add((monthlyActualGoldValue / 100000)
									/ (preferredGoldWalkins - totalSaleReturnGoldWalkins));
						}
						if (monthlyActualDiamondValue.isNaN() || monthlyActualDiamondValue.isInfinite()
								|| monthlyActualDiamondValue == 0) {
							actualDiamondValue.add(0.0);
						} else {
							actualDiamondValue.add((monthlyActualDiamondValue / 100000)
									/ (preferredDiamondWalkins - totalSaleReturnDiamondWalkins));
						}
					} else {
						actualGoldValue.add(0.0);
						actualDiamondValue.add(0.0);
					}
				}
			}
			employeeConversion.setEmpCode(empCode);
			employeeConversion.setName(empName);
			ConversionActuals conversionTarget = new ConversionActuals();
			ConversionActuals conversionActuals = new ConversionActuals();
			conversionTarget.setDiamond(targetDiamondValue.toArray(new Double[targetDiamondValue.size()]));
			conversionTarget.setGold(targetGoldValue.toArray(new Double[targetGoldValue.size()]));
			conversionActuals.setDiamond(actualDiamondValue.toArray(new Double[actualDiamondValue.size()]));
			conversionActuals.setGold(actualGoldValue.toArray(new Double[actualGoldValue.size()]));
			employeeConversion.setTargets(conversionTarget);
			employeeConversion.setActuals(conversionActuals);
			employeeConversionList.add(employeeConversion);
			conversiontargetVsActual.setTimeLine(timeline.toArray(new String[timeline.size()]));
			conversiontargetVsActual.setEmployee(
					employeeConversionList.toArray(new EmployeeConversionTgtvsActual[employeeConversionList.size()]));
			response.setStatus(HttpServletResponse.SC_OK);
			response.setMessage(successMessage);
			response.setFromDate(startDate);
			response.setToDate(endDate);
			response.setData(conversiontargetVsActual);
		} catch (Exception e) {
			response.setStatus(HttpServletResponse.SC_CONFLICT);
			response.setError(EnumTypeForErrorCodes.SCUS819.name(), EnumTypeForErrorCodes.SCUS819.errorMsg());
			response.setMessage(EnumTypeForErrorCodes.SCUS819.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}
		return response;
	}
}

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
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import com.mss.pmj.pmjmis.common.EnumTypeForErrorCodes;
import com.mss.pmj.pmjmis.common.Utils;
import com.mss.pmj.pmjmis.domain.Channel;
import com.mss.pmj.pmjmis.domain.Location;
import com.mss.pmj.pmjmis.domain.Manager;
import com.mss.pmj.pmjmis.domain.Role;
import com.mss.pmj.pmjmis.domain.Sales;
import com.mss.pmj.pmjmis.domain.SalesReturns;
import com.mss.pmj.pmjmis.domain.Team;
import com.mss.pmj.pmjmis.domain.TeamItemMonthlyTarget;
import com.mss.pmj.pmjmis.domain.User;
import com.mss.pmj.pmjmis.repos.ChannelRepository;
import com.mss.pmj.pmjmis.repos.LocationRepository;
import com.mss.pmj.pmjmis.repos.ManagerRepository;
import com.mss.pmj.pmjmis.repos.SalesRepository;
import com.mss.pmj.pmjmis.repos.SalesReturnsRepository;
import com.mss.pmj.pmjmis.repos.TeamItemMonthlyTargetRepository;
import com.mss.pmj.pmjmis.repos.TeamRepository;
import com.mss.pmj.pmjmis.repos.UserRepository;
import com.mss.pmj.pmjmis.response.D2HTgtVsActuals;
import com.mss.pmj.pmjmis.response.D2HTgtVsActualsDetails;
import com.mss.pmj.pmjmis.response.ItemQuantityValue;
import com.mss.pmj.pmjmis.response.Quantity;
import com.mss.pmj.pmjmis.response.QuantityList;
import com.mss.pmj.pmjmis.response.QuantityValue;
import com.mss.pmj.pmjmis.response.TargetVsActualResponse;
import com.mss.pmj.pmjmis.response.Value;
import com.mss.pmj.pmjmis.response.ValueList;
import com.mss.pmj.pmjmis.svcs.PerformanceAnalysisLocationStateD2HService;

@Service
public class PerformanceAnalysisLocationStateD2HServiceImpl implements PerformanceAnalysisLocationStateD2HService {

	private static Logger log = LoggerFactory.getLogger(PerformanceAnalysisLocationStateD2HServiceImpl.class);

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
	TeamItemMonthlyTargetRepository teamItemMonthlyTargetRepo;

	@Autowired
	private TeamRepository teamRepo;

	@Autowired
	private UserRepository userRepo;

	@Autowired
	private ManagerRepository managerRepo;

	private static final String DATEFORMAT = "MMM-yyyy";

	private static final String GOLD = "Gold";

	private static final String DIAMOND = "Diamond";

	@Override
	public TargetVsActualResponse<D2HTgtVsActuals> getLocationD2HTargetVsActual(String startDate, String endDate) {

		log.info("get Locations target vs actual sales groupby between startDate and endDate");

		TargetVsActualResponse<D2HTgtVsActuals> response = new TargetVsActualResponse<>();

		D2HTgtVsActualsDetails d2HTgtVsActualsDetails = new D2HTgtVsActualsDetails();

		D2HTgtVsActuals d2HTgtVsActuals = new D2HTgtVsActuals();

		List<String> listOfState = new ArrayList<>();

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

			if (role.getName().equals("ADMIN")) {

				d2hStates = locationRepo.groupByStateAndChannel(channel);
			} else {

				if (user.getEmpCode() != null) {

					Manager manager = managerRepo.findByEmpId(user.getEmpCode());

					d2hStates = locationRepo.groupByManagerAndChannel(manager.getId(), channel);

				}

			}

			for (Location d2h : d2hStates) {

				listOfState.add(d2h.getState());

			}

			D2HTgtVsActuals actual = performanceAnalysisD2HActual(d2hStates, startDate, endDate, channel, user, role);

			D2HTgtVsActuals target = performanceAnalysisD2HTargets(d2hStates, startDate, endDate, channel, user, role);

			d2HTgtVsActualsDetails.setState(listOfState);

			d2HTgtVsActualsDetails.setActuals(actual.getDetails().getActuals());

			d2HTgtVsActuals.setActuals(actual.getActuals());

			d2HTgtVsActualsDetails.setTarget(target.getDetails().getTarget());

			d2HTgtVsActuals.setTarget(target.getTarget());

			d2HTgtVsActuals.setDetails(d2HTgtVsActualsDetails);

			response.setStatus(HttpServletResponse.SC_OK);
			response.setMessage("successful");
			response.setFromDate(startDate);
			response.setToDate(endDate);
			response.setData(d2HTgtVsActuals);

		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS104.name(), EnumTypeForErrorCodes.SCUS104.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}

		return response;
	}

	public D2HTgtVsActuals performanceAnalysisD2HActual(List<Location> d2hStates, String startDate, String endDate,
			Channel channel, User user, Role role) {

		log.info("get Location target vs actual sales groupby between startDate and endDate");

		D2HTgtVsActuals data = new D2HTgtVsActuals();

		D2HTgtVsActualsDetails d2HTgtVsActualsDetails = new D2HTgtVsActualsDetails();

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

			for (Location d2h : d2hStates) {

				List<Location> d2hByState = new ArrayList<>();

				if (role.getName().equals("ADMIN")) {

					d2hByState = locationRepo.findByStateAndChannel(d2h.getState(), channel);
				} else {

					if (user.getEmpCode() != null) {

						Manager manager = managerRepo.findByEmpId(user.getEmpCode());

						d2hByState = locationRepo.groupByStateAndManagerAndChannel(d2h.getState(), manager.getId(),
								channel);

					}

				}

				Double monthlyActualGoldQuantity = 0.0;
				Double monthlyActualGoldValue = 0.0;
				Double monthlyActualDiamondQuantity = 0.0;
				Double monthlyActualDiamondValue = 0.0;

				Double salesReturnGoldQuantity = 0.0;
				Double salesReturnGoldValue = 0.0;
				Double salesReturnDiamondQuantity = 0.0;
				Double salesReturnDiamondValue = 0.0;

				for (Location eachD2h : d2hByState) {

					List<Sales> salesDataList = salesRepo.findByStartDateAndEndDateAndLocationName(startDate, endDate,
							eachD2h.getId());

					for (Sales sale : salesDataList) {

						if (sale.getItemType().equalsIgnoreCase(GOLD)) {

							goldQuantityActual = goldQuantityActual + sale.getGrossWeight();
							goldValueActual = goldValueActual + sale.getTotalSoldAmount();

							monthlyActualGoldQuantity = monthlyActualGoldQuantity + sale.getGrossWeight();
							monthlyActualGoldValue = monthlyActualGoldValue + sale.getTotalSoldAmount();

						} else if (sale.getItemType().equalsIgnoreCase(DIAMOND)) {

							diamondQuantityActual = diamondQuantityActual + sale.getDiamondWeight();

							diamondValueActual = diamondValueActual + sale.getTotalSoldAmount();

							monthlyActualDiamondQuantity = monthlyActualDiamondQuantity + sale.getDiamondWeight();

							monthlyActualDiamondValue = monthlyActualDiamondValue + sale.getTotalSoldAmount();

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

				}
				actualDiamondQuantity.add(monthlyActualDiamondQuantity - salesReturnDiamondQuantity);
				actualDiamondValue.add((monthlyActualDiamondValue - salesReturnDiamondValue) / 100000);
				actualGoldQuantity.add((monthlyActualGoldQuantity - salesReturnGoldQuantity) / 1000);
				actualGoldValue.add((monthlyActualGoldValue - salesReturnGoldValue) / 100000);

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

				d2HTgtVsActualsDetails.setActuals(actualQuantityValue);

				data.setDetails(d2HTgtVsActualsDetails);

			}

		} catch (Exception e) {
			log.error("getting errors", e);
		}
		return data;

	}

	public D2HTgtVsActuals performanceAnalysisD2HTargets(List<Location> d2hStates, String startDate, String endDate,
			Channel channel, User user, Role role) {

		log.info("get Location target vs actual sales groupby between startDate and endDate");

		D2HTgtVsActuals data = new D2HTgtVsActuals();

		D2HTgtVsActualsDetails d2HTgtVsActualsDetails = new D2HTgtVsActualsDetails();

		Double tgtDiaquantity = 0.0;
		Double tgtGoldQuantity = 0.0;
		Double tgtDiaValue = 0.0;
		Double tgtGoldValue = 0.0;

		try {

			LocalDate localStartDate = LocalDate.parse(startDate);
			LocalDate localEndDate = LocalDate.parse(endDate);

			String date1 = localStartDate.getMonth() + "-" + localStartDate.getYear();
			String date2 = localEndDate.getMonth() + "-" + localEndDate.getYear();

			DateFormat formater = new SimpleDateFormat(DATEFORMAT);

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

			for (Location d2h : d2hStates) {

				Double monthlyTargetGoldQuantity = 0.0;
				Double monthlyTargetGoldValue = 0.0;
				Double monthlyTargetDiamondQuantity = 0.0;
				Double monthlyTargetDiamondValue = 0.0;

				List<Location> d2hByState = new ArrayList<>();

				if (role.getName().equals("ADMIN")) {

					d2hByState = locationRepo.findByStateAndChannel(d2h.getState(), channel);
				} else {

					if (user.getEmpCode() != null) {

						Manager manager = managerRepo.findByEmpId(user.getEmpCode());

						d2hByState = locationRepo.groupByStateAndManagerAndChannel(d2h.getState(), manager.getId(),
								channel);

					}

				}
				for (Location eachD2h : d2hByState) {

					List<Team> d2hTeams = teamRepo.findByLocation(eachD2h);

					for (Team eachTeam : d2hTeams) {

						for (int i = 0; i < datesList.size(); i++) {

							Collection<TeamItemMonthlyTarget> monthlyTargetForD2H = null;

							long noOfDaysBetween = 0l;

							if (i == 0) {

								if (date1.equals(date2)) {

									String[] splitted = datesList.get(0).split("-");
									monthlyTargetForD2H = teamItemMonthlyTargetRepo.findByTeamAndMonthAndYear(eachTeam,
											splitted[0], splitted[1]);
									noOfDaysBetween = ChronoUnit.DAYS.between(localStartDate, localEndDate) + 1;

								} else {
									Date date10 = new SimpleDateFormat(DATEFORMAT).parse(datesList.get(i));
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

									String[] splitted = datesList.get(i).split("-");
									monthlyTargetForD2H = teamItemMonthlyTargetRepo.findByTeamAndMonthAndYear(eachTeam,
											splitted[0], splitted[1]);
									noOfDaysBetween = ChronoUnit.DAYS.between(localStartDate, day) + 1;
								}

							} else if (i < datesList.size() - 1) {
								Date date10 = new SimpleDateFormat(DATEFORMAT).parse(datesList.get(i));
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
								String[] splitted = datesList.get(i).split("-");
								monthlyTargetForD2H = teamItemMonthlyTargetRepo.findByTeamAndMonthAndYear(eachTeam,
										splitted[0], splitted[1]);
								noOfDaysBetween = ChronoUnit.DAYS.between(firstday, day) + 1;
							} else {
								Date date10 = new SimpleDateFormat(DATEFORMAT).parse(datesList.get(i));
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

								String[] splitted = datesList.get(i).split("-");

								monthlyTargetForD2H = teamItemMonthlyTargetRepo.findByTeamAndMonthAndYear(eachTeam,
										splitted[0], splitted[1]);
								noOfDaysBetween = ChronoUnit.DAYS.between(firstday, localEndDate) + 1;
							}

							for (TeamItemMonthlyTarget teamMonthlyTarget : monthlyTargetForD2H) {

								Date date10 = new SimpleDateFormat("MMMM-yyyy")
										.parse(teamMonthlyTarget.getMonth() + "-" + teamMonthlyTarget.getYear());

								Calendar cal = Calendar.getInstance();
								cal.setTime(date10);

								int lastDate = cal.getActualMaximum(Calendar.DATE);

								if (teamMonthlyTarget.getItemType().equalsIgnoreCase(GOLD)) {
									monthlyTargetGoldQuantity = monthlyTargetGoldQuantity
											+ (teamMonthlyTarget.getQuantity() / lastDate) * noOfDaysBetween;
									monthlyTargetGoldValue = monthlyTargetGoldValue
											+ (teamMonthlyTarget.getValue() / lastDate) * noOfDaysBetween;
									tgtGoldQuantity = tgtGoldQuantity
											+ (teamMonthlyTarget.getQuantity() / lastDate) * noOfDaysBetween;
									tgtGoldValue = tgtGoldValue
											+ (teamMonthlyTarget.getValue() / lastDate) * noOfDaysBetween;

								} else if (teamMonthlyTarget.getItemType().equalsIgnoreCase(DIAMOND)) {

									monthlyTargetDiamondQuantity = monthlyTargetDiamondQuantity
											+ (teamMonthlyTarget.getQuantity() / lastDate) * noOfDaysBetween;

									monthlyTargetDiamondValue = monthlyTargetDiamondValue
											+ (teamMonthlyTarget.getValue() / lastDate) * noOfDaysBetween;

									tgtDiaquantity = tgtDiaquantity
											+ (teamMonthlyTarget.getQuantity() / lastDate) * noOfDaysBetween;
									tgtDiaValue = tgtDiaValue
											+ (teamMonthlyTarget.getValue() / lastDate) * noOfDaysBetween;

								}

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

			d2HTgtVsActualsDetails.setTarget(targetdatalist);

			data.setTarget(targets);

			data.setDetails(d2HTgtVsActualsDetails);

		} catch (Exception e) {
			log.error("getting errors", e);
		}

		return data;

	}

}

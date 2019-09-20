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

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.RestController;

import com.mss.pmj.pmjmis.common.EnumTypeForErrorCodes;
import com.mss.pmj.pmjmis.common.Utils;
import com.mss.pmj.pmjmis.domain.Channel;
import com.mss.pmj.pmjmis.domain.EmployeeItemMonthlyTarget;
import com.mss.pmj.pmjmis.domain.Location;
import com.mss.pmj.pmjmis.domain.Manager;
import com.mss.pmj.pmjmis.domain.Role;
import com.mss.pmj.pmjmis.domain.Sales;
import com.mss.pmj.pmjmis.domain.SalesReturns;
import com.mss.pmj.pmjmis.domain.TeamItemMonthlyTarget;
import com.mss.pmj.pmjmis.domain.User;
import com.mss.pmj.pmjmis.repos.ChannelRepository;
import com.mss.pmj.pmjmis.repos.EmployeeItemMonthlyTargetRepository;
import com.mss.pmj.pmjmis.repos.LocationRepository;
import com.mss.pmj.pmjmis.repos.ManagerRepository;
import com.mss.pmj.pmjmis.repos.SalesRepository;
import com.mss.pmj.pmjmis.repos.SalesReturnsRepository;
import com.mss.pmj.pmjmis.repos.TeamItemMonthlyTargetRepository;
import com.mss.pmj.pmjmis.repos.UserRepository;
import com.mss.pmj.pmjmis.response.Dates;
import com.mss.pmj.pmjmis.response.ItemQuantityValue;
import com.mss.pmj.pmjmis.response.PerformanceAnalysisAllChannelsDetails;
import com.mss.pmj.pmjmis.response.PerformanceAnalysisChannelWiseTgtVsActual;
import com.mss.pmj.pmjmis.response.Quantity;
import com.mss.pmj.pmjmis.response.QuantityList;
import com.mss.pmj.pmjmis.response.QuantityValue;
import com.mss.pmj.pmjmis.response.Sample;
import com.mss.pmj.pmjmis.response.Sample1;
import com.mss.pmj.pmjmis.response.TargetVsActualDetails;
import com.mss.pmj.pmjmis.response.TargetVsActualResponse;
import com.mss.pmj.pmjmis.response.TgtVsActual;
import com.mss.pmj.pmjmis.response.Value;
import com.mss.pmj.pmjmis.response.ValueList;
import com.mss.pmj.pmjmis.svcs.PerformanceAnalysisChannelWiseService;

@RestController
public class PerformanceAnalysisChannelWiseImpl implements PerformanceAnalysisChannelWiseService {

	private static final Logger log = LoggerFactory.getLogger(PerformanceAnalysisChannelWiseImpl.class);

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
	private SalesReturnsRepository salesReturnsRepo;

	@Autowired
	private UserRepository userRepo;

	@Autowired
	private ManagerRepository managerRepo;

	@Autowired
	private LocationRepository locationRepo;

// performance analysis for all channels 
	@Override
	public TargetVsActualResponse<PerformanceAnalysisChannelWiseTgtVsActual> performanceAnalysisForAllChannels(
			String startDate, String endDate) {

		log.info("performance Analysis For All Channels");
		TargetVsActualResponse<PerformanceAnalysisChannelWiseTgtVsActual> response = new TargetVsActualResponse<>();

		PerformanceAnalysisChannelWiseTgtVsActual performanceAnalysisChannelWise = new PerformanceAnalysisChannelWiseTgtVsActual();

		PerformanceAnalysisAllChannelsDetails targetVsActualDetails1 = new PerformanceAnalysisAllChannelsDetails();

		List<String> channelsList = new ArrayList<>();

		try {

			List<Channel> typesOfChannelList = channelRepo.findAll();

			for (Channel channel : typesOfChannelList) {

				channelsList.add(channel.getChannelName());

			}

			targetVsActualDetails1.setChannels(channelsList);
			PerformanceAnalysisChannelWiseTgtVsActual performanceAnalysisChannelWiseActualData = actualPerformanceAnalysisForAllChannels(
					typesOfChannelList, startDate, endDate).getData();

			performanceAnalysisChannelWise.setActuals(performanceAnalysisChannelWiseActualData.getActuals());

			targetVsActualDetails1.setActuals(performanceAnalysisChannelWiseActualData.getDetails().getActuals());

			PerformanceAnalysisChannelWiseTgtVsActual performanceAnalysisChannelWiseTargetData = targetPerformanceAnalysisForAllChannels(
					typesOfChannelList, startDate, endDate).getData();

			performanceAnalysisChannelWise.setTarget(performanceAnalysisChannelWiseTargetData.getTarget());

			targetVsActualDetails1.setTarget(performanceAnalysisChannelWiseTargetData.getDetails().getTarget());

			performanceAnalysisChannelWise.setDetails(targetVsActualDetails1);

			response.setData(performanceAnalysisChannelWise);

			response.setStatus(HttpServletResponse.SC_OK);
			response.setMessage("successful");
			response.setFromDate(startDate);
			response.setToDate(endDate);

		} catch (Exception e) {

			response.setError(EnumTypeForErrorCodes.SCUS801.name(), EnumTypeForErrorCodes.SCUS801.errorMsg());
			response.setMessage("Failed to get performance analysis channelwise");
			log.error(utils.toJson(response.getError()), e);

		}

		return response;
	}

// performance analysis actuals for all channels
	public TargetVsActualResponse<PerformanceAnalysisChannelWiseTgtVsActual> actualPerformanceAnalysisForAllChannels(
			List<Channel> typesOfChannelList, String startDate, String endDate)

	{
		log.info("actual Performance Analysis For All Channels");

		TargetVsActualResponse<PerformanceAnalysisChannelWiseTgtVsActual> response = new TargetVsActualResponse<>();

		PerformanceAnalysisAllChannelsDetails actualDetails = new PerformanceAnalysisAllChannelsDetails();

		PerformanceAnalysisChannelWiseTgtVsActual data = new PerformanceAnalysisChannelWiseTgtVsActual();

		QuantityValue actuals = new QuantityValue();

		Quantity totalQuantity = new Quantity();

		Value totalValue = new Value();

		ItemQuantityValue actualdatalist = new ItemQuantityValue();

		QuantityList actualQuantityData = new QuantityList();

		ValueList actualValueData = new ValueList();

		List<Double> actualGoldQuantityData = new ArrayList<>();
		List<Double> actualDiamondQuantityData = new ArrayList<>();
		List<Double> actualGoldValueData = new ArrayList<>();
		List<Double> actualDiamondValueData = new ArrayList<>();

		Double salesReturnGoldQuantityDetails = 0.0;
		Double salesReturnGoldValueDetails = 0.0;
		Double salesReturnDiamondQuantityDetails = 0.0;
		Double salesReturnDiamondValueDetails = 0.0;

		Double totalgoldvalue = 0.0;
		Double totaldiamondValue = 0.0;
		Double totalgoldQuantity = 0.0;
		Double totaldiamondQuantity = 0.0;

		try {

			for (Channel channel : typesOfChannelList) {
				Double goldvalue = 0.0;
				Double diamondValue = 0.0;
				Double goldQuantity = 0.0;
				Double diamondQuantity = 0.0;

				List<Location> locations = new ArrayList<>();
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

					locations = locationRepo.findByChannel(channel);
				} else {

					if (user.getEmpCode() != null) {

						Manager manager = managerRepo.findByEmpId(user.getEmpCode());

						locations = locationRepo.groupByChannelandManger(channel, manager.getId());

					}

				}

				Double salesReturnGoldQuantity = 0.0;
				Double salesReturnGoldValue = 0.0;
				Double salesReturnDiamondQuantity = 0.0;
				Double salesReturnDiamondValue = 0.0;

				for (Location location : locations) {

					List<Sales> salesDataList = salesRepo.findByStartDateAndEndDateAndLocationName(startDate, endDate,
							location.getId());
					if (!salesDataList.isEmpty())
						for (Sales saleData : salesDataList) {

							if (saleData.getItemType().equalsIgnoreCase("GOLD")) {

								goldvalue = goldvalue + saleData.getTotalSoldAmount();
								goldQuantity = goldQuantity + saleData.getGrossWeight();

								totalgoldvalue = totalgoldvalue + saleData.getTotalSoldAmount();
								totalgoldQuantity = totalgoldQuantity + saleData.getGrossWeight();

							} else if (saleData.getItemType().equalsIgnoreCase("DIAMOND")) {
								diamondValue = diamondValue + saleData.getTotalSoldAmount();

								diamondQuantity = diamondQuantity + saleData.getDiamondWeight();

								totaldiamondValue = totaldiamondValue + saleData.getTotalSoldAmount();

								totaldiamondQuantity = totaldiamondQuantity + saleData.getDiamondWeight();

							}
							SalesReturns salesReturns = salesReturnsRepo.findBySales(saleData);

							if (salesReturns != null) {

								if (saleData.getItemType().equalsIgnoreCase("Gold")) {
									salesReturnGoldQuantity += salesReturns.getGrossWeight();
									salesReturnGoldValue += salesReturns.getAmountPayable();

									salesReturnGoldQuantityDetails = salesReturnGoldQuantityDetails
											+ salesReturns.getGrossWeight();
									salesReturnGoldValueDetails = salesReturnGoldValueDetails
											+ salesReturns.getAmountPayable();

								} else if (saleData.getItemType().equalsIgnoreCase("Diamond")) {

									salesReturnDiamondQuantity += salesReturns.getDiamondWeight();
									salesReturnDiamondValue += salesReturns.getAmountPayable();
									salesReturnDiamondQuantityDetails = salesReturnDiamondQuantityDetails
											+ salesReturns.getDiamondWeight();
									salesReturnDiamondValueDetails = salesReturnDiamondValueDetails
											+ salesReturns.getAmountPayable();

								}
							}

						}
				}

				actualGoldQuantityData.add((goldQuantity - salesReturnGoldQuantity) / 1000);
				actualDiamondQuantityData.add((diamondQuantity - salesReturnDiamondQuantity));
				actualGoldValueData.add((goldvalue - salesReturnGoldValue) / 100000);
				actualDiamondValueData.add((diamondValue - salesReturnDiamondValue) / 100000);

			}

			actualQuantityData.setDiamond(actualDiamondQuantityData);
			actualQuantityData.setGold(actualGoldQuantityData);

			actualValueData.setDiamond(actualDiamondValueData);
			actualValueData.setGold(actualGoldValueData);

			actualdatalist.setQty(actualQuantityData);
			actualdatalist.setValue(actualValueData);

			totalQuantity.setDiamond(totaldiamondQuantity - salesReturnDiamondQuantityDetails);
			totalQuantity.setGold((totalgoldQuantity - salesReturnGoldQuantityDetails) / 1000);

			totalValue.setDiamond((totaldiamondValue - salesReturnDiamondValueDetails) / 100000);
			totalValue.setGold((totalgoldvalue - salesReturnGoldValueDetails) / 100000);

			actuals.setQty(totalQuantity);
			actuals.setValue(totalValue);

			actualDetails.setActuals(actualdatalist);

			data.setActuals(actuals);
			data.setDetails(actualDetails);
			response.setData(data);

		} catch (Exception e) {

			response.setError(EnumTypeForErrorCodes.SCUS802.name(), EnumTypeForErrorCodes.SCUS802.errorMsg());
			response.setMessage("Failed to get performance analysis channelwise actual");
			log.error(utils.toJson(response.getError()), e);

		}
		return response;

	}

// performance analysis targets for all channels

	public TargetVsActualResponse<PerformanceAnalysisChannelWiseTgtVsActual> targetPerformanceAnalysisForAllChannels(
			List<Channel> typesOfChannelList, String startDate, String endDate)

	{

		log.info("target Performance Analysis For All Channels");
		TargetVsActualResponse<PerformanceAnalysisChannelWiseTgtVsActual> response = new TargetVsActualResponse<>();

		PerformanceAnalysisChannelWiseTgtVsActual data = new PerformanceAnalysisChannelWiseTgtVsActual();

		PerformanceAnalysisAllChannelsDetails targetVsActualDetails = new PerformanceAnalysisAllChannelsDetails();

		QuantityValue targets = new QuantityValue();

		Quantity quantity = new Quantity();

		Value value = new Value();

		ItemQuantityValue targetdatalist = new ItemQuantityValue();

		QuantityList targetQuantityData = new QuantityList();

		ValueList targetValueData = new ValueList();

		List<Double> targetGoldQuantityData = new ArrayList<>();
		List<Double> targetDiamondQuantityData = new ArrayList<>();
		List<Double> targetGoldValueData = new ArrayList<>();
		List<Double> targetDiamondValueData = new ArrayList<>();

		Double tgtDiaquantity = 0.0;
		Double tgtGoldQuantity = 0.0;
		Double tgtDiaValue = 0.0;
		Double tgtGoldValue = 0.0;

		try {

			LocalDate localStartDate = LocalDate.parse(startDate);
			LocalDate localEndDate = LocalDate.parse(endDate);

			String date5 = localStartDate.getMonth() + "-" + localStartDate.getYear();
			String date6 = localEndDate.getMonth() + "-" + localEndDate.getYear();

			DateFormat formater = new SimpleDateFormat("MMM-yyyy");

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

			for (Channel channel : typesOfChannelList) {
				Double monthlyTargetGoldQuantity = 0.0;
				Double monthlyTargetGoldValue = 0.0;
				Double monthlyTargetDiamondQuantity = 0.0;
				Double monthlyTargetDiamondValue = 0.0;

				List<Location> locations = new ArrayList<>();

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

					locations = locationRepo.findByChannel(channel);
				} else {

					if (user.getEmpCode() != null) {

						Manager manager = managerRepo.findByEmpId(user.getEmpCode());

						locations = locationRepo.groupByChannelandManger(channel, manager.getId());

					}

				}
				// findByTgtMonthAndLocationId

				for (Location location : locations) {

					for (int i = 0; i < datesList.size(); i++) {

						Collection<EmployeeItemMonthlyTarget> monthlyTargetForSHW = null;

						Collection<TeamItemMonthlyTarget> monthlyTargetForD2H = null;

						long noOfDaysBetween = 0l;

						if (i == 0) {

							if (date5.equals(date6)) {
								if (channel.getId() == 1) {
									monthlyTargetForSHW = empItemMonthlyTargetRepo
											.findByTgtMonthAndLocationId(datesList.get(i), location.getId());

								} else if (channel.getId() == 2) {
									String[] splitted = datesList.get(i).split("-");
									monthlyTargetForD2H = teamItemMonthlyTargetRepo.findByMonthAndYearAndLocationId(
											splitted[0], splitted[1], location.getId());

								}

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

								if (channel.getId() == 1) {
									monthlyTargetForSHW = empItemMonthlyTargetRepo
											.findByTgtMonthAndLocationId(datesList.get(i), location.getId());

								} else if (channel.getId() == 2) {
									String[] splitted = datesList.get(i).split("-");

									monthlyTargetForD2H = teamItemMonthlyTargetRepo.findByMonthAndYearAndLocationId(
											splitted[0], splitted[1], location.getId());

								}

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
							if (channel.getId() == 1) {
								monthlyTargetForSHW = empItemMonthlyTargetRepo
										.findByTgtMonthAndLocationId(datesList.get(i), location.getId());

							} else if (channel.getId() == 2) {
								String[] splitted = datesList.get(i).split("-");

								monthlyTargetForD2H = teamItemMonthlyTargetRepo
										.findByMonthAndYearAndLocationId(splitted[0], splitted[1], location.getId());

							}
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
							if (channel.getId() == 1) {
								monthlyTargetForSHW = empItemMonthlyTargetRepo
										.findByTgtMonthAndLocationId(datesList.get(i), location.getId());

							} else if (channel.getId() == 2) {
								String[] splitted = datesList.get(i).split("-");

								monthlyTargetForD2H = teamItemMonthlyTargetRepo
										.findByMonthAndYearAndLocationId(splitted[0], splitted[1], location.getId());

							}
							noOfDaysBetween = ChronoUnit.DAYS.between(firstday, localEndDate) + 1;
						}
						if (channel.getId() == 1) {
							for (EmployeeItemMonthlyTarget empMonthlyTarget : monthlyTargetForSHW) {

								Date date10 = new SimpleDateFormat("MMM-yyyy").parse(empMonthlyTarget.getTgtMonth());
								Calendar cal = Calendar.getInstance();
								cal.setTime(date10);
								int lastDate = cal.getActualMaximum(Calendar.DATE);
								if (empMonthlyTarget.getItemType().equals("Gold")) {
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
									tgtDiaValue = tgtDiaValue
											+ (empMonthlyTarget.getValue() / lastDate) * noOfDaysBetween;

								}

							}

						} else if (channel.getId() == 2) {

							for (TeamItemMonthlyTarget teamMonthlyTarget : monthlyTargetForD2H) {
								Date date10 = new SimpleDateFormat("MMMM-yyyy")
										.parse(teamMonthlyTarget.getMonth() + "-" + teamMonthlyTarget.getYear());

								Calendar cal = Calendar.getInstance();
								cal.setTime(date10);

								int lastDate = cal.getActualMaximum(Calendar.DATE);

								if (teamMonthlyTarget.getItemType().equalsIgnoreCase("Gold")) {
									monthlyTargetGoldQuantity = monthlyTargetGoldQuantity
											+ (teamMonthlyTarget.getQuantity() / lastDate) * noOfDaysBetween;
									monthlyTargetGoldValue = monthlyTargetGoldValue
											+ (teamMonthlyTarget.getValue() / lastDate) * noOfDaysBetween;
									tgtGoldQuantity = tgtGoldQuantity
											+ (teamMonthlyTarget.getQuantity() / lastDate) * noOfDaysBetween;
									tgtGoldValue = tgtGoldValue
											+ (teamMonthlyTarget.getValue() / lastDate) * noOfDaysBetween;

								} else if (teamMonthlyTarget.getItemType().equalsIgnoreCase("Diamond")) {

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

				targetDiamondQuantityData.add(monthlyTargetDiamondQuantity);

				targetGoldValueData.add(monthlyTargetGoldValue);
				targetDiamondValueData.add(monthlyTargetDiamondValue);

			}

// quantity and value of gold and diamond data list
			targetQuantityData.setDiamond(targetDiamondQuantityData);
			targetQuantityData.setGold(targetGoldQuantityData);
			targetValueData.setDiamond(targetDiamondValueData);
			targetValueData.setGold(targetGoldValueData);

			targetdatalist.setQty(targetQuantityData);

			targetdatalist.setValue(targetValueData);

			quantity.setDiamond(tgtDiaquantity);
			quantity.setGold(tgtGoldQuantity);
			value.setDiamond(tgtDiaValue);
			value.setGold(tgtGoldValue);
			targets.setQty(quantity);
			targets.setValue(value);

			targetVsActualDetails.setTarget(targetdatalist);

			data.setTarget(targets);

			data.setDetails(targetVsActualDetails);

			response.setData(data);

		} catch (

		Exception e) {

			response.setError(EnumTypeForErrorCodes.SCUS803.name(), EnumTypeForErrorCodes.SCUS803.errorMsg());
			response.setMessage("Failed to get performance analysis channelwise target");
			log.error(utils.toJson(response.getError()), e);

		}
		return response;
	}

	@Override
	public TargetVsActualResponse<TgtVsActual> performanceAnalysisEachChannelWise(Long channelId, String startDate,
			String endDate) {

		log.info("performance Analysis Channel Wise");
		TargetVsActualResponse<TgtVsActual> response = new TargetVsActualResponse<>();

		try {

			LocalDate localStartDate = LocalDate.parse(startDate);
			LocalDate localEndDate = LocalDate.parse(endDate);

			long betweenDays = ChronoUnit.DAYS.between(localStartDate, localEndDate);

			if (betweenDays < 15) {
// daywise
				response = getTargetVsActualByDay(channelId, startDate, endDate);
			} else if (betweenDays >= 15 && betweenDays <= 60) {
// week wise
				response = getTargetVsActualByWeek(channelId, startDate, endDate);
			} else {
// month wise
				response = getTargetVsActualByMonth(channelId, startDate, endDate);
			}
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS201.name(), EnumTypeForErrorCodes.SCUS201.errorMsg());
			response.setMessage("Failed to get sales target vs actuals");
			log.error(utils.toJson(response.getError()), e);
		}
		return response;
	}

	@NonNull
	private TargetVsActualResponse<TgtVsActual> getTargetVsActualByMonth(Long channelId, String startDate,
			String endDate) {
		log.info("get TargetVsActual By Month");
		TargetVsActualResponse<TgtVsActual> response = new TargetVsActualResponse<>();

		TgtVsActual targetVsActual = new TgtVsActual();

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

			Optional<Channel> channel1 = channelRepo.findById(channelId);
			Channel channel = null;
			if (channel1.isPresent()) {
				channel = channel1.get();
			}

			List<Location> locations = new ArrayList<>();
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

				locations = locationRepo.findByChannel(channel);
			} else {

				if (user.getEmpCode() != null) {

					Manager manager = managerRepo.findByEmpId(user.getEmpCode());

					locations = locationRepo.groupByChannelandManger(channel, manager.getId());

				}

			}

			for (int i = 0; i < datesList.size(); i++) {

				Collection<Sales> empActualList = null;

				Collection<EmployeeItemMonthlyTarget> monthlyTargetForSHW = null;

				Collection<TeamItemMonthlyTarget> monthlyTargetForD2H = null;

				long noOfDaysBetween = 0l;

				// for (Location location : locations) {

				if (i == 0) {

					if (date1.equals(date2)) {
						empActualList = salesRepo.findByStartDateAndEndDate(startDate, endDate);

						if (channelId == 1) {
							monthlyTargetForSHW = empItemMonthlyTargetRepo.findByTgtMonth(datesList.get(i));

						} else if (channelId == 2) {
							String[] splitted = datesList.get(i).split("-");

							monthlyTargetForD2H = teamItemMonthlyTargetRepo.findByMonthAndYear(splitted[0],
									splitted[1]);

						}

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
						empActualList = salesRepo.findByStartDateAndEndDate(startDate, lastDay1);

						if (channelId == 1) {
							monthlyTargetForSHW = empItemMonthlyTargetRepo.findByTgtMonth(datesList.get(i));

						} else if (channelId == 2) {
							String[] splitted = datesList.get(i).split("-");

							monthlyTargetForD2H = teamItemMonthlyTargetRepo.findByMonthAndYear(splitted[0],
									splitted[1]);

						}

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
					empActualList = salesRepo.findByStartDateAndEndDate(firstDay1, lastDay1);

					if (channelId == 1) {
						monthlyTargetForSHW = empItemMonthlyTargetRepo.findByTgtMonth(datesList.get(i));

					} else if (channelId == 2) {
						String[] splitted = datesList.get(i).split("-");

						monthlyTargetForD2H = teamItemMonthlyTargetRepo.findByMonthAndYear(splitted[0], splitted[1]);

					}

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
					empActualList = salesRepo.findByStartDateAndEndDate(firstDay1, endDate);

					if (channelId == 1) {
						monthlyTargetForSHW = empItemMonthlyTargetRepo.findByTgtMonth(datesList.get(i));

					} else if (channelId == 2) {
						String[] splitted = datesList.get(i).split("-");

						monthlyTargetForD2H = teamItemMonthlyTargetRepo.findByMonthAndYear(splitted[0], splitted[1]);

					}

					noOfDaysBetween = ChronoUnit.DAYS.between(firstday, localEndDate) + 1;
				}

				// }

				timeline.add(datesList.get(i));

				Double monthlyTargetGoldQuantity = 0.0;
				Double monthlyTargetGoldValue = 0.0;
				Double monthlyTargetDiamondQuantity = 0.0;
				Double monthlyTargetDiamondValue = 0.0;

				if (channelId == 1) {
					if (monthlyTargetForSHW != null && !monthlyTargetForSHW.isEmpty()) {

						for (EmployeeItemMonthlyTarget employeeMonthlyTarget : monthlyTargetForSHW) {

							Date date10 = new SimpleDateFormat("MMM-yyyy").parse(employeeMonthlyTarget.getTgtMonth());
							Calendar cal = Calendar.getInstance();
							cal.setTime(date10);
							int lastDate = cal.getActualMaximum(Calendar.DATE);
							for (Location location : locations) {

								if (location.getId().equals(employeeMonthlyTarget.getEmp().getLocation().getId())) {

									if (employeeMonthlyTarget.getItemType().equalsIgnoreCase("Gold")) {

										monthlyTargetGoldQuantity = monthlyTargetGoldQuantity
												+ (employeeMonthlyTarget.getQuantity() / lastDate) * noOfDaysBetween;
										monthlyTargetGoldValue = monthlyTargetGoldValue
												+ (employeeMonthlyTarget.getValue() / lastDate) * noOfDaysBetween;
										tgtGoldQuantity = tgtGoldQuantity
												+ (employeeMonthlyTarget.getQuantity() / lastDate) * noOfDaysBetween;
										tgtGoldValue = tgtGoldValue
												+ (employeeMonthlyTarget.getValue() / lastDate) * noOfDaysBetween;

									} else if (employeeMonthlyTarget.getItemType().equalsIgnoreCase("Diamond")) {

										monthlyTargetDiamondQuantity = monthlyTargetDiamondQuantity
												+ (employeeMonthlyTarget.getQuantity() / lastDate) * noOfDaysBetween;

										monthlyTargetDiamondValue = monthlyTargetDiamondValue
												+ +(employeeMonthlyTarget.getValue() / lastDate) * noOfDaysBetween;

										tgtDiaquantity = tgtDiaquantity
												+ (employeeMonthlyTarget.getQuantity() / lastDate) * noOfDaysBetween;
										tgtDiaValue = tgtDiaValue
												+ (employeeMonthlyTarget.getValue() / lastDate) * noOfDaysBetween;

									}
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
				} else if (channelId == 2) {

					if (monthlyTargetForD2H != null && !monthlyTargetForD2H.isEmpty()) {

						for (TeamItemMonthlyTarget teamMonthlyTarget : monthlyTargetForD2H) {

							Date date10 = new SimpleDateFormat("MMMM-yyyy")
									.parse(teamMonthlyTarget.getMonth() + "-" + teamMonthlyTarget.getYear());

							Calendar cal = Calendar.getInstance();
							cal.setTime(date10);
							int lastDate = cal.getActualMaximum(Calendar.DATE);

							for (Location location : locations) {
								if (location.getId().equals(teamMonthlyTarget.getTeam().getLocation().getId())) {
									if (teamMonthlyTarget.getItemType().equalsIgnoreCase("Gold")) {

										monthlyTargetGoldQuantity = monthlyTargetGoldQuantity
												+ (teamMonthlyTarget.getQuantity() / lastDate) * noOfDaysBetween;
										monthlyTargetGoldValue = monthlyTargetGoldValue
												+ (teamMonthlyTarget.getValue() / lastDate) * noOfDaysBetween;
										tgtGoldQuantity = tgtGoldQuantity
												+ (teamMonthlyTarget.getQuantity() / lastDate) * noOfDaysBetween;
										tgtGoldValue = tgtGoldValue
												+ (teamMonthlyTarget.getValue() / lastDate) * noOfDaysBetween;

									} else if (teamMonthlyTarget.getItemType().equalsIgnoreCase("Diamond")) {

										monthlyTargetDiamondQuantity = monthlyTargetDiamondQuantity
												+ (teamMonthlyTarget.getQuantity() / lastDate) * noOfDaysBetween;

										monthlyTargetDiamondValue = monthlyTargetDiamondValue
												+ +(teamMonthlyTarget.getValue() / lastDate) * noOfDaysBetween;

										tgtDiaquantity = tgtDiaquantity
												+ (teamMonthlyTarget.getQuantity() / lastDate) * noOfDaysBetween;
										tgtDiaValue = tgtDiaValue
												+ (teamMonthlyTarget.getValue() / lastDate) * noOfDaysBetween;

									}
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

				}

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
						for (Location location : locations) {

							if (location.getId().equals(sale.getLocation().getId())
									&& sale.getLocation().getChannel().getId().equals(channelId)) {

								if (sale.getItemType().equalsIgnoreCase("Gold")) {

									monthlyActualGoldQuantity = monthlyActualGoldQuantity + sale.getGrossWeight();
									monthlyActualGoldValue = monthlyActualGoldValue + sale.getTotalSoldAmount();

									goldQuantityActual = goldQuantityActual + sale.getGrossWeight();
									goldValueActual = goldValueActual + sale.getTotalSoldAmount();

								} else if (sale.getItemType().equalsIgnoreCase("Diamond")) {
									monthlyActualDiamondQuantity = monthlyActualDiamondQuantity
											+ sale.getDiamondWeight();
									monthlyActualDiamondValue = monthlyActualDiamondValue + sale.getTotalSoldAmount();

									diamondQuantityActual = diamondQuantityActual + sale.getDiamondWeight();
									diamondValueActual = diamondValueActual + sale.getTotalSoldAmount();
								}

								SalesReturns salesReturns = salesReturnsRepo.findBySales(sale);

								if (salesReturns != null) {

									if (sale.getItemType().equalsIgnoreCase("Gold")) {

										salesReturnGoldQuantity = salesReturnGoldQuantity
												+ salesReturns.getGrossWeight();
										salesReturnGoldQuantityDetails = salesReturnGoldQuantityDetails
												+ salesReturns.getGrossWeight();
										salesReturnGoldValue = salesReturnGoldValue + salesReturns.getAmountPayable();
										salesReturnGoldValueDetails = salesReturnGoldValueDetails
												+ salesReturns.getAmountPayable();
										monthlyActualGoldQuantity -= salesReturnGoldQuantity;
										monthlyActualGoldValue -= salesReturnGoldValue;

									} else if (sale.getItemType().equalsIgnoreCase("Diamond")) {

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

			actualQuantity.setDiamond(actualDiamondQuantity);
			actualQuantity.setGold(actualGoldQuantity);
			actualValue.setDiamond(actualDiamondValue);
			actualValue.setGold(actualGoldValue);

			actualQuantityValue.setQty(actualQuantity);
			actualQuantityValue.setValue(actualValue);

			finalActualQuantity.setDiamond((diamondQuantityActual - salesReturnDiamondQuantityDetails));

			finalActualQuantity.setGold((goldQuantityActual - salesReturnGoldQuantityDetails) / 1000);

			finalActualValue.setDiamond((diamondValueActual - salesReturnDiamondValueDetails) / 100000);

			finalActualValue.setGold((goldValueActual - salesReturnGoldValueDetails) / 100000);

			finalActualQuantityValue.setQty(finalActualQuantity);

			finalActualQuantityValue.setValue(finalActualValue);

			targetVsActual.setActuals(finalActualQuantityValue);

			targetQuantity.setDiamond(targetDiamondQuantity);
			targetQuantity.setGold(targetGoldQuantity);
			targetValue.setDiamond(targetDiamondValue);
			targetValue.setGold(targetGoldValue);

			targetQuantityValue.setQty(targetQuantity);
			targetQuantityValue.setValue(targetValue);

			finalTargetQuantity.setDiamond(tgtDiaquantity);
			finalTargetQuantity.setGold(tgtGoldQuantity);
			finalTargetValue.setDiamond(tgtDiaValue);
			finalTargetValue.setGold(tgtGoldValue);

			finalTargetQuantityValue.setQty(finalTargetQuantity);

			finalTargetQuantityValue.setValue(finalTargetValue);

			targetVsActual.setTarget(finalTargetQuantityValue);

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
			response.setError(EnumTypeForErrorCodes.SCUS804.name(), EnumTypeForErrorCodes.SCUS804.errorMsg());
			response.setMessage("Failed to get performance analysis TargetVsActual by month");
			log.error(utils.toJson(response.getError()), e);
		}
		return response;
	}

	private TargetVsActualResponse<TgtVsActual> getTargetVsActualByDay(Long channelId, String startDate,
			String endDate) {

		log.info("get TargetVsActual By Day");
		TargetVsActualResponse<TgtVsActual> response = new TargetVsActualResponse<>();

		TgtVsActual targetVsActual = new TgtVsActual();

		try {

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
			Optional<Channel> channel1 = channelRepo.findById(channelId);
			Channel channel = null;
			if (channel1.isPresent()) {
				channel = channel1.get();
			}

			List<Location> locations = new ArrayList<>();
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

				locations = locationRepo.findByChannel(channel);
			} else {

				if (user.getEmpCode() != null) {

					Manager manager = managerRepo.findByEmpId(user.getEmpCode());

					locations = locationRepo.groupByChannelandManger(channel, manager.getId());

				}

			}

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

			Collection<EmployeeItemMonthlyTarget> monthlyTargetForSHW = null;
			Collection<TeamItemMonthlyTarget> monthlyTargetForD2H = null;

			long noOfDaysBetween = 0l;
			String startDateTimeline = null;
			String endDateTimeline = null;

			List<Sample> listOfActualsAndTargetsForSHW = new ArrayList<>();

			List<Sample1> listOfActualsAndTargetsForD2H = new ArrayList<>();

			if (datesList.size() == 1) {

				empActualList = salesRepo.findByStartDateAndEndDate(startDate, endDate);

				noOfDaysBetween = ChronoUnit.DAYS.between(localStartDate, localEndDate) + 1;
				startDateTimeline = startDate;
				endDateTimeline = endDate;

				if (channelId == 1) {
					Sample actualsAndTargetsForSHW = new Sample();

					monthlyTargetForSHW = empItemMonthlyTargetRepo.findByTgtMonth(datesList.get(0));

					actualsAndTargetsForSHW.setEmployees(monthlyTargetForSHW);
					actualsAndTargetsForSHW.setSale(empActualList);
					actualsAndTargetsForSHW.setEndDateTimeline(endDateTimeline);
					actualsAndTargetsForSHW.setNumberOfDays(noOfDaysBetween);
					actualsAndTargetsForSHW.setStartDateTimeline(startDateTimeline);
					listOfActualsAndTargetsForSHW.add(actualsAndTargetsForSHW);

				} else if (channelId == 2) {
					Sample1 actualsAndTargetsForD2H = new Sample1();

					String[] splitted = datesList.get(0).split("-");

					monthlyTargetForD2H = teamItemMonthlyTargetRepo.findByMonthAndYear(splitted[0], splitted[1]);

					actualsAndTargetsForD2H.setTeamItemMonthlyTarget(monthlyTargetForD2H);
					actualsAndTargetsForD2H.setSale(empActualList);
					actualsAndTargetsForD2H.setEndDateTimeline(endDateTimeline);
					actualsAndTargetsForD2H.setNumberOfDays(noOfDaysBetween);
					actualsAndTargetsForD2H.setStartDateTimeline(startDateTimeline);
					listOfActualsAndTargetsForD2H.add(actualsAndTargetsForD2H);
				}

			} else {

				for (int i = 0; i < datesList.size(); i++) {

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
					if (i == 0) {
						String lastDay1 = datesList.get(0).substring(4, 8) + "-" + m + "-" + lastDay;
						LocalDate day = LocalDate.parse(lastDay1);

						empActualList = salesRepo.findByStartDateAndEndDate(startDate, lastDay1);

						noOfDaysBetween = ChronoUnit.DAYS.between(localStartDate, day) + 1;
						startDateTimeline = startDate;
						endDateTimeline = lastDay1;

						if (channelId == 1) {
							Sample actualsAndTargetsForSHW = new Sample();

							monthlyTargetForSHW = empItemMonthlyTargetRepo.findByTgtMonth(datesList.get(i));

							actualsAndTargetsForSHW.setSale(empActualList);

							actualsAndTargetsForSHW.setEmployees(monthlyTargetForSHW);
							actualsAndTargetsForSHW.setNumberOfDays(noOfDaysBetween);

							actualsAndTargetsForSHW.setStartDateTimeline(startDateTimeline);
							actualsAndTargetsForSHW.setEndDateTimeline(endDateTimeline);

							listOfActualsAndTargetsForSHW.add(actualsAndTargetsForSHW);

						} else if (channelId == 2) {
							Sample1 actualsAndTargetsForD2H = new Sample1();

							String[] splitted = datesList.get(i).split("-");

							monthlyTargetForD2H = teamItemMonthlyTargetRepo.findByMonthAndYear(splitted[0],
									splitted[1]);

							actualsAndTargetsForD2H.setTeamItemMonthlyTarget(monthlyTargetForD2H);
							actualsAndTargetsForD2H.setSale(empActualList);
							actualsAndTargetsForD2H.setEndDateTimeline(endDateTimeline);
							actualsAndTargetsForD2H.setNumberOfDays(noOfDaysBetween);
							actualsAndTargetsForD2H.setStartDateTimeline(startDateTimeline);
							listOfActualsAndTargetsForD2H.add(actualsAndTargetsForD2H);
						}

					} else {
						String firstDay1 = datesList.get(i).substring(4, 8) + "-" + m + "-" + "01";
						LocalDate day = LocalDate.parse(firstDay1);
						empActualList = salesRepo.findByStartDateAndEndDate(firstDay1, endDate);

						noOfDaysBetween = ChronoUnit.DAYS.between(day, localEndDate) + 1;
						startDateTimeline = firstDay1;
						endDateTimeline = endDate;
						if (channelId == 1) {
							Sample actualsAndTargetsForSHW = new Sample();

							monthlyTargetForSHW = empItemMonthlyTargetRepo.findByTgtMonth(datesList.get(i));

							actualsAndTargetsForSHW.setSale(empActualList);

							actualsAndTargetsForSHW.setEmployees(monthlyTargetForSHW);
							actualsAndTargetsForSHW.setNumberOfDays(noOfDaysBetween);

							actualsAndTargetsForSHW.setStartDateTimeline(startDateTimeline);
							actualsAndTargetsForSHW.setEndDateTimeline(endDateTimeline);

							listOfActualsAndTargetsForSHW.add(actualsAndTargetsForSHW);

						} else if (channelId == 2) {
							Sample1 actualsAndTargetsForD2H = new Sample1();

							String[] splitted = datesList.get(i).split("-");

							monthlyTargetForD2H = teamItemMonthlyTargetRepo.findByMonthAndYear(splitted[0],
									splitted[1]);

							actualsAndTargetsForD2H.setTeamItemMonthlyTarget(monthlyTargetForD2H);
							actualsAndTargetsForD2H.setSale(empActualList);
							actualsAndTargetsForD2H.setEndDateTimeline(endDateTimeline);
							actualsAndTargetsForD2H.setNumberOfDays(noOfDaysBetween);
							actualsAndTargetsForD2H.setStartDateTimeline(startDateTimeline);
							listOfActualsAndTargetsForD2H.add(actualsAndTargetsForD2H);
						}
					}

				}

			}

			if (channelId == 1) {

				for (Sample sample : listOfActualsAndTargetsForSHW) {

					for (Location location : locations) {

						for (int i = 0; i < sample.getNumberOfDays(); i++) {
							Double monthlyActualGoldQuantity = 0.0;
							Double monthlyActualGoldValue = 0.0;
							Double monthlyActualDiamondQuantity = 0.0;
							Double monthlyActualDiamondValue = 0.0;

							Double monthlyTargetGoldQuantity = 0.0;
							Double monthlyTargetGoldValue = 0.0;
							Double monthlyTargetDiamondQuantity = 0.0;
							Double monthlyTargetDiamondValue = 0.0;

							Double salesReturnGoldQuantity = 0.0;
							Double salesReturnGoldValue = 0.0;
							Double salesReturnDiamondQuantity = 0.0;
							Double salesReturnDiamondValue = 0.0;

							if (!sample.getEmployees().isEmpty()) {
								for (EmployeeItemMonthlyTarget employeeMonthlyTarget : sample.getEmployees()) {

									Date date10 = new SimpleDateFormat("MMM-yyyy")
											.parse(employeeMonthlyTarget.getTgtMonth());
									Calendar cal = Calendar.getInstance();
									cal.setTime(date10);
									int lastDate = cal.getActualMaximum(Calendar.DATE);

									if (location.getId().equals(employeeMonthlyTarget.getEmp().getLocation().getId())) {
										if (employeeMonthlyTarget.getItemType().equalsIgnoreCase("Gold")) {

											monthlyTargetGoldQuantity = monthlyTargetGoldQuantity
													+ (employeeMonthlyTarget.getQuantity() / lastDate);
											monthlyTargetGoldValue = monthlyTargetGoldValue
													+ (employeeMonthlyTarget.getValue() / lastDate);
											tgtGoldQuantity = tgtGoldQuantity
													+ (employeeMonthlyTarget.getQuantity() / lastDate);
											tgtGoldValue = tgtGoldValue + (employeeMonthlyTarget.getValue() / lastDate);

										} else if (employeeMonthlyTarget.getItemType().equalsIgnoreCase("Diamond")) {

											monthlyTargetDiamondQuantity = monthlyTargetDiamondQuantity
													+ (employeeMonthlyTarget.getQuantity() / lastDate);

											monthlyTargetDiamondValue = monthlyTargetDiamondValue
													+ +(employeeMonthlyTarget.getValue() / lastDate);

											tgtDiaquantity = tgtDiaquantity
													+ (employeeMonthlyTarget.getQuantity() / lastDate);
											tgtDiaValue = tgtDiaValue + (employeeMonthlyTarget.getValue() / lastDate);

										}

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

							LocalDate localStartDateTimeline = LocalDate.parse(startDateTimeline);

							final String DATE_FORMATTER = "dd-MM-yyyy";

							DateTimeFormatter formatter = DateTimeFormatter.ofPattern(DATE_FORMATTER);
							String formatDateTime = localStartDateTimeline.format(formatter);

							timeline.add(formatDateTime);

							List<Sales> saleExists = salesRepo.findByTransactionDate(startDateTimeline);

							if (!saleExists.isEmpty()) {

								for (Sales sale : saleExists) {

									if (sale.getLocation().getId().equals(location.getId())
											&& sale.getLocation().getChannel().getId().equals(channelId)) {

										if (sale.getItemType().equalsIgnoreCase("Gold")) {

											monthlyActualGoldQuantity = monthlyActualGoldQuantity
													+ sale.getGrossWeight();
											monthlyActualGoldValue = monthlyActualGoldValue + sale.getTotalSoldAmount();

											goldQuantityActual = goldQuantityActual + sale.getGrossWeight();
											goldValueActual = goldValueActual + sale.getTotalSoldAmount();

										} else if (sale.getItemType().equalsIgnoreCase("Diamond")) {

											monthlyActualDiamondQuantity = monthlyActualDiamondQuantity
													+ sale.getDiamondWeight();

											monthlyActualDiamondValue = monthlyActualDiamondValue
													+ sale.getTotalSoldAmount();

											diamondQuantityActual = diamondQuantityActual + sale.getDiamondWeight();
											diamondValueActual = diamondValueActual + sale.getTotalSoldAmount();

										}

										SalesReturns salesReturns = salesReturnsRepo.findBySales(sale);

										if (salesReturns != null) {
											if (sale.getItemType().equalsIgnoreCase("Gold")) {

												salesReturnGoldQuantity = salesReturnGoldQuantity
														+ salesReturns.getGrossWeight();
												salesReturnGoldQuantityDetails = salesReturnGoldQuantityDetails
														+ salesReturns.getGrossWeight();
												salesReturnGoldValue = salesReturnGoldValue
														+ salesReturns.getAmountPayable();
												salesReturnGoldValueDetails = salesReturnGoldValueDetails
														+ salesReturns.getAmountPayable();
												monthlyActualGoldQuantity -= salesReturnGoldQuantity;
												monthlyActualGoldValue -= salesReturnGoldValue;

											} else if (sale.getItemType().equalsIgnoreCase("Diamond")) {

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
								actualGoldQuantity.add(monthlyActualGoldQuantity / 1000);
								actualGoldValue.add(monthlyActualGoldValue / 100000);
								actualDiamondQuantity.add(monthlyActualDiamondQuantity);
								actualDiamondValue.add(monthlyActualDiamondValue / 100000);
							} else {
								actualGoldQuantity.add(0.0);
								actualGoldValue.add(0.0);
								actualDiamondQuantity.add(0.0);
								actualDiamondValue.add(0.0);

							}

							LocalDate nextDay = localStartDateTimeline.plusDays(1);
							startDateTimeline = nextDay.toString();
						}
					}

				}

			} else if (channelId == 2) {

				for (Sample1 sample : listOfActualsAndTargetsForD2H) {

					for (Location location : locations) {

						startDateTimeline = sample.getStartDateTimeline();

						for (int i = 0; i < sample.getNumberOfDays(); i++) {

							Double monthlyTargetGoldQuantity = 0.0;
							Double monthlyTargetGoldValue = 0.0;
							Double monthlyTargetDiamondQuantity = 0.0;
							Double monthlyTargetDiamondValue = 0.0;

							Double monthlyActualGoldQuantity = 0.0;
							Double monthlyActualGoldValue = 0.0;
							Double monthlyActualDiamondQuantity = 0.0;
							Double monthlyActualDiamondValue = 0.0;

							Double salesReturnGoldQuantity = 0.0;
							Double salesReturnGoldValue = 0.0;
							Double salesReturnDiamondQuantity = 0.0;
							Double salesReturnDiamondValue = 0.0;

							if (!sample.getTeamItemMonthlyTarget().isEmpty()) {
								for (TeamItemMonthlyTarget teamMonthlyTarget : sample.getTeamItemMonthlyTarget()) {

									Date date10 = new SimpleDateFormat("MMMM-yyyy")
											.parse(teamMonthlyTarget.getMonth() + "-" + teamMonthlyTarget.getYear());

									Calendar cal = Calendar.getInstance();
									cal.setTime(date10);
									int lastDate = cal.getActualMaximum(Calendar.DATE);
									if (location.getId().equals(teamMonthlyTarget.getTeam().getLocation().getId())) {

										if (teamMonthlyTarget.getItemType().equalsIgnoreCase("Gold")) {

											monthlyTargetGoldQuantity = monthlyTargetGoldQuantity
													+ (teamMonthlyTarget.getQuantity() / lastDate);
											monthlyTargetGoldValue = monthlyTargetGoldValue
													+ (teamMonthlyTarget.getValue() / lastDate);
											tgtGoldQuantity = tgtGoldQuantity
													+ (teamMonthlyTarget.getQuantity() / lastDate);
											tgtGoldValue = tgtGoldValue + (teamMonthlyTarget.getValue() / lastDate);
										} else if (teamMonthlyTarget.getItemType().equalsIgnoreCase("Diamond")) {

											monthlyTargetDiamondQuantity = monthlyTargetDiamondQuantity
													+ (teamMonthlyTarget.getQuantity() / lastDate);

											monthlyTargetDiamondValue = monthlyTargetDiamondValue
													+ +(teamMonthlyTarget.getValue() / lastDate);

											tgtDiaquantity = tgtDiaquantity
													+ (teamMonthlyTarget.getQuantity() / lastDate);
											tgtDiaValue = tgtDiaValue + (teamMonthlyTarget.getValue() / lastDate);

										}

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

							LocalDate localStartDateTimeline = LocalDate.parse(startDateTimeline);

							final String DATE_FORMATTER = "dd-MM-yyyy";

							DateTimeFormatter formatter = DateTimeFormatter.ofPattern(DATE_FORMATTER);
							String formatDateTime = localStartDateTimeline.format(formatter);

							timeline.add(formatDateTime);

							List<Sales> saleExists = salesRepo.findByTransactionDate(startDateTimeline);
							LocalDate nextDay = localStartDateTimeline.plusDays(1);
							startDateTimeline = nextDay.toString();

							if (!saleExists.isEmpty()) {

								for (Sales sale : saleExists) {
									if (sale.getLocation().equals(location)
											&& sale.getLocation().getChannel().getId().equals(channelId)) {

										if (sale.getItemType().equalsIgnoreCase("Gold")) {

											monthlyActualGoldQuantity = monthlyActualGoldQuantity
													+ sale.getGrossWeight();
											monthlyActualGoldValue = monthlyActualGoldValue + sale.getTotalSoldAmount();
											goldQuantityActual = goldQuantityActual + sale.getGrossWeight();
											goldValueActual = goldValueActual + sale.getTotalSoldAmount();

										} else if (sale.getItemType().equalsIgnoreCase("Diamond")) {
											monthlyActualDiamondQuantity = monthlyActualDiamondQuantity
													+ sale.getDiamondWeight();

											monthlyActualDiamondValue = monthlyActualDiamondValue
													+ sale.getTotalSoldAmount();
											diamondQuantityActual = diamondQuantityActual + sale.getDiamondWeight();
											diamondValueActual = diamondValueActual + sale.getTotalSoldAmount();

										}
										SalesReturns salesReturns = salesReturnsRepo.findBySales(sale);

										if (salesReturns != null) {

											if (sale.getItemType().equalsIgnoreCase("Gold")) {

												salesReturnGoldQuantity = salesReturnGoldQuantity
														+ salesReturns.getGrossWeight();
												salesReturnGoldQuantityDetails = salesReturnGoldQuantityDetails
														+ salesReturns.getGrossWeight();
												salesReturnGoldValue = salesReturnGoldValue
														+ salesReturns.getAmountPayable();
												salesReturnGoldValueDetails = salesReturnGoldValueDetails
														+ salesReturns.getAmountPayable();
												monthlyActualGoldQuantity -= salesReturnGoldQuantity;
												monthlyActualGoldValue -= salesReturnGoldValue;

											} else if (sale.getItemType().equalsIgnoreCase("Diamond")) {

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
								actualGoldQuantity.add(monthlyActualGoldQuantity / 1000);
								actualGoldValue.add(monthlyActualGoldValue / 100000);
								actualDiamondQuantity.add(monthlyActualDiamondQuantity);
								actualDiamondValue.add(monthlyActualDiamondValue / 100000);
							} else {
								actualGoldQuantity.add(0.0);
								actualGoldValue.add(0.0);
								actualDiamondQuantity.add(0.0);
								actualDiamondValue.add(0.0);

							}
						}
					}
				}

			}

			finalTargetQuantity.setDiamond(tgtDiaquantity);
			finalTargetQuantity.setGold(tgtGoldQuantity);
			finalTargetValue.setDiamond(tgtDiaValue);
			finalTargetValue.setGold(tgtGoldValue);

			finalTargetQuantityValue.setQty(finalTargetQuantity);

			finalTargetQuantityValue.setValue(finalTargetValue);

			targetVsActual.setTarget(finalTargetQuantityValue);

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
			response.setMessage("successful");
			response.setFromDate(startDate);
			response.setToDate(endDate);
			response.setData(targetVsActual);
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS805.name(), EnumTypeForErrorCodes.SCUS805.errorMsg());
			response.setMessage("Failed to get performance analysis sales person wise margins");
			log.error(utils.toJson(response.getError()), e);
		}
		return response;

	}

	private TargetVsActualResponse<TgtVsActual> getTargetVsActualByWeek(Long channelId, String startDate,
			String endDate) {

		log.info("get TargetVsActual By Week");
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
			Optional<Channel> channel1 = channelRepo.findById(channelId);
			Channel channel = null;
			if (channel1.isPresent()) {
				channel = channel1.get();
			}

			List<Location> locations = new ArrayList<>();
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

				locations = locationRepo.findByChannel(channel);
			} else {

				if (user.getEmpCode() != null) {

					Manager manager = managerRepo.findByEmpId(user.getEmpCode());

					locations = locationRepo.groupByChannelandManger(channel, manager.getId());

				}

			}
			Collection<Sales> empActualList = null;

			Collection<EmployeeItemMonthlyTarget> monthlyTargetForSHW = null;

			Collection<TeamItemMonthlyTarget> monthlyTargetForD2H = null;

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

				DateFormat formater = new SimpleDateFormat("MMM-yyyy");

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

				List<Sample> listOfActualsAndTargetsForSHW = new ArrayList<>();

				List<Sample1> listOfActualsAndTargetsForD2H = new ArrayList<>();

				if (datesList.size() == 1) {
					Date date10 = new SimpleDateFormat("MMM-yyyy").parse(datesList.get(0));
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
					noOfDaysBetween = ChronoUnit.DAYS.between(dateValue.getStartDate(), dateValue.getEndDate()) + 1;

					if (channelId == 1) {
						Sample actualsAndTargetsForSHW = new Sample();

						monthlyTargetForSHW = empItemMonthlyTargetRepo.findByTgtMonth(datesList.get(0));

						actualsAndTargetsForSHW.setSale(empActualList);

						actualsAndTargetsForSHW.setEmployees(monthlyTargetForSHW);
						actualsAndTargetsForSHW.setNumberOfDays(noOfDaysBetween);

						actualsAndTargetsForSHW.setStartDateTimeline(dateValue.getStartDate().toString());
						actualsAndTargetsForSHW.setEndDateTimeline(dateValue.getEndDate().toString());

						listOfActualsAndTargetsForSHW.add(actualsAndTargetsForSHW);

					} else if (channelId == 2) {
						Sample1 actualsAndTargetsForD2H = new Sample1();

						String[] splitted = datesList.get(0).split("-");

						monthlyTargetForD2H = teamItemMonthlyTargetRepo.findByMonthAndYear(splitted[0], splitted[1]);

						actualsAndTargetsForD2H.setTeamItemMonthlyTarget(monthlyTargetForD2H);
						actualsAndTargetsForD2H.setSale(empActualList);
						actualsAndTargetsForD2H.setNumberOfDays(noOfDaysBetween);
						actualsAndTargetsForD2H.setStartDateTimeline(dateValue.getStartDate().toString());
						actualsAndTargetsForD2H.setEndDateTimeline(dateValue.getEndDate().toString());

						listOfActualsAndTargetsForD2H.add(actualsAndTargetsForD2H);
					}

				} else {

					for (int i = 0; i < datesList.size(); i++) {
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
						String firstDay1 = datesList.get(i).substring(4, 8) + "-" + m + "-" + "01";
						LocalDate day = LocalDate.parse(firstDay1);
						String lastDay1 = datesList.get(i).substring(4, 8) + "-" + m + "-" + lastDay;
						LocalDate day2 = LocalDate.parse(lastDay1);

						if (i == 0) {
							empActualList = salesRepo.findByStartDateAndEndDate(dateValue.getStartDate().toString(),
									lastDay1);
							noOfDaysBetween = ChronoUnit.DAYS.between(dateValue.getStartDate(), day2) + 1;
							if (channelId == 1) {
								Sample actualsAndTargetsForSHW = new Sample();

								monthlyTargetForSHW = empItemMonthlyTargetRepo.findByTgtMonth(datesList.get(i));

								actualsAndTargetsForSHW.setSale(empActualList);

								actualsAndTargetsForSHW.setEmployees(monthlyTargetForSHW);
								actualsAndTargetsForSHW.setNumberOfDays(noOfDaysBetween);

								actualsAndTargetsForSHW.setStartDateTimeline(dateValue.getStartDate().toString());
								actualsAndTargetsForSHW.setEndDateTimeline(dateValue.getEndDate().toString());

								listOfActualsAndTargetsForSHW.add(actualsAndTargetsForSHW);

							} else if (channelId == 2) {
								Sample1 actualsAndTargetsForD2H = new Sample1();

								String[] splitted = datesList.get(i).split("-");

								monthlyTargetForD2H = teamItemMonthlyTargetRepo.findByMonthAndYear(splitted[0],
										splitted[1]);

								actualsAndTargetsForD2H.setTeamItemMonthlyTarget(monthlyTargetForD2H);
								actualsAndTargetsForD2H.setSale(empActualList);
								actualsAndTargetsForD2H.setNumberOfDays(noOfDaysBetween);
								actualsAndTargetsForD2H.setStartDateTimeline(dateValue.getStartDate().toString());
								actualsAndTargetsForD2H.setEndDateTimeline(dateValue.getEndDate().toString());

								listOfActualsAndTargetsForD2H.add(actualsAndTargetsForD2H);
							}
						} else {
							empActualList = salesRepo.findByStartDateAndEndDate(firstDay1,
									dateValue.getEndDate().toString());
							noOfDaysBetween = ChronoUnit.DAYS.between(day, dateValue.getEndDate()) + 1;
							if (channelId == 1) {
								Sample actualsAndTargetsForSHW = new Sample();

								monthlyTargetForSHW = empItemMonthlyTargetRepo.findByTgtMonth(datesList.get(i));

								actualsAndTargetsForSHW.setSale(empActualList);

								actualsAndTargetsForSHW.setEmployees(monthlyTargetForSHW);
								actualsAndTargetsForSHW.setNumberOfDays(noOfDaysBetween);

								actualsAndTargetsForSHW.setStartDateTimeline(dateValue.getStartDate().toString());
								actualsAndTargetsForSHW.setEndDateTimeline(dateValue.getEndDate().toString());

								listOfActualsAndTargetsForSHW.add(actualsAndTargetsForSHW);

							} else if (channelId == 2) {
								Sample1 actualsAndTargetsForD2H = new Sample1();

								String[] splitted = datesList.get(i).split("-");

								monthlyTargetForD2H = teamItemMonthlyTargetRepo.findByMonthAndYear(splitted[0],
										splitted[1]);

								actualsAndTargetsForD2H.setTeamItemMonthlyTarget(monthlyTargetForD2H);
								actualsAndTargetsForD2H.setSale(empActualList);
								actualsAndTargetsForD2H.setNumberOfDays(noOfDaysBetween);
								actualsAndTargetsForD2H.setStartDateTimeline(dateValue.getStartDate().toString());
								actualsAndTargetsForD2H.setEndDateTimeline(dateValue.getEndDate().toString());

								listOfActualsAndTargetsForD2H.add(actualsAndTargetsForD2H);
							}
						}

					}
				}

				timeline.add(dateValue.getWeekNumber());
				Double monthlyTargetGoldQuantity = 0.0;
				Double monthlyTargetGoldValue = 0.0;
				Double monthlyTargetDiamondQuantity = 0.0;
				Double monthlyTargetDiamondValue = 0.0;

				Double monthlyActualGoldQuantity = 0.0;
				Double monthlyActualGoldValue = 0.0;
				Double monthlyActualDiamondQuantity = 0.0;
				Double monthlyActualDiamondValue = 0.0;

				Double salesReturnGoldQuantity = 0.0;
				Double salesReturnGoldValue = 0.0;
				Double salesReturnDiamondQuantity = 0.0;
				Double salesReturnDiamondValue = 0.0;

				if (channelId == 1) {
					for (Sample sample : listOfActualsAndTargetsForSHW) {

						if (!sample.getEmployees().isEmpty()) {

							for (EmployeeItemMonthlyTarget employeeMonthlyTarget : sample.getEmployees()) {

								Date date10 = new SimpleDateFormat("MMM-yyyy")
										.parse(employeeMonthlyTarget.getTgtMonth());
								Calendar cal = Calendar.getInstance();
								cal.setTime(date10);
								int lastDate = cal.getActualMaximum(Calendar.DATE);

								for (Location location : locations) {

									if (location.getId().equals(employeeMonthlyTarget.getEmp().getLocation().getId())) {
										if (employeeMonthlyTarget.getItemType().equalsIgnoreCase("Gold")) {

											monthlyTargetGoldQuantity = monthlyTargetGoldQuantity
													+ (employeeMonthlyTarget.getQuantity() / lastDate)
															* sample.getNumberOfDays();
											monthlyTargetGoldValue = monthlyTargetGoldValue
													+ (employeeMonthlyTarget.getValue() / lastDate)
															* sample.getNumberOfDays();
											tgtGoldQuantity = tgtGoldQuantity
													+ (employeeMonthlyTarget.getQuantity() / lastDate)
															* sample.getNumberOfDays();
											tgtGoldValue = tgtGoldValue + (employeeMonthlyTarget.getValue() / lastDate)
													* sample.getNumberOfDays();

										} else if (employeeMonthlyTarget.getItemType().equalsIgnoreCase("Diamond")) {

											monthlyTargetDiamondQuantity = monthlyTargetDiamondQuantity
													+ (employeeMonthlyTarget.getQuantity() / lastDate)
															* sample.getNumberOfDays();

											monthlyTargetDiamondValue = monthlyTargetDiamondValue
													+ +(employeeMonthlyTarget.getValue() / lastDate)
															* sample.getNumberOfDays();

											tgtDiaquantity = tgtDiaquantity
													+ (employeeMonthlyTarget.getQuantity() / lastDate)
															* sample.getNumberOfDays();
											tgtDiaValue = tgtDiaValue + (employeeMonthlyTarget.getValue() / lastDate)
													* sample.getNumberOfDays();

										}
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

					for (Sample sample : listOfActualsAndTargetsForSHW) {
						String startDateTimeline = sample.getStartDateTimeline();
						LocalDate localStartDateTimeline = LocalDate.parse(startDateTimeline);

						LocalDate nextDay = localStartDateTimeline.plusDays(1);
						startDateTimeline = nextDay.toString();

						if (!sample.getSale().isEmpty()) {
							for (Sales sale : sample.getSale()) {
								for (Location location : locations) {

									if (location.getId().equals(sale.getLocation().getId())
											&& sale.getLocation().getChannel().getId().equals(channelId)) {

										if (sale.getItemType().equalsIgnoreCase("Gold")) {

											monthlyActualGoldQuantity = monthlyActualGoldQuantity
													+ sale.getGrossWeight();
											monthlyActualGoldValue = monthlyActualGoldValue + sale.getTotalSoldAmount();
											goldQuantityActual = goldQuantityActual + sale.getGrossWeight();
											goldValueActual = goldValueActual + sale.getTotalSoldAmount();

										} else if (sale.getItemType().equalsIgnoreCase("Diamond")) {
											monthlyActualDiamondQuantity = monthlyActualDiamondQuantity
													+ sale.getDiamondWeight();

											monthlyActualDiamondValue = monthlyActualDiamondValue
													+ sale.getTotalSoldAmount();
											diamondQuantityActual = diamondQuantityActual + sale.getDiamondWeight();
											diamondValueActual = diamondValueActual + sale.getTotalSoldAmount();

										}

										SalesReturns salesReturns = salesReturnsRepo.findBySales(sale);

										if (salesReturns != null) {

											if (sale.getItemType().equalsIgnoreCase("Gold")) {

												salesReturnGoldQuantity = salesReturnGoldQuantity
														+ salesReturns.getGrossWeight();
												salesReturnGoldQuantityDetails = salesReturnGoldQuantityDetails
														+ salesReturns.getGrossWeight();
												salesReturnGoldValue = salesReturnGoldValue
														+ salesReturns.getAmountPayable();
												salesReturnGoldValueDetails = salesReturnGoldValueDetails
														+ salesReturns.getAmountPayable();
												monthlyActualGoldQuantity -= salesReturnGoldQuantity;
												monthlyActualGoldValue -= salesReturnGoldValue;

											} else if (sale.getItemType().equalsIgnoreCase("Diamond")) {

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

						} else {

							monthlyActualGoldQuantity += 0.0;
							monthlyActualGoldValue += 0.0;
							monthlyActualDiamondQuantity += 0.0;
							monthlyActualDiamondValue += 0.0;

						}

					}

					actualGoldQuantity.add(monthlyActualGoldQuantity / 1000);
					actualGoldValue.add(monthlyActualGoldValue / 100000);
					actualDiamondQuantity.add(monthlyActualDiamondQuantity);
					actualDiamondValue.add(monthlyActualDiamondValue / 100000);

				} else if (channelId == 2) {
					for (Sample1 sample : listOfActualsAndTargetsForD2H) {

						if (!sample.getTeamItemMonthlyTarget().isEmpty()) {

							for (TeamItemMonthlyTarget teamMonthlyTarget : sample.getTeamItemMonthlyTarget()) {

								Date date10 = new SimpleDateFormat("MMMM-yyyy")
										.parse(teamMonthlyTarget.getMonth() + "-" + teamMonthlyTarget.getYear());

								Calendar cal = Calendar.getInstance();
								cal.setTime(date10);
								int lastDate = cal.getActualMaximum(Calendar.DATE);

								for (Location location : locations) {

									if (location.getId().equals(teamMonthlyTarget.getTeam().getLocation().getId())) {

										if (teamMonthlyTarget.getItemType().equalsIgnoreCase("Gold")) {

											monthlyTargetGoldQuantity = monthlyTargetGoldQuantity
													+ (teamMonthlyTarget.getQuantity() / lastDate)
															* sample.getNumberOfDays();
											monthlyTargetGoldValue = monthlyTargetGoldValue
													+ (teamMonthlyTarget.getValue() / lastDate)
															* sample.getNumberOfDays();
											tgtGoldQuantity = tgtGoldQuantity
													+ (teamMonthlyTarget.getQuantity() / lastDate)
															* sample.getNumberOfDays();
											tgtGoldValue = tgtGoldValue + (teamMonthlyTarget.getValue() / lastDate)
													* sample.getNumberOfDays();

										} else if (teamMonthlyTarget.getItemType().equalsIgnoreCase("Diamond")) {

											monthlyTargetDiamondQuantity = monthlyTargetDiamondQuantity
													+ (teamMonthlyTarget.getQuantity() / lastDate)
															* sample.getNumberOfDays();

											monthlyTargetDiamondValue = monthlyTargetDiamondValue
													+ (teamMonthlyTarget.getValue() / lastDate)
															* sample.getNumberOfDays();

											tgtDiaquantity = tgtDiaquantity
													+ (teamMonthlyTarget.getQuantity() / lastDate)
															* sample.getNumberOfDays();
											tgtDiaValue = tgtDiaValue + (teamMonthlyTarget.getValue() / lastDate)
													* sample.getNumberOfDays();

										}

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

					for (Sample1 sample : listOfActualsAndTargetsForD2H) {
						String startDateTimeline = sample.getStartDateTimeline();
						LocalDate localStartDateTimeline = LocalDate.parse(startDateTimeline);

						LocalDate nextDay = localStartDateTimeline.plusDays(1);
						startDateTimeline = nextDay.toString();

						if (!sample.getSale().isEmpty()) {
							for (Sales sale : sample.getSale()) {

								for (Location location : locations) {
									if (sale.getLocation().getId().equals(location.getId())
											&& sale.getLocation().getChannel().getId().equals(channelId)) {
										if (sale.getItemType().equalsIgnoreCase("Gold")) {

											monthlyActualGoldQuantity = monthlyActualGoldQuantity
													+ sale.getGrossWeight();
											monthlyActualGoldValue = monthlyActualGoldValue + sale.getTotalSoldAmount();
											goldQuantityActual = goldQuantityActual + sale.getGrossWeight();
											goldValueActual = goldValueActual + sale.getTotalSoldAmount();

										} else if (sale.getItemType().equalsIgnoreCase("Diamond")) {
											monthlyActualDiamondQuantity = monthlyActualDiamondQuantity
													+ sale.getDiamondWeight();

											monthlyActualDiamondValue = monthlyActualDiamondValue
													+ sale.getTotalSoldAmount();
											diamondQuantityActual = diamondQuantityActual + sale.getDiamondWeight();
											diamondValueActual = diamondValueActual + sale.getTotalSoldAmount();

										}

										SalesReturns salesReturns = salesReturnsRepo.findBySales(sale);

										if (salesReturns != null) {

											if (sale.getItemType().equalsIgnoreCase("Gold")) {

												salesReturnGoldQuantity = salesReturnGoldQuantity
														+ salesReturns.getGrossWeight();
												salesReturnGoldQuantityDetails = salesReturnGoldQuantityDetails
														+ salesReturns.getGrossWeight();
												salesReturnGoldValue = salesReturnGoldValue
														+ salesReturns.getAmountPayable();
												salesReturnGoldValueDetails = salesReturnGoldValueDetails
														+ salesReturns.getAmountPayable();
												monthlyActualGoldQuantity -= salesReturnGoldQuantity;
												monthlyActualGoldValue -= salesReturnGoldValue;

											} else if (sale.getItemType().equalsIgnoreCase("Diamond")) {

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

						} else {

							monthlyActualGoldQuantity += 0.0;
							monthlyActualGoldValue += 0.0;
							monthlyActualDiamondQuantity += 0.0;
							monthlyActualDiamondValue += 0.0;

						}

					}

					actualGoldQuantity.add(monthlyActualGoldQuantity / 1000);
					actualGoldValue.add(monthlyActualGoldValue / 100000);
					actualDiamondQuantity.add(monthlyActualDiamondQuantity);
					actualDiamondValue.add(monthlyActualDiamondValue / 100000);

				}

			}

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

			finalActualQuantity.setDiamond((diamondQuantityActual - salesReturnDiamondQuantityDetails));
			finalActualQuantity.setGold((goldQuantityActual - salesReturnGoldQuantityDetails) / 1000);
			finalActualValue.setDiamond((diamondValueActual - salesReturnDiamondValueDetails) / 100000);
			finalActualValue.setGold((goldValueActual - salesReturnGoldValueDetails) / 100000);

			finalTargetQuantity.setDiamond(tgtDiaquantity);
			finalTargetQuantity.setGold(tgtGoldQuantity);
			finalTargetValue.setDiamond(tgtDiaValue);
			finalTargetValue.setGold(tgtGoldValue);

			finalActualQuantityValue.setQty(finalActualQuantity);

			finalActualQuantityValue.setValue(finalActualValue);

			targetVsActual.setActuals(finalActualQuantityValue);

			finalTargetQuantity.setDiamond(tgtDiaquantity);
			finalTargetQuantity.setGold(tgtGoldQuantity);
			finalTargetValue.setDiamond(tgtDiaValue);
			finalTargetValue.setGold(tgtGoldValue);

			finalTargetQuantityValue.setQty(finalTargetQuantity);

			finalTargetQuantityValue.setValue(finalTargetValue);

			targetVsActual.setTarget(finalTargetQuantityValue);

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
			response.setError(EnumTypeForErrorCodes.SCUS806.name(), EnumTypeForErrorCodes.SCUS806.errorMsg());
			response.setMessage(EnumTypeForErrorCodes.SCUS806.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}
		return response;
	}

}

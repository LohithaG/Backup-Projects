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
import org.springframework.stereotype.Service;

import com.mss.pmj.pmjmis.common.EnumTypeForErrorCodes;
import com.mss.pmj.pmjmis.common.Utils;
import com.mss.pmj.pmjmis.domain.Channel;
import com.mss.pmj.pmjmis.domain.EmpDailyActuals;
import com.mss.pmj.pmjmis.domain.Employee;
import com.mss.pmj.pmjmis.domain.Location;
import com.mss.pmj.pmjmis.domain.Team;
import com.mss.pmj.pmjmis.domain.TeamItemMonthlyTarget;
import com.mss.pmj.pmjmis.repos.ChannelRepository;
import com.mss.pmj.pmjmis.repos.EmpDailyActualsRepository;
import com.mss.pmj.pmjmis.repos.LocationRepository;
import com.mss.pmj.pmjmis.repos.TeamItemMonthlyTargetRepository;
import com.mss.pmj.pmjmis.repos.TeamRepository;
import com.mss.pmj.pmjmis.response.ConversionFactorActuals;
import com.mss.pmj.pmjmis.response.ConversionFactorD2HStateDetails;
import com.mss.pmj.pmjmis.response.ConversionFactorDiamond;
import com.mss.pmj.pmjmis.response.ConversionFactorGold;
import com.mss.pmj.pmjmis.response.ConversionFactorTargets;
import com.mss.pmj.pmjmis.response.ConversionFactorWalkins;
import com.mss.pmj.pmjmis.response.D2HConversionFactorStateData;
import com.mss.pmj.pmjmis.response.TargetVsActualResponse;
import com.mss.pmj.pmjmis.svcs.ConversionFactorD2HTeamWiseService;

@Service
@SuppressWarnings("rawtypes")
public class ConversionFactorD2HTeamWiseServiceImpl implements ConversionFactorD2HTeamWiseService {

	private static Logger log = LoggerFactory.getLogger(ConversionFactorD2HTeamWiseServiceImpl.class);

	@Autowired
	private Utils utils;

	@Autowired
	private LocationRepository locationRepo;

	@Autowired
	private ChannelRepository channelRepo;

	@Autowired
	TeamItemMonthlyTargetRepository teamItemMonthlyTargetRepo;

	@Autowired
	private TeamRepository teamRepo;

	@Autowired
	private EmpDailyActualsRepository empDailyActualsRepo;

	private static final String DATEFORMATE = "MMM-yyyy";

	@SuppressWarnings("unchecked")
	@Override
	public TargetVsActualResponse<D2HConversionFactorStateData> getTeamWiseD2HStateTargetVsActual(String location,
			String startDate, String endDate) {

		log.info("getting Conversion Factors TeamWise target vs actual sales ");

		TargetVsActualResponse<D2HConversionFactorStateData> response = new TargetVsActualResponse<>();

		D2HConversionFactorStateData<org.json.simple.JSONObject> data = new D2HConversionFactorStateData<>();

		org.json.simple.JSONObject d2HDetails = new org.json.simple.JSONObject();

		List<String> teamList = new ArrayList<>();

		try {

			Channel channel = channelRepo.findByChannelName("D2H");

			Location locationObj = locationRepo.findByLocationCode(location);
			List<Team> d2hTeams = teamRepo.findByLocation(locationObj);

			for (Team team : d2hTeams) {

				teamList.add("Team " + team.getTeamNum());

			}

			D2HConversionFactorStateData<ConversionFactorD2HStateDetails> targets = conversionFactorD2HTargets(d2hTeams,
					startDate, endDate);

			D2HConversionFactorStateData<ConversionFactorD2HStateDetails> actuals = conversionFactorD2HActuals(d2hTeams,
					startDate, endDate, channel);

			d2HDetails.put("teams", teamList);
			d2HDetails.put("actuals", actuals.getDetails().getActuals());

			d2HDetails.put("walkins", actuals.getDetails().getWalkins());

			d2HDetails.put("targets", targets.getDetails().getTargets());

			data.setDetails(d2HDetails);

			data.setGoldtotalwalkins(actuals.getGoldtotalwalkins());

			data.setGoldpreferredwalkins(actuals.getGoldpreferredwalkins());

			data.setDiatotalwalkins(actuals.getDiatotalwalkins());

			data.setDiapreferredwalkins(actuals.getDiapreferredwalkins());

			response.setStatus(HttpServletResponse.SC_OK);
			response.setMessage("successful");
			response.setFromDate(startDate);
			response.setToDate(endDate);
			response.setData(data);

		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS842.name(), EnumTypeForErrorCodes.SCUS842.errorMsg());
			log.error(utils.toJson(response.getError()), e);
			response.setMessage(EnumTypeForErrorCodes.SCUS842.errorMsg());
		}
		return response;

	}

	public D2HConversionFactorStateData<ConversionFactorD2HStateDetails> conversionFactorD2HTargets(List<Team> d2hTeams,
			String startDate, String endDate) {

		log.info("getting Conversion Factors Team wise targets");

		D2HConversionFactorStateData<ConversionFactorD2HStateDetails> data = new D2HConversionFactorStateData<>();

		ConversionFactorD2HStateDetails d2HDetails = new ConversionFactorD2HStateDetails();

		try {

			LocalDate localStartDate = LocalDate.parse(startDate);
			LocalDate localEndDate = LocalDate.parse(endDate);

			String date1 = localStartDate.getMonth() + "-" + localStartDate.getYear();
			String date2 = localEndDate.getMonth() + "-" + localEndDate.getYear();

			DateFormat formater = new SimpleDateFormat(DATEFORMATE);

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

			ConversionFactorTargets targets = new ConversionFactorTargets();

			List<Double> targetGoldConversion = new ArrayList<>();
			List<Double> targetDiamondConversion = new ArrayList<>();

			for (Team eachTeam : d2hTeams) {
				Double monthlyTargetGoldValue = 0.0;
				Double monthlyTargetDiamondValue = 0.0;

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

							String[] splitted = datesList.get(i).split("-");
							monthlyTargetForD2H = teamItemMonthlyTargetRepo.findByTeamAndMonthAndYear(eachTeam,
									splitted[0], splitted[1]);
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
						String[] splitted = datesList.get(i).split("-");
						monthlyTargetForD2H = teamItemMonthlyTargetRepo.findByTeamAndMonthAndYear(eachTeam, splitted[0],
								splitted[1]);
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

						String[] splitted = datesList.get(i).split("-");

						monthlyTargetForD2H = teamItemMonthlyTargetRepo.findByTeamAndMonthAndYear(eachTeam, splitted[0],
								splitted[1]);
						noOfDaysBetween = ChronoUnit.DAYS.between(firstday, localEndDate) + 1;
					}

					for (TeamItemMonthlyTarget teamMonthlyTarget : monthlyTargetForD2H) {

						Date date10 = new SimpleDateFormat("MMMM-yyyy")
								.parse(teamMonthlyTarget.getMonth() + "-" + teamMonthlyTarget.getYear());

						Calendar cal = Calendar.getInstance();
						cal.setTime(date10);

						if (teamMonthlyTarget.getItemType().equalsIgnoreCase("Gold")) {

							monthlyTargetGoldValue = monthlyTargetGoldValue + teamMonthlyTarget.getConversion();

						} else if (teamMonthlyTarget.getItemType().equalsIgnoreCase("Diamond")) {
							monthlyTargetDiamondValue = monthlyTargetDiamondValue + teamMonthlyTarget.getConversion();
						}

					}

				}
				targetGoldConversion.add(monthlyTargetGoldValue);
				targetDiamondConversion.add(monthlyTargetDiamondValue);

			}

			targets.setGold(targetGoldConversion);

			targets.setDiamond(targetDiamondConversion);

			d2HDetails.setTargets(targets);

			data.setDetails(d2HDetails);

		} catch (Exception e) {
			log.error("Error in getting Conversion Factors Team wise targets", e);
		}
		return data;
	}

	public D2HConversionFactorStateData<ConversionFactorD2HStateDetails> conversionFactorD2HActuals(List<Team> d2hTeams,
			String startDate, String endDate, Channel channel) {

		log.info("get Conversion Factors Team wise actual");

		D2HConversionFactorStateData<ConversionFactorD2HStateDetails> data = new D2HConversionFactorStateData<>();

		ConversionFactorD2HStateDetails d2HDetails = new ConversionFactorD2HStateDetails();

		Double goldtotalwalkins = 0.0;
		Double goldpreferredwalkins = 0.0;
		Double diatotalwalkins = 0.0;
		Double diapreferredwalkins = 0.0;

		try {

			ConversionFactorActuals actuals = new ConversionFactorActuals();

			ConversionFactorWalkins walkins = new ConversionFactorWalkins();

			ConversionFactorGold goldWalkins = new ConversionFactorGold();

			ConversionFactorDiamond diamondWalkins = new ConversionFactorDiamond();

			List<Double> actualGoldValue = new ArrayList<>();
			List<Double> actualDiamondValue = new ArrayList<>();

			List<Double> goldTotalWalkins = new ArrayList<>();
			List<Double> goldPrefferedWalkins = new ArrayList<>();
			List<Double> diamondTotalWalkins = new ArrayList<>();
			List<Double> diamondPrefferedWalkins = new ArrayList<>();

			Double monthlyActualGoldValue = 0.0;
			Double monthlyActualDiamondValue = 0.0;

			for (Team team : d2hTeams) {
				Double goldPrefferedCount = 0.0;
				Double diamondPrefferedCount = 0.0;

				Double goldTotalCount = 0.0;
				Double diamondTotalCount = 0.0;

				for (Employee employee : team.getEmp()) {

					List<EmpDailyActuals> listOfemployeeTgt = empDailyActualsRepo
							.findByStartDateAndEndDateAndEmpAndChannel(startDate, endDate, employee, channel);

					for (EmpDailyActuals sale : listOfemployeeTgt) {

						if (sale.getItemType().equalsIgnoreCase("Gold")) {

							goldtotalwalkins = goldtotalwalkins + 1;
							goldTotalCount = goldTotalCount + 1;

							if (sale.getSale().equals(true)) {

								goldpreferredwalkins = goldpreferredwalkins + 1;
								goldPrefferedCount = goldPrefferedCount + 1;
							}
						} else if (sale.getItemType().equalsIgnoreCase("Diamond")) {

							diamondTotalCount = diamondTotalCount + 1;
							diatotalwalkins = diatotalwalkins + 1;
							if (sale.getSale().equals(true)) {
								diapreferredwalkins = diapreferredwalkins + 1;
								diamondPrefferedCount = diamondPrefferedCount + 1;
							}
						}

					}

				}
				goldTotalWalkins.add(goldTotalCount);
				goldPrefferedWalkins.add(goldPrefferedCount);
				monthlyActualGoldValue = goldTotalCount > 0 ? (goldPrefferedCount / goldTotalCount) * 100 : 0.0;

				diamondTotalWalkins.add(diamondTotalCount);
				diamondPrefferedWalkins.add(diamondPrefferedCount);
				monthlyActualDiamondValue = diamondTotalCount > 0 ? (diamondPrefferedCount / diamondTotalCount) * 100
						: 0.0;
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

			goldWalkins.setTotalWalkins(goldTotalWalkins);
			goldWalkins.setPreferredWalkins(goldPrefferedWalkins);
			diamondWalkins.setTotalWalkins(diamondTotalWalkins);
			diamondWalkins.setPreferredWalkins(diamondPrefferedWalkins);

			walkins.setGold(goldWalkins);

			walkins.setDiamond(diamondWalkins);

			actuals.setDiamond(actualDiamondValue);

			actuals.setGold(actualGoldValue);

			d2HDetails.setActuals(actuals);

			d2HDetails.setWalkins(walkins);

			data.setDetails(d2HDetails);

			data.setGoldtotalwalkins(goldtotalwalkins);

			data.setGoldpreferredwalkins(goldpreferredwalkins);

			data.setDiatotalwalkins(diatotalwalkins);

			data.setDiapreferredwalkins(diapreferredwalkins);

		} catch (Exception e) {
			log.error("getting Conversion Factors Team wise actual", e);
		}
		return data;

	}

}

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
import com.mss.pmj.pmjmis.domain.Channel;
import com.mss.pmj.pmjmis.domain.Employee;
import com.mss.pmj.pmjmis.domain.Location;
import com.mss.pmj.pmjmis.domain.Sales;
import com.mss.pmj.pmjmis.domain.Team;
import com.mss.pmj.pmjmis.repos.ChannelRepository;
import com.mss.pmj.pmjmis.repos.LocationRepository;
import com.mss.pmj.pmjmis.repos.SalesRepository;
import com.mss.pmj.pmjmis.repos.TeamRepository;
import com.mss.pmj.pmjmis.response.Dates;
import com.mss.pmj.pmjmis.response.LocationSalePriceActuals;
import com.mss.pmj.pmjmis.response.LocationTagPriceActuals;
import com.mss.pmj.pmjmis.response.SalePrice;
import com.mss.pmj.pmjmis.response.Sample2;
import com.mss.pmj.pmjmis.response.TagPrice;
import com.mss.pmj.pmjmis.response.TagpricetoSalesDataD2HStateandClusterandLocation;
import com.mss.pmj.pmjmis.response.TagpricetoSalesResponse;
import com.mss.pmj.pmjmis.response.TagpricetoSalesValue;
import com.mss.pmj.pmjmis.response.Tagpricetosalesdetailsteamwise;
import com.mss.pmj.pmjmis.response.Tagteamwisetimeline;
import com.mss.pmj.pmjmis.svcs.TagPricetoSalesD2hServiceStateandClusterTeam;

@RestController
public class TagPricetoSalesD2hServiceStateandClusterTeamImpl implements TagPricetoSalesD2hServiceStateandClusterTeam {

	private static Logger log = LoggerFactory.getLogger(TagPricetoSalesD2hServiceStateandClusterTeamImpl.class);

	@Autowired
	private Utils utils;

	@Autowired
	private SalesRepository salesRepo;

	@Autowired
	private LocationRepository locationRepo;

	@Autowired
	private ChannelRepository channelRepo;

	@Autowired
	private TeamRepository teamRepo;

	private static final String DATE_FORMATE = "MMM-yyyy";

	// Getting Tagprice to Sales By Month

	public TagpricetoSalesResponse<TagpricetoSalesDataD2HStateandClusterandLocation> getTagpricetoSalesByMonth(
			String state, String cluster, String location, String startDate, String endDate) {
		log.info("Tag Price to Sales Implementation by Month");

		TagpricetoSalesResponse<TagpricetoSalesDataD2HStateandClusterandLocation> tagpricetoSalesDataD2HStateandClusterandLocation = new TagpricetoSalesResponse<>();

		TagpricetoSalesDataD2HStateandClusterandLocation locationteams = new TagpricetoSalesDataD2HStateandClusterandLocation();

		Tagpricetosalesdetailsteamwise tagpricetosalesdetailsteamwise = new Tagpricetosalesdetailsteamwise();

		Tagteamwisetimeline tagteam = new Tagteamwisetimeline();

		LocationTagPriceActuals locationTagPriceActuals = new LocationTagPriceActuals();

		LocationSalePriceActuals locationSalePriceActuals = new LocationSalePriceActuals();

		TagPrice tagPrice1 = new TagPrice();

		SalePrice salePrice1 = new SalePrice();

		String d = "diamond";
		String g = "gold";
		String t = "team";

		Double totalgoldtagprice = 0.0;
		Double totaldiamondtagprice = 0.0;
		Double totalgoldsaleprice = 0.0;
		Double totaldiamondsaleprice = 0.0;

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

			TagpricetoSalesValue actulas = new TagpricetoSalesValue();

			TagpricetoSalesValue timelineactuals = new TagpricetoSalesValue();

			Channel channel = channelRepo.findByChannelName("D2H");

			List<Location> locationObj = locationRepo.findByLocationCodeAndChannel(location, channel);

			List<Double> goldTagPrice = new ArrayList<>();
			List<Double> goldSalePrice = new ArrayList<>();
			List<Double> diamondTagPrice = new ArrayList<>();
			List<Double> diamondsalePrice = new ArrayList<>();

			LocationTagPriceActuals tagPrice = new LocationTagPriceActuals();
			LocationSalePriceActuals salePrice = new LocationSalePriceActuals();

			List<Double> timeLinegoldTagPrice = new ArrayList<>();
			List<Double> timeLinegoldSalePrice = new ArrayList<>();
			List<Double> timeLinediamondTagPrice = new ArrayList<>();
			List<Double> timeLinediamondsalePrice = new ArrayList<>();

			List<String> timeline = new ArrayList<>();
			List<String> teamnames = new ArrayList<>();

			for (int i = 0; i < datesList.size(); i++) {

				Collection<Sales> tagpricetosales = null;

				long noOfDaysBetween = 0l;

				if (i == 0) {

					if (date1.equals(date2)) {

						tagpricetosales = salesRepo.findByStartDateAndEndDate(startDate, endDate);

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
						tagpricetosales = salesRepo.findByStartDateAndEndDate(startDate, lastDay1);
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
					tagpricetosales = salesRepo.findByStartDateAndEndDate(firstDay1, lastDay1);
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
					tagpricetosales = salesRepo.findByStartDateAndEndDate(firstDay1, endDate);

				}

				timeline.add(datesList.get(i));

				if (!tagpricetosales.isEmpty()) {

					double timeLinegoldTag = 0.0;
					double timeLinegoldSale = 0.0;
					double timeLinediamondTag = 0.0;
					double timeLinediamondSale = 0.0;

					for (Sales sales : tagpricetosales) {
						if (sales.getLocation().getChannel().getId().equals(2l)
								&& sales.getLocation().getState().equalsIgnoreCase(state)
								&& sales.getLocation().getCluster().equalsIgnoreCase(cluster)
								&& sales.getLocation().getLocationCode().equalsIgnoreCase(location)) {

							if (sales.getItemType().equalsIgnoreCase(g)) {
								timeLinegoldTag = timeLinegoldTag + sales.getTagPrice();

								timeLinegoldSale = timeLinegoldSale + sales.getTotalSoldAmount();

								totalgoldtagprice = totalgoldtagprice + sales.getTagPrice();
								totalgoldsaleprice = totalgoldsaleprice + sales.getTotalSoldAmount();

							} else if (sales.getItemType().equalsIgnoreCase(d)) {
								timeLinediamondTag = timeLinediamondTag + sales.getTagPrice();

								timeLinediamondSale = timeLinediamondSale + sales.getTotalSoldAmount();

								totaldiamondtagprice = totaldiamondtagprice + sales.getTagPrice();
								totaldiamondsaleprice = totaldiamondsaleprice + sales.getTotalSoldAmount();
							}

						}
					}
					timeLinegoldTagPrice.add(timeLinegoldTag / 100000);
					timeLinegoldSalePrice.add(timeLinegoldSale / 100000);
					timeLinediamondTagPrice.add(timeLinediamondTag / 100000);
					timeLinediamondsalePrice.add(timeLinediamondSale / 100000);

				} else {

					timeLinegoldTagPrice.add(0.0);
					timeLinegoldSalePrice.add(0.0);
					timeLinediamondTagPrice.add(0.0);
					timeLinediamondsalePrice.add(0.0);
				}

			}

			for (Location locationcode : locationObj) {

				List<Team> teamnames1 = teamRepo.findByLocation(locationcode);

				for (Team team : teamnames1) {

					double goldTag = 0.0;
					double goldSale = 0.0;
					double diamondTag = 0.0;
					double diamondSale = 0.0;

					teamnames.add(t + team.getTeamNum());

					for (Employee employee : team.getEmp()) {

						List<Sales> salesActualsList = salesRepo.findByStartDateAndEndDateAndEmployee(startDate,
								endDate, employee.getId());

						for (Sales sale : salesActualsList) {
							if (sale.getLocation().getChannel().getId().equals(2l)) {
								if (sale.getItemType().equalsIgnoreCase(g)) {

									goldTag = goldTag + sale.getTagPrice();
									goldSale = goldSale + sale.getTotalSoldAmount();

								} else if (sale.getItemType().equalsIgnoreCase(d)) {

									diamondTag = diamondTag + sale.getTagPrice();

									diamondSale = diamondSale + sale.getTotalSoldAmount();

								}

							}
						}
					}
					goldTagPrice.add(goldTag / 100000);
					goldSalePrice.add(goldSale / 100000);
					diamondTagPrice.add(diamondTag / 100000);
					diamondsalePrice.add(diamondSale / 100000);

				}

				tagPrice.setDiamond(diamondTagPrice);
				tagPrice.setGold(goldTagPrice);
				salePrice.setDiamond(diamondsalePrice);
				salePrice.setGold(goldSalePrice);

				actulas.setSaleprice(salePrice);
				actulas.setTagprice(tagPrice);

				tagteam.setActuals(actulas);
				tagteam.setTimeline(timeline);
				tagteam.setClusters(tagpricetosalesdetailsteamwise);

				tagpricetosalesdetailsteamwise.setLocations(teamnames);
				tagpricetosalesdetailsteamwise.setActuals(actulas);

				tagPrice1.setDiamond(totaldiamondtagprice / 100000);
				tagPrice1.setGold(totalgoldtagprice / 100000);

				salePrice1.setDiamond(totaldiamondsaleprice / 100000);

				salePrice1.setGold(totalgoldsaleprice / 100000);

				locationTagPriceActuals.setDiamond(timeLinediamondTagPrice);
				locationTagPriceActuals.setGold(timeLinegoldTagPrice);
				locationSalePriceActuals.setDiamond(timeLinediamondsalePrice);
				locationSalePriceActuals.setGold(timeLinegoldSalePrice);

				timelineactuals.setSaleprice(locationSalePriceActuals);
				timelineactuals.setTagprice(locationTagPriceActuals);

				tagteam.setActuals(timelineactuals);

				Double totalTagPrice1 = tagPrice1.getDiamond() + tagPrice1.getGold();

				Double totalSalePrice1 = salePrice1.getDiamond() + salePrice1.getGold();

				locationteams.setTotalsaleprice(totalSalePrice1);
				locationteams.setTotaltagprice(totalTagPrice1);
				Double totalmargin = ((totalSalePrice1 - totalTagPrice1) / totalTagPrice1) * 100;
				locationteams.setTotalmargin((totalmargin.isNaN() || totalmargin.isInfinite()) ? 0.0 : totalmargin);
				locationteams.setState(state);
				locationteams.setCluster(cluster);
				locationteams.setLocation(location);
				locationteams.setSaleprice(salePrice1);
				locationteams.setTagprice(tagPrice1);
				locationteams.setD2hdetails(tagteam);

				tagpricetoSalesDataD2HStateandClusterandLocation.setStatus(HttpServletResponse.SC_OK);
				tagpricetoSalesDataD2HStateandClusterandLocation.setMessage("tag d2h month successful");
				tagpricetoSalesDataD2HStateandClusterandLocation.setFromDate(startDate);
				tagpricetoSalesDataD2HStateandClusterandLocation.setToDate(endDate);
				tagpricetoSalesDataD2HStateandClusterandLocation.setData(locationteams);

			}
		} catch (Exception e) {
			log.info("team");
		}
		return tagpricetoSalesDataD2HStateandClusterandLocation;
	}

	public TagpricetoSalesResponse<TagpricetoSalesDataD2HStateandClusterandLocation> getTagpricetoSalesByDay(
			String state, String cluster, String location, String startDate, String endDate) {
		log.info("Tag Price to Sales Implementation");

		TagpricetoSalesResponse<TagpricetoSalesDataD2HStateandClusterandLocation> tagpricetoSalesDataD2HStateandClusterandLocation = new TagpricetoSalesResponse<>();

		TagpricetoSalesDataD2HStateandClusterandLocation locationteams = new TagpricetoSalesDataD2HStateandClusterandLocation();

		Tagpricetosalesdetailsteamwise tagpricetosalesdetailsteamwise = new Tagpricetosalesdetailsteamwise();

		Tagteamwisetimeline tagteam = new Tagteamwisetimeline();

		LocationTagPriceActuals locationTagPriceActuals = new LocationTagPriceActuals();

		LocationSalePriceActuals locationSalePriceActuals = new LocationSalePriceActuals();

		TagPrice tagPrice1 = new TagPrice();

		SalePrice salePrice1 = new SalePrice();

		String d = "diamond";
		String g = "gold";

		Double totalgoldtagprice = 0.0;
		Double totaldiamondtagprice = 0.0;
		Double totalgoldsaleprice = 0.0;
		Double totaldiamondsaleprice = 0.0;
		Double totalTagPrice = 0.0;
		Double totalSalePrice = 0.0;

		List<Double> goldTagPrice = new ArrayList<>();
		List<Double> goldSalePrice = new ArrayList<>();
		List<Double> diamondTagPrice = new ArrayList<>();
		List<Double> diamondsalePrice = new ArrayList<>();
		LocationTagPriceActuals tagPrice = new LocationTagPriceActuals();
		LocationSalePriceActuals salePrice = new LocationSalePriceActuals();

		List<Double> timeLinegoldTagPrice = new ArrayList<>();
		List<Double> timeLinegoldSalePrice = new ArrayList<>();
		List<Double> timeLinediamondTagPrice = new ArrayList<>();
		List<Double> timeLinediamondsalePrice = new ArrayList<>();

		try {

			Channel channel = channelRepo.findByChannelName("D2H");

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
			List<String> teamnames = new ArrayList<>();

			while (beginCalendar.before(finishCalendar)) {
				String date = formater.format(beginCalendar.getTime()).toUpperCase();
				beginCalendar.add(Calendar.MONTH, 1);
				datesList.add(date);
			}

			String lastMonth = formater.format(finishCalendar.getTime()).toUpperCase();
			datesList.add(lastMonth);
			TagpricetoSalesValue actulas = new TagpricetoSalesValue();
			TagpricetoSalesValue timelineactuals = new TagpricetoSalesValue();

			List<Location> locationObj = locationRepo.findByLocationCodeAndChannel(location, channel);

			List<String> timeline = new ArrayList<>();
			Collection<Sales> tagpricetosales = null;

			long noOfDaysBetween = 0l;
			String startDateTimeline = null;
			String endDateTimeline = null;

			List<Sample2> sampList = new ArrayList<>();

			if (datesList.size() == 1) {
				Sample2 samp = new Sample2();
				tagpricetosales = salesRepo.findByStartDateAndEndDate(startDate, endDate);
				noOfDaysBetween = ChronoUnit.DAYS.between(localStartDate, localEndDate) + 1;
				startDateTimeline = startDate;
				endDateTimeline = endDate;
				samp.setNumberOfDays(noOfDaysBetween);
				samp.setEndDateTimeline(endDateTimeline);
				samp.setTagpricetosales(tagpricetosales);
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
						Sample2 samp = new Sample2();
						String lastDay1 = datesList.get(i).substring(4, 8) + "-" + m + "-" + lastDay;
						LocalDate day = LocalDate.parse(lastDay1);
						tagpricetosales = salesRepo.findByStartDateAndEndDate(startDate, lastDay1);
						noOfDaysBetween = ChronoUnit.DAYS.between(localStartDate, day) + 1;

						startDateTimeline = startDate;
						endDateTimeline = lastDay1;
						samp.setNumberOfDays(noOfDaysBetween);
						samp.setStartDateTimeline(startDateTimeline);
						samp.setEndDateTimeline(endDateTimeline);
						samp.setTagpricetosales(tagpricetosales);
						sampList.add(samp);

					} else {
						Sample2 samp = new Sample2();
						String firstDay1 = datesList.get(i).substring(4, 8) + "-" + m + "-" + "01";
						LocalDate day = LocalDate.parse(firstDay1);
						tagpricetosales = salesRepo.findByStartDateAndEndDate(firstDay1, endDate);

						noOfDaysBetween = ChronoUnit.DAYS.between(day, localEndDate) + 1;
						startDateTimeline = firstDay1;
						endDateTimeline = endDate;

						samp.setNumberOfDays(noOfDaysBetween);
						samp.setStartDateTimeline(startDateTimeline);
						samp.setEndDateTimeline(endDateTimeline);
						samp.setTagpricetosales(tagpricetosales);
						sampList.add(samp);
					}

				}
			}

			for (Sample2 sample : sampList) {

				startDateTimeline = sample.getStartDateTimeline();

				for (int i = 0; i < sample.getNumberOfDays(); i++) {
					double timeLinegoldTag = 0.0;
					double timeLinegoldSale = 0.0;
					double timeLinediamondTag = 0.0;
					double timeLinediamondSale = 0.0;

					List<Sales> saleExists = salesRepo.findByTransactionDate(startDateTimeline);
					LocalDate localStartDateTimeline = LocalDate.parse(startDateTimeline);
					final String DATE_FORMATTER = "dd-MM-yyyy";
					DateTimeFormatter formatter = DateTimeFormatter.ofPattern(DATE_FORMATTER);
					String formatDateTime = localStartDateTimeline.format(formatter);

					timeline.add(formatDateTime);
					LocalDate nextDay = localStartDateTimeline.plusDays(1);
					startDateTimeline = nextDay.toString();

					if (!saleExists.isEmpty()) {

						for (Sales sales : saleExists) {
							if (sales.getLocation().getChannel().getId().equals(2l)
									&& sales.getLocation().getState().equalsIgnoreCase(state)
									&& sales.getLocation().getCluster().equalsIgnoreCase(cluster)
									&& sales.getLocation().getLocationCode().equalsIgnoreCase(location)) {
								if (sales.getItemType().equalsIgnoreCase(g)) {
									timeLinegoldTag = timeLinegoldTag + sales.getTagPrice();

									timeLinegoldSale = timeLinegoldSale + sales.getTotalSoldAmount();

									totalgoldtagprice = totalgoldtagprice + sales.getTagPrice();
									totalgoldsaleprice = totalgoldsaleprice + sales.getTotalSoldAmount();

								} else if (sales.getItemType().equalsIgnoreCase(d)) {
									timeLinediamondTag = timeLinediamondTag + sales.getTagPrice();

									timeLinediamondSale = timeLinediamondSale + sales.getTotalSoldAmount();

									totaldiamondtagprice = totaldiamondtagprice + sales.getTagPrice();
									totaldiamondsaleprice = totaldiamondsaleprice + sales.getTotalSoldAmount();
								}

							}
						}
						timeLinegoldTagPrice.add(timeLinegoldTag / 100000);
						timeLinegoldSalePrice.add(timeLinegoldSale / 100000);
						timeLinediamondTagPrice.add(timeLinediamondTag / 100000);
						timeLinediamondsalePrice.add(timeLinediamondSale / 100000);

					} else {

						timeLinegoldTagPrice.add(0.0);
						timeLinegoldSalePrice.add(0.0);
						timeLinediamondTagPrice.add(0.0);
						timeLinediamondsalePrice.add(0.0);
					}

				}
			}

			for (Location locationcode : locationObj) {

				List<Team> teamnames1 = teamRepo.findByLocation(locationcode);

				for (Team team : teamnames1) {

					double goldTag = 0.0;
					double goldSale = 0.0;
					double diamondTag = 0.0;
					double diamondSale = 0.0;

					teamnames.add("Team-" + team.getTeamNum());

					for (Employee employee : team.getEmp()) {

						List<Sales> salesActualsList = salesRepo.findByStartDateAndEndDateAndEmployee(startDate,
								endDate, employee.getId());

						for (Sales sale : salesActualsList) {
							if (sale.getLocation().getChannel().getId().equals(2l)) {
								if (sale.getItemType().equalsIgnoreCase(g)) {

									goldTag = goldTag + sale.getTagPrice();
									goldSale = goldSale + sale.getTotalSoldAmount();

								} else if (sale.getItemType().equalsIgnoreCase(d)) {

									diamondTag = diamondTag + sale.getTagPrice();

									diamondSale = diamondSale + sale.getTotalSoldAmount();

								}

							}
						}
					}
					goldTagPrice.add(goldTag / 100000);
					goldSalePrice.add(goldSale / 100000);
					diamondTagPrice.add(diamondTag / 100000);
					diamondsalePrice.add(diamondSale / 100000);

				}

				tagPrice.setDiamond(diamondTagPrice);
				tagPrice.setGold(goldTagPrice);
				salePrice.setDiamond(diamondsalePrice);
				salePrice.setGold(goldSalePrice);

				actulas.setSaleprice(salePrice);
				actulas.setTagprice(tagPrice);
				tagpricetosalesdetailsteamwise.setLocations(teamnames);
				tagpricetosalesdetailsteamwise.setActuals(actulas);
				tagteam.setTimeline(timeline);
				tagteam.setClusters(tagpricetosalesdetailsteamwise);

				tagPrice1.setDiamond(totaldiamondtagprice / 100000);
				tagPrice1.setGold(totalgoldtagprice / 100000);

				salePrice1.setDiamond(totaldiamondsaleprice / 100000);

				salePrice1.setGold(totalgoldsaleprice / 100000);

				locationTagPriceActuals.setDiamond(timeLinediamondTagPrice);
				locationTagPriceActuals.setGold(timeLinegoldTagPrice);
				locationSalePriceActuals.setDiamond(timeLinediamondsalePrice);
				locationSalePriceActuals.setGold(timeLinegoldSalePrice);

				timelineactuals.setSaleprice(locationSalePriceActuals);
				timelineactuals.setTagprice(locationTagPriceActuals);

				tagteam.setActuals(timelineactuals);

				totalTagPrice = tagPrice1.getDiamond() + tagPrice1.getGold();

				totalSalePrice = salePrice1.getDiamond() + salePrice1.getGold();

				locationteams.setTotalsaleprice(totalSalePrice);
				locationteams.setTotaltagprice(totalTagPrice);
				Double totalmargin = ((totalSalePrice - totalTagPrice) / totalTagPrice) * 100;
				locationteams.setTotalmargin((totalmargin.isNaN() || totalmargin.isInfinite()) ? 0.0 : totalmargin);
				locationteams.setState(state);
				locationteams.setCluster(cluster);
				locationteams.setLocation(location);
				locationteams.setSaleprice(salePrice1);
				locationteams.setTagprice(tagPrice1);
				locationteams.setD2hdetails(tagteam);

				tagpricetoSalesDataD2HStateandClusterandLocation.setStatus(HttpServletResponse.SC_OK);
				tagpricetoSalesDataD2HStateandClusterandLocation.setMessage("tag d2h day successful");
				tagpricetoSalesDataD2HStateandClusterandLocation.setFromDate(startDate);
				tagpricetoSalesDataD2HStateandClusterandLocation.setToDate(endDate);
				tagpricetoSalesDataD2HStateandClusterandLocation.setData(locationteams);

			}
		} catch (Exception e) {
			log.info("team");
		}
		return tagpricetoSalesDataD2HStateandClusterandLocation;
	}

	public TagpricetoSalesResponse<TagpricetoSalesDataD2HStateandClusterandLocation> getTagpricetoSalesByWeek(
			String state, String cluster, String location, String startDate, String endDate) {
		log.info("Tag Price to Sales Implementation");

		TagpricetoSalesResponse<TagpricetoSalesDataD2HStateandClusterandLocation> tagpricetoSalesDataD2HStateandClusterandLocation = new TagpricetoSalesResponse<>();

		TagpricetoSalesDataD2HStateandClusterandLocation locationteams = new TagpricetoSalesDataD2HStateandClusterandLocation();

		Tagpricetosalesdetailsteamwise tagpricetosalesdetailsteamwise = new Tagpricetosalesdetailsteamwise();

		Tagteamwisetimeline tagteam = new Tagteamwisetimeline();

		LocationTagPriceActuals locationTagPriceActuals = new LocationTagPriceActuals();

		LocationSalePriceActuals locationSalePriceActuals = new LocationSalePriceActuals();

		TagPrice tagPrice1 = new TagPrice();

		SalePrice salePrice1 = new SalePrice();

		Double totalgoldtagprice = 0.0;
		Double totaldiamondtagprice = 0.0;
		Double totalgoldsaleprice = 0.0;
		Double totaldiamondsaleprice = 0.0;

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
			Collection<Sales> tagpricetosales = null;
			long noOfDaysBetween = 0l;
			TagpricetoSalesValue actulas = new TagpricetoSalesValue();
			TagpricetoSalesValue timelineactuals = new TagpricetoSalesValue();
			List<String> teamnames = new ArrayList<>();
			Channel channel = channelRepo.findByChannelName("D2H");
			List<Location> locationObj = locationRepo.findByLocationCodeAndChannel(location, channel);
			List<Double> goldTagPrice = new ArrayList<>();
			List<Double> goldSalePrice = new ArrayList<>();
			List<Double> diamondTagPrice = new ArrayList<>();
			List<Double> diamondsalePrice = new ArrayList<>();
			LocationTagPriceActuals tagPrice = new LocationTagPriceActuals();
			LocationSalePriceActuals salePrice = new LocationSalePriceActuals();

			List<Double> timeLinegoldTagPrice = new ArrayList<>();
			List<Double> timeLinegoldSalePrice = new ArrayList<>();
			List<Double> timeLinediamondTagPrice = new ArrayList<>();
			List<Double> timeLinediamondsalePrice = new ArrayList<>();

			List<String> timeline = new ArrayList<>();

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

				List<Sample2> sampList = new ArrayList<>();

				if (datesList.size() == 1) {
					Sample2 sample11 = new Sample2();
					Date date10 = new SimpleDateFormat(DATE_FORMATE).parse(datesList.get(0));
					Calendar cal = Calendar.getInstance();
					cal.setTime(date10);
					cal.get(Calendar.MONTH);
					int lastDate = cal.getActualMaximum(Calendar.DATE);
					cal.set(Calendar.DATE, lastDate);
					tagpricetosales = salesRepo.findByStartDateAndEndDate(samp, samp1);
					noOfDaysBetween = ChronoUnit.DAYS.between(dateValue.getStartDate(), dateValue.getEndDate()) + 1;
					sample11.setNumberOfDays(noOfDaysBetween);
					sample11.setEndDateTimeline(dateValue.getEndDate().toString());
					sample11.setTagpricetosales(tagpricetosales);
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

							Sample2 sample11 = new Sample2();
							tagpricetosales = salesRepo.findByStartDateAndEndDate(dateValue.getStartDate().toString(),
									lastDay1);
							noOfDaysBetween = ChronoUnit.DAYS.between(dateValue.getStartDate(), day2) + 1;

							sample11.setNumberOfDays(noOfDaysBetween);
							sample11.setEndDateTimeline(lastDay1);
							sample11.setTagpricetosales(tagpricetosales);
							sample11.setStartDateTimeline(dateValue.getStartDate().toString());
							sampList.add(sample11);
						} else {
							Sample2 sample11 = new Sample2();
							tagpricetosales = salesRepo.findByStartDateAndEndDate(firstDay1,
									dateValue.getEndDate().toString());
							noOfDaysBetween = ChronoUnit.DAYS.between(day, dateValue.getEndDate()) + 1;

							sample11.setNumberOfDays(noOfDaysBetween);
							sample11.setEndDateTimeline(dateValue.getEndDate().toString());
							sample11.setTagpricetosales(tagpricetosales);
							sample11.setStartDateTimeline(firstDay1);
							sampList.add(sample11);
						}

					}
				}

				timeline.add(dateValue.getWeekNumber());

				double timeLinegoldTag = 0.0;
				double timeLinegoldSale = 0.0;
				double timeLinediamondTag = 0.0;
				double timeLinediamondSale = 0.0;

				for (Sample2 sample : sampList) {

					if (sample.getTagpricetosales() != null) {

						for (Sales sales : sample.getTagpricetosales()) {
							if (sales.getLocation().getChannel().getId().equals(2l)
									&& sales.getLocation().getState().equalsIgnoreCase(state)
									&& sales.getLocation().getCluster().equalsIgnoreCase(cluster)
									&& sales.getLocation().getLocationCode().equalsIgnoreCase(location)) {

								if (sales.getItemType().equalsIgnoreCase("Gold")) {
									timeLinegoldTag = timeLinegoldTag + sales.getTagPrice();

									timeLinegoldSale = timeLinegoldSale + sales.getTotalSoldAmount();

									totalgoldtagprice = totalgoldtagprice + sales.getTagPrice();
									totalgoldsaleprice = totalgoldsaleprice + sales.getTotalSoldAmount();
								} else if (sales.getItemType().equalsIgnoreCase("Diamond")) {
									timeLinediamondTag = timeLinediamondTag + sales.getTagPrice();

									timeLinediamondSale = timeLinediamondSale + sales.getTotalSoldAmount();

									totaldiamondtagprice = totaldiamondtagprice + sales.getTagPrice();
									totaldiamondsaleprice = totaldiamondsaleprice + sales.getTotalSoldAmount();
								}

							}
						}
					}

					else {
						timeLinegoldTag += 0.0;
						timeLinegoldSale += 0.0;
						timeLinediamondTag += 0.0;
						timeLinediamondSale += 0.0;
					}

				}

				timeLinegoldTagPrice.add(timeLinegoldTag / 100000);
				timeLinegoldSalePrice.add(timeLinegoldSale / 100000);
				timeLinediamondTagPrice.add(timeLinediamondTag / 100000);
				timeLinediamondsalePrice.add(timeLinediamondSale / 100000);

			}

			for (Location locationcode : locationObj) {

				List<Team> teamnames1 = teamRepo.findByLocation(locationcode);

				for (Team team : teamnames1) {

					double goldTag = 0.0;
					double goldSale = 0.0;
					double diamondTag = 0.0;
					double diamondSale = 0.0;

					teamnames.add("Team-" + team.getTeamNum());

					for (Employee employee : team.getEmp()) {

						List<Sales> salesActualsList = salesRepo.findByStartDateAndEndDateAndEmployee(startDate,
								endDate, employee.getId());

						for (Sales sale : salesActualsList) {
							if (sale.getLocation().getChannel().getId().equals(2l)) {
								if (sale.getItemType().equalsIgnoreCase("Gold")) {

									goldTag = goldTag + sale.getTagPrice();
									goldSale = goldSale + sale.getTotalSoldAmount();

								} else if (sale.getItemType().equalsIgnoreCase("Diamond")) {

									diamondTag = diamondTag + sale.getTagPrice();

									diamondSale = diamondSale + sale.getTotalSoldAmount();

								}

							}
						}
					}

					goldTagPrice.add(goldTag / 100000);
					goldSalePrice.add(goldSale / 100000);
					diamondTagPrice.add(diamondTag / 100000);
					diamondsalePrice.add(diamondSale / 100000);

				}
				tagPrice.setDiamond(diamondTagPrice);
				tagPrice.setGold(goldTagPrice);
				salePrice.setDiamond(diamondsalePrice);
				salePrice.setGold(goldSalePrice);

				actulas.setSaleprice(salePrice);
				actulas.setTagprice(tagPrice);
				tagpricetosalesdetailsteamwise.setLocations(teamnames);
				tagpricetosalesdetailsteamwise.setActuals(actulas);
				tagteam.setActuals(actulas);
				tagteam.setTimeline(timeline);
				tagteam.setClusters(tagpricetosalesdetailsteamwise);

				tagPrice1.setDiamond(totaldiamondtagprice / 100000);
				tagPrice1.setGold(totalgoldtagprice / 100000);

				salePrice1.setDiamond(totaldiamondsaleprice / 100000);

				salePrice1.setGold(totalgoldsaleprice / 100000);

				locationTagPriceActuals.setDiamond(timeLinediamondTagPrice);
				locationTagPriceActuals.setGold(timeLinegoldTagPrice);
				locationSalePriceActuals.setDiamond(timeLinediamondsalePrice);
				locationSalePriceActuals.setGold(timeLinegoldSalePrice);

				timelineactuals.setSaleprice(locationSalePriceActuals);
				timelineactuals.setTagprice(locationTagPriceActuals);

				tagteam.setActuals(timelineactuals);

				Double totalTagPrice = tagPrice1.getDiamond() + tagPrice1.getGold();

				Double totalSalePrice = salePrice1.getDiamond() + salePrice1.getGold();

				locationteams.setTotalsaleprice(totalSalePrice);
				locationteams.setTotaltagprice(totalTagPrice);
				Double totalmargin = ((totalSalePrice - totalTagPrice) / totalTagPrice) * 100;
				locationteams.setTotalmargin((totalmargin.isNaN() || totalmargin.isInfinite()) ? 0.0 : totalmargin);
				locationteams.setState(state);
				locationteams.setCluster(cluster);
				locationteams.setLocation(location);
				locationteams.setSaleprice(salePrice1);
				locationteams.setTagprice(tagPrice1);
				locationteams.setD2hdetails(tagteam);

				tagpricetoSalesDataD2HStateandClusterandLocation.setStatus(HttpServletResponse.SC_OK);
				tagpricetoSalesDataD2HStateandClusterandLocation.setMessage("tag d2h week successful");
				tagpricetoSalesDataD2HStateandClusterandLocation.setFromDate(startDate);
				tagpricetoSalesDataD2HStateandClusterandLocation.setToDate(endDate);
				tagpricetoSalesDataD2HStateandClusterandLocation.setData(locationteams);

			}
		} catch (Exception e) {
			log.info("cluster");
		}
		return tagpricetoSalesDataD2HStateandClusterandLocation;
	}

	@Override
	public TagpricetoSalesResponse<TagpricetoSalesDataD2HStateandClusterandLocation> getTagpricetoSales(String state,
			String cluster, String locationcode, String startDate, String endDate) {

		log.info("Tag Price to Sales Implementation groupby between startDate and endDate");
		TagpricetoSalesResponse<TagpricetoSalesDataD2HStateandClusterandLocation> tagpricetoSalesDataD2HStateandClusterandLocation = new TagpricetoSalesResponse<>();
		try {

			LocalDate localStartDate = LocalDate.parse(startDate);
			LocalDate localEndDate = LocalDate.parse(endDate);

			long betweenDays = ChronoUnit.DAYS.between(localStartDate, localEndDate);

			if (betweenDays < 15) {
				// daywise
				tagpricetoSalesDataD2HStateandClusterandLocation = getTagpricetoSalesByDay(state, cluster, locationcode,
						startDate, endDate);
			} else if (betweenDays >= 15 && betweenDays <= 60) {
				// week wise
				tagpricetoSalesDataD2HStateandClusterandLocation = getTagpricetoSalesByWeek(state, cluster,
						locationcode, startDate, endDate);
			} else {
				// month wise
				tagpricetoSalesDataD2HStateandClusterandLocation = getTagpricetoSalesByMonth(state, cluster,
						locationcode, startDate, endDate);
			}
		} catch (Exception e) {
			tagpricetoSalesDataD2HStateandClusterandLocation.setError(EnumTypeForErrorCodes.SCUS105.name(),
					EnumTypeForErrorCodes.SCUS105.errorMsg());
			tagpricetoSalesDataD2HStateandClusterandLocation.setMessage("Failed to get TagPrice to Sales Margins");
			log.error(utils.toJson(tagpricetoSalesDataD2HStateandClusterandLocation.getError()), e);
		}
		return tagpricetoSalesDataD2HStateandClusterandLocation;
	}

}

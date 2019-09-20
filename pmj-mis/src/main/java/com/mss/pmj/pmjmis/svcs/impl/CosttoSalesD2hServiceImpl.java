package com.mss.pmj.pmjmis.svcs.impl;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.time.temporal.ChronoUnit;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Collection;
import java.util.Collections;
import java.util.Date;
import java.util.List;
import java.util.Set;

import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.RestController;

import com.mss.pmj.pmjmis.common.EnumTypeForErrorCodes;
import com.mss.pmj.pmjmis.common.Utils;
import com.mss.pmj.pmjmis.domain.Channel;
import com.mss.pmj.pmjmis.domain.Location;
import com.mss.pmj.pmjmis.domain.Manager;
import com.mss.pmj.pmjmis.domain.Role;
import com.mss.pmj.pmjmis.domain.Sales;
import com.mss.pmj.pmjmis.domain.User;
import com.mss.pmj.pmjmis.repos.ChannelRepository;
import com.mss.pmj.pmjmis.repos.LocationRepository;
import com.mss.pmj.pmjmis.repos.ManagerRepository;
import com.mss.pmj.pmjmis.repos.SalesRepository;
import com.mss.pmj.pmjmis.repos.UserRepository;
import com.mss.pmj.pmjmis.response.CostPrice;
import com.mss.pmj.pmjmis.response.CostPricetoSalesD2hStates;
import com.mss.pmj.pmjmis.response.CostPricetoSalesDataD2h;
import com.mss.pmj.pmjmis.response.CostPricetoSalesDetailsD2h;
import com.mss.pmj.pmjmis.response.CostSalePrice;
import com.mss.pmj.pmjmis.response.CostpricetoSalesResponse;
import com.mss.pmj.pmjmis.response.CostpricetoSalesValue;
import com.mss.pmj.pmjmis.response.Dates;
import com.mss.pmj.pmjmis.response.LocationCostPriceActuals;
import com.mss.pmj.pmjmis.response.LocationCostSalePriceActuals;
import com.mss.pmj.pmjmis.response.Sample2;
import com.mss.pmj.pmjmis.svcs.CosttoSalesD2hService;

@RestController
public class CosttoSalesD2hServiceImpl implements CosttoSalesD2hService {

	private static Logger log = LoggerFactory.getLogger(CosttoSalesD2hServiceImpl.class);

	@Autowired
	private Utils utils;

	@Autowired
	private SalesRepository salesRepo;

	@Autowired
	private LocationRepository locationRepo;

	@Autowired
	private ChannelRepository channelRepo;

	@Autowired
	private UserRepository userRepo;

	@Autowired
	private ManagerRepository managerRepo;

	private static final String DATE_FORMATE = "MMM-yyyy";

	// Getting Tagprice to Sales By Month

	public CostpricetoSalesResponse<CostPricetoSalesDataD2h> getCostpricetoSalesByMonth(String startDate,
			String endDate) {
		log.info("Tag Price to Sales Implementation by Month");

		CostpricetoSalesResponse<CostPricetoSalesDataD2h> costPricetoSalesDataD2h = new CostpricetoSalesResponse<>();

		CostPricetoSalesDataD2h data = new CostPricetoSalesDataD2h();

		CostPricetoSalesD2hStates costpricetosalesd2h = new CostPricetoSalesD2hStates();

		CostPricetoSalesDetailsD2h costpricetosalesdetailsd2h = new CostPricetoSalesDetailsD2h();

		LocationCostPriceActuals locationcostPriceActuals = new LocationCostPriceActuals();

		LocationCostSalePriceActuals locationSalePriceActuals = new LocationCostSalePriceActuals();

		CostPrice costPrice1 = new CostPrice();

		CostSalePrice salePrice1 = new CostSalePrice();

		String a = "admin";

		String d = "diamond";

		String g = "gold";

		Double totalgoldtagprice = 0.0;
		Double totaldiamondtagprice = 0.0;
		Double totalgoldsaleprice = 0.0;
		Double totaldiamondsaleprice = 0.0;
		try {

			Channel channel = channelRepo.findByChannelName("D2H");

			List<Location> location1 = new ArrayList<>();
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

			if (role.getName().equalsIgnoreCase(a)) {

				location1 = locationRepo.findByChannelIdGroupByState(2l);
			} else {

				if (user.getEmpCode() != null) {

					Manager manager = managerRepo.findByEmpId(user.getEmpCode());

					location1 = locationRepo.groupByChannelandManger(channel, manager.getId());

				}

			}

			Collections.sort(location1);

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

			CostpricetoSalesValue actulas = new CostpricetoSalesValue();

			CostpricetoSalesValue timelineactuals = new CostpricetoSalesValue();

			List<String> locationsnames = new ArrayList<>();

			List<Double> goldTagPrice = new ArrayList<>();
			List<Double> goldSalePrice = new ArrayList<>();
			List<Double> diamondTagPrice = new ArrayList<>();
			List<Double> diamondsalePrice = new ArrayList<>();
			LocationCostPriceActuals costPrice = new LocationCostPriceActuals();
			LocationCostSalePriceActuals salePrice = new LocationCostSalePriceActuals();

			List<Double> timeLinegoldTagPrice = new ArrayList<>();
			List<Double> timeLinegoldSalePrice = new ArrayList<>();
			List<Double> timeLinediamondTagPrice = new ArrayList<>();
			List<Double> timeLinediamondsalePrice = new ArrayList<>();

			List<String> timeline = new ArrayList<>();

			for (int i = 0; i < datesList.size(); i++) {

				Collection<Sales> costpricetosales = null;

				long noOfDaysBetween = 0l;

				if (i == 0) {

					if (date1.equals(date2)) {

						costpricetosales = salesRepo.findByStartDateAndEndDate(startDate, endDate);

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
						costpricetosales = salesRepo.findByStartDateAndEndDate(startDate, lastDay1);
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
					costpricetosales = salesRepo.findByStartDateAndEndDate(firstDay1, lastDay1);
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
					costpricetosales = salesRepo.findByStartDateAndEndDate(firstDay1, endDate);

				}

				timeline.add(datesList.get(i));

				if (!costpricetosales.isEmpty()) {
					double timeLinegoldTag = 0.0;
					double timeLinegoldSale = 0.0;
					double timeLinediamondTag = 0.0;
					double timeLinediamondSale = 0.0;
					for (Sales sales : costpricetosales) {
						if (sales.getLocation().getChannel().getId().equals(2l)) {
							if (sales.getItemType().equalsIgnoreCase(g)
									&& sales.getLocation().getChannel().getId().equals(2l)) {
								timeLinegoldTag = timeLinegoldTag + sales.getCostPrice();

								timeLinegoldSale = timeLinegoldSale + sales.getTotalSoldAmount();

								totalgoldtagprice = totalgoldtagprice + sales.getCostPrice();
								totalgoldsaleprice = totalgoldsaleprice + sales.getTotalSoldAmount();
							} else if (sales.getItemType().equalsIgnoreCase(d)
									&& sales.getLocation().getChannel().getId().equals(2l)) {
								timeLinediamondTag = timeLinediamondTag + sales.getCostPrice();

								timeLinediamondSale = timeLinediamondSale + sales.getTotalSoldAmount();

								totaldiamondtagprice = totaldiamondtagprice + sales.getCostPrice();
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
			List<Sales> salesActualsList = salesRepo.findByStartDateAndEndDate(startDate, endDate);
			for (Location location : location1) {

				double goldTag = 0.0;
				double goldSale = 0.0;
				double diamondTag = 0.0;
				double diamondSale = 0.0;

				if (!salesActualsList.isEmpty()) {

					for (Sales sale : salesActualsList) {

						if (sale.getItemType().equalsIgnoreCase(g)
								&& sale.getLocation().getState().equals(location.getState())
								&& sale.getLocation().getChannel().getId() == 2) {
							goldTag = goldTag + sale.getCostPrice();
							goldSale = goldSale + sale.getTotalSoldAmount();

						} else if (sale.getItemType().equalsIgnoreCase(d)
								&& sale.getLocation().getState().equals(location.getState())
								&& sale.getLocation().getChannel().getId() == 2) {

							diamondTag = diamondTag + sale.getCostPrice();

							diamondSale = diamondSale + sale.getTotalSoldAmount();

						}

					}
					goldTagPrice.add(goldTag / 100000);
					goldSalePrice.add(goldSale / 100000);
					diamondTagPrice.add(diamondTag / 100000);
					diamondsalePrice.add(diamondSale / 100000);

				} else {
					goldTagPrice.add(0.0);
					goldSalePrice.add(0.0);
					diamondTagPrice.add(0.0);
					diamondsalePrice.add(0.0);

				}
				locationsnames.add(location.getState());

			}

			costPrice.setDiamond(diamondTagPrice);
			costPrice.setGold(goldTagPrice);
			salePrice.setDiamond(diamondsalePrice);
			salePrice.setGold(goldSalePrice);

			actulas.setSaleprice(salePrice);
			actulas.setCostprice(costPrice);
			costpricetosalesd2h.setLocations(locationsnames);
			costpricetosalesd2h.setActuals(actulas);
			costpricetosalesdetailsd2h.setTimeline(timeline);

			costpricetosalesdetailsd2h.setClusters(costpricetosalesd2h);

			costPrice1.setDiamond(totaldiamondtagprice / 100000);
			costPrice1.setGold(totalgoldtagprice / 100000);

			salePrice1.setDiamond(totaldiamondsaleprice / 100000);

			salePrice1.setGold(totalgoldsaleprice / 100000);

			locationcostPriceActuals.setDiamond(timeLinediamondTagPrice);
			locationcostPriceActuals.setGold(timeLinegoldTagPrice);
			locationSalePriceActuals.setDiamond(timeLinediamondsalePrice);
			locationSalePriceActuals.setGold(timeLinegoldSalePrice);

			timelineactuals.setSaleprice(locationSalePriceActuals);

			timelineactuals.setCostprice(locationcostPriceActuals);

			costpricetosalesdetailsd2h.setActuals(timelineactuals);

			Double totalCostPrice = costPrice1.getDiamond() + costPrice1.getGold();

			Double totalSalePrice = salePrice1.getDiamond() + salePrice1.getGold();

			data.setTotalsaleprice(totalSalePrice);
			data.setTotalcostprice(totalCostPrice);
			Double totalmargin = ((totalSalePrice - totalCostPrice) / totalCostPrice) * 100;
			data.setTotalmargin((totalmargin.isNaN() || totalmargin.isInfinite()) ? 0.0 : totalmargin);
			data.setD2hdetails(costpricetosalesdetailsd2h);
			data.setSaleprice(salePrice1);
			data.setCostprice(costPrice1);

			costPricetoSalesDataD2h.setStatus(HttpServletResponse.SC_OK);
			costPricetoSalesDataD2h.setMessage("Cost d2h month successful");
			costPricetoSalesDataD2h.setFromDate(startDate);
			costPricetoSalesDataD2h.setToDate(endDate);
			costPricetoSalesDataD2h.setData(data);
		} catch (Exception e) {
			log.info("d2h");
		}
		return costPricetoSalesDataD2h;
	}

	// By Day

	public CostpricetoSalesResponse<CostPricetoSalesDataD2h> getCostpricetoSalesByDay(String startDate,
			String endDate) {
		log.info("Tag Price to Sales Implementation");

		CostpricetoSalesResponse<CostPricetoSalesDataD2h> costPricetoSalesDataD2h = new CostpricetoSalesResponse<>();

		CostPricetoSalesDataD2h data = new CostPricetoSalesDataD2h();

		CostPricetoSalesD2hStates costpricetosalesd2h = new CostPricetoSalesD2hStates();

		CostPricetoSalesDetailsD2h costpricetosalesdetailsd2h = new CostPricetoSalesDetailsD2h();

		LocationCostPriceActuals locationcostPriceActuals = new LocationCostPriceActuals();

		LocationCostSalePriceActuals locationSalePriceActuals = new LocationCostSalePriceActuals();

		CostPrice costPrice1 = new CostPrice();

		CostSalePrice salePrice1 = new CostSalePrice();

		String a = "admin";

		String d = "diamond";

		String g = "gold";

		Double totalgoldtagprice = 0.0;
		Double totaldiamondtagprice = 0.0;
		Double totalgoldsaleprice = 0.0;
		Double totaldiamondsaleprice = 0.0;

		List<Double> goldTagPrice = new ArrayList<>();
		List<Double> goldSalePrice = new ArrayList<>();
		List<Double> diamondTagPrice = new ArrayList<>();
		List<Double> diamondsalePrice = new ArrayList<>();

		List<Double> timeLinegoldTagPrice = new ArrayList<>();
		List<Double> timeLinegoldSalePrice = new ArrayList<>();
		List<Double> timeLinediamondTagPrice = new ArrayList<>();
		List<Double> timeLinediamondsalePrice = new ArrayList<>();

		try {

			Channel channel = channelRepo.findByChannelName("D2H");
			List<Location> location1 = new ArrayList<>();
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

			if (role.getName().equalsIgnoreCase(a)) {

				location1 = locationRepo.findByChannelIdGroupByState(2l);
			} else {

				if (user.getEmpCode() != null) {

					Manager manager = managerRepo.findByEmpId(user.getEmpCode());

					location1 = locationRepo.groupByChannelandManger(channel, manager.getId());

				}

			}

			Collections.sort(location1);

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
			CostpricetoSalesValue actulas = new CostpricetoSalesValue();
			CostpricetoSalesValue timelineactuals = new CostpricetoSalesValue();
			LocationCostPriceActuals costPrice = new LocationCostPriceActuals();
			LocationCostSalePriceActuals salePrice = new LocationCostSalePriceActuals();

			List<String> locationsnames = new ArrayList<>();

			List<String> timeline = new ArrayList<>();
			Collection<Sales> costpricetosales = null;

			long noOfDaysBetween = 0l;
			String startDateTimeline = null;
			String endDateTimeline = null;

			List<Sample2> sampList = new ArrayList<>();

			if (datesList.size() == 1) {
				Sample2 samp = new Sample2();
				costpricetosales = salesRepo.findByStartDateAndEndDate(startDate, endDate);
				noOfDaysBetween = ChronoUnit.DAYS.between(localStartDate, localEndDate) + 1;
				startDateTimeline = startDate;
				endDateTimeline = endDate;
				samp.setNumberOfDays(noOfDaysBetween);
				samp.setEndDateTimeline(endDateTimeline);
				samp.setCostpricetosales(costpricetosales);
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
						costpricetosales = salesRepo.findByStartDateAndEndDate(startDate, lastDay1);
						noOfDaysBetween = ChronoUnit.DAYS.between(localStartDate, day) + 1;

						startDateTimeline = startDate;
						endDateTimeline = lastDay1;
						samp.setNumberOfDays(noOfDaysBetween);
						samp.setStartDateTimeline(startDateTimeline);
						samp.setEndDateTimeline(endDateTimeline);
						samp.setCostpricetosales(costpricetosales);
						sampList.add(samp);

					} else {
						Sample2 samp = new Sample2();
						String firstDay1 = datesList.get(i).substring(4, 8) + "-" + m + "-" + "01";
						LocalDate day = LocalDate.parse(firstDay1);
						costpricetosales = salesRepo.findByStartDateAndEndDate(firstDay1, endDate);

						noOfDaysBetween = ChronoUnit.DAYS.between(day, localEndDate) + 1;
						startDateTimeline = firstDay1;
						endDateTimeline = endDate;

						samp.setNumberOfDays(noOfDaysBetween);
						samp.setStartDateTimeline(startDateTimeline);
						samp.setEndDateTimeline(endDateTimeline);
						samp.setCostpricetosales(costpricetosales);
						sampList.add(samp);
					}

				}
			}

			List<Sales> salesActualsList = salesRepo.findByStartDateAndEndDate(startDate, endDate);

			for (Location locations : location1) {

				double goldTag = 0.0;
				double goldSale = 0.0;
				double diamondTag = 0.0;
				double diamondSale = 0.0;
				if (salesActualsList != null) {

					for (Sales sale : salesActualsList) {

						if (sale.getItemType().equalsIgnoreCase(g)
								&& sale.getLocation().getState().equals(locations.getState())
								&& sale.getLocation().getChannel().getId() == 2) {
							goldTag = goldTag + sale.getCostPrice();
							goldSale = goldSale + sale.getTotalSoldAmount();

						} else if (sale.getItemType().equalsIgnoreCase(d)
								&& sale.getLocation().getState().equals(locations.getState())
								&& sale.getLocation().getChannel().getId() == 2) {
							diamondTag = diamondTag + sale.getCostPrice();

							diamondSale = diamondSale + sale.getTotalSoldAmount();

						}

					}
					goldTagPrice.add(goldTag / 100000);
					goldSalePrice.add(goldSale / 100000);
					diamondTagPrice.add(diamondTag / 100000);
					diamondsalePrice.add(diamondSale / 100000);
				} else {

					goldTagPrice.add(0.0);
					goldSalePrice.add(0.0);
					diamondTagPrice.add(0.0);
					diamondsalePrice.add(0.0);

				}
				locationsnames.add(locations.getState());

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
							if (sales.getLocation().getChannel().getId().equals(2l)) {
								if (sales.getItemType().equalsIgnoreCase(g)) {

									timeLinegoldTag = timeLinegoldTag + sales.getCostPrice();

									timeLinegoldSale = timeLinegoldSale + sales.getTotalSoldAmount();

									totalgoldtagprice = totalgoldtagprice + sales.getCostPrice();
									totalgoldsaleprice = totalgoldsaleprice + sales.getTotalSoldAmount();
								} else if (sales.getItemType().equalsIgnoreCase(d)) {
									timeLinediamondTag = timeLinediamondTag + sales.getCostPrice();

									timeLinediamondSale = timeLinediamondSale + sales.getTotalSoldAmount();

									totaldiamondtagprice = totaldiamondtagprice + sales.getCostPrice();
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

			costPrice.setDiamond(diamondTagPrice);
			costPrice.setGold(goldTagPrice);
			salePrice.setDiamond(diamondsalePrice);
			salePrice.setGold(goldSalePrice);

			actulas.setSaleprice(salePrice);
			actulas.setCostprice(costPrice);
			costpricetosalesd2h.setLocations(locationsnames);
			costpricetosalesd2h.setActuals(actulas);
			costpricetosalesdetailsd2h.setTimeline(timeline);

			costpricetosalesdetailsd2h.setClusters(costpricetosalesd2h);

			costPrice1.setDiamond(totaldiamondtagprice / 100000);
			costPrice1.setGold(totalgoldtagprice / 100000);

			salePrice1.setDiamond(totaldiamondsaleprice / 100000);

			salePrice1.setGold(totalgoldsaleprice / 100000);

			locationcostPriceActuals.setDiamond(timeLinediamondTagPrice);
			locationcostPriceActuals.setGold(timeLinegoldTagPrice);
			locationSalePriceActuals.setDiamond(timeLinediamondsalePrice);
			locationSalePriceActuals.setGold(timeLinegoldSalePrice);

			timelineactuals.setSaleprice(locationSalePriceActuals);

			timelineactuals.setCostprice(locationcostPriceActuals);

			costpricetosalesdetailsd2h.setActuals(timelineactuals);

			Double totalCostPrice1 = costPrice1.getDiamond() + costPrice1.getGold();

			Double totalSalePrice1 = salePrice1.getDiamond() + salePrice1.getGold();

			data.setTotalsaleprice(totalSalePrice1);
			data.setTotalcostprice(totalCostPrice1);
			Double totalmargin = ((totalSalePrice1 - totalCostPrice1) / totalCostPrice1) * 100;
			data.setTotalmargin((totalmargin.isNaN() || totalmargin.isInfinite()) ? 0.0 : totalmargin);
			data.setD2hdetails(costpricetosalesdetailsd2h);
			data.setSaleprice(salePrice1);
			data.setCostprice(costPrice1);
			costPricetoSalesDataD2h.setStatus(HttpServletResponse.SC_OK);
			costPricetoSalesDataD2h.setMessage("Cost d2h day successful");
			costPricetoSalesDataD2h.setFromDate(startDate);
			costPricetoSalesDataD2h.setToDate(endDate);
			costPricetoSalesDataD2h.setData(data);
		} catch (Exception e) {
			log.info("d2h");
		}
		return costPricetoSalesDataD2h;
	}

	public CostpricetoSalesResponse<CostPricetoSalesDataD2h> getCostpricetoSalesByWeek(String startDate,
			String endDate) {
		log.info("Tag Price to Sales Implementation");

		CostpricetoSalesResponse<CostPricetoSalesDataD2h> costPricetoSalesDataD2h = new CostpricetoSalesResponse<>();

		CostPricetoSalesDataD2h data = new CostPricetoSalesDataD2h();

		CostPricetoSalesD2hStates costpricetosalesd2h = new CostPricetoSalesD2hStates();

		CostPricetoSalesDetailsD2h costpricetosalesdetailsd2h = new CostPricetoSalesDetailsD2h();

		LocationCostPriceActuals locationcostPriceActuals = new LocationCostPriceActuals();

		LocationCostSalePriceActuals locationSalePriceActuals = new LocationCostSalePriceActuals();

		CostPrice costPrice1 = new CostPrice();

		CostSalePrice salePrice1 = new CostSalePrice();

		String a = "admin";

		String d = "diamond";

		String g = "gold";
		Double totalgoldtagprice = 0.0;
		Double totaldiamondtagprice = 0.0;
		Double totalgoldsaleprice = 0.0;
		Double totaldiamondsaleprice = 0.0;

		try {

			Channel channel = channelRepo.findByChannelName("D2H");
			List<Location> location1 = new ArrayList<>();
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

			if (role.getName().equalsIgnoreCase(a)) {

				location1 = locationRepo.findByChannelIdGroupByState(2l);
			} else {

				if (user.getEmpCode() != null) {

					Manager manager = managerRepo.findByEmpId(user.getEmpCode());

					location1 = locationRepo.groupByChannelandManger(channel, manager.getId());

				}

			}

			Collections.sort(location1);

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
			Collection<Sales> costpricetosales = null;
			long noOfDaysBetween = 0l;
			CostpricetoSalesValue actulas = new CostpricetoSalesValue();

			CostpricetoSalesValue timelineactuals = new CostpricetoSalesValue();

			LocationCostPriceActuals costPrice = new LocationCostPriceActuals();
			LocationCostSalePriceActuals salePrice = new LocationCostSalePriceActuals();

			List<String> locationsnames = new ArrayList<>();

			List<Double> goldTagPrice = new ArrayList<>();
			List<Double> goldSalePrice = new ArrayList<>();
			List<Double> diamondTagPrice = new ArrayList<>();
			List<Double> diamondsalePrice = new ArrayList<>();

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

					costpricetosales = salesRepo.findByStartDateAndEndDate(samp, samp1);
					sample11.setCostpricetosales(costpricetosales);
					noOfDaysBetween = ChronoUnit.DAYS.between(dateValue.getStartDate(), dateValue.getEndDate()) + 1;
					sample11.setNumberOfDays(noOfDaysBetween);
					sample11.setEndDateTimeline(dateValue.getEndDate().toString());
					sample11.setCostpricetosales(costpricetosales);
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
							costpricetosales = salesRepo.findByStartDateAndEndDate(dateValue.getStartDate().toString(),
									lastDay1);
							noOfDaysBetween = ChronoUnit.DAYS.between(dateValue.getStartDate(), day2) + 1;

							sample11.setNumberOfDays(noOfDaysBetween);
							sample11.setEndDateTimeline(lastDay1);
							sample11.setCostpricetosales(costpricetosales);
							sample11.setStartDateTimeline(dateValue.getStartDate().toString());
							sampList.add(sample11);
						} else {
							Sample2 sample11 = new Sample2();
							costpricetosales = salesRepo.findByStartDateAndEndDate(firstDay1,
									dateValue.getEndDate().toString());
							noOfDaysBetween = ChronoUnit.DAYS.between(day, dateValue.getEndDate()) + 1;

							sample11.setNumberOfDays(noOfDaysBetween);
							sample11.setEndDateTimeline(dateValue.getEndDate().toString());
							sample11.setCostpricetosales(costpricetosales);
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

					if (sample.getCostpricetosales() != null) {

						for (Sales sales : sample.getCostpricetosales()) {

							if (sales.getLocation().getChannel().getId().equals(2l)) {
								if (sales.getItemType().equalsIgnoreCase(g)) {
									timeLinegoldTag = timeLinegoldTag + sales.getCostPrice();

									timeLinegoldSale = timeLinegoldSale + sales.getTotalSoldAmount();

									totalgoldtagprice = totalgoldtagprice + sales.getCostPrice();
									totalgoldsaleprice = totalgoldsaleprice + sales.getTotalSoldAmount();
								} else if (sales.getItemType().equalsIgnoreCase(d)) {
									timeLinediamondTag = timeLinediamondTag + sales.getCostPrice();

									timeLinediamondSale = timeLinediamondSale + sales.getTotalSoldAmount();

									totaldiamondtagprice = totaldiamondtagprice + sales.getCostPrice();
									totaldiamondsaleprice = totaldiamondsaleprice + sales.getTotalSoldAmount();
								}

							}
						}

					} else {
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
			List<Sales> salesActualsList = salesRepo.findByStartDateAndEndDate(startDate, endDate);

			for (Location locations : location1) {
				double goldTag = 0.0;
				double goldSale = 0.0;
				double diamondTag = 0.0;
				double diamondSale = 0.0;

				if (!salesActualsList.isEmpty()) {
					for (Sales sale : salesActualsList) {

						if (sale.getItemType().equalsIgnoreCase(g)
								&& sale.getLocation().getState().equals(locations.getState())
								&& sale.getLocation().getChannel().getId() == 2) {
							goldTag = goldTag + sale.getCostPrice();
							goldSale = goldSale + sale.getTotalSoldAmount();

						} else if (sale.getItemType().equalsIgnoreCase(d)
								&& sale.getLocation().getState().equals(locations.getState())
								&& sale.getLocation().getChannel().getId() == 2) {
							diamondTag = diamondTag + sale.getCostPrice();

							diamondSale = diamondSale + sale.getTotalSoldAmount();

						}

					}
					goldTagPrice.add(goldTag / 100000);
					goldSalePrice.add(goldSale / 100000);
					diamondTagPrice.add(diamondTag / 100000);
					diamondsalePrice.add(diamondSale / 100000);
				} else {

					goldTagPrice.add(0.0);
					goldSalePrice.add(0.0);
					diamondTagPrice.add(0.0);
					diamondsalePrice.add(0.0);
				}
				locationsnames.add(locations.getState());

			}

			costPrice.setDiamond(diamondTagPrice);
			costPrice.setGold(goldTagPrice);
			salePrice.setDiamond(diamondsalePrice);
			salePrice.setGold(goldSalePrice);

			actulas.setSaleprice(salePrice);
			actulas.setCostprice(costPrice);
			costpricetosalesd2h.setLocations(locationsnames);
			costpricetosalesd2h.setActuals(actulas);
			costpricetosalesdetailsd2h.setTimeline(timeline);

			costpricetosalesdetailsd2h.setClusters(costpricetosalesd2h);

			costPrice1.setDiamond(totaldiamondtagprice / 100000);
			costPrice1.setGold(totalgoldtagprice / 100000);

			salePrice1.setDiamond(totaldiamondsaleprice / 100000);

			salePrice1.setGold(totalgoldsaleprice / 100000);

			locationcostPriceActuals.setDiamond(timeLinediamondTagPrice);
			locationcostPriceActuals.setGold(timeLinegoldTagPrice);
			locationSalePriceActuals.setDiamond(timeLinediamondsalePrice);
			locationSalePriceActuals.setGold(timeLinegoldSalePrice);

			timelineactuals.setSaleprice(locationSalePriceActuals);

			timelineactuals.setCostprice(locationcostPriceActuals);

			costpricetosalesdetailsd2h.setActuals(timelineactuals);

			Double totalCostPrice1 = costPrice1.getDiamond() + costPrice1.getGold();

			Double totalSalePrice1 = salePrice1.getDiamond() + salePrice1.getGold();

			data.setTotalsaleprice(totalSalePrice1);
			data.setTotalcostprice(totalCostPrice1);
			Double totalmargin = ((totalSalePrice1 - totalCostPrice1) / totalCostPrice1) * 100;
			data.setTotalmargin((totalmargin.isNaN() || totalmargin.isInfinite()) ? 0.0 : totalmargin);
			data.setD2hdetails(costpricetosalesdetailsd2h);
			data.setSaleprice(salePrice1);
			data.setCostprice(costPrice1);

			costPricetoSalesDataD2h.setStatus(HttpServletResponse.SC_OK);
			costPricetoSalesDataD2h.setMessage("Cost d2h week successful");
			costPricetoSalesDataD2h.setFromDate(startDate);
			costPricetoSalesDataD2h.setToDate(endDate);
			costPricetoSalesDataD2h.setData(data);
		} catch (Exception e) {
			log.info("d2h");
		}
		return costPricetoSalesDataD2h;
	}

	@Override
	public CostpricetoSalesResponse<CostPricetoSalesDataD2h> getcostpricetoSalesd2h(String startDate, String endDate) {
		log.info("Tag Price to Sales Implementation groupby between startDate and endDate");
		CostpricetoSalesResponse<CostPricetoSalesDataD2h> costPricetoSalesDataD2h = new CostpricetoSalesResponse<>();
		try {

			LocalDate localStartDate = LocalDate.parse(startDate);
			LocalDate localEndDate = LocalDate.parse(endDate);

			long betweenDays = ChronoUnit.DAYS.between(localStartDate, localEndDate);

			if (betweenDays < 15) {
				// daywise
				costPricetoSalesDataD2h = getCostpricetoSalesByDay(startDate, endDate);
			} else if (betweenDays >= 15 && betweenDays <= 60) {
				// week wise
				costPricetoSalesDataD2h = getCostpricetoSalesByWeek(startDate, endDate);
			} else {
				// month wise
				costPricetoSalesDataD2h = getCostpricetoSalesByMonth(startDate, endDate);
			}
		} catch (Exception e) {
			costPricetoSalesDataD2h.setError(EnumTypeForErrorCodes.SCUS110.name(),
					EnumTypeForErrorCodes.SCUS110.errorMsg());
			costPricetoSalesDataD2h.setMessage("Failed to get costPrice to Sales Margins");
			log.error(utils.toJson(costPricetoSalesDataD2h.getError()), e);
		}
		return costPricetoSalesDataD2h;
	}

}

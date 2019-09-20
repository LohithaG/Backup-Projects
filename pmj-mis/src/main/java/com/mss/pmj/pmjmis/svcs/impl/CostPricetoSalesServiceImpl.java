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
import java.util.stream.Collectors;

import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.PathVariable;
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
import com.mss.pmj.pmjmis.response.CostPricetoSalesData;
import com.mss.pmj.pmjmis.response.CostPricetoSalesDetails;
import com.mss.pmj.pmjmis.response.CostSalePrice;
import com.mss.pmj.pmjmis.response.CostpricetoSalesLocation;
import com.mss.pmj.pmjmis.response.CostpricetoSalesResponse;
import com.mss.pmj.pmjmis.response.CostpricetoSalesValue;
import com.mss.pmj.pmjmis.response.Dates;
import com.mss.pmj.pmjmis.response.LocationCostPriceActuals;
import com.mss.pmj.pmjmis.response.LocationCostSalePriceActuals;
import com.mss.pmj.pmjmis.response.Sample2;
import com.mss.pmj.pmjmis.svcs.CostPricetoSalesService;

@RestController
public class CostPricetoSalesServiceImpl implements CostPricetoSalesService {

	private static Logger log = LoggerFactory.getLogger(CostPricetoSalesServiceImpl.class);

	@Autowired
	private Utils utils;

	@Autowired
	private SalesRepository salesRepo;

	@Autowired
	private LocationRepository locationRepo;

	@Autowired
	private UserRepository userRepo;

	@Autowired
	private ManagerRepository managerRepo;

	@Autowired
	private ChannelRepository channelRepo;

	private static final String DATE_FORMATE = "MMM-yyyy";

	// Getting Tagprice to Sales By Month

	public CostpricetoSalesResponse<CostPricetoSalesData> getcostpricetoSalesbyMonth(@PathVariable String startDate,
			@PathVariable String endDate) {

		CostpricetoSalesResponse<CostPricetoSalesData> costPricetoSalesData = new CostpricetoSalesResponse<>();

		CostPricetoSalesData data = new CostPricetoSalesData();

		CostPricetoSalesDetails costpricetosalesdetails = new CostPricetoSalesDetails();

		CostpricetoSalesLocation locationsObject = new CostpricetoSalesLocation();

		LocationCostPriceActuals locationCostPriceActuals = new LocationCostPriceActuals();

		LocationCostSalePriceActuals locationCostSalePriceActuals = new LocationCostSalePriceActuals();

		CostPrice costPrice1 = new CostPrice();

		CostSalePrice costsalePrice1 = new CostSalePrice();

		String admin = "admin";

		Double totalgoldcostprice = 0.0;
		Double totaldiamondcostprice = 0.0;
		Double totalgoldsaleprice = 0.0;
		Double totaldiamondsaleprice = 0.0;
		List<String> locationName = new ArrayList<>();
		try {

			Channel channel = channelRepo.findByChannelName("SHW");
			List<Location> allShowRoomLocations = new ArrayList<>();

			// Getting user details by login

			Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();

			String username = null;
			String go = "gold";
			String di = "diamond";

			if (principal instanceof UserDetails) {

				username = ((UserDetails) principal).getUsername();
			} else {
				username = principal.toString();
			}
			User user = userRepo.findByUserName(username);

			Role role = user.getRoles().get(0);

			if (role.getName().equalsIgnoreCase(admin)) {

				allShowRoomLocations = locationRepo.findByChannel(channel);
			} else {

				if (user.getEmpCode() != null) {

					Manager manager = managerRepo.findByEmpId(user.getEmpCode());

					Set<Location> locationList = manager.getLocation().stream().filter(o -> o.getChannel() == channel)
							.collect(Collectors.toSet());
					for (Location location : locationList) {

						allShowRoomLocations.add(location);

					}
				}
			}

			Collections.sort(allShowRoomLocations);

			for (Location location : allShowRoomLocations) {

				locationName.add(location.getLocationCode());

			}

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

			List<Double> goldcostPrice = new ArrayList<>();
			List<Double> goldSalePrice = new ArrayList<>();
			List<Double> diamondcostPrice = new ArrayList<>();
			List<Double> diamondsalePrice = new ArrayList<>();
			LocationCostPriceActuals costPrice = new LocationCostPriceActuals();
			LocationCostSalePriceActuals costsalePrice = new LocationCostSalePriceActuals();

			List<Double> timeLinegoldcostPrice = new ArrayList<>();
			List<Double> timeLinegoldSalePrice = new ArrayList<>();
			List<Double> timeLinediamondcostPrice = new ArrayList<>();
			List<Double> timeLinediamondsalePrice = new ArrayList<>();

			List<String> timeline = new ArrayList<>();

			for (int i = 0; i < datesList.size(); i++) {

				Collection<Sales> costpricetosales = null;

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

						if (sales.getLocation().getChannel().getId().equals(1l)) {
							if (sales.getItemType().equalsIgnoreCase(go)) {
								timeLinegoldTag = timeLinegoldTag + sales.getCostPrice();

								timeLinegoldSale = timeLinegoldSale + sales.getTotalSoldAmount();

								totalgoldcostprice = totalgoldcostprice + sales.getCostPrice();
								totalgoldsaleprice = totalgoldsaleprice + sales.getTotalSoldAmount();
							} else if (sales.getItemType().equalsIgnoreCase(di)) {
								timeLinediamondTag = timeLinediamondTag + sales.getCostPrice();

								timeLinediamondSale = timeLinediamondSale + sales.getTotalSoldAmount();

								totaldiamondcostprice = totaldiamondcostprice + sales.getCostPrice();
								totaldiamondsaleprice = totaldiamondsaleprice + sales.getTotalSoldAmount();
							}

						}

					}
					timeLinegoldcostPrice.add(timeLinegoldTag / 100000);
					timeLinegoldSalePrice.add(timeLinegoldSale / 100000);
					timeLinediamondcostPrice.add(timeLinediamondTag / 100000);
					timeLinediamondsalePrice.add(timeLinediamondSale / 100000);

				} else {

					timeLinegoldcostPrice.add(0.0);
					timeLinegoldSalePrice.add(0.0);
					timeLinediamondcostPrice.add(0.0);
					timeLinediamondsalePrice.add(0.0);
				}

			}

			List<Sales> salesActualsList = salesRepo.findByStartDateAndEndDate(startDate, endDate);

			for (Location location : allShowRoomLocations) {

				double goldcost = 0.0;
				double goldSale = 0.0;
				double diamondcost = 0.0;
				double diamondSale = 0.0;
				if (!salesActualsList.isEmpty()) {

					for (Sales sale : salesActualsList) {

						if (sale.getItemType().equalsIgnoreCase(go)
								&& sale.getLocation().getId().equals(location.getId())
								&& sale.getLocation().getChannel().getId() == 1) {

							goldcost = goldcost + sale.getCostPrice();
							goldSale = goldSale + sale.getTotalSoldAmount();

						} else if (sale.getItemType().equalsIgnoreCase(di)
								&& sale.getLocation().getId().equals(location.getId())
								&& sale.getLocation().getChannel().getId() == 1) {

							diamondcost = diamondcost + sale.getCostPrice();

							diamondSale = diamondSale + sale.getTotalSoldAmount();

						}

					}
					goldcostPrice.add(goldcost / 100000);
					goldSalePrice.add(goldSale / 100000);
					diamondcostPrice.add(diamondcost / 100000);
					diamondsalePrice.add(diamondSale / 100000);

				}

				else {
					goldcostPrice.add(0.0);
					goldSalePrice.add(0.0);
					diamondcostPrice.add(0.0);
					diamondsalePrice.add(0.0);

				}

				locationsnames.add(location.getLocationCode());
			}

			costPrice.setDiamond(diamondcostPrice);
			costPrice.setGold(goldcostPrice);
			costsalePrice.setDiamond(diamondsalePrice);
			costsalePrice.setGold(goldSalePrice);

			actulas.setSaleprice(costsalePrice);
			actulas.setCostprice(costPrice);
			locationsObject.setNames(locationsnames);
			locationsObject.setActuals(actulas);
			costpricetosalesdetails.setTimeline(timeline);

			costpricetosalesdetails.setLocations(locationsObject);

			costPrice1.setDiamond(totaldiamondcostprice / 100000);
			costPrice1.setGold(totalgoldcostprice / 100000);

			costsalePrice1.setDiamond(totaldiamondsaleprice / 100000);

			costsalePrice1.setGold(totalgoldsaleprice / 100000);

			locationCostPriceActuals.setDiamond(timeLinediamondcostPrice);
			locationCostPriceActuals.setGold(timeLinegoldcostPrice);
			locationCostSalePriceActuals.setDiamond(timeLinediamondsalePrice);
			locationCostSalePriceActuals.setGold(timeLinegoldSalePrice);

			timelineactuals.setSaleprice(locationCostSalePriceActuals);
			timelineactuals.setCostprice(locationCostPriceActuals);

			costpricetosalesdetails.setActuals(timelineactuals);

			Double totalcostPrice = costPrice1.getDiamond() + costPrice1.getGold();

			Double totalSalePrice = costsalePrice1.getDiamond() + costsalePrice1.getGold();

			data.setTotalsaleprice(totalSalePrice);
			data.setTotalcostprice(totalcostPrice);
			Double totalmargin = ((totalSalePrice - totalcostPrice) / totalcostPrice) * 100;
			data.setTotalmargin((totalmargin.isNaN() || totalmargin.isInfinite()) ? 0.0 : totalmargin);
			data.setDetails(costpricetosalesdetails);
			data.setSaleprice(costsalePrice1);
			data.setCostprice(costPrice1);
			costPricetoSalesData.setStatus(HttpServletResponse.SC_OK);
			costPricetoSalesData.setMessage("Cost shw month successful");
			costPricetoSalesData.setFromDate(startDate);
			costPricetoSalesData.setToDate(endDate);
			costPricetoSalesData.setData(data);
		} catch (Exception e) {
			log.info("shw");
		}
		return costPricetoSalesData;

	}

	// Get Tag to Sales By Day
	public CostpricetoSalesResponse<CostPricetoSalesData> getcostpricetoSalesbyDay(@PathVariable String startDate,
			@PathVariable String endDate) {
		log.info("Cost Price to Sales Implementation by Day");

		CostpricetoSalesResponse<CostPricetoSalesData> costPricetoSalesData = new CostpricetoSalesResponse<>();

		CostPricetoSalesData data = new CostPricetoSalesData();

		CostPricetoSalesDetails costpricetosalesdetails = new CostPricetoSalesDetails();

		CostpricetoSalesLocation locationsObject = new CostpricetoSalesLocation();

		LocationCostPriceActuals locationCostPriceActuals = new LocationCostPriceActuals();

		LocationCostSalePriceActuals locationCostSalePriceActuals = new LocationCostSalePriceActuals();

		CostPrice costPrice1 = new CostPrice();

		CostSalePrice costsalePrice1 = new CostSalePrice();
		Double totalgoldcostprice = 0.0;
		Double totaldiamondcostprice = 0.0;
		Double totalgoldsaleprice = 0.0;
		Double totaldiamondsaleprice = 0.0;

		Double totalcostPrice = 0.0;
		Double totalSalePrice = 0.0;

		String admin = "ADMIN";
		String d = "diamond";
		String g = "gold";

		List<Double> goldcostPrice = new ArrayList<>();
		List<Double> goldSalePrice = new ArrayList<>();
		List<Double> diamondcostPrice = new ArrayList<>();
		List<Double> diamondsalePrice = new ArrayList<>();
		LocationCostPriceActuals costPrice = new LocationCostPriceActuals();
		LocationCostSalePriceActuals costsalePrice = new LocationCostSalePriceActuals();

		List<Double> timeLinegoldcostPrice = new ArrayList<>();
		List<Double> timeLinegoldSalePrice = new ArrayList<>();
		List<Double> timeLinediamondcostPrice = new ArrayList<>();
		List<Double> timeLinediamondsalePrice = new ArrayList<>();
		List<String> locationName = new ArrayList<>();
		try {
			Channel channel = channelRepo.findByChannelName("SHW");
			List<Location> allShowRoomLocations = new ArrayList<>();

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

			if (role.getName().equalsIgnoreCase(admin)) {

				allShowRoomLocations = locationRepo.findByChannel(channel);
			} else {

				if (user.getEmpCode() != null) {

					Manager manager = managerRepo.findByEmpId(user.getEmpCode());

					Set<Location> locationList = manager.getLocation().stream().filter(o -> o.getChannel() == channel)
							.collect(Collectors.toSet());
					for (Location location : locationList) {

						allShowRoomLocations.add(location);

					}
				}
			}
			Collections.sort(allShowRoomLocations);

			for (Location location : allShowRoomLocations) {

				locationName.add(location.getLocationCode());

			}

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
				samp.setTagpricetosales(costpricetosales);
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
						samp.setTagpricetosales(costpricetosales);
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
						samp.setTagpricetosales(costpricetosales);
						sampList.add(samp);
					}

				}
			}

			List<Sales> salesActualsList = salesRepo.findByStartDateAndEndDate(startDate, endDate);

			for (Location locations : allShowRoomLocations) {

				double goldTag = 0.0;
				double goldSale = 0.0;
				double diamondTag = 0.0;
				double diamondSale = 0.0;
				if (salesActualsList != null) {

					for (Sales sale : salesActualsList) {

						if (sale.getItemType().equalsIgnoreCase(g)
								&& sale.getLocation().getId().equals(locations.getId())
								&& sale.getLocation().getChannel().getId() == 1) {
							goldTag = goldTag + sale.getCostPrice();
							goldSale = goldSale + sale.getTotalSoldAmount();

						} else if (sale.getItemType().equalsIgnoreCase(d)
								&& sale.getLocation().getId().equals(locations.getId())
								&& sale.getLocation().getChannel().getId() == 1) {

							diamondTag = diamondTag + sale.getCostPrice();

							diamondSale = diamondSale + sale.getTotalSoldAmount();

						}

					}
					goldcostPrice.add(goldTag / 100000);
					goldSalePrice.add(goldSale / 100000);
					diamondcostPrice.add(diamondTag / 100000);
					diamondsalePrice.add(diamondSale / 100000);
				} else {

					goldcostPrice.add(0.0);
					goldSalePrice.add(0.0);
					diamondcostPrice.add(0.0);
					diamondsalePrice.add(0.0);
				}
				locationsnames.add(locations.getLocationCode());

			}

			for (Sample2 sample : sampList) {

				startDateTimeline = sample.getStartDateTimeline();

				for (int i = 0; i < sample.getNumberOfDays(); i++) {

					double timeLinegoldcost = 0.0;
					double timeLinegoldSale = 0.0;
					double timeLinediamondcost = 0.0;
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

							if (sales.getItemType().equalsIgnoreCase(g)
									&& sales.getLocation().getChannel().getId() == 1) {

								timeLinegoldcost = timeLinegoldcost + sales.getCostPrice();

								timeLinegoldSale = timeLinegoldSale + sales.getTotalSoldAmount();

								totalgoldcostprice = totalgoldcostprice + sales.getCostPrice();
								totalgoldsaleprice = totalgoldsaleprice + sales.getTotalSoldAmount();
							} else if (sales.getItemType().equalsIgnoreCase(d)
									&& sales.getLocation().getChannel().getId() == 1) {
								timeLinediamondcost = timeLinediamondcost + sales.getCostPrice();

								timeLinediamondSale = timeLinediamondSale + sales.getTotalSoldAmount();

								totaldiamondcostprice = totaldiamondcostprice + sales.getCostPrice();
								totaldiamondsaleprice = totaldiamondsaleprice + sales.getTotalSoldAmount();
							}

						}

						timeLinegoldcostPrice.add(timeLinegoldcost / 100000);
						timeLinegoldSalePrice.add(timeLinegoldSale / 100000);
						timeLinediamondcostPrice.add(timeLinediamondcost / 100000);
						timeLinediamondsalePrice.add(timeLinediamondSale / 100000);

					} else {

						timeLinegoldcostPrice.add(0.0);
						timeLinegoldSalePrice.add(0.0);
						timeLinediamondcostPrice.add(0.0);
						timeLinediamondsalePrice.add(0.0);

					}

				}

			}

			locationCostPriceActuals.setDiamond(timeLinediamondcostPrice);
			locationCostPriceActuals.setGold(timeLinegoldcostPrice);
			locationCostSalePriceActuals.setDiamond(timeLinediamondsalePrice);
			locationCostSalePriceActuals.setGold(timeLinegoldSalePrice);

			timelineactuals.setSaleprice(locationCostSalePriceActuals);
			timelineactuals.setCostprice(locationCostPriceActuals);

			costpricetosalesdetails.setActuals(timelineactuals);

			costPrice.setDiamond(diamondcostPrice);
			costPrice.setGold(goldcostPrice);
			costsalePrice.setDiamond(diamondsalePrice);
			costsalePrice.setGold(goldSalePrice);

			actulas.setSaleprice(costsalePrice);
			actulas.setCostprice(costPrice);

			locationsObject.setNames(locationsnames);
			locationsObject.setActuals(actulas);
			costpricetosalesdetails.setTimeline(timeline);

			costpricetosalesdetails.setLocations(locationsObject);

			costPrice1.setDiamond(totaldiamondcostprice / 100000);
			costPrice1.setGold(totalgoldcostprice / 100000);

			costsalePrice1.setDiamond(totaldiamondsaleprice / 100000);

			costsalePrice1.setGold(totalgoldsaleprice / 100000);
			totalSalePrice = costsalePrice1.getDiamond() + costsalePrice1.getGold();

			totalcostPrice = costPrice1.getDiamond() + costPrice1.getGold();

			data.setTotalsaleprice(totalSalePrice);
			data.setTotalcostprice(totalcostPrice);
			Double totalmargin = ((totalSalePrice - totalcostPrice) / totalcostPrice) * 100;
			data.setTotalmargin((totalmargin.isNaN() || totalmargin.isInfinite()) ? 0.0 : totalmargin);
			data.setDetails(costpricetosalesdetails);
			data.setCostprice(costPrice1);
			data.setSaleprice(costsalePrice1);

			costPricetoSalesData.setStatus(HttpServletResponse.SC_OK);
			costPricetoSalesData.setMessage("Cost shw Day successful");
			costPricetoSalesData.setFromDate(startDate);
			costPricetoSalesData.setToDate(endDate);
			costPricetoSalesData.setData(data);

		} catch (Exception e) {
			log.info("shw");
		}
		return costPricetoSalesData;

	}

	// Getting Tagprice to Sales By Week

	public CostpricetoSalesResponse<CostPricetoSalesData> getcostpricetoSalesbyWeek(@PathVariable String startDate,
			@PathVariable String endDate) {
		log.info("Cost Price to Sales Implementation");

		CostpricetoSalesResponse<CostPricetoSalesData> costPricetoSalesData = new CostpricetoSalesResponse<>();

		CostPricetoSalesData data = new CostPricetoSalesData();

		CostPricetoSalesDetails costpricetosalesdetails = new CostPricetoSalesDetails();

		CostpricetoSalesLocation locationsObject = new CostpricetoSalesLocation();

		LocationCostPriceActuals locationCostPriceActuals = new LocationCostPriceActuals();

		LocationCostSalePriceActuals locationCostSalePriceActuals = new LocationCostSalePriceActuals();

		CostPrice costPrice1 = new CostPrice();

		CostSalePrice costsalePrice1 = new CostSalePrice();

		String admin = "ADMIN";
		String d = "diamond";
		String g = "gold";
		Double totalgoldcostprice = 0.0;
		Double totaldiamondcostprice = 0.0;
		Double totalgoldsaleprice = 0.0;
		Double totaldiamondsaleprice = 0.0;

		Double totalcostPrice = 0.0;
		Double totalSalePrice = 0.0;
		List<String> locationName = new ArrayList<>();
		try {

			Channel channel = channelRepo.findByChannelName("SHW");
			List<Location> allShowRoomLocations = new ArrayList<>();

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

			if (role.getName().equalsIgnoreCase(admin)) {

				allShowRoomLocations = locationRepo.findByChannel(channel);
			} else {

				if (user.getEmpCode() != null) {

					Manager manager = managerRepo.findByEmpId(user.getEmpCode());

					Set<Location> locationList = manager.getLocation().stream().filter(o -> o.getChannel() == channel)
							.collect(Collectors.toSet());
					for (Location location : locationList) {

						allShowRoomLocations.add(location);

					}
				}
			}

			Collections.sort(allShowRoomLocations);

			for (Location location : allShowRoomLocations) {

				locationName.add(location.getLocationCode());

			}

			LocalDate localStartDate = LocalDate.parse(startDate);
			LocalDate localEndDate = LocalDate.parse(endDate);

			List<Dates> weeksList = new ArrayList<>();
			List<String> timeline = new ArrayList<>();

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

			List<String> locationsnames = new ArrayList<>();

			List<Double> goldcostPrice = new ArrayList<>();
			List<Double> goldSalePrice = new ArrayList<>();
			List<Double> diamondcostPrice = new ArrayList<>();
			List<Double> diamondsalePrice = new ArrayList<>();
			LocationCostPriceActuals costPrice = new LocationCostPriceActuals();
			LocationCostSalePriceActuals salePrice = new LocationCostSalePriceActuals();

			List<Double> timeLinegoldcostPrice = new ArrayList<>();
			List<Double> timeLinegoldSalePrice = new ArrayList<>();
			List<Double> timeLinediamondcostPrice = new ArrayList<>();
			List<Double> timeLinediamondsalePrice = new ArrayList<>();

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

				double timeLinegoldcost = 0.0;
				double timeLinegoldSale = 0.0;
				double timeLinediamondcost = 0.0;
				double timeLinediamondSale = 0.0;

				for (Sample2 sample : sampList) {

					String startDateTimeline = sample.getStartDateTimeline();
					LocalDate localStartDateTimeline = LocalDate.parse(startDateTimeline);

					if (sample.getCostpricetosales() != null) {

						for (Sales sales : sample.getCostpricetosales()) {

							if (sales.getLocation().getChannel().getId().equals(1l)) {
								if (sales.getItemType().equalsIgnoreCase(g)) {
									timeLinegoldcost = timeLinegoldcost + sales.getCostPrice();
									timeLinegoldSale = timeLinegoldSale + sales.getTotalSoldAmount();
									totalgoldcostprice = totalgoldcostprice + sales.getCostPrice();
									totalgoldsaleprice = totalgoldsaleprice + sales.getTotalSoldAmount();
								} else if (sales.getItemType().equalsIgnoreCase(d)) {
									timeLinediamondcost = timeLinediamondcost + sales.getCostPrice();

									timeLinediamondSale = timeLinediamondSale + sales.getTotalSoldAmount();

									totaldiamondcostprice = totaldiamondcostprice + sales.getCostPrice();
									totaldiamondsaleprice = totaldiamondsaleprice + sales.getTotalSoldAmount();
								}

							}
						}

					} else {
						timeLinegoldcost += 0.0;
						timeLinegoldSale += 0.0;
						timeLinediamondcost += 0.0;
						timeLinediamondSale += 0.0;
					}
				}

				timeLinegoldcostPrice.add(timeLinegoldcost / 100000);
				timeLinegoldSalePrice.add(timeLinegoldSale / 100000);
				timeLinediamondcostPrice.add(timeLinediamondcost / 100000);
				timeLinediamondsalePrice.add(timeLinediamondSale / 100000);

			}

			List<Sales> salesActualsList = salesRepo.findByStartDateAndEndDate(startDate, endDate);

			for (Location locations : allShowRoomLocations) {
				double goldTag = 0.0;
				double goldSale = 0.0;
				double diamondTag = 0.0;
				double diamondSale = 0.0;

				if (!salesActualsList.isEmpty()) {
					for (Sales sale : salesActualsList) {

						if (sale.getItemType().equalsIgnoreCase(g)
								&& sale.getLocation().getId().equals(locations.getId())
								&& sale.getLocation().getChannel().getId() == 1) {
							goldTag = goldTag + sale.getCostPrice();
							goldSale = goldSale + sale.getTotalSoldAmount();

						} else if (sale.getItemType().equalsIgnoreCase(d)
								&& sale.getLocation().getId().equals(locations.getId())
								&& sale.getLocation().getChannel().getId() == 1) {

							diamondTag = diamondTag + sale.getCostPrice();

							diamondSale = diamondSale + sale.getTotalSoldAmount();

						}

					}
					goldcostPrice.add(goldTag / 100000);
					goldSalePrice.add(goldSale / 100000);
					diamondcostPrice.add(diamondTag / 100000);
					diamondsalePrice.add(diamondSale / 100000);
				} else {

					goldcostPrice.add(0.0);
					goldSalePrice.add(0.0);
					diamondcostPrice.add(0.0);
					diamondsalePrice.add(0.0);
				}
				locationsnames.add(locations.getLocationCode());
			}

			locationCostPriceActuals.setDiamond(timeLinediamondcostPrice);
			locationCostPriceActuals.setGold(timeLinegoldcostPrice);
			locationCostSalePriceActuals.setDiamond(timeLinediamondsalePrice);
			locationCostSalePriceActuals.setGold(timeLinegoldSalePrice);

			timelineactuals.setSaleprice(locationCostSalePriceActuals);
			timelineactuals.setCostprice(locationCostPriceActuals);

			costpricetosalesdetails.setActuals(timelineactuals);

			costPrice.setDiamond(diamondcostPrice);
			costPrice.setGold(goldcostPrice);
			salePrice.setDiamond(diamondsalePrice);
			salePrice.setGold(goldSalePrice);

			actulas.setSaleprice(salePrice);
			actulas.setCostprice(costPrice);

			locationsObject.setNames(locationsnames);
			locationsObject.setActuals(actulas);
			costpricetosalesdetails.setTimeline(timeline);

			costpricetosalesdetails.setLocations(locationsObject);

			costPrice1.setDiamond(totaldiamondcostprice / 100000);
			costPrice1.setGold(totalgoldcostprice / 100000);

			costsalePrice1.setDiamond(totaldiamondsaleprice / 100000);

			costsalePrice1.setGold(totalgoldsaleprice / 100000);
			totalSalePrice = costsalePrice1.getDiamond() + costsalePrice1.getGold();

			totalcostPrice = costPrice1.getDiamond() + costPrice1.getGold();

			data.setTotalsaleprice(totalSalePrice);
			data.setTotalcostprice(totalcostPrice);
			Double totalmargin = ((totalSalePrice - totalcostPrice) / totalcostPrice) * 100;
			data.setTotalmargin((totalmargin.isNaN() || totalmargin.isInfinite()) ? 0.0 : totalmargin);
			data.setDetails(costpricetosalesdetails);
			data.setCostprice(costPrice1);
			data.setSaleprice(costsalePrice1);

			costPricetoSalesData.setStatus(HttpServletResponse.SC_OK);
			costPricetoSalesData.setMessage(" Cost shw week successful");
			costPricetoSalesData.setFromDate(startDate);
			costPricetoSalesData.setToDate(endDate);

			costPricetoSalesData.setData(data);

		} catch (Exception e) {
			log.info("");
		}
		return costPricetoSalesData;

	}

	@Override
	public CostpricetoSalesResponse<CostPricetoSalesData> getcostpricetoSales(String startDate, String endDate) {

		log.info("Cost Price to Sales Implementation");

		CostpricetoSalesResponse<CostPricetoSalesData> costPricetoSalesData = new CostpricetoSalesResponse<>();

		try {

			LocalDate localStartDate = LocalDate.parse(startDate);
			LocalDate localEndDate = LocalDate.parse(endDate);

			long betweenDays = ChronoUnit.DAYS.between(localStartDate, localEndDate);

			if (betweenDays < 15) {
				// daywise
				costPricetoSalesData = getcostpricetoSalesbyDay(startDate, endDate);
			} else if (betweenDays >= 15 && betweenDays <= 60) {
				// week wise
				costPricetoSalesData = getcostpricetoSalesbyWeek(startDate, endDate);
			} else {
				// month wise
				costPricetoSalesData = getcostpricetoSalesbyMonth(startDate, endDate);
			}
		} catch (Exception e) {
			costPricetoSalesData.setError(EnumTypeForErrorCodes.SCUS110.name(),
					EnumTypeForErrorCodes.SCUS110.errorMsg());
			costPricetoSalesData.setMessage("Failed to get CostPrice to Sales Margins");
			log.error(utils.toJson(costPricetoSalesData.getError()), e);
		}
		return costPricetoSalesData;
	}

}

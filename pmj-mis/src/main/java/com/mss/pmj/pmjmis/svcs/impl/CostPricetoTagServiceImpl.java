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
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.mss.pmj.pmjmis.common.EnumTypeForErrorCodes;
import com.mss.pmj.pmjmis.common.Utils;
import com.mss.pmj.pmjmis.domain.Sales;
import com.mss.pmj.pmjmis.repos.LocationRepository;
import com.mss.pmj.pmjmis.repos.ManagerRepository;
import com.mss.pmj.pmjmis.repos.SalesRepository;
import com.mss.pmj.pmjmis.repos.UserRepository;
import com.mss.pmj.pmjmis.response.CostPricetoTagData;
import com.mss.pmj.pmjmis.response.CostPricetoTagLocation;
import com.mss.pmj.pmjmis.response.CostPricetoTagPriceValue;
import com.mss.pmj.pmjmis.response.CostPricetoTagResponse;
import com.mss.pmj.pmjmis.response.CostPricetoTagpriceDetails;
import com.mss.pmj.pmjmis.response.CostSalePrice;
import com.mss.pmj.pmjmis.response.CostTagPrice;
import com.mss.pmj.pmjmis.response.Dates;
import com.mss.pmj.pmjmis.response.LocationCostPricetoTagActuals;
import com.mss.pmj.pmjmis.response.LocationCostPricetoTagSalesPriceactuals;
import com.mss.pmj.pmjmis.response.Sample2;
import com.mss.pmj.pmjmis.svcs.CostPricetoTagService;

@RestController
public class CostPricetoTagServiceImpl implements CostPricetoTagService {

	private static Logger log = LoggerFactory.getLogger(CostPricetoTagServiceImpl.class);

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

	private static final String DATE_FORMATE = "MMM-yyyy";

	// Getting Tagprice to Sales By Month

	public CostPricetoTagResponse<CostPricetoTagData> getcostpricetoTagbyMonth(@PathVariable String startDate,
			@PathVariable String endDate) {
		log.info("Cost Price to Tag Implementation by Month");

		CostPricetoTagResponse<CostPricetoTagData> costPricetoTagData = new CostPricetoTagResponse<>();

		CostPricetoTagData data = new CostPricetoTagData();

		CostPricetoTagpriceDetails costpricetotagpricedetails = new CostPricetoTagpriceDetails();

		CostPricetoTagLocation locationsObject = new CostPricetoTagLocation();

		LocationCostPricetoTagActuals locationCostPriceActuals = new LocationCostPricetoTagActuals();

		LocationCostPricetoTagSalesPriceactuals locationCostSalePriceActuals = new LocationCostPricetoTagSalesPriceactuals();

		CostSalePrice costPrice1 = new CostSalePrice();

		CostTagPrice costsalePrice1 = new CostTagPrice();

		String d = "diamond";
		String g = "gold";

		Double totalgoldcostprice = 0.0;
		Double totaldiamondcostprice = 0.0;
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

			CostPricetoTagPriceValue actulas = new CostPricetoTagPriceValue();

			CostPricetoTagPriceValue timelineactuals = new CostPricetoTagPriceValue();

			List<String> locationsnames = new ArrayList<>();

			List<Double> goldcostPrice = new ArrayList<>();
			List<Double> goldSalePrice = new ArrayList<>();
			List<Double> diamondcostPrice = new ArrayList<>();
			List<Double> diamondsalePrice = new ArrayList<>();

			LocationCostPricetoTagActuals costPrice = new LocationCostPricetoTagActuals();
			LocationCostPricetoTagSalesPriceactuals costsalePrice = new LocationCostPricetoTagSalesPriceactuals();

			List<Double> timeLinegoldcostPrice = new ArrayList<>();
			List<Double> timeLinegoldSalePrice = new ArrayList<>();
			List<Double> timeLinediamondcostPrice = new ArrayList<>();
			List<Double> timeLinediamondsalePrice = new ArrayList<>();

			List<String> timeline = new ArrayList<>();

			for (int i = 0; i < datesList.size(); i++) {

				Collection<Sales> costpricetotag = null;

				long noOfDaysBetween = 0l;

				if (i == 0) {

					if (date1.equals(date2)) {

						costpricetotag = salesRepo.findByStartDateAndEndDate(startDate, endDate);

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
						costpricetotag = salesRepo.findByStartDateAndEndDate(startDate, lastDay1);
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
					costpricetotag = salesRepo.findByStartDateAndEndDate(firstDay1, lastDay1);
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
					costpricetotag = salesRepo.findByStartDateAndEndDate(firstDay1, endDate);

				}

				timeline.add(datesList.get(i));

				if (!costpricetotag.isEmpty()) {
					double timeLinegoldTag = 0.0;
					double timeLinegoldSale = 0.0;
					double timeLinediamondTag = 0.0;
					double timeLinediamondSale = 0.0;
					for (Sales sales : costpricetotag) {

						if (sales.getItemType().equalsIgnoreCase(g)) {
							timeLinegoldTag = timeLinegoldTag + sales.getCostPrice();

							timeLinegoldSale = timeLinegoldSale + sales.getTagPrice();

							totalgoldcostprice = totalgoldcostprice + sales.getCostPrice();
							totalgoldsaleprice = totalgoldsaleprice + sales.getTagPrice();
						} else if (sales.getItemType().equalsIgnoreCase(d)) {
							timeLinediamondTag = timeLinediamondTag + sales.getCostPrice();

							timeLinediamondSale = timeLinediamondSale + sales.getTagPrice();

							totaldiamondcostprice = totaldiamondcostprice + sales.getCostPrice();
							totaldiamondsaleprice = totaldiamondsaleprice + sales.getTagPrice();
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

			costPrice.setDiamond(diamondcostPrice);
			costPrice.setGold(goldcostPrice);
			costsalePrice.setDiamond(diamondsalePrice);
			costsalePrice.setGold(goldSalePrice);

			actulas.setTagprice(costsalePrice);
			actulas.setCostprice(costPrice);
			locationsObject.setNames(locationsnames);
			locationsObject.setActuals(actulas);
			costpricetotagpricedetails.setTimeline(timeline);

			costPrice1.setDiamond(totaldiamondcostprice / 100000);
			costPrice1.setGold(totalgoldcostprice / 100000);

			costsalePrice1.setDiamond(totaldiamondsaleprice / 100000);

			costsalePrice1.setGold(totalgoldsaleprice / 100000);

			locationCostPriceActuals.setDiamond(timeLinediamondcostPrice);
			locationCostPriceActuals.setGold(timeLinegoldcostPrice);
			locationCostSalePriceActuals.setDiamond(timeLinediamondsalePrice);
			locationCostSalePriceActuals.setGold(timeLinegoldSalePrice);

			timelineactuals.setTagprice(locationCostSalePriceActuals);
			timelineactuals.setCostprice(locationCostPriceActuals);

			costpricetotagpricedetails.setActuals(timelineactuals);

			Double totalcostPrice = costPrice1.getDiamond() + costPrice1.getGold();

			Double totaltagprice = costsalePrice1.getDiamond() + costsalePrice1.getGold();

			data.setTotaltagprice(totaltagprice);
			data.setTotalcostprice(totalcostPrice);
			Double totalmargin = ((totaltagprice - totalcostPrice) / totalcostPrice) * 100;
			data.setTotalmargin((totalmargin.isNaN() || totalmargin.isInfinite()) ? 0.0 : totalmargin);
			data.setDetails(costpricetotagpricedetails);
			data.setTagprice(costsalePrice1);
			data.setCostprice(costPrice1);

			costPricetoTagData.setStatus(HttpServletResponse.SC_OK);
			costPricetoTagData.setMessage("Cost shw month successful");
			costPricetoTagData.setFromDate(startDate);
			costPricetoTagData.setToDate(endDate);

			costPricetoTagData.setData(data);
		} catch (Exception e) {
			log.info("tag");

		}
		return costPricetoTagData;

	}

	// Get Tag to Sales By Day
	public CostPricetoTagResponse<CostPricetoTagData> getcostpricetoTagbyDay(@PathVariable String startDate,
			@PathVariable String endDate) {
		log.info("Cost Price to Tag Implementation");

		CostPricetoTagResponse<CostPricetoTagData> costPricetoTagData = new CostPricetoTagResponse<>();

		CostPricetoTagData data = new CostPricetoTagData();

		CostPricetoTagpriceDetails costpricetotagpricedetails = new CostPricetoTagpriceDetails();

		CostPricetoTagLocation locationsObject = new CostPricetoTagLocation();

		LocationCostPricetoTagActuals locationCostPriceActuals = new LocationCostPricetoTagActuals();

		LocationCostPricetoTagSalesPriceactuals locationCostSalePriceActuals = new LocationCostPricetoTagSalesPriceactuals();

		CostSalePrice costPrice1 = new CostSalePrice();

		CostTagPrice costsalePrice1 = new CostTagPrice();

		Double totalgoldcostprice = 0.0;
		Double totaldiamondcostprice = 0.0;
		Double totalgoldsaleprice = 0.0;
		Double totaldiamondsaleprice = 0.0;

		List<Double> goldcostPrice = new ArrayList<>();
		List<Double> goldSalePrice = new ArrayList<>();
		List<Double> diamondcostPrice = new ArrayList<>();
		List<Double> diamondsalePrice = new ArrayList<>();

		List<Double> timeLinegoldcostPrice = new ArrayList<>();
		List<Double> timeLinegoldSalePrice = new ArrayList<>();
		List<Double> timeLinediamondcostPrice = new ArrayList<>();
		List<Double> timeLinediamondsalePrice = new ArrayList<>();

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
			CostPricetoTagPriceValue actulas = new CostPricetoTagPriceValue();

			CostPricetoTagPriceValue timelineactuals = new CostPricetoTagPriceValue();

			LocationCostPricetoTagActuals costPriceshw = new LocationCostPricetoTagActuals();
			LocationCostPricetoTagSalesPriceactuals costtagPrice = new LocationCostPricetoTagSalesPriceactuals();

			List<String> locationsnames = new ArrayList<>();

			List<String> timeline = new ArrayList<>();
			Collection<Sales> costpricetotag = null;

			long noOfDaysBetween = 0l;
			String startDateTimeline = null;
			String endDateTimeline = null;

			List<Sample2> sampList = new ArrayList<>();

			if (datesList.size() == 1) {
				Sample2 samp = new Sample2();
				costpricetotag = salesRepo.findByStartDateAndEndDate(startDate, endDate);
				noOfDaysBetween = ChronoUnit.DAYS.between(localStartDate, localEndDate) + 1;
				startDateTimeline = startDate;
				endDateTimeline = endDate;
				samp.setNumberOfDays(noOfDaysBetween);
				samp.setEndDateTimeline(endDateTimeline);
				samp.setCostpricetotag(costpricetotag);
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
						costpricetotag = salesRepo.findByStartDateAndEndDate(startDate, lastDay1);
						noOfDaysBetween = ChronoUnit.DAYS.between(localStartDate, day) + 1;

						startDateTimeline = startDate;
						endDateTimeline = lastDay1;
						samp.setNumberOfDays(noOfDaysBetween);
						samp.setStartDateTimeline(startDateTimeline);
						samp.setEndDateTimeline(endDateTimeline);
						samp.setCostpricetotag(costpricetotag);
						sampList.add(samp);

					} else {
						Sample2 samp = new Sample2();
						String firstDay1 = datesList.get(i).substring(4, 8) + "-" + m + "-" + "01";
						LocalDate day = LocalDate.parse(firstDay1);
						costpricetotag = salesRepo.findByStartDateAndEndDate(firstDay1, endDate);

						noOfDaysBetween = ChronoUnit.DAYS.between(day, localEndDate) + 1;
						startDateTimeline = firstDay1;
						endDateTimeline = endDate;

						samp.setNumberOfDays(noOfDaysBetween);
						samp.setStartDateTimeline(startDateTimeline);
						samp.setEndDateTimeline(endDateTimeline);
						samp.setCostpricetotag(costpricetotag);
						sampList.add(samp);
					}

				}
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

							if (sales.getItemType().equalsIgnoreCase("Gold")) {

								timeLinegoldcost = timeLinegoldcost + sales.getCostPrice();

								timeLinegoldSale = timeLinegoldSale + sales.getTagPrice();

								totalgoldcostprice = totalgoldcostprice + sales.getCostPrice();
								totalgoldsaleprice = totalgoldsaleprice + sales.getTagPrice();

							} else if (sales.getItemType().equalsIgnoreCase("Diamond")) {
								timeLinediamondcost = timeLinediamondcost + sales.getCostPrice();

								timeLinediamondSale = timeLinediamondSale + sales.getTagPrice();

								totaldiamondcostprice = totaldiamondcostprice + sales.getCostPrice();
								totaldiamondsaleprice = totaldiamondsaleprice + sales.getTagPrice();
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

			costPriceshw.setDiamond(diamondcostPrice);
			costPriceshw.setGold(goldcostPrice);
			costtagPrice.setDiamond(diamondsalePrice);
			costtagPrice.setGold(goldSalePrice);

			actulas.setTagprice(costtagPrice);
			actulas.setCostprice(costPriceshw);
			locationsObject.setNames(locationsnames);
			locationsObject.setActuals(actulas);
			costpricetotagpricedetails.setTimeline(timeline);

			costPrice1.setDiamond(totaldiamondcostprice / 100000);
			costPrice1.setGold(totalgoldcostprice / 100000);

			costsalePrice1.setDiamond(totaldiamondsaleprice / 100000);

			costsalePrice1.setGold(totalgoldsaleprice / 100000);

			locationCostPriceActuals.setDiamond(timeLinediamondcostPrice);
			locationCostPriceActuals.setGold(timeLinegoldcostPrice);
			locationCostSalePriceActuals.setDiamond(timeLinediamondsalePrice);
			locationCostSalePriceActuals.setGold(timeLinegoldSalePrice);

			timelineactuals.setTagprice(locationCostSalePriceActuals);
			timelineactuals.setCostprice(locationCostPriceActuals);

			costpricetotagpricedetails.setActuals(timelineactuals);

			Double totalcostPrice1 = costPrice1.getDiamond() + costPrice1.getGold();

			Double totaltagprice1 = costsalePrice1.getDiamond() + costsalePrice1.getGold();

			data.setTotaltagprice(totaltagprice1);
			data.setTotalcostprice(totalcostPrice1);
			Double totalmargin = ((totaltagprice1 - totalcostPrice1) / totalcostPrice1) * 100;
			data.setTotalmargin((totalmargin.isNaN() || totalmargin.isInfinite()) ? 0.0 : totalmargin);
			data.setDetails(costpricetotagpricedetails);
			data.setTagprice(costsalePrice1);
			data.setCostprice(costPrice1);

			costPricetoTagData.setStatus(HttpServletResponse.SC_OK);
			costPricetoTagData.setMessage("Cost shw Day successful");
			costPricetoTagData.setFromDate(startDate);
			costPricetoTagData.setToDate(endDate);
			costPricetoTagData.setData(data);
		} catch (Exception e) {
			log.info("tag");
		}
		return costPricetoTagData;

	}

	// Getting Tagprice to Sales By Week

	public CostPricetoTagResponse<CostPricetoTagData> getcostpricetoTagbyWeek(@PathVariable String startDate,
			@PathVariable String endDate) {
		log.info("Cost Price to Tag Implementation");

		CostPricetoTagResponse<CostPricetoTagData> costPricetoTagData = new CostPricetoTagResponse<>();

		CostPricetoTagData data = new CostPricetoTagData();

		CostPricetoTagpriceDetails costpricetotagpricedetails = new CostPricetoTagpriceDetails();

		LocationCostPricetoTagActuals locationCostPriceActuals = new LocationCostPricetoTagActuals();

		LocationCostPricetoTagSalesPriceactuals locationCostSalePriceActuals = new LocationCostPricetoTagSalesPriceactuals();

		CostSalePrice costPrice1 = new CostSalePrice();

		CostTagPrice costsalePrice1 = new CostTagPrice();
		Double totalgoldcostprice = 0.0;
		Double totaldiamondcostprice = 0.0;
		Double totalgoldsaleprice = 0.0;
		Double totaldiamondsaleprice = 0.0;
		try {

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

			Collection<Sales> costpricetotag = null;
			long noOfDaysBetween = 0l;
			CostPricetoTagPriceValue actulas = new CostPricetoTagPriceValue();

			CostPricetoTagPriceValue timelineactuals = new CostPricetoTagPriceValue();

			LocationCostPricetoTagActuals costPriceshw = new LocationCostPricetoTagActuals();
			LocationCostPricetoTagSalesPriceactuals costtagPrice = new LocationCostPricetoTagSalesPriceactuals();

			List<Double> goldcostPrice = new ArrayList<>();
			List<Double> goldSalePrice = new ArrayList<>();
			List<Double> diamondcostPrice = new ArrayList<>();
			List<Double> diamondsalePrice = new ArrayList<>();

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
					costpricetotag = salesRepo.findByStartDateAndEndDate(samp, samp1);
					noOfDaysBetween = ChronoUnit.DAYS.between(dateValue.getStartDate(), dateValue.getEndDate()) + 1;
					sample11.setNumberOfDays(noOfDaysBetween);
					sample11.setEndDateTimeline(dateValue.getEndDate().toString());
					sample11.setCostpricetotag(costpricetotag);
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
							costpricetotag = salesRepo.findByStartDateAndEndDate(dateValue.getStartDate().toString(),
									lastDay1);
							noOfDaysBetween = ChronoUnit.DAYS.between(dateValue.getStartDate(), day2) + 1;

							sample11.setNumberOfDays(noOfDaysBetween);
							sample11.setEndDateTimeline(lastDay1);
							sample11.setCostpricetotag(costpricetotag);
							sample11.setStartDateTimeline(dateValue.getStartDate().toString());
							sampList.add(sample11);
						} else {
							Sample2 sample11 = new Sample2();
							costpricetotag = salesRepo.findByStartDateAndEndDate(firstDay1,
									dateValue.getEndDate().toString());
							noOfDaysBetween = ChronoUnit.DAYS.between(day, dateValue.getEndDate()) + 1;

							sample11.setNumberOfDays(noOfDaysBetween);
							sample11.setEndDateTimeline(dateValue.getEndDate().toString());
							sample11.setCostpricetotag(costpricetotag);
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

					LocalDate nextDay = localStartDateTimeline.plusDays(1);

					if (sample.getCostpricetotag() != null) {

						for (Sales sales : sample.getCostpricetotag()) {

							if (sales.getItemType().equalsIgnoreCase("Gold")) {
								timeLinegoldcost = timeLinegoldcost + sales.getCostPrice();

								timeLinegoldSale = timeLinegoldSale + sales.getTagPrice();

								totalgoldcostprice = totalgoldcostprice + sales.getCostPrice();
								totalgoldsaleprice = totalgoldsaleprice + sales.getTagPrice();
							} else if (sales.getItemType().equalsIgnoreCase("Diamond")) {
								timeLinediamondcost = timeLinediamondcost + sales.getCostPrice();

								timeLinediamondSale = timeLinediamondSale + sales.getTagPrice();

								totaldiamondcostprice = totaldiamondcostprice + sales.getCostPrice();
								totaldiamondsaleprice = totaldiamondsaleprice + sales.getTagPrice();
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

			costPriceshw.setDiamond(diamondcostPrice);
			costPriceshw.setGold(goldcostPrice);
			costtagPrice.setDiamond(diamondsalePrice);
			costtagPrice.setGold(goldSalePrice);

			actulas.setCostprice(costPriceshw);
			actulas.setTagprice(costtagPrice);
			costpricetotagpricedetails.setTimeline(timeline);

			costPrice1.setDiamond(totaldiamondcostprice / 100000);
			costPrice1.setGold(totalgoldcostprice / 100000);

			costsalePrice1.setDiamond(totaldiamondsaleprice / 100000);

			costsalePrice1.setGold(totalgoldsaleprice / 100000);

			locationCostPriceActuals.setDiamond(timeLinediamondcostPrice);
			locationCostPriceActuals.setGold(timeLinegoldcostPrice);
			locationCostSalePriceActuals.setDiamond(timeLinediamondsalePrice);
			locationCostSalePriceActuals.setGold(timeLinegoldSalePrice);

			timelineactuals.setTagprice(locationCostSalePriceActuals);
			timelineactuals.setCostprice(locationCostPriceActuals);

			costpricetotagpricedetails.setActuals(timelineactuals);

			Double totalcostPrice1 = costPrice1.getDiamond() + costPrice1.getGold();

			Double totaltagPrice1 = costsalePrice1.getDiamond() + costsalePrice1.getGold();

			data.setTotaltagprice(totaltagPrice1);
			data.setTotalcostprice(totalcostPrice1);
			Double totalmargin = ((totaltagPrice1 - totalcostPrice1) / totalcostPrice1) * 100;
			data.setTotalmargin((totalmargin.isNaN() || totalmargin.isInfinite()) ? 0.0 : totalmargin);
			data.setDetails(costpricetotagpricedetails);
			data.setTagprice(costsalePrice1);
			data.setCostprice(costPrice1);

			costPricetoTagData.setStatus(HttpServletResponse.SC_OK);
			costPricetoTagData.setMessage("Cost shw week successful");
			costPricetoTagData.setFromDate(startDate);
			costPricetoTagData.setToDate(endDate);

			costPricetoTagData.setData(data);
		} catch (Exception e) {
			log.info("tag");
		}
		return costPricetoTagData;

	}

	@Override
	public CostPricetoTagResponse<CostPricetoTagData> getcostpricetoTag(String startDate, String endDate) {

		log.info("Cost Price to Sales Implementation");

		CostPricetoTagResponse<CostPricetoTagData> costPricetoSalesData = new CostPricetoTagResponse<>();

		try {

			LocalDate localStartDate = LocalDate.parse(startDate);
			LocalDate localEndDate = LocalDate.parse(endDate);

			long betweenDays = ChronoUnit.DAYS.between(localStartDate, localEndDate);

			if (betweenDays < 15) {
				// daywise
				costPricetoSalesData = getcostpricetoTagbyDay(startDate, endDate);
			} else if (betweenDays >= 15 && betweenDays <= 60) {
				// week wise
				costPricetoSalesData = getcostpricetoTagbyWeek(startDate, endDate);
			} else {
				// month wise
				costPricetoSalesData = getcostpricetoTagbyMonth(startDate, endDate);
			}
		} catch (Exception e) {
			costPricetoSalesData.setError(EnumTypeForErrorCodes.SCUS110.name(),
					EnumTypeForErrorCodes.SCUS110.errorMsg());
			costPricetoSalesData.setMessage("Failed to get CostPrice to Tag Margins");
			log.error(utils.toJson(costPricetoSalesData.getError()), e);
		}
		return costPricetoSalesData;
	}

}

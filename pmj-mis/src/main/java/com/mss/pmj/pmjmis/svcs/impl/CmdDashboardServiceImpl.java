package com.mss.pmj.pmjmis.svcs.impl;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import org.json.simple.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.mss.pmj.pmjmis.common.EnumTypeForErrorCodes;
import com.mss.pmj.pmjmis.common.Utils;
import com.mss.pmj.pmjmis.domain.Channel;
import com.mss.pmj.pmjmis.domain.EmpDailyActuals;
import com.mss.pmj.pmjmis.domain.Employee;
import com.mss.pmj.pmjmis.domain.Location;
import com.mss.pmj.pmjmis.domain.Sales;
import com.mss.pmj.pmjmis.domain.SalesReturns;
import com.mss.pmj.pmjmis.domain.Team;
import com.mss.pmj.pmjmis.model.ServiceResponse;
import com.mss.pmj.pmjmis.repos.ChannelRepository;
import com.mss.pmj.pmjmis.repos.EmpDailyActualsRepository;
import com.mss.pmj.pmjmis.repos.EmployeeRepository;
import com.mss.pmj.pmjmis.repos.LocationRepository;
import com.mss.pmj.pmjmis.repos.SalesRepository;
import com.mss.pmj.pmjmis.repos.SalesReturnsRepository;
import com.mss.pmj.pmjmis.repos.TeamRepository;
import com.mss.pmj.pmjmis.response.CmdDashboardD2h;
import com.mss.pmj.pmjmis.response.CmdDashboardShw;
import com.mss.pmj.pmjmis.response.PerformanceAnalysisChannelWiseTgtVsActual;
import com.mss.pmj.pmjmis.response.TargetVsActualResponse;
import com.mss.pmj.pmjmis.svcs.CmdDashboardService;

@RestController
public class CmdDashboardServiceImpl implements CmdDashboardService {

	private static Logger log = LoggerFactory.getLogger(CmdDashboardServiceImpl.class);

	@Autowired
	private Utils utils;

	@Autowired
	private LocationRepository locationRepo;

	@Autowired
	private ChannelRepository channelRepo;

	@Autowired
	private EmployeeRepository empRepo;

	@Autowired
	private SalesRepository salesRepo;

	@Autowired
	private SalesReturnsRepository salesReturnsRepo;

	@Autowired
	private TeamRepository teamRepo;

	@Autowired
	private PerformanceAnalysisChannelWiseImpl performanceAnalysisChannelWiseImpl;

	@Autowired
	private EmpDailyActualsRepository empDailyActualsRepo;

	private String total = "total";
	private String shw = "shw";
	private String d2h = "d2h";

	@SuppressWarnings("unchecked")
	@Override
	public ServiceResponse<JSONObject> getTopEmployees(String startDate, String endDate) {
		log.info("Getting top 10 employess By sales");

		ServiceResponse<JSONObject> response = new ServiceResponse<>();

		JSONObject finalObject = new JSONObject();

		List<CmdDashboardShw> showroomResponse = new ArrayList<>();

		try {
			// Get all showroom locations
			Channel chaneelShw = channelRepo.findByChannelName("SHW");

			List<Location> showroomLocation = locationRepo.findByChannel(chaneelShw);

			for (Location eachShw : showroomLocation) {

				List<Employee> shwEmployess = empRepo.findByLocation(eachShw);

				for (Employee eachEmp : shwEmployess) {

					CmdDashboardShw empSales = new CmdDashboardShw();

					empSales.setEmployee(eachEmp);

					// gold
					List<Sales> goldSales = salesRepo.findByStartDateAndEndDateAndItemTypeAndEmpId(startDate, endDate,
							"Gold", eachEmp);
					Double totalGoldSales = goldSales.stream().mapToDouble(o -> o.getTotalSoldAmount()).sum();

					Double totalGoldReturnValue = 0.0;

					for (Sales sale : goldSales) {

						SalesReturns salesReturns = salesReturnsRepo.findBySales(sale);

						if (salesReturns != null) {

							totalGoldReturnValue += salesReturns.getAmountPayable();

						}
					}
					Double totalGoldActualValue = totalGoldSales - totalGoldReturnValue;

					empSales.setTotalGold(totalGoldActualValue / 100000);

					// diamond
					List<Sales> diamondSales = salesRepo.findByStartDateAndEndDateAndItemTypeAndEmpId(startDate,
							endDate, "Diamond", eachEmp);
					Double totalDiamondSales = diamondSales.stream().mapToDouble(o -> o.getTotalSoldAmount()).sum();

					Double totalDiamondReturnValue = 0.0;

					for (Sales sale : diamondSales) {

						SalesReturns salesReturns = salesReturnsRepo.findBySales(sale);

						if (salesReturns != null) {

							totalDiamondReturnValue += salesReturns.getAmountPayable();

						}
					}
					Double totalDiamondActualValue = totalDiamondSales - totalDiamondReturnValue;

					empSales.setTotalDiamond(totalDiamondActualValue / 100000);

					Double totalEmployeeSale = (totalGoldActualValue + totalDiamondActualValue) / 100000;

					empSales.setTotalSales(totalEmployeeSale);

					showroomResponse.add(empSales);

				}

			}

			// top 10 emp by sales

			List<CmdDashboardShw> result = showroomResponse.stream()
					.sorted((o1, o2) -> (o1.getTotalSales()).compareTo((o2.getTotalSales())))
					.collect(Collectors.toList());
			Collections.reverse(result);

			List<CmdDashboardShw> limit = result.stream().limit(10).collect(Collectors.toList());

			finalObject.put("showroomemp", limit);

			// Get all D2h locations

			List<CmdDashboardD2h> d2hResponse = new ArrayList<>();

			Channel chaneelD2h = channelRepo.findByChannelName("D2H");

			List<Location> d2hLocation = locationRepo.findByChannel(chaneelD2h);

			for (Location eachD2h : d2hLocation) {

				List<Team> d2hTeams = teamRepo.findByLocation(eachD2h);

				for (Team eachTeam : d2hTeams) {

					CmdDashboardD2h d2hEmpSales = new CmdDashboardD2h();

					d2hEmpSales.setTeam(eachTeam);

					Set<Employee> d2hEmployess = eachTeam.getEmp();

					List<Employee> empD2h = new ArrayList<>();

					for (Employee emp : d2hEmployess) {
						empD2h.add(emp);
					}

					Double totalAmount = 0.0;
					Double totalGold = 0.0;
					Double totalDiamond = 0.0;

					for (Employee eachEmp : empD2h) {

						// gold
						List<Sales> goldSales = salesRepo.findByStartDateAndEndDateAndItemTypeAndEmpId(startDate,
								endDate, "Gold", eachEmp);
						Double totalGoldSales = goldSales.stream().mapToDouble(o -> o.getTotalSoldAmount()).sum();

						Double totalGoldReturnValue = 0.0;

						for (Sales sale : goldSales) {

							SalesReturns salesReturns = salesReturnsRepo.findBySales(sale);

							if (salesReturns != null) {

								totalGoldReturnValue += salesReturns.getAmountPayable();

							}
						}
						Double totalGoldActualValue = totalGoldSales - totalGoldReturnValue;

						totalGold += totalGoldActualValue;

						// diamond
						List<Sales> diamondSales = salesRepo.findByStartDateAndEndDateAndItemTypeAndEmpId(startDate,
								endDate, "Diamond", eachEmp);
						Double totalDiamondSales = diamondSales.stream().mapToDouble(o -> o.getTotalSoldAmount()).sum();

						Double totalDiamondReturnValue = 0.0;

						for (Sales sale : diamondSales) {

							SalesReturns salesReturns = salesReturnsRepo.findBySales(sale);

							if (salesReturns != null) {

								totalDiamondReturnValue += salesReturns.getAmountPayable();

							}
						}
						Double totalDiamondActualValue = totalDiamondSales - totalDiamondReturnValue;

						totalDiamond += totalDiamondActualValue;

						Double totalEmployeeSale = totalGoldActualValue + totalDiamondActualValue;

						totalAmount += totalEmployeeSale;

					}

					d2hEmpSales.setTotalSales(totalAmount / 100000);
					d2hEmpSales.setTotalDiamond(totalDiamond / 100000);
					d2hEmpSales.setTotalGold(totalGold / 100000);

					d2hResponse.add(d2hEmpSales);

				}
			}
			// top 10 emp by sales
			List<CmdDashboardD2h> d2hResult = d2hResponse.stream().sorted(
					(o1, o2) -> Double.valueOf(o1.getTotalSales()).compareTo(Double.valueOf(o2.getTotalSales())))
					.collect(Collectors.toList());
			Collections.reverse(d2hResult);

			List<CmdDashboardD2h> d2hLimit = d2hResult.stream().limit(10).collect(Collectors.toList());

			finalObject.put("d2hteam", d2hLimit);

			response.setData(finalObject);

		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.CCUS001.name(), EnumTypeForErrorCodes.CCUS001.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}
		return response;
	}

	@SuppressWarnings("unchecked")
	@Override
	public ServiceResponse<JSONObject> getKpiBlockValues(String startDate, String endDate) {
		log.info("Getting kpi block values achivements,ticketsize,profit and conversion");

		ServiceResponse<JSONObject> response = new ServiceResponse<>();

		JSONObject finalObject = new JSONObject();

		JSONObject achivements = new JSONObject();
		JSONObject ticketsize = new JSONObject();
		JSONObject conversion = new JSONObject();
		JSONObject margin = new JSONObject();

		try {

			// getting achivements for showroom and D2H by performanceAnalysis channelwise

			TargetVsActualResponse<PerformanceAnalysisChannelWiseTgtVsActual> channelwise = performanceAnalysisChannelWiseImpl
					.performanceAnalysisForAllChannels(startDate, endDate);

			// Showroom
			Double shwActualGold = channelwise.getData().getDetails().getActuals().getValue().getGold().get(0);
			Double shwActualDiamond = channelwise.getData().getDetails().getActuals().getValue().getDiamond().get(0);

			Double shwTargetGold = channelwise.getData().getDetails().getTarget().getValue().getGold().get(0);
			Double shwTargetDiamond = channelwise.getData().getDetails().getActuals().getValue().getGold().get(0);

			Double totalShwTarget = shwTargetGold + shwTargetDiamond;
			Double totalShwActual = shwActualGold + shwActualDiamond;

			Double shwAchivements;

			if (totalShwTarget != 0.0 || totalShwActual != 0.0) {

				shwAchivements = (totalShwActual / totalShwTarget) * 100;
			} else {

				shwAchivements = 0.0;
			}

			achivements.put(shw, shwAchivements);

			// D2H
			Double d2hActualGold = channelwise.getData().getDetails().getActuals().getValue().getGold().get(1);
			Double d2hActualDiamond = channelwise.getData().getDetails().getActuals().getValue().getDiamond().get(1);

			Double d2hTargetGold = channelwise.getData().getDetails().getTarget().getValue().getGold().get(1);
			Double d2hTargetDiamond = channelwise.getData().getDetails().getActuals().getValue().getGold().get(1);

			Double totalD2hTarget = d2hTargetGold + d2hTargetDiamond;
			Double totalD2hActual = d2hActualGold + d2hActualDiamond;

			Double d2hAchivements;

			if (totalD2hTarget != 0.0 || totalD2hActual != 0.0) {

				d2hAchivements = (totalD2hActual / totalD2hTarget) * 100;
			} else {

				d2hAchivements = 0.0;
			}

			achivements.put(d2h, d2hAchivements);

			// total

			Double totalActuals = totalShwActual + totalD2hActual;
			double totalTargets = totalShwTarget + totalD2hTarget;

			Double totalAchivements;

			if (totalTargets != 0.0 || totalActuals != 0.0) {

				totalAchivements = (totalActuals / totalTargets) * 100;
			} else {

				totalAchivements = 0.0;
			}

			achivements.put(total, totalAchivements);

			finalObject.put("achivements", achivements);

			// ticketsize
			List<Sales> totalSales = salesRepo.findByStartDateAndEndDate(startDate, endDate);

			// showroom
			List<Sales> showroomSales = totalSales.stream()
					.filter(o -> o.getLocation().getChannel().getChannelName().equals("SHW"))
					.collect(Collectors.toList());
			Double shwTotalSoldAmount = showroomSales.stream().mapToDouble(o -> o.getTotalSoldAmount()).sum();

			Double shwTotalGoldReturnValue = 0.0;

			for (Sales sale : showroomSales) {

				SalesReturns salesReturns = salesReturnsRepo.findBySales(sale);

				if (salesReturns != null) {

					shwTotalGoldReturnValue += salesReturns.getAmountPayable();

				}

			}

			Double totalValueShw = (shwTotalSoldAmount - shwTotalGoldReturnValue) / 100000;

			// D2H
			List<Sales> d2hSales = totalSales.stream()
					.filter(o -> o.getLocation().getChannel().getChannelName().equals("D2H"))
					.collect(Collectors.toList());
			Double d2hTotalSoldAmount = d2hSales.stream().mapToDouble(o -> o.getTotalSoldAmount()).sum();

			Double d2hTotalGoldReturnValue = 0.0;

			for (Sales sale : d2hSales) {

				SalesReturns salesReturns = salesReturnsRepo.findBySales(sale);

				if (salesReturns != null) {

					d2hTotalGoldReturnValue += salesReturns.getAmountPayable();

				}

			}

			Double totalValueD2h = (d2hTotalSoldAmount - d2hTotalGoldReturnValue) / 100000;

			List<EmpDailyActuals> preferredWalkins = empDailyActualsRepo.findByvisitDateAndSales(startDate, endDate);

			// showroom preferred walkins
			List<EmpDailyActuals> shwPrefferedWalkins = preferredWalkins.stream()
					.filter(o -> o.getChannel().getChannelName().equals("SHW")).collect(Collectors.toList());

			// d2h preferred walkins
			List<EmpDailyActuals> d2hPrefferedWalkins = preferredWalkins.stream()
					.filter(o -> o.getChannel().getChannelName().equals("D2H")).collect(Collectors.toList());

			int shwPrefferedWalkinsCount = shwPrefferedWalkins.size();
			int d2hPrefferedWalkinsCount = d2hPrefferedWalkins.size();

			// showroom ticketsize
			Double tiketSizeShw;
			if (shwPrefferedWalkinsCount != 0) {

				tiketSizeShw = totalValueShw / shwPrefferedWalkinsCount;
			} else {
				tiketSizeShw = 0.0;
			}

			ticketsize.put(shw, tiketSizeShw);
			// d2h ticketsize
			Double tiketSizeD2h;
			if (d2hPrefferedWalkinsCount != 0) {

				tiketSizeD2h = totalValueD2h / d2hPrefferedWalkinsCount;
			} else {
				tiketSizeD2h = 0.0;
			}

			ticketsize.put(d2h, tiketSizeD2h);

			// total ticketsize
			Double totalsales = totalValueShw + totalValueD2h;
			int prefferedWalkinsCount = preferredWalkins.size();
			Double totalTiketSize;
			if (prefferedWalkinsCount != 0) {

				totalTiketSize = totalsales / prefferedWalkinsCount;
			} else {
				totalTiketSize = 0.0;
			}

			ticketsize.put(total, totalTiketSize);

			finalObject.put("ticketsize", ticketsize);

			// conversions

			// total
			List<EmpDailyActuals> totalEmpActuals = empDailyActualsRepo.findByvisitDate(startDate, endDate);
			Double totalCount = (double) totalEmpActuals.size();

			List<EmpDailyActuals> preferredEmpActuals = empDailyActualsRepo.findByvisitDateAndSales(startDate, endDate);
			Double preferredCount = (double) preferredEmpActuals.size();

			if (preferredCount != 0 || totalCount != 0) {

				Double totalConversion = (preferredCount / totalCount) * 100;
				conversion.put(total, totalConversion);
			} else {

				conversion.put(total, 0);
			}

			// showroom
			List<EmpDailyActuals> shwEmpActuals = totalEmpActuals.stream()
					.filter(o -> o.getChannel().getChannelName().equals("SHW")).collect(Collectors.toList());
			Double shwtotalCount = (double) shwEmpActuals.size();

			List<EmpDailyActuals> shwPreferredEmpActuals = preferredEmpActuals.stream()
					.filter(o -> o.getChannel().getChannelName().equals("SHW")).collect(Collectors.toList());
			Double shwPreferredCount = (double) shwPreferredEmpActuals.size();
			if (shwPreferredCount != 0 || shwtotalCount != 0) {

				Double totalShwConversion = (shwPreferredCount / shwtotalCount) * 100;
				conversion.put(shw, totalShwConversion);
			} else {

				conversion.put(shw, 0);
			}

			// d2h
			List<EmpDailyActuals> d2hEmpActuals = totalEmpActuals.stream()
					.filter(o -> o.getChannel().getChannelName().equals("D2H")).collect(Collectors.toList());
			Double d2hTotalCount = (double) d2hEmpActuals.size();

			List<EmpDailyActuals> d2hPreferredEmpActuals = preferredEmpActuals.stream()
					.filter(o -> o.getChannel().getChannelName().equals("D2H")).collect(Collectors.toList());
			Double d2hPreferredCount = (double) d2hPreferredEmpActuals.size();
			if (d2hPreferredCount != 0 || d2hTotalCount != 0) {

				Double totald2hConversion = (d2hPreferredCount / d2hTotalCount) * 100;
				conversion.put(d2h, totald2hConversion);
			} else {

				conversion.put(d2h, 0);
			}

			finalObject.put("conversion", conversion);

			// margins

			// total
			List<Sales> totalSalesForMargin = salesRepo.findByStartDateAndEndDate(startDate, endDate);
			Double totalAmount = totalSalesForMargin.stream().mapToDouble(o -> o.getTotalSoldAmount()).sum();
			Double totalTagPrice = totalSalesForMargin.stream().mapToDouble(o -> o.getTagPrice()).sum();

			Double totalMargin;

			if (totalAmount != 0.0 || totalTagPrice != 0.0) {

				totalMargin = ((totalAmount - totalTagPrice) / totalTagPrice) * 100;
			} else {

				totalMargin = 0.0;
			}
			margin.put(total, totalMargin);

			// showroom

			List<Sales> shwTotalSales = totalSalesForMargin.stream()
					.filter(o -> o.getLocation().getChannel().getChannelName().equals("SHW"))
					.collect(Collectors.toList());
			Double shwTotalAmount = shwTotalSales.stream().mapToDouble(o -> o.getTotalSoldAmount()).sum();
			Double shwTotalTagPrice = shwTotalSales.stream().mapToDouble(o -> o.getTagPrice()).sum();

			Double shwTotalMargin;

			if (shwTotalAmount != 0.0 || shwTotalTagPrice != 0.0) {

				shwTotalMargin = ((shwTotalAmount - shwTotalTagPrice) / shwTotalTagPrice) * 100;
			} else {

				shwTotalMargin = 0.0;
			}
			margin.put(shw, shwTotalMargin);

			// D2H
			List<Sales> d2hTotalSales = totalSalesForMargin.stream()
					.filter(o -> o.getLocation().getChannel().getChannelName().equals("D2H"))
					.collect(Collectors.toList());
			Double d2hTotalAmount = d2hTotalSales.stream().mapToDouble(o -> o.getTotalSoldAmount()).sum();
			Double d2hTotalTagPrice = d2hTotalSales.stream().mapToDouble(o -> o.getTagPrice()).sum();

			Double d2hTotalMargin;

			if (d2hTotalAmount != 0.0 || d2hTotalTagPrice != 0.0) {

				d2hTotalMargin = ((d2hTotalAmount - d2hTotalTagPrice) / d2hTotalTagPrice) * 100;
			} else {

				d2hTotalMargin = 0.0;
			}
			margin.put(d2h, d2hTotalMargin);

			finalObject.put("margin", margin);

			response.setData(finalObject);

		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.CCUS002.name(), EnumTypeForErrorCodes.CCUS002.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}

		return response;
	}
}

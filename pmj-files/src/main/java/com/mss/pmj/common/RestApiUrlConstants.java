package com.mss.pmj.common;

public class RestApiUrlConstants {

	private RestApiUrlConstants() {
	}

	/**
	 * Dump Data
	 *
	 */

	public static final String ADD_EMPLOYEE_DATA = "/";

	public static final String ADD_LOCATION_DATA = "/";

	public static final String ADD_SALES_DATA = "/addsales";

	public static final String ADD_SALES_RETURN_DATA = "/addSalesReturns";

	public static final String ADD_BUDGET_TOAL_DATA = "/";

	public static final String ADD_EMPLOYEE_MONTHLY_DATA = "/";

	public static final String ADD_EMPLOYEE_DAILY_DATA_SHW = "/addSHWempActuals";
	
	public static final String ADD_EMPLOYEE_DAILY_DATA_D2H = "/addD2HempActuals";

	public static final String FILE_UPLOAD = "/file";

	public static final String DOWNLOAD_SAMPLE = "/sample/{fileName}";

	public static final String ADD_SAMPLE = "/addSample";
	
	public static final String ADD_MANAGER_DATA = "/addmanager";
	
	public static final String ADD_ITEMCLASSIFICATION_DATA = "/additemclassification";
	
	public static final String ADD_TEAM_DATA = "/addteam";

	/*
	 * 
	 * TargetVsActualSales module
	 */

	public static final String GET_TARGET_VS_ACTUAL = "/{startDate}/{endDate}";

	public static final String GET_TARGET_VS_ACTUAL_GROUPBY = "/groupby/{startDate}/{endDate}";

	/*
	 * 
	 * GrowthCalculations module
	 */
	public static final String GET_GROWTH_BY_TOTALSALES = "/totalsales/{startDate1}/{endDate1}/{startDate2}/{endDate2}/{startDate3}/{endDate3}";

	public static final String GET_GROWTH_BY_SALESPERSON = "/bysalesperson/{startDate1}/{endDate1}/{startDate2}/{endDate2}/{startDate3}/{endDate3}/{empId}";

	public static final String GET_GROWTH_BY_CHANNEL = "/bychannel/{startDate1}/{endDate1}/{startDate2}/{endDate2}/{startDate3}/{endDate3}";

	public static final String GET_GROWTH_BY_LOCATION_SHOWROOM = "/bylocationshowroom/{startDate1}/{endDate1}/{startDate2}/{endDate2}/{startDate3}/{endDate3}";

	public static final String GET_GROWTH_BY_LOCATION_D2H = "/bylocationd2h/{startDate1}/{endDate1}/{startDate2}/{endDate2}/{startDate3}/{endDate3}/{clusterName}";

	/*
	 * Location module
	 */
	public static final String GET_ALL_LOCATIONS_BY_CHANNEL = "getbychannel/{channelName}";

	public static final String GET_ALL_D2H_LOCATIONS_GROUP_BY_STATE = "/getd2hgroupbyState";

	public static final String GET_ALL_CLUSTERS_BY_STATE = "/getclustersByState/{state}";

	public static final String GET_ALL_LOCATIONS_BY_CLUSTER = "/getlocationsByCluster/{clusterName}";
	/*
	 * Employee module
	 */
	public static final String GET_EMPLOYEE_BY_LOCATION = "/getbylocation/{locationId}";
	/*
	 * TicketSize module
	 * 
	 */
	public static final String GET_TICKETSIZE_BY_ALL_SHOWROOMS = "/showroom/{startDate}/{endDate}";

	public static final String GET_TICKETSIZE_BY_SHOWROOM_LOCATION = "/byshowroomlocation/{startDate}/{endDate}/{locationCode}";

	public static final String GET_TICKETSIZE_BY_D2H_STATES = "/d2hstates/{startDate}/{endDate}";

	public static final String GET_TICKETSIZE_BY_D2H_CLUSTER = "/d2hcluster/{startDate}/{endDate}/{state}";

	public static final String GET_TICKETSIZE_BY_D2H_LOCATION = "/d2hlocation/{startDate}/{endDate}/{clusterName}";

	public static final String GET_TICKETSIZE_BY_D2H_TEAM = "/d2hteam/{startDate}/{endDate}/{locationCode}";

	/**
	 * USERS MODULE
	 */

	public static final String GET_ALL_USERS = "/getAllUsers";

	public static final String GET_ALL_ROLES = "/getAllRoles";

	public static final String GET_USERS_BY_ROLE = "/getUsersByRole/{role}";

	public static final String GET_USER_BY_EMAIL = "/getUserByEmail/{email:.+}";

	/**
	 * location store Data
	 *
	 */

	public static final String GET_ALL_LOCATION_STORE_DATA_CHANNEL = "/{channelName}/{startDate}/{endDate}";

	public static final String GET_LOCATION_STORE_DATA = "/{locationName}/{startDate}/{endDate}";

	public static final String GET_LOCATION_STATE_D2H_DATA = "/{startDate}/{endDate}";

	public static final String GET_LOCATION_EACH_STATE_D2H_DATA = "/{stateName}/{startDate}/{endDate}";

	public static final String GET_LOCATION_D2H_DATA = "/{clusterName}/{startDate}/{endDate}";

	public static final String GET_TEAM_D2H_DATA = "/{locationCode}/{startDate}/{endDate}";

	public static final String GET_PERFORMANCE_ANALYSIS_FOR_ALL_CHANNELS = "/ForAllChannels/{startDate}/{endDate}";

	public static final String GET_PERFORMANCE_ANALYSIS_FOR_EACH_CHANNELS = "/ChannelWise/{channelId}/{startDate}/{endDate}";

	public static final String GET_PERFORMANCE_ANALYSIS_SALESPERSONWISE_TGT_VS_ACTUALS = "/SalesPersonWiseTargetsVsActuals/{startDate}/{endDate}/{salesPersonId}";

	public static final String GET_PERFORMANCE_ANALYSIS_SALESPERSONWISE_ACHIVEMENTS = "SalesPersonWiseAchivements/{startDate}/{endDate}/{salesPersonId}";

	public static final String GET_PERFORMANCE_ANALYSIS_SALESPERSONWISE_MARGINS = "SalesPersonWiseMargins/{startDate}/{endDate}/{salesPersonId}";

	public static final String GET_PERFORMANCE_ANALYSIS_SALESPERSONWISE_KPI_BLOCKS = "SalesPersonWiseKPIBlocks/{startDate}/{endDate}/{salesPersonId}";

	public static final String GET_PERFORMANCE_ANALYSIS_SALESPERSONWISE_CONVERSION = "/performanceAnalysis/conversion/{salesPersonId}/{startDate}/{endDate}";

	public static final String GET_PERFORMANCE_ANALYSIS_SALESPERSONWISE_TICKETSIZE = "/performanceAnalysis/ticketSize/{salesPersonId}/{startDate}/{endDate}";

	public static final String GET_PA_FOR_ALL_CLASSES = "/forAllClasses/{locationId}/{startDate}/{endDate}";

	public static final String GET_PA_FOR_EACH_CLASSES = "/forEachClass/{locationId}/{}/{startDate}/{endDate}";
	// Margins Module

	public static final String GET_TAGPRICE_TO_SALES = "/{startDate}/{endDate}";

	public static final String GET_TAGPRICE_TO_SALES_D2H = "/{startDate}/{endDate}";

	public static final String GET_TAGPRICE_TO_SALES_STATE = "{state}/{startDate}/{endDate}";

	public static final String GET_TAGPRICE_TO_SALES_STATE_CLUSTER = "{state}/{cluster}/{startDate}/{endDate}";

	public static final String GET_TAGPRICE_TO_SALES_STATE_CLUSTER_LOCATION = "{state}/{cluster}/{locationcode}/{startDate}/{endDate}";

}

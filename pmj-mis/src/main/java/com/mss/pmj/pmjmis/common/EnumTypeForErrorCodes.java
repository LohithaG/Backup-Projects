package com.mss.pmj.pmjmis.common;

public enum EnumTypeForErrorCodes {

	SCUS001("Failed to add the sales data"),

	SCUS002("Failed to add employee Data into database"),

	SCUS003("Failed to add Location Data into database"),

	SCUS004("Failed to add sales Data into database"),

	SCUS005("Failed to add sales Return Data into database"),

	SCUS008("Failed to add employee monthli Data  into database"),

	SCUS009("file not found error"),

	SCUS010("Failed to add employee Daily Data into database"),

	SCUS011("Failed to add the teams"),

	SCUS012("Failed to add the d2h employee actuals data"),

	SCUS013("Failed to add the d2h employee targets"),

	SCUS014("File upload is not complete, check your mail for exceptions"),

	SCUS015("Failed to add manager Data into database"),
	/*
	 * login module
	 */

	SCUS006("User is not registered"),

	SCUS007("Please enter valid login credentials"),

	SCUS101("Failed to add the employee details"),

	SCUS102("Failed to add the location details"),

	SCUS201("Please select csv files only"),

	SCUS202("Failed to upload the csv file"),

	SCUS203("Sample file uploaded with this file name"),

	SCUS204("Failed to add the sample file"),

	SCUS205("Please select correct csv file"),

	SCUS206("Failed to get the sales target vs actuals"),

	/*
	 * 
	 * GrowthCalculation module
	 */

	SCUS211("Failed to getting growth calculation values by totalsales"),

	SCUS212("Failed to getting growth calculation values by salesPerson"),

	SCUS213("Failed to getting growth calculation values by channelWise"),

	SCUS216("Failed to getting growth calculation values by showroom locations"),

	SCUS217("Failed to getting growth calculation values by D2H locations"),
	/*
	 * 
	 * location module
	 */

	SCUS214("Failed to getting all locations by channel"),

	SCUS218("Failed to getting all locations group by state"),

	SCUS219("Failed to getting all clusters by state"),

	SCUS220("Failed to getting all locations by cluster"),
	/*
	 * 
	 * employee details
	 */
	SCUS215("Failed to getting all employee details by locations"),

	ECUS216("Failed to getting all employee details by name"),

	ECUS217("Employee not avaliable by this name"),

	/*
	 * TicketSize module
	 */
	TCUS001("Failed to get ticketSize for all showrooms"),

	TCUS002("Failed to get ticketSize by showroom location"),

	TCUS003("Failed to get ticketSize for showroom location By daywise"),

	TCUS004("Failed to get ticketSize for showroom location By weekwise"),

	TCUS005("Failed to get ticketSize for showroom location By monthwise"),

	TCUS006("Failed to get ticketSize for D2H location By statewise"),

	TCUS007("Failed to get ticketSize for D2H location By clusterwise"),

	TCUS008("Failed to get ticketSize for D2H location By locationwise"),

	TCUS009("Failed to get ticketSize for D2H location By teamwise"),

	TCUS010("Failed to get ticketSize for showroom employees By location"),

	/**
	 * User module
	 */

	SCUS301("Failed to  get all users"),

	SCUS302("Failed to get user by userName"),

	SCUS303("User doesn't exists with this userName"),

	SCUS304("Failed to get the user by role"),

	SCUS305("Failed to get all roles"),

	SCUS306("Failed to Add user"),

	SCUS307("user already exists with this userName"),

	SCUS308("Role not found"),

	SCUS309("Manager not exists with this employeeCode"),

	SCUS310("user not exists with this id"),

	SCUS311("Failed to update user"),

	SCUS312("Failed to delete user"),

	SCUS313("Failed to get user by id"),

	SCUS314("employee not exists with this employeeCode"),

	SCUS315("Manager already exists with this employeeCode"),

	SCUS316("Failed to update admin password"),

	/*
	 * 
	 * CMD dashboard
	 */
	CCUS001("Failed to get top 10 employess"),

	CCUS002("Failed to get KPI block values"),

	/*
	 * performance analysis module
	 */

	SCUS801("Failed to get performance analysis for all channels"),

	SCUS802("Failed to get performance analysis channelwise actual"),

	SCUS803("Failed to get target performance analysis for all channels"),

	SCUS804("Failed to get performance analysis channel wise TargetVsActual by month"),

	SCUS805("Failed to get performance analysis channel wise TargetVsActual by day"),

	SCUS806("Failed to get performance analysis channel wise TargetVsActual by week"),

	SCUS807("Failed to get performance analysis sales person wise TargetVsActual by month"),

	SCUS808("Failed to get performance analysis sales person wise TargetVsActual by day"),

	SCUS809("Failed to get performance analysis sales person wise TargetVsActual by week"),

	SCUS810("Failed to get performance analysis sales person wise TargetVsActual"),

	SCUS811("Failed to get month list in between range"),

	SCUS812("Failed to get performance analysis sales person wise achivements"),

	SCUS813("Failed to get performance analysis sales person wise margins by month"),

	SCUS814("Failed to get performance analysis sales person wise margins by day"),

	SCUS815("Failed to get performance analysis sales person wise margins by week"),

	SCUS816("Failed to get performance analysis sales person wise margins"),

	SCUS817("Failed to get performance analysis sales person wise KPI Blocks"),

	SCUS818("Failed to get the salesperson conversion target vs actuals"),

	SCUS819("Failed to get the salesperson ticketsize target vs actuals"),

	SCUS831("Failed to get PA for All Classes"),

	SCUS832("Failed to get PA for Each Class"),

	SCUS833("Failed to get PA for Each Class By Month"),

	SCUS834("Failed to get PA for each Classe by Week"),

	SCUS835("Failed to get PA for Each Classe By Day"),

	SCUS836("Failed to get PA For Each Class For Employees"),

	/*
	 * performance analysis module
	 */

	SCUS103("Failed to get target Vs Actuals data"),

	SCUS104("Failed to get Location target Vs Actuals data"),

	SCUS108("Failed to get D2H State target Vs Actuals data"),

	SCUS106("Failed to get Each  D2H State target Vs Actuals data"),

	SCUS107("Failed to get Each  D2H Team target Vs Actuals data"),

	/*
	 * Margins module
	 */

	SCUS105("Failed to get TagPrice to Sales Margins"), SCUS110("Failed to get CostPrice to Sales Margins"),

	/*
	 * Conversion Factors module
	 */
	CFS001("Failed to get conversionFactor for all showrooms"),

	CFS002("Failed to get conversionFactor by showroom location"),

	CFS003("Failed to get conversionFactor for showroom location By daywise"),

	CFS004("Failed to get conversionFactor for showroom location By weekwise"),

	CFS005("Failed to get conversionFactor for showroom location By monthwise"),

	CFS006("Failed to get conversionFactor for showroom employees By location"),

	SCUS109("Failed to get conversion factor  D2H state target Vs Actuals data"),

	SCUS841("Failed to get Conversion Factors Location wise target vs actual"),

	SCUS842("Failed to get Conversion Factors TeamWise target vs actual sales ");

	private String errorMsg;

	EnumTypeForErrorCodes(String errorMsg) {
		this.errorMsg = errorMsg;
	}

	public String errorMsg() {
		return errorMsg;
	}
}

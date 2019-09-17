package com.mss.solar.dashboard.common;

public enum EnumTypeForErrorCodes {

	/**
	 * Driver MODULE
	 */
	SCUS101("Failed to get driver details"),

	SCUS102("Driver already exists"),

	SCUS103("Failed to add new driver "),

	SCUS104("Failed to delete driver"),

	SCUS105("Driver not found"),

	SCUS106("Failed to update driver"),

	SCUS107("Failed to get driver details by id"),

	SCUS108("Driver can't be deleted as a load is assigned to the driver"),

	SCUS109("This email already exists"),

	SCUS110("Failed to get driver details by vendor number"),
	
	/**
	 * Load Appointment MODULE
	 */
	SCUS001("Failed to get loads"),

	SCUS002("Load does not exists"),

	SCUS003("Failed to update load"),

	SCUS004("Failed to delete load"),

	SCUS005("Load already exists"),

	SCUS006("Failed to add new load"),

	SCUS007("Failed to get load by id"),

	SCUS008("Failed to update load status"),

	SCUS009("Failed to get loads by driver"),

	SCUS010("Failed to get driver not completed loads"),

	SCUS011("Load is already assigned to the driver"),

	SCUS012("Failed to get loads based on locations"),

	SCUS013("Load is completed by driver"),

	SCUS014("Failed to update geo miles"),

	SCUS015("No loads for this dc manager"),

	SCUS016("Failed to get all partial loads"),

	SCUS017("Failed to get sequence of load number"),

	SCUS018("Failed to get all accepted and completed loads of driver"),

	SCUS019("Failed to get the delivery inspection not done for the completed loads"),

	SCUS020("Failed to get all loads by pickup location"),

	SCUS021("Driver is not assigned to this load"),

	SCUS022("Failed to calculate overall distance by load "),
	
	SCUS023("Failed to get the driver accepted load details"),

	/**
	 * Location MODULE
	 */
	SCUS301("Failed to add new location "),

	SCUS302("Location does not exists"),

	SCUS303("Failed to update location"),

	SCUS304("Failed to delete location"),

	SCUS305("Failed to get all locations"),

	SCUS306("Location already exists"),

	SCUS307("Failed to get weather data"),

	SCUS308("Failed to send email notification"),

	SCUS309("Location can't be deleted as location has few loads"),

	SCUS310("Email already exists"),

	SCUS311("Phone number already exists"),

	SCUS312("Location address already exists"),

	SCUS313("This location already assigned to a load"),

	SCUS314("Failed to get all location types"),

	SCUS315("Failed to get all location based on location type"),

	SCUS316("Failed to get all DC location"),

	SCUS317("Failed to update the driver location"),

	SCUS318("Failed to calculate the estomated time and distance between driver and skid"),

	/**
	 * Load AppointmentType MODULE
	 */
	SCUS401("Failed to get load types"),
	/**
	 * Vendor MODULE
	 */
	SCUS501("Failed to get all vendors"),

	SCUS502("Vendor already exists"),

	SCUS503("Failed to add new vendor "),

	SCUS504("Vendor can't be deleted as vendor has few loads"),

	SCUS505("Failed to delete vendor"),

	SCUS506("Vendor not found"),

	SCUS507("Failed to update vendor"),

	SCUS508("Failed to get vendor details by number"),

	SCUS509("This phone number is already exists"),

	SCUS510("This phone number is already registered with other vendor"),
	/**
	 * Analytics MODULE
	 */
	SCUS601("Failed to get analytics data"),

	SCUS602("Failed to get analytics data By start date and end date"),

	SCUS603("Failed to get all vendor related loads"),

	SCUS604("This vendor has already assigned to a load"),
	/**
	 * Reports MODULE
	 */
	SCUS701("Failed to generate report"),
	/**
	 * Fuelstations module
	 */
	SCUS801("Failed to add fuelstation"),

	SCUS802("Fuelstation is not exists"),

	SCUS803("Failed to update fuelstation"),

	SCUS804("Failed to get all fuelstations"),

	SCUS805("Failed to get fuelstation by id"),

	SCUS806("Failed to Delete fuelstation by id"),

	SCUS807("Fuelstation already exists"),

	SCUS808("Fuelstation already already exists with this name and address"),

	/**
	 * FoodCourt module
	 */
	SCUS901("Failed to add foodcourt"),

	SCUS902("foodcourt is not exists"),

	SCUS903("Failed to update foodcourt"),

	SCUS904("Failed to get all foodcourts"),

	SCUS905("Failed to get foodcourt by id"),

	SCUS906("Failed to Delete foodcourt by id"),

	SCUS907("Foodcourt already exists"),

	SCUS908("Foodcourt already already exists with this name and address"),

	/**
	 * Motels module
	 */
	SCUS951("Failed to add motel"),

	SCUS952("motel is not exists"),

	SCUS953("Failed to update motel"),

	SCUS954("Failed to get all motels"),

	SCUS955("Failed to get motel by id"),

	SCUS956("Failed to Delete motel by id"),

	SCUS957("Motel already exists"),

	SCUS958("Motel already already exists with this name and address"),

	SCUS959("Failed to get the foodcourts, fuelstations and motels based on filters"),

	/**
	 * 
	 * Car module
	 */
	SCUS111("Car with vin id already exists"),

	SCUS112("Failed to add car details"),

	SCUS113("Car details not exists"),

	SCUS114("Failed to update car details"),

	SCUS115("Failed to delete car details"),

	SCUS116("Failed to get all car details"),

	SCUS117("Failed to get car details by id"),

	SCUS118("Failed to get car details by load number"),

	SCUS119("load not exists with this load number"),

	SCUS120("load has enough cars to deliver"),

	SCUS121("Failed to add car details in loads"),

	/**
	 * Expenses MODULE
	 */

	SCUS1001("Failed to add expenses"),

	SCUS1002("Failed to update expenses"),

	SCUS1003("Failed to delete expenses"),

	SCUS1004("Failed to get expenses by id"),

	SCUS1005("Failed to get expenses by driver"),

	SCUS1006("Failed to get all expenses"),

	SCUS1007("Failed to get all expensetypes"),

	SCUS1008("This load is not assigns to this driver"),

	/**
	 * Inspection MODULE
	 */

	SCUS1051("Failed to add inspection details"),

	SCUS1052("Failed to update inspection details"),

	SCUS1053("Failed to delete inspection details"),

	SCUS1054("Failed to get inspection by id"),

	SCUS1055("Failed to get inspection by load umber"),

	SCUS1056("Failed to get all inspection details"),

	SCUS1057("Failed to get all inspection types"),

	SCUS1058("Failed to get all car statuses"),

	SCUS1059("Failed to delete inspaection details, because this inspection has some cars"),

	SCUS1060("Failed to get damage images based on loads"),

	SCUS1061("Failed to get the delivery inspection completed loads car statuses"),

	SCUS1062("Failed to add inspection cartion details"),

	SCUS1063("Inspection details for this load doesn't exists"),

	SCUS1064("Carton inspection already done"),

	SCUS1065("Failed to get all exception areas"),

	SCUS1066("Failed to get all exception types"),

	SCUS1067("Failed to get all exception severities"),
	
	SCUS1068("Inspection already done for this drop"),

	/**
	 * Inspection MODULE
	 */

	SCUS1101("Failed to add carton"),

	SCUS1102("Failed to get all cartons"),

	SCUS1103("failed to delete the carton"),

	SCUS1104("Failed to update the carton"),

	SCUS1105("Carton doesn't exists"),

	SCUS1106("Failed to get carton details by load number"),

	SCUS1107("load not exists with this load number"),

	SCUS1108("Failed to get carton details by id"),

	SCUS1109("Failed to get qrcode for carton based on id"),

	SCUS1110("Failed to get the carton details based on carton id"),

	SCUS1111("Carton is not belongs to this load"),

	SCUS1112("Carton already assigned to driver, so can't be update"),
	
	SCUS1113("Failed to get the driver accepeted and geofence entered loads"),

	/**
	 * LOADDETAILS MODULE
	 */

	SCUS1201("Failed to get all load details"),

	SCUS1202("Failed to get load details by load number"),

	SCUS1203("Failed to delete the load details by load number"),

	SCUS1204("Load doesn't exists"),

	SCUS1205("Failed to get the load details by driver"),

	SCUS1206("load with loadnumber already exists"),

	SCUS1207("Failed to add load details"),

	SCUS1208("Load Details not exists"),

	SCUS1209("Load is already assigned to the driver"),

	SCUS1210("Failed to update load details"),

	SCUS1211("Failed to get the driver accepted loads"),

	SCUS1212("Failed to get the driver not completed loads"),

	SCUS1213("Failed to get the loads based on destination location"),
	
	SCUS1214("Driver is not assign to this load"),
	
	SCUS1215("Failed to update load status"),
	
	SCUS1216("Failed to get loads which are accepted by driver"),
	
	SCUS1217("location with given email not exists"),
	
	SCUS1218("Failed to get loads based on location dc manager email"),
	
	SCUS1219("Load is completed by driver"),
	
	SCUS1220("Failed to update geo miles"),
	
	SCUS1221("Failed to get all partial loads"),
	
	SCUS1222("Failed to get sequence of load number"),
	
	SCUS1223("Failed to get all accepted and completed loads of driver"),
	
	SCUS1224("Failed to get the delivery inspection not done for the completed loads"),
	
	SCUS1225("Failed to get all loads by pickup location"),
	
	SCUS1226("Failed to get all skidDrops by load number"),
	
	SCUS1227("Driver already accepted a load"),
	
	SCUS1228("SkidDrop with id not exists"),

	SCUS1229("Failed to delete skidDrop by id"),
	
	SCUS1230("Carton count should be greaterthan or equal to "),

	SCUS1231("Added cartons are greaterthan total cartons so Skid drop can't be updated"),
	
	SCUS1232("Skid can't be delete, because skid already has cartons"),

	SCUS1233("Failed to calculate distance between pickup and destination locations"),
	
	SCUS1234("Can't complete load until complete all the skid drops"),
	
	SCUS1235("Failed to calculate the distance and time in between the routes"),

	/**
	 * 
	 * CARTON DETAILS MODULE
	 */
	SCUS1301("Delivery location has enough cartons to deliver"),
	
	SCUS1302("Failed to add carton"),
	
	SCUS1303("Failed to add carton details in loads"),
	
	SCUS1304("Carton already assigned to driver, so can't be update"),
	
	SCUS1305("Carton doesn't exists"),
	
	SCUS1306("Failed to update the carton"),
	
	SCUS1307("failed to delete the carton"),
	
	SCUS1308("Failed to get all cartons"),
	
	SCUS1309("Failed to get carton details by id"),
	
	SCUS1310("Failed to get qrcode for carton based on id"),
	
	SCUS1311("Carton inspection already done"),
	
	SCUS1312("Carton is not belongs to this load"),
	
	SCUS1313("Failed to get the carton details based on carton id"),
	
	SCUS1314("Carton already assigned to driver, so can't be delete"),
	
	SCUS1315("Failed to get all cartons details by loadnumber"),
	
	SCUS1316("Failed to get all cartons details by skid drop id"),
	
	SCUS1317("Carton is not related to this skid drop"),
	
	SCUS1318("Failed to get all weight measurements types");


	private String errorMsg;

	EnumTypeForErrorCodes(String errorMsg) {
		this.errorMsg = errorMsg;
	}

	public String errorMsg() {
		return errorMsg;
	}
}

package com.mss.solar.dashboard.common;

public class RestApiUrlConstants {

	private RestApiUrlConstants() {
	}

	/**
	 * LoadAppointment MODULEskidDropsByLoadNumberAndInspectionType
	 */

	public static final String GET_ALL_LOADAPPOINTMENTS = "/getAllLoadAppointments";

	public static final String UPDATE_LOADAPPOINTMENT = "/updateLoadAppointment";

	public static final String DELETE_LOADAPPOINTMENT = "/deleteLoadAppointment/{apptNbr}";

	public static final String ADD_LOADAPPOINTMENT = "/addLoadAppointment";

	public static final String GET_LOADAPPOINTMENTS_BY_DRIVER = "/getAllLoadAppointments/{driverId}";

	public static final String GET_LOADAPPOINTMENTS_BY_APPTNBR = "/getLoadAppointments/{apptNbr}";

	public static final String UPDATE_lOAD_STATUS = "/updateLoad/{apptNbr}/{status}";

	public static final String GET_ACCEPTED_LOADS_BY_DRIVER = "/getDriverAcceptedLoads/{driverId}";

	public static final String GET_NOT_COMPLETED_LOADS = "/getDriverNotCompletedLoads/{driverId}";

	public static final String GET_ALL_ACCEPTED_LOADS = "/getAcceptedLoadList";

	public static final String GET_LOADS_BASED_LOCATIONS = "/getLoadsBasedOnLocations/{locNbr}";

	public static final String UPDATE_HIGH_VALUE = "/updateHighValue/{loadAppt}/{highValueLoad}/{highPriorityLoad}";

	public static final String GET_LOADS_BASED_DCMANAGER = "/getLoadsBasedOnDcManager/{email}/";

	public static final String UPDATE_GEOMILES = "/updateGeofenceMiles/{apptNbr}/{geomiles}";

	public static final String GET_LOADS_BY_STATUS = "/partialloads";

	public static final String GENERATE_LOADSEQUENCE_NUMBER = "/loadsequence";

	public static final String GET_LOADDETAILS_BY_DRIVER = "/acceptedcompletedloads/{driverId}";

	public static final String GET_DRIVER_COMPLETED_PICKUP_INSPECTION_LOADS = "/getCompletedLoadsPickupInspectionStatus/{driverId}";

	public static final String GET_PICKUP_LOCATION_LOADS = "/loadsbypickuplocation/{locNbr}";

	/**
	 * Driver MODULE
	 */
	public static final String ADD_DRIVER = "/addDriver";

	public static final String UPDATE_DRIVER = "/updateDriver";

	public static final String DELETE_DRIVER = "/deleteDriver/{id}";

	public static final String GET_ALL_DRIVERS = "/getDrivers";

	public static final String GET_DRIVERS_BY_ID = "/getDriver/{id}";

	public static final String UPDATE_DRIVER_BY_ID = "/updateDriver/{driverId}/{latitude}/{longitude}/";

	public static final String GET_DRIVER_BY_USER_ID = "/getDriverByUserID/{userId}";

	public static final String GET_DRIVERS_BY_VENDOR_NUMBER = "/getDriversByVendorNum/{vendorNbr}";

	/**
	 * LOCATION MODULE
	 */

	public static final String ADD_LOCATION = "/addLocation";

	public static final String UPDATE_LOCATION = "/updateLocation";

	public static final String DELETE_LOCATION = "/deleteLocation/{locNbr}";

	public static final String GET_ALL_LOCATIONS = "/getAllLocations";

	public static final String GET_LOCATIONS_BY_LOCNBR = "/getLocation/{locNbr}";

	public static final String GET_DISTANCE_INFO = "/distance/{sourcelat}/{sourcelong}/{destlat}/{destlong}/";

	public static final String NOTIFY_GEOFENCE = "/geofence/{startLat}/{startLong}/{geofenceMiles}/{driverId}";
	
	public static final String NOTIFY_DRIVER_REACHED_DROP_LOCATION = "/reachedDropLocation/{startLat}/{startLong}/{geofenceMiles}/{driverId}";

	public static final String NOTIFY_BY_DCMANAGER = "/notifyEmail/{email}/";

	public static final String GET_WEATHER_INFO = "/weatherinfo/{latitude}/{longitude}/";

	public static final String GET_FOODCOURTS_FUELSTATIONS_IN_BETWEEN_ROUTES = "/getFoodCourtsAndFuelStations/{sourcelat}/{sourcelong}/{destlat}/{destlong}/";

	public static final String GET_ALL_LOCATIONTYPES = "/getalllocationtypes";

	public static final String GET_LOCATIONS_BY_TYPE = "/getlocationbytype/{pickupType}/{destinationType}";

	public static final String GET_ALL_DC_LOCATIONS = "/getAllDcLocations";
	
	public static final String GET_DISTANCE_AND_TIME_BY_SKID ="/getDistanceAndTimeBySkid/{driverId}/{skidId}";
	
	public static final String GET_DISTANCE = "/calculateDistance/google/{sourcelat}/{sourcelong}/{destlat}/{destlong}/";

	public static final String  GET_DISTANCE_BY_RADIAN = "/calculateDistance/{startLat}/{startLong}/{endLat}/{endLong}/";
	
	public static final String GET_DISTANCE_TIME_INFO = "/getDistnaceAndTime/{originLat}/{originLong}/{destLat}/{destLong}/";
	
	/**
	 * LoadAppointmentType MODULE
	 */
	public static final String GET_ALL_LOADAPPOINTMENTTYPES = "/getLoadAppointmentTypes";

	/**
	 * Vendors MODULE
	 */
	public static final String GET_ALL_VENDORS = "/getVendors";

	public static final String ADD_VENDOR = "/addVendor";

	public static final String UPDATE_VENDOR = "/updateVendor";

	public static final String DELETE_VENDOR = "/deleteVendor/{vendorNbr}";

	public static final String GET_VENDOR_BY_NUMBER = "/getVendor/{vendorNbr}";

	/**
	 * Analytics MODULE
	 */
	public static final String GET_ANALYTICS_DATA = "/getAnalyticsData";

	public static final String GET_ANALYTICS_BY_DATE = "/getAnalyticsData/{startDate}/{endDate}";

	public static final String GET_VENDOR_RELATED_LOADS = "/getVendorRelatedLoadAppointments/{vendorName}/{destination}";

	public static final String GET_VENDOR_RELATED_LOADS_NO_DESTINATION = "/getVendorRelatedLoadAppointments/{vendorName}";

	/**
	 * REPORT MODULE
	 */
	public static final String GENERATE_REPORT = "/{templateName}";
	
	public static final String EXPENSES_REPORT = "/expensesReport/{templateName}";
	
	public static final String TRIPCONSOLIDATED_REPORT = "/tripConsolidatedReport/{templateName}";
	
	public static final String DELIVERY_REPORT = "/deliveryReport/{templateName}";

	/**
	 * FUELSTATION MODULE
	 */

	public static final String GET_ALL_FUELSTATIONS = "/";

	public static final String ADD_FUELSTATION = "/addfuelstation";

	public static final String UPDATE_FUELSTATION = "/updatefuelstation";

	public static final String DELETE_FUELSTATION = "/deletefuelstation/{id}";

	public static final String GET_FUELSTATION_BY_ID = "/{id}";

	/**
	 * FOODCOURT MODULE
	 */

	public static final String GET_ALL_FOODCOURT = "/";

	public static final String ADD_FOODCOURT = "/addfoodcourt";

	public static final String UPDATE_FOODCOURT = "/updatefoodcourt";

	public static final String DELETE_FOODCOURT = "/deletefoodcourt/{id}";

	public static final String GET_FOODCOURT_BY_ID = "/{id}";

	/*
	 * CAR MODULE
	 */

	public static final String ADD_CAR = "/addcar";

	public static final String UPDATE_CAR = "/updatecar";

	public static final String DELETE_CAR = "/deletecar/{id}";

	public static final String GET_ALL_CARS = "/";

	public static final String GET_CAR_BY_ID = "/{id}";

	public static final String GET_CAR_BY_LOAD_NUMBER = "/getbyload/{loadNumber}";

	/**
	 * Expenses MODULE
	 */
	public static final String ADD_EXPENSES = "/addExpenses";

	public static final String UPDATE_EXPENSES = "/updateExpenses";

	public static final String DELETE_EXPENSE = "/deleteExpenses/{id}";

	public static final String GET_ALL_EXPENSES = "/getAllExpenses";

	public static final String GET_EXPENSE_BY_DRIVER_ID = "/getExpensesByDriver/{driverId}";

	public static final String GET_EXPENSE_BY_ID = "/getExpensesById/{id}";

	public static final String GET_ALL_EXPENSE_TYPES = "/getAllExpenseTypes";

	public static final String GET_EXPENSE_DETAILS_BY_LOAD = "/getDetailsByLoad/{loadNumber}";

	/**
	 * Inspection MODULE
	 */
	public static final String ADD_CARTONS_FOR_INSPECTION = "/addCartonsForInspection";

	public static final String ADD_INSPECTION = "/addInspection";

	public static final String UPDATE_INSPECTION = "/updateInspection";

	public static final String DELETE_INSPECTION = "/deleteInspection/{id}";

	public static final String GET_ALL_INSPECTIONS = "/getAllInspectionDetails";

	public static final String GET_INSPECTION_DETAILS_lOAD_NUMBER = "/getInspectioByload/{loadNumber}";

	public static final String GET_INSPECTION_BY_ID = "/getInspectionById/{id}";

	public static final String GET_ALL_INSPECTION_TYPES = "/getAllInspectionTypes";

	public static final String GET_ALL_CARTON_STATUSES = "/getAllCartonStatuses";

	public static final String GET_EXPENSE_DETAILS_BY_ID = "/getExpenseDetails/{id}";

	public static final String GET_DAMAGE_IMAGES_BY_lOAD_NUMBER = "/getDamageImage/{loadNumber}/{id}";

	public static final String GET_DELIVERY_INSPECTION_COMPLETED_CAR_STATUSES = "/getCarStatusesforDeliveryInspectionCompletedLoads/{loadNumber}";

	public static final String GET_ALL_EXCEPTION_AREAS = "/getAllExceptionAreas";

	public static final String GET_ALL_EXCEPTION_TYPES = "/getAllExceptionTypes";

	public static final String GET_ALL_EXCEPTION_SEVERITIES = "/getAllSeverities";

	public static final String GET_CARTON_DETAILS_BY_CARTON_ID = "/getCartonDetailsByCartonId/{cartonId}/{loadNumber}/{inspectionTypeId}";

	public static final String GET_DAMAGE_IMAGES_BY_CARTON = "/getDamageImagesByCarton/{cartonId}/{inspectionypeId}";
	
	public static final String GET_DRIVER_ACCEPTED_GEOFENCE_ENTERED_LOADS = "/getDriverAcceptedAndGeofenceEnteredLoads/{loadNumber}";

	/**
	 * CARTONS MODULE
	 */
	public static final String ADD_CARTON = "/addCarton";

	public static final String UPDATE_CARTON = "/updateCarton";

	public static final String DELETE_CARTON = "/deleteCarton/{id}";

	public static final String GET_ALL_CARTONS = "/getAllCartons";

	public static final String GET_CARTON_BY_LOAD_NUMBER = "/getCartonByLoadNumber/{loadNumber}/{inspectionTypeId}";

	public static final String GET_CARTON_BY_ID = "/getCartonById/{id}";

	public static final String GET_CARTONID_BY_ID = "/getCartonIdById/{id}";

	/**
	 * 
	 * LOADDETAILS MODULE
	 */
	public static final String ADD_LOADADETAILS = "/addLoadAppointment";

	public static final String UPDATE_LOADDETAILS = "/updateLoadAppointment";

	public static final String GET_ALL_LOADS = "/getAllLoadAppointments";

	public static final String GET_LOAD_DETAILS_BY_LOAD_NUMBER = "/getLoadAppointments/{loadNumber}";

	public static final String DELETE_LOAD_DETAILS_BY_LOAD_NUMBER = "/deleteLoadAppointment/{loadNumber}";

	public static final String GET_LOADS_BY_DRIVER = "/getLoadsByDriver/{driverId}";

	public static final String GET_DRIVER_ACCEPTED_LOADS = "/getAllLoadAppointments/{driverId}";

	public static final String GET_DRIVER_NOT_COMPLETED_LOADS = "/getDriverNotCompletedLoads/{driverId}";
	
	public static final String GET_DRIVER_NOT_ASSIGNED_LOADS ="/getDriverAssignedLoads/{driverId}";
	
	public static final String GET_DRIVER_ACCEPTED_LOAD_DETAILS ="/getDriverAcceptedLoadDetails/{loadNumber}";

	public static final String GET_LOADS_BASED_ON_DESTINATION_LOCATIONS = "/getLoadsByDestinationLoactions/{locNbr}";

	public static final String UPDATE_lOADS_STATUS = "/updateLoad/{loadNumber}/{status}";

	public static final String GET_ALL_ACCEPTED_LOADS_DETAILS = "/getAcceptedLoadList";

	public static final String UPDATE_HIGH_VALUE_PRIORITY = "/updateHighValue/{loadNumber}/{highValueLoad}/{highPriorityLoad}";

	public static final String GET_LOADS_BASED_DCMANAGER_EMAIL = "/getLoadsBasedOnDcManager/{email}/";

	public static final String UPDATE_LOAD_GEOMILES = "/updateGeofenceMiles/{loadNumber}/{geomiles}";

	public static final String GET_ALL_PARTIAL_LOADS = "/partialloads";

	public static final String GENERATE_LOAD_SEQUENCE_NUMBER = "/loadsequence";

	public static final String GET_ACCEPTED_COMPLETED_LOADS_BY_DRIVER = "/acceptedcompletedloads/{driverId}";

	public static final String GET_DRIVER_COMPLETED_AND_PICKUP_INSPECTION_LOADS = "/getCompletedLoadsPickupInspectionStatus/{driverId}";

	public static final String GET_LOADS_BY_PICKUP_LOCATION = "/loadsbypickuplocation/{locNbr}";

	public static final String GET_SKIDDROPS_BY_LOAD_NUMBER = "/skidDropsByLoadNumber/{loadNumber}";
	
	public static final String GET_SKIDDROPS_BY_LOAD_NUMBER_AND_INSPECTIONTYPE = "/skidDropsByLoadNumberAndInspectionType/{loadNumber}/{InspectionTypeId}";
	
	public static final String DELETE_SKID_DROP_BY_ID = "/deleteSkidDrop/{id}";
	
	public static final String CALCULATE_DISTANCE = "/calculateDistance/{sourcelat}/{sourcelong}/{destlat}/{destlong}/";
	
	public static final String GET_LOAD_OVERALL_DISTANCE = "/loadDistance/{loadNumber}";

	/**
	 * 
	 * CARTON DETAILS MODULE
	 */
	public static final String ADD_CARTONDETAILS = "/addCarton";

	public static final String UPDATE_CARTONDETAILS = "/updateCarton";

	public static final String DELETE_CARTONDETAILS = "/deleteCarton/{id}";

	public static final String GET_ALL_CARTONDETAILS = "/getAllCartons";

	public static final String GET_CARTON_DETAILS_BY_ID = "/getCartonById/{id}";

	public static final String GET_CARTON_DETAILS_BY_LOAD_NUMBER = "/getCartonByLoadNumberWithStatus/{loadNumber}/{inspectionTypeId}/{locNbr}";

	public static final String GET_CARTON_ID_BY_ID = "/getCartonIdById/{id}";

	public static final String GET_CARTON_BY_CARTON_ID = "/getCartonDetailsByCartonId/{cartonId}/{loadNumber}/{inspectionTypeId}";
	
	public static final String GET_CARTON_BY_CARTON_ID_FOR_SKID_LEVEL = "/getCartonDetailsByCartonIdInSkidLevel/{cartonId}/{loadNumber}/{inspectionTypeId}/{skidId}";

	public static final String GET_ALL_CARTONS_BY_LOAD_NUMBER = "/getAllCartonsByLoadNumber/{loadNumber}";
	
	public static final String GET_CARTON_DETAILS_BY_SKID_ID = "/getAllCartonsBySkidId/{skidId}";
	
	public static final String GET_ALL_WEIGHT_MEASUREMENTS_TYPES = "/getAllMeasuremnetsTypes";
	
	/**
	 * MOTELS MODULE
	 */

	public static final String GET_ALL_MOTELS = "/";

	public static final String ADD_MOTEL = "/addMotel";

	public static final String UPDATE_MOTEL = "/updateMotel";

	public static final String DELETE_MOTEL= "/deleteMotel/{id}";

	public static final String GET_MOTEL_BY_ID = "/{id}";
	
	public static final String GET_FOOSCOURTS_FUELSTATIONS_MOTESLS_BY_FILTER= "/getFcFsMotels/{loadNumber}/{id}";
	
	
	
	


}

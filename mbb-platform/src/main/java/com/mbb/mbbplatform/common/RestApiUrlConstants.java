package com.mbb.mbbplatform.common;

public class RestApiUrlConstants {

	private RestApiUrlConstants() {

	}

	/**
	 * COMMON
	 *
	 */
	public static final String GET_DETAILS_BY_ID = "/{id}";

	public static final String GET_ALL_BARCODES = "/getAllBarcodes";

	public static final String GET_DETAILS_BY_BARCODE = "/getDetailsByBarcode/{barcode}/{facilityId}";
	
	public static final String GET_DETAILS_BY_BARCODE_FOR_UPDATE = "/getDetailsByBarcode/{barcode}";


	public static final String GET_BASED_ON_LOCATION = "/getBasedOnFacility/{facilityId}/{status}/{pageNo}/{size}/{columnName}/{sortBy}/{search}";

	public static final String GET_DETAILS_BY_INVOICEID = "/getDetailsByInvoice/{invoiceId}";

	public static final String UPDATE_FACILITY_WISE_THRESHOLD = "/updateFacilityWiseThreshold";
	/**
	 * ZEPO SR SHIPMENTS MODULE
	 *
	 */
	
	public static final String GET_ALL_ZEPO_SHIPMENTS = "/getAllzepoShipments";
	public static final String GET_ALL_SGIPROCKET_SHIPMENTS = "/getAllShiprocketShipments";
	public static final String GET_ALL_AMAZON_FLIPKART_SHIPMENTS = "/getAllAmazonFlipkartShipment";
	public static final String GET_ALL_ZEPOSR_SHIPMENTS = "/getAllzeposrshipments";
	public static final String GET_ALL_SHIPPING_STATUS_AND_SHIPPING_AGREGATOR = "/getAllStatusAndshippingAggregator/{status}/{shippingAggregator}";
	public static final String GET_ALL_ZEPOSR_SHIPMENTS_BY_DELIVERY_STATUS = "/getAllzeposrshipmentsByDeliveryStatus";
	public static final String FIND_SHIPMENTS_REPORT_IN_BETWEEN_DATES = "/getShipmentDetailsReports/{startDate}/{endDate}";
	public static final String  FIND_TRACKING_DETAILS= "/getTrackingDetails/{trackingNo}";
	public static final String GET_DELIVERY_ALERTS_ZEPOSR_SHIPMENTS = "/getdeliveryAlertsList";
	public static final String FIND_SHIPMENTS_DETAILS_IN_BETWEEN_DATES_PAYMENTMODE = "/getShipmentDetails";
	public static final String FIND_SHIPMENTS_DETAILS_IN_BETWEEN_DATES = "/getShipmentRecords";

	/**
	 * ZEPO REPORTS MODULE
	 */
	public static final String GET_REPORTS = "/";
	
	/**
	 * ZEPO COD REMITTANCE MODULE
	 */
	public static final String ADD_ZEPO_COD_REMITTANCE = "/";
	public static final String GET_ALL_ZEPO_COD_REMITTANCE = "/getAllzepoCodRemittance";
	/**
	 *ZEPO SR COD REMITTANCE  MODULE
	 */
	public static final String GET_ALL_ZEPO_SR_COD_REMITTANCE = "/getAllZepoSRCodRemittance";
	public static final String GET_ALL_ZEPO_COD = "/getAllZepoCodRemittance";
	public static final String GET_ALL_COD_REMITTANCES = "/getAllCodRemittance";
	public static final String FIND_ZEPO_SR_COD_REMITTANCE_DETAILS = "/getAllCodRemittance";

	/**
	 *ZEPO  SHIPMENTS  MODULE
	 */
	public static final String ADD_ZEPO_SHIPMENTS = "/";
	public static final String GET_ALL_ZEPO_ZEPO_SHIPMENTS = "/getAllZepoShipment";


	/**
	 * TRACKING DETAILS  MODULE
	 */
	public static final String GET_TRACKING_DETAILS_BY_TRACKING_ID = "/getTrackingStatus/{trackingNo}";
	
	/**
	 * SR SHIPPING CHARGES  MODULE
	 */
	public static final String ADD_SR_SHIPPING_CHARGES = "/";
	
	/**
	 * SR SHIPPING CHARGES REPORT MODULE
	 */
	public static final String GET_SHIPPING_REPORT = "/getShippingReports";
	public static final String GET_REPORT = "/";
	
	/**
	 * SHIPROCKET SHIPMENT REPORT MODULE
	 */
	public static final String ADD_SHIPROCKET_SHIPMENT_REPORT = "/";
	public static final String GET_ALL_SHIPROCKET_SHIPMENT_REPORT = "/getAllshiprocketShipment";
	
	/**
	 * SHIPROCKET COD REMITTANCE  MODULE
	 */
	public static final String GET_EXTERNAL_ORDERS = "/getAllExternalOrders";
	public static final String GET_COD_REMITTANCE = "/getCodremittanceAmount";
	public static final String GET_COD_REMITTANCE_DETAILS = "/getAllCodremittanceDetails";
	public static final String GET_TOKEN = "/getToken";
	public static final String GET_REMITTANCE_REPORT = "/getRemittanceReport";
	public static final String GET_ORDER_ID = "/getorderid/{crfid}";
	public static final String GET_ALL_COD = "/getAllcoddata";
	public static final String GET_COD = "/getAllshiprocketcod";

	/**
	 * SHIPROCKET COD ORDERS  MODULE
	 */
	public static final String GET_SHIPROCKET_REPORT = "/getshiprocketcod";
	public static final String ADD_SHIPROCKET_COD_ORDERS = "/addShiprocketcod";
	
	/**
	 *SALE ORDERS MODULE
	 */
	public static final String ADD_SALE_ORDERS = "/";
	public static final String GET_RECORDS_BY_TEMPLATE = "/api/records";
	public static final String CREATE_SALE = "/api/records";

	/**
	 * REPORTS  MODULE
	 */
	public static final String GET_REPORTSS = "/";
	
	
	/**
	 * COD REMITTANCE  MODULE
	 */
	public static final String GET_ALL_ZEPO_CODREMITTANCE = "/getAllzepocodremittance";
	public static final String GET_ALL_SR_COD_REMITTANCE = "/getAllShiprocketcodremittance";
	public static final String GET_ALL_COD_REMITTANCE = "/getAllcodremittance";
	public static final String GET_ALL_SHIPPING_AGGREGATORS = "/getAllShippingAggregator/{shippingAggregator}";
	public static final String GET_ALL_COD_STATUS = "/getAllCodStatus/{status}";
	public static final String GET_ALL_SHIPPING_AGGREGATR_AND_STATUS = "/getAllShippingAggregatorAndStatus/{status}/{shippingAggregator}";
	public static final String FIND_COD_REMITTANCE_REPORTS_IN_BETWEEN_DATES = "/getCodRemittanceReports";
	public static final String FIND_COD_REMITTANCE_DETAILS_IN_BETWEEN_DATES = "/getCodRemittanceDetails";
	public static final String DELETE_ALL_SR_SHIPMENTS= "/deleteAllShiprocketShipments";

	/**
	 * FLIIPKART ORDERS API MODULE
	 */
	public static final String GET_FLIPKART_ORDERS= "/getAllFlipkartOrders";
	
	/**
	 * FLIPKART ORDERS MODULE
	 */
	public static final String GET_ALL_AMAZON_CHANNELS = "/getAllAmazonchannels";
	public static final String GET_ALL_FLIPKART_CHANNELS = "/getAllFlipkartChannels";
	
	/**
	 * AMAZON ORDERS MODULE
	 */
	public static final String GET_AMAZON_ORDERS = "/getAmazonOrders";

	/**
	 * AMAZON FLIPKART SHIPMENTS MODULE
	 */
	public static final String GET_AMAZON_FLIPKART_CHANNELS = "/getAllAmazonFlipkartChannels";

	/**
	 * AMAZON EASSY SHIPPING CHARGES  MODULE
	 */
	public static final String ADD_AMAZON_EASY_SHIPPING_CHARGES = "/";

	/**
	 * AMAZON COD REMITTANCE  MODULE
	 */
	public static final String FIND_AMAZON_SHIPMENTS_REPORT_IN_BETWEEN_DATES = "/getshipmentReport/{startDate}/{endDate}/{type}";

	public static final String ADD_AMAZON_COD_REMITTANCE = "/";
	
	/**
	 * AMAZON FLIPKART COD REMITTANCE  MODULE
	 */
	public static final String GET_FLIPKART_COD = "/getflipkartcod";
	public static final String GET_AMAZON_COD = "/getamazoncod";
	public static final String GET_ALL_FLIPKART_AMAZON_COD = "/getamazonflipkart";
	public static final String FIND_AMAZON_REPORT_IN_BETWEEN_DATES = "/getCodDetails/{startDate}/{endDate}/{channel}";
	public static final String BETWEEN_DATES = "/getorders";

	/**
	 * FLIPKART COD REMITTANCE  MODULE
	 */
	public static final String GET_FLIPKART_TAXDETAILS = "/gettaxdetails";
	public static final String GET_FLIPKART_ORDERID_TAXDETAILS = "/gettax/{orderItemId}";
	public static final String ADD_FLIPKART_COD_REMITTANCE = "/";

	/**
	 * INVENTORY MODULE
	 */
	public static final String UPDATE_INVENTORY = "/updateInventory/{id}";

	public static final String ADD_INVENTORY = "/addInventory";

	public static final String GET_ALL_INVENTORY = "/getAllInventories";

	public static final String GET_DETAILS_BY_SKUCODE = "/getInventoryBySkuCode/{skuCode:.+}";

	public static final String SENDING_MAIL_ALERTS_FOR_INVENTORY_LIST_BASED_ON_FACILITY_WISE_THRESHHOLD = "/sendingMailAlertsInventoryListBasedOnThreshold/{facilityId}";

	public static final String GETTING_INVENTORY_LIST_BASED_ON_FACILITY_WISE_THRESHHOLD = "/getInventoryListBasedOnThreshold/{facilityId}";

	public static final String GET_ALL_SKUCODES = "/getAllSkuCodes";

	public static final String UPDATE_SKU = "/updateSku/{inventoryId}/{userId}";

	public static final String ADD_BARCODEID = "/addBarcodeID";

	public static final String GET_DETAILS_BY_BARCODE_ID = "/getDetailsByBarcodeId/{barcodeId}";

	public static final String GET_SKUCODES_BY_SORTING = "/getAllSkusBasedOnSorting/{facilityId}/{status}/{pageNo}/{size}/{columnName}/{sortBy}/{search}";

	public static final String GET_ITEMS_BASED_ON_SKUCODE = "/getItemsBasedOnSkuCode/{skuCode}/{statusId}/{facilityId}";

	public static final String GET_INVENTORY_DETAILS = "/getInventoryDetails";

	public static final String GET_SCANNEDCOUNT_BASED_ON_SKU_FACILITY = "/getScannedCountBasedOnSkuFacility/{skuCode}/{facilityId}";

	public static final String GET_INVENTORY_ONDATES_FACILITY = "/getInventoryOnDates/{startDate}/{endDate}/{facilityId}";

	public static final String GET_ITEMS_BASED_ON_SKUCODE_AND_DATES = "/getItemsBasedOnSkuCodeAndDates/{startDate}/{endDate}/{skuCode}/{statusId}/{facilityId}";

	public static final String VIEW_ACCESSORIES = "/viewAccessories/{inventoryId}";
	
	public static final String GET_BASED_ON_LOCATION_FOR_VIEW_ACCESSORIES ="/getBasedOnFacility/{facilityId}/{status}/{accessoriesList}";
	
	public static final String VIEW_ACCESSORIES_IN_INVENTORY = "/viewAccessoriesInInventory/{inventoryId}/{facilityId}/{status}";


	/**
	 * INVENTORY ITEM MODULE
	 */
	public static final String UPDATE_INVENTORY_ITEM = "/updateInventoryItem/{id}";

	public static final String GET_ALL_INVENTORY_ITEM = "/getAllInventoryItems";

	public static final String GET_ALL_INVENTORY_ITEMS_STATUS = "/getAllInventoryStatuses";

	public static final String GET_INVENTORY_ITEMS_SKUCODE = "/getInventoryItemsBySkuCode/{skuCode:.+}";

	public static final String UPDATE_INVENTORYITEM_STATUS = "/updateStatus/{id}/{status}";

	public static final String UPDATE_INVENTORYITEM_CONDITION = "/updateCondition/{id}/{conditionId}";

	public static final String ADD_NEW_INVENTORY_ITEM = "/addNewInventoryItem";

	public static final String GET_ITEMS_BY_STATUS = "/getItemsByStatus/{status}";

	public static final String GET_ALL_CONDITIONS = "/getAllConditions";

	public static final String GET_ALL_FACILITIES = "/getAllFacilities";

	public static final String GENERATE_BARCODE = "/barcodeGeneration/{skuCode}/{count}";

	public static final String GET_STATUS_BASED_ON_CONDITION = "/getStatusBasedONCondition/{conditionId}";

	public static final String GET_INVENTORY_ITEM_BY_BARCODE = "/getInventoryItemDetails/{barcode}";

	public static final String GET_ITEM_DETAILS_BY_BARCODE = "/getItemDetailsByBarcode/{barcode}";

	public static final String UPDATE_APPROVAL_STATUS = "/updateApprovalstatus/{poVendorId}";

	public static final String GET_PENDING_APPROVAL_STATUS_COUNT = "/getPendingApprovalCount/{poVendorId}";

	public static final String VIEW_INVENTORY_APPROVAL = "/viewInventoryApproval/{poVendorId}";

	public static final String UPDATE_SERIAL_NUMBERS = "/updateSerialNumbers";

	/**
	 * DISPATCH
	 */
	public static final String ADD_DISPATCH = "/addDispatch";

	public static final String UPDATE_DISPATCH = "/updateDispatch/{id}";

	public static final String GET_ALL_DISPATCH = "/getAllDispatches";

	public static final String GET_LAST_WEEK_DISPATCHES = "/getLastweekDispatches";

	public static final String GET_ACCESSORIES = "/getAccessoriesBySkuCode/{skuCode:.+}";

	public static final String GET_DISPATCH_DETAILS_IN_BETWEEN_DATES = "/getDispatchDetails/{startDate}/{endDate}/{facilityId}";

	public static final String UPDATE_STATUS_TO_DISPATCH = "/updateStatusToDispatch/{id}";

	public static final String GET_CHECKLIST_BY_BARCODE = "/getChecklistData/{barcode}";

	public static final String CHECK_BY_INVOICEID = "/checkItemByInvoice/{invoiceId}";

	public static final String GET_RETURN_PRODUCTS = "/getReturnProducts/{startDate}/{endDate}/{channel}/{returnStatus}/{refundStatus}/{typeOfReturnId}";

	public static final String GET_ALL_DISPATCHED_INVOICES = "/getAllDispatchedInvoices";



	/**
	 * CHECKLIST MODULE
	 */

	public static final String ADD_NEW_CHECKLIST = "/addNewChecklist";

	public static final String UPDATE_CHECKLIST = "/updateChecklist";

	public static final String GET_CHECKLIST = "/getChecklist/{inventoryItemId}";

	/**
	 * INVOICE DETAILS MODULE
	 */
	public static final String ADD_INVOICE_DETAILS = "/addInvoiceDetails";

	public static final String GET_ALL_INVOICE_DETAILS = "/getInvoiceDetails/{startDate}/{endDate}/{paymentMode}/{status}/{channel}";

	public static final String UPDATE_INVOICE_DETAILS = "/update";

	/**
	 * POVENDOR MODULE
	 */

	public static final String ADD_POVENDOR = "/addPoVendor";

	public static final String UPDATE_POVENDOR = "/updatePoVendor/{id}";

	public static final String GET_ALL_POVENDORS = "/getAllPovendors";

	public static final String GET_POVENDORBY_PURCHASE_ORDER_NUMBER = "/getPovendorBypurchaseOrderNumber/{purchaseOrderNumber}";

	public static final String GET_ALL_VENDORS = "/getAllVendors";

	public static final String GET_ALL_DETAILS = "/getAllPoDetails/{startDate}/{endDate}/{vendorId}/{purchaseInvoicestatusId}";

	public static final String GET_POVENDORS_BASED_ON_STATUS = "/getBasedOnStatus/{enable}";

	public static final String GET_INVENTORY_APPROVAL = "/getInventoryapproval/{startDate}/{endDate}/{statusId}";

	/**
	 * VENDOR ITEM DETAILS MODULE
	 */
	public static final String ADD_VENDOR_ITEM_DETAILS = "/addVendorItemDetails";

	public static final String UPDATE_VENDOR_ITEM_DETAILS = "/updateVendorItemDetails";

	public static final String GETALL_VENDOR_ITEM_DETAILS = "/getAllVendorItemDetails";

	public static final String DELETE_BY_POVENDOR_ID = "/{poVendorId}";

	public static final String GET_SKUCODES_BY_PO_NUMBER = "/getSkuCodesByPONumber/{purchaseOrderNumber}";

	public static final String GET_AMOUNT_WITH_CHARGES = "/calculatingPrices/{currencyTypeId}/{poVendorId}";

	public static final String GET_ALL_PO_DETAILS = "/getAllPoDetails/{poVendorId}";

	/**
	 * RETURN MODULE
	 */
	public static final String ADD_RETURN_ITEM = "/addReturnItem";

	public static final String GET_ITEM_DETAILS = "/getItemDetails/{barcode}";
	
	public static final String ADD_RETURN_DETAILS = "/addReturnDetails";
	
	public static final String ADD_REFUND_DETAILS = "/addRefundDetails";
	
	public static final String GET_ALL_CHANNELS = "/getAllChannels";

	public static final String GET_ALL_TYPE_OF_RETURNS = "/getAllTypeOfReturns";

	public static final String GET_ALL_TYPE_OF_REASONS = "/getAllReturnReasons";



	/**
	 * USERS MODULE
	 */

	public static final String FORGOT_PW = "/forgotPassword/{email:.+}";

	public static final String GET_USER_BY_EMAIL = "/getUserByEmail/{email:.+}";

	public static final String SET_PW = "/setPassword/{userId}/{otp}/{password}";

	public static final String GET_USERS_BY_ROLE = "/getUsersByRole/{role}";

	public static final String ADD_USER = "/addUser";

	public static final String UPDATE_USER = "/updateUser";

	public static final String DELETE_USER = "/deleteUser/{userId}";

	public static final String GET_ALL_USERS = "/getAllUsers";

	public static final String GET_ALL_ROLES = "/getAllRoles";

	/**
	 * QRCODE MODULE
	 */
	public static final String GENERATE_QRCODE_SEQUENCE = "/zixing/{skuCode}/{count}";

	public static final String REPRINT_QRCODES = "/reprint/{poNumber}";

	public static final String GENERATE_QRCODE = "/qrcode/{barcode}";

	public static final String QRCODE_GENERATION_FOR_LIST = "/qrcodeList";

	public static final String GENERATE_BASED_ON_PONUMBER = "/{poNumber}";

	public static final String ADD_CHECKLIST = "/addChecklist";

	public static final String GET_INVOICE_NUMBERS = "/getAllInvoiceNumbers";

	public static final String ADD_ORDER_DETAILS = "/addOrderDetails";

	public static final String GET_DETAILS_BY_ORDER_ID = "/getOrderDetails/{displayOrderCode}";

	public static final String CHANGE_ORDER_STATUS = "/changeOrderStatus";

	public static final String GET_UNICOMMERCE_PENDING = "/getUnicommercePendingData/{barcode}";

	public static final String GET_PRODUCT_COUNT_BASED_ON_FACILITY = "/getCountBasedOnFacility/{facilityId}";

	public static final String GET_BY_SKUCODE = "/getDetailsBySkuCode/{skuCode:.+}";

	public static final String GET_ALL_NOT_ADDED_QRCODES = "/getNotAddedQrcodes";

	public static final String REPRINT_QRCODES_COUNT = "/retrieveQrCodesCount/{skuCode}/{poNumber}";

	/**
	 * MESSAGE TEMPLATE MODULE
	 */
	public static final String MESSAGE_TEMPLATE = "/";

	/**
	 * SERVICE EVENT MODULE
	 */

	public static final String SERVICE_EVENT = "/";

	/**
	 * SHIPPING AGGREGATOR MODULE
	 */

	public static final String ADD_SHIPPING_AGGREGATOR = "/addShippingAggregator";

	public static final String UPDATE_SHIPPING_AGGREGATOR = "/updateShippingAggregator";

	public static final String DELETE_SHIPPING_AGGREGATOR = "/deleteShippingAggregator/{id}";

	public static final String GET_ALL_SHIPPING_AGGREGATOR = "/getAllShippingAggregator";

	public static final String GET_BASED_ON_TRACKING_NUMBER = "/getByTrackingNo/{trackingNo}";

	public static final String GET_BASED_ON_COURIER_NAME = "/getByCourierName/{courierName}";

	public static final String GET_BASED_ON_SHIPPINGAGGR = "/getByShipping/{shippingAggr}";
	public static final String ADD_SHIPPING_AGGREGATOR_FOR_SERVICING_PRODUCTS = "/addShippingAggregatorForServicingproducts/{id}";

	/**
	 * SELF SHIPMENT MODULE
	 */

	public static final String ADD_SELF_TRANSPORT = "/addSelfTransport";

	public static final String UPDATE_SELF_TRANSPORT = "/updateSelfTransport/{id}";

	public static final String GET_ALL_SELF_TRANSPORT = "/getAll";

	public static final String GET_ALL_TRANSPORTATION = "/getAllTransportation";
	
	public static final String GET_FASTMOVING_SKU = "/getFastMovingSkus/{startDate}/{endDate}/{facility}/{channelId}";
	public static final String ADD_SELF_TRANSPORT_FOR_SERVICING_PRODUCT = "/addSelfShipmentForServicingProducts/{id}";


	/**
	 * TRANSFER INVENTORY MODULE
	 */
	public static final String GET_COUNT_BASED_ON_SKUCODE_FACILITYID = "/getCountBasedOnSkuCode/{skuCode}/{facilityId}";

	public static final String ADD_PACKAGE = "/addPackage";

	public static final String GET_COUNT_BASED_ON_PONUMBER_SKUCODE_STATUS = "/getCount/{poNumber}/{skuCode}/{statusId}";

	public static final String ADD_TRANSFER_INVENTORY = "/addTransfer/{fromLocation}/{toLocation}";

	public static final String GET_ALL_PACKAGE_DETAILS = "/getAll";

	public static final String GET_ALL = "/getAllTransferInventory";

	public static final String UPDATE_INVENTORY_MOVING_STATUS = "/updateTransferInventory/{statusId}/{id}";

	public static final String GET_TRANSPORT_DETAILS_ON_ID = "/getTransportType/{id}";

	public static final String GET_ALL_BY_FACILITY = "/getByFacilityId/{id}";

	public static final String GET_PACK_COMPLETED_TRANSFER_INVENTORY = "/getPakCompleted";

	public static final String GET_ALL_USERS_BY_FACILITY_ID = "/getAllUsersByFacility/{facilityId}";

	public static final String UPDATE_QRCODE_STATUS = "/updateQrcode/{barcode}/{transferInventoryId}/{updatedUser}";

	public static final String GET_BASED_ON_BARCODE = "/{barcode}/{transferInventoryId}/{facilityId}";

	public static final String UPDATE_INVENTORY_MOVING_STATUS_TO_RECEIVED = "/UpdateStatusToReceive/{transferInventoryId}/{comments}/{userName}";

	public static final String GET_DETAILS_FOR_UPDATE_PACKAGEDETAILS = "/update/{transferInventoryId}";

	public static final String GET_ALL_PACKAGEDETAILS_BY_TRANSFERINVENTORYID = "/getAllPackageDetailsByTransferInventoryId/{id}";

	public static final String TRANSFERINVENTORY_DISPATCH = "/dispatch/{transferInventoryId}";

	public static final String UPDATE_PACKAGEDETAILS = "/updatePackageDetails/{transferInventoryId}";

	public static final String CHECK_PACKAGE_NAME = "/checkPackageName/{fromLocation}/{toLocation}";

	public static final String VIEW_PACKAGE = "/viewPackage/{transferInventoryId}";

	public static final String GET_PACKAGES_ON_ROUTE_DATES = "/getPackagesOnDatesAndRoutes/{fromId}/{toId}/{startDate}/{endDate}/{statusId}";

	public static final String GET_SCAN_FOR_REMOVE = "/getScanForRemove/{transferInvId}/{barCode}/{updatedUser}/{facilityId}";

	/**
	 * DOCUMENTS UPLOAD MODULE
	 */
	public static final String ADD_TRANSFER_DOCUMENT = "/addTransferDocument";

	public static final String GET_TRANSFER_DOCUMENT = "/getTransferDocument/{id}";

	public static final String MAIL_TRANSFERDOCUMENTS = "/sendAttachmentEmail/{id}";

	public static final String GENERATEPDF_FOR_TRANSFERINVENTORY_DETAILS = "/pdf/{id}";

	public static final String MAIL_TRANSFER_INVENTORY = "/sendingMailForTransferInventory/{userId}/{id}";

	/**
	 * Bank Details and other po charges and vendors MODULE
	 */
	public static final String ADD_DETAILS = "/addDetails";

	public static final String DELETE_BY_POVENDOR = "/deleteDetails/{poVendorId}";

	public static final String GET_ALL_DETAILS1 = "/getAllDetails";

	public static final String GET_DETAILS_BY_POVENDOR = "/getByPO/{poVendorId}";

	public static final String GET_TOATL_AMOUNT_BY_PO_VENDOR = "/totalAmountByPo/{poVendorId}";

	public static final String UPDATE_VENDOR = "/updateVendor/{id}";

	public static final String GETTING_INVENTORY_PICTURE_BY_SKUCODE = "/getInventoryImage/{skuCode}";

	public static final String DELETE_INVENTORY_PICTURE_BY_SKUCODE = "/deletingInventoryPicture/{skuCode}";

	public static final String UPDATE_INVENTORY_PICTURE_BY_SKUCODE = "/updateInventoryPicture/{skuCode}";

	public static final String SENDING_MAIL_ALERTS_FOR_INVENTORY_LIST_BASED_ON_FACILITY_WISE_THRESHHOLD_BY_CRON = "/sendingMailAlertsInventoryListBasedOnThresholdByCron";

	public static final String OVER_ALL_THRESHOLD_LEVEL_COUNT = "/overAllThresholdLevelCount";

	public static final String GET_UPDATING_POSTATUS = "/updatePOStatus/{poVendorId}/{poStatusId}/{stockReceivedDate}";

	public static final String GETALL_PURCHASEINVOICE_STATUS = "/getAllPurchaseInvoiceStatus";
	
	public static final String GET_DETAILS_BY_SKUCODE_ACTIVESTATUS = "/getInventoryBySkuCodeandActiveStatus/{skuCode}";

	public static final String UPDATE_INVENTORY_STATUS = "/updateInventoryStatus/{skuCode}/{skuStatus}";

	/**
	 * Inventory Sync Module
	 *
	 */
	 public static final String INVENTORY_SYNC = "/sync";
	 
	 /**
		 * Dispatch Entries Module
		 *
		 */

	public static final String ADD_DISPATCHENTRY = "/addDispatchEntries";

	public static final String GET_ALL_PAYMENT_MODES = "/getAllPaymentModes";

	public static final String GET_ALL_DISPATCH_ENTRIES = "/getAllDispatchEntries";

	public static final String ADD_DISPATCH_ENTRIES_MANUALLY = "/addDispatchEntriesManually";

	public static final String ADD_PROOFS_FOR_DISPATCH = "/addDispatchPaymentDocument";

	public static final String GET_DISPATCH_PAYMENT_DOCUMENT = "/getDispatchPaymentDocument/{dispatchId}";

/**
	 * Servicing Product Module
	 *
	 */
	public static final String ADD_SERVICING_PRODUCT = "/addservicingproduct";
	public static final String GET_AUTO_FILTER = "/getDetailsByorderId/{orderId}";
	public static final String GET_BY_SKU = "/getBysku/{skuCode}";
	public static final String GET_ALL_SERVICING_PRODUCTS = "/getallservicingproducts";
	public static final String GET_DETAIS_BY_SKU = "/getDetailsBySkuCode/{skuCode}";
	public static final String GET_SERVICING_PRODUCTS_BY_FILTERS = "/getservicingproducts/{startDate}/{endDate}/{warranty}/{servicingStatus}/{paymentStatus}";
	public static final String GET_ALL_SERVICING_STATUES = "/getAllServicingStatues";
	public static final String GET_SERVICING_PRODUCTS_BY_ID = "/getServicingProductById/{id}";
	public static final String UPDATING_SERVICING_PRODUCT = "/update/{id}";
	public static final String GET_CUSTOMER_DETAILS_BY_ORDERID="/getCustomerDetailsByOrderId/{orderId}"; 
	/**
	 * Quotation Details Module
	 *
	 */
	public static final String ADD_QUOTATION_DETAILS = "/addquotation/{serviceId}";

	public static final String GET_ALL_QUOTATION_DETAILS = "/getallquotations";

	public static final String GET_SERVICING_PRODUCTS_CHECKLIST = "/addproductchecklist/{serviceId}";
	public static final String UPDATE_QUOTATION_DETAILS = "/updateQuotationDetails/{id}";
	public static final String GENERATING_PDF_FOR_QUOTATION_DETAILS = "/pdfGenerationForQuotationDetails/{id}";
	public static final String ADD_PAYMENT_DETAILS = "/addPaymentDetails/{id}";
	public static final String ADD_SERVICING_INVOICE_DETAILS = "/addInvoiceDetails/{id}";
	public static final String UPDATE_SERVICING_INVOICE_DETAILS ="/updateInvoiceDetails/{id}";
    public static final String UPDATE_PAYMENT_DETAILS ="/updatePaymentDetails/{id}";
    public static final String SENDING_MAIL_FOR_QUOTATION_DETAILS="/pdf/{id}";	
	/**
	 *Spare Parts Module
	 *
	 */
	public static final String GET_ALL_SPARE_PARTS = "/getAllSpareparts";

	public static final String ADD_SPARE_PARTS = "/addspareparts/{quotationId}";

	public static final String UPDATING_SPARE_PARTS = "/updateSpareparts/{quotationDetailsId}";

	public static final String GET_PRODUCTNAME_BY_SKU = "/getProductNameBySku/{skuCode}";





}

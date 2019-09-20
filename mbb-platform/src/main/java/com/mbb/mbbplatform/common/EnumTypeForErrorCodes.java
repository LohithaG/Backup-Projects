package com.mbb.mbbplatform.common;

public enum EnumTypeForErrorCodes {

	SCUS001("Failed to add back orders into database"),

	SCUS002("Failed to add busy invoices into database"),

	SCUS003("Failed to add busy management into database"),

	SCUS004("Failed to add busy return report into database"),

	SCUS005("Failed to add category report into database"),

	SCUS006("Failed to add clear tax credit note into database"),

	SCUS007("Failed to add clear tax sales report into database"),

	SCUS008("Failed to add cycle count overall data into database"),

	SCUS009("Failed to add cycle count report into database"),

	SCUS010("Failed to add fast moving SKU'S into database"),

	SCUS011("Failed to add inventory snapshot into database"),

	SCUS012("Failed to add purchase entries  into database"),

	SCUS013("Failed to add invoice data into database"),

	SCUS014("Failed to add item master data into database"),

	SCUS015("Failed to add picklist data into database"),

	SCUS016("Failed to add reorders data into database"),

	SCUS017("Failed to add return manifest data into database"),

	SCUS018("Failed to add reverse pickup data into database"),

	SCUS019("Failed to add busy sales report into database"),

	SCUS021("Failed to add sale orders"),

	SCUS022("Failed to add shelfwise inventory"),

	SCUS023("Failed to add shipping manifest"),

	SCUS024("Failed to add shipping package"),

	SCUS025("Failed to add shipping provider location"),

	SCUS026("Failed to add Tally cancel GST report"),

	SCUS027("Failed to add Tally ERP9"),

	SCUS028("Failed to add Tally ERP9 cancelled"),

	SCUS029("Failed to add Tally ERP9 inventory"),

	SCUS030("Failed to add Tally ERP9 inventory new"),

	SCUS031("Failed to add Tally ERP9 inventory returns"),

	SCUS032("Failed to add Tally GST report"),

	SCUS033("Failed to add Tally Reco report"),

	SCUS034("Failed to add Tally Reco report new"),

	SCUS035("Failed to add Tally Return GST report"),

	SCUS036("Failed to send the mail"),

	SCUS037("Inventory list is more than 5"),

	SCUS038("Failed to sent a mail if inventory is less than threshold"),

	SUCS039("Failed to add inventory"),

	SCUS040("SKU already exists"),

	SCUS041("Failed to get inventory of all the items"),

	SCUS042("Failed to delete inventory"),

	SCUS043("Failed to get inventory by id"),

	SCUS044("Inventory does not exists"),

	SCUS045("Failed to update inventory"),

	SCUS046("SKU code already exists"),

	SCUS047("Failed to get inventory details by SKU code"),

	SCUS048("SKU cannot be updated.It is already in use"),

	SCUS049("Failed to get details by barcodeId"),

	SCUS050("Failed to update SKU"),

	SCUS051("Failed to get stock of the product based on facility"),

	SCUS052("Failed to get the product details based on SKU code and status"),

	SCUS053("Inventory images does not exist"),

	SCUS054("Error in getting list of inventory based on facilty wise threshold"),

	SCUS055("Error in updating facility wise threshold"),

	SCUS056("Error in getting inventory picture by SKU code"),

	SCUS057("Inventory does not exist with this SKU code"),

	SCUS058("Error in updating inventory picture by SKU code"),

	SCUS059("Error in deleting inventory picture by SKU code"),

	SCUS060("Error in sending mail alerts for inventory list based on threshold by cron scheduling"),

	SCUS061("Inventory item is in scanned/In-transit"),
	
	SCUS062("This SKU code is InActive"),

	SCUS063("This SKU code has inventory items/PO created with SKU"),
	
	SCUS064("This product is not in your facility"),
	
	SCUS065("To add inventory make SKU status to active"),
	
	SCUS066("SKU does not exists"),
	
	SCUS067("Please make this SKU as parent to add accessories"),
	
	SCUS068("Error in getting accessories list"),
	
	SCUS069("Error in getting product name by SKU"),
	
	SCUS070("Parent SKU cannot be Inactive"),
	
	SCUS071("Cannot be Inactive, assigned as child to other SKU"),
	
	SCUS072("SKU is parent"),










	/**
	 * INVENTORY ITEM MODULE
	 */
	SCUS101("Failed to get inventory item status"),

	SCUS102("Failed to get inventory item details by SKU code"),

	SCUS103("Inventory item does not exists"),

	SCUS104("Failed to update the inventory item based on status"),

	SCUS105("Failed to get inventory item by id"),

	SCUS106("Failed to update inventory item"),

	SCUS107("Failed to delete inventory item"),

	SCUS109("Failed to get inventory item status"),

	SCUS110("Failed to add new inventory item"),

	SCUS111("Inventory item already exists"),

	SCUS112("Failed to get inventory items by status"),

	SCUS113("Failed to update the inventory item  based on condition"),

	SCUS114("Failed to get all inventory conditions"),

	SCUS115("Failed to get all facilities"),

	SCUS116("Failed to get status based on condition"),

	SCUS117("Failed to get all SKU codes"),

	SCUS118("Product already exists with this QR-code"),

	SCUS119("QR-code does not exists or product already exists in inventory"),

	SCUS120("SKU cannot be updated.It is already in use"),

	SCUS121("Failed to get the details by barcode id"),

	SCUS122("Failed to update sku"),

	SCUS123("Failed to get all inventory items"),

	SCUS124("QR-code does not exists or product already dispatched"),

	SCUS125("Error in getting scanned count based on SKU and facility"),

	SCUS126("Please add all items of poVendor to get approval "),

	SCUS127("This POVendor is already moved to approved status"),

	SCUS128("Error in view inventory Approval"),

	SCUS129("Error in updating inventory approval status"),

	SCUS130("POandBarcode is not exists"),

	SCUS131("Serial number already exists"),

	SCUS132("Cannot update as serial number already exists"),

	SCUS133("Error in updating serial number"),

	SCUS134("Error in getting inventory by date filters"),

	SCUS135("Inventory item does not exists"),

	SCUS136("Error in overall threshold level count"),
	
	 SCUS137("Error in converting inventory image to thumbnail image"),


	/**
	 * Zepo and Shiprocket MODULE
	 */

	SCUS222("Failed to add zepo courier into database"),

	SCUS223("Failed to add shiprocket into database"),

	SCUS224("Failed to get all shiprocket"),

	SCUS225("Failed to add zepo COD remittance into database"),

	SCUS226("Failed to get all  zepo COD remittance data"),

	SCUS227("Failed to get all  shiprocket COD remittance data"),

	SCUS228("Failed to get all  COD remittance "),

	SCUS229("Failed to get all  zepo shipments reports "),

	SCUS230(" Failed to get all  shipping aggregator "),

	SCUS231(" Failed to get all zepo shipments "),

	SCUS232(" Failed to get all shiprocket shipments "),

	SCUS233("Failed to get all zepo and shiprocket shipments "),

	SCUS234("Failed to get all zepo and shiprocket COD status "),

	SCUS235("Failed to get all zepo and shiprocket shipments by delivery status"),

	SCUS236(" Failed to get all  zepo and SR shipments "),

	SCUS237(" Failed to get all  zepo and SR shipments "),

	SCUS238(" Failed to get all amazon orders shipments "),

	SCUS239(" Failed to get all shiprocket shipping charges "),

	/**
	 * FLIPKART MODULE
	 */

	SCUS240("Failed to add flipkart COD remittance into database"),

	SCUS241("Failed to get all  flipkart related postpaid  COD remittance data"),

	SCUS242("Failed to get all  flipkart and amazon related COD remittance data "),

	/**
	 * AMAZON MODULE
	 */
	SCUS243("Failed to add amazon COD remittance into database"),

	SCUS244("Failed to add amazon merchand COD remittance into database"),

	SCUS245("Failed to get all  flipkart and amazon  COD remittance data"),
	/**
	 * AMAZON FLIPKART SHIPMENTS MODULE
	 */
	SCUS246("Failed to get all amazon and flipkart shipments reports"),

	/**
	 * COD REMITTANCE MODULE
	 */
	SCUS247("Failed to find cod reports in between the dates"), SCUS248("Failed to delete delivery alerts orers list"),
	SCUS249("Failed to find cod details in between the dates"),

	/**
	 * OTHER CHANNEL MODULE
	 */
	SCUS250("Failed to get all flipkart channel  report"),
	/**
	 * ZEPO SR SHIPMENTS MODULE
	 */
	SCUS251("Failed to add all zepo shipments report"), SCUS252("Failed to get delivery alerts orers list"),
	SCUS253("Failed to find cod details in between the dates"), SCUS254("Failed to find the tracking details"),
	SCUS255("Failed to get All ShippingStatus and shippingAggregator"),
	SCUS256("Failed to find shipments details in between dates"),

	/**
	 * ZEPO SR COD MODULE
	 */
	SCUS257("Failed to find zepo shiprocket cod details in between the dates"),
	SCUS258("Failed to add all zepo COD remittance report"),

	/**
	 * SR COD REMITTANCE MODULE
	 */
	SCUS10001("Failed to get all shiprocket cod remittance"),
	/**
	 * FLIPKART ORDERS MODULE
	 */
	SCUS20001("Failed to get all flipkart orders"),
	/**
	 * REPORT MODULE
	 */
	SCUS2578("Failed to get reports"),
	/**
	 * SR COD ORDERS MODULE
	 */
	SCUS2579("Failed to get shiprocket report"), SCUS2580("Failed to get shiprocket external orders"),
	SCUS2581("Failed to get shiprocket COD remittance amount"),
	SCUS2582("Failed to get shiprocket COD remittance  details"), SCUS2583("Failed to get all shiprocket CRFID errors"),

	/**
	 * SR SHIPPING CHARGES REPORT MODULE
	 */
	SCUS2584("Failed to get shiprocket shipping charge orders"), SCUS2585("Failed to get reports"),
	/**
	 * ZEPO REPORT MODULE
	 */
	SCUS2586("Failed to get zepo report"),

	/**
	 * /** Dispatch MODULE
	 */
	SCUS701("Failed to get the dispatch details in between the dates"),

	SCUS702("Failed to get the last week dispatch details"),

	SCUS703("Inventory not available with this QR-code"),

	SCUS704("Product cannot be dispatched, because product is in pending QC status"),

	SCUS705("Failed to get QR-codes which are added into item level, but not added into dispatch level"),

	SCUS706("This product is not pending to dispatch in Unicommerce "),

	SCUS707("Failed to get all dispatches"),

	SCUS708("Failed to delete dispatch details"),

	SCUS709("Invoice already exists"),

	SCUS710("Failed to update the dispatch details"),

	SCUS711("Dispatch details does not exists"),

	SCUS712("Failed to get dispatch details by id"),

	SCUS713("Invoice already exists.Unable to dispatch this item"),

	SCUS714("Product is in bad condition. Please select another product to dispatch"),

	SCUS715("Product already dispatched"),

	SCUS716("Inventory not available with this QR-code"),

	SCUS717("Failed to add dispatch"),

	SCUS718("This inventory item is already scanned for package"),

	SCUS719("Invoice is already used"),

	SCUS720("This product is not Approved"),

	SCUS721("Error in getting return products based on dates,channels,refund status and return status"),
	
	SCUS722("Error in getting all dispatched invoices"),
	
	SCUS723("Please dispatch same facility items"),
	
	SCUS724("Failed to get dispatch payment documents"),
	
	SCUS725("Failed to send email for accountant"),
	
	SCUS726("Failed to add dispatch payment documents"),
	
	SCUS727("Failed to get all payment modes"),







	/**
	 * SERVICE EVENT MODULE
	 */
	SCUS301("Failed to get service event by id "),

	SCUS302("Failed to update service event "),

	SCUS303("Failed to update service event"),

	SCUS304("Failed to delete service event"),

	SCUS305("Service event already exists "),

	SCUS306("Failed to add new service event "),

	SCUS307("Failed to get all service events"),

	SCUS308("Event code already exists"),

	SCUS309("Event already exists"),

	/**
	 * MESSAGE TEMPLATE MODULE
	 */
	SCUS401("Failed to get message template by id"),

	SCUS402("Failed to update template "),

	SCUS403("Failed to update template "),

	SCUS404("Failed to delete template"),

	SCUS405("Template name already exists "),

	SCUS406("Failed to add new template "),

	SCUS407("Failed to get all templates"),

	SCUS408("Template name already exists"),

	/**
	 * USERS MODULE
	 */
	SCUS501("Email id not exists"),

	SCUS502("Please enter valid email and phone number"),

	SCUS503("OTP is expired"),

	SCUS504("Invalid OTP"),

	SCUS505("Error in setting password"),

	SCUS506("Failed to get user details by role"),

	SCUS507("Failed to update  user"),

	SCUS508("Role not found"),

	SCUS509("Phone number alredy exists"),

	SCUS510("Failed to update user"),

	SCUS511("User already exits"),

	SCUS512("Phone number already exists"),

	SCUS513("Failed to add new user"),

	SCUS514("Error in user deletion"),

	SCUS515("Failed to get all users"),

	SCUS516("Failed to get all roles"),

	SCUS517("Invalid facility id"),

	SCUS518("Failed to get all users based on facility"),

	SCUS519("User role does not exist"),

	SCUS521("SUPERADMIN already exists"),
	
	SCUS520("Error in generating default password"),


	/**
	 * RETURNS MODULE
	 */
	SCUS601("Error in adding product as a return item"),

	SCUS602("Failed to get deatils of the product"),

	SCUS603("This item is already exists in inventory"),

	SCUS604("No product is exists with this QR-code"),

	SCUS605("No items are dispatched with this invoice number"),

	SCUS606("Failed to get barcodes based on invoice number"),

	SCUS607("Invoice items are already exists in inventory"),

	SCUS608("Return details are exists for this dispatchId"),

	SCUS609("Failed to add return details"),

	SCUS610("Refund details are exists for this dispatchId"),

	SCUS611("Failed to add refund details"),
	
	SCUS612("Failed to get return details by dispatchId"),
	
	SCUS613("Failed to get refund details by dispatchId"),
	
	SCUS614("Failed to get all channels"),
	
	SCUS615("Failed to get all type of returns"),
	
	SCUS616("Failed to get all return reasons"),
	
	SCUS617("Please enter return request on date greater than dispatch date"),
	
	SCUS618("QC not done for returns"),


	
	



	/**
	 * POVendor Module
	 */

	SCUS801("Error in add invoice details "),

	SCUS802("Error in getting invoice details"),

	SCUS803("Failed to add POVendor"),

	SCUS804("Failed to get the POVendor details by id"),

	SCUS805("Failed to update POVendor details"),

	SCUS806("POVendor does not Exist"),

	SCUS807("Failed to get POVendor details"),

	SCUS808("Failed to get all POVendor details"),

	SCUS809("POVendor does not exist with this purchaseOrderNumber"),

	SCUS810("Failed to get the POVendor details by purchaseOrderNumber"),

	SCUS811("Failed to get Inventory based on facility"),

	SCUS812("Failed to add vendor item Details"),

	SCUS813("Product already dispatched"),

	SCUS814("Failed to update checklist"),

	SCUS815("Invoice already exists"),

	SCUS816("Failed to get the vendor item details id"),

	SCUS817("POVendor does not exist with this id "),

	SCUS818("Failed to update POVendor"),

	SCUS819("Failed to delete vendor item"),

	SCUS820("Failed to get all vendor item details"),

	SCUS821("Failed to get Vendor item details by id"),

	SCUS822("Failed to get all vendors"),

	SCUS823("Purchase order number already exists"),

	SCUS824("Failed to get all purchase order details"),

	SCUS825("POVendor already exists for this purchase order number"),

	SCUS826("Failed to get SKU cocdes based on PO number"),

	SCUS827("POVendor already exists for this purchase order number"),

	SCUS828("Failed to calculate the price details after charges"),

	SCUS829("Failed to get the PO details based on POVendor id"),

	SCUS830("Failed to get price details by POVendor id"),

	SCUS831("Failed to delete PO price details"),

	SCUS832("Failed to get inventory Approval details"),
	
	SCUS833("Error in updating postatus"),

	SCUS834("Getting all purchase invoice status"),
	
	SCUS835("Please check total price in INR and total amount paid in bank"),


	

	/**
	 * InventoryItemCheckList Module
	 */
	SCUS900("Failed to add all checklist"),

	SCUS901("Failed to update checklist"),

	SCUS902("Failed to get the checklist item"),

	/**
	 * BarcodeGeneration Module
	 */
	SCUS950("Failed to reprint the QR-codes"),

	SCUS951("Failed to print the barcode"),

	SCUS952("No QR-codes are generated for this SKU"),

	SCUS953("Failed to print QR-codes using a4 sheet"),

	SCUS954("Failed to generate QR-code sequence"),

	SCUS955("Already Qrcodes are generated for this purchase order"),
	
	SCUS956("Please add received date to generate QR codes"),


	/**
	 * Package Module
	 */
	SCUS1000("SKU code not exists"),

	SCUS1001("Failed to get total count based on SKU code"),

	SCUS1002("Moving quantity must be less than total quantity"),

	SCUS1003("Failed to add package details"),

	SCUS1004("Inventory does not exists"),

	SCUS1005("Failed to get inventoryItem list based on PONumber,SKU code and status"),

	SCUS1006("Failed to get all package details"),

	SCUS1007("All QR-codes for this SKU are scanned already"),

	SCUS1008("Failed to add transferinventory"),

	SCUS1009("Package does not consists this SKU items"),

	SCUS1023("Error in checking QR-codes"),

	SCUS1024("QR code does not exists in inventory"),

	SCUS1025("This inventory item is already scanned"),

	SCUS1026("Error in getting details for update package details service"),

	SCUS1027("Already package is created for this route"),

	SCUS1028("For this SKU, all items are already added. Please scan the another product"),

	SCUS1029("For this SKU, all Available products are scanned"),

	SCUS1030("For this SKU, all Pending QC products are scanned"),

	SCUS1031("For this SKU, all Unavailable products are scanned"),

	SCUS1032("There is no transfer inventory with this id"),

	SCUS1033("This item is already dispatched"),

	SCUS1034("Error in updating QR-code status to scanned"),

	SCUS1035("This QR-code is already scanned"),

	SCUS1036("Package status is not in 'Package Created'"),

	SCUS1037("Error in updating package"),

	SCUS1038("Error in checking facilities to create package"),

	SCUS1039("Package details id is not present"),

	SCUS1040("Error in deleting package details"),

	SCUS1041("Please scan same facility QR-code"),

	SCUS1042("Scanning of items is completed for this package"),

	SCUS1043("Cannot update package,It contains scanned inventory items"),

	SCUS1044("For this SKU, there are no Available products in this package"),

	SCUS1045("For this SKU, there are no Pending QC products in this package"),

	SCUS1046("For this SKU, there are no Unavailable products in this package"),

	SCUS1047("There are no Available products to scan"),

	SCUS1048("There are no Pending QC products to scan"),

	SCUS1049("There are no UnAvailable products to scan"),
	


	/**
	 * shipping Aggregator Module
	 * 
	 */

	SCUS1010("This tracking number is already exists"),

	SCUS1011("Failed to add shipping Aggregator"),

	SCUS1012("There is no record with this id"),

	SCUS1013("Failed to update shipping Aggregator"),

	SCUS1014("There is no record with this id to delete"),

	SCUS1015("Failed to delete shipping Aggregator"),

	SCUS1016("Failed to get all shipping Aggregator"),

	SCUS1017("Failed to get shipping Aggregator based on tracking NO"),

	SCUS1018("Failed to get shipping Aggregator based on courier name"),

	SCUS1019("Failed to get private transport based on shipping  Aggregator"),

	SCUS1020("There is no record with this tracking number"),

	SCUS1021("There is no record with this courier name"),

	SCUS1022("There is no record with this shipping Aggregator"),
	/**
	 * BankDetails Module
	 */
	SCUS1101("PO vendor doesn't exists with this id"),

	SCUS1102("Failed to add bank details"),

	SCUS1103("Failed to delete bank details"),

	SCUS1104("Failed to get bank details by POVendor"),

	SCUS1105("Failed to get all bank details"),

	/**
	 * other charges Module
	 */
	SCUS1300("PO vendor doesn't exists with this id"),

	SCUS1301("Failed to add other charges"),

	SCUS1303("Failed to delete other charges"),

	SCUS1304("Failed to get other charges by POVendor"),

	SCUS1305("Failed to get all other charges"),

	/**
	 * transfer inventory Module
	 * 
	 */
	SCUS1500("Error in getting transferinventory"),

	SCUS1501("There is no transferinventory with this id"),

	SCUS1502("Error in updating transferinventory status"),

	SCUS1503("Error in getting transport type based on transferinventory id"),

	SCUS1504("Tansferinventory is not present with this id"),

	SCUS1505("Error in getting transferinventory based on facility"),

	SCUS1506("Error in getting all package created for transferinventory"),

	SCUS1507("Transfer inventory is already in received status"),

	SCUS1508("Error in getting all PackageDetails by transferinventory id"),

	SCUS1509("Please update package status to 'Packing completed' for diapatch"),

	SCUS1510("Error in dispatching transferinventory"),

	SCUS1511("Error in viewing package details"),

	SCUS1512("Unable to update package details"),

	SCUS1513("Error in getting packages based on source,destination and date filters"),

	SCUS1514("Error in scanning QR-code to remove from package"),

	SCUS1515("Item is not in scanned status"),

	SCUS1516("Mismatch in SKU code"),

	SCUS1517("QR-code does not belongs to this package id"),

	SCUS1518("There is no inventory item with this package id"),

	SCUS1519("Unable to delete package,it contains scanned inventory items"),

	SCUS1520("Error in update package status"),

	SCUS1521("Atleast one inventory must be present with package"),

	SCUS1522("This product is not approved"),
	
	/**
	 * other charges Module
	 */
	SCUS1121("Vendor already exists with this name"),

	SCUS1122("Failed to add vendor"),

	SCUS1123("Vendor doesn't exists with this id"),

	SCUS1124("Failed to delete vendor"),

	SCUS1125("Failed to get all vendors"),

	SCUS1126("Failed to get vendor details by id"),

	SCUS1127("Failed to update the vendor details"),

	SCUS1128("Not able to delete ,Vendor already in use "),

	/**
	 * SelfTransport Module
	 * 
	 */
	SCUS1050("Driver name already exist"),

	SCUS1051("Error in adding self shipment"),

	SCUS1052("Error in updating own transport"),

	SCUS1053("Getting all selfTransport details"),

	SCUS1054("Getting self transport by id"),

	SCUS1055("No self transport finded by that id"),

	SCUS1056("Error deleting self transport by id"),

	SCUS1057("Error in getting all transportation types"),

	SCUS1058("This package is already added to transport"),
	
	SCUS1059("Transferinventory doesnot exist"),

	SCUS1060("SelfShipment doesnot exist"),
	
	SCUS1061("Inventory item Status does not exist"),

	SCUS1062("Inventory does not exist"),

	SCUS1063("File location doesnot exist"),
	
	SCUS1064("All users mail notifications are off"),
	SCUS1065("Product was already added to transport"),
	SCUS1066("Servicing product doesnot exist"),
	SCUS1067("Error in adding self shipment for servicing product"),
	SCUS1068("Error in adding  shipment aggregator for servicing product"),


	/**
	 * Dispatch entries Module
	 */
	
	
	SCUS1700("Order Id is already exists"),
	
	SCUS1701("Failed to add dispatch entries"),
	
SCUS1702("Location is not available"),
	
	SCUS1703("Payment documents are not available"),
	
	SCUS1704("Payment document is not available for this dispatch"),

/**
	 * Servicing Products   module
	 * 
	 */
	SCUS2000("Error in adding servicing product"),
	SCUS2001("Error in getting all servicing products"),
	SCUS2003("Error in getting  servicing product by id"),
	SCUS2004("Error in getting all Service Statues"),

	
	SCUS2002(" servicing products doesnot exist by given id"),

	/**
	 *Spare Parts   module
	 * 
	 */
	
	SCUS2050("Error in adding spare parts of servicing product"),
	SCUS2112("Error in updating spare parts of servicing product"),
	SCUS2051("Spare Parts doesnot exist for given id"),

	/**
	 * Quotation Details   module
	 * 
	 */
	SCUS2100("Error in adding quotation details for servicing product"),
	SCUS2101("Error in getting all quotation details of servicing product"),
	SCUS2102("Quotation details already exists"),
	SCUS2103("Quotation details where not present for given id"),
	SCUS2104("Sapre parts does not exist for given Quotation details id"),
	SCUS2105("Order id does not exist"),
	SCUS2106("Error in getting details by order id"),
	SCUS2107("Skucode doesnot exist"),
	SCUS2108("Error in getting product name by skucode"),
	SCUS2109("Error in updating servicing product"),
	SCUS2110("Quotation details doesnot exist for given id"),
	SCUS2111("Error in updating quotation details"),
	SCUS2113("Error in getting details by skucode"),
	SCUS2114("Error in generating quotation pdf for servicing products"),
	SCUS2115("Sku Code does not exist"),
	SCUS2116("Quotation details does not exist by given id"),
	SCUS2117("Error in adding payment details for quotation details"),
	SCUS2118("Error in adding invoice details for quotation details"),
	SCUS2119("Order id doesnot exist"),
	SCUS2200("Error in updating payment details"),
	SCUS2201("Error in updating invoice details for quotation details"),


	/**
	 * Documents upload module
	 * 
	 */

	SCUS1200("Error in uploding transfer inventory documents"),

	SCUS1201("Error in retreiving transfer inventory documents"),

	SCUS1202("Error in sending mail for transfer inventory documents"),

	SCUS1203("Error in generating pdf for transfer inventory documents"),

	SCUS1204("Transfer documents does not exists"),

	SCU1111("Facility does not exist"),

	SCUS1205("Error in closing file resources"),

	SCUS1206("Documents list is empty"),

	SCUS1207("Upload only 'jpeg','png','jpg' only"),

	SUCS040("Facility does not exist"),

	SCUS1208("Folder does not exist"),

	SCUS1209("Error in sending mail for transferinventory"),

	SCUS1210("User does not exist with this id"),

	SCUS1211("User is InActive");
	




	private String errorMsg;

	EnumTypeForErrorCodes(String errorMsg) {
		this.errorMsg = errorMsg;
	}

	public String errorMsg() {
		return errorMsg;
	}
}

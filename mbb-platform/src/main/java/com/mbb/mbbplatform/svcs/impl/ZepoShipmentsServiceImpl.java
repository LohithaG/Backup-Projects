package com.mbb.mbbplatform.svcs.impl;

import java.io.File;
import java.io.FileInputStream;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;
import java.util.List;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellType;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import com.mbb.mbbplatform.common.EnumTypeForErrorCodes;
import com.mbb.mbbplatform.domain.ZepoShipments;
import com.mbb.mbbplatform.model.ServiceResponse;
import com.mbb.mbbplatform.model.Utils;
import com.mbb.mbbplatform.repos.ZepoShipmentsRepository;
import com.mbb.mbbplatform.svcs.ZepoShipmentsService;

@Service
public class ZepoShipmentsServiceImpl implements ZepoShipmentsService {

	private static Logger log = LoggerFactory.getLogger(ZepoShipmentsServiceImpl.class);

	@Autowired
	private ZepoShipmentsRepository zepoShipmentsRepo;

	@Autowired
	private Utils utils;

	@SuppressWarnings("deprecation")
	
	@Scheduled(cron = "${zeposhipment.add}")
	@Override
	public ServiceResponse<List<ZepoShipments>> addZepoShipment() {
		log.info("adding Zeposhipment report");

		ServiceResponse<List<ZepoShipments>> response = new ServiceResponse<>();

		List<ZepoShipments> listzepocourier = new ArrayList<>();

		try {

			FileInputStream file = new FileInputStream(new File("zepo/zepo-shipments/Report.xls"));


			XSSFWorkbook workbook = new XSSFWorkbook(file);

			XSSFSheet sheet = workbook.getSheetAt(0);

			Iterator<Row> rowIterator = sheet.iterator();
			rowIterator.next();

			while (rowIterator.hasNext()) {
				ZepoShipments zepocourier = new ZepoShipments();
				Row row = rowIterator.next();
				Iterator<Cell> cellIterator = row.cellIterator();
				while (cellIterator.hasNext()) {
					Cell cell = cellIterator.next();
					if (cell.getColumnIndex() == 0) {
						zepocourier.setShipmentId(cell.getNumericCellValue());
					} else if (cell.getColumnIndex() == 1) {
						zepocourier.setRequestDate(cell.getStringCellValue());
					} else if (cell.getColumnIndex() == 2) {
						zepocourier.setZepoUserId(cell.getNumericCellValue());
					} else if (cell.getColumnIndex() == 3) {
						zepocourier.setStatus(cell.getStringCellValue() + "");
					} else if (cell.getColumnIndex() == 4) {
						zepocourier.setTrackingNo(cell.getStringCellValue() + "");
					} else if (cell.getColumnIndex() == 5) {
						zepocourier.setTrackingStatus(cell.getStringCellValue() + "");
					} else if (cell.getColumnIndex() == 6) {
						zepocourier.setTrackingStatusDate(cell.getStringCellValue());
					} else if (cell.getColumnIndex() == 7) {
						zepocourier.setPickupNumber(cell.getStringCellValue());
					} else if (cell.getColumnIndex() == 8) {
						zepocourier.setOrderNumber(cell.getStringCellValue());
					} else if (cell.getColumnIndex() == 9) {
						zepocourier.setCourierName(cell.getStringCellValue());
					} else if (cell.getColumnIndex() == 10) {
						zepocourier.setServiceType(cell.getStringCellValue());
					} else if (cell.getColumnIndex() == 11) {
						zepocourier.setPaymentMode(cell.getStringCellValue());
					} else if (cell.getColumnIndex() == 12) {
						zepocourier.setPaymentType(cell.getStringCellValue());
					} else if (cell.getColumnIndex() == 13) {
						zepocourier.setZone(cell.getStringCellValue());
					} else if (cell.getColumnIndex() == 14) {
						zepocourier.setParentId(cell.getNumericCellValue());
					} else if (cell.getColumnIndex() == 15) {
						zepocourier.setFormRequired(cell.getStringCellValue());
					} else if (cell.getColumnIndex() == 16) {
						zepocourier.setFormLink(cell.getStringCellValue());
					} else if (cell.getColumnIndex() == 17) {
						zepocourier.setInsurance(cell.getBooleanCellValue());
					} else if (cell.getColumnIndex() == 18) {
						zepocourier.setTotalCharge(cell.getNumericCellValue());
					} else if (cell.getColumnIndex() == 19) {
						zepocourier.setBaseRate(cell.getNumericCellValue());
					} else if (cell.getColumnIndex() == 20) {
						zepocourier.setFuelsurcharge(cell.getNumericCellValue());
					} else if (cell.getColumnIndex() == 21) {
						zepocourier.setcODCharge(cell.getNumericCellValue());
					} else if (cell.getColumnIndex() == 22) {
						zepocourier.setInsuranceCharge(cell.getNumericCellValue());
					} else if (cell.getColumnIndex() == 23) {
						zepocourier.setServiceTax(cell.getNumericCellValue());
					} else if (cell.getColumnIndex() == 24) {
						zepocourier.setGoodsandServiceTax(cell.getNumericCellValue());
					} else if (cell.getColumnIndex() == 25) {
						zepocourier.setAdvancementFees(cell.getNumericCellValue());
					} else if (cell.getColumnIndex() == 26) {
						zepocourier.setEntryorOctroiTax(cell.getNumericCellValue());
					} else if (cell.getColumnIndex() == 27) {
						zepocourier.setShippingLabel(cell.getStringCellValue());
					} else if (cell.getColumnIndex() == 28) {
						zepocourier.setcODLabel(cell.getStringCellValue());
					} else if (cell.getColumnIndex() == 29) {
						zepocourier.setCurrentLocation(cell.getStringCellValue());
					} else if (cell.getColumnIndex() == 30) {
						zepocourier.setMessageDetail(cell.getStringCellValue());
					} else if (cell.getColumnIndex() == 31) {
						zepocourier.setPackageWeight(cell.getNumericCellValue());
					} else if (cell.getColumnIndex() == 32) {
						zepocourier.setVolumetricweight(cell.getNumericCellValue());
					} else if (cell.getColumnIndex() == 33) {
						zepocourier.setChargedWeight(cell.getNumericCellValue());
					} else if (cell.getColumnIndex() == 34) {
						zepocourier.setPackageLength(cell.getNumericCellValue());
					} else if (cell.getColumnIndex() == 35) {
						zepocourier.setPackageWidth(cell.getNumericCellValue());
					} else if (cell.getColumnIndex() == 36) {
						zepocourier.setPackageHeight(cell.getNumericCellValue());
					} else if (cell.getColumnIndex() == 37) {
						zepocourier.setPackageInvoiceValue(cell.getNumericCellValue());
					} else if (cell.getColumnIndex() == 38) {
						zepocourier.setPackageContentDescription(cell.getStringCellValue());
					} else if (cell.getColumnIndex() == 39) {
						zepocourier.setPickupPincode((cell.getStringCellValue()));
					} else if (cell.getColumnIndex() == 40) {
						zepocourier.setPickupCompanyName(cell.getStringCellValue());
					} else if (cell.getColumnIndex() == 41) {
						zepocourier.setPickupContactEmail(cell.getStringCellValue());
					} else if (cell.getColumnIndex() == 42) {
						zepocourier.setPickupContactNumber((cell.getStringCellValue()));
					} else if (cell.getColumnIndex() == 43) {
						zepocourier.setFromAddress1(cell.getStringCellValue());
					} else if (cell.getColumnIndex() == 44) {
						zepocourier.setFromAddress2(cell.getStringCellValue());
					} else if (cell.getColumnIndex() == 45) {
						zepocourier.setFromLandmark(cell.getStringCellValue());
					} else if (cell.getColumnIndex() == 46) {
						zepocourier.setPickupCity(cell.getStringCellValue());
					} else if (cell.getColumnIndex() == 47) {
						zepocourier.setPickupState(cell.getStringCellValue());
					} else if (cell.getColumnIndex() == 48) {
						zepocourier.setPickupCountry(cell.getStringCellValue());
					} else if (cell.getColumnIndex() == 49) {
						zepocourier.setDeliveryPincode((cell.getStringCellValue()));
					} else if (cell.getColumnIndex() == 50) {
						zepocourier.setDeliveryCompanyName(cell.getStringCellValue());
					} else if (cell.getColumnIndex() == 51) {
						zepocourier.setDeliveryContactEmail(cell.getStringCellValue());
					} else if (cell.getColumnIndex() == 52) {
						zepocourier.setDeliveryContactNumber((cell.getStringCellValue()));
					} else if (cell.getColumnIndex() == 53) {
						zepocourier.setDeliveryAddress1(cell.getStringCellValue());
					} else if (cell.getColumnIndex() == 54) {
						zepocourier.setDeliveryAddress2(cell.getStringCellValue());
					} else if (cell.getColumnIndex() == 55) {
						zepocourier.setDeliveryLandmark(cell.getStringCellValue());
					} else if (cell.getColumnIndex() == 56) {
						zepocourier.setDeliveryCity(cell.getStringCellValue());
					} else if (cell.getColumnIndex() == 57) {
						zepocourier.setDeliveryState(cell.getStringCellValue());
					} else if (cell.getColumnIndex() == 58) {
						zepocourier.setDeliveryCountry(cell.getStringCellValue());
					} else if (cell.getColumnIndex() == 59) {
						zepocourier.setRefundStatus(cell.getStringCellValue());
					} else if (cell.getColumnIndex() == 60) {
						zepocourier.setRefundRefNo(cell.getStringCellValue());
					} else if (cell.getColumnIndex() == 61) {
						zepocourier.setRefundedTo(cell.getStringCellValue());
					} else if (cell.getColumnIndex() == 62) {
						zepocourier.setExpectedPickupDate(cell.getStringCellValue());
					} else if (cell.getColumnIndex() == 63) {
						zepocourier.setActualPickupDate(cell.getStringCellValue());
					} else if (cell.getColumnIndex() == 64) {
						zepocourier.setActualDeliveryDate(cell.getStringCellValue());
					} else if (cell.getColumnIndex() == 65) {
						cell.setCellType(CellType.STRING);
						zepocourier.setNoofDaysforDelivery((cell.getStringCellValue()));
					}

					LocalDateTime dateTime = LocalDateTime.now();
					zepocourier.setCreatedDate(dateTime);
					zepocourier.setUpdatedDate(dateTime);

					listzepocourier.add(zepocourier);
				}

			}
			zepoShipmentsRepo.saveAll(listzepocourier);
			response.setData(listzepocourier);
			file.close();

		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS222.name(), EnumTypeForErrorCodes.SCUS222.errorMsg());
			log.error(utils.toJson(response.getError()), exception);
		}
		return response;
	}
	
	@Override
	public ServiceResponse<Collection<ZepoShipments>> getAllZepoZepoShipment() {
		log.info("getting all Zeposhipment");
		ServiceResponse<Collection<ZepoShipments>> response = new ServiceResponse<>();

		try {
			Collection<ZepoShipments> listZepocourier = zepoShipmentsRepo.findAll();
			response.setData(listZepocourier);
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS229.name(), EnumTypeForErrorCodes.SCUS229.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}
		return response;

	}

}

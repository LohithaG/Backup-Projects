package com.mbb.mbbplatform.svcs.impl;

import java.io.File;
import java.io.FileInputStream;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellType;
import org.apache.poi.ss.usermodel.Row;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import com.mbb.mbbplatform.common.EnumTypeForErrorCodes;
import com.mbb.mbbplatform.domain.AmazonCodRemittanceDump;
import com.mbb.mbbplatform.model.ServiceResponse;
import com.mbb.mbbplatform.model.Utils;
import com.mbb.mbbplatform.repos.AmazonCodRemittanceDumpRepository;
import com.mbb.mbbplatform.svcs.AmazonCodRemittanceDumpService;

@Service
public class AmazonCodRemitttanceDumpServiceImpl implements AmazonCodRemittanceDumpService {

	private static Logger log = LoggerFactory.getLogger(AmazonCodRemitttanceDumpServiceImpl.class);

	@Autowired
	private AmazonCodRemittanceDumpRepository amazonCodRemittanceRepo;

	@Autowired
	private Utils utils;
	@Scheduled(cron = "${amazoncoddump.addAmazonCodRemittance}")

	@Override
	public ServiceResponse<List<AmazonCodRemittanceDump>> addAmazonCodRemittance() {
		log.info("adding amazon cod report");

		ServiceResponse<List<AmazonCodRemittanceDump>> response = new ServiceResponse<>();

		List<AmazonCodRemittanceDump> listAmazon = new ArrayList<>();

		try {

			FileInputStream file = new FileInputStream(new File("amazonflipkartcod/amazoncod/Amazon.xls"));

			HSSFWorkbook workbook = new HSSFWorkbook(file);

			HSSFSheet sheet = workbook.getSheetAt(0);

			Iterator<Row> rowIterator = sheet.iterator();
			rowIterator.next();

			while (rowIterator.hasNext()) {
				AmazonCodRemittanceDump amazon = new AmazonCodRemittanceDump();
				Row row = rowIterator.next();
				Iterator<Cell> cellIterator = row.cellIterator();
				while (cellIterator.hasNext()) {
					Cell cell = cellIterator.next();
					if (cell.getColumnIndex() == 0) {
						amazon.setDateTime(cell.getStringCellValue());
					} else if (cell.getColumnIndex() == 1) {
						cell.setCellType(CellType.STRING);
						amazon.setSettlementId(cell.getStringCellValue());
					} else if (cell.getColumnIndex() == 2) {
						String type=cell.getStringCellValue().trim();
						amazon.setType(type);
					} else if (cell.getColumnIndex() == 3) {
						amazon.setOrderId(cell.getStringCellValue());
					} else if (cell.getColumnIndex() == 4) {
						amazon.setSku(cell.getStringCellValue());
					} else if (cell.getColumnIndex() == 5) {
						amazon.setDescription(cell.getStringCellValue());
					} else if (cell.getColumnIndex() == 6) {
						amazon.setQuantity((long)cell.getNumericCellValue());
					} else if (cell.getColumnIndex() == 7) {
						amazon.setMarketPlace(cell.getStringCellValue());
					} else if (cell.getColumnIndex() == 8) {
						amazon.setFulfillment(cell.getStringCellValue().trim());
					} else if (cell.getColumnIndex() == 9) {
						amazon.setOrderCity(cell.getStringCellValue());
					} else if (cell.getColumnIndex() == 10) {
						amazon.setOrderSate(cell.getStringCellValue());
					} else if (cell.getColumnIndex() == 11) {
						amazon.setOrderPostal((long) cell.getNumericCellValue());
					} else if (cell.getColumnIndex() == 12) {
						amazon.setProductSales(cell.getNumericCellValue());
					} else if (cell.getColumnIndex() == 13) {
						amazon.setShippingCredits(cell.getNumericCellValue());
					} else if (cell.getColumnIndex() == 14) {
						amazon.setPromotionalRebates(cell.getNumericCellValue());
					} else if (cell.getColumnIndex() == 15) {
						amazon.setTotalSales(cell.getNumericCellValue());
					} else if (cell.getColumnIndex() == 16) {
						amazon.setCgst(cell.getNumericCellValue());
					} else if (cell.getColumnIndex() == 17) {
						amazon.setSgst(cell.getNumericCellValue());
					} else if (cell.getColumnIndex() == 18) {
						amazon.setIgst(cell.getNumericCellValue());
					} else if (cell.getColumnIndex() == 19) {
						amazon.setSellingFees(cell.getNumericCellValue());
					} else if (cell.getColumnIndex() == 20) {
						amazon.setFbaFees(cell.getNumericCellValue());
					} else if (cell.getColumnIndex() == 21) {
						amazon.setOtherTransactionFees(cell.getNumericCellValue());
					} else if (cell.getColumnIndex() == 22) {
						cell.setCellType(CellType.STRING);
						amazon.setOther(cell.getStringCellValue());
					} else if (cell.getColumnIndex() == 23) {
						cell.setCellType(CellType.STRING);
						amazon.setTotal(cell.getStringCellValue());
					}
					LocalDateTime dateTime = LocalDateTime.now();
					amazon.setCreatedDate(dateTime);
					amazon.setUpdatedDate(dateTime);
					listAmazon.add(amazon);
				}

			}
			amazonCodRemittanceRepo.saveAll(listAmazon);
			response.setData(listAmazon);
			file.close();

		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS243.name(), EnumTypeForErrorCodes.SCUS243.errorMsg());
			log.error(utils.toJson(response.getError()), exception);
		}
		return response;
	}

}

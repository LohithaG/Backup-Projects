package com.mbb.mbbplatform.svcs.impl;

import java.io.File;
import java.io.FileInputStream;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;
import java.util.List;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import com.mbb.mbbplatform.common.EnumTypeForErrorCodes;
import com.mbb.mbbplatform.domain.ZepoCodRemittance;
import com.mbb.mbbplatform.model.ServiceResponse;
import com.mbb.mbbplatform.model.Utils;
import com.mbb.mbbplatform.repos.ZepoCodRemittanceRepository;
import com.mbb.mbbplatform.svcs.ZepoCodRemittanceService;

@Service
public class ZepoCodRemittanceServiceImpl implements ZepoCodRemittanceService {

	private static Logger log = LoggerFactory.getLogger(ZepoCodRemittanceServiceImpl.class);

	@Autowired
	private ZepoCodRemittanceRepository zepoCodRemittanceRepo;

	@Autowired
	private Utils utils;

	@Scheduled(cron = "${zepocodremittance.add}")
	@Override
	public ServiceResponse<List<ZepoCodRemittance>> addZepoCodRemittance() {
		log.info("adding ZepoCodRemittance report");

		ServiceResponse<List<ZepoCodRemittance>> response = new ServiceResponse<>();

		List<ZepoCodRemittance> listzepoCodRemittance = new ArrayList<>();

		try {

		FileInputStream file = new FileInputStream(new File("zepo/zepo-cod/CouriersRemittanceReport.xls"));

			HSSFWorkbook workbook = new HSSFWorkbook(file);

			HSSFSheet sheet = workbook.getSheetAt(0);

			Iterator<Row> rowIterator = sheet.iterator();
			rowIterator.next();

			while (rowIterator.hasNext()) {
				ZepoCodRemittance zepoCodRemittance = new ZepoCodRemittance();
				Row row = rowIterator.next();
				Iterator<Cell> cellIterator = row.cellIterator();
				while (cellIterator.hasNext()) {
					Cell cell = cellIterator.next();
					if (cell.getColumnIndex() == 0) {
						zepoCodRemittance.setLedger(cell.getStringCellValue());
					} else if (cell.getColumnIndex() == 1) {
						zepoCodRemittance.setTrackingId((cell.getStringCellValue()));
					} else if (cell.getColumnIndex() == 2) {
						zepoCodRemittance.setPaymentReferennceNumber(cell.getStringCellValue());
					} else if (cell.getColumnIndex() == 3) {
						zepoCodRemittance.setCourierName(cell.getStringCellValue());
					} else if (cell.getColumnIndex() == 4) {
						zepoCodRemittance.setTotalAmount(cell.getStringCellValue());
					} else if (cell.getColumnIndex() == 5) {
						zepoCodRemittance.setDueDate(cell.getStringCellValue());
					} else if (cell.getColumnIndex() == 6) {
						zepoCodRemittance.setDeliveryDate(cell.getStringCellValue());
					} else if (cell.getColumnIndex() == 7) {
						zepoCodRemittance.setMoneyReceivedDate(cell.getStringCellValue());
					} else if (cell.getColumnIndex() == 8) {
						zepoCodRemittance.setMoneyReceivedFromCourierCompany(cell.getStringCellValue());
					} else if (cell.getColumnIndex() == 9) {
						zepoCodRemittance.setNotes(cell.getStringCellValue());
					} else if (cell.getColumnIndex() == 10) {
						zepoCodRemittance.setTransferDate(cell.getStringCellValue());
					}else if (cell.getColumnIndex() == 11) {
						zepoCodRemittance.setStatus(cell.getStringCellValue());
					}
					LocalDateTime dateTime = LocalDateTime.now();
					zepoCodRemittance.setCreatedDate(dateTime);
					zepoCodRemittance.setUpdatedDate(dateTime);

					listzepoCodRemittance.add(zepoCodRemittance);

				}
			}
			 zepoCodRemittanceRepo.saveAll(listzepoCodRemittance);
			response.setData(listzepoCodRemittance);
			file.close();
		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS225.name(), EnumTypeForErrorCodes.SCUS225.errorMsg());
			log.error(utils.toJson(response.getError()), exception);
		}
		return response;
	}

	@Override
	public ServiceResponse<Collection<ZepoCodRemittance>> getAllZepoCodRemittance() {
		log.info("getting all Zepo Cod Remittance");
		ServiceResponse<Collection<ZepoCodRemittance>> response = new ServiceResponse<>();
		try {
			Collection<ZepoCodRemittance> listZepoCodRemittance = zepoCodRemittanceRepo.findAll();
			response.setData(listZepoCodRemittance);
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS226.name(), EnumTypeForErrorCodes.SCUS226.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}

		return response;

	}
}

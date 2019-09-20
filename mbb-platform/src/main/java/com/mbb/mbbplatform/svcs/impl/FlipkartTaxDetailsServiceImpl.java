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
import org.springframework.web.bind.annotation.PathVariable;

import com.mbb.mbbplatform.common.EnumTypeForErrorCodes;
import com.mbb.mbbplatform.domain.FlipkartCodRemittance;
import com.mbb.mbbplatform.domain.FlipkartTaxDetails;
import com.mbb.mbbplatform.model.ServiceResponse;
import com.mbb.mbbplatform.model.Utils;
import com.mbb.mbbplatform.repos.FlipkartCodRemittanceRepository;
import com.mbb.mbbplatform.repos.FlipkartTaxDetailsRepository;
import com.mbb.mbbplatform.svcs.FlipkartTaxDetailsService;

@Service
public class FlipkartTaxDetailsServiceImpl implements FlipkartTaxDetailsService {
	private static Logger log = LoggerFactory.getLogger(FlipkartTaxDetailsServiceImpl.class);
	@Autowired
	private Utils utils;

	@Autowired
	private FlipkartCodRemittanceRepository flipkartCodRemittanceRepo;

	@Autowired
	private FlipkartTaxDetailsRepository flipkartTaxDetailsRepository;
	@Scheduled(cron = "${flipkarttax.addflipkarttaxdetails}")

	@Override
	public ServiceResponse<List<FlipkartTaxDetails>> addFlipkartTaxDetails() {
		log.info("Flipkart Tax Details  Service");

		ServiceResponse<List<FlipkartTaxDetails>> response = new ServiceResponse<>();
		List<FlipkartTaxDetails> flipkartCodRemittanceList = new ArrayList<>();
		try {

			FileInputStream file = new FileInputStream(new File("amazonflipkartcod/flipkartcod/Flipkart.xlsx"));

			XSSFWorkbook workbook = new XSSFWorkbook(file);
			XSSFSheet sheet = workbook.getSheetAt(6);

			Iterator<Row> rowIterator = sheet.iterator();
			rowIterator.next();

			while (rowIterator.hasNext()) {
				FlipkartTaxDetails flipkartCodRemittance = new FlipkartTaxDetails();
				Row row = rowIterator.next();
				if (row.getRowNum() == 0 || row.getRowNum() == 1) {
					continue;
				}

				Iterator<Cell> cellIterator = row.cellIterator();
				while (cellIterator.hasNext()) {

					Cell cell = cellIterator.next();
					Cell orderItemId = row.getCell(2);

					if (orderItemId != null) {
						String orderId = orderItemId.getStringCellValue();
						List<FlipkartTaxDetails> fiplartRecord = flipkartTaxDetailsRepository
								.findByOrderItemId(orderId);

						if (fiplartRecord.size() == 4) {

							break;

						}
					}
					if (cell.getColumnIndex() == 0) {
						flipkartCodRemittance.setServiceType((cell.getStringCellValue()));
					} else if (cell.getColumnIndex() == 1) {

						flipkartCodRemittance.setNeftId((cell.getStringCellValue()));
					} else if (cell.getColumnIndex() == 2) {

						flipkartCodRemittance.setOrderItemId((cell.getStringCellValue()));
					}

					else if (cell.getColumnIndex() == 3) {

						flipkartCodRemittance.setRecallId((cell.getStringCellValue()));

					} else if (cell.getColumnIndex() == 4) {

						flipkartCodRemittance.setWarehouseStateCode((cell.getStringCellValue()));
					} else if (cell.getColumnIndex() == 5) {
						flipkartCodRemittance.setFeeName((cell.getStringCellValue()));
					}

					else if (cell.getColumnIndex() == 7) {
						cell.setCellType(CellType.NUMERIC);

						flipkartCodRemittance.setFeeAmount((cell.getNumericCellValue()));
					} else if (cell.getColumnIndex() == 8) {
						cell.setCellType(CellType.NUMERIC);

						flipkartCodRemittance.setFeeWaiver((cell.getNumericCellValue()));
					} else if (cell.getColumnIndex() == 9) {
						cell.setCellType(CellType.NUMERIC);

						flipkartCodRemittance.setCgstRate((long) (cell.getNumericCellValue()));
					} else if (cell.getColumnIndex() == 10) {
						cell.setCellType(CellType.NUMERIC);

						flipkartCodRemittance.setSgstRate((long) (cell.getNumericCellValue()));
					} else if (cell.getColumnIndex() == 11) {
						cell.setCellType(CellType.NUMERIC);

						flipkartCodRemittance.setIgstRate((long) (cell.getNumericCellValue()));
					} else if (cell.getColumnIndex() == 12) {
						cell.setCellType(CellType.NUMERIC);

						flipkartCodRemittance.setCgstAmount((cell.getNumericCellValue()));
					} else if (cell.getColumnIndex() == 13) {
						cell.setCellType(CellType.NUMERIC);

						flipkartCodRemittance.setSgstAmount((cell.getNumericCellValue()));
					} else if (cell.getColumnIndex() == 14) {
						cell.setCellType(CellType.NUMERIC);

						flipkartCodRemittance.setIgstAmount((cell.getNumericCellValue()));
					} else if (cell.getColumnIndex() == 24) {
						cell.setCellType(CellType.NUMERIC);

						flipkartCodRemittance.setTotalTaxes((cell.getNumericCellValue()));
						LocalDateTime dateTime = LocalDateTime.now();
						flipkartCodRemittance.setCreatedDate(dateTime);
						flipkartCodRemittance.setUpdatedDate(dateTime);
					}
					
					flipkartCodRemittanceList.add(flipkartCodRemittance);

				}

			}
			flipkartTaxDetailsRepository.saveAll(flipkartCodRemittanceList);
			response.setData(flipkartCodRemittanceList);
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS240.name(), EnumTypeForErrorCodes.SCUS240.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}
		return response;

	}

	@Override
	public ServiceResponse<Collection<FlipkartTaxDetails>> getAllFlipkartTaxDetails() {
		log.info("get All  Flipkart Cod Remittance");

		ServiceResponse<Collection<FlipkartTaxDetails>> response = new ServiceResponse<>();

		try {
			Collection<FlipkartTaxDetails> flipkartTaxDetails = flipkartTaxDetailsRepository.findAll();
			response.setData(flipkartTaxDetails);

		} catch (Exception e) {

			log.error(utils.toJson(response.getError()), e);

		}
		return response;
	}

	@Override
	public ServiceResponse<List<FlipkartTaxDetails>> getTaxesForParticularOrderItemId(
			@PathVariable String orderItemId) {
		log.info("get All Taxes For Particular OrderItemId");

		ServiceResponse<List<FlipkartTaxDetails>> response = new ServiceResponse<>();
		List<FlipkartTaxDetails> flipkartTaxList=new ArrayList<>();
		try {
			String feeName="Fixed Fee,Commission,Shipping Fee,Collection Fee,Reverse Shipping Fee";
			String[] feeNameList= feeName.split(",",5);
			for(String feeType:feeNameList)
			{
			List<FlipkartTaxDetails> flipkartTaxDetails = flipkartTaxDetailsRepository
					.findByOrderItemIdAndFeeName(orderItemId, feeType);
			if(!flipkartTaxDetails.isEmpty())
			{
			
			FlipkartTaxDetails taxdetails=flipkartTaxDetails.get(0);
			FlipkartCodRemittance orderExist=	flipkartCodRemittanceRepo.findByOrderItemId(taxdetails.getOrderItemId());
			if(orderExist!=null)
			{
			taxdetails.setTotalTaxesForOrder(orderExist.getTaxes());
			taxdetails.setMarketPlaceFee(orderExist.getMarketPlaceFee());
			}
			flipkartTaxList.add(taxdetails);

			}

			}
			
			response.setData(flipkartTaxList);

		} catch (Exception e) {

			log.error(utils.toJson(response.getError()), e);

		}
		return response;
	}

}

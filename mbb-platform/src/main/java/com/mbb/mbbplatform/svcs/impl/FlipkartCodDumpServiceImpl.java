package com.mbb.mbbplatform.svcs.impl;

import java.io.File;
import java.io.FileInputStream;
import java.time.LocalDateTime;
import java.util.ArrayList;
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
import com.mbb.mbbplatform.domain.FlipkartCodDump;
import com.mbb.mbbplatform.model.ServiceResponse;
import com.mbb.mbbplatform.model.Utils;
import com.mbb.mbbplatform.repos.FlipkartCodDumpRepository;
import com.mbb.mbbplatform.svcs.FlipkartCodDumpService;
@Service
public class FlipkartCodDumpServiceImpl implements  FlipkartCodDumpService{
	private static Logger log = LoggerFactory.getLogger(FlipkartCodDumpServiceImpl.class);

	@Autowired
	private Utils utils;
	@Autowired
	private FlipkartCodDumpRepository flipkartCodRemittanceRepo;

	@Override
	@Scheduled(cron = "${flipkartcoddump.addFlipkartCod}")

	public ServiceResponse<List<FlipkartCodDump>> addFlipkartCodRemittance() {
		log.info("Flipkart Cod Remittance report");
	
		ServiceResponse<List<FlipkartCodDump>> response = new ServiceResponse<>();
		List<FlipkartCodDump> flipkartCodRemittanceList = new ArrayList<>();
		try {

			FileInputStream file = new FileInputStream(
					new File("amazonflipkartcod/flipkartcod/Flipkart.xlsx"));

			XSSFWorkbook workbook = new XSSFWorkbook(file);
			XSSFSheet sheet = workbook.getSheetAt(1);

			Iterator<Row> rowIterator = sheet.iterator();
			rowIterator.next();

			while (rowIterator.hasNext()) {
				FlipkartCodDump flipkartCodRemittance = new FlipkartCodDump();
				Row row = rowIterator.next();
				if(row.getRowNum()==0 || row.getRowNum()==1){
					   continue; 
					  }
				Iterator<Cell> cellIterator = row.cellIterator();
				while (cellIterator.hasNext()) {
					
					Cell cell = cellIterator.next();
					
					 if (cell.getColumnIndex() == 0) {
						flipkartCodRemittance.setNeftId((cell.getStringCellValue()));
					}else if (cell.getColumnIndex() == 1) {

						flipkartCodRemittance.setNeftType((cell.getStringCellValue()));
					}else if (cell.getColumnIndex() == 2) {

						flipkartCodRemittance.setSettlementDate((cell.getStringCellValue()));
					}
					
					else if (cell.getColumnIndex() == 3) {
						cell.setCellType(CellType.NUMERIC);

						flipkartCodRemittance.setSum((cell.getNumericCellValue()));

						} 
						 else if (cell.getColumnIndex() == 5) {

						flipkartCodRemittance.setOrderId((cell.getStringCellValue()));
					} else if (cell.getColumnIndex() == 6) {

						flipkartCodRemittance.setOrderItemId((cell.getStringCellValue()));
					} 
					else if (cell.getColumnIndex() == 7) {
						cell.setCellType(CellType.NUMERIC);

						flipkartCodRemittance.setSaleAmount((cell.getNumericCellValue()));
					} 
					else if (cell.getColumnIndex() == 8) {
						cell.setCellType(CellType.NUMERIC);

						flipkartCodRemittance.setTotalOfferAmount((cell.getNumericCellValue()));
					} 
					else if (cell.getColumnIndex() == 9) {
						cell.setCellType(CellType.NUMERIC);

						flipkartCodRemittance.setMyShare((cell.getNumericCellValue()));
					} 
					else if (cell.getColumnIndex() == 10) {
						cell.setCellType(CellType.NUMERIC);

						flipkartCodRemittance.setCustomerShippingAmount((cell.getNumericCellValue()));
					} else if (cell.getColumnIndex() == 11) {
						cell.setCellType(CellType.NUMERIC);

						flipkartCodRemittance.setMarketPlaceFee((cell.getNumericCellValue()));
					} 
					else if (cell.getColumnIndex() == 12) {
						cell.setCellType(CellType.NUMERIC);

						flipkartCodRemittance.setTaxCollectedAtSource((cell.getNumericCellValue()));
					}else if (cell.getColumnIndex() == 13) {
						cell.setCellType(CellType.NUMERIC);

						flipkartCodRemittance.setTaxes((cell.getNumericCellValue()));
					}	
					else if (cell.getColumnIndex() == 14) {
						cell.setCellType(CellType.NUMERIC);

						flipkartCodRemittance.setProtectionFund((cell.getNumericCellValue()));
					}
					else if (cell.getColumnIndex() == 15) {
						cell.setCellType(CellType.STRING);

						flipkartCodRemittance.setRefund((cell.getStringCellValue()));
					}	else if (cell.getColumnIndex() == 17) {

						flipkartCodRemittance.setOrderDate((cell.getStringCellValue()));
					}	else if (cell.getColumnIndex() == 18) {

						flipkartCodRemittance.setDispatchDate((cell.getStringCellValue()));
					}			
					else if (cell.getColumnIndex() == 19) {

						flipkartCodRemittance.setFulfillmentType((cell.getStringCellValue()));
					}	
					else if (cell.getColumnIndex() == 20) {

						flipkartCodRemittance.setSellerSku((cell.getStringCellValue()));
					}	
					else if (cell.getColumnIndex() == 21) {
						cell.setCellType(CellType.NUMERIC);

						flipkartCodRemittance.setQuantity((long)(cell.getNumericCellValue()));
					}
					else if (cell.getColumnIndex() == 22) {

						flipkartCodRemittance.setProductName((cell.getStringCellValue()));
					}
					else if (cell.getColumnIndex() == 23) {

						flipkartCodRemittance.setAdditionalInformation((cell.getStringCellValue()));
					}
					else if (cell.getColumnIndex() == 24) {

						flipkartCodRemittance.setReturnType((cell.getStringCellValue()));
					}
					else if (cell.getColumnIndex() == 25) {

						flipkartCodRemittance.setItemReturnStatus((cell.getStringCellValue()));
					}
					else if (cell.getColumnIndex() == 27) {
						cell.setCellType(CellType.NUMERIC);

						flipkartCodRemittance.setOrderItemSaleAmount((cell.getNumericCellValue()));
					}
					else if (cell.getColumnIndex() == 28) {
						cell.setCellType(CellType.NUMERIC);

						flipkartCodRemittance.setOrderItemTotalOffer((cell.getNumericCellValue()));
					}
					else if (cell.getColumnIndex() == 29) {
						cell.setCellType(CellType.NUMERIC);

						flipkartCodRemittance.setOrderItemMyShare((cell.getNumericCellValue()));
					}
					else if (cell.getColumnIndex() == 31) {

						flipkartCodRemittance.setTier((cell.getStringCellValue()));
					}
					else if (cell.getColumnIndex() == 32) {
						cell.setCellType(CellType.NUMERIC);

						flipkartCodRemittance.setCommissionRate((long)(cell.getNumericCellValue()));
					}
					else if (cell.getColumnIndex() == 33) {
						cell.setCellType(CellType.STRING);

						flipkartCodRemittance.setCommission((cell.getStringCellValue()));
					}
					else if (cell.getColumnIndex() == 34) {
						cell.setCellType(CellType.NUMERIC);
						flipkartCodRemittance.setCommissionFeeWaiver((cell.getNumericCellValue()));
					}
					else if (cell.getColumnIndex() == 35) {
						cell.setCellType(CellType.NUMERIC);

						flipkartCodRemittance.setCollectionFee((cell.getNumericCellValue()));
					}
					else if (cell.getColumnIndex() == 36) {
						cell.setCellType(CellType.NUMERIC);
						flipkartCodRemittance.setCollectionFeeWaiver((cell.getNumericCellValue()));
					}
					else if (cell.getColumnIndex() == 37) {
						cell.setCellType(CellType.STRING);

						flipkartCodRemittance.setFixedFee((cell.getStringCellValue()));
					}
					else if (cell.getColumnIndex() == 38) {
						cell.setCellType(CellType.NUMERIC);
						flipkartCodRemittance.setFixedFeeWaiver((cell.getNumericCellValue()));
					}
					else if (cell.getColumnIndex() == 39) {
						cell.setCellType(CellType.NUMERIC);
						flipkartCodRemittance.setNoCostFeeReiumbersment((cell.getNumericCellValue()));
					}
					else if (cell.getColumnIndex() == 40) {
						cell.setCellType(CellType.NUMERIC);
						flipkartCodRemittance.setInstallationFee((cell.getNumericCellValue()));
					}
					else if (cell.getColumnIndex() == 41) {
						cell.setCellType(CellType.NUMERIC);
						flipkartCodRemittance.setUnInstallationFee((cell.getNumericCellValue()));
					}
					else if (cell.getColumnIndex() == 42) {
						cell.setCellType(CellType.NUMERIC);
						flipkartCodRemittance.setTechVisitFee((cell.getNumericCellValue()));
					}
					else if (cell.getColumnIndex() == 43) {
						cell.setCellType(CellType.NUMERIC);
						flipkartCodRemittance.setInsatllationAndPackagingFee((cell.getNumericCellValue()));
					}
					else if (cell.getColumnIndex() == 44) {
						cell.setCellType(CellType.NUMERIC);
						flipkartCodRemittance.setPickAndPackFee((cell.getNumericCellValue()));
					}
					else if (cell.getColumnIndex() == 45) {
						cell.setCellType(CellType.NUMERIC);
						flipkartCodRemittance.setPickAndPackFeeWaiver((cell.getNumericCellValue()));
					}
					else if (cell.getColumnIndex() == 47) {
						cell.setCellType(CellType.NUMERIC);
						flipkartCodRemittance.setCustomerShippingFee((cell.getNumericCellValue()));
					}
					else if (cell.getColumnIndex() == 48) {
						cell.setCellType(CellType.NUMERIC);

						flipkartCodRemittance.setShippingFee((cell.getNumericCellValue()));
					}
					else if (cell.getColumnIndex() == 49) {
						cell.setCellType(CellType.NUMERIC);

						flipkartCodRemittance.setShippingFeeWaiver((cell.getNumericCellValue()));
					}
					else if (cell.getColumnIndex() == 50) {
						cell.setCellType(CellType.NUMERIC);
						flipkartCodRemittance.setReverseShippingFee((cell.getNumericCellValue()));
					}
					else if (cell.getColumnIndex() == 51) {
						cell.setCellType(CellType.NUMERIC);
						flipkartCodRemittance.setFranciseFee((cell.getNumericCellValue()));
					}
					else if (cell.getColumnIndex() == 52) {
						cell.setCellType(CellType.NUMERIC);
						flipkartCodRemittance.setProductCancalletionFee((cell.getNumericCellValue()));
					}
					else if (cell.getColumnIndex() == 53) {
						cell.setCellType(CellType.NUMERIC);
						flipkartCodRemittance.setServiceCancalletionFee((cell.getNumericCellValue()));
					}
					else if (cell.getColumnIndex() == 54) {
						cell.setCellType(CellType.NUMERIC);
						flipkartCodRemittance.setFeeDiscount((cell.getNumericCellValue()));
					}
					else if (cell.getColumnIndex() == 56) {
						flipkartCodRemittance.setMultipartShipment((cell.getStringCellValue()));
					}
					else if (cell.getColumnIndex() == 57) {
						cell.setCellType(CellType.NUMERIC);
						flipkartCodRemittance.setProfilerDeadWeight((cell.getNumericCellValue()));
					}
					else if (cell.getColumnIndex() == 58) {
						cell.setCellType(CellType.NUMERIC);
						flipkartCodRemittance.setSellerDeadWeight((cell.getNumericCellValue()));
					}
					else if (cell.getColumnIndex() == 59) {
						flipkartCodRemittance.setLengthBreadthHeight((cell.getStringCellValue()));
					}
					else if (cell.getColumnIndex() == 60) {
						cell.setCellType(CellType.NUMERIC);
						flipkartCodRemittance.setVolumetricWeight((cell.getNumericCellValue()));
					}
					else if (cell.getColumnIndex() == 61) {
						flipkartCodRemittance.setChargableWeightType((cell.getStringCellValue()));
					}
					else if (cell.getColumnIndex() == 62) {
						flipkartCodRemittance.setChargableWeightSlab((cell.getStringCellValue()));
					}
					else if (cell.getColumnIndex() == 63) {
						flipkartCodRemittance.setShippingZone((cell.getStringCellValue()));
					}
					else if (cell.getColumnIndex() == 65) {
						flipkartCodRemittance.setBuyerInvoiceId((cell.getStringCellValue()));
					}
					else if (cell.getColumnIndex() == 66) {
						flipkartCodRemittance.setBuyerInvoiceDate((cell.getStringCellValue()));
					}
					else if (cell.getColumnIndex() == 67) {
						cell.setCellType(CellType.NUMERIC);

						flipkartCodRemittance.setBuyerInvoiceAmount(Double.toString(cell.getNumericCellValue()));
					}
					LocalDateTime dateTime = LocalDateTime.now();
					flipkartCodRemittance.setCreatedDate(dateTime);
					flipkartCodRemittance.setUpdatedDate(dateTime);

					flipkartCodRemittanceList.add(flipkartCodRemittance);

				}
			}
			flipkartCodRemittanceRepo.saveAll(flipkartCodRemittanceList);
			response.setData(flipkartCodRemittanceList);

		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS240.name(), EnumTypeForErrorCodes.SCUS240.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}
		return response;

	}
	
}

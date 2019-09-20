package com.mbb.pdcautomation.controller;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.poi.hssf.usermodel.HSSFRow;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellStyle;
import org.apache.poi.ss.usermodel.Font;
import org.apache.poi.ss.usermodel.IndexedColors;
import org.springframework.web.servlet.view.document.AbstractExcelView;

import com.mbb.pdcautomation.model.ProductData;

@SuppressWarnings("deprecation")
public class ExcelBuilder extends AbstractExcelView {

	@Override
	protected void buildExcelDocument(Map<String, Object> model, HSSFWorkbook workbook, HttpServletRequest request,
			HttpServletResponse response) throws Exception {

		List<ProductData> allCheckList = (List<ProductData>) model.get("allCheckList");

		// create a new Excel sheet
		HSSFSheet sheet = workbook.createSheet("checklist_data");
		CellStyle style = sheet.getWorkbook().createCellStyle();
		Font font = sheet.getWorkbook().createFont();
		font.setBold(true);
		font.setFontHeightInPoints((short) 12);
		font.setColor(IndexedColors.GREEN.getIndex());
		style.setFont(font);
		style.setAlignment(CellStyle.ALIGN_CENTER);

		// Code to Auto size the column widths
		for (int columnPosition = 0; columnPosition < 7; columnPosition++) {
			sheet.autoSizeColumn((short) (columnPosition));
		}
		HSSFRow row = sheet.createRow(0);
		row.setHeightInPoints(20);
		for (int i = 0; i < 7; i++) {

			sheet.setColumnWidth(i, 640 * 10);
		}

		Cell cellorderId = row.createCell(0);
		cellorderId.setCellValue("ORDERID");
		cellorderId.setCellStyle(style);

		Cell celldocketNumber = row.createCell(1);
		celldocketNumber.setCellStyle(style);
		celldocketNumber.setCellValue("DOCKET NUMBER");

		Cell cellproductName = row.createCell(2);
		cellproductName.setCellStyle(style);
		sheet.setColumnWidth(2, 1000 * 10);
		cellproductName.setCellValue("PRODUCT NAME");

		Cell cellsource = row.createCell(3);
		cellsource.setCellStyle(style);
		cellsource.setCellValue("SOURCE");

		Cell cellproductQuantity = row.createCell(4);
		cellproductQuantity.setCellStyle(style);
		cellproductQuantity.setCellValue("PRODUCT QUANTITY");

		Cell cellmodeOfPayment = row.createCell(5);
		cellmodeOfPayment.setCellStyle(style);
		cellmodeOfPayment.setCellValue("MODE OF PAYMENT");

		Cell cellsalesPrice = row.createCell(6);
		cellsalesPrice.setCellStyle(style);
		cellsalesPrice.setCellValue("SALES PRICE");

		// create data rows
		int rowCount = 1;

		for (ProductData checkList : allCheckList) {
			HSSFRow aRow = sheet.createRow(rowCount++);
			CellStyle rowStyle = sheet.getWorkbook().createCellStyle();
			Font font1 = sheet.getWorkbook().createFont();
			font1.setFontHeightInPoints((short) 10);
			rowStyle.setFont(font1);
			rowStyle.setAlignment(CellStyle.ALIGN_CENTER);
			
			Cell orderId = aRow.createCell(0);
			orderId.setCellValue(checkList.getOrderId());
			orderId.setCellStyle(rowStyle);

			Cell DocketNumber = aRow.createCell(1);
			DocketNumber.setCellValue(checkList.getDocketNumber());
			DocketNumber.setCellStyle(rowStyle);

			Cell ProductName = aRow.createCell(2);
			ProductName.setCellValue(checkList.getProductName());
			ProductName.setCellStyle(rowStyle);

			Cell Source = aRow.createCell(3);
			Source.setCellValue(checkList.getSource());
			Source.setCellStyle(rowStyle);

			Cell ProductQuantity = aRow.createCell(4);
			ProductQuantity.setCellValue(checkList.getProductQuantity());
			ProductQuantity.setCellStyle(rowStyle);

			Cell ModeOfPayment = aRow.createCell(5);
			ModeOfPayment.setCellValue(checkList.getModeOfPayment());
			ModeOfPayment.setCellStyle(rowStyle);

			Cell salesPrice = aRow.createCell(6);
			salesPrice.setCellValue(checkList.getsalesPrice());
			salesPrice.setCellStyle(rowStyle);

		}

	}
}

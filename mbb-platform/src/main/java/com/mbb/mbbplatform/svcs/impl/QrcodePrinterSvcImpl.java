package com.mbb.mbbplatform.svcs.impl;

import java.awt.print.PrinterJob;
import java.io.File;
import java.util.ArrayList;
import java.util.List;

import javax.print.PrintService;
import javax.print.PrintServiceLookup;
import javax.validation.Valid;

import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.printing.PDFPageable;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.itextpdf.io.image.ImageData;
import com.itextpdf.io.image.ImageDataFactory;
import com.itextpdf.kernel.pdf.PdfDocument;
import com.itextpdf.kernel.pdf.PdfWriter;
import com.itextpdf.layout.Document;
import com.itextpdf.layout.element.Cell;
import com.itextpdf.layout.element.Image;
import com.itextpdf.layout.element.Table;
import com.mbb.mbbplatform.common.EnumTypeForErrorCodes;
import com.mbb.mbbplatform.model.ServiceResponse;
import com.mbb.mbbplatform.model.Utils;
import com.mbb.mbbplatform.svcs.QrPrinterService;

@RestController
public class QrcodePrinterSvcImpl implements QrPrinterService {
	private static Logger log = LoggerFactory.getLogger(QrcodePrinterSvcImpl.class);

	@Autowired
	private Utils utils;

	@Override
	public ServiceResponse<String> printQrcodes(@Valid @RequestBody List<String> barcodes) throws Exception {
		log.info("printing qrcodes");
		ServiceResponse<String> response = new ServiceResponse<>();
		List<String> barcodesList = new ArrayList<>();
		try {
			int size = barcodes.size();
			String dest = "qrcodes/" + barcodes.get(0) + "-" + barcodes.get(size - 1) + ".pdf";
			PdfWriter writer = new PdfWriter(dest);

			PdfDocument pdfDoc = new PdfDocument(writer);

			try (Document doc = new Document(pdfDoc);) {
				for (int i = 0; i < barcodes.size(); i++) {
					String imageFile1 = "qrcodes/" + barcodes.get(i) + ".png";
					barcodesList.add(imageFile1);
				}
				for (int j = 0; j < barcodesList.size(); j++) {
					Table table = new Table(4);
					Cell cell1 = new Cell();
					ImageData data1 = ImageDataFactory.create(barcodesList.get(j));

					Image img1 = new Image(data1);

				cell1.add(img1.setAutoScale(true));

				table.addCell(cell1);
				table.setBold();
				if (barcodesList.size() > j) {

					Cell cell2 = new Cell();
					ImageData data2 = ImageDataFactory.create(barcodesList.get(j));

					Image img2 = new Image(data2);

					cell2.add(img2.setAutoScale(true));

					table.addCell(cell2);

					table.setBold();
				}
				j++;
				if (barcodesList.size() > j) {

					Cell cell3 = new Cell();
					ImageData data3 = ImageDataFactory.create(barcodesList.get(j));

					Image img3 = new Image(data3);

					cell3.add(img3.setAutoScale(true));

					table.addCell(cell3);

					table.setBold();
				}
				if (barcodesList.size() > j) {

					Cell cell4 = new Cell();
					ImageData data4 = ImageDataFactory.create(barcodesList.get(j));

					Image img4 = new Image(data4);

					cell4.add(img4.setAutoScale(true));

					table.addCell(cell4);

					table.setBold();
				}
				doc.add(table);

				}
				PDDocument document = PDDocument.load(new File(dest));

			PrintService myPrintService = PrintServiceLookup.lookupDefaultPrintService();

			PrinterJob job = PrinterJob.getPrinterJob();
			job.setPageable(new PDFPageable(document));
			job.setPrintService(myPrintService);
			job.print();

			}

		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS953.name(), EnumTypeForErrorCodes.SCUS953.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}
		return response;
	}
}

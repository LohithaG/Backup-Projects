package com.mbb.mbbplatform.svcs.impl;

import java.awt.Color;
import java.awt.Font;
import java.awt.Graphics2D;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.FileOutputStream;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import javax.imageio.ImageIO;

import org.apache.commons.lang.StringUtils;
import org.json.simple.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.google.zxing.BarcodeFormat;
import com.google.zxing.client.j2se.MatrixToImageWriter;
import com.google.zxing.common.BitMatrix;
import com.google.zxing.qrcode.QRCodeWriter;
import com.mbb.mbbplatform.common.EnumTypeForErrorCodes;
import com.mbb.mbbplatform.domain.Barcode;
import com.mbb.mbbplatform.domain.Inventory;
import com.mbb.mbbplatform.domain.InventoryItem;
import com.mbb.mbbplatform.domain.PoAndBarcode;
import com.mbb.mbbplatform.domain.PoStatus;
import com.mbb.mbbplatform.domain.PoVendor;
import com.mbb.mbbplatform.domain.VendorItemDetails;
import com.mbb.mbbplatform.model.ServiceResponse;
import com.mbb.mbbplatform.model.Utils;
import com.mbb.mbbplatform.repos.BarCodeRepository;
import com.mbb.mbbplatform.repos.InventoryItemRepository;
import com.mbb.mbbplatform.repos.InventoryRepository;
import com.mbb.mbbplatform.repos.PoAndBarcodeRepository;
import com.mbb.mbbplatform.repos.PoStatusRepository;
import com.mbb.mbbplatform.repos.PoVendorRepository;
import com.mbb.mbbplatform.repos.VendorItemDetailsRepository;
import com.mbb.mbbplatform.svcs.BarcodeGenerationService;

@RestController
@SuppressWarnings("unchecked")
public class BarcodeGenerationServiceImpl implements BarcodeGenerationService {
	private static Logger log = LoggerFactory.getLogger(BarcodeGenerationServiceImpl.class);

	@Autowired
	private BarCodeRepository barCodeRepo;

	@Autowired
	private Utils utils;

	@Autowired
	private InventoryRepository inventoryRepo;

	@Autowired
	private InventoryItemRepository inventoryItemRepo;

	@Autowired
	private PoVendorRepository poVendorRepository;

	@Autowired
	private PoAndBarcodeRepository poAndBarcodeRepo;

	@Autowired
	private VendorItemDetailsRepository vendorItemDetailsRepo;

	@Autowired
	private PoStatusRepository poStatusRepo;

	private static final String BARCODESTRING = "barcode";

	private static final String SKUCODESTRING = "skuCode";

	private static final String PONUMBERSTRING = "poNumber";

	private static final String QRCODESWITHOUTID = "qrcodeswithoutid/";

	private static final String QRCODES = "qrcodes/";

	/**
	 * qrcodeSequence service implementation
	 * 
	 * @param skuCode,count
	 * @return ServiceResponse<List<String>>
	 */
	@Override
	public ServiceResponse<List<String>> qrcodeSequence(@PathVariable String skuCode, @PathVariable Long count) {
		log.info("qrcode sequence generation");
		ServiceResponse<List<String>> response = new ServiceResponse<>();
		List<String> barcodesList = new ArrayList<>();
		try {
			for (int i = 0; i < count; i++) {
				Barcode skuExists = barCodeRepo.findBySku(skuCode);
				String barcode;
				Inventory inventory = inventoryRepo.findBySkuCode(skuCode);
				String barcodeId = inventory.getBarcodeId();
				Long seq;

				if (skuExists.getValue() == null) {
					Long value = (long) 0;
					seq = value + 1;
				} else {
					Long value = skuExists.getValue();
					seq = value + 1;
				}
				skuExists.setValue(seq);
				barCodeRepo.save(skuExists);
				String nbr = seq.toString();
				barcode = barcodeId + "-" + StringUtils.leftPad(nbr, 7, "0");

				barcodesList.add(barcode);

				response.setData(barcodesList);
			}

		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS954.name(), EnumTypeForErrorCodes.SCUS954.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}
		return response;
	}

	/**
	 * retreiveQrcodes service implementation
	 * 
	 * @param skuCode,poNumber
	 * @return ServiceResponse<List<String>>
	 */
	@Override
	public ServiceResponse<List<JSONObject>> retreiveQrcodes(
			@PathVariable String poNumber) {
		log.info("reprint qrcodes");
		ServiceResponse<List<JSONObject>> response = new ServiceResponse<>();
		List<String> barcodesList = new ArrayList<>();
		List<String> lastBarcodesList = new ArrayList<>();
		List<JSONObject> jsonList = new ArrayList<>();
		try {
			
			PoVendor poVendor = poVendorRepository.findByPurchaseOrderNumber(poNumber);
			List<VendorItemDetails> vendorItemDetails = vendorItemDetailsRepo.findByPoVendorId(poVendor);
			for (VendorItemDetails itemDetails : vendorItemDetails) {

				
					Inventory inventoryExists = inventoryRepo.findBySkuCode(itemDetails.getSkuCode());
					List<PoAndBarcode> poAndBarcodeList = poAndBarcodeRepo.findBySkuCodeAndPoVendorId(itemDetails.getSkuCode(),
							poVendor);
					for (PoAndBarcode poAndBarcode : poAndBarcodeList) {
						String barcode = poAndBarcode.getBarcode();
						barcodesList.add(barcode);
					}

					Collection<InventoryItem> inventoryItemExists = inventoryItemRepo
							.findByInventoryId(inventoryExists);
					for (InventoryItem items : inventoryItemExists) {
						String existingBarcode = items.getBarcode();
						lastBarcodesList.add(existingBarcode);
					}
					barcodesList.removeAll(lastBarcodesList);
				
			}
			for (String barcode : barcodesList) {
				JSONObject obj = new JSONObject();
				PoAndBarcode poAndBar = poAndBarcodeRepo.findByBarcode(barcode);
				obj.put(BARCODESTRING, barcode);
				obj.put(SKUCODESTRING, poAndBar.getSkuCode());
				obj.put(PONUMBERSTRING, poAndBar.getPoVendorId().getPurchaseOrderNumber());
				jsonList.add(obj);
			}
			response.setData(jsonList);
			qrCodeGenerationForList(jsonList);

		} catch (

		Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS950.name(), EnumTypeForErrorCodes.SCUS950.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}
		return response;
	}
	
	


	/**
	 * qrCodeGeneration service implementation
	 * 
	 * @param barcode
	 * @return ServiceResponse<String>
	 */
	@Override
	public ServiceResponse<String> qrCodeGeneration(@PathVariable String barcode) {
		log.info("qrcode generation");
		ServiceResponse<String> response = new ServiceResponse<>();

		try {
			InventoryItem inventoryItem = inventoryItemRepo.findByBarcode(barcode);
			if (inventoryItem != null) {
				int imageWidth = 150;
				int imageHeight = 100;

				String imageFormat = "png";

				BitMatrix bitMatrix = new QRCodeWriter().encode(barcode, BarcodeFormat.QR_CODE, imageWidth,
						imageHeight);
				MatrixToImageWriter.writeToStream(bitMatrix, imageFormat,
						new FileOutputStream(new File(QRCODESWITHOUTID + barcode + ".png")));

				BufferedImage myPicture = ImageIO.read(new File(QRCODESWITHOUTID + barcode + ".png"));

				Graphics2D g = (Graphics2D) myPicture.getGraphics();
				g.setColor(Color.BLACK);
				g.setFont(new Font("DialogInput", Font.BOLD, 15));
				g.drawString(barcode, 20, 95);

				ImageIO.write(myPicture, "png", new File(QRCODES + barcode + ".png"));

				response.setData("success");
			} else {
				response.setError(EnumTypeForErrorCodes.SCUS816.name(), EnumTypeForErrorCodes.SCUS816.errorMsg());
			}
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS951.name(), EnumTypeForErrorCodes.SCUS951.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}
		return response;
	}

	/**
	 * qrCodeGenerationForList service implementation
	 * 
	 * @RequestBody barcodes
	 * @return ServiceResponse<InventoryItem>
	 */
	@Override
	public ServiceResponse<List<String>> qrCodeGenerationForList(@RequestBody List<JSONObject> barcodes) {
		log.info("qrcode generation for list");

		ServiceResponse<List<String>> response = new ServiceResponse<>();
		List<BufferedImage> qrcodesImagesList = new ArrayList<>();
		try {
			for (JSONObject jsonbarcode : barcodes) {
				String poVendorNo = jsonbarcode.get(PONUMBERSTRING).toString();
				String skuCode = jsonbarcode.get(SKUCODESTRING).toString();
				String barcode = jsonbarcode.get(BARCODESTRING).toString();

				int imageWidth = 150;
				int imageHeight = 100;

				String imageFormat = "png";

				BitMatrix bitMatrix = new QRCodeWriter().encode(barcode, BarcodeFormat.QR_CODE, imageWidth,
						imageHeight);
				String withoutId = QRCODESWITHOUTID + poVendorNo + "/" + skuCode + "/";
				String withId = QRCODES + poVendorNo + "/" + skuCode + "/";

				File newFolder = new File(withoutId);
				newFolder.mkdirs();
				File newFolder1 = new File(withId);
				newFolder1.mkdirs();
				MatrixToImageWriter.writeToStream(bitMatrix, imageFormat,
						new FileOutputStream(new File(withoutId + barcode + ".png")));

				BufferedImage myPicture = ImageIO.read(new File(withoutId + barcode + ".png"));

				Graphics2D g = (Graphics2D) myPicture.getGraphics();
				g.setColor(Color.BLACK);
				g.setFont(new Font("DialogInput", Font.BOLD, 15));
				g.drawString(barcode, 20, 95);

				ImageIO.write(myPicture, "png", new File(withId + barcode + ".png"));

				BufferedImage qrcodePicture = ImageIO.read(new File(withId + barcode + ".png"));

				qrcodesImagesList.add(qrcodePicture);

			}

		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS951.name(), EnumTypeForErrorCodes.SCUS951.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}
		return response;
	}

	@Override
	public ServiceResponse<List<JSONObject>> qrcodeSequenceBasedOnPoNumber(@PathVariable String poNumber) {
		log.info("qrcode sequence generation based on po number");
		ServiceResponse<List<JSONObject>> response = new ServiceResponse<>();
		List<String> barcodesList = new ArrayList<>();
		List<JSONObject> jsonList = new ArrayList<>();
		try {
			List<PoAndBarcode> poAndBarcodesList = new ArrayList<>();
			PoVendor poVendor = poVendorRepository.findByPurchaseOrderNumber(poNumber);
			if( poVendor.getPurchaseInvoiceStatus().getId() == 2) {
			if (poVendor.getStatus().getId() == 5 ) {
				
				List<VendorItemDetails> vendorItemDetails = vendorItemDetailsRepo.findByPoVendorId(poVendor);
				for (VendorItemDetails itemDetails : vendorItemDetails) {

						String skuCode = itemDetails.getSkuCode();
						Long count = itemDetails.getQuantity();
						for (int i = 0; i < count; i++) {
							Barcode skuExists = barCodeRepo.findBySku(skuCode);
							String barcode;
							Inventory inventory = inventoryRepo.findBySkuCode(skuCode);

							String barcodeId = inventory.getBarcodeId();
							Long seq;

							if (skuExists.getValue() == null) {
								Long value = (long) 0;
								seq = value + 1;
							} else {
								Long value = skuExists.getValue();
								seq = value + 1;
							}
							skuExists.setValue(seq);
							barCodeRepo.save(skuExists);
							String nbr = seq.toString();
							barcode = barcodeId + "-" + StringUtils.leftPad(nbr, 7, "0");

							barcodesList.add(barcode);
							PoAndBarcode poAndBarcode = new PoAndBarcode();
							poAndBarcode.setBarcode(barcode);
							poAndBarcode.setPoVendorId(poVendor);
							poAndBarcode.setSkuCode(skuCode);
							poAndBarcodesList.add(poAndBarcode);

						}
						poAndBarcodeRepo.saveAll(poAndBarcodesList);
					}
					poVendor.setEnable(true);
					PoStatus poStatus = poStatusRepo.findById(1l).get();

					poVendor.setStatus(poStatus);
					poVendorRepository.save(poVendor);

					for (String barcode : barcodesList) {
						JSONObject obj = new JSONObject();
						PoAndBarcode poAndBar = poAndBarcodeRepo.findByBarcode(barcode);
						obj.put(BARCODESTRING, barcode);
						obj.put(SKUCODESTRING, poAndBar.getSkuCode());
						obj.put(PONUMBERSTRING, poAndBar.getPoVendorId().getPurchaseOrderNumber());
						jsonList.add(obj);
					}
					response.setData(jsonList);

					qrCodeGenerationForList(jsonList);
				} else {
					response.setError(EnumTypeForErrorCodes.SCUS955.name(), EnumTypeForErrorCodes.SCUS955.errorMsg());

				}
			} else {

				response.setError(EnumTypeForErrorCodes.SCUS956.name(), EnumTypeForErrorCodes.SCUS956.errorMsg());

			}
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS954.name(), EnumTypeForErrorCodes.SCUS954.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}
		return response;
	}

}

package com.mbb.mbbplatform.svcs.impl;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

import javax.mail.internet.MimeMessage;

import org.apache.tomcat.util.http.fileupload.FileUtils;
import org.json.simple.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.itextpdf.text.Chunk;
import com.itextpdf.text.Document;
import com.itextpdf.text.Font;
import com.itextpdf.text.FontFactory;
import com.itextpdf.text.Paragraph;
import com.itextpdf.text.Phrase;
import com.itextpdf.text.pdf.CMYKColor;
import com.itextpdf.text.pdf.PdfPCell;
import com.itextpdf.text.pdf.PdfPTable;
import com.itextpdf.text.pdf.PdfWriter;
import com.mbb.mbbplatform.common.EnumTypeForErrorCodes;
import com.mbb.mbbplatform.domain.Facility;
import com.mbb.mbbplatform.domain.InventoryItem;
import com.mbb.mbbplatform.domain.TransferInventory;
import com.mbb.mbbplatform.domain.User;
import com.mbb.mbbplatform.model.ServiceResponse;
import com.mbb.mbbplatform.model.Utils;
import com.mbb.mbbplatform.repos.FacilityRepository;
import com.mbb.mbbplatform.repos.InventoryItemRepository;
import com.mbb.mbbplatform.repos.TransferInventoryRepository;
import com.mbb.mbbplatform.repos.UserRepository;
import com.mbb.mbbplatform.svcs.TransferDocumentService;

@SuppressWarnings("unchecked")

@RestController
public class TransferDocumentServiceImpl implements TransferDocumentService {
	private static Logger log = LoggerFactory.getLogger(TransferDocumentServiceImpl.class);

	@Autowired
	private JavaMailSender emailSender;

	@Autowired
	private TransferInventoryRepository transferInventoryRepository;

	@Autowired
	private Utils utils;

	@Autowired
	private InventoryItemRepository inventoryItemRepository;

	@Autowired
	private UserServiceImpl userServiceImpl;

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private FacilityRepository facilityRepository;

	@Autowired
	private TransferInventoryServiceImpl transferInventoryServiceImpl;

	@Value("${email}")
	private String replyTo;

	String transferInventoryDocumentPath = "TransferDocuments/";

	String transferInventoryPdfPath = "TransferDocumentPDF/";

	@Override
	public ServiceResponse<String> addTransferDocument(@RequestParam("files") MultipartFile[] files,
			@RequestParam("id") Long id) throws IOException {
		log.info("adding transfer document ");
		ServiceResponse<String> response = new ServiceResponse<>();
		try {
			int count = 0;
			Optional<TransferInventory> existTransferInventory = transferInventoryRepository.findById(id);
			if (existTransferInventory.isPresent()) {

				TransferInventory transferInventory = existTransferInventory.get();

				List<File> listOfFiles = new ArrayList<>();

				String location = transferInventoryDocumentPath + transferInventory.getPackageName();

				File newFolder = new File(location);

				newFolder.mkdirs();

				FileUtils.cleanDirectory(newFolder);

				for (MultipartFile file : files) {

					String originalFilename = file.getOriginalFilename();
					String[] splittedFileName = originalFilename.split("\\.");
					String newFileName = splittedFileName[0] + "_" + (count++) + "." + splittedFileName[1];

					byte[] data = file.getBytes();

					File file1 = new File(location + File.separator + newFileName);

					try (FileOutputStream os = new FileOutputStream(file1)) {

						if ((file.getContentType().substring(6).equals("jpeg"))
								|| (file.getContentType().substring(6).equals("png"))
								|| (file.getContentType().substring(6).equals("jpg"))) {
							os.write(data);
							listOfFiles.add(file1);

							response.setData("Transfer documents uploaded successfully");

						} else {
							response.setError(EnumTypeForErrorCodes.SCUS1207.name(),
									EnumTypeForErrorCodes.SCUS1207.errorMsg());

						}

					}

				}
				sendAttachmentEmail(id);

			} else {
				response.setError(EnumTypeForErrorCodes.SCUS1059.name(), EnumTypeForErrorCodes.SCUS1059.errorMsg());

			}

		}

		catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS1200.name(), EnumTypeForErrorCodes.SCUS1200.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}
		return response;
	}

	@Override
	public ServiceResponse<List<JSONObject>> getTransferDocumentByPackageId(Long id) throws IOException {
		log.info("getting uploaded file");

		ServiceResponse<List<JSONObject>> response = new ServiceResponse<>();

		try {

			Optional<TransferInventory> existTransferInventory1 = transferInventoryRepository.findById(id);

			if (existTransferInventory1.isPresent()) {
				TransferInventory transferInventory1 = existTransferInventory1.get();
				String packageName = transferInventory1.getPackageName();

				List<JSONObject> listOfFiles1 = new ArrayList<>();
				String loc = transferInventoryDocumentPath + packageName;

				File fileExists = new File(loc);

				if (fileExists.exists()) {
					File[] listOfFiles = fileExists.listFiles();
					if (listOfFiles.length > 0) {
						for (File file : listOfFiles) {

							try (FileInputStream fis = new FileInputStream(file);
									ByteArrayOutputStream bos = new ByteArrayOutputStream()) {

								byte[] buf = new byte[fis.available()];
								for (int readNum; (readNum = fis.read(buf)) != -1;) {
									bos.write(buf, 0, readNum);
									JSONObject obj = new JSONObject();
									obj.put("imgageLocations", file);
									obj.put("imageName", file.getName());
									obj.put("binaryData", bos.toByteArray());
									listOfFiles1.add(obj);
								}
							}

						}
						response.setData(listOfFiles1);
					} else {
						response.setError(EnumTypeForErrorCodes.SCUS1204.name(),
								EnumTypeForErrorCodes.SCUS1204.errorMsg());

					}
				} else {
					response.setError(EnumTypeForErrorCodes.SCUS1208.name(), EnumTypeForErrorCodes.SCUS1208.errorMsg());

				}

			} else {
				response.setError(EnumTypeForErrorCodes.SCUS1059.name(), EnumTypeForErrorCodes.SCUS1059.errorMsg());

			}
		} catch (

		Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS1201.name(), EnumTypeForErrorCodes.SCUS1201.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}
		return response;
	}

	@Override
	public ServiceResponse<String> sendAttachmentEmail(Long id) {
		log.info("mail sending");
		ServiceResponse<String> response = new ServiceResponse<>();
		List<String> listOfEmail = new ArrayList<>();

		try {
			Optional<TransferInventory> existTransferInventory = transferInventoryRepository.findById(id);

			if (existTransferInventory.isPresent()) {
				TransferInventory transferInventory = existTransferInventory.get();

				String packageName = transferInventory.getPackageName();
				String packageId = transferInventory.getTransferId();

				String[] splittedPackageName = packageName.split("_", 3);
				String fromLocation = splittedPackageName[0];

				String toLocation = splittedPackageName[1];

				Collection<User> superAdmin = userServiceImpl.getUsersByRoleId(11l).getData();

				Collection<User> allFacilityAdmins = userServiceImpl.getUsersByRoleId(1l).getData();

				Collection<User> allFacilityInventoryManagers = userServiceImpl.getUsersByRoleId(6l).getData();

				Facility fromLocationFacility = facilityRepository.findByFacilityName(fromLocation);

				Facility toLocationFacility = facilityRepository.findByFacilityName(toLocation);
				for (User user : superAdmin) {
					if (user.isNotificationStatus()) {
						listOfEmail.add(user.getEmail());

					}

				}
				for (User user : allFacilityAdmins) {
					if (user.isNotificationStatus() && (user.getFacilityId().equals(fromLocationFacility)
							|| user.getFacilityId().equals(toLocationFacility))) {
						listOfEmail.add(user.getEmail());

					}

				}
				for (User user : allFacilityInventoryManagers) {
					if (user.isNotificationStatus() && (user.getFacilityId().equals(fromLocationFacility)
							|| user.getFacilityId().equals(toLocationFacility))) {
						listOfEmail.add(user.getEmail());

					}

				}

				String[] emails = listOfEmail.toArray(new String[listOfEmail.size()]);

				pdfDocGenerator(id);

				MimeMessage message = emailSender.createMimeMessage();

				boolean multipart = true;
				MimeMessageHelper helper = new MimeMessageHelper(message, multipart);
				helper.setTo(emails);
				helper.setSubject("MBB-Platform Inventory Transfers - Package " + packageId + "  Details " + "("
						+ packageName + ")");

				helper.setText("Please check the attached documents for the Inventory Transfers - package " + packageId
						+ "  with package name " + packageName);

				helper.setReplyTo(replyTo);

				String pictureLocation = transferInventoryDocumentPath + packageName;

				File pictureFile = new File(pictureLocation);

				String pdfLocation = transferInventoryPdfPath + packageName;

				File pdfFile = new File(pdfLocation);

				if (pictureFile.exists() && pdfFile.exists()) {

					File[] pdfFilelist = pdfFile.listFiles();
					if (pdfFilelist.length > 0) {
						for (File pdfFile1 : pdfFilelist) {
							helper.addAttachment("InventoryItem list" + ".pdf", pdfFile1);

						}
					} else {
						response.setError(EnumTypeForErrorCodes.SCUS1206.name(),
								EnumTypeForErrorCodes.SCUS1206.errorMsg());

					}

					File[] listOfFiles = pictureFile.listFiles();

					if (listOfFiles.length > 0) {
						for (File file : listOfFiles) {
							helper.addAttachment(file.getName(), file);
						}
						emailSender.send(message);

						String message1 = "mail sent succesfully";
						response.setData(message1);

					} else {
						response.setError(EnumTypeForErrorCodes.SCUS1206.name(),
								EnumTypeForErrorCodes.SCUS1206.errorMsg());

					}
				} else {
					response.setError(EnumTypeForErrorCodes.SCUS1063.name(), EnumTypeForErrorCodes.SCUS1063.errorMsg());

				}

			}

			else {
				response.setError(EnumTypeForErrorCodes.SCUS1059.name(), EnumTypeForErrorCodes.SCUS1059.errorMsg());

			}

		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS1202.name(), EnumTypeForErrorCodes.SCUS1202.errorMsg());
			log.error(utils.toJson(response.getError()), e);

		}
		return response;

	}

	@Override
	public ServiceResponse<String> pdfDocGenerator(Long id) throws IOException {
		log.info("pdf generator");
		ServiceResponse<String> response = new ServiceResponse<>();
		Font font = FontFactory.getFont(FontFactory.defaultEncoding, 15, Font.BOLD, new CMYKColor(255, 255, 255, 255));

		try {
			Optional<TransferInventory> existTransferInventory = transferInventoryRepository.findById(id);
			if (existTransferInventory.isPresent()) {
				TransferInventory transferInventory = existTransferInventory.get();
				String packageName = transferInventory.getPackageName();
				String transferId = transferInventory.getTransferId();

				Collection<InventoryItem> list = inventoryItemRepository
						.findByTransferInventoryIdAndScanned(transferInventory, true);
				List<InventoryItem> listOfAllQRCodes = new ArrayList<>(list);
				Collections.sort(listOfAllQRCodes);
				

				String location = transferInventoryPdfPath + packageName;
				File folder = new File(location);
				folder.mkdirs();
				File pdfFile = new File(folder + File.separator + transferId + ".pdf");

				JSONObject packageDetailsList1 = transferInventoryServiceImpl.viewPackage(id).getData();

				List<JSONObject> skuDetails = (List<JSONObject>) packageDetailsList1.get("skuDetails");

				Document document = new Document();
				try (FileOutputStream fos = new FileOutputStream(pdfFile);) {
					PdfPTable table = new PdfPTable(5);
					table.setTotalWidth(new float[] { 60, 108,60, 252, 144 });
					String pdfDocumentheading = transferId + " -- Transfer Items List";
					PdfWriter.getInstance(document, fos);

					document.open();
					document.addTitle("MBB TransferDocument");

					Paragraph para = new Paragraph(pdfDocumentheading, font);
					para.setAlignment(Paragraph.ALIGN_CENTER);

					document.add(para);
					document.add(Chunk.NEWLINE);
					PdfPCell cell = new PdfPCell();

					cell = new PdfPCell(new Phrase("S.NO"));
					table.addCell(cell);
					cell = new PdfPCell(new Phrase("SKU Code"));
					table.addCell(cell);
					
					cell = new PdfPCell(new Phrase("Count"));
					table.addCell(cell);

					cell = new PdfPCell(new Phrase("Product Name"));

					table.addCell(cell);

					cell = new PdfPCell(new Phrase("QR-Code"));

					table.addCell(cell);
					int j = 1;

					for (JSONObject jsonObject : skuDetails) {
						Long colsapn = (Long) jsonObject.get("available");

						int i = colsapn.intValue();

						PdfPCell cell1 = new PdfPCell(new Phrase(Integer.toString(j)));
						cell1.setRowspan(i);
						table.addCell(cell1);

						PdfPCell cell2 = new PdfPCell(new Phrase((String) jsonObject.get("skucode")));

						cell2.setRowspan(i);
						table.addCell(cell2);
						
						PdfPCell cell3 = new PdfPCell(new Phrase((String) jsonObject.get("count").toString()));

						cell3.setRowspan(i);
						table.addCell(cell3);

						PdfPCell cell4 = new PdfPCell(new Phrase((String) jsonObject.get("productName")));

						cell4.setRowspan(i);
						table.addCell(cell4);
						int count = 0;
						PdfPCell cell5;
						Loop: for (InventoryItem inventoryItem : listOfAllQRCodes) {
							count++;
							if (jsonObject.get("skucode").equals(inventoryItem.getInventoryId().getSkuCode())) {

								 cell5 = new PdfPCell(new Phrase(inventoryItem.getBarcode()));

								table.addCell(cell5);}
//							} else if (count == listOfAllQRCodes.size()) {
//								 cell5 = new PdfPCell(new Phrase("Pending"));
//
//								table.addCell(cell5);
//								break Loop;
//							}

						}

						j++;

					}
					document.add(table);
					document.close();
					response.setData("pdf");

				}

			} else {
				response.setError(EnumTypeForErrorCodes.SCUS1059.name(), EnumTypeForErrorCodes.SCUS1059.errorMsg());

			}

		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS1203.name(), EnumTypeForErrorCodes.SCUS1203.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}
		return response;

	}

	@Override
	public ServiceResponse<String> sendingMailForTransferInventory(Long userId, Long id) {
		log.info("sending Mail For Transfer Inventory");
		ServiceResponse<String> response = new ServiceResponse<>();
		try {
			Optional<User> findedUser = userRepository.findById(userId);

			if (findedUser.isPresent()) {

				Optional<TransferInventory> existTransferInventory = transferInventoryRepository.findById(id);
				if (existTransferInventory.isPresent()) {
					TransferInventory transferInventory = existTransferInventory.get();
					String packageName = transferInventory.getPackageName();
					String packageId = transferInventory.getTransferId();
					pdfDocGenerator(id);
					MimeMessage message = emailSender.createMimeMessage();

					boolean multipart = true;

					MimeMessageHelper helper = new MimeMessageHelper(message, multipart);

					helper.setTo(findedUser.get().getEmail());

					helper.setSubject("MBB-Platform Inventory Transfers - Package " + packageId + "  Details " + "("
							+ packageName + ")");

					helper.setText("Please check the attached documents for the Inventory Transfers - package "
							+ packageId + "  with package name " + packageName);

					helper.setReplyTo((replyTo));

					String pdf = transferInventoryPdfPath + packageName;

					File pdfFile = new File(pdf);

					if (pdfFile.exists()) {

						File[] pdfFilelist = pdfFile.listFiles();
						if (pdfFilelist.length > 0) {
							for (File pdfFile1 : pdfFilelist) {
								helper.addAttachment("InventoryItem list" + ".pdf", pdfFile1);

							}
						} else {
							response.setError(EnumTypeForErrorCodes.SCUS1206.name(),
									EnumTypeForErrorCodes.SCUS1206.errorMsg());

						}
						emailSender.send(message);

						String message1 = "mail sent succesfully";
						response.setData(message1);

					} else {
						response.setError(EnumTypeForErrorCodes.SCUS1059.name(),
								EnumTypeForErrorCodes.SCUS1059.errorMsg());

					}

				}

			} else {
				response.setError(EnumTypeForErrorCodes.SCUS1211.name(), EnumTypeForErrorCodes.SCUS1211.errorMsg());

			}

		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS1209.name(), EnumTypeForErrorCodes.SCUS1209.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}
		return response;

	}
}

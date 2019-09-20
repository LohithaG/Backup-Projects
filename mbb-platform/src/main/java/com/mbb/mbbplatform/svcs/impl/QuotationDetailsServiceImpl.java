package com.mbb.mbbplatform.svcs.impl;

import java.io.File;
import java.io.FileOutputStream;
import java.text.DecimalFormat;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Optional;

import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMessage.RecipientType;
import javax.validation.Valid;

import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.web.bind.annotation.RestController;

import com.itextpdf.text.BaseColor;
import com.itextpdf.text.Chunk;
import com.itextpdf.text.Document;
import com.itextpdf.text.Element;
import com.itextpdf.text.Font;
import com.itextpdf.text.FontFactory;
import com.itextpdf.text.Paragraph;
import com.itextpdf.text.Phrase;
import com.itextpdf.text.pdf.CMYKColor;
import com.itextpdf.text.pdf.PdfPCell;
import com.itextpdf.text.pdf.PdfPTable;
import com.itextpdf.text.pdf.PdfWriter;
import com.mbb.mbbplatform.common.EnumTypeForErrorCodes;
import com.mbb.mbbplatform.domain.CustomerDetails;
import com.mbb.mbbplatform.domain.QuotationDetails;
import com.mbb.mbbplatform.domain.ServicingProduct;
import com.mbb.mbbplatform.domain.SpareParts;
import com.mbb.mbbplatform.domain.User;
import com.mbb.mbbplatform.model.ServiceResponse;
import com.mbb.mbbplatform.model.Utils;
import com.mbb.mbbplatform.repos.CustomerDetailsRepository;
import com.mbb.mbbplatform.repos.PaymentModeRepository;
import com.mbb.mbbplatform.repos.QuotationDetailsRepository;
import com.mbb.mbbplatform.repos.ServicingProductRepository;
import com.mbb.mbbplatform.repos.ServicingStatusesRepository;
import com.mbb.mbbplatform.repos.SparePartsRepository;
import com.mbb.mbbplatform.svcs.QuotationDetailsService;

@RestController

public class QuotationDetailsServiceImpl implements QuotationDetailsService {
	private static Logger log = LoggerFactory.getLogger(QuotationDetailsServiceImpl.class);

	@Autowired
	private Utils utils;

	@Autowired
	private JavaMailSender emailSender;

	@Autowired
	private UserServiceImpl userServiceImpl;

	@Autowired
	private PaymentModeRepository paymentModeRepository;
	@Autowired
	private ServicingProductRepository productServicingRepository;
	@Autowired
	private SparePartsRepository sparePartsRepository;
	@Autowired
	private ServicingStatusesRepository servicingStatusesRepository;

	@Autowired
	private QuotationDetailsRepository quotationDetailsRepository;
	@Autowired
	private CustomerDetailsRepository customerDetailsRepository;
	String quotationPdfPath = "quotationDetails/";

	@Value("${email}")
	private String replyTo;

	/**
	 * add Quotation Details service implementation
	 * 
	 * @param quotationDetails
	 * @return ServiceResponse<QuotationDetails>
	 */
	@Override
	public ServiceResponse<QuotationDetails> addQuotaionDetails(@Valid QuotationDetails quotationDetails,
			Long serviceId) {
		log.info("adding quotaion for servicing product");
		ServiceResponse<QuotationDetails> response = new ServiceResponse<>();
		try {
			QuotationDetails quotationDetailsExist = quotationDetailsRepository.findByServicingProductId(serviceId);
			if (quotationDetailsExist == null) {
				Double cgst = 0.00;
				Double igst = 0.00;
				Double sgst = 0.00;
				Double utgst = 0.00;
				Double otherCharges = 0.00;
				Double serviceCharges = 0.00;
				Double courierCharges = 0.00;
				if (quotationDetails.getCgst() != null) {
					cgst = cgst + quotationDetails.getCgst();
				}
				if (quotationDetails.getIgst() != null) {
					igst = igst + quotationDetails.getIgst();
				}
				if (quotationDetails.getSgst() != null) {
					sgst = sgst + quotationDetails.getSgst();
				}
				if (quotationDetails.getServiceCharges() != null) {
					serviceCharges = serviceCharges + quotationDetails.getServiceCharges();
				}
				if (quotationDetails.getUtgst() != null) {
					utgst = utgst + quotationDetails.getUtgst();
				}
				if (quotationDetails.getCourierCharges() != null) {
					courierCharges = courierCharges + quotationDetails.getCourierCharges();
				}
				if (quotationDetails.getOtherCharges() != null) {
					otherCharges = otherCharges + quotationDetails.getOtherCharges();
				}
				Double total = cgst + igst + sgst + serviceCharges + utgst + courierCharges + otherCharges;
				quotationDetails.setPaymentModeId(quotationDetails.getPaymentModeId());
				DecimalFormat twodigitsAfterDecimal = new DecimalFormat("##.00");
				quotationDetails.setTotalCharges(Double.parseDouble(twodigitsAfterDecimal.format(total)));
				ServicingProduct servicingProduct = productServicingRepository.findById(serviceId).get();
				servicingProduct.setServicingStatusesId(servicingStatusesRepository.getOne(2l));
				quotationDetails.setServicingProduct(servicingProduct);
				QuotationDetails savedQuotationDetails = quotationDetailsRepository.save(quotationDetails);
				response.setData(savedQuotationDetails);
			} else {
				response.setError(EnumTypeForErrorCodes.SCUS2102.name(), EnumTypeForErrorCodes.SCUS2102.errorMsg());

			}
		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS2100.name(), EnumTypeForErrorCodes.SCUS2100.errorMsg());

			log.error(utils.toJson(response.getError()), exception);
		}
		return response;
	}

	/**
	 * get All Quotation Details service implementation
	 * 
	 * @return ServiceResponse<List<QuotationDetails>>
	 */
	@Override
	public ServiceResponse<List<QuotationDetails>> getAll() {
		log.info("get all  product for servicing ");
		ServiceResponse<List<QuotationDetails>> response = new ServiceResponse<>();
		try {
			List<QuotationDetails> servicingProduct = quotationDetailsRepository.findAll();
			response.setData(servicingProduct);
		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS2101.name(), EnumTypeForErrorCodes.SCUS2101.errorMsg());
			log.error(utils.toJson(response.getError()), exception);
		}
		return response;

	}

	@Override
	public ServiceResponse<QuotationDetails> addPaymentDetails(@Valid String paymentDetails, Long id) {
		log.info("add Payment Details");
		ServiceResponse<QuotationDetails> response = new ServiceResponse<>();
		try {
			org.json.JSONObject jsonObject = new org.json.JSONObject(paymentDetails);
			QuotationDetails quotationDetailsObject = quotationDetailsRepository.findById(id).get();
			if (quotationDetailsObject != null) {
				quotationDetailsObject.setComments(jsonObject.getString("comments"));
				JSONObject p = jsonObject.getJSONObject("paymentModeId");
				quotationDetailsObject.setPaymentModeId(paymentModeRepository.findById(p.getLong("id")).get());
				quotationDetailsObject.setPaymentStatus(true);
				quotationDetailsObject
						.setTransactionReferenceNumber(jsonObject.getString("transactionReferenceNumber"));
				LocalDate date = LocalDate.parse(jsonObject.getString("paymentDate") + "");
				quotationDetailsObject.setDate(date);

			} else {
				response.setError(EnumTypeForErrorCodes.SCUS2116.name(), EnumTypeForErrorCodes.SCUS2116.errorMsg());

			}
			QuotationDetails savedQuotationDetails = quotationDetailsRepository.save(quotationDetailsObject);
			response.setData(savedQuotationDetails);

		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS2117.name(), EnumTypeForErrorCodes.SCUS2117.errorMsg());
			log.error(utils.toJson(response.getError()), exception);
		}
		return response;

	}

	@Override
	public ServiceResponse<QuotationDetails> updatePaymentDetails(@Valid String paymentDetails, Long id) {
		log.info("update Payment Details");
		ServiceResponse<QuotationDetails> response = new ServiceResponse<>();
		try {
			org.json.JSONObject jsonObject = new org.json.JSONObject(paymentDetails);
			QuotationDetails quotationDetailsObject = quotationDetailsRepository.findById(id).get();
			if (quotationDetailsObject != null && id.equals(quotationDetailsObject.getId())) {
				quotationDetailsObject.setComments(jsonObject.getString("comments"));
				JSONObject p = jsonObject.getJSONObject("paymentModeId");
				quotationDetailsObject.setPaymentModeId(paymentModeRepository.findById(p.getLong("id")).get());
				quotationDetailsObject.setPaymentStatus(true);
				quotationDetailsObject
						.setTransactionReferenceNumber(jsonObject.getString("transactionReferenceNumber"));
				LocalDate date = LocalDate.parse(jsonObject.getString("paymentDate") + "");
				quotationDetailsObject.setDate(date);

			} else {
				response.setError(EnumTypeForErrorCodes.SCUS2116.name(), EnumTypeForErrorCodes.SCUS2116.errorMsg());

			}
			QuotationDetails savedQuotationDetails = quotationDetailsRepository.save(quotationDetailsObject);
			response.setData(savedQuotationDetails);

		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS2200.name(), EnumTypeForErrorCodes.SCUS2200.errorMsg());
			log.error(utils.toJson(response.getError()), exception);
		}
		return response;

	}

	@Override
	public ServiceResponse<QuotationDetails> addInvoiceDetails(String invoice, Long id) {
		log.info("add Invoice Details");
		ServiceResponse<QuotationDetails> response = new ServiceResponse<>();
		try {
			org.json.JSONObject jsonObject = new org.json.JSONObject(invoice);
			QuotationDetails quotationDetailsObject = quotationDetailsRepository.findById(id).get();
			if (quotationDetailsObject != null) {
				quotationDetailsObject
						.setUnicommerceReferenceNumber(jsonObject.getString("unicommerceReferenceNumber"));

				Long serviceId = quotationDetailsObject.getServicingProduct().getId();
				ServicingProduct productServicing = productServicingRepository.findById(serviceId).get();
				if (productServicing != null) {
					productServicing.setServicingStatusesId(servicingStatusesRepository.getOne(5l));
					productServicingRepository.save(productServicing);

				}
			} else {
				response.setError(EnumTypeForErrorCodes.SCUS2116.name(), EnumTypeForErrorCodes.SCUS2116.errorMsg());

			}
			QuotationDetails savedQuotationDetails = quotationDetailsRepository.save(quotationDetailsObject);
			response.setData(savedQuotationDetails);

		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS2118.name(), EnumTypeForErrorCodes.SCUS2118.errorMsg());
			log.error(utils.toJson(response.getError()), exception);
		}
		return response;

	}

	@Override
	public ServiceResponse<QuotationDetails> updateInvoiceDetails(String invoice, Long id) {
		log.info("add Invoice Details");
		ServiceResponse<QuotationDetails> response = new ServiceResponse<>();
		try {
			org.json.JSONObject jsonObject = new org.json.JSONObject(invoice);
			QuotationDetails quotationDetailsObject = quotationDetailsRepository.findById(id).get();
			if (quotationDetailsObject != null) {
				quotationDetailsObject
						.setUnicommerceReferenceNumber(jsonObject.getString("unicommerceReferenceNumber"));

				Long serviceId = quotationDetailsObject.getServicingProduct().getId();
				ServicingProduct productServicing = productServicingRepository.findById(serviceId).get();
				if (productServicing != null) {
					productServicing.setServicingStatusesId(servicingStatusesRepository.getOne(5l));
					productServicingRepository.save(productServicing);

				}
			} else {
				response.setError(EnumTypeForErrorCodes.SCUS2116.name(), EnumTypeForErrorCodes.SCUS2116.errorMsg());

			}
			QuotationDetails savedQuotationDetails = quotationDetailsRepository.save(quotationDetailsObject);
			response.setData(savedQuotationDetails);

		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS2201.name(), EnumTypeForErrorCodes.SCUS2201.errorMsg());
			log.error(utils.toJson(response.getError()), exception);
		}
		return response;

	}

	@Override
	public ServiceResponse<QuotationDetails> updateQuotationDetails(@Valid QuotationDetails quotationDetails,
			@Valid Long id) {
		log.info("updating Quotation Details");
		ServiceResponse<QuotationDetails> response = new ServiceResponse<>();
		try {
			QuotationDetails quotationDetailsObject = quotationDetailsRepository.findById(id).get();
			if (quotationDetailsObject != null && quotationDetailsObject.getId().equals(id)) {
				Double cgst = 0.00;
				Double igst = 0.00;
				Double sgst = 0.00;
				Double utgst = 0.00;
				Double otherCharges = 0.00;
				Double serviceCharges = 0.00;
				Double courierCharges = 0.00;
				if (quotationDetails.getCgst() != null) {
					cgst = cgst + quotationDetails.getCgst();
				}
				if (quotationDetails.getIgst() != null) {
					igst = igst + quotationDetails.getIgst();
				}
				if (quotationDetails.getSgst() != null) {
					sgst = sgst + quotationDetails.getSgst();
				}
				if (quotationDetails.getServiceCharges() != null) {
					serviceCharges = serviceCharges + quotationDetails.getServiceCharges();
				}
				if (quotationDetails.getUtgst() != null) {
					utgst = utgst + quotationDetails.getUtgst();
				}
				if (quotationDetails.getCourierCharges() != null) {
					courierCharges = courierCharges + quotationDetails.getCourierCharges();
				}
				if (quotationDetails.getOtherCharges() != null) {
					otherCharges = otherCharges + quotationDetails.getOtherCharges();
				}
				Double total = cgst + igst + sgst + serviceCharges + utgst + courierCharges + otherCharges;
				DecimalFormat twodigitsAfterDecimal = new DecimalFormat("##.00");
				quotationDetailsObject.setTotalCharges(Double.parseDouble(twodigitsAfterDecimal.format(total)));
				quotationDetailsObject
						.setCgst(Double.parseDouble(twodigitsAfterDecimal.format(quotationDetails.getCgst())));
				quotationDetailsObject.setCourierCharges(quotationDetails.getCourierCharges());
				quotationDetailsObject.setIgst(quotationDetails.getIgst());
				quotationDetailsObject.setSgst(quotationDetails.getSgst());
				quotationDetailsObject.setUtgst(quotationDetails.getUtgst());
				quotationDetailsObject.setOtherCharges(quotationDetails.getOtherCharges());
				quotationDetailsObject.setServiceCharges(quotationDetails.getServiceCharges());

				QuotationDetails savedQuotationDetails = quotationDetailsRepository.save(quotationDetailsObject);
				response.setData(savedQuotationDetails);
			} else {
				response.setError(EnumTypeForErrorCodes.SCUS2110.name(), EnumTypeForErrorCodes.SCUS2110.errorMsg());

			}
		} catch (

		Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS2111.name(), EnumTypeForErrorCodes.SCUS2111.errorMsg());

			log.error(utils.toJson(response.getError()), e);
		}
		return response;

	}

	@Override
	public ServiceResponse<String> pdfGenerationForQuotationDetails(Long id) {
		log.info("pdf Generation For Quotation Details ");
		ServiceResponse<String> response = new ServiceResponse<>();
		Font blueFont = FontFactory.getFont(FontFactory.COURIER, 15, Font.BOLD, new CMYKColor(255, 255, 255, 255));
		try {

			QuotationDetails quotationDetailsObject = quotationDetailsRepository.findById(id).get();

			if (quotationDetailsObject != null) {
				Optional<ServicingProduct> servicingProduct = productServicingRepository
						.findById(quotationDetailsObject.getServicingProduct().getId());
				CustomerDetails customerDetails = null;
				if (servicingProduct.isPresent()) {
					customerDetails = servicingProduct.get().getCustomerDetailsId();
				}
				List<SpareParts> listSpareParts = sparePartsRepository.findByQuotationDetailsId(quotationDetailsObject);
				String location = "quotationDetails/";
				File folder = new File(location);
				folder.mkdirs();
				File pdfFile = new File(
						folder + File.separator + quotationDetailsObject.getServicingProduct().getServiceId() + ".pdf");

				try (FileOutputStream fos = new FileOutputStream(pdfFile);) {

					PdfPTable table = new PdfPTable(3);
					table.setTotalWidth(10f);

					table.getDefaultCell().setHorizontalAlignment(Element.ALIGN_LEFT);
					table.setTotalWidth(new float[] { 5, 30, 10 });
					Document document = new Document();
					String pdfDocumentheading = "QUOTATION";
					String pdfDocumentheading2 = "Spare Parts Charges";
					Font headFont = FontFactory.getFont(FontFactory.HELVETICA_BOLD);

					PdfWriter.getInstance(document, fos);

					document.open();

					Paragraph address = new Paragraph();
					address.add(new Chunk("GVS Enterprises Pvt.Ltd\n",
							FontFactory.getFont(FontFactory.HELVETICA_BOLD, 10)));
					address.add(new Chunk(
							"Plot no 40, Ganga Parvathi Complex, Image Gardens Road\nHyderabad, Telangana, India, 500081",
							FontFactory.getFont(FontFactory.HELVETICA, 10)));
					address.setAlignment(Element.ALIGN_CENTER);
					document.add(address);

					LocalDate today = LocalDate.now();
					Paragraph date = new Paragraph();

					SimpleDateFormat localDateFormat = new SimpleDateFormat("yyyy-MM-dd");

					SimpleDateFormat indianFormat = new SimpleDateFormat("dd-MM-yyyy");
					String formattedDate = indianFormat.format(localDateFormat.parse(today + ""));

					date.add(new Chunk("Date: " + formattedDate, FontFactory.getFont(FontFactory.HELVETICA, 10)));
					date.setAlignment(Element.ALIGN_RIGHT);
					document.add(date);

					Paragraph toAddress = new Paragraph();
					toAddress.add(new Chunk(
							"To, \n" + customerDetails.getName() + "\n" + customerDetails.getAddress() + "\n"
									+ customerDetails.getState() + " " + customerDetails.getPincode() + "\n"
									+ customerDetails.getEmailId() + "\n" + customerDetails.getPhone(),
							FontFactory.getFont(FontFactory.HELVETICA, 10)));

					toAddress.setAlignment(Element.ALIGN_LEFT);
					document.add(toAddress);

					Paragraph para = new Paragraph(pdfDocumentheading, blueFont);
					para.setAlignment(Paragraph.ALIGN_CENTER);
					document.add(para);

					table.spacingBefore();
					document.add(Chunk.NEWLINE);
					PdfPCell cell = new PdfPCell();
					cell = new PdfPCell(new Phrase("S No", headFont));
					cell.setVerticalAlignment(Element.ALIGN_CENTER);
					cell.setBackgroundColor(BaseColor.LIGHT_GRAY);
					table.addCell(cell);

					cell = new PdfPCell(new Phrase("Charges Type", headFont));
					cell.setVerticalAlignment(Element.ALIGN_CENTER);
					cell.setBackgroundColor(BaseColor.LIGHT_GRAY);
					table.addCell(cell);

					cell = new PdfPCell(new Phrase("Price(INR)", headFont));
					cell.setVerticalAlignment(Element.ALIGN_RIGHT);
					cell.setBackgroundColor(BaseColor.LIGHT_GRAY);
					table.addCell(cell);
					Double price = 0.00;
					DecimalFormat twodigitsAfterDecimal = new DecimalFormat("##.00");
					DecimalFormat singledigitsAfterDecimal = new DecimalFormat("#.");

					Double cgst = Double.parseDouble(String.format("%.2f", quotationDetailsObject.getCgst()));
					Double igst = Double.parseDouble(twodigitsAfterDecimal.format(quotationDetailsObject.getIgst()));
					Double sgst = Double.parseDouble(singledigitsAfterDecimal.format(quotationDetailsObject.getSgst()));
					Double serviceCharges = Double
							.parseDouble(twodigitsAfterDecimal.format(quotationDetailsObject.getServiceCharges()));
					Double utgst = Double.parseDouble(twodigitsAfterDecimal.format(quotationDetailsObject.getUtgst()));
					Double courierCharges = Double
							.parseDouble(twodigitsAfterDecimal.format(quotationDetailsObject.getCourierCharges()));
					Double otherCharges = Double
							.parseDouble(twodigitsAfterDecimal.format(quotationDetailsObject.getOtherCharges()));
					Double total = cgst + igst + sgst + serviceCharges + utgst + courierCharges + otherCharges;
					document.addTitle(" Quotation Details Details" + "_" + id);
					int sNo = 1;

					for (int i = 0, j = 8; i < j; i++) {

						switch (i) {
						case 6:
							table.addCell(sNo + "");
							sNo++;
							table.addCell("IGST");
							table.addCell(quotationDetailsObject.getIgst() + "");
							break;
						case 4:
							table.addCell(sNo + "");
							sNo++;
							table.addCell("CGST");
							table.addCell(quotationDetailsObject.getCgst() + "");
							break;
						case 3:
							table.addCell(sNo + "");
							sNo++;
							table.addCell("SGST");
							table.addCell(quotationDetailsObject.getSgst() + "");
							break;
						case 2:
							table.addCell(sNo + "");
							sNo++;
							table.addCell("Other Charges");
							table.addCell(quotationDetailsObject.getOtherCharges() + "");
							break;
						case 1:
							table.addCell(sNo + "");
							sNo++;
							table.addCell("Courier Charges");
							table.addCell(quotationDetailsObject.getCourierCharges() + "");
							break;
						case 5:
							table.addCell(sNo + "");
							sNo++;
							table.addCell("UTGST");
							table.addCell(quotationDetailsObject.getUtgst() + "");
							break;
						case 0:
							table.addCell(sNo + "");
							sNo++;
							table.addCell("Service Charges");
							table.addCell(quotationDetailsObject.getServiceCharges() + "");
							break;
						default:
							cell = new PdfPCell(new Phrase("Sub Total", headFont));
							cell.setHorizontalAlignment(2);
							cell.setColspan(2);
							table.addCell(cell);
							table.addCell(twodigitsAfterDecimal.format(total));
							break;

						}
					}
					document.add(table);
					if (!listSpareParts.isEmpty()) {
						Paragraph paragraph = new Paragraph(pdfDocumentheading2, blueFont);
						paragraph.setAlignment(Paragraph.ALIGN_CENTER);
						document.add(paragraph);
						document.add(new Paragraph(" "));

						PdfPTable table2 = new PdfPTable(3);

						table2.spacingBefore();

						table2.getDefaultCell().setHorizontalAlignment(Element.ALIGN_LEFT);
						table2.setTotalWidth(new float[] { 20, 80, 40 });
						PdfPCell cellOfSparePartTAble = new PdfPCell();

						cellOfSparePartTAble = new PdfPCell(new Phrase("S No", headFont));
						cellOfSparePartTAble.setBackgroundColor(BaseColor.LIGHT_GRAY);
						cellOfSparePartTAble.setVerticalAlignment(Element.ALIGN_MIDDLE);
						table2.addCell(cellOfSparePartTAble);

						cellOfSparePartTAble = new PdfPCell(new Phrase("Product Name", headFont));
						cellOfSparePartTAble.setBackgroundColor(BaseColor.LIGHT_GRAY);
						cellOfSparePartTAble.setVerticalAlignment(Element.ALIGN_MIDDLE);
						table2.addCell(cellOfSparePartTAble);

						cellOfSparePartTAble = new PdfPCell(new Phrase("Price(INR)", headFont));
						cellOfSparePartTAble.setVerticalAlignment(Element.ALIGN_RIGHT);
						cellOfSparePartTAble.setBackgroundColor(BaseColor.LIGHT_GRAY);
						table2.addCell(cellOfSparePartTAble);

						int sno = 1;
						if (!listSpareParts.isEmpty()) {
							for (SpareParts spareParts : listSpareParts) {
								cellOfSparePartTAble.setVerticalAlignment(2);

								table2.addCell(sno + "");
								table2.addCell(spareParts.getProductName());
								if (spareParts.getPrice() != null) {
									price = price + spareParts.getPrice();
									table2.addCell(spareParts.getPrice().toString());
								}
								sno++;

							}
							cell = new PdfPCell(new Phrase("Sub Total", headFont));
							cell.setHorizontalAlignment(2);
							cell.setColspan(2);
							table2.addCell(cell);
							table2.addCell(twodigitsAfterDecimal.format(price));

						} else {
							response.setError(EnumTypeForErrorCodes.SCUS2051.name(),
									EnumTypeForErrorCodes.SCUS2051.errorMsg());

						}
						document.add(table2);

					}
					Paragraph para3 = new Paragraph("Total  :  " + twodigitsAfterDecimal.format(price + total),
							blueFont);
					para3.setAlignment(Paragraph.ALIGN_CENTER);

					document.add(para3);

					Paragraph text = new Paragraph();
					text.add(new Chunk("	  "
							+ "Kindly approve the quotation & send the total charges amount  to the below mentioned account.",
							FontFactory.getFont(FontFactory.HELVETICA, 10)));

					document.add(text);

					Paragraph bankdetails = new Paragraph();
					bankdetails
							.add(new Chunk("\nBANK DETAILS:\n", FontFactory.getFont(FontFactory.HELVETICA_BOLD, 10)));
					bankdetails.add(
							new Chunk("GVS Enterprises Pvt Ltd\nHDFC A/C: 5020010282868\n IFSC Code: HDFC0001626\n",
									FontFactory.getFont(FontFactory.HELVETICA, 10)));
					bankdetails.add(
							new Chunk("Branch: Motinagar\nHyderabad", FontFactory.getFont(FontFactory.HELVETICA, 10)));
					bankdetails.setAlignment(Element.ALIGN_LEFT);
					document.add(bankdetails);

					Paragraph note = new Paragraph();

					note.add(new Chunk("\n\nNote: ", FontFactory.getFont(FontFactory.HELVETICA_BOLD, 10)));
					note.add(new Chunk("We will dispatch the product after payment confirmation.\n",
							FontFactory.getFont(FontFactory.HELVETICA, 10)));
					note.setAlignment(Element.ALIGN_LEFT);
					document.add(note);

					Paragraph thanksAndRegards = new Paragraph();
					thanksAndRegards.add(new Chunk("Thanks & Regards, \nGVS Enterprises Pvt.ltd",
							FontFactory.getFont(FontFactory.HELVETICA, 10)));
					thanksAndRegards.setAlignment(Element.ALIGN_RIGHT);
					document.add(thanksAndRegards);

					document.close();
					response.setData("pdf");

				}
			} else {
				response.setError(EnumTypeForErrorCodes.SCUS2110.name(), EnumTypeForErrorCodes.SCUS2110.errorMsg());

			}

		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS2114.name(), EnumTypeForErrorCodes.SCUS2114.errorMsg());

			log.error(utils.toJson(response.getError()), exception);
		}
		return response;

	}

	@Override
	public ServiceResponse<String> sendingMailRegardingQuotationDetails(Long id) {
		log.info("Sending mail Regarding Quotation Details");
		ServiceResponse<String> response = new ServiceResponse<>();
		List<String> list = new ArrayList();
		String[] emails;
		try {
			ServicingProduct servicingProduct = productServicingRepository.findById(id).get();

			if (servicingProduct != null) {

				Optional<CustomerDetails> customerDetails = customerDetailsRepository
						.findById(servicingProduct.getCustomerDetailsId().getId());
				QuotationDetails quotationDetailsExist = quotationDetailsRepository
						.findByServicingProductId(servicingProduct.getId());

				if (customerDetails.isPresent() && quotationDetailsExist != null) {

					String name = customerDetails.get().getName();
					MimeMessage message = emailSender.createMimeMessage();
					pdfGenerationForQuotationDetails(quotationDetailsExist.getId());
					boolean multipart = true;

					MimeMessageHelper helper = new MimeMessageHelper(message, multipart);
					Collection<User> listServiceManager = userServiceImpl.getUsersByRole("SERVICE MANAGER").getData();
					Collection<User> listAccountants = userServiceImpl.getUsersByRole("ACCOUNTANT").getData();
					for (User user : listAccountants) {
						if (user.isNotificationStatus()) {
							list.add(user.getEmail());
						}
					}
					for (User user : listServiceManager) {
						if (user.isNotificationStatus()) {
							list.add(user.getEmail());
						}
					}

					emails = list.toArray(new String[list.size()]);

					helper.setTo(customerDetails.get().getEmailId());
					for (String email : emails) {
						message.addRecipient(RecipientType.BCC, new InternetAddress(email));
					}
					helper.setSubject("Medicalbulkbuy - Service Charges Quotation");
					helper.setText("Hi " + name + ","
							+ "\n Here is the quotation attached for the product service charges. Please check once and send approval for us to proceed.");

					helper.setReplyTo((replyTo));

					String pdf = quotationPdfPath + servicingProduct.getServiceId() + ".pdf";

					File pdfFile = new File(pdf);

					if (pdfFile.exists()) {

						helper.addAttachment(servicingProduct.getServiceId() + ".pdf", pdfFile);

					} else {
						response.setError(EnumTypeForErrorCodes.SCUS1206.name(),
								EnumTypeForErrorCodes.SCUS1206.errorMsg());

					}
					emailSender.send(message);

					servicingProduct.setServicingStatusesId(servicingStatusesRepository.getOne(3l));
					quotationDetailsExist.setServicingProduct(servicingProduct);
					quotationDetailsExist.setEmailStatus(true);
					quotationDetailsRepository.save(quotationDetailsExist);

					String message1 = "mail sent succesfully";
					response.setData(message1);

				}

			}

			else {
				response.setError(EnumTypeForErrorCodes.SCUS2002.name(), EnumTypeForErrorCodes.SCUS2002.errorMsg());

			}

		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS1209.name(), EnumTypeForErrorCodes.SCUS1209.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}
		return response;

	}

}

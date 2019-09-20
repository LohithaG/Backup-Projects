package com.mbb.mbbplatform.svcs.impl;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.time.LocalDate;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Optional;

import javax.mail.internet.MimeMessage;
import javax.validation.Valid;
import javax.validation.constraints.NotNull;

import org.json.simple.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.Context;

import com.mbb.mbbplatform.common.EnumTypeForErrorCodes;
import com.mbb.mbbplatform.domain.Channel;
import com.mbb.mbbplatform.domain.Dispatch;
import com.mbb.mbbplatform.domain.DispatchPaymentDocuments;
import com.mbb.mbbplatform.domain.Facility;
import com.mbb.mbbplatform.domain.Inventory;
import com.mbb.mbbplatform.domain.InventoryAccessoryChecklist;
import com.mbb.mbbplatform.domain.InventoryItem;
import com.mbb.mbbplatform.domain.InventoryItemChecklist;
import com.mbb.mbbplatform.domain.InvoiceDetails;
import com.mbb.mbbplatform.domain.PaymentModes;
import com.mbb.mbbplatform.domain.RefundDetails;
import com.mbb.mbbplatform.domain.ReturnDetails;
import com.mbb.mbbplatform.domain.User;
import com.mbb.mbbplatform.model.ServiceResponse;
import com.mbb.mbbplatform.model.Utils;
import com.mbb.mbbplatform.repos.ChannelRepository;
import com.mbb.mbbplatform.repos.DispatchPaymentDocumentsRepository;
import com.mbb.mbbplatform.repos.DispatchRepository;
import com.mbb.mbbplatform.repos.FacilityRepository;
import com.mbb.mbbplatform.repos.InventoryItemAccessoriesRepository;
import com.mbb.mbbplatform.repos.InventoryItemChecklistRepository;
import com.mbb.mbbplatform.repos.InventoryItemRepository;
import com.mbb.mbbplatform.repos.InventoryRepository;
import com.mbb.mbbplatform.repos.InvoiceDetailsRepository;
import com.mbb.mbbplatform.repos.PaymentModeRepository;
import com.mbb.mbbplatform.repos.RefundDetailsRepository;
import com.mbb.mbbplatform.repos.ReturnDetailsRepository;
import com.mbb.mbbplatform.svcs.DispatchService;
import com.mbb.mbbplatform.svcs.EmailService;
import com.mbb.mbbplatform.svcs.InventoryItemService;
import com.mbb.mbbplatform.svcs.UserService;

@RestController
@SuppressWarnings("unchecked")
public class DispatchServiceImpl implements DispatchService {
	private static Logger log = LoggerFactory.getLogger(DispatchServiceImpl.class);
	@Autowired
	private DispatchRepository dispatchRepo;

	@Autowired
	private InventoryItemRepository inventoryItemRepo;

	@Autowired
	private InventoryRepository inventoryRepo;

	@Autowired
	private InventoryItemService inventoryItemService;

	@Autowired
	private InvoiceDetailsRepository invoiceDetailsRepo;

	@Autowired
	private Utils utils;
	@Autowired
	private DispatchPaymentDocumentsRepository dispatchPaymentDocumentsRepo;

	@Autowired
	private InventoryItemAccessoriesRepository accessoriesRepo;

	@Autowired
	private EmailService emailsvc;

	@Autowired
	private TemplateEngine templateEngine;

	@Autowired
	private UserService userSvc;

	@Autowired
	private FacilityRepository facilityRepo;

	@Autowired
	private InventoryItemChecklistRepository inventoryItemChecklistRepo;

	@Autowired
	private ChannelRepository channelRepo;

	@Autowired
	private PaymentModeRepository paymentModeRepository;

	@Autowired
	private ReturnDetailsRepository returnDetailsRepo;

	@Autowired
	private RefundDetailsRepository refundDetailsRepo;

	@Autowired
	private JavaMailSender emailSender;

	private static final String ACCESSORY = "accessory";

	String templateforlistOfDispatchDetails = "email/listOfDispatchDetails";

	String dispatchDocumentsPath = "DispatchDocuments/";

	Context context = new Context();

	/**
	 * addDispatch service implementation
	 * 
	 * @RequestBody dispatchList
	 * @return ServiceResponse<List<Dispatch>>
	 */
	@Override
	public ServiceResponse<List<Dispatch>> addDispatch(@Valid @RequestBody List<Dispatch> dispatchList) {
		log.info("for adding list of dispatch");
		ServiceResponse<List<Dispatch>> response = new ServiceResponse<>();
		List<Dispatch> dispatchArrayList = new ArrayList<>();
		PaymentModes paymentModes = null;
		List<JSONObject> listOfDispatchDetails = new ArrayList<>();

		try {

			for (int i = 0; i < dispatchList.size(); i++) {
				JSONObject obj = new JSONObject();

				Dispatch dispatch = dispatchList.get(i);

				Inventory inv = null;
				InventoryItem inventoryItem = inventoryItemRepo.findByBarcode(dispatch.getBarcode());
				if (inventoryItem != null) {
					inv = inventoryItem.getInventoryId();
					Long dispatchCount = inv.getDispatch();
					if (inventoryItem.getItemStatusId().getId() == 1) {
						Long invCount = inv.getInventory();
						inv.setInventory(invCount - 1);
					}
					if (dispatchCount != null) {
						inv.setDispatch(dispatchCount + 1);
					} else {
						inv.setDispatch((long) 0);
						Long disCount = inv.getDispatch();
						inv.setDispatch(disCount + 1);
					}

					dispatch.setProductReturn(false);
					paymentModes = paymentModeRepository.findById(dispatchList.get(0).getPaymentModes().getId()).get();
					Channel channel = channelRepo.findById(dispatchList.get(0).getChannel().getId()).get();

					obj.put("productName", inv.getProductName());
					obj.put("barcode", dispatch.getBarcode());
					obj.put("skuCode", inv.getSkuCode());
					obj.put("comment", dispatch.getComment());
					obj.put("channel", channel.getChannelName());
					obj.put("paymentMode", paymentModes.getTypes());

					listOfDispatchDetails.add(obj);

				} else {
					response.setError(EnumTypeForErrorCodes.SCUS716.name(), EnumTypeForErrorCodes.SCUS716.errorMsg());
				}

				inventoryRepo.save(inv);
				if (inventoryItem != null) {
					inventoryItemService.updateInventoryItemStatus(inventoryItem.getId(), 7l);
					dispatch.setFacilityId(inventoryItem.getFacilityId());

					Dispatch newDispatch = dispatchRepo.save(dispatch);

					dispatchArrayList.add(newDispatch);

				} else {
					response.setError(EnumTypeForErrorCodes.SCUS716.name(), EnumTypeForErrorCodes.SCUS716.errorMsg());
				}
				
				

			}
			String time = DateTimeFormatter.ofPattern("hh:mm a").format(LocalTime.now());
			DateTimeFormatter formatters = DateTimeFormatter.ofPattern("dd-MM-uuuu");

			String date = LocalDate.now().format(formatters);

			context.setVariable("listOfDispatchDetails", listOfDispatchDetails);

			String body1 = dispatchList.get(0).getInvoiceId() + "  has been successfully dispatched \n \n " + " on "
					+ date + " at " + time + " by " + dispatchList.get(0).getCreatedUser() + "\n";

			String body2 = templateEngine.process(templateforlistOfDispatchDetails, context);

			String subject = "MBB-Platform - Dispatch notification of " + dispatchList.get(0).getInvoiceId();

			ServiceResponse<Collection<User>> users = userSvc.getUsersByRole("DISPATCHER");
			Collection<User> usersData = users.getData();
			for (User user : usersData) {

				if (user.isNotificationStatus()) {
					String email = user.getEmail();

					emailsvc.notifyUserByEmail(email, body1 + body2, subject);

				}

			}

			String subject1 = "MBB-Platform - " + paymentModes.getTypes() + " Order("
					+ dispatchList.get(0).getInvoiceId() + ") is dispatched";
			ServiceResponse<Collection<User>> acountantUsers = userSvc.getUsersByRole("ACCOUNTANT");
			Collection<User> accountantsData = acountantUsers.getData();
			for (User user : accountantsData) {
				String body = "";

				if (user.isNotificationStatus()) {
					String email = user.getEmail();
					if (paymentModes.getId() == 1l) {
					DispatchPaymentDocuments disDoc = dispatchPaymentDocumentsRepo.findById(dispatchList.get(0).getDispatchPaymentDocuments().getId()).get();
						String docName = disDoc.getInvoiceNumber().toString() + ".png";

						String body3 = "Dear Accounts Team," + " <br> <br>" + " Please follow up on this "
								+ paymentModes.getTypes() + " transaction.<br> Cash received by "
								+ dispatchList.get(0).getReceivedBy() + ", Details listed below: ";
						body = body3 + body2;
						ServiceResponse<Boolean> result = sentMailForAccountant(subject1, body, email, docName);

						if (!result.getData()) {
							response.setError(result.getError());

						}
					} else if (paymentModes.getId() == 8l) {

						String body4 = "Dear Accounts Team," + " <br> <br>" + " Please follow up on this "
								+ paymentModes.getTypes() + " transaction. Details listed below: ";
						body = body4 + body2;
						
						
						emailsvc.notifyUserByEmail(email,body, subject1);
					

					}

				}
			}

			response.setData(dispatchArrayList);

		} catch (

		Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS717.name(), EnumTypeForErrorCodes.SCUS717.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}
		return response;
	}

	/**
	 * getDispatchById service implementation
	 * 
	 * @param id
	 * @return ServiceResponse<Dispatch>
	 */
	@Override
	public ServiceResponse<Dispatch> getDispatchById(@NotNull Long id) {
		log.info("get dispatch by id");
		ServiceResponse<Dispatch> response = new ServiceResponse<>();

		try {
			Optional<Dispatch> dispatch = dispatchRepo.findById(id);
			if (dispatch.isPresent()) {
				response.setData(dispatch.get());
			}
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS712.name(), EnumTypeForErrorCodes.SCUS712.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}
		return response;
	}

	/**
	 * updateDispatch service implementation
	 * 
	 * @param id
	 * @RequestBody dispatch
	 * @return ServiceResponse<Dispatch>
	 */
	@Override
	public ServiceResponse<Dispatch> updateDispatch(@NotNull Long id, @Valid Dispatch dispatch) {
		log.info("updating dispatch");
		ServiceResponse<Dispatch> response = new ServiceResponse<>();
		try {
			Optional<Dispatch> dispatchExists = dispatchRepo.findById(dispatch.getId());
			if (dispatchExists.isPresent()) {
				dispatchExists.get().setBarcode(dispatch.getBarcode());
				dispatchExists.get().setInvoiceId(dispatch.getInvoiceId());
				dispatchExists.get().setExpectedDeliveryDates(dispatch.getExpectedDeliveryDates());

				Dispatch updatedDispatch = dispatchRepo.save(dispatchExists.get());
				response.setData(updatedDispatch);
			} else {
				response.setError(EnumTypeForErrorCodes.SCUS711.name(), EnumTypeForErrorCodes.SCUS711.errorMsg());
			}
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS710.name(), EnumTypeForErrorCodes.SCUS710.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}
		return response;
	}

	/**
	 * deleteDispatch service implementation
	 * 
	 * @param id
	 * @return ServiceResponse<String>
	 */

	@Override
	public ServiceResponse<String> deleteDispatch(@NotNull Long id) {
		log.info("deleting dispatch");
		ServiceResponse<String> response = new ServiceResponse<>();
		try {
			Optional<Dispatch> dispatch = dispatchRepo.findById(id);
			if (dispatch.isPresent()) {
				dispatchRepo.delete(dispatch.get());
			}
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS708.name(), EnumTypeForErrorCodes.SCUS708.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}
		return response;

	}

	/**
	 * findAllDispatches service implementation
	 * 
	 * @return ServiceResponse<Collection<Dispatch>>
	 */
	@Override
	public ServiceResponse<Collection<Dispatch>> findAllDispatches() {
		log.info("find all dispatch items");
		ServiceResponse<Collection<Dispatch>> response = new ServiceResponse<>();

		try {
			Collection<Dispatch> dispatch = dispatchRepo.findAll();
			response.setData(dispatch);

		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS707.name(), EnumTypeForErrorCodes.SCUS707.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}

		return response;
	}

	/**
	 * getChecklistBySkuCode service implementation
	 * 
	 * @param skuCode
	 * @return ServiceResponse<Collection<InventoryAccessoryChecklist>>
	 */
	@Override
	public ServiceResponse<Collection<InventoryAccessoryChecklist>> getChecklistBySkuCode(
			@NotNull @PathVariable String skuCode) {
		log.info("getting checklist by sku code");
		ServiceResponse<Collection<InventoryAccessoryChecklist>> response = new ServiceResponse<>();

		try {
			Collection<InventoryAccessoryChecklist> checklist = accessoriesRepo.findBySkuCode(skuCode);
			response.setData(checklist);
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS703.name(), EnumTypeForErrorCodes.SCUS703.errorMsg());
			log.error(utils.toJson(response.getError()), e);

		}
		return response;

	}

	/**
	 * getChecklistByBarcode service implementation
	 * 
	 * @param barcode
	 * @return ServiceResponse<Collection<JSONObject>>
	 */
	@Override
	public ServiceResponse<Collection<JSONObject>> getChecklistByBarcode(@NotNull @PathVariable String barcode) {
		log.info("getting checklist by sku code");
		ServiceResponse<Collection<JSONObject>> response = new ServiceResponse<>();

		try {

			InventoryItem inventoryItem = inventoryItemRepo.findByBarcode(barcode);
			Inventory inventory = inventoryItem.getInventoryId();

			List<JSONObject> objList = new ArrayList<>();
			List<InventoryItemChecklist> checklistList = new ArrayList<>();
			Collection<InventoryAccessoryChecklist> accessoryChecklist = accessoriesRepo
					.findBySkuCode(inventory.getSkuCode());
			for (InventoryAccessoryChecklist accessory : accessoryChecklist) {
				List<InventoryItemChecklist> checklistData = inventoryItemChecklistRepo.findByAccessoriesId(accessory);
				for (InventoryItemChecklist checklists : checklistData) {
					if (checklists.getInventoryItemId().getId().equals(inventoryItem.getId())) {
						checklistList.add(checklists);
					}
				}
				JSONObject obj = new JSONObject();
				JSONObject obj1 = new JSONObject();
				if (!checklistList.isEmpty()) {
					for (InventoryItemChecklist checklist : checklistList) {
						obj.put("id", checklist.getAccessoriesId().getId());
						obj.put("skuCode", checklist.getAccessoriesId().getSkuCode());
						obj.put(ACCESSORY, checklist.getAccessoriesId().getAccessory());
						obj.put("quantity", checklist.getQuantity());
						obj.put("conditionCheck", checklist.getAccessoryCondition());
						obj1.put(ACCESSORY, obj);

					}

				} else {
					obj1.put(ACCESSORY, accessory);
				}
				objList.add(obj1);
			}
			response.setData(objList);
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS703.name(), EnumTypeForErrorCodes.SCUS703.errorMsg());
			log.error(utils.toJson(response.getError()), e);

		}
		return response;

	}

	/**
	 * findDispatchItemDetailsInBetweenDates service implementation
	 * 
	 * @param startDate
	 * @param endDate
	 * @param facilityId
	 * @return ServiceResponse<Collection<Dispatch>>
	 */
	@Override
	public ServiceResponse<List<JSONObject>> findDispatchItemDetailsInBetweenDates(
			@NotNull @PathVariable String startDate, @NotNull String endDate, Long facilityId) {
		log.info("find dispatch details in between the dates");
		ServiceResponse<List<JSONObject>> response = new ServiceResponse<>();
		List<JSONObject> dispatchedItemsList = new ArrayList<>();
		try {
			String endDate1 = LocalDate.parse(endDate).plusDays(1).toString();

			Collection<Dispatch> dispatchlist = dispatchRepo.findDispatchDetails(startDate, endDate1);

			for (Dispatch dispatch : dispatchlist) {

				String barcode = dispatch.getBarcode();

				InventoryItem inventoryItem = inventoryItemRepo.findByBarcode(barcode);
				JSONObject obj = new JSONObject();
				if (facilityId == 0 || inventoryItem.getFacilityId().getId().equals(facilityId)) {

					obj.put("id", dispatch.getId());

					obj.put("barcode", dispatch.getBarcode());
					obj.put("invoiceId", dispatch.getInvoiceId());
					obj.put("createdTime", dispatch.getCreatedTime());
					obj.put("updatedTime", dispatch.getUpdatedTime());
					obj.put("comment", dispatch.getComment());
					obj.put("createdUser", dispatch.getCreatedUser());
					obj.put("productReturn", dispatch.getProductReturn());
					obj.put("expectedDeliveryDates", dispatch.getExpectedDeliveryDates());
					obj.put("productName", inventoryItem.getInventoryId().getProductName());
					obj.put("skucode", inventoryItem.getInventoryId().getSkuCode());
					obj.put("serialNumber", inventoryItem.getSerialNumber());
					obj.put("facility", dispatch.getFacilityId().getFacility());
					obj.put("paymentMode", dispatch.getPaymentModes());
					obj.put("channel", dispatch.getChannel());
					obj.put("receivedBy", dispatch.getReceivedBy());
					if (dispatch.getDispatchPaymentDocuments() != null) {
						obj.put("paymentDocument", true);

					} else {
						obj.put("paymentDocument", false);

					}

					dispatchedItemsList.add(obj);
				}

			}

			response.setData(dispatchedItemsList);

		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS701.name(), EnumTypeForErrorCodes.SCUS701.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}

		return response;
	}

	/**
	 * getDispatchDetailsBasedonBarcode service implementation
	 * 
	 * @param barcode
	 * @return ServiceResponse<InventoryItem>
	 */
	@Override
	public ServiceResponse<InventoryItem> getDispatchDetailsBasedonBarcode(@NotNull @PathVariable String barcode,
			Long facilityId) {
		log.info("getting dispatch details based on barcode");
		ServiceResponse<InventoryItem> response = new ServiceResponse<>();

		try {
			Collection<Dispatch> dispatchDetails = dispatchRepo.findByBarcode(barcode);
			InventoryItem inventoryItem = inventoryItemRepo.findByBarcode(barcode);
			if (inventoryItem == null) {
				response.setError(EnumTypeForErrorCodes.SCUS716.name(), EnumTypeForErrorCodes.SCUS716.errorMsg());

			} else {
				if (!inventoryItem.getApprovalstatus()) {
					response.setError(EnumTypeForErrorCodes.SCUS720.name(), EnumTypeForErrorCodes.SCUS720.errorMsg());

				} else {
					if (inventoryItem.getScanned()) {
						response.setError(EnumTypeForErrorCodes.SCUS718.name(),
								EnumTypeForErrorCodes.SCUS718.errorMsg());

					} else {
						if (inventoryItem.getItemStatusId().getId() == 6) {
							response.setError(EnumTypeForErrorCodes.SCUS714.name(),
									EnumTypeForErrorCodes.SCUS714.errorMsg());
						} else if (inventoryItem.getItemStatusId().getId() == 5) {
							response.setError(EnumTypeForErrorCodes.SCUS704.name(),
									EnumTypeForErrorCodes.SCUS704.errorMsg());
						} else {
							if (inventoryItem.getFacilityId().getId().equals(facilityId)) {
								if (inventoryItem.getItemStatusId().getId() != 7) {
									if (dispatchDetails.isEmpty()) {

										response.setData(inventoryItem);
									} else if (!dispatchDetails.isEmpty()) {
										for (Dispatch dispatch : dispatchDetails) {
											if (dispatch.getProductReturn()) {
												response.setData(inventoryItem);
											}
										}
									}

								} else {
									response.setError(EnumTypeForErrorCodes.SCUS713.name(),
											EnumTypeForErrorCodes.SCUS713.errorMsg());
								}
							} else {

								response.setError(EnumTypeForErrorCodes.SCUS723.name(),
										EnumTypeForErrorCodes.SCUS723.errorMsg());

							}
						}
					}

				}

			}
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS703.name(), EnumTypeForErrorCodes.SCUS703.errorMsg());
			log.error(utils.toJson(response.getError()), e);

		}
		return response;
	}

	/**
	 * updateStatusToDispatch service implementation
	 * 
	 * @param id
	 * @RequestBody dispatch
	 * @return ServiceResponse<InventoryItem>
	 */
	@Override
	public ServiceResponse<InventoryItem> updateStatusToDispatch(@NotNull @RequestBody Dispatch dispatch,
			@PathVariable Long id) {
		log.info("getting dispatch details based on barcode");
		ServiceResponse<InventoryItem> response = new ServiceResponse<>();

		try {

			String barcode = dispatch.getBarcode();
			InventoryItem inventoryItem = inventoryItemRepo.findByBarcode(barcode);

			inventoryItemService.updateInventoryItemStatus(inventoryItem.getId(), 7l);

			response.setData(inventoryItem);

		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS709.name(), EnumTypeForErrorCodes.SCUS709.errorMsg());
			log.error(utils.toJson(response.getError()), e);

		}

		return response;
	}

	/**
	 * getDispatchBasedOnLocation service implementation
	 * 
	 * @param facilityId
	 * @return ServiceResponse<Collection<Dispatch>>
	 */
	@Override
	public ServiceResponse<Collection<Dispatch>> getDispatchBasedOnLocation(Long facilityId) {
		log.info("getting dispatch details By location");
		ServiceResponse<Collection<Dispatch>> response = new ServiceResponse<>();
		List<Dispatch> dispatchList = new ArrayList<>();
		try {
			Optional<Facility> facility = facilityRepo.findById(facilityId);
			if (facility.isPresent()) {
				Collection<InventoryItem> inventoryItemList = inventoryItemRepo.findByFacilityId(facility.get());
				for (InventoryItem inventoryItem : inventoryItemList) {
					if (inventoryItem.getItemStatusId().getId() == 7) {
						String barcode = inventoryItem.getBarcode();
						Collection<Dispatch> dispatch = dispatchRepo.findByBarcode(barcode);
						for (Dispatch dispatchExists : dispatch) {
							if (!dispatchExists.getProductReturn()) {
								dispatchList.add(dispatchExists);
							}
						}
					}
				}
			} else {
				Collection<Dispatch> dispatch = dispatchRepo.findAll();
				for (Dispatch dispatchExists : dispatch) {
					if (!dispatchExists.getProductReturn()) {
						dispatchList.add(dispatchExists);
					}
				}
			}

			response.setData(dispatchList);
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS043.name(), EnumTypeForErrorCodes.SCUS043.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}

		return response;
	}

	/**
	 * invoiceCheck service implementation
	 * 
	 * @param invoiceId
	 * @return ServiceResponse<String>
	 */
	@Override
	public ServiceResponse<String> invoiceCheck(@NotNull String invoiceId) {
		log.info("check the invoice is present or not");
		ServiceResponse<String> response = new ServiceResponse<>();

		try {
			List<Dispatch> dispatchList = dispatchRepo.findByInvoiceId(invoiceId);

			if (!dispatchList.isEmpty()) {
				response.setError(EnumTypeForErrorCodes.SCUS815.name(), EnumTypeForErrorCodes.SCUS815.errorMsg());
			}

		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS709.name(), EnumTypeForErrorCodes.SCUS709.errorMsg());
			log.error(utils.toJson(response.getError()), e);

		}

		return response;
	}

	/**
	 * getDispatchDetailsBasedOnInvoiceNum service implementation
	 * 
	 * @param invoiceId
	 * @return ServiceResponse<List<JSONObject>>
	 */
	@Override
	public ServiceResponse<String> getDispatchDetailsBasedOnInvoiceNum(@NotNull String invoiceId) {

		log.info("get item details based on invoice number");
		ServiceResponse<String> response = new ServiceResponse<>();

		try {
			List<Dispatch> dispatchList = dispatchRepo.findByInvoiceId(invoiceId);
			if (dispatchList.isEmpty()) {
				response.setData("success");

			} else {

				for (Dispatch dispatch : dispatchList) {
					ReturnDetails returndetails = returnDetailsRepo.findByDispatchId(dispatch);
					if (returndetails.getTypeOfReturn().getId() == 4) {

						response.setData("success");

					}

				}
				if (!response.getData().equals("success")) {
					response.setError(EnumTypeForErrorCodes.SCUS719.name(), EnumTypeForErrorCodes.SCUS719.errorMsg());

				}
			}

		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS709.name(), EnumTypeForErrorCodes.SCUS709.errorMsg());
			log.error(utils.toJson(response.getError()), e);

		}

		return response;
	}

	@Override
	public ServiceResponse<Collection<Dispatch>> findLastweekDispatchItemDetails() {

		return null;
	}

	@Override
	public ServiceResponse<List<JSONObject>> getReturnProductsOnFilters(@NotNull String startDate, String endDate,
			Long channel, Long returnStatus, Long refundStatus, Long typeOfReturnId) {
		log.info("get return products based on dates,channels,refund status and return status");
		ServiceResponse<List<JSONObject>> response = new ServiceResponse<>();
		Collection<Dispatch> dispatchlist = new ArrayList<>();

		Collection<Dispatch> dispatchListFilteredByTypeOfReturn = new ArrayList<>();
		List<JSONObject> finalList = new ArrayList<>();
		try {

			String endDate1 = LocalDate.parse(endDate).plusDays(1).toString();
			if (channel == 0) {

				dispatchlist = dispatchRepo.findDispatchDetails(startDate, endDate1);
			} else {
				dispatchlist = dispatchRepo.findDispatchDetailsOnDatesAndChannel(startDate, endDate1, channel);

			}

			for (Dispatch dispatch : dispatchlist) {
				ReturnDetails returnDetails = returnDetailsRepo.findByDispatchId(dispatch);

				if (typeOfReturnId == 0) {
					dispatchListFilteredByTypeOfReturn = dispatchlist;

				} else if (typeOfReturnId == -1) {
					if (returnDetails == null) {
						dispatchListFilteredByTypeOfReturn.add(dispatch);
					}

				} else {
					if (returnDetails != null && returnDetails.getTypeOfReturn().getId().equals(typeOfReturnId)) {
						dispatchListFilteredByTypeOfReturn.add(dispatch);

					}

				}

			}

			for (Dispatch dispatch : dispatchListFilteredByTypeOfReturn) {
				ReturnDetails returnDetails = returnDetailsRepo.findByDispatchId(dispatch);

				InventoryItem invItem = inventoryItemRepo.findByBarcode(dispatch.getBarcode());

				if (invItem != null && invItem.getReturnProduct() && dispatch.getProductReturn()) {

					RefundDetails refundDetails = refundDetailsRepo.findByDispatchId(dispatch);
					Boolean returnStatusCheck = false;
					Boolean refundStatusCheck = false;
					if (returnDetails != null) {
						returnStatusCheck = true;
					}
					if (refundDetails != null) {

						refundStatusCheck = true;
					}
					JSONObject obj = new JSONObject();
					obj.put("dispatch", dispatch);

					obj.put("serialNumber", invItem.getSerialNumber());
					obj.put("facility", dispatch.getReturnedToFacility().getFacility());
					obj.put("fromFacility", dispatch.getFacilityId());

					obj.put("return", returnStatusCheck);
					String skuAndProduct = invItem.getInventoryId().getSkuCode() + "-"
							+ invItem.getInventoryId().getProductName();
					obj.put("skuAndProduct", skuAndProduct);
					obj.put("refund", refundStatusCheck);
					obj.put("channel", dispatch.getChannel());


					if (refundStatus == 0 && returnStatus == 0) {

						finalList.add(obj);

					} else if (returnStatus == 0) {

						if (refundStatus == 1 && !refundStatusCheck) {

							finalList.add(obj);

						} else if (refundStatus == 2 && refundStatusCheck) {

							finalList.add(obj);

						}

					} else if (refundStatus == 0) {

						if (returnStatus == 1 && !returnStatusCheck) {

							finalList.add(obj);

						} else if (returnStatus == 2 && returnStatusCheck) {

							finalList.add(obj);

						}

					} else {

						if (refundStatus == 1 && returnStatus == 1 && !returnStatusCheck && !refundStatusCheck) {

							finalList.add(obj);

						} else if (refundStatus == 2 && returnStatus == 2 && returnStatusCheck && refundStatusCheck) {
							if (returnDetails.getReturnStatus() && refundDetails.getRefundStatus()) {

								finalList.add(obj);

							}

						} else if (refundStatus == 1 && returnStatus == 2 && returnStatusCheck && !refundStatusCheck) {

							finalList.add(obj);

						} else if (refundStatus == 2 && returnStatus == 1 && refundStatusCheck && !returnStatusCheck) {

							finalList.add(obj);

						}

					}

				}

			}
			response.setData(finalList);
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS721.name(), EnumTypeForErrorCodes.SCUS721.errorMsg());
			log.error(utils.toJson(response.getError()), e);

		}
		return response;
	}

	@Override
	public ServiceResponse<List<String>> getAllDispatchedInvoices() {
		log.info("get all dispatched invoices");
		ServiceResponse<List<String>> response = new ServiceResponse<>();
		List<String> list = new ArrayList<>();
		try {
			List<Dispatch> dispatchList = dispatchRepo.findAll();
			for (Dispatch dispatch : dispatchList) {
				if (!dispatch.getProductReturn() && (!list.contains(dispatch.getInvoiceId()))) {

					list.add(dispatch.getInvoiceId());

				}
			}

			response.setData(list);
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS722.name(), EnumTypeForErrorCodes.SCUS722.errorMsg());
			log.error(utils.toJson(response.getError()), e);

		}
		return response;
	}

	@Override
	public ServiceResponse<List<Dispatch>> getFacilitesForDispatches() {
		log.info("get facilities for dispaches");

		ServiceResponse<List<Dispatch>> response = new ServiceResponse<>();
		List<Dispatch> list = new ArrayList<>();
		try {
			List<Dispatch> dispatchList = dispatchRepo.findAll();
			for (Dispatch dispatch : dispatchList) {
				InventoryItem inventoryItem = inventoryItemRepo.findByBarcode(dispatch.getBarcode());

				dispatch.setFacilityId(inventoryItem.getFacilityId());
				if (dispatch.getProductReturn()) {
					dispatch.setReturnedToFacility(inventoryItem.getFacilityId());

				}

				Dispatch savedDispatch = dispatchRepo.save(dispatch);
				list.add(savedDispatch);
			}
			response.setData(list);
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS722.name(), EnumTypeForErrorCodes.SCUS722.errorMsg());
			log.error(utils.toJson(response.getError()), e);

		}
		return response;
	}

	@Override
	public ServiceResponse<List<Dispatch>> getChannelForDispatches() {
		log.info("get channels for dispatches");

		ServiceResponse<List<Dispatch>> response = new ServiceResponse<>();
		List<Dispatch> list = new ArrayList<>();
		try {
			List<Dispatch> dispatchList = dispatchRepo.findAll();
			for (Dispatch dispatch : dispatchList) {
				if (!dispatch.getInvoiceId().contains("amz_00")) {
					List<InvoiceDetails> invoiceDetails = invoiceDetailsRepo
							.findByInvoiceNumber(dispatch.getInvoiceId());
					if (!invoiceDetails.isEmpty()) {
						Long channel;
						switch (invoiceDetails.get(0).getChannelName()) {
						case "CUSTOM":
							channel = 7l;
							break;
						case "WOOCOMMERCE":
							channel = 1l;
							break;
						case "AMAZON_IN":
							channel = 2l;
							break;
						case "SNAPDEAL":
							channel = 5l;
							break;
						case "FLIPKART":
							channel = 4l;
							break;
						case "SHOPCLUES":
							channel = 6l;
							break;
						default:
							channel = 1l;
						}
						channelRepo.findById(channel);
						dispatch.setChannel(channelRepo.findById(channel).get());

						Dispatch savedDispatch = dispatchRepo.save(dispatch);
						list.add(savedDispatch);
					}
				} else {
					Long channel = 3l;
					channelRepo.findById(channel);
					dispatch.setChannel(channelRepo.findById(channel).get());
					Dispatch savedDispatch = dispatchRepo.save(dispatch);
					list.add(savedDispatch);
				}
			}

			response.setData(list);
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS722.name(), EnumTypeForErrorCodes.SCUS722.errorMsg());
			log.error(utils.toJson(response.getError()), e);

		}
		return response;
	}

	@Override
	public ServiceResponse<List<PaymentModes>> getAllPaymentModes() {
		log.info("get all payment modes");

		ServiceResponse<List<PaymentModes>> response = new ServiceResponse<>();
		try {
			List<PaymentModes> listPaymentModes = paymentModeRepository.findAll();
			response.setData(listPaymentModes);
		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS727.name(), EnumTypeForErrorCodes.SCUS727.errorMsg());
			log.error(utils.toJson(response.getError()), exception);
		}
		return response;
	}

	@Override
	public ServiceResponse<DispatchPaymentDocuments> addDispatchPaymentDocument(
			@Valid DispatchPaymentDocuments dispatchPaymentDocuments) {
		log.info("adding dispatch payment documents");

		ServiceResponse<DispatchPaymentDocuments> response = new ServiceResponse<>();

		try {

			byte[] data = dispatchPaymentDocuments.getProofs();
			dispatchPaymentDocuments.setProofs(null);
			DispatchPaymentDocuments savedImage = dispatchPaymentDocumentsRepo.save(dispatchPaymentDocuments);

			File newFolder = new File(dispatchDocumentsPath);

			newFolder.mkdirs();

			try (FileOutputStream os = new FileOutputStream(
					dispatchDocumentsPath + (savedImage.getInvoiceNumber() + ".png"))) {
				if (data != null) {
					os.write(data);
				}

			}

			response.setData(savedImage);
		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS726.name(), EnumTypeForErrorCodes.SCUS726.errorMsg());
			log.error(utils.toJson(response.getError()), exception);
		}
		return response;
	}

	@Override
	public ServiceResponse<JSONObject> getDispatchPaymentDocument(@NotNull Long dispatchId) {
		log.info("get dispatch payment documents");

		ServiceResponse<JSONObject> response = new ServiceResponse<>();
		try {
			Dispatch dispatch = dispatchRepo.findById(dispatchId).get();

			JSONObject obj = new JSONObject();
			if (dispatch.getDispatchPaymentDocuments() != null) {
				String loc = dispatchDocumentsPath;

				File fileExists = new File(loc);

				if (fileExists.exists()) {

					File[] listOfFiles = fileExists.listFiles();
					if (listOfFiles.length > 0) {
						for (File file : listOfFiles) {
							if (file.getName()
									.equals((dispatch.getDispatchPaymentDocuments().getInvoiceNumber() + ".png"))) {

								try (FileInputStream fis = new FileInputStream(file);
										ByteArrayOutputStream bos = new ByteArrayOutputStream()) {

									byte[] buf = new byte[fis.available()];
									for (int readNum; (readNum = fis.read(buf)) != -1;) {
										bos.write(buf, 0, readNum);
										obj.put("imageName", file.getName());
										obj.put("binaryData", bos.toByteArray());
									}
								}
							}
						}
					}

				}
			}
			response.setData(obj);
		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS724.name(), EnumTypeForErrorCodes.SCUS724.errorMsg());
			log.error(utils.toJson(response.getError()), exception);
		}
		return response;
	}

	@Override
	public ServiceResponse<Boolean> sentMailForAccountant(String subject, String body, String email, String docName) {
		log.info("Sending email for accountant");

		ServiceResponse<Boolean> response = new ServiceResponse<>();
		try {
			MimeMessage message = emailSender.createMimeMessage();

			MimeMessageHelper helper = new MimeMessageHelper(message, true);
			helper.setTo(email);
			helper.setSubject(subject);

			helper.setText(body, true);

			int i = 0;
			String pictureLocation = dispatchDocumentsPath;

			File pictureFile = new File(pictureLocation);
			if (pictureFile.exists()) {

				File[] listOfFiles = pictureFile.listFiles();

				if (listOfFiles.length > 0) {
					LOOP: for (File file : listOfFiles) {
						i = 5;
						if (file.getName().equals(docName)) {
							helper.addAttachment(file.getName(), file);
							i = 10;
							emailSender.send(message);

							break LOOP;

						}
					}

				} else {
					response.setError(EnumTypeForErrorCodes.SCUS1703.name(), EnumTypeForErrorCodes.SCUS1703.errorMsg());

				}
			} else {
				response.setError(EnumTypeForErrorCodes.SCUS1702.name(), EnumTypeForErrorCodes.SCUS1702.errorMsg());

			}
			if (i == 10) {
				response.setData(true);
			} else if (i == 5) {
				response.setData(false);
				response.setError(EnumTypeForErrorCodes.SCUS1704.name(), EnumTypeForErrorCodes.SCUS1704.errorMsg());
			} else {

				response.setData(false);
			}

		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS725.name(), EnumTypeForErrorCodes.SCUS725.errorMsg());
			log.error(utils.toJson(response.getError()), exception);
		}

		return response;
	}

	@Override
	public ServiceResponse<List<Dispatch>> getPaymentModesForDispatches() {
		log.info("get paymentModes for dispatches");

		ServiceResponse<List<Dispatch>> response = new ServiceResponse<>();
		List<Dispatch> list = new ArrayList<>();
		try {
			List<Dispatch> dispatchList = dispatchRepo.findAll();
			for (Dispatch dispatch : dispatchList) {

				List<InvoiceDetails> invoiceDetails = invoiceDetailsRepo.findByInvoiceNumber(dispatch.getInvoiceId());
				if (!invoiceDetails.isEmpty()) {
					Long paymentMode;
					switch (invoiceDetails.get(0).getPaymentMode()) {
					case "ONLINE":
						paymentMode = 10l;
						break;
					case "COD":
						paymentMode = 8l;
						break;

					default:
						paymentMode = 10l;
					}
					channelRepo.findById(paymentMode);
					dispatch.setPaymentModes(paymentModeRepository.findById(paymentMode).get());

					Dispatch savedDispatch = dispatchRepo.save(dispatch);
					list.add(savedDispatch);
				}
			}

			response.setData(list);
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS722.name(), EnumTypeForErrorCodes.SCUS722.errorMsg());
			log.error(utils.toJson(response.getError()), e);

		}
		return response;
	}

}

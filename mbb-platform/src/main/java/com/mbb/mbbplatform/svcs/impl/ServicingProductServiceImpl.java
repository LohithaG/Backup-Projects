package com.mbb.mbbplatform.svcs.impl;

import java.text.DecimalFormat;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;

import org.apache.commons.lang.StringUtils;
import org.json.simple.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.mbb.mbbplatform.common.EnumTypeForErrorCodes;
import com.mbb.mbbplatform.domain.CustomerDetails;
import com.mbb.mbbplatform.domain.Dispatch;
import com.mbb.mbbplatform.domain.Inventory;
import com.mbb.mbbplatform.domain.InventoryItem;
import com.mbb.mbbplatform.domain.InvoiceDetails;
import com.mbb.mbbplatform.domain.QuotationDetails;
import com.mbb.mbbplatform.domain.SaleOrders;
import com.mbb.mbbplatform.domain.SelfShipment;
import com.mbb.mbbplatform.domain.ServicingProduct;
import com.mbb.mbbplatform.domain.ServicingStatuses;
import com.mbb.mbbplatform.domain.ShippingAggregator;
import com.mbb.mbbplatform.domain.SpareParts;
import com.mbb.mbbplatform.model.ServiceResponse;
import com.mbb.mbbplatform.model.Utils;
import com.mbb.mbbplatform.repos.CustomerDetailsRepository;
import com.mbb.mbbplatform.repos.DispatchRepository;
import com.mbb.mbbplatform.repos.InventoryItemRepository;
import com.mbb.mbbplatform.repos.InventoryRepository;
import com.mbb.mbbplatform.repos.InvoiceDetailsRepository;
import com.mbb.mbbplatform.repos.QuotationDetailsRepository;
import com.mbb.mbbplatform.repos.SaleOrdersRepository;
import com.mbb.mbbplatform.repos.SelfShipmentRepository;
import com.mbb.mbbplatform.repos.ServicingProductRepository;
import com.mbb.mbbplatform.repos.ServicingStatusesRepository;
import com.mbb.mbbplatform.repos.ShippingAggregatorRepository;
import com.mbb.mbbplatform.repos.SparePartsRepository;
import com.mbb.mbbplatform.svcs.ServicingProductService;

@RestController
public class ServicingProductServiceImpl implements ServicingProductService {
	private static Logger log = LoggerFactory.getLogger(ServicingProductServiceImpl.class);

	@Autowired
	private Utils utils;
	@Autowired
	SelfShipmentRepository selfShipmentRepo;
	@Autowired
	private SaleOrdersRepository saleOrdersRepo;
	@Autowired
	private ShippingAggregatorRepository shippingAggregatorRepo;
	@Autowired
	private SparePartsRepository sparePartsRepository;
	@Autowired
	private ServicingProductRepository productServicingRepository;
	@Autowired
	private InventoryRepository inventoryRepo;
	@Autowired
	private InvoiceDetailsRepository invoiceDetailsRepository;
	@Autowired
	private ServicingStatusesRepository servicingStatusesRepository;
	@Autowired
	private QuotationDetailsRepository quotationDetailsRepository;
	@Autowired
	private CustomerDetailsRepository customerDetailsRepository;
	@Autowired
	private DispatchRepository dispatchRepo;
	@Autowired
	private InventoryItemRepository inventoryItemRepo;

	public ServiceResponse<ServicingProduct> updateServicingProduct(@Valid ServicingProduct productServicing,
			@Valid Long id) {
		log.info("updating  servicing product");
		ServiceResponse<ServicingProduct> response = new ServiceResponse<>();
		try {

			ServicingProduct servicingProduct = productServicingRepository.findById(id).get();

			if (servicingProduct != null && servicingProduct.getId().equals(id)) {
				servicingProduct.setOrderDate(productServicing.getOrderDate());
				servicingProduct.setServicingStatusesId(productServicing.getServicingStatusesId());
				servicingProduct.setWarranty(productServicing.getWarranty());
				servicingProduct.setWarrantyInDays(productServicing.getWarrantyInDays());
				servicingProduct.setRunTime(productServicing.getRunTime());
				servicingProduct.setCustomerRemarks(productServicing.getCustomerRemarks());
				servicingProduct.setReceivedBy(productServicing.getReceivedBy());
				servicingProduct.setTenDaysReturnPolicy(productServicing.getTenDaysReturnPolicy());
				CustomerDetails customerDetailsupdated = productServicing.getCustomerDetailsId();
			CustomerDetails customerDetails = customerDetailsRepository
						.findById(productServicing.getCustomerDetailsId().getId()).get();
				customerDetailsupdated.setId(customerDetails.getId());
				customerDetailsRepository.save(customerDetailsupdated);
				servicingProduct.setCustomerDetailsId(customerDetailsupdated);
				productServicingRepository.save(servicingProduct);
				response.setData(servicingProduct);
			} else {
				response.setError(EnumTypeForErrorCodes.SCUS2105.name(), EnumTypeForErrorCodes.SCUS2105.errorMsg());

			}
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS2109.name(), EnumTypeForErrorCodes.SCUS2109.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}
		return response;

	}

	/**
	 * add servicing product service implementation
	 * 
	 * @param productServicing
	 * @return ServiceResponse<ServicingProduct>
	 */
	@Override
	public ServiceResponse<ServicingProduct> addServicingProduct(ServicingProduct productServicing) {
		log.info("adding product for servicing ");
		ServiceResponse<ServicingProduct> response = new ServiceResponse<>();
		try {
			CustomerDetails customerDetails = customerDetailsRepository.save(productServicing.getCustomerDetailsId());
			ServicingProduct serialNumber = productServicingRepository.findBylastRecord();
			if (serialNumber == null) {
				String num = "1";
				String serviceId = "S" + StringUtils.leftPad(num, 4, "0");

				productServicing.setServiceId(serviceId);
			} else {

				String str = serialNumber.getServiceId();
				Long serviceId = Long.parseLong(str.substring(1));
				Long newserviceId = serviceId + 1;
				String num = newserviceId.toString();
				String newserviceId1 = "S" + StringUtils.leftPad(num, 4, "0");

				productServicing.setServiceId(newserviceId1);
			}
			productServicing.setCustomerDetailsId(customerDetails);
			productServicing.setServicingStatusesId(servicingStatusesRepository.getOne(1l));
			ServicingProduct saveServicedProduct = productServicingRepository.save(productServicing);
			response.setData(saveServicedProduct);
		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS2000.name(), EnumTypeForErrorCodes.SCUS2000.errorMsg());
			log.error(utils.toJson(response.getError()), exception);
		}
		return response;
	}

	/**
	 * get All servicing product service implementation
	 * 
	 * @return ServiceResponse<List<ServicingProduct>>
	 */

	@Override
	public ServiceResponse<List<JSONObject>> getAll() {
		log.info("get all servicing products ");
		ServiceResponse<List<JSONObject>> response = new ServiceResponse<>();
		try {
			List<JSONObject> array = new ArrayList<>();

			List<ServicingProduct> servicingProduct = productServicingRepository.findAll();
			for (ServicingProduct listServicingProduct : servicingProduct) {
				JSONObject obj1 = new JSONObject();
				QuotationDetails quotationDetails = quotationDetailsRepository
						.findByServicingProductId(listServicingProduct.getId());
				obj1.put("servicingproduct", listServicingProduct);
				Double totalQuotationCharges = 0.0;
				if (quotationDetails != null) {
					obj1.put("quotationDetails", quotationDetails);
					totalQuotationCharges = quotationDetails.getTotalCharges();

					List<SpareParts> listSpareParts = sparePartsRepository.findByQuotationDetailsId(quotationDetails);
					Double price = 0.0;

					if (!listSpareParts.isEmpty()) {
						obj1.put("spareParts", listSpareParts);

						for (SpareParts spareParts : listSpareParts) {
							if (spareParts.getPrice() != null) {
								price = price + spareParts.getPrice();
							}
						}
						DecimalFormat twodigitsAfterDecimal = new DecimalFormat("##.00");
						obj1.put("totalServiceCharges",
								Double.parseDouble(twodigitsAfterDecimal.format(totalQuotationCharges + price)));

					} else {
						obj1.put("spareParts", null);
						obj1.put("totalServiceCharges", totalQuotationCharges);

					}
				} else {
					obj1.put("quotationDetails", null);
					obj1.put("totalServiceCharges", null);
					obj1.put("spareParts", null);

				}
				array.add(obj1);
			}
			response.setData(array);
		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS2001.name(), EnumTypeForErrorCodes.SCUS2001.errorMsg());
			log.error(utils.toJson(response.getError()), exception);
		}
		return response;

	}

	@Override
	public ServiceResponse<List<JSONObject>> getServicigProductsByFilters(@NotNull String startDate, String endDate,
			Long warranty, Long servicingStatus, Long paymentStatus) {
		log.info("get Servicig Products By Filters");
		ServiceResponse<List<JSONObject>> response = new ServiceResponse<>();
		List<ServicingProduct> servicingProductList = new ArrayList<>();
		List<JSONObject> finalList = new ArrayList<>();
		try {

			String endDate1 = LocalDate.parse(endDate).plusDays(1).toString();
			if (warranty == 0 && servicingStatus == 0) {
				servicingProductList = productServicingRepository.findByStartDateAndEndDate(startDate, endDate1);
			} else if (warranty == 1 && servicingStatus == 0) {
				servicingProductList = productServicingRepository.findByStartDateAndEndDateAndWaranty(startDate,
						endDate1);

			} else if (warranty == 2 && servicingStatus == 0) {
				servicingProductList = productServicingRepository.findByStartDateAndEndDateAndInWaranty(startDate,
						endDate1);

			} else if (warranty == 0 && servicingStatus != 0) {

				servicingProductList = productServicingRepository.findByStartDateAndEndDateAndStatus(startDate,
						endDate1, servicingStatus);

			} else {
				if (warranty == 1) {
					servicingProductList = productServicingRepository
							.findByStartDateAndEndDateAndWarrantyAndStatus(startDate, endDate1, servicingStatus);
				} else if (warranty == 2) {
					servicingProductList = productServicingRepository
							.findAllByStartDateAndEndDateAndWarrantyAndStatus(startDate, endDate1, servicingStatus);
				}

			}
			for (ServicingProduct listServicingProduct : servicingProductList) {
				ServicingProduct servicingProduct = productServicingRepository
						.findById(listServicingProduct.getId()).get();

				SelfShipment selfShipmentExist = selfShipmentRepo.findByServicingProductId(servicingProduct);
				ShippingAggregator shippingAggregatorExist = shippingAggregatorRepo
						.findByServicingProductId(servicingProduct);

				JSONObject obj1 = new JSONObject();
				if (shippingAggregatorExist != null || selfShipmentExist != null) {

					obj1.put("dispatchStatus", "true");

				} else {
					obj1.put("dispatchStatus", "false");

				}

				QuotationDetails quotationDetails = new QuotationDetails();
				if (paymentStatus != 0) {
					Boolean status = false;
					if (paymentStatus == 1) {
						status = true;
						quotationDetails = quotationDetailsRepository
								.findByServicingProductIdAndPaymentStatus(listServicingProduct.getId(), status);
					} else if (paymentStatus == 2) {
						status = false;
						quotationDetails = quotationDetailsRepository
								.findByServicingProductId(listServicingProduct.getId());

					}

				}

				else {
					quotationDetails = quotationDetailsRepository
							.findByServicingProductId(listServicingProduct.getId());
				}
				obj1.put("id", listServicingProduct.getId());
				obj1.put("orderDate", listServicingProduct.getOrderDate());
				obj1.put("serviceid", listServicingProduct.getServiceId());
				obj1.put("warranty", listServicingProduct.getWarranty());
				obj1.put("productDetails",
						listServicingProduct.getSkuCode() + "-" + listServicingProduct.getProductName());

				if (listServicingProduct.getServicingStatusesId() != null) {
					obj1.put("status", listServicingProduct.getServicingStatusesId().getStatus());
				}
				obj1.put("warranty", listServicingProduct.getWarranty());
				obj1.put("orderId", listServicingProduct.getOrderId());
				obj1.put("customerDetails", listServicingProduct.getCustomerDetailsId());
				obj1.put("serviceid", listServicingProduct.getServiceId());
				obj1.put("customerRemarks", listServicingProduct.getCustomerRemarks());

				Double totalQuotationCharges = 0.0;

				if (paymentStatus == 2) {
					if (quotationDetails != null) {

						List<SpareParts> listSpareParts = sparePartsRepository
								.findByQuotationDetailsId(quotationDetails);
						Double price = 0.0;
						if (!listSpareParts.isEmpty()) {

							for (SpareParts spareParts : listSpareParts) {
								if (spareParts.getPrice() != null) {
									price = price + spareParts.getPrice();
								}
							}
						}

						if (quotationDetails.getPaymentStatus() == null) {

							obj1.put("totalServiceCharges", quotationDetails.getTotalCharges() + price);
							obj1.put("paymentStatus", false);
							obj1.put("comments", null);

							finalList.add(obj1);

						} else if(!quotationDetails.getPaymentStatus()) {

							obj1.put("totalServiceCharges", quotationDetails.getTotalCharges() + price);
							obj1.put("paymentStatus", false);
							obj1.put("comments", null);

							finalList.add(obj1);

						}

					} else {
						obj1.put("totalServiceCharges", null);
						obj1.put("paymentStatus", false);
						obj1.put("comments", null);

						finalList.add(obj1);
					}
				} else {
					if (quotationDetails != null) {
						if (quotationDetails.getEmailStatus() == null) {
							obj1.put("emailStatus", false);
						} else {
							obj1.put("emailStatus", quotationDetails.getEmailStatus());

						}
						obj1.put("quotationDetails", "Added");
						obj1.put("quotationDetailsId", quotationDetails.getId());

						totalQuotationCharges = quotationDetails.getTotalCharges();
						if (quotationDetails.getPaymentStatus() != null) {
							obj1.put("paymentStatus", quotationDetails.getPaymentStatus());
						} else {
							obj1.put("paymentStatus", false);

						}
						obj1.put("comments", quotationDetails.getComments());

						List<SpareParts> listSpareParts = sparePartsRepository
								.findByQuotationDetailsId(quotationDetails);
						Double price = 0.0;
						if (!listSpareParts.isEmpty()) {

							for (SpareParts spareParts : listSpareParts) {
								if (spareParts.getPrice() != null) {
									price = price + spareParts.getPrice();
								}
							}
							DecimalFormat twodigitsAfterDecimal = new DecimalFormat("##.00");
							obj1.put("totalServiceCharges",
									Double.parseDouble(twodigitsAfterDecimal.format(totalQuotationCharges + price)));
							obj1.put("spareparts", "Added");

						} else {
							obj1.put("spareparts", "Not Added");
							obj1.put("totalServiceCharges", totalQuotationCharges);

						}

						finalList.add(obj1);

					} else if (paymentStatus == 0) {
						obj1.put("quotationDetails", "Not Added");
						obj1.put("spareparts", "Not Added");
						obj1.put("quotationDetailsId", null);
						obj1.put("emailStatus", false);
						if (quotationDetails != null && quotationDetails.getPaymentStatus() != null) {
							obj1.put("paymentStatus", quotationDetails.getPaymentStatus());
						} else {
							obj1.put("paymentStatus", false);

						}
						obj1.put("comments", null);
						obj1.put("totalServiceCharges", null);
						finalList.add(obj1);
					}

				}
			}

			response.setData(finalList);

		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS2001.name(), EnumTypeForErrorCodes.SCUS2001.errorMsg());
			log.error(utils.toJson(response.getError()), exception);
		}
		return response;

	}

	/**
	 * get get Auto Filter For Service Products by order id
	 * 
	 * @return ServiceResponse<JSONObject>
	 */

	@Override
	public ServiceResponse<JSONObject> getDetailsByorderId(String orderId) {
		log.info("get Details By order Id ");
		ServiceResponse<JSONObject> response = new ServiceResponse<>();
		try {

			List<Dispatch> dispatch = dispatchRepo.findByInvoiceId(orderId);
			if (dispatch.isEmpty()) {
				response.setError(EnumTypeForErrorCodes.SCUS2105.name(), EnumTypeForErrorCodes.SCUS2105.errorMsg());

			} else if ((dispatch.size()) == 1) {
				for (Dispatch Dispatch : dispatch) {
					JSONObject object = new JSONObject();

					InventoryItem inventoryItem = inventoryItemRepo.findByBarcode(Dispatch.getBarcode());
					List<InvoiceDetails> invoiceDetails = invoiceDetailsRepository
							.findByInvoiceNumber(Dispatch.getInvoiceId());
					if (inventoryItem != null) {
						object.put("productName", inventoryItem.getInventoryId().getProductName());
						object.put("skucode", inventoryItem.getInventoryId().getSkuCode());
						object.put("serialNumberStaus", inventoryItem.getInventoryId().getSerialNumberStatus());
						object.put("serialNumber", inventoryItem.getSerialNumber());
						object.put("qrCode", inventoryItem.getBarcode());
					}

					List<SaleOrders> saleOrder = saleOrdersRepo.findByDisplayOrderCode(orderId);

					JSONObject customerDetails = new JSONObject();

					if (!saleOrder.isEmpty()) {
						customerDetails.put("name", saleOrder.get(0).getBillingAddressName());
						customerDetails.put("emailId", saleOrder.get(0).getNotificationEmail());
						String[] phoneNumbers = saleOrder.get(0).getBillingAddressPhone().split(",");
						if (phoneNumbers.length != 0) {
							customerDetails.put("phone", phoneNumbers[0]);
						} else {
							customerDetails.put("phone", null);

						}
						customerDetails.put("address", saleOrder.get(0).getBillingAddressLine1());
						customerDetails.put("city", saleOrder.get(0).getBillingAddressCity());
						customerDetails.put("state", saleOrder.get(0).getBillingAddressState());
						customerDetails.put("pincode", saleOrder.get(0).getBillingAddressPincode());
						object.put("customerDetails", customerDetails);

					} else {
						object.put("customerDetails", null);

					}
					if (!invoiceDetails.isEmpty()) {
						object.put("orderDate", invoiceDetails.get(0).getOrderDate());
					} else {
						object.put("orderDate", null);

					}
					response.setData(object);
				}

			} else {
				List<SaleOrders> saleOrder = saleOrdersRepo.findByDisplayOrderCode(orderId);
				JSONObject object = new JSONObject();

				JSONObject customerDetails = new JSONObject();
				object.put("productName", null);
				object.put("skucode", null);
				object.put("serialNumberStaus", null);
				object.put("serialNumber", null);
				object.put("qrCode", null);
				object.put("orderDate", null);
				if (!saleOrder.isEmpty()) {
					customerDetails.put("name", saleOrder.get(0).getShippingAddressName());
					customerDetails.put("emailId", saleOrder.get(0).getNotificationEmail());
					customerDetails.put("phone", saleOrder.get(0).getNotificationMobile());
					customerDetails.put("address", saleOrder.get(0).getBillingAddressLine1());
					customerDetails.put("city", saleOrder.get(0).getShippingAddressCity());
					customerDetails.put("state", saleOrder.get(0).getBillingAddressState());
					customerDetails.put("pincode", saleOrder.get(0).getBillingAddressPincode());
					object.put("customerDetails", customerDetails);

				} else {
					object.put("customerDetails", null);
				}
				response.setData(object);

			}
		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS2106.name(), EnumTypeForErrorCodes.SCUS2106.errorMsg());

			log.error(utils.toJson(response.getError()), exception);
		}
		return response;

	}

	@Override
	public ServiceResponse<JSONObject> getDetailsBySkucode(String skuCode) {
		log.info("get Details By  skucode ");
		ServiceResponse<JSONObject> response = new ServiceResponse<>();
		try {
			JSONObject object = new JSONObject();

			Inventory inventory = inventoryRepo.findBySkuCode(skuCode);
			if (inventory != null) {
				object.put("productName", inventory.getProductName());
				object.put("serialNumberStaus", inventory.getSerialNumberStatus());

			} else {
				response.setError(EnumTypeForErrorCodes.SCUS2115.name(), EnumTypeForErrorCodes.SCUS2115.errorMsg());

			}
			response.setData(object);
		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS2113.name(), EnumTypeForErrorCodes.SCUS2113.errorMsg());

			log.error(utils.toJson(response.getError()), exception);
		}
		return response;

	}

	/**
	 * get product name by sku code
	 * 
	 * @return ServiceResponse<JSONObject>
	 */
	@Override
	public ServiceResponse<JSONObject> getProductNameBySkuCode(@Valid String skuCode) {
		log.info("get Product Name By SkuCode");
		ServiceResponse<JSONObject> response = new ServiceResponse<>();
		try {
			Inventory inventory = inventoryRepo.findBySkuCode(skuCode);
			JSONObject object = new JSONObject();

			if (inventory != null) {
				object.put("productName", inventory.getProductName());
				response.setData(object);
			} else {
				response.setError(EnumTypeForErrorCodes.SCUS2107.name(), EnumTypeForErrorCodes.SCUS2107.errorMsg());

			}
		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS2108.name(), EnumTypeForErrorCodes.SCUS2108.errorMsg());
			log.error(utils.toJson(response.getError()), exception);
		}
		return response;

	}

	@Override
	public ServiceResponse<List<ServicingStatuses>> getAllServiceStatues() {
		log.info("get All Service Statues ");

		ServiceResponse<List<ServicingStatuses>> response = new ServiceResponse<>();
		try {
			List<ServicingStatuses> listPaymentModes = servicingStatusesRepository.findAll();
			response.setData(listPaymentModes);
		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS2004.name(), EnumTypeForErrorCodes.SCUS2004.errorMsg());
			log.error(utils.toJson(response.getError()), exception);
		}
		return response;
	}

	@Override
	public ServiceResponse<JSONObject> getServicingProductById(@Valid Long id) {
		log.info("get Servicing Product By Id ");
		ServiceResponse<JSONObject> response = new ServiceResponse<>();
		try {

			Optional<ServicingProduct> servicingProduct = productServicingRepository.findById(id);
			if (servicingProduct.isPresent()) {
				JSONObject obj1 = new JSONObject();
				QuotationDetails quotationDetails = quotationDetailsRepository
						.findByServicingProductId(servicingProduct.get().getId());
				obj1.put("servicingproduct", servicingProduct);
				obj1.put("productDetails",
						servicingProduct.get().getSkuCode() + "-" + servicingProduct.get().getProductName());

				Double totalQuotationCharges = 0.0;
				if (quotationDetails != null) {
					JSONObject paymentDetails = new JSONObject();
					obj1.put("quotationDetails", quotationDetails);

					if ((quotationDetails.getComments() == null ||quotationDetails.getComments().equals(""))&& quotationDetails.getPaymentModeId() == null
							&& quotationDetails.getPaymentStatus() == null
							&& quotationDetails.getTransactionReferenceNumber() == null
							&& quotationDetails.getDate() == null) {
						obj1.put("paymentDetails", null);

					} else {
						paymentDetails.put("comments", quotationDetails.getComments());
						paymentDetails.put("paymentModeId", quotationDetails.getPaymentModeId());
						paymentDetails.put("paymentStatus", quotationDetails.getPaymentStatus());
						paymentDetails.put("transactionReferenceNumber",
								quotationDetails.getTransactionReferenceNumber());
						paymentDetails.put("paymentDate", quotationDetails.getDate());
						obj1.put("paymentDetails", paymentDetails);
					}

					JSONObject invoiceDetails = new JSONObject();
					invoiceDetails.put("unicommerceReferenceNumber", quotationDetails.getUnicommerceReferenceNumber());
					obj1.put("invoiceDetails", invoiceDetails);

					totalQuotationCharges = quotationDetails.getTotalCharges();

					List<SpareParts> listSpareParts = sparePartsRepository.findByQuotationDetailsId(quotationDetails);
					Double price = 0.0;

					if (!listSpareParts.isEmpty()) {
						obj1.put("spareParts", listSpareParts);

						for (SpareParts spareParts : listSpareParts) {
							if (spareParts.getPrice() != null) {
								price = price + spareParts.getPrice();
							}
						}
						DecimalFormat twodigitsAfterDecimal = new DecimalFormat("##.00");
						obj1.put("totalServiceCharges",
								Double.parseDouble(twodigitsAfterDecimal.format(totalQuotationCharges + price)));

					} else {
						obj1.put("spareParts", null);
						obj1.put("totalServiceCharges", totalQuotationCharges);

					}
				} else {
					obj1.put("quotationDetails", null);
					obj1.put("totalServiceCharges", null);
					obj1.put("spareParts", null);
					obj1.put("paymentDetails", null);
					obj1.put("invoiceDetails", null);

				}
				SelfShipment selfShipmentExist = selfShipmentRepo.findByServicingProductId(servicingProduct.get());
				ShippingAggregator shippingAggregatorExist = shippingAggregatorRepo
						.findByServicingProductId(servicingProduct.get());
				JSONObject shipmentDetails = new JSONObject();
				JSONObject selfShipment = new JSONObject();
				JSONObject shippingAggregator = new JSONObject();

				if (selfShipmentExist != null) {

					selfShipment.put("driverName", selfShipmentExist.getDriverName());
					selfShipment.put("vehicleNumber", null);
					selfShipment.put("transferInventoryId", null);
					selfShipment.put("driverNumber", selfShipmentExist.getDriverNumber());
					selfShipment.put("driverAlternateNumber", selfShipmentExist.getDriverAlternateNumber());
					selfShipment.put("email", selfShipmentExist.getEmail());
					selfShipment.put("servicingProductId", selfShipmentExist.getServicingProductId());
					shipmentDetails.put("selfShipment", selfShipment);

				} else {
					shipmentDetails.put("selfShipment", null);

				}
				if (shippingAggregatorExist != null) {

					shippingAggregator.put("shippingAggregator", shippingAggregatorExist.getShippingAggregator());
					shippingAggregator.put("courierName", shippingAggregatorExist.getCourierName());
					shippingAggregator.put("trackingNumber", shippingAggregatorExist.getTrackingNumber());
					shippingAggregator.put("servicingProductId", shippingAggregatorExist.getServicingProductId());
					shippingAggregator.put("transferInventoryId", null);

					shipmentDetails.put("shippingAggregator", shippingAggregator);

				} else {

					shipmentDetails.put("shippingAggregator", null);

				}

				if (shippingAggregatorExist != null && selfShipmentExist != null) {
					obj1.put("dispatchStatus", "true");

				} else {
					obj1.put("dispatchStatus", "false");

				}
				obj1.put("shipmentDetails", shipmentDetails);

				response.setData(obj1);

			}
		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS2003.name(), EnumTypeForErrorCodes.SCUS2003.errorMsg());
			log.error(utils.toJson(response.getError()), exception);
		}
		return response;

	}

	@Override
	public ServiceResponse<JSONObject> getCustomerDetailsByOrderId(@Valid String orderId) {
		log.info("get Product Name By SkuCode");
		ServiceResponse<JSONObject> response = new ServiceResponse<>();
		try {
			List<SaleOrders> saleOrder = saleOrdersRepo.findByDisplayOrderCode(orderId);

			JSONObject object = new JSONObject();

			if (!saleOrder.isEmpty()) {
				object.put("name", saleOrder.get(0).getShippingAddressName());
				object.put("emailId", saleOrder.get(0).getNotificationEmail());
				object.put("phone", saleOrder.get(0).getNotificationMobile());
				object.put("address", saleOrder.get(0).getBillingAddressLine1());
				object.put("city", saleOrder.get(0).getShippingAddressCity());
				object.put("sate", saleOrder.get(0).getBillingAddressState());
				object.put("pincode", saleOrder.get(0).getBillingAddressPincode());

				response.setData(object);
			} else {
				response.setError(EnumTypeForErrorCodes.SCUS2119.name(), EnumTypeForErrorCodes.SCUS2119.errorMsg());

			}
		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS2108.name(), EnumTypeForErrorCodes.SCUS2108.errorMsg());
			log.error(utils.toJson(response.getError()), exception);
		}
		return response;

	}
}

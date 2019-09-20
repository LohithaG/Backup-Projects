package com.mbb.mbbplatform.svcs.impl;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.mbb.mbbplatform.common.EnumTypeForErrorCodes;
import com.mbb.mbbplatform.domain.ServicingProduct;
import com.mbb.mbbplatform.domain.ShippingAggregator;
import com.mbb.mbbplatform.domain.TransferInventory;
import com.mbb.mbbplatform.model.ServiceResponse;
import com.mbb.mbbplatform.model.Utils;
import com.mbb.mbbplatform.repos.ServicingProductRepository;
import com.mbb.mbbplatform.repos.ServicingStatusesRepository;
import com.mbb.mbbplatform.repos.ShippingAggregatorRepository;
import com.mbb.mbbplatform.repos.TransferInventoryRepository;
import com.mbb.mbbplatform.svcs.ShippingAggregatorService;

@RestController
public class ShippingAggregatorServiceImpl implements ShippingAggregatorService {
	private static Logger log = LoggerFactory.getLogger(InventoryServiceImpl.class);

	@Autowired
	private Utils utils;

	@Autowired
	private ServicingProductRepository productServicingRepository;

	@Autowired
	private ServicingStatusesRepository servicingStatusesRepository;
	@Autowired
	private ShippingAggregatorRepository shippingAggregatorRepo;

	@Autowired
	private TransferInventoryRepository transferInventoryRepo;

	@Autowired
	private TransferInventoryServiceImpl transferInventoryServiceImpl;

	@Override
	public ServiceResponse<ShippingAggregator> addShippingAggregator(@Valid ShippingAggregator shippingAggregator) {
		log.info("adding shipping aggregator");
		ServiceResponse<ShippingAggregator> response = new ServiceResponse<>();
		try {
			Optional<TransferInventory> existTransferInventory = transferInventoryRepo
					.findById(shippingAggregator.getTransferInventoryId().getId());

			if (existTransferInventory.isPresent()) {
				TransferInventory transferInventory = existTransferInventory.get();

				ShippingAggregator existingShippingAggregator = shippingAggregatorRepo
						.findByTransferInventoryId(transferInventory);
				if (existingShippingAggregator == null) {
					shippingAggregator.setTransferInventoryId(transferInventory);

					ShippingAggregator privateTransport1 = shippingAggregatorRepo
							.findByTrackingNumber(shippingAggregator.getTrackingNumber());

					if (privateTransport1 == null) {

						ShippingAggregator savedPrivateTransport = shippingAggregatorRepo.save(shippingAggregator);
						response.setData(savedPrivateTransport);
						transferInventoryServiceImpl.updateInventoryMovingStatus(4l, transferInventory.getId());

					} else {

						response.setError(EnumTypeForErrorCodes.SCUS1010.name(),
								EnumTypeForErrorCodes.SCUS1010.errorMsg());

					}
				} else {

					response.setError(EnumTypeForErrorCodes.SCUS1058.name(), EnumTypeForErrorCodes.SCUS1058.errorMsg());

				}
			} else {
				response.setError(EnumTypeForErrorCodes.SCUS1059.name(), EnumTypeForErrorCodes.SCUS1059.errorMsg());

			}

		} catch (Exception e) {

			response.setError(EnumTypeForErrorCodes.SCUS1011.name(), EnumTypeForErrorCodes.SCUS1011.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}

		return response;
	}

	@Override
	public ServiceResponse<ShippingAggregator> updateShippingAggregator(@Valid ShippingAggregator shippingAggrrgator) {
		log.info("updating private transport");
		ServiceResponse<ShippingAggregator> response = new ServiceResponse<>();
		try {

			Optional<ShippingAggregator> privateTransport1 = shippingAggregatorRepo
					.findById(shippingAggrrgator.getId());
			if (privateTransport1.isPresent()) {
				ShippingAggregator savedPrivateTransport = shippingAggregatorRepo.save(shippingAggrrgator);
				response.setData(savedPrivateTransport);

			} else {

				response.setError(EnumTypeForErrorCodes.SCUS1012.name(), EnumTypeForErrorCodes.SCUS1012.errorMsg());

			}

		} catch (Exception e) {

			response.setError(EnumTypeForErrorCodes.SCUS1013.name(), EnumTypeForErrorCodes.SCUS1013.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}

		return response;
	}

	@Override
	public ServiceResponse<String> deleteShippingAggregator(@Valid Long id) {
		log.info("deleting private transport");
		ServiceResponse<String> response = new ServiceResponse<>();
		try {
			Optional<ShippingAggregator> privateTransport = shippingAggregatorRepo.findById(id);
			if (privateTransport.isPresent()) {

				shippingAggregatorRepo.deleteById(id);
				String msg = "deleted successfully";
				response.setData(msg);
			} else {

				response.setError(EnumTypeForErrorCodes.SCUS1014.name(), EnumTypeForErrorCodes.SCUS1014.errorMsg());

			}

		} catch (Exception e) {

			response.setError(EnumTypeForErrorCodes.SCUS1015.name(), EnumTypeForErrorCodes.SCUS1015.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}

		return response;
	}

	@Override
	public ServiceResponse<List<ShippingAggregator>> getAll() {
		log.info("get all private transports");
		ServiceResponse<List<ShippingAggregator>> response = new ServiceResponse<>();

		try {
			List<ShippingAggregator> listPackageDetails = shippingAggregatorRepo.findAll();
			response.setData(listPackageDetails);
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS1016.name(), EnumTypeForErrorCodes.SCUS1016.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}

		return response;

	}

	@Override
	public ServiceResponse<ShippingAggregator> getBasedOnTrackingNumber(@Valid String trackingNo) {
		log.info("get by tracking number");
		ServiceResponse<ShippingAggregator> response = new ServiceResponse<>();

		try {
			ShippingAggregator packageDetails = shippingAggregatorRepo.findByTrackingNumber(trackingNo);

			if (packageDetails == null) {

				response.setError(EnumTypeForErrorCodes.SCUS1020.name(), EnumTypeForErrorCodes.SCUS1020.errorMsg());

			}
			response.setData(packageDetails);
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS1017.name(), EnumTypeForErrorCodes.SCUS1017.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}

		return response;
	}

	@Override
	public ServiceResponse<Collection<ShippingAggregator>> getBasedOnCourierName(@Valid String courierName) {
		log.info("get all private transports based on courier name");
		ServiceResponse<Collection<ShippingAggregator>> response = new ServiceResponse<>();

		try {
			Collection<ShippingAggregator> listPackageDetails = shippingAggregatorRepo.findByCourierName(courierName);

			if (listPackageDetails.isEmpty()) {

				response.setError(EnumTypeForErrorCodes.SCUS1021.name(), EnumTypeForErrorCodes.SCUS1021.errorMsg());

			}
			response.setData(listPackageDetails);
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS1018.name(), EnumTypeForErrorCodes.SCUS1018.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}

		return response;
	}

	@Override
	public ServiceResponse<Collection<ShippingAggregator>> getBasedOnShippingAggr(@Valid String shippingAggr) {
		log.info("get all private transports based on shipping Aggregator");
		ServiceResponse<Collection<ShippingAggregator>> response = new ServiceResponse<>();

		try {
			Collection<ShippingAggregator> listPackageDetails = shippingAggregatorRepo
					.findByShippingAggregator(shippingAggr);

			if (listPackageDetails.isEmpty()) {

				response.setError(EnumTypeForErrorCodes.SCUS1022.name(), EnumTypeForErrorCodes.SCUS1022.errorMsg());

			}
			response.setData(listPackageDetails);
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS1019.name(), EnumTypeForErrorCodes.SCUS1019.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}

		return response;
	}

	@Override
	public ServiceResponse<ShippingAggregator> addShippingAggregatorForServicingproducts(
			@Valid ShippingAggregator shippingAggregator, @Valid Long id) {
		log.info("adding shipping aggregator for servicing products");
		ServiceResponse<ShippingAggregator> response = new ServiceResponse<>();
		try {
			Optional<ServicingProduct> servicingProductExist = productServicingRepository
					.findById(id);

			if (servicingProductExist.isPresent()) {
				ServicingProduct servicingProduct = servicingProductExist.get();

				ShippingAggregator existingServicingProduct = shippingAggregatorRepo
						.findByServicingProductId(servicingProduct);
				if (existingServicingProduct == null) {
					shippingAggregator.setServicingProductId(servicingProduct);
					
					ShippingAggregator privateTransport1 = shippingAggregatorRepo
							.findByTrackingNumber(shippingAggregator.getTrackingNumber());

					if (privateTransport1 == null) {

						ShippingAggregator savedPrivateTransport = shippingAggregatorRepo.save(shippingAggregator);
						response.setData(savedPrivateTransport);

						
					
						servicingProductExist.get().setServicingStatusesId(servicingStatusesRepository.getOne(6l));
						productServicingRepository.save(servicingProductExist.get());	
						
					

					} else {

						response.setError(EnumTypeForErrorCodes.SCUS1010.name(),
								EnumTypeForErrorCodes.SCUS1010.errorMsg());

					}
				} else {

					response.setError(EnumTypeForErrorCodes.SCUS1065.name(), EnumTypeForErrorCodes.SCUS1065.errorMsg());

				}
			} else {
				response.setError(EnumTypeForErrorCodes.SCUS1066.name(), EnumTypeForErrorCodes.SCUS1066.errorMsg());

			}

		} catch (Exception e) {

			response.setError(EnumTypeForErrorCodes.SCUS1068.name(), EnumTypeForErrorCodes.SCUS1068.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}

		return response;
	}

}

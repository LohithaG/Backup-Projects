package com.mbb.mbbplatform.svcs.impl;

import java.util.Collection;
import java.util.Optional;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.mbb.mbbplatform.common.EnumTypeForErrorCodes;
import com.mbb.mbbplatform.domain.SelfShipment;
import com.mbb.mbbplatform.domain.ServicingProduct;
import com.mbb.mbbplatform.domain.TransferInventory;
import com.mbb.mbbplatform.model.ServiceResponse;
import com.mbb.mbbplatform.model.Utils;
import com.mbb.mbbplatform.repos.SelfShipmentRepository;
import com.mbb.mbbplatform.repos.ServicingProductRepository;
import com.mbb.mbbplatform.repos.ServicingStatusesRepository;
import com.mbb.mbbplatform.repos.TransferInventoryRepository;
import com.mbb.mbbplatform.svcs.SelfShipmentService;

@RestController
public class SelfShipmentServiceImpl implements SelfShipmentService {
	private static Logger log = LoggerFactory.getLogger(SelfShipmentServiceImpl.class);

	@Autowired
	SelfShipmentRepository selfShipmentRepo;

	@Autowired
	private Utils utils;
	@Autowired
	private ServicingStatusesRepository servicingStatusesRepository;
	@Autowired
	private TransferInventoryRepository transferInventoryRepo;

	@Autowired
	private ServicingProductRepository productServicingRepository;

	@Autowired
	private TransferInventoryServiceImpl transferInventoryServiceImpl;

	@Override
	public ServiceResponse<SelfShipment> addSelfShipment(@Valid SelfShipment selfShipment) {
		log.info("adding own Transport");

		ServiceResponse<SelfShipment> response = new ServiceResponse<>();

		try {
			Optional<TransferInventory> existTransferInventory = transferInventoryRepo
					.findById(selfShipment.getTransferInventoryId().getId());

			if (existTransferInventory.isPresent()) {
				TransferInventory transferInventory = existTransferInventory.get();
				SelfShipment existSelfShipment = selfShipmentRepo.findByTransferInventoryId(transferInventory);
				if (existSelfShipment == null) {
					selfShipment.setTransferInventoryId(transferInventory);
					SelfShipment savedOwnTransport = selfShipmentRepo.save(selfShipment);
					transferInventoryServiceImpl.updateInventoryMovingStatus(4l, transferInventory.getId());

					response.setData(savedOwnTransport);
				} else {

					response.setError(EnumTypeForErrorCodes.SCUS1058.name(), EnumTypeForErrorCodes.SCUS1058.errorMsg());

				}
			} else {
				response.setError(EnumTypeForErrorCodes.SCUS1059.name(), EnumTypeForErrorCodes.SCUS1059.errorMsg());

			}

		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS1051.name(), EnumTypeForErrorCodes.SCUS1051.errorMsg());
			log.error(utils.toJson(response.getError()), exception);
		}
		return response;
	}

	@Override
	public ServiceResponse<SelfShipment> updateSelfTransport(@Valid Long id, @Valid SelfShipment ownTransport) {
		log.info("updating own transport");
		ServiceResponse<SelfShipment> response = new ServiceResponse<>();
		try {
			Optional<SelfShipment> existOwnTransport = selfShipmentRepo.findById(id);
			if (existOwnTransport.isPresent()) {

				SelfShipment ownTransport1 = existOwnTransport.get();

				if (ownTransport.getVehicleNumber().equals(ownTransport1.getVehicleNumber())) {
					ownTransport1.setId(id);
					ownTransport1.setDriverName(ownTransport.getDriverName());
					ownTransport1.setDriverNumber(ownTransport.getDriverNumber());
					ownTransport1.setDriverAlternateNumber(ownTransport.getDriverAlternateNumber());

					SelfShipment updatedOwnTransportRepository = selfShipmentRepo.save(ownTransport1);
					response.setData(updatedOwnTransportRepository);
				} else {

					SelfShipment updatedOwnTransportRepository = selfShipmentRepo.save(ownTransport);
					response.setData(updatedOwnTransportRepository);
				}

			} else {
				response.setError(EnumTypeForErrorCodes.SCUS1060.name(), EnumTypeForErrorCodes.SCUS1060.errorMsg());

			}

		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS1052.name(), EnumTypeForErrorCodes.SCUS1052.errorMsg());
			log.error(utils.toJson(response.getError()), exception);
		}
		return response;
	}

	@Override
	public ServiceResponse<Collection<SelfShipment>> getAllSelfTransport() {
		log.info("getting all selfTransport details");
		ServiceResponse<Collection<SelfShipment>> response = new ServiceResponse<>();

		try {
			Collection<SelfShipment> listOfOwnTransport = selfShipmentRepo.findAll();
			response.setData(listOfOwnTransport);
		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS1053.name(), EnumTypeForErrorCodes.SCUS1053.errorMsg());
			log.error(utils.toJson(response.getError()), exception);
		}
		return response;
	}

	@Override
	public ServiceResponse<SelfShipment> getById(Long id) {
		log.info("getting self transport by id");

		ServiceResponse<SelfShipment> response = new ServiceResponse<>();
		try {
			Optional<SelfShipment> existOwnTransport = selfShipmentRepo.findById(id);

			if (existOwnTransport.isPresent()) {
				response.setData(existOwnTransport.get());

			} else {
				response.setError(EnumTypeForErrorCodes.SCUS1055.name(), EnumTypeForErrorCodes.SCUS1055.errorMsg());

			}
		} catch (Exception exception) {

			response.setError(EnumTypeForErrorCodes.SCUS1054.name(), EnumTypeForErrorCodes.SCUS1054.errorMsg());
			log.error(utils.toJson(response.getError()), exception);
		}
		return response;
	}

	@Override
	public ServiceResponse<SelfShipment> deleteById(Long id) {
		log.info("deleting self transport by id");

		ServiceResponse<SelfShipment> response = new ServiceResponse<>();
		try {
			Optional<SelfShipment> ownTransport = selfShipmentRepo.findById(id);

			if (ownTransport.isPresent()) {

				selfShipmentRepo.deleteById(id);

			} else {
				response.setError(EnumTypeForErrorCodes.SCUS1055.name(), EnumTypeForErrorCodes.SCUS1055.errorMsg());

			}
		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS1056.name(), EnumTypeForErrorCodes.SCUS1056.errorMsg());
			log.error(utils.toJson(response.getError()), exception);
		}
		return response;
	}

	
	@Override
	public ServiceResponse<SelfShipment> addSelfShipmentForServicingProducts(@Valid SelfShipment selfShipment,  @Valid Long id) {
		log.info("adding self shipment For servicing products");

		ServiceResponse<SelfShipment> response = new ServiceResponse<>();

		try {
			Optional<ServicingProduct> servicingProductExist = productServicingRepository
					.findById(id);


			if (servicingProductExist.isPresent()) {
				ServicingProduct servicingProduct = servicingProductExist.get();
				SelfShipment existSelfShipment = selfShipmentRepo.findByServicingProductId(servicingProduct);
				if (existSelfShipment == null) {
					selfShipment.setServicingProductId(servicingProduct);
					SelfShipment savedOwnTransport = selfShipmentRepo.save(selfShipment);

					response.setData(savedOwnTransport);
					
					servicingProductExist.get().setServicingStatusesId(servicingStatusesRepository.getOne(6l));
					productServicingRepository.save(servicingProductExist.get());	
					
				
				} else {

					response.setError(EnumTypeForErrorCodes.SCUS1065.name(), EnumTypeForErrorCodes.SCUS1065.errorMsg());

				}
			} else {
				response.setError(EnumTypeForErrorCodes.SCUS1066.name(), EnumTypeForErrorCodes.SCUS1066.errorMsg());

			}

		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS1067.name(), EnumTypeForErrorCodes.SCUS1067.errorMsg());
			log.error(utils.toJson(response.getError()), exception);
		}
		return response;
	}
}

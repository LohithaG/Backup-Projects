package com.mbb.mbbplatform.svcs.impl;

import java.util.Collection;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.mbb.mbbplatform.common.EnumTypeForErrorCodes;
import com.mbb.mbbplatform.domain.PoVendor;
import com.mbb.mbbplatform.domain.Vendor;
import com.mbb.mbbplatform.model.ServiceResponse;
import com.mbb.mbbplatform.model.Utils;
import com.mbb.mbbplatform.repos.PoVendorRepository;
import com.mbb.mbbplatform.repos.VendorRepository;
import com.mbb.mbbplatform.svcs.VendorService;

@RestController
public class VendorServiceImpl implements VendorService {
	private static Logger log = LoggerFactory.getLogger(VendorServiceImpl.class);

	@Autowired
	private Utils utils;

	@Autowired
	private VendorRepository vendorRepo;

	@Autowired
	private PoVendorRepository poVendorRepo;

	/**
	 * addVendor service implementation
	 * 
	 * @RequestBody vendor
	 * @return ServiceResponse<Vendor>
	 */
	@Override
	public ServiceResponse<Vendor> addVendor(Vendor vendor) {
		log.info("adding vendor");
		ServiceResponse<Vendor> response = new ServiceResponse<>();
		try {
			Vendor vendorExists = vendorRepo.findByName(vendor.getName());
			if (vendorExists != null) {
				response.setError(EnumTypeForErrorCodes.SCUS1121.name(), EnumTypeForErrorCodes.SCUS1121.errorMsg());
			} else {
				Vendor newVendor = vendorRepo.save(vendor);

				response.setData(newVendor);
			}

		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS1122.name(), EnumTypeForErrorCodes.SCUS1122.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}
		return response;
	}

	/**
	 * deleteVendor service implementation
	 * 
	 * @Param id
	 * @return ServiceResponse<String>
	 */
	@Override
	public ServiceResponse<String> deleteVendor(Long id) {
		log.info("deleting vendor");
		ServiceResponse<String> response = new ServiceResponse<>();
		try {
			Optional<Vendor> vendorExists = vendorRepo.findById(id);
			if (vendorExists.isPresent()) {
				Collection<PoVendor> listpoVendor = poVendorRepo.findByVendorId(vendorExists.get());
				if (listpoVendor.isEmpty()) {

					vendorRepo.delete(vendorExists.get());
					response.setData("vendor deleted successfully");
				} else {

					response.setError(EnumTypeForErrorCodes.SCUS1128.name(), EnumTypeForErrorCodes.SCUS1128.errorMsg());

				}

			} else {
				response.setError(EnumTypeForErrorCodes.SCUS1123.name(), EnumTypeForErrorCodes.SCUS1123.errorMsg());
			}
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS1124.name(), EnumTypeForErrorCodes.SCUS1124.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}
		return response;
	}

	/**
	 * getAllVendors service implementation
	 * 
	 * @return ServiceResponse<Collection<Vendor>>
	 */
	@Override
	public ServiceResponse<Collection<Vendor>> getAllVendors() {
		log.info("deleting vendor");
		ServiceResponse<Collection<Vendor>> response = new ServiceResponse<>();
		try {
			Collection<Vendor> vendorExists = vendorRepo.findAll();

			response.setData(vendorExists);

		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS1125.name(), EnumTypeForErrorCodes.SCUS1125.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}
		return response;
	}

	/**
	 * getVendorById service implementation
	 * 
	 * @Param id
	 * @return ServiceResponse<Vendor>
	 */
	@Override
	public ServiceResponse<Vendor> getVendorById(Long id) {
		log.info("get vendor by id");
		ServiceResponse<Vendor> response = new ServiceResponse<>();
		try {
			Optional<Vendor> vendorExists = vendorRepo.findById(id);
			if (vendorExists.isPresent()) {
				response.setData(vendorExists.get());
			} else {
				response.setError(EnumTypeForErrorCodes.SCUS1121.name(), EnumTypeForErrorCodes.SCUS1121.errorMsg());

			}
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS1126.name(), EnumTypeForErrorCodes.SCUS1126.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}
		return response;
	}

	/**
	 * updateVendor service implementation
	 * 
	 * @Param id
	 * @ReauestBody vendor
	 * @return ServiceResponse<Vendor>s
	 */
	@Override
	public ServiceResponse<Vendor> updateVendor(Vendor vendor, Long id) {
		log.info("updating vendor ");
		ServiceResponse<Vendor> response = new ServiceResponse<>();
		try {
			Optional<Vendor> vendorExists = vendorRepo.findById(id);
			if ((vendorExists.isPresent())) {
				Vendor nameExists = vendorRepo.findByName(vendor.getName());
				if (nameExists == null || nameExists.getId().equals(id)) {
					vendorExists.get().setName(vendor.getName());

					Vendor updatedVendor = vendorRepo.save(vendorExists.get());
					response.setData(updatedVendor);
				} else {
					response.setError(EnumTypeForErrorCodes.SCUS1121.name(), EnumTypeForErrorCodes.SCUS1121.errorMsg());
				}
			} else {
				response.setError(EnumTypeForErrorCodes.SCUS1123.name(), EnumTypeForErrorCodes.SCUS1123.errorMsg());
			}

		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS1127.name(), EnumTypeForErrorCodes.SCUS1127.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		}
		return response;
	}

}

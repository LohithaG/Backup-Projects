package com.mbb.mbbplatform.svcs.impl;

import java.io.FileReader;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.mbb.mbbplatform.common.EnumTypeForErrorCodes;
import com.mbb.mbbplatform.domain.ReturnManifest;
import com.mbb.mbbplatform.model.ServiceResponse;
import com.mbb.mbbplatform.repos.ReturnManifestRepository;
import com.mbb.mbbplatform.svcs.ReturnManifestService;
import com.opencsv.CSVReader;

@RestController
public class ReturnManifestSErviceImpl implements ReturnManifestService {
	
	private static Logger log = LoggerFactory.getLogger(ReturnManifestSErviceImpl.class);

	@Autowired
	private ReturnManifestRepository returnManifestRepo;

	@Override
	public ServiceResponse<List<ReturnManifest>> addReturnManifest() {
		
		log.info("adding return manifest report ");
		ServiceResponse<List<ReturnManifest>> response = new ServiceResponse<>();
		try {
			CSVReader reader = new CSVReader(new FileReader("mbb-reports/Return+Manifest_30112018.csv"), ',');

			List<ReturnManifest> returnManifestList = new ArrayList<>();

			String[] record = null;
			Iterator<String[]> rowIterator = reader.iterator();

			rowIterator.toString();

			while ((record = reader.readNext()) != null) {

				ReturnManifest returnManifest = new ReturnManifest();

				returnManifest.setReturnManifestCode(record[0]);
				returnManifest.setReturnManifestStatus(record[1]);
				returnManifest.setCreatedBy(record[2]);
				returnManifest.setCreatedAt(record[3]);
				returnManifest.setShippingPackageCode(record[4]);
				returnManifest.setTrackingNumber(record[5]);

				returnManifest.setSaleOrderCode(record[6]);
				returnManifest.setCustomerName(record[7]);
				returnManifest.setCustomerEmail(record[8]);
				returnManifest.setShippingPackageStatus(record[9]);
				returnManifest.setReshipmentAction(record[10]);
				if (record[11] != null && record[11].length() > 0) {
					String dispatchTime = record[11];
					DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy-MMM-dd");
					LocalDateTime dt = LocalDateTime.parse(dispatchTime, dtf);

					returnManifest.setDispatchTime(dt);
				}
				returnManifest.setShippingProvider(record[12]);
				returnManifest.setUpdatedAt(record[13]);
				returnManifest.setChannelName(record[14]);
				LocalDateTime dateTime = LocalDateTime.now();
				returnManifest.setCreatedDate(dateTime);
				returnManifest.setUpdatedDate(dateTime);
				LocalDateTime datetime = LocalDateTime.now();
				returnManifest.setDateInCSvfile(datetime);
				returnManifestRepo.save(returnManifest);
				returnManifestList.add(returnManifest);

			}

			response.setData(returnManifestList);

			reader.close();
		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS017.name(), EnumTypeForErrorCodes.SCUS017.errorMsg());
		}

		return response;
	}

}

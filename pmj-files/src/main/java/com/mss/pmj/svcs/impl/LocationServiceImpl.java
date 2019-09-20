package com.mss.pmj.svcs.impl;

import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.mss.pmj.common.EnumTypeForErrorCodes;
import com.mss.pmj.common.Utils;
import com.mss.pmj.domain.Channel;
import com.mss.pmj.domain.Location;
import com.mss.pmj.model.ServiceResponse;
import com.mss.pmj.repos.ChannelRepository;
import com.mss.pmj.repos.LocationRepository;
import com.mss.pmj.svcs.LocationService;
import com.opencsv.CSVReader;
import com.opencsv.CSVWriter;

@Service
public class LocationServiceImpl implements LocationService {

	private static Logger log = LoggerFactory.getLogger(LocationServiceImpl.class);

	@Autowired
	private Utils utils;

	@Autowired
	private LocationRepository locationRepo;

	@Autowired
	private ChannelRepository channelRepo;

	@Value("${logFileUploadPath}")
	private String logFileUploadPath;

	@Value("${sampleFilesPath}")
	private String sampleFilesPath;

	@Override
	public ServiceResponse<UploadErrors> addLocation(String filePath) throws IOException {
		log.info("save locationData service implementation");

		CSVReader reader = null;
		ServiceResponse<UploadErrors> response = new ServiceResponse<>();
		ArrayList<String[]> errorList = new ArrayList<>();
		String[] header = null;
		try {
			File file = new File(filePath);
			reader = new CSVReader(new FileReader(file), ',');
			CSVWriter exceptionFile = new CSVWriter(
					new FileWriter(logFileUploadPath + file.getName() + "-errors.csv", true));
			header = reader.readNext();
			String[] record = null;
			while ((record = reader.readNext()) != null) {
				StringBuilder exceptions = new StringBuilder();
				Location locationObj = locationRepo.findByLocationCode(record[2]);
				if (locationObj != null) {
					locationObj = locationRepo.findByLocationCode(record[2]);
				} else {
					locationObj = new Location();
				}
				if (!record[0].isEmpty()) {
					locationObj.setLocationId(Long.parseLong(record[0]));
					if (!record[1].isEmpty()) {
						locationObj.setCompanyName(record[1]);
						if (!record[2].isEmpty()) {
							locationObj.setLocationCode(record[2]);
							if (!record[3].isEmpty()) {
								locationObj.setLocationName(record[3]);
								if (!record[6].isEmpty()) {

									locationObj.setState(record[6]);
									if (!record[4].isEmpty()) {

										Channel channel = channelRepo.findByChannelName(record[4]);
										locationObj.setChannel(channel);
										if (channel != null) {
											if (record[4].equals("D2H")) {
												if (record[5] != null && !record[5].trim().isEmpty()) {
													locationObj.setCluster(record[5]);
													locationRepo.save(locationObj);
												} else {
													exceptions.append("cluster can't be empty for D2H channel");
												}
											} else {
												locationRepo.save(locationObj);
											}
										} else {
											exceptions.append(record[4]
													+ " channel is not available in database, please add channel");
										}
									} else {
										exceptions.append("channel can't be empty");
									}

								} else {
									exceptions.append("state can't be empty");
								}

							} else {
								exceptions.append("Location name can't be empty");
							}
						} else {
							exceptions.append("Location code can't be empty");
						}

					} else {
						exceptions.append("Company name can't be empty");
					}
				} else {
					exceptions.append("Location id can't be empty");
				}
				if (exceptions.length() != 0) {
					String[] record1 = new String[9];
					for (int i = 0; i < record.length; i++) {
						record1[i] = record[i];
					}
					record1[8] = exceptions.toString();
					errorList.add(record1);
					exceptionFile.writeNext(record1);
				}
			}

			exceptionFile.flush();
			exceptionFile.close();

			if (!errorList.isEmpty()) {
				UploadErrors errors = new UploadErrors();
				errors.setHeaders(header);
				errors.setRecords(errorList);
				response.setCode(-1);
				response.setData(errors);
			}
		} catch (Exception e) {
			response.setError(EnumTypeForErrorCodes.SCUS003.name(), EnumTypeForErrorCodes.SCUS003.errorMsg());
			log.error(utils.toJson(response.getError()), e);
		} finally {
			reader.close();
		}
		return response;
	}

}

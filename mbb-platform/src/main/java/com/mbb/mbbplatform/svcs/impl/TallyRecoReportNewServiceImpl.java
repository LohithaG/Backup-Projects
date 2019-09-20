package com.mbb.mbbplatform.svcs.impl;

import java.io.FileReader;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.RestController;

import com.mbb.mbbplatform.common.EnumTypeForErrorCodes;
import com.mbb.mbbplatform.domain.TallyRecoReportNew;
import com.mbb.mbbplatform.model.ServiceResponse;
import com.mbb.mbbplatform.model.Utils;
import com.mbb.mbbplatform.repos.TallyRecoReportNewRepository;
import com.mbb.mbbplatform.svcs.TallyRecoReportNewService;
import com.opencsv.CSVReader;


@RestController
@Validated
public class TallyRecoReportNewServiceImpl implements TallyRecoReportNewService {
	
	private static Logger log = LoggerFactory.getLogger(TallyRecoReportNewServiceImpl.class);

	@Autowired
	private TallyRecoReportNewRepository tallyRecoReportNewRepository;
	
	@Autowired
	private Utils utils;

	@Override
	public ServiceResponse<List<TallyRecoReportNew>> addTallyRecoReportNew() {
		
		log.info("adding tally reco report new");
		ServiceResponse<List<TallyRecoReportNew>> response = new ServiceResponse<>();
		try {
			CSVReader reader = new CSVReader(new FileReader("mbb-reports/Tally+Reco+report+new_30112018.csv"), ',');

			List<TallyRecoReportNew> tallyRecoReportNewList = new ArrayList<>();

			String[] record = null;
			Iterator<String[]> rowIterator = reader.iterator();

			rowIterator.toString();

			while ((record = reader.readNext()) != null) {
				TallyRecoReportNew tallyRecoReportNew = new TallyRecoReportNew();
				DateTimeFormatter dtf = null;
				LocalDate date = null;
			String settlementDate	=record[0];
			if (settlementDate.contains("-")) {
				dtf = DateTimeFormatter.ofPattern("dd-MM-yyyy");
				date = LocalDate.parse(settlementDate, dtf);
				tallyRecoReportNew.setSettlementDate(date);
			} else {
				dtf = DateTimeFormatter.ofPattern("dd/MM/yyyy");
				date = LocalDate.parse(settlementDate, dtf);
				tallyRecoReportNew.setSettlementDate(date);
			}
				
				
				tallyRecoReportNew.setChannelName(record[1]);
				if (record[2] != null && record[2].length() > 0) {
				tallyRecoReportNew.setSettlementAmount(Double.parseDouble(record[2]));
				}
				tallyRecoReportNew.setTransactionType(record[3]);
				tallyRecoReportNew.setSettlementId(record[4]);
				tallyRecoReportNew.setOrderId(record[5]);
				tallyRecoReportNew.setOrderItemId(record[6]);
				if (record[7] != null && record[7].length() > 0) {
				tallyRecoReportNew.setSellingPrice(Double.parseDouble(record[7]));
				}
				if (record[8] != null && record[8].length() > 0) {
				tallyRecoReportNew.setShippingCharge(Double.parseDouble(record[8]));
				}
				if (record[9] != null && record[9].length() > 0) {
				tallyRecoReportNew.setCommission(Double.parseDouble(record[9]));
				}
				if (record[10] != null && record[10].length() > 0) {
				tallyRecoReportNew.setShippingFee(Double.parseDouble(record[10]));
				}
				if (record[11] != null && record[11].length() > 0) {
				tallyRecoReportNew.setFixedFee(Double.parseDouble(record[11]));
				}
				if (record[12] != null && record[12].length() > 0) {
				tallyRecoReportNew.setReverseShippingFee(Double.parseDouble(record[12]));
				}
				if (record[13] != null && record[13].length() > 0) {
				tallyRecoReportNew.setChannelPenalty(Double.parseDouble(record[13]));
				}
				if (record[14] != null && record[14].length() > 0) {
				tallyRecoReportNew.setRewards(Double.parseDouble(record[14]));
				}
				if (record[15] != null && record[15].length() > 0) {
				tallyRecoReportNew.setDiscount(Double.parseDouble(record[15]));
				}
				if (record[16] != null && record[16].length() > 0) {
				tallyRecoReportNew.setOtherIncentive(Double.parseDouble(record[16]));
				}
				if (record[17] != null && record[17].length() > 0) {
				tallyRecoReportNew.setAdditionalFee(Double.parseDouble(record[17]));
				}
				if (record[18] != null && record[18].length() > 0) {
				tallyRecoReportNew.setTax(Double.parseDouble(record[18]));
				}
				LocalDateTime dateTime = LocalDateTime.now();
				tallyRecoReportNew.setCreatedDate(dateTime);
				tallyRecoReportNew.setUpdatedDate(dateTime);
				LocalDateTime datetime = LocalDateTime.now();
				tallyRecoReportNew.setDateInCSvfile(datetime);
				tallyRecoReportNewRepository.save(tallyRecoReportNew);
				tallyRecoReportNewList.add(tallyRecoReportNew);
			}
			response.setData(tallyRecoReportNewList);

			reader.close();
		} catch (Exception exception) {
			response.setError(EnumTypeForErrorCodes.SCUS034.name(), EnumTypeForErrorCodes.SCUS034.errorMsg());
			 log.error(utils.toJson(response.getError()), exception);
		}

		return response;

	}
}

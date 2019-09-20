package com.mbb.mbbplatform.repos;

import java.util.List;

import javax.validation.constraints.NotNull;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.web.bind.annotation.RequestParam;

import com.mbb.mbbplatform.domain.ZepoSRCodRemittance;

public interface ZepoSRCodRemittanceRepository  extends JpaRepository<ZepoSRCodRemittance, Long>{

ZepoSRCodRemittance findByCrfid(String crfid);

@Query(value = "SELECT * FROM mbbinventory.zeposrcodremittance WHERE created_at >= ?1 AND created_at <= ?2", nativeQuery = true)
List<ZepoSRCodRemittance> findByStartDateAndEndDate(@NotNull String startDate, @NotNull String endDate);


@Query(value = "SELECT * FROM mbbinventory.zeposrcodremittance WHERE created_at >= ?1 AND created_at <= ?2 AND shipping_aggregator = ?3", nativeQuery = true)
List<ZepoSRCodRemittance> findByStartDateAndEndDateAndShippingAggregator(@NotNull String startDate, @NotNull String endDate,@NotNull String shippingAggregator);


@Query(value = "SELECT * FROM mbbinventory.zeposrcodremittance WHERE created_at >= ?1 AND created_at <= ?2 AND status = ?3", nativeQuery = true)
List<ZepoSRCodRemittance> findByStartDateAndEndDateAndStatus(@NotNull String startDate, @NotNull String endDate,@NotNull String status);


@Query(value = "SELECT * FROM mbbinventory.zeposrcodremittance WHERE created_at >= ?1 AND created_at <= ?2 AND shipping_aggregator=?3 AND status=?4", nativeQuery = true )
List<ZepoSRCodRemittance> getCODRemittanceDetails(@NotNull String startDate, @NotNull String endDate  , @NotNull @RequestParam String shippingAggregator, @NotNull @RequestParam String status);

List<ZepoSRCodRemittance> findAllByCrfid(String crfid);

}

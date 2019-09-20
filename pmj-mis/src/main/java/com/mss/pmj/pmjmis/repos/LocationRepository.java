package com.mss.pmj.pmjmis.repos;

import java.util.List;
import java.util.Optional;

import javax.validation.constraints.NotNull;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.mss.pmj.pmjmis.domain.Channel;
import com.mss.pmj.pmjmis.domain.Location;

public interface LocationRepository extends JpaRepository<Location, Long> {

	@Query(value = "SELECT * FROM sales WHERE transaction_date >= ?1 AND transaction_date <= ?2 ", nativeQuery = true)

	List<Location> findByStartDateAndEndDate(@NotNull String startDate, @NotNull String endDate);

	List<Location> findByChannelId(long l);

	List<Location> findByChannel(@NotNull String channel);

	List<Location> findByLocationNameAndChannel(String locationCode, Channel channel);

	@Query(value = "SELECT * FROM location WHERE channel_id = ?1 GROUP BY state", nativeQuery = true)
	List<Location> findByChannelIdGroupByState(long l);

	@Query(value = "SELECT * FROM location WHERE state = ?1 AND channel_id = ?2 GROUP BY cluster", nativeQuery = true)
	List<Location> findbyclusterByStateAndChannel(String state, Channel channel);

	Location findByLocationName(@NotNull String name);

	Location findByLocationCode(@NotNull String locationCode);

	Location findByLocationId(@NotNull Long locationId);

	Optional<Location> findById(@NotNull Long id);

	List<Location> findByChannel(Channel channel);

	List<Location> findByClusterAndChannel(String cluster, Channel channel);

	List<Location> findByClusterAndChannelAndState(String cluster, Channel channel, String stateName);

	List<Location> findByLocationCodeAndChannel(String locationCode, Channel channel);

	List<Location> findByState(String state);

	@Query(value = "SELECT * FROM location WHERE channel_id = ?1 GROUP BY state", nativeQuery = true)
	List<Location> groupByStateAndChannel(Channel channel);

	@Query(value = "SELECT * FROM location WHERE state = ?1 AND channel_id = ?2 GROUP BY cluster", nativeQuery = true)
	List<Location> clusterByStateAndChannel(String state, Channel channel);

	List<Location> findByCluster(String clusterName);

	List<Location> findByStateAndChannel(String state, Channel channel);

	@Query(value = "SELECT * FROM location where id in(SELECT location_id FROM manager_location where manager_id= ?1 ) group by state", nativeQuery = true)
	List<Location> groupByManager(Long managerId);

	@Query(value = "SELECT * FROM location where id in(SELECT location_id FROM manager_location where manager_id= ?2 ) and state = ?1", nativeQuery = true)
	List<Location> groupByStateAndManager(String state, Long managerId);

	List<Location> findByStateAndClusterAndChannel(String state, String cluster, Channel channel);

	@Query(value = "SELECT * FROM location WHERE id in(SELECT location_id FROM manager_location where manager_id= ?4 ) and state = ?1 AND channel_id = ?3 AND cluster = ?2", nativeQuery = true)
	List<Location> locationByStateAndClusterAndChannelAndManager(String state, String clusterName, Channel channel,
			Long managerId);

	@Query(value = "SELECT * FROM location WHERE id in(SELECT location_id FROM manager_location where manager_id= ?3 ) and state = ?1 AND channel_id = ?2 GROUP BY cluster", nativeQuery = true)
	List<Location> clusterByStateAndChannelAndManager(String state, Channel channel, Long managerId);

	@Query(value = "SELECT * FROM location WHERE id in(SELECT location_id FROM manager_location where manager_id= ?2 ) and cluster = ?1 ", nativeQuery = true)
	List<Location> findByClusterAndManager(String cluster, Long managerId);

	@Query(value = "SELECT * FROM location WHERE id in(SELECT location_id FROM manager_location where manager_id= ?2 ) and cluster = ?1 and state = ?3 ", nativeQuery = true)
	List<Location> findByClusterAndManagerAndState(String cluster, Long managerId, String stateName);

	@Query(value = "SELECT * FROM location where id in(SELECT location_id FROM manager_location where manager_id= ?2 ) AND channel_id = ?1 group by state", nativeQuery = true)
	List<Location> groupByChannelandManger(Channel channel, Long managerId);

	/**
	 * rolebased
	 */
	@Query(value = "SELECT * FROM location where id in(SELECT location_id FROM manager_location where manager_id= ?1 ) and channel_id = ?2 group by state", nativeQuery = true)
	List<Location> groupByManagerAndChannel(Long managerId, Channel channel);

	@Query(value = "SELECT * FROM location where id in(SELECT location_id FROM manager_location where manager_id= ?2 ) and state = ?1 and channel_id = ?3", nativeQuery = true)
	List<Location> groupByStateAndManagerAndChannel(String state, Long managerId, Channel channel);

	List<Location> findByClusterAndState(String cluster, String state);

	@Query(value = "SELECT * FROM location WHERE id in(SELECT location_id FROM manager_location where manager_id= ?2 ) and cluster = ?1 and state = ?3 and channel_id = ?4 ", nativeQuery = true)
	List<Location> findByClusterAndManagerAndStateAndChannel(String cluster, Long managerId, String stateName,
			Channel channel);

	@Query(value = "SELECT * FROM location where id in(SELECT location_id FROM manager_location where manager_id= ?1 ) AND channel_id = ?2", nativeQuery = true)
	List<Location> findByManagerAndChannel(Long managerId, Channel channel);

}

package com.mss.solar.core.repos;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.mss.solar.core.domain.Notification;

@Transactional
public interface NotificationRepository extends JpaRepository<Notification,Integer>{

	@Query(value ="SELECT * FROM notification_tbl  where from_id=?1 and to_id=?2 or from_id=?2 and to_id=?1 order by date_notified",nativeQuery = true)
	List<Notification> getAllNotifications(long userid,String driveId);
}

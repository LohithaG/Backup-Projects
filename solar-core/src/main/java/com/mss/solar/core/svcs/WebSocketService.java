package com.mss.solar.core.svcs;

import com.mss.solar.core.domain.Notification;

public interface WebSocketService {
	
	public void sendChannelNotifications(String userID, String channelType, String notificationMessage);

	public void websocketNotificationCount(String userID, Integer notificationCOunt);
	
	public void sendChatMessage(String userId,String driverId,
			Notification notificationData);
}

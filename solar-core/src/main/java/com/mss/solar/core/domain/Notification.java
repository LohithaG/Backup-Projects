package com.mss.solar.core.domain;

import java.io.Serializable;
import java.time.ZonedDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * Notification entity
 */
@Entity
@Table(name = "notification_tbl")
public class Notification implements Serializable {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "id")
	private Integer id;
	@Column(name = "from_id")
	private String from_id;
	@Column(name = "to_id")
	private String to_id;
	@Column(name = "username")
	private String userName;
	@Column(name = "primary_item_id")
	private String primaryItemId;
	@Column(name = "secondary_item_id")
	private String secondaryItemId;
	@Column(name = "channel")
	private String channel;
	@Column(name = "to_component_name")
	private String toComponentName;
	@Column(name = "from_component_name")
	private String fromComponentName;
	@Column(name = "component_action")
	private String componentAction;
	@Column(name = "data")
	private String data;
	@Column(name = "date_notified")
	private ZonedDateTime dateNotified;
	@Column(name = "date_received")
	private ZonedDateTime dateReceived;
	@Column(name = "is_new")
	private Integer isNew;

	public Notification() {
		/**
		 * zero argument constructor
		 */
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getFrom_id() {
		return from_id;
	}

	public void setFrom_id(String from_id) {
		this.from_id = from_id;
	}

	public String getTo_id() {
		return to_id;
	}

	public void setTo_id(String to_id) {
		this.to_id = to_id;
	}

	public String getPrimaryItemId() {
		return primaryItemId;
	}

	public void setPrimaryItemId(String primaryItemId) {
		this.primaryItemId = primaryItemId;
	}

	public String getSecondaryItemId() {
		return secondaryItemId;
	}

	public void setSecondaryItemId(String secondaryItemId) {
		this.secondaryItemId = secondaryItemId;
	}

	public String getChannel() {
		return channel;
	}

	public void setChannel(String channel) {
		this.channel = channel;
	}

	public String getToComponentName() {
		return toComponentName;
	}

	public void setToComponentName(String toComponentName) {
		this.toComponentName = toComponentName;
	}

	public String getFromComponentName() {
		return fromComponentName;
	}

	public void setFromComponentName(String fromComponentName) {
		this.fromComponentName = fromComponentName;
	}

	public String getComponentAction() {
		return componentAction;
	}

	public void setComponentAction(String componentAction) {
		this.componentAction = componentAction;
	}

	public String getData() {
		return data;
	}

	public void setData(String data) {
		this.data = data;
	}

	public ZonedDateTime getDateNotified() {
		return dateNotified;
	}

	public void setDateNotified(ZonedDateTime dateNotified) {
		this.dateNotified = dateNotified;
	}

	public ZonedDateTime getDateReceived() {
		return dateReceived;
	}

	public void setDateReceived(ZonedDateTime dateReceived) {
		this.dateReceived = dateReceived;
	}

	public Integer getIsNew() {
		return isNew;
	}

	public void setIsNew(Integer isNew) {
		this.isNew = isNew;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}
}

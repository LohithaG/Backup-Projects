package com.mbb.pdcautomation.model;

/**
 * This model class to store status, message information which are required to
 * send after creating product data
 *
 */
public class ResponseData {
	private String status;
	private String message;

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

}

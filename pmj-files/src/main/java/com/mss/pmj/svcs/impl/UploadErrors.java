package com.mss.pmj.svcs.impl;

import java.util.List;

public class UploadErrors {
	private int totalRecords;
	private String[] headers;
	private List<String[]> records;

	public int getTotalRecords() {
		return totalRecords;
	}

	public void setTotalRecords(int totalRecords) {
		this.totalRecords = totalRecords;
	}

	public String[] getHeaders() {
		return headers;
	}

	public void setHeaders(String[] headers) {
		this.headers = headers;
	}

	public List<String[]> getRecords() {
		return records;
	}

	public void setRecords(List<String[]> records) {
		this.records = records;
	}

}

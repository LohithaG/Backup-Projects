package com.mbb.pdcautomation.model;

/**
 * ServiceDataBean Model class
 */
public class ServiceDataBean<T> extends ResponseData {

	public T getData() {
		return data;
	}

	public void setData(T data) {
		this.data = data;
	}

	private T data;
}

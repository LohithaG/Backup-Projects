package com.mss.pmj.pmjmis.response;

import com.mss.pmj.pmjmis.model.Error;

public class CostPricetoTagResponse<T>{

	
	private int status;

	private String message;

	private String fromDate;

	private String toDate;

	private T data;

	private Error error;

	public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public String getFromDate() {
		return fromDate;
	}

	public void setFromDate(String fromDate) {
		this.fromDate = fromDate;
	}

	public String getToDate() {
		return toDate;
	}

	public void setToDate(String toDate) {
		this.toDate = toDate;
	}

	public T getData() {
		return data;
	}

	public void setData(T data) {
		this.data = data;
	}

	public Error getError() {
		return error;
	}

	public void setError(Error error) {
		this.error = error;
	}

	public void setError(String code, String message) {
		Error error = new Error();
		error.setCode(code);
		error.setMessage(message);
		setError(error);
	}

}



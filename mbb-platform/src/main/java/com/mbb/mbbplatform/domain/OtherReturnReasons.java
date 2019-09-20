package com.mbb.mbbplatform.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "otherreturnreasons")
public class OtherReturnReasons {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	private String reason;
	
	@OneToOne
	@JoinColumn(name = "dispatchId")
	private Dispatch dispatchId;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getReason() {
		return reason;
	}

	public void setReason(String reason) {
		this.reason = reason;
	}

	public Dispatch getDispatchId() {
		return dispatchId;
	}

	public void setDispatchId(Dispatch dispatchId) {
		this.dispatchId = dispatchId;
	}


}

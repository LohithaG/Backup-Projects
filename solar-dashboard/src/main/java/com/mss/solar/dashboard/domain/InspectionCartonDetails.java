package com.mss.solar.dashboard.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "inspectioncartondetails")
public class InspectionCartonDetails {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	@ManyToOne
	@JoinColumn(name = "cartons")
	private CartonDetails cartons;

	@ManyToOne
	@JoinColumn(name = "cartonstatus")
	private CartonStatus cartonstatus;

	@ManyToOne
	@JoinColumn(name = "inspectionId")
	private Inspection inspection;

	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public CartonDetails getCartons() {
		return cartons;
	}

	public void setCartons(CartonDetails cartons) {
		this.cartons = cartons;
	}

	public CartonStatus getCartonstatus() {
		return cartonstatus;
	}

	public void setCartonstatus(CartonStatus cartonstatus) {
		this.cartonstatus = cartonstatus;
	}

	public Inspection getInspection() {
		return inspection;
	}

	public void setInspection(Inspection inspection) {
		this.inspection = inspection;
	}


}

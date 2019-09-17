package com.mss.solar.dashboard.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "damageimages")
public class DamageImages {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	@Column(columnDefinition = "LONGTEXT")
	private String damageImage;

	@ManyToOne
	@JoinColumn(name = "cartonException")
	private CartonException cartonException;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getDamageImage() {
		return damageImage;
	}

	public void setDamageImage(String damageImage) {
		this.damageImage = damageImage;
	}

	public CartonException getCartonException() {
		return cartonException;
	}

	public void setCartonException(CartonException cartonException) {
		this.cartonException = cartonException;
	}

}

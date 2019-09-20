package com.mbb.mbbplatform.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "transportation")
public class Transportation {

@Id
@GeneratedValue(strategy = GenerationType.AUTO)
private long id;

private String transportType;

public long getId() {
return id;
}

public void setId(long id) {
this.id = id;
}

public String getTransportType() {
return transportType;
}

public void setTransportType(String transportType) {
this.transportType = transportType;
}

}